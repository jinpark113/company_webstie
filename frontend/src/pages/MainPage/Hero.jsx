import React from "react";
import HeroImage from "../../assets/Image1.jpg";
import HeroVideo from "../../assets/hero-video.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.7 },
    },
  };

  const statusVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
  };

  return (
    <div className="relative min-h-[110vh] overflow-hidden">
      {/* 배경 영상 */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* 콘텐츠 */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-48 lg:py-56">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <motion.h1
              className="text-3xl sm:text-4xl 2xl:text-7xl font-bold text-white leading-tight mb-6 lg:mb-12"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              디지털 마케팅 전문가와 함께
              <motion.span
                className="block text-blue-400 mt-2 lg:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                비즈니스를 성장시킵니다.
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white text-semibold mb-8 max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              브랜드 인지도 향상부터 매출 증대까지, 디지털 마케팅 전문가들이
              함께합니다.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariant}
              >
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  무료 상담 신청
                </Link>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariant}
              >
                <Link
                  to="/board"
                  className="inline-block px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg font-semibold"
                >
                  포트폴리오 보기
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "완료 프로젝트" },
            { number: "95%", label: "고객 만족도" },
            { number: "10년+", label: "업계 경력" },
            { number: "24/7", label: "고객 지원" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={statusVariant}
            >
              <div className="text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-white">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
