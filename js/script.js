console.log('скрипты сработали')

const as = document.querySelectorAll('#dd')

as[0].addEventListener('click', () => {console.log('сработала кнопка')}) 


console.log('as', as)

//browser-sync start --server --files "*.css, *.html, js/*.js" // для автоматического обновления браузера