cc.Class({
    extends: cc.Component,

    properties: {
        one:{
            default:null,
            type:cc.Node,
        },
        moveto:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        function onTouchMove(event){
            var x = event.getDeltaX();
            var y = event.getDeltaY();
            this.x += x;
            this.y += y;
        };
        this.one.on('touchmove',onTouchMove,this.one);

        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
    },
    
    onCollisionEnter:function(other){
        // this.node.color = cc.Color.RED;
    },
    onCollisionStay:function(other){
        var x = this.moveto.getPositionX();
        var y = this.moveto.getPositionY();
        cc.sys.localStorage.OneMoveOne = 1;
        this.one.x = x;
        this.one.y = y;
    },
    onCollisionExit:function(other){
        cc.sys.localStorage.OneMoveOne = 0;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
