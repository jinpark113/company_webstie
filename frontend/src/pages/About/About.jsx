import React from "react";
import { motion } from "framer-motion";
import companyImage from "../../assets/Image2.jpg";

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-32 max-w-7xl"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl mb-24"
        variants={imageVariants}
      >
        <img src={companyImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          <motion.h3
            className="text-2xl md:text-4xl font-bold mb-2 md:mb-3"
            variants={fadeInVariants}
          >
            Creative Agency
          </motion.h3>
          <motion.p
            className="text-base md:text-xl font-light"
            variants={fadeInVariants}
          >
            창의적인 디자인과 전략적 마케팅으로 성공을 이끕니다.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="mb-24 max-w-4xl mx-auto"
        variants={fadeInVariants}
        custom={1}
      >
        <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">
          회사 소개
        </h2>
        <div className="text-lg leading-relaxed text-gray-600 space-y-6">
          <p>
            Creative Agency는 2014년 설립 이래로 디지털 마케팅과 웹 디자인
            분야에서 혁신적인 솔루션을 제공해온 선도적인 마케팅 에이전시입니다.
            웹사이트 제작, 브랜드 디자인, 디지털 마케팅, SEO 최적화 등의 핵심
            서비스를 제공하며, 스타트업부터 대기업까지 다양한 고객의 성공을
            이끌고 있습니다.
          </p>
          <p>
            특히 디지털 마케팅 분야에서 탁월한 성과를 인정받아, 국내외 주요
            브랜드들의 온라인 마케팅 전략을 수립하고 실행하고 있습니다. 끊임없는
            트렌드 분석과 창의적 아이디어를 통해 브랜드 인지도와 매출 향상에
            기여하며, 지속 가능한 성장을 위한 디지털 마케팅 솔루션을 선도하고
            있습니다.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
        variants={fadeInVariants}
        custom={2}
      >
        {[
          {
            title: "창의성",
            desc: "독창적인 아이디어와 혁신적인 디자인으로 차별화합니다",
          },
          {
            title: "전문성",
            desc: "깊이 있는 전문 지식과 풍부한 경험을 바탕으로 합니다",
          },
          {
            title: "성과",
            desc: "고객의 비즈니스 성장과 성공을 최우선으로 합니다",
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
            variants={fadeInVariants}
            custom={index + 3}
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              {value.title}
            </h3>
            <p className="text-gray-600 text-lg">{value.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mb-24 max-w-4xl mx-auto text-center"
        variants={fadeInVariants}
        custom={4}
      >
        <h2 className="text-4xl font-bold mb-8 text-slate-800">회사 비전</h2>
        <p className="text-2xl leading-relaxed text-gray-600 font-light">
          "2030년까지 아시아 최고의 디지털 마케팅 에이전시로 성장하여,
          <br />
          고객의 성공과 함께 더 나은 디지털 세상을 만들어가겠습니다."
        </p>
      </motion.div>

      <motion.div className="mb-24" variants={fadeInVariants} custom={5}>
        <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">
          회사 연혁
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {[
            { year: "2023", event: "글로벌 마케팅 서비스 확장" },
            { year: "2022", event: "대형 기업 고객 확보" },
            { year: "2021", event: "디지털 마케팅 부문 수상" },
            { year: "2020", event: "회사 설립" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              variants={fadeInVariants}
              custom={index + 6}
            >
              <div className="w-1/2 text-center">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">
                    {item.year}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
