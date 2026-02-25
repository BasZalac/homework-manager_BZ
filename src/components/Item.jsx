import { useState } from "react";
import Card from "../wrappers/Card";
import { FaPencilAlt, FaBookOpen } from "react-icons/fa";
import { PiWarningBold, PiWarningOctagonFill } from "react-icons/pi";
import moment from "moment";

const Item = ({ subjectName, topicname, sDate, deadLine, detailsname, type }) => {
  const [done, setDone] = useState(false);

  const today = moment().add(1, "days");
  const deadlinemoment = moment(deadLine, "YYYY-MM-DD");
  const differenceByDay = Math.abs(today.diff(deadlinemoment, "days"));

  const getType = (mode) => {
    switch (mode) {
      case "written":
        return <FaPencilAlt size={20}/>;
      case "oral":
        return <FaBookOpen size={20}/>;
      default:
        return <FaBookOpen size={20}/>;
    }
  };

  const icon = getType(type);

  const getDeadlineIcon = (diff) => {
    if (diff <= 3) {
      return <PiWarningBold color="orange" size={48} />;
    } else if (deadlinemoment.isBefore(today)) {
      return  <PiWarningOctagonFill color="red" size={48} />;
    } else {
      return null;
    }
  };

  const warningicon = getDeadlineIcon(differenceByDay);

  return (
    <Card>
    <span
      style={{
        textDecoration: done ? "line-through" : "none",
        opacity: done ? 0.6 : 1,
      }}
    > 
      {icon} <br />
      <b>Tantárgy:</b> {subjectName} <br />
      <b>Téma:</b> {topicname} <br />
      <b>Feladás ideje:</b> {sDate} <br />
      <b>Határidő:</b> {deadLine} <br />
      <b>Leírás:</b> {detailsname} <br />

      {warningicon}
      <form>
        Kész:{" "}
        <input type="checkbox" name="done" id="done" checked={done} onChange={() => setDone(!done)}
        />
      </form>
    </span>
    </Card>
  );
};

export default Item;
