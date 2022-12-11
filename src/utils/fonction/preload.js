// Fonction qui permet de precharger les images dans le cache
//arg1: tableau contenent les images à chargées

//Import des feuilles de style
import "../../style/CSS/imagecarrousel.css";
 

async  function preLoad(arrayOfPictures) {

    //Variables de fonctionnement
    let preLoadedPictures = [];
    let errorMsg = "erreur de chargement, image non disponible";

    

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
   

}

export {preLoad}