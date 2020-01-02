// Javascript

const numberOfPhotos = 3;
const placeholderForCanvas = document.querySelectorAll('.snapshoots')[0];

async function letCameraStart() {
    // Camera (because we choose video as a media)
    const stream = await navigator.mediaDevices.getUserMedia({video: true})
    // To handle the stream of data
    handleStream(stream);
}

const handleStream = (stream) => {
    // Take the video
    video = document.querySelector('video');
    // Put the video as the src of the video tag
    video.srcObject = stream;

    // Create a listener to handle "take a photo"
    video.onclick = () => {
        // Remove all canvas (old photos), old stuff in the fastest way
        while (placeholderForCanvas.firstChild) {
            placeholderForCanvas.removeChild(placeholderForCanvas.firstChild);
        }

        for (let i = 0; i < numberOfPhotos; i++) {
            setTimeout(takeAPicture, 1200, i);
            //takeAPicture(i);
        }
    }
}

function takeAPicture(canvasId) {

    let newMiniCanvas = document.createElement('canvas');
    newMiniCanvas.setAttribute('id', 'canvas' + canvasId);
    placeholderForCanvas.append(newMiniCanvas);

    let canvas = document.getElementById('canvas' + canvasId);
    let context = canvas.getContext('2d');

    // Attributes
    canvas.style.margin = '10px';

    new Audio('assets/camera-shutter.mp3').play();

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

letCameraStart();
