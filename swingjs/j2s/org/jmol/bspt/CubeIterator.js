(function(){var P$=Clazz.newPackage("org.jmol.bspt"),p$1={},I$=[[0,'org.jmol.bspt.Element']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CubeIterator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['tHemisphere'],'F',['radius','cx','cy','cz','dx','dy','dz'],'I',['sp','leafIndex'],'O',['bspt','org.jmol.bspt.Bspt','stack','org.jmol.bspt.Element[]','leaf','org.jmol.bspt.Leaf']]]

Clazz.newMeth(C$, 'c$$org_jmol_bspt_Bspt', function (bspt) {
;C$.$init$.apply(this);
this.set$org_jmol_bspt_Bspt(bspt);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_bspt_Bspt', function (bspt) {
this.bspt=bspt;
this.stack=Clazz.array($I$(1), [bspt.treeDepth]);
});

Clazz.newMeth(C$, 'initialize$javajs_util_T3$F$Z', function (center, radius, hemisphereOnly) {
this.radius=radius;
this.tHemisphere=false;
this.cx=center.x;
this.cy=center.y;
this.cz=center.z;
this.leaf=null;
if (this.stack.length < this.bspt.treeDepth) this.set$org_jmol_bspt_Bspt(this.bspt);
this.stack[0]=this.bspt.eleRoot;
this.sp=1;
p$1.findLeftLeaf.apply(this, []);
this.tHemisphere=hemisphereOnly;
});

Clazz.newMeth(C$, 'release$', function () {
this.set$org_jmol_bspt_Bspt(this.bspt);
});

Clazz.newMeth(C$, 'hasMoreElements$', function () {
while (this.leaf != null ){
for (; this.leafIndex < this.leaf.count; ++this.leafIndex) if (p$1.isWithinRadius$javajs_util_T3.apply(this, [this.leaf.tuples[this.leafIndex]])) return true;

p$1.findLeftLeaf.apply(this, []);
}
return false;
});

Clazz.newMeth(C$, 'nextElement$', function () {
return this.leaf.tuples[this.leafIndex++];
});

Clazz.newMeth(C$, 'foundDistance2$', function () {
return this.dx * this.dx + this.dy * this.dy + this.dz * this.dz;
});

Clazz.newMeth(C$, 'findLeftLeaf', function () {
this.leaf=null;
if (this.sp == 0) return;
var ele=this.stack[--this.sp];
while (Clazz.instanceOf(ele, "org.jmol.bspt.Node")){
var node=ele;
var minValue;
switch (node.dim) {
case 0:
minValue=this.cx;
break;
case 1:
minValue=this.cy;
break;
case 2:
default:
minValue=this.cz;
break;
}
var maxValue=minValue + this.radius;
if (!this.tHemisphere || node.dim != 0 ) minValue -= this.radius;
if (minValue <= node.maxLeft  && maxValue >= node.minLeft  ) {
if (maxValue >= node.minRight  && minValue <= node.maxRight  ) {
this.stack[this.sp++]=node.eleRight;
}ele=node.eleLeft;
} else if (maxValue >= node.minRight  && minValue <= node.maxRight  ) {
ele=node.eleRight;
} else {
if (this.sp == 0) return;
ele=this.stack[--this.sp];
}}
this.leaf=ele;
this.leafIndex=0;
}, p$1);

Clazz.newMeth(C$, 'isWithinRadius$javajs_util_T3', function (t) {
this.dx=t.x - this.cx;
return ((!this.tHemisphere || this.dx >= 0  ) && (this.dx=Math.abs(this.dx)) <= this.radius   && (this.dy=Math.abs(t.y - this.cy)) <= this.radius   && (this.dz=Math.abs(t.z - this.cz)) <= this.radius  );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
