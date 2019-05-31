<template>
    <div id="SkillTree">
        <NodeComponent
            :key="video.id"
            v-for="video in steps"
            v-bind="video">
        </NodeComponent>
    </div>
</template>

<script>

import NodeComponent from './SkillTreeNode'
import { database } from '../assets/database'
import { centrify, minify, maxify } from '../assets/camera'

export default {
    name: 'SkillTree',
    components: {
        NodeComponent
    },
    data() {
        return {
            steps : database.data
        }
    }
}

// Client-side scripts
if (process.browser) {
    $(document).ready(function() {

        // Mouse object for moving the screen using mouse
	    const OMouse = {
            x: 0,
            y: 0,
            clicked: false
        }

        // Parameters of the video grid
        const param = {
            width: 800, // Node's width
            height: 600, // Node's height
            marginBottom: 100,
            margin: 200
        }

        $('#SkillTree').css('width', (database.props.width * (param.width + param.margin)) + "px")
        $('#SkillTree').css('height', (database.props.height * (param.width + param.marginBottom)) + "px")
        $('#SkillTree').css('grid-template-columns', database.props.grid.columns())
        $('#SkillTree').css('grid-template-rows', database.props.grid.rows())
        
        // Script for moving the screen using mouse buttons
        $(document).on({
            'mousemove': function(e) {
                OMouse.clicked && updateScrollPos(e);
            },
            'mousedown': function(e) {
                if (e.buttons != 1) return;
                OMouse.clicked = true;
                OMouse.x = e.pageX;
                OMouse.y = e.pageY;
            },
            'mouseup': function() {
                OMouse.clicked = false;
                $('html').css('cursor', 'auto');
            }
        });
        var updateScrollPos = function(e) {
            $('html').css('cursor', 'row-resize');
            $(window).scrollTop($(window).scrollTop() + (OMouse.y - e.pageY));
            $(window).scrollLeft($(window).scrollLeft() + (OMouse.x - e.pageX))
        }

        // Script for processing keyboard buttons
        $(document).keyup(function(e) {
            if (e.originalEvent.code == "KeyC") {
                centrify(0)
            }
            if (e.originalEvent.code == "KeyQ") {
                minify()
            }
            if (e.originalEvent.code == "KeyE") {
                maxify()
            }
        })
    })
}

</script>

<style scoped>
#SkillTree {
    position: absolute;
    left : 0;
    top : 0;
    display: grid;
    background: url('/web-skills-online/wallpaper.png');
}
</style>

