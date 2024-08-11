listItems()

// Yeni öğe ekleme işlemleri
const taskDOM = document.querySelector("#task")

function newElement() {
    if (taskDOM.value.trim() != "") {
        let ulDOM = document.querySelector("#list")
        let liDOM = document.createElement("li")
        liDOM.innerHTML = taskDOM.value.trim()
        ulDOM.append(liDOM)

        taskDOM.value = ""

        const toastDOM = document.querySelector("#liveToastSuccess")
        let toast = new bootstrap.Toast(toastDOM);
        toast.show();

        listItems()
    } else {
        let toastDOM = document.querySelector("#liveToastError")

        let toast = new bootstrap.Toast(toastDOM);
        toast.show();
    }
}

taskDOM.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        newElement()
    }
})
// Local Storage 
function localSave(liArray) {
    liArray.forEach((item, index) => {
        const textContent = item.childNodes[0].textContent.trim()
        localStorage.setItem(`liItem_${index}`, JSON.stringify(textContent))
    })

}

function localRemove(index) {
    localStorage.removeItem(`liItem_${index}`)
}

// li listesi düzenlenmesi 
function listItems() {
    let listItems = document.querySelectorAll('#list li');

    listItems.forEach((item, index) => {
        if (!item.querySelector('.close')) {
            let closeButton = document.createElement('span');
            closeButton.innerHTML = 'x';
            closeButton.className = 'close';
            closeButton.addEventListener('click', function () {
                item.remove()
                localRemove(index)
            })

            item.appendChild(closeButton)
        }

        item.addEventListener('click', function () {
            item.classList.toggle('checked')
        })
    })
    localSave(listItems)
}