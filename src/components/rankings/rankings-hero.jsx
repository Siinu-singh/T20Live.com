'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const PlayerImage = ({ src, alt, hint, className, rotation, delay }) => (
    <motion.div
        className={`absolute w-40 h-56 md:w-52 md:h-72 rounded-xl shadow-2xl overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: rotation }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
        <Image src={src} fill alt={alt} data-ai-hint={hint} className="object-cover group-hover:scale-105 transition-transform duration-300" />
    </motion.div>
);

export function RankingsHero({ title, subtitle, topText, icon }) {
  return (
    <section className="bg-card relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="container mx-auto h-full px-4 relative">
                <PlayerImage
                    src="https://images.unsplash.com/photo-1659081476744-95da9bc99008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUxODgyMzUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Top ranked batsman"
                    hint="cricket player portrait"
                    className="left-[5%] top-[15%]"
                    rotation={-12}
                    delay={0.2}
                />
                <PlayerImage
                    src="https://images.unsplash.com/photo-1685541000777-8d0995d38909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JpY2tldCUyMHBsYXllciUyMGludGVuc2V8ZW58MHx8fHwxNzUxOTY2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Top ranked bowler"
                    hint="cricket player intense"
                    className="right-[5%] top-[20%]"
                    rotation={10}
                    delay={0.4}
                />
                <PlayerImage
                    src="https://images.unsplash.com/photo-1709134800927-6c0ba3c65919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjcmlja2V0JTIwcGxheWVyJTIwYWN0aW9ufGVufDB8fHx8MTc1MTk2NjYyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Top ranked all-rounder"
                    hint="cricket player action"
                    className="left-[20%] bottom-[5%]"
                    rotation={8}
                    delay={0.6}
                />
                <PlayerImage
                    src="https://images.unsplash.com/photo-1685541000562-a00dcf472343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjcmlja2V0JTIwY2FwdGFpbiUyMHRoaW5raW5nfGVufDB8fHx8MTc1MTg4MjM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Top ranked captain"
                    hint="cricket captain thinking"
                    className="right-[25%] bottom-[10%]"
                    rotation={-5}
                    delay={0.8}
                />
            </div>
        </div>

      <div className="absolute inset-0 bg-card/70 dark:bg-card/80 z-10" />
      <div className="relative z-20 text-center text-foreground p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {topText && icon && (
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
                {icon}
                <span>{topText}</span>
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-shadow-lg">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
