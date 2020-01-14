(function(){var P$=Clazz.newPackage("javax.swing.undo"),I$=[[0,'javax.swing.UIManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractUndoableEdit", null, null, 'javax.swing.undo.UndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hasBeenDone=false;
this.alive=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.hasBeenDone=true;
this.alive=true;
}, 1);

Clazz.newMeth(C$, 'die$', function () {
this.alive=false;
});

Clazz.newMeth(C$, 'undo$', function () {
if (!this.canUndo$()) {
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotUndoException'));
}this.hasBeenDone=false;
});

Clazz.newMeth(C$, 'canUndo$', function () {
return this.alive && this.hasBeenDone ;
});

Clazz.newMeth(C$, 'redo$', function () {
if (!this.canRedo$()) {
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotRedoException'));
}this.hasBeenDone=true;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return this.alive && !this.hasBeenDone ;
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
return false;
});

Clazz.newMeth(C$, 'replaceEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
return false;
});

Clazz.newMeth(C$, 'isSignificant$', function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
return "";
});

Clazz.newMeth(C$, 'getUndoPresentationName$', function () {
var name=this.getPresentationName$();
if (!"".equals$O(name)) {
name=$I$(1).getString$O("AbstractUndoableEdit.undoText") + " " + name ;
} else {
name=$I$(1).getString$O("AbstractUndoableEdit.undoText");
}return name;
});

Clazz.newMeth(C$, 'getRedoPresentationName$', function () {
var name=this.getPresentationName$();
if (!"".equals$O(name)) {
name=$I$(1).getString$O("AbstractUndoableEdit.redoText") + " " + name ;
} else {
name=$I$(1).getString$O("AbstractUndoableEdit.redoText");
}return name;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + " hasBeenDone: " + this.hasBeenDone + " alive: " + this.alive ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
