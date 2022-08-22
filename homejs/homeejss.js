"use strict"

// // 1-misol
// let n = 10;
// let arr = []; // [1 , 2 , 8 , 16 , 32 , 64 , 128]
// for(let i = 0; i<= n; i++){
//     arr[i] = i;
// }
// console.log(arr)
// 2-misol
// let n = 10;
// let arr = []; // [1 , 2 , 8 , 16 , 32 , 64 , 128]
// for(let i = 0; i<= n; i++){
// arr[i] = Math.pow(2 , i);
// }
// console.log(arr)


//   3 masala
// let n=+prompt('n soni');
// let sum=0;
// let arr=[];

// for(let i=0; i<=n; i++){
    // arr[i]=i
    // yoki boshqacha usuli arr.push(i)
//     sum=sum+arr[i]
// }
// console.log(arr);
// console.log(sum);


//  4 masala

// let n=+prompt(' n soni');
// let arr=[];
// let juft=0;
// let toq=0;

// for(let i=0; i<=n; i++){

//     if(i%10==0){
//         arr.push(i)
        
     //     }
// }
// for(let i=0; i<arr.length; i++){
//     if(i%2==1){
//         juft+=arr[i]
//     }
//     if(i%2==0){
//         toq+=arr[i]
//     }
// }

 // console.log(toq-juft); yoki
// console.log(`Hisob ${toq-juft}`);
// console.log(arr);
// console.log(juft);
// console.log(toq);



//  5 masala

// let n=5;
// let arr=[];
// let sum=0;

// for(let i=0; i<=n; i++){
//     let pr=+prompt(`qiymatlar ${i}`);
//     arr[i]=pr;
    // }
// for(let j=0; j<arr.length; j++){
// sum+=arr[j];
// }
// console.log(arr);
// console.log(sum);

// console.log(i);


// 6 masala

// let n=+prompt('sonni kiriting');

// let arr=[];
// for(let i=0; i<=n; i++){
//     arr[i]=i;

// }
// arr.reverse()
// console.log(arr);


//  7 masala   ! Topilmadi hozircha

// let arr=['Kamol', 22,];
// let arr2=[ 'Ketmon', 20];
// let arr3=['Samo', 18];
// let arr4=['Kill', 16];

// let user1=prompt('ism');
// let user2=prompt('ism');


// let odam1=arr.find ((u) => u==user1)
// let odam2=arr.find ((u) => u==user2)

// for(let i=0; i<arr.length; i++){

// }


// for(let i=0; i<arr; i++){

//     if(user1==arr[i] && user2==arr[i]){
//     }
// }


// 8 masala

// let arr =[2,5,10,22,14,17,22,43,27];

// let n1=2;
// let n2=4;
// let sum=0;

// for(let i=n1; i<n2; i++){
//     sum+=arr[i]
// }
// console.log(sum);



// 9 masala

// let n=+prompt('son');
// let summ=0;

// for(let i=0; i<n; i++){
// if(i%2==0){
//     summ=i
// }
// }
// console.log(summ);


// 10 masala  


// let n=+prompt('son');
// let summ=0;

// for(let i=n; i>=0; i--){
// if(i%2==0){
//     summ=i
// }
// }
// console.log(summ);


//  11 masala 

// let n=+prompt('son');
// let summ=0;

// for(let i=0; i<=n; i++){
// if(i%2==1){
//     summ=i
// }
// }
// console.log(summ);


// 12 masala

// let arr =[2,5,10,22,14,17,22,43,27];
// let arrLen=arr.length;
// let sum=0;

// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]

// }

// console.log(sum / arrLen);


//  13 masala

// let arr =[2,5,10,22,14,17,22,43,27];
// let arrToq=[]

// for(let i=0; i<arr.length; i++){
//     if(i%2==0){
//         continue
//     }
//     arrToq.push(arr[i])
// }
// console.log(arrToq);


//  14 masala  

// Keyin



//  15 masala 

// let arr =[2,5,10,22,14,17,22,43,27];

// for (let i=0; i<arr.length; i++){
    
//     if(arr[i]%2==1){
//         console.log(arr[i]);
//     }else{
//         console.log();
//     }
// }



// 16 - misol

// let arr = [2,4,56,89,'10', 23, '45', 69 , 'string' , 'str'];
// for(let i = 0; i <= arr.length; i++){

// typeof arr[i] == typeof '' ? console.log(arr[i]) : console.log();
// }



// 17- misol

// let arr1 = [1,4 , 5 , 9]
// let arr2 = [1,3 , 9]
// function findSameNumbers(arr1 , arr2){
//     for(let i of arr1){
//         for(let j of arr2){
//             i == j ? console.log(i) : console.log()
//        }
//    }
// }
// findSameNumbers(arr1 , arr2)



// 18-misol

// let n = 6;
// let arr = [];
// for(let i = 0; i <= n; i++){
//     let pr = +prompt(`Son kiriting ${i}`)
//     arr[i] = pr;
// }


// 19 misol  - 5 misol bilan bir xil




// 20 misol


// let n =6;

// let arr = [];
// for(let i = 0; i <= n; i++){
//     let pr = + prompt(`Son kiriting ${i}`)
//     arr[i] = pr;
// }
// let isOddOrEvenNumbers = prompt('Enter toq or juft !!!')

// function isOdd() {
//     for(let i = 0; i < arr.length; i++){
//         arr[i] % 2 == 1? console.log(arr[i]) : []
//    }
// }
// function isEven() {
//     for(let i = 0; i < arr.length; i++){
//         arr[i] % 2 == 0? console.log(arr[i]) : []
//    }
// }
// if(isOddOrEvenNumbers == 'toq'){
//     isOdd()
// }else if(isOddOrEvenNumbers == 'juft'){
//     isEven()
// }else {
//     console.log('Error')
// }


//   21 masala


// let n=+prompt('n son');
// let arr=[];

// for(let i=0; i<=n; i++){
//     arr.push(i)

// }
// let x=arr.length

// console.log(arr[x-1]);


// 22 - misol

// const arr = [1, 2, 1, 3, 4, 3, 5];
// const toFindDuplicates = arr => arr.filter((item, index));
// const duplicateElements = toFindDuplicates(arr);
// console.log(duplicateElements);


// Boshqa misol

// const arr = [23, 65, 3, 19, 42, 74, 56, 8, 88];
// function findMaxArrValue(arr) {
//   if (arr.length) {
//     let max = 0;
//     for (let num of arr) {
//       max = num > max ? num : max;
//    }
//     return max;
//  }
//   return 0;
// }
// console.log(findMaxArrValue(arr))



