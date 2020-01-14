(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.LinkedList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LayoutComparator", null, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.horizontal=false;
this.leftToRight=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.horizontal=true;
this.leftToRight=true;
}, 1);

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation', function (orientation) {
this.horizontal=orientation.isHorizontal$();
this.leftToRight=orientation.isLeftToRight$();
});

Clazz.newMeth(C$, ['compare$O$O','compare$','compare$TT$TT'], function (o1, o2) {
var a=o1;
var b=o2;
if (a === b ) {
return 0;
}if (a.getParent$() !== b.getParent$() ) {
var aAncestory;
var bAncestory;
for (aAncestory=Clazz.new_($I$(1)); a != null ; a=a.getParent$()) {
aAncestory.add$TE(a);
if (a.isWindowOrJSApplet$()) {
break;
}}
if (a == null ) {
throw Clazz.new_(Clazz.load('ClassCastException'));
}for (bAncestory=Clazz.new_($I$(1)); b != null ; b=b.getParent$()) {
bAncestory.add$TE(b);
if (b.isWindowOrJSApplet$()) {
break;
}}
if (b == null ) {
throw Clazz.new_(Clazz.load('ClassCastException'));
}for (var aIter=aAncestory.listIterator$I(aAncestory.size$()), bIter=bAncestory.listIterator$I(bAncestory.size$()); ; ) {
if (aIter.hasPrevious$()) {
a=aIter.previous$();
} else {
return -1;
}if (bIter.hasPrevious$()) {
b=bIter.previous$();
} else {
return 1;
}if (a !== b ) {
break;
}}
}var ax=a.getX$();
var ay=a.getY$();
var bx=b.getX$();
var by=b.getY$();
var zOrder=a.getParent$().getComponentZOrder$java_awt_Component(a) - b.getParent$().getComponentZOrder$java_awt_Component(b);
if (this.horizontal) {
if (this.leftToRight) {
if (Math.abs(ay - by) < 10) {
return (ax < bx) ? -1 : ((ax > bx) ? 1 : zOrder);
} else {
return (ay < by) ? -1 : 1;
}} else {
if (Math.abs(ay - by) < 10) {
return (ax > bx) ? -1 : ((ax < bx) ? 1 : zOrder);
} else {
return (ay < by) ? -1 : 1;
}}} else {
if (this.leftToRight) {
if (Math.abs(ax - bx) < 10) {
return (ay < by) ? -1 : ((ay > by) ? 1 : zOrder);
} else {
return (ax < bx) ? -1 : 1;
}} else {
if (Math.abs(ax - bx) < 10) {
return (ay < by) ? -1 : ((ay > by) ? 1 : zOrder);
} else {
return (ax > bx) ? -1 : 1;
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
