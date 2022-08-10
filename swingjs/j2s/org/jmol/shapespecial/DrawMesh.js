(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),I$=[[0,['org.jmol.shapespecial.Draw','.EnumDrawType'],'javajs.util.V3','javajs.util.BS','javajs.util.P3','javajs.util.AU','org.jmol.util.BSUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DrawMesh", null, 'org.jmol.shape.Mesh');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scale=1;
},1);

C$.$fields$=[['Z',['isFixed','isVector','noHead','isBarb','isScaleSet'],'F',['drawArrowScale','scale'],'I',['drawVertexCount'],'O',['bsMeshesVisible','javajs.util.BS','+modelFlags','drawType','org.jmol.shapespecial.Draw.EnumDrawType','drawTypes','org.jmol.shapespecial.Draw.EnumDrawType[]','ptCenters','javajs.util.P3[]','axis','javajs.util.V3','axes','javajs.util.V3[]','drawVertexCounts','int[]']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$S$H$I', function (vwr, thisID, colix, index) {
Clazz.super_(C$, this);
this.drawType=$I$(1).NONE;
this.axis=$I$(2).new3$F$F$F(1, 0, 0);
this.bsMeshesVisible=Clazz.new_($I$(3,1));
this.mesh1$org_jmol_viewer_Viewer$S$H$I(vwr, thisID, colix, index);
}, 1);

Clazz.newMeth(C$, 'clear$S', function (meshType) {
this.clearMesh$S(meshType);
this.scale=1;
this.isScaleSet=false;
});

Clazz.newMeth(C$, 'setCenters$', function () {
if (this.ptCenters == null ) this.setCenter$I(-1);
 else for (var i=this.ptCenters.length; --i >= 0; ) this.setCenter$I(i);

});

Clazz.newMeth(C$, 'setCenter$I', function (iModel) {
var center=$I$(4).new3$F$F$F(0, 0, 0);
var iptlast=-1;
var ipt=0;
var n=0;
for (var i=this.pc; --i >= 0; ) {
if (iModel >= 0 && i != iModel  || this.pis[i] == null  ) continue;
iptlast=-1;
for (var iV=(this.drawType === $I$(1).POLYGON ) ? 3 : this.pis[i].length; --iV >= 0; ) {
ipt=this.pis[i][iV];
if (ipt == iptlast) continue;
iptlast=ipt;
center.add$javajs_util_T3(this.vs[ipt]);
n++;
}
if (n > 0 && (i == iModel || i == 0 ) ) {
center.scale$F(1.0 / n);
if (this.mat4 != null ) this.mat4.rotTrans$javajs_util_T3(center);
break;
}}
if (iModel < 0) {
this.ptCenter.setT$javajs_util_T3(center);
} else {
this.ptCenters[iModel]=center;
}});

Clazz.newMeth(C$, 'offset$javajs_util_V3', function (offset) {
this.rotateTranslate$javajs_util_Quat$javajs_util_T3$Z(null, offset, false);
this.setCenters$();
});

Clazz.newMeth(C$, 'deleteAtoms$I', function (modelIndex) {
if (modelIndex >= this.pc) return;
this.pc--;
this.pis=$I$(5).deleteElements$O$I$I(this.pis, modelIndex, 1);
this.drawTypes=$I$(5).deleteElements$O$I$I(this.drawTypes, modelIndex, 1);
this.drawVertexCounts=$I$(5).deleteElements$O$I$I(this.drawVertexCounts, modelIndex, 1);
this.ptCenters=$I$(5).deleteElements$O$I$I(this.ptCenters, modelIndex, 1);
this.axes=$I$(5).deleteElements$O$I$I(this.axes, modelIndex, 1);
var bs=$I$(6).newAndSetBit$I(modelIndex);
$I$(6).deleteBits$javajs_util_BS$javajs_util_BS(this.modelFlags, bs);
});

Clazz.newMeth(C$, 'isRenderScalable$', function () {
switch (this.drawType) {
case $I$(1).ARROW:
return (this.connectedAtoms != null );
case $I$(1).ARC:
case $I$(1).CIRCLE:
case $I$(1).CIRCULARPLANE:
return true;
default:
return this.haveXyPoints;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
