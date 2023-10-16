import { useRouter }  from 'next/router'
import data from '../../data.json'
import { NextSeo } from 'next-seo'
import { ProjectImage } from '@/components/ProjectImage'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from '@/components/Link';
import styles from "./index.module.css";

export default function Project() {
  const { query } = useRouter()

  const project = data.find((project => project.id === Number(query.id)))
  const nextProject = data.find((project) => project.id === Number(query.id) + 1);

  return (
    <>
      <NextSeo title={`Projeto ${project?.id}`} />
      <main className={styles.project}>
        <Link
          to="/"
          iconLeft={<AiOutlineArrowLeft />}
          title="Voltar para o Início"
        />

        <h1>{project?.descricao}</h1>
        {project?.imagem && project.titulo && (
          <ProjectImage img={project.imagem} alt={project.titulo} />
        )}
        <span>{project?.descricao}</span>

        <div className={styles.footer}>
          <Link
            to={`${nextProject?.id || "1"}`}
            iconRight={<AiOutlineArrowRight />}
            title="Ver próximo projeto"
          />
        </div>
      </main>
    </>
  );
}
