(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models"),I$=[];
var C$=Clazz.newClass(P$, "FullBackup", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.config=null;
this.rna=null;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S', function (c, r, n) {
C$.$init$.apply(this);
this.config=c;
this.rna=r;
this.name=n;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA$S', function (r, n) {
C$.$init$.apply(this);
this.config=null;
this.rna=r;
this.name=n;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'hasConfig$', function () {
return this.config != null ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
