import { useCurrentThemeStore } from "../../Store/useCurrentThemeStore";
import { appTheme } from "../../Util/appTheme";
import { motion, useAnimation, useInView } from "framer-motion";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaLaptopCode } from "react-icons/fa6";
import "./Home.css";
import { LuArrowRight } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoIosWarning } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdCenterFocusStrong } from "react-icons/md";
import {
  useScrollToStore,
  useScrollToTriggerStore,
} from "../../Store/useScrollToStore";
// import { MdCookie } from "react-icons/md";
import { HiMiniDocument } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { TbVectorBezierArc } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

import { BsFiletypeCss } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaSquareWebAwesome } from "react-icons/fa6";

const ProjectItem = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-200px 0px",
  });

  const slideX = index % 2 === 0 ? 50 : -50;
  return (
    <a
      ref={ref}
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:opacity-[70%] group flex ${
        index % 2 !== 0 ? "flex-row-reverse" : ""
      }  transition-all duration-500 ease-in-out px-[30px] py-[10px] md:py-[15px] lg:py-[30px] cursor-pointer`}
    >
      <motion.div
        initial={{ opacity: 0, x: slideX }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[60%] md:w-[47%] overflow-hidden rounded-xl"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="w-[40%] md:w-[53%] flex flex-col justify-center items-start pl-[20px] md:pl-[30px] lg:pl-[40px] xl:pl-[50px] text-left"
      >
        <div className={`${index % 2 === 0 ? "pl-[20px]" : ""} pr-[20px]`}>
          <p className="font-[700] text-[22px] sm:text-[25px] md:text-[24px] lg:text-[29px] leading-[26px]">
            {project.title}
          </p>
          <p className="mt-[12px] font-[300] text-[16px] sm:text-[18px] md:text-[17px] lg:text-[19px] leading-[25px]">
            {project.subTitle}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

const Home = () => {
  const currentTheme = useCurrentThemeStore((state) => state.currentTheme);

  const scrollToTrigger = useScrollToTriggerStore((state) => state.scrollTo);
  const scrollToSection = useScrollToStore((state) => state.scrollTo);
  const setScrollToSection = useScrollToStore((state) => state.setScrollTo);

  const [cookieModal, setCookieModal] = useState(false);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [newPageTriggered, setNewPageTriggered] = useState(false);

  const computerImages = [
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_1.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_2.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_3.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_4.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_5.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_6.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--w_7.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--w_8.webp",
    "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--w_9.webp",
  ];

  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(1);

  useEffect(() => {
    // Delay first update until 7.1s
    const timeoutA = setTimeout(() => {
      setIndexA((prev) => (prev + 2) % computerImages.length); // first bump
      const intervalA = setInterval(() => {
        setIndexA((prev) => (prev + 2) % computerImages.length);
      }, 6400);
      // Save intervalA so we can clear it
      (window as any).intervalA = intervalA;
    }, 7100 + 6400);

    return () => {
      clearTimeout(timeoutA);
      clearInterval((window as any).intervalA);
    };
  }, []);

  useEffect(() => {
    // Delay second update until 10.3s
    const timeoutB = setTimeout(() => {
      setIndexB((prev) => (prev + 2) % computerImages.length); // first bump
      const intervalB = setInterval(() => {
        setIndexB((prev) => (prev + 2) % computerImages.length);
      }, 6400);
      (window as any).intervalB = intervalB;
    }, 10300 + 6400);

    return () => {
      clearTimeout(timeoutB);
      clearInterval((window as any).intervalB);
    };
  }, []);

  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function animateScroll(currentTime: number) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Limit progress to 1
      const ease = easeInOutQuad(progress); // Apply easing function

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutQuad(t: any) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (newPageTriggered) return;
      if (section7Ref.current && section6Ref.current) {
        const scrollY = window.scrollY;
        if (
          scrollY < section6Ref.current.offsetTop - window.innerHeight &&
          scrollToSection !== 0
        ) {
          setScrollToSection(0);
        }
        if (
          scrollY > section6Ref.current.offsetTop - 0.5 * window.innerHeight &&
          scrollY < section7Ref.current.offsetTop - 0.5 * window.innerHeight &&
          scrollToSection !== 1
        ) {
          setScrollToSection(1);
        }
        // console.log()
        if (
          scrollY > section7Ref.current.offsetTop - 0.5 * window.innerHeight &&
          scrollToSection !== 2
        ) {
          setScrollToSection(2);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollToSection, setScrollToSection, newPageTriggered]);

  const scrollToSectionRef = useRef(scrollToSection);
  const windowWidthRef = useRef(windowWidth);

  useEffect(() => {
    scrollToSectionRef.current = scrollToSection;
  }, [scrollToSection]);

  useEffect(() => {
    const windowWidth = windowWidthRef.current;
    setNewPageTriggered(true);
    if (scrollToSectionRef.current === 0) {
      smoothScrollTo(0, 1000);
    } else if (scrollToSectionRef.current === 1 && section6Ref.current) {
      smoothScrollTo(
        windowWidth > 768
          ? section6Ref.current.offsetTop - 130
          : section6Ref.current.offsetTop - 180,
        1000
      );
    } else if (scrollToSectionRef.current === 2 && section7Ref.current) {
      smoothScrollTo(
        windowWidth > 768
          ? section7Ref.current.offsetTop
          : section7Ref.current.offsetTop - 80,
        1000
      );
    }

    const timeout = setTimeout(() => {
      setNewPageTriggered(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [scrollToTrigger]);

  // SECTION 1
  const container1Ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const mySites = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const myProcess = useRef<HTMLDivElement>(null);

  // SECTION 2
  const [currentSection, setCurrentSection] = useState(0);
  const currentSectionRef = useRef(0);

  const homeRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section2FixedBoxParent = useRef<HTMLDivElement>(null);
  const section2FixedBox = useRef<HTMLDivElement>(null);
  const section2fixedRef = useRef(false);
  const [s2Opacity1, setS2Opacity1] = useState(0);
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (!homeRef.current || !scrollProgressRef.current) return;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = homeRef.current!.clientHeight - window.innerHeight;
        const progress = 100 - (scrollY / maxScroll) * 100;
        scrollProgressRef.current!.style.height = `${Math.max(
          0,
          Math.min(progress, 100)
        )}%`;
      });

      if (section2FixedBoxParent.current) {
        const top =
          windowWidth < 768
            ? section2FixedBoxParent.current.offsetTop - 60
            : section2FixedBoxParent.current.offsetTop;

        if (scrollY < top && s2Opacity1 !== 0) {
          setS2Opacity1(0);
        } else if (scrollY >= top + 100 && s2Opacity1 !== 1) {
          setS2Opacity1(1);
        } else {
          const progress = (scrollY - top) / 100;
          setS2Opacity1(progress);
        }

        if (
          section2Ref.current &&
          section3Ref.current &&
          section4Ref.current &&
          section5Ref.current &&
          section6Ref.current
        ) {
          const checkpoint2 =
            section2Ref.current.offsetTop - window.innerHeight + 100;
          const checkpoint3 =
            section3Ref.current.offsetTop - 0.5 * window.innerHeight;
          const checkpoint4 =
            section4Ref.current.offsetTop - window.innerHeight + 300;
          const checkpoint5 =
            section5Ref.current.offsetTop - window.innerHeight + 0;
          const checkpoint6 =
            section6Ref.current.offsetTop - window.innerHeight - 170;

          if (scrollY < checkpoint2 && currentSectionRef.current !== 0) {
            setCurrentSection(0);
            currentSectionRef.current = 0;
          }
          if (
            scrollY >= checkpoint2 &&
            scrollY < checkpoint3 &&
            currentSectionRef.current !== 1
          ) {
            setCurrentSection(1);
            currentSectionRef.current = 1;
          }
          if (
            scrollY >= checkpoint3 &&
            scrollY < checkpoint4 &&
            currentSectionRef.current !== 2
          ) {
            setCurrentSection(2);
            currentSectionRef.current = 2;
          }

          if (
            scrollY >= checkpoint4 &&
            scrollY < checkpoint5 &&
            currentSectionRef.current !== 3
          ) {
            setCurrentSection(3);
            currentSectionRef.current = 3;
          }

          if (
            scrollY >= checkpoint5 &&
            scrollY < checkpoint6 &&
            currentSectionRef.current !== 4
          ) {
            setCurrentSection(4);
            currentSectionRef.current = 4;
          }

          if (scrollY >= checkpoint6 && currentSectionRef.current !== 5) {
            setCurrentSection(5);
            currentSectionRef.current = 5;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    windowWidthRef.current = windowWidth;
  }, [windowWidth]);

  const [mySitesOpacity, setMySitesOpacity] = useState(0);
  const [myProcessOpacity, setMyProcessOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (myProcess.current) {
        const scrollY = window.scrollY;
        const checkpoint =
          myProcess.current.offsetTop - window.innerHeight + 170;

        if (scrollY < checkpoint && s3Opacity1 !== 0) {
          setMyProcessOpacity(0);
        } else if (scrollY >= checkpoint + 100 && s3Opacity1 !== 1) {
          setMyProcessOpacity(1);
        } else {
          const progress = (scrollY - checkpoint) / 100;
          setMyProcessOpacity(progress);
        }
      }

      if (mySites.current) {
        const scrollY = window.scrollY;
        const checkpoint = mySites.current.offsetTop - window.innerHeight + 170;

        if (scrollY < checkpoint && s3Opacity1 !== 0) {
          setMySitesOpacity(0);
        } else if (scrollY >= checkpoint + 100 && s3Opacity1 !== 1) {
          setMySitesOpacity(1);
        } else {
          const progress = (scrollY - checkpoint) / 100;
          setMySitesOpacity(progress);
        }
      }

      if (!section2FixedBoxParent.current || !section2FixedBox.current) return;
      const scrollY = window.scrollY;
      const top =
        windowWidth < 768
          ? section2FixedBoxParent.current.offsetTop - 60
          : section2FixedBoxParent.current.offsetTop;
      const el = section2FixedBox.current;
      if (scrollY < top && section2fixedRef.current) {
        section2fixedRef.current = false;
        el.style.position = "relative";
        el.style.top = "auto";
        el.style.marginLeft = "0px";
      } else if (scrollY >= top && !section2fixedRef.current) {
        section2fixedRef.current = true;
        el.style.position = "fixed";
        el.style.top = windowWidth < 768 ? "60px" : "0";
        el.style.marginLeft = "0px";
      }
    };

    const handleScroll2 = () => {
      if (!section2FixedBoxParent.current || !section2FixedBox.current) return;
      const scrollY = window.scrollY;
      const top =
        windowWidth < 768
          ? section2FixedBoxParent.current.offsetTop - 60
          : section2FixedBoxParent.current.offsetTop;
      const el = section2FixedBox.current;
      if (scrollY >= top) {
        section2fixedRef.current = true;
        el.style.position = "fixed";
        el.style.top = windowWidth < 768 ? "60px" : "0";
        el.style.marginLeft = "0px";
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      handleScroll2();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Run on mount too
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const [hasReachedHalf, setHasReachedHalf] = useState(false);
  const [triggerAnimation1, setTriggerAnimation1] = useState(false);
  const triggerAnimation1Ref = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!myProcess.current) return;
      const scrollY = window.scrollY;
      const checkpoint = myProcess.current.offsetTop - window.innerHeight + 500;

      if (scrollY > checkpoint && !hasReachedHalf) {
        setHasReachedHalf(true);
        if (!triggerAnimation1) setTriggerAnimation1(true);
        setTimeout(() => {
          controls.start({
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.3 },
          });
          controls2.start({
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 0.4,
              delay: 0.6,
            },
          });
          controls3.start({
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 0.4,
              delay: 1,
            },
          });
          controls4.start({
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 0.4,
              delay: 1.4,
            },
          });
          controls5.start({
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 0.4,
              delay: 1.8,
            },
          });
          triggerAnimation1Ref.current = true;
        }, 100);
      } else if (scrollY < checkpoint - 20 && hasReachedHalf) {
        setHasReachedHalf(false);
        controls.start({
          opacity: 0,
          translateY: "-70px",
          transition: { duration: 0.3 },
        });
        controls2.start({
          opacity: 0,
          translateX: "-60px",
          transition: { duration: 0.4 },
        });
        controls3.start({
          opacity: 0,
          translateX: "60px",
          transition: { delay: 0.2, duration: 0.4 },
        });
        controls4.start({
          opacity: 0,
          translateX: "-60px",
          transition: { delay: 0.4, duration: 0.4 },
        });
        controls5.start({
          opacity: 0,
          translateY: "20px",
          transition: {
            duration: 0.4,
            delay: 0.4,
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasReachedHalf]);

  // SECTION 2 Animation Key
  const [animationKey, setAnimationKey] = useState(0);
  const [lastSection, setLastSection] = useState(0);

  useEffect(() => {
    if (currentSection > 0 && currentSection !== lastSection) {
      setAnimationKey((prev) => prev + 1);
    }
    setLastSection(currentSection);
  }, [currentSection, lastSection]);

  const section2Keys = [
    {
      line1: [["First we need an", "black"]],
      line2: [
        ["idea", "blue"],
        ["...", "black"],
      ],
      lines: ["01", "02"],
    },
    {
      line1: [["Then an analysis and a", "black"]],
      line2: [
        ["direction", "blue"],
        ["...", "black"],
      ],
      lines: ["03", "04"],
    },
    {
      line1: [["Creativity takes place", "black"]],
      line2: [
        ["for the ", "blue"],
        ["design.", "black"],
      ],
      lines: ["05", "06"],
    },
    {
      line1: [
        ["Finally, I ", "black"],
        ["code ", "blue"],
        ["and", "black"],
      ],
      line2: [
        ["I ", "black"],
        ["publish ", "blue"],
        ["your ", "black"],
        ["website", "blue"],
        ["!", "black"],
      ],
      lines: ["07", "08"],
    },
    {
      line1: [["You must be wondering", "black"]],
      line2: [["...", "black"]],
      lines: ["09", "10"],
    },
  ];

  // SECTION 3
  const section3Ref = useRef<HTMLDivElement>(null);
  const section3FixedBox = useRef<HTMLDivElement>(null);
  const section3FixedBoxParent = useRef<HTMLDivElement>(null);
  const fixedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (section3FixedBoxParent.current) {
        const bottom =
          section3FixedBoxParent.current.getBoundingClientRect().bottom -
          window.innerHeight;

        if (bottom > -100) {
          if (fixedRef.current && section3FixedBox.current) {
            fixedRef.current = false;
            const el = section3FixedBox.current;
            el.style.position = "relative";
            el.style.marginTop = "0";
            el.style.bottom = "auto";
          }
        } else if (bottom < -250) {
          if (fixedRef.current && section3FixedBox.current) {
            fixedRef.current = false;
            const el = section3FixedBox.current;
            el.style.position = "relative";
            el.style.marginTop = "150px";
            el.style.bottom = "auto";
          }
        } else {
          if (!fixedRef.current && section3FixedBox.current) {
            fixedRef.current = true;
            const el = section3FixedBox.current;
            el.style.position = "fixed";
            el.style.bottom = "250px";
            el.style.marginTop = "0px";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [s3Opacity1, setS3Opacity1] = useState(0);
  const [s3Opacity2, setS3Opacity2] = useState(0);
  const [s3Opacity3, setS3Opacity3] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (section3Ref.current) {
        const scrollY = window.scrollY;
        const checkpoint1 =
          section3Ref.current.offsetTop - window.innerHeight / 1.3;
        const checkpoint2 =
          section3Ref.current.offsetTop - window.innerHeight / 2;
        const checkpoint3 =
          section3Ref.current.offsetTop - window.innerHeight / 2.5;

        if (scrollY < checkpoint1 && s3Opacity1 !== 0) {
          setS3Opacity1(0);
        } else if (scrollY >= checkpoint1 + 100 && s3Opacity1 !== 1) {
          setS3Opacity1(1);
        } else {
          const progress = (scrollY - checkpoint1) / 100;
          setS3Opacity1(progress);
        }

        if (scrollY < checkpoint2 && s3Opacity2 !== 0) {
          setS3Opacity2(0);
        } else if (scrollY >= checkpoint2 + 100 && s3Opacity2 !== 1) {
          setS3Opacity2(1);
        } else {
          const progress = (scrollY - checkpoint2) / 100;
          setS3Opacity2(progress);
        }

        if (scrollY < checkpoint3 && s3Opacity3 !== 0) {
          setS3Opacity3(0);
        } else if (scrollY >= checkpoint3 + 100 && s3Opacity3 !== 1) {
          setS3Opacity3(1);
        } else {
          const progress = (scrollY - checkpoint3) / 100;
          setS3Opacity3(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SECTION 4 AND 5
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const [s4Opacity1, setS4Opacity1] = useState(0);
  const [s4Opacity2, setS4Opacity2] = useState(0);
  const [s4Opacity3, setS4Opacity3] = useState(0);
  const [s4Opacity4, setS4Opacity4] = useState(0);

  const [s5Opacity1, setS5Opacity1] = useState(0);
  const [s5Opacity2, setS5Opacity2] = useState(0);
  const [s5Opacity3, setS5Opacity3] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (section4Ref.current) {
        const scrollY = window.scrollY;
        const checkpoint1 =
          section4Ref.current.offsetTop - window.innerHeight + 200;
        const checkpoint2 =
          section4Ref.current.offsetTop - window.innerHeight + 320;
        const checkpoint3 =
          section4Ref.current.offsetTop +
          section4Ref.current.clientHeight -
          window.innerHeight +
          120;
        const checkpoint4 =
          section4Ref.current.offsetTop +
          section4Ref.current.clientHeight -
          window.innerHeight +
          180;

        if (scrollY < checkpoint1 && s4Opacity1 !== 0) {
          setS4Opacity1(0);
        } else if (scrollY >= checkpoint1 + 100 && s4Opacity1 !== 1) {
          setS4Opacity1(1);
        } else {
          const progress = (scrollY - checkpoint1) / 100;
          setS4Opacity1(progress);
        }

        if (scrollY < checkpoint2 && s4Opacity2 !== 0) {
          setS4Opacity2(0);
        } else if (scrollY >= checkpoint2 + 100 && s4Opacity2 !== 1) {
          setS4Opacity2(1);
        } else {
          const progress = (scrollY - checkpoint2) / 100;
          setS4Opacity2(progress);
        }

        if (scrollY < checkpoint3 && s4Opacity3 !== 0) {
          setS4Opacity3(0);
        } else if (scrollY >= checkpoint3 + 100 && s4Opacity3 !== 1) {
          setS4Opacity3(1);
        } else {
          const progress = (scrollY - checkpoint3) / 100;
          setS4Opacity3(progress);
        }

        if (scrollY < checkpoint4 && s4Opacity4 !== 0) {
          setS4Opacity4(0);
        } else if (scrollY >= checkpoint4 + 100 && s4Opacity4 !== 1) {
          setS4Opacity4(1);
        } else {
          const progress = (scrollY - checkpoint4) / 100;
          setS4Opacity4(progress);
        }
      }

      if (section5Ref.current) {
        const scrollY = window.scrollY;
        const checkpoint1 =
          section5Ref.current.offsetTop - window.innerHeight + 200;
        const checkpoint2 =
          section5Ref.current.offsetTop - window.innerHeight + 300;
        const checkpoint3 =
          section5Ref.current.offsetTop - window.innerHeight + 400;

        if (scrollY < checkpoint1 && s5Opacity1 !== 0) {
          setS5Opacity1(0);
        } else if (scrollY >= checkpoint1 + 100 && s5Opacity1 !== 1) {
          setS5Opacity1(1);
        } else {
          const progress = (scrollY - checkpoint1) / 100;
          setS5Opacity1(progress);
        }

        if (scrollY < checkpoint2 && s5Opacity2 !== 0) {
          setS5Opacity2(0);
        } else if (scrollY >= checkpoint2 + 100 && s5Opacity2 !== 1) {
          setS5Opacity2(1);
        } else {
          const progress = (scrollY - checkpoint2) / 100;
          setS5Opacity2(progress);
        }

        if (scrollY < checkpoint3 && s5Opacity3 !== 0) {
          setS5Opacity3(0);
        } else if (scrollY >= checkpoint3 + 100 && s5Opacity3 !== 1) {
          setS5Opacity3(1);
        } else {
          const progress = (scrollY - checkpoint3) / 100;
          setS5Opacity3(progress);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SECTION 6
  const projects = [
    {
      title: "LIVSO",
      description: "Custom Storefront",
      link: "https://livso.com/pages/story",
      color1: "white",
      color2: "#e6f7ff",
      color3: "#fff9cc",
      color4: "white",
      image1:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--livso_2.webp",
      image2:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--livso_1.webp",
      image3:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--livso_8.webp",
      image4:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--livso_6.webp",
      screens: [0, 3],
    },
    {
      title: "Life Bloom",
      description: "Shopify Website",
      link: "https://lifebloomcandles.com",
      color1: "white",
      color2: "#B1D9B5",
      color3: "#93B395",
      color4: "white",
      image1:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--lb_1.webp",
      image2: "",
      image3:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--lb_2.webp",
      image4:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--lb_3.webp",
      screens: [3, 0],
    },
    {
      title: "Photography Portfolio",
      description: "Custom Portfolio",
      link: "https://jessshulmanportfolio.com",
      color1: "white",
      color2: "#E6FCFF",
      color3: "#C9E7FF",
      color4: "white",
      image1:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-06-26-16-10-34-732--Screenshot_2025_06_26_at_4_10_27_PM.webp",
      image2:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--js_2.webp",
      image3:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--js_6.webp",
      image4: "",
      screens: [0, 3],
    },
    {
      title: "Jacob May",
      description: "Custom Storefront",
      link: "https://jacob-may.com",
      color1: "white",
      color2: "#E3F2F9",
      color3: "#D1D5DB",
      color4: "white",
      image1:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--jm_1.webp",
      image2:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--jm_3.webp",
      image3:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--jm_4.webp",
      image4:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--jm_5.webp",
      screens: [0, 3],
    },
    {
      title: "River Aware App",
      description: "Live on App Store",
      link: "https://apps.apple.com/us/app/riveraware/id6473773718",
      color1: "white",
      color2: "#182B6E",
      color3: "#7897E1",
      color4: "white",
      image1:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--ra_6.webp",
      image2:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--ra_1.webp",
      image3:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--ra_2.webp",
      image4:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-434--ra_3.webp",
      screens: [5, 5],
    },
  ];

  const PointerIcon = ({ right }: { right: boolean }) => {
    return (
      <div
        className={`${
          !right && "rotate-y-180"
        } relative rounded-[5px] w-[35px] h-[35px] flex flex-col items-center bg-black`}
      >
        <div
          className={`absolute left-0 ${
            right ? "top-[15px] md:top-[15.5px]" : "top-[15.1px]"
          } h-[2.5px] w-[24px] bg-white`}
        />
        <LuArrowRight className="h-[25px] w-[25px] mt-[4px] text-white" />
      </div>
    );
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollingRight, setScrollingRight] = useState(false);
  const [scrollingLeft, setScrollingLeft] = useState(false);
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rightArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    const scrollStep = () => {
      if (scrollContainerRef.current && scrollingLeft) {
        scrollContainerRef.current.scrollLeft -= 15;
        animationFrame = requestAnimationFrame(scrollStep);
        if (
          leftArrowRef.current &&
          scrollContainerRef.current.scrollLeft === 0
        ) {
          leftArrowRef.current.style.opacity = "0";
          leftArrowRef.current.style.pointerEvents = "none";
        }
        if (
          rightArrowRef.current &&
          scrollContainerRef.current.scrollLeft <
            scrollContainerRef.current.scrollWidth -
              scrollContainerRef.current.clientWidth &&
          rightArrowRef.current.style.opacity === "0"
        ) {
          rightArrowRef.current.style.opacity = "1";
          rightArrowRef.current.style.pointerEvents = "auto";
        }
      }
    };
    if (scrollingLeft) {
      animationFrame = requestAnimationFrame(scrollStep);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollingLeft]);

  useEffect(() => {
    let animationFrame: number;
    const scrollStep = () => {
      if (scrollContainerRef.current && scrollingRight) {
        scrollContainerRef.current.scrollLeft += 15;
        if (
          rightArrowRef.current &&
          scrollContainerRef.current.scrollLeft ===
            scrollContainerRef.current.scrollWidth -
              scrollContainerRef.current.clientWidth
        ) {
          rightArrowRef.current.style.opacity = "0";
          rightArrowRef.current.style.pointerEvents = "none";
        }
        if (
          leftArrowRef.current &&
          scrollContainerRef.current.scrollLeft !== 0 &&
          leftArrowRef.current.style.opacity === "0"
        ) {
          leftArrowRef.current.style.opacity = "1";
          leftArrowRef.current.style.pointerEvents = "auto";
        }
        animationFrame = requestAnimationFrame(scrollStep);
      }
    };
    if (scrollingRight) {
      animationFrame = requestAnimationFrame(scrollStep);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollingRight]);

  const [isHovered, setIsHovered] = useState(false);

  const topProjects = [
    {
      link: "https://mikaelareuben.com",
      imageUrl:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-06-26-15-45-13-840--Screenshot_2025_06_26_at_3_44_38_PM.webp",

      title: "Mikaela Reuben",
      subTitle: "Culinary nutritionist offering recipes, wellness coaching, and private chef services",
    },
    {
      link: "https://jessshulmanportfolio.com",
      imageUrl:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--js_4.webp",
      title: "Jess Shulman Portfolio",
      subTitle: "Creative designer and photographer working with small businesses and brands in Long Island, NY",
    },
    {
      link: "https://tannyspaacquisitions.com",
      imageUrl:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-06-26-15-47-32-526--Screenshot_2025_06_26_at_3_47_25_PM.webp",
      title: "Tanny Spa Acquisitions",
      subTitle: "Rochester based company offering spa repair services and selling refurbished hot tubs",
    },
    {
      link: "https://kellystevensphotography.com",
      imageUrl:
        "https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-06-26-16-04-15-798--Screenshot_2025_06_26_at_4_03_44_PM.webp",
      title: "Kelly Stevens Photography",
      subTitle: "Boston wedding photographer focused on film-inspired, natural storytelling",
    },
  ];

  return (
    <div className="flex flex-col" ref={homeRef}>
      {/* Background */}
      <div className="z-[300] absolute w-[100vw] md:w-[calc(100vw-125px-14vw)] h-[400vh] min-h-[1400px] flex flex-col">
        <div className="w-[100%] h-[100vh] min-h-[700px] gradient-background" />
        <div className="w-[100%] h-[100vh] min-h-[700px] gradient-background rotate-x-180" />
        {/* <div className="absolute bottom-[200vh] left-0 w-[100%] h-[400px] bg-gradient-to-b from-transparent to-white" /> */}

        <div className="w-[100%] h-[100vh] min-h-[700px] gradient-background" />
        <div className="w-[100%] h-[100vh] min-h-[700px] gradient-background rotate-x-180" />
        <div className="absolute bottom-0 left-0 w-[100%] h-[400px] bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Scroll Line */}
      <div className="z-[750] md:block hidden fixed left-[calc(125px+14vw)] h-[100vh] bg-linear-to-t from-blue-900 to-blue-200 w-[2px] top-0">
        <div
          ref={scrollProgressRef}
          className="h-[100%] absolute bottom-0 left-0 w-[100%] bg-[#eee]"
        />
      </div>

      {/* <MdCookie
        onClick={() => {
          setCookieModal(true);
        }}
        className="cursor-pointer fixed w-[31px] h-[31px] md:w-[33px] md:h-[33px] z-[900] bottom-[25px] right-[29px]"
      /> */}
      {cookieModal && (
        <div className="fixed bg-white px-[15px] py-[10px] flex flex-col rounded-[10px] w-[371px] h-[139px] z-[900] bottom-[21px] right-[25px] shadow-[0_0_18px_0_rgba(107,114,128,0.6)]">
          <p className="font-[800] text-[16px]">We use cookies</p>
          <p className="mt-[3px] text-[14px] tracking-[-0.1px] font-[300] leading-[17px]">
            This site uses cookies to enhance your experience. By continuing to
            browse this site, you accept our use of cookies.
          </p>
          <div className="mt-[10px] w-[100%] flex flex-row gap-[3%]">
            <div
              onClick={() => setCookieModal(false)}
              className="w-[72%] h-[27px] rounded-[6px] flex items-center justify-center text-white font-[500] text-[14px] cursor-pointer hover:brightness-75"
              style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
            >
              Accept
            </div>
            <div
              onClick={() => setCookieModal(false)}
              className="w-[25%] h-[27px] rounded-[6px] flex items-center justify-center text-white bg-[#AAA] font-[500] text-[14px] cursor-pointer hover:brightness-75"
            >
              Decline
            </div>
          </div>
        </div>
      )}

      {/* Section 1 */}
      <div
        ref={container1Ref}
        className="z-[302] pl-[5vw] min-h-[700px] h-[100vh] relative overflow-hidden max-w-[100vw] md:max-w-[calc(100vw-125px-14vw)]"
      >
        <div className="md:hidden ml-[-5vw] absolute top-[17.8vh] w-[100vw] h-[100px] flex justify-center">
          <motion.div
            initial={{ opacity: 0, translateY: "15px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 4.7 }}
            className="w-[140px] h-[140px] rounded-full bg-gradient-to-t from-red to-transparent overflow-hidden"
          >
            <img
              alt=""
              src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--headshot4.webp"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute w-[140px] h-[60px] mt-[80px] bg-gradient-to-t from-white/70 to-transparent overflow-hidden"></div>
        </div>

        <motion.div
          animate={{
            marginTop: ["30vh", "30vh", "27vh", "34vh"],
          }}
          transition={{
            times: [0, 0.35, 0.8, 1],
            duration: 3.2,
            ease: "easeInOut",
          }}
          className="relative flex flex-row h-[59px] pl-[60px]"
        >
          <div className="gradient-background2 absolute w-[80px] h-[81px] rounded-[5px] left-[5px] top-[-73px]"></div>

          <p className="text-[20px] sm:text-[21px] md:text-[21px] lg:text-[22px] xl:text-[25px] text-[#888] mr-[20px] leading-[58px] font-[300]">
            01
          </p>

          <div className="relative">
            <motion.div
              initial={{ WebkitMaskPosition: "100% 0%" }}
              animate={{ WebkitMaskPosition: "0% 0%" }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="relative h-full flex flex-row items-start pr-[3px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 50%, transparent 50%)",
                WebkitMaskSize: "200% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskImage:
                  "linear-gradient(to right, black 50%, transparent 50%)",
                maskSize: "200% 100%",
                maskRepeat: "no-repeat",
              }}
            >
              <p className="text-[45px] sm:text-[55px] md:text-[51px] lg:text-[65px] xl:text-[80px] text-[#888] leading-[50px] font-[400]">
                {"<"}
              </p>
              <p className="text-[35px] sm:text-[45px] md:text-[40px] lg:text-[51px] xl:text-[63px] text-[#222] gap-[1.5vw] flex flex-row leading-[50px] font-[300]">
                <span>Hello,</span>
                <span>I'm</span>
                <span>
                  <span style={{ color: appTheme[currentTheme].app_color_1 }}>
                    Joseph
                  </span>
                  !
                </span>
              </p>
              <p className="text-[45px] sm:text-[55px] md:text-[51px] lg:text-[65px] xl:text-[80px] text-[#888] leading-[50px] font-[400]">
                {">"}
              </p>
            </motion.div>

            <motion.div
              initial={{ width: "2px" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute h-full left-0 top-0"
            >
              <motion.div
                initial={{ display: "flex" }}
                animate={{ display: "none" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute right-0 w-[2px] h-full bg-black blink"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, ease: "easeInOut" }}
          className="flex flex-row mt-[4px] sm:mt-[14px] md:mt-[10px] lg:mt-[25px] xl:mt-[34px] h-[60px] pl-[60px]"
        >
          <p className="text-[20px] sm:text-[21px] md:text-[21px] lg:text-[22px] xl:text-[25px] text-[#888] mr-[20px] leading-[58px] font-[300]">
            02
          </p>
          <div className="relative">
            <motion.div
              initial={{ WebkitMaskPosition: "100% 0%" }}
              animate={{ WebkitMaskPosition: "0% 0%" }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
              className="relative h-full flex flex-row items-start pr-[3px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 50%, transparent 50%)",
                WebkitMaskSize: "200% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskImage:
                  "linear-gradient(to right, black 50%, transparent 50%)",
                maskSize: "200% 100%",
                maskRepeat: "no-repeat",
              }}
            >
              <p className="text-[45px] sm:text-[55px] md:text-[51px] lg:text-[65px] xl:text-[80px] text-[#888] leading-[50px] font-[400]">
                {"<"}
              </p>
              <p className="text-[35px] sm:text-[45px] md:text-[40px] lg:text-[51px] xl:text-[63px] text-[#222] gap-[1.5vw] leading-[50px] font-[300] h-full flex flex-row">
                <span>I</span>
                <span style={{ color: appTheme[currentTheme].app_color_1 }}>
                  design
                </span>
                <HiMiniPaintBrush
                  className="h-full w-[16px] lg:w-[18px] xl:w-[20px] pt-[12px] lg:pt-[22px] xl:pt-[29px] mx-[1px] md:mx-[-1px] lg:mx-[-3px]"
                  color="black"
                />
                <span>and</span>
                <span style={{ color: appTheme[currentTheme].app_color_1 }}>
                  develop
                </span>
                <FaLaptopCode
                  className="h-full w-[18px] sm:w-[19px] lg:w-[22px] xl:w-[25px] pt-[10px] lg:pt-[20px] xl:pt-[29px] mx-[3px] md:mx-[1px]"
                  color="black"
                />
              </p>
            </motion.div>
            <motion.div
              initial={{ width: "2px" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
              className="absolute h-full left-0 top-0"
            >
              <motion.div
                initial={{ display: "flex" }}
                animate={{
                  display: "none",
                }}
                transition={{
                  delay: 2.1,
                }}
                className="absolute right-0 w-[2px] h-full bg-black blink"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, ease: "easeInOut" }}
          className="flex flex-row sm:mt-[14px] md:mt-[10px] lg:mt-[25px] xl:mt-[34px] h-[59px] pl-[60px]"
        >
          <p className="text-[20px] sm:text-[21px] md:text-[21px] lg:text-[22px] xl:text-[25px] text-[#888] mr-[20px] leading-[58px] font-[300]">
            03
          </p>
          <div className="relative">
            <motion.div
              initial={{ WebkitMaskPosition: "100% 0%" }}
              animate={{ WebkitMaskPosition: "0% 0%" }}
              transition={{ duration: 0.6, delay: 2.6, ease: "easeInOut" }}
              className="relative h-full flex flex-row items-start pr-[3px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 50%, transparent 50%)",
                WebkitMaskSize: "200% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskImage:
                  "linear-gradient(to right, black 50%, transparent 50%)",
                maskSize: "200% 100%",
                maskRepeat: "no-repeat",
              }}
            >
              <p className="text-[35px] sm:text-[45px] md:text-[40px] lg:text-[51px] xl:text-[63px] text-[#222] leading-[50px] font-[300]">
                websites.
              </p>
              <p className="text-[45px] sm:text-[55px] md:text-[51px] lg:text-[65px] xl:text-[80px] text-[#888] leading-[50px] font-[400]">
                {">"}
              </p>
            </motion.div>

            <motion.div
              initial={{ width: "2px" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, delay: 2.6, ease: "easeInOut" }}
              className="absolute h-full left-0 top-0"
            >
              <motion.div
                initial={{ display: "flex" }}
                animate={{
                  display: "none",
                }}
                transition={{
                  delay: 4.8,
                }}
                className="absolute right-0 w-[2px] h-full bg-black blink"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ marginTop: "50px" }}
          animate={{ marginTop: 0 }}
          transition={{ delay: 2.7, duration: 0.6, ease: "easeInOut" }}
          className="absolute top-[calc(34vh+255px)] sm:top-[calc(34vh+270px)] md:top-[calc(34vh+270px)] lg:top-[calc(34vh+300px)] xl:top-[calc(34vh+350px)] left-0 font-[700] text-[25px] text-black pl-[calc(60px+5vw)]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.45, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 1, marginTop: 0 }}
              animate={{ opacity: 0, marginTop: "-20px" }}
              transition={{ delay: 6.5, duration: 0.7, ease: "easeInOut" }}
            >
              I also design your brand image, logo...
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ translateY: "30px" }}
          animate={{ translateY: 0 }}
          transition={{ delay: 3.4, duration: 0.7, ease: "easeInOut" }}
          className="z-[301] justify-center flex items-center absolute top-[calc(34vh+255px+190px)] sm:top-[calc(34vh+270px+190px)] md:top-[calc(34vh+270px+190px)] lg:top-[calc(34vh+300px+180px)] xl:top-[calc(34vh+350px+130px)] h-[60px] left-0 w-[100vw] md:w-[calc(100vw-(125px+14vw))]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 0.5, ease: "easeInOut" }}
            className="relative w-[200px] h-[47px] flex items-end hover:scale-[1.05] cursor-pointer"
            style={{ transition: "scale 0.3s ease-in-out" }}
            onClick={() => {
              if (projectsSection.current) {
                smoothScrollTo(
                  window.innerWidth > 768
                    ? projectsSection.current.offsetTop - 20
                    : projectsSection.current.offsetTop - 90,
                  1000
                );
              }
            }}
          >
            <p className="absolute left-[0px] h-full flex items-center font-[300] text-[20px]">
              See My Work
            </p>
            <motion.div
              className="absolute left-[133px] rounded-[5px] flex flex-col items-center"
              style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
              animate={{
                height: [47, 41, 47],
                width: [45, 49, 45],
              }}
              transition={{
                times: [0, 0.6, 1],
                duration: 0.8,
                ease: ["circIn", "circOut"],
                repeat: Infinity,
                delay: 5.8,
                repeatDelay: 0.7,
              }}
            >
              <div className="w-[3.5px] mr-[0.2px] h-[33px] bg-white"></div>
              <LuArrowRight className="mr-[.5px] h-[33px] w-[33px]  mt-[-25px] text-white rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Computer */}
      <div className="z-[301] w-[100vw] md:w-[calc(100vw-125px-14vw)] h-[200px] xl:h-[240px] flex justify-center absolute top-[calc(34vh+255px-30px)] sm:top-[calc(34vh+270px-30px)] md:top-[calc(34vh+270px-40px)] lg:top-[calc(34vh+300px-50px)] xl:top-[calc(34vh+350px-140px)]">
        <div className="flex justify-center items-center relative xl:absolute xl:left-[calc(430px+6vw)] xl:top-0 w-[300px] xl:w-[360px] h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.76 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.76, 1, 1, 0.76],
            }}
            transition={{
              duration: 4,
              times: [0, 0.25, 0.8, 1],
              ease: "easeInOut",
              repeat: Infinity,
              delay: 7.1,
              repeatDelay: 2.4,
            }}
            className="absolute w-full h-full items-center flex justify-center will-change-transform"
          >
            <img
              className="absolute w-full"
              src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--mac_screen.webp"
            />
            <img
              className="absolute aspect-[1.5/1] object-cover object-top pl-[12.1%] pr-[12.35%] pb-[9.8%] pt-[6.5%] left-0 w-full"
              src={computerImages[indexA]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.76 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.76, 1, 1, 0.76],
            }}
            transition={{
              duration: 4,
              times: [0, 0.25, 0.8, 1],
              ease: "easeInOut",
              repeat: Infinity,
              delay: 10.3,
              repeatDelay: 2.4,
            }}
            className="absolute w-full h-full items-center flex justify-center will-change-transform"
          >
            <img
              className="absolute w-full"
              src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--mac_screen.webp"
            />
            <img
              className="absolute aspect-[1.5/1] object-cover object-top pl-[12.1%] pr-[12.35%] pb-[9.8%] pt-[6.5%] left-0 w-full"
              src={computerImages[indexB]}
            />
          </motion.div>
        </div>
      </div>

      <div
        ref={mySites}
        style={{ opacity: mySitesOpacity }}
        className="w-[100%] h-[90px] relative z-[301] mt-[100px]"
      >
        <div className="items-center flex flex-row gap-[12px] justify-center w-[100%]">
          <p className="text-center font-[600] text-[42px] leading-[42px] ">
            Explore My Sites
          </p>
          <FaSquareWebAwesome
            style={{ color: appTheme[currentTheme].app_color_1 }}
            className="z-[401] mt-[4px] w-[42px] h-[42px]"
          />
        </div>
      </div>

      <div
        ref={projectsSection}
        className="flex justify-center w-full relative z-[301] h-auto"
      >
        <div className="max-w-[1000px]">
          {topProjects.map((project: any, index: number) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <div
        ref={myProcess}
        style={{ opacity: myProcessOpacity }}
        className="w-[100%] h-[98px] relative z-[301] mt-[100px]"
      >
        <div className="items-center flex flex-row gap-[12px] justify-center w-[100%]">
          <p className="text-center font-[700] text-[42px] leading-[42px] ">
            From Start to Finish
          </p>
          <FaMagnifyingGlass className="mt-[1px] z-[401] w-[30px] h-[30px]" />
        </div>
      </div>

      {/* Top Code */}
      <div
        ref={section2FixedBoxParent}
        className="z-[699] w-[100%] relative h-[66px]"
      >
        <div
          ref={section2FixedBox}
          className="z-[700] relative h-[85px] w-[100%] pt-[30px]"
        >
          <div
            style={{ opacity: s2Opacity1 }}
            className="absolute top-0 w-[100%] bg-white h-[110px]"
          />

          <motion.div
            initial={{ opacity: 0, translateY: "-70px" }}
            animate={{
              opacity: currentSection >= 1 ? 1 : 0,
              translateY: currentSection >= 1 ? 0 : "-70px",
            }}
            transition={{ duration: 0.3 }}
            className="relative w-[100%] pl-[50px] sm:pl-[100px] md:pl-[50px]"
          >
            <div className="z-[801] gradient-background2 absolute w-[68px] h-[68px] rounded-[5px] top-0 mt-[-2px]" />

            <div className="pt-[5.5px] z-[801] flex flex-row h-[31px] pl-[86px]">
              <p className="relative text-[21px] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px] text-[#888] mr-[11px] md:mr-[14px] lg:mr-[17px] leading-[30px] font-[300]">
                {
                  section2Keys[currentSection - 1 >= 0 ? currentSection - 1 : 0]
                    .lines[0]
                }
              </p>
              <div className="relative">
                <motion.div
                  key={animationKey}
                  initial={{ WebkitMaskPosition: "100% 0%" }}
                  animate={{ WebkitMaskPosition: "0% 0%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="relative flex flex-row items-start pr-[5px]"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, black 50%, transparent 50%)",
                    WebkitMaskSize: "200% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskImage:
                      "linear-gradient(to right, black 50%, transparent 50%)",
                    maskSize: "200% 100%",
                    maskRepeat: "no-repeat",
                  }}
                >
                  <p className="text-[22px] sm:text-[23px] md:text-[24px] lg:text-[26px] xl:text-[27px] text-[#222] leading-[30px] font-[700]">
                    {section2Keys[
                      currentSection - 1 >= 0 ? currentSection - 1 : 0
                    ].line1.map((section: any, index: number) => {
                      return (
                        <span
                          key={index}
                          style={{
                            color:
                              section[1] === "black"
                                ? "black"
                                : appTheme[currentTheme].app_color_1,
                          }}
                        >
                          {section[0]}
                        </span>
                      );
                    })}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ width: "2px" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute h-full left-0 top-0"
                >
                  <motion.div
                    initial={{ display: "flex" }}
                    animate={{
                      display: "none",
                    }}
                    transition={{
                      delay: 1.1,
                    }}
                    className="absolute right-0 w-[2px] h-full bg-black blink"
                  />
                </motion.div>
              </div>
            </div>

            <div className="z-[801] pt-[2.5px] flex flex-row h-[31px] pl-[86px] mt-[4px]">
              <motion.div
                key={animationKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-row"
              >
                <p className="relative text-[21px] sm:text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px] mr-[11px] md:mr-[14px] lg:mr-[17px] text-[#888] leading-[30px] font-[300]">
                  {
                    section2Keys[
                      currentSection - 1 >= 0 ? currentSection - 1 : 0
                    ].lines[1]
                  }
                </p>

                <div className="relative">
                  <motion.div
                    initial={{ WebkitMaskPosition: "100% 0%" }}
                    animate={{ WebkitMaskPosition: "0% 0%" }}
                    transition={{
                      duration: 0.4,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                    className="relative flex flex-row items-start pr-[5px]"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to right, black 50%, transparent 50%)",
                      WebkitMaskSize: "200% 100%",
                      WebkitMaskRepeat: "no-repeat",
                      maskImage:
                        "linear-gradient(to right, black 50%, transparent 50%)",
                      maskSize: "200% 100%",
                      maskRepeat: "no-repeat",
                    }}
                  >
                    <p className="text-[22px] sm:text-[23px] md:text-[24px] lg:text-[26px] xl:text-[27px] leading-[30px] font-[700]">
                      {section2Keys[
                        currentSection - 1 >= 0 ? currentSection - 1 : 0
                      ].line2.map((section: any, index: number) => {
                        return (
                          <span
                            key={index}
                            style={{
                              color:
                                section[1] === "black"
                                  ? "black"
                                  : appTheme[currentTheme].app_color_1,
                            }}
                          >
                            {section[0]}
                          </span>
                        );
                      })}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ width: "2px" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.4,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                    className="absolute h-full left-0 top-0"
                  >
                    <motion.div
                      initial={{ display: "flex" }}
                      animate={{
                        display: "none",
                      }}
                      transition={{
                        delay: 2.5,
                      }}
                      className="absolute right-0 w-[2px] h-full bg-black blink"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2 - Messages */}
      <div
        ref={section2Ref}
        className="z-[301] relative w-[100vw] md:w-[calc(100vw-125px-14vw)] h-[auto] mt-[86px] overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, translateX: "-60px" }}
          animate={triggerAnimation1 ? controls2 : ""}
          style={{ position: "relative" }}
        >
          <div className="w-[100vw] md:w-full pl-[40px] pr-[75px] flex gap-[16px] items-center">
            <div className="border-[1px] border-[#E9E9E9] w-[58px] h-[58px] rounded-full flex-shrink-0">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <FaUser className="w-[30px] h-[30px] text-[#D0D0D0] mr-[1px] mb-[5px]" />
              </div>
            </div>

            <div
              className="w-full rounded-[7px] relative"
              style={{
                backgroundColor: appTheme[currentTheme].app_color_1,
              }}
            >
              <div className="bg-white mb-[2.5px] w-full rounded-[7px] px-[30px] py-[20px]">
                Hi Joseph, I need a website for my business.
                <br />
                We specialize in handcrafted furniture and home living
                essentials, using premium Italian fabrics and materials to
                create timeless, high-quality pieces
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: "60px" }}
          animate={triggerAnimation1 ? controls3 : ""}
          style={{ position: "relative" }}
        >
          <div className="mt-[35px] w-[100vw]md:w-[100%] pl-[65px] pr-[50px] flex gap-[16px] items-center relative">
            <div
              className="w-full rounded-[7px] relative"
              style={{
                backgroundColor: appTheme[currentTheme].app_color_1,
              }}
            >
              <div className="bg-white mb-[2.5px] w-full rounded-[7px] px-[30px] py-[20px]">
                Alright, great!
                <br />
                I'll handle everything, first the design that I'll share with
                you. Once validated,
                <br />
                I'll develop your website and put it online!
              </div>
            </div>

            <img
              alt=""
              src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--headshot4.webp"
              className="object-cover w-[58px] h-[58px] rounded-full flex-shrink-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: "-60px" }}
          animate={triggerAnimation1 ? controls4 : ""}
          style={{ position: "relative" }}
        >
          <div className="mt-[35px] w-[100vw] md:w-full pl-[40px] pr-[50px] flex gap-[16px] items-center">
            <div className="border-[1px] border-[#E9E9E9] w-[58px] h-[58px] rounded-full flex-shrink-0">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <FaUser className="w-[30px] h-[30px] text-[#D0D0D0] mr-[1px] mb-[5px]" />
              </div>
            </div>

            <div
              className="rounded-[7px] w-[262px] relative"
              style={{
                backgroundColor: appTheme[currentTheme].app_color_1,
              }}
            >
              <div className="bg-white mb-[2.5px] w-[262px] rounded-[7px] pl-[30px] pr-[15px] py-[20px]">
                Perfect, when do we start? :)
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: "20px" }}
          animate={controls5}
          className="justify-center flex items-center absolute mt-[30px] h-[78px] left-0 w-[100vw] md:w-[calc(100vw-(125px+14vw))]"
        >
          <div
            className="flex flex-col justify-end items-center h-full hover:scale-[1.05] cursor-pointer"
            style={{ transition: "scale 0.3s ease-in-out" }}
            onClick={() => {
              if (section3Ref.current) {
                smoothScrollTo(section3Ref.current.offsetTop - 170, 1000);
              }
            }}
          >
            <p className="absolute top-0 font-[300] text-[18px]">Now!</p>
            <motion.div
              className="rounded-[5px] w-[51px] flex flex-col items-center"
              style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
              animate={{
                height: [46, 40, 46],
                marginBottom: [0, -4, 0],
              }}
              transition={{
                times: [0, 0.6, 1],
                duration: 0.7,
                ease: ["circIn", "circOut"],
                repeat: Infinity,
                repeatDelay: 0.8,
              }}
            >
              <div className="w-[3.5px] mr-[0.2px] h-[33px] bg-white"></div>
              <LuArrowRight className="mr-[.5px] h-[33px] w-[33px]  mt-[-25px] text-white rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div
        ref={section3Ref}
        className="relative z-[301] mt-[170px] w-[100vw] md:w-[calc(100vw-125px-14vw)]"
      >
        <div
          // initial={{ opacity: 0, translateY: "30px" }}
          // animate={section3Controls1}
          style={{ opacity: s3Opacity1 }}
          className="w-[100%] flex flex-col xl:flex-row px-[10vw] gap-[28px] xl:gap-0 items-center xl:items-start justify-center"
        >
          <div className="w-[100%] xl:w-[50%] flex flex-col gap-[9px] xl:px-[25px] max-w-[370px] md:max-w-[400px]">
            <div className="font-[500] text-[18px] md:text-[21px] items-center flex flex-row gap-[8px]">
              <HiLightBulb className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] mt-[-2px]" />
              <p>Market analysis</p>
            </div>
            <div
              style={{ textJustify: "inter-word" }}
              className="text-[16px] leading-[21px] md:text-[18px] md:leading-[23px] font-[300] text-justify"
            >
              Competitors tend to lean either too rustic or overly minimal and
              cold. There’s a lack of modern, clean aesthetics that still feel
              soft, warm, and high-end. This leaves space for a fresh, elegant
              brand that feels both inviting and refined.
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%] flex flex-col gap-[9px] xl:px-[25px] max-w-[370px] md:max-w-[400px]">
            <div className="font-[500] text-[18px] md:text-[21px] items-center flex flex-row gap-[8px]">
              <IoIosWarning className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] mt-[-2px]" />
              <p>Problem</p>
            </div>
            <div
              style={{ textJustify: "inter-word" }}
              className="text-[16px] leading-[21px] md:text-[18px] md:leading-[23px] font-[300]  text-justify"
            >
              We need to showcase the quality and craftsmanship of the furniture
              without reducing the design to something so minimal that it feels
              cold or impersonal. The challenge is finding a harmony between
              simplicity and warmth.
            </div>
          </div>
        </div>

        <div
          style={{ opacity: s3Opacity2 }}
          className="w-[100%] flex justify-center mt-[60px]"
        >
          <p className="font-[500] text-[37px]">Solution</p>
        </div>

        <div
          style={{ opacity: s3Opacity3 }}
          ref={section3FixedBoxParent}
          className="mt-[40px] h-[290px] w-[100%] flex flex-col items-center relative"
        >
          <div className="absolute z-[401] max-[400px]:w-[300px] w-[380px] sm:w-[500px] h-[140px] bg-[#FFF] shadow-lg rounded-[6px] py-[15px] px-[16px]">
            <MdCenterFocusStrong
              className="w-[26px] h-[26px]"
              style={{ color: appTheme[currentTheme].app_color_1 }}
            />
            <p className="mt-[7px] font-[700] text-[25px] leading-[25px]">
              Highlight the product
            </p>
            <p className="mt-[12px] font-[300] text-[17px] leading-[25px]">
              A clean, modern layout with minimal text to highlight the image
              displays
            </p>
          </div>
          <div
            ref={section3FixedBox}
            className="z-[402] max-[400px]:w-[300px] w-[380px] sm:w-[500px] h-[140px] bg-[#FFF] shadow-lg rounded-[6px] py-[15px] px-[16px]"
          >
            <FaStarHalfAlt
              className="w-[24px] h-[24px]"
              style={{ color: appTheme[currentTheme].app_color_1 }}
            />
            <p className="mt-[7px] font-[700] text-[25px] leading-[25px]">
              Light and warm page
            </p>
            <p className="mt-[12px] font-[300] text-[17px] leading-[25px]">
              Neutral tones and bright images to create a clean and aesthetic
              design
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div
        ref={section4Ref}
        className="relative z-[301] mt-[80px] w-[100vw] overflow-hidden md:w-[calc(100vw-125px-14vw)]"
      >
        <div className="hidden lg:flex flex-col absolute top-0 left-[66.5%] z-[402] w-[21%]">
          <div
            style={{
              opacity: s4Opacity1,
              transform: `translateY(${30 + s4Opacity1 * -30}px)`,
            }}
            className="bg-[#FFF] shadow-lg rounded-[6px] w-[100%] py-[15px] px-[16px]"
          >
            <MdOutlineWeb
              className="w-[24px] h-[24px]"
              style={{ color: appTheme[currentTheme].app_color_1 }}
            />
            <p className="mt-[7px] font-[700] text-[25px] leading-[25px]">
              Smooth Animations
            </p>
            <p className="mt-[12px] font-[300] text-[17px] leading-[25px]">
              Gentle fade in and sliding effects
            </p>
          </div>

          <div
            style={{
              opacity: s4Opacity2,
              transform: `translateY(${30 + s4Opacity2 * -30}px)`,
            }}
            className="mt-[10px] bg-[#FFF] shadow-lg rounded-[6px] w-[100%] py-[15px] px-[16px]"
          >
            <MdOutlineMobileFriendly
              className="w-[24px] h-[24px]"
              style={{ color: appTheme[currentTheme].app_color_1 }}
            />
            <p className="mt-[7px] font-[700] text-[25px] leading-[26px]">
              Mobile Responsive
            </p>
            <p className="mt-[12px] font-[300] text-[17px] leading-[25px]">
              Clean design allows more consistency in the layout between screen
              sizes
            </p>
          </div>
        </div>

        <div className="z-[402] w-[100%] lg:w-[78%] aspect-[1/1.679] relative flex justify-center">
          <div
            style={{
              opacity: s4Opacity1,
              transform: `translateY(${30 + s4Opacity1 * -30}px)`,
            }}
            className="w-[65%] aspect-[1/2.4523] absolute rounded-t-[15px] shadow-[0_0_40px_0_rgba(107,114,128,0.6)] overflow-hidden"
          >
            <img
              alt=""
              className="object-cover w-[100%] h-[100%] ml-[-1px]"
              src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--webpage1.webp"
            />
          </div>

          <motion.div
            style={{
              opacity: s4Opacity3,
              transform: `translateY(${30 + s4Opacity3 * -30}px)`,
            }}
            className="z-[402] absolute h-[100%] w-[100%] bottom-[1.3%] px-[6.5%] flex items-end"
          >
            <img
              alt=""
              className="z-[402] object-contain w-[100%]"
              src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--mac_screen.webp"
            />
            <div className="bg-white w-[36%] h-[100%] right-0 mr-[-20%] absolute"></div>
            <div className="bg-white w-[16%] h-[100%] left-0 absolute"></div>
            <div className="bg-white w-[100%] h-full bottom-[calc(-1.3%+100vw*.87*0.6058)] md:bottom-[calc(-1.3%+(100vw-125px-14vw)*.87*0.6058)] lg:bottom-[calc(-1.3%+((100vw-125px-14vw)*0.78)*.87*0.6058)] left-0 absolute"></div>
          </motion.div>
        </div>

        <motion.div
          style={{
            opacity: s4Opacity4,
            transform: `translateY(${30 + s4Opacity4 * -30}px)`,
          }}
          className="lg:flex hidden z-[403] absolute w-[14%] aspect-[1/1.9] bottom-[4.8%] left-[74.7%]"
        >
          <img
            alt=""
            className="absolute top-0 left-0 z-[404] object-contain w-[100%]"
            src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
          />
          <div className="absolute bottom-0 mb-[9%] pl-[9%] pr-[10%] w-[100%]">
            <div className="relative w-[100%] aspect-[1/2.4523] bg-green-400">
              <div className="bg-white w-[100%] h-[13%] top-0 absolute"></div>
              <div className="bg-white left-[-9%] w-[20%] h-[3%] top-[13%] rotate-135 absolute"></div>
              <div className="bg-white right-[-9%] w-[20%] h-[3%] top-[13%] rotate-45 absolute"></div>
              <img
                alt=""
                className="object-cover w-[100%] h-[100%] top-0 left-0"
                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--webpage1.webp"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 5 */}
      <div
        ref={section5Ref}
        className="relative z-[301] mt-[140px] w-[100vw] md:w-[calc(100vw-125px-14vw)]"
      >
        <div className="w-[100%] px-[8%] flex flex-col gap-[70px] md:gap-[80px] lg:gap-[40px]">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex flex-row lg:flex-col items-center lg:items-start w-[200px] lg:w-[160px] gap-[8px] lg:gap-[3px]">
              <div
                className="w-[40px] h-[40px] relative"
                style={{ color: appTheme[currentTheme].app_color_1 }}
              >
                <HiMiniDocument
                  className="w-[40px] h-[40px]"
                  style={{ color: appTheme[currentTheme].app_color_1 }}
                />
                <div className="absolute w-[20%] rounded-[2px] h-[1.5px] bg-white top-[30%] left-[30%]"></div>
                <div className="absolute w-[40%] rounded-[2px] h-[1.5px] bg-white top-[45%] left-[30%]"></div>
                <div className="absolute w-[20%] rounded-[2px] h-[1.5px] bg-white top-[60%] right-[30%]"></div>
              </div>
              <p className="mt-[4px] ml-[5px] text-[24px] font-[800] leading-[28px]">
                How much <br /> does it cost?
              </p>
            </div>
            <div
              className="h-[2px] w-[34px]"
              style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
            ></div>
            <p
              style={{ opacity: s5Opacity1 }}
              className="font-[300] text-[23px] leading-[28px] flex-1"
            >
              I'll give you a quote up front, and stick to that price based on
              the scope we agree on. My base price is $1000-$1500, which
              guarantees a polished site within just a few days. Once we
              finalize the design and I've created the site, I'll thoroughly
              test it and make final adjustments according to your wishes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex flex-row lg:flex-col items-center lg:items-start w-[200px] lg:w-[160px] gap-[8px] lg:gap-[4px]">
              <div
                className="relative w-[33px] h-[33px] rounded-[3px] mr-[2px]"
                style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
              >
                <div className="absolute h-[66%] rounded-[2px] w-[2px] bg-white top-[17%] left-[30%]"></div>
                <div className="absolute h-[66%] rounded-[2px] w-[2px] bg-white top-[17%] right-[30%]"></div>
                <div className="absolute h-[3.5px] rounded-[4px] w-[11px] bg-white bottom-[31%] left-[16%]"></div>
                <div className="absolute h-[3.5px] rounded-[4px] w-[11px] bg-white top-[30%] right-[16%]"></div>
              </div>

              <p className="mt-[4px] ml-[5px] text-[24px] font-[800] leading-[28px]">
                And after?
              </p>
            </div>
            <div
              className="h-[2px] w-[34px]"
              style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
            ></div>
            <p
              style={{ opacity: s5Opacity2 }}
              className="font-[300] text-[23px] leading-[28px] flex-1"
            >
              You can modify the content using the provided software (CMS)!
              <br />
              I'll show you exactly what you need to do to modify or add
              content.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex flex-row lg:flex-col items-center lg:items-start w-[200px] lg:w-[160px] gap-[8px] lg:gap-[3px]">
              <HiMoon
                className="w-[37px] h-[37px]"
                style={{ color: appTheme[currentTheme].app_color_1 }}
              />

              <p className="mt-[4px] ml-[5px] text-[24px] font-[800] leading-[28px]">
                Sleep tight
              </p>
            </div>
            <div
              className="h-[2px] w-[34px]"
              style={{ backgroundColor: appTheme[currentTheme].app_color_1 }}
            ></div>
            <p
              style={{ opacity: s5Opacity3 }}
              className="font-[300] text-[23px] leading-[28px] flex-1"
            >
              You can always message me with requests for support and updates
              for your site.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 - Projects */}
      <div
        ref={section6Ref}
        className="relative z-[301] mt-[140px] w-[100vw] md:w-[calc(100vw-125px-14vw)]"
      >
        <div className="flex flex-row items-center ml-[40px] gap-[7px]">
          <p className="font-[800] text-[42px]">My Portfolio</p>
          <div className="relative">
            <div className="absolute bg-white z-[402] w-[13px] h-[12px] top-0 mt-[-2px] right-[18px]"></div>
            <BsStars className="z-[401] w-[34px] h-[34px] rotate-y-180" />
          </div>
        </div>

        <div className="relative">
          <div
            className="hide-scroll w-full mt-[40px] overflow-x-scroll overflow-y-hidden"
            ref={scrollContainerRef}
          >
            <div className="flex flex-row">
              {projects.map((project: any, index: number) => (
                <div
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setScrollingLeft(false);
                    setScrollingRight(false);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className="cursor-pointer relative group min-w-[490px] h-[440px]"
                  key={index}
                >
                  <div
                    className="z-[201] absolute inset-0 transition-all duration-300 group-hover:brightness-[97.5%]"
                    style={{
                      background: `linear-gradient(to bottom, ${project.color1} 0%, ${project.color2} 30%, ${project.color3} 70%, ${project.color4} 100%)`,
                    }}
                  />
                  <div
                    className="z-[302] absolute w-[17%] group-hover:w-[8%] h-[100%] transition-all duration-300 group-hover:brightness-[97.5%]"
                    style={{
                      background: `linear-gradient(to bottom, ${project.color1} 0%, ${project.color2} 30%, ${project.color3} 70%, ${project.color4} 100%)`,
                    }}
                  />
                  <div
                    className="z-[302] right-0 absolute w-[17%] group-hover:w-[8%] h-[100%] transition-all duration-300 group-hover:brightness-[97.5%]"
                    style={{
                      background: `linear-gradient(to bottom, ${project.color1} 0%, ${project.color2} 30%, ${project.color3} 70%, ${project.color4} 100%)`,
                    }}
                  />

                  <p className="z-[401] absolute font-[300] text-[26px] top-[18px] left-[26px]">
                    {project.title}
                  </p>

                  <div className="z-[301] absolute w-[100%] h-[280px] overflow-hidden top-[69px] group">
                    <div className="ml-[17%] group-hover:ml-[8%] w-[132%] group-hover:w-[84%] h-[100%] absolute top-0 left-0 transition-width duration-300 ease-in-out">
                      <motion.div
                        className="flex flex-row w-full h-full"
                        style={{
                          transition: isHovered
                            ? "margin-left 0.25s ease-in-out"
                            : "none",
                        }}
                        animate={
                          isHovered
                            ? { marginLeft: "0%" }
                            : { marginLeft: ["0%", "-50%"] }
                        }
                        transition={
                          isHovered
                            ? { duration: 0 }
                            : {
                                duration: 0.6,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: 3,
                                repeatDelay: 3,
                              }
                        }
                      >
                        <div className="w-[50%] h-full bg-transparent items-center justify-center flex">
                          {project.screens[0] === 0 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex flex-col">
                              <img
                                alt=""
                                className="z-[401]  w-[60%] aspect-[1.5/1] object-cover object-top mb-[-4%] ml-[-13%]"
                                src={project.image1}
                              />
                              <img
                                alt=""
                                className="w-[60%] aspect-[1.5/1] object-cover object-top mb-[4%] ml-[13%]"
                                src={project.image2}
                              />
                            </div>
                          )}

                          {project.screens[0] === 1 && (
                            <div className="pr-[2%] relative w-[100%] h-[100%] items-center justify-center flex flex-row gap-[3.7%]">
                              <img
                                alt=""
                                className="z-[401] w-[35%] aspect-[1/1.3] object-cover object-top mb-[-6%]"
                                src={project.image1}
                              />
                              <img
                                alt=""
                                className="w-[40%] aspect-[1/1.25] object-cover object-top mb-[6%]"
                                src={project.image2}
                              />
                            </div>
                          )}

                          {project.screens[0] === 2 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="z-[401] w-[80%] aspect-[1.2/1] object-cover object-top"
                                src={project.image1}
                              />
                            </div>
                          )}

                          {project.screens[0] === 3 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="z-[401] w-[100%] aspect-[1.2/1] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--mac_screen.webp"
                              />
                              <img
                                alt=""
                                className="absolute left-[12.3%] z-[402] w-[75.3%] aspect-[1.5/1] mt-[-3%] object-cover object-top"
                                src={project.image1}
                              />
                            </div>
                          )}

                          {project.screens[0] === 4 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="z-[401] w-[100%] aspect-[1.2/1] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
                              />
                              <img
                                alt=""
                                style={{
                                  transition: "border-radius 0.3s ease-in-out",
                                }}
                                className="absolute group-hover:rounded-[8px] rounded-[13px] left-[32.6%] z-[402] w-[34%] aspect-[9/19.5] object-cover object-top"
                                src={project.image1}
                              />
                            </div>
                          )}

                          {project.screens[0] === 5 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="mt-[-15px] absolute z-[401] w-[100%] aspect-[1.2/1] mr-[41%] scale-[90%] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
                              />
                              <img
                                alt=""
                                style={{
                                  transition: "border-radius 0.3s ease-in-out",
                                }}
                                className="mt-[-15px] absolute group-hover:rounded-[8px] rounded-[13px] scale-[90%] left-[12.3%] z-[402] w-[34%] aspect-[9/19.6] object-cover object-top"
                                src={project.image1}
                              />

                              <img
                                alt=""
                                className="mt-[15px] absolute ml-[41%] z-[401] w-[100%] aspect-[1.2/1] scale-[90%] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
                              />
                              <img
                                alt=""
                                style={{
                                  transition: "border-radius 0.3s ease-in-out",
                                }}
                                className="mt-[15px] absolute group-hover:rounded-[8px] rounded-[13px] scale-[90%] left-[53.2%] z-[402] w-[34%] aspect-[9/19.6] object-cover object-top"
                                src={project.image2}
                              />
                            </div>
                          )}
                        </div>

                        <div className="w-[50%] h-full bg-transparent items-center justify-center flex">
                          {project.screens[1] === 0 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex flex-col">
                              <img
                                alt=""
                                className="z-[401]  w-[60%] aspect-[1.5/1] object-cover object-top mb-[-4%] ml-[-13%]"
                                src={project.image3}
                              />
                              <img
                                alt=""
                                className="w-[60%] aspect-[1.5/1] object-cover object-top mb-[4%] ml-[13%]"
                                src={project.image4}
                              />
                            </div>
                          )}

                          {project.screens[1] === 1 && (
                            <div className="pr-[2%] relative w-[100%] h-[100%] items-center justify-center flex flex-row gap-[3.7%]">
                              <img
                                alt=""
                                className="z-[401] w-[35%] aspect-[1/1.3] object-cover object-top mb-[-6%]"
                                src={project.image3}
                              />
                              <img
                                alt=""
                                className="w-[40%] aspect-[1/1.25] object-cover object-top mb-[6%]"
                                src={project.image4}
                              />
                            </div>
                          )}

                          {project.screens[1] === 2 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="z-[401] w-[80%] aspect-[1.2/1] object-cover object-top"
                                src={project.image3}
                              />
                            </div>
                          )}

                          {project.screens[1] === 3 && (
                            <div className="relative w-[90%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="z-[401] w-[100%] aspect-[1.2/1] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--mac_screen.webp"
                              />
                              <img
                                alt=""
                                className="absolute left-[12.3%] z-[402] w-[75.3%] aspect-[1.5/1] mt-[-3%] object-cover object-top"
                                src={project.image3}
                              />
                            </div>
                          )}

                          {project.screens[1] === 4 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="z-[401] w-[100%] aspect-[1.2/1] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
                              />
                              <img
                                alt=""
                                style={{
                                  transition: "border-radius 0.3s ease-in-out",
                                }}
                                className="absolute group-hover:rounded-[8px] rounded-[13px] left-[32.6%] z-[402] w-[34%] aspect-[9/19.5] object-cover object-top"
                                src={project.image3}
                              />
                            </div>
                          )}

                          {project.screens[1] === 5 && (
                            <div className="relative w-[100%] h-[100%] items-center justify-center flex">
                              <img
                                alt=""
                                className="mt-[-15px] absolute z-[401] w-[100%] aspect-[1.2/1] mr-[41%] scale-[90%] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
                              />
                              <img
                                alt=""
                                style={{
                                  transition: "border-radius 0.3s ease-in-out",
                                }}
                                className="mt-[-15px] absolute group-hover:rounded-[8px] rounded-[13px] scale-[90%] left-[12.3%] z-[402] w-[34%] aspect-[9/19.6] object-cover object-top"
                                src={project.image3}
                              />

                              <img
                                alt=""
                                className="mt-[15px] absolute ml-[41%] z-[401] w-[100%] aspect-[1.2/1] scale-[90%] object-contain"
                                src="https://raw.githubusercontent.com/open-dream-studios/jg-portfolio/refs/heads/main/images/2025-04-11-22-44-37-435--iphone_screen.webp"
                              />
                              <img
                                alt=""
                                style={{
                                  transition: "border-radius 0.3s ease-in-out",
                                }}
                                className="mt-[15px] absolute group-hover:rounded-[8px] rounded-[13px] scale-[90%] left-[53.2%] z-[402] w-[34%] aspect-[9/19.6] object-cover object-top"
                                src={project.image4}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="z-[401] group absolute bottom-[25px] left-[28px]">
                    <div className="">
                      <TbExternalLink className="absolute bottom-[26px] group-hover:bottom-[34px] left-0 w-[24px] h-[24px] ml-[-1px] transition-all duration-300 ease-in-out]" />
                      <div
                        className="whitespace-nowrap absolute bottom-0 left-0 text-[17px] group-hover:text-[25px] transition-all duration-300 ease-in-out
                      after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:h-[1.5px] after:w-0 after:bg-black 
                      after:transition-all after:duration-300 group-hover:after:w-full
                      "
                      >
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={leftArrowRef}
            className={`z-[403] w-[70px] justify-center items-center flex h-[440px] absolute left-0 top-0`}
            style={{
              opacity: 0,
              // cursor: "url(/assets/img1.png) 16 16, auto",
            }}
            onMouseEnter={() => {
              setScrollingRight(false);
              setScrollingLeft(true);
            }}
            onMouseLeave={() => setScrollingLeft(false)}
          >
            <PointerIcon right={false} />
          </div>

          <div
            ref={rightArrowRef}
            className={`z-[403] w-[70px] justify-center items-center flex h-[440px] absolute right-0 top-0`}
            onMouseEnter={() => {
              setScrollingLeft(false);
              setScrollingRight(true);
            }}
            onMouseLeave={() => setScrollingRight(false)}
          >
            <PointerIcon right={true} />
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div
        ref={section7Ref}
        className="pl-[40px] relative z-[301] pt-[100px] w-[100vw] md:w-[calc(100vw-125px-14vw)] flex flex-col"
      >
        <div className="w-[73%]">
          <div className="ml-[-1px] font-[800] text-[50px] leading-[50px] mb-[4px]">
            JOSEPH GOFF
          </div>
          <div className="font-[500] text-[21px]">Boston, MA</div>
          <div className="font-[500] text-[30px] leading-[37px] mt-[45px]">
            I help businesses bring in more customers with optimized, beautiful
            websites
          </div>
          <div className="mt-[20px] text-[23px] leading-[29px] font-[300]">
            Over the years, I’ve helped businesses make huge strides by
            identifying exactly what they need most-whether that’s a bold new
            design, seamless UX, a powerful backend, or strategic SEO and
            marketing. I have a deep love of both art and software engineering,
            so I excel when I'm able to combine my creative side with my
            technical skills. My eye for good designs and ability to build out
            complex web / coding solutions has helped me transform countless
            clients' online presence with clarity, care, and great impact.
          </div>
          <div className="font-[500] text-[30px] leading-[37px] mt-[45px]">
            Creativity and Performance, Keys To Your Brand's Success
          </div>
          <div className="mt-[20px] text-[23px] leading-[29px] font-[300]">
            Clients trust me because I treat their vision like my own, and I
            execute it perfectly. Send me a message and I guarantee I can help
            your business grow!
          </div>
        </div>
        <div className="flex flex-col gap-[30px] sm:gap-0 sm:flex-row mt-[40px] mb-[150px] lg:mb-[60px]">
          <div className="w-[37%] flex flex-col gap-[10px] sm:gap-[15px]">
            <div className="text-[25px] font-[800]">.UX/UI design</div>
            <div className="flex flex-row text-[40px] gap-[10px]">
              <FaFigma />
              <TbVectorBezierArc />
              <SiCanva />
              <DiPhotoshop />
            </div>
          </div>
          <div className="w-[63%] flex flex-col gap-[10px] sm:gap-[15px]">
            <div className="text-[25px] font-[800]">.Web development</div>
            <div className="flex flex-row text-[40px] gap-[10px]">
              <BsFiletypeCss />
              <FaHtml5 />
              <IoLogoJavascript />
              <FaReact />
              <RiNextjsFill />
              <FaShopify />
              <FaWordpress />
              <SiWebflow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
