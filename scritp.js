// The foreach Array Helper
/*
var colors = ['red', 'blue', 'green']

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i])
}

colors.forEach(function (color) {
	console.log(color)
})
*/

// Create an array of numbers
// var numbers = [1, 2, 3, 4, 5]

// Create a variable to hold the sum
// var sum = 0

// function adder(number) {
// 	sum += number
// }

// Loop over the array, increment the sum variable
/*
numbers.forEach(function (number) {
	sum += number
})
*/

// numbers.forEach(adder)

// print the sum variable
// console.log(sum)

// The Map Helper
/*
var numbers = [1, 2, 3]
var doubledNumbers = []

for (var i = 0; i < numbers.length; i++) {
	// numbers[i] = numbers[i] * 2
	doubledNumbers.push(numbers[i] * 2)
}

var doubled = numbers.map(function (number) {
	return number * 2
})

console.log(doubledNumbers)
console.log(doubled)
*/

/*
var cars = [
	{ model: 'Buick', price: 'CHEAP' },
	{ model: 'Camaro', price: 'expensive' },
]

var prices = cars.map(function (car) {
	return car.price
})

console.log(prices)
*/

// Selecting Needed Data With Filter
/*
var products = [
	{ name: 'cucumber', type: 'vegetable' },
	{ name: 'banana', type: 'fruit' },
	{ name: 'celery', type: 'vegetable' },
	{ name: 'orange', type: 'fruit' },
]
*/
// var filteredProducts = []

/*
for(var i = 0; i < products.length; i++) {
  if(products[i].type==='fruit'){
    filteredProducts.push(products[i])
  }
}
*/

// console.log(filteredProducts)

/*
console.log(
	products.filter(function (product) {
		return product.type === 'fruit'
	})
)
*/
/*
var products = [
	{ name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
	{ name: 'banana', type: 'fruit', quantity: 10, price: 15 },
	{ name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
	{ name: 'orange', type: 'fruit', quantity: 3, price: 5 },
]
*/
// Type is 'vegetable', quantity i greater than 0, price is less than 10
/*
console.log(
	products.filter(function (product) {
		return (
			product.type === 'vegetable' && product.quantity > 0 && product.price < 10
		)
	})
)
*/

/*
var post = { id: 4, title: 'New Post' }
var comments = [
	{ postId: 4, content: 'awesome' },
	{ postId: 3, content: 'it was ok' },
	{ postId: 4, content: 'neat' },
]

function commentsForPost(post, comments) {
	return comments.filter(function (comment) {
		return comment.postId === post.id
	})
}

console.log(commentsForPost(post, comments))
*/

// Querying for Records with Find
/*
var users = [
	{ name: 'Jill' },
	{ name: 'Alex', id: 4 },
	{ name: 'Bill' },
	{ name: 'Alex' },
]
var user
*/
/*
for (var i = 0; i < users.length; i++) {
	if (users[i].name === 'Alex') {
		user = users[i]
		break
	}
}
*/

// console.log(user)
/*
console.log(
	users.find(function (user) {
		return user.name === 'Alex'
	})
)
*/

/*
function Car(model) {
	this.model = model
}

var cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')]

cars.find(function (car) {
	return car.model === 'Focus'
})
*/

/*
var posts = [
	{ id: 1, title: 'New Post' },
	{ id: 2, title: 'Old Post' },
]

var comment = { postId: 1, content: 'Great Post' }

function postForComment(posts, comment) {
	return posts.find(function (post) {
		return post.id === comment.postId
	})
}

console.log(postForComment(posts, comment))
*/

// A Little Every and a Lot of Some
/*
var computers = [
	{ name: 'Apple', ram: 24 },
	{ name: 'Compaq', ram: 4 },
	{ name: 'Acer', ram: 32 },
]

var allComputersCanRunProgram = true
var onlySomeComputerCanRunProgram = false

for (var i = 0; i < computers.length; i++) {
	var computer = computers[i]

	if (computer.ram < 16) {
		allComputersCanRunProgram = false
	} else {
		onlySomeComputerCanRunProgram = true
	}
}

console.log('--------------------------------')
console.log(allComputersCanRunProgram)
console.log(onlySomeComputerCanRunProgram)

console.log('++++++++++++++++++++++++++++++++++++++++++++++++')

console.log(
	computers.every(function (computer) {
		return computer.ram > 16
	})
)

computers.some(function (computer) {
	return computer.ram > 16
})
*/

// Every and Some Syntax
/*
var names = ['Alexandria', 'Matthew', 'Joe']

console.log(
	names.every(function (name) {
		return name.length > 4
	})
)

console.log(
	names.some(function (name) {
		return name.length > 4
	})
)
*/

// Every and Some in Practice
/*
function Field(value) {
	this.value = value
}

Field.prototype.validate = function () {
	return this.value.length > 0
}

var username = new Field('2cool')
var password = new Field('my_password')
var birthdate = new Field('10/10/2010')

// console.log(username.validate() && password.validate())

var fields = [username, password, birthdate]

var formIsValid = fields.every(function (field) {
	return field.validate()
})

if (formIsValid) {
	// allow user to submit
} else {
	// show an error message
}
*/

// Condensing List with Reduce

var numbers = [10, 20, 30]
var sum = 0

for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i]
}

console.log('----------------------------------------------------------------')

numbers.reduce(function (sum, number) {
	return sum + number
}, 0)
