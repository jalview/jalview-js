(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.analysis.AlignmentSorter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OrderCommand", null, null, 'jalview.commands.CommandI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
this.seqs=null;
this.seqs2=null;
this.al=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI', function (description, seqs, al) {
C$.$init$.apply(this);
this.description=description;
this.seqs=seqs;
this.seqs2=al.getSequencesArray$();
this.al=al;
this.doCommand$jalview_datamodel_AlignmentIA(null);
}, 1);

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'getSize$', function () {
return 1;
});

Clazz.newMeth(C$, 'doCommand$jalview_datamodel_AlignmentIA', function (views) {
$I$(1).setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(this.al, this.seqs2);
});

Clazz.newMeth(C$, 'undoCommand$jalview_datamodel_AlignmentIA', function (views) {
$I$(1).setOrder$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA(this.al, this.seqs);
});

Clazz.newMeth(C$, 'getSequenceOrder$Z', function (undo) {
return undo ? this.seqs : this.seqs2;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
