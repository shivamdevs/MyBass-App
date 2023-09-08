export default function convertToFormDataString(inputString: string): string {
    const encodedString = inputString.toLowerCase().trim().replace(/ /g, '+');
    return encodeURI(encodedString);
}