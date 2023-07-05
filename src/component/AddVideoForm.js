import { useContext, useEffect, useRef, useState } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

function AddVideoForm({editableVideo}) {

  const dispatch = useContext(VideoDispatchContext)
  const inputRef = useRef(null)

  const initialData={
        alt: "asdadasda",
        verified: true,
        title:'',
        channelName:'' 
      }
        
  
  const [video, setVidoess] = useState(initialData);

      

  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if(editableVideo){
      
      dispatch({type:'EDIT' , payload:video})
      

    }else{
      dispatch({type:'ADD' , payload:video})
    }

    console.log(video)
  setVidoess(initialData)
  }

  function handleChange(e) {
    e.stopPropagation();
    
    setVidoess({...video,
        [e.target.name]: e.target.value
  })
  }

  useEffect(()=>{
    if(editableVideo) {
      setVidoess(editableVideo)}

      inputRef.current.focus();
      inputRef.current.value="asdas"


  },[editableVideo])


  

  return (
    <>
      <form>
        <div className="form-floating mb-3">
          <input
            ref = {inputRef}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="title"
            onChange={handleChange}
            value={video.title}

          />
          <label htmlFor="floatingInput">Title</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="channelName"
            onChange={handleChange}
            value={video.channelName}

          />
          <label htmlFor="floatingPassword">channelName</label>
        </div>

        <br></br>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {editableVideo ? "edit" : "submit"}
        </button>
      </form>
    </>
  );
}

export default AddVideoForm;
