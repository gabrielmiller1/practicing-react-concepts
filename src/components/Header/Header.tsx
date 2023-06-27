import styles from './Header.module.css';
import Logo from '../../assets/logo.svg'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {

  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo" />
      </header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </>
  )
}