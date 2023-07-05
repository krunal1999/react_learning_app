import PlayButton from "./PlayButton";
import "./Video.css";
function Video({
  title,
  alt,
  channelName,
  verified,
  dispatch,
  id,
  updateBtn,
}) { 
  return (
    <>
      <div className="col-12 col-lg-4 col-md-6 col-sm-12 flex-shrink-0">
        <div
          className="card shadow p-3 mb-5 bg-body rounded"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {channelName}
              <span>{verified && "✅"} </span>
            </h6>
            <p className="card-text">
              {alt}
              <PlayButton
                onPlay={() => console.log("playing")}
                onPause={() => console.log("Pause")}
              >
                {title}
              </PlayButton>
            </p>
            <button
              type="button"
              class="btn btn-danger m-1"
              onClick={() => dispatch({type:'DEL' , payload:id})}
            >
              Del
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => updateBtn(id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Video;
