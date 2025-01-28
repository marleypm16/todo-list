
import { useState } from 'react'
import styles from './App.module.css'
import logo from './assets/rocket.png'
import clipboard from './assets/Clipboard.png'
import trash from './assets/trash.svg'
interface Task{
    id:number,
    description:string,
    done:boolean,
}
function App() {
    const [tasks,setTasks] = useState<Task[]>([])
    const [finishedTasks,setFinishedTasks] = useState<number>(0)
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
        setTaskDescription('')
    }

    const setDone = (id: number) => {
        // Atualiza as tarefas
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            );
    
            // Atualiza a contagem de tarefas concluídas usando o estado atualizado
            const completedCount = updatedTasks.reduce(
                (counter, task) => (task.done ? counter + 1 : counter),
                0
            );
    
            setFinishedTasks(completedCount);
    
            return updatedTasks; // Retorna a nova lista de tarefas
        });
    };
    
    return (
    <>
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="logo da todolist" />
                <h1 className={styles.title}>to<span className={styles.destaque}>do</span></h1>
            </header>
            <main className={styles.main_conteiner} >
                <section className={styles.input_section}>
                    <input className={styles.input} type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Adicione uma nova tarefa"/>
                    <button onClick={createTask} className={styles.button}>Criar +</button>
                </section>
                <section className={styles.task_quantity_section}>
                    <p className={styles.task_quantity}>Tarefas Criadas <span className={styles.counter}>{tasks.length}</span></p>
                    <p className={styles.finished_tasks}>Tarefas Concluídas <span className={styles.counter}>{tasks.length === 0 ? tasks.length : finishedTasks + ' ' + 'de' + ' ' + tasks.length}</span></p>
                </section>
                <section className={styles.task_section}>
                    {tasks.length > 0 ? (
                        tasks.map((task:Task) => (
                            <div className={styles.task} key={task.id}>
                                <input type="checkbox" checked={task.done} onChange={() =>setDone(task.id)} name="" id="" />
                                <p className={task.done ? styles.task_checked : styles.task_uncheked}>{task.description}</p>
                                <button className={styles.trash_button}>
                                    <img src={trash} alt="deletar tarefa" />
                                </button>
                            </div>
                        ))
                    ): (
                        <>
                            <img src={clipboard} alt='Lista de tarefas vazia'/>
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
