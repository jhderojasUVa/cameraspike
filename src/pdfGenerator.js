// Javascript PDF

var doc = new jsPDF();

var images = document.querySelectorAll('.images');

doc.addImage(images[0], 'JPG', 10, 10, 50, 50);
doc.addImage(images[1], 'JPG', 70, 10, 50, 50);
doc.addImage(images[2], 'JPG', 130, 10, 50, 50);

doc.save('tmp.pdf');
