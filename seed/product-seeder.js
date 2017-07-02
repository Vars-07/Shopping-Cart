var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath:'https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F8a6af7a7-1381-47d8-a9b8-c070e14d69e5.jpg',
        title:'Emma Watson',
        description:'Emma Charlotte Duerre Watson is a British actress, model, and activist. Born in Paris and brought up in Oxfordshire, Watson attended the Dragon School and trained as an actress at the Oxford branch of Stagecoach Theatre Arts.',
        price:90
    }),
    new Product({
        imagePath:'http://theduran.com/wp-content/uploads/2017/01/kidman.jpg',
        title:'Nicole Kidman',
        description:'Nicole Mary Kidman, AC is an Australian actress and film producer. Kidman\'s breakthrough roles were in the 1989 feature film thriller Dead Calm and television thriller miniseries Bangkok Hilton.',
        price:70
    }),
    new Product({
        imagePath:'http://articles.padmad.org/wp-content/uploads/2017/03/2-15.jpg',
        title:'Gal Gadot',
        description:'Gal Gadot-Varsano is an Israeli actress and model. Gadot is primarily known for her role as Wonder Woman in the DC Extended Universe, starting with Batman v Superman: Dawn of Justice, continuing as the lead in Wonder Woman.',
        price:100
    }),
    new Product({
        imagePath:'http://www.hdwallpaper.nu/wp-content/uploads/2015/01/Best-Photo-Emilia-Clarke-Image-06.jpg',
        title:'Emilia Clarke',
        description:'Emilia Isabelle Euphemia Rose Clarke is an English actress. Born in London and brought up in Berkshire, Clarke first gained an interest in acting as a child after seeing the musical Show Boat, on which her father was working as a sound engineer.',
        price:120
    }),
    new Product({
        imagePath:'http://static1.businessinsider.com/image/555dff8fecad04a527460cee-480/emma-stone.jpg',
        title:'Emma Stone',
        description:'Emily Jean "Emma" Stone is an American actress. One of the world\'s highest-paid actresses in 2015, Stone has received numerous accolades, including an Academy Award, a BAFTA Award, a Golden Globe Award and three Screen Actors Guild Awards.',
        price:80
    }),
    new Product({
        imagePath:'https://snapperbazaar.com/wp-content/uploads/2016/06/Priyanka-Chopra-Hot-Photos-01.jpg',
        title:'Priyanka Chopra',
        description:'Priyanka Chopra is an Indian actress, singer, film producer, philanthropist, and the winner of the Miss World 2000 pageant.',
        price:120
    }),
];

var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
}