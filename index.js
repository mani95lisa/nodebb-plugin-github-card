(function(module) {
    "use strict";
    var Card = {};
    Card.parse = function(postContent, callback) {
        var re = /\[card.*?\]/gm;
        var arr = postContent.match(re);
        if(arr && arr.length == 1){
            var config = arr[0];
            config = config.replace(']', '');            
            arr = config.split(':');
            if(arr.length == 2){
                arr = arr[1].split('|');
                var cardInfo = arr[0];
                var width = 400;
                var height = 150;
                if(arr.length == 2){
                    arr = arr[1].split('*');
                    if(arr.length == 2){
                        width = arr[0];
                        height = arr[1];
                    }                    
                }
                var card = '<div class="github-card" data-github="'+cardInfo+'" data-width="'+width+'" data-height="'+height+'"></div><script src="/plugins/nodebb-plugin-github-card/static/widget.js"></script>'
                postContent = postContent.replace(re, card);
            }            
        }
        callback(null, postContent);
    };

    module.exports = Card;
}(module));