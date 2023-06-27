import { ITask } from '../../App';
import styles from './Task.module.css';
import { CheckCircle, Trash } from '@phosphor-icons/react'

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    
    return (
        <div className={`${styles.task}`}>
            <button onClick={() => onComplete(task.id)}>
               {task.isCompleted ? <CheckCircle size={22} color="#8284FA" weight="fill" /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
            <button onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}