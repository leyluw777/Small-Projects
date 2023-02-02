const toggleBtn = document.getElementById("toggle-btn");
const submitBtn = document.getElementById("submitBtn");
var isActive = false;

toggleBtn.addEventListener("click", function clickedBtn(){
    isActive = true;
    if (isActive == true) {
        toggleBtn.classList.toggle("active");
    }
    if(toggleBtn.classList.contains("active")) {
        submitBtn.style.background = " #096CA4";
        submitBtn.style.cursor = "pointer"
        submitBtn.disabled = false;
        console.log(submitBtn.disabled);
    }
    else{
        submitBtn.style.background = "#6A716E";
        submitBtn.disabled = true;
        submitBtn.style.cursor = "inherit";
    }
})