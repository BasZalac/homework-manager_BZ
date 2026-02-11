import React, { useState, useRef } from "react";

const Form = ({sendDataToApp}) =>{
  const [subjectName, setSubjectName] = useState("maths");
  const topicRef = useRef();
  const [sDate, setSdate] = useState("");
  const [deadLine, setDeadline] = useState("");
  const detailsRef = useRef();
  const [type, setType] = useState("");

  const Data = () => {
    const topicname = topicRef.current.value;
    const detailsname = detailsRef.current.value;
    sendDataToApp({subjectName, topicname, sDate, deadLine, detailsname, type})
  }

 
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="subjects">Tantárgy</label>
        <select name="subjects" id="subjects" onChange={(e) => setSubjectName(e.currentTarget.value)}>
            <option value="maths">Matek</option>
            <option value="hunLit">Magyar Irodalom</option>
            <option value="hunGram">Magyar Nyelvtan</option>
            <option value="history">History</option>
            <option value="networking">Hálózat</option>
        </select> <br />
        
        <label htmlFor="topic">Témakör</label>
        <input type="text" name="topic" id="topic" ref={topicRef}/> <br />
        
        <label htmlFor="sdate">Feladás napja:</label>
        <input type="date" name="sdate" id="sdate" min="2025-01-01" onChange={(e) => setSdate(e.currentTarget.value)}/> <br />
        
        <label htmlFor="deadline">Határidő:</label>
        <input type="date" name="deadline" id="deadline" onChange={(e) => setDeadline(e.currentTarget.value)}/> <br />
        
        <label htmlFor="details">Feladat bővebb leírása:</label>
        <textarea name="details" id="details" ref={detailsRef}></textarea> <br />

        <label htmlFor="type">Típusa:</label>
        <input type="radio" name="type" id="type" value="written" onChange={(e) => setType(e.currentTarget.value)} />Írásbeli
        <input type="radio" name="type" id="type" value="oral" onChange={(e) => setType(e.currentTarget.value)}/>Szóbeli
    
        <button onClick={Data}>Küldés</button>
    </form>
  );
}

export default Form;
