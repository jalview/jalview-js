(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','java.util.Arrays','javajs.util.P3','javajs.util.M3','javajs.util.Quat','javajs.util.V3','javajs.util.Eigen','org.jmol.util.Escape','org.jmol.util.EigenSort']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Tensor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iType=-1;
this.eigenSignMask=7;
this.typeFactor=1;
this.atomIndex1=-1;
this.atomIndex2=-1;
},1);

C$.$fields$=[['Z',['isIsotropic','forThermalEllipsoid','sortIso','isModulated','isUnmodulated'],'F',['typeFactor'],'I',['iType','eigenSignMask','modelIndex','atomIndex1','atomIndex2'],'S',['id','type','altType'],'O',['asymMatrix','double[][]','+symMatrix','eigenVectors','javajs.util.V3[]','eigenValues','float[]','+parBorU']]
,['F',['ADP_FACTOR'],'O',['tSort','org.jmol.util.EigenSort']]]

Clazz.newMeth(C$, 'getType$S', function (type) {
var pt=type.indexOf$S("_");
if (pt >= 0) type=type.substring$I$I(0, pt);
pt=";iso........;adp........;tls-u......;tls-r......;ms.........;efg........;isc........;charge.....;quadrupole.;raman......;csa........".indexOf$S(";" + type.toLowerCase$() + "." );
return (pt < 0 ? -1 : (pt/11|0));
}, 1);

Clazz.newMeth(C$, 'getInfoIndex$S', function (infoType) {
if (infoType.charAt$I(0) != ";") infoType=";" + infoType + "." ;
return (";.............;eigenvalues..;eigenvectors.;asymmatrix...;symmatrix....;value........;isotropy.....;anisotropy...;asymmetry....;eulerzyz.....;eulerzxz.....;quaternion...;indices......;string.......;type.........;id...........;span.........;skew.........".indexOf$S(infoType)/14|0);
}, 1);

Clazz.newMeth(C$, 'isFloatInfo$S', function (infoType) {
switch (C$.getInfoIndex$S(infoType)) {
default:
return false;
case 5:
case 6:
case 7:
case 8:
case 16:
case 17:
return true;
}
}, 1);

Clazz.newMeth(C$, 'getInfo$S', function (infoType) {
switch (C$.getInfoIndex$S(infoType)) {
default:
var info=Clazz.new_($I$(1,1));
var s=$I$(2,"getTokens$S",[$I$(2).replaceWithCharacter$S$S$C(";.............;eigenvalues..;eigenvectors.;asymmatrix...;symmatrix....;value........;isotropy.....;anisotropy...;asymmetry....;eulerzyz.....;eulerzxz.....;quaternion...;indices......;string.......;type.........;id...........;span.........;skew.........", ";.", " ").trim$()]);
$I$(3).sort$OA(s);
for (var i=0; i < s.length; i++) {
var o=this.getInfo$S(s[i]);
if (o != null ) info.put$O$O(s[i], o);
}
return info;
case 1:
return this.eigenValues;
case 2:
var list=Clazz.array($I$(4), [3]);
for (var i=0; i < 3; i++) list[i]=$I$(4).newP$javajs_util_T3(this.eigenVectors[i]);

return list;
case 3:
if (this.asymMatrix == null ) return null;
var a=Clazz.array(Float.TYPE, [9]);
var pt=0;
for (var i=0; i < 3; i++) for (var j=0; j < 3; j++) a[pt++]=this.asymMatrix[i][j];


return $I$(5).newA9$FA(a);
case 4:
if (this.symMatrix == null ) return null;
var b=Clazz.array(Float.TYPE, [9]);
var p2=0;
for (var i=0; i < 3; i++) for (var j=0; j < 3; j++) b[p2++]=this.symMatrix[i][j];


return $I$(5).newA9$FA(b);
case 5:
return Float.valueOf$F(this.eigenValues[2]);
case 6:
return Float.valueOf$F(this.isotropy$());
case 7:
return Float.valueOf$F(this.anisotropy$());
case 8:
return Float.valueOf$F(this.asymmetry$());
case 9:
return (this.getInfo$S("quaternion")).getEulerZYZ$();
case 10:
return (this.getInfo$S("quaternion")).getEulerZXZ$();
case 11:
return $I$(6).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(null, this.eigenVectors[0], this.eigenVectors[1]);
case 12:
return Clazz.array(Integer.TYPE, -1, [this.modelIndex, this.atomIndex1, this.atomIndex2]);
case 13:
return this.toString();
case 14:
return this.type;
case 15:
return this.id;
case 16:
return Float.valueOf$F(this.span$());
case 17:
return Float.valueOf$F(this.skew$());
}
});

Clazz.newMeth(C$, 'isotropy$', function () {
return (this.eigenValues[0] + this.eigenValues[1] + this.eigenValues[2] ) / 3;
});

Clazz.newMeth(C$, 'span$', function () {
return Math.abs(this.eigenValues[2] - this.eigenValues[0]);
});

Clazz.newMeth(C$, 'skew$', function () {
return (this.span$() == 0  ? 0 : 3 * (this.eigenValues[1] - this.isotropy$()) / this.span$());
});

Clazz.newMeth(C$, 'anisotropy$', function () {
return this.eigenValues[2] - (this.eigenValues[0] + this.eigenValues[1]) / 2;
});

Clazz.newMeth(C$, 'reducedAnisotropy$', function () {
return this.anisotropy$() * 2 / 3;
});

Clazz.newMeth(C$, 'asymmetry$', function () {
return this.span$() == 0  ? 0 : (this.eigenValues[1] - this.eigenValues[0]) / this.reducedAnisotropy$();
});

Clazz.newMeth(C$, 'copyTensor$', function () {
var t=Clazz.new_(C$);
t.setType$S(this.type);
t.eigenValues=this.eigenValues;
t.eigenVectors=this.eigenVectors;
t.asymMatrix=this.asymMatrix;
t.symMatrix=this.symMatrix;
t.eigenSignMask=this.eigenSignMask;
t.modelIndex=this.modelIndex;
t.atomIndex1=this.atomIndex1;
t.atomIndex2=this.atomIndex2;
t.parBorU=this.parBorU;
t.id=this.id;
return t;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setFromAsymmetricTensor$DAA$S$S', function (asymmetricTensor, type, id) {
var a=Clazz.array(Double.TYPE, [3, 3]);
for (var i=3; --i >= 0; ) for (var j=3; --j >= 0; ) a[i][j]=asymmetricTensor[i][j];


if (a[0][1] != a[1][0] ) {
a[0][1]=a[1][0]=(a[0][1] + a[1][0]) / 2;
}if (a[1][2] != a[2][1] ) {
a[1][2]=a[2][1]=(a[1][2] + a[2][1]) / 2;
}if (a[0][2] != a[2][0] ) {
a[0][2]=a[2][0]=(a[0][2] + a[2][0]) / 2;
}var m=Clazz.new_($I$(5,1));
var mm=Clazz.array(Float.TYPE, [9]);
for (var i=0, p=0; i < 3; i++) for (var j=0; j < 3; j++) mm[p++]=a[i][j];


m.setA$FA(mm);
var vectors=Clazz.array($I$(7), [3]);
var values=Clazz.array(Float.TYPE, [3]);
Clazz.new_($I$(8,1)).setM$DAA(a).fillFloatArrays$javajs_util_V3A$FA(vectors, values);
p$1.newTensorType$javajs_util_V3A$FA$S$S.apply(this, [vectors, values, type, id]);
this.asymMatrix=asymmetricTensor;
this.symMatrix=a;
this.id=id;
return this;
});

Clazz.newMeth(C$, 'setFromEigenVectors$javajs_util_T3A$FA$S$S$org_jmol_util_Tensor', function (eigenVectors, eigenValues, type, id, t) {
var values=Clazz.array(Float.TYPE, [3]);
var vectors=Clazz.array($I$(7), [3]);
for (var i=0; i < 3; i++) {
vectors[i]=$I$(7).newV$javajs_util_T3(eigenVectors[i]);
values[i]=eigenValues[i];
}
p$1.newTensorType$javajs_util_V3A$FA$S$S.apply(this, [vectors, values, type, id]);
if (t != null ) {
this.isModulated=t.isModulated;
this.isUnmodulated=t.isUnmodulated;
this.parBorU=t.parBorU;
}return this;
});

Clazz.newMeth(C$, 'setFromAxes$javajs_util_V3A', function (axes) {
this.eigenValues=Clazz.array(Float.TYPE, [3]);
this.eigenVectors=Clazz.array($I$(7), [3]);
for (var i=0; i < 3; i++) {
this.eigenVectors[i]=$I$(7).newV$javajs_util_T3(axes[i]);
this.eigenValues[i]=axes[i].length$();
if (this.eigenValues[i] == 0 ) return null;
this.eigenVectors[i].normalize$();
}
if (Math.abs(this.eigenVectors[0].dot$javajs_util_T3(this.eigenVectors[1])) > 1.0E-4  || Math.abs(this.eigenVectors[1].dot$javajs_util_T3(this.eigenVectors[2])) > 1.0E-4   || Math.abs(this.eigenVectors[2].dot$javajs_util_T3(this.eigenVectors[0])) > 1.0E-4  ) return null;
this.setType$S("other");
p$1.sortAndNormalize.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'setFromThermalEquation$DA$S', function (coefs, id) {
this.eigenValues=Clazz.array(Float.TYPE, [3]);
this.eigenVectors=Clazz.array($I$(7), [3]);
this.id=(id == null  ? "coefs=" + $I$(9).eAD$DA(coefs) : id);
var mat=Clazz.array(Double.TYPE, [3, 3]);
mat[0][0]=coefs[0];
mat[1][1]=coefs[1];
mat[2][2]=coefs[2];
mat[0][1]=mat[1][0]=coefs[3] / 2;
mat[0][2]=mat[2][0]=coefs[4] / 2;
mat[1][2]=mat[2][1]=coefs[5] / 2;
Clazz.new_($I$(8,1)).setM$DAA(mat).fillFloatArrays$javajs_util_V3A$FA(this.eigenVectors, this.eigenValues);
this.setType$S("adp");
p$1.sortAndNormalize.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'setType$S', function (type) {
if (this.type == null  || type == null  ) this.type=type;
if (type != null ) p$1.processType.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'getFactoredValue$I', function (i) {
var f=Math.abs(this.eigenValues[i]);
return (this.forThermalEllipsoid ? Math.sqrt(f) : f) * this.typeFactor;
});

Clazz.newMeth(C$, 'setAtomIndexes$I$I', function (index1, index2) {
this.atomIndex1=index1;
this.atomIndex2=index2;
});

Clazz.newMeth(C$, 'isSelected$javajs_util_BS$I', function (bsSelected, iAtom) {
return (iAtom >= 0 ? (this.atomIndex1 == iAtom || this.atomIndex2 == iAtom ) : bsSelected.get$I(this.atomIndex1) && (this.atomIndex2 < 0 || bsSelected.get$I(this.atomIndex2) ) );
});

Clazz.newMeth(C$, 'newTensorType$javajs_util_V3A$FA$S$S', function (vectors, values, type, id) {
this.eigenValues=values;
this.eigenVectors=vectors;
for (var i=0; i < 3; i++) this.eigenVectors[i].normalize$();

this.setType$S(type);
this.id=id;
p$1.sortAndNormalize.apply(this, []);
this.eigenSignMask=(this.eigenValues[0] >= 0  ? 1 : 0) + (this.eigenValues[1] >= 0  ? 2 : 0) + (this.eigenValues[2] >= 0  ? 4 : 0) ;
}, p$1);

Clazz.newMeth(C$, 'processType', function () {
this.forThermalEllipsoid=false;
this.isIsotropic=false;
this.altType=null;
this.typeFactor=1;
this.sortIso=false;
switch (this.iType=C$.getType$S(this.type)) {
case 0:
this.forThermalEllipsoid=true;
this.isIsotropic=true;
this.altType="1";
this.type="adp";
break;
case 1:
this.forThermalEllipsoid=true;
this.typeFactor=C$.ADP_FACTOR;
this.altType="1";
break;
case 10:
this.sortIso=true;
this.typeFactor=0.01;
case 4:
this.sortIso=true;
this.typeFactor=0.01;
break;
case 5:
this.sortIso=true;
break;
case 6:
this.sortIso=true;
this.typeFactor=0.04;
break;
case 3:
this.altType="2";
break;
case 2:
this.altType="3";
break;
case 7:
case 8:
break;
}
}, p$1);

Clazz.newMeth(C$, 'sortAndNormalize', function () {
var o=Clazz.array(java.lang.Object, -1, [Clazz.array(java.lang.Object, -1, [$I$(7).newV$javajs_util_T3(this.eigenVectors[0]), Float.valueOf$F(this.eigenValues[0])]), Clazz.array(java.lang.Object, -1, [$I$(7).newV$javajs_util_T3(this.eigenVectors[1]), Float.valueOf$F(this.eigenValues[1])]), Clazz.array(java.lang.Object, -1, [$I$(7).newV$javajs_util_T3(this.eigenVectors[2]), Float.valueOf$F(this.eigenValues[2])])]);
$I$(3,"sort$OA$java_util_Comparator",[o, C$.getEigenSort$()]);
for (var i=0; i < 3; i++) {
var pt=i;
this.eigenVectors[i]=(o[pt])[0];
this.eigenValues[i]=((o[pt])[1]).floatValue$();
}
if (this.sortIso && this.eigenValues[2] - this.eigenValues[1] < this.eigenValues[1] - this.eigenValues[0]  ) {
var vTemp=this.eigenVectors[0];
this.eigenVectors[0]=this.eigenVectors[2];
this.eigenVectors[2]=vTemp;
var f=this.eigenValues[0];
this.eigenValues[0]=this.eigenValues[2];
this.eigenValues[2]=f;
}for (var i=0; i < 3; i++) this.eigenVectors[i].normalize$();

}, p$1);

Clazz.newMeth(C$, 'isEquiv$org_jmol_util_Tensor', function (t) {
if (t.iType != this.iType) return false;
var f=Math.abs(this.eigenValues[0] + this.eigenValues[1] + this.eigenValues[2] );
for (var i=0; i < 3; i++) if (Math.abs(t.eigenValues[i] - this.eigenValues[i]) / f > 3.0E-4 ) return false;

return true;
});

Clazz.newMeth(C$, 'getEigenSort$', function () {
return (C$.tSort == null  ? (C$.tSort=Clazz.new_($I$(10,1))) : C$.tSort);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return (this.type + " " + this.modelIndex + " " + this.atomIndex1 + " " + this.atomIndex2 + "\n" + (this.eigenVectors == null  ? "" + new Float(this.eigenValues[0]).toString() : this.eigenVectors[0] + "\t" + new Float(this.eigenValues[0]).toString() + "\t" + "\n" + this.eigenVectors[1] + "\t" + new Float(this.eigenValues[1]).toString() + "\t" + "\n" + this.eigenVectors[2] + "\t" + new Float(this.eigenValues[2]).toString() + "\t" + "\n" ) );
});

C$.$static$=function(){C$.$static$=0;
C$.ADP_FACTOR=(Math.sqrt(0.5) / 3.141592653589793);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
