const user = {
    firstName:'vinicius',
    lastName: 'matias',
    age: 21,
    instagram: '@matiasxyl_',
    skills: ['Front-end','JS']
};

//Destructuring
const { firstName, age, skills } = user;
const [primary,secondary] = skills;

console.log(firstName, age, primary);