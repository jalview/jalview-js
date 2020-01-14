(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "Profile", null, null, 'jalview.datamodel.ProfileI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.counts=null;
this.height=0;
this.gapped=0;
this.maxCount=0;
this.modalResidue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$S', function (seqCount, gaps, max, modalRes) {
C$.$init$.apply(this);
this.height=seqCount;
this.gapped=gaps;
this.maxCount=max;
this.modalResidue=modalRes;
}, 1);

Clazz.newMeth(C$, 'setCounts$jalview_datamodel_ResidueCount', function (residueCounts) {
this.counts=residueCounts;
});

Clazz.newMeth(C$, 'getPercentageIdentity$Z', function (ignoreGaps) {
if (this.height == 0) {
return 0.0;
}var pid=0.0;
if (ignoreGaps && this.gapped < this.height ) {
pid=(this.maxCount * 100.0) / (this.height - this.gapped);
} else {
pid=(this.maxCount * 100.0) / this.height;
}return pid;
});

Clazz.newMeth(C$, 'getCounts$', function () {
return this.counts;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getGapped$', function () {
return this.gapped;
});

Clazz.newMeth(C$, 'getMaxCount$', function () {
return this.maxCount;
});

Clazz.newMeth(C$, 'getModalResidue$', function () {
return this.modalResidue;
});

Clazz.newMeth(C$, 'getNonGapped$', function () {
return this.height - this.gapped;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
