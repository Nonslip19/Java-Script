var button = document.getElementsByTagName("button")[0];
var display = document.getElementById("display");
console.log(button);

// var random = Math.floor(Math.random()*49) + 1;




button.addEventListener("click", ()=>{
    var sayac = 0
    var lottery = []

    while (sayac < 6){
        var random = Math.floor(Math.random()*49) + 1;

        if (!lottery.includes(random)) {
            sayac++;
            lottery.push(random);
        }
    }
    display.innerHTML += lottery.sort(function(a,b){return a-b}) + "</br>";
});

