import Image from "./Image";

export default interface Artist {
    id: string;
    name: string;
    url: string;
    image: Image[];
    type: string;
    role: string;
}