import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate angle for pupil rotation
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate offset for iris movement
      const eyeRadius = 15; // Approximate eye radius in pixels
      const irisRadius = eyeRadius-2; // Restrict iris to a smaller radius

      const distance = Math.min(
        Math.sqrt(deltaX ** 2 + deltaY ** 2),
        irisRadius
      );
      const offsetX = (deltaX / Math.sqrt(deltaX ** 2 + deltaY ** 2)) * distance;
      const offsetY = (deltaY / Math.sqrt(deltaX ** 2 + deltaY ** 2)) * distance;

      setIrisPosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-[40vh] md:h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full sm:bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-16 top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {/* Eye 1 */}
          <div className="relative flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full">
            {/* Centered Play Text */}
            <div className="absolute play z-50 text-center text-lg font-mono tracking-widest uppercase">
              Play
            </div>
            {/* Iris */}
            <div
              className="relative w-[7vw] h-[7vw] rounded-full bg-zinc-900"
              style={{
                transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`,
              }}
            >
              {/* Pupil */}
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-8"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="relative flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full">
            {/* Centered Play Text */}
            <div className="absolute play z-50 text-center text-lg font-mono tracking-widest uppercase">
              Play
            </div>
            {/* Iris */}
            <div
              className="relative w-[7vw] h-[7vw] rounded-full bg-zinc-900"
              style={{
                transform: `translate(${irisPosition.x}px, ${irisPosition.y}px)`,
              }}
            >
              {/* Pupil */}
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-8"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
