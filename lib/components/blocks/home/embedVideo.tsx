import React from "react";

export default function EmbedVideo() {
  return (
    <div className="embed-responsive embed-responsive-16by9 bg-red-300">
      <iframe
        title="Embeds Page"
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/Sx76F6jip7o"
        allowFullScreen
        height={850}
        width="100%"
      ></iframe>
    </div>
  );
}
