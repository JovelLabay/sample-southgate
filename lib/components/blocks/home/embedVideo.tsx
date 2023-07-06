import React from "react";

export default function EmbedVideo() {
  return (
    <div className="flex embed-responsive embed-responsive-16by9 bg-red-300 sm:h-[800px] h-[400px]">
      <iframe
        title="Embeds Page"
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/Sx76F6jip7o"
        allowFullScreen
        width="100%"
      ></iframe>
    </div>
  );
}
