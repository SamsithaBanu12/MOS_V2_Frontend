import { useEffect, useRef } from 'react';
import anime from 'animejs';
import satelite from '../assets/satellite.png';

function ProceduresPage() {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    // 1️⃣ Fly in + initial zoom
    tl.add({
      targets: boxRef.current,
      scale: [0.3, 1],
      translateX: [-200, 100],
      translateY: [-150, 200],
      opacity: [0, 1],
      rotate: ['-15deg', '0deg'],
      duration: 1400,
    })

    // 2️⃣ Rotation
    .add({
      targets: boxRef.current,
      rotate: '1turn',
      duration: 6000,
      easing: 'linear',
    })

    // 3️⃣ ZOOM IN after rotation ✅
    .add({
      targets: boxRef.current,
      scale: 1.15,
      duration: 900,
      easing: 'easeOutQuad',
    })

    // 4️⃣ Slight zoom out (natural feel)
    .add({
      targets: boxRef.current,
      scale: 1,
      duration: 600,
      easing: 'easeInOutQuad',
    })

    // 5️⃣ Floating loop
    .add({
      targets: boxRef.current,
      translateY: [250, 230],
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 2200,
      loop: true,
    });

  }, []);

  return (
    <div>
      <img
        ref={boxRef}
        src={satelite}
        alt="satelite-image"
        style={{
          width: 600,
          height: 600,
          background: 'transparent',
          display: 'block',
          objectFit: 'contain',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

export default ProceduresPage;
