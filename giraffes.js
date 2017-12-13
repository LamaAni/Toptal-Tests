
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function sort_arr(a,b)
{
    if(a==b)
        return 0;
    return a>b?1:0;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    // first find sorted A.
    var sorted=[].concat(A).sort(sort_arr);

    var grps=0;
    var curMatch=null;
    for(var i=0;i<A.length;i++)
    {
        if(curMatch==null)
        {
            if(A[i]!=sorted[i])
                curMatch=A[i]>sorted[i] ? A[i] :sorted[i];
            else grps++;
        }
        else
        {
            if(curMatch<A[i])
                continue;
            grps++;
            curMatch=null;
        }
    }

    return grps;

}
var arr=[4,3,2,1];
console.log(solution(arr));
var arr=[4, 3, 2, 6, 1];
console.log(solution(arr));
var arr=[14,1,3];
console.log(solution(arr));
var arr=[1,14,6,7,16];
console.log(solution(arr));
var arr=[1, 5, 4, 9, 8, 7, 12, 13, 14];
console.log(solution(arr));

var arr=[1, 5, 4, 93, 8, 7, 12, 13, 14];
console.log(solution(arr));
