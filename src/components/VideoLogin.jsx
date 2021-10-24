import React from 'react';

const VideoLogin = () => {
  return (
      <section>
        <div className="d-flex justify-content-center">
              <iframe
                className="video_login"
                src="https://www.youtube.com/embed/LBL7C9I0rrU"
                title="Video-Udi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
        </div>
      </section>
  );
};

export default VideoLogin;
