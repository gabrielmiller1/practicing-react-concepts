import styles from './Header.module.css';
import Logo from '../../assets/logo.svg'
import { PlusCircle } from '@phosphor-icons/react'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />
      </header>
      <form className={styles.form}>
        <input placeholder='Adicione uma nova tarefa' type="text" />
        <button type='submit'>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </>
  )
}