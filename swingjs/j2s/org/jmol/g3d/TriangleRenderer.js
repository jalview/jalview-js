(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={},I$=[[0,'org.jmol.util.Rgb16','org.jmol.util.GData']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TriangleRenderer", null, 'org.jmol.g3d.PrecisionRenderer', 'org.jmol.g3d.G3DRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ax=Clazz.array(Integer.TYPE, [3]);
this.ay=Clazz.array(Integer.TYPE, [3]);
this.az=Clazz.array(Integer.TYPE, [3]);
this.aa=Clazz.array(Float.TYPE, [64]);
this.bb=Clazz.array(Float.TYPE, [64]);
this.axW=Clazz.array(Integer.TYPE, [64]);
this.azW=Clazz.array(Integer.TYPE, [64]);
this.axE=Clazz.array(Integer.TYPE, [64]);
this.azE=Clazz.array(Integer.TYPE, [64]);
this.rgb16t1=Clazz.new_($I$(1,1));
this.rgb16t2=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['g3d','org.jmol.g3d.Graphics3D','ax','int[]','+ay','+az','aa','float[]','+bb','axW','int[]','+azW','+axE','+azE','rgb16sW','org.jmol.util.Rgb16[]','+rgb16sE','+rgb16sGouraud','rgb16t1','org.jmol.util.Rgb16','+rgb16t2']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_api_JmolRendererInterface$org_jmol_util_GData', function (g3d, gdata) {
try {
this.rgb16sW=Clazz.array($I$(1), [64]);
this.rgb16sE=Clazz.array($I$(1), [64]);
for (var i=64; --i >= 0; ) {
this.rgb16sW[i]=Clazz.new_($I$(1,1));
this.rgb16sE[i]=Clazz.new_($I$(1,1));
}
this.g3d=g3d;
this.rgb16sGouraud=Clazz.array($I$(1), [3]);
for (var i=3; --i >= 0; ) this.rgb16sGouraud[i]=Clazz.new_($I$(1,1));

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'reallocRgb16s$org_jmol_util_Rgb16A$I', function (rgb16s, n) {
var t=Clazz.array($I$(1), [n]);
System.arraycopy$O$I$O$I$I(rgb16s, 0, t, 0, rgb16s.length);
for (var i=rgb16s.length; i < n; ++i) t[i]=Clazz.new_($I$(1,1));

return t;
}, p$1);

Clazz.newMeth(C$, 'setGouraud$I$I$I', function (rgbA, rgbB, rgbC) {
this.rgb16sGouraud[0].setInt$I(rgbA);
this.rgb16sGouraud[1].setInt$I(rgbB);
this.rgb16sGouraud[2].setInt$I(rgbC);
});

Clazz.newMeth(C$, 'fillTriangle$javajs_util_P3i$javajs_util_P3i$javajs_util_P3i$Z', function (screenA, screenB, screenC, useGouraud) {
this.ax[0]=screenA.x;
this.ax[1]=screenB.x;
this.ax[2]=screenC.x;
this.ay[0]=screenA.y;
this.ay[1]=screenB.y;
this.ay[2]=screenC.y;
this.az[0]=screenA.z;
this.az[1]=screenB.z;
this.az[2]=screenC.z;
if (this.az[0] <= 1 || this.az[1] <= 1  || this.az[2] <= 1 ) return;
var cc0=this.g3d.clipCode3$I$I$I(this.ax[0], this.ay[0], this.az[0]);
var cc1=this.g3d.clipCode3$I$I$I(this.ax[1], this.ay[1], this.az[1]);
var cc2=this.g3d.clipCode3$I$I$I(this.ax[2], this.ay[2], this.az[2]);
var c=(cc0 | cc1 | cc2 );
var isClipped=(c != 0);
if (isClipped) {
if (c == -1 || (cc0 & cc1 & cc2 ) != 0 ) {
return;
}}var iMinY=0;
if (this.ay[1] < this.ay[iMinY]) iMinY=1;
if (this.ay[2] < this.ay[iMinY]) iMinY=2;
var iMidY=(iMinY + 1) % 3;
var iMaxY=(iMinY + 2) % 3;
if (this.ay[iMidY] > this.ay[iMaxY]) {
var t=iMidY;
iMidY=iMaxY;
iMaxY=t;
}var yMin=this.ay[iMinY];
var yMid=this.ay[iMidY];
var yMax=this.ay[iMaxY];
var nLines=yMax - yMin + 1;
if (nLines > this.g3d.height * 3) return;
if (nLines > this.axW.length) {
var n=(nLines + 31) & ~31;
this.axW=Clazz.array(Integer.TYPE, [n]);
this.azW=Clazz.array(Integer.TYPE, [n]);
this.axE=Clazz.array(Integer.TYPE, [n]);
this.azE=Clazz.array(Integer.TYPE, [n]);
this.aa=Clazz.array(Float.TYPE, [n]);
this.bb=Clazz.array(Float.TYPE, [n]);
this.rgb16sW=p$1.reallocRgb16s$org_jmol_util_Rgb16A$I.apply(this, [this.rgb16sW, n]);
this.rgb16sE=p$1.reallocRgb16s$org_jmol_util_Rgb16A$I.apply(this, [this.rgb16sE, n]);
}var gouraudW;
var gouraudE;
if (useGouraud) {
gouraudW=this.rgb16sW;
gouraudE=this.rgb16sE;
} else {
gouraudW=gouraudE=null;
}var dyMidMin=yMid - yMin;
if (dyMidMin == 0) {
if (this.ax[iMidY] < this.ax[iMinY]) {
var t=iMidY;
iMidY=iMinY;
iMinY=t;
}p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines, iMinY, iMaxY, this.axW, this.azW, 0, gouraudW]);
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines, iMidY, iMaxY, this.axE, this.azE, 0, gouraudE]);
} else if (yMid == yMax) {
if (this.ax[iMaxY] < this.ax[iMidY]) {
var t=iMidY;
iMidY=iMaxY;
iMaxY=t;
}p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines, iMinY, iMidY, this.axW, this.azW, 0, gouraudW]);
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines, iMinY, iMaxY, this.axE, this.azE, 0, gouraudE]);
} else {
var dxMaxMin=this.ax[iMaxY] - this.ax[iMinY];
var roundFactor;
roundFactor=(function(a,f){return f.apply(null,a)})([(nLines/2|0)],$I$(2).roundInt$I);
if (dxMaxMin < 0) roundFactor=-roundFactor;
var axSplit=this.ax[iMinY] + ((dxMaxMin * dyMidMin + roundFactor)/nLines|0);
if (axSplit < this.ax[iMidY]) {
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines, iMinY, iMaxY, this.axW, this.azW, 0, gouraudW]);
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [dyMidMin + 1, iMinY, iMidY, this.axE, this.azE, 0, gouraudE]);
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines - dyMidMin, iMidY, iMaxY, this.axE, this.azE, dyMidMin, gouraudE]);
} else {
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [dyMidMin + 1, iMinY, iMidY, this.axW, this.azW, 0, gouraudW]);
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines - dyMidMin, iMidY, iMaxY, this.axW, this.azW, dyMidMin, gouraudW]);
p$1.generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A.apply(this, [nLines, iMinY, iMaxY, this.axE, this.azE, 0, gouraudE]);
}}this.g3d.setZMargin$I(5);
var pass2Row=this.g3d.pass2Flag01;
var pass2Off=1 - pass2Row;
var xW;
var i=0;
if (yMin < 0) {
nLines+=yMin;
i-=yMin;
yMin=0;
}if (yMin + nLines > this.g3d.height) nLines=this.g3d.height - yMin;
if (useGouraud) {
if (isClipped) {
for (; --nLines >= pass2Row; ++yMin, ++i) {
var pixelCount=this.axE[i] - (xW=this.axW[i]) + pass2Off;
if (pixelCount > 0) this.g3d.plotPixelsClippedRaster$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16(pixelCount, xW, yMin, this.azW[i], this.azE[i], this.rgb16sW[i], this.rgb16sE[i]);
}
} else {
for (; --nLines >= pass2Row; ++yMin, ++i) {
var pixelCount=this.axE[i] - (xW=this.axW[i]) + pass2Off;
if (pass2Row == 1 && pixelCount < 0 ) {
pixelCount=1;
xW--;
}if (pixelCount > 0) this.g3d.plotPixelsUnclippedRaster$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16(pixelCount, xW, yMin, this.azW[i], this.azE[i], this.rgb16sW[i], this.rgb16sE[i]);
}
}} else {
if (isClipped) {
for (; --nLines >= pass2Row; ++yMin, ++i) {
var pixelCount=this.axE[i] - (xW=this.axW[i]) + pass2Off;
if (pixelCount > 0) this.g3d.plotPixelsClippedRasterBits$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16$F$F(pixelCount, xW, yMin, this.azW[i], this.azE[i], null, null, this.aa[i], this.bb[i]);
}
} else {
for (; --nLines >= pass2Row; ++yMin, ++i) {
var pixelCount=this.axE[i] - (xW=this.axW[i]) + pass2Off;
if (pass2Row == 1 && pixelCount < 0 ) {
pixelCount=1;
xW--;
}if (pixelCount > 0) this.g3d.plotPixelsUnclippedRasterBits$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16$F$F(pixelCount, xW, yMin, null, null, this.aa[i], this.bb[i]);
}
}}this.g3d.setZMargin$I(0);
});

Clazz.newMeth(C$, 'generateRaster$I$I$I$IA$IA$I$org_jmol_util_Rgb16A', function (dy, iN, iS, axRaster, azRaster, iRaster, gouraud) {
var xN=this.ax[iN];
var xS=this.ax[iS];
var dx=xS - xN;
var xCurrent=xN;
var xIncrement;
var width;
var errorTerm;
if (dx >= 0) {
xIncrement=1;
width=dx;
errorTerm=0;
} else {
xIncrement=-1;
width=-dx;
errorTerm=1 - dy;
}var xMajorIncrement;
var xMajorError;
if (width <= dy) {
xMajorIncrement=0;
xMajorError=width;
} else {
xMajorIncrement=(function(a,f){return f.apply(null,a)})([(dx/dy|0)],$I$(2).roundInt$I);
xMajorError=width % dy;
}this.setRastAB$I$I$I$I(this.ay[iN], this.az[iN], this.ay[iS], this.az[iS]);
var a0=this.a;
var b0=this.b;
var isEast=(axRaster === this.axE );
for (var y=0, zy=this.ay[iN], lastY=dy - 1, i=iRaster; y <= lastY; ++i, ++y, ++zy) {
if (i == 0 || i > iRaster ) {
axRaster[i]=(y == lastY ? this.ax[iS] : xCurrent);
azRaster[i]=this.getZCurrent$F$F$I(a0, b0, zy);
if (isEast) {
this.setRastAB$I$I$I$I(this.axW[i], this.azW[i], axRaster[i], azRaster[i]);
this.aa[i]=this.a;
this.bb[i]=this.b;
}}xCurrent+=xMajorIncrement;
errorTerm+=xMajorError;
if (errorTerm > 0) {
xCurrent+=xIncrement;
errorTerm-=dy;
}}
if (gouraud != null ) {
var rgb16Base=this.rgb16t1;
rgb16Base.setRgb$org_jmol_util_Rgb16(this.rgb16sGouraud[iN]);
var rgb16Increment=this.rgb16t2;
rgb16Increment.diffDiv$org_jmol_util_Rgb16$org_jmol_util_Rgb16$I(this.rgb16sGouraud[iS], rgb16Base, dy);
for (var i=iRaster, iMax=iRaster + dy; i < iMax; ++i) gouraud[i].setAndIncrement$org_jmol_util_Rgb16$org_jmol_util_Rgb16(rgb16Base, rgb16Increment);

}}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
