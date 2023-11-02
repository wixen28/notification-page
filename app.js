

const people = [
    {id: 1, image: './assets/images/avatar-mark-webber.webp', fullName: 'Mark Webber', notifText: 'reacted to your recent post My first tournament today!', time: '1m ago', message: ''},
    {id: 2, image: './assets/images/avatar-angela-gray.webp', fullName: 'Angela Grey', notifText: 'followed you', time: '5m ago', message: ''},
    {id: 3, image: './assets/images/avatar-jacob-thompson.webp', fullName: 'Jacob Thompson', notifText: 'has joined your group Chess Club', time: '1 day ago', message: ''},
    {id: 4, image: './assets/images/avatar-rizky-hasanuddin.webp', fullName: 'Rizky Hasanuddin', notifText: 'sent you a private message', time: '5 days ago', message: `Hello, thanks for setting up the Chess Club. I have been a member for a few weeks now and
    I am already having lots of fun and improving my game.`},
    {id: 5, image: './assets/images/avatar-kimberly-smith.webp', fullName: 'Kimberly Smith', notifText: 'commented on your picture', time: '1 week ago', message: ''},
    {id: 6, image: './assets/images/avatar-nathan-peterson.webp', fullName: 'Nathan Peterson', notifText: 'reacted to your recent post 5 end-game strategies to increase your win rate', time: '2 weeks ago', message: ''},
    {id: 7, image: './assets/images/avatar-anna-kim.webp', fullName: 'Anna Kim', notifText: 'left the group Chess Club', time: '2 weeks ago', message: ''}
]

let container = document.querySelector('.container')
const button = document.querySelector('button')

window.addEventListener('DOMContentLoaded', function() {
    const showInHTML = people.map((person, index) => {
        return `<section class="section unread">
        <div id="profile-pic" class="inline">
          <img src="${person.image}" alt="profile picture">
        </div>
        <div id="notification" class="inline">
          <h2 class="name inline2" id="firstName">${person.fullName}</h2>
          <p class="notif-text inline2">${person.notifText}</p>
          <p class="time-date">${person.time}</p>
          <p class="message-text" id="message">${person.message}</p>
        </div>
      </section>`
    }).join('')

    container.innerHTML = showInHTML
    

    //mark all as read
    button.addEventListener('click', function(e){
        let sections = document.querySelectorAll('section')
        sections.forEach(function(oneSection){
            oneSection.style.backgroundColor = '#fff'
            myMessage.classList.add('active')
            notifNumber.innerText = 0
        })
       
    })

    //unread messages 
    const unread = document.querySelectorAll('.unread')
    const notifNumber = document.querySelector('#span-number')

    notifNumber.innerText = unread.length
    
    //distinguish between unread/read
    let notifications = document.querySelectorAll('section')
    notifications.forEach(function(oneSection) {
        let sectionClicked = true
        oneSection.addEventListener('click', function (e){
            if(sectionClicked) {
                oneSection.style.backgroundColor = '#fff'
                oneSection.classList.remove('unread')
                const newUnreadMessagess = document.querySelectorAll('.unread')
                notifNumber.innerText = newUnreadMessagess.length
                sectionClicked = false

            } else {
                oneSection.style.backgroundColor = 'rgb(247, 247, 247)'
                sectionClicked = true
            }
        })
        
    }) 

    //message changing

    let div = document.querySelectorAll('#notification')

    let myMessage = document.createElement('p')
    myMessage.innerText = `Hello, thanks for setting up the Chess Club. I have been a member for a few weeks now and
    I am already having lots of fun and improving my game.`
    myMessage.classList.add('myClass')
    div[3].appendChild(myMessage)
    // console.log(myMessage)

    myMessage.addEventListener('click', function(e){
        myMessage.classList.toggle('active')
    })

})




