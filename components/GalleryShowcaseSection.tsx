"use client";

import { Show, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES, GALLERY_STATS, HIGHLIGHTS, SHOWCASE_BG_VIDEO_SRC } from "@/lib/constants";

export function GalleryShowcaseSection() {
  return (
    <section
      id="styles"
      className="section-shell relative mt-6 overflow-hidden px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20"
    >
      {/* <video
        className="hero-video pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={SHOWCASE_BG_VIDEO_SRC} type="video/mp4" />
      </video> */}
      <img
        src="https://ik.imagekit.io/bhaveshkumar/alex-fxrwJGMCz_g-unsplash.jpg"
        alt="hero"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div
        className="showcase-surface pointer-events-none absolute inset-0 z-1"
        aria-hidden="true"
      />
      <div
        className="showcase-pattern pointer-events-none absolute inset-0 z-2 opacity-70"
        aria-hidden="true"
      />


      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.05fr] lg:items-center">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="showcase-frame h-[90%] relative rounded-[2.25rem] border border-border/60 p-4 sm:p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2 h-full">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`showcase-image-card overflow-hidden rounded-[1.8rem] border border-border/60 ${
                  index % 2 === 0 ? "sm:translate-y-6" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="showcase-panel group relative overflow-hidden rounded-[2.5rem] border border-border/50 p-0 sm:p-0 lg:p-0">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-70" />
          
          {/* Glassmorphism background */}
          <div className="absolute inset-[1px] rounded-[2.4rem] bg-card/80 backdrop-blur-xl" />
          
          {/* Diagonal Thunder Split Effect - Top Right to Bottom Left */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
            {/* Top-right diagonal section with subtle tint */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-transparent" />
            </div>
            
            {/* Bottom-left diagonal section with subtle tint */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/6 via-transparent to-transparent" />
            </div>
            
            {/* Lightning bolt diagonal line - top right to bottom left */}
            <div 
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(60% 0, 65% 0, 62% 8%, 68% 12%, 60% 22%, 66% 28%, 58% 38%, 64% 44%, 56% 54%, 62% 60%, 54% 70%, 60% 76%, 52% 86%, 58% 92%, 50% 100%, 45% 100%, 48% 92%, 42% 86%, 50% 76%, 44% 70%, 52% 60%, 46% 54%, 54% 44%, 48% 38%, 56% 28%, 50% 22%, 58% 12%, 52% 8%)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent opacity-50 animate-pulse" />
            </div>
            
            {/* Lightning glow effect */}
            <motion.div
              animate={{ 
                opacity: [0.9, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(58% 0, 67% 0, 64% 10%, 70% 14%, 62% 24%, 68% 30%, 60% 40%, 66% 46%, 58% 56%, 64% 62%, 56% 72%, 62% 78%, 54% 88%, 60% 94%, 48% 100%, 43% 100%, 46% 94%, 40% 88%, 48% 78%, 42% 72%, 50% 62%, 44% 56%, 52% 46%, 46% 40%, 54% 30, 48% 24%, 56% 14%, 50% 10%)',
              }}
            >
              <div className="absolute inset-0 bg-primary/8 blur-md" />
            </motion.div>
            
            {/* Secondary thinner lightning branch */}
            <motion.div
              animate={{ 
                opacity: [0.9, 0.3, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(72% 0, 75% 0, 73% 5%, 77% 8%, 72% 15%, 76% 20%, 71% 28%, 75% 34%, 70% 42%, 74% 48%, 69% 56%, 73% 62%, 68% 70%, 72% 76%, 67% 84%, 71% 90%, 66% 100%, 64% 100%, 65% 90%, 63% 84%, 67% 76%, 64% 70%, 68% 62%, 65% 56%, 69% 48%, 66% 42%, 70% 34%, 67% 28%, 71% 20%, 68% 15%, 72% 8%)',
              }}
            >
              <div className="absolute inset-0 bg-primary/15 blur-sm" />
            </motion.div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-6 size-40 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-2xl"
          />
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-transparent via-primary/[0.03] to-primary/[0.08]" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Highlights section with enhanced cards */}
            <div className="grid gap-3 sm:grid-cols-4">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative overflow-hidden rounded-[1.5rem] border border-border/40 bg-gradient-to-br from-card/90 to-card/60 px-4 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary shadow-inner">
                        <Icon className="size-5" />
                      </div>
                      <p className="mt-4 text-sm font-medium tracking-wide text-muted-foreground">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Title section with enhanced typography */}
            <div className="mt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                  </span>
                  <p className="caps-lg font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    Style showcase
                  </p>
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-6 font-mono text-5xl font-normal leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl"
              >
                Transform{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium text-primary">photos</span>
                  <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-primary/20 blur-sm" />
                </span>
                <br />
                into art.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 max-w-xl font-mono text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base"
              >
                Turn everyday portraits and moments into richly styled scenes with cinematic depth,
                warm character, and a premium editorial finish.
              </motion.p>
            </div>

            {/* Stats section with enhanced design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/40 bg-gradient-to-br from-card/60 to-card/30 p-6 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent" />
                <div className="relative z-10 grid gap-6 sm:grid-cols-3">
                  {GALLERY_STATS.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group/stat relative text-center"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />
                      <p className="relative text-4xl font-semibold tracking-tight text-primary transition-transform duration-300 group-hover/stat:scale-110">
                        {stat.value}
                      </p>
                      <p className="caps-xs mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA section with enhanced button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Show when="signed-out">
                <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="relative overflow-hidden rounded-2xl px-8 text-base font-medium shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
                    >
                      <span className="relative z-10">Transform Photos</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    </Button>
                  </motion.div>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="relative overflow-hidden rounded-2xl px-8 text-base font-medium shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
                  >
                    <Link href="/studio" prefetch={false}>
                      <span className="relative z-10">Transform Photos</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    </Link>
                  </Button>
                </motion.div>
              </Show>
            </motion.div>
          </div>
        </div>

        
      </div>
    </section>
  );
}