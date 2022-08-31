let moon = document.querySelector('#moon')
let stars = document.querySelector('#stars')
let mountains_behind = document.querySelector('#mountains_behind')
let btn = document.querySelector('#btn')
let text = document.querySelector('#text')

window.onload = () => {
   window.onscroll = () => {
      let scrollY = window.scrollY

      moon.style.top = scrollY * 0.75 + "px"
      stars.style.marginLeft = scrollY / 2 + "px"
      btn.style.marginTop = scrollY * 2 + "px"
      mountains_behind.style.marginTop = scrollY * 0.75 + "px"
      text.style.marginRight = scrollY * 4 + "px"
   }
}