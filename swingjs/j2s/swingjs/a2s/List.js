(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'javax.swing.JScrollPane','javax.swing.DefaultListModel','javax.swing.border.LineBorder','java.awt.AWTEventMulticaster','java.awt.event.ItemListener','java.awt.event.ActionListener']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "List", null, 'javax.swing.JList', ['java.awt.ItemSelectable', ['java.awt.JSComponent','java.awt.JSComponent.A2SWrappedComponent']]);
C$.nameCounter=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nameCounter=0;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.visibleIndex=0;
this.actionListener=null;
this.itemListener=null;
this.awtmodel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.visibleIndex=-1;
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'getWrap$', function () {
return Clazz.new_($I$(1).c$$java_awt_Component,[this]);
});

Clazz.newMeth(C$, 'c$$I$Z', function (rows, multipleMode) {
C$.c$.apply(this, []);
this.setMultipleMode$Z(multipleMode);
this.setVisibleRowCount$I(rows == 0 ? 4 : rows);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$javax_swing_ListModel.apply(this, [Clazz.new_($I$(2))]);
C$.$init$.apply(this);
this.awtmodel=this.getModel$();
this.setBorder$javax_swing_border_Border($I$(3).createBlackLineBorder$());
}, 1);

Clazz.newMeth(C$, 'constructComponentName$', function () {
return "list" + C$.nameCounter++;
});

Clazz.newMeth(C$, 'getItemCount$', function () {
return this.countItems$();
});

Clazz.newMeth(C$, 'countItems$', function () {
return this.getModel$().getSize$();
});

Clazz.newMeth(C$, 'getItem$I', function (index) {
return this.getItemImpl$I(index);
});

Clazz.newMeth(C$, 'getItemImpl$I', function (index) {
return this.awtmodel.getElementAt$I(index);
});

Clazz.newMeth(C$, 'getItems$', function () {
var itemCopies=Clazz.array(String, [this.awtmodel.getSize$()]);
this.awtmodel.copyInto$OA(itemCopies);
return itemCopies;
});

Clazz.newMeth(C$, 'add$S', function (item) {
this.addItem$S(item);
});

Clazz.newMeth(C$, 'addItem$S', function (item) {
this.addItem$S$I(item, -1);
});

Clazz.newMeth(C$, 'add$S$I', function (item, index) {
this.addItem$S$I(item, index);
});

Clazz.newMeth(C$, 'addItem$S$I', function (item, index) {
if (index >= 0 && index < this.awtmodel.getSize$() ) this.awtmodel.add$I$TE(index, item);
 else this.awtmodel.addElement$TE(item);
});

Clazz.newMeth(C$, 'replaceItem$S$I', function (newValue, index) {
this.remove$I(index);
this.add$S$I(newValue, index);
});

Clazz.newMeth(C$, 'removeAll$', function () {
this.clear$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.awtmodel.clear$();
});

Clazz.newMeth(C$, 'remove$S', function (item) {
this.awtmodel.removeElement$O(item);
});

Clazz.newMeth(C$, 'remove$I', function (position) {
this.delItem$I(position);
});

Clazz.newMeth(C$, 'delItem$I', function (position) {
this.delItems$I$I(position, position);
});

Clazz.newMeth(C$, 'delItems$I$I', function (start, end) {
this.awtmodel.removeRange$I$I(start, end);
});

Clazz.newMeth(C$, 'getSelectedIndexes$', function () {
return C$.superclazz.prototype.getSelectedIndices$.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedItem$', function () {
return C$.superclazz.prototype.getSelectedValue$.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedItems$', function () {
return C$.superclazz.prototype.getSelectedValues$.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedObjects$', function () {
return this.getSelectedItems$();
});

Clazz.newMeth(C$, 'select$I', function (index) {
var alreadySelected=C$.superclazz.prototype.isSelectedIndex$I.apply(this, [index]);
if (!alreadySelected) {
C$.superclazz.prototype.getSelectionModel$.apply(this, []).addSelectionInterval$I$I(index, index);
}});

Clazz.newMeth(C$, 'deselect$I', function (index) {
var alreadySelected=C$.superclazz.prototype.isSelectedIndex$I.apply(this, [index]);
if (alreadySelected) {
C$.superclazz.prototype.removeSelectionInterval$I$I.apply(this, [index, index]);
}});

Clazz.newMeth(C$, 'isIndexSelected$I', function (index) {
return this.isSelected$I(index);
});

Clazz.newMeth(C$, 'isSelected$I', function (index) {
return C$.superclazz.prototype.isSelectedIndex$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'getRows$', function () {
return C$.superclazz.prototype.getVisibleRowCount$.apply(this, []);
});

Clazz.newMeth(C$, 'isMultipleMode$', function () {
return this.allowsMultipleSelections$();
});

Clazz.newMeth(C$, 'allowsMultipleSelections$', function () {
return C$.superclazz.prototype.getSelectionMode$.apply(this, []) == 2;
});

Clazz.newMeth(C$, 'setMultipleMode$Z', function (b) {
this.setMultipleSelections$Z(b);
});

Clazz.newMeth(C$, 'setMultipleSelections$Z', function (b) {
C$.superclazz.prototype.setSelectionMode$I.apply(this, [b ? 2 : 0]);
});

Clazz.newMeth(C$, 'getVisibleIndex$', function () {
return this.visibleIndex;
});

Clazz.newMeth(C$, 'makeVisible$I', function (index) {
this.visibleIndex=index;
this.ensureIndexIsVisible$I(index);
});

Clazz.newMeth(C$, 'getPreferredSize$I', function (rows) {
return this.preferredSize$I(rows);
});

Clazz.newMeth(C$, 'preferredSize$I', function (rows) {
var peer=this.peer;
if (peer != null ) return peer.getPreferredSize$I(rows);
return this.preferredSize$();
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'preferredSize$', function () {
var rows=this.awtmodel.getSize$();
if (rows > 0) {
var peer=this.peer;
if (peer != null ) return peer.getPreferredSize$I(rows);
}return C$.superclazz.prototype.preferredSize$.apply(this, []);
});

Clazz.newMeth(C$, 'getMinimumSize$I', function (rows) {
return this.minimumSize$I(rows);
});

Clazz.newMeth(C$, 'minimumSize$I', function (rows) {
var peer=this.peer;
return (peer != null ) ? peer.getMinimumSize$I(rows) : C$.superclazz.prototype.minimumSize$.apply(this, []);
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return this.minimumSize$();
});

Clazz.newMeth(C$, 'minimumSize$', function () {
var rows=this.awtmodel.getSize$();
return (rows > 0) ? this.minimumSize$I(rows) : C$.superclazz.prototype.minimumSize$.apply(this, []);
});

Clazz.newMeth(C$, 'addItemListener$java_awt_event_ItemListener', function (l) {
if (l == null ) {
return;
}this.itemListener=$I$(4).add$java_awt_event_ItemListener$java_awt_event_ItemListener(this.itemListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeItemListener$java_awt_event_ItemListener', function (l) {
if (l == null ) {
return;
}this.itemListener=$I$(4).remove$java_awt_event_ItemListener$java_awt_event_ItemListener(this.itemListener, l);
});

Clazz.newMeth(C$, 'getItemListeners$', function () {
return this.getListeners$Class(Clazz.getClass($I$(5),['itemStateChanged$java_awt_event_ItemEvent']));
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener', function (l) {
if (l == null ) {
return;
}this.actionListener=$I$(4).add$java_awt_event_ActionListener$java_awt_event_ActionListener(this.actionListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener', function (l) {
if (l == null ) {
return;
}this.actionListener=$I$(4).remove$java_awt_event_ActionListener$java_awt_event_ActionListener(this.actionListener, l);
});

Clazz.newMeth(C$, 'getActionListeners$', function () {
return this.getListeners$Class(Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']));
});

Clazz.newMeth(C$, 'getListeners$Class', function (listenerType) {
var l=null;
if (listenerType === Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']) ) {
l=this.actionListener;
} else if (listenerType === Clazz.getClass($I$(5),['itemStateChanged$java_awt_event_ItemEvent']) ) {
l=this.itemListener;
} else {
return C$.superclazz.prototype.getListeners$Class.apply(this, [listenerType]);
}return $I$(4).getListeners$java_util_EventListener$Class(l, listenerType);
});

Clazz.newMeth(C$, 'eventEnabled$java_awt_AWTEvent', function (e) {
switch (e.getID$()) {
case 1001:
if ((this.eventMask & 128) != 0 || this.actionListener != null  ) {
return true;
}return false;
case 701:
if ((this.eventMask & 512) != 0 || this.itemListener != null  ) {
return true;
}return false;
default:
break;
}
return C$.superclazz.prototype.eventEnabled$java_awt_AWTEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processEvent$java_awt_AWTEvent', function (e) {
if (Clazz.instanceOf(e, "java.awt.event.ItemEvent")) {
this.processItemEvent$java_awt_event_ItemEvent(e);
return;
} else if (Clazz.instanceOf(e, "java.awt.event.ActionEvent")) {
this.processActionEvent$java_awt_event_ActionEvent(e);
return;
}C$.superclazz.prototype.processEvent$java_awt_AWTEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processItemEvent$java_awt_event_ItemEvent', function (e) {
var listener=this.itemListener;
if (listener != null ) {
listener.itemStateChanged$(e);
}});

Clazz.newMeth(C$, 'processActionEvent$java_awt_event_ActionEvent', function (e) {
var listener=this.actionListener;
if (listener != null ) {
listener.actionPerformed$(e);
}});

Clazz.newMeth(C$, 'paramString$', function () {
return C$.superclazz.prototype.paramString$.apply(this, []) + ",selected=" + this.getSelectedItem$() ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
