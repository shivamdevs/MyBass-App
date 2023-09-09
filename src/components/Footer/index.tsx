import { ReactComponent as LogoImage } from '../../assets/logo.svg';

function Footer() {
    return (
        <footer className="w-full bg-gray-950 gap-5 px-2 py-16 rounded-t-2xl flex flex-nowrap items-center justify-around">
            <LogoImage className="max-w-[160px]" />
            <div className="font-medium text-orange-300">Made possible with <a href="https://saavn.me" target="_blank" rel="noopener noreferrer">Saavn.me</a></div>
            <div className="text-sm font-semibold text-gray-600"><a href="https://myoasis.tech" target="_blank" rel="noopener noreferrer">© Myoasis.tech 2023</a></div>
        </footer>
    );
}

export default Footer;
