//Mettre le code JavaScript lié à la page photographer.html

//Récupérer ce qu'il y a dans l'url
const url = window.location.search;

//Objet de JS pour parser et split l'url
const urlparams = new URLSearchParams(url);

//récupérer précisemment l'id de l'url
const actualId = urlparams.get('id');
// console.log(urlparams.get('id'));

//variable globale pour récupérer les données photographes
let mediaPhotographes = [];


//creation fonction asynchrone pour récupérer les photographes et leur media en fonction de l'ID
async function getPhotographer() {
    //refait la fonction du index.js pour la modifier
    let data = await fetch('data/photographers.json');

    let photographes = await data.json();

    //création de variables vides pour y stocker les données photographes et media
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
    //on stock le return de la fonction ci dessus dans la variable dataPhotographe
    let dataPhotographe = await getPhotographer();

    //on reprend le chemin dans une variable, on utilise dataphotographe[0] car c'est un array suivi d'un . car on cible l'objet
    const picture = `assets/photographers/${dataPhotographe[0].portrait}`;

    //on récupère l'ID de l'html que l'on va écrire dynamiquement en JS
    document.getElementById('photograph-name').innerHTML = dataPhotographe[0].name
    document.getElementById('photograph-city').innerHTML = dataPhotographe[0].city + ' ' + dataPhotographe[0].country
    document.getElementById('picture').setAttribute('src', picture) //const ci dessus
    document.getElementById('picture').setAttribute('alt', dataPhotographe[0].name);
    document.getElementById('slogan').innerHTML = dataPhotographe[0].tagline
    document.getElementById('price').innerHTML = dataPhotographe[0].price + ' € / jour';
   
    let totalHeart = 0

    mediaPhotographes = dataPhotographe[1]
    dataPhotographe[1].forEach((mediaPhotographe) => {
        totalHeart += mediaPhotographe.likes
        let media = new MediaFactory(mediaPhotographe)
        document.getElementById('medias').appendChild(media.getCardDom())
    })
    document.getElementById('totalLikes').innerHTML = totalHeart
  
    

    Lightbox.medias = dataPhotographe[1]

}

const popularity = document.getElementById('popularity')
let orderPopularity = true;

function filterPopularity() {

    document.getElementById('medias').innerHTML = ''

    mediaPhotographes.sort((a, b) => {
        return orderPopularity ? b.likes - a.likes : a.likes - b.likes
    })
    orderPopularity = !orderPopularity

    mediaPhotographes.forEach(media => {
        let mediaDOM = new MediaFactory(media)
        let mediaLi = document.createElement('li')
        document.getElementById('medias').appendChild(mediaDOM.getCardDom())
    })
}
popularity.addEventListener('click', filterPopularity)


const date = document.getElementById('date')
let orderDate = true;

//AU PASSAGE LE 30 FEVRIER N'EXISTE PAS ET CA ME FAISAIT UNE ERREUR QUAND JE VOULAIS FILTRER PAR DATE :))))))
function filterDate() {


    document.getElementById('medias').innerHTML = ''

    mediaPhotographes.sort((a, b) => {
        return orderDate ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    })
    orderDate = !orderDate
    console.log(mediaPhotographes)
    mediaPhotographes.forEach(media => {
        let mediaDOM = new MediaFactory(media)
        let mediaLi = document.createElement('li')
        document.getElementById('medias').appendChild(mediaDOM.getCardDom())
    })
}
date.addEventListener('click', filterDate)

const title = document.getElementById('title')
let orderTitle = true;

function filterTitle() {
    console.log('je rentre dans le titre')

    document.getElementById('medias').innerHTML = ''

    mediaPhotographes.sort((a, b) => {
        return orderTitle ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title) //localeCompare compare alphabétiquement
    })
    orderTitle = !orderTitle

    mediaPhotographes.forEach(media => {
        let mediaDOM = new MediaFactory(media)
        let mediaLi = document.createElement('li')
        document.getElementById('medias').appendChild(mediaDOM.getCardDom())
    })
    
}
title.addEventListener('click', filterTitle)










init();
