console.log("Digite os graus Celsius e será convertido:")


const convertToFahrenheit = function()
{  
    temperature = document.getElementById("test").value
    let ConvertedTemperature 
    ConvertedTemperature = (temperature * 9/5) + 32
    return document.getElementById("result").innerHTML = ConvertedTemperature
}

const convertToCelcius = function()
{  
    temperature = document.getElementById("test").value
    let ConvertedTemperature 
    ConvertedTemperature = (temperature - 32)  * 5/9
    return document.getElementById("result").innerHTML = ConvertedTemperature
}

document.getElementById("toFahrenheit").addEventListener("click",convertToFahrenheit)
document.getElementById("toCelsius").addEventListener("click",convertToCelcius)

function pozeOrNot(poze)
{
    this.innerHTML = document.getElementById("poze").innerHTML = `<img src="/download.png" alt="Poze">`
    if(poze){
        this.innerHTML = document.getElementById("poze").innerHTML = `<img src="/poze.jfif" alt="Poze">`
    }     
}

