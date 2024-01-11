const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addContent);

function addContent() {
    const text = document.getElementById('text_input').value;
    const result = document.getElementById('result');

    result.innerHTML += `<h1>${text}</h1>`
}



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// แบบเก่า

// async คือต้องรออะไรบางอย่างก่อนถึงจะเริ่มทำงาน
async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    console.log(data)
    const json = await data.json()
    console.log(json)
    console.log(json.length)
    const titleList = document.getElementById('titleList')
    for (let i = 0; i < json.length; i++) {
        titleList.innerHTML += `<h1>${json[i].title}</h1>`
    }
}

fetchData()