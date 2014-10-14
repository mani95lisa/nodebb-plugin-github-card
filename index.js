(function(module) {
    "use strict";
    var Card = {};
    Card.parse = function(postContent, callback) {
        var re = /\[card:(.*?)(\b|\|(.*?)\*(.*)?)\]/gm;

        if (postContent.match(re)) {
            var card = '<div class="github-card" data-github="$1" data-width="$3" data-height="$4"></div><script src="/plugins/nodebb-plugin-github-card/static/widget.js"></script>'
            postContent = postContent.replace(re, card);
        }

        callback(null, postContent);
    };

    module.exports = Card;
}(module));