// 1. On sélectionne l'élément avec l'ID "changeColor" et on lui ajoute un écouteur d'événement pour le clic
document.getElementById("changeColor").addEventListener("click", function() {
  
  // 2. On sélectionne l'élément avec la classe "right_Side" (notez le S majuscule)
  const rightSide = document.querySelector('.right_Side');
  const leftside = document.querySelector('.left_Side')
  
  // 3. On récupère la couleur de fond actuelle de l'élément
  const currentColor = window.getComputedStyle(rightSide).backgroundColor;
  //const currentColorLeft = window.getComputedStyle(rightSide).backgroundColor;

  // 4. On vérifie si la couleur actuelle est gris (soit en RGB soit en hexadécimal)
  if (currentColor === "rgb(197, 201, 197)" || currentColor === "rgb(197, 201, 197)") {
    // 5. Si c'est gris, on remet la couleur par défaut (vide)
    rightSide.style.backgroundColor = "";
    leftside.style.backgroundColor = "";
  } else {
    // 6. Sinon, on met la couleur gris et orange
    rightSide.style.backgroundColor = "rgb(197, 201, 197)";
    leftside.style.backgroundColor = "rgb(245, 143, 60)";
  }
  
});


// 1. Déclaration de la fonction qui sera appelée pour générer le PDF
function downloadPDF() {
  // 2. Sélection de l'élément HTML (probablement votre CV) à convertir en PDF
  var element = document.getElementById('cv');
  
  // 3. Masquage d'un élément (peut-être un bouton ou autre) pendant la génération
  document.getElementById('hide').style.display = 'none';

  // 4. Configuration des options pour la génération du PDF
  var opt = {
    margin: 0,                   // Pas de marges
    filename: 'my_cv.pdf',       // Nom du fichier PDF généré
    image: {                     // Options pour les images
      type: 'png',               // Format PNG
      quality: 1                 // Qualité maximale (1 = 100%)
    },
    html2canvas: {               // Options pour html2canvas (capture d'écran)
      scale: 2,                  // Échelle x2 pour meilleure qualité
      scrollX: 285,              // Décalage horizontal
      scrollY: 70,               // Décalage vertical
      windowWidth: element.scrollWidth,  // Largeur de la fenêtre = largeur du CV
      windowHeight: element.scrollHeight, // Hauteur de la fenêtre = hauteur du CV
      useCORS: true              // Autorise les images externes (cross-origin)
    },
    jsPDF: {                     // Options pour jsPDF (génération PDF)
      unit: 'mm',                // Unité en millimètres
      format: 'a4',              // Format A4
      orientation: 'portrait'    // Orientation portrait
    }
  };

  // 5. Utilisation de la bibliothèque html2pdf pour générer et télécharger le PDF
  // Nouvelle syntaxe basée sur les Promises
  html2pdf().set(opt).from(element).save();
}


// addEventListener est un ecouteur Elle surveille un événement spécifique
// permet de sélectionner un élément HTML dans la page en utilisant son attribut id.
  