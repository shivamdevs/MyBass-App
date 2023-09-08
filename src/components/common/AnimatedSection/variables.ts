export const heightAnimationVariants = {
    initial: {
        height: 0,
        opacity: 0,
    },
    animate: {
        height: "auto",
        opacity: 1,
        transition: {
            height: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.15,
                delay: 0.1,
            },
        },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {
            height: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.1,
            },
        },
    }
};

export const widthAnimationVariants = {
    initial: {
        width: 0,
        opacity: 0,
    },
    animate: {
        width: "auto",
        opacity: 1,
        transition: {
            width: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.15,
                delay: 0.1,
            },
        },
    },
    exit: {
        width: 0,
        opacity: 0,
        transition: {
            width: {
                duration: 0.2,
            },
            opacity: {
                duration: 0.1,
            },
        },
    }
};