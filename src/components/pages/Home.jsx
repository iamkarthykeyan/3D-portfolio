import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Loader'
import Castle from '../../models/Castle';
import Sky from '../../models/Sky';
import Plane from '../../models/Plane';
import HomeInfo from '../HomeInfo';



const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustCastleScreenSize = () => {
    let screenScale = null;
    let screenPosition = [5, -30, -105];
    let rotation = [0.18, 5.75, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else {
      screenScale = [0.9, 0.9, 0.9];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0, 0, 0];
      screenPosition = [0, 0, 0];
    }
    else {
      screenScale = [0, 0, 0];
      screenPosition = [0, 0, 0];
    }
    return [screenScale, screenPosition];
  }


  const [castleScale, castlePosition, castleRotation] = adjustCastleScreenSize();
  const [planeScale, planePosition] = adjustPlaneScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      { currentStage && <HomeInfo currentStage = {currentStage}/>}
        </div>
      <Canvas className={`w-full h-screen bg-transparent' ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, -0.10, 3.55] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 2, 4]} intensity={2} />
          <ambientLight intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />

          <Sky />
          <Castle
            position={castlePosition}
            scale={castleScale}
            rotation={castleRotation}
            setIsRotating={setIsRotating}
          />
          <Plane
            planeScale={planeScale}
            planePosition={planePosition}
            isRotating={isRotating}
            rotation={[0.2, -105.3, 0]}
            position={[0, 1.4, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home