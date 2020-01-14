(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio");
var C$=Clazz.newClass(P$, "BasePair");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.info=null;
this.g1=null;
this.g2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$java_util_Map$org_jmol_modelsetbio_NucleicMonomer$org_jmol_modelsetbio_NucleicMonomer', function (info, g1, g2) {
if (g1 == null  || g2 == null  ) return null;
var bp=Clazz.new_(C$);
bp.info=info;
(bp.g1=g1).addBasePair$org_jmol_modelsetbio_BasePair(bp);
(bp.g2=g2).addBasePair$org_jmol_modelsetbio_BasePair(bp);
return bp;
}, 1);

Clazz.newMeth(C$, 'getPartnerAtom$org_jmol_modelsetbio_NucleicMonomer', function (g) {
return (g === this.g1  ? this.g2 : this.g1).getLeadAtom$().i;
});

Clazz.newMeth(C$, 'toString', function () {
return this.info.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
