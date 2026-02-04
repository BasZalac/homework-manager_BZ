import React, { useState } from "react";


function Form({  }) {
 
  return (
    <form>
        <label for="subjects">Tantárgy</label>
        <select name="subjects" id="subjects">
            <option value="maths">Matek</option>
            <option value="hunLit">Magyar Irodalom</option>
            <option value="hunGram">Magyar Nyelvtan</option>
            <option value="history">History</option>
            <option value="networking">Hálózat</option>
        </select>
        <label for="topic">Témakör</label>
        <input type="text" name="topic" id="topic" />
        <label for="sdate">Feladás napja:</label>
        <input type="date" name="sdate" id="sdate" min="2025-01-01" />
        <label for="deadline"></label>
    </form>
  );
}

export default Form;
