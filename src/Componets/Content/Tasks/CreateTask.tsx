import { Tasks } from "../Content"
import { SAddTask, SInput, ButtonDivClass, SButton } from "../content.styled"

interface CreateTaskProps {
    isButtonDisabled: boolean
    handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleDescriptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleAddTask: () => void
    save: Tasks
  }

export const CreateTask: React.FC<CreateTaskProps> = ({
    isButtonDisabled,
    handleTitleChange,
    handleDescriptionChange,
    handleAddTask,
    save,
}) => {
    return(
        <SAddTask>
            <SInput
                placeholder='Заголовок'
                onChange={handleTitleChange}
                value={save.title}
                name='title'
            />
            <SInput
                placeholder='Описание'
                onChange={handleDescriptionChange}
                value={save.description}
                name='description'
            />
            <ButtonDivClass>
            <SButton  onClick={handleAddTask} disabled={isButtonDisabled}>
                Добавить
            </SButton>
            </ButtonDivClass>
        </SAddTask>
    )}