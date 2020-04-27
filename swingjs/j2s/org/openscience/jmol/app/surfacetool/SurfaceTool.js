(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.surfacetool"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','java.util.ArrayList','org.jmol.i18n.GT','org.openscience.jmol.app.surfacetool.Slice','org.openscience.jmol.app.surfacetool.SurfaceToolGUI','org.jmol.util.BoxInfo','org.openscience.jmol.app.surfacetool.SurfaceStatus','javajs.util.SB','javax.swing.JOptionPane','org.jmol.util.Escape','org.jmol.script.T']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SurfaceTool");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.negCorner=Clazz.new_($I$(1,1));
this.posCorner=Clazz.new_($I$(1,1));
this.center=Clazz.new_($I$(1,1));
this.boxVec=Clazz.new_($I$(2,1));
this.surfaces=Clazz.new_($I$(3,1));
this.angleUnits=0;
this.angleUnitsList=Clazz.array(String, -1, [$I$(4).$$S("Degrees"), $I$(4).$$S("Radians"), $I$(4).$$S("Gradians"), $I$(4).$$S("Circle Fraction"), $I$(4).$$S("Units of Pi")]);
this.slice=Clazz.new_($I$(5,1));
this.leftOn=false;
this.rightOn=false;
this.ghostOn=false;
this.capOn=false;
this.useMolecular=false;
this.usePercent=false;
},1);

C$.$fields$=[['Z',['useGUI','leftOn','rightOn','ghostOn','capOn','useMolecular','usePercent'],'F',['angleXY','anglefromZ','positionMin','position','thickness','thicknessMax'],'I',['angleUnits'],'O',['gui','org.openscience.jmol.app.surfacetool.SurfaceToolGUI','vwr','org.jmol.api.JmolViewer','negCorner','javajs.util.P3','+posCorner','+center','boxVec','javajs.util.V3','surfaces','java.util.List','angleUnitsList','String[]','slice','org.openscience.jmol.app.surfacetool.Slice']]]

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolViewer$org_openscience_jmol_app_HistoryFile$S$Z', function (vwr, hfile, winName, useGUI) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.useGUI=useGUI;
p$1.updateSurfaceInfo.apply(this, []);
p$1.chooseBestBoundBox.apply(this, []);
this.setSurfaceToolParam$();
p$1.initSlice.apply(this, []);
this.gui=(useGUI ? Clazz.new_($I$(6,1).c$$org_jmol_api_JmolViewer$org_openscience_jmol_app_HistoryFile$S$org_openscience_jmol_app_surfacetool_SurfaceTool,[vwr, hfile, winName, this]) : null);
}, 1);

Clazz.newMeth(C$, 'toFront$', function () {
this.gui.toFront$();
});

Clazz.newMeth(C$, 'toFrontOrGotFocus$', function () {
p$1.updateSurfaceInfo.apply(this, []);
p$1.chooseBestBoundBox.apply(this, []);
this.setSurfaceToolParam$();
});

Clazz.newMeth(C$, 'chooseBestBoundBox', function () {
var box=Clazz.new_($I$(7,1));
this.vwr.calcAtomsMinMax$javajs_util_BS$org_jmol_util_BoxInfo(null, box);
this.center.setT$javajs_util_T3(box.getBoundBoxCenter$());
this.boxVec.setT$javajs_util_T3(box.getBoundBoxCornerVector$());
this.posCorner.add2$javajs_util_T3$javajs_util_T3(this.center, this.boxVec);
this.negCorner.sub2$javajs_util_T3$javajs_util_T3(this.center, this.boxVec);
var shapes=this.vwr.getProperty$S$S$O("DATA_API", "shapeManager", "getShapes");
box=this.checkMeshBB$org_jmol_shape_ShapeA$I$org_jmol_util_BoxInfo(shapes, 24, box);
box=this.checkMeshBB$org_jmol_shape_ShapeA$I$org_jmol_util_BoxInfo(shapes, 29, box);
box=this.checkMeshBB$org_jmol_shape_ShapeA$I$org_jmol_util_BoxInfo(shapes, 27, box);
if (box != null ) {
this.center.setT$javajs_util_T3(box.getBoundBoxCenter$());
this.negCorner.sub2$javajs_util_T3$javajs_util_T3(this.center, box.getBoundBoxCornerVector$());
this.posCorner.add2$javajs_util_T3$javajs_util_T3(this.center, box.getBoundBoxCornerVector$());
this.boxVec.setT$javajs_util_T3(box.getBoundBoxCornerVector$());
}}, p$1);

Clazz.newMeth(C$, 'checkMeshBB$org_jmol_shape_ShapeA$I$org_jmol_util_BoxInfo', function (shapes, kind, box) {
var mc=shapes[kind];
if (mc == null ) return box;
for (var i=0; i < mc.meshCount; i++) {
var m=mc.meshes[i];
if (!m.isValid || m.vc == 0 && m.pc == 0  ) continue;
if (m.thisID.equalsIgnoreCase$S("_slicerleft") || m.thisID.equalsIgnoreCase$S("_slicerright") ) continue;
var bb=m.getBoundingBox$();
if (bb == null ) continue;
box.addBoundBoxPoint$javajs_util_T3(bb[0]);
box.addBoundBoxPoint$javajs_util_T3(bb[1]);
}
return box;
});

Clazz.newMeth(C$, 'setSurfaceToolParam$', function () {
this.thicknessMax=2 * this.boxVec.length$();
var delta=this.position - this.positionMin;
if (this.useMolecular) {
if (this.negCorner.x < 0  && this.negCorner.y < 0   && this.negCorner.z < 0  ) {
this.positionMin=-1 * this.negCorner.length$();
} else {
this.positionMin=Math.min(this.negCorner.x, this.negCorner.y);
this.positionMin=Math.min(this.negCorner.z, this.positionMin);
}} else {
this.positionMin=-1 * (this.boxVec.length$());
}this.position=this.positionMin + delta;
});

Clazz.newMeth(C$, 'updateSurfaceInfo', function () {
var shapes=this.vwr.getProperty$S$S$O("DATA_API", "shapeManager", "getShapes");
p$1.setSyncStarting.apply(this, []);
p$1.updateMeshInfo$org_jmol_shape_ShapeA$I.apply(this, [shapes, 24]);
p$1.updateMeshInfo$org_jmol_shape_ShapeA$I.apply(this, [shapes, 29]);
p$1.updateMeshInfo$org_jmol_shape_ShapeA$I.apply(this, [shapes, 27]);
p$1.syncDone.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setSyncStarting', function () {
for (var i=0; i < this.surfaces.size$(); i++) this.surfaces.get$I(i).foundDuringLastSync=false;

}, p$1);

Clazz.newMeth(C$, 'syncDone', function () {
for (var i=(this.surfaces.size$() - 1); i >= 0; i--) {
if (!this.surfaces.get$I(i).foundDuringLastSync) this.surfaces.remove$I(i);
}
}, p$1);

Clazz.newMeth(C$, 'updateMeshInfo$org_jmol_shape_ShapeA$I', function (shapes, kind) {
if (shapes != null ) {
var mc=shapes[kind];
if (mc != null ) {
var meshIndexList=Clazz.array(Integer.TYPE, [mc.meshCount]);
for (var i=0; i < mc.meshCount; i++) meshIndexList[i]=-1;

if (!this.surfaces.isEmpty$()) {
var surfaceIndexList=Clazz.array(Integer.TYPE, [this.surfaces.size$()]);
for (var i=0; i < this.surfaces.size$(); i++) surfaceIndexList[i]=-1;

for (var i=0; i < mc.meshCount; i++) {
var m=mc.meshes[i];
if (!p$1.checkMesh$org_jmol_shape_Mesh.apply(this, [m])) {
meshIndexList[i]=-2;
} else {
for (var j=0; j < this.surfaces.size$(); j++) {
if (this.surfaces.get$I(j).id == m.thisID) {
surfaceIndexList[j]=i;
meshIndexList[i]=j;
}}
}}
for (var i=0; i < surfaceIndexList.length; i++) {
if (surfaceIndexList[i] >= 0) {
this.surfaces.get$I(i).updateExisting$org_jmol_shape_Mesh(mc.meshes[surfaceIndexList[i]]);
}}
} else {
for (var i=0; i < mc.meshCount; i++) {
var m=mc.meshes[i];
if (!p$1.checkMesh$org_jmol_shape_Mesh.apply(this, [m])) {
meshIndexList[i]=-2;
} else {
meshIndexList[i]=-1;
}}
}for (var i=0; i < meshIndexList.length; i++) {
if (meshIndexList[i] == -1) this.surfaces.add$O(Clazz.new_($I$(8,1).c$$org_jmol_shape_Mesh$I,[mc.meshes[i], kind]));
}
}}}, p$1);

Clazz.newMeth(C$, 'checkMesh$org_jmol_shape_Mesh', function (m) {
if (!m.isValid || m.vc == 0 && m.pc == 0  ) {
return false;
}if (m.thisID.equalsIgnoreCase$S("_slicerleft") || m.thisID.equalsIgnoreCase$S("_slicerright") ) {
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'setAngleUnits$I', function (units) {
this.angleUnits=units;
});

Clazz.newMeth(C$, 'getNegCorner$', function () {
return this.negCorner;
});

Clazz.newMeth(C$, 'getPosCorner$', function () {
return this.posCorner;
});

Clazz.newMeth(C$, 'initSlice', function () {
this.angleXY=0;
this.anglefromZ=1.5707964;
this.position=0;
this.thickness=this.negCorner.distance$javajs_util_T3(this.posCorner) / 5;
this.slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(this.angleXY, this.anglefromZ, this.position, this.thickness, this.center, this.boxVec, this.useMolecular);
}, p$1);

Clazz.newMeth(C$, 'showSliceBoundaryPlanes$Z', function (onOrOff) {
this.leftOn=this.rightOn=onOrOff;
var cmd=Clazz.new_($I$(9,1));
p$1.drawSlicePlane$javajs_util_SB$I$Z.apply(this, [cmd, 1073741996, onOrOff]);
p$1.drawSlicePlane$javajs_util_SB$I$Z.apply(this, [cmd, 1073742126, onOrOff]);
this.vwr.evalStringQuiet$S(cmd.toString());
});

Clazz.newMeth(C$, 'setSlice$F$F$F$F', function (angleXY, anglefromZ, position, thickness) {
if (this.usePercent) {
(function(a,f){return f.apply(null,a)})([null, $I$(4).$$S("Percentage scaling not implemented yet!"), "Warning", 2],$I$(10).showMessageDialog$java_awt_Component$O$S$I);
}this.angleXY=angleXY;
this.anglefromZ=anglefromZ;
this.position=position;
this.thickness=thickness;
this.slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(angleXY, anglefromZ, position, thickness, this.center, this.boxVec, this.useMolecular);
});

Clazz.newMeth(C$, 'setSliceAngleXY$F', function (angle) {
if (this.angleXY != angle ) {
this.angleXY=angle;
this.slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(this.angleXY, this.anglefromZ, this.position, this.thickness, this.center, this.boxVec, this.useMolecular);
}});

Clazz.newMeth(C$, 'getSliceAngleXY$', function () {
return (this.angleXY);
});

Clazz.newMeth(C$, 'setSliceAnglefromZ$F', function (angle) {
if (this.anglefromZ != angle ) {
this.anglefromZ=angle;
this.slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(this.angleXY, this.anglefromZ, this.position, this.thickness, this.center, this.boxVec, this.useMolecular);
}});

Clazz.newMeth(C$, 'getAnglefromZ$', function () {
return (this.anglefromZ);
});

Clazz.newMeth(C$, 'setSlicePosition$F', function (where) {
if (this.usePercent) {
(function(a,f){return f.apply(null,a)})([null, $I$(4).$$S("Percentage scaling not implemented yet!"), "Warning", 2],$I$(10).showMessageDialog$java_awt_Component$O$S$I);
}if (this.position != where ) {
this.position=where;
this.slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(this.angleXY, this.anglefromZ, this.position, this.thickness, this.center, this.boxVec, this.useMolecular);
}});

Clazz.newMeth(C$, 'getSlicePosition$', function () {
return (this.position);
});

Clazz.newMeth(C$, 'setSliceThickness$F', function (width) {
if (this.usePercent) {
(function(a,f){return f.apply(null,a)})([null, $I$(4).$$S("Percentage scaling not implemented yet!"), "Warning", 2],$I$(10).showMessageDialog$java_awt_Component$O$S$I);
}if (this.thickness != width ) {
this.thickness=width;
this.slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(this.angleXY, this.anglefromZ, this.position, this.thickness, this.center, this.boxVec, this.useMolecular);
}});

Clazz.newMeth(C$, 'getSliceThickness$', function () {
return (this.thickness);
});

Clazz.newMeth(C$, 'updateSlices$', function () {
for (var i=0; i < this.surfaces.size$(); i++) {
this.sliceObject$S$I(this.surfaces.get$I(i).id, this.surfaces.get$I(i).kind);
}
});

Clazz.newMeth(C$, 'sliceObject$S$I', function (objectName, kind) {
var cmdStart="";
var idStr=" ID \"" + objectName + "\"" ;
var slabCapStr=(this.capOn ? " cap " : " slab ");
var ghostStr=(this.ghostOn ? "translucent 0.8 mesh " : "");
switch (kind) {
case 24:
cmdStart="isosurface";
break;
case 29:
cmdStart="pmesh";
break;
case 27:
cmdStart="mo";
idStr="";
slabCapStr=" slab ";
break;
}
var cmd=Clazz.new_($I$(9,1));
p$1.drawSlicePlane$javajs_util_SB$I$Z.apply(this, [cmd, 1073741996, this.leftOn]);
p$1.drawSlicePlane$javajs_util_SB$I$Z.apply(this, [cmd, 1073742126, this.rightOn]);
cmd.append$S(cmdStart).append$S(idStr).append$S(" slab none;");
cmd.append$S(cmdStart).append$S(idStr);
cmd.append$S(slabCapStr).append$S(ghostStr).append$S("-").append$S($I$(11).eP4$javajs_util_P4(this.slice.leftPlane));
cmd.append$S(";").append$S(cmdStart).append$S(idStr);
cmd.append$S(slabCapStr).append$S(ghostStr).append$S($I$(11).eP4$javajs_util_P4(this.slice.rightPlane));
cmd.append$S(";");
this.vwr.evalStringQuiet$S(cmd.toString());
return;
});

Clazz.newMeth(C$, 'drawSlicePlane$javajs_util_SB$I$Z', function (cmd, side, on) {
var color;
var name=$I$(12).nameOf$I(side);
var plane;
switch (side) {
default:
case 1073741996:
plane=this.slice.leftPlane;
color="magenta";
break;
case 1073742126:
plane=this.slice.rightPlane;
color="cyan";
break;
}
cmd.append$S("isosurface _slicer").append$S(name);
if (on) {
cmd.append$S(" plane ").append$S($I$(11).eP4$javajs_util_P4(plane)).append$S(" translucent 0.7 ").append$S(color).append$S(";");
} else {
cmd.append$S(" off;");
}}, p$1);

Clazz.newMeth(C$, 'getAngleUnits$', function () {
return this.angleUnits;
});

Clazz.newMeth(C$, 'getGhostOn$', function () {
return this.ghostOn;
});

Clazz.newMeth(C$, 'setGhostOn$Z', function (b) {
this.ghostOn=b;
});

Clazz.newMeth(C$, 'getUseMolecular$', function () {
return this.useMolecular;
});

Clazz.newMeth(C$, 'setUseMolecular$Z', function (on) {
this.useMolecular=on;
});

Clazz.newMeth(C$, 'getPositionMin$', function () {
return this.positionMin;
});

Clazz.newMeth(C$, 'getThicknessMax$', function () {
return this.thicknessMax;
});

Clazz.newMeth(C$, 'getCenter$', function () {
return this.center;
});

Clazz.newMeth(C$, 'getBoxVec$', function () {
return this.boxVec;
});

Clazz.newMeth(C$, 'getSliceMiddle$', function () {
return this.slice.getMiddle$();
});

Clazz.newMeth(C$, 'getAngleUnitsList$', function () {
return this.angleUnitsList;
});

Clazz.newMeth(C$, 'getCapOn$', function () {
return this.capOn;
});

Clazz.newMeth(C$, 'setCapOn$Z', function (b) {
this.capOn=b;
});

Clazz.newMeth(C$, 'getSurfaces$', function () {
return this.surfaces;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
