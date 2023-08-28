import { ReactComponent as LogoImage } from '../../assets/logo.svg';
import Button from '../common/Button';
import Search from './Search';
import { AnimatePresence, motion } from 'framer-motion';

function Header() {
    return (
        <AnimatePresence>
            <motion.header
                className="px-5 py-3 flex flex-nowrap items-center justify-between sticky top-0 z-10 theme-bg-color"
                initial={{
                    y: "-10%",
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 0.5
                }}
            >
                <LogoImage className="max-w-[160px]" />
                <Search />
                <div className="inline-flex gap-10 flex-nowrap">
                    <button type="button" className="">Languages</button>
                    <Button type="button" onClick={() => {

                    }}>Login</Button>
                </div>
            </motion.header>
        </AnimatePresence>
    );
}

export default Header;
