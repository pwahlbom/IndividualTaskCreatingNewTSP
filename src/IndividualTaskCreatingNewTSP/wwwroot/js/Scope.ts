let dogName: string = 'Fido';

function doSomething() {

    let dogName: string = 'Havoc';
    let dogBreed: string = 'Lab';

    if (dogName == 'Havoc') {

        let dogBreed: string = 'Black Lab';
        console.log(dogBreed); // what will output?
    }

    console.log(dogName);  // what will output?
    console.log(dogBreed); // what will output?
}
doSomething();

console.log(dogName);  // what will output?
//console.log(dogBreed); // what will output?