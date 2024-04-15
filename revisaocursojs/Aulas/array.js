let num = [5, 8, 2, 9, 3]
/*num[5] = 6 adicionar na posição 5
num.push(7) adicionar por ultimo
num.length // tamanho do vetor
num.sort() //ordem crescente
*/

for(let pos=0; pos<num.length; pos++){
 console.log(num[pos]);
} // percurso para execussão de vetores

for (let pos in num){
    console.log(num[pos]);
}
let pos = num.indexOf(8)
    if ( pos == -1){
        console.log('O valor não existe')
    }
console.log(`${pos}`)