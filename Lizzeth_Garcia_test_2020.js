//JavaScript Test

//Question 1

//1

for (let i=0,display=''; i<7; i++){
    display+='#'
    console.log(display)
}

//2
for (let i=0; i<=10; i++){
    console.log(i+' x '+i+' = '+i*i)
}

//3
console.log('i   i²  i³')
for (let i=0; i<=10; i++){
console.log(i+' x '+Math.pow(i,2)+' = '+Math.pow(i,3))
}

//4
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA',
  ]

  let countriesArr= []
  for (const country of countries) {
      let arr =[]
       arr.push(country)
       arr.push(country.slice(0,3))
       arr.push(country.length)
       countriesArr.push(arr)
    }
  console.log(countriesArr)

  //Question 2

  const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 }, 
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
  ]

//1
  for (const product of products) {
 typeof product.price == 'number' ? console.log('The price of '+product.product+' is '+product.price+' euros.') : console.log('The price of '+product.product+' is unknown')
}

  //2
let sumPrices1= 0
products.forEach(product => typeof product.price == 'number' ?  sumPrices1+= product.price : product.price )
console.log(sumPrices1)

//3
const sumPrices2 = products.filter(product => typeof product.price === 'number').map(product => product.price).reduce((accum, curr)=> accum + curr)
console.log(sumPrices2)

//4
const sumPrices3 = products.reduce((a, c)=> ({ price: typeof c.price==='number' ?  a.price + c.price : a.price + 0 }))
console.log(sumPrices3)

//Question 3

//1
/*const thePrompt= prompt('Enter month: ')
const theMonth = thePrompt[0].toUpperCase() + thePrompt.slice(1,).toLowerCase()
switch (true) {
    case theMonth=='January' || theMonth=='March' || theMonth=='May' || theMonth=='July' || theMonth=='August' || theMonth=='October' || theMonth=='December' :
            console.log(theMonth+' has is 31 days.')
            break
    case theMonth=='April' || theMonth=='June' || theMonth=='September' || theMonth=='November':
            console.log(theMonth+' has is 30 days.')
            break
    case theMonth=='February':
            console.log('February has is 28 days.')
            break
    default:
            console.log('Enter a Month of the year #¤%&!')
 }*/

 //2
 const generate = (type) => {
    let generated = ''
    switch(true){
        case type=='hexa':
            const nums_letters1 = 'abcdf0123456789'
            generated= '#'
            for (let i=0; i<6; i++){
                generated+=nums_letters1.charAt(Math.floor(Math.random() * nums_letters1.length))
            }
            break
        case type=='rgb':
            generated= 'rgb('
            for (let i = 0; i < 2; i++) {
                generated += Math.floor(Math.random() * 256)+','
            }
            generated += Math.floor(Math.random() * 256)+')'
            break
        default:
            const nums_letters2= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i=0; i<6; i++){
                generated+=nums_letters2.charAt(Math.floor(Math.random() * nums_letters2.length))
            }  
    }
    return generated
}
console.log(generate())
console.log(generate('hexa'))
console.log(generate('rgb'))

//Question 4

/*const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',

    'ETHIOPIA',
    'FINLAND',
    'GERMANY',

    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]*/

//1
let medium=countries.length*0.5
countries.splice(medium-1, 3, 'ESTONIA', 'FRANCE', 'GHANA')
console.log(countries)

//2
const checkUniqueness = arr =>{
    let isUnique
    for (var i = 0; i < arr.length; i++) {
        arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) ? isUnique=true : isUnique=false
    } 
    return isUnique
}

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne)) // false
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo)) // true

//3
const numbers = [1, 3, 4]
const names = ['Asab', '30DaysOfJavaScript']
const bools = [true, false, true, true, false]
const mixedData = ['Asab', 'JS', true, 2019, { name: 'Asab', lang: 'JS' }]
const object = [{ name: 'Asab', lang: 'JS' }]

const checkDataTypes = (arr, dataType) => {
   let result = false
    for (const item of arr) {  
    typeof item === dataType && typeof item === typeof arr[0] ? result = true : result = false
  }
  return result
}
//this is the fast way using "every" but I was not sure if i can use it!
//const checkDataTypes = (arr, dataType) => arr.every((item) => typeof item === dataType ? true : false)

console.log(checkDataTypes(numbers, 'number')) // true
console.log(checkDataTypes(numbers, 'string')) // false
console.log(checkDataTypes(names, 'string')) // true
console.log(checkDataTypes(bools, 'boolean')) // true
console.log(checkDataTypes(mixedData, 'boolean')) // false
console.log(checkDataTypes(object, 'object')) //true

//Question 5

//1
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)  // ['HTML', 'CSS', 'JS', 'React']
console.log(backEnd)   // ['Node', 'Express', 'MongoDB']

//2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [
    name = 'David',
    [html, css, js, react ]= ['HTM', 'CSS', 'JS', 'React'],
    [htmlScore, cssScore, jsScore, reactScore ]= [98, 85, 90, 95]
]
= student

console.log(name, html, css, js, react, htmlScore, cssScore, jsScore, reactScore)

//3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

const [nameStudent, skills, scores ] = students

//console.log(nameStudent, skills, scores)

const convertArrayToObject1 = arr => {
    let arrObj = []
    for (let i = 0; i < arr.length; ++i){
    let obj= Object.assign({}, arr[i])
    arrObj.push(obj)
    }
    return arrObj
}
console.log(convertArrayToObject1(students))

/*
  [
    {
      name: 'David',
      skills: ['HTM','CSS','JS','React'],
      scores: [98,85,90,95]
    },
    {
      name: 'John',
      skills: ['HTM','CSS','JS','React'],
      scores: [85, 80,85,80]
    }
  ]*/

//Question 6

//1
 const sumOfAllNums = (...args) => {
    let sum = 0;
    for (let i=0; i < args.length; i++) {
        sum += args[i]
    }
    return sum
}

console.log(sumOfAllNums(2, 3, 1)) // 6
console.log(sumOfAllNums(1, 2, 3, 4, 5)) // 15
console.log(sumOfAllNums(1000, 900, 120)) // 2020

//2
const [x, y] = [2, (a, b, c) => a ** 2 - 4 * a + 3 ]

const X= 2
const Y = (a, b, c) => a ** 2 - 4 * a + 3 

console.log(Y(X))

//3
const studentObj = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent = Object.assign({}, studentObj)

newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8})
newStudent.skills.backEnd.push({ skill: ' Express', level: 9})
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8})
newStudent.skills.dataScience.push('SQL')
newStudent.skills.devOps = [{ skill: 'AWS ', level: 7},{ skill: 'Jenkin', level: 8},{ skill: 'Git', level: 8}]

console.log(newStudent)

//Question 7

//1
const showDateTime= (format)=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
    
  let displayDate = ''
    
  const now = new Date()
    const date = now.getDate()
    const month = now.getMonth()
    const monthName = monthNames[month]
    const year = now.getFullYear()
    const hour = now.getHours()<10 ? '0'+now.getHours() : now.getHours()
    const minutes = now.getMinutes()<10 ? '0'+now.getMinutes() : now.getMinutes() 
    switch(true){
        case format== 'dd/mm/yyyy':
            displayDate = date+'/'+month+'/'+year
            break
        case format== 'dd-mm-yyyy':
            displayDate = date+'-'+month+'-'+year
            break
        case format== 'dd-mm-yyyy hh:mm':
            displayDate = date+'-'+month+'-'+year+' '+hour+':'+minutes
            break
        case format== 'dd/mm/yyyy hh:mm':
            displayDate = month+'/'+date+'/'+year+' '+hour+':'+minutes
            break
        case format== 'MMMM DD, YYYY':
            displayDate = monthName+' '+date+', '+year
            break
        case format== 'MMMM DD, YYYY hh:mm':
            displayDate = monthName+' '+date+', '+year+' '+hour+':'+minutes
            break
        case format== 'MMM DD, YYYY hh:mm':
            displayDate = monthName.slice(0,3)+' '+date+', '+year+' '+hour+':'+minutes
            break
        default:
            displayDate = date+'/'+month+'/'+year
    }
    return displayDate
    }

console.log(showDateTime())                      // 4/4/2020
console.log(showDateTime('dd/mm/yyyy'))          // 4/4/2020
console.log(showDateTime('dd-mm-yyyy'))          // 4-4-2020
console.log(showDateTime('dd-mm-yyyy hh:mm'))    // 4-4-2020 16:21
console.log(showDateTime('dd/mm/yyyy hh:mm'))    // 4/4/2020 16:21
console.log(showDateTime('MMMM DD, YYYY'))       // April 4, 2020
console.log(showDateTime('MMMM DD, YYYY hh:mm')) // April 4, 2020 16:21
console.log(showDateTime('MMM DD, YYYY hh:mm'))  // Apr 4, 2020 16:21

//2
let todoList = [
    {
      task:'Prepare JS Test',
      time:'5/4/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'6/4/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/3/2019 1:00',
      completed:false
    }
  ]

const addTask =  (nameTask, statusTask) =>{
  todoList.push({task: nameTask, time: showDateTime('dd/mm/yyyy hh:mm'), completed: statusTask })
}

const removeTask =  (nameTask) =>{
    const newList = todoList.filter(task => task.task !== nameTask)
    todoList = newList
}

const editTask =  (nameTask, newNameTask, newStatusTask) =>{
    const modifiedTask = {task: newNameTask, time: showDateTime('dd/mm/yyyy hh:mm'), completed: newStatusTask }
    const newList = todoList.map(task => task.task== nameTask ? modifiedTask: task)
    todoList = newList
}

let order = false
const toggleTask = (nameTask) =>{
    order = !order
    const modifiedTask = {task: nameTask, time: showDateTime('dd/mm/yyyy hh:mm'), completed: order ? true : false }
    const newList = todoList.map(task =>  task.task===nameTask ? modifiedTask : task )
    todoList = newList
}
const toggleAll = () =>{
    order = !order
    for (task of todoList){
    task.completed=order ? true : false, task.time=showDateTime('dd/mm/yyyy hh:mm')}
}

const removeAll = ()=>{
    todoList = []
}

addTask('Finish the test', false) 
console.log(todoList)
editTask('Finish the test', 'I almost finnish the f* test', true) 
console.log(todoList)
toggleTask('I almost finnish the test')
console.log(todoList)
toggleAll()
console.log(todoList)
removeAll()
console.log(todoList)

//removeTask, editTask, toggleTask, toggleAll, removeAll

//Question 8

//1


const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
.then(response => response.json())
      .then(countries => {
      
        let top10areaCountry= ''
        countries.sort( (a, b) => a.area < b.area ? 1 : a.area > b.area ? -1 : 0 )
        let top10=countries.slice(0,10)
        top10.forEach(
            ({name, area}) => top10areaCountry+=`Country: \"${name}\", Area: ${area}\n`
        )
        
        for (const country of countries) {
            let {languages} = country
            let langs = []
           for (const language of languages) {
             let {name}= language
             langs.push(name) 
             console.log(langs)   
           }
        }
        //I am very tired I cant not finnish the languages

       console.log('Total countries: '+countries.length)   
       console.log(top10areaCountry)
   
     })
 



//2
const callback = (fn, totalArgs)=>{
    totalArgs = totalArgs ||fn.length
    return function recursor(){
    return arguments.length<totalArgs?recursor.bind(this, ...arguments): fn.call(this, ...arguments);
    }
}
const add = callback((a,b)=>a+b)
console.log(add(2,3))                //5
console.log(add(2)(3))               //5
console.log(add(2,3) === add(2)(3))  // true

//Question 9

//1
/*forEach() doesn’t return anything only executes a provided function once for each array element 
while map() creates and return a new array with the results of calling a provided function on every 
element in the calling array.

//2
//find() only returns the first value that matches from the array while filter() returns all the matched values

//3
map
reduce
splice
concat
sort

//4
*/

const generateColor = (type, n=1) => {

    let generated = ''
    const nums_letters1 = 'abcdf0123456789'
    let arrayColor = []
    switch(true){
        case type=='hexa' && n>1:
            for( let j = 0; j < n; j++ ){
            generated= '#'
            for (let i=0; i<6; i++){
                generated+=nums_letters1.charAt(Math.floor(Math.random() * nums_letters1.length))
            }
            arrayColor.push(generated)
            }
            return arrayColor
        case type=='rgb' && n>1:
            for( let j = 0; j < n; j++ ){
            generated= 'rgb('
            for (let i = 0; i < 2; i++) {
                generated += Math.floor(Math.random() * 256)+','
            }
            generated += Math.floor(Math.random() * 256)+')'
            arrayColor.push(generated)
        }
        return arrayColor
        case type=='hexa':
            generated= '#'
            for (let i=0; i<6; i++){
                generated+=nums_letters1.charAt(Math.floor(Math.random() * nums_letters1.length))
            }
            return generated
        case type=='rgb':
            generated= 'rgb('
            for (let i = 0; i < 2; i++) {
                generated += Math.floor(Math.random() * 256)+','
            }
            generated += Math.floor(Math.random() * 256)+')'
            return generated
        default:
            generated= '#'
            for (let i=0; i<6; i++){
                generated+=nums_letters1.charAt(Math.floor(Math.random() * nums_letters1.length))
            }
            return generated
    }

}

console.log(generateColor())          // #d1b0f0
console.log(generateColor('hexa'))    // #19da38
console.log(generateColor('rgb'))     // rgb(39,160,96)
console.log(generateColor('hexa', 3)) // [ '#ce5438', '#365696', '#20cd3e' ]
console.log(generateColor('rgb', 3))  // [ 'rgb(221,5,22)', 'rgb(119,169,192)', 'rgb(228,193,219)' ]

//Question 10

//1
const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const text2 ='I am very tired and hungry but I want to finish this test right now because if I not finish it I would feel unsatisfied and also sad. I hope it go well.'

const mostFrequentWord = text => {

let words = text.split(' ')
//console.log(words)
let counts = {} 
let compare = 0  
let mostFrequent = ''

for(let i = 0;i < words.length; i++){
    const word = words[i]
    counts[word] === undefined ? counts[word] = 1 :  counts[word] = counts[word] + 1 
    counts[word] > compare ?  (compare = counts[word],  mostFrequent = words[i]) : ''
        }
    return mostFrequent
}
console.log(mostFrequentWord(text1))
console.log(mostFrequentWord(text2))

//2
const sentence = `@He@ @%met%^$##%# his mom at no@on and s@he was watching %^$#an epso@ide%^$# of the begni@nging of her Sol@os. Her te@net%^$# hel@ped %^$#her to le@vel up her stats. %^$#After that h@e went to %^$#kayak driving Civic %^$#Honda.`

const cleanSentence = sentence.replace(/[^\w\s]/gi, '')

const arrWordsSentence = cleanSentence.split(' ')
 
console.log(arrWordsSentence, arrWordsSentence.length)

//answer is 36

//3

const palindrome = (str) => {
    let isPalindrome= false
    let regex = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(regex, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    reverseStr === lowRegStr ? isPalindrome=true : isPalindrome=false
    return isPalindrome
  }
  console.log(palindrome('Anna'))
  console.log(palindrome('ohho'))
  console.log(palindrome('tired'))

  //4
  const checkNumberOfPalindroms = (text) =>{
    let words = text.split(' ')
    let count = 0

    words.forEach(word => palindrome(word) ? count+=1 : count+=0)

    return count
  }

  console.log(checkNumberOfPalindroms(sentence))
