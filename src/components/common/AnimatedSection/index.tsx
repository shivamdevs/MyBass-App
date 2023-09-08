import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { heightAnimationVariants, widthAnimationVariants } from './variables';

export interface AnimatedSectionProps {
    children?: React.ReactNode;
    toggle?: boolean;
    className?: string;
}

function HeightAnimatedSection({ children, toggle, className }: AnimatedSectionProps) {
    return (
        <AnimatePresence>
            {toggle && <motion.div
                variants={heightAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={className}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}

function WidthAnimatedSection({ children, toggle, className }: AnimatedSectionProps) {
    return (
        <AnimatePresence>
            {toggle && <motion.div
                variants={widthAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={className}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
    )
}

export {
    WidthAnimatedSection,
    HeightAnimatedSection,
};

const AnimatedSection = { HeightAnimatedSection, WidthAnimatedSection };

export default AnimatedSection;

