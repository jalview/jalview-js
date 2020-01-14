(function(){var P$=Clazz.newPackage("javax.swing.undo"),I$=[[0,'java.util.Vector','javax.swing.event.UndoableEditListener','javax.swing.event.UndoableEditEvent','javax.swing.undo.CompoundEdit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UndoableEditSupport");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.updateLevel=0;
this.compoundEdit=null;
this.listeners=null;
this.realSource=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$O.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$O', function (r) {
C$.$init$.apply(this);
this.realSource=r == null  ? this : r;
this.updateLevel=0;
this.compoundEdit=null;
this.listeners=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_event_UndoableEditListener', function (l) {
this.listeners.addElement$TE(l);
});

Clazz.newMeth(C$, 'removeUndoableEditListener$javax_swing_event_UndoableEditListener', function (l) {
this.listeners.removeElement$O(l);
});

Clazz.newMeth(C$, 'getUndoableEditListeners$', function () {
return (this.listeners.toArray$TTA(Clazz.array($I$(2), [0])));
});

Clazz.newMeth(C$, '_postEdit$javax_swing_undo_UndoableEdit', function (e) {
var ev=Clazz.new_($I$(3).c$$O$javax_swing_undo_UndoableEdit,[this.realSource, e]);
var cursor=(this.listeners.clone$()).elements$();
while (cursor.hasMoreElements$()){
(cursor.nextElement$()).undoableEditHappened$(ev);
}
});

Clazz.newMeth(C$, 'postEdit$javax_swing_undo_UndoableEdit', function (e) {
if (this.updateLevel == 0) {
this._postEdit$javax_swing_undo_UndoableEdit(e);
} else {
this.compoundEdit.addEdit$javax_swing_undo_UndoableEdit(e);
}});

Clazz.newMeth(C$, 'getUpdateLevel$', function () {
return this.updateLevel;
});

Clazz.newMeth(C$, 'beginUpdate$', function () {
if (this.updateLevel == 0) {
this.compoundEdit=this.createCompoundEdit$();
}this.updateLevel++;
});

Clazz.newMeth(C$, 'createCompoundEdit$', function () {
return Clazz.new_($I$(4));
});

Clazz.newMeth(C$, 'endUpdate$', function () {
this.updateLevel--;
if (this.updateLevel == 0) {
this.compoundEdit.end$();
this._postEdit$javax_swing_undo_UndoableEdit(this.compoundEdit);
this.compoundEdit=null;
}});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + " updateLevel: " + this.updateLevel + " listeners: " + this.listeners + " compoundEdit: " + this.compoundEdit ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
