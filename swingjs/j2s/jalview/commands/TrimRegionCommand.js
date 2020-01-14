(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,['jalview.commands.EditCommand','.Edit'],['jalview.commands.EditCommand','.Action']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TrimRegionCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.columnsDeleted=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$jalview_datamodel_SequenceIA$I$jalview_datamodel_AlignmentI', function (description, trimLeft, seqs, column, al) {
Clazz.super_(C$, this,1);
this.description=description;
if (trimLeft) {
if (column == 0) {
return;
}this.columnsDeleted=column;
this.setEdit$jalview_commands_EditCommand_Edit(Clazz.new_($I$(1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI, [this, null, $I$(2).CUT, seqs, 0, column, al]));
} else {
var width=al.getWidth$() - column - 1 ;
if (width < 1) {
return;
}this.columnsDeleted=width;
this.setEdit$jalview_commands_EditCommand_Edit(Clazz.new_($I$(1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI, [this, null, $I$(2).CUT, seqs, column + 1, width, al]));
}this.performEdit$I$jalview_datamodel_AlignmentIA(0, null);
}, 1);

Clazz.newMeth(C$, 'getSize$', function () {
return this.columnsDeleted;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
