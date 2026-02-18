import React, { useState, useRef } from "react";
import Swal from "sweetalert2"
import moment from "moment"
const Form = ({sendDataToApp}) =>{
  const [subjectName, setSubjectName] = useState("Matematika");
  const topicRef = useRef();
  const [sDate, setSdate] = useState(moment().format('YYYY-MM-DD'));
  const [deadLine, setDeadline] = useState(moment().format('YYYY-MM-DD'));
  const detailsRef = useRef();
  const [type, setType] = useState("");

  const Data = () => {
    const topicname = topicRef.current.value;
    const detailsname = detailsRef.current.value;

    if (!topicname || !sDate || !deadLine || !type){
          Swal.fire({
          icon: "error",
          title: "Hiba",
          text: "Kérlek tölts ki minden mezőt!",
        });
        return;
    }
        sendDataToApp({subjectName, topicname, sDate, deadLine, detailsname, type})
  }

  const handleStartdate = (targetSdate) => {
      if(moment(targetSdate).isAfter(deadLine)){
        Swal.fire({
          icon: "error",
          title: "Hiba",
          text: "A feladás napja nem lehet később, mint a határidő!",
        });
        return;
      }
      setSdate(targetSdate);
  }

  const handleDeadline = (targetDeadline) =>{
    if(moment(targetDeadline).isBefore(sDate)){
      Swal.fire({
        icon: "error",
        title: "Hiba",
        text: "A határidő nem lehet korábbi, mint a feladás napja!",
      });
      return;
    }
    setDeadline(targetDeadline);
  }

 
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="subjects">Tantárgy: </label>
        <select name="subjects" id="subjects" onChange={(e) => setSubjectName(e.currentTarget.value)}>
            <option value="Matematika">Matematika</option>
            <option value="Magyar Irodalom">Magyar Irodalom</option>
            <option value="Magyar Nyelvtan">Magyar Nyelvtan</option>
            <option value="Történelem">Történelem</option>
            <option value="Hálózat">Hálózat</option>
        </select> <br />
        
        <label htmlFor="topic">Témakör: </label>
        <input type="text" name="topic" id="topic" ref={topicRef}/> <br />
        
        <label htmlFor="sdate">Feladás napja: </label>
        <input type="date" name="sdate" id="sdate" min="2025-01-01" value={sDate} onChange={(e) => handleStartdate(e.currentTarget.value)}/> <br />
        
        <label htmlFor="deadline">Határidő: </label>
        <input type="date" name="deadline" id="deadline" value={deadLine} onChange={(e) => handleDeadline(e.currentTarget.value)}/> <br />
        
        <label htmlFor="details">Feladat bővebb leírása: </label>
        <textarea name="details" id="details" ref={detailsRef}></textarea> <br /> 

        <label htmlFor="type">Típusa: </label>
        <input type="radio" name="type" id="type" value="written" onChange={(e) => setType(e.currentTarget.value)} />Írásbeli
        <input type="radio" name="type" id="type" value="oral" onChange={(e) => setType(e.currentTarget.value)}/>Szóbeli <br />
    
        <button onClick={Data}>Küldés</button>
    </form>
  );
}

export default Form;
