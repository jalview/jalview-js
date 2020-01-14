(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.util.C']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PMeshWriter");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.imesh=null;
this.isBinary=false;
this.oc=null;
this.i0=0;
this.polygonIndexes=null;
this.selectedPolyOnly=false;
this.bsPolygons=null;
this.haveBsDisplay=false;
this.colorSolid=false;
this.colorArrayed=false;
this.cx=0;
this.vertexColixes=null;
this.noColor=false;
this.contourColixes=null;
this.vertexValues=null;
this.vertexCount=0;
this.imap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'write$org_jmol_shapesurface_IsosurfaceMesh$Z', function (isosurfaceMesh, isBinary) {
this.imesh=isosurfaceMesh;
this.isBinary=isBinary;
var bsPoly=Clazz.new_($I$(1));
var bsVert=Clazz.new_($I$(1));
var bsPoints=Clazz.new_($I$(1));
if (this.imesh.showPoints || this.imesh.pc <= 0 ) p$1.checkPoints$javajs_util_BS.apply(this, [bsPoints]);
bsVert.or$javajs_util_BS(bsPoints);
if (this.imesh.drawTriangles) p$1.checkTriangles$Z$javajs_util_BS$javajs_util_BS.apply(this, [false, bsPoly, bsVert]);
if (this.imesh.pc > 0 && this.imesh.fillTriangles ) p$1.checkTriangles$Z$javajs_util_BS$javajs_util_BS.apply(this, [true, bsPoly, bsVert]);
this.imap=Clazz.array(Integer.TYPE, [this.vertexCount]);
var iimap=Clazz.array(Integer.TYPE, [this.vertexCount]);
var nV=0;
for (var i=bsVert.nextSetBit$I(0); i >= 0; i=bsVert.nextSetBit$I(i + 1)) {
iimap[nV]=i;
this.imap[i]=nV++;
}
p$1.writePmeshHeader$I.apply(this, [nV]);
if (!isBinary) p$1.outputInt$I.apply(this, [nV]);
for (var i=0; i < nV; i++) p$1.outputXYZ$javajs_util_T3.apply(this, [this.imesh.vs[iimap[i]]]);

if (!isBinary) p$1.outputInt$I.apply(this, [-1]);
if (this.imesh.showPoints || this.imesh.pc <= 0 ) p$1.outputPoints$javajs_util_BS.apply(this, [bsPoints]);
bsVert.or$javajs_util_BS(bsPoints);
var bsDone=Clazz.new_($I$(1));
if (this.imesh.drawTriangles) p$1.outputTriangles$Z$javajs_util_BS$javajs_util_BS.apply(this, [false, bsPoly, bsDone]);
if (this.imesh.pc > 0 && this.imesh.fillTriangles ) p$1.outputTriangles$Z$javajs_util_BS$javajs_util_BS.apply(this, [true, bsPoly, bsDone]);
if (isBinary) this.oc.writeInt$I(0);
 else this.oc.append$S("0\n");
this.oc.closeChannel$();
return (isBinary ? this.oc.toByteArray$() : this.oc.toString());
});

Clazz.newMeth(C$, 'outputPoints$javajs_util_BS', function (bsPoints) {
var color=$I$(2).getArgb$H(this.cx);
for (var i=bsPoints.nextSetBit$I(0); i >= 0; i=bsPoints.nextSetBit$I(i + 1)) {
if (!this.imesh.isColorSolid && this.imesh.vcs != null  ) {
this.cx=this.imesh.vcs[i];
color=$I$(2).getArgb$H(this.cx);
}p$1.outputPoint$I$I.apply(this, [this.imap[i], color]);
}
}, p$1);

Clazz.newMeth(C$, 'outputTriangles$Z$javajs_util_BS$javajs_util_BS', function (fill, bsPoly, bsDone) {
var color=$I$(2).getArgb$H(this.cx);
for (var i=bsPoly.nextSetBit$I(0); i >= 0; i=bsPoly.nextSetBit$I(i + 1)) {
var polygon=this.polygonIndexes[i];
var iA=this.imap[polygon[0]];
var iB=this.imap[polygon[1]];
var iC=this.imap[polygon[2]];
if (this.colorSolid) {
if (this.colorArrayed && i < this.imesh.pcs.length ) this.cx=this.imesh.pcs[i];
} else {
this.cx=this.vertexColixes[polygon[0]];
}color=$I$(2).getArgb$H(this.cx);
if (fill) {
if (iB == iC) {
if (iA == iB) p$1.outputPoint$I$I.apply(this, [iA, color]);
 else p$1.outputEdge$I$I$I.apply(this, [iA, iB, color]);
bsDone.set$I(i);
} else {
if (this.imesh.colorsExplicit) color=polygon[4];
p$1.outputTriangle$I$I$I$I$I.apply(this, [iA, iB, iC, color, 999]);
}} else if (!bsDone.get$I(i)) {
var check=7 & polygon[3];
if (check == 0) continue;
if (this.noColor) {
} else if (this.colorArrayed) {
color=$I$(2).getArgb$H(this.imesh.fillTriangles ? 4 : this.contourColixes[polygon[4] % this.contourColixes.length]);
}p$1.outputTriangle$I$I$I$I$I.apply(this, [iA, iB, iC, color, check]);
}}
}, p$1);

Clazz.newMeth(C$, 'checkPoints$javajs_util_BS', function (bsVert) {
var slabPoints=((this.imesh.pc == 0) && this.selectedPolyOnly );
var incr=this.imesh.vertexIncrement;
for (var i=(!this.imesh.hasGridPoints || this.imesh.firstRealVertex < 0  ? 0 : this.imesh.firstRealVertex); i < this.vertexCount; i+=incr) {
if (this.vertexValues != null  && Float.isNaN$F(this.vertexValues[i])  || this.imesh.jvxlData.thisSet >= 0 && this.imesh.vertexSets[i] != this.imesh.jvxlData.thisSet   || !this.imesh.isColorSolid  || this.haveBsDisplay && !this.imesh.bsDisplay.get$I(i)   || slabPoints && !this.bsPolygons.get$I(i)  ) continue;
bsVert.set$I(i);
}
}, p$1);

Clazz.newMeth(C$, 'checkTriangles$Z$javajs_util_BS$javajs_util_BS', function (fill, bsPoly, bsVert) {
p$1.setup$Z.apply(this, [fill]);
for (var i=this.imesh.pc; --i >= 0; ) {
var polygon=this.polygonIndexes[i];
if (polygon == null  || this.selectedPolyOnly && !this.bsPolygons.get$I(i)  ) continue;
var iA=polygon[0];
if (this.imesh.jvxlData.thisSet >= 0 && this.imesh.vertexSets != null   && this.imesh.vertexSets[iA] != this.imesh.jvxlData.thisSet ) continue;
var iB=polygon[1];
var iC=polygon[2];
if (this.haveBsDisplay && (!this.imesh.bsDisplay.get$I(iA) || !this.imesh.bsDisplay.get$I(iB) || !this.imesh.bsDisplay.get$I(iC)  ) ) continue;
if (this.colorSolid && this.colorArrayed && i < this.imesh.pcs.length   && this.imesh.pcs[i] == 0 ) continue;
bsPoly.set$I(i);
bsVert.set$I(iA);
bsVert.set$I(iB);
bsVert.set$I(iC);
}
}, p$1);

Clazz.newMeth(C$, 'setup$Z', function (fill) {
this.vertexCount=this.imesh.vc;
this.vertexValues=this.imesh.vvs;
this.polygonIndexes=this.imesh.pis;
this.cx=(!fill && this.imesh.meshColix != 0  ? this.imesh.meshColix : this.imesh.colix);
this.vertexColixes=(!fill && this.imesh.meshColix != 0  ? null : this.imesh.vcs);
this.colorSolid=(this.vertexColixes == null );
this.noColor=(this.vertexColixes == null  || !fill && this.imesh.meshColix != 0  );
this.colorArrayed=(this.colorSolid && this.imesh.pcs != null  );
if (this.colorArrayed && !fill && this.imesh.fillTriangles  ) this.colorArrayed=false;
this.contourColixes=this.imesh.jvxlData.contourColixes;
this.haveBsDisplay=(this.imesh.bsDisplay != null );
this.selectedPolyOnly=(this.imesh.bsSlabDisplay != null );
this.bsPolygons=(this.selectedPolyOnly ? this.imesh.bsSlabDisplay : null);
}, p$1);

Clazz.newMeth(C$, 'writePmeshHeader$I', function (nV) {
this.oc=this.imesh.vwr.getOutputChannel$S$SA(null, null);
if (this.isBinary) {
this.oc.writeByteAsInt$I(80);
this.oc.writeByteAsInt$I(77);
this.oc.writeByteAsInt$I(1);
this.oc.writeByteAsInt$I(0);
this.oc.writeInt$I(1);
this.oc.writeInt$I(nV);
this.oc.writeInt$I(-1);
for (var i=0; i < 16; i++) this.oc.writeInt$I(0);

} else {
this.oc.append$S("#JmolPmesh\n");
}}, p$1);

Clazz.newMeth(C$, 'outputInt$I', function (i) {
if (this.isBinary) this.oc.writeInt$I(i);
 else this.oc.append$S("" + i + "\n" );
}, p$1);

Clazz.newMeth(C$, 'outputPoint$I$I', function (iA, color) {
p$1.outputInt$I.apply(this, [-1]);
p$1.outputInt$I.apply(this, [iA]);
p$1.outputInt$I.apply(this, [color]);
return 1;
}, p$1);

Clazz.newMeth(C$, 'outputXYZ$javajs_util_T3', function (pt) {
if (this.isBinary) {
this.oc.writeFloat$F(pt.x);
this.oc.writeFloat$F(pt.y);
this.oc.writeFloat$F(pt.z);
} else {
this.oc.append$S(new Float(pt.x).toString() + " " + new Float(pt.y).toString() + " " + new Float(pt.z).toString() + "\n" );
}}, p$1);

Clazz.newMeth(C$, 'outputEdge$I$I$I', function (iA, iB, color) {
p$1.outputInt$I.apply(this, [-2]);
p$1.outputInt$I.apply(this, [iA]);
p$1.outputInt$I.apply(this, [iB]);
p$1.outputInt$I.apply(this, [color]);
}, p$1);

Clazz.newMeth(C$, 'outputTriangle$I$I$I$I$I', function (iA, iB, iC, color, check) {
if (check == 999) {
p$1.outputInt$I.apply(this, [-3]);
p$1.outputInt$I.apply(this, [iA]);
p$1.outputInt$I.apply(this, [iB]);
p$1.outputInt$I.apply(this, [iC]);
p$1.outputInt$I.apply(this, [color]);
return;
}if ((check & 1) != 0) p$1.outputEdge$I$I$I.apply(this, [iA, iB, color]);
if ((check & 2) != 0) p$1.outputEdge$I$I$I.apply(this, [iB, iC, color]);
if ((check & 4) != 0) p$1.outputEdge$I$I$I.apply(this, [iC, iA, color]);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
