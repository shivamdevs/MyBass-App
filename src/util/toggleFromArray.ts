
export default function toggleFromArray<Type>(arr: Array<Type>, element: Type) {
    const is = arr.indexOf(element);
    if (is !== -1) {
        arr.splice(is, 1);
    } else {
        arr.push(element);
    }
    return arr;
}
