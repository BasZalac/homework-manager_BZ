import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import Card from './wrappers/Card'
function App() {
  const [data, setData] = useState([])
  const addData = (actualData) =>{
    setData((prevData) => [...prevData, actualData])
  }
  return (
    <>
      <Form sendDataToApp={addData}/>
      <Card>
      <List datas = {data}/>
      </Card>
    </>
  )
}

export default App
