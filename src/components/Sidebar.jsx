import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1719937050792-a6a15d899281?w=300&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
                <img 
                className={styles.avatar}
                src="https://github.com/henryqui.png" alt="" />
                <strong>Henryqui Bacellar</strong>
                <span> Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}