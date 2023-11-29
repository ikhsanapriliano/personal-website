import { motion } from "framer-motion";

type Loading = {
  isLoading: boolean;
};

function LoadingPage(props: Loading) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 9 }}
      className={`bg-secondary-1 second-page w-screen absolute top-0 left-0 bottom-0 right-0 h-screen flex flex-col gap-5 justify-center items-center z-[150] ${!props.isLoading ? `hidden` : `null`}`}
    >
      <div className={`flex gap-5`}>
        <span className={`bg-secondary-4 w-5 h-5 animate-spin`} />
        <span className={`bg-secondary-4 w-5 h-5 animate-spin`} />
        <span className={`bg-secondary-4 w-5 h-5 animate-spin`} />
      </div>
      <p className={`text-secondary-4`}>Loading</p>
    </motion.div>
  );
}

export default LoadingPage;
