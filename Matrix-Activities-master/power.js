const Matrix = require("matrix-js");
let A = Matrix([
  [0,1,1,1],
  [1,0,1,0],
  [1,1,0,0],
  [1,0,0,0]
]);

function power(mtrx,p){
  let m = mtrx;
    for(let q = 0; q<p; q++){
      m = Matrix(m.prod(mtrx));

}
  return m;
  //mtrx is the matrix you input
  //p is the power of the matrix you want
}
//testing code
console.log(power(A,10)());
