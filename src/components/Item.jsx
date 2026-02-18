import Card from "../wrappers/Card";
import { FaPencilAlt, FaBookOpen } from "react-icons/fa";
import { PiWarningBold, PiWarningOctagonFill } from "react-icons/pi";
import moment from "moment";
const Item = ({subjectName, topicname, sDate, deadLine, detailsname, type}) => {

  const today = moment();
  const deadlinemoment = moment(deadLine, "YYYY-MM-DD");
  const differenceByDay = Math.abs(today.diff(deadlinemoment, "days"));


  const getType = (mode) => {
        switch (mode) {
            case "written": return <FaPencilAlt />;
            case "oral": return <FaBookOpen />;
            default: return <FaBookOpen />;
        }
    };

  const icon = getType(type);

  const getDeadlineIcon = (diff) => {
    if (diff < 3) {
      return <PiWarningBold color="orange" size={24} />;
    }
    else if (deadlinemoment.isBefore(today)){
      return <PiWarningOctagonFill color="red" size={24} />;
    }
    else {      return null;
    }
  };

  const warningicon = getDeadlineIcon(differenceByDay);

    return(
        <>
        {subjectName}<br />
        {topicname} <br />
        {sDate} <br />
        {deadLine} <br />
        {detailsname} <br /> 
        {icon} <br />
        {warningicon}
        </>
    );

}

export default Item;