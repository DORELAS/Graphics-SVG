var butoni = document.querySelectorAll(".butona button");
var cat = document.getElementsByClassName("cat")[0];
var i;

for (i = 0; i < butoni.length; i++)
    {
        butoni[i].addEventListener("click", klasaMace);
    }

function klasaMace() {
    
    if(this.getAttribute("data-add")) {
       cat.classList.add(this.getAttribute("data-add"));
       }
    
     if(this.getAttribute("data-remove")) {
       cat.classList.remove(this.getAttribute("data-remove"));
       }
}