
/*********************************  
Difficulty: The showList() did not work, I had to research on the internet, initially did not include JSON.parse();   
*/
//  Referencing the classes, assign to variables
const todoInput = document.getElementsByClassName("newTodo")[0];
const addBtn = document.getElementsByClassName("addBtn")[0];
// const listItem = document.querySelector("listItem");
const trashCan = document.querySelector("rash_can");
const closeSpan = document.getElementById("closeSpan");

// Event listener on click
addBtn.addEventListener("click", () => {
  // use get input value, trim() to remove whitespace from both ends of a string returns the string.
  if (todoInput.value.trim() != 0) {
    // Get items from storage, JSON.parse() method parses a string and returns a JavaScript object
    let localItems = JSON.parse(localStorage.getItem('localItem'));
      if (localItems === null) {
        //  Declare array
          taskList = []; 
          } else {
            taskList = localItems;
              }
               // push() to populate the array.
             taskList.push(todoInput.value);
          // Convert the taskList to a string and stores in the localStorage with setItem()
          localStorage.setItem('localItem', JSON.stringify(taskList));
       }
    // Call showList() to display the content of localStorage
  todoInput.value ="";
  showList();
});
//  Shows the list
function showList(){
  let localItems = JSON.parse(localStorage.getItem('localItem'));
  if (localItems === null) {
    taskList = [];
     } else {
       taskList = localItems;
        }
        // Declare and initialize variable to epmty for storing the output.
        let outPut = '';
      // Reference the todoLists; assign to a variable for displaying the list.
      let taskListShow = document.querySelector('.todoLists');
      // forEach() loop through the stored data in the localstorage
    taskList.forEach((data, index) => {
  // Store the HTML in the output variable
  outPut += `<div class="list">
      <input type="text" class="listItem" value="${data}" 
      readonly="readonly"/> <span class="span outputSpan" 
      onclick="  editTask(${index})">Edit</span>
      <i class="fa-solid fa-trash-can delBtn" onClick="deleteItem(${index})"></i>   
      </div>`
});
// Puts ouput into HTML for window display
  taskListShow.innerHTML = outPut;
}
//  Call showList
showList();
// Delete Function use the index to delete
// splice(index, 1) removes 1 item at index=index removes.
function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'));
    taskList.splice(index, 1)
    // Store or updates the localStorage
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showList();
}
//  Clears the localStorage
function clearTodo() {
  alert("WARNING! This will delete everything in localStorage.")
   localStorage.clear();
 showList();
}
// Edit function use the index to splice the content, puts it on the newTodo window the
let editTask = (index) => {
  const listItem = document.querySelector('.listItem');
     todoInput.value = taskList.splice(index, 1);
     localStorage.setItem('localItem', JSON.stringify(taskList));
  showList();
};

// listen to click on the X, then close window
closeSpan.addEventListener('click', () => {
   closeWindow();
});
// close function
function closeWindow() {
   window.close();
}


