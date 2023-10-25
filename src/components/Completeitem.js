import Task from "./Task";

const Completeitem = ({completeItems})=>{
   return (
    
      <div className="todoTask">
        {completeItems.map((ele, index) => {
          return (
            <Task key={index} id={index} task={ele} disable={true}
            />
          );
        })}
      </div>
   )
}

export default Completeitem;