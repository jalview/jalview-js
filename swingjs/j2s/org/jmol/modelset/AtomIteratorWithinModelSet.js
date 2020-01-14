(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={};
var C$=Clazz.newClass(P$, "AtomIteratorWithinModelSet", null, 'org.jmol.modelset.AtomIteratorWithinModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bsModels=null;
this.center=null;
this.distance=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javajs_util_BS', function (bsModels) {
Clazz.super_(C$, this,1);
this.bsModels=bsModels;
}, 1);

Clazz.newMeth(C$, 'setCenter$javajs_util_T3$F', function (center, distance) {
this.center=center;
this.distance=distance;
p$1.set$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'set$I', function (iModel) {
if ((this.modelIndex=this.bsModels.nextSetBit$I(iModel)) < 0 || (this.cubeIterator=this.bspf.getCubeIterator$I(this.modelIndex)) == null  ) return false;
this.setCenter2$javajs_util_T3$F(this.center, this.distance);
return true;
}, p$1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.hasNext2$()) return true;
if (!p$1.set$I.apply(this, [this.modelIndex + 1])) return false;
return this.hasNext$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
