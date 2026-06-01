import { motion } from 'framer-motion';
import { pageTransition } from '../utils/motion';

export default function PageWrapper({ children }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.main>
  );
}
