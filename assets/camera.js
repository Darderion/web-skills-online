
let zoom = 1;

function centrify(nodeID) {
    //Scroll the page so that the Node with database's ID = nodeID is displayed
    let objID = "#WSO_ONode"+nodeID;
    let obj = {
        width : parseInt($(objID).css('width').slice(0,-2), 10),
        height : parseInt($(objID).css('height').slice(0,-2), 10),
        left : parseInt($(objID).css('left').slice(0,-2), 10),
        top : parseInt($(objID).css('top').slice(0,-2), 10)
    };
    console.log(obj);
    (window.scroll(
        obj.left, //- ($(window).width() - obj.width) / 2,
        obj.top //- ($(window).height() - obj.height) / 2,
        ));
}

function minify() {
    zoom = zoom * 0.5;
    document.body.style.zoom = zoom;
    if (zoom == 1) {
        $('#MenuOverlay').css('visibility', 'visible')
    } else {
        $('#MenuOverlay').css('visibility', 'hidden')
    }
}

function maxify() {
    zoom = zoom * 2;
    document.body.style.zoom = zoom;
    if (zoom == 1) {
        $('#MenuOverlay').css('visibility', 'visible')
    } else {
        $('#MenuOverlay').css('visibility', 'hidden')
    }
}

export { centrify, minify, maxify }