(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.util.Comparison',['jalview.commands.EditCommand','.Action']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RemoveGapColCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.columnsDeleted=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI', function (description, seqs, start, end, al) {
Clazz.super_(C$, this,1);
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
if (!$I$(1).isGap$C(seqs[j].getCharAt$I(i))) {
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

Clazz.newMeth(C$, 'getSize$', function () {
return this.columnsDeleted;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
