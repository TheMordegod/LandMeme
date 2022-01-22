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


let myarray = [
    {
        id: 0,
        nome: "clone 13312331"
    },
    {
        id: 0,
        nome: "clone 2534456"
    },
    {
        id: 0,
        nome: "clone 13425425353"
    },
    {
        id: 0,
        nome: "clone 76755678854"
    },
    {
        id: 0,
        nome: "clone 52342353455"
    },
    {
        id: 0,
        nome: "clone 658757463"
    },
]


myarray.forEach(function(myarray, tempid)
{
    myarray.id = myarray.id + tempid;
    console.log(myarray)
})

console.log("carai borracha mano " + myarray[2].id + " "  + myarray[2].nome)

function pozeOrNot(poze)
{
    this.innerHTML = document.getElementById("poze").innerHTML = `<img src="/download.png" alt="Poze">`
    if(poze){
        this.innerHTML = document.getElementById("poze").innerHTML = `<img src="/poze.jfif" alt="Poze">`
    }     
}

function duplicateEncode(word)
{
    let charArray = word.toLowerCase().split("")
    let duplicates = []
    let result = []

    charArray.some((item) => {charArray.indexOf(item) != charArray.lastIndexOf(item) ? duplicates.push(item) : null}) // get duplicates
    charArray.filter((value) => {duplicates.includes(value) ? result.push(")") : result.push("(")}) // compare both arrays

    return result.join("")
}

