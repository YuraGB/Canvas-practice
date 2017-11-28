const c= document.querySelector("canvas");

let anim = {};
    if(c !== null) {
	    let w = c.width = window.innerWidth;
	    let h = c.height = window.innerHeight;
	    ctx = c.getContext ("2d");
	
	
	    /* ctx.fillStyle = "green";
		 ctx.fillRect(20,50,100,100);
 
		 ctx.lineWidth = 5;
		 ctx.strokeStyle = "blue";
		 ctx.strokeRect(20,50,100,100);
 
		 ctx.fillStyle = "green";
		 ctx.fillRect(140,50,100,100);*/
	    /* for (let i = 0; i < 10; i++){
			 ctx.beginPath();
			 ctx.lineWidth = 1 + i;
			 ctx.moveTo(25, 25 + i * 15);
			 ctx.lineTo(475, 25 + i * 15);
			 ctx.stroke()
		 }*/
	  /*   ctx.lineWidth = 5;
		 ctx.lineJoin = "miter";
		 ctx.lineCap = 'round';
		 ctx.beginPath();
		 ctx.moveTo(25, 475);
		 ctx.lineTo(75, 100);
		 ctx.lineTo(150, 475);
		 ctx.stroke();*/
	
	    /*ctx.beginPath();

		ctx.arc(100,100,50, Math.PI / 180 * 200, Math.PI / 180 * 10, true);
		ctx.fill();

		ctx.stroke()*/
	    /*
	    // Example
				ctx.strokeStyle = "blue";
				ctx.fillStyle = "white";
		
				ctx.beginPath();
				ctx.moveTo(50,50);
				ctx.bezierCurveTo(50,100, 100,100, 10,50);
				ctx.stroke();
	    *//*
	  //  Example
	 
	    let video = document.createElement("VIDEO")
		    video.src = '1.mp4';
	    
	  
	    
		
	    
	    document.addEventListener("click", (e) => {
	    
			video.play();
			setInterval(()=>{
				ctx.drawImage(video, 0,0);
			},16);
			
		   
		   
		   
	    })*/
		/*
		// Example
	           opts = {
					 len: 20,
					 count: 300,
					 baseTime: 20,
					 addedTime: 10,
					 spawnChance: 10,
					 color: "hsl(hue,100%,light%)",
					 baseLight: 0.9,
					 addedLight: 30,
					 baseLightInputMultiplier: 0.01,
					 addedLightInputMultiplier: 0.2,
				  
					 repaintAlpha: 0.04,
					 hueChange: 0.5
				 };
				 tick = 5;
				 
				 dieX = w / 2 / opts.len;
				 dieY = h / 2 / opts.len;
				 baseRad = Math.PI * 2 /6;
			 
			 ctx.fillRect( 0, 0, w, h );
			 ctx.fillStyle = 'rgb(100,100,25)';
			 ctx.fillText("Click ME", w / 2, h / 2);
			 
			 ctx.fillStyle = "black";
			 
			 function start (e){
				 opts.cx = e.clientX;
				 opts.cy = e.clientY;
				 lines = [];
				 let start = performance.now();
				 loop(start);
				 setTimeout(() => {
					 cancelAnimationFrame(anim);
				 }, 5500);
			 }
			 function loop(start) {
				
				anim = requestAnimationFrame( loop );
				 ++tick;
				 ctx.globalCompositeOperation = "source-over";
				 ctx.shadowBlur = 0;
				 ctx.fillStyle = "rgba(100,100,25,alp)".replace( "alp", opts.repaintAlpha );
				 ctx.fillRect( 0, 0, w, h );
				 ctx.globalCompositeOperation = "screen";
				 
				 if( lines.length < opts.count && performance.now() - start < 4500 ) {
					
					 lines.push (new Line ());
					 lines.map (function (line) {
						 line.step ();
					 });
				 }
			 }
			 function Line(){
				 this.reset();
			 }
			 Line.prototype.reset = function(){
				 this.x = 0;
				 this.y = 0;
				 this.addedX = 0;
				 this.addedY = 0;
				 this.rad = Math.PI / 2;
				 this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
				 this.color = opts.color.replace( 'hue', tick * opts.hueChange );
				 this.cumulativeTime = 0;
				 this.beginPhase();
			 };
			 Line.prototype.beginPhase = function(){
				 this.x += this.addedX;
				 this.y += this.addedY;
				 this.time = 0;
				 this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;
				 this.rad += baseRad * ( Math.random() > 0.5 ? 1 : -1 );
				 this.addedX = Math.cos( this.rad );
				 this.addedY = Math.sin( this.rad );
				 if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY )
					 this.reset();
			 };
			 Line.prototype.step = function(){
				 ++this.time;
				 ++this.cumulativeTime;
				 if( this.time >= this.targetTime )
					 this.beginPhase();
				 let prop = this.time / this.targetTime,
					 wave = Math.sin( prop * Math.PI / 2  ),
					 x = this.addedX * wave,
					 y = this.addedY * wave;
			   
				 ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
		  
				 ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 1);
	 
			 };
			document.addEventListener('click', start);
		 
	*/
	  
	/*
	//Example
	    document.addEventListener("click", (e)=>{
		    let x = 0;
		    let y = 50;
		    let start = performance.now();
		//    ctx.globalCompositeOperation = "lighten";
		    function loop() {
			    console.log( start - performance.now());
			      const anim = requestAnimationFrame(loop);
			    if (performance.now () - start < 1800) {
				   // ctx.createRadialGradient (e.clientX, e.clientY, x === 1000 ? 0 : x ++, e.clientX, e.clientY, y > 1000 ? y -- :0, e.clientX, e.clientY);
				    const Gradien = ctx.createRadialGradient (e.clientX, e.clientY, x === 500 ? x : x ++, e.clientX, e.clientY, y > 120 ? y : y ++, e.clientX, e.clientY);
				    
				
				    Gradien.addColorStop (0.15, "rgba(68,115,255, 1)");
				 //   Gradien.addColorStop (0.5, "#75c2ff");
				    Gradien.addColorStop (0.3, "rgba(122,163,255, .5)");
				    Gradien.addColorStop (0.7, "rgba(68,115,255, .1)");
				    ctx.fillStyle = Gradien;
				    
				    ctx.fillRect (0, 0, w, h);
				    
				    
			    } else {
				    console.log("here");
			    cancelAnimationFrame(anim);
				    ctx.fillStyle = "#4473ff";
				    ctx.fillRect (0, 0, w, h);
		    }}
		
		    loop(start);
        })*/
/*
	 
	 // Example
	 let  alfa = 0;
	 let img = new Image();
	 img.src = '1.jpg';
	    setTimeout( () => {
	    	ctx.globalAlpha = 0.1;
		   
		    
		    let alf = setInterval(() => {
		    	if(ctx.globalAlpha >= 0.99){
				    clearInterval(alf);}
			    else {
		    		console.log(ctx.globalAlpha);
				    ctx.drawImage(img, 0 ,0);
				    ctx.globalAlpha += 0.1;
			    }
		    }, 100)
	    }, 1000);
*/
/*
// Example
 let deg = Math.PI / 12;
	 let d = 0;
	 color = '#fff';
	 
	 blank();
	 
	 function blank () {
		 ctx.fillStyle = "#404dff";
		 ctx.fillRect(0,0,w,h);
	 
	 
	 setInterval(anim, 30);
	 };
	 function anim () {
		 if (deg<2*Math.PI){
		 
		 ctx.beginPath();
		 ctx.strokeStyle = color;
		 ctx.shadowBlur = (color==="#404dff"?1:1);
		 console.log(ctx.shadowBlur)
		 ctx.shadowColor = color;
		 ctx.lineWidth = 3
		 ctx.arc(400,400,200,d+=0.1,deg+=0.1);
		 console.log(deg);
		 ctx.stroke();
		 } else {
			
		 	 deg = Math.PI / 12;
		 	 d = 0;
		 	 color = color==="#404dff"?"#fff":"#404dff";
		 
			
		 }
	 }*/
/*
// Example
	    const waterfallCanvas = function(c, cw, ch){
		
		    const _this = this;
		    this.c = c;
		    this.ctx = c.getContext('2d');
		    this.cw = cw;
		    this.ch = ch;
		
		    this.particles = [];
		    this.particleRate = 3;
		    this.gravity = .05;
		
		
		    this.init = function(){
			    this.loop();
		    };
		
		    this.reset = function(){
			    this.ctx.clearRect(0,0,this.cw,this.ch);
			    this.particles = [];
		    };
		
		    this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
		
		
		    this.Particle = function(){
			    var newWidth = _this.rand(1,20);
			    var newHeight = _this.rand(1, 45);
			    this.x = _this.rand(10+(newWidth/2), _this.cw-10-(newWidth/2));
			    this.y = -newHeight;
			    this.vx = 0;
			    this.vy = 0;
			    this.width = newWidth;
			    this.height = newHeight;
			    this.hue = _this.rand(200, 220);
			    this.saturation = _this.rand(30, 60);
			    this.lightness = _this.rand(30, 60);
		    };
		
		    this.Particle.prototype.update = function(i){
			 //   this.vx += this.vx;
			    this.vy += _this.gravity;
			   // this.x += this.vx;
			    this.y += this.vy;
		    };
		
		    this.Particle.prototype.render = function(){
			    _this.ctx.strokeStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, .05)';
			    _this.ctx.beginPath();
			    _this.ctx.moveTo(this.x, this.y);
			    _this.ctx.lineTo(this.x, this.y + this.height);
			    _this.ctx.lineWidth = this.width/2;
			    _this.ctx.lineCap = 'round';
			    _this.ctx.stroke();
		    };
		
		    this.Particle.prototype.renderBubble = function(){
					    _this.ctx.fillStyle = 'hsla('+this.hue+', 40%, 40%, 1)';
			    _this.ctx.fillStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, .3)';
			    _this.ctx.beginPath();
			    _this.ctx.arc(this.x+this.width/2, _this.ch-20-_this.rand(0,10), _this.rand(1,8), 0, Math.PI*2, false);
			    _this.ctx.fill();
		    };
		
		    this.createParticles = function(){
			    var i = this.particleRate;
			    while(i--){
				    this.particles.push(new this.Particle());
			    }
		    };
		
		    this.removeParticles = function(){
			    var i = this.particleRate;
			    while(i--){
				    var p = this.particles[i];
				    if(p.y > _this.ch-20-p.height){
					    p.renderBubble();
					    _this.particles.splice(i, 1);
				    }
			    }
		    };
		
		    this.updateParticles = function(){
			    var i = this.particles.length;
			    while(i--){
				    var p = this.particles[i];
				    p.update(i);
			    };
		    };
		
		    this.renderParticles = function(){
			    var i = this.particles.length;
			    while(i--){
				    var p = this.particles[i];
				    p.render();
			    };
		    };
		
		    this.clearCanvas = function(){
			    this.ctx.globalCompositeOperation = 'destination-out';
			    this.ctx.fillStyle = 'rgba(255,255,255,.06)';
			    this.ctx.fillRect(0,0,this.cw,this.ch);
			    this.ctx.globalCompositeOperation = 'lighter';
		    };
		
		    this.loop = function(){
			    let loopIt = function(){
				    requestAnimationFrame(loopIt, _this.c);
				   
				    _this.clearCanvas();
				    _this.createParticles();
				    _this.updateParticles();
				    _this.renderParticles();
				    _this.removeParticles();
			    };
			    loopIt();
		    };
		
	    };
	
	    const isCanvasSupported = function(){
		    const elem = document.createElement('canvas');
		    return !!(elem.getContext && elem.getContext('2d'));
	    };
	
	    const setupRAF = function(){
		    let lastTime = 0;
		    const vendors = ['ms', 'moz', 'webkit', 'o'];
		    for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
			    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
		    };
		
		    if(!window.requestAnimationFrame){
		    	console.log("here");
			    window.requestAnimationFrame = function(callback, element){
				    const currTime = new Date().getTime();
				    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
				    let id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
				    lastTime = currTime + timeToCall;
				    return id;
			    };
		    };
		
		    if (!window.cancelAnimationFrame){
			    window.cancelAnimationFrame = function(id){
				    clearTimeout(id);
			    };
		    };
	    };
	
	    let cw = c.width = 100;
	    let ch = c.height = 140;
	    let waterfall = new waterfallCanvas(c, cw, ch);
		 
		//    setupRAF();
	  
		    waterfall.init();
	    

    */
    }
