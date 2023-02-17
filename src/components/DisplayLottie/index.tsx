import React, { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';
import IDisplayLottie from './IDisplayLottie';

const DisplayLottie = ({ animationPath }: IDisplayLottie) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        loop: true,
        autoplay: true,
        path: animationPath || '',
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
};

export default DisplayLottie;
