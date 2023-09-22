import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';

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
      </div>

      <div>
        {data.map((project) => {
          return (
            <ProjectImage
              key={project.id}
              img={project.imagem}
              alt={project.titulo}
            />
          );
        })}
      </div>
    </main>
  );
}
