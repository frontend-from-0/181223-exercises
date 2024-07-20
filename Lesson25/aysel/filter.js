// Exercise 1:
// Given an array of numbers, filter out the even numbers.
const numbersExercise1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = numbersExercise1.filter(number => number % 2 === 1);
console.log(numbersExercise1, evenNumbersArray);


// Exercise 2:
// Given an array of strings, filter out the strings that contain the letter "a".
const wordsExercise2 = [
	'apple',
	'banana',
	'car',
	'dog',
	'elephant',
	'flower',
	'guitar',
	'house',
	'island',
	'jungle',
];
console.log(wordsExercise2.filter(word => word.includes('a')));


// Exercise 3:
// Given an array of objects representing books, filter out the books with a price less than $10.
const booksExercise9 = [
	{
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		genre: 'Fiction',
		price: 12.99,
	},
	{
		title: '1984',
		author: 'George Orwell',
		genre: 'Fiction',
		price: 10.99,
	},
	{
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		genre: 'Fiction',
		price: 9.99,
	},
	{
		title: 'Pride and Prejudice',
		author: 'Jane Austen',
		genre: 'Fiction',
		price: 7.99,
	},
	{
		title: 'To the Lighthouse',
		author: 'Virginia Woolf',
		genre: 'Fiction',
		price: 14.99,
	},
	{
		title: 'Brave New World',
		author: 'Aldous Huxley',
		genre: 'Fiction',
		price: 11.99,
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		genre: 'Fiction',
		price: 8.99,
	},
	{
		title: 'Moby-Dick',
		author: 'Herman Melville',
		genre: 'Fiction',
		price: 13.99,
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		price: 10.99,
	},
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: 'J.K. Rowling',
		genre: 'Fantasy',
		price: 9.99,
	},
];

const cheapeBooks = booksExercise9.filter(book => book.price < 10);
console.log(cheapeBooks);


// Exercise 4:
// Given an array of user objects, filter out the users who are below 25 years old.
const usersExercise4 = [
	{
		id: 1,
		name: 'John',
		age: 25,
		email: 'john@example.com',
	},
	{
		id: 2,
		name: 'Alice',
		age: 32,
		email: 'alice@example.com',
	},
	{
		id: 3,
		name: 'Bob',
		age: 28,
		email: 'bob@example.com',
	},
	{
		id: 4,
		name: 'Emily',
		age: 21,
		email: 'emily@example.com',
	},
	{
		id: 5,
		name: 'Michael',
		age: 35,
		email: 'michael@example.com',
	},
	{
		id: 6,
		name: 'Sara',
		age: 29,
		email: 'sara@example.com',
	},
	{
		id: 7,
		name: 'David',
		age: 42,
		email: 'david@example.com',
	},
	{
		id: 8,
		name: 'Olivia',
		age: 31,
		email: 'olivia@example.com',
	},
	{
		id: 9,
		name: 'Daniel',
		age: 27,
		email: 'daniel@example.com',
	},
	{
		id: 10,
		name: 'Sophia',
		age: 23,
		email: 'sophia@example.com',
	},
];

const usersBelow25 = usersExercise4.filter(user => user.age < 25);
console.log(usersBelow25);


// Exercise 5:
// Given an array of sentences, filter out the sentences that have more than 10 words.
const sentencesExercise5 = [
	'The quick brown fox jumps over the lazy dog.',
	'I love to code and solve problems.',
	'The sun sets in the west.',
	'Life is like a box of chocolates.',
	'The cat meowed loudly.',
	'She walked along the beach, enjoying the salty breeze.',
	'The rain poured down, soaking everything in sight.',
	'He smiled and waved goodbye.',
	'The mountain peaks were covered in snow.',
	'The room was filled with laughter and joy.',
	'I have been dreaming of traveling the world and exploring new cultures and cuisines.',
	'The city lights shimmered in the night sky, creating a mesmerizing spectacle.',
	'She diligently practiced the piano for hours, striving for perfection in every note.',
	'The ancient ruins stood as a testament to a long-lost civilization, captivating the imaginations of visitors.',
	'As the waves crashed against the shore, a sense of tranquility washed over me.',
	'In the depths of the forest, hidden treasures await those who dare to seek them.',
	'The starry night sky stretched endlessly, a canvas of beauty and mystery.',
	'With each step, the hiker felt closer to the summit, fueled by determination and a sense of adventure.',
	'The aroma of freshly brewed coffee permeated the air, enticing passersby to indulge in a cup of warmth.',
	'The butterfly gracefully fluttered its wings, showcasing vibrant colors in a delicate dance.',
];

const longSentences = sentencesExercise5.filter(sentence => sentence.split(' ').length > 10);
console.log(longSentences);


// Exercise 6:
// Given an array of products, filter out the products that are out of stock (where the quantity is 0).
const productsExercise6 = [
	{
		name: 'Laptop',
		brand: 'Apple',
		price: 1999,
		quantity: 0,
	},
	{
		name: 'Smartphone',
		brand: 'Samsung',
		price: 899,
		quantity: 20,
	},
	{
		name: 'TV',
		brand: 'LG',
		price: 1499,
		quantity: 15,
	},
	{
		name: 'Headphones',
		brand: 'Sony',
		price: 299,
		quantity: 30,
	},
	{
		name: 'Smartwatch',
		brand: 'Apple',
		price: 399,
		quantity: 25,
	},
	{
		name: 'Camera',
		brand: 'Canon',
		price: 999,
		quantity: 0,
	},
	{
		name: 'Gaming Console',
		brand: 'Microsoft',
		price: 499,
		quantity: 8,
	},
	{
		name: 'Tablet',
		brand: 'Samsung',
		price: 649,
		quantity: 18,
	},
	{
		name: 'Smart Speaker',
		brand: 'Amazon',
		price: 99,
		quantity: 0,
	},
	{
		name: 'Fitness Tracker',
		brand: 'Fitbit',
		price: 129,
		quantity: 14,
	},
];

const outOfStockProducts = productsExercise6.filter(product => product.quantity = 0);
console.log(outOfStockProducts);

// Exercise 7:
// Given an array of numbers, filter out the numbers that are divisible by 3.
const numbersExercise7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divisibleBy3 = numbersExercise7.filter(number => number % 3 == 0);
console.log(divisibleBy3);

// Exercise 8:
// Given an array of strings, filter out the strings that have more than 5 characters.
const wordsExercise8 = [
	'apple',
	'banana',
	'car',
	'dog',
	'elephant',
	'flower',
	'guitar',
	'house',
	'island',
	'jungle',
];

const longWords = wordsExercise8.filter(word => word.length > 5);
console.log(longWords);

// Exercise 9:
// Given an array of objects representing students, filter out the students who have a grade lower than C.
const studentsExercise9 = [
	{
		id: 1,
		name: 'Alice',
		age: 18,
		grade: 'A',
	},
	{
		id: 2,
		name: 'Bob',
		age: 19,
		grade: 'B',
	},
	{
		id: 3,
		name: 'Charlie',
		age: 20,
		grade: 'B+',
	},
	{
		id: 4,
		name: 'David',
		age: 19,
		grade: 'A-',
	},
	{
		id: 5,
		name: 'Emma',
		age: 18,
		grade: 'A+',
	},
	{
		id: 6,
		name: 'Frank',
		age: 20,
		grade: 'B',
	},
	{
		id: 7,
		name: 'Grace',
		age: 19,
		grade: 'D+',
	},
	{
		id: 8,
		name: 'Hannah',
		age: 20,
		grade: 'A-',
	},
	{
		id: 9,
		name: 'Isaac',
		age: 18,
		grade: 'D',
	},
	{
		id: 10,
		name: 'Julia',
		age: 19,
		grade: 'B-',
	},
];

const gradeScale = {
    'A+': 4.3,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'D-': 0.7,
    'F': 0.0
  };
  
  const loserStudents = studentsExercise9.filter(student => {
    const grade = student.grade.toUpperCase();
    return gradeScale[grade] < gradeScale['C'];
  });
  

// Exercise 10:
// Given an array of user objects, filter out the users who have a name starting with the letter "J".
const usersExercise10 = [
	{
		id: 1,
		name: 'John',
		age: 25,
		email: 'john@example.com',
	},
	{
		id: 2,
		name: 'Alice',
		age: 32,
		email: 'alice@example.com',
	},
	{
		id: 3,
		name: 'Bob',
		age: 28,
		email: 'bob@example.com',
	},
	{
		id: 4,
		name: 'Emily',
		age: 21,
		email: 'emily@example.com',
	},
	{
		id: 5,
		name: 'Michael',
		age: 35,
		email: 'michael@example.com',
	},
	{
		id: 6,
		name: 'Sara',
		age: 29,
		email: 'sara@example.com',
	},
	{
		id: 7,
		name: 'David',
		age: 42,
		email: 'david@example.com',
	},
	{
		id: 8,
		name: 'Olivia',
		age: 31,
		email: 'olivia@example.com',
	},
	{
		id: 9,
		name: 'Daniel',
		age: 27,
		email: 'daniel@example.com',
	},
	{
		id: 10,
		name: 'Sophia',
		age: 23,
		email: 'sophia@example.com',
	},
];

const usersStartingWithJ = usersExercise10.filter(user => user.name[0].toUpperCase() == 'J');
console.log(usersStartingWithJ);