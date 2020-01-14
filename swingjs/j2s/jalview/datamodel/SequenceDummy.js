(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "SequenceDummy", null, 'jalview.datamodel.Sequence');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dummy=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dummy=true;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (sequenceId) {
C$.superclazz.c$$S$S.apply(this, [sequenceId, "THISAPLACEHOLDER"]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'become$jalview_datamodel_SequenceI', function (mseq) {
this.initSeqFrom$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentAnnotationA(mseq, null);
this.dummy=false;
});

Clazz.newMeth(C$, 'isDummy$', function () {
return this.dummy;
});

Clazz.newMeth(C$, 'getDisplayId$Z', function (jvsuffix) {
return C$.superclazz.prototype.getDisplayId$Z.apply(this, [false]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
