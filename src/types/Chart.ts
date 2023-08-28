import Image from "./Image";

export default interface Chart {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    image: Image[];
    url: string;
    firstname: string;
    explicitContent: string;
    language: string;
}