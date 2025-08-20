// app/[locale]/page.tsx
'use client'

import AcademicTimeline from '@/components/AcademicTimeLine';
import { useEffect, useState } from 'react';
import CarrouselInfini from '@/components/CarrouselInfini';
import { Button } from '@/components/ui/button';
import CarrouselEmpile from '@/components/CarrouselEmpile';
import { Badge, Download, Mail, Code, Smartphone, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Card, CardContent } from '@/components/ui/card';
import ProjectsSection from '@/components/ProjetsSection';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { pageTexts } from '@/locales/page';

type Props = {
  params: { locale: string }
}

export default function Page({ params }: Props) {
  const t = pageTexts[params.locale as keyof typeof pageTexts] || pageTexts.fr;
  const [typedText, setTypedText] = useState("")

  // Logique pour taper le texte mot par mot
  useEffect(() => {
    const fullText = t.hero.title;
    const words = fullText.split(" ");
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let currentText = "";

    const typeInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        if (currentCharIndex < words[currentWordIndex].length) {
          currentText += words[currentWordIndex][currentCharIndex];
          setTypedText(currentText);
          currentCharIndex++;
        } else {
          currentText += " ";
          setTypedText(currentText);
          currentWordIndex++;
          currentCharIndex = 0;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 200); // Vitesse de frappe

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    fetch("/coding.json")
      .then((res) => {
        console.log("Statut:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Animation chargée :", data);
        setAnimationData(data);
      })
      .catch((err) => console.error("Erreur Lottie :", err));
  }, []);
  const [animationData, setAnimationData] = useState<any | null>(null);

  useEffect(() => {
    fetch("/coding.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Erreur Lottie :", err));
  }, []);

  return (
    <div className='-mt-15 ml-2 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20'>
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Contenu principal */}
        <main className="flex px-2 sm:px-4 md:px-6 lg:px-8 items-center justify-center lg:justify-start">
          <div className='flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto'>
            <div className='w-full lg:w-180 h-auto -ml-0 lg:-ml-20 order-2 lg:order-1'>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <CarrouselEmpile/>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6 lg:mt-55 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='ml-0 lg:ml-10 w-full lg:w-100 text-center lg:text-left px-2 sm:px-4 lg:px-0'
              >
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 w-max mx-auto lg:mx-0">
                  <span className={`dark:text-white text-gray-700`}>{t.hero.greeting}<br/></span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className={`text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 dark:text-gray-300 text-gray-600 max-w-lg w-full lg:w-max mx-auto lg:mx-0`}
                >
                  {t.hero.description}
                </motion.p>
                <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.4 }}
  className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 md:-mt-5 justify-center lg:justify-start"
>
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="w-full sm:w-auto">
    <Button
      className="bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-200 md:cursor-pointer md:scale-105"
    >
      <Mail className="mr-2 h-4 w-4"/>
      {t.hero.contactButton}
    </Button>
  </motion.div>

  <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-r from-white to-purple-600 hover:from-blue-700 hover:to-purple-700 
                 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600
                 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-3 
                 flex items-center rounded-md font-medium shadow-md md:cursor-pointer md:scale-105"
      onClick={() => console.log("Bouton cliqué")}
    >
      <Download className="mr-2 h-4 w-4" />
      {t.hero.downloadCV}
    </motion.button>
</motion.div>

              </motion.div>
            </div>
            <div className='-ml-0 lg:-ml-30 -mb-6 sm:-mb-8 lg:-mb-10 order-3 lg:order-3 flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0'>
              {/* Profile Section */}
              <div className="relative mb-6 sm:mb-8 lg:-ml-60 mr-0 lg:mr-50 -mt-0 lg:-mt-7">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-[#D5B7AD] w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 mx-auto lg:mx-0 px-2 sm:px-4 lg:px-8 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-white dark:border-gray-800"
                >
                  <img src="/sary.png" alt="Image" width={256}
                    height={256}
                    className="w-full h-full object-cover"/>

                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='mt-6 sm:-mt-8 lg:-mt-20 '>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CarrouselInfini/>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 2, y: 15 }}
        transition={{ duration: 1 }}
      >
        {/* Section content */}
        <section id='about' className="px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
    
    {/* Titre placé tout en haut sur mobile */}
    <motion.div className='md:flex md:flex-wrap md:flex-col'>
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-600 to-pink-400 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 text-center"
    >
      {t.about.title}
    </motion.h1>

    {/* Colonne texte */}
    <div className="order-3 lg:order-1">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-3 sm:mb-4 text-center lg:text-left"
      >
        {t.about.description}
      </motion.p>
      {animationData && (
        <Lottie animationData={animationData} loop className="w-full max-w-md h-auto mx-auto lg:mx-0" />
      )}
    </div>
    </motion.div>
    {/* Colonne animations / cards */}
    <div className="mt-8 lg:mt-12 md:mt-0 justify-center items-center order-2 lg:order-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card className="border-l-4 border-purple-500 dark:border-purple-400 mb-4 sm:mb-5 shadow-lg bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-900/70 dark:to-pink-900/70 backdrop-blur-sm">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 dark:bg-purple-300 rounded-full"></div>
              {t.about.goal.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-light">
              {t.about.goal.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="border-l-4 border-purple-500 dark:border-purple-400 shadow-lg bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-900/70 dark:to-pink-900/70 backdrop-blur-sm">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 dark:bg-purple-300 rounded-full"></div>
              {t.about.skills.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-light">
              {t.about.skills.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

      </motion.div>
      <section id='parcours' className="px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 dark:bg-black">
    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 items-center">
      
      {/* Texte animé à gauche */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-gray-600 to-pink-400 dark:from-gray-300 dark:to-pink-300 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 text-center">
          {t.journey.title}
        </h1>
        <AcademicTimeline/>
      </motion.div>
      </div>
  </section>
  <section id='projects' className="bg-gray-50 dark:bg-gray-800">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <ProjectsSection 
        title={t.projects.title}
        projects={[...t.projects.projects]}
        code={t.projects.code}
        demo={t.projects.demo}
      />
    </motion.div>
  </section>
  <section id='services' className="bg-white dark:bg-gray-900">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <ServicesSection 
        title={t.services.title}
        services={t.services.services.map((service, index) => ({
          ...service,
          icon: index === 0 ? <Code className="w-8 h-8 text-[#D5B7AD]" /> :
                 index === 1 ? <Smartphone className="w-8 h-8 text-[#D5B7AD]" /> :
                 <BarChart2 className="w-8 h-8 text-[#D5B7AD]" />
        }))}
      />
    </motion.div>
  </section>
  <section id='contact' className="bg-gray-50 dark:bg-gray-800">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Contact 
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        description={t.contact.description}
        form={t.contact.form}
        info={t.contact.info}
      />
    </motion.div>
  </section>
  <section id='footer' className="bg-gray-900 dark:bg-black">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <Footer 
        copyright={t.footer.copyright}
        links={t.footer.links}
      />
    </motion.div>
  </section>
    </div>
  )
}
