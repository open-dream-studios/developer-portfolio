import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { appTheme } from "../../Util/appTheme";
import {
  useLeftBarOpenStore,
  useLeftBarRefStore,
} from "../../Store/useLeftBarOpenStore";
// import { LuSun } from "react-icons/lu";
// import { IoMoonOutline } from "react-icons/io5";
import appDetails from "../../Util/appDetails.json";
import { useCurrentThemeStore } from "../../Store/useCurrentThemeStore";
import { motion } from "framer-motion";

const Navbar = () => {
  const currentTheme = useCurrentThemeStore((state) => state.currentTheme);
  // const setCurrentTheme = useCurrentThemeStore(
  //   (state) => state.setCurrentTheme
  // );

  const leftBarOpen = useLeftBarOpenStore((state: any) => state.leftBarOpen);
  const setLeftBarOpen = useLeftBarOpenStore(
    (state: any) => state.setLeftBarOpen
  );
  const leftBarRef = useLeftBarRefStore((state) => state.leftBarRef);

  const toggleLeftBar = () => {
    if (leftBarRef && leftBarRef.current) {
      leftBarRef.current.style.transition = "right 0.3s ease-in-out";
    }
    setLeftBarOpen(!leftBarOpen);
    setTimeout(() => {
      if (leftBarRef && leftBarRef.current) {
        leftBarRef.current.style.transition = "none";
      }
    }, 300);
  };

  // const handleThemeChange = () => {
  //   setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  // };

  return (
    <div
      className="w-[100vw] h-[70px] fixed top-0 left-0 flex md:hidden z-[700]"
      style={{
        backgroundColor: appTheme[currentTheme].background_1,
      }}
    >
      <div className="w-[100%] h-[100%] absolute flex justify-between items-center">
        <motion.div
          initial={{ pointerEvents: "none" }}
          animate={{ pointerEvents: "all" }}
          transition={{ delay: 1 }}
          className="flex flex-row items-center px-[18px]"
        >
          <HiBars3
            onClick={() => {
              toggleLeftBar();
            }}
            className="w-[30px] dim cursor-pointer lg:hidden hover:brightness-75"
            color={appTheme[currentTheme].text_1}
            fontSize={29}
          />
          <Link to="/" className="flex flex-row gap-[5px] items-center">
            {currentTheme === "dark" ? (
              <img
                src="/assets/logo-white.png"
                alt="logo"
                className="hidden lg:block select-none ml-[3px] w-[22px] h-[22px] object-cover"
              />
            ) : (
              <img
                src="/assets/logo-black.png"
                alt="logo"
                className="hidden lg:block select-none ml-[3px] w-[22px] h-[22px] object-cover"
              />
            )}
            <p
              className="dim select-none text-[23px] font-[700] ml-[10px] hover:brightness-75"
              style={{
                color: appTheme[currentTheme].text_1,
              }}
            >
              {appDetails.project_name}
            </p>
          </Link>
        </motion.div>

        {/* <div className="h-[100%] mr-[10px] pr-[2px] flex flex-row items-center gap-[18px]">
          <div
            className="dim cursor-pointer hover:brightness-75"
            onClick={handleThemeChange}
          >
            {currentTheme === "dark" ? (
              <LuSun
                size={23}
                title="Light Mode"
                className=""
                color={appTheme[currentTheme].text_1}
              />
            ) : (
              <IoMoonOutline
                size={23}
                title="Dark Mode"
                className=""
                color={appTheme[currentTheme].text_1}
              />
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
