(function(){var P$=Clazz.newPackage("org.jmol.shape"),p$1={},I$=[[0,'org.jmol.shape.Mesh','javajs.util.PT','javajs.util.AU','org.jmol.util.C','org.jmol.viewer.StateManager','org.jmol.util.Logger','org.jmol.script.T','javajs.util.Lst','javajs.util.P3','javajs.util.SB','org.jmol.util.Escape','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MeshCollection", null, 'org.jmol.shape.Shape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.meshCount=0;
this.meshes=null;
this.currentMesh=null;
this.isFixed=false;
this.nUnnamed=0;
this.colix=0;
this.explicitID=false;
this.previousMeshID=null;
this.linkedMesh=null;
this.modelIndex=0;
this.displayWithinDistance2=0;
this.isDisplayWithinNot=false;
this.displayWithinPoints=null;
this.bsDisplay=null;
this.title=null;
this.pickedMesh=null;
this.pickedModel=0;
this.pickedVertex=0;
this.pickedPt=null;
this.connections=null;
this.htObjects=null;
this.color=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.meshes=Clazz.array($I$(1), [4]);
}, 1);

Clazz.newMeth(C$, 'setMesh$S', function (thisID) {
this.linkedMesh=null;
if (thisID == null  || $I$(2).isWild$S(thisID) ) {
if (thisID != null ) this.previousMeshID=thisID;
this.currentMesh=null;
return null;
}this.currentMesh=this.getMesh$S(thisID);
if (this.currentMesh == null ) {
this.allocMesh$S$org_jmol_shape_Mesh(thisID, null);
} else if (thisID.equals$O("+PREVIOUS_MESH+")) {
this.linkedMesh=this.currentMesh.linkedMesh;
}if (this.currentMesh.thisID == null ) {
if (this.nUnnamed == 0 || this.getMesh$S(this.myType + this.nUnnamed) != null  ) this.nUnnamed++;
this.currentMesh.thisID=this.myType + this.nUnnamed;
if (this.htObjects != null ) this.htObjects.put$TK$TV(this.currentMesh.thisID.toUpperCase$(), this.currentMesh);
}this.previousMeshID=this.currentMesh.thisID;
return this.currentMesh;
}, p$1);

Clazz.newMeth(C$, 'allocMesh$S$org_jmol_shape_Mesh', function (thisID, m) {
var index=this.meshCount++;
this.meshes=$I$(3).ensureLength$O$I(this.meshes, this.meshCount * 2);
this.currentMesh=this.meshes[index]=(m == null  ? Clazz.new_($I$(1)).mesh1$org_jmol_viewer_Viewer$S$H$I(this.vwr, thisID, this.colix, index) : m);
this.currentMesh.color=this.color;
this.currentMesh.index=index;
if (thisID != null  && this.htObjects != null  ) this.htObjects.put$TK$TV(thisID.toUpperCase$(), this.currentMesh);
this.previousMeshID=null;
});

Clazz.newMeth(C$, 'merge$org_jmol_shape_MeshCollection', function (mc) {
for (var i=0; i < mc.meshCount; i++) {
if (mc.meshes[i] != null ) {
var m=mc.meshes[i];
var m0=this.getMesh$S(m.thisID);
if (m0 == null ) {
this.allocMesh$S$org_jmol_shape_Mesh(m.thisID, m);
} else {
this.meshes[m0.index]=m;
m.index=m0.index;
}}}
this.previousMeshID=null;
this.currentMesh=null;
});

Clazz.newMeth(C$, 'initShape$', function () {
this.colix=5;
this.color=-1;
});

Clazz.newMeth(C$, 'setPropMC$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("init" == propertyName) {
this.title=null;
return;
}if ("link" == propertyName) {
if (this.meshCount >= 2 && this.currentMesh != null  ) this.currentMesh.linkedMesh=this.meshes[this.meshCount - 2];
return;
}if ("lattice" == propertyName) {
if (this.currentMesh != null ) this.currentMesh.lattice=value;
return;
}if ("symops" == propertyName) {
if (this.currentMesh != null ) {
this.currentMesh.symops=value;
if (this.currentMesh.symops == null ) return;
var n=this.currentMesh.symops.length;
this.currentMesh.symopColixes=Clazz.array(Short.TYPE, [n]);
for (var i=n; --i >= 0; ) this.currentMesh.symopColixes[i]=$I$(4).getColix$I(this.vwr.cm.ce.getArgbMinMax$F$F$F(i + 1, 1, n));

}return;
}if ("variables" == propertyName) {
if (this.currentMesh != null  && this.currentMesh.scriptCommand != null   && !this.currentMesh.scriptCommand.startsWith$S("{") ) this.currentMesh.scriptCommand="{\n" + $I$(5).getVariableList$java_util_Map$I$Z$Z(value, 0, false, false) + "\n" + this.currentMesh.scriptCommand ;
return;
}if ("thisID" == propertyName) {
var id=value;
p$1.setMesh$S.apply(this, [id]);
this.checkExplicit$S(id);
return;
}if ("title" == propertyName) {
if (value == null ) {
this.title=null;
} else if (Clazz.instanceOf(value, "java.lang.String")) {
var nLine=1;
var lines=value;
for (var i=lines.length$(); --i >= 0; ) if (lines.charAt$I(i) == "|") nLine++;

this.title=Clazz.array(String, [nLine]);
nLine=0;
var i0=-1;
for (var i=0; i < lines.length$(); i++) if (lines.charAt$I(i) == "|") {
this.title[nLine++]=lines.substring$I$I(i0 + 1, i);
i0=i;
}
this.title[nLine]=lines.substring$I(i0 + 1);
} else {
this.title=value;
}return;
}if ("delete" == propertyName) {
p$1.deleteMesh.apply(this, []);
return;
}if ("reset" == propertyName) {
var thisID=value;
if (p$1.setMesh$S.apply(this, [thisID]) == null ) return;
p$1.setMesh$S.apply(this, [thisID]);
return;
}if ("color" == propertyName) {
if (value == null ) return;
this.colix=$I$(4).getColixO$O(value);
this.color=(value).intValue$();
if (this.currentMesh != null ) {
this.currentMesh.color=this.color;
}this.setTokenProperty$I$Z$Z(1765808134, false, false);
return;
}if ("translucency" == propertyName) {
this.setTokenProperty$I$Z$Z(603979967, ((value).equals$O("translucent")), false);
return;
}if ("hidden" == propertyName) {
value=Integer.valueOf$I((value).booleanValue$() ? 1073742334 : 1073742335);
propertyName="token";
}if ("token" == propertyName) {
var tok=(value).intValue$();
var tok2=0;
var test=true;
switch (tok) {
case 1610625028:
case 1073742335:
case 1073741958:
case 1073741861:
case 1073741964:
case 1112150019:
case 1073741938:
case 1073741862:
case 1073742182:
case 1073741960:
break;
case 1073742334:
test=false;
tok=1073742335;
break;
case 1073741898:
tok2=1073742018;
break;
case 1073742039:
test=false;
tok=1073741898;
tok2=1073742018;
break;
case 1073742018:
tok2=1073741898;
break;
case 1073742052:
test=false;
tok=1073742018;
tok2=1073741898;
break;
case 1073742042:
test=false;
tok=1112150019;
break;
case 1073742046:
test=false;
tok=1073741938;
break;
case 1073742057:
test=false;
tok=1073741862;
break;
case 1073742060:
test=false;
tok=1073742182;
break;
case 1073742058:
test=false;
tok=1073741960;
break;
default:
$I$(6).error$S("PROBLEM IN MESHCOLLECTION: token? " + $I$(7).nameOf$I(tok));
}
this.setTokenProperty$I$Z$Z(tok, test, false);
if (tok2 != 0) this.setTokenProperty$I$Z$Z(tok2, test, true);
return;
}this.setPropS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'checkExplicit$S', function (id) {
if (this.explicitID) return;
this.explicitID=(id != null  && !id.equals$O("+PREVIOUS_MESH+") );
if (this.explicitID) this.previousMeshID=id;
});

Clazz.newMeth(C$, 'setTokenProperty$I$Z$Z', function (tokProp, bProp, testD) {
if (this.currentMesh == null ) {
var key=(this.explicitID && $I$(2).isWild$S(this.previousMeshID)  ? this.previousMeshID : null);
var list=this.getMeshList$S$Z(key, false);
for (var i=list.size$(); --i >= 0; ) p$1.setMeshTokenProperty$org_jmol_shape_Mesh$I$Z$Z.apply(this, [list.get$I(i), tokProp, bProp, testD]);

} else {
p$1.setMeshTokenProperty$org_jmol_shape_Mesh$I$Z$Z.apply(this, [this.currentMesh, tokProp, bProp, testD]);
if (this.linkedMesh != null ) p$1.setMeshTokenProperty$org_jmol_shape_Mesh$I$Z$Z.apply(this, [this.linkedMesh, tokProp, bProp, testD]);
}});

Clazz.newMeth(C$, 'setMeshTokenProperty$org_jmol_shape_Mesh$I$Z$Z', function (m, tokProp, bProp, testD) {
if (testD && (!m.havePlanarContours || m.drawTriangles == m.showContourLines  ) ) return;
switch (tokProp) {
case 1610625028:
m.bsDisplay=this.bsDisplay;
if (this.bsDisplay == null  && this.displayWithinPoints != null  ) m.setShowWithin$javajs_util_Lst$F$Z(this.displayWithinPoints, this.displayWithinDistance2, this.isDisplayWithinNot);
return;
case 1073742335:
m.visible=bProp;
return;
case 1765808134:
m.colix=this.colix;
return;
case 603979967:
m.setTranslucent$Z$F(bProp, this.translucentLevel);
if (bProp && m.bsSlabGhost != null  ) m.resetSlab$();
return;
default:
m.setTokenProperty$I$Z(tokProp, bProp);
}
}, p$1);

Clazz.newMeth(C$, 'getPropDataMC$S$OA', function (property, data) {
if (property == "keys") {
var keys=(Clazz.instanceOf(data[1], "javajs.util.Lst") ? data[1] : Clazz.new_($I$(8)));
data[1]=keys;
keys.addLast$TV("count");
keys.addLast$TV("getCenter");
}if (property == "getNames") {
var map=data[0];
var withDollar=(data[1]).booleanValue$();
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i] != null  && this.meshes[i].vc != 0 ) map.put$TK$TV((withDollar ? "$" : "") + this.meshes[i].thisID, $I$(7).tokenOr);

return true;
}if (property == "getVertices") {
var m=this.getMesh$S(data[0]);
if (m == null ) return false;
data[1]=m.vs;
data[2]=m.getVisibleVertexBitSet$();
return true;
}if (property == "checkID") {
var key=data[0];
var list=this.getMeshList$S$Z(key, true);
if (list.size$() == 0) return false;
data[1]=list.get$I(0).thisID;
return true;
}if (property == "index") {
var m=this.getMesh$S(data[0]);
data[1]=Integer.valueOf$I(m == null  ? -1 : m.index);
return true;
}if (property == "getCenter") {
var id=data[0];
var index=(data[1]).intValue$();
var m;
if ((m=this.getMesh$S(id)) == null  || m.vs == null  ) return false;
if (index == 2147483647) data[2]=$I$(9).new3$F$F$F(m.index + 1, this.meshCount, m.vc);
 else data[2]=m.vs[m.getVertexIndexFromNumber$I(index)];
return true;
}return this.getPropShape$S$OA(property, data);
});

Clazz.newMeth(C$, 'getMeshList$S$Z', function (key, justOne) {
var list=Clazz.new_($I$(8));
if (key != null ) key=(key.length$() == 0 ? null : key.toUpperCase$());
var isWild=$I$(2).isWild$S(key);
var id;
for (var i=this.meshCount; --i >= 0; ) if (key == null  || (id=this.meshes[i].thisID.toUpperCase$()).equals$O(key)  || isWild && $I$(2).isMatch$S$S$Z$Z(id, key, true, true)  ) {
list.addLast$TV(this.meshes[i]);
if (justOne) break;
}
return list;
});

Clazz.newMeth(C$, 'getPropMC$S$I', function (property, index) {
var m=this.currentMesh;
if (index >= 0 && (index >= this.meshCount || (m=this.meshes[index]) == null  ) ) return null;
if (property == "count") {
var n=0;
for (var i=0; i < this.meshCount; i++) if ((m=this.meshes[i]) != null  && m.vc > 0 ) n++;

return Integer.valueOf$I(n);
}if (property == "bsVertices") {
if (m == null ) return null;
var lst=Clazz.new_($I$(8));
lst.addLast$TV(m.vs);
lst.addLast$TV(m.getVisibleVBS$());
return lst;
}if (property == "ID") return (m == null  ? null : m.thisID);
if (property.startsWith$S("list")) {
this.clean$();
var sb=Clazz.new_($I$(10));
var k=0;
var isNamed=property.length$() > 5;
var id=(property.equals$O("list") ? null : isNamed ? property.substring$I(5) : m == null  ? null : m.thisID);
for (var i=0; i < this.meshCount; i++) {
m=this.meshes[i];
if (id != null  && !id.equalsIgnoreCase$S(m.thisID) ) continue;
sb.appendI$I((++k)).append$S(" id:" + m.thisID).append$S("; model:" + this.vwr.getModelNumberDotted$I(m.modelIndex)).append$S("; vertices:" + m.vc).append$S("; polygons:" + m.pc).append$S("; visible:" + m.visible);
var range=this.getProperty$S$I("dataRange", 0);
if (range != null ) sb.append$S("; dataRange:").append$S($I$(11).eAF$FA(range));
if (m.title != null ) {
var s="";
for (var j=0; j < m.title.length; j++) s += (j == 0 ? "; title:" : " | ") + m.title[j];

if (s.length$() > 10000) s=s.substring$I$I(0, 10000) + "...";
sb.append$S(s);
}sb.appendC$C("\n");
if (isNamed) {
var info=this.getProperty$S$I("jvxlFileInfo", 0);
if (info != null ) sb.append$S(info).appendC$C("\n");
}}
return sb.toString();
}if (property == "vertices") return p$1.getVertices$org_jmol_shape_Mesh.apply(this, [m]);
if (property == "info") return (m == null  ? null : m.getInfo$Z(false));
if (property == "data") return (m == null  ? null : m.getInfo$Z(true));
return null;
});

Clazz.newMeth(C$, 'getVertices$org_jmol_shape_Mesh', function (mesh) {
if (mesh == null ) return null;
return mesh.vs;
}, p$1);

Clazz.newMeth(C$, 'clean$', function () {
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i] == null  || this.meshes[i].vc == 0 ) this.deleteMeshI$I(i);

});

Clazz.newMeth(C$, 'deleteMesh', function () {
if (this.explicitID && this.currentMesh != null  ) this.deleteMeshI$I(this.currentMesh.index);
 else this.deleteMeshKey$S(this.explicitID && this.previousMeshID != null   && $I$(2).isWild$S(this.previousMeshID)  ? this.previousMeshID : null);
this.currentMesh=null;
}, p$1);

Clazz.newMeth(C$, 'deleteMeshKey$S', function (key) {
if (key == null  || key.length$() == 0 ) {
for (var i=this.meshCount; --i >= 0; ) this.meshes[i]=null;

this.meshCount=0;
this.nUnnamed=0;
if (this.htObjects != null ) this.htObjects.clear$();
} else {
var list=this.getMeshList$S$Z(key, false);
var n=list.size$();
for (var i=0; i < n; i++) this.deleteMeshI$I(list.get$I(i).index);

}});

Clazz.newMeth(C$, 'deleteMeshI$I', function (i) {
if (this.htObjects != null ) this.htObjects.remove$O(this.meshes[i].thisID.toUpperCase$());
for (var j=i + 1; j < this.meshCount; ++j) this.meshes[--this.meshes[j].index]=this.meshes[j];

this.meshes[--this.meshCount]=null;
});

Clazz.newMeth(C$, 'resetObjects$', function () {
this.htObjects.clear$();
for (var i=0; i < this.meshCount; i++) {
var m=this.meshes[i];
m.index=i;
this.htObjects.put$TK$TV(m.thisID.toUpperCase$(), m);
}
});

Clazz.newMeth(C$, 'getMesh$S', function (thisID) {
var i=this.getIndexFromName$S(thisID);
return (i < 0 ? null : this.meshes[i]);
});

Clazz.newMeth(C$, 'getIndexFromName$S', function (id) {
if ("+PREVIOUS_MESH+".equals$O(id)) return (this.previousMeshID == null  ? this.meshCount - 1 : this.getIndexFromName$S(this.previousMeshID));
if ($I$(2).isWild$S(id)) {
var list=this.getMeshList$S$Z(id, true);
return (list.size$() == 0 ? -1 : list.get$I(0).index);
}if (this.htObjects != null ) {
var m=this.htObjects.get$O(id.toUpperCase$());
return (m == null  ? -1 : m.index);
}for (var i=this.meshCount; --i >= 0; ) {
if (this.meshes[i] != null  && this.meshes[i].vc != 0  && id.equalsIgnoreCase$S(this.meshes[i].thisID) ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bsModels) {
var bsDeleted=this.vwr.slm.bsDeleted;
for (var i=this.meshCount; --i >= 0; ) {
var mesh=this.meshes[i];
mesh.visibilityFlags=(mesh.visible && mesh.isValid && (mesh.modelIndex < 0 || bsModels.get$I(mesh.modelIndex) && (mesh.atomIndex < 0 || !this.ms.isAtomHidden$I(mesh.atomIndex) && !(bsDeleted != null  && bsDeleted.get$I(mesh.atomIndex) )  )  )   ? this.vf : 0);
}
});

Clazz.newMeth(C$, 'setStatusPicked$I$javajs_util_T3$java_util_Map', function (flag, v, map) {
this.vwr.setStatusAtomPicked$I$S$java_util_Map$Z(flag, "[\"" + this.myType + "\"," + $I$(2).esc$S(this.pickedMesh.thisID) + "," + +this.pickedModel + "," + this.pickedVertex + "," + new Float(v.x).toString() + "," + new Float(v.y).toString() + "," + new Float(v.z).toString() + "," + (this.pickedMesh.title == null  ? "\"\"" : $I$(2).esc$S(this.pickedMesh.title[0])) + "]" , map, false);
});

Clazz.newMeth(C$, 'getPickedPoint$javajs_util_T3$I', function (v, modelIndex) {
var map=Clazz.new_($I$(12));
if (v != null ) {
map.put$TK$TV("pt", v);
map.put$TK$TV("modelIndex", Integer.valueOf$I(modelIndex));
map.put$TK$TV("model", this.vwr.getModelNumberDotted$I(modelIndex));
map.put$TK$TV("id", this.pickedMesh.thisID);
map.put$TK$TV("vertex", Integer.valueOf$I(this.pickedVertex + 1));
map.put$TK$TV("type", this.myType);
}return map;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
