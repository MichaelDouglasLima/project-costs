function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>

      <div>
        <input type="number" placeholder="Insira o orçamento do projeto" />
      </div>

      <div>
        <select name="category_id">
          <option value="0" disabled selected>Selecione uma categoria</option>
        </select>
      </div>

      <div>
        <input type="submit" value="Criar projeto"/>
      </div>
    </form>
  )
}

export default ProjectForm