import { useState } from 'react'

import styles from '../Project/ProjectForm/ProjectForm.module.css'
import Input from '../form/Input/Input'
import SubmitButton from '../form/SubmitButton/SubmitButton'

function ServiceForm({ handleSubmit, btnText, projectData }: any) {

  const [service, setService] = useState<any>({})

  function submit(e: any) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e: any) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Valor do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />

      <SubmitButton 
        text={btnText}
      />
    </form>
  )
}

export default ServiceForm