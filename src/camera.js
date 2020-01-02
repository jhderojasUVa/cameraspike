// Javascript file

async function getDevices() {
    // Show the devices on the hardware
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((element) => {
        document.querySelector('.devices').innerHTML = document.querySelector('.devices').innerHTML + '<br/>' + element.deviceId + ' <strong>(' + element.kind + ')</strong>';
    });
}

// Let's move here the canvas and the context
canvas = document.querySelector('canvas');
context = canvas.getContext('2d');

async function letCameraStart() {
    // Camera (because we choose video as a media)
    const stream = await navigator.mediaDevices.getUserMedia({video: true})
    // To handle the stream of data
    handleStream(stream);
}

function takeAPicture() {
    new Audio('assets/camera-shutter.mp3').play();

    context.drawImage(video, 0, 0, 640, 480);
}

const handleStream = (stream) => {
    // Take the video
    video = document.querySelector('video');
    // Put the video as the src of the video tag
    video.srcObject = stream;

    // Watermark
    watermark = new Image(640, 480);

    // On load needed because it's something async from browser
    watermark.onload = function() {
        context.drawImage(watermark, 0, 0, 640, 480);
    }

    // Create a listener to handle "take a photo"
    video.onclick = () => {
        //alert('Camera Shutter SOUND!'); // If I had time and who knows I will put here a shutter mp3 audio file
        takeAPicture();
        // Load watermark by loading the image
        watermark.src = 'assets/watermark.png';
    }
}

letCameraStart();
getDevices();
