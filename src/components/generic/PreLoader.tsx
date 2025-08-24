// PreLoader.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  Variants,
  useMotionValue,
  animate,
  Transition,
} from "framer-motion";

const TRANSITIONS = {
  wordIn: { duration: 0.45, ease: "easeOut" } as Transition,
  wordOut: { duration: 0.45, ease: "easeInOut" } as Transition,
  boxExpand: { duration: 0.45, ease: "easeOut" } as Transition,
  boxRecenter: { duration: 0.35, ease: "easeOut" } as Transition,
  collapse: { duration: 0.55, ease: "easeInOut" } as Transition,
  finalText: { duration: 0.5, ease: "easeInOut" } as Transition,
  overlayFade: { duration: 0.6, ease: "easeInOut" } as Transition,
  stagger: 0.25,
  delays: {
    beforeExit: 500,
    beforeCollapse: 250,
    beforeFinalExit: 900,
    afterExit: 600,
  },
};

const words = ["pioneering", "creative", "excellence"];

const PreLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const containerControls = useAnimation();
  const boxControls = useAnimation();
  const scaleX = useMotionValue(1);

  const hiddenTextRef = useRef<HTMLDivElement | null>(null);
  const [targetWidth, setTargetWidth] = useState<number>(0);

  const [showFinalText, setShowFinalText] = useState(false);
  const [finalExit, setFinalExit] = useState(false);
  const [done, setDone] = useState(false);

  // measure text width once
  useEffect(() => {
    if (!hiddenTextRef.current) return;
    const rect = hiddenTextRef.current.getBoundingClientRect();
    setTargetWidth(Math.ceil(rect.width + 32));
  }, []);

  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    let mounted = true;

    const unsubscribe = scaleX.on("change", (v) => {
      if (v <= 0.5 && mounted) setShowFinalText(true);
    });

    (async () => {
      // words enter
      await containerControls.start("show");

      // wait, then words exit
      await wait(TRANSITIONS.delays.beforeExit);
      await containerControls.start("exit");

      // box expand + recenter
      const width = targetWidth || 220;
      await boxControls.start({
        x: 20,
        width,
        transition: TRANSITIONS.boxExpand,
      });
      await boxControls.start({
        x: 0,
        transition: TRANSITIONS.boxRecenter,
      });

      // collapse
      await wait(TRANSITIONS.delays.beforeCollapse);
      animate(scaleX, 0, TRANSITIONS.collapse);

      // final text exit
      await wait(TRANSITIONS.delays.beforeFinalExit);
      if (mounted) setFinalExit(true);

      await wait(TRANSITIONS.delays.afterExit);
      if (mounted) {
        setDone(true);
        onComplete?.();
      }
    })();

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [targetWidth, containerControls, boxControls, scaleX, onComplete]);

  // parent just handles stagger, no exit here!
  const parentVariant: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: TRANSITIONS.stagger },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: TRANSITIONS.wordIn,
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: TRANSITIONS.wordOut,
    },
  };

  if (done) return null;

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: finalExit ? 0 : 1 }}
      transition={TRANSITIONS.overlayFade}
      className="fixed inset-0 bg-black text-white z-[9999] flex items-center justify-center"
    >
      {/* Words */}
      <motion.div
        className="flex items-center font-RalewayFont text-[40px] capitalize gap-6 absolute"
        variants={parentVariant}
        initial="hidden"
        animate={containerControls}
      >
        {words.map((w, i) => (
          <motion.span
            key={w}
            variants={wordVariant}
            className={i === 1 ? "font-semibold" : "font-light"}
          >
            {w}
          </motion.span>
        ))}
      </motion.div>

      {/* hidden measure */}
      <div
        ref={hiddenTextRef}
        className="absolute opacity-0 pointer-events-none select-none font-RalewayFont text-lg font-medium whitespace-nowrap"
        aria-hidden
      >
        haseeb arshad
      </div>

      {/* Box + collapse */}
      <div className="absolute flex items-center justify-center inset-0">
        <motion.div
          initial={{ width: 0, x: -20 }}
          animate={boxControls}
          style={{ overflow: "hidden", transformOrigin: "right center" }}
        >
          <motion.div
            style={{ transformOrigin: "right center", scaleX }}
            className="flex items-center justify-center"
          >
            <div className="bg-theme-secondary py-2 px-4 text-black font-light text-lg font-RalewayFont whitespace-nowrap">
              <span className="opacity-0">haseeb arshad</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Final Text */}
        {showFinalText && (
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            animate={finalExit ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
            transition={TRANSITIONS.finalText}
            className="absolute text-white font-RalewayFont text-lg font-light capitalize"
          >
            Haseeb Arshad
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default PreLoader;
