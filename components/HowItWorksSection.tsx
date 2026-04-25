"use client";
import {
  ImagePlusIcon,
  PaletteIcon,
  SparklesIcon,
  Palette,
  Sparkles,
  UploadCloud,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/GridBackground";
import { HOW_IT_WORKS_STEPS, WORKFLOW_STYLE_PREVIEW } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  return (
    <GridBackground className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-pill caps-md inline-flex items-center rounded-full px-4 py-2 text-xs font-medium uppercase text-primary">
            How it works
          </div>

          <h2 className="mt-6 font-sans text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From original photo to art-directed result.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A clean four-step workflow designed to feel fast, premium, and
            predictable from the first upload to the final export.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-[1.05fr_0.95fr]">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="workflow-panel group relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:col-span-5 lg:row-span-2"
          >
            <div className="relative z-10 flex h-full flex-col">
              {/* Header */}
              <motion.div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-primary">
                    {HOW_IT_WORKS_STEPS[0].step}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {HOW_IT_WORKS_STEPS[0].title}
                  </h3>
                </div>

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
                >
                  <UploadCloud className="size-6" />
                </motion.div>
              </motion.div>

              {/* Center Visual */}
              <motion.div className="relative mb-8 flex min-h-[17rem] flex-1 items-center justify-center overflow-hidden rounded-[1.75rem] border border-border/60 bg-card">
                {/* Animated Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="absolute size-56 rounded-full border border-border/25"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-[1.5rem] border border-dashed border-border/30"
                />

                {/* Center Icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="how-icon-ring relative flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <UploadCloud className="size-10" />
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p className="max-w-md text-base leading-7 text-muted-foreground">
                {HOW_IT_WORKS_STEPS[0].body}
              </motion.p>
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="workflow-panel relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:col-span-7"
          >
            <div className="relative z-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-primary">
                    {HOW_IT_WORKS_STEPS[1].step}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {HOW_IT_WORKS_STEPS[1].title}
                  </h3>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground"
                >
                  <Palette className="size-6" />
                </motion.div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {WORKFLOW_STYLE_PREVIEW.map((style, index) => (
                  <motion.div
                    key={style}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "rounded-[1.5rem] border border-border/60 px-4 py-4 transition-all",
                      index === 0
                        ? "bg-secondary shadow-lg shadow-primary/10"
                        : "bg-card",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">
                        {style}
                      </p>

                      {index === 0 ? (
                        <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                          Selected
                        </span>
                      ) : (
                        <span className="rounded-full border border-border/60 px-2.5 py-1 text-xs text-muted-foreground">
                          Preset
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground"
              >
                {HOW_IT_WORKS_STEPS[1].body}
              </motion.p>
            </div>
          </motion.article>
          {/* /* ---------- STEP 3 (FEATURED WITH BORDER ANIMATION) ---------- */ }
          <motion.article
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="workflow-panel workflow-panel-featured relative overflow-hidden rounded-[2rem] lg:col-span-7"
>
  {/* Rotating Border Light */}
  <motion.div
    className="absolute inset-0 rounded-[2rem]"
    style={{
      background:
        "conic-gradient(from 0deg, transparent 0%, #6366f1 10%, #06b6d4 25%, transparent 40%)",
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* Glow blur layer (makes it premium) */}
  <motion.div
    className="absolute inset-0 rounded-[2rem] blur-xl opacity-60"
    style={{
      background:
        "conic-gradient(from 0deg, transparent 0%, #6366f1 10%, #06b6d4 25%, transparent 40%)",
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* Inner wrapper to create border thickness */}
  <div className="relative z-10 m-[2px] rounded-[2rem] bg-background p-6 sm:p-8 border border-border/70">
    <div className="mb-8 flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium tracking-wide text-primary">
          {HOW_IT_WORKS_STEPS[2].step}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          {HOW_IT_WORKS_STEPS[2].title}
        </h3>
      </div>

      <motion.div
        whileHover={{ scale: 1.1, rotate: -8 }}
        className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
      >
        <Sparkles className="size-6" />
      </motion.div>
    </div>

    <div className="rounded-[1.75rem] border border-border/60 bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="caps-sm text-sm uppercase text-muted-foreground">
            Engine status
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            Protecting identity and composition
          </p>
        </div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            className="pointer-events-none rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground shadow-lg shadow-primary/20"
            tabIndex={-1}
            type="button"
          >
            AI Rendering
          </button>
        </motion.div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="h-3 overflow-hidden rounded-full bg-secondary/70">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: "78%" }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <div className="text-sm text-muted-foreground">
          78% complete
        </div>
      </div>
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground"
    >
      {HOW_IT_WORKS_STEPS[2].body}
    </motion.p>
  </div>
</motion.article>
        </div>
      </section>
    </GridBackground>
  );
}
