
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    navigator.mediaDevices.getUserMedia({audio:true, video:true})
    .then((stream)=>{
        console.log(stream);
    
        let video = document.getElementById('video');
        video.srcObject = stream;
        video.onloadedmetadata = (eve)=> video.play();
    })
    .catch((err)=>{
        console.log(err)
    });
});


