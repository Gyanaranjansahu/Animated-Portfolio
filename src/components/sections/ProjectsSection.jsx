import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../../data/portfolio";
import { fadeUp, pageTransition, stagger } from "../../utils/motion";
import MagneticButton from "../ui/MagneticButton";
import SectionHeader from "../ui/SectionHeader";

/* ----------------------------------
   PROJECT VISUAL
---------------------------------- */

function ProjectVisual({ project }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mb-7 grid h-52 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] sm:h-60"
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.015,
            }
      }
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {/* Grid Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Background Gradient */}

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${project.accent}40, transparent 65%)`,
        }}
      />

      {/* Animated Orbit */}

      <motion.div
        className="absolute h-44 w-44 rounded-full border border-dashed"
        style={{
          borderColor: `${project.accent}55`,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary Orbit */}

      <motion.div
        className="absolute h-32 w-32 rounded-full border"
        style={{
          borderColor: `${project.accent}25`,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: -360,
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          rotate: {
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Project Mark */}

      <motion.div
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border bg-[#101010]"
        style={{
          borderColor: `${project.accent}65`,
          boxShadow: `0 0 50px ${project.accent}18`,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-center">
          <motion.span
            className="block text-3xl font-black tracking-tighter"
            style={{
              color: project.accent,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.7, 1, 0.7],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {project.mark}
          </motion.span>

          <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
            Project
          </span>
        </div>
      </motion.div>

      {/* Floating Accent */}

      <motion.span
        className="absolute right-7 top-7 h-2 w-2 rounded-full"
        style={{
          backgroundColor: project.accent,
          boxShadow: `0 0 16px ${project.accent}`,
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.25, 1, 0.25],
                scale: [0.8, 1.3, 0.8],
              }
        }
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Project Category */}

      <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
        Selected Work / 2026
      </span>
    </motion.div>
  );
}

/* ----------------------------------
   PROJECT CARD
---------------------------------- */

function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();

  const isLive = Boolean(project.liveDemo);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -10,
              rotateX: 2,
              rotateY: -2,
              boxShadow: `0 0 70px ${project.accent}18`,
            }
      }
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 sm:p-6"
    >
      {/* Top Accent Line */}

      <motion.div
        className="absolute left-0 top-0 h-[2px] w-full origin-left"
        style={{
          backgroundColor: project.accent,
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
          duration: 0.9,
          delay: index * 0.1,
        }}
      />

      {/* Background Glow */}

      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
        style={{
          backgroundColor: project.accent,
        }}
      />

      {/* Project Number */}

      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.15em] text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{
            color: project.accent,
          }}
        >
          {project.category || "Featured Project"}
        </span>
      </div>

      {/* Project Visual */}

      <ProjectVisual project={project} />

      {/* Project Heading */}

      <div className="relative z-10 flex flex-col justify-between gap-3 min-[420px]:flex-row min-[420px]:items-start">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-[#b8ff3d] sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
            {project.status || "Featured Work"}
          </p>
        </div>

        {/* Status Badge */}

        <span
          className="w-fit shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{
            borderColor: `${project.accent}55`,
            color: isLive ? project.accent : "#ffffff80",
          }}
        >
          {isLive ? "Live" : "Coming Soon"}
        </span>
      </div>

      {/* Description */}

      <p className="relative z-10 mt-5 text-sm leading-7 text-white/55">
        {project.description}
      </p>

      {/* Features */}

      <div className="relative z-10 mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
          Key Features
        </p>

        <ul className="mt-3 space-y-2">
          {project.features?.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm leading-6 text-white/65"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{
                  backgroundColor: project.accent,
                }}
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {project.technologies?.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-semibold text-white/55 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/75"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* CTA */}

      <div className="relative z-10 mt-7 flex flex-wrap items-center gap-4">
        {isLive ? (
          <MagneticButton
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#080907] transition-transform duration-300 hover:scale-[1.02]"
          >
            View Live Project ↗
          </MagneticButton>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/35">
            Link Coming Soon
          </span>
        )}

        <span className="text-xs font-medium text-white/25">
          {isLive ? "Explore the project" : "Currently in development"}
        </span>
      </div>

      {/* Bottom Accent */}

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full"
        style={{
          backgroundColor: project.accent,
        }}
      />
    </motion.article>
  );
}

/* ----------------------------------
   PROJECTS SECTION
---------------------------------- */

function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#080808] px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8"
      {...pageTransition}
    >
      {/* Decorative Top Line */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8ff3d]/50 to-transparent" />

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b8ff3d]/[0.025] blur-3xl" />

      <div className="relative z-10">
        {/* Section Header */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  opacity: 0,
                  y: 25,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects built with purpose."
            text="A collection of practical projects combining thoughtful UI, full-stack development, and intelligent product experiences."
          />
        </motion.div>

        {/* Projects Grid */}

        <motion.div
          className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Statement */}

        <motion.div
          className="mx-auto mt-16 max-w-6xl border-t border-white/10 pt-7"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-7 text-white/40">
              Building, experimenting, and improving one project at a time.
            </p>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b8ff3d]">
              More projects in progress ↗
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;