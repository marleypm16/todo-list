
import styles from './App.module.css'
import logo from './assets/rocket.png'

interface Task{
    id:number,
    description:string,
    done:boolean,
}
function App() {
    const [taskQuantity,setTaskQuantity] = useState<number>(0)
    const [finishedTasks,setFineshedTasks] = useState<number>(0)
    let tasks: Task[] = [{
        id:1,
        description:'asdasdads',
        done:false,
    },{
        id:2,
        description:'Testando po',
        done:false,
    }]
    return (
    <>
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt="logo da todolist" />
                <h1 className={styles.title}>to<span className={styles.destaque}>do</span></h1>
            </header>
            <main className={styles.main_conteiner} >
                <section className={styles.section}>
                    <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa"/>
                    <button className={styles.button}>Criar +</button>
                </section>
                <section>
                    <p>Tarefas Criadas <span>{taskQuantity}</span></p>
                    <p>Tarefas Concluídas <span>{finishedTasks}</span></p>
                </section>
                <section>
                    {tasks ? (
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
