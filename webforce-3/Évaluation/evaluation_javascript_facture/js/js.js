function myFunction() {
    window.print();
}

// HEADER - Formulaire

function copyContent(societe, societe2){
    var copied = document.getElementById(societe);
    var receiver = document.getElementById(societe2);
    receiver.value = copied.value;
}

function copyContent(nom, nom2){
    var copied = document.getElementById(nom);
    var receiver = document.getElementById(nom2);
    receiver.value = copied.value;
}

function copyContent(telephone, telephone2){
    var copied = document.getElementById(telephone);
    var receiver = document.getElementById(telephone2);
    receiver.value = copied.value;
}

function copyContent(email, email2){
    var copied = document.getElementById(email);
    var receiver = document.getElementById(email2);
    receiver.value = copied.value;
}

// TABLEAU - SOUS TOTAL




