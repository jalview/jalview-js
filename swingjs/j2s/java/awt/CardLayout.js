(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.io.ObjectStreamField','java.util.Hashtable','java.util.Vector','javajs.util.Lst',['java.awt.CardLayout','.Card'],'java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CardLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.LayoutManager2', 'java.io.Serializable']);
C$.serialPersistentFields=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.serialPersistentFields=Clazz.array($I$(1), -1, [Clazz.new_($I$(1).c$$S$Class,["tab", Clazz.getClass($I$(2))]), Clazz.new_($I$(1).c$$S$Class,["hgap", Integer.TYPE]), Clazz.new_($I$(1).c$$S$Class,["vgap", Integer.TYPE]), Clazz.new_($I$(1).c$$S$Class,["vector", Clazz.getClass($I$(3))]), Clazz.new_($I$(1).c$$S$Class,["currentCard", Integer.TYPE])]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vector=null;
this.currentCard=0;
this.hgap=0;
this.vgap=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vector=Clazz.new_($I$(4));
this.currentCard=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$I.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (hgap, vgap) {
C$.$init$.apply(this);
this.hgap=hgap;
this.vgap=vgap;
}, 1);

Clazz.newMeth(C$, 'getHgap$', function () {
return this.hgap;
});

Clazz.newMeth(C$, 'setHgap$I', function (hgap) {
this.hgap=hgap;
});

Clazz.newMeth(C$, 'getVgap$', function () {
return this.vgap;
});

Clazz.newMeth(C$, 'setVgap$I', function (vgap) {
this.vgap=vgap;
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O', function (comp, constraints) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getTreeLock$());
{
if (constraints == null ) {
constraints="";
}if (Clazz.instanceOf(constraints, "java.lang.String")) {
this.addLayoutComponent$S$java_awt_Component(constraints, comp);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot add to layout: constraint must be a string"]);
}}});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component', function (name, comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getTreeLock$());
{
if (!this.vector.isEmpty$()) {
comp.setVisible$Z(false);
}for (var i=0; i < this.vector.size$(); i++) {
if ((this.vector.get$I(i)).name.equals$O(name)) {
(this.vector.get$I(i)).comp=comp;
return;
}}
this.vector.add$TE(Clazz.new_($I$(5).c$$S$java_awt_Component, [this, null, name, comp]));
}});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component', function (comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getTreeLock$());
{
for (var i=0; i < this.vector.size$(); i++) {
if ((this.vector.get$I(i)).comp === comp ) {
if (comp.isVisible$() && (comp.getParent$() != null ) ) {
this.next$java_awt_Container(comp.getParent$());
}this.vector.removeItemAt$I(i);
if (this.currentCard > i) {
this.currentCard--;
}break;
}}
}});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var w=0;
var h=0;
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
var d=comp.getPreferredSize$();
if (d.width > w) {
w=d.width;
}if (d.height > h) {
h=d.height;
}}
return Clazz.new_($I$(6).c$$I$I,[insets.left + insets.right + w + this.hgap * 2 , insets.top + insets.bottom + h + this.vgap * 2 ]);
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var w=0;
var h=0;
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
var d=comp.getMinimumSize$();
if (d.width > w) {
w=d.width;
}if (d.height > h) {
h=d.height;
}}
return Clazz.new_($I$(6).c$$I$I,[insets.left + insets.right + w + this.hgap * 2 , insets.top + insets.bottom + h + this.vgap * 2 ]);
}});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container', function (target) {
return Clazz.new_($I$(6).c$$I$I,[2147483647, 2147483647]);
});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container', function (parent) {
return 0.5;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container', function (parent) {
return 0.5;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container', function (target) {
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var comp=null;
var currentFound=false;
for (var i=0; i < ncomponents; i++) {
comp=parent.getComponent$I(i);
comp.setBounds$I$I$I$I(this.hgap + insets.left, this.vgap + insets.top, parent.width - (this.hgap * 2 + insets.left + insets.right), parent.height - (this.vgap * 2 + insets.top + insets.bottom));
if (comp.isVisible$()) {
currentFound=true;
}}
if (!currentFound && ncomponents > 0 ) {
parent.getComponent$I(0).setVisible$Z(true);
}}});

Clazz.newMeth(C$, 'checkLayout$java_awt_Container', function (parent) {
if (parent.getLayout$() !== this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["wrong parent for CardLayout"]);
}});

Clazz.newMeth(C$, 'first$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
break;
}}
if (ncomponents > 0) {
this.currentCard=0;
parent.getComponent$I(0).setVisible$Z(true);
parent.validate$();
}}});

Clazz.newMeth(C$, 'next$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
this.currentCard=(i + 1) % ncomponents;
comp=parent.getComponent$I(this.currentCard);
comp.setVisible$Z(true);
parent.validate$();
return;
}}
this.showDefaultComponent$java_awt_Container(parent);
}});

Clazz.newMeth(C$, 'previous$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
this.currentCard=((i > 0) ? i - 1 : ncomponents - 1);
comp=parent.getComponent$I(this.currentCard);
comp.setVisible$Z(true);
parent.validate$();
return;
}}
this.showDefaultComponent$java_awt_Container(parent);
}});

Clazz.newMeth(C$, 'showDefaultComponent$java_awt_Container', function (parent) {
if (parent.getComponentCount$() > 0) {
this.currentCard=0;
parent.getComponent$I(0).setVisible$Z(true);
parent.validate$();
}});

Clazz.newMeth(C$, 'last$java_awt_Container', function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
break;
}}
if (ncomponents > 0) {
this.currentCard=ncomponents - 1;
parent.getComponent$I(this.currentCard).setVisible$Z(true);
parent.validate$();
}}});

Clazz.newMeth(C$, 'show$java_awt_Container$S', function (parent, name) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var next=null;
var ncomponents=this.vector.size$();
for (var i=0; i < ncomponents; i++) {
var card=this.vector.get$I(i);
if (card.name.equals$O(name)) {
next=card.comp;
this.currentCard=i;
break;
}}
if ((next != null ) && !next.isVisible$() ) {
ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
break;
}}
next.setVisible$Z(true);
parent.validate$();
}}});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[hgap=" + this.hgap + ",vgap=" + this.vgap + "]" ;
});
;
(function(){var C$=Clazz.newClass(P$.CardLayout, "Card", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.comp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_Component', function (cardName, cardComponent) {
C$.$init$.apply(this);
this.name=cardName;
this.comp=cardComponent;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
