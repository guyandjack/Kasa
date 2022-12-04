// Fonction qui permet de precharger les images dans le cache
//arg1: tableau contenent les images à chargées

//Import des composants
import {ImageCarrousel} from "../../components/imagecarrousel/imagecarrousel.jsx"
 

function preLoad(arrayOfPictures) {

    //Variables de fonctionnement
    let preLoadedPictures = [];
    let errorMsg = "erreur de chargement, image non disponible";

    //Fonctions secondaire à sequencer
    async function getSrc(srcImg) {
       let image = new Image(); 
        image.src = srcImg; 
        
       return image
    }

     function checkImage(img) {
        let test;
        if (img.width !== 0) {
            console.log("taile de l' image avec reponse true : " + img.width);
            test = true

        }
        else {
            console.log("taile de l' image avec reponse false : " + img.width);
            test = false;
        }

        return test
    }

     function pushComponent(boolean, urlImg) {
        if (boolean === true) {
            preLoadedPictures.push(<ImageCarrousel key={urlImg} imgSrc={urlImg} imgAlt="contenu du carrousel" />)
        }
        else {
            preLoadedPictures.push(<ImageCarrousel key={urlImg} imgSrc={urlImg} imgAlt={errorMsg} />)
        }
    }

    
    //Fonction principale
    async function loadAllPicture() {

        arrayOfPictures.forEach((url) => {
            
            let picture = getSrc(url);
            

            picture
                
                .then((result) => {
                    let test = checkImage(result)
                    console.log(test)
                    return test
                })
                .then((boolean) => {
                    console.log(boolean)
                    pushComponent(boolean, url);
                })
                .catch((e) => { console.log(errorMsg + e) });
        
            
        });
    }

    loadAllPicture();
    console.log(preLoadedPictures)

    return preLoadedPictures



    


    /*let preLoadedPictures = [];

    let errorMsg = "erreur de chargement images non disponible";

    const promesse = arrayOfPictures.map((url) => {

        return new Promise((resolve, reject) => {

            let image = new Image();
            image.src = url;
            if (image.width === 0) {
                reject(errorMsg)
            }
            preLoadedPictures.push(<ImageCarrousel key={url} imgSrc={url} imgAlt="contenu du carrousel" />)
            
            
            image.onload = resolve("image chargée")
            image.onerror = reject(errorMsg);
        
        })
    });

    if (Promise.all(promesse)) {
        return preLoadedPictures
    }

    else {
        return errorMsg
    }*/
    

}

export {preLoad}