(function(){var P$=Clazz.newPackage("javajs.awt"),I$=[[0,'javajs.awt.Component','javajs.util.Lst']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Container", null, 'javajs.awt.Component');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
this.cList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (type) {
C$.superclazz.c$$S.apply(this, [type]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getComponent$I', function (i) {
return this.list.get$I(i);
});

Clazz.newMeth(C$, 'getComponentCount$', function () {
return (this.list == null  ? 0 : this.list.size$());
});

Clazz.newMeth(C$, 'getComponents$', function () {
if (this.cList == null ) {
if (this.list == null ) return Clazz.array($I$(1), [0]);
this.cList=this.list.toArray$();
}return this.cList;
});

Clazz.newMeth(C$, 'add$javajs_awt_Component', function (component) {
return this.addComponent$javajs_awt_Component(component);
});

Clazz.newMeth(C$, 'addComponent$javajs_awt_Component', function (component) {
if (this.list == null ) this.list=Clazz.new_($I$(2));
this.list.addLast$TV(component);
this.cList=null;
component.parent=this;
return component;
});

Clazz.newMeth(C$, 'insertComponent$javajs_awt_Component$I', function (component, index) {
if (this.list == null ) return this.addComponent$javajs_awt_Component(component);
this.list.add$I$TE(index, component);
this.cList=null;
component.parent=this;
return component;
});

Clazz.newMeth(C$, 'remove$I', function (i) {
var c=this.list.removeItemAt$I(i);
c.parent=null;
this.cList=null;
});

Clazz.newMeth(C$, 'removeAll$', function () {
if (this.list != null ) {
for (var i=this.list.size$(); --i >= 0; ) this.list.get$I(i).parent=null;

this.list.clear$();
}this.cList=null;
});

Clazz.newMeth(C$, 'getSubcomponentWidth$', function () {
return (this.list != null  && this.list.size$() == 1  ? this.list.get$I(0).getSubcomponentWidth$() : 0);
});

Clazz.newMeth(C$, 'getSubcomponentHeight$', function () {
return (this.list != null  && this.list.size$() == 1  ? this.list.get$I(0).getSubcomponentHeight$() : 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
