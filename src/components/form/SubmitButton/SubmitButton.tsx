import styles from './SubmitButton.module.css'

export interface ISubmitButton {
  text: string
}

function SubmitButton({ text }: ISubmitButton) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton