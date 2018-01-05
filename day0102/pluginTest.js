;
var plugin =(function(){
	var mouse = { xCurr: 0, yCurr: 0, xDest: 0, yDest: 0 };
	var horizintalOrient;
	var currentPosition = 0,
		position = 0;
    function _firstFunc(elements,ratio){
        if(elements.length == 0) {
				console.log("没有图片");
			} else {
				var container = document.createElement("figure");
				container.className = "container";
				document.body.appendChild(container);
				var img = document.createElement("img");
				container.appendChild(img);
				var figCaption = document.createElement("figcaption");
				figCaption.className = "captionContainer";
				container.appendChild(figCaption);
				var h1 = document.createElement("h1");
				var h2 = document.createElement("h2");
				figCaption.appendChild(h1);
				figCaption.appendChild(h2);
				for(var i = 0; i < elements.length; i++) {
					elements[i].addEventListener("click", init);
				}
			}

			function init() {
				var event = event || window.event;
				var target = event.target || event.srcElement;
				var imgSource = target.dataset.img;
				var h1Text = target.dataset.title;
				var h2Text = target.getAttribute("data-text");
				img.src = imgSource;
				if(img.naturalWidth / img.naturalHeight > ratio) {
					img.height = winHeight;
					img.width = winHeight * img.naturalWidth / img.naturalHeight;
					img.style.marginLeft = (winWidth - img.width) / 2 + "px";
					img.style.marginTop = 0;
					horizintalOrient = true;
				} else if(img.naturalWidth / img.naturalHeight < ratio){
					img.width = winWidth;
					img.height = winWidth / (img.naturalWidth / img.naturalHeight);
					img.style.marginTop = (winHeight - img.height) / 2 + "px";
					img.style.marginLeft = 0;
					horizintalOrient = false;
				}
				h1.innerHTML = h1Text;
				h2.innerHTML = h2Text;

				mouse.xCurr = mouse.xDest = window.innerWidth / 2;
				mouse.yCurr = mouse.yDest = window.innerHeight / 2;

				container.addEventListener("mousemove", onMouseMove);

				setTimeout(function() {
					fadeIn(container, "block");
					container.style.cursor = "url(img/close_cursor.png),pointer";
				}, 100)

				loop();
			}

			function loop() {
				positionImg(img);
				requestAnimationFrame(loop);
			}

			function positionImg(target) {
				mouse.xCurr += (mouse.xDest - mouse.xCurr) * 0.05;
				mouse.yCurr += (mouse.yDest - mouse.yCurr) * 0.05;
				if(horizintalOrient == true) {
					currentPosition = mouse.xCurr - winWidth / 2;
					position = (winWidth - img.width) / winWidth * currentPosition;
					target.style.transform = 'translate3d(' + position + 'px, 0px, 0px)';
				} else{
					currentPosition = mouse.yCurr - winHeight / 2;
					position = (winHeight - img.height) / winHeight * currentPosition;
					target.style.transform = 'translate3d(0px,' + position + 'px,0px)';
				}
			}

			function onMouseMove() {
				event = event || window.event;
				mouse.xDest = event.clientX;
				mouse.yDest = event.clientY;
			}
			container.addEventListener("click", function() {
				container.style.cursor = "url(img/plus_cursor.png),pointer";
				setTimeout(function() {
					fadeOut(container);
					container.style.cursor = "url(img/plus_cursor.png),pointer";
				}, 100)
			})

			function fadeOut(el) {
				el.style.opacity = 1;
				(function fade() {
					if((el.style.opacity -= 0.1) < 0) {
						el.style.display = "none";
					} else {
						requestAnimationFrame(fade);
					}
				})();
			}

			function fadeIn(el, display) {
				el.style.opacity = 0;
				el.style.display = display || "bilck";
				(function fade() {
					var val = parseFloat(el.style.opacity);
					if(!((val += 0.1) > 1)) {
						el.style.opacity = val;
						requestAnimationFrame(fade);
					}
				})();
			}
    };
    return{
        firstFunc: _firstFunc,
    };
})(window,document);