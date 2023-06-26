import styles from './Tasks.module.css';
import { ClipboardText } from '@phosphor-icons/react'


export function Tasks() {
    return (
        <div className={styles.tasksBoard}>
            <header>
                <div className={styles.createdTasks}>
                    <p>Tarefas criadas</p>
                    <span>5</span>
                </div>
                <div className={styles.fineshedTasks}>
                    <p>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>

            <div className={styles.noTasksWrapper}>
                <ClipboardText size={50} />
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}