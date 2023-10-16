import styles from "./index.module.css";

interface WorkExperienceProps {
  rule: string;
  company: string;
  year: string
}
export function WorkExperience(props: WorkExperienceProps) {
  return (
    <div className={styles.workExperience}>
      <div className={styles.header}>
        <h1>{props.rule}</h1>
        <span>{props.year}</span>
      </div>
      <span>{props.company}</span>
    </div>
  );
}
