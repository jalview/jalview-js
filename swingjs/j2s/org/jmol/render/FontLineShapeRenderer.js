(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'javajs.util.P3i','javajs.util.P3','javajs.util.V3','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FontLineShapeRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pt0i=Clazz.new_($I$(1,1));
this.pt2i=Clazz.new_($I$(1,1));
this.s1=Clazz.new_($I$(1,1));
this.s2=Clazz.new_($I$(1,1));
this.pointT=Clazz.new_($I$(2,1));
this.pointT2=Clazz.new_($I$(2,1));
this.pointT3=Clazz.new_($I$(2,1));
this.vectorT=Clazz.new_($I$(3,1));
this.vectorT2=Clazz.new_($I$(3,1));
this.vectorT3=Clazz.new_($I$(3,1));
this.draw000=true;
this.endcap=3;
this.pt0=Clazz.new_($I$(2,1));
this.pt1=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['draw000','dotsOrDashes','asLineOnly'],'B',['endcap'],'F',['imageFontScaling'],'I',['width'],'H',['colixA','colixB'],'O',['tickA','javajs.util.P3','+tickB','+tickAs','+tickBs','font3d','org.jmol.util.Font','pt0i','javajs.util.P3i','+pt2i','+s1','+s2','pointT','javajs.util.P3','+pointT2','+pointT3','vectorT','javajs.util.V3','+vectorT2','+vectorT3','tickInfo','org.jmol.modelset.TickInfo','pt0','javajs.util.P3','+pt1','dashDots','int[]']]
,['O',['dashes','int[]','+hDashes','+ndots','+sixdots','+fourdots','+twodots']]]

Clazz.newMeth(C$, 'getDiameter$I$I', function (z, mad10OrPixels) {
var diameter;
var isMad10=(mad10OrPixels > 20);
switch (this.exportType) {
case 1:
diameter=(isMad10 ? mad10OrPixels : (Math.floor(this.vwr.tm.unscaleToScreen$F$F(z, mad10OrPixels * 2 / 10.0) * 1000)|0));
break;
default:
if (isMad10) {
diameter=(this.vwr.tm.scaleToScreen$I$I(z, (mad10OrPixels/10|0))|0);
} else {
if (this.g3d.isAntialiased$()) mad10OrPixels+=mad10OrPixels;
diameter=mad10OrPixels;
}}
return diameter;
});

Clazz.newMeth(C$, 'renderLine$javajs_util_P3$javajs_util_P3$I$Z', function (p0, p1, diameter, drawTicks) {
if (diameter < 0) this.g3d.drawDashedLineBits$I$I$javajs_util_P3$javajs_util_P3(8, 4, p0, p1);
 else this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(this.endcap, diameter, p0, p1);
if (!drawTicks || this.tickInfo == null  ) return;
this.checkTickTemps$();
this.tickAs.setT$javajs_util_T3(p0);
this.tickBs.setT$javajs_util_T3(p1);
this.drawTicks$I$Z(diameter, true);
});

Clazz.newMeth(C$, 'checkTickTemps$', function () {
if (this.tickA == null ) {
this.tickA=Clazz.new_($I$(2,1));
this.tickB=Clazz.new_($I$(2,1));
this.tickAs=Clazz.new_($I$(2,1));
this.tickBs=Clazz.new_($I$(2,1));
}});

Clazz.newMeth(C$, 'drawTicks$I$Z', function (diameter, withLabels) {
if (Float.isNaN$F(this.tickInfo.first)) this.tickInfo.first=0;
p$1.drawTicks2$F$I$I$SA.apply(this, [this.tickInfo.ticks.x, 8, diameter, (!withLabels ? null : this.tickInfo.tickLabelFormats == null  ? Clazz.array(String, -1, ["%0.2f"]) : this.tickInfo.tickLabelFormats)]);
p$1.drawTicks2$F$I$I$SA.apply(this, [this.tickInfo.ticks.y, 4, diameter, null]);
p$1.drawTicks2$F$I$I$SA.apply(this, [this.tickInfo.ticks.z, 2, diameter, null]);
});

Clazz.newMeth(C$, 'drawTicks2$F$I$I$SA', function (dx, length, diameter, formats) {
if (dx == 0 ) return;
if (this.g3d.isAntialiased$()) length*=2;
this.vectorT2.set$F$F$F(this.tickBs.x, this.tickBs.y, 0);
this.vectorT.set$F$F$F(this.tickAs.x, this.tickAs.y, 0);
this.vectorT2.sub$javajs_util_T3(this.vectorT);
if (this.vectorT2.length$() < 50 ) return;
var signFactor=this.tickInfo.signFactor;
this.vectorT.sub2$javajs_util_T3$javajs_util_T3(this.tickB, this.tickA);
var d0=this.vectorT.length$();
if (this.tickInfo.scale != null ) {
if (Float.isNaN$F(this.tickInfo.scale.x)) {
var a=this.vwr.getUnitCellInfo$I(0);
if (!Float.isNaN$F(a)) this.vectorT.set$F$F$F(this.vectorT.x / a, this.vectorT.y / this.vwr.getUnitCellInfo$I(1), this.vectorT.z / this.vwr.getUnitCellInfo$I(2));
} else {
this.vectorT.set$F$F$F(this.vectorT.x * this.tickInfo.scale.x, this.vectorT.y * this.tickInfo.scale.y, this.vectorT.z * this.tickInfo.scale.z);
}}var d=this.vectorT.length$() + 1.0E-4 * dx;
if (d < dx ) return;
var f=dx / d * d0 / d;
this.vectorT.scale$F(f);
var dz=(this.tickBs.z - this.tickAs.z) / (d / dx);
d += this.tickInfo.first;
var p=((Math.floor(this.tickInfo.first / dx)|0)) * dx - this.tickInfo.first;
this.pointT.scaleAdd2$F$javajs_util_T3$javajs_util_T3(p / dx, this.vectorT, this.tickA);
p += this.tickInfo.first;
var z=this.tickAs.z;
if (diameter < 0) diameter=1;
this.vectorT2.set$F$F$F(-this.vectorT2.y, this.vectorT2.x, 0);
this.vectorT2.scale$F(length / this.vectorT2.length$());
var ptRef=this.tickInfo.reference;
if (ptRef == null ) {
this.pointT3.setT$javajs_util_T3(this.vwr.getBoundBoxCenter$());
if (this.vwr.g.axesMode == 603979809) {
this.pointT3.add3$F$F$F(1, 1, 1);
}} else {
this.pointT3.setT$javajs_util_T3(ptRef);
}this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.pointT3, this.pt2i);
var horizontal=(Math.abs(this.vectorT2.x / this.vectorT2.y) < 0.2 );
var centerX=horizontal;
var centerY=!horizontal;
var rightJustify=!centerX && (this.vectorT2.x < 0 ) ;
var drawLabel=(formats != null  && formats.length > 0 );
var x;
var y;
var val=Clazz.array(java.lang.Object, [1]);
var i=(this.draw000 ? 0 : -1);
while (p < d ){
if (p >= this.tickInfo.first ) {
this.pointT2.setT$javajs_util_T3(this.pointT);
this.tm.transformPt3f$javajs_util_T3$javajs_util_P3(this.pointT2, this.pointT2);
this.drawLine$I$I$I$I$I$I$I((Math.floor(this.pointT2.x)|0), (Math.floor(this.pointT2.y)|0), (z|0), (x=(Math.floor(this.pointT2.x + this.vectorT2.x)|0)), (y=(Math.floor(this.pointT2.y + this.vectorT2.y)|0)), (z|0), diameter);
if (drawLabel && (this.draw000 || p != 0  ) ) {
val[0]=Float.valueOf$F((p == 0  ? 0 : p * signFactor));
var s=$I$(4).sprintf$S$S$OA(formats[i % formats.length], "f", val);
this.drawString$I$I$I$I$Z$Z$Z$I$S(x, y, (z|0), 4, rightJustify, centerX, centerY, (Math.floor(this.pointT2.y)|0), s);
}}this.pointT.add$javajs_util_T3(this.vectorT);
p += dx;
z += dz;
i++;
}
}, p$1);

Clazz.newMeth(C$, 'drawLine$I$I$I$I$I$I$I', function (x1, y1, z1, x2, y2, z2, diameter) {
return this.drawLine2$I$I$I$I$I$I$I(x1, y1, z1, x2, y2, z2, diameter);
});

Clazz.newMeth(C$, 'drawLine2$I$I$I$I$I$I$I', function (x1, y1, z1, x2, y2, z2, diameter) {
this.pt0.set$F$F$F(x1, y1, z1);
this.pt1.set$F$F$F(x2, y2, z2);
if (this.dotsOrDashes) {
if (this.dashDots != null ) this.drawDashed$I$I$I$I$I$I$IA(x1, y1, z1, x2, y2, z2, this.dashDots);
} else {
if (diameter < 0) {
this.g3d.drawDashedLineBits$I$I$javajs_util_P3$javajs_util_P3(8, 4, this.pt0, this.pt1);
return 1;
}this.g3d.fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3(2, diameter, this.pt0, this.pt1);
}return ((diameter + 1)/2|0);
});

Clazz.newMeth(C$, 'drawString$I$I$I$I$Z$Z$Z$I$S', function (x, y, z, radius, rightJustify, centerX, centerY, yRef, sVal) {
if (sVal == null ) return;
var width=this.font3d.stringWidth$S(sVal);
var height=this.font3d.getAscent$();
var xT=x;
if (rightJustify) xT-=(radius/2|0) + 2 + width;
 else if (centerX) xT-=(radius/2|0) + 2 + (width/2|0);
 else xT+=(radius/2|0) + 2;
var yT=y;
if (centerY) yT+=(height/2|0);
 else if (yRef == 0 || yRef < y ) yT+=height;
 else yT-=(radius/2|0);
var zT=z - radius - 2 ;
if (zT < 1) zT=1;
this.g3d.drawString$S$org_jmol_util_Font$I$I$I$I$H(sVal, this.font3d, xT, yT, zT, zT, 0);
});

Clazz.newMeth(C$, 'drawDashed$I$I$I$I$I$I$IA', function (xA, yA, zA, xB, yB, zB, array) {
if (array == null  || this.width < 0 ) return;
var f=array[0];
var dx=xB - xA;
var dy=yB - yA;
var dz=zB - zA;
var n=0;
var isNdots=(array === C$.ndots );
var isDots=(isNdots || array === C$.sixdots  );
if (isDots) {
var d2=(dx * dx + dy * dy) / (this.width * this.width);
if (isNdots) {
f=(Math.sqrt(d2) / 1.5);
n=(f|0) + 2;
} else if (d2 < 8 ) {
array=C$.twodots;
} else if (d2 < 32 ) {
array=C$.fourdots;
}}var ptS=array[1];
var ptE=array[2];
var colixS=this.colixA;
var colixE=(ptE == 0 ? this.colixB : this.colixA);
if (n == 0) n=array.length;
for (var i=0, pt=3; pt < n; pt++) {
i=(isNdots ? i + 1 : array[pt]);
var xS=(Math.floor(xA + dx * i / f)|0);
var yS=(Math.floor(yA + dy * i / f)|0);
var zS=(Math.floor(zA + dz * i / f)|0);
if (isDots) {
this.s1.set$I$I$I(xS, yS, zS);
if (pt == ptS) this.g3d.setC$H(this.colixA);
 else if (pt == ptE) this.g3d.setC$H(this.colixB);
this.g3d.fillSphereI$I$javajs_util_P3i(this.width, this.s1);
continue;
}if (pt == ptS) colixS=this.colixB;
i=array[++pt];
if (pt == ptE) colixE=this.colixB;
var xE=(Math.floor(xA + dx * i / f)|0);
var yE=(Math.floor(yA + dy * i / f)|0);
var zE=(Math.floor(zA + dz * i / f)|0);
this.fillCylinder$H$H$B$I$I$I$I$I$I$I(colixS, colixE, 2, this.width, xS, yS, zS, xE, yE, zE);
}
});

Clazz.newMeth(C$, 'fillCylinder$H$H$B$I$I$I$I$I$I$I', function (colixA, colixB, endcaps, diameter, xA, yA, zA, xB, yB, zB) {
if (this.asLineOnly) this.g3d.drawLine$H$H$I$I$I$I$I$I(colixA, colixB, xA, yA, zA, xB, yB, zB);
 else this.g3d.fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I(colixA, colixB, endcaps, (!this.isExport || this.mad == 1  ? diameter : this.mad), xA, yA, zA, xB, yB, zB);
});

C$.$static$=function(){C$.$static$=0;
C$.dashes=Clazz.array(Integer.TYPE, -1, [12, 0, 0, 2, 5, 7, 10]);
C$.hDashes=Clazz.array(Integer.TYPE, -1, [10, 7, 6, 1, 3, 4, 6, 7, 9]);
C$.ndots=Clazz.array(Integer.TYPE, -1, [0, 3, 1000]);
C$.sixdots=Clazz.array(Integer.TYPE, -1, [12, 3, 6, 1, 3, 5, 7, 9, 11]);
C$.fourdots=Clazz.array(Integer.TYPE, -1, [13, 3, 5, 2, 5, 8, 11]);
C$.twodots=Clazz.array(Integer.TYPE, -1, [12, 3, 4, 3, 9]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
