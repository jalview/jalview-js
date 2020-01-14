(function(){var P$=Clazz.newPackage("jalview.ext.varna"),I$=[];
var C$=Clazz.newClass(P$, "RnaModel");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.ann=null;
this.seq=null;
this.gapped=false;
this.rna=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_SequenceI$fr_orsay_lri_varna_models_rna_RNA$Z', function (t, aa, s, r, g) {
C$.$init$.apply(this);
this.title=t;
this.ann=aa;
this.seq=s;
this.rna=r;
this.gapped=g;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
