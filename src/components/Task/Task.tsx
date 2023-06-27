import { ITask } from '../../App';
import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react'

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {

    return (
        <div className={`${styles.task}`}>
            <button>
                <div />
            </button>
            <p>{task.title}</p>
            <button onClick={() => onDelete(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}