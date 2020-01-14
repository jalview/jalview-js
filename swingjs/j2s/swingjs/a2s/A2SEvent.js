(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Event','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "A2SEvent", null, null, 'Runnable');
C$.actionKeyCodes=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.actionKeyCodes=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [36, 1000]), Clazz.array(Integer.TYPE, -1, [35, 1001]), Clazz.array(Integer.TYPE, -1, [33, 1002]), Clazz.array(Integer.TYPE, -1, [34, 1003]), Clazz.array(Integer.TYPE, -1, [38, 1004]), Clazz.array(Integer.TYPE, -1, [40, 1005]), Clazz.array(Integer.TYPE, -1, [37, 1006]), Clazz.array(Integer.TYPE, -1, [39, 1007]), Clazz.array(Integer.TYPE, -1, [112, 1008]), Clazz.array(Integer.TYPE, -1, [113, 1009]), Clazz.array(Integer.TYPE, -1, [114, 1010]), Clazz.array(Integer.TYPE, -1, [115, 1011]), Clazz.array(Integer.TYPE, -1, [116, 1012]), Clazz.array(Integer.TYPE, -1, [117, 1013]), Clazz.array(Integer.TYPE, -1, [118, 1014]), Clazz.array(Integer.TYPE, -1, [119, 1015]), Clazz.array(Integer.TYPE, -1, [120, 1016]), Clazz.array(Integer.TYPE, -1, [121, 1017]), Clazz.array(Integer.TYPE, -1, [122, 1018]), Clazz.array(Integer.TYPE, -1, [123, 1019]), Clazz.array(Integer.TYPE, -1, [154, 1020]), Clazz.array(Integer.TYPE, -1, [145, 1021]), Clazz.array(Integer.TYPE, -1, [20, 1022]), Clazz.array(Integer.TYPE, -1, [144, 1023]), Clazz.array(Integer.TYPE, -1, [19, 1024]), Clazz.array(Integer.TYPE, -1, [155, 1025])]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.e=null;
this.target=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent', function (e) {
C$.$init$.apply(this);
this.target=e.getSource$();
this.e=C$.convertToOld$java_awt_AWTEvent(e);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var e=this.e;
var target=this.target;
if (Clazz.instanceOf(target, "swingjs.a2s.A2SContainer")) {
var parent=(target).getMouseEventTarget$I$I$Z$java_awt_Container_EventTargetFilter$Z(e.x, e.y, true, null, false);
if (parent != null ) target=parent;
while (parent != null  && parent !== this.target  ){
e.x-=parent.getX$();
e.y-=parent.getY$();
parent=parent.getParent$();
}
}
setTimeout(function() {
target.postEvent$java_awt_Event(e);

});
});

Clazz.newMeth(C$, 'getOldEventKey$java_awt_event_KeyEvent', function (e) {
var keyCode=e.getKeyCode$();
for (var i=0; i < C$.actionKeyCodes.length; i++) {
if (C$.actionKeyCodes[i][0] == keyCode) {
return C$.actionKeyCodes[i][1];
}}
return e.getKeyChar$().$c();
}, 1);

Clazz.newMeth(C$, 'convertToOld$java_awt_AWTEvent', function (e) {
var src=e.getSource$();
var id=e.getID$();
var newid=id;
switch (id) {
case 401:
case 402:
var ke=e;
if (ke.isActionKey$()) {
newid=(id == 401 ? 403 : 404);
}var keyCode=ke.getKeyCode$();
if (keyCode == 16 || keyCode == 17  || keyCode == 18 ) {
return null;
}return Clazz.new_($I$(1).c$$O$J$I$I$I$I$I,[src, ke.getWhen$(), newid, 0, 0, C$.getOldEventKey$java_awt_event_KeyEvent(ke), (ke.getModifiers$() & ~16)]);
case 500:
case 501:
case 502:
case 503:
case 506:
case 504:
case 505:
var me=e;
var olde=Clazz.new_($I$(1).c$$O$J$I$I$I$I$I,[src, me.getWhen$(), newid, me.getX$(), me.getY$(), 0, (me.getModifiers$() & ~16)]);
olde.clickCount=me.getClickCount$();
return olde;
case 1004:
return Clazz.new_($I$(1).c$$O$I$O,[src, 1004, null]);
case 1005:
return Clazz.new_($I$(1).c$$O$I$O,[src, 1005, null]);
case 201:
case 203:
case 204:
return Clazz.new_($I$(1).c$$O$I$O,[src, newid, null]);
case 100:
if (Clazz.instanceOf(src, "swingjs.a2s.Frame") || Clazz.instanceOf(src, "swingjs.a2s.Dialog") ) {
var p=(src).getLocation$();
return Clazz.new_($I$(1).c$$O$J$I$I$I$I$I,[src, 0, 205, p.x, p.y, 0, 0]);
}break;
case 1001:
var ae=e;
var cmd;
if (Clazz.instanceOf(src, "javax.swing.AbstractButton")) {
cmd=(src).getText$();
} else if (Clazz.instanceOf(src, "swingjs.a2s.MenuItem")) {
cmd=(src).getText$();
} else {
cmd=ae.getActionCommand$();
}return Clazz.new_($I$(1).c$$O$J$I$I$I$I$I$O,[src, 0, newid, 0, 0, 0, ae.getModifiers$(), cmd]);
case 701:
var ie=e;
var arg;
if (Clazz.instanceOf(src, "swingjs.a2s.List")) {
newid=(ie.getStateChange$() == 1 ? 701 : 702);
arg=ie.getItem$();
} else if (Clazz.instanceOf(src, "swingjs.a2s.Choice")) {
arg=ie.getItem$();
} else {
newid=1001;
arg=$I$(2).valueOf$Z(ie.getStateChange$() == 1);
}return Clazz.new_($I$(1).c$$O$I$O,[src, newid, arg]);
case 601:
var aje=e;
switch (aje.getAdjustmentType$()) {
case 1:
newid=602;
break;
case 2:
newid=601;
break;
case 4:
newid=604;
break;
case 3:
newid=603;
break;
case 5:
if (aje.getValueIsAdjusting$()) {
newid=605;
} else {
newid=607;
}break;
default:
return null;
}
return Clazz.new_($I$(1).c$$O$I$O,[src, newid, Integer.valueOf$I(aje.getValue$())]);
default:
}
return null;
}, 1);

Clazz.newMeth(C$, 'addListener$java_awt_Component', function (comp) {
var jc=(comp).getTopLevelAncestor$();
if (jc == null  || !(Clazz.instanceOf(jc, "swingjs.a2s.A2SContainer")) ) return;
var top=jc;
var listener=top.getA2SListener$();
if (Clazz.instanceOf(comp, "javax.swing.AbstractButton")) {
if (!C$.isListener$java_util_EventListenerA$java_util_EventListener((comp).getActionListeners$(), listener)) (comp).addActionListener$java_awt_event_ActionListener(listener);
} else if (Clazz.instanceOf(comp, "swingjs.a2s.TextField")) {
if (!C$.isListener$java_util_EventListenerA$java_util_EventListener((comp).getActionListeners$(), listener)) (comp).addActionListener$java_awt_event_ActionListener(listener);
} else if (Clazz.instanceOf(comp, "javax.swing.JComboBox")) {
if (!C$.isListener$java_util_EventListenerA$java_util_EventListener((comp).getActionListeners$(), listener)) (comp).addActionListener$java_awt_event_ActionListener(listener);
if (!C$.isListener$java_util_EventListenerA$java_util_EventListener((comp).getItemListeners$(), listener)) (comp).addItemListener$java_awt_event_ItemListener(listener);
} else if (Clazz.instanceOf(comp, "javax.swing.JScrollBar")) {
if (!C$.isListener$java_util_EventListenerA$java_util_EventListener((comp).getAdjustmentListeners$(), listener)) (comp).addAdjustmentListener$java_awt_event_AdjustmentListener(listener);
}}, 1);

Clazz.newMeth(C$, 'isListener$java_util_EventListenerA$java_util_EventListener', function (listeners, listener) {
if (listener == null ) return true;
for (var i=listeners.length; --i >= 0; ) if (listeners[i] === listener ) return true;

return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
