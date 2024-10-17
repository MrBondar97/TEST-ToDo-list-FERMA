import styled from 'styled-components'
import { IoIosAdd } from "react-icons/io"

export const CContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  padding:  5px;
  box-sizing: border-box;
  width: 100%;
`

export const Striked = styled.span`
  text-decoration: line-through;
`

export const SAddTask = styled.div`
  display: flex;
  gap:  10px;
  margin-bottom:  20px;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const SInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

export const ButtonDivClass = styled.div`

`

export const STasks = styled.div`
  align-items: center;
  list-style: none;
  padding:  0;
  width:  1240px;
  height: 124px;
`

export const STask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  padding: 5px;
  box-sizing: border-box;
  width: 1200px;
`

export const TaskActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`

export const TaskActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

export const SButton = styled.button`
  padding:  15px  50px;
  border: none;
  border-radius:  15px;
  background-color: #42c3ebc2;
  color: white;
  cursor: pointer;
  transition: background-color  0.3s ease;
 
  &:hover {
    background-color: #007bff;
  }
  
  &:disabled {
    opacity:  0.5;
    cursor: not-allowed;
  }
`

export const  BodyApp = styled.div`
padding: 20px;
width: 1240px;
`

export const  RemainingTasks = styled.div`
font-size:  16px;
  text-align: center;
  color: #333;
  font-weight: bold;
  margin-top:  20px;
`

export const  AddButton = styled(IoIosAdd)`
  width: 30px;
  height: 30px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px black solid;
  position: absolute;
  right: 0;
  margin: 0 5px 0 5px;
  background-color: #FFFFFF;
  cursor: pointer;
`
export const AddingTask = styled.input`
  border-radius: 26px;
  background-color: #FFFFFF;
  border: 1 solid #FFFFFF;
  width: 1240px;
  height: 96px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0;
  caret-color: transparent;
  font-size: 26px;
  padding-left: 20px;
`

export const PushButtonMenu = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  gap: 10px;
  margin: 10px 0;

`

export const ButtonAllTasks = styled.button`
  background-color: #30324B;
  color: white;
  width: 58px;
  height: 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #30324B;
  caret-color: transparent;

  &:hover {
    background-color: #5e5f73;
    color:white;
  }
`

export const ButtonCompletedTasks = styled.button`
  background-color: #fff;
  color: #FF2F2F;
  width: 160px;
  height: 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #FF2F2F;
  caret-color: transparent;

  &:hover {
    background-color: #CB4154;
    color: white;
  }
`

export const ButtonNotCompletedTasks = styled.button`
  background-color: white;
  color: #4CAF50;
  width: 118px;
  height: 36px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #4CAF50;
  caret-color: transparent;

  &:hover {
    background-color: #4CAF50;
    color:white;
  }
`

export const HeadingH = styled.h1`
  margin-top: 0px;
  caret-color: transparent;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`

export const HeadingDIV = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: left;
`

export const StatusTracking = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`
