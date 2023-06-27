import { ITask } from '../../App';
import { Task } from '../Task/Task';
import styles from './Tasks.module.css';
import { ClipboardText } from '@phosphor-icons/react'

interface Props {
    tasks: ITask[];
}

export function Tasks({ tasks }: Props) {

    const taskQuantity = tasks.length;
    const tasksFinished = tasks.filter(task => task.isCompleted == true).length;

    return (
        <section className={styles.tasksBoard}>
            <header>
                <div className={styles.createdTasks}>
                    <p>Tarefas criadas</p>
                    <span>{taskQuantity}</span>
                </div>
                <div className={styles.finishedTasks}>
                    <p>Concluídas</p>
                    <span>{tasksFinished} de {taskQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>
                {
                    taskQuantity === 0 ? (
                        <div className={styles.noTasksWrapper}>
                            <ClipboardText size={50} />
                            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    ) : (
                        tasks.map(task => (
                            <Task
                                key={task.id}
                                task={task}
                            />
                        ))
                    )
                }
            </div>
        </section>
    )
}
