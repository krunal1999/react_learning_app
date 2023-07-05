import { useState } from "react";

function PlayButton({children,onPlay,onPause}){

        const [start, setStart] = useState(false);

        
        function handleClick(e){
                e.stopPropagation();
                if(start) onPause();
                else onPlay();

                setStart(!start)
                console.log(children)
                
                
        }

        return(
                <button onClick={handleClick}>{start ? 'Pause ':'Play '}{children}</button>
                
        )


}

export default PlayButton;