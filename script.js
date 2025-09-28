// // Practicing the call back function.
// function greetUser(name, cb){
//     cb(name);
// }

// greetUser("Sahil", (name) => {
//     setTimeout(() => {
//         console.log("hello",name);
//     }, 1000);
// })

// // creating the nested call back to simulate the nested call back function as follows.

// function orderFood(cb){
//     setTimeout(() => {
//         console.log("Order Place")
//         cb();
//     }, 1000);
// }

// function cooked(cb){
//     setTimeout(() => {
//         console.log("Cooking");
//         cb();
//     }, 2000);
// }

// function dispatch(cb){
//     setTimeout(() => {
//         console.log("Dispatch");
//         cb();
//     }, 3000);
// }
// function delivered(cb){
//     setTimeout(() => {
//         console.log("Delivered");
//         cb();
//     }, 4000);
// }


// orderFood(() => {
//     cooked(() => {
//         dispatch(() => {
//             delivered(() => {
//                 console.log('Order Completed!');
//             })
//         })
//     })
// })

// creating the promise that resolve after 2 seconds.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello, Sahil");
//     }, 2000);
// });

// promise.then((res) => console.log(res)).catch((err)=>console.log(err));


// // how to chain a promise as follows.
// const promise1 = new Promise((resolve) => {
//     resolve(2);
// })
//     .then((n) => n * 2)
//     .then((n) => n * 2)
//     .then((n) => n * 2)
//     .then((res) => console.log(res));


// // using the promise.all
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched from API 1");
//     }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched from API 2");
//     }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched from API 3");
//     }, 3000);
// })

// const pro1 = Promise.all([p1,p2,p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))


// console.log(pro1);


// const order = () =>
//   new Promise(resolve => setTimeout(() => resolve("Food Ordered"), 1000));

// const cooked = () =>
//   new Promise(resolve => setTimeout(() => resolve("Food is cooking"), 2000));

// const dispatch = () =>
//   new Promise(resolve => setTimeout(() => resolve("Food is dispatch"), 3000));

// const deliver = () =>
//     new Promise(resolve => setTimeout(() => resolve("Your order is delivered"), 4000));

// order()
//     .then(res => {
//         console.log(res);
//         return cooked();
//     })
//     .then(res => {
//         console.log(res);
//         return dispatch();
//     })
//     .then(res => {
//         console.log(res);
//         return deliver();
//     })
//     .then(res => console.log(res))
//     .then(err => console.log(err))



// async/await as follows.

// function delay(ms){
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function order(){
//     console.log("Order Placed");
//     await delay(1000);
//     console.log("Preparing f")
// }


// // Event propgation?
// // event bubbling phase as follows.

// const div = document.querySelector('div');
// const form = document.querySelector('form');
// const button = document.querySelector('button');

// div.addEventListener('click', () => {
//     console.log('Click');
// },{capture : true});

// form.addEventListener('click', () => {
//     console.log("form clicked");
// }, {capture : true});

// button.addEventListener('click', () => {
//     console.log("button clicked");
// }, {capture : true});



// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event){
//     alert(
//         "currentTarget =" 
//         + event.currentTarget.tagName + 
//         ", target = " + 
//         event.target.tagName + 
//         ", this =" +
//         this.tagName
//     );
// }



// suppose we have example as follows.

const ul = document.getElementById('job-list');

ul.addEventListener('click', (e) => {

    if(e.target.tagName === 'LI'){
        console.log("You've Clicked", e.target.innerText);
    }
})


