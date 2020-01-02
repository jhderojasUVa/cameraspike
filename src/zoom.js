// Canvas zoom

// For canvas transformations we use some little matrix algebra
// The most important is to know that you begin from an identity matrix
// and after that what you are doing is multiply it with other transformation matix (basic algebra)

// Base
canvas = document.querySelector('#somecanvas');
context = canvas.getContext('2d');

// Image
image = new Image();
//image.src = 'https://placekitten.com/g/640/480'; // Always take from https://placekitten.com/
image.src = 'assets/cat640x480.jpg';
//image.crossOrigin = 'Anonymous';
//image.crossOrigin = '*';

// Image load is async
image.onload = () => {
    context.drawImage(image,0, 0);
}


function zoomIn() {
    // Clear
    clearCanvas();
    // Apply the transform matrix
    context.scale(1.3, 1.3);
    // Draw
    context.drawImage(image,0, 0);
}

function zoomOut() {
    // Clear
    clearCanvas();
    // Apply the transform matrix
    context.scale(0.7, 0.7);
    // Drraw
    context.drawImage(image,0, 0);
}

function resetZoom() {
    // Clear what is before
    clearCanvas();
    // Load the identity matrix of transformations
    identityMatrix();
    // Draw
    context.drawImage(image,0, 0);
}

function clearCanvas() {
    // Clear the cambas by drawing a clear rect
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function identityMatrix() {
    // We set directly the transform matrix to the identity one
    context.setTransform(1, 0, 0, 1, 0, 0);
}

function extract() {
    // Select the place
    extractPlace = document.querySelector('#imgExtracted');

    // Puting the data
    extractPlace.src = canvas.toDataURL('image/jpg');

    // Show it
    extractPlace.style.display = 'block';
}
