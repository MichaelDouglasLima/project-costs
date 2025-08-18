import styles from './Input.module.css'

export interface IInput {
  type: string
  text: string
  name: string
  placeholder: string
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

// function Input({ type, text, name, placeholder, handleOnChange, value }: IInput) {
//   return (
//     <div>
//       <label htmlFor=""></label>
//       <input type="text" />
//     </div>
//   )
// }

// export default Input