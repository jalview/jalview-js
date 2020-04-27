(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','swingjs.JSKeyEvent','swingjs.JSMouse']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSComboPopupList", null, 'javax.swing.JList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cbui','swingjs.plaf.JSComboBoxUI','j2scb','swingjs.api.js.JQueryObject.J2SCB']]]

Clazz.newMeth(C$, 'c$$swingjs_plaf_JSComboBoxUI', function (ui) {
;C$.superclazz.c$$javax_swing_ListModel.apply(this,[ui.comboBox.getModel$()]);C$.$init$.apply(this);
this.cbui=ui;
}, 1);

Clazz.newMeth(C$, '秘processUIEvent$java_awt_event_MouseEvent', function (e) {
switch (e.getID$()) {
case 503:
case 504:
case 505:
var i=p$1.getJ2SCBInt$S.apply(this, ["hoveredIndex"]);
if (i >= 0) this.cbui.comboBox.getRenderer$().getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this, this.getModel$().getElementAt$I(i), i, true, false);
this.updateZIndex$();
break;
}
return true;
});

Clazz.newMeth(C$, 'getJ2SCBInt$S', function (name) {
if (this.j2scb == null ) return -2147483648;
return $(this.j2scb).data("j2sCB").options[name] ||0;
}, p$1);

Clazz.newMeth(C$, 'createJ2SCB$', function () {
if (this.j2scb != null ) this.j2scb.j2sCB("destroy");
this.j2scb=this.cbui.$$O(this.cbui.domNode);
var me=this;
var fChange=function(){p$1.fChange$O$O$S$O.apply(me,arguments)} ||null;
this.j2scb.j2sCB({change:fChange} ||"");
this.updateCSS$();
this.updateList$();
this.updateSelectedIndex$();
});

Clazz.newMeth(C$, 'setComboVisible$Z', function (b) {
this.setVisible$Z$Z(b, false);
});

Clazz.newMeth(C$, 'setPopupVisible$Z', function (vis) {
this.setVisible$Z$Z(vis, true);
});

Clazz.newMeth(C$, 'setVisible$Z$Z', function (vis, andPopup) {
if (!vis) {
try {
if (this.j2scb != null ) this.j2scb.j2sCB("hidePopup");
} catch (t) {
}
return;
}if (this.j2scb == null ) this.createJ2SCB$();
if (this.cbui.isTainted) this.updateList$();
$I$(1).containerToFront$javax_swing_JComponent(this.cbui.comboBox);
this.updateZIndex$();
if (andPopup) this.j2scb.j2sCB("showPopup");
this.updateSelectedIndex$();
});

Clazz.newMeth(C$, 'updateZIndex$', function () {
this.j2scb.j2sCB("setZIndex", $I$(1).getInheritedZ$javax_swing_JComponent(this.cbui.comboBox) + 1);
this.updateCSS$();
});

Clazz.newMeth(C$, 'updateText$', function () {
});

Clazz.newMeth(C$, 'updateCSS$', function () {
$I$(2).setSize(this.cbui.domNode, this.cbui.width, this.cbui.height);
if (this.j2scb != null ) this.j2scb.j2sCB("updateCSS");
});

Clazz.newMeth(C$, 'updateList$', function () {
if (this.j2scb == null ) return;
var n=this.cbui.comboBox.getItemCount$();
var opts=Clazz.array($I$(2), [n]);
var l=this;
var d=l.getPreferredSize$();
var h=d.height;
var w=d.width;
var ui=l.getUI$();
for (var i=0; i < n; i++) {
var j=this.cbui.comboBox.getRenderer$().getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this, this.getModel$().getElementAt$I(i), i, true, false);
j.setSize$I$I(w, ui.getRowHeight$I(i));
opts[i]=j.秘getUI$().getListNode$();
}
this.j2scb.j2sCB("updateList", opts);
this.j2scb.j2sCB("setHeight", (h > 300 ? 300 : 0));
this.updateCSS$();
});

Clazz.newMeth(C$, 'updateSelectedIndex$', function () {
if (this.j2scb != null ) this.j2scb.j2sCB("setSelectedIndex", this.cbui.comboBox.getSelectedIndex$());
});

Clazz.newMeth(C$, 'updateHoverIndex$', function () {
if (this.j2scb == null ) return;
if (!this.cbui.isPopupVisible$javax_swing_JComboBox(this.cbui.comboBox)) this.setPopupVisible$Z(true);
var index=this.getSelectedIndex$();
this.j2scb.j2sCB("hoverOver", index);
this.cbui.comboBox.setSelectedIndex$I(index);
});

Clazz.newMeth(C$, 'updateEnabled$', function () {
if (this.j2scb != null ) this.j2scb.j2sCB(this.cbui.comboBox.isEnabled$() ? "enable" : "disable");
});

Clazz.newMeth(C$, 'updateState$java_util_EventObject$S', function (e, name) {
if (this.j2scb == null ) return;
if (name == null ) {
this.updateSelectedIndex$();
}});

Clazz.newMeth(C$, 'show$', function () {
this.setPopupVisible$Z(true);
});

Clazz.newMeth(C$, 'hide$', function () {
this.hidePopup$();
});

Clazz.newMeth(C$, 'hidePopup$', function () {
this.setPopupVisible$Z(false);
});

Clazz.newMeth(C$, 'isVisible$', function () {
if (this.j2scb == null ) return false;
var ret=this.j2scb.j2sCB("popupVisible");
return !!ret ||false;
});

Clazz.newMeth(C$, 'getList$', function () {
return this;
});

Clazz.newMeth(C$, 'getMouseListener$', function () {
return null;
});

Clazz.newMeth(C$, 'getMouseMotionListener$', function () {
return null;
});

Clazz.newMeth(C$, 'getKeyListener$', function () {
return null;
});

Clazz.newMeth(C$, 'uninstallingUI$', function () {
if (this.j2scb != null ) this.j2scb.j2sCB("destroy");
this.j2scb=null;
});

Clazz.newMeth(C$, 'fChange$O$O$S$O', function (event, cb, type, data) {
var i=data ||0;
switch (type) {
case "refreshed":
return;
case "destroyed":
this.j2scb=null;
return;
case "opening":
this.updateZIndex$();
return;
case "keyevent":
this.cbui.comboBox.dispatchEvent$java_awt_AWTEvent($I$(3).newJSKeyEvent$javax_swing_JComponent$O$I$Z(this.cbui.comboBox, event, 0, true));
return;
case "selected":
this.cbui.comboBox.秘setTrigger$Z(true);
this.cbui.comboBox.setSelectedIndex$I(i);
this.cbui.comboBox.秘setTrigger$Z(false);
return;
case "mouseover":
return;
case "mouse":
var jqEvent=event.originalEvent ||null;
$I$(4).retargetMouseEvent$O$swingjs_api_js_DOMNode$javax_swing_JComponent$javax_swing_JComponent$I(jqEvent, null, this.cbui.comboBox, this, 0);
return;
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
