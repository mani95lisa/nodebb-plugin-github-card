(function(module) {
    "use strict";
    var Card = {};
    Card.parse = function(data, callback) {
        var re = /\[card:(.*?)(\b|\|(.*?)\*(.*)?)\]/gm;
        var postContent = data.postData.content;

        if (postContent.match(re)) {
            var card = '<div class="github-card" data-github="$1" data-width="$3" data-height="$4"></div><script src="/plugins/nodebb-plugin-github-card/static/widget.js"></script>'
            postContent = postContent.replace(re, card);
            data.postData.content = postContent;
        }

        callback(null, data);
    };

    module.exports = Card;
}(module));