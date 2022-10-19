//find the prime number
let num=19;
 let prime=true;
for(let i=2;i<=num/2;i++){
 
if(num%i==0){
num=false;

}

if(prime==true){

console.log(num," is prime number");
}
else{
consoel.log(num," is not prime number");
}
