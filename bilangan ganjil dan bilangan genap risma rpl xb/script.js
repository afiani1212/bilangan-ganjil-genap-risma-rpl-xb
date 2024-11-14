const limitInput = document.getElementById("limit-input")
const startButon = document.getElementById("start-btn")
const evenNumberDiv = document.getElementById("even-numbers")
const oddnNumberDiv = document.getElementById("odd-numbers")

startButon.addEventListener("click", ()=>{
    const limit = parseint(limitInput.value)

    // memastikan input adalah bilangan positif
    if (isNaN(limit) || limit <=0){
        alert("Please enter a valid positive number.")
        return;
    }

    //kosongkan tampilan sebelumnya
    oddnNumberDiv.textContent = "Odd Numbers: "
    evenNumberDiv.textContent = "Even Numbers: "

    // looping dari 1 sampai limit
    for(let i = 1; i <= limit; i++){
        if (i % 2 == 0){
            evenNumberDiv.textContent += i + "";
        }else{
         oddnNumberDiv.textContent += i + "";
        }
    }
})