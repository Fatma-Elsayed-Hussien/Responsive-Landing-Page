// ------------ Filter Tabs (Portfolio Section) -----------
let filterButtons = document.querySelector("#portfolio-filters").children; // tabs block(as ul)
let items = document.querySelector(".portfolio-container").children; // images

for(let i = 0; i < filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function(e){ // tab (as li)
        for(let j = 0; j < filterButtons.length; j++){ // remove active from all (li | tab)
            filterButtons[j].classList.remove("filter-active");
        }
        this.classList.add("filter-active");

        let target = this.getAttribute("data-filter");

        for(let k = 0; k < items.length; k++){
            items[k].style.display = "none";
            
            if(target === items[k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if(target === "all"){
                items[k].style.display = "block";
            }
        }
    })
}

// ------------ Back to Top Button -----------
let backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", function(){
    this.scrollY > 100 ? backToTopBtn.classList.add("active") : backToTopBtn.classList.remove("active");
})
backToTopBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// ------------ Add / Remove Activa Class (Navbar) -----------
document.querySelectorAll("#navbar .nav-link").forEach(function(navLink){
    navLink.addEventListener("click", function(e){
        document.querySelectorAll("#navbar .nav-link").forEach(function(el){
            el.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})
