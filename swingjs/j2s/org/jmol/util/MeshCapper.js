(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},p$2={},I$=[[0,'javajs.util.P3','org.jmol.util.Logger','java.util.Hashtable','javajs.util.Lst','javajs.util.AU',['org.jmol.util.MeshCapper','.CapVertex'],'javajs.util.V3','javajs.util.Quat','javajs.util.M3','java.util.Arrays',['org.jmol.util.MeshCapper','.MeshCapperSorter']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeshCapper", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MeshCapperSorter',1],['CapVertex',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['dumping'],'I',['nTriangles','nRegions','nPoints'],'O',['slicer','org.jmol.util.MeshSlicer','capMap','java.util.Map','vertices','javajs.util.Lst','+lstRegions','+lstTriangles','m3','javajs.util.M3','+m3inv']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_util_MeshSlicer', function (slicer) {
this.slicer=slicer;
this.dumping=$I$(2).debugging;
return this;
});

Clazz.newMeth(C$, 'clear$', function () {
this.capMap=Clazz.new_($I$(3,1));
this.vertices=Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'triangulateFaces$IAA$javajs_util_P3A$IAA', function (faces, vertices, faceTriangles) {
this.lstTriangles=Clazz.new_($I$(4,1));
var points=Clazz.array($I$(1), [10]);
for (var f=0, n=faces.length; f < n; f++) {
var face=faces[f];
var npts=face.length;
if (points.length < npts) points=Clazz.array($I$(1), [npts]);
var n0=this.lstTriangles.size$();
for (var i=npts; --i >= 0; ) points[i]=vertices[face[i]];

this.triangulatePolygon$javajs_util_P3A$I(points, npts);
var n1=this.lstTriangles.size$();
var ft=Clazz.array(Integer.TYPE, [n1 - n0]);
if (faceTriangles != null ) faceTriangles[f]=ft;
for (var i=n0; i < n1; i++) {
var t=this.lstTriangles.get$I(i);
ft[i - n0]=i;
for (var j=3; --j >= 0; ) t[j]=face[t[j]];

t[3]=-t[3];
}
}
var triangles=$I$(5,"newInt2$I",[this.lstTriangles.size$()]);
this.lstTriangles.toArray$OA(triangles);
return triangles;
});

Clazz.newMeth(C$, 'triangulatePolygon$javajs_util_P3A$I', function (points, nPoints) {
this.clear$();
var haveList=(nPoints >= 0);
if (!haveList || this.lstTriangles == null  ) this.lstTriangles=Clazz.new_($I$(4,1));
nPoints=this.nPoints=(haveList ? nPoints : points.length);
var v0=null;
for (var i=0; i < nPoints; i++) {
if (points[i] == null ) return null;
var v=Clazz.new_($I$(6,1).c$$javajs_util_T3$I,[this, null, points[i], i]);
this.vertices.addLast$O(v);
if (v0 != null ) {
v0.link$org_jmol_util_MeshCapper_CapVertex(v);
}v0=v;
}
v0.link$org_jmol_util_MeshCapper_CapVertex(this.vertices.get$I(0));
this.createCap$javajs_util_V3(null);
if (haveList) return null;
var a=$I$(5,"newInt2$I",[this.lstTriangles.size$()]);
for (var i=this.lstTriangles.size$(); --i >= 0; ) a[i]=this.lstTriangles.get$I(i);

return a;
});

Clazz.newMeth(C$, 'addEdge$I$I$I', function (ipt1, ipt2, thisSet) {
var v1=p$2.addPoint$I$I.apply(this, [thisSet, ipt1]);
var v2=p$2.addPoint$I$I.apply(this, [thisSet, ipt2]);
v1.link$org_jmol_util_MeshCapper_CapVertex(v2);
});

Clazz.newMeth(C$, 'addPoint$I$I', function (thisSet, i) {
var ii=Integer.valueOf$I(i);
var v=this.capMap.get$O(ii);
if (v == null ) {
var pt=this.slicer.m.vs[i];
i=this.slicer.addIntersectionVertex$javajs_util_T3$F$I$I$java_util_Map$I$I(pt, 0, -1, thisSet, null, -1, -1);
v=Clazz.new_($I$(6,1).c$$javajs_util_T3$I,[this, null, pt, i]);
this.vertices.addLast$O(v);
this.capMap.put$O$O(ii, v);
}if (this.dumping) $I$(2).info$S(i + "\t" + this.slicer.m.vs[i] );
return v;
}, p$2);

Clazz.newMeth(C$, 'getInputPoint$org_jmol_util_MeshCapper_CapVertex', function (v) {
return (this.slicer == null  ? $I$(1).newP$javajs_util_T3(v) : this.slicer.m.vs[v.ipt]);
}, p$2);

Clazz.newMeth(C$, 'outputTriangle$I$I$I', function (ipt1, ipt2, ipt3) {
if (this.slicer == null ) {
var mask=0;
if (p$2.isEdge$I$I.apply(this, [ipt1, ipt2])) mask|=1;
if (p$2.isEdge$I$I.apply(this, [ipt2, ipt3])) mask|=2;
if (p$2.isEdge$I$I.apply(this, [ipt3, ipt1])) mask|=4;
this.lstTriangles.addLast$O(Clazz.array(Integer.TYPE, -1, [ipt1, ipt2, ipt3, mask]));
} else {
this.slicer.addTriangle$I$I$I(ipt1, ipt2, ipt3);
}}, p$2);

Clazz.newMeth(C$, 'isEdge$I$I', function (i, j) {
return (j == (i + 1) % this.nPoints);
}, p$2);

Clazz.newMeth(C$, 'createCap$javajs_util_V3', function (norm) {
this.capMap=null;
this.lstRegions=Clazz.new_($I$(4,1));
var vs=Clazz.array($I$(6), [this.vertices.size$()]);
if (vs.length < 3) return;
if ($I$(2).debugging) $I$(2).info$S("MeshCapper using " + vs.length + " vertices" );
this.vertices.toArray$OA(vs);
this.vertices=null;
var vab=$I$(7).newVsub$javajs_util_T3$javajs_util_T3(vs[0], vs[1]);
var vac;
if (norm == null ) {
vac=$I$(7).newVsub$javajs_util_T3$javajs_util_T3(vs[0], vs[vs.length - 1]);
} else {
vac=$I$(7).newV$javajs_util_T3(norm);
vac.cross$javajs_util_T3$javajs_util_T3(vac, vab);
}var q=$I$(8).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z(vab, vac, null, false);
this.m3=q.getMatrix$();
this.m3inv=$I$(9).newM3$javajs_util_M3(this.m3);
this.m3inv.invert$();
for (var i=vs.length; --i >= 0; ) this.m3inv.rotate$javajs_util_T3(vs[i]);

p$2.fixEndsAndSortVertices$org_jmol_util_MeshCapper_CapVertexA.apply(this, [vs]);
var v0=vs[0];
var v=v0;
try {
do {
v=p$2.process$org_jmol_util_MeshCapper_CapVertex.apply(this, [v]);
} while (v !== v0 );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("MeshCapper exception " + e);
e.printStackTrace$();
} else {
throw e;
}
}
if (this.slicer != null ) this.clear$();
if ($I$(2).debugging) $I$(2).info$S("MeshCapper created " + this.nTriangles + " triangles " + this.nRegions + " regions" );
});

Clazz.newMeth(C$, 'fixEndsAndSortVertices$org_jmol_util_MeshCapper_CapVertexA', function (vs) {
var v0s=Clazz.new_($I$(4,1));
var v1s=Clazz.new_($I$(4,1));
var n=vs.length;
for (var i=n; --i >= 0; ) {
if (vs[i].next == null ) {
v0s.addLast$O(vs[i]);
} else if (vs[i].prev == null ) {
v1s.addLast$O(vs[i]);
}}
for (var i=v0s.size$(); --i >= 0; ) {
var v0=v0s.get$I(i);
var v1=p$2.findNearestVertex$javajs_util_Lst$org_jmol_util_MeshCapper_CapVertex.apply(this, [v1s, v0]);
if (v1 == null ) {
System.out.println$S("MESHCAPPER OHOH");
} else {
v0.link$org_jmol_util_MeshCapper_CapVertex(v1);
if (v0.distanceSquared$javajs_util_T3(v1) < 1.0E-6 ) v1.link$org_jmol_util_MeshCapper_CapVertex(null);
}}
$I$(10,"sort$OA$java_util_Comparator",[vs, Clazz.new_($I$(11,1),[this, null])]);
for (var i=n; --i >= 0; ) vs[i].yxNext=vs[(i + 1) % n];

vs[n - 1].yxNext=vs[0];
}, p$2);

Clazz.newMeth(C$, 'findNearestVertex$javajs_util_Lst$org_jmol_util_MeshCapper_CapVertex', function (v1s, v0) {
var min=3.4028235E38;
var vmin=null;
var imin=-1;
for (var i=v1s.size$(); --i >= 0; ) {
var v1=v1s.get$I(i);
var d=v1.distanceSquared$javajs_util_T3(v0);
if (d < min ) {
min=d;
vmin=v1;
imin=i;
}}
if (imin >= 0) v1s.removeItemAt$I(imin);
return vmin;
}, p$2);

Clazz.newMeth(C$, 'process$org_jmol_util_MeshCapper_CapVertex', function (v) {
var q=v.yxNext;
v.yxNext=null;
if (this.dumping) $I$(2,"info$S",[v.toString()]);
if (v.prev === v.next ) return q;
var isDescending=(v.prev.region != null );
var isAscending=(v.next.region != null );
if (this.dumping) $I$(2,"info$S",["#" + (isAscending ? v.next.id : "    ") + "    " + (isDescending ? v.prev.id : "") + "\n#" + (isAscending ? "   \\" : "    ") + (isDescending ? "    /\n" : "\n") + "#    " + v.id ]);
if (!isDescending && !isAscending ) {
var last=p$2.getLastPoint$org_jmol_util_MeshCapper_CapVertex.apply(this, [v]);
if (last == null ) {
p$2.newRegion$org_jmol_util_MeshCapper_CapVertex.apply(this, [v]);
return q;
}var p=p$2.processSplit$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex.apply(this, [v, last]);
p.yxNext=q;
q=p;
isAscending=true;
}if (isDescending) {
p$2.processMonotonic$org_jmol_util_MeshCapper_CapVertex$Z.apply(this, [v, true]);
}if (isAscending) {
p$2.processMonotonic$org_jmol_util_MeshCapper_CapVertex$Z.apply(this, [v, false]);
}if (isDescending && isAscending ) {
if (v.prev.prev === v.next ) {
this.lstRegions.removeObj$O(v.region);
p$2.addTriangle$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S.apply(this, [v.prev, v, v.next, "end"]);
C$.clearV$org_jmol_util_MeshCapper_CapVertex(v.prev);
C$.clearV$org_jmol_util_MeshCapper_CapVertex(v.next);
} else {
v.region=null;
}}return q;
}, p$2);

Clazz.newMeth(C$, 'clearV$org_jmol_util_MeshCapper_CapVertex', function (v) {
if (v != null ) v.clear$();
}, 1);

Clazz.newMeth(C$, 'processMonotonic$org_jmol_util_MeshCapper_CapVertex$Z', function (v, isDescending) {
var vEdge=(isDescending ? v.prev : v.next);
v.region=vEdge.region;
var last=v.region[2];
if (last === v ) {
this.lstRegions.removeObj$O(v.region);
return;
}var v2;
var v1;
if (last === vEdge ) {
v1=last;
v2=(isDescending ? v1.prev : v1.next);
while (v2 !== v  && v2.yxNext == null   && isDescending == (v.x > v.interpolateX$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex(v2, v1) )  ){
if (isDescending) {
p$2.addTriangle$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S.apply(this, [v2, v1, v, "same desc " + v.ipt]);
v1=v2;
v2=v2.prev;
} else {
p$2.addTriangle$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S.apply(this, [v, v1, v2, "same asc " + v.ipt]);
v1=v2;
v2=v2.next;
}}
} else {
v2=vEdge;
do {
v1=v2;
if (isDescending) {
v2=v1.prev;
p$2.addTriangle$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S.apply(this, [v2, v1, v, "opp desc " + v.id]);
} else {
v2=v1.next;
p$2.addTriangle$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S.apply(this, [v, v1, v2, "opp asc " + v.id]);
}} while (v2 !== last  && v2 !== v   && v2.yxNext == null  );
if (last.region == null ) {
this.lstRegions.removeObj$O(v.region);
v.region=last.region=(isDescending ? last.prev : last.next).region;
}}v.region[2]=v.region[isDescending ? 0 : 1]=v;
}, p$2);

Clazz.newMeth(C$, 'processSplit$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex', function (v, last) {
var pv=last.cloneV$();
if (this.dumping) pv.id += "a";
var p=v.cloneV$();
if (this.dumping) p.id += "a";
if (last.region == null ) {
last.region=last.next.region;
pv.region=last.prev.region;
} else {
p$2.newRegion$org_jmol_util_MeshCapper_CapVertex.apply(this, [last]);
var cv=last;
while (cv.next.region != null ){
cv.next.region=cv.region;
cv=cv.next;
cv.region[0]=cv;
}
}var r=pv.region;
if (r[2] === last ) r[2]=pv;
r[0]=pv;
if (r[1] === last ) r[1]=pv;
v.link$org_jmol_util_MeshCapper_CapVertex(last);
pv.prev.link$org_jmol_util_MeshCapper_CapVertex(pv);
pv.link$org_jmol_util_MeshCapper_CapVertex(p);
p.link$org_jmol_util_MeshCapper_CapVertex(p.next);
return p;
}, p$2);

Clazz.newMeth(C$, 'newRegion$org_jmol_util_MeshCapper_CapVertex', function (v) {
this.nRegions++;
this.lstRegions.addLast$O(v.region=Clazz.array($I$(6), -1, [v, v, v]));
}, p$2);

Clazz.newMeth(C$, 'getLastPoint$org_jmol_util_MeshCapper_CapVertex', function (v) {
var closest=null;
var ymin=3.4028235E38;
for (var i=this.lstRegions.size$(); --i >= 0; ) {
var r=this.lstRegions.get$I(i);
var d=r[0];
if (d === r[1] ) continue;
var isEdge=(d.region != null );
var isOK=((isEdge ? v.interpolateX$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex(d, d.next) : d.x) < v.x );
if (isEdge && closest != null   && closest.x != d.x   && isOK == (closest.x < d.x )  ) {
closest=null;
ymin=3.4028235E38;
}if (!isOK) continue;
var a=r[1];
isEdge=(a.region != null );
isOK=((isEdge ? v.interpolateX$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex(a, a.prev) : a.x) >= v.x );
if (isEdge && closest != null   && closest.x != a.x   && isOK == (closest.x > a.x )  ) {
closest=null;
ymin=3.4028235E38;
}if (!isOK) continue;
if (r[2].y < ymin ) {
ymin=r[2].y;
closest=r[2];
}}
return closest;
}, p$2);

Clazz.newMeth(C$, 'checkWinding$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex', function (v0, v1, v2) {
return (v1.x - v0.x) * (v2.y - v0.y) > (v1.y - v0.y) * (v2.x - v0.x) ;
}, p$2);

Clazz.newMeth(C$, 'addTriangle$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S', function (v0, v1, v2, note) {
++this.nTriangles;
if (p$2.checkWinding$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex.apply(this, [v0, v1, v2])) {
if (this.dumping) p$2.drawTriangle$I$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S.apply(this, [this.nTriangles, v0, v1, v2, "red"]);
p$2.outputTriangle$I$I$I.apply(this, [v0.ipt, v1.ipt, v2.ipt]);
} else if (this.dumping) {
$I$(2).info$S("#!!!BAD WINDING " + note);
}v1.link$org_jmol_util_MeshCapper_CapVertex(null);
}, p$2);

Clazz.newMeth(C$, 'drawTriangle$I$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex$S', function (index, v0, v1, v2, color) {
var p0=p$2.getInputPoint$org_jmol_util_MeshCapper_CapVertex.apply(this, [v0]);
var p1=p$2.getInputPoint$org_jmol_util_MeshCapper_CapVertex.apply(this, [v1]);
var p2=p$2.getInputPoint$org_jmol_util_MeshCapper_CapVertex.apply(this, [v2]);
$I$(2).info$S("draw " + color + index + "/* " + v0.id + " " + v1.id + " " + v2.id + " */" + p0 + p1 + p2 + " color " + color );
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.MeshCapper, "MeshCapperSorter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex','compare$O$O'], function (v1, v2) {
return (v1.y < v2.y  ? 1 : v1.y > v2.y  || v1.x < v2.x   ? -1 : v1.x > v2.x  ? 1 : 0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MeshCapper, "CapVertex", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javajs.util.T3', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.id="";
},1);

C$.$fields$=[['I',['ipt'],'S',['id'],'O',['yxNext','org.jmol.util.MeshCapper.CapVertex','+prev','+next','region','org.jmol.util.MeshCapper.CapVertex[]']]]

Clazz.newMeth(C$, 'c$$javajs_util_T3$I', function (p, i) {
Clazz.super_(C$, this);
this.ipt=i;
this.id="" + i;
this.setT$javajs_util_T3(p);
}, 1);

Clazz.newMeth(C$, 'cloneV$', function () {
try {
return this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'interpolateX$org_jmol_util_MeshCapper_CapVertex$org_jmol_util_MeshCapper_CapVertex', function (v1, v2) {
var dy12=v2.y - v1.y;
var dx12=v2.x - v1.x;
return (dy12 != 0  ? v1.x + (this.y - v1.y) * dx12 / dy12 : dx12 > 0  ? 3.4028235E38 : -3.4028235E38);
});

Clazz.newMeth(C$, 'link$org_jmol_util_MeshCapper_CapVertex', function (v) {
if (v == null ) {
this.prev.next=this.next;
this.next.prev=this.prev;
this.clear$();
} else {
this.next=v;
v.prev=this;
}});

Clazz.newMeth(C$, 'clear$', function () {
this.yxNext=this.next=this.prev=null;
this.region=null;
});

Clazz.newMeth(C$, 'dumpRegion', function () {
var s="\n#REGION d=" + this.region[0].id + " a=" + this.region[1].id + " last=" + this.region[2].id + "\n# " ;
var v=this.region[1];
while (true){
s += v.id + " ";
if (v === this.region[0] ) break;
v=v.next;
}
return s + "\n";
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var c=(this.b$['org.jmol.util.MeshCapper'].m3 == null  ? this : Clazz.new_($I$(1,1)));
if (this.b$['org.jmol.util.MeshCapper'].m3 != null ) this.b$['org.jmol.util.MeshCapper'].m3.rotate2$javajs_util_T3$javajs_util_T3(this, c);
return "draw p" + this.id + " {" + new Float(c.x).toString() + " " + new Float(c.y).toString() + " " + new Float(c.z).toString() + "} # " + (this.prev == null  ? "null" : this.prev.id) + (this.next == null  ? " null" : " " + this.next.id) + (this.region == null  ? "" : p$1.dumpRegion.apply(this, [])) ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
