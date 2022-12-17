import {
   initialResult,
   SearchResultType,
   SearchTypeEnum,
} from "@/utils/api/search";
import axios from "axios";
import { debounce } from "lodash";

export type ActionType = { type: string; payload?: any };

export type SearchStateType = {
   keyword: string;
   type: SearchTypeEnum | null;
   result: SearchResultType;
   isLoading: boolean;
};

export const initialSearchState = {
   keyword: "",
   type: SearchTypeEnum.track,
   result: initialResult,
   isLoading: false,
};

export enum SearchActionsEnum {
   UPDATE_KEYWORD = "UPDATE_KEYWORD",
   UPDATE_TYPE = "UPDATE_TYPE",
   UPDATE_RESULT = "UPDATE_RESULT",
   SET_ISLOADING = "SET_ISLOADING",
   INIT_RESULT = "INIT_RESULT",
   INIT_STATE = "INIT_STATE"
}

const searchReducer = (
   state: SearchStateType,
   action: ActionType
): SearchStateType => {
   const { type, payload } = action;
   switch (type) {
      case SearchActionsEnum.UPDATE_KEYWORD:
         return { ...state, keyword: payload };
      case SearchActionsEnum.UPDATE_TYPE:
         return { ...state, type: payload };
      case SearchActionsEnum.UPDATE_RESULT:
         return { ...state, result: payload, isLoading: false };
      case SearchActionsEnum.SET_ISLOADING:
         return { ...state, isLoading: payload };
      case SearchActionsEnum.INIT_RESULT:
         return { ...state, result: initialResult };
      case SearchActionsEnum.INIT_STATE:
         return initialSearchState;
      default:
         return state;
   }
};

const debounceKeyword = debounce(
   (dispatch: (action: ActionType) => void, keyword: string) => {
      dispatch({ type: SearchActionsEnum.UPDATE_KEYWORD, payload: keyword });
   },
   300
);

const getFistResult = async (
   dispatch: (action: ActionType) => void,
   searchState: SearchStateType
) => {
   dispatch({ type: SearchActionsEnum.SET_ISLOADING, payload: true });
   const { data: result } = await axios.get(
      `/api/search/${searchState.type}?q=${searchState.keyword}`
   );
   if (!!result?.data?.length) {
      dispatch({ type: SearchActionsEnum.UPDATE_RESULT, payload: result });
   }
};

const getNextResult = async (
   dispatch: (action: ActionType) => void,
   searchState: SearchStateType
) => {
   dispatch({ type: SearchActionsEnum.SET_ISLOADING, payload: true });
   const { data: result } = await axios.get(
      `/api/search/${searchState.type}?q=${searchState.keyword}&index=${searchState.result?.nextPageIndex}`
   );
   if (!!result.data.length) {
      dispatch({
         type: SearchActionsEnum.UPDATE_RESULT,
         payload: {
            data: searchState.result.data.concat(result.data),
            nextPageIndex: result.nextPageIndex,
            total: result.total,
         },
      });
   }
};

const updateKeyword = (
   dispatch: (action: ActionType) => void,
   keyword: string
) => {
   debounceKeyword(dispatch, keyword);
};

const updateSearchType = (
   dispatch: (action: ActionType) => void,
   type: SearchTypeEnum
) => {
   dispatch({ type: SearchActionsEnum.UPDATE_TYPE, payload: type });
};

const fetchResult = async (
   dispatch: (action: ActionType) => void,
   searchState: SearchStateType,

) => {
   if (!searchState?.result?.data?.length) {
      await getFistResult(dispatch, searchState);
   }
   if (
      !!searchState.result?.nextPageIndex &&
      !!searchState.result?.data.length
   ) {
      await getNextResult(dispatch, searchState);
   }
};

const initSearchState = (dispatch: (action: ActionType) => void) => {
   dispatch({ type: SearchActionsEnum.INIT_RESULT });
};

export const searchMethods = {
   updateKeyword,
   updateSearchType,
   fetchResult,
   initSearchState
}

export default searchReducer;
