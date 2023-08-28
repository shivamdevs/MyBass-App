import Image from "./Image";

export default interface Playlist {
    id: string;
    userId: string;
    title: string;
    subtitle: string;
    type: string;
    image: Image[];
    url: string;
    songCount: string;
    firstname: string;
    followerCount: string;
    lastUpdated: string;
    explicitContent: string;
}
