(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
var C$=Clazz.newClass(P$, "SequenceCursor");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.residuePosition=0;
this.columnPosition=0;
this.firstColumnPosition=0;
this.lastColumnPosition=0;
this.token=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$I$I$I', function (seq, resPos, column, tok) {
C$.c$$jalview_datamodel_SequenceI$I$I$I$I$I.apply(this, [seq, resPos, column, 0, 0, tok]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$I$I$I$I$I', function (seq, resPos, column, firstResCol, lastResCol, tok) {
C$.$init$.apply(this);
this.sequence=seq;
this.residuePosition=resPos;
this.columnPosition=column;
this.firstColumnPosition=firstResCol;
this.lastColumnPosition=lastResCol;
this.token=tok;
}, 1);

Clazz.newMeth(C$, 'hashCode$', function () {
var hash=31 * this.residuePosition;
hash=31 * hash + this.columnPosition;
hash=31 * hash + this.token;
if (this.sequence != null ) {
hash+=this.sequence.hashCode$();
}return hash;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "jalview.datamodel.SequenceCursor"))) {
return false;
}var sc=obj;
return this.sequence === sc.sequence  && this.residuePosition == sc.residuePosition  && this.columnPosition == sc.columnPosition  && this.token == sc.token ;
});

Clazz.newMeth(C$, 'toString', function () {
var name=this.sequence == null  ? "" : this.sequence.getName$();
return String.format$S$OA("%s:Pos%d:Col%d:startCol%d:endCol%d:tok%d", [name, new Integer(this.residuePosition), new Integer(this.columnPosition), new Integer(this.firstColumnPosition), new Integer(this.lastColumnPosition), new Integer(this.token)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
