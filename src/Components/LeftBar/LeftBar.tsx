import {
  useLeftBarOpenStore,
  useLeftBarRefStore,
} from "../../Store/useLeftBarOpenStore";
import { RefObject, useEffect, useRef, useState } from "react";
import { appTheme } from "../../Util/appTheme";
import { useCurrentThemeStore } from "../../Store/useCurrentThemeStore";
import { RiHomeFill } from "react-icons/ri";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaFaceMehBlank } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { useScrollToStore, useScrollToTriggerStore } from "../../Store/useScrollToStore";
import { motion } from "framer-motion";

const LeftBar = () => {
  const currentTheme = useCurrentThemeStore((state) => state.currentTheme);
  const leftBar = useLeftBarOpenStore((state: any) => state.leftBarOpen);
  const setLeftBar = useLeftBarOpenStore((state: any) => state.setLeftBarOpen);
  const [showModal1, setShowModal1] = useState<boolean>(false);
  const modal1Ref = useRef<HTMLDivElement>(null);

  const leftBarRef = useRef<HTMLDivElement>(null);
  const setLeftBarRef = useLeftBarRefStore((state) => state.setLeftBarRef);

  const setScrollToSection = useScrollToStore((state) => state.setScrollTo);
  const scrollToSection = useScrollToStore((state) => state.scrollTo);
  const setScrollToTrigger = useScrollToTriggerStore((state) => state.setScrollTo);
  const scrollToTrigger = useScrollToTriggerStore((state) => state.scrollTo);

  useEffect(() => {
    setLeftBarRef(leftBarRef as RefObject<HTMLDivElement>);
  }, [setLeftBarRef, leftBarRef]);

  // MODAL 1
  // Global State -> Set local state -> Trigger fade in
  useEffect(() => {
    if (leftBar) {
      setShowModal1(true);
    } else {
      if (modal1Ref.current) {
        modal1Ref.current.style.opacity = "0";
        modal1Ref.current.style.backgroundColor = "transparent";
        //   modal1Ref.current.style.backdropFilter = "none";
        //   modal1Ref.current.style.setProperty("-webkit-backdrop-filter", "none");
      }
      setTimeout(() => {
        setShowModal1(false);
      }, 500);
    }
  }, [leftBar]);

  // Local State -> Trigger fade out
  useEffect(() => {
    if (showModal1) {
      requestAnimationFrame(() => {
        if (modal1Ref.current) {
          modal1Ref.current.style.opacity = "1";
          modal1Ref.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          // modal1Ref.current.style.backdropFilter = "blur(0.5px)";
          // modal1Ref.current.style.setProperty(
          //   "-webkit-backdrop-filter",
          //   "blur(0.5px)"
          // );
        }
      });
    }
  }, [showModal1]);

  const toggleLeftBar = () => {
    if (leftBarRef && leftBarRef.current) {
      leftBarRef.current.style.transition = "right 0.3s ease-in-out";
    }
    setLeftBar(false);
    setTimeout(() => {
      if (leftBarRef && leftBarRef.current) {
        leftBarRef.current.style.transition = "none";
      }
    }, 300);
  };

  type TabTypes = "Home" | "Projects" | "About Me";
  const Tabs = ["Home", "Projects", "About Me"];
  const [activeHoveredTab, setActiveHoveredTab] = useState<TabTypes | null>(
    null
  );

  return (
    <>
      <div className="pointer-events-none w-[calc(125px+14vw)] h-[100vh] z-[811] left-0 top-0 fixed">
        <div
          ref={leftBarRef}
          style={{
            color: appTheme[currentTheme].text_1,
          }}
          className={`bg-white md:bg-white/38 pointer-events-auto ${
            leftBar ? "md:right-0 right-0" : "md:right-0 right-[100%]"
          } w-[calc(125px+14vw)] h-[100vh] min-h-[650px] lg:min-h-[750px] xl:min-h-[850px] top-0 absolute`}
        >
          <motion.div 
            initial={{opacity: 0}}
            animate={{opacity:1}}
            transition={{duration: 0.6, delay: 0.1}}
          className="w-full aspect-[1/1] p-[15%]">
            <div className="w-full aspect-[1/1] rounded-full overflow-hidden">
              <img
                alt=""
                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--headshot4.webp"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <div className="w-[100%] mb-[20px] text-center mt-[-15px]">
            <p className="font-[500] text-black text-[20px] mb-[5px]">Joseph Goff</p>
            <p className="font-[300] text-black text-[18px] mb-[4px]">Full-Stack Developer</p>
            <p className="font-[300] text-[#555] text-[16px] leading-[15px]">Boston, MA</p>
          </div>

          <div className="w-full px-[15%] pt-[20px] flex flex-col gap-[15px]">
            {Tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setScrollToSection(index);
                    const scrollToTriggerCopy = scrollToTrigger + 1
                    setScrollToTrigger(scrollToTriggerCopy)
                  }}
                  onMouseEnter={() => setActiveHoveredTab(tab as TabTypes)}
                  onMouseLeave={() => setActiveHoveredTab(null)}
                  className="select-none relative pl-[calc(43px+2vw)] h-[calc(32px+2vw)] flex flex-row gap-[9%] cursor-pointer items-center"
                >
                  <div className="absolute left-0 top-0 aspect-[1/1] h-full flex items-center justify-center">
                    <div
                      style={{ transition: "scale 0.3s ease-in-out" }}
                      className={`relative will-change-transform ${
                        scrollToSection === index ? "scale-100" : "scale-[80%]"
                      } aspect-[1/1] h-[100%]`}
                    >
                      {tab === "Home" && (
                        <>
                          <RiHomeFill
                            className="w-full h-full"
                            color={
                              scrollToSection === index
                                ? appTheme["light"].app_color_1
                                : "black"
                            }
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center gap-[6%] pt-[12%]">
                            <div className="w-full aspect-[9/1] gap-[5%] flex flex-row justify-center items-center">
                              <div className="aspect-[1/1] h-full bg-white rounded-full" />
                              <div className="aspect-[1/1] h-full bg-white rounded-full" />
                              <div className="aspect-[1/1] h-full bg-white rounded-full" />
                            </div>

                            <div className="w-full aspect-[9/1] gap-[5%] flex flex-row justify-center items-center">
                              <div className="aspect-[1/1] h-full bg-white rounded-full" />
                              <div className="aspect-[1/1] h-full bg-white rounded-full" />
                              <div className="aspect-[1/1] h-full bg-white rounded-full" />
                            </div>
                          </div>
                        </>
                      )}
                      {tab === "Projects" && (
                        <BiSolidBinoculars
                          className="w-full h-full"
                          color={
                            scrollToSection === index
                              ? appTheme["light"].app_color_1
                              : "black"
                          }
                        />
                      )}

                      {tab === "About Me" && (
                        <div className="w-full h-full px-[0.5vw]">
                          <FaFaceMehBlank
                            className="w-full h-full"
                            color={
                              scrollToSection === index
                                ? appTheme["light"].app_color_1
                                : "black"
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className="h-[calc(30px+2vw)] rounded-[8%]"
                    style={{
                      backgroundColor:
                        tab === activeHoveredTab || scrollToSection === index
                          ? appTheme["light"].app_color_1
                          : "transparent",
                      transition: "background-color 0.1s ease-in-out",
                    }}
                  >
                    <div
                      style={{
                        color:
                          tab === activeHoveredTab || scrollToSection === index
                            ? appTheme["light"].app_color_1
                            : "black",
                        transition: "0.1s ease-in-out",
                      }}
                      className={`${
                        tab === activeHoveredTab || scrollToSection === index
                          ? "ml-[2.5px] px-[calc(5px+0.9vw)] bg-gray-200 rounded-[5px] text-[calc(13px+1vw)]"
                          : "text-[calc(12px+1vw)]"
                      } h-[calc(30px+2vw)] whitespace-nowrap flex items-center justify-center font-extrabold`}
                    >
                      {tab}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-[55px] left-0 w-full flex flex-col gap-[11px]">
            <div className="flex flex-row h-[45px] w-full justify-center gap-[8px]">
              <AiFillInstagram
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/joseph.goff/";
                }}
                className="h-full w-auto p-[1px] hover:scale-[1.2] cursor-pointer"
                style={{ transition: "scale 0.25s ease-in-out" }}
              />
              <FaLinkedin
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/joseph-goff-a40b3522b/";
                }}
                className="h-full w-auto p-[3px] hover:scale-[1.2] cursor-pointer"
                style={{ transition: "scale 0.25s ease-in-out" }}
              />
            </div>
            <div className="flex flex-row h-[45px] w-full justify-center gap-[7px] ml-[-4px]">
              <FaTiktok
                onClick={() => {}}
                className="h-full w-auto p-[5px] hover:scale-[1.2] cursor-pointer"
                style={{ transition: "scale 0.25s ease-in-out" }}
              />
              <IoLogoGithub
                onClick={() => {
                  window.location.href = "https://github.com/josephgoff-git";
                }}
                className="h-full w-auto p-[2px] ml-[-2px] hover:scale-[1.2] cursor-pointer"
                style={{ transition: "scale 0.25s ease-in-out" }}
              />
            </div>
          </div>
        </div>
      </div>

      {showModal1 && (
        <div className="flex md:hidden w-full h-full fixed z-[810] top-0 left-0">
          <div
            ref={modal1Ref}
            onClick={toggleLeftBar}
            className="absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center"
            style={{
              opacity: 0,
              transition:
                "opacity 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out, -webkit-backdrop-filter 0.5s ease-in-out, background-color 0.5s ease-in-out",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default LeftBar;
