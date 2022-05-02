// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let data;



fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

.then(function(res){
    return  res.json();
})
.then(function(res){
    data=res.articles  
    append(data)  
})

async function append(data){
    
        console.log(data)
        let div=document.getElementById("container");
        let container=document.createElement("container");

}

fetch("https://masai-mock-api.herokuapp.com/news?q=tesla")








