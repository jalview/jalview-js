(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequenceCursor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['residuePosition','columnPosition','firstColumnPosition','lastColumnPosition','token'],'O',['sequence','jalview.datamodel.SequenceI']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$I$I$I',  function (seq, resPos, column, tok) {
C$.c$$jalview_datamodel_SequenceI$I$I$I$I$I.apply(this, [seq, resPos, column, 0, 0, tok]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$I$I$I$I$I',  function (seq, resPos, column, firstResCol, lastResCol, tok) {
;C$.$init$.apply(this);
this.sequence=seq;
this.residuePosition=resPos;
this.columnPosition=column;
this.firstColumnPosition=firstResCol;
this.lastColumnPosition=lastResCol;
this.token=tok;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=31 * this.residuePosition;
hash=31 * hash + this.columnPosition;
hash=31 * hash + this.token;
if (this.sequence != null ) {
hash+=this.sequence.hashCode$();
}return hash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.SequenceCursor"))) {
return false;
}var sc=obj;
return this.sequence === sc.sequence  && this.residuePosition == sc.residuePosition  && this.columnPosition == sc.columnPosition  && this.token == sc.token ;
});

Clazz.newMeth(C$, 'toString',  function () {
var name=this.sequence == null  ? "" : this.sequence.getName$();
return String.format$S$OA("%s:Pos%d:Col%d:startCol%d:endCol%d:tok%d", Clazz.array(java.lang.Object, -1, [name, Integer.valueOf$I(this.residuePosition), Integer.valueOf$I(this.columnPosition), Integer.valueOf$I(this.firstColumnPosition), Integer.valueOf$I(this.lastColumnPosition), Integer.valueOf$I(this.token)]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
