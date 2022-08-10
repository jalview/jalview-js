(function(){var P$=Clazz.newPackage("jalview.math"),I$=[[0,'java.util.HashMap',['jalview.math.RotatableMatrix','.Axis'],'jalview.datamodel.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RotatableMatrix", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Axis',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['matrix','float[][]']]
,['O',['cachedRotations','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.matrix=Clazz.array(Float.TYPE, [3, 3]);
for (var j=0; j < 3; j++) {
this.matrix[j][j]=1.0;
}
}, 1);

Clazz.newMeth(C$, 'setValue$I$I$F',  function (i, j, value) {
this.matrix[i][j]=value;
});

Clazz.newMeth(C$, 'getValue$I$I',  function (i, j) {
return this.matrix[i][j];
});

Clazz.newMeth(C$, 'print$java_io_PrintStream',  function (ps) {
ps.println$S(new Float(this.matrix[0][0]).toString() + " " + new Float(this.matrix[0][1]).toString() + " " + new Float(this.matrix[0][2]).toString() );
ps.println$S(new Float(this.matrix[1][0]).toString() + " " + new Float(this.matrix[1][1]).toString() + " " + new Float(this.matrix[1][2]).toString() );
ps.println$S(new Float(this.matrix[2][0]).toString() + " " + new Float(this.matrix[2][1]).toString() + " " + new Float(this.matrix[2][2]).toString() );
});

Clazz.newMeth(C$, 'rotate$F$jalview_math_RotatableMatrix_Axis',  function (degrees, axis) {
var rot=C$.getRotation$F$jalview_math_RotatableMatrix_Axis(degrees, axis);
this.preMultiply$FAA(rot);
});

Clazz.newMeth(C$, 'getRotation$F$jalview_math_RotatableMatrix_Axis',  function (degrees, axis) {
var floatValue=Float.valueOf$F(degrees);
if (C$.cachedRotations.get$O(axis).containsKey$O(floatValue)) {
return C$.cachedRotations.get$O(axis).get$O(floatValue);
}var costheta=Math.cos(degrees * 3.141592653589793 / 180.0);
var sintheta=Math.sin(degrees * 3.141592653589793 / 180.0);
var rot=Clazz.array(Float.TYPE, [3, 3]);
switch (axis) {
case $I$(2).X:
rot[0][0]=1.0;
rot[1][1]=costheta;
rot[1][2]=sintheta;
rot[2][1]=-sintheta;
rot[2][2]=costheta;
break;
case $I$(2).Y:
rot[0][0]=costheta;
rot[0][2]=-sintheta;
rot[1][1]=1.0;
rot[2][0]=sintheta;
rot[2][2]=costheta;
break;
case $I$(2).Z:
rot[0][0]=costheta;
rot[0][1]=-sintheta;
rot[1][0]=sintheta;
rot[1][1]=costheta;
rot[2][2]=1.0;
break;
}
return rot;
}, 1);

Clazz.newMeth(C$, 'vectorMultiply$FA',  function (vect) {
var result=Clazz.array(Float.TYPE, [3]);
for (var i=0; i < 3; i++) {
result[i]=(this.matrix[i][0] * vect[0]) + (this.matrix[i][1] * vect[1]) + (this.matrix[i][2] * vect[2]) ;
}
return result;
});

Clazz.newMeth(C$, 'preMultiply$FAA',  function (mat) {
var tmp=Clazz.array(Float.TYPE, [3, 3]);
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
tmp[i][j]=(mat[i][0] * this.matrix[0][j]) + (mat[i][1] * this.matrix[1][j]) + (mat[i][2] * this.matrix[2][j]) ;
}
}
this.matrix=tmp;
});

Clazz.newMeth(C$, 'postMultiply$FAA',  function (mat) {
var tmp=Clazz.array(Float.TYPE, [3, 3]);
for (var i=0; i < 3; i++) {
for (var j=0; j < 3; j++) {
tmp[i][j]=(this.matrix[i][0] * mat[0][j]) + (this.matrix[i][1] * mat[1][j]) + (this.matrix[i][2] * mat[2][j]) ;
}
}
this.matrix=tmp;
});

Clazz.newMeth(C$, 'vectorMultiply$jalview_datamodel_Point',  function (coord) {
var v=this.vectorMultiply$FA(Clazz.array(Float.TYPE, -1, [coord.x, coord.y, coord.z]));
return Clazz.new_($I$(3,1).c$$F$F$F,[v[0], v[1], v[2]]);
});

C$.$static$=function(){C$.$static$=0;
{
C$.cachedRotations=Clazz.new_($I$(1,1));
for (var axis, $axis = 0, $$axis = $I$(2).values$(); $axis<$$axis.length&&((axis=($$axis[$axis])),1);$axis++) {
var map=Clazz.new_($I$(1,1));
C$.cachedRotations.put$O$O(axis, map);
for (var deg=1; deg < 5; deg++) {
var rotation=C$.getRotation$F$jalview_math_RotatableMatrix_Axis(deg, axis);
map.put$O$O(Float.valueOf$F(deg), rotation);
rotation=C$.getRotation$F$jalview_math_RotatableMatrix_Axis(-deg, axis);
map.put$O$O(Float.valueOf$F(-deg), rotation);
}
}
};
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.RotatableMatrix, "Axis", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "X", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Y", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Z", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
