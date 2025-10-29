const taskNameInp = document.querySelector('.form__task-name')
const taskDateInp = document.querySelector('.form__date')
const createBtn = document.querySelector('.form__create')
const tasksDiv = document.querySelector('.tasks')

const allTasks = localStorage.getItem('tasks')
tasksDiv.innerHTML = allTasks

const addDeleteFFunctionToBtn = () => {
    const tasks = document.querySelectorAll('.task')
    tasks.forEach(task => {
       const deleteBtn = task.querySelector('button.task__delete')
        deleteBtn.addEventListener('click', () => {
            tasksDiv.removeChild(deleteBtn.parentNode)
            localStorage.setItem('tasks', tasksDiv.innerHTML)
        })
    })
}


const createTask = (title, date) => {
    const taskHtml = `
    <div class="task">
        <h4 class="task__title">${title}</h4>
        <span class="task__datetime">
            <img src="./esets/images/calendar.svg" alt="">
            ${datetimeFormatetter(date)}
        </span>
        <button class="task__delete">
            <img src="./esets/images/close.svg" alt="">
        </button>
    </div>
`
return taskHtml
}

// функция helper
const datetimeFormatetter = (datetime) => {
    const date = datetime.split('T')[0].split('-').reverse().join('.')
    const time = datetime.split('T')[1]
    const formattedDatetime = `${date} - ${time}`
    return formattedDatetime
}


createBtn.addEventListener('click', () => {
    if(!(taskNameInp.value && taskDateInp.value)){
        //окно сверху не заполнено
        alert("Заполните все поля")
        return
    }

    const newTask = createTask(taskNameInp.value, taskDateInp.value)
    const allTasks = tasksDiv.innerHTML + newTask
    tasksDiv.innerHTML = allTasks //tasksDiv.innerHTML + newTask
    taskNameInp.value = null
    taskDateInp.value = null
    localStorage.setItem('tasks', allTasks)
    
})


//меняем дату
// const datetime ='2025-19-27T19:11'
// const date = datetime.split('T')[0].split('-').reverse().join('.')
// const time = datetime.split('T')[1]
// const formattedDatetime = `${date} - ${time}`
// console.log("дата", date)
// console.log("время", time)
// console.log(formattedDatetime)



//sessionStorege
//localStorege - локальное хранилище
//сохранить
// localStorage.setItem("name", "Max")
//удалить по ключу
// localStorage.clear()
//получить
// console.log(localStorage.getItem("name"))

//сохранить масив как масив - JSON -java script objekt notetion - формат обмена данными front back
localStorage.setItem("name", JSON.stringify([1,2,3]))
//получить JSON
console.log(JSON.parse(localStorage.getItem("name")))
