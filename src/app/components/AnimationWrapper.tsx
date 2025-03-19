'use client';

import { AnimatePresence } from 'framer-motion';

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default AnimationWrapper; 