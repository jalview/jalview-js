(function(){var P$=Clazz.newPackage("javax.swing.undo"),I$=[[0,'java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CompoundEdit", null, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inProgress=false;
this.edits=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.inProgress=true;
this.edits=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'undo$', function () {
C$.superclazz.prototype.undo$.apply(this, []);
var i=this.edits.size$();
while (i-- > 0){
var e=this.edits.elementAt$I(i);
e.undo$();
}
});

Clazz.newMeth(C$, 'redo$', function () {
C$.superclazz.prototype.redo$.apply(this, []);
var cursor=this.edits.elements$();
while (cursor.hasMoreElements$()){
(cursor.nextElement$()).redo$();
}
});

Clazz.newMeth(C$, 'lastEdit$', function () {
var count=this.edits.size$();
if (count > 0) return this.edits.elementAt$I(count - 1);
 else return null;
});

Clazz.newMeth(C$, 'die$', function () {
var size=this.edits.size$();
for (var i=size - 1; i >= 0; i--) {
var e=this.edits.elementAt$I(i);
e.die$();
}
C$.superclazz.prototype.die$.apply(this, []);
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit', function (anEdit) {
if (!this.inProgress) {
return false;
} else {
var last=this.lastEdit$();
if (last == null ) {
this.edits.addElement$TE(anEdit);
} else if (!last.addEdit$javax_swing_undo_UndoableEdit(anEdit)) {
if (anEdit.replaceEdit$javax_swing_undo_UndoableEdit(last)) {
this.edits.removeElementAt$I(this.edits.size$() - 1);
}this.edits.addElement$TE(anEdit);
}return true;
}});

Clazz.newMeth(C$, 'end$', function () {
this.inProgress=false;
});

Clazz.newMeth(C$, 'canUndo$', function () {
return !this.isInProgress$() && C$.superclazz.prototype.canUndo$.apply(this, []) ;
});

Clazz.newMeth(C$, 'canRedo$', function () {
return !this.isInProgress$() && C$.superclazz.prototype.canRedo$.apply(this, []) ;
});

Clazz.newMeth(C$, 'isInProgress$', function () {
return this.inProgress;
});

Clazz.newMeth(C$, 'isSignificant$', function () {
var cursor=this.edits.elements$();
while (cursor.hasMoreElements$()){
if ((cursor.nextElement$()).isSignificant$()) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getPresentationName$', function () {
var last=this.lastEdit$();
if (last != null ) {
return last.getPresentationName$();
} else {
return C$.superclazz.prototype.getPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'getUndoPresentationName$', function () {
var last=this.lastEdit$();
if (last != null ) {
return last.getUndoPresentationName$();
} else {
return C$.superclazz.prototype.getUndoPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'getRedoPresentationName$', function () {
var last=this.lastEdit$();
if (last != null ) {
return last.getRedoPresentationName$();
} else {
return C$.superclazz.prototype.getRedoPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + " inProgress: " + this.inProgress + " edits: " + this.edits ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
