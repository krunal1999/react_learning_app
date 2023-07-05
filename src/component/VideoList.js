import Video from "./Video";
import VideoDispatchHook from "../CutomeHook/VideoDispatch";
import axios from "axios";
import { useEffect } from "react";

function VideoList({ sendVideo, updateBtn }) {
  const dispatch = VideoDispatchHook();
  const url = " ";

  

    

  return (
    <>
      {sendVideo.map((video1) => (
        <Video
          id={video1.id}
          title={video1.title}
          alt={video1.alt}
          channelName={video1.channelName}
          verified={video1.verified}
          updateBtn={updateBtn}
          dispatch={dispatch}
        ></Video>
      ))}
    </>
  );
}

export default VideoList;
