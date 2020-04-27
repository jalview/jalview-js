(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.util.Comparison',['jalview.commands.EditCommand','.Action'],'jalview.datamodel.SequenceI']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RemoveGapsCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI', function (description, seqs, al) {
Clazz.super_(C$, this);
this.description=description;
var width=0;
for (var i=0; i < seqs.length; i++) {
if (seqs[i].getLength$() > width) {
width=seqs[i].getLength$();
}}
this.findGaps$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI(seqs, 0, width, al);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI', function (description, seqs, start, end, al) {
Clazz.super_(C$, this);
this.description=description;
this.findGaps$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI(seqs, start, end, al);
}, 1);

Clazz.newMeth(C$, 'findGaps$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI', function (seqs, start, end, al) {
var startCol=-1;
var endCol=-1;
var deletedCols=0;
var j;
var jSize;
this.clearEdits$();
var $delete=true;
var sequence;
for (var s=0; s < seqs.length; s++) {
deletedCols=0;
startCol=-1;
endCol=-1;
sequence=seqs[s].getSequence$I$I(start, end + 1);
jSize=sequence.length;
for (j=0; j < jSize; j++) {
$delete=true;
if (!$I$(1).isGap$C(sequence[j])) {
if ($delete) {
endCol=j;
}$delete=false;
}if ($delete && startCol == -1 ) {
startCol=j;
}if (!$delete && startCol > -1 ) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA($I$(2).DELETE_GAP, Clazz.array($I$(3), -1, [seqs[s]]), start + startCol - deletedCols, endCol - startCol, al, false, null);
deletedCols+=(endCol - startCol);
startCol=-1;
endCol=-1;
}}
if ($delete && startCol > -1 ) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA($I$(2).DELETE_GAP, Clazz.array($I$(3), -1, [seqs[s]]), start + startCol - deletedCols, jSize - startCol, al, false, null);
}}
this.performEdit$I$jalview_datamodel_AlignmentIA(0, null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
