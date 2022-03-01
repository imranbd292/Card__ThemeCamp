document.getElementById("Teacher").onclick = function() {

    document.getElementById("student-1").style.display = "none";
    document.getElementById("teacher-1").style.display = "block";
    document.getElementById("teacher-2").style.display = "block";
    document.getElementById("teacher-3").style.display = "block";
    document.getElementById("teacher-4").style.display = "block";
    document.getElementById("teacher-5").style.display = "block";
    
}
document.getElementById("Student").onclick = function() {
    
    
    document.getElementById("teacher-1").style.display = "none";
    document.getElementById("teacher-2").style.display = "none";
    document.getElementById("teacher-3").style.display = "none";
    document.getElementById("teacher-4").style.display = "none";
    document.getElementById("teacher-5").style.display = "none";
    document.getElementById("student-1").style.display = "block";

}

document.getElementById("moon").onclick = function() {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
    document.getElementById("camp").style.color = "white";



}

document.getElementById("sun").onclick = function() {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";



}
