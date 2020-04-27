(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'org.jmol.shapespecial.DrawMesh','javajs.util.V3','javajs.util.P3i','java.util.Hashtable','javajs.util.AU','org.jmol.util.MeshSurface','javajs.util.Lst','javajs.util.P3','org.jmol.util.Logger',['org.jmol.shapespecial.Draw','.EnumDrawType'],'javajs.util.BS','org.jmol.script.SV','org.jmol.util.BSUtil','javajs.util.Measure','org.jmol.util.C','javajs.util.SB','javajs.util.PT','org.jmol.shape.Shape','org.jmol.util.Escape','Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Draw", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.shape.MeshCollection');
C$.$classes$=[['EnumDrawType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dmeshes=Clazz.array($I$(1), [4]);
this.offset=Clazz.new_($I$(2,1));
this.indicatedModelIndex=-1;
this.vAB=Clazz.new_($I$(2,1));
this.ptXY=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['isCurve','isArc','isArrow','isLine','isVector','isCircle','isPerpendicular','isCylinder','isVertices','isPlane','isReversed','isRotated45','isCrossed','isValid','noHead','isBarb','makePoints'],'F',['width','newScale','length'],'I',['nPoints','diameter','indicatedModelIndex'],'S',['intersectID'],'O',['dmeshes','org.jmol.shapespecial.DrawMesh[]','thisMesh','org.jmol.shapespecial.DrawMesh','ptList','javajs.util.P3[]','offset','javajs.util.V3','modelInfo','int[]','plane','javajs.util.P4','bsAllModels','javajs.util.BS','polygon','javajs.util.Lst','+vData','boundBox','javajs.util.P3[]','lineData','javajs.util.Lst','slabData','org.jmol.util.MeshSurface','vAB','javajs.util.V3','ptXY','javajs.util.P3i']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.htObjects=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'allocMesh$S$org_jmol_shape_Mesh', function (thisID, m) {
var index=this.meshCount++;
this.meshes=this.dmeshes=$I$(5).ensureLength$O$I(this.dmeshes, this.meshCount * 2);
this.currentMesh=this.thisMesh=this.dmeshes[index]=(m == null  ? Clazz.new_($I$(1,1).c$$org_jmol_viewer_Viewer$S$H$I,[this.vwr, thisID, this.colix, index]) : m);
this.currentMesh.color=this.color;
this.currentMesh.index=index;
if (thisID != null  && thisID != "+PREVIOUS_MESH+"  && this.htObjects != null  ) this.htObjects.put$O$O(thisID.toUpperCase$(), this.currentMesh);
});

Clazz.newMeth(C$, 'setPropertySuper$S$O$javajs_util_BS', function (propertyName, value, bs) {
this.currentMesh=this.thisMesh;
this.setPropMC$S$O$javajs_util_BS(propertyName, value, bs);
this.thisMesh=this.currentMesh;
}, p$1);

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.myType="draw";
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("init" == propertyName) {
p$1.initDraw.apply(this, []);
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["init", value, bs]);
return;
}if ("length" == propertyName) {
this.length=(value).floatValue$();
return;
}if ("fixed" == propertyName) {
this.isFixed=(value).booleanValue$();
return;
}if ("intersect" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.String")) this.intersectID=value;
 else this.boundBox=value;
return;
}if ("slab" == propertyName) {
var meshIndex=this.getIndexFromName$S(value);
if (meshIndex < 0) {
return;
}var m=this.meshes[meshIndex];
if (m.checkByteCount != 1) return;
var ms=Clazz.new_($I$(6,1));
ms.vs=m.vs;
ms.vvs=Clazz.array(Float.TYPE, [m.vc]);
ms.vc=m.vc;
ms.pis=m.pis;
ms.pc=m.pc;
ms.dataOnly=true;
this.slabData=ms;
}if ("lineData" == propertyName) {
this.lineData=Clazz.new_($I$(7,1));
if (this.indicatedModelIndex < 0) this.indicatedModelIndex=this.vwr.am.cmi;
var fdata=value;
var n=(fdata.length/6|0);
for (var i=0, pt=0; i < n; i++) this.lineData.addLast$O(Clazz.array($I$(8), -1, [$I$(8).new3$F$F$F(fdata[pt++], fdata[pt++], fdata[pt++]), $I$(8).new3$F$F$F(fdata[pt++], fdata[pt++], fdata[pt++])]));

return;
}if ("modelIndex" == propertyName) {
this.indicatedModelIndex=(value).intValue$();
if (this.indicatedModelIndex < 0 || this.indicatedModelIndex >= this.vwr.ms.mc ) return;
this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(4), (this.modelInfo=Clazz.array(Integer.TYPE, -1, [this.indicatedModelIndex, 0]))]));
return;
}if ("planedef" == propertyName) {
this.plane=value;
if (this.intersectID != null  || this.boundBox != null   || this.slabData != null  ) return;
if (this.isCircle || this.isArc ) this.isPlane=true;
this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(1), $I$(8).new3$F$F$F(NaN, NaN, NaN)]));
return;
}if ("perp" == propertyName) {
this.isPerpendicular=true;
return;
}if ("cylinder" == propertyName) {
this.isCylinder=true;
return;
}if ("plane" == propertyName) {
this.isPlane=true;
return;
}if ("curve" == propertyName) {
this.isCurve=true;
return;
}if ("arrow" == propertyName) {
this.isArrow=true;
return;
}if ("line" == propertyName) {
this.isLine=true;
this.isCurve=true;
return;
}if ("arc" == propertyName) {
this.isCurve=true;
this.isArc=true;
if (this.isArrow) {
this.isArrow=false;
this.isVector=true;
}return;
}if ("circle" == propertyName) {
this.isCircle=true;
return;
}if ("vector" == propertyName) {
this.isArrow=true;
this.isVector=true;
return;
}if ("vertices" == propertyName) {
this.isVertices=true;
return;
}if ("reverse" == propertyName) {
this.isReversed=true;
return;
}if ("nohead" == propertyName) {
this.noHead=true;
return;
}if ("isbarb" == propertyName) {
this.isBarb=true;
return;
}if ("rotate45" == propertyName) {
this.isRotated45=true;
return;
}if ("crossed" == propertyName) {
this.isCrossed=true;
return;
}if ("points" == propertyName) {
this.newScale=(value).floatValue$() / 100;
if (this.newScale == 0 ) this.newScale=1;
return;
}if ("scale" == propertyName) {
this.newScale=(value).floatValue$() / 100;
if (this.newScale == 0 ) this.newScale=0.01;
if (this.thisMesh != null ) {
p$1.scale$org_jmol_shape_Mesh$F.apply(this, [this.thisMesh, this.newScale]);
this.thisMesh.initialize$I$javajs_util_T3A$javajs_util_P4(1073741964, null, null);
}return;
}if ("diameter" == propertyName) {
this.diameter=(value).intValue$();
return;
}if ("width" == propertyName) {
this.width=(value).floatValue$();
return;
}if ("identifier" == propertyName) {
var thisID=value;
var meshIndex=this.getIndexFromName$S(thisID);
if (meshIndex >= 0) {
this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(2), Clazz.array(Integer.TYPE, -1, [meshIndex, this.isReversed ? 1 : 0, this.isVertices ? 1 : 0])]));
this.isReversed=this.isVertices=false;
} else {
$I$(9).error$S("draw identifier " + value + " not found" );
this.isValid=false;
}return;
}if ("polygon" == propertyName) {
this.polygon=value;
if (this.polygon == null ) this.polygon=Clazz.new_($I$(7,1));
return;
}if ("coord" == propertyName) {
this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(1), value]));
if (this.indicatedModelIndex >= 0) this.modelInfo[1]++;
return;
}if ("offset" == propertyName) {
this.offset=$I$(2).newV$javajs_util_T3(value);
if (this.thisMesh != null ) this.thisMesh.offset$javajs_util_V3(this.offset);
return;
}if ("atomSet" == propertyName) {
var bsAtoms=value;
if (bsAtoms.isEmpty$()) return;
this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(3), bsAtoms]));
if (this.isCircle && this.diameter == 0  && this.width == 0  ) this.width=this.vwr.ms.calcRotationRadiusBs$javajs_util_BS(bsAtoms) * 2.0;
return;
}if ("coords" == propertyName) {
p$1.addPoints$I$O.apply(this, [1, value]);
return;
}if ("modelBasedPoints" == propertyName) {
p$1.addPoints$I$O.apply(this, [5, value]);
return;
}if ("set" == propertyName) {
if (this.thisMesh == null ) {
this.allocMesh$S$org_jmol_shape_Mesh(null, null);
this.thisMesh.colix=this.colix;
this.thisMesh.color=this.color;
}this.thisMesh.isValid=(this.isValid ? p$1.setDrawing$IA.apply(this, [value]) : false);
if (this.thisMesh.isValid) {
if (this.thisMesh.vc > 2 && this.length != 3.4028235E38   && this.newScale == 1  ) this.newScale=this.length;
p$1.scale$org_jmol_shape_Mesh$F.apply(this, [this.thisMesh, this.newScale]);
this.thisMesh.initialize$I$javajs_util_T3A$javajs_util_P4(1073741964, null, null);
C$.setAxes$org_jmol_shapespecial_DrawMesh(this.thisMesh);
this.thisMesh.title=this.title;
this.thisMesh.visible=true;
}this.nPoints=-1;
this.vData=null;
this.lineData=null;
return;
}if (propertyName == "deleteModelAtoms") {
p$1.deleteModels$I.apply(this, [((value)[2])[0]]);
return;
}p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, [propertyName, value, bs]);
});

Clazz.newMeth(C$, 'deleteModels$I', function (modelIndex) {
for (var i=this.meshCount; --i >= 0; ) {
var m=this.dmeshes[i];
if (m == null ) continue;
var deleteMesh=(m.modelIndex == modelIndex);
if (m.modelFlags != null ) {
m.deleteAtoms$I(modelIndex);
deleteMesh=(m.modelFlags.length$() == 0);
if (!deleteMesh) continue;
}if (deleteMesh) {
this.meshCount--;
p$1.deleteMeshElement$I.apply(this, [i]);
} else if (this.meshes[i].modelIndex > modelIndex) {
this.meshes[i].modelIndex--;
}}
this.resetObjects$();
}, p$1);

Clazz.newMeth(C$, 'deleteMeshElement$I', function (i) {
if (this.meshes[i] === this.currentMesh ) this.currentMesh=this.thisMesh=null;
this.meshes=this.dmeshes=$I$(5).deleteElements$O$I$I(this.meshes, i, 1);
}, p$1);

Clazz.newMeth(C$, 'initDraw', function () {
this.boundBox=null;
this.bsAllModels=null;
this.colix=5;
this.color=-1;
this.diameter=0;
this.explicitID=false;
this.indicatedModelIndex=-1;
this.intersectID=null;
this.isCurve=this.isArc=this.isArrow=this.isPlane=this.isCircle=this.isCylinder=this.isLine=false;
this.isFixed=this.isReversed=this.isRotated45=this.isCrossed=this.noHead=this.isBarb=false;
this.isPerpendicular=this.isVertices=this.isVector=false;
this.isValid=true;
this.length=3.4028235E38;
this.lineData=null;
this.newScale=0;
this.offset=null;
this.plane=null;
this.polygon=null;
this.slabData=null;
this.vData=Clazz.new_($I$(7,1));
this.width=0;
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["thisID", "+PREVIOUS_MESH+", null]);
}, p$1);

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
if (property == "keys") {
var keys=(Clazz.instanceOf(data[1], "javajs.util.Lst") ? data[1] : Clazz.new_($I$(7,1)));
data[1]=keys;
keys.addLast$O("getSpinAxis");
}if (property == "getCenter") {
var id=data[0];
var index=(data[1]).intValue$();
var modelIndex=(data[2]).intValue$();
data[2]=p$1.getSpinCenter$S$I$I.apply(this, [id, index, modelIndex]);
return (data[2] != null );
}if (property == "getSpinAxis") {
var id=data[0];
var index=(data[1]).intValue$();
data[2]=p$1.getSpinAxis$S$I.apply(this, [id, index]);
return (data[2] != null );
}return this.getPropDataMC$S$OA(property, data);
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
var m=this.thisMesh;
if (index >= 0 && (index >= this.meshCount || (m=this.meshes[index]) == null  ) ) return null;
if (property == "command") return p$1.getCommand$org_jmol_shape_Mesh.apply(this, [m]);
if (property == "type") return Integer.valueOf$I(m == null  ? $I$(10).NONE.id : m.drawType.id);
return this.getPropMC$S$I(property, index);
});

Clazz.newMeth(C$, 'getSpinCenter$S$I$I', function (axisID, vertexIndex, modelIndex) {
var id;
var pt=axisID.indexOf$S("[");
var pt2;
if (pt > 0) {
id=axisID.substring$I$I(0, pt);
if ((pt2=axisID.lastIndexOf$S("]")) < pt) pt2=axisID.length$();
try {
vertexIndex=Integer.parseInt$S(axisID.substring$I$I(pt + 1, pt2));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
} else {
id=axisID;
}var m=this.getMesh$S(id);
if (m == null  || m.vs == null  ) return null;
if (vertexIndex == 2147483647) return $I$(8).new3$F$F$F(m.index + 1, this.meshCount, m.vc);
if (vertexIndex != -2147483648) vertexIndex=m.getVertexIndexFromNumber$I(vertexIndex);
return (vertexIndex >= 0 ? m.vs[vertexIndex] : m.ptCenters == null  || modelIndex < 0  || modelIndex >= m.ptCenters.length  ? m.ptCenter : m.ptCenters[modelIndex]);
}, p$1);

Clazz.newMeth(C$, 'getSpinAxis$S$I', function (axisID, modelIndex) {
var m=this.getMesh$S(axisID);
return (m == null  || m.vs == null   ? null : m.ptCenters == null  || modelIndex < 0  ? m.axis : m.axes[modelIndex]);
}, p$1);

Clazz.newMeth(C$, 'setDrawing$IA', function (connections) {
if (this.thisMesh == null ) this.allocMesh$S$org_jmol_shape_Mesh(null, null);
this.thisMesh.clear$S("draw");
this.thisMesh.diameter=this.diameter;
this.thisMesh.width=this.width;
if (this.intersectID != null  || this.boundBox != null  ) {
if (this.boundBox != null ) {
if (this.plane == null ) {
}} else if (this.plane != null  && this.intersectID != null  ) {
var vData=Clazz.new_($I$(7,1));
var data=Clazz.array(java.lang.Object, -1, [this.intersectID, this.plane, vData, null]);
this.vwr.shm.getShapePropertyData$I$S$OA(24, "intersectPlane", data);
if (vData.size$() > 0) {
this.indicatedModelIndex=(data[3]).intValue$();
this.lineData=vData;
}}} else if (this.slabData != null  && this.plane != null  ) {
this.slabData.getMeshSlicer$().getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, this.plane, null, null, null, null, null, false, true, 134217750, false);
this.polygon=Clazz.new_($I$(7,1));
this.polygon.addLast$O(this.slabData.vs);
this.polygon.addLast$O(this.slabData.pis);
}if (this.polygon == null  && (this.lineData != null  ? this.lineData.size$() == 0 : (this.vData.size$() == 0) == (connections == null ) )  || !this.isArrow && connections != null   ) return false;
var modelCount=this.vwr.ms.mc;
if (this.polygon != null  || this.lineData != null   || this.indicatedModelIndex < 0 && (this.isFixed || this.isArrow || this.isCurve || this.isCircle || this.isCylinder || modelCount == 1  )  ) {
this.thisMesh.modelIndex=(this.lineData == null  ? this.vwr.am.cmi : this.indicatedModelIndex);
this.thisMesh.isFixed=(this.isFixed || this.lineData == null  && this.thisMesh.modelIndex < 0  && modelCount > 1  );
if (this.isFixed && modelCount > 1 ) this.thisMesh.modelIndex=-1;
 else if (this.lineData == null  && this.thisMesh.modelIndex < 0 ) this.thisMesh.modelIndex=0;
this.thisMesh.ptCenters=null;
this.thisMesh.modelFlags=null;
this.thisMesh.drawTypes=null;
this.thisMesh.drawVertexCounts=null;
this.thisMesh.connectedAtoms=connections;
if (this.polygon != null ) {
if (this.polygon.size$() == 0) return false;
this.thisMesh.isDrawPolygon=true;
this.thisMesh.vs=this.polygon.get$I(0);
this.thisMesh.pis=this.polygon.get$I(1);
this.thisMesh.drawVertexCount=this.thisMesh.vc=this.thisMesh.vs.length;
this.thisMesh.pc=(this.thisMesh.pis == null  ? -1 : this.thisMesh.pis.length);
for (var i=0; i < this.thisMesh.pc; i++) {
for (var j=0; j < 3; j++) if (this.thisMesh.pis[i][j] >= this.thisMesh.vc) return false;

}
this.thisMesh.drawType=$I$(10).POLYGON;
this.thisMesh.checkByteCount=1;
} else if (this.lineData != null ) {
this.thisMesh.lineData=this.lineData;
} else {
this.thisMesh.setPolygonCount$I(1);
if (p$1.setPoints$I$I.apply(this, [-1, -1])) p$1.setPoints$I$I.apply(this, [-1, this.nPoints]);
p$1.setPolygon$I.apply(this, [0]);
}} else {
this.thisMesh.modelIndex=-1;
this.thisMesh.setPolygonCount$I(modelCount);
this.thisMesh.ptCenters=Clazz.array($I$(8), [modelCount]);
this.thisMesh.modelFlags=Clazz.new_($I$(11,1));
this.thisMesh.drawTypes=Clazz.array($I$(10), [modelCount]);
this.thisMesh.drawVertexCounts=Clazz.array(Integer.TYPE, [modelCount]);
this.thisMesh.vc=0;
if (this.indicatedModelIndex >= 0) {
p$1.setPoints$I$I.apply(this, [-1, 0]);
this.thisMesh.drawType=$I$(10).MULTIPLE;
this.thisMesh.drawVertexCount=-1;
this.thisMesh.modelFlags.set$I(this.indicatedModelIndex);
this.indicatedModelIndex=-1;
} else {
var bsModels=this.vwr.getVisibleFramesBitSet$();
for (var iModel=0; iModel < modelCount; iModel++) {
if (bsModels.get$I(iModel) && p$1.setPoints$I$I.apply(this, [iModel, -1]) ) {
p$1.setPoints$I$I.apply(this, [iModel, this.nPoints]);
p$1.setPolygon$I.apply(this, [iModel]);
this.thisMesh.setCenter$I(iModel);
this.thisMesh.drawTypes[iModel]=this.thisMesh.drawType;
this.thisMesh.drawVertexCounts[iModel]=this.thisMesh.drawVertexCount;
this.thisMesh.drawType=$I$(10).MULTIPLE;
this.thisMesh.drawVertexCount=-1;
this.thisMesh.modelFlags.set$I(iModel);
} else {
this.thisMesh.drawTypes[iModel]=$I$(10).NONE;
this.thisMesh.pis[iModel]=Clazz.array(Integer.TYPE, [0]);
}}
}}this.thisMesh.isVector=this.isVector;
this.thisMesh.noHead=this.noHead;
this.thisMesh.isBarb=this.isBarb;
this.thisMesh.width=(this.thisMesh.drawType === $I$(10).CYLINDER  || this.thisMesh.drawType === $I$(10).CIRCULARPLANE   ? -Math.abs(this.width) : this.width);
this.thisMesh.setCenter$I(-1);
if (this.offset != null ) this.thisMesh.offset$javajs_util_V3(this.offset);
if (this.thisMesh.thisID == null ) {
this.thisMesh.thisID=this.thisMesh.drawType.$name + (++this.nUnnamed);
this.htObjects.put$O$O(this.thisMesh.thisID, this.thisMesh);
}this.clean$();
return true;
}, p$1);

Clazz.newMeth(C$, 'clean$', function () {
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i] == null  || this.meshes[i].vc == 0 && this.meshes[i].connectedAtoms == null   && this.meshes[i].lineData == null   ) this.deleteMeshI$I(i);

});

Clazz.newMeth(C$, 'addPoints$I$O', function (type, value) {
var pts=value;
var key=Integer.valueOf$I(type);
var isModelPoints=(type == 5);
if (isModelPoints) this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [key, pts]));
for (var i=0, n=pts.size$(); i < n; i++) {
var o=pts.get$I(i);
var pt;
if (Clazz.instanceOf(o, "javajs.util.P3")) {
pt=o;
} else {
var v=o;
switch (v.tok) {
case 10:
if (!isModelPoints && (v.value).isEmpty$() ) continue;
pt=this.vwr.ms.getAtomSetCenter$javajs_util_BS(v.value);
break;
case 8:
if (isModelPoints) continue;
default:
pt=$I$(12).ptValue$org_jmol_script_SV(v);
}
}if (isModelPoints) {
pts.set$I$O(i, $I$(12).getVariable$O(pt));
} else {
this.vData.addLast$O(Clazz.array(java.lang.Object, -1, [key, pt]));
}}
}, p$1);

Clazz.newMeth(C$, 'addPoint$javajs_util_T3$I', function (newPt, iModel) {
if (this.makePoints) {
if (newPt == null  || iModel >= 0 && !this.bsAllModels.get$I(iModel)  ) return;
this.ptList[this.nPoints]=$I$(8).newP$javajs_util_T3(newPt);
if (newPt.z == 3.4028235E38  || newPt.z == -3.4028235E38  ) this.thisMesh.haveXyPoints=true;
} else if (iModel >= 0) {
this.bsAllModels.set$I(iModel);
}this.nPoints++;
}, p$1);

Clazz.newMeth(C$, 'setPoints$I$I', function (iModel, n) {
this.makePoints=(n >= 0);
if (this.makePoints) {
this.ptList=Clazz.array($I$(8), [Math.max(5, n)]);
if (this.bsAllModels == null ) this.bsAllModels=this.vwr.getVisibleFramesBitSet$();
}this.nPoints=0;
var nData=this.vData.size$();
var modelIndex=0;
var bs;
var bsModel=(iModel < 0 ? null : this.vwr.getModelUndeletedAtomsBitSet$I(iModel));
for (var i=0; i < nData; i++) {
var info=this.vData.get$I(i);
switch ((info[0]).intValue$()) {
case 4:
var modelInfo=info[1];
modelIndex=modelInfo[0];
this.nPoints=modelInfo[1];
var nVertices=Math.max(this.nPoints, 3);
var n0=this.thisMesh.vc;
if (this.nPoints > 0) {
var p=this.thisMesh.pis[modelIndex]=Clazz.array(Integer.TYPE, [nVertices]);
for (var j=0; j < this.nPoints; j++) {
info=this.vData.get$I(++i);
p[j]=this.thisMesh.addV$javajs_util_T3$Z(info[1], false);
}
for (var j=this.nPoints; j < 3; j++) {
p[j]=n0 + this.nPoints - 1;
}
this.thisMesh.drawTypes[modelIndex]=$I$(10).getType$I(this.nPoints);
this.thisMesh.drawVertexCounts[modelIndex]=this.nPoints;
this.thisMesh.modelFlags.set$I(modelIndex);
}break;
case 1:
p$1.addPoint$javajs_util_T3$I.apply(this, [info[1], (this.makePoints ? iModel : -1)]);
break;
case 3:
bs=$I$(13).copy$javajs_util_BS(info[1]);
if (bsModel != null ) bs.and$javajs_util_BS(bsModel);
if (bs.length$() > 0) p$1.addPoint$javajs_util_T3$I.apply(this, [this.vwr.ms.getAtomSetCenter$javajs_util_BS(bs), (this.makePoints ? iModel : -1)]);
break;
case 2:
var idInfo=info[1];
var m=this.dmeshes[idInfo[0]];
var isReversed=(idInfo[1] == 1);
var isVertices=(idInfo[2] == 1);
if (m.modelIndex > 0 && m.modelIndex != iModel ) return false;
if (this.bsAllModels == null ) this.bsAllModels=Clazz.new_($I$(11,1));
if (this.isPlane && !this.isCircle  || this.isPerpendicular  || isVertices ) {
if (isReversed) {
if (iModel < 0 || iModel >= m.pc ) for (var ipt=m.drawVertexCount; --ipt >= 0; ) p$1.addPoint$javajs_util_T3$I.apply(this, [m.vs[ipt], iModel]);

 else if (m.pis[iModel] != null ) for (var ipt=m.drawVertexCounts[iModel]; --ipt >= 0; ) p$1.addPoint$javajs_util_T3$I.apply(this, [m.vs[m.pis[iModel][ipt]], iModel]);

} else {
if (iModel < 0 || iModel >= m.pc ) for (var ipt=0; ipt < m.drawVertexCount; ipt++) p$1.addPoint$javajs_util_T3$I.apply(this, [m.vs[ipt], iModel]);

 else if (m.pis[iModel] != null ) for (var ipt=0; ipt < m.drawVertexCounts[iModel]; ipt++) p$1.addPoint$javajs_util_T3$I.apply(this, [m.vs[m.pis[iModel][ipt]], iModel]);

}} else {
if (iModel < 0 || m.ptCenters == null   || m.ptCenters[iModel] == null  ) p$1.addPoint$javajs_util_T3$I.apply(this, [m.ptCenter, iModel]);
 else p$1.addPoint$javajs_util_T3$I.apply(this, [m.ptCenters[iModel], iModel]);
}break;
case 5:
var modelBasedPoints=info[1];
if (this.bsAllModels == null ) this.bsAllModels=Clazz.new_($I$(11,1));
for (var j=0; j < modelBasedPoints.size$(); j++) if (iModel < 0 || j == iModel ) {
var point=modelBasedPoints.get$I(j);
this.bsAllModels.set$I(j);
if (Clazz.instanceOf(point, "javajs.util.P3")) {
p$1.addPoint$javajs_util_T3$I.apply(this, [point, j]);
} else if (Clazz.instanceOf(point, "javajs.util.BS")) {
bs=point;
if (bsModel != null ) bs.and$javajs_util_BS(bsModel);
if (bs.length$() > 0) p$1.addPoint$javajs_util_T3$I.apply(this, [this.vwr.ms.getAtomSetCenter$javajs_util_BS(bs), j]);
} else if (Clazz.instanceOf(point, "org.jmol.script.SV")) {
p$1.addPoint$javajs_util_T3$I.apply(this, [$I$(12).ptValue$org_jmol_script_SV(point), j]);
}}
break;
}
}
if (this.makePoints && this.isCrossed && this.nPoints == 4  ) {
var pt=this.ptList[1];
this.ptList[1]=this.ptList[2];
this.ptList[2]=pt;
}return (this.nPoints > 0);
}, p$1);

Clazz.newMeth(C$, 'setPolygon$I', function (nPoly) {
var nVertices=this.nPoints;
var drawType=$I$(10).POINT;
if (this.isArc) {
if (nVertices >= 2) {
drawType=$I$(10).ARC;
} else {
this.isArc=false;
this.isVector=false;
this.isCurve=false;
this.isArrow=true;
}}if (this.isCircle) {
this.length=0;
if (nVertices == 2) this.isPlane=true;
if (!this.isPlane) drawType=$I$(10).CIRCLE;
if (this.width == 0 ) this.width=1;
} else if ((this.isCurve || this.isArrow ) && nVertices >= 2  && !this.isArc ) {
drawType=(this.isLine ? $I$(10).LINE_SEGMENT : this.isCurve ? $I$(10).CURVE : $I$(10).ARROW);
}if (this.isVector && !this.isArc ) {
if (nVertices > 2) nVertices=2;
 else if (this.plane == null  && nVertices != 2 ) this.isVector=false;
}if (this.thisMesh.haveXyPoints) {
this.isPerpendicular=false;
if (nVertices == 3 && this.isPlane ) this.isPlane=false;
this.length=3.4028235E38;
if (this.isVector) this.thisMesh.diameter=0;
} else if (nVertices == 2 && this.isVector ) {
this.ptList[1].add$javajs_util_T3(this.ptList[0]);
}var dist=0;
if (this.isArc || this.plane != null  && this.isCircle  ) {
if (this.plane != null ) {
dist=$I$(14).distanceToPlane$javajs_util_P4$javajs_util_T3(this.plane, this.ptList[0]);
var vAC=$I$(2).new3$F$F$F(-this.plane.x, -this.plane.y, -this.plane.z);
vAC.normalize$();
if (dist < 0 ) vAC.scale$F(-1);
if (this.isCircle) {
vAC.scale$F(0.005);
this.ptList[0].sub$javajs_util_T3(vAC);
vAC.scale$F(2);
}vAC.add$javajs_util_T3(this.ptList[0]);
this.ptList[1]=$I$(8).newP$javajs_util_T3(vAC);
drawType=(this.isArrow ? $I$(10).ARROW : this.isArc ? $I$(10).ARC : $I$(10).CIRCULARPLANE);
}if (this.isArc) {
dist=Math.abs(dist);
if (nVertices > 3) {
} else if (nVertices == 3) {
this.ptList[3]=$I$(8).newP$javajs_util_T3(this.ptList[2]);
this.ptList[2]=C$.randomPoint$();
} else {
if (nVertices == 2) {
this.ptList[2]=C$.randomPoint$();
}this.ptList[3]=$I$(8).new3$F$F$F(0, 360, 0);
}if (this.plane != null ) this.ptList[3].z *= dist;
nVertices=4;
}this.plane=null;
} else if (drawType === $I$(10).POINT ) {
var pt;
var center=Clazz.new_($I$(8,1));
var normal=Clazz.new_($I$(2,1));
if (nVertices == 2 && this.plane != null  ) {
this.ptList[1]=$I$(8).newP$javajs_util_T3(this.ptList[0]);
var vTemp=Clazz.new_($I$(2,1));
$I$(14).getPlaneProjection$javajs_util_P3$javajs_util_P4$javajs_util_P3$javajs_util_V3(this.ptList[1], this.plane, this.ptList[1], vTemp);
nVertices=-2;
if (this.isArrow) drawType=$I$(10).ARROW;
this.plane=null;
}if (nVertices == 3 && this.isPlane  && !this.isPerpendicular ) {
pt=$I$(8).newP$javajs_util_T3(this.ptList[1]);
pt.sub$javajs_util_T3(this.ptList[0]);
pt.scale$F(0.5);
this.ptList[3]=$I$(8).newP$javajs_util_T3(this.ptList[2]);
this.ptList[2].add$javajs_util_T3(pt);
this.ptList[3].sub$javajs_util_T3(pt);
nVertices=4;
} else if (nVertices >= 3 && !this.isPlane  && this.isPerpendicular ) {
$I$(14).calcNormalizedNormal$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(this.ptList[0], this.ptList[1], this.ptList[2], normal, this.vAB);
center=Clazz.new_($I$(8,1));
$I$(14).calcAveragePointN$javajs_util_P3A$I$javajs_util_P3(this.ptList, nVertices, center);
dist=(this.length == 3.4028235E38  ? this.ptList[0].distance$javajs_util_T3(center) : this.length);
normal.scale$F(dist);
this.ptList[0].setT$javajs_util_T3(center);
this.ptList[1].add2$javajs_util_T3$javajs_util_T3(center, normal);
nVertices=2;
} else if (nVertices == 2 && this.isPerpendicular ) {
$I$(14).calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.ptList[0], this.ptList[1], center);
dist=(this.length == 3.4028235E38  ? this.ptList[0].distance$javajs_util_T3(center) : this.length);
if (this.isPlane && this.length != 3.4028235E38  ) dist /= 2.0;
if (this.isPlane && this.isRotated45 ) dist *= 1.4142;
$I$(14).getNormalToLine$javajs_util_P3$javajs_util_P3$javajs_util_V3(this.ptList[0], this.ptList[1], normal);
normal.scale$F(dist);
if (this.isPlane) {
this.ptList[2]=$I$(8).newP$javajs_util_T3(center);
this.ptList[2].sub$javajs_util_T3(normal);
pt=$I$(8).newP$javajs_util_T3(center);
pt.add$javajs_util_T3(normal);
$I$(14).calcNormalizedNormal$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(this.ptList[0], this.ptList[1], this.ptList[2], normal, this.vAB);
normal.scale$F(dist);
this.ptList[3]=$I$(8).newP$javajs_util_T3(center);
this.ptList[3].add$javajs_util_T3(normal);
this.ptList[1].sub2$javajs_util_T3$javajs_util_T3(center, normal);
this.ptList[0].setT$javajs_util_T3(pt);
if (this.isRotated45) {
$I$(14).calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.ptList[0], this.ptList[1], this.ptList[0]);
$I$(14).calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.ptList[1], this.ptList[2], this.ptList[1]);
$I$(14).calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.ptList[2], this.ptList[3], this.ptList[2]);
$I$(14).calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.ptList[3], pt, this.ptList[3]);
}nVertices=4;
} else {
this.ptList[0].sub2$javajs_util_T3$javajs_util_T3(center, normal);
this.ptList[1].add2$javajs_util_T3$javajs_util_T3(center, normal);
}if (this.isArrow && nVertices != -2 ) this.isArrow=false;
} else if (nVertices == 2 && this.length != 3.4028235E38  ) {
$I$(14).calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3(this.ptList[0], this.ptList[1], center);
normal.sub2$javajs_util_T3$javajs_util_T3(this.ptList[1], center);
normal.scale$F(0.5 / normal.length$() * (this.length == 0  ? 0.01 : this.length));
if (this.length == 0 ) center.setT$javajs_util_T3(this.ptList[0]);
this.ptList[0].sub2$javajs_util_T3$javajs_util_T3(center, normal);
this.ptList[1].add2$javajs_util_T3$javajs_util_T3(center, normal);
}if (nVertices > 4) nVertices=4;
switch (nVertices) {
case -2:
nVertices=2;
break;
case 1:
break;
case 2:
drawType=(this.isArc ? $I$(10).ARC : this.isPlane && this.isCircle  ? $I$(10).CIRCULARPLANE : this.isCylinder ? $I$(10).CYLINDER : $I$(10).LINE);
break;
default:
drawType=(this.thisMesh.connectedAtoms == null  ? $I$(10).PLANE : $I$(10).ARROW);
}
}this.thisMesh.drawType=drawType;
this.thisMesh.drawVertexCount=nVertices;
if (nVertices == 0) return;
var nVertices0=this.thisMesh.vc;
for (var i=0; i < nVertices; i++) {
this.thisMesh.addV$javajs_util_T3$Z(this.ptList[i], false);
}
var npoints=(nVertices < 3 ? 3 : nVertices);
this.thisMesh.setPolygonCount$I(nPoly + 1);
this.thisMesh.pis[nPoly]=Clazz.array(Integer.TYPE, [npoints]);
for (var i=0; i < npoints; i++) {
this.thisMesh.pis[nPoly][i]=nVertices0 + (i < nVertices ? i : nVertices - 1);
}
return;
}, p$1);

Clazz.newMeth(C$, 'scale$org_jmol_shape_Mesh$F', function (mesh, newScale) {
var dmesh=mesh;
if (newScale == 0  || dmesh.vc == 0 && dmesh.connectedAtoms == null    || dmesh.scale == newScale  ) return;
var f=newScale / dmesh.scale;
dmesh.scale=newScale;
dmesh.isScaleSet=true;
if (dmesh.isRenderScalable$()) return;
var diff=Clazz.new_($I$(2,1));
var iptlast=-1;
var ipt=0;
try {
for (var i=dmesh.pc; --i >= 0; ) {
var center=(dmesh.isVector ? dmesh.vs[0] : dmesh.ptCenters == null  ? dmesh.ptCenter : dmesh.ptCenters[i]);
if (center == null ) return;
if (dmesh.pis[i] == null ) continue;
iptlast=-1;
for (var iV=dmesh.pis[i].length; --iV >= 0; ) {
ipt=dmesh.pis[i][iV];
if (ipt == iptlast) continue;
iptlast=ipt;
diff.sub2$javajs_util_T3$javajs_util_T3(dmesh.vs[ipt], center);
diff.scale$F(f);
diff.add$javajs_util_T3(center);
dmesh.vs[ipt].setT$javajs_util_T3(diff);
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(9).info$S("Error executing DRAW command: " + e);
dmesh.isValid=false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'setAxes$org_jmol_shapespecial_DrawMesh', function (m) {
m.axis=$I$(2).new3$F$F$F(0, 0, 0);
m.axes=Clazz.array($I$(2), [m.pc > 0 ? m.pc : 1]);
if (m.vs == null ) return;
var n=0;
for (var i=m.pc; --i >= 0; ) {
var p=m.pis[i];
m.axes[i]=Clazz.new_($I$(2,1));
if (p == null  || p.length == 0 ) {
} else if (m.drawVertexCount == 2 || m.drawVertexCount < 0 && m.drawVertexCounts[i] == 2  ) {
m.axes[i].sub2$javajs_util_T3$javajs_util_T3(m.vs[p[0]], m.vs[p[1]]);
n++;
} else {
$I$(14).calcNormalizedNormal$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(m.vs[p[0]], m.vs[p[1]], m.vs[p[2]], m.axes[i], m.vAB);
n++;
}m.axis.add$javajs_util_T3(m.axes[i]);
}
if (n == 0) return;
m.axis.scale$F(1.0 / n);
}, 1);

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
for (var i=0; i < this.meshCount; i++) {
var m=this.dmeshes[i];
if (m == null ) {
continue;
}m.visibilityFlags=(m.isValid && m.visible  ? this.vf : 0);
if (m.modelIndex >= 0 && !bsModels.get$I(m.modelIndex)  || m.modelFlags != null  && !$I$(13).haveCommon$javajs_util_BS$javajs_util_BS(bsModels, m.modelFlags)  ) {
m.visibilityFlags=0;
} else if (m.modelFlags != null ) {
m.bsMeshesVisible.clearAll$();
m.bsMeshesVisible.or$javajs_util_BS(m.modelFlags);
m.bsMeshesVisible.and$javajs_util_BS(bsModels);
}}
});

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, action, bsVisible, drawPicking) {
var isPickingMode=(this.vwr.getPickingMode$() == 4);
var isSpinMode=(this.vwr.getPickingMode$() == 5);
if (!isPickingMode && !drawPicking && !isSpinMode   || $I$(15).isColixTranslucent$H(this.colix) ) return null;
if (!p$1.findPickedObject$I$I$Z$javajs_util_BS.apply(this, [x, y, false, bsVisible])) return null;
var v=this.pickedMesh.vs[this.pickedMesh.pis[this.pickedModel][this.pickedVertex]];
var modelIndex=this.pickedMesh.modelIndex;
var bs=(this.pickedMesh).modelFlags;
if (modelIndex < 0 && $I$(13).cardinalityOf$javajs_util_BS(bs) == 1 ) modelIndex=bs.nextSetBit$I(0);
var map=null;
if (action != 0) map=this.getPickedPoint$javajs_util_T3$I(v, modelIndex);
if (drawPicking && !isPickingMode ) {
if (action != 0) this.setStatusPicked$I$javajs_util_T3$java_util_Map(-2, v, map);
return this.getPickedPoint$javajs_util_T3$I(v, modelIndex);
}if (action == 0 || this.pickedMesh.pis[this.pickedModel][0] == this.pickedMesh.pis[this.pickedModel][1] ) {
return map;
}var isClockwise=this.vwr.isBound$I$I(action, 42);
if (this.pickedVertex == 0) {
this.vwr.startSpinningAxis$javajs_util_T3$javajs_util_T3$Z(this.pickedMesh.vs[this.pickedMesh.pis[this.pickedModel][1]], this.pickedMesh.vs[this.pickedMesh.pis[this.pickedModel][0]], isClockwise);
} else {
this.vwr.startSpinningAxis$javajs_util_T3$javajs_util_T3$Z(this.pickedMesh.vs[this.pickedMesh.pis[this.pickedModel][0]], this.pickedMesh.vs[this.pickedMesh.pis[this.pickedModel][1]], isClockwise);
}return this.getPickedPoint$javajs_util_T3$I(null, 0);
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS', function (x, y, bsVisible) {
if (!this.vwr.getDrawHover$()) return false;
if ($I$(15).isColixTranslucent$H(this.colix)) return false;
if (!p$1.findPickedObject$I$I$Z$javajs_util_BS.apply(this, [x, y, false, bsVisible])) return false;
if (this.vwr.gdata.antialiasEnabled) {
x<<=1;
y<<=1;
}var s=(this.pickedMesh.title == null  ? this.pickedMesh.thisID : this.pickedMesh.title[0]);
if (s.length$() > 1 && s.charAt$I(0) == ">" ) s=s.substring$I(1);
this.vwr.hoverOnPt$I$I$S$S$javajs_util_T3(x, y, s, this.pickedMesh.thisID, this.pickedPt);
return true;
});

Clazz.newMeth(C$, 'checkObjectDragged$I$I$I$I$I$javajs_util_BS', function (prevX, prevY, x, y, dragAction, bsVisible) {
if (this.vwr.getPickingMode$() != 4) return false;
var moveAll=this.vwr.isBound$I$I(dragAction, 8);
var movePoint=this.vwr.isBound$I$I(dragAction, 9);
if (!moveAll && !movePoint ) return false;
if (prevX == -2147483648) return p$1.findPickedObject$I$I$Z$javajs_util_BS.apply(this, [x, y, true, bsVisible]);
if (prevX == 2147483647) {
this.pickedMesh=null;
return false;
}if (this.pickedMesh == null ) return false;
var dm=this.pickedMesh;
p$1.move2D$org_jmol_shapespecial_DrawMesh$IA$I$I$I$Z.apply(this, [dm, dm.pis[this.pickedModel], this.pickedVertex, x, y, moveAll]);
this.thisMesh=dm;
return true;
});

Clazz.newMeth(C$, 'move2D$org_jmol_shapespecial_DrawMesh$IA$I$I$I$Z', function (mesh, vertexes, iVertex, x, y, moveAll) {
if (vertexes == null  || vertexes.length == 0 ) return;
if (this.vwr.gdata.isAntialiased$()) {
x<<=1;
y<<=1;
}var action=moveAll ? 8 : 9;
if (this.vwr.acm.userActionEnabled$I(action) && !this.vwr.acm.userAction$I$OA(action, Clazz.array(java.lang.Object, -1, [mesh.thisID, Clazz.array(Integer.TYPE, -1, [x, y, iVertex])])) ) return;
var pt=Clazz.new_($I$(8,1));
var ptVertex=vertexes[iVertex];
var coord=(function(a,f){return f.apply(null,a)})([mesh.altVertices == null  ? mesh.vs[ptVertex] : mesh.altVertices[ptVertex]],$I$(8).newP$javajs_util_T3);
var newcoord=Clazz.new_($I$(8,1));
var move=Clazz.new_($I$(2,1));
this.vwr.tm.transformPt3f$javajs_util_T3$javajs_util_P3(coord, pt);
pt.x=x;
pt.y=y;
this.vwr.tm.unTransformPoint$javajs_util_T3$javajs_util_T3(pt, newcoord);
move.sub2$javajs_util_T3$javajs_util_T3(newcoord, coord);
if (mesh.isDrawPolygon) iVertex=ptVertex;
var n=(!moveAll ? iVertex + 1 : mesh.isDrawPolygon ? mesh.vs.length : vertexes.length);
var bsMoved=Clazz.new_($I$(11,1));
for (var i=(moveAll ? 0 : iVertex); i < n; i++) if (moveAll || i == iVertex ) {
var k=(mesh.isDrawPolygon ? i : vertexes[i]);
if (bsMoved.get$I(k)) continue;
bsMoved.set$I(k);
mesh.vs[k].add$javajs_util_T3(move);
}
if (mesh.altVertices != null ) mesh.recalcAltVertices=true;
mesh.setCenters$();
}, p$1);

Clazz.newMeth(C$, 'findPickedObject$I$I$Z$javajs_util_BS', function (x, y, isPicking, bsVisible) {
var dmin2=100;
if (this.vwr.gdata.isAntialiased$()) {
x<<=1;
y<<=1;
dmin2<<=1;
}this.pickedModel=0;
this.pickedVertex=0;
this.pickedMesh=null;
for (var i=0; i < this.meshCount; i++) {
var m=this.dmeshes[i];
if (m.visibilityFlags != 0) {
var mCount=(m.isDrawPolygon ? m.pc : m.modelFlags == null  ? 1 : this.vwr.ms.mc);
for (var iModel=mCount; --iModel >= 0; ) {
if (m.modelFlags != null  && !m.modelFlags.get$I(iModel)  || m.pis == null   || !m.isDrawPolygon && (iModel >= m.pis.length || m.pis[iModel] == null  )  ) continue;
for (var iVertex=(m.isDrawPolygon ? 3 : m.pis[iModel].length); --iVertex >= 0; ) {
try {
var iv=m.pis[iModel][iVertex];
var pt=(m.altVertices == null  ? m.vs[iv] : m.altVertices[iv]);
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, pt, dmin2, this.ptXY);
if (d2 >= 0) {
this.pickedMesh=m;
dmin2=d2;
this.pickedModel=iModel;
this.pickedVertex=iVertex;
this.pickedPt=pt;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
} else {
throw e;
}
}
}
}
}}
return (this.pickedMesh != null );
}, p$1);

Clazz.newMeth(C$, 'getCommand$org_jmol_shape_Mesh', function (mesh) {
if (mesh != null ) return p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [mesh, mesh.modelIndex]);
var sb=Clazz.new_($I$(16,1));
var key=(this.explicitID && this.previousMeshID != null   && $I$(17).isWild$S(this.previousMeshID)  ? this.previousMeshID : null);
var list=this.getMeshList$S$Z(key, false);
for (var i=list.size$(); --i >= 0; ) {
var m=list.get$I(i);
sb.append$S(p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [m, m.modelIndex]));
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getCommand2$org_jmol_shape_Mesh$I', function (mesh, iModel) {
var dmesh=mesh;
if (!dmesh.isValid || dmesh.drawType === $I$(10).NONE  && dmesh.lineData == null   && dmesh.drawVertexCount == 0  && dmesh.drawVertexCounts == null   ) return "";
var str=Clazz.new_($I$(16,1));
var modelCount=this.vwr.ms.mc;
if (!dmesh.isFixed && iModel >= 0  && modelCount > 1 ) (function(a,f){return f.apply(null,a)})([str, "frame " + this.vwr.getModelNumberDotted$I(iModel)],$I$(18).appendCmd$javajs_util_SB$S);
str.append$S("  draw ID ").append$S($I$(17).esc$S(dmesh.thisID));
if (dmesh.isFixed) str.append$S(" fixed");
if (iModel < 0) iModel=0;
if (dmesh.noHead) str.append$S(" noHead");
 else if (dmesh.isBarb) str.append$S(" barb");
if (dmesh.scale != 1  && dmesh.isScaleSet  && (dmesh.haveXyPoints || dmesh.connectedAtoms != null   || dmesh.drawType === $I$(10).CIRCLE   || dmesh.drawType === $I$(10).ARC  ) ) str.append$S(" scale ").appendF$F(dmesh.scale);
if (dmesh.width != 0 ) str.append$S(" diameter ").appendF$F((dmesh.drawType === $I$(10).CYLINDER  ? Math.abs(dmesh.width) : dmesh.drawType === $I$(10).CIRCULARPLANE  ? Math.abs(dmesh.width * dmesh.scale) : dmesh.width));
 else if (dmesh.diameter > 0) str.append$S(" diameter ").appendI$I(dmesh.diameter);
if (dmesh.lineData != null ) {
str.append$S("  lineData [");
var n=dmesh.lineData.size$();
for (var j=0; j < n; ) {
var pts=dmesh.lineData.get$I(j);
var s=$I$(19).eP$javajs_util_T3(pts[0]);
str.append$S(s.substring$I$I(1, s.length$() - 1));
str.append$S(",");
s=$I$(19).eP$javajs_util_T3(pts[1]);
str.append$S(s.substring$I$I(1, s.length$() - 1));
if (++j < n) str.append$S(", ");
}
str.append$S("]");
} else {
var nVertices=dmesh.drawVertexCount > 0 || dmesh.drawVertexCounts == null   ? dmesh.drawVertexCount : dmesh.drawVertexCounts[iModel >= 0 ? iModel : 0];
switch (dmesh.drawTypes == null  || dmesh.drawTypes[iModel] == null   ? dmesh.drawType : dmesh.drawTypes[iModel]) {
case $I$(10).NONE:
case $I$(10).MULTIPLE:
break;
case $I$(10).POLYGON:
str.append$S(" POLYGON ").appendI$I(nVertices);
break;
case $I$(10).PLANE:
if (nVertices == 4) str.append$S(" PLANE");
break;
case $I$(10).LINE_SEGMENT:
str.append$S(" LINE");
break;
case $I$(10).ARC:
str.append$S(dmesh.isVector ? " ARROW ARC" : " ARC");
break;
case $I$(10).ARROW:
str.append$S(dmesh.isVector ? " VECTOR" : " ARROW");
if (dmesh.connectedAtoms != null ) str.append$S(" connect ").append$S($I$(19).eAI$IA(dmesh.connectedAtoms));
break;
case $I$(10).CIRCLE:
str.append$S(" CIRCLE");
break;
case $I$(10).CURVE:
str.append$S(" CURVE");
break;
case $I$(10).CIRCULARPLANE:
case $I$(10).CYLINDER:
str.append$S(" CYLINDER");
break;
case $I$(10).POINT:
nVertices=1;
break;
case $I$(10).LINE:
nVertices=2;
break;
}
if (dmesh.modelIndex < 0 && !dmesh.isFixed ) {
for (var i=0; i < modelCount; i++) if (C$.isPolygonDisplayable$org_jmol_shape_Mesh$I(dmesh, i)) {
if (nVertices == 0) nVertices=dmesh.drawVertexCounts[i];
str.append$S(" [ " + i);
var s=C$.getVertexList$org_jmol_shapespecial_DrawMesh$I$I(dmesh, i, nVertices);
if (s.indexOf$S("NaN") >= 0) return "";
str.append$S(s);
str.append$S(" ] ");
}
} else if (dmesh.drawType === $I$(10).POLYGON ) {
for (var i=0; i < dmesh.vc; i++) str.append$S(" ").append$S($I$(19).eP$javajs_util_T3(dmesh.vs[i]));

str.append$S(" ").appendI$I(dmesh.pc);
for (var i=0; i < dmesh.pc; i++) if (dmesh.pis[i] == null ) str.append$S(" [0 0 0 0]");
 else str.append$S(" ").append$S($I$(19).eAI$IA(dmesh.pis[i]));

} else {
var s=C$.getVertexList$org_jmol_shapespecial_DrawMesh$I$I(dmesh, iModel, nVertices);
if (s.indexOf$S("NaN") >= 0) return "";
str.append$S(s);
}}if (dmesh.mat4 != null ) {
var v=Clazz.new_($I$(2,1));
dmesh.mat4.getTranslation$javajs_util_T3(v);
str.append$S(" offset ").append$S($I$(19).eP$javajs_util_T3(v));
}if (dmesh.title != null ) {
var s="";
for (var i=0; i < dmesh.title.length; i++) s += "|" + dmesh.title[i];

str.append$S((function(a,f){return f.apply(null,a)})([s.substring$I(1)],$I$(17).esc$S));
}str.append$S(";\n");
(function(a,f){return f.apply(null,a)})([str, dmesh.getState$S("draw")],$I$(18).appendCmd$javajs_util_SB$S);
(function(a,f){return f.apply(null,a)})([str, $I$(18).getColorCommandUnk$S$H$Z("draw", dmesh.colix, this.translucentAllowed)],$I$(18).appendCmd$javajs_util_SB$S);
return str.toString();
}, p$1);

Clazz.newMeth(C$, 'isPolygonDisplayable$org_jmol_shape_Mesh$I', function (mesh, i) {
return (i < mesh.pis.length && mesh.pis[i] != null   && mesh.pis[i].length > 0 );
}, 1);

Clazz.newMeth(C$, 'getVertexList$org_jmol_shapespecial_DrawMesh$I$I', function (mesh, iModel, nVertices) {
var str="";
try {
if (iModel >= mesh.pis.length) iModel=0;
var adjustPt=(mesh.isVector && mesh.drawType !== $I$(10).ARC  );
for (var i=0; i < nVertices; i++) {
var pt=mesh.vs[mesh.pis[iModel][i]];
if (pt.z == 3.4028235E38  || pt.z == -3.4028235E38  ) {
str += (i == 0 ? " " : " ,") + "[" + (pt.x|0) + " " + (pt.y|0) + (pt.z < 0  ? " %]" : "]") ;
} else if (adjustPt && i == 1 ) {
var pt1=$I$(8).newP$javajs_util_T3(pt);
pt1.sub$javajs_util_T3(mesh.vs[mesh.pis[iModel][0]]);
str += " " + $I$(19).eP$javajs_util_T3(pt1);
} else {
str += " " + $I$(19).eP$javajs_util_T3(pt);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(9).error$S("Unexpected error in Draw.getVertexList");
} else {
throw e;
}
}
return str;
}, 1);

Clazz.newMeth(C$, 'getShapeDetail$', function () {
var V=Clazz.new_($I$(7,1));
for (var i=0; i < this.meshCount; i++) {
var mesh=this.dmeshes[i];
if (mesh.vc == 0) continue;
var info=Clazz.new_($I$(4,1));
info.put$O$O("visible", mesh.visible ? $I$(20).TRUE : $I$(20).FALSE);
info.put$O$O("fixed", mesh.ptCenters == null  ? $I$(20).TRUE : $I$(20).FALSE);
info.put$O$O("ID", (mesh.thisID == null  ? "<noid>" : mesh.thisID));
info.put$O$O("drawType", mesh.drawType.$name);
if (mesh.diameter > 0) info.put$O$O("diameter", Integer.valueOf$I(mesh.diameter));
if (mesh.width != 0 ) info.put$O$O("width", Float.valueOf$F(mesh.width));
info.put$O$O("scale", Float.valueOf$F(mesh.scale));
if (mesh.drawType === $I$(10).MULTIPLE ) {
var m=Clazz.new_($I$(7,1));
var modelCount=this.vwr.ms.mc;
for (var k=0; k < modelCount; k++) {
if (mesh.ptCenters[k] == null ) continue;
var mInfo=Clazz.new_($I$(4,1));
mInfo.put$O$O("modelIndex", Integer.valueOf$I(k));
mInfo.put$O$O("command", p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [mesh, k]));
mInfo.put$O$O("center", mesh.ptCenters[k]);
var nPoints=mesh.drawVertexCounts[k];
mInfo.put$O$O("vertexCount", Integer.valueOf$I(nPoints));
if (nPoints > 1) mInfo.put$O$O("axis", mesh.axes[k]);
var v=Clazz.new_($I$(7,1));
for (var ipt=0; ipt < nPoints; ipt++) v.addLast$O(mesh.vs[mesh.pis[k][ipt]]);

mInfo.put$O$O("vertices", v);
if (mesh.drawTypes[k] === $I$(10).LINE ) {
var d=mesh.vs[mesh.pis[k][0]].distance$javajs_util_T3(mesh.vs[mesh.pis[k][1]]);
mInfo.put$O$O("length_Ang", Float.valueOf$F(d));
}m.addLast$O(mInfo);
}
info.put$O$O("models", m);
} else {
info.put$O$O("command", p$1.getCommand$org_jmol_shape_Mesh.apply(this, [mesh]));
info.put$O$O("center", mesh.ptCenter);
if (mesh.drawVertexCount > 1) info.put$O$O("axis", mesh.axis);
var v=Clazz.new_($I$(7,1));
for (var j=0; j < mesh.vc; j++) v.addLast$O(mesh.vs[j]);

info.put$O$O("vertices", v);
if (mesh.drawType === $I$(10).LINE ) info.put$O$O("length_Ang", Float.valueOf$F(mesh.vs[0].distance$javajs_util_T3(mesh.vs[1])));
}V.addLast$O(info);
}
return V;
});

Clazz.newMeth(C$, 'getShapeState$', function () {
var s=Clazz.new_($I$(16,1));
s.append$S("\n");
$I$(18).appendCmd$javajs_util_SB$S(s, this.myType + " delete");
for (var i=0; i < this.meshCount; i++) {
var mesh=this.dmeshes[i];
if (mesh.vc == 0 && mesh.lineData == null  ) continue;
s.append$S(p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [mesh, mesh.modelIndex]));
if (!mesh.visible) s.append$S(" " + this.myType + " ID " + $I$(17).esc$S(mesh.thisID) + " off;\n" );
}
return s.toString();
});

Clazz.newMeth(C$, 'randomPoint$', function () {
return (function(a,f){return f.apply(null,a)})([Math.random(), Math.random(), Math.random()],$I$(8).new3$F$F$F);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Draw, "EnumDrawType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'S',['$name']]]

Clazz.newMeth(C$, 'c$$I$S', function (id, name) {
;C$.$init$.apply(this);
this.id=id;
this.$name=name;
}, 1);

Clazz.newMeth(C$, 'getType$I', function (nPoints) {
switch (nPoints) {
case 1:
return C$.POINT;
case 2:
return C$.LINE;
case 4:
return C$.PLANE;
default:
return C$.NONE;
}
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S, "MULTIPLE", 0, [-1, "multiple"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "NONE", 1, [0, "none"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "POINT", 2, [1, "point"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "LINE", 3, [2, "line"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "PLANE", 4, [4, "plane"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CYLINDER", 5, [14, "cylinder"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "ARROW", 6, [15, "arrow"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CIRCLE", 7, [16, "circle"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CURVE", 8, [17, "curve"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "CIRCULARPLANE", 9, [18, "circularPlane"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "ARC", 10, [19, "arc"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "LINE_SEGMENT", 11, [20, "lineSegment"]);
Clazz.newEnumConst($vals, C$.c$$I$S, "POLYGON", 12, [21, "polygon"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
