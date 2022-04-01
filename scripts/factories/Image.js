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
        photographPicture.classList.add('photo')
        photographPicture.setAttribute('src', 'assets/photographers/'+this.mediaImage);
        photographPicture.setAttribute('alt', this.title)

        const pictureTitle = document.createElement('h2');
        pictureTitle.innerHTML = this.title;

        const pictureLikes = document.createElement('span')
        pictureLikes.id = 'likes'
        pictureLikes.innerHTML = this.likes + '<i class="fas fa-heart"></i>'


        //fonction pour ajouter un like + refresh ce qu'on affiche
        pictureLikes.addEventListener('click', () => {
            this.likes++
            pictureLikes.innerHTML = this.likes + '<i class="fas fa-heart"></i>'
            document.getElementById('totalLikes').innerHTML = parseInt(document.getElementById('totalLikes').innerHTML) + 1
        })

        elementLi.appendChild(photographPicture)
        elementLi.setAttribute('tabindex', 0)

        elementLi.appendChild(cardWrapper)
        cardWrapper.appendChild(pictureTitle)
        cardWrapper.appendChild(pictureLikes)



        photographPicture.addEventListener('click', () => {
          Lightbox.init(this.id)  
        })

        elementLi.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                Lightbox.init(this.id)
                
            }
        })
       

        return elementLi; 
    }


    //créer getLightboxDOM COMME GETCARDOM
    getLightboxDOM() {
        let createImg = document.createElement('img');
        createImg.classList.add('photoLightbox')
        createImg.setAttribute('src', 'assets/photographers/'+this.mediaImage);
        createImg.setAttribute('alt', this.title)
        
        return createImg
    }
}