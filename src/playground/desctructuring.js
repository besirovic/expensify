//
// Object
//
/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); */

//
// Array
//

const address = [
    '1299 S Juniper Street',
    'London',
    'California',
    '78000'
];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);