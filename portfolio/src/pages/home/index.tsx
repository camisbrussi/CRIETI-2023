import { SideBar } from '@/components/SideBar';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Button } from '@/components/Button';

import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Adiciona um efeito de rolagem suave
      });
    };

     useEffect(() => {
       const toggleVisibility = () => {
         if (window.pageYOffset > 300) {
           setIsVisible(true);
         } else {
           setIsVisible(false);
         }
       };

       // Adiciona um ouvinte de rolagem ao componente
       window.addEventListener("scroll", toggleVisibility);

       // Remove o ouvinte quando o componente é desmontado
       return () => {
         window.removeEventListener("scroll", toggleVisibility);
       };
     }, []);
    
  return (
    <>
      <NextSeo title="Tela inicial" description="Essa é a tela inicial." />
      <main className={styles.main}>
        <SideBar />
        <div>
          {data.map((project) => {
            return (
              <Link
                key={project.id}
                href={`project/${project.id}`}
              >
                <ProjectImage img={project.imagem} alt={project.titulo} />
              </Link>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        {isVisible && (
          <Button
            title="Voltar para o topo"
            onClick={scrollToTop}
            icon={<AiOutlineArrowUp />}
          />
        )}
      </footer>
    </>
  );
}
