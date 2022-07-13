(function(){var P$=Clazz.newPackage("org.jmol.shapecgo"),p$1={},I$=[[0,'org.jmol.shapecgo.CGOMesh','java.util.Hashtable','javajs.util.AU','javajs.util.Lst','javajs.util.SB','org.jmol.shape.Shape','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CGO", null, 'org.jmol.shape.MeshCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cmeshes=Clazz.array($I$(1), [4]);
this.indicatedModelIndex=-2147483648;
},1);

C$.$fields$=[['Z',['useColix'],'F',['newScale'],'I',['indicatedModelIndex'],'O',['cmeshes','org.jmol.shapecgo.CGOMesh[]','cgoMesh','org.jmol.shapecgo.CGOMesh']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.myType="CGO";
this.htObjects=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'initCGO', function () {
this.indicatedModelIndex=-2147483648;
}, p$1);

Clazz.newMeth(C$, 'allocMesh$S$org_jmol_shape_Mesh', function (thisID, m) {
var index=this.meshCount++;
this.meshes=this.cmeshes=$I$(3).ensureLength$O$I(this.cmeshes, this.meshCount * 2);
this.currentMesh=this.cgoMesh=this.cmeshes[index]=(m == null  ? Clazz.new_($I$(1,1).c$$org_jmol_viewer_Viewer$S$H$I,[this.vwr, thisID, this.colix, index]) : m);
this.currentMesh.color=this.color;
this.currentMesh.index=index;
this.currentMesh.useColix=this.useColix;
this.currentMesh.modelIndex=this.indicatedModelIndex;
if (thisID != null  && thisID != "+PREVIOUS_MESH+"  && this.htObjects != null  ) this.htObjects.put$O$O(thisID.toUpperCase$(), this.currentMesh);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("init" === propertyName ) {
p$1.initCGO.apply(this, []);
p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, ["init", value, bs]);
return;
}if ("setCGO" === propertyName ) {
var list=value;
this.setProperty$S$O$javajs_util_BS("init", null, null);
var n=list.size$() - 1;
this.setProperty$S$O$javajs_util_BS("thisID", list.get$I(n), null);
propertyName="set";
this.setProperty$S$O$javajs_util_BS("set", value, null);
return;
}if ("modelIndex" === propertyName ) {
this.indicatedModelIndex=Math.max((value).intValue$(), -1);
return;
}if ("set" === propertyName ) {
if (this.cgoMesh == null ) {
this.allocMesh$S$org_jmol_shape_Mesh(null, null);
this.cgoMesh.colix=this.colix;
this.cgoMesh.color=this.color;
this.cgoMesh.useColix=this.useColix;
}this.cgoMesh.modelIndex=(this.indicatedModelIndex == -2147483648 ? this.vwr.am.cmi : this.indicatedModelIndex);
this.cgoMesh.isValid=p$1.setCGO$javajs_util_Lst.apply(this, [value]);
if (this.cgoMesh.isValid) {
p$1.scale$org_jmol_shape_Mesh$F.apply(this, [this.cgoMesh, this.newScale]);
this.cgoMesh.initialize$I$javajs_util_T3A$javajs_util_P4(1073741964, null, null);
this.cgoMesh.title=this.title;
this.cgoMesh.visible=true;
}this.clean$();
return;
}if (propertyName === "deleteModelAtoms" ) {
this.deleteModels$I(((value)[2])[0]);
return;
}p$1.setPropertySuper$S$O$javajs_util_BS.apply(this, [propertyName, value, bs]);
});

Clazz.newMeth(C$, 'deleteModels$I', function (modelIndex) {
for (var i=this.meshCount; --i >= 0; ) {
var m=this.meshes[i];
if (m == null ) continue;
var deleteMesh=(m.modelIndex == modelIndex);
if (deleteMesh) {
this.meshCount--;
p$1.deleteMeshElement$I.apply(this, [i]);
} else if (this.meshes[i].modelIndex > modelIndex) {
this.meshes[i].modelIndex--;
}}
this.resetObjects$();
});

Clazz.newMeth(C$, 'getProperty$S$I', function (property, index) {
if (property === "command" ) return p$1.getCommand$org_jmol_shape_Mesh.apply(this, [this.cgoMesh]);
return this.getPropMC$S$I(property, index);
});

Clazz.newMeth(C$, 'getPropertyData$S$OA', function (property, data) {
if (property === "data" ) return $I$(1).getData$OA(data);
return this.getPropDataMC$S$OA(property, data);
});

Clazz.newMeth(C$, 'deleteMeshElement$I', function (i) {
if (this.meshes[i] === this.currentMesh ) this.currentMesh=this.cgoMesh=null;
this.meshes=this.cmeshes=$I$(3).deleteElements$O$I$I(this.meshes, i, 1);
}, p$1);

Clazz.newMeth(C$, 'setPropertySuper$S$O$javajs_util_BS', function (propertyName, value, bs) {
this.currentMesh=this.cgoMesh;
this.setPropMC$S$O$javajs_util_BS(propertyName, value, bs);
this.cgoMesh=this.currentMesh;
}, p$1);

Clazz.newMeth(C$, 'clean$', function () {
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i] == null  || this.cmeshes[i].cmds == null   || this.cmeshes[i].cmds.size$() == 0 ) this.deleteMeshI$I(i);

});

Clazz.newMeth(C$, 'setCGO$javajs_util_Lst', function (data) {
if (this.cgoMesh == null ) this.allocMesh$S$org_jmol_shape_Mesh(null, null);
this.cgoMesh.clear$S("cgo");
return this.cgoMesh.set$javajs_util_Lst(data);
}, p$1);

Clazz.newMeth(C$, 'scale$org_jmol_shape_Mesh$F', function (mesh, newScale) {
}, p$1);

Clazz.newMeth(C$, 'getShapeDetail$', function () {
var V=Clazz.new_($I$(4,1));
for (var i=0; i < this.meshCount; i++) {
var mesh=this.cmeshes[i];
var info=Clazz.new_($I$(2,1));
info.put$O$O("visible", mesh.visible ? Boolean.TRUE : Boolean.FALSE);
info.put$O$O("ID", (mesh.thisID == null  ? "<noid>" : mesh.thisID));
info.put$O$O("command", p$1.getCommand$org_jmol_shape_Mesh.apply(this, [mesh]));
V.addLast$O(info);
}
return V;
});

Clazz.newMeth(C$, 'getShapeState$', function () {
var sb=Clazz.new_($I$(5,1));
var modelCount=this.vwr.ms.mc;
for (var i=0; i < this.meshCount; i++) {
var mesh=this.cmeshes[i];
if (mesh == null  || mesh.cmds == null   || mesh.modelIndex >= modelCount ) continue;
if (sb.length$() == 0) {
sb.append$S("\n");
$I$(6).appendCmd$javajs_util_SB$S(sb, this.myType + " delete");
}sb.append$S(p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [mesh, modelCount]));
if (!mesh.visible) sb.append$S(" " + this.myType + " ID " + $I$(7).esc$S(mesh.thisID) + " off;\n" );
}
return sb.toString();
});

Clazz.newMeth(C$, 'getCommand$org_jmol_shape_Mesh', function (mesh) {
if (mesh != null ) return p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [mesh, mesh.modelIndex]);
var sb=Clazz.new_($I$(5,1));
var key=(this.explicitID && this.previousMeshID != null   && $I$(7).isWild$S(this.previousMeshID)  ? this.previousMeshID : null);
var list=this.getMeshList$S$Z(key, false);
for (var i=list.size$(); --i >= 0; ) {
var m=list.get$I(i);
sb.append$S(p$1.getCommand2$org_jmol_shape_Mesh$I.apply(this, [m, m.modelIndex]));
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getCommand2$org_jmol_shape_Mesh$I', function (mesh, modelCount) {
var cmesh=mesh;
var str=Clazz.new_($I$(5,1));
var iModel=mesh.modelIndex;
str.append$S("  CGO ID ").append$S($I$(7).esc$S(mesh.thisID));
if (iModel >= -1 && modelCount > 1 ) str.append$S(" modelIndex " + iModel);
str.append$S(" [");
var n=cmesh.cmds.size$();
for (var i=0; i < n; i++) str.append$S(" " + cmesh.cmds.get$I(i));

str.append$S(" ];\n");
$I$(6,"appendCmd$javajs_util_SB$S",[str, cmesh.getState$S("cgo")]);
if (cmesh.useColix) $I$(6,"appendCmd$javajs_util_SB$S",[str, $I$(6).getColorCommandUnk$S$H$Z("cgo", cmesh.colix, this.translucentAllowed)]);
return str.toString();
}, p$1);

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
for (var i=0; i < this.meshCount; i++) {
var m=this.cmeshes[i];
if (m != null ) m.visibilityFlags=(m.isValid && m.visible && (m.modelIndex < 0 || bsModels.get$I(m.modelIndex) )   ? this.vf : 0);
}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
