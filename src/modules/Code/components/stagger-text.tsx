'use client';

// This code is part open-source library glozUI: https://ui.gloz.tech
// Author: @wizsuby
// Please share the library if it's helpful.
// Follow the author on Twitter: https://twitter.com/wizsuby

import { cn } from 'src/lib/utils';
import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface StaggeredTextAnimationProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const textAnimationVarient = {
  hidden: { y: 150 },
  visible: { y: 0 },
};

export const StaggeredTextAnimation = ({
  text,
  className,
  ...props
}: StaggeredTextAnimationProps) => {
  const textArray = text.split(' ');
  return (
    <p className={cn('flex flex-wrap text-9xl font-semibold ', className)} {...props}>
      {textArray.map((word, workIndex) => (
        <span
          className="
          relative
          block
          overflow-hidden
          pb-5
          before:absolute
          before:block
          before:h-full
          before:w-full"
          key={`${word}--${workIndex}`}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              variants={textAnimationVarient}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: charIndex * 0.05,
                ease: [0.44, 0.13, 0.23, 0.96],
              }}
              key={`${char}--${charIndex}`}
              className="relative z-10 inline-block"
            >
              {char}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};
