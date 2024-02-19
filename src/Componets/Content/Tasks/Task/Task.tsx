import { STasks, RemainingTasks } from "../../content.styled"

interface TasksListProps {
    taskElements: JSX.Element[]
    remainingTasksCount: number
}

export const TasksList:React.FC<TasksListProps> = ({taskElements, remainingTasksCount}) => { 

    return (
        <STasks>
          <RemainingTasks>
            Количество невыполненных задач:
            <span> </span>
             {remainingTasksCount}
          </RemainingTasks>
          {taskElements} 
        </STasks>
    )}