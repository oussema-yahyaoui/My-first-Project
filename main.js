var tasks = [];
window.onload = function () {
    if (JSON.parse(localStorage.getItem("do-task")) !== null) {
        tasks = JSON.parse(localStorage.getItem("do-task"))
        console.log("tasks:" + tasks)
        display();
    }
};
function addTask() {
    if (document.querySelector(".addtext").value.trim() != "") {
        tasks.push(document.querySelector(".addtext").value.trim());
        if (localStorage.getItem("do-task") == null) {
            localStorage.setItem("do-task", JSON.stringify(tasks));
        } else {
            localStorage.setItem("do-task", JSON.stringify(tasks));
        }
        console.log(localStorage.getItem("do-tasks"));
        document.querySelector(".addtext").value = ''
        display();
    }


    display();
}

function display() {
    document.querySelector(".list").innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        document.querySelector(".list").innerHTML += "<center><div class='task'><i class='glyphicon glyphicon-remove'  onclick='del(" + i + ")'></i>" + tasks[i] + "<i class='glyphicon glyphicon-thumbs-up' onclick='strike(" + i + ")'></i></div'></center>";

    }
}

function del(index) {

    tasks.splice(index, 1);
    if (localStorage.getItem("do-task") == null) {
        localStorage.setItem("do-task", JSON.stringify(tasks));
    } else {
        localStorage.setItem("do-task", JSON.stringify(tasks));
    }
    display();

}

function strike(index) {
    if (tasks[index].includes('<strike>')) {
        tasks[index] = tasks[index].replace("<strike>", "");
        tasks[index] = tasks[index].replace("</strike>", "");
    }
    else {
        tasks[index] = "<strike>" + tasks[index] + "</strike>"
    }
    if (localStorage.getItem("do-task") == null) {
        localStorage.setItem("do-task", JSON.stringify(tasks));
    } else {
        localStorage.setItem("do-task", JSON.stringify(tasks));
    }
    display();
}



$('.clearbutton').click(function () {
    console.log('clicked')
    localStorage.removeItem('do-task');
    $(".list").html('')
})



