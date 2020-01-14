(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'org.jmol.bspt.Leaf']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Node", null, 'org.jmol.bspt.Element');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dim=0;
this.minLeft=0;
this.maxLeft=0;
this.eleLeft=null;
this.minRight=0;
this.maxRight=0;
this.eleRight=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_bspt_Bspt$I$org_jmol_bspt_Leaf', function (bspt, level, leafLeft) {
Clazz.super_(C$, this,1);
this.bspt=bspt;
if (level == bspt.treeDepth) {
bspt.treeDepth=level + 1;
}if (leafLeft.count != 2) throw Clazz.new_(Clazz.load('NullPointerException'));
this.dim=level % bspt.dimMax;
leafLeft.sort$I(this.dim);
var leafRight=Clazz.new_($I$(1).c$$org_jmol_bspt_Bspt$org_jmol_bspt_Leaf$I,[bspt, leafLeft, 1]);
this.minLeft=C$.getDimensionValue$javajs_util_T3$I(leafLeft.tuples[0], this.dim);
this.maxLeft=C$.getDimensionValue$javajs_util_T3$I(leafLeft.tuples[leafLeft.count - 1], this.dim);
this.minRight=C$.getDimensionValue$javajs_util_T3$I(leafRight.tuples[0], this.dim);
this.maxRight=C$.getDimensionValue$javajs_util_T3$I(leafRight.tuples[leafRight.count - 1], this.dim);
this.eleLeft=leafLeft;
this.eleRight=leafRight;
this.count=2;
}, 1);

Clazz.newMeth(C$, 'addTuple$I$javajs_util_T3', function (level, tuple) {
var dimValue=C$.getDimensionValue$javajs_util_T3$I(tuple, this.dim);
++this.count;
var addLeft;
if (dimValue < this.maxLeft ) {
addLeft=true;
} else if (dimValue > this.minRight ) {
addLeft=false;
} else if (dimValue == this.maxLeft ) {
if (dimValue == this.minRight ) {
if (this.eleLeft.count < this.eleRight.count) addLeft=true;
 else addLeft=false;
} else {
addLeft=true;
}} else if (dimValue == this.minRight ) {
addLeft=false;
} else {
if (this.eleLeft.count < this.eleRight.count) addLeft=true;
 else addLeft=false;
}if (addLeft) {
if (dimValue < this.minLeft ) this.minLeft=dimValue;
 else if (dimValue > this.maxLeft ) this.maxLeft=dimValue;
this.eleLeft=this.eleLeft.addTuple$I$javajs_util_T3(level + 1, tuple);
} else {
if (dimValue < this.minRight ) this.minRight=dimValue;
 else if (dimValue > this.maxRight ) this.maxRight=dimValue;
this.eleRight=this.eleRight.addTuple$I$javajs_util_T3(level + 1, tuple);
}return this;
});

Clazz.newMeth(C$, 'getDimensionValue$javajs_util_T3$I', function (pt, dim) {
if (pt == null ) System.out.println$S("bspt.Node ???");
switch (dim) {
case 0:
return pt.x;
case 1:
return pt.y;
default:
return pt.z;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
