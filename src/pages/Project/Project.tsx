import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../components/layout/Loading/Loading'
import Container from '../../components/layout/Container'

function Project() {
  const { id } = useParams()

  const [project, setProject] = useState<any>(null)
  const [showProjectForm, setShowProjectForm] = useState(false)

  // useEffect(() => {
  //   fetch(`http://localhost:5000/projects/${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data)
  //       setProject(data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [id])

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setProject(data)
        })
        .catch((err) => console.log(err))
    }, 3000)
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  return (
    <>
      {project?.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>Projeto: {project?.name}</h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div>
                  <p>
                    <span>Categoria: </span> {project?.category?.name}
                  </p>
                  <p>
                    <span>Total de Orçamento: </span> {project?.budget}
                  </p>
                  <p>
                    <span>Total Utilizado: </span> {project?.budget}
                  </p>
                </div>
              ) : (
                <div>
                  <p>detalhes do projeto</p>
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project