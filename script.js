const students = [
    {
        name: 'Student 1',
        marks: ['5', '4', '6']
    },
    {
        name: 'Student 2',
        marks: ['1', '2', '2', '3']
    },
    {
        name: 'Student 3',
        marks: []
    },
]

const calculateSum = function (numbers) {

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        sum = sum + number
    }

    return sum

}

const calculateAverage = function (numbers) {

    const sum = calculateSum(numbers)
    const length = numbers.length

    return sum / length

}

const calculateStudentsAverages = function (students) {

    const studentsWithAverages = students.map(function (student) {
        const average = calculateAverage(student.marks)

        student.average = Math.round(average * 100) / 100

        return student
    })

    return studentsWithAverages

}

console.log(calculateStudentsAverages(students))
