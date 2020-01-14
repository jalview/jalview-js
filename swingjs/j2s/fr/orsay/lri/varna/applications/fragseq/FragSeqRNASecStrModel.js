(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[[0,'java.awt.datatransfer.DataFlavor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FragSeqRNASecStrModel", null, 'fr.orsay.lri.varna.applications.fragseq.FragSeqModel');
C$.Flavor=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.Flavor=Clazz.new_($I$(1).c$$Class$S,[Clazz.getClass(C$), "RNA Sec Str Object"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._r=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._r=null;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA', function (r) {
Clazz.super_(C$, this,1);
this._r=r;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this._r.getName$();
});

Clazz.newMeth(C$, 'getID$', function () {
return this._r.getID$();
});

Clazz.newMeth(C$, 'getRNA$', function () {
return this._r;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
