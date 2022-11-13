// function qui permet de precharger les images dans le cache 
//arg1: tableau contenent les images à chargèes)
 

 function preLoad(arrayOfPictures) {

    
    const preLoadedPictures = [];
    
    arrayOfPictures.forEach((imageSrc) => {
    let objectImage = new Image();
    objectImage.src = imageSrc;
    preLoadedPictures.push(imageSrc);

    });
    

    
    return (preLoadedPictures)
}

export {preLoad}