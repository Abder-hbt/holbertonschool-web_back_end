export default function hasValuesFromArray(set, array){

    const IsPresentOnSet = (value) =>  set.has(value);
    return array.every(IsPresentOnSet);
}
