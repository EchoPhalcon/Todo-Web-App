
let btn = document.getElementById('button-addon2')
let parentList = document.getElementById('parentList')

btn.addEventListener('click', addList)
function addList(event) {

    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }

    let currentBtn = event.currentTarget;
    let currentText = currentBtn.previousElementSibling
    let CurrentListItem = currentText.value


    let newLi = document.createElement('li')

    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = `<h3 class="flex-grow-1">${CurrentListItem}</h3>
           <button class="btn btn-warning mx-2" onclick="editList(this)">Edit</button> 
           <button class="btn btn-danger" onclick="removeList(this)">Remove</button>`
    parentList.appendChild(newLi)
}

function removeList(currElement) {
    currElement.parentElement.remove()
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")

        newEmptyMsg.textContent = "Nothing is here, add something"
        parentList.appendChild(newEmptyMsg)
    }
}


function editList(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit"
        let currListName = currElement.previousElementSibling.value
        let currHeading = document.createElement('h3');
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currListName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    } else {
        currElement.textContent = "Done"
        let currListName = currElement.previousElementSibling.textContent
        let currInput = document.createElement('input');
        currInput.type = "text"
        currInput.placeholder = "TO-DO List"
        currInput.className = "form-control"
        currInput.value = currListName
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}
