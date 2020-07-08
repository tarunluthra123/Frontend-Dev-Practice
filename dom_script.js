window.onload = function () {
    let btn = document.getElementById('btn')
    let box = document.getElementById('inputbox')
    let list = document.getElementById('ulist')

    box.addEventListener('keyup', function (event) {
        if (event.key == "Enter") {
            btn.onclick();
        }
    })

    btn.onclick = () => {
        let text = box.value;
        let li = document.createElement('li')
        li.innerText = text + ' '

        let xBtn = document.createElement('button')
        xBtn.innerText = 'X'
        xBtn.onclick = function (event) {
            event.target.parentElement.remove()
        }
        li.appendChild(xBtn)


        let upBtn = document.createElement('button')
        upBtn.innerText = 'UP'
        upBtn.onclick = function () {
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }
        li.appendChild(upBtn)

        let downBtn = document.createElement('button')
        downBtn.innerText = 'DOWN'
        downBtn.onclick = function () {
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,
                event.target.parentElement
            )
        }
        li.appendChild(downBtn)

        list.append(li)

        box.value = ""
    }
}