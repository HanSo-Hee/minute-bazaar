console.log("nancy");
let lastname = 'kaur';
let firstname = new String('naan');
let message =
    `hello nancy

thanks for the oppurtunity,

I love you,
gaurav`

/*console.log(message);
let date = new Date();

console.log(date);
let courses = [
    { no: 1, naam: 'nancy' },
    { no: 2, naam: 'kaur' }
];
console.log(courses);
let course = courses.find(function (course) {
    return course.naam === 'nancy';
})
console.log(course);
let marks = [10, 20, 30, 40, 50, 60];
let sliced = marks.slice(2);
console.log(sliced);

let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = [...first, 'hargun', ...second, 'kaur'];
console.log(combined);
let message1 = 'I love you naan';
let parts = message1.split('');

console.log(parts);
let joined = parts.join('');
console.log(joined);
document.addEventListener('click', function () {
    console.log('i have clicked on the document');
});
const content = document.querySelector('#wrapper');
content.addEventListener('click', function (event) {
    console.log(event);
})
let links = document.querySelectorAll('a');
let thirdlink = links[1];
thirdlink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('maza');
})*/





/*setTimeout(function(){
    console.log('third');
},5000)

function sync(){
    console.log('first');
}
sync();
console.log('second');

let meraPromise= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am inside promise');
    },5000);
});
console.log('pehla');*/

async function utility() {
    let delhiMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('delhi maal');
        }, 5000);

    });

    let hydMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hyd maal');
        }, 6000);

    });

    let dM = delhiMausam;
    let hM = hydMausam;

    return [dM, hM];
}





