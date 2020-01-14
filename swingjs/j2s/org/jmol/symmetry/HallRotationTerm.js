(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),I$=[[0,'javajs.util.M4','org.jmol.symmetry.HallRotation','org.jmol.util.Logger','org.jmol.symmetry.HallTranslation','javajs.util.SB','org.jmol.symmetry.SymmetryOperation']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HallRotationTerm");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inputCode=null;
this.primitiveCode=null;
this.lookupCode=null;
this.translationString=null;
this.rotation=null;
this.translation=null;
this.seitzMatrix12ths=null;
this.isImproper=false;
this.order=0;
this.axisType='\0';
this.diagonalReferenceAxis='\0';
this.allPositive=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.seitzMatrix12ths=Clazz.new_($I$(1));
this.axisType="\u0000";
this.diagonalReferenceAxis="\u0000";
this.allPositive=true;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_symmetry_HallInfo$S$I$C', function (hallInfo, code, prevOrder, prevAxisType) {
C$.$init$.apply(this);
this.inputCode=code;
code += "   ";
if (code.charAt$I(0) == "-") {
this.isImproper=true;
code=code.substring$I(1);
}this.primitiveCode="";
this.order=(code.charCodeAt$I(0)) - 48;
this.diagonalReferenceAxis="\u0000";
this.axisType="\u0000";
var ptr=2;
var c;
switch ((c=code.charAt$I(1)).$c()) {
case 120:
case 121:
case 122:
switch ((code.charCodeAt$I(2))) {
case 39:
case 34:
this.diagonalReferenceAxis=c;
c=code.charAt$I(2);
ptr++;
}
case 42:
this.axisType=c;
break;
case 39:
case 34:
this.axisType=c;
switch ((code.charCodeAt$I(2))) {
case 120:
case 121:
case 122:
this.diagonalReferenceAxis=code.charAt$I(2);
ptr++;
break;
default:
this.diagonalReferenceAxis=prevAxisType;
}
break;
default:
this.axisType=(this.order == 1 ? "_" : hallInfo.nRotations == 0 ? "z" : hallInfo.nRotations == 2 ? "*" : prevOrder == 2 || prevOrder == 4  ? "x" : "\'");
code=code.substring$I$I(0, 1) + this.axisType + code.substring$I(1) ;
}
this.primitiveCode += (this.axisType == "_" ? "1" : code.substring$I$I(0, 2));
if (this.diagonalReferenceAxis != "\u0000") {
code=code.substring$I$I(0, 1) + this.diagonalReferenceAxis + this.axisType + code.substring$I(ptr) ;
this.primitiveCode += this.diagonalReferenceAxis;
ptr=3;
}this.lookupCode=code.substring$I$I(0, ptr);
this.rotation=$I$(2).lookup$S(this.lookupCode);
if (this.rotation == null ) {
$I$(3).error$S("Rotation lookup could not find " + this.inputCode + " ? " + this.lookupCode );
return;
}this.translation=Clazz.new_($I$(4).c$$C$javajs_util_P3i,["\u0000", null]);
this.translationString="";
var len=code.length$();
for (var i=ptr; i < len; i++) {
var translationCode=code.charAt$I(i);
var t=$I$(4).getHallTranslation$C$I(translationCode, this.order);
if (t != null ) {
this.translationString += "" + t.translationCode;
this.translation.rotationShift12ths+=t.rotationShift12ths;
this.translation.vectorShift12ths.add$javajs_util_T3i(t.vectorShift12ths);
}}
this.primitiveCode=(this.isImproper ? "-" : "") + this.primitiveCode + this.translationString ;
this.seitzMatrix12ths.setM4$javajs_util_M4(this.isImproper ? this.rotation.seitzMatrixInv : this.rotation.seitzMatrix);
this.seitzMatrix12ths.m03=this.translation.vectorShift12ths.x;
this.seitzMatrix12ths.m13=this.translation.vectorShift12ths.y;
this.seitzMatrix12ths.m23=this.translation.vectorShift12ths.z;
switch (this.axisType.$c()) {
case 120:
this.seitzMatrix12ths.m03 += this.translation.rotationShift12ths;
break;
case 121:
this.seitzMatrix12ths.m13 += this.translation.rotationShift12ths;
break;
case 122:
this.seitzMatrix12ths.m23 += this.translation.rotationShift12ths;
break;
}
if (hallInfo.vectorCode.length$() > 0) {
var m1=$I$(1).newM4$javajs_util_M4(null);
var m2=$I$(1).newM4$javajs_util_M4(null);
var v=hallInfo.vector12ths;
m1.m03=v.x;
m1.m13=v.y;
m1.m23=v.z;
m2.m03=-v.x;
m2.m13=-v.y;
m2.m23=-v.z;
this.seitzMatrix12ths.mul2$javajs_util_M4$javajs_util_M4(m1, this.seitzMatrix12ths);
this.seitzMatrix12ths.mul$javajs_util_M4(m2);
}if ($I$(3).debugging) {
$I$(3).debug$S("code = " + code + "; primitive code =" + this.primitiveCode + "\n Seitz Matrix(12ths):" + this.seitzMatrix12ths );
}}, 1);

Clazz.newMeth(C$, 'dumpInfo$S', function (vectorCode) {
var sb=Clazz.new_($I$(5));
sb.append$S("\ninput code: ").append$S(this.inputCode).append$S("; primitive code: ").append$S(this.primitiveCode).append$S("\norder: ").appendI$I(this.order).append$S(this.isImproper ? " (improper axis)" : "");
if (this.axisType != "_") {
sb.append$S("; axisType: ").appendC$C(this.axisType);
if (this.diagonalReferenceAxis != "\u0000") sb.appendC$C(this.diagonalReferenceAxis);
}if (this.translationString.length$() > 0) sb.append$S("; translation: ").append$S(this.translationString);
if (vectorCode.length$() > 0) sb.append$S("; vector offset: ").append$S(vectorCode);
if (this.rotation != null ) sb.append$S("\noperator: ").append$S(this.getXYZ$Z(this.allPositive)).append$S("\nSeitz matrix:\n").append$S($I$(6).dumpSeitz$javajs_util_M4$Z(this.seitzMatrix12ths, false));
return sb.toString();
});

Clazz.newMeth(C$, 'getXYZ$Z', function (allPositive) {
return $I$(6).getXYZFromMatrix$javajs_util_M4$Z$Z$Z(this.seitzMatrix12ths, true, allPositive, true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
