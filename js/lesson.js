const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regEXP =/^\+996 [2579]\d{2}-\d{2}-\d{2}-\d{2}$/


phoneButton.addEventListener('click', () => {
    if (regEXP.test(phoneInput.value)) {
        phoneResult.innerHTML = 'Правильный номер'
        phoneResult.style.color = 'blue'
    } else {
        phoneResult.innerHTML = 'Неправильный номер'
        phoneResult.style.color = 'red'
    }
})

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContent.forEach(tabBlock => {
        tabBlock.style.display = 'none'
    })
    tabs.forEach(tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {
    tabContent[indexElement].style.display = 'block'
    tabs[indexElement].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabsItem, tabIndex) => {
            if (event.target === tabsItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}



const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')



const  converterChanges = (elementInput, elementTarget, elementTarget2, variant) => {
    elementInput.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            switch (variant) {
                case 'som':
                    elementTarget.value =(elementInput.value / response.usd).toFixed(2)
                    elementTarget2.value =(elementInput.value / response.eurSom).toFixed(2)
                    break
                case 'usd':
                    elementTarget.value =(elementInput.value * response.usd).toFixed(2)
                    elementTarget2.value =(elementInput.value / response.eurUsd).toFixed(2)
                    break
                case 'eur':
                    elementTarget.value =(elementInput.value * response.eurSom).toFixed(2)
                    elementTarget2.value =(elementInput.value * response.eurUsd).toFixed(2)
                    break
                default:
                    break
            }

            elementInput.value === '' &&  (elementTarget.value = '')
            elementInput.value === '' &&  (elementTarget2.value = '')
        }
    }



}
converterChanges(somInput, usdInput, eurInput,'som')
converterChanges(usdInput, somInput, eurInput, 'usd')



converterChanges(eurInput, somInput, usdInput, 'eur')
// Получаем все слайды и преобразуем NodeList в массив



const cardContainer = document.querySelector('.card');
const prevBtn = document.querySelector('#btn-prev');
const nextBtn = document.querySelector('#btn-next');

let id = 0;



function CardSwitcher(direction) {
    if (direction === 'next') {
        id++;
    if (id > 200) {
        id = 1;
    }
    } else if (direction === 'prev') {
        id--;
    }
    if (id < 1) {
        id = 200;
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => response.json())
    .then(data => {
        cardContainer.innerHTML =`
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>`
    })
}
nextBtn.onclick = () => {
CardSwitcher('next');
}
prevBtn.onclick = () => {
CardSwitcher('prev');
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))


const cityNameInput = document.querySelector('.cityName')
const  city = document.querySelector('.city')
const  temp = document.querySelector('.temp')


const API_KEY = `e417df62e04d3b1b111abeab19cea714`
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather`


const citySearch = () => {
    cityNameInput.oninput = async (event) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${API_KEY}`)
            const data = await response.json()
            city.innerHTML = data?.name ? data?.name : 'Город не найден'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp -273) + `&ordm` : '...'

        } catch (e) {
            alert(`Error: ${e.message}`)
        }
    }
}
citySearch()
















