import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
function App() {
  const [data, setData] = useState([])
  const addData = (actualData) =>{
    setData((prevData) => [...prevData, actualData])
  }
  return (
    <>
      <Form sendDataToApp={addData}/>
      <List datas = {data}/>
    </>
  )
}

export default App
