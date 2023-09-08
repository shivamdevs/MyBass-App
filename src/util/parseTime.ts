export default function parseTime(totalSeconds: number | null): string {
    if (totalSeconds === null || totalSeconds === undefined || Number.isNaN(totalSeconds)) return "-:--";
    const hours: number = +Math.floor(totalSeconds / 3600).toFixed(0);
    totalSeconds %= 3600;
    const minutes: number = +Math.floor(totalSeconds / 60).toFixed(0);
    const seconds: number = +(totalSeconds % 60).toFixed(0);

    return ((hours > 0) ? String(hours).padStart(2, "0") + ':' : '') + (hours > 0 ? String(minutes).padStart(2, "0") : minutes) + ':' + String(seconds).padStart(2, "0");
}

export function parseDate(date: number | null): string {
    return date ? new Date(date).toISOString().slice(0, 10) : "";
}