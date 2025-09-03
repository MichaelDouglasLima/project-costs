import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

interface IProjectCard {
  id: number
  name: string
  budget: number
  category: string
  handleRemove(id: number): void
}

function ProjectCard(props: any) {
  return (
    <div className={styles.project_card}>
      <h4>{props?.name}</h4>

      <p>
        <span> Orçamento:</span> R${props?.budget}
      </p>

      <p>
        <span> Categoria:</span> {props?.category}
      </p>

      <div>
        <p>Editar</p>
        <p>Remover</p>
      </div>
    </div>
  )
}

export default ProjectCard