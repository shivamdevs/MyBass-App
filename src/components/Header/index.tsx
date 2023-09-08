import { ReactComponent as LogoImage } from '../../assets/logo.svg';
import Button from '../common/Button';
import Languages from './Languages';
import Search from './Search';
// import { AnimatePresence, motion } from 'framer-motion';

function Header() {
    return (
        <>
            <header
                className="px-5 py-3 flex flex-nowrap items-center justify-between sticky top-0 z-10 rounded-lg bg-[#000a]"
                // initial={{
                //     y: "-10%",
                //     opacity: 0,
                // }}
                // animate={{
                //     y: 0,
                //     opacity: 1,
                // }}
                // transition={{
                //     delay: 0.5
                // }}
            >
                <LogoImage className="max-w-[160px]" />
                <Search />
                <div className="inline-flex gap-10 flex-nowrap">
                    <Languages />
                    <Button type="button" onClick={() => {

                    }}>Login</Button>
                </div>
            </header>
        </>
    );
}

export default Header;