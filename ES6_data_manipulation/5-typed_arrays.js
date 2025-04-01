export default function createInt8TypedArray(length, position, value){

    const AB = new ArrayBuffer(length);

    const view = new DataView(AB);

    if (position >= length){
        throw new Error('Position en dehors de la plage');
    }

    view.setInt8(position, value)

    return view;

}
