(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'jalview.util.Comparison',['jalview.commands.EditCommand','.Edit'],['jalview.commands.EditCommand','.Action'],'jalview.commands.EditCommand']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SlideSequencesCommand", null, 'jalview.commands.EditCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gapsInsertedBegin=false;
},1);

C$.$fields$=[['Z',['gapsInsertedBegin']]]

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$I$C', function (description, seqsLeft, seqsRight, slideSize, gapChar) {
Clazz.super_(C$, this);
this.description=description;
var lSize=seqsLeft.length;
this.gapsInsertedBegin=false;
var i;
var j;
for (i=0; i < lSize; i++) {
for (j=0; j < slideSize; j++) {
if (!$I$(1,"isGap$C",[seqsLeft[i].getCharAt$I(j)])) {
this.gapsInsertedBegin=true;
break;
}}
}
var e=null;
if (!this.gapsInsertedBegin) {
e=Clazz.new_([this, null, $I$(3).DELETE_GAP, seqsLeft, 0, slideSize, gapChar],$I$(2,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$C);
this.setEdit$jalview_commands_EditCommand_Edit(e);
} else {
e=Clazz.new_([this, null, $I$(3).INSERT_GAP, seqsRight, 0, slideSize, gapChar],$I$(2,1).c$$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$C);
this.setEdit$jalview_commands_EditCommand_Edit(e);
}$I$(4).performEdit$jalview_commands_EditCommand_Edit$jalview_datamodel_AlignmentIA(e, null);
}, 1);

Clazz.newMeth(C$, 'getGapsInsertedBegin$', function () {
return this.gapsInsertedBegin;
});

Clazz.newMeth(C$, 'appendSlideCommand$jalview_commands_SlideSequencesCommand', function (command) {
var same=false;
if (command.getEdit$I(0).seqs.length == this.getEdit$I(0).seqs.length) {
same=true;
for (var i=0; i < command.getEdit$I(0).seqs.length; i++) {
if (this.getEdit$I(0).seqs[i] !== command.getEdit$I(0).seqs[i] ) {
same=false;
}}
}if (same) {
command.addEdit$jalview_commands_EditCommand_Edit(this.getEdit$I(0));
}return same;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
