import styles from './Select.module.css'

interface ISelect {
  text: string
  name: string
  options: ISelectOption[]
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

interface ISelectOption {
  id: number,
  name: string
}

function Select({ text, name, options, handleOnChange, value }: ISelect) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select