class Lightbox {
    static index = null
    static medias = []
    static alreadyInit = false

    static init(index) {
        const lightboxModal = document.querySelector('.lightbox')
        lightboxModal.style.display = 'flex'

        const lightboxClose = document.querySelector('.closeLightbox')
        lightboxClose.addEventListener('click', () => {
            lightboxModal.style.display = 'none'
            document.querySelector('.photo-wrapper').innerHTML = ''
        })

        const i = Lightbox.medias.findIndex((media => {
            return media.id === index
        }))
        Lightbox.index = i

        let media = new MediaFactory(Lightbox.medias[i])
        document.querySelector('.photo-wrapper').appendChild(media.getLightboxDOM())

        const leftArrow = document.getElementById('left')
        const rightArrow = document.getElementById('right')

        //On vérifie que lightbox est déjà initialisé pour éviter le double gauche en modulo negatif.
        if (!Lightbox.alreadyInit) {
            rightArrow.addEventListener('click', () => {
                Lightbox.index = (++Lightbox.index) % Lightbox.medias.length
                document.querySelector('.photo-wrapper').innerHTML = ''
                let media = new MediaFactory(Lightbox.medias[Lightbox.index])
                document.querySelector('.photo-wrapper').appendChild(media.getLightboxDOM())
                
                console.log(Lightbox.index)
            })

            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') { //deprécié ?!!!
                    Lightbox.index = (++Lightbox.index) % Lightbox.medias.length
                    document.querySelector('.photo-wrapper').innerHTML = ''
                    let media = new MediaFactory(Lightbox.medias[Lightbox.index])
                    document.querySelector('.photo-wrapper').appendChild(media.getLightboxDOM())
                }
            })

            leftArrow.addEventListener('click', () => {
                //modulo negatif = mauvais. 
                Lightbox.index = (((--Lightbox.index) % Lightbox.medias.length) +Lightbox.medias.length) % Lightbox.medias.length
                //on vide et on réécrit
                document.querySelector('.photo-wrapper').innerHTML = ''
                let media = new MediaFactory(Lightbox.medias[Lightbox.index])
                document.querySelector('.photo-wrapper').appendChild(media.getLightboxDOM())

                console.log(Lightbox.index)
            })

            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') { //deprécié ?!!!
                    //modulo negatif = mauvais. 
                    Lightbox.index = (((--Lightbox.index) % Lightbox.medias.length) +Lightbox.medias.length) % Lightbox.medias.length
                    //on vide et on réécrit
                    document.querySelector('.photo-wrapper').innerHTML = ''
                    let media = new MediaFactory(Lightbox.medias[Lightbox.index])
                    document.querySelector('.photo-wrapper').appendChild(media.getLightboxDOM())
                }
            })

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    lightboxModal.style.display = 'none'
                    document.querySelector('.photo-wrapper').innerHTML = ''
                }
            })
        }
        
        Lightbox.alreadyInit = true
    }

}

