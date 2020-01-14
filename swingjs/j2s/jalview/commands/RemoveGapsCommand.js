(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.util.Comparison',['jalview.commands.EditCommand','.Action'],'jalview.datamodel.SequenceI']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RemoveGapsCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI', function (description, seqs, al) {
Clazz.super_(C$, this,1);
this.description=description;
var width=0;
for (var i=0; i < seqs.length; i++) {
if (seqs[i].getLength$() > width) {
width=seqs[i].getLength$();
}}
this.findGaps$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI(seqs, 0, width, al);
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI', function (description, seqs, start, end, al) {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
