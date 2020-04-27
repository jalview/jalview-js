(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.analysis.AlignmentSorter']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OrderCommand", null, null, 'jalview.commands.CommandI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['description'],'O',['seqs','jalview.datamodel.SequenceI[]','+seqs2','al','jalview.datamodel.AlignmentI']]]

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI', function (description, seqs, al) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
