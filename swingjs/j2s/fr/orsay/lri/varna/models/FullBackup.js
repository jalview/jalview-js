(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FullBackup", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['config','fr.orsay.lri.varna.models.VARNAConfig','rna','fr.orsay.lri.varna.models.rna.RNA']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_RNA$S', function (c, r, n) {
;C$.$init$.apply(this);
this.config=c;
this.rna=r;
this.name=n;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA$S', function (r, n) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
