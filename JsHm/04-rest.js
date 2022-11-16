const user = {
    firstName:'vinicius',
    lastName: 'matias',
    age: 21,
    instagram: '@matiasxyl_',
    skills: ['Front-end','JS']
};

//rest operator
const {firstName, skills, ...resto} = user;
const [primary, ...restoSkills] = skills;
console.log(resto, restoSkills);