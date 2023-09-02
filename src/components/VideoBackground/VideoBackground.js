import React from 'react';

const VideoBackground = ({ videoObj }) => {
  return (
    <div className='video-background'>
      <video loop autoPlay muted playsInline>
        <source src={videoObj} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoBackground;
