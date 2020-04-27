(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),p$1={},I$=[[0,'org.jmol.shapesurface.IsosurfaceMesh','javajs.util.P4','javajs.util.P3i','javajs.util.AU','org.jmol.jvxl.readers.SurfaceGenerator','org.jmol.jvxl.data.JvxlData','org.jmol.viewer.Viewer','javajs.util.PT','org.jmol.util.C','javajs.util.P3','org.jmol.viewer.JC','javajs.util.Quat','Boolean','javajs.util.M4','org.jmol.util.Logger','javajs.util.Rdr','javajs.util.Lst','javajs.util.V3','org.jmol.jvxl.data.MeshData','javajs.util.SB','org.jmol.jvxl.data.JvxlCoder','org.jmol.shape.Shape','org.jmol.util.Escape','javajs.util.BS','org.jmol.util.TempArray','javajs.util.A4','javajs.util.M3','org.jmol.shape.Mesh','java.util.Hashtable','javajs.util.CU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Isosurface", null, 'org.jmol.shape.MeshCollection', 'org.jmol.jvxl.api.MeshDataServer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isomeshes=Clazz.array($I$(1), [4]);
this.scriptAppendix="";
this.allowMesh=true;
this.nLCAO=0;
this.lcaoDir=Clazz.new_($I$(2,1));
this.ptXY=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['iHaveBitSets','explicitContours','isPhaseColored','isColorExplicit','isWithinNot','allowMesh','iHaveModelIndex','associateNormals'],'F',['scale3d','withinDistance2'],'I',['atomIndex','moNumber','colorType','nLCAO'],'H',['defaultColix','meshColix'],'S',['actualID','scriptAppendix','script','oldFileName','newFileName'],'O',['isomeshes','org.jmol.shapesurface.IsosurfaceMesh[]','thisMesh','org.jmol.shapesurface.IsosurfaceMesh','moLinearCombination','float[]','center','javajs.util.P3','sg','org.jmol.jvxl.readers.SurfaceGenerator','jvxlData','org.jmol.jvxl.data.JvxlData','withinPoints','javajs.util.Lst','cutoffRange','float[]','lcaoDir','javajs.util.P4','ptXY','javajs.util.P3i','keyXy','int[]']]]

Clazz.newMeth(C$, 'allocMesh$S$org_jmol_shape_Mesh', function (thisID, m) {
var index=this.meshCount++;
this.meshes=this.isomeshes=$I$(4).ensureLength$O$I(this.isomeshes, this.meshCount * 2);
this.currentMesh=this.thisMesh=this.isomeshes[index]=(m == null  ? Clazz.new_($I$(1,1).c$$org_jmol_viewer_Viewer$S$H$I,[this.vwr, thisID, this.colix, index]) : m);
this.currentMesh.index=index;
if (this.sg != null ) this.sg.setJvxlData$org_jmol_jvxl_data_JvxlData(this.jvxlData=this.thisMesh.jvxlData);
});

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.myType="isosurface";
this.newSg$();
});

Clazz.newMeth(C$, 'newSg$', function () {
this.sg=Clazz.new_([this.vwr, this, null, this.jvxlData=Clazz.new_($I$(6,1))],$I$(5,1).c$$org_jmol_atomdata_AtomDataServer$org_jmol_jvxl_api_MeshDataServer$org_jmol_jvxl_data_MeshData$org_jmol_jvxl_data_JvxlData);
this.sg.params.showTiming=this.vwr.getBoolean$I(603979934);
this.sg.version="Jmol " + $I$(7).getJmolVersion$();
});

Clazz.newMeth(C$, 'clearSg$', function () {
this.sg=null;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
this.setPropI$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'setPropI$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("cache" == propertyName) {
if (this.currentMesh == null ) return;
var id=this.currentMesh.thisID;
var imodel=this.currentMesh.modelIndex;
this.vwr.cachePut$S$O("cache://isosurface_" + id, (this.getPropI$S$I("jvxlDataXml", -1)).getBytes$());
this.deleteMeshI$I(this.currentMesh.index);
this.setPropI$S$O$javajs_util_BS("init", null, null);
this.setPropI$S$O$javajs_util_BS("thisID", id, null);
this.setPropI$S$O$javajs_util_BS("modelIndex", Integer.valueOf$I(imodel), null);
this.setPropI$S$O$javajs_util_BS("fileName", "cache://isosurface_" + id, null);
this.setPropI$S$O$javajs_util_BS("readFile", null, null);
this.setPropI$S$O$javajs_util_BS("finalize", "isosurface ID " + $I$(8).esc$S(id) + (imodel >= 0 ? " modelIndex " + imodel : "") + " /*file*/" + $I$(8).esc$S("cache://isosurface_" + id) , null);
this.setPropI$S$O$javajs_util_BS("clear", null, null);
return;
}if ("delete" == propertyName) {
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, [propertyName, value, bs]);
if (!this.explicitID) this.nLCAO=this.nUnnamed=0;
this.currentMesh=this.thisMesh=null;
return;
}if ("remapInherited" == propertyName) {
for (var i=this.meshCount; --i >= 0; ) {
if (this.isomeshes[i] != null  && "#inherit;".equals$O(this.isomeshes[i].colorCommand) ) this.isomeshes[i].remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F(this.vwr, null, NaN);
}
return;
}if ("remapColor" == propertyName) {
if (this.thisMesh != null ) this.thisMesh.remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F(this.vwr, value, this.translucentLevel);
return;
}if ("thisID" == propertyName) {
if (this.actualID != null ) value=this.actualID;
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["thisID", value, null]);
return;
}if ("params" == propertyName) {
if (this.thisMesh != null ) {
p$1.ensureMeshSource.apply(this, []);
this.thisMesh.checkAllocColixes$();
var data=value;
var colixes=data[0];
var atomMap=null;
if (colixes != null ) {
for (var i=0; i < colixes.length; i++) {
var colix=colixes[i];
var f=0;
if (f > 0.01 ) colix=$I$(9).getColixTranslucent3$H$Z$F(colix, true, f);
colixes[i]=colix;
}
atomMap=Clazz.array(Integer.TYPE, [bs.length$()]);
for (var pt=0, i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1), pt++) atomMap[i]=pt;

}this.thisMesh.setVertexColixesForAtoms$org_jmol_viewer_Viewer$HA$IA$javajs_util_BS(this.vwr, colixes, atomMap, bs);
this.thisMesh.setVertexColorMap$();
}return;
}if ("atomcolor" == propertyName) {
if (this.thisMesh != null ) {
p$1.ensureMeshSource.apply(this, []);
this.thisMesh.colorVertices$H$javajs_util_BS$Z($I$(9).getColixO$O(value), bs, true);
}return;
}if ("pointSize" == propertyName) {
if (this.thisMesh != null ) {
this.thisMesh.volumeRenderPointSize=(value).floatValue$();
}return;
}if ("vertexcolor" == propertyName) {
if (this.thisMesh != null ) {
this.thisMesh.colorVertices$H$javajs_util_BS$Z($I$(9).getColixO$O(value), bs, false);
}return;
}if ("colorPhase" == propertyName) {
var colors=value;
var colix0=(function(a,f){return f.apply(null,a)})([(colors[0]).intValue$()],$I$(9).getColix$I);
var colix1=(function(a,f){return f.apply(null,a)})([(colors[1]).intValue$()],$I$(9).getColix$I);
var id=(this.thisMesh != null  ? this.thisMesh.thisID : $I$(8).isWild$S(this.previousMeshID) ? this.previousMeshID : null);
var list=this.getMeshList$S$Z(id, false);
for (var i=list.size$(); --i >= 0; ) p$1.setColorPhase$org_jmol_shapesurface_IsosurfaceMesh$H$H.apply(this, [list.get$I(i), colix0, colix1]);

return;
}if ("color" == propertyName) {
var color=(function(a,f){return f.apply(null,a)})([$I$(9).getColixO$O(value)],$I$(9).getHexCode$H);
if (this.thisMesh != null ) {
p$1.setIsoMeshColor$org_jmol_shapesurface_IsosurfaceMesh$S.apply(this, [this.thisMesh, color]);
} else {
var list=this.getMeshList$S$Z($I$(8).isWild$S(this.previousMeshID) ? this.previousMeshID : null, false);
for (var i=list.size$(); --i >= 0; ) p$1.setIsoMeshColor$org_jmol_shapesurface_IsosurfaceMesh$S.apply(this, [list.get$I(i), color]);

}p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, [propertyName, value, bs]);
return;
}if ("nocontour" == propertyName) {
if (this.thisMesh != null ) {
this.thisMesh.deleteContours$();
}return;
}if ("fixed" == propertyName) {
this.isFixed=(value).booleanValue$();
p$1.setMeshI.apply(this, []);
return;
}if ("newObject" == propertyName) {
if (this.thisMesh != null ) this.thisMesh.clearType$S$Z(this.thisMesh.meshType, false);
return;
}if ("moveIsosurface" == propertyName) {
if (this.thisMesh != null  && !this.thisMesh.isModelConnected ) {
this.thisMesh.updateCoordinates$javajs_util_M4$javajs_util_BS(value, null);
this.thisMesh.altVertices=null;
}return;
}if ("refreshTrajectories" == propertyName) {
var m=((value)[0]).intValue$();
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i].modelIndex == m && (this.meshes[i].connectedAtoms != null  || this.meshes[i].isModelConnected ) ) (this.meshes[i]).updateCoordinates$javajs_util_M4$javajs_util_BS((value)[2], (value)[1]);

return;
}if ("modelIndex" == propertyName) {
if (!this.iHaveModelIndex) {
this.modelIndex=(value).intValue$();
this.isFixed=(this.modelIndex < 0);
this.sg.params.modelIndex=Math.abs(this.modelIndex);
}return;
}if ("lcaoCartoon" == propertyName || "lonePair" == propertyName  || "radical" == propertyName ) {
var info=value;
if (!this.explicitID) {
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["thisID", null, null]);
}if (!this.sg.setProp$S$O$javajs_util_BS("lcaoCartoonCenter", info[2], null)) p$1.drawLcaoCartoon$javajs_util_V3$javajs_util_V3$javajs_util_V3$I.apply(this, [info[0], info[1], info[3], ("lonePair" == propertyName ? 2 : "radical" == propertyName ? 1 : 0)]);
return;
}if ("select" == propertyName) {
if (this.iHaveBitSets) return;
}if ("ignore" == propertyName) {
if (this.iHaveBitSets) return;
}if ("meshcolor" == propertyName) {
var rgb=(value).intValue$();
this.meshColix=$I$(9).getColix$I(rgb);
if (this.thisMesh != null ) this.thisMesh.meshColix=this.meshColix;
return;
}if ("offset" == propertyName) {
var offset=$I$(10).newP$javajs_util_T3(value);
if (offset.equals$O($I$(11).center)) offset=null;
if (this.thisMesh != null ) {
this.thisMesh.rotateTranslate$javajs_util_Quat$javajs_util_T3$Z(null, offset, true);
this.thisMesh.altVertices=null;
}return;
}if ("rotate" == propertyName) {
var pt4=value;
if (this.thisMesh != null ) {
this.thisMesh.rotateTranslate$javajs_util_Quat$javajs_util_T3$Z($I$(12).newP4$javajs_util_P4(pt4), null, true);
this.thisMesh.altVertices=null;
}return;
}if ("bsDisplay" == propertyName) {
this.bsDisplay=value;
return;
}if ("displayWithin" == propertyName) {
var o=value;
this.displayWithinDistance2=(o[0]).floatValue$();
this.isDisplayWithinNot=(this.displayWithinDistance2 < 0 );
this.displayWithinDistance2 *= this.displayWithinDistance2;
this.displayWithinPoints=o[3];
if (this.displayWithinPoints.size$() == 0) this.displayWithinPoints=this.vwr.ms.getAtomPointVector$javajs_util_BS(o[2]);
return;
}if ("finalize" == propertyName) {
if (this.thisMesh != null ) {
var cmd=value;
if (cmd != null  && !cmd.startsWith$S("; isosurface map") ) {
this.thisMesh.setDiscreteColixes$FA$HA(this.sg.params.contoursDiscrete, this.sg.params.contourColixes);
p$1.setJvxlInfo.apply(this, []);
}this.setScriptInfo$S(cmd);
}this.clearSg$();
return;
}if ("connections" == propertyName) {
if (this.currentMesh != null ) {
this.connections=value;
if (this.connections[0] >= 0 && this.connections[0] < this.vwr.ms.ac ) this.currentMesh.connectedAtoms=this.connections;
 else this.connections=this.currentMesh.connectedAtoms=null;
}return;
}if ("cutoffRange" == propertyName) {
this.cutoffRange=value;
return;
}if ("fixLattice" == propertyName) {
if (this.thisMesh != null ) this.thisMesh.fixLattice$();
return;
}if ("slab" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.Integer")) {
if (this.thisMesh != null ) this.thisMesh.jvxlData.slabValue=(value).intValue$();
return;
}if (this.thisMesh != null ) {
var slabInfo=value;
var tok=(slabInfo[0]).intValue$();
switch (tok) {
case 1073742018:
var data=slabInfo[1];
var m=this.getMesh$S(data[1]);
if (m == null ) return;
data[1]=m;
break;
}
this.slabPolygons$OA(slabInfo);
return;
}}if ("cap" == propertyName) {
if (this.thisMesh != null  && this.thisMesh.pc != 0 ) {
this.thisMesh.getMeshSlicer$().slabPolygons$OA$Z(value, true);
this.thisMesh.initialize$I$javajs_util_T3A$javajs_util_P4(this.thisMesh.lighting, null, null);
return;
}}if ("map" == propertyName) {
if (this.sg != null ) this.sg.params.isMapped=true;
this.setProperty$S$O$javajs_util_BS("squareData", $I$(13).FALSE, null);
if (this.thisMesh == null  || this.thisMesh.vc == 0 ) return;
}if ("deleteVdw" == propertyName) {
for (var i=this.meshCount; --i >= 0; ) if (this.isomeshes[i].bsVdw != null  && (bs == null  || bs.intersects$javajs_util_BS(this.isomeshes[i].bsVdw) ) ) this.deleteMeshI$I(i);

this.currentMesh=this.thisMesh=null;
return;
}if ("mapColor" == propertyName || "readFile" == propertyName ) {
if (value == null ) {
if (this.sg.params.filesData == null ) {
value=p$1.getFileReader$S.apply(this, [this.sg.params.fileName]);
} else {
value=this.sg.params.filesData;
var a=this.sg.params.filesData[0];
var b=Clazz.array(java.lang.Object, [a.length]);
for (var i=b.length; --i >= 0 && value != null  ; ) if ((b[i]=p$1.getFileReader$S.apply(this, [a[i]])) == null ) value=null;

if (value != null ) this.sg.params.filesData[0]=b;
}if (value == null ) return;
}} else if ("atomIndex" == propertyName) {
this.atomIndex=(value).intValue$();
if (this.thisMesh != null ) this.thisMesh.atomIndex=this.atomIndex;
} else if ("center" == propertyName) {
this.center.setT$javajs_util_T3(value);
} else if ("colorRGB" == propertyName) {
var rgb=(value).intValue$();
if (rgb == 1296041986) {
this.colorType=rgb;
} else {
this.colorType=0;
this.defaultColix=$I$(9).getColix$I(rgb);
}} else if ("contour" == propertyName) {
this.explicitContours=true;
} else if ("functionXY" == propertyName) {
if (this.sg.params.state == 2) this.setScriptInfo$S(null);
} else if ("init" == propertyName) {
this.newSg$();
} else if ("getSurfaceSets" == propertyName) {
if (this.thisMesh != null ) {
this.thisMesh.jvxlData.thisSet=(value).intValue$();
this.thisMesh.calculatedVolume=null;
this.thisMesh.calculatedArea=null;
}} else if ("localName" == propertyName) {
value=this.vwr.getOutputChannel$S$SA(value, null);
propertyName="outputChannel";
} else if ("molecularOrbital" == propertyName) {
this.isFixed=false;
p$1.setMeshI.apply(this, []);
if (Clazz.instanceOf(value, "java.lang.Integer")) {
this.moNumber=(value).intValue$();
this.moLinearCombination=null;
} else {
this.moLinearCombination=value;
this.moNumber=0;
}if (!this.isColorExplicit) this.isPhaseColored=true;
if (this.sg == null  || !this.sg.params.isMapped ) {
var mat4=this.ms.am[this.currentMesh.modelIndex].mat4;
if (mat4 != null ) {
var minv=$I$(14).newM4$javajs_util_M4(mat4);
minv.invert$();
this.setPropI$S$O$javajs_util_BS("modelInvRotation", minv, null);
}}} else if ("phase" == propertyName) {
this.isPhaseColored=true;
} else if ("plane" == propertyName) {
} else if ("pocket" == propertyName) {
} else if ("scale3d" == propertyName) {
this.scale3d=(value).floatValue$();
if (this.thisMesh != null ) {
this.thisMesh.scale3d=this.thisMesh.jvxlData.scale3d=this.scale3d;
this.thisMesh.altVertices=null;
}} else if ("title" == propertyName) {
if (Clazz.instanceOf(value, "java.lang.String") && "-".equals$O(value) ) value=null;
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, [propertyName, value, bs]);
value=this.title;
} else if ("withinPoints" == propertyName) {
var o=value;
this.withinDistance2=(o[0]).floatValue$();
this.isWithinNot=(this.withinDistance2 < 0 );
this.withinDistance2 *= this.withinDistance2;
this.withinPoints=o[3];
if (this.withinPoints.size$() == 0) this.withinPoints=this.vwr.ms.getAtomPointVector$javajs_util_BS(o[2]);
} else if (("nci" == propertyName || "orbital" == propertyName ) && this.sg != null  ) {
this.sg.params.testFlags=(this.vwr.getBoolean$I(603979962) ? 2 : 0);
}if (this.sg != null  && this.sg.setProp$S$O$javajs_util_BS(propertyName, value, bs) ) {
if (this.sg.isValid) {
if ("molecularOrbital" == propertyName) {
this.currentMesh.isModelConnected=true;
this.currentMesh.mat4=this.ms.am[this.currentMesh.modelIndex].mat4;
}return;
}propertyName="delete";
}if ("init" == propertyName) {
this.explicitID=false;
this.scriptAppendix="";
var script=(Clazz.instanceOf(value, "java.lang.String") ? value : null);
var pt=(script == null  ? -1 : script.indexOf$S("# ID="));
this.actualID=(pt >= 0 ? $I$(8).getQuotedStringAt$S$I(script, pt) : null);
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["thisID", "+PREVIOUS_MESH+", null]);
if (script != null  && !(this.iHaveBitSets=p$1.getScriptBitSets$S$javajs_util_BSA.apply(this, [script, null])) ) this.sg.setProp$S$O$javajs_util_BS("select", bs, null);
p$1.initializeIsosurface.apply(this, []);
this.sg.params.modelIndex=(this.isFixed ? -1 : this.modelIndex);
return;
}if ("clear" == propertyName) {
this.discardTempData$Z(true);
return;
}if ("colorDensity" == propertyName) {
if (value != null  && this.currentMesh != null  ) this.currentMesh.volumeRenderPointSize=(value).floatValue$();
return;
}if (propertyName == "deleteModelAtoms") {
var modelIndex=((value)[2])[0];
var firstAtomDeleted=((value)[2])[1];
var nAtomsDeleted=((value)[2])[2];
for (var i=this.meshCount; --i >= 0; ) {
var m=this.meshes[i];
if (m == null ) continue;
if (m.connectedAtoms != null ) {
var iAtom=m.connectedAtoms[0];
if (iAtom >= firstAtomDeleted + nAtomsDeleted) m.connectedAtoms[0]=iAtom - nAtomsDeleted;
 else if (iAtom >= firstAtomDeleted) m.connectedAtoms=null;
}m.connectedAtoms=null;
if (m.modelIndex == modelIndex) {
this.meshCount--;
if (m === this.currentMesh ) this.currentMesh=this.thisMesh=null;
this.meshes=this.isomeshes=$I$(4).deleteElements$O$I$I(this.meshes, i, 1);
} else if (m.modelIndex > modelIndex) {
m.modelIndex--;
if (m.atomIndex >= firstAtomDeleted) m.atomIndex-=nAtomsDeleted;
}}
return;
}p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, [propertyName, value, bs]);
});

Clazz.newMeth(C$, 'getFileReader$S', function (fileName) {
var value=this.vwr.fm.getBufferedReaderOrErrorMessageFromName$S$SA$Z$Z(fileName, null, true, true);
if (Clazz.instanceOf(value, "java.lang.String")) {
$I$(15).error$S("Isosurface: could not open file " + fileName + " -- " + value );
return null;
}if (!(Clazz.instanceOf(value, "java.io.BufferedReader"))) try {
value=$I$(16).getBufferedReader$java_io_BufferedInputStream$S(value, "ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return value;
}, p$1);

Clazz.newMeth(C$, 'setIsoMeshColor$org_jmol_shapesurface_IsosurfaceMesh$S', function (m, color) {
m.jvxlData.baseColor=color;
m.isColorSolid=true;
m.pcs=null;
m.colorsExplicit=false;
m.colorEncoder=null;
m.vertexColorMap=null;
}, p$1);

Clazz.newMeth(C$, 'setColorPhase$org_jmol_shapesurface_IsosurfaceMesh$H$H', function (m, colix0, colix1) {
m.colorPhased=true;
m.colix=m.jvxlData.minColorIndex=colix0;
m.jvxlData.maxColorIndex=colix1;
m.jvxlData.isBicolorMap=true;
m.jvxlData.colorDensity=false;
m.isColorSolid=false;
m.remapColors$org_jmol_viewer_Viewer$org_jmol_util_ColorEncoder$F(this.vwr, null, this.translucentLevel);
}, p$1);

Clazz.newMeth(C$, 'ensureMeshSource', function () {
var haveColors=(this.thisMesh.vertexSource != null );
if (haveColors) for (var i=this.thisMesh.vc; --i >= 0; ) if (this.thisMesh.vertexSource[i] < 0) {
haveColors=false;
break;
}
if (!haveColors) {
var source=this.thisMesh.vertexSource;
var vertexColixes=this.thisMesh.vcs;
var colix=(this.thisMesh.isColorSolid ? this.thisMesh.colix : ($s$[0] = 0, $s$[0]));
this.setProperty$S$O$javajs_util_BS("init", null, null);
this.setProperty$S$O$javajs_util_BS("map", $I$(13).FALSE, null);
this.setProperty$S$O$javajs_util_BS("property", Clazz.array(Float.TYPE, [this.vwr.ms.ac]), null);
if (colix != 0) {
this.thisMesh.colorCommand="color isosurface " + $I$(9).getHexCode$H(colix);
this.setProperty$S$O$javajs_util_BS("color", Integer.valueOf$I($I$(9).getArgb$H(colix)), null);
}if (source != null ) {
for (var i=this.thisMesh.vc; --i >= 0; ) if (source[i] < 0) source[i]=this.thisMesh.vertexSource[i];

this.thisMesh.vertexSource=source;
this.thisMesh.vcs=vertexColixes;
}}}, p$1);

Clazz.newMeth(C$, 'slabPolygons$OA', function (slabInfo) {
this.thisMesh.calculatedVolume=null;
this.thisMesh.calculatedArea=null;
this.thisMesh.getMeshSlicer$().slabPolygons$OA$Z(slabInfo, false);
this.thisMesh.reinitializeLightingAndColor$org_jmol_viewer_Viewer(this.vwr);
});

Clazz.newMeth(C$, 'setPropertySuper$S$O$javajs_util_BS', function (propertyName, value, bs) {
if (propertyName == "thisID" && this.currentMesh != null   && this.currentMesh.thisID != null   && this.currentMesh.thisID.equals$O(value) ) {
this.checkExplicit$S(value);
return;
}this.currentMesh=this.thisMesh;
this.setPropMC$S$O$javajs_util_BS(propertyName, value, bs);
this.thisMesh=this.currentMesh;
this.jvxlData=(this.thisMesh == null  ? null : this.thisMesh.jvxlData);
if (this.sg != null ) this.sg.setJvxlData$org_jmol_jvxl_data_JvxlData(this.jvxlData);
}, p$1);

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
if (property == "keys") {
var keys=(Clazz.instanceOf(data[1], "javajs.util.Lst") ? data[1] : Clazz.new_($I$(17,1)));
data[1]=keys;
keys.addLast$O("info");
keys.addLast$O("data");
keys.addLast$O("atoms");
}if (property == "colorEncoder") {
var mesh=this.getMesh$S(data[0]);
return (mesh != null  && (data[1]=mesh.colorEncoder) != null  );
}if (property == "intersectPlane") {
var mesh=this.getMesh$S(data[0]);
if (mesh == null  || data.length < 4 ) return false;
data[3]=Integer.valueOf$I(mesh.modelIndex);
mesh.getMeshSlicer$().getIntersection$F$javajs_util_P4$javajs_util_P3A$javajs_util_Lst$FA$javajs_util_BS$org_jmol_util_MeshSurface$Z$Z$I$Z(0, data[1], null, data[2], null, null, null, false, false, 134217750, false);
return true;
}if (property == "getBoundingBox") {
var id=data[0];
var m=this.getMesh$S(id);
if (m == null  || m.vs == null  ) return false;
data[2]=m.jvxlData.boundingBox;
if (m.mat4 != null ) {
var d=Clazz.array($I$(10), [2]);
d[0]=$I$(10).newP$javajs_util_T3(m.jvxlData.boundingBox[0]);
d[1]=$I$(10).newP$javajs_util_T3(m.jvxlData.boundingBox[1]);
var v=Clazz.new_($I$(18,1));
m.mat4.getTranslation$javajs_util_T3(v);
d[0].add$javajs_util_T3(v);
d[1].add$javajs_util_T3(v);
data[2]=d;
}return true;
}if (property == "unitCell") {
var m=this.getMesh$S(data[0]);
return (m != null  && (data[1]=m.getUnitCell$()) != null  );
}if (property == "getCenter") {
var index=(data[1]).intValue$();
if (index == -2147483648) {
var id=data[0];
var m=this.getMesh$S(id);
if (m == null  || m.vs == null  ) return false;
var p=$I$(10).newP$javajs_util_T3(m.jvxlData.boundingBox[0]);
p.add$javajs_util_T3(m.jvxlData.boundingBox[1]);
p.scale$F(0.5);
if (m.mat4 != null ) {
var v=Clazz.new_($I$(18,1));
m.mat4.getTranslation$javajs_util_T3(v);
p.add$javajs_util_T3(v);
}data[2]=p;
return true;
}}return this.getPropDataMC$S$OA(property, data);
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
return this.getPropI$S$I(property, index);
});

Clazz.newMeth(C$, 'getPropI$S$I', function (property, index) {
var thisMesh=this.thisMesh;
if (index >= 0 && (index >= this.meshCount || (thisMesh=this.isomeshes[index]) == null  ) ) return null;
var ret=this.getPropMC$S$I(property, index);
if (ret != null ) return ret;
if (property == "message") {
var s="";
if (!this.jvxlData.isValid) return "invalid! (no atoms selected?)";
if (!Float.isNaN$F(this.jvxlData.integration)) s += "integration " + new Float(this.jvxlData.integration).toString();
if (this.shapeID == 24 || this.shapeID == 27  || this.shapeID == 28 ) s += " with cutoff=" + new Float(this.jvxlData.cutoff).toString();
if (this.shapeID == 27 || this.shapeID == 28 ) return s;
if (this.jvxlData.dataMin != 3.4028235E38 ) s += " min=" + new Float(this.jvxlData.dataMin).toString() + " max=" + new Float(this.jvxlData.dataMax).toString() ;
s += "; " + $I$(11).shapeClassBases[this.shapeID].toLowerCase$() + " count: " + this.getPropMC$S$I("count", index) ;
return s + this.getPropI$S$I("dataRangeStr", index) + this.jvxlData.msg ;
}if (property == "dataRange") return p$1.getDataRange$org_jmol_shapesurface_IsosurfaceMesh.apply(this, [thisMesh]);
if (property == "dataRangeStr") {
var dataRange=p$1.getDataRange$org_jmol_shapesurface_IsosurfaceMesh.apply(this, [thisMesh]);
return (dataRange != null  && dataRange[0] != 3.4028235E38   && dataRange[0] != dataRange[1]   ? "\nisosurface full data range " + new Float(dataRange[0]).toString() + " to " + new Float(dataRange[1]).toString() + " with color scheme spanning " + new Float(dataRange[2]).toString() + " to " + new Float(dataRange[3]).toString()  : "");
}if (property == "moNumber") return Integer.valueOf$I(this.moNumber);
if (property == "moLinearCombination") return this.moLinearCombination;
if (property == "nSets") return Integer.valueOf$I(thisMesh == null  ? 0 : thisMesh.nSets);
if (property == "area") return (thisMesh == null  ? Float.valueOf$F(NaN) : p$1.calculateVolumeOrArea$org_jmol_shapesurface_IsosurfaceMesh$Z.apply(this, [thisMesh, true]));
if (property == "volume") return (thisMesh == null  ? Float.valueOf$F(NaN) : p$1.calculateVolumeOrArea$org_jmol_shapesurface_IsosurfaceMesh$Z.apply(this, [thisMesh, false]));
if (thisMesh == null ) return null;
if (property == "cutoff") return Float.valueOf$F(this.jvxlData.cutoff);
if (property == "minMaxInfo") return Clazz.array(Float.TYPE, -1, [this.jvxlData.dataMin, this.jvxlData.dataMax]);
if (property == "plane") return this.jvxlData.jvxlPlane;
if (property == "contours") return thisMesh.getContours$();
if (property == "pmesh" || property == "pmeshbin" ) return thisMesh.getPmeshData$Z(property == "pmeshbin");
if (property == "jvxlDataXml" || property == "jvxlMeshXml" ) {
var meshData=null;
this.jvxlData.slabInfo=null;
if (property == "jvxlMeshXml" || this.jvxlData.vertexDataOnly  || thisMesh.bsSlabDisplay != null  && thisMesh.bsSlabGhost == null   ) {
meshData=Clazz.new_($I$(19,1));
this.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(meshData, 1, thisMesh);
meshData.polygonColorData=C$.getPolygonColorData$I$HA$IAA$javajs_util_BS(meshData.pc, meshData.pcs, (meshData.colorsExplicit ? meshData.pis : null), meshData.bsSlabDisplay);
} else if (thisMesh.bsSlabGhost != null ) {
this.jvxlData.slabInfo=thisMesh.slabOptions.toString();
}var sb=Clazz.new_($I$(20,1));
p$1.getMeshCommand$javajs_util_SB$I.apply(this, [sb, thisMesh.index]);
thisMesh.setJvxlColorMap$Z(true);
return (function(a,f){return f.apply(null,a)})([this.jvxlData, meshData, this.title, "", true, 1, sb.toString(), null],$I$(21).jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S);
}if (property == "jvxlFileInfo") {
return $I$(21).jvxlGetInfo$org_jmol_jvxl_data_JvxlData(this.jvxlData);
}if (property == "command") {
var sb=Clazz.new_($I$(20,1));
var list=this.getMeshList$S$Z((index < 0 ? this.previousMeshID : thisMesh.thisID), false);
for (var i=list.size$(); --i >= 0; ) p$1.getMeshCommand$javajs_util_SB$I.apply(this, [sb, i]);

return sb.toString();
}if (property == "atoms") {
return thisMesh.surfaceAtoms;
}if (property == "colorEncoder") return thisMesh.colorEncoder;
return null;
});

Clazz.newMeth(C$, 'getDataRange$org_jmol_shapesurface_IsosurfaceMesh', function (mesh) {
return (mesh == null  ? null : mesh.getDataRange$());
}, p$1);

Clazz.newMeth(C$, 'calculateVolumeOrArea$org_jmol_shapesurface_IsosurfaceMesh$Z', function (mesh, isArea) {
if (isArea) {
if (mesh.calculatedArea != null ) return mesh.calculatedArea;
} else {
if (mesh.calculatedVolume != null ) return mesh.calculatedVolume;
}var meshData=Clazz.new_($I$(19,1));
this.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(meshData, 1, mesh);
meshData.nSets=mesh.nSets;
meshData.vertexSets=mesh.vertexSets;
if (!isArea && mesh.jvxlData.colorDensity ) {
var f=mesh.jvxlData.voxelVolume;
f *= (mesh.bsSlabDisplay == null  ? mesh.vc : mesh.bsSlabDisplay.cardinality$());
return mesh.calculatedVolume=Float.valueOf$F(f);
}var ret=$I$(19).calculateVolumeOrArea$org_jmol_jvxl_data_MeshData$I$Z$Z(meshData, mesh.jvxlData.thisSet, isArea, false);
if (mesh.nSets <= 0) mesh.nSets=-meshData.nSets;
if (isArea) mesh.calculatedArea=ret;
 else mesh.calculatedVolume=ret;
return ret;
}, p$1);

Clazz.newMeth(C$, 'getPolygonColorData$I$HA$IAA$javajs_util_BS', function (ccount, colixes, polygons, bsSlabDisplay) {
var isExplicit=(polygons != null );
if (colixes == null  && polygons == null  ) return null;
var list1=Clazz.new_($I$(20,1));
var count=0;
var colix=($s$[0] = 0, $s$[0]);
var color=0;
var colorNext=0;
var done=false;
for (var i=0; i < ccount || (done=true) == true  ; i++) {
if (!done && bsSlabDisplay != null   && !bsSlabDisplay.get$I(i) ) continue;
if (done || (isExplicit ? (colorNext=polygons[i][4]) != color : colixes[i] != colix) ) {
if (count != 0) list1.append$S(" ").appendI$I(count).append$S(" ").appendI$I((isExplicit ? color : colix == 0 ? 0 : $I$(9).getArgb$H(colix)));
if (done) break;
if (isExplicit) color=colorNext;
 else colix=colixes[i];
count=1;
} else {
count++;
}}
list1.append$S("\n");
return list1.toString();
}, 1);

Clazz.newMeth(C$, 'getShapeState$', function () {
this.clean$();
var sb=Clazz.new_($I$(20,1));
sb.append$S("\n");
for (var i=0; i < this.meshCount; i++) p$1.getMeshCommand$javajs_util_SB$I.apply(this, [sb, i]);

return sb.toString();
});

Clazz.newMeth(C$, 'getMeshCommand$javajs_util_SB$I', function (sb, i) {
var imesh=this.meshes[i];
if (imesh == null  || imesh.scriptCommand == null  ) return;
var cmd=imesh.scriptCommand;
var modelCount=this.vwr.ms.mc;
if (modelCount > 1) (function(a,f){return f.apply(null,a)})([sb, "frame " + this.vwr.getModelNumberDotted$I(imesh.modelIndex)],$I$(22).appendCmd$javajs_util_SB$S);
cmd=$I$(8).rep$S$S$S(cmd, ";; isosurface map", " map");
cmd=$I$(8).rep$S$S$S(cmd, "; isosurface map", " map");
cmd=cmd.replace$C$C("\t", " ");
cmd=$I$(8).rep$S$S$S(cmd, ";#", "; #");
var pt=cmd.indexOf$S("; #");
if (pt >= 0) cmd=cmd.substring$I$I(0, pt);
if (imesh.connectedAtoms != null ) cmd += " connect " + $I$(23).eAI$IA(imesh.connectedAtoms);
cmd=$I$(8).trim$S$S(cmd, ";");
if (imesh.linkedMesh != null ) cmd += " LINK";
if (this.myType == "lcaoCartoon" && imesh.atomIndex >= 0 ) cmd += " ATOMINDEX " + imesh.atomIndex;
$I$(22).appendCmd$javajs_util_SB$S(sb, cmd);
var id=this.myType + " ID " + $I$(8).esc$S(imesh.thisID) ;
if (imesh.jvxlData.thisSet >= 0) (function(a,f){return f.apply(null,a)})([sb, id + " set " + (imesh.jvxlData.thisSet + 1) ],$I$(22).appendCmd$javajs_util_SB$S);
if (imesh.mat4 != null  && !imesh.isModelConnected ) (function(a,f){return f.apply(null,a)})([sb, id + " move " + $I$(23).matrixToScript$O(imesh.mat4) ],$I$(22).appendCmd$javajs_util_SB$S);
if (imesh.scale3d != 0 ) (function(a,f){return f.apply(null,a)})([sb, id + " scale3d " + new Float(imesh.scale3d).toString() ],$I$(22).appendCmd$javajs_util_SB$S);
if (imesh.jvxlData.slabValue != -2147483648) $I$(22).appendCmd$javajs_util_SB$S(sb, id + " slab " + imesh.jvxlData.slabValue );
if (imesh.slabOptions != null ) (function(a,f){return f.apply(null,a)})([sb, imesh.slabOptions.toString()],$I$(22).appendCmd$javajs_util_SB$S);
if (cmd.charAt$I(0) != "#") {
if (this.allowMesh) (function(a,f){return f.apply(null,a)})([sb, imesh.getState$S(this.myType)],$I$(22).appendCmd$javajs_util_SB$S);
if (!imesh.isColorSolid && imesh.colorType == 0  && $I$(9).isColixTranslucent$H(imesh.colix) ) (function(a,f){return f.apply(null,a)})([sb, "color " + this.myType + " " + $I$(22).getTranslucentLabel$H(imesh.colix) ],$I$(22).appendCmd$javajs_util_SB$S);
if (imesh.colorCommand != null  && imesh.colorType == 0  && !imesh.colorCommand.equals$O("#inherit;") ) {
$I$(22).appendCmd$javajs_util_SB$S(sb, imesh.colorCommand);
}var colorArrayed=(imesh.isColorSolid && imesh.pcs != null  );
if (imesh.isColorSolid && imesh.colorType == 0  && !imesh.colorsExplicit  && !colorArrayed ) {
(function(a,f){return f.apply(null,a)})([sb, $I$(22).getColorCommandUnk$S$H$Z(this.myType, imesh.colix, this.translucentAllowed)],$I$(22).appendCmd$javajs_util_SB$S);
} else if (imesh.jvxlData.isBicolorMap && imesh.colorPhased ) {
(function(a,f){return f.apply(null,a)})([sb, "color isosurface phase " + $I$(22).encodeColor$H(imesh.jvxlData.minColorIndex) + " " + $I$(22).encodeColor$H(imesh.jvxlData.maxColorIndex) ],$I$(22).appendCmd$javajs_util_SB$S);
}if (imesh.vertexColorMap != null ) for (var entry, $entry = imesh.vertexColorMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var bs=entry.getValue$();
if (!bs.isEmpty$()) (function(a,f){return f.apply(null,a)})([sb, "color " + this.myType + " " + $I$(23).eBS$javajs_util_BS(bs) + " " + entry.getKey$() ],$I$(22).appendCmd$javajs_util_SB$S);
}
}}, p$1);

Clazz.newMeth(C$, 'getScriptBitSets$S$javajs_util_BSA', function (script, bsCmd) {
this.script=script;
var i;
this.iHaveModelIndex=false;
this.modelIndex=-1;
if (script != null  && (i=script.indexOf$S("MODEL({")) >= 0 ) {
var j=script.indexOf$S$I("})", i);
if (j > 0) {
var bs=(function(a,f){return f.apply(null,a)})([script.substring$I$I(i + 3, j + 1)],$I$(24).unescape$S);
this.modelIndex=(bs == null  ? -1 : bs.nextSetBit$I(0));
this.iHaveModelIndex=(this.modelIndex >= 0);
}}if (script == null ) return false;
this.getCapSlabInfo$S(script);
i=script.indexOf$S("# ({");
if (i < 0) return false;
var j=script.indexOf$S$I("})", i);
if (j < 0) return false;
var bs=(function(a,f){return f.apply(null,a)})([script.substring$I$I(i + 2, j + 2)],$I$(24).unescape$S);
if (bsCmd == null ) this.sg.setProp$S$O$javajs_util_BS("select", bs, null);
 else bsCmd[0]=bs;
if ((i=script.indexOf$S$I("({", j)) < 0) return true;
j=script.indexOf$S$I("})", i);
if (j < 0) return false;
bs=(function(a,f){return f.apply(null,a)})([script.substring$I$I(i + 1, j + 1)],$I$(24).unescape$S);
if (bsCmd == null ) this.sg.setProp$S$O$javajs_util_BS("ignore", bs, null);
 else bsCmd[1]=bs;
if ((i=script.indexOf$S$I("/({", j)) == j + 2) {
if ((j=script.indexOf$S$I("})", i)) < 0) return false;
bs=(function(a,f){return f.apply(null,a)})([script.substring$I$I(i + 3, j + 1)],$I$(24).unescape$S);
if (bsCmd == null ) this.vwr.ms.setTrajectoryBs$javajs_util_BS(bs);
 else bsCmd[2]=bs;
}return true;
}, p$1);

Clazz.newMeth(C$, 'getCapSlabInfo$S', function (script) {
var i=script.indexOf$S("# SLAB=");
if (i >= 0) this.sg.setProp$S$O$javajs_util_BS("slab", p$1.getCapSlabObject$S$Z.apply(this, [$I$(8).getQuotedStringAt$S$I(script, i), false]), null);
i=script.indexOf$S("# CAP=");
if (i >= 0) this.sg.setProp$S$O$javajs_util_BS("slab", p$1.getCapSlabObject$S$Z.apply(this, [$I$(8).getQuotedStringAt$S$I(script, i), true]), null);
});

Clazz.newMeth(C$, 'getCapSlabObject$S$Z', function (s, isCap) {
try {
if (s.indexOf$S("array") == 0) {
var pts=(function(a,f){return f.apply(null,a)})([s.substring$I$I(6, s.length$() - 1), ","],$I$(8).split$S$S);
return (function(a,f){return f.apply(null,a)})([1678381065, Clazz.array($I$(10), -1, [$I$(23).uP$S(pts[0]), $I$(23).uP$S(pts[1]), $I$(23).uP$S(pts[2]), $I$(23).uP$S(pts[3])]), isCap, null],$I$(25).getSlabObjectType$I$O$Z$O);
}var plane=$I$(23).uP$S(s);
if (Clazz.instanceOf(plane, "javajs.util.P4")) return $I$(25).getSlabObjectType$I$O$Z$O(134217750, plane, isCap, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'initializeIsosurface', function () {
if (!this.iHaveModelIndex) this.modelIndex=this.vwr.am.cmi;
this.atomIndex=-1;
this.bsDisplay=null;
this.center=$I$(10).new3$F$F$F(NaN, 0, 0);
this.colix=5;
this.connections=null;
this.cutoffRange=null;
this.colorType=this.defaultColix=this.meshColix=($s$[0] = 0, $s$[0]);
this.displayWithinPoints=null;
this.explicitContours=false;
this.isFixed=(this.modelIndex < 0);
this.isPhaseColored=this.isColorExplicit=false;
this.linkedMesh=null;
if (this.modelIndex < 0) this.modelIndex=0;
this.scale3d=0;
this.title=null;
this.translucentLevel=0;
this.withinPoints=null;
p$1.initState.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'initState', function () {
this.associateNormals=true;
this.sg.initState$();
}, p$1);

Clazz.newMeth(C$, 'setMeshI', function () {
this.thisMesh.visible=true;
if ((this.thisMesh.atomIndex=this.atomIndex) >= 0) this.thisMesh.modelIndex=this.vwr.ms.at[this.atomIndex].mi;
 else if (this.isFixed) this.thisMesh.modelIndex=-1;
 else if (this.modelIndex >= 0) this.thisMesh.modelIndex=this.modelIndex;
 else this.thisMesh.modelIndex=this.vwr.am.cmi;
this.thisMesh.scriptCommand=this.script;
this.thisMesh.ptCenter.setT$javajs_util_T3(this.center);
this.thisMesh.scale3d=(this.thisMesh.jvxlData.jvxlPlane == null  ? 0 : this.scale3d);
}, p$1);

Clazz.newMeth(C$, 'discardTempData$Z', function (discardAll) {
if (!discardAll) return;
this.title=null;
if (this.thisMesh == null ) return;
this.thisMesh.surfaceSet=null;
});

Clazz.newMeth(C$, 'getDefaultColix', function () {
if (this.defaultColix != 0) return this.defaultColix;
if (!this.sg.jvxlData.wasCubic) return this.colix;
var argb=(this.sg.params.cutoff >= 0  ? -11525984 : -6283184);
return $I$(9).getColix$I(argb);
}, p$1);

Clazz.newMeth(C$, 'drawLcaoCartoon$javajs_util_V3$javajs_util_V3$javajs_util_V3$I', function (z, x, rotAxis, nElectrons) {
var lcaoCartoon=this.sg.setLcao$();
var rotRadians=rotAxis.x + rotAxis.y + rotAxis.z ;
this.defaultColix=$I$(9).getColix$I(this.sg.params.colorPos);
var colixNeg=$I$(9).getColix$I(this.sg.params.colorNeg);
var y=Clazz.new_($I$(18,1));
var isReverse=(lcaoCartoon.length$() > 0 && lcaoCartoon.charAt$I(0) == "-" );
if (isReverse) lcaoCartoon=lcaoCartoon.substring$I(1);
var sense=(isReverse ? -1 : 1);
y.cross$javajs_util_T3$javajs_util_T3(z, x);
if (rotRadians != 0 ) {
var a=Clazz.new_($I$(26,1));
if (rotAxis.x != 0 ) a.setVA$javajs_util_V3$F(x, rotRadians);
 else if (rotAxis.y != 0 ) a.setVA$javajs_util_V3$F(y, rotRadians);
 else a.setVA$javajs_util_V3$F(z, rotRadians);
var m=Clazz.new_($I$(27,1)).setAA$javajs_util_A4(a);
m.rotate$javajs_util_T3(x);
m.rotate$javajs_util_T3(y);
m.rotate$javajs_util_T3(z);
}if (this.thisMesh == null  && this.nLCAO == 0 ) this.nLCAO=this.meshCount;
var id=(this.thisMesh == null  ? (nElectrons > 0 ? "lp" : "lcao") + (++this.nLCAO) + "_" + lcaoCartoon  : this.thisMesh.thisID);
if (this.thisMesh == null ) this.allocMesh$S$org_jmol_shape_Mesh(id, null);
if (lcaoCartoon.equals$O("px")) {
this.thisMesh.thisID += "a";
var meshA=this.thisMesh;
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [x, sense, nElectrons]);
if (nElectrons > 0) return;
this.setProperty$S$O$javajs_util_BS("thisID", id + "b", null);
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [x, -sense, nElectrons]);
this.thisMesh.colix=colixNeg;
this.linkedMesh=this.thisMesh.linkedMesh=meshA;
return;
}if (lcaoCartoon.equals$O("py")) {
this.thisMesh.thisID += "a";
var meshA=this.thisMesh;
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [y, sense, nElectrons]);
if (nElectrons > 0) return;
this.setProperty$S$O$javajs_util_BS("thisID", id + "b", null);
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [y, -sense, nElectrons]);
this.thisMesh.colix=colixNeg;
this.linkedMesh=this.thisMesh.linkedMesh=meshA;
return;
}if (lcaoCartoon.equals$O("pz")) {
this.thisMesh.thisID += "a";
var meshA=this.thisMesh;
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [z, sense, nElectrons]);
if (nElectrons > 0) return;
this.setProperty$S$O$javajs_util_BS("thisID", id + "b", null);
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [z, -sense, nElectrons]);
this.thisMesh.colix=colixNeg;
this.linkedMesh=this.thisMesh.linkedMesh=meshA;
return;
}if (lcaoCartoon.equals$O("pza") || lcaoCartoon.indexOf$S("sp") == 0  || lcaoCartoon.indexOf$S("d") == 0  || lcaoCartoon.indexOf$S("lp") == 0 ) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [z, sense, nElectrons]);
return;
}if (lcaoCartoon.equals$O("pzb")) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [z, -sense, nElectrons]);
return;
}if (lcaoCartoon.equals$O("pxa")) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [x, sense, nElectrons]);
return;
}if (lcaoCartoon.equals$O("pxb")) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [x, -sense, nElectrons]);
return;
}if (lcaoCartoon.equals$O("pya")) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [y, sense, nElectrons]);
return;
}if (lcaoCartoon.equals$O("pyb")) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [y, -sense, nElectrons]);
return;
}if (lcaoCartoon.equals$O("spacefill") || lcaoCartoon.equals$O("cpk") ) {
p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [null, 2 * this.vwr.ms.at[this.atomIndex].getRadius$(), nElectrons]);
return;
}p$1.createLcaoLobe$javajs_util_V3$F$I.apply(this, [null, 1, nElectrons]);
return;
}, p$1);

Clazz.newMeth(C$, 'createLcaoLobe$javajs_util_V3$F$I', function (lobeAxis, factor, nElectrons) {
p$1.initState.apply(this, []);
if ($I$(15).debugging) {
$I$(15).debug$S("creating isosurface ID " + this.thisMesh.thisID);
}if (lobeAxis == null ) {
this.setProperty$S$O$javajs_util_BS("sphere", Float.valueOf$F(factor / 2.0), null);
} else {
this.lcaoDir.x=lobeAxis.x * factor;
this.lcaoDir.y=lobeAxis.y * factor;
this.lcaoDir.z=lobeAxis.z * factor;
this.lcaoDir.w=0.7;
this.setProperty$S$O$javajs_util_BS(nElectrons == 2 ? "lp" : nElectrons == 1 ? "rad" : "lobe", this.lcaoDir, null);
}this.thisMesh.colix=this.defaultColix;
this.setScriptInfo$S(null);
}, p$1);

Clazz.newMeth(C$, 'invalidateTriangles$', function () {
this.thisMesh.invalidatePolygons$();
});

Clazz.newMeth(C$, 'setOutputChannel$javajs_api_GenericBinaryDocument$javajs_util_OC', function (binaryDoc, out) {
binaryDoc.setOutputChannel$javajs_api_GenericOutputChannel(out);
});

Clazz.newMeth(C$, 'fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh', function (meshData, mode, mesh) {
if (meshData == null ) {
if (this.thisMesh == null ) this.allocMesh$S$org_jmol_shape_Mesh(null, null);
if (!this.thisMesh.isMerged) this.thisMesh.clearType$S$Z(this.myType, this.sg.params.iAddGridPoints);
this.thisMesh.connectedAtoms=this.connections;
this.thisMesh.colix=p$1.getDefaultColix.apply(this, []);
this.thisMesh.colorType=this.colorType;
this.thisMesh.meshColix=this.meshColix;
if (this.isPhaseColored || this.thisMesh.jvxlData.isBicolorMap ) this.thisMesh.isColorSolid=false;
return;
}if (mesh == null ) mesh=this.thisMesh;
if (mesh == null ) return;
switch (mode) {
case 1:
meshData.mergeVertexCount0=mesh.mergeVertexCount0;
meshData.vs=mesh.vs;
meshData.vertexSource=mesh.vertexSource;
meshData.vvs=mesh.vvs;
meshData.vc=mesh.vc;
meshData.vertexIncrement=mesh.vertexIncrement;
meshData.pc=mesh.pc;
meshData.pis=mesh.pis;
meshData.pcs=mesh.pcs;
meshData.bsSlabDisplay=mesh.bsSlabDisplay;
meshData.bsSlabGhost=mesh.bsSlabGhost;
meshData.slabColix=mesh.slabColix;
meshData.slabMeshType=mesh.slabMeshType;
meshData.polygonCount0=mesh.polygonCount0;
meshData.vertexCount0=mesh.vertexCount0;
meshData.slabOptions=mesh.slabOptions;
meshData.colorsExplicit=mesh.colorsExplicit;
return;
case 2:
if (mesh.vcs == null  || mesh.vc > mesh.vcs.length ) mesh.vcs=Clazz.array(Short.TYPE, [mesh.vc]);
meshData.vcs=mesh.vcs;
return;
case 3:
mesh.surfaceSet=meshData.surfaceSet;
mesh.vertexSets=meshData.vertexSets;
mesh.nSets=meshData.nSets;
return;
case 4:
mesh.vs=meshData.vs;
mesh.vvs=meshData.vvs;
mesh.vc=meshData.vc;
mesh.vertexIncrement=meshData.vertexIncrement;
mesh.vertexSource=meshData.vertexSource;
mesh.pc=meshData.pc;
mesh.pis=meshData.pis;
mesh.pcs=meshData.pcs;
mesh.bsSlabDisplay=meshData.bsSlabDisplay;
mesh.bsSlabGhost=meshData.bsSlabGhost;
mesh.slabColix=meshData.slabColix;
mesh.slabMeshType=meshData.slabMeshType;
mesh.polygonCount0=meshData.polygonCount0;
mesh.vertexCount0=meshData.vertexCount0;
mesh.mergeVertexCount0=meshData.mergeVertexCount0;
mesh.slabOptions=meshData.slabOptions;
mesh.colorsExplicit=meshData.colorsExplicit;
return;
}
});

Clazz.newMeth(C$, 'notifySurfaceGenerationCompleted$', function () {
p$1.setMeshI.apply(this, []);
p$1.setBsVdw.apply(this, []);
this.thisMesh.surfaceAtoms=this.sg.params.bsSelected;
this.thisMesh.insideOut=this.sg.params.isInsideOut$();
this.thisMesh.isModelConnected=this.sg.params.isModelConnected;
this.thisMesh.vertexSource=this.sg.params.vertexSource;
this.thisMesh.oabc=this.sg.getOriginVaVbVc$();
this.thisMesh.calculatedArea=null;
this.thisMesh.calculatedVolume=null;
if (!this.thisMesh.isMerged) {
this.thisMesh.initialize$I$javajs_util_T3A$javajs_util_P4(this.sg.params.isFullyLit$() ? 1073741964 : 1073741958, null, this.sg.params.thePlane);
if (this.jvxlData.fixedLattice != null ) {
this.thisMesh.lattice=this.jvxlData.fixedLattice;
this.thisMesh.fixLattice$();
}return this.thisMesh.setColorsFromJvxlData$I(this.sg.params.colorRgb);
}if (!this.sg.params.allowVolumeRender) this.thisMesh.jvxlData.allowVolumeRender=false;
this.thisMesh.setColorsFromJvxlData$I(this.sg.params.colorRgb);
if (this.thisMesh.jvxlData.slabInfo != null ) this.vwr.runScriptCautiously$S("isosurface " + this.thisMesh.jvxlData.slabInfo);
if (this.sg.params.psi_monteCarloCount > 0) this.thisMesh.diameter=-1;
return false;
});

Clazz.newMeth(C$, 'notifySurfaceMappingCompleted$', function () {
if (!this.thisMesh.isMerged) this.thisMesh.initialize$I$javajs_util_T3A$javajs_util_P4(this.sg.params.isFullyLit$() ? 1073741964 : 1073741958, null, this.sg.params.thePlane);
p$1.setBsVdw.apply(this, []);
this.thisMesh.isColorSolid=false;
this.thisMesh.colorDensity=this.jvxlData.colorDensity;
this.thisMesh.volumeRenderPointSize=this.jvxlData.pointSize;
this.thisMesh.colorEncoder=this.sg.params.colorEncoder;
this.thisMesh.getContours$();
if (this.thisMesh.jvxlData.nContours != 0 && this.thisMesh.jvxlData.nContours != -1 ) this.explicitContours=true;
if (this.explicitContours && this.thisMesh.jvxlData.jvxlPlane != null  ) this.thisMesh.havePlanarContours=true;
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["token", Integer.valueOf$I(this.explicitContours ? 1073742046 : 1073741938), null]);
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["token", Integer.valueOf$I(this.explicitContours ? 1073741898 : 1073742039), null]);
if (!this.thisMesh.isMerged) this.thisMesh.setJvxlDataRendering$();
if (this.sg.params.slabInfo != null ) {
this.thisMesh.slabPolygonsList$javajs_util_Lst$Z(this.sg.params.slabInfo, false);
this.thisMesh.reinitializeLightingAndColor$org_jmol_viewer_Viewer(this.vwr);
}this.thisMesh.setColorCommand$();
});

Clazz.newMeth(C$, 'setBsVdw', function () {
if (this.sg.bsVdw == null ) return;
if (this.thisMesh.bsVdw == null ) this.thisMesh.bsVdw=Clazz.new_($I$(24,1));
this.thisMesh.bsVdw.or$javajs_util_BS(this.sg.bsVdw);
}, p$1);

Clazz.newMeth(C$, 'calculateGeodesicSurface$javajs_util_BS$F', function (bsSelected, envelopeRadius) {
return this.vwr.calculateSurface$javajs_util_BS$F(bsSelected, envelopeRadius);
});

Clazz.newMeth(C$, 'getSurfacePointIndexAndFraction$F$Z$I$I$I$javajs_util_P3i$I$I$F$F$javajs_util_T3$javajs_util_V3$Z$FA', function (cutoff, isCutoffAbsolute, x, y, z, offset, vA, vB, valueA, valueB, pointA, edgeVector, isContourType, fReturn) {
return 0;
});

Clazz.newMeth(C$, 'addVertexCopy$javajs_util_T3$F$I$Z', function (vertexXYZ, value, assocVertex, asCopy) {
if (this.cutoffRange != null  && (value < this.cutoffRange[0]  || value > this.cutoffRange[1]  ) ) return -1;
return (this.withinPoints != null  && !$I$(28).checkWithin$javajs_util_T3$javajs_util_Lst$F$Z(vertexXYZ, this.withinPoints, this.withinDistance2, this.isWithinNot)  ? -1 : this.thisMesh.addVertexCopy$javajs_util_T3$F$I$Z$Z(vertexXYZ, value, assocVertex, this.associateNormals, asCopy));
});

Clazz.newMeth(C$, 'addTriangleCheck$I$I$I$I$I$Z$I', function (iA, iB, iC, check, iContour, isAbsolute, color) {
return (iA < 0 || iB < 0  || iC < 0  || isAbsolute && !$I$(19).checkCutoff$I$I$I$FA(iA, iB, iC, this.thisMesh.vvs)   ? -1 : this.thisMesh.addTriangleCheck$I$I$I$I$I$I(iA, iB, iC, check, iContour, color));
});

Clazz.newMeth(C$, 'setScriptInfo$S', function (strCommand) {
var script=(strCommand == null  ? this.sg.params.script : strCommand);
var pt=(script == null  ? -1 : script.indexOf$S("; isosurface map"));
if (pt == 0) {
if (this.thisMesh.scriptCommand == null ) return;
pt=this.thisMesh.scriptCommand.indexOf$S("; isosurface map");
if (pt >= 0) this.thisMesh.scriptCommand=this.thisMesh.scriptCommand.substring$I$I(0, pt);
this.thisMesh.scriptCommand += script;
return;
}this.thisMesh.title=this.sg.params.title;
this.thisMesh.dataType=this.sg.params.dataType;
this.thisMesh.scale3d=this.sg.params.scale3d;
if (script != null ) {
if (this.oldFileName != null ) {
script=script.replace$CharSequence$CharSequence(this.oldFileName, this.newFileName);
}if (script.charAt$I(0) == " ") {
script=this.myType + " ID " + $I$(8).esc$S(this.thisMesh.thisID) + script ;
pt=script.indexOf$S("; isosurface map");
}}if (pt > 0 && this.scriptAppendix.length$() > 0 ) this.thisMesh.scriptCommand=script.substring$I$I(0, pt) + this.scriptAppendix + script.substring$I(pt) ;
 else this.thisMesh.scriptCommand=script + this.scriptAppendix;
if (!this.explicitID && script != null   && (pt=script.indexOf$S("# ID=")) >= 0 ) this.thisMesh.thisID=$I$(8).getQuotedStringAt$S$I(script, pt);
});

Clazz.newMeth(C$, 'addRequiredFile$S', function (fileName) {
fileName=" # /*file*/\"" + fileName + "\"" ;
if (this.scriptAppendix.indexOf$S(fileName) < 0) this.scriptAppendix += fileName;
});

Clazz.newMeth(C$, 'setRequiredFile$S$S', function (oldName, fileName) {
this.oldFileName=oldName;
this.newFileName=fileName;
});

Clazz.newMeth(C$, 'setJvxlInfo', function () {
if (this.sg.jvxlData !== this.jvxlData  || this.sg.jvxlData !== this.thisMesh.jvxlData  ) this.jvxlData=this.thisMesh.jvxlData=this.sg.jvxlData;
}, p$1);

Clazz.newMeth(C$, 'getShapeDetail$', function () {
var V=Clazz.new_($I$(17,1));
for (var i=0; i < this.meshCount; i++) {
var info=Clazz.new_($I$(29,1));
var mesh=this.isomeshes[i];
if (mesh == null  || mesh.vs == null   || mesh.vc == 0 && mesh.pc == 0  ) continue;
this.addMeshInfo$org_jmol_shapesurface_IsosurfaceMesh$java_util_Map(mesh, info);
V.addLast$O(info);
}
return V;
});

Clazz.newMeth(C$, 'addMeshInfo$org_jmol_shapesurface_IsosurfaceMesh$java_util_Map', function (mesh, info) {
info.put$O$O("ID", (mesh.thisID == null  ? "<noid>" : mesh.thisID));
info.put$O$O("visible", $I$(13).valueOf$Z(mesh.visible));
info.put$O$O("vertexCount", Integer.valueOf$I(mesh.vc));
if (mesh.calculatedVolume != null ) info.put$O$O("volume", mesh.calculatedVolume);
if (mesh.calculatedArea != null ) info.put$O$O("area", mesh.calculatedArea);
if (!Float.isNaN$F(mesh.ptCenter.x)) info.put$O$O("center", mesh.ptCenter);
if (mesh.mat4 != null ) info.put$O$O("mat4", mesh.mat4);
if (mesh.scale3d != 0 ) info.put$O$O("scale3d", Float.valueOf$F(mesh.scale3d));
info.put$O$O("xyzMin", mesh.jvxlData.boundingBox[0]);
info.put$O$O("xyzMax", mesh.jvxlData.boundingBox[1]);
var s=$I$(21).jvxlGetInfo$org_jmol_jvxl_data_JvxlData(mesh.jvxlData);
if (s != null ) info.put$O$O("jvxlInfo", s.replace$C$C("\n", " "));
info.put$O$O("modelIndex", Integer.valueOf$I(mesh.modelIndex));
info.put$O$O("color", (function(a,f){return f.apply(null,a)})([$I$(9).getArgb$H(mesh.colix), null],$I$(30).colorPtFromInt$I$javajs_util_P3));
if (mesh.colorEncoder != null ) info.put$O$O("colorKey", mesh.colorEncoder.getColorKey$());
if (mesh.title != null ) info.put$O$O("title", mesh.title);
if (mesh.jvxlData.contourValues != null  || mesh.jvxlData.contourValuesUsed != null  ) info.put$O$O("contours", mesh.getContourList$org_jmol_viewer_Viewer(this.vwr));
});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
return null;
});

Clazz.newMeth(C$, 'getValue$I$I$I$I', function (x, y, z, ptyz) {
return 0;
});

Clazz.newMeth(C$, 'checkObjectHovered$I$I$javajs_util_BS', function (x, y, bsVisible) {
if (this.keyXy != null  && x >= this.keyXy[0]  && y >= this.keyXy[1]  && x < this.keyXy[2]  && y < this.keyXy[3] ) {
p$1.hoverKey$I$I.apply(this, [x, y]);
return true;
}if (!this.vwr.getDrawHover$()) return false;
var s=p$1.findValue$I$I$Z$javajs_util_BS.apply(this, [x, y, false, bsVisible]);
if (s == null ) return false;
if (this.vwr.gdata.antialiasEnabled) {
x<<=1;
y<<=1;
}this.vwr.hoverOnPt$I$I$S$S$javajs_util_T3(x, y, s, this.pickedMesh.thisID, this.pickedPt);
return true;
});

Clazz.newMeth(C$, 'hoverKey$I$I', function (x, y) {
try {
var s;
var f=1 - 1.0 * (y - this.keyXy[1]) / (this.keyXy[3] - this.keyXy[1]);
if (this.thisMesh.showContourLines) {
var vContours=this.thisMesh.getContours$();
if (vContours == null ) {
if (this.thisMesh.jvxlData.contourValues == null ) return;
var i=(Math.floor(f * this.thisMesh.jvxlData.contourValues.length)|0);
if (i < 0 || i > this.thisMesh.jvxlData.contourValues.length ) return;
s="" + new Float(this.thisMesh.jvxlData.contourValues[i]).toString();
} else {
var i=(Math.floor(f * vContours.length)|0);
if (i < 0 || i > vContours.length ) return;
s="" + new Float((vContours[i].get$I(2)).floatValue$()).toString();
}} else {
var g=this.thisMesh.colorEncoder.quantize$F$Z(f, true);
f=this.thisMesh.colorEncoder.quantize$F$Z(f, false);
s="" + new Float(g).toString() + " - " + new Float(f).toString() ;
}if (this.vwr.gdata.isAntialiased$()) {
x<<=1;
y<<=1;
}this.vwr.hoverOnPt$I$I$S$S$javajs_util_T3(x, y, s, null, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'checkObjectClicked$I$I$I$javajs_util_BS$Z', function (x, y, action, bsVisible, drawPicking) {
if (!drawPicking) return null;
if (!this.vwr.isBound$I$I(action, 18)) return null;
var dmin2=100;
if (this.vwr.gdata.isAntialiased$()) {
x<<=1;
y<<=1;
dmin2<<=1;
}var imesh=-1;
var jmaxz=-1;
var jminz=-1;
var maxz=-2147483648;
var minz=2147483647;
var pickFront=true;
for (var i=0; i < this.meshCount; i++) {
var m=this.isomeshes[i];
if (!p$1.isPickable$org_jmol_shapesurface_IsosurfaceMesh$javajs_util_BS.apply(this, [m, bsVisible])) continue;
var centers=(pickFront ? m.vs : m.getCenters$());
if (centers == null ) continue;
for (var j=centers.length; --j >= 0; ) {
var v=centers[j];
if (v == null ) continue;
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, v, dmin2, this.ptXY);
if (d2 >= 0) {
if (this.ptXY.z < minz) {
if (pickFront) imesh=i;
minz=this.ptXY.z;
jminz=j;
}if (this.ptXY.z > maxz) {
if (!pickFront) imesh=i;
maxz=this.ptXY.z;
jmaxz=j;
}}}
}
if (imesh < 0) return null;
this.pickedMesh=this.isomeshes[imesh];
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["thisID", this.pickedMesh.thisID, null]);
var iFace=this.pickedVertex=(pickFront ? jminz : jmaxz);
var ptRet=Clazz.new_($I$(10,1));
ptRet.setT$javajs_util_T3((pickFront ? this.pickedMesh.vs[this.pickedVertex] : (this.pickedMesh).centers[iFace]));
this.pickedModel=($s$[0] = this.pickedMesh.modelIndex, $s$[0]);
var map=this.getPickedPoint$javajs_util_T3$I(ptRet, this.pickedModel);
this.setStatusPicked$I$javajs_util_T3$java_util_Map(-4, ptRet, map);
return map;
});

Clazz.newMeth(C$, 'isPickable$org_jmol_shapesurface_IsosurfaceMesh$javajs_util_BS', function (m, bsVisible) {
return m.visibilityFlags != 0 && (m.modelIndex < 0 || bsVisible.get$I(m.modelIndex) )  && !$I$(9).isColixTranslucent$H(m.colix) ;
}, p$1);

Clazz.newMeth(C$, 'findValue$I$I$Z$javajs_util_BS', function (x, y, isPicking, bsVisible) {
var dmin2=100;
if (this.vwr.gdata.isAntialiased$()) {
x<<=1;
y<<=1;
dmin2<<=1;
}var pickedVertex=-1;
var pickedContour=null;
var m=null;
for (var i=0; i < this.meshCount; i++) {
m=this.isomeshes[i];
if (!p$1.isPickable$org_jmol_shapesurface_IsosurfaceMesh$javajs_util_BS.apply(this, [m, bsVisible])) continue;
var vs=m.jvxlData.vContours;
var ilast=(m.firstRealVertex < 0 ? 0 : m.firstRealVertex);
var pickedJ=0;
if (vs != null  && vs.length > 0 ) {
for (var j=0; j < vs.length; j++) {
var vc=vs[j];
var n=vc.size$() - 1;
for (var k=6; k < n; k++) {
var v=vc.get$I(k);
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, v, dmin2, this.ptXY);
if (d2 >= 0) {
dmin2=d2;
pickedContour=vc;
pickedJ=j;
this.pickedMesh=m;
this.pickedPt=v;
}}
}
if (pickedContour != null ) return pickedContour.get$I(2).toString() + ($I$(15).debugging ? " " + pickedJ : "");
} else if (m.jvxlData.jvxlPlane != null  && m.vvs != null  ) {
var vertices=(m.mat4 == null  && m.scale3d == 0   ? m.vs : m.getOffsetVertices$javajs_util_P4(m.jvxlData.jvxlPlane));
for (var k=m.vc; --k >= ilast; ) {
var v=vertices[k];
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, v, dmin2, this.ptXY);
if (d2 >= 0) {
dmin2=d2;
pickedVertex=k;
this.pickedMesh=m;
this.pickedPt=v;
}}
if (pickedVertex != -1) break;
} else if (m.vvs != null ) {
if (m.bsSlabDisplay != null ) {
for (var k=m.bsSlabDisplay.nextSetBit$I(0); k >= 0; k=m.bsSlabDisplay.nextSetBit$I(k + 1)) {
var p=m.pis[k];
if (p != null ) for (var l=0; l < 3; l++) {
var v=m.vs[p[l]];
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, v, dmin2, this.ptXY);
if (d2 >= 0) {
dmin2=d2;
pickedVertex=p[l];
this.pickedMesh=m;
this.pickedPt=v;
}}
}
} else {
for (var k=m.vc; --k >= ilast; ) {
var v=m.vs[k];
var d2=this.coordinateInRange$I$I$javajs_util_T3$I$javajs_util_P3i(x, y, v, dmin2, this.ptXY);
if (d2 >= 0) {
dmin2=d2;
pickedVertex=k;
this.pickedMesh=m;
this.pickedPt=v;
}}
}if (pickedVertex != -1) break;
}}
return (pickedVertex == -1 ? null : ($I$(15).debugging ? "$" + m.thisID + "[" + (pickedVertex + 1) + "] " + m.vs[pickedVertex] + ": "  : m.thisID + ": ") + new Float(m.vvs[pickedVertex]).toString());
}, p$1);

Clazz.newMeth(C$, 'getCmd$I', function (index) {
var sb=Clazz.new_($I$(20,1)).append$S("\n");
p$1.getMeshCommand$javajs_util_SB$I.apply(this, [sb, index]);
return (sb.toString());
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
