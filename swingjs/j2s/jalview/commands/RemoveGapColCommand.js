(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.util.Comparison',['jalview.commands.EditCommand','.Action']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RemoveGapColCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['columnsDeleted']]]

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI',  function (description, seqs, start, end, al) {
Clazz.super_(C$, this);
this.description=description;
var j;
var jSize=seqs.length;
var startCol=-1;
var endCol=-1;
this.columnsDeleted=0;
this.clearEdits$();
var $delete=true;
for (var i=start; i <= end; i++) {
$delete=true;
for (j=0; j < jSize; j++) {
if (seqs[j].getLength$() > i) {
if (!$I$(1,"isGap$C",[seqs[j].getCharAt$I(i)])) {
if ($delete) {
endCol=i;
}$delete=false;
break;
}}}
if ($delete && startCol == -1 ) {
startCol=i;
}if (!$delete && startCol > -1 ) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA($I$(2).DELETE_GAP, seqs, startCol - this.columnsDeleted, endCol - startCol, al, false, null);
this.columnsDeleted+=(endCol - startCol);
startCol=-1;
endCol=-1;
}}
if ($delete && startCol > -1 ) {
this.appendEdit$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI$Z$jalview_datamodel_AlignmentIA($I$(2).DELETE_GAP, seqs, startCol - this.columnsDeleted, end - startCol + 1, al, false, null);
this.columnsDeleted+=(end - startCol + 1);
}this.performEdit$I$jalview_datamodel_AlignmentIA(0, null);
}, 1);

Clazz.newMeth(C$, 'getSize$',  function () {
return this.columnsDeleted;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
