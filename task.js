// let field = document.createElement('div')
// document.body.appendChild(field)
// field.classList.add('field')

// for(let i = 0; i < 65025; i++){
//     let square = document.createElement('div')
//     field.appendChild(square)
//     square.classList.add('square')
// }
// let square = document.getElementsByClassName('square')

// let x = 1
// let y = 255

// for(let i = 0; i < square.length;i++){
    
//     if (x > 255){
//         x = 1
//         y--
//     }
    
//     square[i].setAttribute('positionX', x)
//     square[i].setAttribute('positionY',y)
//     x++
    
// }

let canv = document.getElementById('canv'),
  g = canv.getContext('2d'),
 

x0 = 10,
y0 = 10,
 

width = 255,
heigth = 255;
 

grad = g.createLinearGradient(x0, y0, x0 + width, y0 + heigth);
 
grad.addColorStop(0, 'black');
grad.addColorStop(0.5, 'white');
grad.addColorStop(1, 'red');
 
g.fillStyle = grad;
 
g.fillRect(x0, y0, width, heigth);