// function p() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res('success')
//         }, 1000)
//     })

// }

// async function asyncTest () {
//     console.log('start')
//     const result = await p()
//     console.log(result)
//     console.log('finish')
// }

// asyncTest()


// const getData = async () => {
// let users = [],
// let todos = [],

// try {
//     const usersResponse = await fetch(usersUrl)
//     const response = await usersResponse.json()
//     users = [...response]
// } catch(err) {
//     console.log(err)
// }

// try {
//     const usersResponse = await fetch(todosUrl)
//     const response = await todosResponse.json()
//     users = [...response]
// } catch(err) {
//     console.log(err)
// }

//     const usersResponse = await fetch(userUrl)
//     const users = await usersResponse.json()

//     const todosResponse = await fetch(todosUrl)
//     const todos = await todosResponse.json()

//     return {users, todos}
// }

// const renderData = async () => {
//     const {users, todos} = await getData()

//     users.forEach((user) => {
//         const list = todos.filter(todo => todo.userId === user.id)

//         renderTodoList(list, user.name)
//     })
// }

// renderData()





// ex: [1,2,5,9] 6
// output:5


// const findBestMatch = (arr, num) => {
//     return arr.reduce((acc, curr) => Math.abs(acc-num) > Math.abs(curr-num) ? curr : acc)
// }

// console.log(findBestMatch([1,2,5,9], 6))

// const arr = [1,2,3,4].map((item) => item)

// console.log(arr)


// Array.prototype.testFunc = function (callback) {
//     const result = []

//     for (let index = 0; index < this.length; index++) {
//         result.push(callback(this[index], index, this))
//     }

//     return result

// }

// const arr = [1, 2, 3, 4, 5].testFunc((item, index) => item + index)

// console.log(arr)


// Array.prototype.myMap = function (callback) {
//     return this.reduce((acc, curr, indx, arr) => {
//         acc.push(callback(curr, indx, arr))
//         return acc
//     }, [])
// }

// const arr = [1, 2, 3, 4, 5].myMap((item, index) => item + index)

// console.log(arr)


// Array.prototype.myFilter = function (callback) {
//     const result = [];

//     for (let index = 0; index < this.length; index++) {
//         if(callback(this[index], index, this)) result.push(this[index])
//     }
//     return result
// }

// const arr = [1,2,3,4,5,6,7,8].myFilter((item) => {
//     return item%2 === 0
// })
// console.log(arr)



// Array.prototype.myFilter = function (callback) {
//     return this.reduce((acc, curr, idx, arr) => {
//         if(callback(curr, idx, arr)) acc.push(curr)
//         return acc
//     }, [])
// }

// const arr = [1,2,3,4,5,6,7,8].myFilter((item) => {
//     return item%2 === 0
// })
// console.log(arr)