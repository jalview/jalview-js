(function(){var P$=Clazz.newPackage("org.jmol.bspt"),I$=[[0,'org.jmol.bspt.Leaf','org.jmol.bspt.CubeIterator']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Bspt");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.treeDepth=0;
this.dimMax=0;
this.index=0;
this.eleRoot=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (dimMax, index) {
C$.$init$.apply(this);
this.dimMax=dimMax;
this.index=index;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.eleRoot=Clazz.new_($I$(1).c$$org_jmol_bspt_Bspt$org_jmol_bspt_Leaf$I,[this, null, 0]);
this.treeDepth=1;
});

Clazz.newMeth(C$, 'addTuple$javajs_util_T3', function (tuple) {
this.eleRoot=this.eleRoot.addTuple$I$javajs_util_T3(0, tuple);
});

Clazz.newMeth(C$, 'stats$', function () {
});

Clazz.newMeth(C$, 'allocateCubeIterator$', function () {
return Clazz.new_($I$(2).c$$org_jmol_bspt_Bspt,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
