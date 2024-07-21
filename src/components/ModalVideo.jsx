import React from "react";
import "../styles/ModalVideo.css";

const ModalVideo = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="video-container">
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
