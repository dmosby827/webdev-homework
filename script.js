console.log("script running");

function textDisplay(){
    let three = document.getElementById("three");
    
    if(three.style.display === "none"){
        three.style.display = "block";
        three.innerHTML = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
    }else {
        three.style.display = "none";
    
    }
}

