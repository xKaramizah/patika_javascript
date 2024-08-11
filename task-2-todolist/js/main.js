listItems()
const taskDOM = document.querySelector("#task")

function newElement(){
    if(taskDOM.value.trim() != "") {
        let ulDOM = document.querySelector("#list")
        let liDOM = document.createElement("li")
        liDOM.innerHTML = taskDOM.value
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
        console.log(taskDOM.value)
    }
}

taskDOM.addEventListener("keypress", function(e) {
    if(e.key === 'Enter'){
        newElement()
    }
})

function listItems() {
    let listItems = document.querySelectorAll('#list li');
    
    listItems.forEach(item => {
        let closeButton = document.createElement('span');
        closeButton.innerHTML = 'x';
        closeButton.className = 'close';
        closeButton.addEventListener('click', function() {
            item.remove();
        })
    
        item.appendChild(closeButton);
    
        item.addEventListener('click', function() {
            item.classList.toggle('checked');
        })
    })
}