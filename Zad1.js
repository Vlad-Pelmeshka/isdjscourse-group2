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



























