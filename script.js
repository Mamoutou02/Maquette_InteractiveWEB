document.getElementById("changeColor").addEventListener("click", function() {
  const rightSide = document.querySelector('.right_Side'); // Notez le S majuscule
  const currentColor = window.getComputedStyle(rightSide).backgroundColor;
  
  if (currentColor === "rgb(76, 175, 80)" || currentColor === "#4CAF50") {
    rightSide.style.backgroundColor = "";
  } else {
    rightSide.style.backgroundColor = "#4CAF50";
  }
}); // Parenthèse corrigée


function downloadPDF() {
  var element = document.getElementById('cv');
document.getElementById('hide').style.display = 'none';

  var opt = {
    margin:       0,
    filename:     'my_cv.pdf',
    image:        { type: 'png', quality: 1 },
    html2canvas:  { 
      scale: 2,
      scrollX: 285,
      scrollY: 70,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      useCORS: true, //pour la securité concernant les liens externes
    },
    jsPDF:{ unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
}
  