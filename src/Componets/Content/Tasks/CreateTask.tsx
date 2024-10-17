import { ChangeEvent, useCallback, useState } from "react"
import { SAddTask, AddButton, AddingTask } from "../content.styled"

interface CreateTaskProps {
    handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleAddTask: () => void
}

  const COLOR_ICONS = '#30324B'

  export const CreateTask: React.FC<CreateTaskProps> = ({
    handleTitleChange,
    handleAddTask,
}) => {
    const [taskTitle, setTaskTitle] = useState("")

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value)
        handleTitleChange(event)
    }, [handleTitleChange])
    // TODO Типизировать
    const handleAddTaskClick = useCallback((e: any) => {
        e.stopPropagation()
        handleAddTask()
        setTaskTitle("")
    }, [handleAddTask])

    return(
        <SAddTask>
            <AddingTask                     
              placeholder="Создать задачу"
              onChange={handleInputChange}
              value={taskTitle} 
            /> 
            <AddButton color={COLOR_ICONS} onClick={handleAddTaskClick} />
        </SAddTask>
    )
}
