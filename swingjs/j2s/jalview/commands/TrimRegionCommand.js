(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,['jalview.commands.EditCommand','.Edit'],['jalview.commands.EditCommand','.Action']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrimRegionCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['columnsDeleted']]]

Clazz.newMeth(C$, 'c$$S$Z$jalview_datamodel_SequenceIA$I$jalview_datamodel_AlignmentI',  function (description, trimLeft, seqs, column, al) {
Clazz.super_(C$, this);
this.description=description;
if (trimLeft) {
if (column == 0) {
return;
}this.columnsDeleted=column;
this.setEdit$jalview_commands_EditCommand_Edit(Clazz.new_([this, null, $I$(2).CUT, seqs, 0, column, al],$I$(1,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
} else {
var width=al.getWidth$() - column - 1 ;
if (width < 1) {
return;
}this.columnsDeleted=width;
this.setEdit$jalview_commands_EditCommand_Edit(Clazz.new_([this, null, $I$(2).CUT, seqs, column + 1, width, al],$I$(1,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
}this.performEdit$I$jalview_datamodel_AlignmentIA(0, null);
}, 1);

Clazz.newMeth(C$, 'getSize$',  function () {
return this.columnsDeleted;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
