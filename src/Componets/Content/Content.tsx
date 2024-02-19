import { useState, useEffect, useCallback } from 'react'
import { CContent, SInput, STask, Striked, TaskInfo, TaskActions,} from './content.styled'
import { Dialog } from "./Modal"
import { MdDeleteForever, MdMovieEdit } from "react-icons/md"
import { TfiSave } from "react-icons/tfi"
import { FaRegCalendarTimes } from "react-icons/fa"
import { CreateTask } from './Tasks/CreateTask'
import { TasksList } from './Tasks/Task/Task'

export interface Tasks  {
  key: number 
  title: string
  description?: string
}
type ShowModal = boolean

const SIZE_ICONS = 30
const COLOR_ICONS_RED = 'red'
const COLOR_ICONS_GREEN = 'green'

export const Content = () => {
    const [editingTask, setEditingTask] = useState<Tasks | null>(null)
    const [showModal, setShowModal] = useState<ShowModal>(false)
    const [currentTaskKey, setCurrentTaskKey] = useState<number>(0)
    const [save, setSave] = useState<Tasks>({
      key:  0,
      title: '',
      description: '',
    })
    const [tasks, setTasks] = useState<Tasks[]>(() => {
      const savedTasks = localStorage.getItem('tasks')
      
      return savedTasks ? JSON.parse(savedTasks) : [
        {
          key:   1,
          title: 'Книга',
          description: 'Прочитать 5 глав'
        },
        {
          key:   2,
          title: 'Спорт',
          description: 'Пробежать 3км'
        }
      ]
    })

    const [strikedTasks, setStrikedTasks] = useState(() => {
    const savedStrikedTasks = localStorage.getItem('strikedTasks')
        
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
        localStorage.setItem('strikedTasks', JSON.stringify(updatedStrikedTasks))
      }

      const saveTasksToLocalStorage = useCallback(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

      useEffect(() => {
        saveTasksToLocalStorage()
      }, [tasks, saveTasksToLocalStorage])
        
       const handleAddTask = useCallback(() => {
        if (!save.title || !save.description) {
          return null
        }

        const generateNewKey = (): number => {
          const maxKey = Math.max(...tasks.map(task => task.key),  0)
          return maxKey +  1
        }
    
      const newTask = {
          key: generateNewKey(),
          title: save.title,
          description: save.description,
        }
        setTasks([...tasks, newTask])
        setSave({ title: '', description: '', key:  0 })
      }, [tasks, save.title, save.description])

      const handleTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSave(prevSave => ({ ...prevSave, title: event.target.value }))
      }, [])
      
      const handleDescriptionChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSave(prevSave => ({ ...prevSave, description: event.target.value }))
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
        title: name === 'title' ? value : prevTask?.title ?? '',
        description: name === 'description' ? value : prevTask?.description ?? '',
      }))
    }, [])

      const handleSave = useCallback((e: React.MouseEvent) => {
        if (editingTask) {
          const updatedTasks = tasks.map((task) =>
            task.key === editingTask.key ? editingTask : task
          )
          setTasks(updatedTasks)
          setEditingTask(null)
        }
          saveTasksToLocalStorage()
        }, [tasks, editingTask, saveTasksToLocalStorage])

        const handleCancel = useCallback(() => {
          setEditingTask(null)
        }, [])    
        
        const taskElements = tasks.map((el, index) => {
          const isStriked = strikedTasks.includes(el.key)
          const isEditing = editingTask && editingTask.key === el.key
          
          return (
              <STask key={index}>
                  {isEditing ? (
                    <>
                      <SInput
                        placeholder='Заголовок'
                        onChange={handleFieldChange}
                        value={editingTask.title}
                        name='title'
                      />
                      <SInput
                        placeholder='Описание'
                        onChange={handleFieldChange}
                        value={editingTask.description}
                        name='description'
                      />
                        <TfiSave onClick={handleSave} color={COLOR_ICONS_GREEN} size={SIZE_ICONS} />
                        <FaRegCalendarTimes onClick={handleCancel} color={COLOR_ICONS_RED} size={SIZE_ICONS} />
  </>
) : (
          <>
            <TaskInfo>
              <h1
                contentEditable={isEditing || undefined}
                suppressContentEditableWarning   
                className={isStriked ? 'striked' : ''}
                onClick={() => toggleStrikeTask(el.key)}
              >
                {isStriked ? <Striked>{el.title}</Striked> : el.title}
              </h1>
              <p
                contentEditable={isEditing || undefined}
                suppressContentEditableWarning   
                className={isStriked ? 'striked' : ''}
                onClick={() => toggleStrikeTask(el.key)}
              >
                {isStriked ? <Striked>{el.description}</Striked> : el.description}
              </p>
            </TaskInfo>
            <TaskActions>
                <MdMovieEdit color={COLOR_ICONS_RED} size={SIZE_ICONS} onClick={() => handleEditTask(el.key)} />
                <MdDeleteForever color={COLOR_ICONS_RED} size={SIZE_ICONS}  onClick={() => handleOpenModalForDelete(el.key)} />
            </TaskActions>
          </>
              )}
        </STask>
      )
  })
    const isButtonDisabled = !save.title || !save.description

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
        isButtonDisabled={isButtonDisabled} 
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange}
        handleAddTask={handleAddTask}
        save={save}
      />
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
