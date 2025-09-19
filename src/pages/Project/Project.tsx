import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../components/layout/Loading/Loading'
import Container from '../../components/layout/Container'

function Project() {
  const { id } = useParams()
  const [project, setProject] = useState<any>(null)

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

  return (
    <>
      {project?.name ? (
        <div>
          <Container customClass="column"></Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project