//Mettre le code JavaScript lié à la page photographer.html

//Récupérer ce qu'il y a dans l'url
const url = window.location.search;

//Objet de JS pour parser et split l'url
const urlparams = new URLSearchParams(url);

//récupérer précisemment l'id de l'url
const actualId = urlparams.get('id');
// console.log(urlparams.get('id'));


//creation fonction asynchrone pour récupérer les photographes et leur media en fonction de l'ID
async function getPhotographer() {
    //refait la fonction du index.js pour la modifier
    let data = await fetch('data/photographers.json');

    let photographes = await data.json();

    //création de variables pour y stocker les données photographes et media
    let dataPhotographe = null;
    let mediaPhotographe = [];

    //parcourir tout les photographes et s'arrêter quand l'actual ID match l'id du photographe dans l'URL
    photographes.photographers.forEach((photographe) => {
        if (actualId == photographe.id){
            dataPhotographe = photographe;
        }
    })

    //même principe mais match l'id du photographe lié a ses médias
    photographes.media.forEach((media) => {
        if (actualId == media.photographerId){
            mediaPhotographe.push(media);
        }
    })

    //on ne peut pas return deux fois à la suite, je les stock dans un array
    return [dataPhotographe, mediaPhotographe];
}

async function init() {
    await getPhotographer();
}

init();
