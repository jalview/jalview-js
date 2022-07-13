(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.surfacetool"),I$=[[0,'javajs.util.P4','javajs.util.P3','javajs.util.Measure','javajs.util.V3']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Slice");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.leftPlane=Clazz.new_($I$(1,1));
this.middle=Clazz.new_($I$(1,1));
this.rightPlane=Clazz.new_($I$(1,1));
this.boundBoxNegCorner=Clazz.new_($I$(2,1));
this.boundBoxPosCorner=Clazz.new_($I$(2,1));
this.boundBoxCenter=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['F',['angleXY','anglefromZ','position','thickness','diagonal'],'O',['leftPlane','javajs.util.P4','+middle','+rightPlane','boundBoxNegCorner','javajs.util.P3','+boundBoxPosCorner','+boundBoxCenter']]]

Clazz.newMeth(C$, 'makePlane$F$F$F$javajs_util_P4', function (length, angleXY, anglefromZ, result) {
result.set4$F$F$F$F((Math.cos(angleXY) * Math.sin(anglefromZ)), (Math.sin(angleXY) * Math.sin(anglefromZ)), (Math.cos(anglefromZ)), -length);
}, 1);

Clazz.newMeth(C$, 'setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z', function (angleXY, anglefromZ, position, thickness, boundBoxCenter, boundBoxVec, useMolecular) {
if (angleXY >= 0  && angleXY < 3.141592653589793  ) {
this.angleXY=angleXY;
} else {
var fix=(Math.floor(angleXY / 3.141592653589793));
this.angleXY=(angleXY - fix * 3.141592653589793);
}if (anglefromZ >= 0  && anglefromZ < 3.141592653589793  ) {
this.anglefromZ=anglefromZ;
} else {
var fix=Math.floor(anglefromZ / 3.141592653589793);
this.anglefromZ=(anglefromZ - fix * 3.141592653589793);
}this.position=position;
this.thickness=thickness;
this.boundBoxCenter.setT$javajs_util_T3(boundBoxCenter);
this.boundBoxNegCorner.sub2$javajs_util_T3$javajs_util_T3(boundBoxCenter, boundBoxVec);
this.boundBoxPosCorner.add2$javajs_util_T3$javajs_util_T3(boundBoxCenter, boundBoxVec);
this.diagonal=this.boundBoxPosCorner.distance$javajs_util_T3(this.boundBoxNegCorner);
C$.makePlane$F$F$F$javajs_util_P4(position, angleXY, anglefromZ, this.middle);
if (!useMolecular) {
var pt=$I$(2).new3$F$F$F(this.middle.x, this.middle.y, this.middle.z);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(-this.middle.w, pt, boundBoxCenter);
$I$(3,"getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4",[pt, $I$(4).new3$F$F$F(this.middle.x, this.middle.y, this.middle.z), this.middle]);
}this.leftPlane.set4$F$F$F$F(this.middle.x, this.middle.y, this.middle.z, this.middle.w);
this.leftPlane.w += thickness / 2;
this.rightPlane.set4$F$F$F$F(this.middle.x, this.middle.y, this.middle.z, this.middle.w);
this.rightPlane.w -= thickness / 2;
System.out.println$S(new Float(thickness).toString() + " left:" + this.leftPlane + " right:" + this.rightPlane );
});

Clazz.newMeth(C$, 'getSlice$', function () {
return this;
});

Clazz.newMeth(C$, 'getMiddle$', function () {
return this.middle;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
