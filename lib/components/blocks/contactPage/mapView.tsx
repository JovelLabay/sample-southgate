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
        center: [123.928509, 10.341646],
        zoom: 18,
      });

      // Create a marker at the center coordinates
      const marker = new mapboxgl.Marker()
        .setLngLat([123.928509, 10.341646])
        .addTo(map);
    }
  }, []);

  return (
    <div
      className="flex ml-[200px] sm:-ml-[250px] h-[300px] w-full sm:h-[700px] sm:w-[68%]"
      ref={mapContainerRef}
    />
  );
};

export default MapView;
