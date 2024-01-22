import React from 'react';
import "./landingPic.css"

function landingPic(){

    return(
        <div id='LP'>
            <div className='contain'>
                <video id='video_background' src="videos/landingVid.mp4" preload={true} autoPlay={true} loop={true} controls={false} playsInline muted></video>
            </div>
        </div>
    );
}

export default landingPic;