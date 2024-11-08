const quantity = document.querySelector(".quantity-input");
const price = document.querySelector(".price-input");
const calculate = document.querySelector(".button-calculate");
const submit = document.querySelector(".button-submit");
const form = document.querySelector("#fieldset");

const handleButton = () =>{
    let result = price.value;
    let result2 = quantity.value;
    let element = `The total amount payable = $${result*result2}`;

    if(result ==="" || result2===""){
        alert("KINDLY INPUT A FIELD ON THE TEXTAREA");
    }
    else{
        Calculate(element);
    }
}
const Calculate = (element) =>{
    let messageBody = document.createElement("p");
    let y = document.createElement("div");


    messageBody.textContent = element;
    y.setAttribute("id","y");
    messageBody.classList.add("message_body");

    messageBody.append(y);
    form.append(messageBody);
    event.preventDefault();
}