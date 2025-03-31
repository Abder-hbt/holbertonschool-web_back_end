export default function getStudentsIdsSum(students){

    if (!Array.isArray(students)){
        return 0;
    }

    return students.reduce((acc, student) => acc + student.id, 0);
}