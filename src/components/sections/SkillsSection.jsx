import { motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import { fadeUp, stagger } from "../../utils/motion";
import SectionHeader from "../ui/SectionHeader";

/* ----------------------------------
   SKILL IMAGES
---------------------------------- */

const skillImages = {
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

  CSS3:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  "JavaScript (ES6+)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

 MySQL:
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",

  "REST APIs":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
};

/* ----------------------------------
   SKILL COLORS
---------------------------------- */

const skillColors = {
  HTML5: "#e34f26",
  CSS3: "#1572b6",
  JavaScript: "#f7df1e",
  "JavaScript (ES6+)": "#f7df1e",
  React: "#61dafb",
  "Tailwind CSS": "#38bdf8",
  "Node.js": "#68a063",
  "Express.js": "#ffffff",
  MongoDB: "#47a248",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  MySQL: "#00758f",
  Git: "#f05032",
  GitHub: "#ffffff",
  Docker: "#2496ed",
  "REST APIs": "#50dcb7",
};

/* ----------------------------------
   FALLBACK ICON
---------------------------------- */

const fallbackIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

/* ----------------------------------
   GET SKILL NAME
---------------------------------- */

const getSkillName = (skill) => {
  if (typeof skill === "string") return skill;

  return skill?.name || skill?.title || skill?.label || "";
};

/* ----------------------------------
   SKILL ICON
---------------------------------- */

const SkillIcon = ({ label }) => {
  const image = skillImages[label] || fallbackIcon;
  const color = skillColors[label] || "#b8ff3d";

  return (
    <motion.div
      className="relative flex h-28 w-28 items-center justify-center"
      initial={{
        opacity: 0,
        scale: 0.7,
        rotate: -12,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed"
        style={{
          borderColor: `${color}70`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner ring */}
      <motion.div
        className="absolute inset-4 rounded-full border"
        style={{
          borderColor: `${color}35`,
        }}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Skill logo container */}
      <motion.div
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#111111]"
        whileHover={{
          scale: 1.15,
          rotate: 6,
          borderColor: color,
          boxShadow: `0 0 30px ${color}35`,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 15,
        }}
      >
        <motion.img
          src={image}
          alt={`${label} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          onError={(event) => {
            event.currentTarget.src = fallbackIcon;
          }}
        />
      </motion.div>

      {/* Floating accent dot */}
      <motion.span
        className="absolute right-1 top-3 h-2 w-2 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 14px ${color}`,
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.25, 0.8],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

/* ----------------------------------
   SKILL CARD
---------------------------------- */

const SkillCard = ({ skill, index }) => {
  const skillName = getSkillName(skill);
  const color = skillColors[skillName] || "#b8ff3d";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-colors duration-300 hover:border-white/25"
    >
      {/* Animated top line */}
      <motion.div
        className="absolute left-0 top-0 h-[2px] w-full origin-left"
        style={{
          backgroundColor: color,
        }}
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.06,
        }}
      />

      {/* Decorative background shape */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-10"
        style={{
          backgroundColor: color,
        }}
      />

      {/* Card header */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs text-white/30">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{
            color,
          }}
        >
          Skill
        </span>
      </div>

      {/* Icon */}
      <div className="relative z-10 mt-6 flex justify-center">
        <SkillIcon label={skillName} />
      </div>

      {/* Skill name */}
      <div className="relative z-10 mt-5 text-center">
        <h3 className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-[#b8ff3d]">
          {skillName}
        </h3>

        {/* Animated underline */}
        <motion.div
          className="mx-auto mt-3 h-[1px]"
          style={{
            backgroundColor: color,
          }}
          initial={{
            width: 24,
          }}
          whileHover={{
            width: 60,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </div>
    </motion.div>
  );
};

/* ----------------------------------
   SKILL GROUP
---------------------------------- */

const SkillGroup = ({ group, groupIndex }) => {
  const groupTitle = group.title || group.name || "Skills";
  const skills = group.skills || group.items || [];

  return (
    <motion.div
      variants={fadeUp}
      className="relative"
    >
      {/* Group heading */}
      <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#50dcb7]">
            {String(groupIndex + 1).padStart(2, "0")} / Expertise
          </p>

          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {groupTitle}
          </h3>
        </div>

        <span className="font-mono text-xs text-white/30">
          {String(skills.length).padStart(2, "0")} items
        </span>
      </div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={`${getSkillName(skill)}-${index}`}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ----------------------------------
   MAIN SKILLS SECTION
---------------------------------- */

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Decorative top line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8ff3d]/50 to-transparent" />

      {/* Decorative side line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.025]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
        >
          <SectionHeader
            eyebrow="My toolkit"
            title="Skills that bring ideas to life."
            description="A practical toolkit built through projects, experimentation, and continuous learning."
          />
        </motion.div>

        {/* Skill groups */}
        <motion.div
          className="mt-16 space-y-20 sm:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={stagger}
        >
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={`${group.title || group.name}-${index}`}
              group={group}
              groupIndex={index}
            />
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24 border-t border-white/10 pt-8 sm:mt-32"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              I believe good development is not only about writing code.
              It is about creating useful, accessible, and memorable experiences.
            </p>

            <motion.div
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b8ff3d]"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Always learning
              <span className="text-lg">↗</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;