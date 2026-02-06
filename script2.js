// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMsg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === "") {
        formMsg.style.color = "red";
        formMsg.innerText = "All fields are required!";
    } else if (!email.includes("@")) {
        formMsg.style.color = "red";
        formMsg.innerText = "Enter a valid email!";
    } else {
        formMsg.style.color = "green";
        formMsg.innerText = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}