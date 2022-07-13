(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'org.jmol.awtjs.swing.Component','javajs.util.Lst']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Container", null, 'org.jmol.awtjs.swing.Component');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['list','javajs.util.Lst','cList','org.jmol.awtjs.swing.Component[]']]]

Clazz.newMeth(C$, 'c$$S', function (type) {
;C$.superclazz.c$$S.apply(this,[type]);C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'add$org_jmol_awtjs_swing_Component', function (component) {
return this.addComponent$org_jmol_awtjs_swing_Component(component);
});

Clazz.newMeth(C$, 'addComponent$org_jmol_awtjs_swing_Component', function (component) {
if (this.list == null ) this.list=Clazz.new_($I$(2,1));
this.list.addLast$O(component);
this.cList=null;
component.parent=this;
return component;
});

Clazz.newMeth(C$, 'insertComponent$org_jmol_awtjs_swing_Component$I', function (component, index) {
if (this.list == null ) return this.addComponent$org_jmol_awtjs_swing_Component(component);
this.list.add$I$O(index, component);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
