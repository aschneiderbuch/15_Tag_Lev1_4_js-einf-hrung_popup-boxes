window.alert("Hallo Welt")

window.prompt("Bitte geben Se Ihren Namen ein.")

window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel")  // Cancel steht jetzt im prompt InputFeld

window.confirm("Stimmen Sie meiner Meinung zu?")


let alter = prompt ("Gib mr bitte dein Alter: ")
console.log("Wert von prompt Abfrage: =  " + alter)      // gibt diese prompt Antwort zurück

let b = 5
console.log(b) // 5
let a = b * 5 -3 // 22
console.log(a)
alert(a)

let mann = "Robert Wadlow ist der größte Mann der Welt : "
let grosse = "2,72m"
console.log(mann + grosse)
alert( mann + grosse)

alert(location.hostname)
// Funktion

function myFunction(){
    alert("Heelo! I am an alert box. \n Du bist " + alter + " Jahre alt ;-)")
}
//* \n macht alert Mehrzeilig

let abfrageName = prompt ("Wie heißt du? ")
console.log(abfrageName)
let abfageAlter = prompt ("Hi " + abfrageName + " wie alt bist du?")
console.log(abfageAlter)
let geburtsJahr = 2022 - abfageAlter
console.log(geburtsJahr)
alert("Krass dann bis du ja " + geburtsJahr + " gebohren.")
console.log(alter)

let x = 2
console.log(x)

{
    let x = 3 
    console.log(x)
}
console.log(x)