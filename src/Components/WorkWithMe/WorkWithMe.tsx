import { appTheme } from "../../Util/appTheme";
import tinycolor from "tinycolor2";
import { useCurrentThemeStore } from "../../Store/useCurrentThemeStore";
import {
  useRightBarOpenStore,
  useRightBarRefStore,
} from "../../Store/useRightBarOpenStore";
import { LuArrowRight } from "react-icons/lu";

const WorkWithMe = () => {
  const currentTheme = useCurrentThemeStore((state) => state.currentTheme);
  const rightBar = useRightBarOpenStore((state: any) => state.rightBarOpen);
  const setRightBar = useRightBarOpenStore(
    (state: any) => state.setRightBarOpen
  );
  const rightBarRef = useRightBarRefStore((state) => state.rightBarRef);

  const appColor = appTheme[currentTheme].app_color_1;

  const darkenColor = (hex: string, percent: number) => {
    const color = tinycolor(hex);
    return color.darken(percent).toString();
  };
  const darkenedColor = darkenColor(appColor, 5);

  const toggleRightBar = () => {
    if (rightBarRef && rightBarRef.current) {
      rightBarRef.current.style.transition = "left 0.3s ease-in-out";
    }
    setRightBar(!rightBar);
    setTimeout(() => {
      if (rightBarRef && rightBarRef.current) {
        rightBarRef.current.style.transition = "none";
      }
    }, 300);
  };

  return (
    <div
      onClick={toggleRightBar}
      data-theme={appColor}
      style={
        {
          "--theme-color": appColor,
          "--theme-color-dark": darkenedColor,
          transition: "background-color 0.2s ease-in-out, scale 0.3s ease-in-out",
        } as React.CSSProperties
      }
      className={`hover:scale-[1.03] z-[801] bg-[var(--theme-color)] hover:bg-[var(--theme-color-dark)] cursor-pointer flex flex-col w-[160px] h-[84px] rounded-[6px] fixed lg:top-[47px] bottom-[40px] right-[35px] lg:right-[55px] justify-center text-white font-[700] pl-[26px]`}
    >
      <p className="text-[26px] leading-[38px] mt-[-6px]">Work</p>
      <div className="absolute left-0 w-[86%] h-[2.5px] bg-white"></div>
      <LuArrowRight className="absolute left-[73%] h-[29px] w-[29px] pb-[0.5px]" />
      <p className="text-[25px] leading-[33px]">with me</p>
    </div>
  );
};

export default WorkWithMe;
