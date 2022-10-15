var mouseEvent="empty";
last_position_of_x, last_position_of_y;
canvas=document.getElementById("canvaslienzo2");
ctx=canvas.getContext("2d");
color="black"; width_of_line=4;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value
    width_of_line=document.getElementById("width_of_line");
    mouseEvent="mousedown";
}