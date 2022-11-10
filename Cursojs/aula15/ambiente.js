let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.lof(`O valor 8 está na posição ${pos}`)
}

