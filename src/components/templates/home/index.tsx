import Genre from "@/utils/models/genre";
import View from "./view";

export type HomeProps = {
  genres: Genre[];
};

const Home = (props: HomeProps) => {
  return <View {...props} />;
};

export default Home;
