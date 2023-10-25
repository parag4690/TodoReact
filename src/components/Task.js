

const Task = (props) => {

//   const [disable , setdisable] = useState(false);

  const updateHandler = ()=>{
    props.onEdit(props.task , props.id);
  }
  const upHandler = ()=>{
    props.onUp(props.id);
  }
  const downHandler=()=>{
    props.onDown(props.id);
  }
  const checkHandler = ()=>{
    console.log("clicked");
    props.onComplete(props.task , props.id);
  }
  return (
    <div className={`task${props.disable===false?" ":"add" }`}>
      <div className="con">
        <input type="checkbox" className="taskStatus" onClick={checkHandler} />
        <p className={`${props.disable===true?"line":" "}`}>{props.task}
        </p>
      </div>
      <div className="options">
        <p className="emoji" onClick={updateHandler}> 🖊️</p>
        <div className="direction">
          <p className="emoji" onClick={upHandler}>⇑</p>
          <p className="emoji" onClick={downHandler}>⇓</p>
        </div>
        <p className="emoji dust" onClick={()=>{
            props.onSelect(props.id);
        }}>🗑</p>
      </div>
    </div>
  );
};

export default Task;
