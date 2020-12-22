// HEADER - DATE
        var jour = 0;
        var mois = 0;
        var annee = 2017;

        for (var i = 1; i <= 31; i++) {
            var monOption = document.createElement('option');
            monOption.text = jour + i;
            monOption.value = jour + i;
     
            document.getElementById('jour').options[i] = monOption;

            var jour1 = new Date();
            var day = jour1.getDate();
            document.getElementById("jour").value = day;

        }
        for (var i = 1; i <= 12; i++) {
            var monOption = document.createElement('option');
            monOption.text = mois + i;
            monOption.value = mois + i;
     
            document.getElementById('mois').options[i] = monOption;

            var mois1 = new Date();
            var month = mois1.getMonth() + 1; 
            document.getElementById("mois").value = month;

        }
        for (var i = 1; i <= 3; i++) {
            var monOption = document.createElement('option');
            monOption.text = annee + i;
            monOption.value = annee + i;
     
            document.getElementById('annee').options[i] = monOption;
            
            var annee1 = new Date();
            var year = annee1.getFullYear();
            document.getElementById("annee").value = year;
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


    
// Bouton Imprimer

function myFunction() {
    window.print();
}

