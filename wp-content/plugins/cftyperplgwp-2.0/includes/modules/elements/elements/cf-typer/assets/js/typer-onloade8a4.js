UIkit.util.ready(function() {

    var elements = document.getElementsByClassName('cf-typed');

    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var typedStrings = el.getElementsByClassName('typed-strings')[0];
        var typedContainer = el.getElementsByClassName('typed-container')[0];
        console.log(typedStrings.getAttribute('smart-backspace') == 'true');

        var typed = new Typed(typedContainer, {
            stringsElement: typedStrings,
            typeSpeed: parseInt(typedStrings.getAttribute('type-speed')),
            startDelay: parseInt(typedStrings.getAttribute('start-delay')),
            backSpeed: parseInt(typedStrings.getAttribute('back-speed')),
            smartBackspace: typedStrings.getAttribute('smart-backspace') == 'true',
            shuffle: typedStrings.getAttribute('shuffle') == 'true',
            backDelay: parseInt(typedStrings.getAttribute('back-delay')),
            fadeOut: typedStrings.getAttribute('fade-out') == 'true',
            fadeOutDelay: parseInt(typedStrings.getAttribute('fade-out-delay')),
            loop: typedStrings.getAttribute('loop') == 'true',
            loopCount: parseInt(typedStrings.getAttribute('loop-count')),
            showCursor: typedStrings.getAttribute('show-cursor') == 'true',
            cursorChar: typedStrings.getAttribute('cursor-char')
        });
    }
});
console.log('Typer Js running');