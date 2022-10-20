//find the prime number
let num=19;
let count =0;

for (i=0;i<=19;i++){
if (num/i==0){
count++;

}
}
if(count ==2){

console.log(num," is prime number");
}
else{
consoel.log(num," is not prime number");
}
