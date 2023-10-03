import { useRouter } from 'next/router'
import data from "../../data.json";

export default function Project() {
  const { query } = useRouter()

  const project = data.find(d => d.id === Number(query.id))

  return (
    <h1>
      {project?.titulo}
    </h1>
  );
}
