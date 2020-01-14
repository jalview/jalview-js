(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,['javax.swing.text.StringContent','.PosRec'],['javax.swing.text.StringContent','.InsertUndo'],['javax.swing.text.StringContent','.RemoveUndo'],'java.util.Vector',['javax.swing.text.StringContent','.StickyPosition'],['javax.swing.text.StringContent','.UndoPosRef']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringContent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, [['javax.swing.text.AbstractDocument','javax.swing.text.AbstractDocument.Content']]);
C$.empty=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.empty=Clazz.array(Character.TYPE, [0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.count=0;
this.marks=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialLength) {
C$.$init$.apply(this);
if (initialLength < 1) {
initialLength=1;
}this.data=Clazz.array(Character.TYPE, [initialLength]);
this.data[0]="\n";
this.count=1;
}, 1);

Clazz.newMeth(C$, 'length$', function () {
return this.count;
});

Clazz.newMeth(C$, 'insertString$I$S', function (where, str) {
if (where >= this.count || where < 0 ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid location", this.count]);
}var chars=str.toCharArray$();
this.replace$I$I$CA$I$I(where, 0, chars, 0, chars.length);
if (this.marks != null ) {
this.updateMarksForInsert$I$I(where, str.length$());
}return Clazz.new_($I$(2).c$$I$I, [this, null, where, str.length$()]);
});

Clazz.newMeth(C$, 'remove$I$I', function (where, nitems) {
if (where + nitems >= this.count) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid range", this.count]);
}var removedString=this.getString$I$I(where, nitems);
var edit=Clazz.new_($I$(3).c$$I$S, [this, null, where, removedString]);
this.replace$I$I$CA$I$I(where, nitems, C$.empty, 0, 0);
if (this.marks != null ) {
this.updateMarksForRemove$I$I(where, nitems);
}return edit;
});

Clazz.newMeth(C$, 'getString$I$I', function (where, len) {
if (where + len > this.count) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid range", this.count]);
}return  String.instantialize(this.data, where, len);
});

Clazz.newMeth(C$, 'getChars$I$I$javax_swing_text_Segment', function (where, len, chars) {
if (where + len > this.count) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid location", this.count]);
}chars.array=this.data;
chars.offset=where;
chars.count=len;
});

Clazz.newMeth(C$, 'createPosition$I', function (offset) {
if (this.marks == null ) {
this.marks=Clazz.new_($I$(4));
}return Clazz.new_($I$(5).c$$I, [this, null, offset]);
});

Clazz.newMeth(C$, 'replace$I$I$CA$I$I', function (offset, length, replArray, replOffset, replLength) {
var delta=replLength - length;
var src=offset + length;
var nmove=this.count - src;
var dest=src + delta;
if ((this.count + delta) >= this.data.length) {
var newLength=Math.max(2 * this.data.length, this.count + delta);
var newData=Clazz.array(Character.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.data, 0, newData, 0, offset);
System.arraycopy$O$I$O$I$I(replArray, replOffset, newData, offset, replLength);
System.arraycopy$O$I$O$I$I(this.data, src, newData, dest, nmove);
this.data=newData;
} else {
System.arraycopy$O$I$O$I$I(this.data, src, this.data, dest, nmove);
System.arraycopy$O$I$O$I$I(replArray, replOffset, this.data, offset, replLength);
}this.count=this.count + delta;
});

Clazz.newMeth(C$, 'resize$I', function (ncount) {
var ndata=Clazz.array(Character.TYPE, [ncount]);
System.arraycopy$O$I$O$I$I(this.data, 0, ndata, 0, Math.min(ncount, this.count));
this.data=ndata;
});

Clazz.newMeth(C$, 'updateMarksForInsert$I$I', function (offset, length) {
if (offset == 0) {
offset=1;
}var n=this.marks.size$();
for (var i=0; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.unused) {
this.marks.removeElementAt$I(i);
i-=1;
n-=1;
} else if (mark.offset >= offset) {
mark.offset+=length;
}}
});

Clazz.newMeth(C$, 'updateMarksForRemove$I$I', function (offset, length) {
var n=this.marks.size$();
for (var i=0; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.unused) {
this.marks.removeElementAt$I(i);
i-=1;
n-=1;
} else if (mark.offset >= (offset + length)) {
mark.offset-=length;
} else if (mark.offset >= offset) {
mark.offset=offset;
}}
});

Clazz.newMeth(C$, 'getPositionsInRange$java_util_Vector$I$I', function (v, offset, length) {
var n=this.marks.size$();
var end=offset + length;
var placeIn=(v == null ) ? Clazz.new_($I$(4)) : v;
for (var i=0; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.unused) {
this.marks.removeElementAt$I(i);
i-=1;
n-=1;
} else if (mark.offset >= offset && mark.offset <= end ) placeIn.addElement$TE(Clazz.new_($I$(6).c$$javax_swing_text_StringContent_PosRec, [this, null, mark]));
}
return placeIn;
});

Clazz.newMeth(C$, 'updateUndoPositions$java_util_Vector', function (positions) {
for (var counter=positions.size$() - 1; counter >= 0; counter--) {
var ref=positions.elementAt$I(counter);
if (ref.rec.unused) {
positions.removeElementAt$I(counter);
} else ref.resetLocation$();
}
});
;
(function(){var C$=Clazz.newClass(P$.StringContent, "PosRec", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.offset=0;
this.unused=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (offset) {
C$.$init$.apply(this);
this.offset=offset;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.StringContent, "StickyPosition", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.text.Position');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rec=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (offset) {
C$.$init$.apply(this);
this.rec=Clazz.new_($I$(1).c$$I, [this, null, offset]);
this.this$0.marks.addElement$TE(this.rec);
}, 1);

Clazz.newMeth(C$, 'getOffset$', function () {
return this.rec.offset;
});

Clazz.newMeth(C$, 'finalize$', function () {
this.rec.unused=true;
});

Clazz.newMeth(C$, 'toString', function () {
return Integer.toString$I(this.getOffset$());
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.StringContent, "UndoPosRef", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.undoLocation=0;
this.rec=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_StringContent_PosRec', function (rec) {
C$.$init$.apply(this);
this.rec=rec;
this.undoLocation=rec.offset;
}, 1);

Clazz.newMeth(C$, 'resetLocation$', function () {
this.rec.offset=this.undoLocation;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.StringContent, "InsertUndo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.offset=0;
this.length=0;
this.string=null;
this.posRefs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (offset, length) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.offset=offset;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
C$.superclazz.prototype.undo$.apply(this, []);
try {
{
if (this.this$0.marks != null ) this.posRefs=this.this$0.getPositionsInRange$java_util_Vector$I$I.apply(this.this$0, [null, this.offset, this.length]);
this.string=this.this$0.getString$I$I.apply(this.this$0, [this.offset, this.length]);
this.this$0.remove$I$I.apply(this.this$0, [this.offset, this.length]);
}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotUndoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$, 'redo$', function () {
C$.superclazz.prototype.redo$.apply(this, []);
try {
{
this.this$0.insertString$I$S.apply(this.this$0, [this.offset, this.string]);
this.string=null;
if (this.posRefs != null ) {
this.this$0.updateUndoPositions$java_util_Vector.apply(this.this$0, [this.posRefs]);
this.posRefs=null;
}}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotRedoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.StringContent, "RemoveUndo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.offset=0;
this.length=0;
this.string=null;
this.posRefs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (offset, string) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.offset=offset;
this.string=string;
this.length=string.length$();
if (this.this$0.marks != null ) this.posRefs=this.this$0.getPositionsInRange$java_util_Vector$I$I.apply(this.this$0, [null, offset, this.length]);
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
C$.superclazz.prototype.undo$.apply(this, []);
try {
{
this.this$0.insertString$I$S.apply(this.this$0, [this.offset, this.string]);
if (this.posRefs != null ) {
this.this$0.updateUndoPositions$java_util_Vector.apply(this.this$0, [this.posRefs]);
this.posRefs=null;
}this.string=null;
}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotUndoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$, 'redo$', function () {
C$.superclazz.prototype.redo$.apply(this, []);
try {
{
this.string=this.this$0.getString$I$I.apply(this.this$0, [this.offset, this.length]);
if (this.this$0.marks != null ) this.posRefs=this.this$0.getPositionsInRange$java_util_Vector$I$I.apply(this.this$0, [null, this.offset, this.length]);
this.this$0.remove$I$I.apply(this.this$0, [this.offset, this.length]);
}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotRedoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:25 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
