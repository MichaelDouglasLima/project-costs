import styles from './Message.module.css'

interface IMessage {
  type: string
  msg: string
}

function Message({ type, msg }: IMessage) {
  return (
    <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
  )
}

export default Message