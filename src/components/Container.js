import Completeitem from "./Completeitem";
import Task from "./Task";
import { useState } from "react";

const Container = () => {
  
 
  const [taskList, setTaskList] = useState([]);
  const [inputTxt, setinputTxt] = useState();
  const [status, setstatus] = useState(true);
  const [ind, setind] = useState();
  const [completeItems , setCompleteItems] = useState([]);

  const addHandler = () => {
    if(inputTxt.length===0) return;
    setTaskList((oldTask) => {
      return [...oldTask, inputTxt];
    });
    setinputTxt("");
  };
  //
  const deleteItem = (selectedId) => {
    console.log(selectedId);
    setTaskList((oldTask) => {
      return oldTask.filter((arrElem, index) => {
        return selectedId !== index;
      });
    });
  };

  //
  const updateItem = (content, idx) => {
    console.log(content + " " + idx);
    setstatus(false);
    setinputTxt(content);
    setind(idx);
  };

  const updateHandler = () => {
    taskList[ind] = inputTxt;
    setTaskList(taskList);
    setstatus(true);
    setinputTxt("");
  };
  // console.log(taskList);
  //
  const upItem = (idx) => {
    if (idx === 0) return; // Cannot move the first item up

    const updatedOrder = [...taskList];
    [updatedOrder[idx], updatedOrder[idx - 1]] = [
      updatedOrder[idx - 1],
      updatedOrder[idx],
    ];

    setTaskList(updatedOrder);
  };

  const downItem = (idx) => {
    if (idx === taskList.length - 1) return; // Cannot move the last item down

    const updatedOrder = [...taskList];
    [updatedOrder[idx], updatedOrder[idx + 1]] = [
      updatedOrder[idx + 1],
      updatedOrder[idx],
    ];

    setTaskList(updatedOrder);
  };

  //
  const CompleteHandler = (newItem , idx)=>{
      setCompleteItems((oldItems)=>{
          return [...oldItems , newItem];
      });

      // delete from older

    setTaskList((oldTask) => {
        return oldTask.filter((arrElem, index) => {
          return idx !== index;
        });
      });

      
  }

  return (
    <div className="container">
      
      <div className="search">
        <input className="searchInput" type="text" placeholder="Enter your task" value={inputTxt} onChange={(e) => {
               setinputTxt(e.target.value);
        }} />
        {status && (
          <button className="addTask" onClick={addHandler}>
            Add Task
          </button>
        )}
        {!status && (
          <button className="addTask" onClick={updateHandler}>
            Update Task
          </button>
        )}
        <button
          className="deleteAll"
          onClick={() => {
            setTaskList([]);
            setCompleteItems([]);
            setinputTxt("");
          }}
        >
          Delete All
        </button>
      </div>

      {/* show task */}
      <div className="todoTask">
        {taskList.map((ele, index) => {
          return (
            <Task key={index} id={index} task={ele} onSelect={deleteItem} onEdit={updateItem} onUp={upItem} onDown={downItem} onComplete={CompleteHandler} disable={false}
            />
          );
        })}
      </div>

      {/* completed task */}
      <h1>Completed Task</h1>
      <Completeitem completeItems={completeItems}/>


    </div>
  );
};

export default Container;
