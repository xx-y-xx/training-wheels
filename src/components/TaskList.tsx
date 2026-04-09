type tasksType = {
    taskId: number;
    title: string,
    isDone: boolean,
}

type TaskListPropsType = {
    title: string;
    students: string[];
    tasks: tasksType[];
}

export const TaskList = (props: TaskListPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.tasks.map((el,index) => {
                    return (
                        <li key={index}>
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.students.map((el,index) => {
                    return <li key={index}>{el}</li>
                })}
            </ul>
        </div>
    )
}