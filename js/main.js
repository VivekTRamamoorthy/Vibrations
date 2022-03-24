
figure('canvas')

var handle = plot([0,5],[0,100],'xlabel','Frequency ratio (w/w_n)','ylabel','Amplitude H(w)','title','Forced Vibration response','color',[1,1,1])

var wratio = linspace(0,5)
var h = zeros(size(wratio))

function Hofw(wr,zeta){
    return Math.sqrt((1-wr)**2)+(2*zeta*wratio)**2); 
}

const slider = document.getElementById("zeta")

slider.oninput = function(e){
    let zeta = e.value;
    for (let index = 0; index < wratio.length; index++) {
        h[index]= Hofw(wratio[index],zeta)
    }
    plot(wratio,h)
}

