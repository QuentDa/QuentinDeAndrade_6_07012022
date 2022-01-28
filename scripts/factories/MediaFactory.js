class MediaFactory {
    constructor(media){
        if ('image' in media){
            return new Image(media)
        }
        else {
            return new Video(media)
        }
    }
}