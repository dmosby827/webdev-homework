console.log("script running");

//fucntion used to onclick the button in html
function textDisplay(){

//declare a variable to get the id in html
    let three = document.getElementById("three");
    
// use the if statement to toggle visibility in html
    if(three.style.display === "none"){
        three.style.display = "block";

        //innerHTML to insert json placeholder in html
        three.innerHTML = fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
    }else {
        three.style.display = "none";
    
    }
}

