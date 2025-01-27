
import { useState } from 'react'
import styles from './App.module.css'
import logo from './assets/rocket.png'

interface Task{
    id:number,
    description:string,
    done:boolean,
}
function App() {
    const [tasks,setTasks] = useState<Task[]>([])
    const [taskQuantity,setTaskQuantity] = useState<number>(0)
    const [finishedTasks,setFineshedTasks] = useState<number>(0)
    const [taskDescription,setTaskDescription] = useState<string>('')
    const [id,setId] = useState(1)


    const createTask = () =>{
        const newTask : Task = {
            id:id,
            description : taskDescription,
            done : false
        }
        setTasks(prevTasks => [...prevTasks,newTask])
        setId(prevCount => prevCount + 1)
        setTaskQuantity(prevCont => prevCont + 1)
        setFineshedTasks(prevCount => prevCount+1)
    }
    return (
    <>
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="logo da todolist" />
                <h1 className={styles.title}>to<span className={styles.destaque}>do</span></h1>
            </header>
            <main className={styles.main_conteiner} >
                <section className={styles.section}>
                    <input className={styles.input} type="text" onChange={(e) => setTaskDescription(e.target.value)} placeholder="Adicione uma nova tarefa"/>
                    <button onClick={createTask} className={styles.button}>Criar +</button>
                </section>
                <section>
                    <p>Tarefas Criadas <span>{taskQuantity}</span></p>
                    <p>Tarefas Concluídas <span>{finishedTasks}</span></p>
                </section>
                <section>
                    {tasks.length > 0 ? (
                        tasks.map((task:Task) => (
                            <div key={task.id}>
                                {task.description}
                            </div>
                        ))
                    ): (
                        <>
                            <img/>
                            <p>Você ainda não tem tarefas cadastradas.</p>
                            <p>Crie tarefas e organize seus itens a fazer.</p>

                        </>
                    )}

                </section>
            </main>
        </div>

     </>
  )
}

export default App
