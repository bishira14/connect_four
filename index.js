const winningArrays = [
[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31],
[14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
[20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10],
[35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21],
[41, 34, 27, 20],[1, 8, 15, 22], [40, 33, 26, 19],
[2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24],
[38, 31, 24, 17], [4, 11, 18, 25],[37, 30, 23, 16],
[5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27],
[35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
[7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38],
[27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
[13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38],
[36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16],
[9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
[12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16],[22, 23, 24, 25], [26, 25, 24, 23],
[29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37],
[7, 14, 21, 28],[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]];
const replay = document.querySelector('.replay');
let arrayWin = [];
let circle = document.querySelectorAll('.circle');
let column = document.querySelectorAll('.column');
let current = [5,5,5,5,5,5,5];
let color = 'red';
let array = [];
let turn = document.querySelector('.turn span');

for(let l = 0; l < 42; l++){
array.push(document.querySelector(`._${l}element`));
}
replay.addEventListener('click', function(){
    return location.reload();
  });

for(let i = 0; i < current.length; i++){

  column[i].addEventListener('click', function(){
    if(arrayWin.length === 4) return;
    if(color === 'red'){
      color = 'yellow';
    }else{
      color = 'red';
    }
  if(current[i] >= 0){
    column[i].children[current[i]].style.backgroundColor = color;
  }else{
    return console.log('column finished');
  }
  current[i]--;

  for(let j = 0; j < winningArrays.length; j++){
  for(let k = 0; k < winningArrays[j].length; k++){
   if(array[winningArrays[j][k]].style.backgroundColor == color){
       arrayWin.push('win');
   }
  }
  if(arrayWin.length == 4){
    array[winningArrays[j][0]].style.border = 'solid 4px green';
    array[winningArrays[j][1]].style.border = 'solid 4px green';
    array[winningArrays[j][2]].style.border = 'solid 4px green';
    array[winningArrays[j][3]].style.border = 'solid 4px green';
    // column.forEach(element => {
    // element.removeEventListener('click', game);
    // });
    return console.log(`${color} won`);
  }else{
    arrayWin = [];
  }

}
  if(color == 'yellow'){
    turn.classList.remove('smallyellow');
    turn.classList.add('smallred');
  }else{
    turn.classList.remove('smallred');
    turn.classList.add('smallyellow');
  }
  });
}
