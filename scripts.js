$("#addBtn").click (() => {
    let task = $("#todoInp").val()
    $("#todo-list").append(`<li class="todoLI"> ${task} </li>`)
});

$("#todoLi").click (() => {
  $("#todoLi").css("text-decoration", "line-through")
});