var pJS = function (ele, num) {

  var canvas = document.querySelector(ele);
  var ctx = canvas.getContext('2d');

  var opts = {
    particleNum: num,
    defaultSpeed: .5,
    variantSpeed: .5,
    particleColor: "rgb(0,0,0)",
    particleOpacity: 1,
    particleVariantOpacity: 0.005,
    lineColor: "rgb(0,0,0)",
    defaultRadius: 1,
    variantRadius: 1,
    minDistance: 100
  }

  let particle = [],
    w, h;
  let delay = 200,
    tid;
  let line = opts.lineColor.match(/\d+/g);
  let mousePoint = {
      x: 0,
      y: 0
    },
    mouseover = false;

  init();

  window.addEventListener('resize', function () {
    winResize();
  })
  canvas.addEventListener('mousemove', function (e) {
    mouseover = true;
    if (Math.sqrt(Math.pow(mousePoint.x - e.x, 2) + Math.pow(mousePoint.y - e.y, 2)) > 100){
      console.log('move')
    }
    mousePoint.x = e.x;
    mousePoint.y = e.y;
  })
  canvas.addEventListener('mouseleave', function (e) {
    mouseover = false;
  })

  function getSize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + opts.variantSpeed * Math.random();
    this.directionAngle = Math.floor(Math.random() * 360);
    this.color = opts.particleColor;
    this.varientOpacity = opts.particleVariantOpacity;
    this.opacity = opts.particleOpacity * Math.random();
    this.radius = opts.defaultRadius + opts.variantRadius * Math.random();
    this.followMouse = false;
    this.vector = {
      x: this.speed * Math.cos(this.directionAngle),
      y: this.speed * Math.sin(this.directionAngle)
    }
    this.update = function () {
      this.border();
      this.show();
      // if(this.followMouse){
      //   this.followMouseMove();
      // }
      this.x += this.vector.x;
      this.y += this.vector.y;
      this.opacity += this.varientOpacity;
    }
    this.border = function () {
      if (this.x >= w || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > w) {
        this.x = w;
      }
      if (this.y > h) {
        this.y = h;
      }
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = 0;
      }
    }
    this.show = function(){
      if(this.opacity >= 1 || this.opacity <= 0){
        this.varientOpacity *= -1;
      }
    }
    // this.followMouseMove = function(){
    //   let dis = getDistance({
    //     x: this.x,
    //     y: this.y
    //   }, mousePoint);
    //   if(dis >= opts.minDistance){
    //     let temp = this.vector.y;
    //     this.vector.y = -this.vector.x;
    //     this.vector.x = -temp;
    //   }
    // }
    this.draw = function () {
      ctx.beginPath();
      ctx.globalAlpha = this.opacity;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function init() {
    getSize();
    for (let i = 0; i < opts.particleNum; i++) {
      particle.push(new Particle());
    }
    loop();
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < opts.particleNum; i++) {
      particle[i].update();
      particle[i].draw();
    }
    for (let i = 0; i < opts.particleNum; i++) {
      linePoint(particle[i], particle);
    }
    if (mouseover) {
      mouseLine(mousePoint, particle);
    }
    requestAnimationFrame(loop);
  }

  function getDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))
  }

  function linePoint(point, hub) {
    for (let i = 0; i < hub.length; i++) {
      let distance = getDistance(point, hub[i]);
      let opacity = 1 - distance / opts.minDistance;
      if (opacity > 0) {
        ctx.lineWidth = 0.25;
        ctx.strokeStyle = `rgba(${line[0]},${line[1]},${line[2]},${opacity})`;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(hub[i].x, hub[i].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  function mouseLine(point, hub) {
    for (let i = 0; i < hub.length; i++) {
      let distance = getDistance(point, hub[i]);
      let opacity = 1 - distance / opts.minDistance;
      if (opacity > 0) {
        hub[i].followMouse = true;
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `rgba(${line[0]},${line[1]},${line[2]},${opacity})`;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(hub[i].x, hub[i].y);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  function winResize() {
    clearTimeout(tid);
    tid = setTimeout(() => {
      getSize();
    }, delay);
  }

}