var app = new Vue(
    {
        el: '#root',
        data: {
            activeImage: 0,
            linksImages: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ]
        },
        methods: {
            nextImage() {
                const nextImageIndex = this.activeImage + 1;

                if ( nextImageIndex > this.linksImages.length - 1 ) {
                    this.activeImage = 0;
                } else {
                    this.activeImage = nextImageIndex;
                }
            },
            prevImage() {
                const prevImageIndex = this.activeImage - 1;

                if ( prevImageIndex < 0) {
                    this.activeImage = this.linksImages.length - 1;
                } else {
                    this.activeImage = prevImageIndex;
                }
            }
        },
        created() {
           setInterval( () => {
            this.nextImage();
           }  
            ,3000); 
        }
    }
);