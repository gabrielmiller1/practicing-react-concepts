import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react'


export function Task() {
    return (
        <div className={`${styles.task}`}>
            <button>
                <div />
            </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button><Trash size={20} /></button>
        </div>
    )
}