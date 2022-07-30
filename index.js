
var question = "Are you a male or a female?".trim();
var name_1= window.prompt("Type your name: ").trim();


var sex = window.prompt(question);



function sexProperty(){
    var text = document.getElementById("input");
    var birthdayer = document.getElementById("birthdaySpeech").innerHTML= text.value;
    while (true){
        if (sex == "male" || sex=="Male" || sex=="MALE"){
            document.getElementById("birthdaySpeech").innerHTML =" كل عام و انت بخير و كل سنة و انت طيب يا" + " " + birthdayer;
            break;
        }
        else if (sex == "female" || sex=="Female" || sex=="FEMALE"){
            document.getElementById("birthdaySpeech").innerHTML =" كل عام و انتي بخير و كل سنة و انتي طيبة يا" + " " + birthdayer;
            break;
        }
        else{
            sex = window.prompt("Please type if you are a male or a female...");
        }
    }

}
sexProperty();
while(true){
    if(sex=="male" || sex=="Male" || sex=="MALE"){
        document.getElementById("birthdaySpeech").innerHTML =" كل عام و انت بخير و كل سنة و انت طيب يا" + " " + name_1;
        break;
    }
    else if (sex == "female" || sex=="Female" || sex=="FEMALE"){
        document.getElementById("birthdaySpeech").innerHTML =" كل عام و انتي بخير و كل سنة و انتي طيبة يا" + " " + name_1;
        break;
    }
    else{
        window.prompt("Type if you are a male or a female...");
    }
}

function pressed(){
    sexProperty();


   
}









/*document.getElementById("btn").onclick = function(){
    var fetched = document.getElementById("entry").value;
    document.getElementById("label").innerHTML = fetched;
}
var input = window.prompt("Type a fruit:");
var fruits = ["apple", "orange", "pomegrenate", "grape"];

while(input != fruits[0]){
    input = window.prompt("Type a fruit:");
    if (input == fruits[1] || input == fruits[2] || input == fruits[3]){
        console.log("Chosen fruit is", input);
        break;
    }
}

var list =["hash", "apple", "omar", "mane", "pickled radish", "etoo"];
for(let i = 0; i < list.length; i++){
    if(list[i].toLowerCase()){
        k = list[i].toUpperCase();

    }
}
var nm = "hashem";

var m =nm.charAt(0).toUpperCase().slice(1);
console.log(m);


*/
