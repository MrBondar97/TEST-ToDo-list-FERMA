import { useState, useEffect, useCallback } from 'react'
import {
  CContent,
  SInput,
  STask,
  TaskInfo,
  TaskActions,
  PushButtonMenu,
  ButtonAllTasks,
  ButtonNotCompletedTasks,
  ButtonCompletedTasks,
  HeadingH, HeadingDIV,
  TaskActionsContainer,
  StatusTracking,
} from './content.styled'
import { Dialog } from "./Modal"
import { MdDeleteForever, MdMovieEdit } from "react-icons/md"
import { TfiSave } from "react-icons/tfi"
import { FaRegCalendarTimes } from "react-icons/fa"
import { CreateTask } from './Tasks/CreateTask'
import { TasksList } from './Tasks/Task/Task'

export interface TasksProps {
  key: number 
  title: string
}

type EditTask = TasksProps | null
type FilterButtons = 'all' | 'completed' | 'notCompleted'

const SIZE_ICONS = 30
const COLOR_RED = 'red'
const COLOR_GREEN = 'green'
const LINE_COLOR = 'black'
const STRIKED_TASKS = 'strikedTasks'
const KEY_TASKS = 'tasks'
const KEY_ALL = 'all'
const KEY_COMPLETED = 'completed'
const KEY_NOT_COMPLETED = 'notCompleted'
const KEY_TITLE = 'title'
const KEY_STRIKED = 'striked'

const defaultTask = [{ key: 1, title: 'Книга' }, { key: 2, title: 'Спорт' }]
const defaultValueTask = { key: 0, title: '' }  
// TODO Отрефачить, разнести по компонентам, поправить нейменги
export const Content = () => {
    const [editingTask, setEditingTask] = useState<EditTask>(null)
    const [filter, setFilter] = useState<FilterButtons>(KEY_ALL)
    const [showModal, setShowModal] = useState(false)
    const [currentTaskKey, setCurrentTaskKey] = useState<number>(0)
    const [save, setSave] = useState<TasksProps>(defaultValueTask)
    const [tasks, setTasks] = useState<TasksProps[]>(() => {
      const savedTasks = localStorage.getItem(KEY_TASKS)
      
      return savedTasks ? JSON.parse(savedTasks) : defaultTask
    })

    const [strikedTasks, setStrikedTasks] = useState(() => {

      const savedStrikedTasks = localStorage.getItem(STRIKED_TASKS)
        
      return savedStrikedTasks ? JSON.parse(savedStrikedTasks) : []
    })

    const toggleStrikeTask = (taskKey: number) => {
      let updatedStrikedTasks = [...strikedTasks]

      if (updatedStrikedTasks.includes(taskKey)) {
        updatedStrikedTasks = updatedStrikedTasks.filter(key => key !== taskKey)
      } else {
        updatedStrikedTasks.push(taskKey)
      }

        setStrikedTasks(updatedStrikedTasks)
        localStorage.setItem(STRIKED_TASKS, JSON.stringify(updatedStrikedTasks))
      }

      const saveTasksToLocalStorage = useCallback(() => {
        localStorage.setItem(KEY_TASKS, JSON.stringify(tasks))
      }, [tasks])

      useEffect(() => {
        saveTasksToLocalStorage()
      }, [tasks, saveTasksToLocalStorage])
        
      const handleAddTask = useCallback(() => {
        if (!save.title) {
          return null
      }

      const generateNewKey = (): number => {
        const maxKey = Math.max(...tasks.map(task => task.key),  0)
        return maxKey +  1
      }

      const newTask = {
        key: generateNewKey(),
        title: save.title,
      }

        setTasks((prevTasks) => [...prevTasks, newTask])
        setSave(defaultValueTask)
      }, [tasks, save.title])

      const handleTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSave((prevSave) => ({ ...prevSave, key: 0, title: event.target.value }))
      }, [])
     
      const handleEditTask = useCallback((taskKey: number) => {
        const taskToEdit = tasks.find(task => task.key === taskKey)
        setEditingTask(taskToEdit || null)
      }, [tasks])

      const handleFieldChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setEditingTask((prevTask) => ({
        ...prevTask,
        key: prevTask?.key ??  0,
        title: name === KEY_TITLE ? value : prevTask?.title ?? '',
      }))
    }, [])

    const filteredTasks = tasks.filter(task => {
      if (filter === KEY_COMPLETED) {
          return strikedTasks.includes(task.key)
      } else if (filter === KEY_NOT_COMPLETED) {
          return !strikedTasks.includes(task.key)
      }
      return true
    })

    const handleFilterChange = (newFilter: FilterButtons) => {
      setFilter(newFilter)
    }

    const handleSave = useCallback(() => {
      if (editingTask) {
        const updatedTasks = tasks.map((task) =>
          task.key === editingTask.key ? editingTask : task
        )
          setTasks(updatedTasks)
          setEditingTask(null)
        }
          saveTasksToLocalStorage()
        }, [tasks, editingTask, saveTasksToLocalStorage])
  
        const taskElements = filteredTasks.map((el, index) => {
          const isStriked = strikedTasks.includes(el.key)
          const textDecoration = isStriked ? 'line-through' : 'none'
          
          return (
            <STask key={index}>
              {editingTask?.key === el.key ? (
              <>
                <SInput
                  placeholder='Заголовок'
                  onChange={handleFieldChange}
                  value={editingTask?.title || ''}
                  name={KEY_TITLE}
                />
                <TfiSave onClick={handleSave} color={COLOR_GREEN} size={SIZE_ICONS} />
                <FaRegCalendarTimes onClick={() => setEditingTask(null)} color={COLOR_RED} size={SIZE_ICONS} />
            </>
) : (
          <>
            <TaskInfo style={{ color: LINE_COLOR }}>
                <HeadingH>Сегодня</HeadingH>
                  <HeadingDIV>
                    <StatusTracking style={{ backgroundColor: isStriked ? COLOR_RED : COLOR_GREEN }} />
                        <p
                          contentEditable={editingTask?.key === el.key || undefined}
                          suppressContentEditableWarning   
                          className={isStriked ? KEY_STRIKED : ''}
                          onClick={() => toggleStrikeTask(el.key)}
                          style={{ textDecoration: textDecoration }}
                        >
                          {el.title}
                        </p>
                        </HeadingDIV>
                        <TaskActionsContainer>
                          <TaskActions>
                            <MdMovieEdit color={COLOR_RED} size={SIZE_ICONS} onClick={() => handleEditTask(el.key)} />
                            <MdDeleteForever color={COLOR_RED} size={SIZE_ICONS}  onClick={() => handleOpenModalForDelete(el.key)} />
                          </TaskActions>
                        </TaskActionsContainer>
                    </TaskInfo>
        </>
      )}
    </STask>
  )
})

    const handleRemove = useCallback((taskKey: number) => {
        setTasks(tasks.filter(task => task.key !== taskKey))
      }, [tasks])

    const handleOpenModalForDelete = useCallback((taskKey: number) => {
        if (taskKey !== null) {
          setCurrentTaskKey(taskKey)
          setShowModal(true)
        }
      }, [])

      const remainingTasksCount = tasks.filter(task => !strikedTasks.includes(task.key)).length

  return (
    <CContent>
        <CreateTask
          handleTitleChange={handleTitleChange}
          handleAddTask={handleAddTask}
        />
          <PushButtonMenu>
            <ButtonAllTasks onClick={() => handleFilterChange(KEY_ALL)}>Все</ButtonAllTasks>
            <ButtonNotCompletedTasks onClick={() => handleFilterChange(KEY_NOT_COMPLETED)}>Выполненные</ButtonNotCompletedTasks>
            <ButtonCompletedTasks onClick={() => handleFilterChange(KEY_COMPLETED)}>Не выполненные</ButtonCompletedTasks>
          </PushButtonMenu>
            <TasksList remainingTasksCount={remainingTasksCount} taskElements={taskElements}/>    
            {showModal && (
              <Dialog
                setShowModal={setShowModal} 
                handleRemove={handleRemove} 
                currentTaskKey={currentTaskKey} 
              />
            )}
    </CContent>  
)}
