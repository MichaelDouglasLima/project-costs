import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

interface IProjectCard {
  id: number
  name: string
  budget: number
  category: {
    name: string
  }
  handleRemove(id: number): void
}

function ProjectCard({ id, name, budget, category, handleRemove }: IProjectCard) {
  return (

  )
}

export default ProjectCard