const elem = document. getElementById("search-bar");
const result=document.getElementById("result");

var apikey="28e285ab";

elem. addEventListener("keypress", (event)=> 
{
if (event.keyCode === 13) { // key code of the keybord key.
console.log('hello');
var url="https://www.omdbapi.com/?apikey="+apikey+"&t="+elem.value;

console.log(elem.value);
fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data)=>{
        console.log("feteching");
        console.log(data);
        
        console.log("response",data.Response);
        console.log(typeof(data.Response))
       if(data.Response=='True'){
        // result.style.display="block";
      result.style.height="auto";
      result.style.webkitTransition = "all 2s";

       
        console.log("inside response data=");
        console.log(data);
        // let resultMain=document.getElementById("result-main");
        let resultTitle=document.getElementById("result-title");
        // resultMain.style.display="initial";
        // resultTitle.style.display="initial";
       
        console.log("sinnnnnnnnnn");
        var img=document.getElementById("rimg");
        img.setAttribute("src", data.Poster);

       console.log("working")
        // var title=document.getElementById("result-title");
        // console.log("title"+title.innerText);
        var author=document.getElementById("result-author");
        var release=document.getElementById("result-release-date");
        var type=document.getElementById("result-movie-type");
        var actor=document.getElementById("result-actor");
        var details=document.getElementById("result-details");
        let favourite=document.getElementById("favourite");

        resultTitle.innerText=data.Title;

        
        author.innerText="Director : "+data.Director;
        release.innerText="Release :"+data.Released;
        type.innerText="Genre : "+data.Genre;
        actor.innerText="Actors : "+data.Actors;
        details.innerText="About : "+data.Plot;
        favourite.setAttribute("data-value",data.Title);
        // result.innerText=data.Year;
        console.log("title"+data.Title);
        console.log("year"+data.Year);
        console.log(data.Released)
       }
       else{
        result.style.display="none";
        console.log("some error");
        alert("movie not found");
        
       }
    })
    
// your code to Run.
}
});
var favourite=document.getElementsByClassName("favourite");



for(let i=0;i<favourite.length;i++)
{
  
  favourite[i].addEventListener("click",()=>{

    console.log("event "+i+" clicked");
    console.log("item"+favourite[i].getAttribute("data-value"));
    addToFavourite(favourite[i].getAttribute("data-value"))
  })
}


var disappear=document.getElementById('disappear');
console.log(disappear);
disappear.addEventListener('click',()=>
{
  // console.log("hello i am disappearing");
  disappear.parentElement.style.height='0px';
});

function addToFavourite(item)
{
  console.log("add to favourite")
  url="http://www.omdbapi.com/?apikey="+apikey+"&t="+item;
  var myObj;
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
      console.log("favourite");
      myObj={
        'title':data.Title,
        'release':data.Released,
        
      };
      console.log(myObj);
  
  console.log("myobj"+myObj)
  if(localStorage.getItem("favourite")==null)
  {
    console.log("null");
    var favourite=[myObj]
    localStorage.setItem('favourite',JSON.stringify(favourite));
  }
  else{
    var favourite=JSON.parse(localStorage.getItem('favourite'));
    console.log("Favourite");
    console.log(favourite);
    
    const isFound = favourite.some(element => {
      if (element.title === myObj.title && element.release===myObj.release) {
        return true;
      }
      return false;
    });
    console.log("isfound",isFound);
    
    if(!isFound)
    {
      console.log("not include");
      favourite.push(myObj);
      localStorage.setItem("favourite",JSON.stringify(favourite));
      console.log(localStorage.favourite);

    }
    else
    {
      console.log("include");
    }
  }
}) ;
}
