/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import { Link } from "@/components/Link";
import { Profile } from "@/components/Profile";
import { WorkExperience } from '../WorkExperience';


export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <div className={styles.socialMedia}>
        <Link
          to="https://www.linkedin.com/in/camisbrussi/"
          title="Linkedin"
          isExternal
        />
        <Link to="https://github.com/camisbrussi" title="GitHub" isExternal />
        <Link to="#" title="Instagram" isExternal />
      </div>
      <div className={styles.workExperience}>
        <span>Experiência</span>
        <WorkExperience
          rule="Sofware Enginner"
          year="2023"
          company="Mercado Livre"
        />
      </div>
    </aside>
  );
}
