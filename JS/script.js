(function(doc) {
    'use strict';

    var img = doc.querySelectorAll('.image');
    var change = doc.querySelector('.starbucks');
    img.addEventListener('click', changeImg, false);

    function changeImg() {
        change.src = img.src;
    }
})(document);