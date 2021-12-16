/*Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.*/

const app = new Vue(
    {
        el: '#app',
        data: {
            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg'
            ],
            counter: 0
        },
        methods: {
            prev: function () {
                this.counter -= 1;
                if (this.counter < 0) {
                    this.counter = this.images.length - 1;
                }
                
            },
            next: function () {
                this.counter += 1;
                if (this.counter > this.images.length - 1) {
                    this.counter = 0;
                }
            }
        }
    }
)
