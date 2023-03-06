window.addEventListener('load', () => {

    const container = document.querySelector('#container');
    // const panorama = new PANOLENS.ImagePanorama('https://i.imgur.com/wTCPouq.jpg');
    const panorama = new PANOLENS.ImagePanorama('./img/panoramas-sample.jpeg'); 

    const viewer = new PANOLENS.Viewer({container: container});
    viewer.add(panorama);

})