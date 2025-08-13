import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

interface ILinkButton {
  to: string
  text: string
}

function LinkButton({ to, text }: ILinkButton) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

export default LinkButton