(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'javajs.util.P3','javajs.util.V3','org.jmol.viewer.JC']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Axes", null, 'org.jmol.shape.FontLineShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.axisXY=Clazz.new_($I$(1,1));
this.originPoint=Clazz.new_($I$(1,1));
this.axisPoints=Clazz.array($I$(1), [6]);
{
for (var i=6; --i >= 0; ) this.axisPoints[i]=Clazz.new_($I$(1,1));

}
this.pt0=Clazz.new_($I$(1,1));
this.fixedOriginUC=Clazz.new_($I$(1,1));
this.ptTemp=Clazz.new_($I$(1,1));
this.corner=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['F',['scale'],'S',['axisType'],'O',['axisXY','javajs.util.P3','+fixedOrigin','+originPoint','axisPoints','javajs.util.P3[]','labels','String[]','pt0','javajs.util.P3','+fixedOriginUC','+ptTemp','corner','javajs.util.V3']]]

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("position" === propertyName ) {
var doSetScale=(this.axisXY.z == 0  && (value).z != 0  );
this.axisXY=value;
this.setScale$F(doSetScale ? 1 : this.scale);
return;
}if ("origin" === propertyName ) {
if (value == null  || (value).length$() == 0  ) {
this.fixedOrigin=null;
} else {
if (this.fixedOrigin == null ) this.fixedOrigin=Clazz.new_($I$(1,1));
this.fixedOrigin.setT$javajs_util_T3(value);
}this.reinitShape$();
return;
}if ("labels" === propertyName ) {
this.labels=value;
return;
}if ("labelsOn" === propertyName ) {
this.labels=null;
return;
}if ("labelsOff" === propertyName ) {
this.labels=Clazz.array(String, -1, ["", "", ""]);
return;
}if ("type" === propertyName ) {
this.axisType=value;
if (this.axisType.equals$O("abc")) this.axisType=null;
}this.setPropFLS$S$O(propertyName, value);
});

Clazz.newMeth(C$, 'initShape$', function () {
this.translucentAllowed=false;
this.myType="axes";
this.font3d=this.vwr.gdata.getFont3D$F(16);
var axesMode=this.vwr.g.axesMode;
if (axesMode == 603979808 && this.ms.unitCells != null  ) {
var unitcell=this.vwr.getCurrentUnitCell$();
if (unitcell != null ) {
var voffset=this.vwr.getFloat$I(570425345);
this.fixedOriginUC.set$F$F$F(voffset, voffset, voffset);
var offset=unitcell.getCartesianOffset$();
var vertices=unitcell.getUnitCellVerticesNoOffset$();
this.originPoint.add2$javajs_util_T3$javajs_util_T3(offset, vertices[0]);
if (voffset != 0 ) unitcell.toCartesian$javajs_util_T3$Z(this.fixedOriginUC, false);
 else if (this.fixedOrigin != null ) this.originPoint.setT$javajs_util_T3(this.fixedOrigin);
if (voffset != 0 ) {
this.originPoint.add$javajs_util_T3(this.fixedOriginUC);
}this.scale=this.vwr.getFloat$I(570425346) / 2.0;
this.axisPoints[0].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.scale, vertices[4], this.originPoint);
this.axisPoints[1].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.scale, vertices[2], this.originPoint);
this.axisPoints[2].scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.scale, vertices[1], this.originPoint);
return;
}}this.originPoint.setT$javajs_util_T3(this.fixedOrigin != null  ? this.fixedOrigin : axesMode == 603979809 ? this.vwr.getBoundBoxCenter$() : this.pt0);
this.setScale$F(this.vwr.getFloat$I(570425346) / 2.0);
});

Clazz.newMeth(C$, 'reinitShape$', function () {
var f=this.font3d;
this.initShape$();
if (f != null ) this.font3d=f;
});

Clazz.newMeth(C$, 'getAxisPoint$I$Z', function (i, isDataFrame) {
if (!isDataFrame && this.axisXY.z == 0  ) return this.axisPoints[i];
this.ptTemp.sub2$javajs_util_T3$javajs_util_T3(this.axisPoints[i], this.originPoint);
this.ptTemp.scale$F(0.5);
return this.ptTemp;
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property === "origin" ) return this.fixedOrigin;
if (property === "axesTypeXY" ) return (this.axisXY.z == 0  ? Boolean.FALSE : Boolean.TRUE);
return null;
});

Clazz.newMeth(C$, 'setScale$F', function (scale) {
this.scale=scale;
this.corner.setT$javajs_util_T3(this.vwr.getBoundBoxCornerVector$());
for (var i=6; --i >= 0; ) {
var axisPoint=this.axisPoints[i];
axisPoint.setT$javajs_util_T3($I$(3).unitAxisVectors[i]);
if (this.corner.x < 1.5 ) this.corner.x=1.5;
if (this.corner.y < 1.5 ) this.corner.y=1.5;
if (this.corner.z < 1.5 ) this.corner.z=1.5;
if (this.axisXY.z == 0 ) {
axisPoint.x *= this.corner.x * scale;
axisPoint.y *= this.corner.y * scale;
axisPoint.z *= this.corner.z * scale;
}axisPoint.add$javajs_util_T3(this.originPoint);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
