(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'net.miginfocom.layout.LayoutUtil']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResizeConstraint", null, null, 'java.io.Externalizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.grow=null;
this.growPrio=100;
this.shrink=C$.WEIGHT_100;
this.shrinkPrio=100;
},1);

C$.$fields$=[['I',['growPrio','shrinkPrio'],'O',['+grow','+shrink']]
,['O',['WEIGHT_100','Float']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$Float$I$Float', function (shrinkPrio, shrinkWeight, growPrio, growWeight) {
;C$.$init$.apply(this);
this.shrinkPrio=shrinkPrio;
this.shrink=shrinkWeight;
this.growPrio=growPrio;
this.grow=growWeight;
}, 1);

Clazz.newMeth(C$, 'readResolve', function () {
return $I$(1).getSerializedObject$O(this);
}, p$1);

Clazz.newMeth(C$, 'readExternal$java_io_ObjectInput', function ($in) {
$I$(1,"setSerializedObject$O$O",[this, $I$(1).readAsXML$java_io_ObjectInput($in)]);
});

Clazz.newMeth(C$, 'writeExternal$java_io_ObjectOutput', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(1).writeAsXML$java_io_ObjectOutput$O(out, this);
});

C$.$static$=function(){C$.$static$=0;
C$.WEIGHT_100=new Float(100.0);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
