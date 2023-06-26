import { ITask } from '../../App';
import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react'

interface Props {
    task: ITask;
}

export function Task({ task } : Props) {
    return (
        <div className={`${styles.task}`}>
            <button>
                <div />
            </button>
            <p>{task.title}</p>
            <button><Trash size={20} /></button>
        </div>
    )
}