(function(module) {
    "use strict";
    var Card = {};
    Card.parse = function(data, callback) {
        var re = /\[card:(.*?)(\b|\|(.*?)\*(.*)?)\]/gm;

        if (data.postData.content.match(re)) {
            var card = '<div class="github-card" data-github="$1" data-width="$3" data-height="$4"></div><script src="/plugins/nodebb-plugin-github-card/static/widget.js"></script>'
            data.postData.content = data.postData.content.replace(re, card);
        }

        callback(null, data);
    };

    module.exports = Card;
}(module));
