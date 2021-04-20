var app = new Vue(
    {
        el: '#root',
        data: {
            // Imposto l'indice dell'img di default
            activeImage: 0,
            // Creo array con i paths delle immagini
            linksImages: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ]
        },
        methods: {
            // Creo una funzione che mostri l'immagine sucessiva quando si fa click sulla freccia destra
            nextImage() {
                const nextImageIndex = this.activeImage + 1;

                if ( nextImageIndex > this.linksImages.length - 1 ) {
                    this.activeImage = 0;
                } else {
                    this.activeImage = nextImageIndex;
                }
            },

            // Creo una funzione che mostri l'immagine precedente quando si fa click sulla freccia sinistra
            prevImage() {
                const prevImageIndex = this.activeImage - 1;

                if ( prevImageIndex < 0) {
                    this.activeImage = this.linksImages.length - 1;
                } else {
                    this.activeImage = prevImageIndex;
                }
            }
        },

        // Creo una timing function che fa andare avanti lo slider ogni 3 secondi
        created() {
           setInterval( () => {
            this.nextImage();
           } ,3000); 
        }
    }
);