<template>
    <div id="MenuOverlay">
        <button id="HideOverlay">Hide</button>

        <button id="ZoomOutButton"> - </button>
        <button id="CentrifyButton"> Go to the center </button>
        <button id="ZoomInButton"> + </button>

        <div id="helper">
            This site is designed to help you start learning Java Script!<br>
            Just press C to go to the center of this map <br>
            Press E and Q to zoom in and out <br>
            Start coding and HAVE FUN!
        </div>
    </div>
</template>

<script>
import { centrify, minify, maxify } from '../assets/camera';

export default {
}

let hidden = false;

const maxWidth = '500px';
const maxHeight = '300px';

if (process.browser) {
    $(document).ready( function() {
        $('#MenuOverlay').css('width', '500px')
        $('#MenuOverlay').css('height','300px')
        $('#MenuOverlay').css('visibility','visible')

        $('#CentrifyButton').on('click', function() {
            centrify(0)
        })
        
        $('#ZoomOutButton').on('click', function() {
            minify()
        })

        $('#ZoomInButton').on('click', function() {
            maxify()
        })

        $('#HideOverlay').on('click', function() {
            hidden = !hidden;

            if (hidden) {
                $('#MenuOverlay').css('width', '80px')
                $('#MenuOverlay').css('height','55px')
            } else {
                $('#MenuOverlay').css('width', '500px')
                $('#MenuOverlay').css('height','300px')
            }

            $('#CentrifyButton').toggle()
            $('#helper').toggle()
        })
    })
}

</script>

<style scoped>

* {
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

#MenuOverlay {
    visibility: hidden;
    left: 0;
    top: 0;
    position: fixed;
    background: #7d3591;
    border: solid 12px purple;
    border-radius: 24px;
}

button:focus {
    outline: none;
}

button {
    position: absolute;
    top: 10%;
    overflow: hidden;
    border-radius: inherit;
}

#HideOverlay {
    left: 5%;
    top: 5%;
}

#ZoomOutButton {
    left: 10%;
    width: 10%;
    visibility: hidden;
}
#ZoomInButton {
    left: 80%;
    width: 10%;
    visibility: hidden;
}
#CentrifyButton {
    left: 25%;
    width: 50%;
}

#helper {
    position: absolute;
    background-color: rgb(233, 147, 236);
    top: 30%;
    left: 10%;
    width: 80%;
    height: 65%;
    border: solid purple 4px;
    padding: 5%;
    display: block;

    font-family: 'Allstar';
    font-size: 18px;
}
</style>
