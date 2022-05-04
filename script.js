// Meat - 400g per person / more than 6 hours - 650
// Beer - 1200ml per person / more than 6 hours - 2000ml
// Soda - 1000 ml per person / more than 6 hours 1500ml

// children worth 0.5, and they don't drink beer

function loaded(){
    let submit;

    submit = document.getElementById("submit_input");
    submit.addEventListener("click", send);
    
    function send () {
        let adults, children, duration;
        adults = document.getElementById("adults_input").value;
        children = document.getElementById("children_input").value;
        duration = document.getElementById("duration_input").value;
        calculate(adults, children, duration);
    }
    
    function calculate(adults, children, duration) {
    let meat, beer, soda;

    meat = adults * 400 + children * 400 * 0.5;
    beer = adults * 1200;
    soda = adults * 1000 + children * 1000 * 0.5;
    
    if (duration >= 6) {
            meat += adults * 250 + children * 250 * 0.5;
            beer += adults * 800;
            soda += adults * 500 + children * 500 * 0.5;
        }
    
    scale(meat, beer, soda);
    }

    function scale (meat, beer, soda) {
        meat /= 1000;
        beer /= 1000;
        soda /= 1000;

        receive(meat, beer, soda);
    }
    function receive (meat, beer, soda){
        h2 = document.getElementsByTagName ("h2");
        
        h2[0].innerText = Math.ceil(meat) + " kg of meat";
        h2[1].innerText = Math.ceil(beer) + " liters of beer";
        h2[2].innerText = Math.ceil(soda) + " liters of soda";
    }
        
}
