import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "웹사이트 제작",
      description: "반응형 웹사이트부터 커스텀 웹 애플리케이션까지 제작합니다.",
      icon: "💻",
    },
    {
      id: 2,
      title: "디지털 마케팅",
      description:
        "SEO, SNS 마케팅, 구글 광고 등 종합적인 디지털 마케팅 서비스",
      icon: "📈",
    },
    {
      id: 3,
      title: "브랜드 디자인",
      description: "로고, 브랜드 아이덴티티, UI/UX 디자인 서비스",
      icon: "🎨",
    },
    {
      id: 4,
      title: "마케팅 컨설팅",
      description: "전문가의 분석을 통한 최적의 마케팅 전략 수립",
      icon: "📊",
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-32 max-w-7xl"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-12" variants={fadeInVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          우리의 서비스
        </h1>
        <p className="text-xl text-gray-600">
          창의적인 디자인과 전략적 마케팅으로 비즈니스의 성공을 지원합니다.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        variants={fadeInVariants}
        custom={1}
      >
        {servicesList.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
            variants={fadeInVariants}
            custom={index + 2}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center" variants={fadeInVariants} custom={5}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          왜 우리를 선택해야 할까요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              10년+ 경험
            </h3>
            <p className="text-gray-600">다양한 업종의 마케팅 프로젝트 경험</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              전문가 팀
            </h3>
            <p className="text-gray-600">숙련된 디자이너와 마케터로 구성</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 지원
            </h3>
            <p className="text-gray-600">연중무휴 고객 지원 서비스</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="mt-32" variants={fadeInVariants} custom={6}>
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          프로젝트 진행 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "브리핑 및 분석",
              desc: "고객의 니즈와 목표를 정확히 파악",
            },
            {
              step: "02",
              title: "전략 수립",
              desc: "최적의 마케팅 전략과 디자인 방향 설정",
            },
            {
              step: "03",
              title: "제작 및 실행",
              desc: "체계적인 제작과 마케팅 캠페인 진행",
            },
            {
              step: "04",
              title: "모니터링 및 최적화",
              desc: "성과 분석과 지속적인 개선",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md"
              variants={fadeInVariants}
              custom={index + 7}
            >
              <div className="text-blue-600 text-5xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white"
        variants={fadeInVariants}
        custom={8}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          프로젝트를 시작할 준비가 되셨나요?
        </h2>
        <p className="text-xl mb-8">
          전문가와 상담하고 최적의 마케팅 전략을 찾아보세요.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
          무료 상담 신청하기
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Services;
