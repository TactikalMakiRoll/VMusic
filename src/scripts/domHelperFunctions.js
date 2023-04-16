// this function will create a gradient background via tailwind classes for albums from spotify that do not have their image
function createAlbumBackground(albumImage) {
    if(albumImage){
        return {
        'background-image': `url(${albumImage})`,
        'background-size': "cover",
        'background-repeat': "no-repeat"
        };
    }
    // define possible gradient directions
    let gradientDirections = [
        'to top',
        'to top right',
        'to right',
        'to bottom right',
        'to bottom',
        'to bottom left',
        'to left',
        'to top left'
    ];

    // prepare color variables
    let hexValues = '0123456789abcdef';
    let fromColor = '#';
    let viaColor = '#';
    let toColor = '#';

    // randomly generate color using hexValues string with possible hex symbols
    for (let i = 0; i < 6; i++) {
        fromColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
        viaColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
        toColor += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    }

    // return the object to be used in styling album cover -> using tailwind values
    return {
        '--tw-gradient-from': fromColor,
        '--tw-gradient-via': viaColor,
        '--tw-gradient-to': toColor,
        '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)',
        'background-image':
        'linear-gradient(' +
        gradientDirections[Math.floor(Math.random() * 7)] +
        ', var(--tw-gradient-stops))'
    };
}
  
// Smooth horizontal scrolling
function horizontalScroll(e, speed = 500) {
    e.preventDefault();
    if (e.deltaY > 0) {
        e.currentTarget.scrollBy({ left: +speed, behaviour: 'smooth' });
    } else {
        e.currentTarget.scrollBy({ left: -speed, behaviour: 'smooth' });
    }
}
  
// this function changes the amount of fade on scrollable elements depending on their current scroll percentage
function changeFadeOnScroll(e, isVertical = true) {
    let scrolledAmount = isVertical ? e.currentTarget.scrollTop : e.currentTarget.scrollLeft;
    let elementSize = isVertical ? e.currentTarget.clientHeight : e.currentTarget.clientWidth;
    let fullSize = isVertical ? e.currentTarget.scrollHeight : e.currentTarget.scrollWidth;
    let gradientDegrees = isVertical ? 180 : 90;

    // calculate the percentage of element that will be faded out starting from 75 and based on how much percentage is already scrolled
    let fadePercentage =
        75 + Math.floor((((scrolledAmount * 100) / (fullSize - elementSize)) * 25) / 100);

    e.currentTarget.setAttribute(
        'style',
        `mask-image:linear-gradient(${gradientDegrees}deg,black 0%,black ${fadePercentage}%,transparent 100%)`
    );
}
  
// A helper to convert received MS from Spotify to Minutes shown on different screens
function convertMStoMinutes(ms){
    let seconds = Math.ceil(ms/1000);
    let minutes = Math.floor(seconds/60);
    seconds = seconds - minutes * 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

export {createAlbumBackground, horizontalScroll, changeFadeOnScroll, convertMStoMinutes};