const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Sucesso!');
        resolve('Sucesso!');
    },2000);
});

/*
apiCall
    .then((resposta) => {
        console.log(resposta);
    })
    .catch((erro) => {
        console.log(erro);
    });
    */

async function run(){
    try{
        const resposta = await apiCall;
        console.log(resposta);
    }catch(erro){
        console.log(erro);
    }
    
}

run();