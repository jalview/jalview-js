(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CellHolder", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRowColumnID$swingjs_plaf_JSComponentUI$I$I', function (holder, row, col) {
return holder.id + "_tab" + (row >= 0 ? "_row" + row : "") + "_col" + col ;
}, 1);

Clazz.newMeth(C$, 'createCellOuterNode$swingjs_plaf_JSComponentUI$I$I', function (tableOrHeader, row, col) {
var rcID=C$.getRowColumnID$swingjs_plaf_JSComponentUI$I$I(tableOrHeader, row, col);
var td=C$.findCellNode$swingjs_plaf_JSComponentUI$S$I$I(null, rcID, row, col);
if (td == null ) {
td=$I$(1).createElement("div", rcID);
$I$(1).setStyles(td, ["overflow", "hidden", "background", "transparent"]);
tableOrHeader.$$O(td).addClass("swing-td");
$I$(1).setAttrs(td, ["data-table-ui", tableOrHeader, "data-row", "" + row, "data-col", "" + col]);
$I$(1).setStyles(td, ["position", "absolute", "overflow", "hidden", "background", "transparent"]);
}return td;
}, 1);

Clazz.newMeth(C$, 'findCellNode$swingjs_plaf_JSComponentUI$S$I$I', function (tableOrHolder, rcID, row, col) {
if (tableOrHolder != null ) rcID=C$.getRowColumnID$swingjs_plaf_JSComponentUI$I$I(tableOrHolder, row, col);
return $I$(1).getElement(rcID);
}, 1);

Clazz.newMeth(C$, 'updateCellNode$swingjs_api_js_DOMNode$java_awt_JSComponent$I$I', function (td, c, width, height) {
var ui;
if (c == null  || (ui=c.getUI$()).isNull ) return;
if (width > 0) {
c.setSize$I$I(width, height);
} else {
width=$I$(1).getWidth(td);
height=$I$(1).getHeight(td);
}ui.tableID=$I$(1).getAttr(td, "id");
ui.setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(c, width, height, null);
ui.outerNode=null;
ui.reInit$();
ui.updateDOMNode$();
ui.saveCellNodes$swingjs_api_js_DOMNode(td);
}, 1);

Clazz.newMeth(C$, 'restoreUI$swingjs_plaf_JSComponentUI$swingjs_api_js_DOMNode$I$I$I$I', function (ui, td, row, col, w, h) {
ui.restoreCellNodes$swingjs_api_js_DOMNode(td);
}, 1);

Clazz.newMeth(C$, 'setJ2SRendererComponent$javax_swing_JComponent', function (comp) {
(comp.getUI$()).setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(comp, 0, 0, null);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
