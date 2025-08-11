import { useState, useEffect, useRef } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleVideoEnd = () => {
    setShow(false); // yeh hide path hai 
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        ref={videoRef}
        src="/loading/loading.mp4" // yeh video hai
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-[400px] h-auto rounded-lg shadow-lg"// tum yaha se size change kar sakte ho
      />
    </div>
  );
}
