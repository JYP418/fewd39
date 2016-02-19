// Add mapbox map
mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bHNjaG9pIiwiYSI6ImNpanltYTR5YzIwamZ2d201eTF6dXd2NGIifQ.VhnYA-RLHhYhw9Fht-HLwA';

var map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/paulschoi/cijymanoy00hvqtkqsngv391z", //stylesheet location
    center: [-118.451784, 34.035947], // starting position
    zoom: 11.66,
    // maxZoom: 11.66, // starting zoom
    // minZoom: 1,
    doubleClickZoom: false,
    dragRotate: false,
    scrollZoom: false,
    dragPan: false
});

// Add scroll layers with coordinates
var chapters = {
    'mapOne': {
        center: [-118.451784, 34.035947],
        zoom: 11.66
    },
    'mapTwo': {
        center: [-118.446109, 34.030591],
        zoom: 10
    },
    'mapThree': {
        center: [-117.985865, 34.022403],
        zoom: 8
    },
    'mapFour': {
        center: [-117.633055, 33.963120],
        zoom: 7
    },
    'mapFive': {
        center: [-117.086892, 33.878613],
        zoom: 6
    },
    'mapSix': {
        center: [-115.916104, 33.716682],
        zoom: 5
    },
    'mapSeven': {
        center: [-110.987492, 33.668163],
        zoom: 4
    },
    'mapEight': {
        center: [-86.099013, 25.170799],
        zoom: 1.5
    }
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'mapOne';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}


// Change opacity of the map
$("#map").css({ opacity: 0.9 });

// Fade in Header and Nav after Map loads
map.on("load", function() {
    $("#header").fadeIn(8000);
    $(".navbar").fadeIn(15000);
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});

