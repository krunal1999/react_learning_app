import { useContext, useReducer, useState } from "react";
import videosDB from "./Data/data";
import "./App.css";
import AddVideoForm from "./component/AddVideoForm";
import VideoList from "./component/VideoList";
import ThemeContext from "./context/ThemeContex";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./component/Counter";
function App() {
  console.log("app");

  const [editableVideo, setEditableVideo] = useState(null);

  const [mode, setMode] = useState("dark");

  const theme = useContext(ThemeContext);
  console.log(theme);

  function videoReducer(videoss, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...videoss,
          {
            ...action.payload,
            id: videoss.length + 1,
          },
        ];
      case "DEL":
        return videoss.filter((video) => video.id !== action.payload);

      case "EDIT":
        const index = videoss.findIndex((v) => v.id === action.payload.id);
        const newV = [...videoss];
        newV.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newV;

      default:
        return videoss;
    }
  }

  const [videoss, dispatch] = useReducer(videoReducer, videosDB);
  // const [videoss, setNewVideo] = useState(videosDB);

  function updateVideo(id) {
    const newVideo = videoss.find((video) => video.id === id);
    setEditableVideo(newVideo);
  }

  function changeMode() {
    if (mode === "dark") {
      setMode("light");
    } else if (mode === "light") {
      setMode("dark");
    }
    console.log(mode);
  }

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideoDispatchContext.Provider value={dispatch}>
          <button onClick={changeMode}>{mode}Mode</button>
          <div
            className="container d-flex border border-1 rounded flex-row 
    justify-content-center .align-items-center flex-nowrap
    "
            onClick={() => console.log("app")}
          >
            <div className="row">
              <div className="col" style={{ "min-width": "900px" }}>
                <AddVideoForm editableVideo={editableVideo}></AddVideoForm>
              </div>
              <div className="row">
                <VideoList
                  sendVideo={videoss}
                  updateBtn={updateVideo}
                ></VideoList>
              </div>
            </div>
          </div>
          <Counter></Counter>
        </VideoDispatchContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
