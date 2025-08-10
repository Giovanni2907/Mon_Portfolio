'use client';

import Image from 'next/image';

const skills = [
  {
    name: 'C#',
    image: '/skills/c-programming-language-computer-icons-computer-programming-programming-a884a719cd42ec9eeb4578d624dc455d.png'
  },
  {
    name: 'Java',
    image: '/skills/java-runtime-environment-computer-icons-java-platform-standard-edition-java-42921b98669dba6c6a5ac0b7d81f4164.png'
  },
  {
    name: 'Laravel',
    image: '/skills/laravel-software-framework-php-web-application-redes-sociais-9fe1b15a6ebe6ee32390a5edc9f1f29a.png'
  },
  {
    name: 'React',
    image: '/skills/react-logo-javascript-front-and-back-ends-user-interface-others-26ab40cda979c6537a69e241c6634266.png'
  },
  {
    name: 'Tailwind',
    image: '/skills/tailwindcss-tailwind-css-logo-blue-wave-symbol-design.png'
  }
];

export default function CarrouselInfini() {
  return (
    <div className=" bg-white dark:bg-black py-4 flex flex-col md:flex-row gap-4 md:gap-8 md:ml-30">
  <div className="flex flex-col md:flex-row gap-4 md:gap-6 -mt-25 md:py-6 md:-mt-35 relative z-10">
        {/* Section 3 ans dev web */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5B7AD] to-[#C4A69A] dark:from-[#D5B7AD] dark:to-[#B89A8E] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300 -z-10"></div>
          <div className="relative bg-gradient-to-br from-[#D5B7AD] via-[#C4A69A] to-[#D5B7AD] dark:from-[#D5B7AD] dark:via-[#B89A8E] dark:to-[#D5B7AD] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 dark:border-gray-700/30">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <span className="text-6xl font-black text-white dark:text-white drop-shadow-lg">3</span>
                <div className="mt-2">
                  <p className="text-sm font-bold text-white dark:text-white leading-tight">ans</p>
                  <p className="text-sm font-bold text-white dark:text-white leading-tight">dev</p>
                  <p className="text-sm font-bold text-white dark:text-white leading-tight">web</p>
                </div>
              </div>
              <div className="w-1 h-16 bg-white/30 dark:bg-white/20 rounded-full"></div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <div className="w-4 h-4 bg-white/60 dark:bg-white/50 rounded-full"></div>
                </div>
                <div className="text-xs text-white/80 dark:text-white/70 font-medium text-center">
                  Full-Stack
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 an dev mobile */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5B7AD] to-[#C4A69A] dark:from-[#D5B7AD] dark:to-[#B89A8E] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300 -z-10"></div>
          <div className="relative bg-gradient-to-br from-[#D5B7AD] via-[#C4A69A] to-[#D5B7AD] dark:from-[#D5B7AD] dark:via-[#B89A8E] dark:to-[#D5B7AD] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 dark:border-gray-700/30">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <span className="text-6xl font-black text-white dark:text-white drop-shadow-lg">1</span>
                <div className="mt-2">
                  <p className="text-sm font-bold text-white dark:text-white leading-tight">an</p>
                  <p className="text-sm font-bold text-white dark:text-white leading-tight">dev</p>
                  <p className="text-sm font-bold text-white dark:text-white leading-tight">mobile</p>
                </div>
              </div>
              <div className="w-1 h-16 bg-white/30 dark:bg-white/20 rounded-full"></div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <div className="w-4 h-4 bg-white/60 dark:bg-white/50 rounded-full"></div>
                </div>
                <div className="text-xs text-white/80 dark:text-white/70 font-medium text-center">
                  React Native
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carrousel des compétences */}
      <div className="w-full bg-white dark:bg-black py-4 flex flex-col md:flex-row gap-4 md:gap-8 md:ml-30">
  <div className="flex flex-wrap justify-center md:flex-nowrap flex-row md:flex-row gap-4 md:gap-6 py-4 md:py-6 md:-mt-15 md:ml-22 relative z-10">
        {[...skills].map((skill, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={skill.image}
              alt={skill.name}
              width={80}
              height={80}
              className={`object-contain w-18 h-18 ${
                skill.name === 'Tailwind' ? 'scale-125' : ''
              }`}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
