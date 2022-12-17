import { useEffect, useState } from "react";

const useScrollHitBottom = () => {
   const [isBottomHit, setIsBottomHit] = useState(false);

   useEffect(() => {
      window &&
         window.addEventListener("scroll", function () {
            const scrollPosition = window.pageYOffset + window.innerHeight;
            const bodyHeight =
               document && document.getElementsByTagName("body")[0].clientHeight;
            if (bodyHeight === scrollPosition) {
               setIsBottomHit(true);
            } else setIsBottomHit(false);
         });
   }, []);

   return isBottomHit;
};

export default useScrollHitBottom;
