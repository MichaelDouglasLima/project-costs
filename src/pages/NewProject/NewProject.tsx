import { useNavigate } from 'react-router-dom'

import ProjectForm from '../../components/Project/ProjectForm/ProjectForm'
import styles from './NewProject.module.css'

interface IProject {
  cost: number
  services: object[]
  [key: string]: any
}

function NewProject() {

  const history = useNavigate()

  function createPost(project: any) {

    // initialize cost and services

    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // redirect to the project page
      history('/projects', { state: { message: 'Projeto criado com sucesso!' } })
    })
    .catch((error) => console.error('Error creating project:', error))

  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost}  btnText="Criar projeto" />
    </div>
  )
}

export default NewProject