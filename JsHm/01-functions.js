/*
//Arrow function
function minhaFunction(){
    this.name = 'Matias';
    const minhaArrowFunction = () => {
        this.lastname = 'Araújo';
    };
    minhaArrowFunction();
    
}

console.log(new minhaFunction());
console.log(this);
*/

//Short Syntax
const getUser = () => ({
        id: 123,
        name: 'Matias'
});

console.log(getUser());



/*
const algumNumero = 10;
const soma = () => (
    algumNumero >= 10 
        ? 'Maior ou igual a 10'
        :'Menor que 10'
    );

console.log(soma());
*/

