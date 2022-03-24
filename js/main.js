
figure('canvas')

var handle = plot([0,5],[0,100],'xlabel','Frequency ratio (w/w_n)','ylabel','Amplitude H(w)','title','Forced Vibration response','color',[1,1,1],'axis','fixed')

var wratio = linspace(0,5)
var h = zeros(size(wratio))
var zeta = [0,0.01,0.1,0.2, 1,2]

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
    handle.title = "zeta: "+ zeta[izeta].toPrecision(3)
    label.innerText = "zeta: "+ zeta[izeta].toPrecision(3)
    handle.draw()
    console.log(zeta[izeta]);
    console.log(izeta);
    console.log('draw')
}

