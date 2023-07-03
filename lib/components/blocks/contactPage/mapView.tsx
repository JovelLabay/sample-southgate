import React, { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

const MapView: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [123.91785670559445, 10.342182298669702],
        zoom: 18,
      });

      // Create a marker at the center coordinates
      const marker = new mapboxgl.Marker()
        .setLngLat([123.91785670559445, 10.342182298669702])
        .addTo(map);
    }
  }, []);

  return (
    <div
      className="flex -ml-[250px]"
      ref={mapContainerRef}
      style={{ width: "71%", height: "700px" }}
    />
  );
};

export default MapView;
