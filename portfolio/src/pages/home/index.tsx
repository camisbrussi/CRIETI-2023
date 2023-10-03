import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';
import { WorkExperience } from '@/components/WorkExperience';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Profile />
        <div className={styles.socialMedia}>
          <ExternalLink
            link="https://www.linkedin.com/in/camisbrussi/"
            title="Linkedin"
          />
          <ExternalLink link="https://github.com/camisbrussi" title="GitHub" />
          <ExternalLink link="#" title="Instagram" />
        </div>
        <WorkExperience
          rule="Sofware Enginner"
          year="2023"
          company="Mercado Livre"
        />
      </div>

      <div>
        {data.map((project) => {
          return (
            <Link key={project.id} href={`project/${project.id}`}>
              <ProjectImage img={project.imagem} alt={project.titulo} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
