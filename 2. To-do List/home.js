const todoObjectList = [];
class TOdo_class{
    constructor(item){
        this.ulElement = item;
    }
    add(){
        const task = document.querySelector("#Task").value;
        if(task != ""){
            const todoObject = {
                id : todoObjectList.length,
                todoText: task,
                isDone: false
            }
            todoObjectList.push(todoObject);
            this.display();
            document.querySelector("#Task").value = "";
        }else{
            window.alert("Please Add a Task");
        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone ? (todoObjectList[selectedTodoIndex].isDone = false) : (todoObjectList[selectedTodoIndex].isDone = true);
        this.display();
    }

    deleteElement(z){
        const selectedTodoIndex = todoObjectList.findIndex((item) => item.id == z);
        todoObjectList.splice(selectedTodoIndex, 1);
        this.display();
    }


    display(){
        this.ulElement.innerHTML = "";
        todoObjectList.forEach((object_item => {
            const liElement = document.createElement("li");
            const deltBtn = document.createElement("i");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            deltBtn.setAttribute("data-id", object_item.id);
            deltBtn.classList.add("far", "fa-trash-alt");
            deltBtn.addEventListener("click", function(e){
                const deleteId = e.target.getAttribute("data-id");
                e.stopPropagation();
                myTodoList.deleteElement(deleteId);
            })

            liElement.appendChild(deltBtn);
            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            });

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);
        }))
    }

}
const listSection = document.querySelector("#myList");
myTodoList = new TOdo_class(listSection);
document.querySelector("#adbtn").addEventListener("click", function() {
    myTodoList.add()
})