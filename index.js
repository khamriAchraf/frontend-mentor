var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('I make ')
    .typeString('<em>Websites</em>')
    .pauseFor(1500)
    .deleteChars(8)
    .typeString('<em>Hybrid Mobile Applications</em>')
    .pauseFor(1500)
    .deleteChars(26)
    .typeString('<em>Python Games</em>')
    .pauseFor(1500)
    .deleteChars(12)
    .typeString('<em>Animations</em>')
    .pauseFor(1500)
    .deleteChars(10)
    .typeString('<em>User Interface Protototypes</em>')
    .pauseFor(1500)
    .deleteChars(27)
    .typeString('<em>Machine Learning Prediction Models</em>')
    .pauseFor(1500)
    .start();