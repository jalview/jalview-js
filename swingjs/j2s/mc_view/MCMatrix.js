(function(){var P$=Clazz.newPackage("mc_view"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MCMatrix");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myconst=0.017453292;
},1);

C$.$fields$=[['F',['mycos','mysin','myconst'],'O',['matrix','float[][]','+tmp']]]

Clazz.newMeth(C$, 'c$$I$I',  function (rows, cols) {
;C$.$init$.apply(this);
this.matrix=Clazz.array(Float.TYPE, [rows, cols]);
this.tmp=Clazz.array(Float.TYPE, [rows, cols]);
}, 1);

Clazz.newMeth(C$, 'addElement$I$I$F',  function (i, j, value) {
this.matrix[i][j]=value;
});

Clazz.newMeth(C$, 'rotatex$F',  function (degrees) {
this.mycos=(Math.cos(degrees * this.myconst));
this.mysin=(Math.sin(degrees * this.myconst));
this.tmp[0][0]=1;
this.tmp[0][1]=0;
this.tmp[0][2]=0;
this.tmp[1][0]=0;
this.tmp[1][1]=this.mycos;
this.tmp[1][2]=this.mysin;
this.tmp[2][0]=0;
this.tmp[2][1]=-this.mysin;
this.tmp[2][2]=this.mycos;
this.preMultiply$FAA(this.tmp);
});

Clazz.newMeth(C$, 'rotatez$F',  function (degrees) {
this.mycos=(Math.cos(degrees * this.myconst));
this.mysin=(Math.sin(degrees * this.myconst));
this.tmp[0][0]=this.mycos;
this.tmp[0][1]=-this.mysin;
this.tmp[0][2]=0;
this.tmp[1][0]=this.mysin;
this.tmp[1][1]=this.mycos;
this.tmp[1][2]=0;
this.tmp[2][0]=0;
this.tmp[2][1]=0;
this.tmp[2][2]=1;
this.preMultiply$FAA(this.tmp);
});

Clazz.newMeth(C$, 'rotatey$F',  function (degrees) {
this.mycos=(Math.cos(degrees * this.myconst));
this.mysin=(Math.sin(degrees * this.myconst));
this.tmp[0][0]=this.mycos;
this.tmp[0][1]=0;
this.tmp[0][2]=-this.mysin;
this.tmp[1][0]=0;
this.tmp[1][1]=1;
this.tmp[1][2]=0;
this.tmp[2][0]=this.mysin;
this.tmp[2][1]=0;
this.tmp[2][2]=this.mycos;
this.preMultiply$FAA(this.tmp);
});

Clazz.newMeth(C$, 'vectorMultiply$FA',  function (vect) {
var temp=Clazz.array(Float.TYPE, [3]);
temp[0]=vect[0];
temp[1]=vect[1];
temp[2]=vect[2];
for (var i=0; i < 3; i++) {
temp[i]=(this.matrix[i][0] * vect[0]) + (this.matrix[i][1] * vect[1]) + (this.matrix[i][2] * vect[2]) ;
}
vect[0]=temp[0];
vect[1]=temp[1];
vect[2]=temp[2];
return vect;
});

Clazz.newMeth(C$, 'preMultiply$FAA',  function (mat) {
var tmp=Clazz.array(Float.TYPE, [3, 3]);
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
tmp[i][j]=(mat[i][0] * this.matrix[0][j]) + (mat[i][1] * this.matrix[1][j]) + (mat[i][2] * this.matrix[2][j]) ;
}
}
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
this.matrix[i][j]=tmp[i][j];
}
}
});

Clazz.newMeth(C$, 'postMultiply$FAA',  function (mat) {
var tmp=Clazz.array(Float.TYPE, [3, 3]);
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
tmp[i][j]=(this.matrix[i][0] * mat[0][j]) + (this.matrix[i][1] * mat[1][j]) + (this.matrix[i][2] * mat[2][j]) ;
}
}
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
this.matrix[i][j]=tmp[i][j];
}
}
});

Clazz.newMeth(C$, 'setIdentity$',  function () {
this.matrix[0][0]=1;
this.matrix[1][1]=1;
this.matrix[2][2]=1;
this.matrix[0][1]=0;
this.matrix[0][2]=0;
this.matrix[1][0]=0;
this.matrix[1][2]=0;
this.matrix[2][0]=0;
this.matrix[2][1]=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
