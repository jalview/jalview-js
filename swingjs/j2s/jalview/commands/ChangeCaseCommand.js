(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChangeCaseCommand", null, null, 'jalview.commands.CommandI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.caseChange=-1;
},1);

C$.$fields$=[['I',['caseChange'],'S',['description'],'O',['seqs','jalview.datamodel.SequenceI[]','regions','java.util.List']]
,['I',['TO_LOWER','TO_UPPER','TOGGLE_CASE']]]

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$java_util_List$I', function (description, seqs, regions, caseChange) {
;C$.$init$.apply(this);
this.description=description;
this.seqs=seqs;
this.regions=regions;
this.caseChange=caseChange;
this.doCommand$jalview_datamodel_AlignmentIA(null);
}, 1);

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'getSize$', function () {
return 1;
});

Clazz.newMeth(C$, 'doCommand$jalview_datamodel_AlignmentIA', function (views) {
this.changeCase$Z(true);
});

Clazz.newMeth(C$, 'undoCommand$jalview_datamodel_AlignmentIA', function (views) {
this.changeCase$Z(false);
});

Clazz.newMeth(C$, 'changeCase$Z', function (doCommand) {
var sequence;
var start;
var end;
var nextChar;
for (var r, $r = this.regions.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
start=r[0];
for (var s=0; s < this.seqs.length; s++) {
sequence=this.seqs[s].getSequenceAsString$();
var newSeq=Clazz.new_($I$(1,1));
if (r[1] > sequence.length$()) {
end=sequence.length$();
} else {
end=r[1];
}if (start > 0) {
newSeq.append$S(sequence.substring$I$I(0, start));
}if ((this.caseChange == C$.TO_UPPER && doCommand ) || (this.caseChange == C$.TO_LOWER && !doCommand ) ) {
newSeq.append$S(sequence.substring$I$I(start, end).toUpperCase$());
} else if ((this.caseChange == C$.TO_LOWER && doCommand ) || (this.caseChange == C$.TO_UPPER && !doCommand ) ) {
newSeq.append$S(sequence.substring$I$I(start, end).toLowerCase$());
} else {
for (var c=start; c < end; c++) {
nextChar=sequence.charAt$I(c);
if ("a" <= nextChar && nextChar <= "z" ) {
nextChar = String.fromCharCode(nextChar.$c()- (32));
} else if ("A" <= nextChar && nextChar <= "Z" ) {
nextChar = String.fromCharCode(nextChar.$c()+ (32));
}newSeq.append$C(nextChar);
}
}if (end < sequence.length$()) {
newSeq.append$S(sequence.substring$I(end));
}this.seqs[s].setSequence$S(newSeq.toString());
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.TO_LOWER=0;
C$.TO_UPPER=1;
C$.TOGGLE_CASE=2;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
