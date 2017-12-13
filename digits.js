// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// return the digits O(n);
function toDigits(N)
{
    var digits=[];
    while(N>0)
    {
        digits.push(N%10);
        N=Math.floor(N/10);
    }
    return digits;
}

// return the number. O(n);
function fromDigits(A){
    var N=0;
    var curDigitPower=1;
    var i=0;
    for(i=0;i<A.length;i++)
        if(A[i]!=0)break;
    for(i;i<A.length;i++)
    {
        // advance N by 10;
        if(A[i]>0)
            N+=A[i]*curDigitPower;
        curDigitPower*=10;
    }
    return N;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var V=fromDigits(A);
    V*=17;
    console.log(V);
    var ndigits=toDigits(V);
    var sum=0;
    for(var i=0;i<ndigits.length;i++)
    {
        sum+=ndigits[i];
    }
    return sum;
}
var arr=  [0,0,3, 5, 1] ;
console.log(solution(arr));

// the digits. 
var arr=  [3, 5, 1] ;
console.log(solution(arr));

var arr=toDigits(102320302);
console.log(fromDigits(arr));
console.log(solution(arr));