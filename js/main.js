//Start portfolio
let myLis = document.querySelectorAll(".portfolio .shafil li");
let iteams = document.querySelectorAll(".portfolio .portfolio-box");
myLis.forEach(li =>{
    li.addEventListener("click", (e)=>{
        //remove class active all ele
        myLis.forEach(li =>{
            li.classList.remove("active");
        });
        //add class active on ele current
        e.target.classList.add("active");

        iteams.forEach(iteam =>{
            iteam.style.display = "none";
        });

        document.querySelectorAll(e.target.dataset.cat).forEach(el =>{
            el.style.display = "block";
        });
    })
})
//End portfolio




// btnScroll Top
let btnScrollUp = document.querySelector(".btn-backUp");

window.addEventListener("scroll" , () =>{
    if(scrollY >= 600){
        btnScrollUp.style.display = "block"
    }else{
        btnScrollUp.style.display = "none"
    }
})

btnScrollUp.addEventListener("click" , ()=>{
    window.scrollTo({
        top : 0 ,
        left : 0 ,
        behavior : "smooth",
    })
})



// getFullYear Denamic
let myYear = document.getElementById("fullYear");
let dateNow = new Date();
let yearNow = dateNow.getFullYear();
myYear.innerHTML = yearNow;





