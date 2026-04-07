import { motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../assets/assets/close.svg";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  closeModal,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm bg-black/50 p-4"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 transition-colors rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src={closeIcon} className="w-6 h-6" alt="Close" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription && subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="rounded-lg size-10 hover-animation"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectDetails;
