import Item from "./Item";

const List = ({datas}) =>{
    return(
        <>
            {console.log(datas)}
            {datas.map((data, index) =>
                <Item
                    key={index}
                    subjectName={data.subjectName}
                    topicname={data.topicname}
                    sDate={data.sDate}
                    deadLine={data.deadLine}
                    detailsname={data.detailsname}
                    type={data.type}
                />  
        
        )}
        </>
    )

}
export default List