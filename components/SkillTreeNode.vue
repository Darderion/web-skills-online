<template>
    <div class="Node">
        <div class="post">
            <iframe class="video" frameborder="no"
                :src="url"></iframe>
            <div class="post-s">
                <div class="title"><h2>{{text.title}}</h2></div>
                <div class="prerequisites"><h3>{{text.prerequisite}}</h3></div>
            </div>
            <div class="description">
                {{text.description}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SkillTreeNode',
    props: ['id','url','text','pos','required'],
    mounted() {
        this.$vnode.elm.id = 'WSO_ONode'+this.id;
        const obj = $("#WSO_ONode"+this.id)
        //obj.css('top', (this.pos.row * 800)+'px');
        //obj.css('left', (this.pos.column * 800)+'px');
        obj.css('grid-column', this.pos.column)
        obj.css('grid-row', this.pos.row)
    },
    methods : {
    }
}
</script>

<style scoped>
.Node {
    position: absolute;
    border: solid rgb(255,255,255,0) 18px;
    margin: 200px;
    margin-bottom: 400px;
    justify-content: center;
    align-content: center;
}

.video {
    background-color: black;
    display: block;
    width: 800px;
    height: 600px;
}

.post {
    width: 800px;
    height: 600px;
    position: relative;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}

.post:hover .post-s {
    width: 0;
    border: 0px solid rgb(255,255,255,0);
}

.post:hover .description {
    border: solid rgba(230, 128, 255, 0.5) 14px;
    min-height: auto;
    max-height: auto;
    color: white;
    padding: 20px 20px 70px 20px;
}

.post-s {
    width: 800px;
    height: 600px;
    background: rgba(230, 128, 255, 0.5);
    position: absolute;
    top: 0;
    transition: 0.7s ease;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    color: white;
    overflow: hidden;
    border: solid rgb(75, 4, 75) 18px;

    display: block;

    padding: 30% 0 30% 0;
    font-family: 'intro';
}

.post-s h2 {
    font-size: 42px;
    word-wrap: break-word;
}

.description {
    width: 800px;
    height: 0;
    background-color: rgba(230, 128, 255, 0.5);
    border: solid rgb(75, 4, 75) 0px;
    transition: 1.4s ease;
    color: transparent;
    padding: 0;
    font-size: 24px;
}

.title {
    margin-bottom: 20%;
    margin-top: -10%;
    font-size: 32px;
}

</style>
