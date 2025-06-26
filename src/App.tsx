// https://briceclain.com/en/#
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import LeftBar from "./Components/LeftBar/LeftBar";
import Project from "./Pages/Project/Project";
import WorkWithMe from "./Components/WorkWithMe/WorkWithMe";
import RightBar from "./Components/RightBar/RightBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);
  const imageUrls = [
    "/assets/headshot4.png",
    "/assets/mac_screen.png",
    // Add more image URLs here easily
  ];

useEffect(() => {
  const preloadImage = (src: string) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve(); 
    });
  };

  const preloadAllImages = async () => {
    const imagePromises = imageUrls.map(preloadImage);
    const delay = new Promise((res) => setTimeout(res, 1500));

    await Promise.all([Promise.all(imagePromises), delay]); 

    setAppLoaded(true);
  };

  preloadAllImages();
}, []);

  if (!appLoaded) {
    return (
      <motion.div
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.5,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
        }}
        className="w-screen h-screen flex items-center justify-center bg-white text-blue-500"
      >
        <span className="text-[55px] font-[800]">Joseph</span>
      </motion.div>
    );
  }

  const Layout = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Project>
          <Navbar />
          <LeftBar />
          <WorkWithMe />
          <div className="flex md:ml-[calc(125px+14vw)]">
            <Outlet />
          </div>
          <RightBar />
        </Project>
        <ToastContainer />
      </motion.div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
