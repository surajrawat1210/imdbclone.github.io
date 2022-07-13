

var apikey="28e285ab";


var favourite=JSON.parse(localStorage.getItem('favourite'));
 console.log(favourite);
 function favouriteListItem(){
    
    if(favourite!=null && favourite.length>=1)
    {
        var watchlist=document.getElementById("watchlist");
        var newUl = document.createElement('ul');
        watchlist.appendChild(newUl);
        newUl.id = "favouriteList";
        console.log("Fav");
        console.log(favourite);
        for(let i=0;i<favourite.length;i++)
        {
              let newLi = document.createElement('li');
              newLi.setAttribute("class","row");
              var movieName=document.createElement("div");
              movieName.setAttribute("class","col-6");
              movieName.innerText=favourite[i].title;
              var released=document.createElement("div");
              released.setAttribute("class","col-4");
              released.innerText=favourite[i].release;
              var dele=document.createElement("div");
              dele.setAttribute("class","col-2");
              dele.innerHTML='<i class="remove fa-solid fa-trash-can" data-value='+'"'+favourite[i].title+'" id="remove"></i>';
              newLi.appendChild(movieName);
              newLi.appendChild(released);
              newLi.appendChild(dele);
              newUl.appendChild(newLi);
        }
    }
    return 1;
}
favouriteListItem();


// console.log(c);
// var remove=document.getElementById("remove");

setInterval(()=>{
    var remove=document.querySelectorAll(".remove");
remove.forEach(element => {
    element.addEventListener("click",()=>{
    console.log("clicked");
    var value=element.getAttribute("data-value");
    console.log(element.getAttribute("data-value"));

     favourite=JSON.parse(localStorage.getItem('favourite'));
    favourite=favourite.filter(item=>item.title!=value);
    console.log("after removal");
    console.log(favourite);
    localStorage.setItem("favourite",JSON.stringify(favourite));
    console.log(localStorage.getItem("favourite"));
    // element.parentElement.remove();
    watchlist.innerHTML="";
    console.log("deleted");
    console.log(document.querySelectorAll('.remove'));
    favourite=JSON.parse(localStorage.getItem('favourite'));
    favouriteListItem();
    })
    });
},1000);




    
// var id2=window.setInterval(()=>{

// },1000)