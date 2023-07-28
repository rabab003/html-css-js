let toggles = document.getElementsByClassName("toggle")

let contentDiv = document.getElementsByClassName("content")

let icon = document.getElementsByClassName("icon")

console.log(toggles, contentDiv, icon)

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";

            toggles[i].style.color = '#0084e9';
            icon[i].classList.remove('bx bx-plus-medical')
            icon[i].classList.add('bx bx-minus')
            contentDiv.style.transtion
        } else {
            contentDiv[i].style.height = '0px';
            toggles[i].style.color = '#111130';
            icon[i].classList.remove(' bx bx-minus')
            icon[i].classList.add('bx bx-plus-medical')

        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = '0px';
                toggles[j].style.color = '#111130';
                icon[j].classList.remove('bx bx-minus');
                icon[j].classList.add('bx bx-plus-medical')
            }
        }
    })
}