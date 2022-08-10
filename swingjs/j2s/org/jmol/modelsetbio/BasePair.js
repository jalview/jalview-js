(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio");
/*c*/var C$=Clazz.newClass(P$, "BasePair");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['info','java.util.Map','g1','org.jmol.modelsetbio.NucleicMonomer','+g2']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
