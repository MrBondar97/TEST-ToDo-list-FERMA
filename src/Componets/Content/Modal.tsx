import { useCallback } from 'react'
import {
  ModalContainer,
  ModalStyleContainer,
  ButtonStyledModalContainer,
  TitleStyling,
  ModalStyleApplication,
} from './modal.styled'

interface DialogProps {
  setShowModal: (show: boolean) => void
  handleRemove: (taskKey: number) => void
  currentTaskKey: number
}

export const Dialog: React.FC<DialogProps> = ({
  setShowModal,
  handleRemove,
  currentTaskKey
}) => {
  
  const handleTaskDelete = useCallback(() => {
    handleRemove(currentTaskKey as number)
    setShowModal(false)
  }, [currentTaskKey, handleRemove, setShowModal])
  
  const handleModalClose = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])
  
  return (
        <ModalContainer>
          <ModalStyleContainer>
                <TitleStyling>Подтверждение удаления</TitleStyling>
                <ModalStyleApplication>
                    <ButtonStyledModalContainer onClick={handleTaskDelete}>
                      Да
                    </ButtonStyledModalContainer>
                    <ButtonStyledModalContainer onClick={handleModalClose} >
                      Нет
                    </ButtonStyledModalContainer>
                </ModalStyleApplication>
            </ModalStyleContainer>
        </ModalContainer>
  )}