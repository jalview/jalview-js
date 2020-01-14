(function(){var P$=Clazz.newPackage("jalview.commands"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ChangeCaseCommand", null, null, 'jalview.commands.CommandI');
C$.TO_LOWER=0;
C$.TO_UPPER=0;
C$.TOGGLE_CASE=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.TO_LOWER=0;
C$.TO_UPPER=1;
C$.TOGGLE_CASE=2;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
this.caseChange=0;
this.seqs=null;
this.regions=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.caseChange=-1;
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_datamodel_SequenceIA$java_util_List$I', function (description, seqs, regions, caseChange) {
C$.$init$.apply(this);
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
var newSeq=Clazz.new_($I$(1));
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
