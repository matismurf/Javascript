const user = {
    fistName: 'Vinicius',
    lastName: 'Matias',
    full_name:'Nome completo',
    age: 21,
    instagram:'@matiasxyl',
    skills:['JS','Front-end'],
    active: false
};

//Spread operator

const updatedUser ={
    ...user,
    skills:[...user.skills, 'Marketing'],
    active:true
}
Object.assign(user, {active: true});
console.log({updatedUser});
console.log({user});