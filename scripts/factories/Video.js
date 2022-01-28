class Video {
    constructor(videoData){
        this.mediaVideo = videoData.video;
        this.id = videoData.id;
        this.title=  videoData.title;
        this.likes= videoData.likes;
        this.date = videoData.date;
        this.price=  videoData.price;
    }

    getCardDom() {
        let cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')
        let elementLi = document.createElement('li')
        const photographVideo = document.createElement( 'video' );
        photographVideo.setAttribute('controls', true);
        const photographVideoSource = document.createElement('source');
        photographVideoSource.setAttribute('src', 'assets/photographers/'+this.mediaVideo);
        photographVideoSource.setAttribute('type', 'video/mp4');

        const videoTitle = document.createElement('h2')
        videoTitle.innerHTML = this.title

        const videoLikes = document.createElement('span')
        videoLikes.innerHTML = this.likes + '<i class="fas fa-heart"></i>'

        
        //fonction pour ajouter un like + refresh ce qu'on affiche
        videoLikes.addEventListener('click', () => {
            this.likes++
            videoLikes.innerHTML = this.likes + '<i class="fas fa-heart"></i>'
        })

        elementLi.appendChild(photographVideo).appendChild(photographVideoSource)
        elementLi.appendChild(cardWrapper)
        cardWrapper.appendChild(videoTitle)
        cardWrapper.appendChild(videoLikes)

        return elementLi
    }
}