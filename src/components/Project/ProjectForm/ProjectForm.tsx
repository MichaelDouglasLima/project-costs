import { useEffect, useState } from 'react'

import Input from '../../form/Input/Input'
import Select from '../../form/Select/Select'
import SubmitButton from '../../form/SubmitButton/SubmitButton'
import styles from './ProjectForm.module.css'

interface IProjectForm {
  btnText: string,
  handleSubmit?: (project: object) => void,
  projectData?: object
}

function ProjectForm({ btnText, handleSubmit, projectData }: IProjectForm) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error))
  }, [])

  // const submit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   handleSubmit(project)
  // }



  return (
    <form /*onSubmit={submit}*/ className={styles.form}>

      <Input
        type="text"
        text="Nome do projeto"
        name="project_name"
        placeholder="Insira o nome do projeto"
        handleOnChange={() => { }}
        value=""
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={() => { }}
        value=""
      />

      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
        handleOnChange={() => { }}
        value=""
      />

      <SubmitButton
        text={btnText}
      />

    </form>
  )
}

export default ProjectForm