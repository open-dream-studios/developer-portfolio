import {
  useRightBarOpenStore,
  useRightBarRefStore,
} from "../../Store/useRightBarOpenStore";
import { RefObject, useEffect, useRef, useState } from "react";
import { appTheme } from "../../Util/appTheme";
import { useCurrentThemeStore } from "../../Store/useCurrentThemeStore";
import { LuArrowLeft } from "react-icons/lu";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RightBar = () => {
  const currentTheme = useCurrentThemeStore((state) => state.currentTheme);
  const rightBar = useRightBarOpenStore((state: any) => state.rightBarOpen);
  const setRightBar = useRightBarOpenStore(
    (state: any) => state.setRightBarOpen
  );
  const [showModal1, setShowModal1] = useState<boolean>(false);
  const modal1Ref = useRef<HTMLDivElement>(null);

  const rightBarRef = useRef<HTMLDivElement>(null);
  const setRightBarRef = useRightBarRefStore((state) => state.setRightBarRef);

  useEffect(() => {
    setRightBarRef(rightBarRef as RefObject<HTMLDivElement>);
  }, [setRightBarRef, rightBarRef]);

  // MODAL 1
  // Global State -> Set local state -> Trigger fade in
  useEffect(() => {
    if (rightBar) {
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
  }, [rightBar]);

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

  const toggleRightBar = () => {
    if (rightBarRef && rightBarRef.current) {
      rightBarRef.current.style.transition = "left 0.3s ease-in-out";
    }
    setRightBar(false);
    setTimeout(() => {
      if (rightBarRef && rightBarRef.current) {
        rightBarRef.current.style.transition = "none";
      }
    }, 300);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfrGnucImpj_CwDDW9zi5OzMIdEZtljyzMGdtp2QZ5Eer1EuA/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.1684877195", formData.email);
    formDataToSend.append("entry.216031564", formData.name);
    formDataToSend.append("entry.1260060053", formData.message);

    fetch(formURL, {
      method: "POST",
      body: formDataToSend,
    })
      .then(() => {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error)
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  const handleSendNewEmailClick = () => {
    const sendEmail = "joeygoff13@gmail.com";
    window.location.href = `mailto:${sendEmail}`;
  };

  // Use Share URL, but replace end with /formResponse
  // To get entries, click ... prefill form, then prefill tabs, submit, and copy link to get entries
  // Enable responses in responses => enable email

  return (
    <>
      <div className="pointer-events-none w-[100vw] md:w-[calc(300px+14vw)] h-[100vh] z-[821] right-0 top-0 fixed">
        <div
          ref={rightBarRef}
          style={{
            backgroundColor: appTheme[currentTheme].background_1,
            color: appTheme[currentTheme].text_1,
          }}
          className={`pointer-events-auto ${
            rightBar ? "left-0" : "left-[100%]"
          } px-[60px] sm:px-[90px] md:px-[32px] pt-[26px] w-[100vw] md:w-[calc(300px+14vw)] min-h-[700px] sm:min-h-[780px] h-[100vh] top-0 absolute`}
        >
          <div
            style={{ transition: "width 0.2s ease-in-out" }}
            onClick={toggleRightBar}
            className="flex flex-row cursor-pointer w-[95px] hover:w-[100px] absolute right-[calc(100%-32px-95px)]"
          >
            <div
              className={`bg-black flex flex-col w-[34px] h-[34px] rounded-[5px] relative justify-center text-white font-[700] pb-[0.5px]`}
            >
              <div className="absolute right-0 w-[60%] h-[2.5px] bg-white"></div>
              <LuArrowLeft className="absolute right-[6%] h-[25px] w-[29px]" />
            </div>

            <p className="absolute right-0 text-[17px] font-[300] leading-[34px]">
              Return
            </p>
          </div>

          <div className="mt-[65px] sm:mt-[100px] w-[100%] h-[100px] tracking-[0.1px]">
            <p className="font-[800] text-[#858585] text-[19px] mb-[7px]">
              Contact
            </p>
            <div className="ml-[30px] font-[500] text-[21px] leading-[36px]">
              <p
                onClick={handleSendNewEmailClick}
                data-theme={appTheme[currentTheme].app_color_1}
                style={
                  {
                    "--theme-color": appTheme[currentTheme].app_color_1,
                    transition: "color 0.2s ease-in-out",
                  } as React.CSSProperties
                }
                className="cursor-pointer hover:text-[var(--theme-color)] "
              >
                joeygoff13@gmail.com
              </p>
              <p
                data-theme={appTheme[currentTheme].app_color_1}
                style={
                  {
                    "--theme-color": appTheme[currentTheme].app_color_1,
                    transition: "color 0.2s ease-in-out",
                  } as React.CSSProperties
                }
                className="cursor-pointer hover:text-[var(--theme-color)] tracking-[-0.05px]"
              >
                (+1) 603 727 6737
              </p>
            </div>
          </div>

          <div className="w-[calc(100%-32px)] ml-[16px] bg-[#888] h-[1.2px] mt-[22px]" />

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center mt-[25px] sm:mt-[40px] mb-[30px]"
          >
            <div className="relative h-[50px] w-full rounded-[10px]">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-white placeholder-[#a4a4a4] font-[400] focus:mb-[4px] z-[102] text-black text-[18px] px-[15px] w-full h-full outline-none rounded-[10px]"
                style={{
                  border: "1px solid black",
                }}
                autoComplete="off"
              />
              <div
                className="z-[101] mt-[-50px] w-full h-full rounded-[10px]"
                style={{
                  backgroundColor: appTheme[currentTheme].app_color_1,
                }}
              />
            </div>

            <div className="mt-[19px] relative h-[50px] w-full rounded-[10px]">
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="bg-white placeholder-[#a4a4a4] font-[400] focus:mb-[4px] z-[102] text-black text-[18px] px-[15px] w-full h-full outline-none rounded-[10px]"
                style={{
                  border: "1px solid black",
                }}
              />
              <div
                className="z-[101] mt-[-50px] w-full h-full rounded-[10px]"
                style={{
                  backgroundColor: appTheme[currentTheme].app_color_1,
                }}
              />
            </div>

            <div className="mt-[19px] relative h-[120px] sm:h-[180px] w-full rounded-[10px]">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="pt-[10px] resize-none bg-white placeholder-[#a4a4a4] font-[400] focus:mb-[4px] z-[102] text-black text-[18px] px-[15px] w-full h-full outline-none rounded-[10px]"
                style={{
                  border: "1px solid black",
                }}
              />
              <div
                className="z-[101] mt-[-126px] sm:mt-[-186px] w-full h-full rounded-[10px]"
                style={{
                  backgroundColor: appTheme[currentTheme].app_color_1,
                }}
              />
            </div>

            <div className="w-full flex justify-end">
              <button
                style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
                className="hover:scale-[1.1] transition-transform duration-200 mt-[20px] text-white font-[500] cursor-pointer text-[20px] w-[110px] h-[50px] flex items-center justify-center rounded-[8px]"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>

          <div className="absolute md:hidden bottom-[47px] left-0 w-full flex flex-row gap-[11px]">
            <div className="flex flex-row h-[45px] w-full justify-center gap-[8px]">
              <AiFillInstagram
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/joseph.goff/";
                }}
                className="h-full w-auto p-[1px] mr-[4px] hover:scale-[1.2] cursor-pointer"
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
        <div className="flex w-full h-full fixed z-[820] top-0 left-0">
          <div
            ref={modal1Ref}
            onClick={toggleRightBar}
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

export default RightBar;
