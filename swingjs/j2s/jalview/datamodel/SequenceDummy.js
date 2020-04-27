(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequenceDummy", null, 'jalview.datamodel.Sequence');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dummy=true;
},1);

C$.$fields$=[['Z',['dummy']]]

Clazz.newMeth(C$, 'c$$S', function (sequenceId) {
;C$.superclazz.c$$S$S.apply(this,[sequenceId, "THISAPLACEHOLDER"]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
