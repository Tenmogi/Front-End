console.log("script changér !");
const tableauLettres= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const heading = document.createElement("h1");
heading.innerText="HANGMAN GAME";
const header = document.createElement("p");
header.innerText="Choose a letter"
const divcontainer1 = document.createElement("div");
divcontainer1.id="id_alphabet";
const divcontainer2 = document.createElement("div");
divcontainer2.id="id_score";
const divcontainer3 = document.createElement("div");
divcontainer3.id="id_textenter";
document.body.appendChild(heading);
divcontainer1.appendChild(header);
document.body.appendChild(divcontainer1);
document.body.appendChild(divcontainer2);
document.body.appendChild(divcontainer3);
const lesmots = ["ELIMATE"];
let motSelectionne = lesmots[0];
const myArray = motSelectionne.split("");
// Boucle de création des boutons
for (let index = 0; index < tableauLettres.length; index++) {
    const buttonLettre = document.createElement("button");
    buttonLettre.id="button" + tableauLettres[index];
    buttonLettre.classList.add("boutonLettres");
    buttonLettre.innerText = tableauLettres[index];
    divcontainer1.appendChild(buttonLettre);
}

//Create a Essai 8 fois
const Paragraph = document.createElement("p");
const Unspan = document.createElement("span");
Unspan.id="id_span";
Unspan.innerText="7";
Paragraph.innerText="Remaning";
divcontainer2.appendChild(Unspan);
divcontainer2.appendChild(Paragraph);

//create a text to enter

for (let index1 = 1; index1 <= 7; index1++){
    const Unspan2 = document.createElement("span");
    Unspan2.classList.add("span-tiret");
    Unspan2.innerHTML = "-";
    divcontainer3.appendChild(Unspan2);

}

//click the button 

document.querySelectorAll(".boutonLettres").forEach(element => {
    element.addEventListener("click", (eventDetail) => {
        let lettreTrouvee = false;
        eventDetail.target.disabled = "true";
        let arrayTiret = document.querySelectorAll(".span-tiret");
        for (let index = 0; index < myArray.length; index++) {
           if (eventDetail.target.textContent == myArray[index]) {
                lettreTrouvee = true;
                let gagne = true;
                arrayTiret[index].textContent = eventDetail.target.textContent;
                arrayTiret[index].textContent = myArray[index];
                arrayTiret.forEach(span => {
                    if (span.innerText == "-") {
                        gagne = false;
                    }
                });
                if (gagne == true) {
                    const winner = document.createElement("p");
                    winner.innerText = "You have found the letter and won: ";
                    divcontainer3.appendChild(winner);
                    divcontainer1.style.visibility= "hidden";
                }
               
           }
       }
       if (lettreTrouvee == false) {
            Unspan.innerText = (Unspan.innerText)-1; 
            if (Unspan.innerText == 0) {
                const result = document.createElement("p");
                result.innerText = "Vous avez perdu. Le mot mystère était : "+ lesmots[0];
                divcontainer3.appendChild(result);
                divcontainer1.style.visibility = "hidden";
               }
       }
           
    })
    

})




 



