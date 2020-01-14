(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'swingjs.plaf.JSTableUI','Boolean','javax.swing.KeyStroke','javax.swing.SwingUtilities','sun.swing.SwingUtilities2','java.awt.Rectangle','StringBuilder','swingjs.api.js.DOMNode','swingjs.plaf.CellHolder','java.awt.event.MouseEvent',['swingjs.plaf.JSTableUI','.Handler'],'javax.swing.CellRendererPane','javax.swing.LookAndFeel','javax.swing.UIManager','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSTableUI','.Actions'],'javax.swing.TransferHandler','javax.swing.table.DefaultTableCellRenderer',['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Dimension','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSTableUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.tmpRect=null;
C$.cellRect=null;
C$.minCell=null;
C$.maxCell=null;
C$.BASELINE_COMPONENT_KEY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.tmpRect=Clazz.new_($I$(6));
C$.cellRect=Clazz.new_($I$(6));
C$.minCell=Clazz.new_($I$(6));
C$.maxCell=Clazz.new_($I$(6));
C$.BASELINE_COMPONENT_KEY=Clazz.new_($I$(7).c$$S,["Table.baselineComponent"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.header=null;
this.table=null;
this.oldrc=0;
this.oldrh=0;
this.currentRowMin=0;
this.currentRowMax=0;
this.isScrolling=false;
this.justLaidOut=false;
this.working=false;
this.oldWidth=0;
this.oldHeight=0;
this.oldFont=null;
this.havePainted=false;
this.cw=null;
this.editorComp=null;
this.rendererPane=null;
this.keyListener=null;
this.focusListener=null;
this.mouseInputListener=null;
this.handler=null;
this.isFileList=false;
this.dragging=false;
this.lastWidth=0;
this.resized=false;
this.repaintAll=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.currentRowMin=-1;
this.currentRowMax=-1;
this.cw=Clazz.array(Integer.TYPE, [10]);
this.isFileList=false;
}, 1);

Clazz.newMeth(C$, 'setScrolling$', function () {
this.isScrolling=true;
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.isTable=true;
}, 1);

Clazz.newMeth(C$, 'beginLayout$', function () {
C$.superclazz.prototype.beginLayout$.apply(this, []);
});

Clazz.newMeth(C$, 'endLayout$', function () {
C$.superclazz.prototype.endLayout$.apply(this, []);
this.currentRowMin=this.currentRowMax=-1;
this.justLaidOut=true;
this.setUIDisabled$Z(p$2.getHeaderUI.apply(this, []).setUIDisabled$Z(false));
});

Clazz.newMeth(C$, 'endValidate$', function () {
});

Clazz.newMeth(C$, 'update$java_awt_Graphics$javax_swing_JComponent', function (g, c) {
if (this.isUIDisabled) return;
if (!this.isScrolling) this.setHTMLElement$();
this.paint$java_awt_Graphics$javax_swing_JComponent(g, c);
});

Clazz.newMeth(C$, 'getContainerHeight$', function () {
return this.height=this.table.getParent$().getHeight$();
});

Clazz.newMeth(C$, 'setTainted$', function () {
if (!this.working) this.isTainted=true;
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "model":
this.currentRowMin=this.currentRowMax=-1;
this.isLaidOut=false;
this.setUIDisabled$Z(p$2.getHeaderUI.apply(this, []).setUIDisabled$Z(true));
var sp=p$2.getScrollPane.apply(this, []);
if (sp != null ) {
sp.getVerticalScrollBar$().setValue$I(0);
}return;
case "autoCreateRowSorter":
case "rowSorter":
case "sorter":
case "autoResizeMode":
return;
case "tableCellEditor":
return;
}
System.out.println$S("JTableUI property not handled: " + prop);
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'updateDOMNode$', function () {
var rc=this.table.getRowCount$();
var rh=this.table.getRowHeight$();
var rebuild=(rc != this.oldrc || rh != this.oldrh );
this.oldrh=rh;
this.oldrc=rc;
if (this.domNode == null ) {
this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
}if (rebuild) {
this.currentRowMin=this.currentRowMax=-1;
}var d=this.getPreferredSize$javax_swing_JComponent(this.jc);
var w=d.width;
var h=d.height;
if (w != this.oldWidth || h != this.oldHeight ) {
this.oldWidth=w;
this.oldHeight=h;
$I$(8).setStyles(this.domNode, ["width", w + "px", "height", h + "px"]);
}var font=this.c.getFont$();
if (!font.equals$O(this.oldFont)) {
this.oldFont=font;
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.c.getFont$());
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getCellComponent$javax_swing_table_TableCellRenderer$I$I$I$I$swingjs_api_js_DOMNode$Z', function (renderer, row, col, w, h, td, fullPaint) {
var cNoPrep=renderer.getComponent$ && renderer.getComponent$() ||null;
var c=(cNoPrep == null  ? this.table.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(renderer, row, col) : cNoPrep);
if (c != null ) {
var ui=(c.getUI$());
var wasDisabled=ui.isUIDisabled;
ui.setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(c, w, h, null);
ui.setTargetParent$javax_swing_JComponent(this.table);
if (fullPaint && wasDisabled  || cNoPrep != null  ) {
if (wasDisabled) $I$(9).restoreUI$swingjs_plaf_JSComponentUI$swingjs_api_js_DOMNode$I$I$I$I(ui, td, row, col, w, h);
ui.setTainted$();
this.table.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(renderer, row, col);
}}return c;
}, p$2);

Clazz.newMeth(C$, 'getChildren$', function () {
return null;
});

Clazz.newMeth(C$, 'getChildCount$', function () {
return this.table.getRowCount$() * this.table.getColumnCount$();
});

Clazz.newMeth(C$, 'addChildrenToDOM$java_awt_ComponentA$I', function (children, n) {
if (this.currentRowMin == -1) {
p$2.setHidden$Z.apply(this, [true]);
this.havePainted=false;
var nrows=this.table.getRowCount$();
var ncols=this.table.getColumnCount$();
var h=this.table.getRowHeight$();
var cw=p$2.getColumnWidths.apply(this, []);
var rminy;
var rmaxy;
var rminx;
var rmaxx;
this.table.computeVisibleRect$java_awt_Rectangle(C$.tmpRect);
rminx=C$.tmpRect.x;
rmaxx=C$.tmpRect.x + C$.tmpRect.width;
this.$$O(this.domNode).empty();
rminy=C$.tmpRect.y;
rmaxy=C$.tmpRect.y + C$.tmpRect.height;
if (C$.tmpRect.height != 0) {
this.currentRowMin=0;
p$2.addElements$I$I$I$I$IA$I$I$I$I$I.apply(this, [rminx, rminy, rmaxx, rmaxy, cw, h, 0, nrows, 0, ncols]);
}}});

Clazz.newMeth(C$, 'setHidden$Z', function (b) {
$I$(8).setStyles(this.domNode, ["visibility", b ? "hidden" : "visible"]);
}, p$2);

Clazz.newMeth(C$, 'getColumnWidths', function () {
var ncols=this.table.getColumnCount$();
if (ncols > this.cw.length) this.cw=Clazz.array(Integer.TYPE, [ncols]);
for (var col=0; col < ncols; col++) this.cw[col]=this.table.getColumnModel$().getColumn$I(col).getWidth$();

return this.cw;
}, p$2);

Clazz.newMeth(C$, 'addElements$I$I$I$I$IA$I$I$I$I$I', function (rminx, rminy, rmaxx, rmaxy, cw, h, row1, row2, col1, col2) {
var col;
var tx0;
for (col=0, tx0=0; col < col1; tx0+=cw[col++]) {
}
for (var row=row1, ty=row1 * h; row < row2 && ty < rmaxy ; row++, ty+=h) {
if (ty + h < rminy) continue;
var rid=this.id + "_tab_row" + row ;
var tr=$I$(8).getElement(rid);
var rowExists=(tr != null );
if (!rowExists) {
tr=$I$(8).createElement("div", rid);
this.domNode.appendChild(tr);
}$I$(8).setStyles(tr, ["height", h + "px"]);
col=col1;
for (var w, tx=tx0; col < col2 && tx < rmaxx ; col++, tx+=w) {
w=cw[col];
if (tx + w < rminx) continue;
var td=$I$(9).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, row, col);
if (td == null ) {
td=$I$(9).createCellOuterNode$swingjs_plaf_JSComponentUI$I$I(this, row, col);
tr.appendChild(td);
}$I$(8).setStyles(td, ["width", w + "px", "height", h + "px", "left", tx + "px", "top", ty + "px"]);
p$2.updateCellNode$swingjs_api_js_DOMNode$I$I$I$I.apply(this, [td, row, col, w, h]);
if (rminx < 0) return td;
}
}
return null;
}, p$2);

Clazz.newMeth(C$, 'updateCellNode$swingjs_api_js_DOMNode$I$I$I$I', function (td, row, col, w, h) {
var cell=p$2.getCellComponent$javax_swing_table_TableCellRenderer$I$I$I$I$swingjs_api_js_DOMNode$Z.apply(this, [this.table.getCellRenderer$I$I(row, col), row, col, w, h, td, true]);
if (cell != null ) $I$(9).updateCellNode$swingjs_api_js_DOMNode$java_awt_JSComponent$I$I(td, cell, 0, 0);
}, p$2);

Clazz.newMeth(C$, 'prepareDOMEditor$Z$I$I', function (starting, row, col) {
if (this.editorComp != null ) {
this.editorComp.setVisible$Z(true);
this.editorComp.setVisible$Z(false);
}this.editorComp=this.table.getEditorComponent$();
if (starting) {
if (this.editorComp != null ) {
this.editorComp.setVisible$Z(false);
this.editorComp.setVisible$Z(true);
p$2.notifyEntry$Z.apply(this, [false]);
}} else {
var td=$I$(9).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, this.table.getEditingRow$(), this.table.getEditingColumn$());
p$2.updateCellNode$swingjs_api_js_DOMNode$I$I$I$I.apply(this, [td, row, col, 0, 0]);
this.repaintCell$I$I(row, col);
p$2.notifyEntry$Z.apply(this, [true]);
}});

Clazz.newMeth(C$, 'notifyEntry$Z', function (isEntry) {
this.table.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(10).c$$java_awt_Component$I$J$I$I$I$I$Z,[this.table, (isEntry ? 504 : 505), System.currentTimeMillis$(), 0, -1, -1, 0, false]));
}, p$2);

Clazz.newMeth(C$, 'pointOutsidePrefSize$I$I$java_awt_Point', function (row, column, p) {
if (!this.isFileList) {
return false;
}return $I$(5).pointOutsidePrefSize$javax_swing_JTable$I$I$java_awt_Point(this.table, row, column, p);
}, p$2);

Clazz.newMeth(C$, 'repaintCell$I$I', function (lr, lc) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(lr, lc, false, C$.tmpRect);
this.table.repaint$java_awt_Rectangle(C$.tmpRect);
});

Clazz.newMeth(C$, 'getHandler', function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(11), [this, null]);
}return this.handler;
}, p$2);

Clazz.newMeth(C$, 'createKeyListener$', function () {
return null;
});

Clazz.newMeth(C$, 'createFocusListener$', function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createMouseInputListener$', function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (c) {
this.table=c;
this.rendererPane=Clazz.new_($I$(12));
this.table.add$java_awt_Component(this.rendererPane);
this.installDefaults$();
p$2.installDefaults2.apply(this, []);
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'installDefaults$', function () {
$I$(13).installColorsAndFont$javax_swing_JComponent$S$S$S(this.table, "Table.background", "Table.foreground", "Table.font");
$I$(13).installProperty$javax_swing_JComponent$S$O(this.table, "opaque", $I$(2).TRUE);
var sbg=this.table.getSelectionBackground$();
if (sbg == null  || Clazz.instanceOf(sbg, "javax.swing.plaf.UIResource") ) {
this.table.setSelectionBackground$java_awt_Color($I$(14).getColor$O("Table.selectionBackground"));
}var sfg=this.table.getSelectionForeground$();
if (sfg == null  || Clazz.instanceOf(sfg, "javax.swing.plaf.UIResource") ) {
this.table.setSelectionForeground$java_awt_Color($I$(14).getColor$O("Table.selectionForeground"));
}var gridColor=this.table.getGridColor$();
if (gridColor == null  || Clazz.instanceOf(gridColor, "javax.swing.plaf.UIResource") ) {
this.table.setGridColor$java_awt_Color($I$(14).getColor$O("Table.gridColor"));
}var sp=p$2.getScrollPane.apply(this, []);
if (sp != null ) {
sp.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
$I$(13).installBorder$javax_swing_JComponent$S(sp, "Table.scrollPaneBorder");
}this.isFileList=$I$(2).TRUE.equals$O(this.table.getClientProperty$O("Table.isFileList"));
});

Clazz.newMeth(C$, 'getScrollPane', function () {
var parent;
return ((parent=this.table.getParent$()) == null  ? null : parent.getParent$());
}, p$2);

Clazz.newMeth(C$, 'installDefaults2', function () {
}, p$2);

Clazz.newMeth(C$, 'installListeners$', function () {
this.focusListener=this.createFocusListener$();
this.keyListener=this.createKeyListener$();
this.mouseInputListener=this.createMouseInputListener$();
this.table.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.table.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.table.addMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.table.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.table.addPropertyChangeListener$java_beans_PropertyChangeListener(p$2.getHandler.apply(this, []));
if (this.isFileList) {
this.table.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this, []));
}});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
$I$(15).installLazyActionMap$javax_swing_JComponent$Class$S(this.table, Clazz.getClass(C$), "Table.actionMap");
var inputMap=this.getInputMap$I(1);
$I$(4).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.table, 1, inputMap);
});

Clazz.newMeth(C$, 'getInputMap$I', function (condition) {
if (condition == 1) {
var keyMap=$I$(16).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.table, this, "Table.ancestorInputMap");
var rtlKeyMap;
if (this.table.getComponentOrientation$().isLeftToRight$() || ((rtlKeyMap=$I$(16).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.table, this, "Table.ancestorInputMap.RightToLeft")) == null ) ) {
return keyMap;
} else {
rtlKeyMap.setParent$javax_swing_InputMap(keyMap);
return rtlKeyMap;
}}return null;
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap', function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextColumn", 1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextColumnChangeLead", 1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousColumn", -1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousColumnChangeLead", -1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextRow", 0, 1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextRowChangeLead", 0, 1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousRow", 0, -1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousRowChangeLead", 0, -1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextColumnExtendSelection", 1, 0, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousColumnExtendSelection", -1, 0, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextRowExtendSelection", 0, 1, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousRowExtendSelection", 0, -1, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollUpChangeSelection", false, false, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollDownChangeSelection", false, true, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectFirstColumn", false, false, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectLastColumn", false, true, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollUpExtendSelection", true, false, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollDownExtendSelection", true, true, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectFirstColumnExtendSelection", true, false, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectLastColumnExtendSelection", true, true, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectFirstRow", false, false, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectLastRow", false, true, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectFirstRowExtendSelection", true, false, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["selectLastRowExtendSelection", true, true, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextColumnCell", 1, 0, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousColumnCell", -1, 0, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectNextRowCell", 0, 1, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$I$I$Z$Z,["selectPreviousRowCell", 0, -1, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["selectAll"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["clearSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["cancel"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["startEditing"]));
map.put$O$javax_swing_Action($I$(18).getCutAction$().getValue$S("Name"), $I$(18).getCutAction$());
map.put$O$javax_swing_Action($I$(18).getCopyAction$().getValue$S("Name"), $I$(18).getCopyAction$());
map.put$O$javax_swing_Action($I$(18).getPasteAction$().getValue$S("Name"), $I$(18).getPasteAction$());
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollLeftChangeSelection", false, false, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollRightChangeSelection", false, true, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollLeftExtendSelection", true, false, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S$Z$Z$Z$Z,["scrollRightExtendSelection", true, true, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["addToSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["toggleAndAnchor"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["extendTo"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["moveSelectionTo"]));
map.put$javax_swing_Action(Clazz.new_($I$(17).c$$S,["focusHeader"]));
}, 1);

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
this.table.remove$java_awt_Component(this.rendererPane);
this.rendererPane=null;
this.table=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
});

Clazz.newMeth(C$, 'uninstallListeners$', function () {
this.table.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
this.table.removeKeyListener$java_awt_event_KeyListener(this.keyListener);
this.table.removeMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.table.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.table.removePropertyChangeListener$java_beans_PropertyChangeListener(p$2.getHandler.apply(this, []));
if (this.isFileList) {
this.table.getSelectionModel$().removeListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this, []));
}this.focusListener=null;
this.keyListener=null;
this.mouseInputListener=null;
this.handler=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$', function () {
$I$(4).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.table, 1, null);
$I$(4).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.table, null);
});

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I', function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var lafDefaults=$I$(14).getLookAndFeelDefaults$();
var renderer=lafDefaults.get$O(C$.BASELINE_COMPONENT_KEY);
if (renderer == null ) {
var tcr=Clazz.new_($I$(19));
renderer=tcr.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.table, "a", false, false, -1, -1);
lafDefaults.put$O$O(C$.BASELINE_COMPONENT_KEY, renderer);
}renderer.setFont$java_awt_Font(this.table.getFont$());
var rowMargin=this.table.getRowMargin$();
return renderer.getBaseline$I$I(2147483647, this.table.getRowHeight$() - rowMargin) + (rowMargin/2|0);
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent', function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
return $I$(20).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'createTableSize$J', function (width) {
var height=0;
var rowCount=this.table.getRowCount$();
if (rowCount > 0 && this.table.getColumnCount$() > 0 ) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(rowCount - 1, 0, true, C$.cellRect);
height=C$.cellRect.y + C$.cellRect.height;
}var tmp=Math.abs(width);
if (tmp > 2147483647) {
tmp=2147483647;
}return Clazz.new_($I$(21).c$$I$I,[(tmp|0), height]);
}, p$2);

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent', function (jc) {
var width=0;
var enumeration=this.table.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=width + aColumn.getMinWidth$();
}
return p$2.createTableSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
var width=0;
var enumeration=this.table.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=width + aColumn.getPreferredWidth$();
}
return p$2.createTableSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent', function (jc) {
var width=0;
var enumeration=this.table.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=width + aColumn.getMaxWidth$();
}
return p$2.createTableSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent', function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
var clip=g.getClipBounds$();
var upperLeft=clip.getLocation$();
var lowerRight=Clazz.new_($I$(22).c$$I$I,[clip.x + clip.width - 1, clip.y + clip.height - 1]);
var rMin=this.table.rowAtPoint$java_awt_Point(upperLeft);
var rMax=this.table.rowAtPoint$java_awt_Point(lowerRight);
if (rMin == -1) {
rMin=0;
}if (rMax == -1) {
rMax=this.table.getRowCount$() - 1;
}this.table.computeVisibleRect$java_awt_Rectangle(C$.tmpRect);
if (this.table.getRowCount$() <= 0 || this.table.getColumnCount$() <= 0  || !C$.tmpRect.intersects$java_awt_Rectangle(clip) ) {
p$2.paintDropLines$java_awt_Graphics.apply(this, [g]);
return;
}this.resized=(C$.tmpRect.width != this.lastWidth);
if (this.resized) {
if (rMax - rMin > 1) {
var sp=p$2.getScrollPane.apply(this, []);
if (sp != null ) {
var val=Math.max(1, (rMax - rMin - 1 ) * this.table.getRowHeight$());
sp.getVerticalScrollBar$().setBlockIncrement$I(val);
sp.getVerticalScrollBar$().setUnitIncrement$I(((val + 1)/2|0));
}}var was0=(this.lastWidth == 0);
this.lastWidth=C$.tmpRect.width;
this.repaintAll=true;
if (!was0) {
this.rebuildTable$();
p$2.getHeaderUI.apply(this, []).paint$java_awt_Graphics$javax_swing_JComponent(g, c);
this.table.repaint$java_awt_Rectangle(C$.tmpRect);
return;
}}this.working=true;
var ltr=this.table.getComponentOrientation$().isLeftToRight$();
var cMin=this.table.columnAtPoint$java_awt_Point(ltr ? upperLeft : lowerRight);
var cMax=this.table.columnAtPoint$java_awt_Point(ltr ? lowerRight : upperLeft);
if (cMin == -1) {
cMin=0;
}if (cMax == -1) {
cMax=this.table.getColumnCount$() - 1;
}var header=this.table.getTableHeader$();
var draggedColumn=(header == null ) ? null : header.getDraggedColumn$();
p$2.paintGrid$java_awt_Graphics$I$I$I$I.apply(this, [g, rMin, rMax, cMin, cMax]);
var rMin0=rMin;
var rMax0=rMax;
if (rMin != rMax && !this.repaintAll  && draggedColumn == null  ) {
if (rMax > this.currentRowMax && rMin < this.currentRowMax ) {
rMin=this.currentRowMax + 1;
} else if (rMin < this.currentRowMin && rMax > this.currentRowMin ) {
rMax=this.currentRowMin - 1;
}}this.currentRowMin=rMin0;
this.currentRowMax=rMax0;
p$2.paintCells$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, rMin0, rMax0, rMin, rMax, cMin, cMax]);
p$2.paintDropLines$java_awt_Graphics.apply(this, [g]);
if (draggedColumn != null ) p$2.rebuildHeader.apply(this, []);
this.working=false;
this.dragging=false;
this.repaintAll=false;
p$2.setHidden$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'paintCells$java_awt_Graphics$I$I$I$I$I$I', function (g, rMin0, rMax0, rMin, rMax, cMin, cMax) {
var cm=this.table.getColumnModel$();
var columnMargin=cm.getColumnMargin$();
var h=this.table.getRowHeight$();
var cw=p$2.getColumnWidths.apply(this, []);
var aColumn;
var columnWidth;
var forceNew=(this.dragging || this.justLaidOut );
if (this.table.getComponentOrientation$().isLeftToRight$()) {
for (var row=rMin0; row <= rMax0; row++) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(row, cMin, false, C$.cellRect);
var tr=$I$(8).getElement(this.id + "_tab_row" + row );
for (var column=cMin; column <= cMax; column++) {
aColumn=cm.getColumn$I(column);
columnWidth=aColumn.getWidth$();
C$.cellRect.width=columnWidth - columnMargin;
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I$I$IA$I$swingjs_api_js_DOMNode$Z.apply(this, [g, C$.cellRect, row, column, cw, h, tr, forceNew]);
C$.cellRect.x+=columnWidth;
}
}
} else {
for (var row=rMin0; row <= rMax0; row++) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(row, cMin, false, C$.cellRect);
aColumn=cm.getColumn$I(cMin);
var tr=$I$(8).getElement(this.id + "_tab_row" + row );
for (var column=cMin; column <= cMax; column++) {
aColumn=cm.getColumn$I(column);
columnWidth=aColumn.getWidth$();
C$.cellRect.width=columnWidth - columnMargin;
if (column != cMin) C$.cellRect.x-=columnWidth;
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I$I$IA$I$swingjs_api_js_DOMNode$Z.apply(this, [g, C$.cellRect, row, column, cw, h, tr, forceNew]);
}
}
}this.isScrolling=false;
this.justLaidOut=false;
this.havePainted=true;
}, p$2);

Clazz.newMeth(C$, 'paintCell$java_awt_Graphics$java_awt_Rectangle$I$I$IA$I$swingjs_api_js_DOMNode$Z', function (g, cellRect, row, col, cw, h, tr, forceNew) {
if (this.table.isEditing$() && this.table.getEditingRow$() == row  && this.table.getEditingColumn$() == col ) {
var component=this.table.getEditorComponent$();
component.setBounds$java_awt_Rectangle(cellRect);
component.validate$();
} else {
var td=(forceNew || tr == null   ? null : $I$(9).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, row, col));
var newtd=(td == null );
if (newtd) {
td=p$2.addElements$I$I$I$I$IA$I$I$I$I$I.apply(this, [-2147483648, -2147483648, 2147483647, 2147483647, cw, h, row, row + 1, col, col + 1]);
}var fullPaint=(newtd || !this.havePainted || !this.isScrolling || this.table.getSelectedRowCount$() > 0  );
var renderer=this.table.getCellRenderer$I$I(row, col);
if (!fullPaint) {

if (renderer.__CLASS_NAME__.indexOf("javax.swing.") == 0) return;
}var comp=p$2.getCellComponent$javax_swing_table_TableCellRenderer$I$I$I$I$swingjs_api_js_DOMNode$Z.apply(this, [renderer, row, col, cw[col], h, td, fullPaint]);
if (comp == null ) return;
var ui=(comp).getUI$();
this.rendererPane.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, comp, this.table, cellRect.x, cellRect.y, cellRect.width, cellRect.height, fullPaint && !this.isScrolling );
ui.setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(null, 0, 0, td);
}}, p$2);

Clazz.newMeth(C$, 'paintGrid$java_awt_Graphics$I$I$I$I', function (g, rMin, rMax, cMin, cMax) {
g.setColor$java_awt_Color(this.table.getGridColor$());
this.table._getCellRect$I$I$Z$java_awt_Rectangle(rMin, cMin, true, C$.minCell);
this.table._getCellRect$I$I$Z$java_awt_Rectangle(rMax, cMax, true, C$.maxCell);
var damagedArea=C$.minCell.union$java_awt_Rectangle(C$.maxCell);
if (this.table.getShowHorizontalLines$()) {
var tableWidth=damagedArea.x + damagedArea.width;
var y=damagedArea.y;
for (var row=rMin; row <= rMax; row++) {
y+=this.table.getRowHeight$I(row);
g.drawLine$I$I$I$I(damagedArea.x, y - 1, tableWidth - 1, y - 1);
}
}if (this.table.getShowVerticalLines$()) {
var cm=this.table.getColumnModel$();
var tableHeight=damagedArea.y + damagedArea.height;
var x;
if (this.table.getComponentOrientation$().isLeftToRight$()) {
x=damagedArea.x;
for (var column=cMin; column <= cMax; column++) {
var w=cm.getColumn$I(column).getWidth$();
x+=w;
g.drawLine$I$I$I$I(x - 1, 0, x - 1, tableHeight - 1);
}
} else {
x=damagedArea.x;
for (var column=cMax; column >= cMin; column--) {
var w=cm.getColumn$I(column).getWidth$();
x+=w;
g.drawLine$I$I$I$I(x - 1, 0, x - 1, tableHeight - 1);
}
}}}, p$2);

Clazz.newMeth(C$, 'paintDropLines$java_awt_Graphics', function (g) {
}, p$2);

Clazz.newMeth(C$, 'paintDraggedArea$java_awt_Graphics$I$I$javax_swing_table_TableColumn$I', function (g, rMin, rMax, draggedColumn, distance) {
this.rebuildTable$();
}, p$2);

Clazz.newMeth(C$, 'getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel', function (table, row, model) {
var index=model.getLeadSelectionIndex$();
var compare=row ? table.getRowCount$() : table.getColumnCount$();
return index < compare ? index : -1;
}, 1);

Clazz.newMeth(C$, 'getAdjustedLead$javax_swing_JTable$Z', function (table, row) {
return row ? C$.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, row, table.getSelectionModel$()) : C$.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, row, table.getColumnModel$().getSelectionModel$());
}, 1);

Clazz.newMeth(C$, 'rebuildTable$', function () {
this.setTainted$();
this.currentRowMin=-1;
this.setHTMLElement$();
p$2.rebuildHeader.apply(this, []);
});

Clazz.newMeth(C$, 'rebuildHeader', function () {
var ui=p$2.getHeaderUI.apply(this, []);
ui.setTainted$();
ui.setHTMLElement$();
this.table.getTableHeader$().repaint$();
}, p$2);

Clazz.newMeth(C$, 'getHeaderUI', function () {
return this.table.getTableHeader$().getUI$();
}, p$2);
;
(function(){var C$=Clazz.newClass(P$.JSTableUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dx=0;
this.dy=0;
this.extend=false;
this.inSelection=false;
this.forwards=false;
this.vertically=false;
this.toLimit=false;
this.leadRow=0;
this.leadColumn=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$Z$Z', function (name, dx, dy, extend, inSelection) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
if (inSelection) {
this.inSelection=true;
dx=C$.sign$I(dx);
dy=C$.sign$I(dy);
Clazz.assert(C$, this, function(){return (dx == 0 || dy == 0 ) && !(dx == 0 && dy == 0 ) });
}this.dx=dx;
this.dy=dy;
this.extend=extend;
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z$Z$Z', function (name, extend, forwards, vertically, toLimit) {
C$.c$$S$I$I$Z$Z.apply(this, [name, 0, 0, extend, false]);
this.forwards=forwards;
this.vertically=vertically;
this.toLimit=toLimit;
}, 1);

Clazz.newMeth(C$, 'clipToRange$I$I$I', function (i, a, b) {
return Math.min(Math.max(i, a), b - 1);
}, 1);

Clazz.newMeth(C$, 'moveWithinTableRange$javax_swing_JTable$I$I', function (table, dx, dy) {
this.leadRow=C$.clipToRange$I$I$I(this.leadRow + dy, 0, table.getRowCount$());
this.leadColumn=C$.clipToRange$I$I$I(this.leadColumn + dx, 0, table.getColumnCount$());
}, p$1);

Clazz.newMeth(C$, 'sign$I', function (num) {
return (num < 0) ? -1 : ((num == 0) ? 0 : 1);
}, 1);

Clazz.newMeth(C$, 'moveWithinSelectedRange$javax_swing_JTable$I$I$javax_swing_ListSelectionModel$javax_swing_ListSelectionModel', function (table, dx, dy, rsm, csm) {
var totalCount;
var minX;
var maxX;
var minY;
var maxY;
var rs=table.getRowSelectionAllowed$();
var cs=table.getColumnSelectionAllowed$();
if (rs && cs ) {
totalCount=table.getSelectedRowCount$() * table.getSelectedColumnCount$();
minX=csm.getMinSelectionIndex$();
maxX=csm.getMaxSelectionIndex$();
minY=rsm.getMinSelectionIndex$();
maxY=rsm.getMaxSelectionIndex$();
} else if (rs) {
totalCount=table.getSelectedRowCount$();
minX=0;
maxX=table.getColumnCount$() - 1;
minY=rsm.getMinSelectionIndex$();
maxY=rsm.getMaxSelectionIndex$();
} else if (cs) {
totalCount=table.getSelectedColumnCount$();
minX=csm.getMinSelectionIndex$();
maxX=csm.getMaxSelectionIndex$();
minY=0;
maxY=table.getRowCount$() - 1;
} else {
totalCount=0;
minX=maxX=minY=maxY=0;
}var stayInSelection;
if (totalCount == 0 || (totalCount == 1 && table.isCellSelected$I$I(this.leadRow, this.leadColumn) ) ) {
stayInSelection=false;
maxX=table.getColumnCount$() - 1;
maxY=table.getRowCount$() - 1;
minX=Math.min(0, maxX);
minY=Math.min(0, maxY);
} else {
stayInSelection=true;
}if (dy == 1 && this.leadColumn == -1 ) {
this.leadColumn=minX;
this.leadRow=-1;
} else if (dx == 1 && this.leadRow == -1 ) {
this.leadRow=minY;
this.leadColumn=-1;
} else if (dy == -1 && this.leadColumn == -1 ) {
this.leadColumn=maxX;
this.leadRow=maxY + 1;
} else if (dx == -1 && this.leadRow == -1 ) {
this.leadRow=maxY;
this.leadColumn=maxX + 1;
}this.leadRow=Math.min(Math.max(this.leadRow, minY - 1), maxY + 1);
this.leadColumn=Math.min(Math.max(this.leadColumn, minX - 1), maxX + 1);
do {
p$1.calcNextPos$I$I$I$I$I$I.apply(this, [dx, minX, maxX, dy, minY, maxY]);
} while (stayInSelection && !table.isCellSelected$I$I(this.leadRow, this.leadColumn) );
return stayInSelection;
}, p$1);

Clazz.newMeth(C$, 'calcNextPos$I$I$I$I$I$I', function (dx, minX, maxX, dy, minY, maxY) {
if (dx != 0) {
this.leadColumn+=dx;
if (this.leadColumn > maxX) {
this.leadColumn=minX;
this.leadRow++;
if (this.leadRow > maxY) {
this.leadRow=minY;
}} else if (this.leadColumn < minX) {
this.leadColumn=maxX;
this.leadRow--;
if (this.leadRow < minY) {
this.leadRow=maxY;
}}} else {
this.leadRow+=dy;
if (this.leadRow > maxY) {
this.leadRow=minY;
this.leadColumn++;
if (this.leadColumn > maxX) {
this.leadColumn=minX;
}} else if (this.leadRow < minY) {
this.leadRow=maxY;
this.leadColumn--;
if (this.leadColumn < minX) {
this.leadColumn=maxX;
}}}}, p$1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var key=this.getName$();
var table=e.getSource$();
var rsm=table.getSelectionModel$();
this.leadRow=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, true, rsm);
var csm=table.getColumnModel$().getSelectionModel$();
this.leadColumn=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, false, csm);
if (key == "scrollLeftChangeSelection" || key == "scrollLeftExtendSelection"  || key == "scrollRightChangeSelection"  || key == "scrollRightExtendSelection"  || key == "scrollUpChangeSelection"  || key == "scrollUpExtendSelection"  || key == "scrollDownChangeSelection"  || key == "scrollDownExtendSelection"  || key == "selectFirstColumn"  || key == "selectFirstColumnExtendSelection"  || key == "selectFirstRow"  || key == "selectFirstRowExtendSelection"  || key == "selectLastColumn"  || key == "selectLastColumnExtendSelection"  || key == "selectLastRow"  || key == "selectLastRowExtendSelection" ) {
if (this.toLimit) {
if (this.vertically) {
var rowCount=table.getRowCount$();
this.dx=0;
this.dy=this.forwards ? rowCount : -rowCount;
} else {
var colCount=table.getColumnCount$();
this.dx=this.forwards ? colCount : -colCount;
this.dy=0;
}} else {
if (!(Clazz.instanceOf(table.getParent$().getParent$(), "javax.swing.JScrollPane"))) {
return;
}var delta=table.getParent$().getSize$();
if (this.vertically) {
table._getCellRect$I$I$Z$java_awt_Rectangle(this.leadRow, 0, true, $I$(1).tmpRect);
if (this.forwards) {
$I$(1).tmpRect.y+=Math.max(delta.height, $I$(1).tmpRect.height);
} else {
$I$(1).tmpRect.y-=delta.height;
}this.dx=0;
var newRow=table.rowAtPoint$java_awt_Point($I$(1).tmpRect.getLocation$());
if (newRow == -1 && this.forwards ) {
newRow=table.getRowCount$();
}this.dy=newRow - this.leadRow;
} else {
table._getCellRect$I$I$Z$java_awt_Rectangle(0, this.leadColumn, true, $I$(1).tmpRect);
if (this.forwards) {
$I$(1).tmpRect.x+=Math.max(delta.width, $I$(1).tmpRect.width);
} else {
$I$(1).tmpRect.x-=delta.width;
}var newColumn=table.columnAtPoint$java_awt_Point($I$(1).tmpRect.getLocation$());
if (newColumn == -1) {
var ltr=table.getComponentOrientation$().isLeftToRight$();
newColumn=this.forwards ? (ltr ? table.getColumnCount$() : 0) : (ltr ? 0 : table.getColumnCount$());
}this.dx=newColumn - this.leadColumn;
this.dy=0;
}}}if (key == "selectNextRow" || key == "selectNextRowCell"  || key == "selectNextRowExtendSelection"  || key == "selectNextRowChangeLead"  || key == "selectNextColumn"  || key == "selectNextColumnCell"  || key == "selectNextColumnExtendSelection"  || key == "selectNextColumnChangeLead"  || key == "selectPreviousRow"  || key == "selectPreviousRowCell"  || key == "selectPreviousRowExtendSelection"  || key == "selectPreviousRowChangeLead"  || key == "selectPreviousColumn"  || key == "selectPreviousColumnCell"  || key == "selectPreviousColumnExtendSelection"  || key == "selectPreviousColumnChangeLead"  || key == "scrollLeftChangeSelection"  || key == "scrollLeftExtendSelection"  || key == "scrollRightChangeSelection"  || key == "scrollRightExtendSelection"  || key == "scrollUpChangeSelection"  || key == "scrollUpExtendSelection"  || key == "scrollDownChangeSelection"  || key == "scrollDownExtendSelection"  || key == "selectFirstColumn"  || key == "selectFirstColumnExtendSelection"  || key == "selectFirstRow"  || key == "selectFirstRowExtendSelection"  || key == "selectLastColumn"  || key == "selectLastColumnExtendSelection"  || key == "selectLastRow"  || key == "selectLastRowExtendSelection" ) {
if (table.isEditing$() && !table.getCellEditor$().stopCellEditing$() ) {
return;
}var changeLead=false;
if (key == "selectNextRowChangeLead" || key == "selectPreviousRowChangeLead" ) {
changeLead=(rsm.getSelectionMode$() == 2);
} else if (key == "selectNextColumnChangeLead" || key == "selectPreviousColumnChangeLead" ) {
changeLead=(csm.getSelectionMode$() == 2);
}if (changeLead) {
p$1.moveWithinTableRange$javax_swing_JTable$I$I.apply(this, [table, this.dx, this.dy]);
if (this.dy != 0) {
(rsm).moveLeadSelectionIndex$I(this.leadRow);
if (P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, false, csm) == -1 && table.getColumnCount$() > 0 ) {
(csm).moveLeadSelectionIndex$I(0);
}} else {
(csm).moveLeadSelectionIndex$I(this.leadColumn);
if (P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, true, rsm) == -1 && table.getRowCount$() > 0 ) {
(rsm).moveLeadSelectionIndex$I(0);
}}table._getCellRect$I$I$Z$java_awt_Rectangle(this.leadRow, this.leadColumn, false, $I$(1).tmpRect);
table.scrollRectToVisible$java_awt_Rectangle($I$(1).tmpRect);
} else if (!this.inSelection) {
p$1.moveWithinTableRange$javax_swing_JTable$I$I.apply(this, [table, this.dx, this.dy]);
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, this.extend);
} else {
if (table.getRowCount$() <= 0 || table.getColumnCount$() <= 0 ) {
return;
}if (p$1.moveWithinSelectedRange$javax_swing_JTable$I$I$javax_swing_ListSelectionModel$javax_swing_ListSelectionModel.apply(this, [table, this.dx, this.dy, rsm, csm])) {
if (rsm.isSelectedIndex$I(this.leadRow)) {
rsm.addSelectionInterval$I$I(this.leadRow, this.leadRow);
} else {
rsm.removeSelectionInterval$I$I(this.leadRow, this.leadRow);
}if (csm.isSelectedIndex$I(this.leadColumn)) {
csm.addSelectionInterval$I$I(this.leadColumn, this.leadColumn);
} else {
csm.removeSelectionInterval$I$I(this.leadColumn, this.leadColumn);
}table._getCellRect$I$I$Z$java_awt_Rectangle(this.leadRow, this.leadColumn, false, $I$(1).cellRect);
if ($I$(1).cellRect != null ) {
table.scrollRectToVisible$java_awt_Rectangle($I$(1).cellRect);
}} else {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, false);
}}} else if (key == "cancel") {
table.removeEditor$();
} else if (key == "selectAll") {
table.selectAll$();
} else if (key == "clearSelection") {
table.clearSelection$();
} else if (key == "startEditing") {
if (!table.hasFocus$()) {
var cellEditor=table.getCellEditor$();
if (cellEditor != null  && !cellEditor.stopCellEditing$() ) {
return;
}table.requestFocus$();
return;
}table.editCellAt$I$I$java_util_EventObject(this.leadRow, this.leadColumn, e);
var editorComp=table.getEditorComponent$();
if (editorComp != null ) {
editorComp.requestFocus$();
}} else if (key == "addToSelection") {
if (!table.isCellSelected$I$I(this.leadRow, this.leadColumn)) {
var oldAnchorRow=rsm.getAnchorSelectionIndex$();
var oldAnchorColumn=csm.getAnchorSelectionIndex$();
rsm.setValueIsAdjusting$Z(true);
csm.setValueIsAdjusting$Z(true);
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, true, false);
rsm.setAnchorSelectionIndex$I(oldAnchorRow);
csm.setAnchorSelectionIndex$I(oldAnchorColumn);
rsm.setValueIsAdjusting$Z(false);
csm.setValueIsAdjusting$Z(false);
}} else if (key == "toggleAndAnchor") {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, true, false);
} else if (key == "extendTo") {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, true);
} else if (key == "moveSelectionTo") {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, false);
} else if (key == "focusHeader") {
var th=table.getTableHeader$();
if (th != null ) {
var col=table.getSelectedColumn$();
if (col >= 0) {
var thUI=th.getUI$();
thUI.selectColumn$I(col);
}th.requestFocusInWindow$();
}}});

Clazz.newMeth(C$, 'isEnabled$O', function (sender) {
var key=this.getName$();
if (Clazz.instanceOf(sender, "javax.swing.JTable") && $I$(2).TRUE.equals$O((sender).getClientProperty$O("Table.isFileList")) ) {
if (key == "selectNextColumn" || key == "selectNextColumnCell"  || key == "selectNextColumnExtendSelection"  || key == "selectNextColumnChangeLead"  || key == "selectPreviousColumn"  || key == "selectPreviousColumnCell"  || key == "selectPreviousColumnExtendSelection"  || key == "selectPreviousColumnChangeLead"  || key == "scrollLeftChangeSelection"  || key == "scrollLeftExtendSelection"  || key == "scrollRightChangeSelection"  || key == "scrollRightExtendSelection"  || key == "selectFirstColumn"  || key == "selectFirstColumnExtendSelection"  || key == "selectLastColumn"  || key == "selectLastColumnExtendSelection"  || key == "selectNextRowCell"  || key == "selectPreviousRowCell" ) {
return false;
}}if (key == "cancel" && Clazz.instanceOf(sender, "javax.swing.JTable") ) {
return (sender).isEditing$();
} else if (key == "selectNextRowChangeLead" || key == "selectPreviousRowChangeLead" ) {
return sender != null  && Clazz.instanceOf((sender).getSelectionModel$(), "javax.swing.DefaultListSelectionModel") ;
} else if (key == "selectNextColumnChangeLead" || key == "selectPreviousColumnChangeLead" ) {
return sender != null  && Clazz.instanceOf((sender).getColumnModel$().getSelectionModel$(), "javax.swing.DefaultListSelectionModel") ;
} else if (key == "addToSelection" && Clazz.instanceOf(sender, "javax.swing.JTable") ) {
var table=sender;
var leadRow=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z(table, true);
var leadCol=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z(table, false);
return !(table.isEditing$() || table.isCellSelected$I$I(leadRow, leadCol) );
} else if (key == "focusHeader" && Clazz.instanceOf(sender, "javax.swing.JTable") ) {
var table=sender;
return table.getTableHeader$() != null ;
}return true;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSTableUI, "KeyHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.KeyListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).keyPressed$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).keyReleased$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).keyTyped$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSTableUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSTableUI, "MouseInputHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.MouseInputListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mouseClicked$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mouseReleased$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mouseEntered$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mouseExited$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
p$2.getHandler.apply(this.this$0, []).mouseDragged$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSTableUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.FocusListener', 'javax.swing.event.MouseInputListener', 'java.beans.PropertyChangeListener', 'javax.swing.event.ListSelectionListener', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dispatchComponent=null;
this.pressedRow=0;
this.pressedCol=0;
this.pressedEvent=null;
this.dragPressDidSelection=false;
this.dragStarted=false;
this.shouldStartTimer=false;
this.outsidePrefSize=false;
this.timer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.timer=null;
}, 1);

Clazz.newMeth(C$, 'repaintLeadCell', function () {
var lr=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z(this.this$0.table, true);
var lc=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z(this.this$0.table, false);
if (lr < 0 || lc < 0 ) {
return;
}this.this$0.repaintCell$I$I.apply(this.this$0, [lr, lc]);
}, p$3);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
p$3.repaintLeadCell.apply(this, []);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
p$3.repaintLeadCell.apply(this, []);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
var keyStroke=$I$(3).getKeyStroke$I$I(e.getKeyChar$().$c(), e.getModifiers$());
var map=this.this$0.table.getInputMap$I(0);
if (map != null  && map.get$javax_swing_KeyStroke(keyStroke) != null  ) {
return;
}map=this.this$0.table.getInputMap$I(1);
if (map != null  && map.get$javax_swing_KeyStroke(keyStroke) != null  ) {
return;
}keyStroke=$I$(3).getKeyStrokeForEvent$java_awt_event_KeyEvent(e);
if (e.getKeyChar$() == "\r") {
return;
}var leadRow=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z(this.this$0.table, true);
var leadColumn=P$.JSTableUI.getAdjustedLead$javax_swing_JTable$Z(this.this$0.table, false);
if (leadRow != -1 && leadColumn != -1  && !this.this$0.table.isEditing$() ) {
if (!this.this$0.table.editCellAt$I$I(leadRow, leadColumn)) {
return;
}}var editorComp=this.this$0.table.getEditorComponent$();
if (this.this$0.table.isEditing$() && editorComp != null  ) {
if (Clazz.instanceOf(editorComp, "javax.swing.JComponent")) {
var component=editorComp;
map=component.getInputMap$I(0);
var binding=(map != null ) ? map.get$javax_swing_KeyStroke(keyStroke) : null;
if (binding == null ) {
map=component.getInputMap$I(1);
binding=(map != null ) ? map.get$javax_swing_KeyStroke(keyStroke) : null;
}if (binding != null ) {
var am=component.getActionMap$();
var action=(am != null ) ? am.get$O(binding) : null;
if (action != null  && $I$(4).notifyAction$javax_swing_Action$javax_swing_KeyStroke$java_awt_event_KeyEvent$O$I(action, keyStroke, e, component, e.getModifiers$()) ) {
e.consume$();
}}}}});

Clazz.newMeth(C$, 'repostEvent$java_awt_event_MouseEvent', function (e) {
if (this.dispatchComponent == null  || !this.this$0.table.isEditing$() ) {
return false;
}var e2=$I$(4).convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component(this.this$0.table, e, this.dispatchComponent);
this.dispatchComponent.dispatchEvent$java_awt_AWTEvent(e2);
return true;
}, p$3);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'setDispatchComponent$java_awt_event_MouseEvent', function (e) {
var editorComponent=this.this$0.table.getEditorComponent$();
var p=e.getPoint$();
var p2=$I$(4).convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(this.this$0.table, p, editorComponent);
this.dispatchComponent=$I$(4).getDeepestComponentAt$java_awt_Component$I$I(editorComponent, p2.x, p2.y);
}, p$3);

Clazz.newMeth(C$, 'setValueIsAdjusting$Z', function (flag) {
this.this$0.table.getSelectionModel$().setValueIsAdjusting$Z(flag);
this.this$0.table.getColumnModel$().getSelectionModel$().setValueIsAdjusting$Z(flag);
}, p$3);

Clazz.newMeth(C$, 'canStartDrag', function () {
if (this.pressedRow == -1 || this.pressedCol == -1 ) {
return false;
}if (this.this$0.isFileList) {
return !this.outsidePrefSize;
}if ((this.this$0.table.getSelectionModel$().getSelectionMode$() == 0) && (this.this$0.table.getColumnModel$().getSelectionModel$().getSelectionMode$() == 0) ) {
return true;
}return this.this$0.table.isCellSelected$I$I(this.pressedRow, this.pressedCol);
}, p$3);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if ($I$(5).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.this$0.table)) {
return;
}if (this.this$0.table.isEditing$()) {
if (!this.this$0.table.getCellEditor$().stopCellEditing$()) {
var editorComponent=this.this$0.table.getEditorComponent$();
if (editorComponent != null  && !editorComponent.hasFocus$() ) {
$I$(5).compositeRequestFocus$java_awt_Component(editorComponent);
}return;
}}var p=e.getPoint$();
this.pressedRow=this.this$0.table.rowAtPoint$java_awt_Point(p);
this.pressedCol=this.this$0.table.columnAtPoint$java_awt_Point(p);
this.outsidePrefSize=p$2.pointOutsidePrefSize$I$I$java_awt_Point.apply(this.this$0, [this.pressedRow, this.pressedCol, p]);
if (this.this$0.isFileList) {
this.shouldStartTimer=this.this$0.table.isCellSelected$I$I(this.pressedRow, this.pressedCol) && !e.isShiftDown$() && !e.isControlDown$() && !this.outsidePrefSize  ;
}if (this.this$0.table.getDragEnabled$()) {
p$3.mousePressedDND$java_awt_event_MouseEvent.apply(this, [e]);
} else {
$I$(5).adjustFocus$javax_swing_JComponent(this.this$0.table);
if (!this.this$0.isFileList) {
p$3.setValueIsAdjusting$Z.apply(this, [true]);
}p$3.adjustSelection$java_awt_event_MouseEvent.apply(this, [e]);
}});

Clazz.newMeth(C$, 'mousePressedDND$java_awt_event_MouseEvent', function (e) {
this.pressedEvent=e;
var grabFocus=true;
this.dragStarted=false;
if (p$3.canStartDrag.apply(this, [])) {
this.dragPressDidSelection=false;
if (e.isControlDown$() && this.this$0.isFileList ) {
return;
} else if (!e.isShiftDown$() && this.this$0.table.isCellSelected$I$I(this.pressedRow, this.pressedCol) ) {
this.this$0.table.getSelectionModel$().addSelectionInterval$I$I(this.pressedRow, this.pressedRow);
this.this$0.table.getColumnModel$().getSelectionModel$().addSelectionInterval$I$I(this.pressedCol, this.pressedCol);
return;
}this.dragPressDidSelection=true;
grabFocus=false;
} else if (!this.this$0.isFileList) {
p$3.setValueIsAdjusting$Z.apply(this, [true]);
}if (grabFocus) {
$I$(5).adjustFocus$javax_swing_JComponent(this.this$0.table);
}p$3.adjustSelection$java_awt_event_MouseEvent.apply(this, [e]);
}, p$3);

Clazz.newMeth(C$, 'adjustSelection$java_awt_event_MouseEvent', function (e) {
if (this.outsidePrefSize) {
if (e.getID$() == 501 && (!e.isShiftDown$() || this.this$0.table.getSelectionModel$().getSelectionMode$() == 0 ) ) {
this.this$0.table.clearSelection$();
var tce=this.this$0.table.getCellEditor$();
if (tce != null ) {
tce.stopCellEditing$();
}}return;
}if ((this.pressedCol == -1) || (this.pressedRow == -1) ) {
return;
}var dragEnabled=this.this$0.table.getDragEnabled$();
if (!dragEnabled && !this.this$0.isFileList && this.this$0.table.editCellAt$I$I$java_util_EventObject(this.pressedRow, this.pressedCol, e)  ) {
p$3.setDispatchComponent$java_awt_event_MouseEvent.apply(this, [e]);
p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [e]);
}var editor=this.this$0.table.getCellEditor$();
if (dragEnabled || editor == null   || editor.shouldSelectCell$java_util_EventObject(e) ) {
this.this$0.table.changeSelection$I$I$Z$Z(this.pressedRow, this.pressedCol, e.isControlDown$(), e.isShiftDown$());
}}, p$3);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_ListSelectionEvent','valueChanged$'], function (e) {
if (this.timer != null ) {
this.timer.stop$();
this.timer=null;
}});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (ae) {
this.this$0.table.editCellAt$I$I$java_util_EventObject(this.pressedRow, this.pressedCol, null);
var editorComponent=this.this$0.table.getEditorComponent$();
if (editorComponent != null  && !editorComponent.hasFocus$() ) {
$I$(5).compositeRequestFocus$java_awt_Component(editorComponent);
}return;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
this.this$0.dragging=false;
if ($I$(5).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.this$0.table)) {
return;
}if (this.this$0.table.getDragEnabled$()) {
p$3.mouseReleasedDND$java_awt_event_MouseEvent.apply(this, [e]);
} else {
}this.pressedEvent=null;
p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [e]);
this.dispatchComponent=null;
p$3.setValueIsAdjusting$Z.apply(this, [false]);
p$2.notifyEntry$Z.apply(this.this$0, [true]);
});

Clazz.newMeth(C$, 'mouseReleasedDND$java_awt_event_MouseEvent', function (e) {
var me=e;
if (me != null ) {
$I$(5).adjustFocus$javax_swing_JComponent(this.this$0.table);
if (!this.dragPressDidSelection) {
p$3.adjustSelection$java_awt_event_MouseEvent.apply(this, [me]);
}}if (!this.dragStarted) {
var p=e.getPoint$();
if (this.pressedEvent != null  && this.this$0.table.rowAtPoint$java_awt_Point(p) == this.pressedRow  && this.this$0.table.columnAtPoint$java_awt_Point(p) == this.pressedCol  && this.this$0.table.editCellAt$I$I$java_util_EventObject(this.pressedRow, this.pressedCol, this.pressedEvent) ) {
p$3.setDispatchComponent$java_awt_event_MouseEvent.apply(this, [this.pressedEvent]);
p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [this.pressedEvent]);
var ce=this.this$0.table.getCellEditor$();
if (ce != null ) {
ce.shouldSelectCell$java_util_EventObject(this.pressedEvent);
}}}this.this$0.rebuildTable$.apply(this.this$0, []);
}, p$3);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'dragStarting$java_awt_event_MouseEvent', function (me) {
this.dragStarted=true;
if (me.isControlDown$() && this.this$0.isFileList ) {
this.this$0.table.getSelectionModel$().addSelectionInterval$I$I(this.pressedRow, this.pressedRow);
this.this$0.table.getColumnModel$().getSelectionModel$().addSelectionInterval$I$I(this.pressedCol, this.pressedCol);
}this.pressedEvent=null;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
if ($I$(5).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.this$0.table)) {
return;
}this.this$0.dragging=true;
if (this.this$0.table.getDragEnabled$()) {
return;
}p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [e]);
if (this.this$0.isFileList || this.this$0.table.isEditing$() ) {
return;
}var p=e.getPoint$();
var row=this.this$0.table.rowAtPoint$java_awt_Point(p);
var column=this.this$0.table.columnAtPoint$java_awt_Point(p);
if ((column == -1) || (row == -1) ) {
return;
}this.this$0.table.changeSelection$I$I$Z$Z(row, column, e.isControlDown$(), true);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (event) {
var changeName=event.getPropertyName$();
if ("tableCellEditor" == changeName) {
this.this$0.prepareDOMEditor$Z$I$I.apply(this.this$0, [event.getNewValue$() != null , this.pressedRow, this.pressedCol]);
} else if ("componentOrientation" == changeName) {
var inputMap=this.this$0.getInputMap$I.apply(this.this$0, [1]);
$I$(4).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.this$0.table, 1, inputMap);
var header=this.this$0.table.getTableHeader$();
if (header != null ) {
header.setComponentOrientation$java_awt_ComponentOrientation(event.getNewValue$());
}} else if ("model" == changeName) {
} else if ("dropLocation" == changeName) {
this.this$0.rebuildTable$.apply(this.this$0, []);
} else if ("Table.isFileList" == changeName) {
this.this$0.isFileList=$I$(2).TRUE.equals$O(this.this$0.table.getClientProperty$O("Table.isFileList"));
this.this$0.table.revalidate$();
this.this$0.table.repaint$();
if (this.this$0.isFileList) {
this.this$0.table.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.this$0, []));
} else {
this.this$0.table.getSelectionModel$().removeListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.this$0, []));
this.timer=null;
}} else if ("selectionModel" == changeName) {
if (this.this$0.isFileList) {
var old=event.getOldValue$();
old.removeListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.this$0, []));
this.this$0.table.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.this$0, []));
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
