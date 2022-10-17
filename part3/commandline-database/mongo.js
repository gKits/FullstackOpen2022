const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <passwd>')
}

const passwd = process.argv[2]

const url = `mongodb+srv://georgios:${passwd}@cluster0.ks7b4dj.mongodb.net/?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const AddPerson = (name, number) => {
    mongoose
    .connect(url)
    .then(() => {
        const person = new Person({
            name: name,
            number: number
        })

        return person.save()
    })
    .then(person => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))
}

const FetchPersons = () => {
    mongoose
    .connect(url)
    .then(() => {
        Person.find({})
        .then(result => {
            console.log('phonebook:')
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
    })
    .catch((err) => console.log(err))
}

if (process.argv.length === 3) {
    FetchPersons()
}
else if (process.argv.length === 5) {
    AddPerson(process.argv[3], process.argv[4])
}
else {
    console.log('Too many arguments')
}

