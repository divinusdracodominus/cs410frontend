const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
var run = (params.Stop == null) ? true : false;
//var interval = (params.interval == null) ? 5000 : params.interval;
var intervalid = null;
function stop() {
    run = !run;
    if(run) {
        document.getElementById("interval").disabled = true;
        let interval = document.getElementById("interval").value;
        start_changer(interval);
    }else{
        document.getElementById("interval").disabled = false;
        clearInterval(intervalid);
    }
    document.getElementById("stopbtn").value = (run == true) ? "Stop" : "Restart";
}
function start_changer(interval) {
    intervalid = setInterval(function() { 
       let color = "rgb(" + Math.floor(Math.random() * 255).toString() + ", " + Math.floor(Math.random() * 255).toString() + ", " + Math.floor(Math.random() * 255).toString() + ")";
    console.log("color: " + color);
       document.getElementById("background").style.backgroundColor = color; 
    }, interval*1000); 
}
