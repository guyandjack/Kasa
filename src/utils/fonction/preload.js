// Fonction qui permet de precharger les images dans le cache
//arg1: tableau contenent les images à chargées

//Import des composants
import {ImageCarrousel} from "../../components/imagecarrousel/imagecarrousel.jsx"
 

async  function preLoad(arrayOfPictures) {

    //Variables de fonctionnement
    let preLoadedPictures = [];
    let errorMsg = "erreur de chargement, image non disponible";

    //Fonctions secondaire à séquencer
   /* async function getSrc(srcImg) {

       let image = new Image(); 
        image.src = srcImg;
        console.log(image.width)
        return image
    }*/

    /*async function checkImage(img) {
         
        let test;
         
        if (typeof img !== "string") {
             
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
        return false
    }*/

    function createComponent(urlImg) {
         
         return new Promise((resolve, reject) => {
            
             let imageSlider = (
               <img
                 class="image-carrousel"
                 src={urlImg}
                 alt="contenu du carroussel"
               />
             );
             imageSlider.onload = resolve(imageSlider);
             imageSlider.onerror = reject(errorMsg);
             console.log(imageSlider)
            console.log("essai chargement")
            
        })
        
       
    }

    
    //Fonction principale
    async function loadAllPicture() {

        arrayOfPictures.forEach((url) => {
          
           
           preLoadedPictures.push(createComponent(url)); 
                       
                     
        });

       return  Promise.all(preLoadedPictures)
            

    }

    return loadAllPicture();
    
    
    

    


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