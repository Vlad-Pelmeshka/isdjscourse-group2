// first

/*
var str =12321; // "stas", "12521", "tapat"
console.log(str + '  ' + secondZ(str));

console.log('')

firstZ(1,100);

function firstZ(i1,i2) 
{
    for(i=i1; i<=i2; i++)
    {
        if(i%3==0 && i%5==0)
            console.log("FizzBuzz");
        else if(i%3==0) 
            console.log("Fizz");
        else if(i%5==0)
            console.log("Buzz");
        else
            console.log(i);
    }
}

function secondZ(str) 
{
    if(str.length===undefined)
        str=String(str);
    //console.log(str.length);
    for(i=0; i<str.length; i++)
    {
        if(str[i]===str[str.length-i-1])
            continue;
        return false;
    }
    return true;
}
*/

// second

//Я надеюсь я правильно понял задание и вс' должно выглядеть именно так

var kol =0;
var mat =
[
// y 1 2 3 4 5 6 7 8 9 10    x
    [0,1,0,0,0,0,0,0,0,0], //1
    [0,1,0,0,0,1,1,0,0,1], //2
    [0,1,0,0,0,0,0,0,0,1], //3
    [0,1,0,0,0,0,0,0,0,0], //4
    [0,0,0,1,1,1,0,0,0,0], //5
    [0,0,0,0,0,0,0,0,0,1], //6
    [0,0,0,1,1,1,0,0,0,0], //7
    [1,0,0,0,0,0,0,0,1,0], //8
    [0,0,1,0,0,0,0,0,1,0], //9
    [0,0,0,0,1,0,0,0,0,0]  //10
];

let seaBattle = [];

/*****************************
          Поле боя!
*****************************/
seaBattle.push(createSeaBattle(1,1));   // -1
seaBattle.push(createSeaBattle(8,1));   // 1
seaBattle.push(createSeaBattle(8,1));   // 2
seaBattle.push(createSeaBattle(9,3));   // 1
seaBattle.push(createSeaBattle(3,'g')); // 3
seaBattle.push(createSeaBattle(2,10));  // 0
seaBattle.push(createSeaBattle(3,10));  // 1
seaBattle.push(createSeaBattle());      // 3
seaBattle.push(createSeaBattle(2,6));   // 0
seaBattle.push(createSeaBattle(2,7));   // 1
seaBattle.push(createSeaBattle(6,10));  // 1
seaBattle.push(createSeaBattle(10,5));  // 1
seaBattle.push(createSeaBattle(7,4));   // 0
seaBattle.push(createSeaBattle(7,5));   // 0
seaBattle.push(createSeaBattle(7,6));   // 1
seaBattle.push(createSeaBattle(8,9));   // 0
seaBattle.push(createSeaBattle(9,9));   // 1
seaBattle.push(createSeaBattle(1,2));   // 0
seaBattle.push(createSeaBattle(2,2));   // 0
seaBattle.push(createSeaBattle(3,2));   // 0
seaBattle.push(createSeaBattle(4,2));   // 1
seaBattle.push(createSeaBattle(5,4));   // 0
seaBattle.push(createSeaBattle(5,5));   // 0
seaBattle.push(createSeaBattle(5,6));   // 4 -> 5 !!!!!!!!
seaBattle.push(createSeaBattle(3,2));   // 5
/*****************************
          Бой окончен!
*****************************/

for(var i=0;i<seaBattle.length;i++)
    switch(seaBattle[i])
    {

        case -1: console.log('Мимо'); break;
        case 0:  console.log('Ранил'); break;
        case 1:  console.log('Убил'); break;
        case 2:  console.log('Ход по данной клетке уже был осуществлён. Отмена!'); break;
        case 3:  console.log('Коректно число не введено, ожидается ввод числа!'); break;
        case 4:  console.log('Победа! Все корабли потоплены!');
        case 5:  console.log('Игра окончена!');
    }
console.log(mat);

function createSeaBattle(x,y) //функция
{
    if(kol===20) //игра окончена. выход
        return 5;
    
    if(!(Number.isInteger(x) && Number.isInteger(y)) || x>10 || x<1 || y>10 || y<1)
        return 3;
    x--;
    y--;
    
    //console.log(mat[x][y]);
    if ( mat[x][y] === 0 ) // мимо
    {
        mat[x][y]=3;
        return -1;
    }
    
    if( mat[x][y] === 2 ) // повторный ход
        return 2;
    
    if( mat[x][y] === 1 ) // попал
    {
        kol++;
        mat[x][y]=2;
        if(kol===20)
            return 4;
        if(               // услове
(x===0 || mat[x-1][y] !== 1) && 
(y===0 || mat[x][y-1] !== 1) && 
(x===9 || mat[x+1][y] !== 1) && 
(y===9 || mat[x][y+1] !== 1))
            return 1;
        else
            return 0;
    }
}



















