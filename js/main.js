
figure('canvas')

var handle = plot([0,3],[0,10],'xlabel','Frequency ratio (w/w_n)','ylabel','Amplitude X/X_static','title','Forced Vibration response','color','white','axis','fixed')
handle.clf();
handle.drawAxes();
handle.lines[0].color="blue";
var wratio = linspace(0,5)
var h = zeros(size(wratio))
var zeta = [0,0.01,0.02,0.05,0.08,0.1,0.15,0.2,0.5,0.75,0.8,1,1.5,2]

function Hofw(wr,z){
    return 1/Math.sqrt( Math.pow(1-wr,2) + Math.pow(2*z*wr,2) ); 
}

const slider = document.getElementById("zeta-slider")
slider.min="0";
slider.max=(zeta.length-1).toString()
const label = document.getElementById("zeta-label")

slider.oninput = function(e){
    let izeta = e.srcElement.value;


    for (let index = 0; index < wratio.length; index++) {
        h[index]= Hofw(wratio[index],zeta[izeta])
    }
    handle.lines[0].x=wratio;
    handle.lines[0].y=h;
    handle.title = "Zeta: "+ zeta[izeta].toPrecision(3)
    label.innerText = "Zeta: "+ zeta[izeta].toPrecision(3)
    handle.draw()
}

