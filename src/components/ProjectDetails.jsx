import { motion } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../assets/assets/close.svg";
import githubIcon from "../assets/assets/logos/github.svg";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  githubLinks,
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
          
          {/* Technologies */}
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

          {/* GitHub Links */}
          {githubLinks && githubLinks.length > 0 && (
            <div className="mt-6">
              <h6 className="mb-3 text-lg font-semibold text-white">GitHub Repositories</h6>
              <div className="flex flex-col gap-2">
                {githubLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 transition-all border rounded-lg border-white/10 hover:border-sand hover:bg-white/5 group"
                  >
                    <img src={githubIcon} className="size-5" alt="GitHub" />
                    <span className="text-sm font-medium text-white transition-colors group-hover:text-sand">
                      {link.label}
                    </span>
                    <svg 
                      className="w-4 h-4 ml-auto transition-transform text-neutral-400 group-hover:text-sand group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectDetails;
