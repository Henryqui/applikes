import {Post} from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css"

import './global.css'

export function App() {
  

  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      <aside>
        Sidebar
      </aside>
      <main>
      <Post 
        author="Machado de Assis" 
        comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quia nobis ipsum illo incidunt, iste asperiores aperiam necessitatibus voluptates."
        />
      <Post 
        author="Castro Alves" 
        comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quia nobis ipsum illo incidunt, iste asperiores aperiam necessitatibus voluptates."
        />
      </main>
      </div>
    </div>
  )

}


