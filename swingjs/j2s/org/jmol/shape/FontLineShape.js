(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.modelset.TickInfo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FontLineShape", null, 'org.jmol.shape.Shape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tickInfos=null;
this.font3d=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tickInfos=Clazz.array($I$(1), [4]);
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
this.translucentAllowed=false;
});

Clazz.newMeth(C$, 'setPropFLS$S$O', function (propertyName, value) {
if ("tickInfo" == propertyName) {
var t=value;
if (t.ticks == null ) {
if (t.type.equals$O(" ")) this.tickInfos[0]=this.tickInfos[1]=this.tickInfos[2]=this.tickInfos[3]=null;
 else this.tickInfos["xyz".indexOf$S(t.type) + 1]=null;
return;
}this.tickInfos["xyz".indexOf$S(t.type) + 1]=t;
return;
}if ("font" == propertyName) {
this.font3d=value;
return;
}});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
