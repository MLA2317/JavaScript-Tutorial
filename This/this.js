// this


const person = {
    name: 'stave',
    surname: 'jobs',
    getfullName() {
        return this.name + ' ' + this.surname
    }
}
console.log(person.getfullName())



function main(){
    console.log(this) // windowsni obyektini chiqaradi
}

main()



const persons = {
    status: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    all() {
        this.status.forEach(function (s){
            console.log(s)
        })
    }
}
persons.all()


const per = {
    status: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    all() {
        let sum = 0
        this.status.forEach(s => {
            sum += s
        })
        return sum
    }
}
console.log(per.all())