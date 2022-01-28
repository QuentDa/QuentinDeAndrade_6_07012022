class Image {
    constructor(imgData){
        this.mediaImage = imgData.image;
        this.id = imgData.id;
        this.title=  imgData.title;
        this.likes= imgData.likes;
        this.date = imgData.date;
        this.price=  imgData.price;
    }

    getCardDom() {
        let elementLi = document.createElement('li');
        let cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')

        const photographPicture = document.createElement( 'img' );
        photographPicture.setAttribute('src', 'assets/photographers/'+this.mediaImage);

        const pictureTitle = document.createElement('h2');
        pictureTitle.innerHTML = this.title;

        const pictureLikes = document.createElement('span')
        pictureLikes.id = 'likes'
        pictureLikes.innerHTML = this.likes + '<i class="fas fa-heart"></i>'


        //fonction pour ajouter un like + refresh ce qu'on affiche
        pictureLikes.addEventListener('click', () => {
            this.likes++
            pictureLikes.innerHTML = this.likes + '<i class="fas fa-heart"></i>'
        })

        elementLi.appendChild(photographPicture)

        elementLi.appendChild(cardWrapper)
        cardWrapper.appendChild(pictureTitle)
        cardWrapper.appendChild(pictureLikes)
       

        return elementLi; 
    }
}