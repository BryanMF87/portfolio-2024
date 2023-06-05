import React from 'react';

const VideoPlayer = () => {
  return (
    <video controls className="w-full max-w-5xl mt-10 mx-auto">
      <source src="/videos/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;