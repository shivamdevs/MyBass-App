import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { tippy } from '@tippyjs/react';
import OasisMenuProvider from 'oasismenu';
import { SkeletonTheme } from 'react-loading-skeleton';

import "./styles/main.scss";
import 'neatkit/styles.css';
import 'tippy.js/dist/tippy.css';
import "oasismenu/themes/space.css";
import 'tippy.js/animations/shift-away.css';
import 'react-loading-skeleton/dist/skeleton.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

tippy.setDefaultProps({
    arrow: false,
    animation: "shift-away",
    delay: [200, 0],
    theme: 'tippy-theme',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <OasisMenuProvider theme="space" toggle>
            <SkeletonTheme baseColor="#293148" highlightColor="#1f2937">
                <App />
            </SkeletonTheme>
        </OasisMenuProvider>
    </React.StrictMode>,
);
