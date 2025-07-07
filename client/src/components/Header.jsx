import React, { useContext } from "react"
import { assets } from "../assets/assets"
import { motion } from "motion/react"
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import InfiniteCarousel from "./InfiniteCarousel";

const Header = () => {

  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    }
    else {
      setShowLogin(true)
    }
  }

  const sampleImages = [
    assets.sample_img_1,
    assets.sample_img_2,
    assets.sample_img_3,
    assets.sample_img_4,
    assets.sample_img_5,
    assets.sample_img_6,
  ];

  return (
    <motion.div className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 0.4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}>
        Turn text into <span className="text-blue-600">image</span>, in seconds.
      </motion.h1>
      <motion.p className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}>
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </motion.p>
      <motion.button onClick={onClickHandler} className="sm:text-lg text-white bg-black hover:cursor-pointer w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}>
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} className="mt-10 w-full max-w-xl">
        <InfiniteCarousel images={sampleImages} imageWidth={80} gap={20} speed={0.5} />
      </motion.div>
      <motion.p className="mt-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}>
        Generated images from Imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;