class Student {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.rating = []
        this.attendance = new Array(25).fill(null)
    }

    getAge() {
        return 2024 - this.year
    }

    getAverageGrade() {
        if (this.rating.length === 0) {
            return 0
        }
        const sum = this.rating.reduce((total, grade) => total + grade, 0);
        return sum / this.rating.length
    }

    present() {
        this.updateAttendance(true)
        return this
    }

    absent() {
        this.updateAttendance(false)
        return this
    }

    updateAttendance(isPresent) {
        const index = this.attendance.findIndex(value => value === null)
        if (index !== -1) {
            this.attendance[index] = isPresent;
        }
    }

    summary() {
        const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length
        if (this.getAverageGrade() > 90 && attendanceRate > 0.9) {
            return 'Молодець!'
        } else if (this.getAverageGrade() > 90 || attendanceRate > 0.9) {
            return 'Добре, але можна краще!'
        } else {
            return 'Редиска!'
        }
    }
}

const student1 = new Student('Alex', 'Romanenko', 2000)
student1.rating = [80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 86, 90, 100]
student1.present().present().absent().absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present()

const student2 = new Student('Artem', 'Titarenko', 2001)
student2.rating = [84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 86]
student2.absent().absent().absent().absent().absent().absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present()

const student3 = new Student('Andriy', 'Yarmolenko', 1999)
student3.present().present().present().present().present().present().present().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent()

console.log(student1.summary())
console.log(student2.summary())
console.log(student3.summary())