import { STasks, RemainingTasks } from "../../content.styled"

interface TasksListProps {
    taskElements: JSX.Element[]
    remainingTasksCount: number
}

export const TasksList:React.FC<TasksListProps> = ({ taskElements }) => (
    <STasks>
        <RemainingTasks />
        {taskElements} 
    </STasks>
)
