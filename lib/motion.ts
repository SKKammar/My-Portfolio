export const EASING = [0.16, 1, 0.3, 1] as const;

export const DURATIONS = {
    fast: 0.15,
    normal: 0.3,
    slow: 0.6,
    xslow: 1.0,
} as const;

export const fadeInVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: DURATIONS.slow,
            ease: EASING
        }
    }
};
