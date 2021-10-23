import React from 'react';

const VideoHome = () => {
  return (
      <section>
        <div class="d-flex justify-content-center">
              <iframe
                class="video_home"
                src="https://www.youtube.com/embed/LBL7C9I0rrU"
                title="Video-Udi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
        </div>
      </section>
  );
};

export default VideoHome;
