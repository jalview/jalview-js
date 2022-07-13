(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'javajs.util.Matrix','javajs.util.SB','org.jmol.util.Parser','javajs.util.M4','org.jmol.util.Logger','javajs.util.P3','javajs.util.PT','javajs.util.V3','java.util.Hashtable']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SymmetryOperation", null, 'javajs.util.M4');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doNormalize=true;
this.magOp=3.4028235E38;
},1);

C$.$fields$=[['Z',['doNormalize','isFinalized','isBio','unCentered','isCenteringOp'],'F',['magOp'],'I',['opId','modDim','index','timeReversal'],'S',['xyzOriginal','xyz','subsystemCode'],'O',['centering','javajs.util.V3','myLabels','String[]','linearRotTrans','float[]','rsvs','javajs.util.Matrix','+sigma','info','java.util.Hashtable']]
,['O',['atomTest','javajs.util.P3','twelfths','String[]','+fortyeigths','+labelsXYZ','+labelsXn','+labelsXnSub']]]

Clazz.newMeth(C$, 'setSigma$S$javajs_util_Matrix', function (subsystemCode, sigma) {
this.subsystemCode=subsystemCode;
this.sigma=sigma;
});

Clazz.newMeth(C$, 'c$$org_jmol_symmetry_SymmetryOperation$javajs_util_P3A$I$I$Z', function (op, atoms, atomIndex, countOrId, doNormalize) {
Clazz.super_(C$, this);
this.doNormalize=doNormalize;
if (op == null ) {
this.opId=countOrId;
return;
}this.xyzOriginal=op.xyzOriginal;
this.xyz=op.xyz;
this.opId=op.opId;
this.modDim=op.modDim;
this.myLabels=op.myLabels;
this.index=op.index;
this.linearRotTrans=op.linearRotTrans;
this.sigma=op.sigma;
this.subsystemCode=op.subsystemCode;
this.timeReversal=op.timeReversal;
p$1.setMatrix$Z.apply(this, [false]);
if (!op.isFinalized) this.doFinalize$();
if (doNormalize && this.sigma == null  ) C$.setOffset$javajs_util_M4$javajs_util_P3A$I$I(this, atoms, atomIndex, countOrId);
}, 1);

Clazz.newMeth(C$, 'setGamma$Z', function (isReverse) {
var n=3 + this.modDim;
var a=(this.rsvs=Clazz.new_($I$(1,1).c$$DAA$I$I,[null, n + 1, n + 1])).getArray$();
var t=Clazz.array(Double.TYPE, [n]);
var pt=0;
for (var i=0; i < n; i++) {
for (var j=0; j < n; j++) a[i][j]=this.linearRotTrans[pt++];

t[i]=(isReverse ? -1 : 1) * this.linearRotTrans[pt++];
}
a[n][n]=1;
if (isReverse) this.rsvs=this.rsvs.inverse$();
for (var i=0; i < n; i++) a[i][n]=t[i];

a=this.rsvs.getSubmatrix$I$I$I$I(0, 0, 3, 3).getArray$();
for (var i=0; i < 3; i++) for (var j=0; j < 4; j++) this.setElement$I$I$F(i, j, (j < 3 ? a[i][j] : t[i]));


this.setElement$I$I$F(3, 3, 1);
}, p$1);

Clazz.newMeth(C$, 'doFinalize$', function () {
C$.div12$javajs_util_M4(this);
if (this.modDim > 0) {
var a=this.rsvs.getArray$();
for (var i=a.length - 1; --i >= 0; ) a[i][3 + this.modDim] /= 12;

}this.isFinalized=true;
});

Clazz.newMeth(C$, 'div12$javajs_util_M4', function (op) {
op.m03 /= 12;
op.m13 /= 12;
op.m23 /= 12;
return op;
}, 1);

Clazz.newMeth(C$, 'getXyz$Z', function (normalized) {
return (normalized && this.modDim == 0  || this.xyzOriginal == null   ? this.xyz : this.xyzOriginal);
});

Clazz.newMeth(C$, 'newPoint$javajs_util_M4$javajs_util_P3$javajs_util_P3$I$I$I', function (m, atom1, atom2, x, y, z) {
m.rotTrans2$javajs_util_T3$javajs_util_T3(atom1, atom2);
atom2.add3$F$F$F(x, y, z);
}, 1);

Clazz.newMeth(C$, 'dumpInfo$', function () {
return "\n" + this.xyz + "\ninternal matrix representation:\n" + this.toString() ;
});

Clazz.newMeth(C$, 'dumpSeitz$javajs_util_M4$Z', function (s, isCanonical) {
var sb=Clazz.new_($I$(2,1));
var r=Clazz.array(Float.TYPE, [4]);
for (var i=0; i < 3; i++) {
s.getRow$I$FA(i, r);
sb.append$S("[\t");
for (var j=0; j < 3; j++) sb.appendI$I((r[j]|0)).append$S("\t");

var trans=r[3];
if (trans != (trans|0) ) trans=12 * trans;
sb.append$S(C$.twelfthsOf$F(isCanonical ? ((trans|0) + 12) % 12 : (trans|0))).append$S("\t]\n");
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'setMatrixFromXYZ$S$I$Z', function (xyz, modDim, allowScaling) {
if (xyz == null ) return false;
this.xyzOriginal=xyz;
xyz=xyz.toLowerCase$();
p$1.setModDim$I.apply(this, [modDim]);
var isReverse=(xyz.startsWith$S("!"));
if (isReverse) xyz=xyz.substring$I(1);
if (xyz.indexOf$S("xyz matrix:") == 0) {
this.xyz=xyz;
$I$(3).parseStringInfestedFloatArray$S$javajs_util_BS$FA(xyz, null, this.linearRotTrans);
return this.setFromMatrix$FA$Z(null, isReverse);
}if (xyz.indexOf$S("[[") == 0) {
xyz=xyz.replace$C$C("[", " ").replace$C$C("]", " ").replace$C$C(",", " ");
$I$(3).parseStringInfestedFloatArray$S$javajs_util_BS$FA(xyz, null, this.linearRotTrans);
for (var i=this.linearRotTrans.length; --i >= 0; ) if (Float.isNaN$F(this.linearRotTrans[i])) return false;

p$1.setMatrix$Z.apply(this, [isReverse]);
this.isFinalized=true;
this.isBio=(xyz.indexOf$S("bio") >= 0);
this.xyz=(this.isBio ? this.toString() : C$.getXYZFromMatrix$javajs_util_M4$Z$Z$Z(this, false, false, false));
return true;
}if (modDim == 0 && xyz.indexOf$S("x4") >= 0 ) {
for (var i=14; --i >= 4; ) {
if (xyz.indexOf$S("x" + i) >= 0) {
p$1.setModDim$I.apply(this, [i - 3]);
break;
}}
}var mxyz=null;
if (xyz.endsWith$S("m")) {
this.timeReversal=(xyz.indexOf$S("-m") >= 0 ? -1 : 1);
allowScaling=true;
} else if (xyz.indexOf$S("mz)") >= 0) {
var pt=xyz.indexOf$S("(");
mxyz=xyz.substring$I$I(pt + 1, xyz.length$() - 1);
xyz=xyz.substring$I$I(0, pt);
allowScaling=false;
}var strOut=C$.getMatrixFromString$org_jmol_symmetry_SymmetryOperation$S$FA$Z(this, xyz, this.linearRotTrans, allowScaling);
if (strOut == null ) return false;
if (mxyz != null ) {
var isProper=($I$(4).newA16$FA(this.linearRotTrans).determinant3$() == 1 );
this.timeReversal=(((xyz.indexOf$S("-x") < 0) == (mxyz.indexOf$S("-mx") < 0) ) == isProper  ? 1 : -1);
}p$1.setMatrix$Z.apply(this, [isReverse]);
this.xyz=(isReverse ? C$.getXYZFromMatrix$javajs_util_M4$Z$Z$Z(this, true, false, false) : strOut);
if (this.timeReversal != 0) this.xyz += (this.timeReversal == 1 ? ",m" : ",-m");
if ($I$(5).debugging) $I$(5).debug$S("" + this);
return true;
});

Clazz.newMeth(C$, 'setModDim$I', function (dim) {
var n=(dim + 4) * (dim + 4);
this.modDim=dim;
if (dim > 0) this.myLabels=C$.labelsXn;
this.linearRotTrans=Clazz.array(Float.TYPE, [n]);
}, p$1);

Clazz.newMeth(C$, 'setMatrix$Z', function (isReverse) {
if (this.linearRotTrans.length > 16) {
p$1.setGamma$Z.apply(this, [isReverse]);
} else {
this.setA$FA(this.linearRotTrans);
if (isReverse) {
var p3=$I$(6).new3$F$F$F(this.m03, this.m13, this.m23);
this.invert$();
this.rotate$javajs_util_T3(p3);
p3.scale$F(-1);
this.setTranslation$javajs_util_T3(p3);
}}}, p$1);

Clazz.newMeth(C$, 'setFromMatrix$FA$Z', function (offset, isReverse) {
var v=0;
var pt=0;
this.myLabels=(this.modDim == 0 ? C$.labelsXYZ : C$.labelsXn);
var rowPt=0;
var n=3 + this.modDim;
for (var i=0; rowPt < n; i++) {
if (Float.isNaN$F(this.linearRotTrans[i])) return false;
v=this.linearRotTrans[i];
if (Math.abs(v) < 1.0E-5 ) v=0;
var isTrans=((i + 1) % (n + 1) == 0);
if (isTrans) {
if (offset != null ) {
v /= 12;
if (pt < offset.length) v += offset[pt++];
}v=C$.normalizeTwelfths$F$Z((v < 0  ? -1 : 1) * Math.abs(v * 12) / 12.0, this.doNormalize);
rowPt++;
}this.linearRotTrans[i]=v;
}
this.linearRotTrans[this.linearRotTrans.length - 1]=1;
p$1.setMatrix$Z.apply(this, [isReverse]);
this.isFinalized=(offset == null );
this.xyz=C$.getXYZFromMatrix$javajs_util_M4$Z$Z$Z(this, true, false, false);
return true;
});

Clazz.newMeth(C$, 'getMatrixFromXYZ$S', function (xyz) {
var linearRotTrans=Clazz.array(Float.TYPE, [16]);
xyz=C$.getMatrixFromString$org_jmol_symmetry_SymmetryOperation$S$FA$Z(null, xyz, linearRotTrans, false);
return (xyz == null  ? null : C$.div12$javajs_util_M4($I$(4).newA16$FA(linearRotTrans)));
}, 1);

Clazz.newMeth(C$, 'getMatrixFromString$org_jmol_symmetry_SymmetryOperation$S$FA$Z', function (op, xyz, linearRotTrans, allowScaling) {
var isDenominator=false;
var isDecimal=false;
var isNegative=false;
var modDim=(op == null  ? 0 : op.modDim);
var nRows=4 + modDim;
var doNormalize=(op != null  && op.doNormalize );
var dimOffset=(modDim > 0 ? 3 : 0);
linearRotTrans[linearRotTrans.length - 1]=1;
var transPt=xyz.indexOf$I(";") + 1;
if (transPt != 0) {
allowScaling=true;
if (transPt == xyz.length$()) xyz += "0,0,0";
}var rotPt=-1;
var myLabels=(op == null  || modDim == 0  ? null : op.myLabels);
if (myLabels == null ) myLabels=C$.labelsXYZ;
xyz=xyz.toLowerCase$() + ",";
xyz=xyz.replace$C$C("(", ",");
if (modDim > 0) xyz=C$.replaceXn$S$I(xyz, modDim + 3);
var xpt=0;
var tpt0=0;
var rowPt=0;
var ch;
var iValue=0;
var tensDenom=0;
var decimalMultiplier=1.0;
var strT="";
var strOut="";
for (var i=0; i < xyz.length$(); i++) {
switch ((ch=xyz.charAt$I(i)).$c()) {
case 59:
break;
case 39:
case 32:
case 123:
case 125:
case 33:
continue;
case 45:
isNegative=true;
continue;
case 43:
isNegative=false;
continue;
case 47:
tensDenom=0;
isDenominator=true;
continue;
case 120:
case 121:
case 122:
case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
case 103:
case 104:
tpt0=rowPt * nRows;
var ipt=(ch >= "x" ? ch.$c() - 120 : ch.$c() - 97 + dimOffset);
xpt=tpt0 + ipt;
var val=(isNegative ? -1 : 1);
if (allowScaling && iValue != 0  ) {
linearRotTrans[xpt]=iValue;
val=(iValue|0);
iValue=0;
} else {
linearRotTrans[xpt]=val;
}strT += C$.plusMinus$S$F$S(strT, val, myLabels[ipt]);
break;
case 44:
if (transPt != 0) {
if (transPt > 0) {
rotPt=i;
i=transPt - 1;
transPt=-i;
iValue=0;
tensDenom=0;
continue;
}transPt=i + 1;
i=rotPt;
}iValue=C$.normalizeTwelfths$F$Z(iValue, doNormalize);
linearRotTrans[tpt0 + nRows - 1]=iValue;
strT += C$.xyzFraction12$F$Z$Z(iValue, false, true);
strOut += (strOut === ""  ? "" : ",") + strT;
if (rowPt == nRows - 2) return strOut;
iValue=0;
strT="";
if (rowPt++ > 2 && modDim == 0 ) {
$I$(5).warn$S("Symmetry Operation? " + xyz);
return null;
}break;
case 46:
isDecimal=true;
decimalMultiplier=1.0;
continue;
case 48:
if (!isDecimal && (isDenominator || !allowScaling ) ) continue;
default:
var ich=ch.$c() - 48;
if (ich >= 0 && ich <= 9 ) {
if (isDecimal) {
decimalMultiplier /= 10.0;
if (iValue < 0 ) isNegative=true;
iValue += decimalMultiplier * ich * (isNegative ? -1 : 1) ;
continue;
}if (isDenominator) {
if (ich == 1) {
tensDenom=1;
continue;
}if (tensDenom == 1) {
ich+=tensDenom * 10;
}if (iValue == 0 ) {
linearRotTrans[xpt] /= ich;
} else {
iValue /= ich;
}} else {
iValue=iValue * 10 + (isNegative ? -1 : 1) * ich;
isNegative=false;
}} else {
$I$(5).warn$S("symmetry character?" + ch);
}}
isDecimal=isDenominator=isNegative=false;
}
return null;
}, 1);

Clazz.newMeth(C$, 'replaceXn$S$I', function (xyz, n) {
for (var i=n; --i >= 0; ) xyz=$I$(7).rep$S$S$S(xyz, C$.labelsXn[i], C$.labelsXnSub[i]);

return xyz;
}, 1);

Clazz.newMeth(C$, 'xyzFraction12$F$Z$Z', function (n12ths, allPositive, halfOrLess) {
var n=n12ths;
if (allPositive) {
while (n < 0 )n += 12.0;

} else if (halfOrLess) {
while (n > 6.0 )n -= 12.0;

while (n < -6.0 )n += 12.0;

}var s=C$.twelfthsOf$F(n);
return (s.charAt$I(0) == "0" ? "" : n > 0  ? "+" + s : s);
}, 1);

Clazz.newMeth(C$, 'xyzFraction48ths$F$Z$Z', function (n48ths, allPositive, halfOrLess) {
var n=n48ths;
if (allPositive) {
while (n < 0 )n += 48.0;

} else if (halfOrLess) {
while (n > 24.0 )n -= 48.0;

while (n < -24.0 )n += 48.0;

}var s=C$.fortyEighthsOf$F(n);
return (s.charAt$I(0) == "0" ? "" : n > 0  ? "+" + s : s);
}, 1);

Clazz.newMeth(C$, 'twelfthsOf$F', function (n12ths) {
var str="";
if (n12ths < 0 ) {
n12ths=-n12ths;
str="-";
}var m=12;
var n=Math.round(n12ths);
if (Math.abs(n - n12ths) > 0.01 ) {
var f=n12ths / 12;
var max=20;
for (m=3; m < max; m++) {
var fm=f * m;
n=Math.round(fm);
if (Math.abs(n - fm) < 0.01 ) break;
}
if (m == max) return str + new Float(f).toString();
} else {
if (n == 12) return str + "1";
if (n < 12) return str + C$.twelfths[n % 12];
switch (n % 12) {
case 0:
return "" + (n/12|0);
case 2:
case 10:
m=6;
break;
case 3:
case 9:
m=4;
break;
case 4:
case 8:
m=3;
break;
case 6:
m=2;
break;
default:
break;
}
n=((n * m/12|0));
}return str + n + "/" + m ;
}, 1);

Clazz.newMeth(C$, 'fortyEighthsOf$F', function (n48ths) {
var str="";
if (n48ths < 0 ) {
n48ths=-n48ths;
str="-";
}var m=12;
var n=Math.round(n48ths);
if (Math.abs(n - n48ths) > 0.01 ) {
var f=n48ths / 48;
var max=20;
for (m=5; m < max; m++) {
var fm=f * m;
n=Math.round(fm);
if (Math.abs(n - fm) < 0.01 ) break;
}
if (m == max) return str + new Float(f).toString();
} else {
if (n == 48) return str + "1";
if (n < 48) return str + C$.twelfths[n % 48];
switch (n % 48) {
case 0:
return "" + (n/48|0);
case 2:
case 10:
m=6;
break;
case 3:
case 9:
m=4;
break;
case 4:
case 8:
m=3;
break;
case 6:
m=2;
break;
default:
break;
}
n=((n * m/12|0));
}return str + n + "/" + m ;
}, 1);

Clazz.newMeth(C$, 'plusMinus$S$F$S', function (strT, x, sx) {
return (x == 0  ? "" : (x < 0  ? "-" : strT.length$() == 0 ? "" : "+") + (x == 1  || x == -1   ? "" : "" + (Math.abs(x)|0)) + sx );
}, 1);

Clazz.newMeth(C$, 'normalizeTwelfths$F$Z', function (iValue, doNormalize) {
iValue *= 12.0;
if (doNormalize) {
while (iValue > 6 )iValue -= 12;

while (iValue <= -6 )iValue += 12;

}return iValue;
}, 1);

Clazz.newMeth(C$, 'normalize48ths$F$Z', function (iValue, doNormalize) {
iValue *= 48.0;
if (doNormalize) {
while (iValue > 24 )iValue -= 48;

while (iValue <= -24 )iValue += 48;

}return iValue;
}, 1);

Clazz.newMeth(C$, 'getXYZFromMatrix$javajs_util_M4$Z$Z$Z', function (mat, is12ths, allPositive, halfOrLess) {
var str="";
var op=(Clazz.instanceOf(mat, "org.jmol.symmetry.SymmetryOperation") ? mat : null);
if (op != null  && op.modDim > 0 ) return C$.getXYZFromRsVs$javajs_util_Matrix$javajs_util_Matrix$Z(op.rsvs.getRotation$(), op.rsvs.getTranslation$(), is12ths);
var row=Clazz.array(Float.TYPE, [4]);
for (var i=0; i < 3; i++) {
var lpt=(i < 3 ? 0 : 3);
mat.getRow$I$FA(i, row);
var term="";
for (var j=0; j < 3; j++) if (row[j] != 0 ) term += C$.plusMinus$S$F$S(term, row[j], C$.labelsXYZ[j + lpt]);

term += C$.xyzFraction12$F$Z$Z((is12ths ? row[3] : row[3] * 12), allPositive, halfOrLess);
str += "," + term;
}
return str.substring$I(1);
}, 1);

Clazz.newMeth(C$, 'setOffset$javajs_util_M4$javajs_util_P3A$I$I', function (m, atoms, atomIndex, count) {
if (count == 0) return;
var x=0;
var y=0;
var z=0;
if (C$.atomTest == null ) C$.atomTest=Clazz.new_($I$(6,1));
for (var i=atomIndex, i2=i + count; i < i2; i++) {
C$.newPoint$javajs_util_M4$javajs_util_P3$javajs_util_P3$I$I$I(m, atoms[i], C$.atomTest, 0, 0, 0);
x += C$.atomTest.x;
y += C$.atomTest.y;
z += C$.atomTest.z;
}
x /= count;
y /= count;
z /= count;
while (x < -0.001  || x >= 1.001  ){
m.m03 += (x < 0  ? 1 : -1);
x += (x < 0  ? 1 : -1);
}
while (y < -0.001  || y >= 1.001  ){
m.m13 += (y < 0  ? 1 : -1);
y += (y < 0  ? 1 : -1);
}
while (z < -0.001  || z >= 1.001  ){
m.m23 += (z < 0  ? 1 : -1);
z += (z < 0  ? 1 : -1);
}
}, 1);

Clazz.newMeth(C$, 'rotateAxes$javajs_util_V3A$org_jmol_symmetry_UnitCell$javajs_util_P3$javajs_util_M3', function (vectors, unitcell, ptTemp, mTemp) {
var vRot=Clazz.array($I$(8), [3]);
this.getRotationScale$javajs_util_M3(mTemp);
for (var i=vectors.length; --i >= 0; ) {
ptTemp.setT$javajs_util_T3(vectors[i]);
unitcell.toFractional$javajs_util_T3$Z(ptTemp, true);
mTemp.rotate$javajs_util_T3(ptTemp);
unitcell.toCartesian$javajs_util_T3$Z(ptTemp, true);
vRot[i]=$I$(8).newV$javajs_util_T3(ptTemp);
}
return vRot;
});

Clazz.newMeth(C$, 'fcoord$javajs_util_T3', function (p) {
return C$.fc$F(p.x) + " " + C$.fc$F(p.y) + " " + C$.fc$F(p.z) ;
}, 1);

Clazz.newMeth(C$, 'fc$F', function (x) {
var xabs=Math.abs(x);
var m=(x < 0  ? "-" : "");
var x24=(C$.approxF$F(xabs * 24)|0);
if (x24 / 24.0 == ((x24 / 24.0)|0) ) return m + ((x24/24|0));
if (x24 % 8 != 0) return m + C$.twelfthsOf$F(x24 >> 1);
return (x24 == 0 ? "0" : x24 == 24 ? m + "1" : m + ((x24/8|0)) + "/3" );
}, 1);

Clazz.newMeth(C$, 'approxF$F', function (f) {
return $I$(7).approx$F$F(f, 100);
}, 1);

Clazz.newMeth(C$, 'getXYZFromRsVs$javajs_util_Matrix$javajs_util_Matrix$Z', function (rs, vs, is12ths) {
var ra=rs.getArray$();
var va=vs.getArray$();
var d=ra.length;
var s="";
for (var i=0; i < d; i++) {
s += ",";
for (var j=0; j < d; j++) {
var r=ra[i][j];
if (r != 0 ) {
s += (r < 0  ? "-" : s.endsWith$S(",") ? "" : "+") + (Math.abs(r) == 1  ? "" : "" + (Math.abs(r)|0)) + "x" + (j + 1) ;
}}
s += C$.xyzFraction12$F$Z$Z(((va[i][0] * (is12ths ? 1 : 12))|0), false, true);
}
return $I$(7,"rep$S$S$S",[s.substring$I(1), ",+", ","]);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return (this.rsvs == null  ? C$.superclazz.prototype.toString.apply(this, []) : C$.superclazz.prototype.toString.apply(this, []) + " " + this.rsvs.toString() );
});

Clazz.newMeth(C$, 'getMagneticOp$', function () {
return (this.magOp == 3.4028235E38  ? this.magOp=this.determinant3$() * this.timeReversal : this.magOp);
});

Clazz.newMeth(C$, 'setTimeReversal$I', function (magRev) {
this.timeReversal=magRev;
if (this.xyz.indexOf$S("m") >= 0) this.xyz=this.xyz.substring$I$I(0, this.xyz.indexOf$S("m"));
if (magRev != 0) {
this.xyz += (magRev == 1 ? ",m" : ",-m");
}});

Clazz.newMeth(C$, 'getCentering$', function () {
if (!this.isFinalized) this.doFinalize$();
if (this.centering == null  && !this.unCentered ) {
if (this.modDim == 0 && this.m00 == 1   && this.m11 == 1   && this.m22 == 1   && this.m01 == 0   && this.m02 == 0   && this.m10 == 0   && this.m12 == 0   && this.m20 == 0   && this.m21 == 0   && (this.m03 != 0  || this.m13 != 0   || this.m23 != 0  ) ) {
this.isCenteringOp=true;
this.centering=$I$(8).new3$F$F$F(this.m03, this.m13, this.m23);
} else {
this.unCentered=true;
this.centering=null;
}}return this.centering;
});

Clazz.newMeth(C$, 'fixMagneticXYZ$javajs_util_M4$S$Z', function (m, xyz, addMag) {
if (this.timeReversal == 0) return xyz;
var pt=xyz.indexOf$S("m");
pt-=((3 - this.timeReversal)/2|0);
xyz=(pt < 0 ? xyz : xyz.substring$I$I(0, pt));
if (!addMag) return xyz + (this.timeReversal > 0 ? " +1" : " -1");
var m2=$I$(4).newM4$javajs_util_M4(m);
m2.m03=m2.m13=m2.m23=0;
if (this.getMagneticOp$() < 0 ) m2.scale$F(-1);
xyz += "(" + $I$(7,"rep$S$S$S",[$I$(7,"rep$S$S$S",[$I$(7,"rep$S$S$S",[C$.getXYZFromMatrix$javajs_util_M4$Z$Z$Z(m2, false, false, false), "x", "mx"]), "y", "my"]), "z", "mz"]) + ")" ;
return xyz;
});

Clazz.newMeth(C$, 'getInfo$', function () {
if (this.info == null ) {
this.info=Clazz.new_($I$(9,1));
this.info.put$O$O("xyz", this.xyz);
if (this.centering != null ) this.info.put$O$O("centering", this.centering);
this.info.put$O$O("index", Integer.valueOf$I(this.index));
this.info.put$O$O("isCenteringOp", Boolean.valueOf$Z(this.isCenteringOp));
if (this.linearRotTrans != null ) this.info.put$O$O("linearRotTrans", this.linearRotTrans);
this.info.put$O$O("modulationDimension", Integer.valueOf$I(this.modDim));
this.info.put$O$O("matrix", $I$(4).newM4$javajs_util_M4(this));
if (this.magOp != 3.4028235E38 ) this.info.put$O$O("magOp", Float.valueOf$F(this.magOp));
this.info.put$O$O("id", Integer.valueOf$I(this.opId));
this.info.put$O$O("timeReversal", Integer.valueOf$I(this.timeReversal));
if (this.xyzOriginal != null ) this.info.put$O$O("xyzOriginal", this.xyzOriginal);
}return this.info;
});

C$.$static$=function(){C$.$static$=0;
C$.twelfths=Clazz.array(String, -1, ["0", "1/12", "1/6", "1/4", "1/3", "5/12", "1/2", "7/12", "2/3", "3/4", "5/6", "11/12"]);
C$.fortyeigths=Clazz.array(String, -1, ["0", "1/48", "1/24", "1/16", "1/12", "5/48", "1/8", "7/48", "1/6", "3/16", "5/24", "11/48", "1/4", "13/48", "7/24", "5/16", "1/3", "17/48", "3/8", "19/48", "5/12", "7/16", "11/24", "23/48", "1/2", "25/48", "13/24", "9/16", "7/12", "29/48", "15/24", "31/48", "2/3", "11/12", "17/16", "35/48", "3/4", "37/48", "19/24", "13/16", "5/6", "41/48", "7/8", "43/48", "11/12", "15/16", "23/24", "47/48"]);
C$.labelsXYZ=Clazz.array(String, -1, ["x", "y", "z"]);
C$.labelsXn=Clazz.array(String, -1, ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12", "x13"]);
C$.labelsXnSub=Clazz.array(String, -1, ["x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
