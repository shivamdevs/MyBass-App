import { LazyImage, LazyImageProps } from 'neatkit/components';
import Image from '../../types/Image';
import React from 'react';
import getRandomContrastColor from '../../util/getRandomContrastColor';

export interface ThumbnailProps extends LazyImageProps {
    size?: number;
    image?: Image[];
    children?: React.ReactNode;
    width?: number;
    height?: number;
    round?: number;
}

function Thumbnail({ size, image, children, width, height, round = 5, ...props }: ThumbnailProps) {
    return (
        <LazyImage
            width={width ?? size ?? 150}
            height={height ?? size ?? 150}
            style={{
                borderRadius: `${round}px`,
                backgroundColor: getRandomContrastColor(),
            }}
            imageProps={{
                draggable: false
            }}
            thumbnail={image?.find(img => (img.quality === "50x50"))?.link}
            src={image?.find(img => (img.quality === "500x500"))?.link}
            {...props}
        >{children}</LazyImage>
    );
}

export default Thumbnail;
