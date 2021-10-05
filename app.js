// Local storage
// localStorage.clear('inputs')
// localStorage.clear('checkboxes')
var inpValues = []
var checkValues = []
// Input and button
var inp = document.querySelector('.to-do-inp');
var but = document.querySelector('.to-do-but');
var lists = document.querySelectorAll('.list');
// New div
var divArr = []
var closeArr = []


// ეს და ამის ქვემოთა if უზრუნველყოფს local storage-დან ამოღებულების გადანაწილებას შესაბამის დივში
var checkBoxIndex = {
    general: 0,
    work: 1,
    exercise: 2,
    travel: 3,
    family: 4,
    education: 5,
    friends: 6,
    relationship: 7,
}

if (localStorage.getItem('inputs')) {
    inpValues = JSON.parse(localStorage.getItem('inputs'))
    checkValues = JSON.parse(localStorage.getItem('checkboxes'))
    for (var i = 0; i < inpValues.length; i++) {
        var listDiv = document.createElement('div')
        var listClose = document.createElement('span')
        listClose.classList.add('close')
        listClose.innerHTML = '❌'
        listDiv.classList.add('list-in')
        listDiv.innerHTML = `<p>📌 ${inpValues[i]}</p>`
        lists[checkBoxIndex[checkValues[i]]].appendChild(listDiv)
        listDiv.appendChild(listClose)
        closeArr.push(listClose)
        divArr.push(listDiv)
    }
}

localStorage.setItem('inputs', JSON.stringify(inpValues))
localStorage.setItem('checkboxes', JSON.stringify(checkValues))
var indexOfClose;


// ეს აძლევს local storage-დან დამატებულებს eventlisteners

closeArr.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (flag == false) {
            indexOfClose = closeArr.indexOf(item)
            item.parentNode.remove()
            divArr.splice(indexOfClose, 1)
            inpValues.splice(indexOfClose, 1)
            checkValues.splice(indexOfClose, 1)
            closeArr.splice(indexOfClose, 1)
            localStorage.setItem('inputs', JSON.stringify(inpValues))
            localStorage.setItem('checkboxes', JSON.stringify(checkValues))
            flag = true
        }
        removeLoading.style.display = 'flex'
        setTimeout(() => {
            flag = false
            removeLoading.style.display = 'none'
        }, 800);
    })
})
// Random quote
// Quotes
var quotes = [
    '„You only live once, but if you do it right, once is enough.”',
    '„The unexamined life is not worth living.”',
    '„Turn your wounds into wisdom.”',
    '„Life is ten percent what happens to you and ninety percent how you respond to it.”',
    '„Keep calm and carry on. All progress takes place outside comfort zone”',
    '„Pain is temporary, it may last for a year but eventually it will subside and something beautiful will take its place.”',
    '„Life is not about how hard can u hit, it is about how hard you can get hit.”',
    '„Do not be afraid to fail! this is how winers are made!”',
    '„He who says he can and he who says he can not are both right, you decide your own fate.”',
    '„Make a choice! Just decide! What is gonna be and who you are gonna be.”',
    '„Get up and do not ever give up! Fight your way back into the light.”',
    '„Sometimes you must sacrifice what you are for what you want to become.”',
    '„Skill is only developed by hours and hours and hours of beating on your craft.”',
    '„If you are already in pain, already in hurt, DO NOT QUIT! Get reward from it.”',
    '„You have the power to make this life free and beautiful.”',
    '„Remember, there are no mistakes, only opportunities.”',
    '„Nobody who ever gave his best regretted it. Always proud of your self.”',
    '„When you fail, ask your self if you did your best and if it was so, be proud of this failure.”',
    '„The only failure is to stop trying. Do not quit, get everything you want.”',
    '„Defeat is state of mind. No one has ever been defeated until defeat has been accepted as a reality.”'
]

// ეს არაფერი არაა ისეთი მარტო quote-ბზე რომელიც ახლა დამალული მაქვს რო დრო არ წაიღოს ლაოდინგივითაა
var rand = Math.floor(Math.random() * 20);
var quote = document.getElementById('quote')
var container = document.querySelector('.container');
var loader = document.querySelector('.loader');
quote.innerHTML = quotes[rand]

if (quotes[rand].length > 90) {
    setTimeout(() => {
        loader.style.display = 'none'
        container.style.display = 'flex'
    }, 6000);
}

if (quotes[rand].length > 80) {
    setTimeout(() => {
        loader.style.display = 'none'
        container.style.display = 'flex'
    }, 4000);
}
if (quotes[rand].length <= 80) {
    setTimeout(() => {
        loader.style.display = 'none'
        container.style.display = 'flex'
    }, 3000);
}

// Checkboxes
var checkTrue = false;
var checkBoxes = document.querySelectorAll('.checkin');
checkBoxes.forEach((item) => {
    item.addEventListener('click', () => {
        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = false
            checkTrue = true
        }
        item.checked = true
    })
})

var flag = false;
var removeLoading = document.querySelector('.remove-loading');
but.addEventListener('click', () => {
    var listDiv = document.createElement('div')
    var listClose = document.createElement('span')
    if (inp.value == '') {
        alert('Please, type valid message')
    } else {
        checkBoxes.forEach((item, index) => {
            if (item.checked) {
                listClose.classList.add('close')
                listClose.innerHTML = '❌'
                listDiv.classList.add('list-in')
                listDiv.innerHTML = `<p>📌 ${inp.value}</p>`
                lists[index].appendChild(listDiv)
                listDiv.appendChild(listClose)
                divArr.push(listDiv)
                closeArr.push(listClose)
                checkValues.push(checkBoxes[index].value)
                inpValues.push(inp.value)
            }
        })
    }
    if (checkTrue == false) {
        alert('Categories are empty, where do you want to add your goal?')
    }
    for (var i = 0; i < divArr.length; i++) {
        localStorage.setItem('inputs', JSON.stringify(inpValues))
        localStorage.setItem('checkboxes', JSON.stringify(checkValues))
    }

    // ეს აძლევს ახალ დამატებულებს eventlisteners

    closeArr.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (flag == false) {
                indexOfClose = closeArr.indexOf(item)
                item.parentNode.remove()
                divArr.splice(indexOfClose, 1)
                inpValues.splice(indexOfClose, 1)
                checkValues.splice(indexOfClose, 1)
                closeArr.splice(indexOfClose, 1)
                localStorage.setItem('inputs', JSON.stringify(inpValues))
                localStorage.setItem('checkboxes', JSON.stringify(checkValues))
                flag = true
            }
            removeLoading.style.display = 'flex'
            setTimeout(() => {
                flag = false
                removeLoading.style.display = 'none'
            }, 800);
        })
    })
})
