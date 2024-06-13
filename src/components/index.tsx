'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import React, { MouseEvent } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';
import HubSpotForm from "./formhub";
import ImageComparison from "./ImageComparison";
import ImageComparisonTwo from "./ImageComparisonTwo";
import ImageComparisonTree from "./ImageComparisonTree";

const LandingPage: React.FC = () => {
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };


  return (
    <div className="bg-[#FBFFF9] flex flex-col items-center justify-between min-h-screen start-0">
      <div className="w-full h-screen flex items-center bg-cover bg-center" id="start" style={{ backgroundImage: 'url(/images/BannerMain.png)'}}>
        <motion.div className="relative p-8 md:p-16 text-white flex flex-col"
        initial={{ opacity: 0, x:-100}}
        whileInView={{ opacity: 1, x:0 }}
        exit={{ opacity: 0, x:-100 }}
        transition={{ duration: 0.4 }}
        >
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.6 } }}
          viewport={{ once: false, amount: .5 }}
        >
          KL FACILITIES
        </motion.h1>
          <h1 className="mt-4 text-2xl md:text-4xl">
            Excelência em <br />
            Tratamento de <br />
            Pisos e Limpeza
          </h1>
          <Link href="#contact" passHref onClick={(e) => handleSmoothScroll(e, 'contact')}>
            <button className="mt-8 bg-[#779220] text-white py-4 px-8 rounded hover:bg-[#667a1d] transition duration-300">
              CONHEÇA NOSSO TRABALHO
            </button>
          </Link>
        </motion.div>
      </div>

      <Link
        href={'https://wa.me/5541984713006'}
        target="_blank"
        className="fixed bottom-5 right-5 flex items-center justify-center bg-green-400 hover:bg-green-600 w-16 h-16 rounded-full shadow-md z-50 transition-colors duration-300"
      >
        <Image
          className="px-2"
          src="/svg/wp.svg"
          width="42"
          height="42"
          alt="Ícone do WhatsApp, entre em contato."
        />
      </Link>
      
      <motion.section
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
        >
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <h1>Alguns motivos para você <br />
          confiar na KL Facilities</h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
        <div>
          <motion.div className="bg-[url('/images/Button.png')] rounded text-white p-6 w-80 h-96 flex items-end justify-start">
            <div>
            <p className="text-lg font-semibold">Abrangência Nacional</p>
            <p className="text-sm font-normal">Estamos presentes em cerca de 10 estados no Brasil, oferecendo nossos serviços com a mesma qualidade e eficiência em todas as regiões.</p>
            </div>
          </motion.div>
        </div>
        
        <div>
          <motion.div
          className="bg-[url('/images/Button2.png')] rounded text-white p-6 w-80 h-96 flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
            <div>
            <p className="text-lg font-semibold">Otimização de Tempo</p>
            <p className="text-sm font-normal">Contamos com uma equipe de colaboradores capacitados e treinados, garantindo a excelência na prestação dos nossos serviços.</p>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
          className="bg-[url('/images/Button3.png')] rounded text-white p-6 w-80 h-96 flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
            <div>
            <p className="text-lg font-semibold">Redução de Custos</p>
            <p className="text-sm font-normal">Focamos na redução de custos, otimização do tempo e aumento da produtividade, proporcionando economia significativa para nossos clientes.</p>
            </div>
          </motion.div>
        </div>
        </div>
      </motion.section>

      <section className="bg-[#292B74] w-full md:px-0 md:pl-24 py-20 mt-4">
        <section className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
            <motion.div className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
            viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+200</div>
              <p className="text-lg font-semibold text-white">Projetos finalizados</p>
              <div className="mt-2">
                <Image
                  draggable={false}
                  src="/svg/projects.svg"
                  alt="Icone de projetos finalizados"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
            <motion.div className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
            viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+10</div>
              <p className="text-lg font-semibold text-white">Anos de experiência</p>
              <div className="mt-2">
                <Image
                  draggable={false}
                  src="/svg/clean.svg"
                  alt="Icone de anos de experiência"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
            <motion.div className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
            viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+1 mi</div>
              <p className="text-lg font-semibold text-white">De investimento</p>
              <div className="mt-2">
                <Image
                  draggable={false}
                  src="/svg/money.svg"
                  alt="Icone de investimento"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
            <motion.div className="flex flex-col items-center bg-[#323591] p-6 w-80 h-100 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
            viewport={{ once: false, amount: 1 }}
            >
              <div className="text-4xl text-white mb-2">+100</div>
              <p className="text-lg font-semibold text-white">Parceiros</p>
              <div className="mt-2">
                <Image
                  src="/svg/partner.svg"
                  alt="Ícone de parceiros"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      <motion.section
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0 , duration: 0.5 } }}
        >
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <h1>Seriedade e Confiança <br />
              para o Cliente </h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
        <div>                
          <motion.div 
          className="rounded text-white flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
            <Image
              className="imageBox"
              src="/images/Rectangle77.png"
              alt="Abrangência Nacional"
              width={409}
              height={650}
            />
          </motion.div>
        </div>
        
        <div>
          <motion.div
          className="rounded text-white flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
            <Image
              className="imageBox"
              src="/images/Rectangle76.png"
              alt="Abrangência Nacional"
              width={409}
              height={650}
            />
          </motion.div>
        </div>

        <div>
          <motion.div
          className="rounded text-white flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
           <Image
            className="imageBox"
            src="/images/Rectangle78.png"
            alt="Abrangência Nacional"
            width={409}
            height={650}
          />
          </motion.div>
        </div>
        </div>
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />
      <motion.section className="w-full px-6  md:px-0 md:pl-24 py-20 mt-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0 , duration: 0.5 } }}>
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <h1>Tratamento <br />
          de Pisos</h1>
          <h2 className="text-md md:text-base font-normal text-[#667a1d]">Arraste para o lado e veja o antes e depois
          </h2>
        </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-2">

          <ImageComparison />
          <br />
          <ImageComparisonTwo />
          <br />
          <ImageComparisonTree />
          </div>
          
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
        <div>                
          <motion.div className="rounded text-white flex items-end justify-start" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }} viewport={{ once: false, amount: 1 }} animate={ { opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}>
            <Image
                  className="imageBox"
                  src="/images/1.png"
                  alt="Abrangência Nacional"
                  width={300}
                  height={700}
                />
          </motion.div>
        </div>
        
        <div>
          <motion.div
          className="rounded text-white flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
            <Image
                  className="imageBox"
                  src="/images/2.png"
                  alt="Abrangência Nacional"
                  width={300}
                  height={700}
                />
          </motion.div>
        </div>

        <div>
          <motion.div
          className="rounded text-white flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
           <Image
            className="imageBox"
            src="/images/3.png"
            alt="Abrangência Nacional"
            width={300}
            height={700}
           />
          </motion.div>
        </div>

        <div>
          <motion.div
          className="rounded text-white flex items-end justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }}
          viewport={{ once: false, amount: 1 }}
          animate={ { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          >
           <Image
                  className="imageBox"
                  src="/images/4.png"
                  alt="Abrangência Nacional"
                  width={300}
                  height={700}
                />
          </motion.div>
        </div>
        </div> */}
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />
      <motion.section 
        id="about" className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4 flex flex-col md:flex-row" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0 , duration: 0.5 } }}
      >
      <div className="text-[#667a1d] mb-12 md:ml-[95px] w-full md:w-2/4">
        <h1 className="text-2xl md:text-4xl font-bold">Sobre a KL Facilities</h1> <br />
        <p className="text-lg md:text-xl text-[#464646] font-normal text-justify">
          Somos uma empresa em constante expansão, comprometidos com as políticas de sustentabilidade e com a excelência da qualidade nos serviços prestados a nossos clientes.
          Em nosso portfólio atuamos nos principais ramos da terceirização de serviços, contamos com uma equipe de colaboradores capacitados e treinados para melhor atender aos nossos clientes.
          Nosso modelo de trabalho consiste em elaborar uma proposta personalizada para cada tipo de serviço, entregando assim uma experiência completa e satisfatória para os nossos clientes.
          O nosso foco é a redução de custos, otimização do tempo e aumento da produtividade.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center  items-center gap-8 md:gap-4 w-full md:w-2/4">
        <motion.div 
          className="rounded text-white m-3" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }} 
          viewport={{ once: false, amount: 1 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 50 }}
        >
          <Image
            src="/images/professional.jpg"
            alt="Profissional da KL Facilities"
            width={650}
            height={650}
            className="rounded-lg shadow-md hover:scale-105 transition ease-in-out"
          />
        </motion.div>
      </div>
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />
      <motion.section
        id="partner"
        className="w-full px-6 md:px-0 md:pl-24 py-20 mt-4"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }} 
        viewport={{ once: false, amount: 1 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: 50 }}
        >
        <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
          <h1>Empresas que confiam <br />
            em nosso trabalho</h1>
        </div>
        
        <div className="grid items-center drop-shadow-md gap-2">
          <div className="flex gap-12 justify-center ">
            <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/1.jpg" alt="Logo 1" width={200} height={100} />
            </motion.div>

            <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/2.jpg" alt="Logo 2" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/3.jpg" alt="Logo 3" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
               <Image className="rounded" src="/images/partners/4.jpg" alt="Logo 4" width={200} height={100} />
             </motion.div>
          </div>
          <div className="flex gap-12 justify-center">
          <motion.div 
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/5.jpg" alt="Logo 1" width={200} height={100} />
            </motion.div>

            <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/6.jpg" alt="Logo 2" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/7.jpg" alt="Logo 3" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
               <Image className="rounded" src="/images/partners/8.jpg" alt="Logo 4" width={200} height={100} />
             </motion.div>
          </div>
          <div className="flex gap-12 justify-center">
          <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/9.jpg" alt="Logo 1" width={200} height={100} />
            </motion.div>

            <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/10.jpg" alt="Logo 2" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/11.jpg" alt="Logo 3" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
               <Image className="rounded" src="/images/partners/12.jpg" alt="Logo 4" width={200} height={100} />
             </motion.div>
          </div>
          <div className="flex gap-12 justify-center">
          <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/13.jpg" alt="Logo 1" width={200} height={100} />
            </motion.div>

            <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/14.jpg" alt="Logo 2" width={200} height={100} />
             </motion.div>

             <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'spring', stiffness: 300 }}>
              <Image className="rounded" src="/images/partners/15.jpg" alt="Logo 3" width={200} height={100} />
             </motion.div>
          </div>
      </div>
      </motion.section>
      <hr className="w-1/2 h-0.5 bg-gray-300 border-none m-2 hidden md:block" />
      <motion.section 
        id="contact"
        className="w-full"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 , duration: 0.5 } }} 
        viewport={{ once: false, amount: 1 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: 50 }}>
      <div className=" px-6 md:px-0 md:pl-24 py-20 mt-4">
      <div className="text-2xl md:text-4xl font-bold text-[#667a1d] mb-12 md:ml-[95px]">
        <h1>Entre em <br /> contato conosco</h1>
      </div>

      <main className="flex text-lg flex-col md:flex-row justify-center content-center items-center md:gap-4 gap-2">
      <section className='flex md:w-1/3 flex-col g-12'>
        <HubSpotForm />
      </section>

        <hr className="w-0.5 h-96 bg-gray-400 border-none m-8 hidden md:block" />

        <section className='flex flex-col g-12'>
          <div className="bg-white drop-shadow-md h-1/3 rounded-lg w-full p-10 flex items-center mt-4">
            <Image 
              className="imageBox"
              src="/svg/phone.svg"
              alt="Ícone do Telefone para contato"
              width={52}
              height={50}
            />
            <div className='px-4'>
              <h1 className='text-md md:text-2xl font-bold text-[#667a1d]'>Telefone</h1>
              <Link className="text-gray-600" href="tel:41984713006">+55 41 98471-3006</Link>
            </div>
          </div>
          <div className="bg-white drop-shadow-md h-1/3 rounded-lg w-full p-10 flex items-center mt-4">
            <Image 
              className="imageBox"
              src="/svg/whatsapp.svg"
              alt="Ícone do Whats App"
              width={52}
              height={50}
            />
            <div className='px-4'>
              <h1 className='text-md md:text-2xl font-bold text-[#667a1d]'>WhatsApp</h1>
              <Link className="text-gray-600" href="https://wa.me/5541984713006">Clique para entrar em contato</Link>
            </div>
          </div>
          <div className="bg-white drop-shadow-md h-1/3 rounded-lg w-full p-10 flex items-center mt-4">
            <Image 
              className="imageBox"
              src="/svg/mail.svg"
              alt="Ícone do email para contato"
              width={50}
              height={50}
            />
            <div className='px-4'>
              <h1 className='text-md md:text-2xl font-bold text-[#667a1d]'>Email</h1>
              <a className="text-gray-600" href="mailto:contato@klfacilities.com.br">contato@klfacilities.com.br</a>
            </div>
          </div>
        </section>
      </main>
      </div>
      </motion.section>

    </div>
  );
}

export default LandingPage;