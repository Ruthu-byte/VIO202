(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._20230308_120919 = function() {
	this.initialize(img._20230308_120919);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_120928 = function() {
	this.initialize(img._20230308_120928);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_120934 = function() {
	this.initialize(img._20230308_120934);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_120939 = function() {
	this.initialize(img._20230308_120939);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_120944 = function() {
	this.initialize(img._20230308_120944);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_120952 = function() {
	this.initialize(img._20230308_120952);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_120955 = function() {
	this.initialize(img._20230308_120955);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_121001 = function() {
	this.initialize(img._20230308_121001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_121004 = function() {
	this.initialize(img._20230308_121004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);


(lib._20230308_121011 = function() {
	this.initialize(img._20230308_121011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4080,2296);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._20230308_120919();
	this.instance.setTransform(206.6,0,0.09,0.09,89.9903);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.7,367.2);


(lib.BtnPrev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("PREV", "96px 'Arial Narrow'", "#FFFFFF");
	this.text.lineHeight = 111;
	this.text.lineWidth = 225;
	this.text.parent = this;
	this.text.setTransform(10.65,3.5,0.42,0.42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoxD6IAAnzIRjAAIAAHzg");
	this.shape.setTransform(56.2,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AoxD6IAAnzIRjAAIAAHzg");
	this.shape_1.setTransform(56.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape},{t:this.text,p:{color:"#00FFFF"}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#0033CC"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.4,50);


(lib.BtnNext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("NEXT", "96px 'Arial Narrow'", "#FFFFFF");
	this.text.lineHeight = 111;
	this.text.lineWidth = 225;
	this.text.parent = this;
	this.text.setTransform(14.65,3.5,0.42,0.42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoxD6IAAnzIRjAAIAAHzg");
	this.shape.setTransform(56.2,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AoxD6IAAnzIRjAAIAAHzg");
	this.shape_1.setTransform(56.2,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape},{t:this.text,p:{color:"#00FF33"}}]},1).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#990033"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.4,50);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(103.3,183.6,1,1,0,0,0,103.3,183.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,206.7,367.2), null);


// stage content:
(lib.Deliverable2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		let mainScope= this;
		
		this.prevBtn.addEventListener("click", prevFrame);
		this.nextBtn.addEventListener("click", nextFrame);
		let frameNum= 0;
		
		
		function prevFrame(){
			console.log("Entered func prev");
			if(frameNum<= 0){ frameNum= 0; return;}
			mainScope.gotoAndStop(--frameNum);
			console.log(frameNum);
		}
		
		function nextFrame(){
			console.log("Entered func next");
			if(frameNum>= 9) {frameNum= 9; return;}
			mainScope.gotoAndStop(++frameNum);
			console.log(frameNum);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer_3
	this.nextBtn = new lib.BtnNext();
	this.nextBtn.name = "nextBtn";
	this.nextBtn.setTransform(468.95,359.6,1,1,0,0,0,56.2,25);
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2);

	this.prevBtn = new lib.BtnPrev();
	this.prevBtn.name = "prevBtn";
	this.prevBtn.setTransform(75.05,356.95,1,1,0,0,0,56.2,25);
	new cjs.ButtonHelper(this.prevBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prevBtn},{t:this.nextBtn}]}).wait(10));

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(283.3,198.6,1,1,0,0,0,103.3,183.6);

	this.instance_1 = new lib._20230308_120928();
	this.instance_1.setTransform(572.85,351.2,0.14,0.14,179.007);

	this.instance_2 = new lib._20230308_120934();
	this.instance_2.setTransform(525.5,331.45,0.12,0.12,180);

	this.instance_3 = new lib._20230308_120939();
	this.instance_3.setTransform(462.1,291.6,0.09,0.09,180);

	this.instance_4 = new lib._20230308_120944();
	this.instance_4.setTransform(550.5,326.45,0.12,0.12,180);

	this.instance_5 = new lib._20230308_120952();
	this.instance_5.setTransform(523.45,306.85,0.12,0.12,-179.009);

	this.instance_6 = new lib._20230308_120955();
	this.instance_6.setTransform(530.3,321.4,0.13,0.13,180);

	this.instance_7 = new lib._20230308_121001();
	this.instance_7.setTransform(538.3,329.4,0.13,0.13,180);

	this.instance_8 = new lib._20230308_121004();
	this.instance_8.setTransform(530.3,315.4,0.13,0.13,180);

	this.instance_9 = new lib._20230308_121011();
	this.instance_9.setTransform(550.3,311.4,0.13,0.13,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(271.3,213,301.59999999999997,171.60000000000002);
// library properties:
lib.properties = {
	id: '2787A232C4C3DA4689263E30A1511D12',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_20230308_120919.jpg?1678289057931", id:"_20230308_120919"},
		{src:"images/_20230308_120928.jpg?1678289057931", id:"_20230308_120928"},
		{src:"images/_20230308_120934.jpg?1678289057931", id:"_20230308_120934"},
		{src:"images/_20230308_120939.jpg?1678289057931", id:"_20230308_120939"},
		{src:"images/_20230308_120944.jpg?1678289057931", id:"_20230308_120944"},
		{src:"images/_20230308_120952.jpg?1678289057931", id:"_20230308_120952"},
		{src:"images/_20230308_120955.jpg?1678289057931", id:"_20230308_120955"},
		{src:"images/_20230308_121001.jpg?1678289057931", id:"_20230308_121001"},
		{src:"images/_20230308_121004.jpg?1678289057931", id:"_20230308_121004"},
		{src:"images/_20230308_121011.jpg?1678289057931", id:"_20230308_121011"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2787A232C4C3DA4689263E30A1511D12'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;