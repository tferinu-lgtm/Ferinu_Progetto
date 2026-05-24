function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


const params = new URLSearchParams(window.location.search);
const nome = params.get("nome") || "utente";
const personaggio = params.get("personaggio");


const messaggi = {
    "Joel Miller": "Hai scelto Joel! Coraggio e determinazione ti guideranno!",
    "Ellie Williams": "Ellie è la tua scelta! Avventura e astuzia al massimo!",
    "Tess Servopoulos": "Tess è audace e forte, proprio come te!",
    "Tommy Miller": "Tommy porta lealtà e protezione. Ottima scelta!",
    "Bill": "Bill è pragmatico e preparato. Bene!",
    "Marlene": "Marlene guida con saggezza e determinazione!"
};

const messaggioPersonaggio = messaggi[personaggio] || "Hai scelto un personaggio interessante!";


const messaggioDiv = document.getElementById("messaggio");
messaggioDiv.innerHTML = `
    <h2>Grazie per esserti iscritto, ${nome}!</h2>
    <p>${messaggioPersonaggio}</p>
`;


const torna = document.createElement("button");
torna.textContent = "Torna alla pagina principale";
torna.onclick = () => window.location.href = "index.html";


messaggioDiv.appendChild(torna);
