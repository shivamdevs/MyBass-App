import { OasisMenu, OasisMenuBreak, OasisMenuItem, OasisMenuTrigger } from 'oasismenu';
import usePlayerContext from '../../context/PlayerContext/usePlayerContext';
import LanguagesArr from '../../types/Languages';
import { LuLanguages } from 'react-icons/lu';

const availableLanguages: LanguagesArr[] = [
    "assamese",
    "bengali",
    "bhojpuri",
    "gujarati",
    "haryanvi",
    "kannada",
    "malayalam",
    "marathi",
    "odia",
    "punjabi",
    "rajasthani",
    "tamil",
    "telugu",
    "urdu"
];

function Languages() {
    const { state: { setting: { languages } }, dispatch } = usePlayerContext();
    return (
        <>
            <OasisMenuTrigger name="app-language-selector" placement="bottom" toggle trigger="click">
                <button type="button" className=" hover:bg-[#fff1] flex items-center gap-1 px-4 py-1 rounded-3xl"><LuLanguages /> Languages</button>
            </OasisMenuTrigger>
            <OasisMenu name="app-language-selector" itemClass="capitalize">
                <OasisMenuItem key="english" content="english" checked disabled icon={<LuLanguages />} />
                <OasisMenuItem key="hindi" content="hindi" checked disabled icon={<LuLanguages />} />
                <OasisMenuBreak />
                {availableLanguages.map(lang => <OasisMenuItem
                    key={lang}
                    content={lang}
                    checked={languages.includes(lang)}
                    icon={<LuLanguages />}
                    preventClose
                    onClick={() => dispatch({ type: "LANGUAGE", payload: lang })}
                />)}
            </OasisMenu>
        </>
    );
}

export default Languages;
