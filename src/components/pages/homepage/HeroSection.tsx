import { motion } from "framer-motion";
import WatchVideoIcon from "./WatchVideoIcon";

export default function HeroSection({
  animatedText,
}: {
  animatedText: string;
}) {
  return (
    <section className="relative w-full min-h-screen flex flex-col pt-[120px]">
      {/* Background */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/images/main-mobile.jpg')" }}
      /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 -z-10" />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-10 left-5 w-20 h-20 rounded-full bg-theme-primary/10 blur-3xl -z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-28 right-8 w-24 h-24 rounded-full bg-theme-secondary/10 blur-3xl -z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Content */}
      <div className="container relative flex flex-col justify-center flex-1 pb-28">
        <motion.span
          className="uppercase text-xs tracking-[3px] text-theme-primary mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Crafting Digital Experiences
        </motion.span>

        <motion.h1
          className="font-SyneFont font-bold leading-tight sm:text-[48px] text-[34px] mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I’m <span className="text-theme-primary">{animatedText}</span>
        </motion.h1>

        <motion.p
          className="text-white/80 sm:text-base text-sm mb-5 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A creative front-end developer passionate about building interactive,
          accessible, and high-performance web experiences with a focus on
          modern design trends.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#works"
            className="bg-theme-primary px-6 py-2 rounded-full text-sm font-medium hover:bg-theme-primary/90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white/10 border border-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/20 transition"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <WatchVideoIcon
            iconSize={40}
            playIconSize={12}
            seperatorStyle="w-4"
            iconWrapperStyle="gap-1.5"
            iconTitleStyle="text-[11px]"
          />
        </motion.div>
      </div>

      {/* Social Box */}
      <motion.div
        className="absolute bottom-0 left-0 z-20 -mb-[2px] container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <div className="bg-white/5 backdrop-blur-md border-x border-t border-white/10 rounded-t-lg px-5 py-3 flex items-center gap-4 shadow-lg w-fit">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.397 7.863 10.916.575.106.785-.25.785-.556 
                0-.275-.01-1.002-.015-1.966-3.2.695-3.875-1.543-3.875-1.543-.523-1.33-1.278-1.684-1.278-1.684-1.045-.715.08-.699.08-.699 
                1.156.081 1.764 1.187 1.764 1.187 1.028 1.763 2.695 1.253 3.35.958.104-.744.403-1.254.732-1.542-2.555-.291-5.238-1.277-5.238-5.682 
                0-1.255.449-2.282 1.184-3.086-.119-.29-.513-1.461.112-3.047 0 0 .965-.309 3.162 1.178a11.026 11.026 0 0 1 2.878-.387c.975.004 1.957.132 
                2.878.387 2.197-1.487 3.16-1.178 3.16-1.178.627 1.586.233 2.757.114 3.047.737.804 1.183 1.831 1.183 3.086 
                0 4.417-2.688 5.387-5.253 5.674.415.357.785 1.063.785 2.142 0 1.546-.014 2.793-.014 3.174 0 .309.208.668.79.555C20.71 21.394 24 17.086 
                24 12c0-6.352-5.148-11.5-12-11.5Z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                d="M20.447 20.452H16.89v-5.569c0-1.327-.027-3.036-1.849-3.036-1.85 0-2.134 
              1.445-2.134 2.939v5.666H9.349V9h3.409v1.561h.048c.475-.9 1.637-1.849 
              3.37-1.849 3.602 0 4.269 2.37 4.269 5.455v6.285zM5.337 
              7.433a1.986 1.986 0 1 1 0-3.972 1.986 1.986 0 0 1 0 
              3.972zM6.958 20.452H3.716V9h3.242v11.452z"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                d="M24 4.557a9.83 9.83 0 0 1-2.828.775 
              4.932 4.932 0 0 0 2.165-2.724 
              9.864 9.864 0 0 1-3.127 1.195 
              4.916 4.916 0 0 0-8.384 4.482 
              13.94 13.94 0 0 1-10.125-5.14 
              4.822 4.822 0 0 0-.664 2.475c0 
              1.708.87 3.216 2.188 4.099a4.904 
              4.904 0 0 1-2.228-.616c-.054 
              2.385 1.671 4.623 4.15 5.116a4.935 
              4.935 0 0 1-2.224.084 4.924 4.924 
              0 0 0 4.6 3.417A9.867 9.867 0 0 
              1 0 19.54a13.94 13.94 0 0 0 7.548 
              2.212c9.057 0 14.009-7.513 
              14.009-14.009 0-.213-.004-.425-.014-.636A9.935 
              9.935 0 0 0 24 4.557z"
              />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                d="M24 4.557a9.83 9.83 0 0 1-2.828.775 
              4.932 4.932 0 0 0 2.165-2.724 
              9.864 9.864 0 0 1-3.127 1.195 
              4.916 4.916 0 0 0-8.384 4.482 
              13.94 13.94 0 0 1-10.125-5.14 
              4.822 4.822 0 0 0-.664 2.475c0 
              1.708.87 3.216 2.188 4.099a4.904 
              4.904 0 0 1-2.228-.616c-.054 
              2.385 1.671 4.623 4.15 5.116a4.935 
              4.935 0 0 1-2.224.084 4.924 4.924 
              0 0 0 4.6 3.417A9.867 9.867 0 0 
              1 0 19.54a13.94 13.94 0 0 0 7.548 
              2.212c9.057 0 14.009-7.513 
              14.009-14.009 0-.213-.004-.425-.014-.636A9.935 
              9.935 0 0 0 24 4.557z"
              />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                d="M24 4.557a9.83 9.83 0 0 1-2.828.775 
              4.932 4.932 0 0 0 2.165-2.724 
              9.864 9.864 0 0 1-3.127 1.195 
              4.916 4.916 0 0 0-8.384 4.482 
              13.94 13.94 0 0 1-10.125-5.14 
              4.822 4.822 0 0 0-.664 2.475c0 
              1.708.87 3.216 2.188 4.099a4.904 
              4.904 0 0 1-2.228-.616c-.054 
              2.385 1.671 4.623 4.15 5.116a4.935 
              4.935 0 0 1-2.224.084 4.924 4.924 
              0 0 0 4.6 3.417A9.867 9.867 0 0 
              1 0 19.54a13.94 13.94 0 0 0 7.548 
              2.212c9.057 0 14.009-7.513 
              14.009-14.009 0-.213-.004-.425-.014-.636A9.935 
              9.935 0 0 0 24 4.557z"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* SVG curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          className="w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A0A0A"
            d="M0,80 C480,200 960,0 1440,80 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
