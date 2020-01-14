(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'net.miginfocom.layout.LayoutUtil']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ResizeConstraint", null, null, 'java.io.Externalizable');
C$.WEIGHT_100=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.WEIGHT_100=new Float(100);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.grow=null;
this.growPrio=0;
this.shrink=null;
this.shrinkPrio=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.grow=null;
this.growPrio=100;
this.shrink=C$.WEIGHT_100;
this.shrinkPrio=100;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$Float$I$Float', function (shrinkPrio, shrinkWeight, growPrio, growWeight) {
C$.$init$.apply(this);
this.shrinkPrio=shrinkPrio;
this.shrink=shrinkWeight;
this.growPrio=growPrio;
this.grow=growWeight;
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(1).getSerializedObject$O(this);
}, p$1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$I$(1).setSerializedObject$O$O(this, $I$(1).readAsXML$java_io_ObjectInput($in));
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(1).writeAsXML$java_io_ObjectOutput$O(out, this);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
