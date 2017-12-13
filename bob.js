// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    // find all angles and hash by angles.
    var angles={};
    for(var i=0;i<A.length;i++)
    {
        var theta=Math.atan(A[i].y/A[i].x);
        if(theta<0)
            theta+=Math.PI;
        
        var isthirdQuarter=A[i].x<0 && A[i].y<0;
        var isForthQuarter=A[i].y<0 && A[i].x>=0;
        
        theta=Math.round(theta*100000000)/10000000;

        if(isthirdQuarter)
            theta=theta+Math.PI;
        else if(isForthQuarter)
            theta=theta+Math.PI;

        if(!angles.hasOwnProperty(theta))
            angles[theta]=[];

        angles[theta].push(A[i]);
    }

    return Object.keys(angles).length;
}

// var arr=[ { x: -1, y: -2 },
//     { x: 1, y: 2 },
//     { x: 2, y: 4 },
//     { x: -3, y: 2 },
//     { x: 2, y: -2 } ];
// console.log(solution(arr));

// var arr=[{ x: -1, y: -2 }];
// console.log(solution(arr));
// var arr=[{ x: 1, y: 2 },{ x: 1, y: -2 }];
// console.log(solution(arr));
// var arr=[{ x: 0, y: -2 },{ x: 0, y: -30 },{ x: 0, y: 3 }];
// console.log(solution(arr));

// radnom array;
var arr=[];
var angl=0;var N=Math.PI*2;
var angles=[];
for(var i=0;i<N;i+=N/1300)
{
    // find random angle.
    
    angles.push(angl);
    for(var j=0;j<1000;j++)
    {
        var r=Math.random()*10000;
        var x=Math.cos(angl)*r;
        var y=Math.sin(angl)*r;
        arr.push({x:x,y:y});
    }
    angl+=i;
    angl=Math.round(angl*100000)/100000;
}
console.log(angles);
var s=new Date();
console.log(solution(arr));
console.log((new Date()).getTime()-s.getTime());