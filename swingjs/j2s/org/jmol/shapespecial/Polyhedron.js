(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.V3','javajs.util.AU','org.jmol.script.SV','org.jmol.util.C','org.jmol.util.Point3fi','org.jmol.api.Interface','javajs.util.Measure','javajs.util.BS','org.jmol.util.Logger','java.util.Hashtable','org.jmol.util.Elements','javajs.util.Lst','javajs.util.T3','org.jmol.util.Escape','org.jmol.util.Normix']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Polyhedron");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.isValid=true;
this.colixEdge=0;
this.visibilityFlags=0;
this.colix=23;
this.modelIndex=-2147483648;
this.scale=1;
},1);

C$.$fields$=[['Z',['collapsed','visible','isFullyLit','isValid'],'F',['distanceRef','scale','pointScale'],'I',['nVertices','visibilityFlags','modelIndex'],'H',['colixEdge','colix'],'S',['id','smiles','smarts','polySmiles'],'O',['info','java.util.Map','center','javajs.util.P3','centralAtom','org.jmol.modelset.Atom','vertices','javajs.util.P3[]','triangles','int[][]','+faces','bsFlat','javajs.util.BS','normals','javajs.util.V3[]','normixes','short[]','planes','javajs.util.P4[]','pointGroup','org.jmol.api.SymmetryInterface','+pointGroupFamily','volume','Float','offset','javajs.util.P3','faceTriangles','int[][]','elemNos','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$S$I$javajs_util_P3$javajs_util_P3A$I$I$IAA$I$IAA$IAA$javajs_util_V3A$javajs_util_BS$Z$F$F', function (id, modelIndex, atomOrPt, points, nPoints, vertexCount, triangles, triangleCount, faces, faceTriangles, normals, bsFlat, collapsed, distanceRef, pointScale) {
this.pointScale=pointScale;
this.distanceRef=distanceRef;
if (id == null ) {
this.centralAtom=atomOrPt;
this.modelIndex=this.centralAtom.mi;
} else {
this.id=id;
this.center=atomOrPt;
this.modelIndex=modelIndex;
}this.nVertices=vertexCount;
this.vertices=Clazz.array($I$(1), [nPoints + 1]);
this.normals=Clazz.array($I$(2), [triangleCount]);
this.faces=faces;
this.faceTriangles=faceTriangles;
this.bsFlat=bsFlat;
this.triangles=$I$(3).newInt2$I(triangleCount);
for (var i=nPoints + 1; --i >= 0; ) this.vertices[i]=points[i];

for (var i=triangleCount; --i >= 0; ) this.normals[i]=$I$(2).newV$javajs_util_T3(normals[i]);

for (var i=triangleCount; --i >= 0; ) this.triangles[i]=triangles[i];

this.collapsed=collapsed;
return this;
});

Clazz.newMeth(C$, 'setInfo$org_jmol_viewer_Viewer$java_util_Map$org_jmol_modelset_AtomA', function (vwr, info, at) {
try {
var o=info.get$O("id");
this.collapsed=info.containsKey$O("collapsed");
var isSV=(!(Clazz.instanceOf(o, "java.lang.String")));
if (o != null ) this.id=(isSV ? (info.get$O("id")).asString$() : o.toString());
if (this.id == null ) {
this.centralAtom=at[(info.get$O("atomIndex")).intValue];
this.modelIndex=this.centralAtom.mi;
} else {
o=info.get$O("center");
this.center=$I$(1,"newP$javajs_util_T3",[isSV ? $I$(4).ptValue$org_jmol_script_SV(o) : o]);
o=info.get$O("modelIndex");
this.modelIndex=(o == null  ? vwr.am.cmi : isSV ? (o).intValue : (o).intValue$());
o=info.get$O("color");
this.colix=$I$(5,"getColixS$S",[o == null  ? "gold" : isSV ? (o).asString$() : o]);
o=info.get$O("colorEdge");
if (o != null ) this.colixEdge=$I$(5,"getColixS$S",[isSV ? (o).asString$() : o.toString()]);
o=info.get$O("offset");
if (o != null ) this.offset=$I$(1,"newP$javajs_util_T3",[isSV ? $I$(4).ptValue$org_jmol_script_SV(o) : o]);
o=info.get$O("scale");
if (o != null ) this.scale=(isSV ? $I$(4).fValue$org_jmol_script_T(o) : (o).floatValue$());
}o=info.get$O("vertices");
var lst=(isSV ? (o).getList$() : o);
o=info.get$O("vertexCount");
var needTriangles=false;
if (o != null ) {
this.nVertices=(isSV ? (o).intValue : (o).intValue$());
this.vertices=Clazz.array($I$(1), [lst.size$()]);
o=info.get$O("r");
if (o != null ) this.distanceRef=(isSV ? (o).asFloat$() : (o).floatValue$());
} else {
this.nVertices=lst.size$();
this.vertices=Clazz.array($I$(1), [this.nVertices + 1]);
if (this.center == null ) {
this.vertices[this.nVertices]=$I$(4,"ptValue$org_jmol_script_SV",[info.get$O("ptRef")]);
} else {
this.vertices[this.nVertices]=this.center;
needTriangles=true;
}}for (var i=lst.size$(); --i >= 0; ) {
o=lst.get$I(i);
this.vertices[i]=(isSV ? $I$(4).ptValue$org_jmol_script_SV(o) : o);
}
o=info.get$O("elemNos");
if (o != null ) {
lst=(isSV ? (o).getList$() : o);
for (var i=this.nVertices; --i >= 0; ) {
o=lst.get$I(i);
var n=(isSV ? (o).intValue : (o).intValue$());
if (n > 0) {
var p=Clazz.new_($I$(6,1));
p.setT$javajs_util_T3(this.vertices[i]);
p.sD=($s$[0] = n, $s$[0]);
this.vertices[i]=p;
}}
}o=info.get$O("pointScale");
if (o != null ) this.pointScale=Math.max(0, (isSV ? $I$(4).fValue$org_jmol_script_T(o) : (o).floatValue$()));
this.faces=p$1.toInt2$Z$O.apply(this, [isSV, info.get$O("faces")]);
o=info.get$O("triangles");
if (o == null ) {
if (needTriangles) {
this.faceTriangles=$I$(3).newInt2$I(this.faces.length);
this.triangles=($I$(7).getInterface$S$org_jmol_viewer_Viewer$S("org.jmol.util.MeshCapper", vwr, "script")).set$org_jmol_util_MeshSlicer(null).triangulateFaces$IAA$javajs_util_P3A$IAA(this.faces, this.vertices, this.faceTriangles);
} else {
this.triangles=this.faces;
this.faces=null;
}} else {
this.triangles=p$1.toInt2$Z$O.apply(this, [isSV, o]);
}this.normals=Clazz.array($I$(2), [this.triangles.length]);
var vAB=Clazz.new_($I$(2,1));
for (var i=this.triangles.length; --i >= 0; ) {
this.normals[i]=Clazz.new_($I$(2,1));
var a=this.triangles[i];
$I$(8).getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(this.vertices[a[0]], this.vertices[a[1]], this.vertices[a[2]], this.normals[i], vAB);
}
o=info.get$O("bsFlat");
this.bsFlat=(o == null  ? Clazz.new_($I$(9,1)) : isSV ? $I$(4).getBitSet$org_jmol_script_SV$Z(o, false) : o);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'toInt2$Z$O', function (isSV, o) {
var lst=(isSV ? (o).getList$() : o);
var ai=$I$(3,"newInt2$I",[lst.size$()]);
for (var i=ai.length; --i >= 0; ) {
o=lst.get$I(i);
if (isSV) {
var lst2=(o).getList$();
var a=ai[i]=Clazz.array(Integer.TYPE, [lst2.size$()]);
for (var j=a.length; --j >= 0; ) a[j]=lst2.get$I(j).intValue;

} else {
ai[i]=o;
}}
return ai;
}, p$1);

Clazz.newMeth(C$, 'getInfo$org_jmol_viewer_Viewer$S', function (vwr, property) {
var isState=(property == null );
var isFaceCalc=(!isState);
var info=this.info;
if (!isState && info != null   && (!isFaceCalc || info.containsKey$O("face_types") )  && !$I$(10).debugging ) return info;
info=Clazz.new_($I$(11,1));
info.put$O$O("vertexCount", Integer.valueOf$I(this.nVertices));
var nv=(isState ? this.vertices.length : this.nVertices);
var pts=Clazz.array($I$(1), [nv]);
for (var i=0; i < nv; i++) pts[i]=$I$(1).newP$javajs_util_T3(this.vertices[i]);

info.put$O$O("vertices", pts);
info.put$O$O("elemNos", this.getElemNos$());
if (this.id == null ) {
info.put$O$O("atomIndex", Integer.valueOf$I(this.centralAtom.i));
} else {
info.put$O$O("id", this.id);
info.put$O$O("center", $I$(1).newP$javajs_util_T3(this.center));
info.put$O$O("color", $I$(5).getHexCode$H(this.colix));
info.put$O$O("colorEdge", $I$(5,"getHexCode$H",[this.colixEdge == 0 ? this.colix : this.colixEdge]));
if (this.offset != null ) info.put$O$O("offset", this.offset);
if (this.scale != 1 ) info.put$O$O("scale", Float.valueOf$F(this.scale));
}if (this.id != null  || !isState ) info.put$O$O("modelIndex", Integer.valueOf$I(this.modelIndex));
if (!isState) {
this.info=info;
if (this.id == null ) {
info.put$O$O("center", $I$(1).newP$javajs_util_T3(this.centralAtom));
info.put$O$O("modelNumber", Integer.valueOf$I(this.centralAtom.getModelNumber$()));
info.put$O$O("atomNumber", Integer.valueOf$I(this.centralAtom.getAtomNumber$()));
info.put$O$O("atomName", this.centralAtom.getInfo$());
info.put$O$O("element", this.centralAtom.getElementSymbol$());
var energy=vwr.ms.getInfo$I$S(this.centralAtom.mi, "Energy");
if (energy != null ) info.put$O$O("energy", energy);
}info.put$O$O("triangleCount", Integer.valueOf$I(this.triangles.length));
info.put$O$O("volume", p$1.getVolume.apply(this, []));
var names=Clazz.array(String, [this.nVertices]);
var indices=Clazz.array(Integer.TYPE, [this.nVertices]);
for (var i=this.nVertices; --i >= 0; ) {
var pt=this.vertices[i];
var isNode=Clazz.instanceOf(pt, "org.jmol.util.Node");
names[i]=(isNode ? (pt).getAtomName$() : Clazz.instanceOf(pt, "org.jmol.util.Point3fi") ? $I$(12,"elementSymbolFromNumber$I",[(pt).sD]) : "");
indices[i]=(isNode ? (pt).getIndex$() : -1);
}
info.put$O$O("atomNames", names);
info.put$O$O("vertexIndices", indices);
if (this.faces != null  && !this.collapsed  && this.faceTriangles != null  ) {
info.put$O$O("faceCount", Integer.valueOf$I(this.faces.length));
info.put$O$O("faceTriangles", this.faceTriangles);
if (isFaceCalc) {
var faceTypes=Clazz.array(Integer.TYPE, [this.faces.length]);
var faceAreas=Clazz.array(Float.TYPE, [this.faces.length]);
var facePoints=Clazz.new_($I$(13,1));
var vAB=Clazz.new_($I$(2,1));
var vAC=Clazz.new_($I$(2,1));
var vTemp=Clazz.new_($I$(2,1));
for (var i=this.faces.length; --i >= 0; ) {
var face=this.faces[i];
faceTypes[i]=face.length;
var f=0;
var ft=this.faceTriangles[i];
for (var j=ft.length; --j >= 0; ) {
var t=this.triangles[ft[j]];
f += p$1.triangleArea$I$I$I$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [t[0], t[1], t[2], vAB, vAC, vTemp]);
}
faceAreas[i]=f;
var fpts=Clazz.array($I$(1), [face.length]);
for (var j=face.length; --j >= 0; ) fpts[j]=this.vertices[face[j]];

facePoints.addLast$O(fpts);
}
info.put$O$O("face_types", faceTypes);
info.put$O$O("face_areas", faceAreas);
info.put$O$O("face_points", facePoints);
}}if (this.smarts != null ) info.put$O$O("smarts", this.smarts);
if (this.smiles != null ) info.put$O$O("smiles", this.smiles);
if (this.polySmiles != null ) info.put$O$O("polySmiles", this.polySmiles);
if (this.pointGroup != null ) info.put$O$O("pointGroup", this.pointGroup.getPointGroupName$());
if (this.pointGroupFamily != null ) info.put$O$O("pointGroupFamily", this.pointGroupFamily.getPointGroupName$());
}if (this.pointScale > 0 ) info.put$O$O("pointScale", Float.valueOf$F(this.pointScale));
if (this.faces != null ) info.put$O$O("faces", this.faces);
if (isState || $I$(10).debugging ) {
info.put$O$O("bsFlat", this.bsFlat);
if (this.collapsed) info.put$O$O("collapsed", Boolean.valueOf$Z(this.collapsed));
if (this.distanceRef != 0 ) info.put$O$O("r", Float.valueOf$F(this.distanceRef));
var n=Clazz.array($I$(1), [this.normals.length]);
for (var i=n.length; --i >= 0; ) n[i]=$I$(1).newP$javajs_util_T3(this.normals[i]);

if (!isState) info.put$O$O("normals", n);
info.put$O$O("triangles", $I$(3).arrayCopyII$IAA$I(this.triangles, this.triangles.length));
}return info;
});

Clazz.newMeth(C$, 'getElemNos$', function () {
if (this.elemNos == null ) {
this.elemNos=Clazz.array(Integer.TYPE, [this.nVertices]);
for (var i=0; i < this.nVertices; i++) {
var pt=this.vertices[i];
this.elemNos[i]=(Clazz.instanceOf(pt, "org.jmol.util.Node") ? (pt).getElementNumber$() : Clazz.instanceOf(pt, "org.jmol.util.Point3fi") ? (pt).sD : (-2|0));
}
}return this.elemNos;
});

Clazz.newMeth(C$, 'getSymmetry$org_jmol_viewer_Viewer$Z', function (vwr, withPointGroup) {
if (this.id == null ) {
if (this.smarts == null ) {
this.info=null;
var sm=vwr.getSmilesMatcher$();
try {
var details=(this.distanceRef <= 0  ? null : "r=" + new Float(this.distanceRef).toString());
this.smarts=sm.polyhedronToSmiles$org_jmol_util_Node$IAA$I$javajs_util_P3A$I$S(this.centralAtom, this.faces, this.nVertices, null, 8192, null);
this.smiles=sm.polyhedronToSmiles$org_jmol_util_Node$IAA$I$javajs_util_P3A$I$S(this.centralAtom, this.faces, this.nVertices, this.vertices, 1, null);
this.polySmiles=sm.polyhedronToSmiles$org_jmol_util_Node$IAA$I$javajs_util_P3A$I$S(this.centralAtom, this.faces, this.nVertices, this.vertices, 196609, details);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}if (!withPointGroup) return null;
if (this.pointGroup == null ) {
var pts=Clazz.array($I$(14), [this.nVertices]);
for (var i=pts.length; --i >= 0; ) pts[i]=this.vertices[i];

this.pointGroup=vwr.getSymTemp$().setPointGroup$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z(null, null, pts, null, false, vwr.getFloat$I(570425382), vwr.getFloat$I(570425384), true);
for (var i=pts.length; --i >= 0; ) pts[i]=$I$(1).newP$javajs_util_T3(this.vertices[i]);

this.pointGroupFamily=vwr.getSymTemp$().setPointGroup$org_jmol_api_SymmetryInterface$javajs_util_T3$javajs_util_T3A$javajs_util_BS$Z$F$F$Z(null, null, pts, null, false, vwr.getFloat$I(570425382), vwr.getFloat$I(570425384), true);
}return (this.center == null  ? this.centralAtom : this.center) + "    \t" + this.pointGroup.getPointGroupName$() + "\t" + this.pointGroupFamily.getPointGroupName$() ;
});

Clazz.newMeth(C$, 'getVolume', function () {
if (this.volume != null ) return this.volume;
var vAB=Clazz.new_($I$(2,1));
var vAC=Clazz.new_($I$(2,1));
var vTemp=Clazz.new_($I$(2,1));
var v=0;
if (this.bsFlat.cardinality$() < this.triangles.length) for (var i=this.triangles.length; --i >= 0; ) {
var t=this.triangles[i];
v += p$1.triangleVolume$I$I$I$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [t[0], t[1], t[2], vAB, vAC, vTemp]);
}
return Float.valueOf$F(v / 6);
}, p$1);

Clazz.newMeth(C$, 'triangleArea$I$I$I$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (i, j, k, vAB, vAC, vTemp) {
vAB.sub2$javajs_util_T3$javajs_util_T3(this.vertices[j], this.vertices[i]);
vAC.sub2$javajs_util_T3$javajs_util_T3(this.vertices[k], this.vertices[i]);
vTemp.cross$javajs_util_T3$javajs_util_T3(vAB, vAC);
return vTemp.length$();
}, p$1);

Clazz.newMeth(C$, 'triangleVolume$I$I$I$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (i, j, k, vAB, vAC, vTemp) {
vAB.setT$javajs_util_T3(this.vertices[i]);
vAC.setT$javajs_util_T3(this.vertices[j]);
vTemp.cross$javajs_util_T3$javajs_util_T3(vAB, vAC);
vAC.setT$javajs_util_T3(this.vertices[k]);
return vAC.dot$javajs_util_T3(vTemp);
}, p$1);

Clazz.newMeth(C$, 'getState$org_jmol_viewer_Viewer', function (vwr) {
var ident=(this.id == null  ? "({" + this.centralAtom.i + "})"  : "ID " + $I$(15).e$O(this.id));
return "  polyhedron @{" + $I$(15,"e$O",[this.getInfo$org_jmol_viewer_Viewer$S(vwr, null)]) + "} " + (this.isFullyLit ? " fullyLit" : "") + ";" + (this.visible ? "" : "polyhedra " + ident + " off;" ) + "\n" ;
});

Clazz.newMeth(C$, 'move$javajs_util_M4$javajs_util_BS', function (mat, bsMoved) {
this.info=null;
for (var i=0; i < this.nVertices; i++) {
var p=this.vertices[i];
if (Clazz.instanceOf(p, "org.jmol.modelset.Atom")) {
if (bsMoved.get$I((p).i)) continue;
p=this.vertices[i]=$I$(1).newP$javajs_util_T3(p);
}mat.rotTrans$javajs_util_T3(p);
}
for (var i=this.normals.length; --i >= 0; ) mat.rotate$javajs_util_T3(this.normals[i]);

this.normixes=null;
});

Clazz.newMeth(C$, 'getNormixes$', function () {
if (this.normixes == null ) {
this.normixes=Clazz.array(Short.TYPE, [this.normals.length]);
var bsTemp=Clazz.new_($I$(9,1));
for (var i=this.normals.length; --i >= 0; ) this.normixes[i]=(this.bsFlat.get$I(i) ? $I$(16).get2SidedNormix$javajs_util_V3$javajs_util_BS(this.normals[i], bsTemp) : $I$(16).getNormixV$javajs_util_V3$javajs_util_BS(this.normals[i], bsTemp));

}return this.normixes;
});

Clazz.newMeth(C$, 'setOffset$javajs_util_P3', function (value) {
this.planes=null;
if (this.center == null ) return;
var v=$I$(1).newP$javajs_util_T3(value);
if (this.offset != null ) value.sub$javajs_util_T3(this.offset);
this.offset=v;
for (var i=this.vertices.length; --i >= 0; ) this.vertices[i].add$javajs_util_T3(value);

});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
