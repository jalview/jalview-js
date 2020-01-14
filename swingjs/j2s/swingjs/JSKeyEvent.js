(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSToolkit','java.awt.AWTKeyStroke']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSKeyEvent", null, 'java.awt.event.KeyEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'dispatchKeyEvent$I$I$O$J', function (id, modifiers, jqevent, time) {
if (id == 400) {
$I$(1).consumeEvent$O(jqevent);
return false;
}var c=null;
var ui=null;

c = jqevent.target["data-keycomponent"]; ui = c && c.ui;
if (c != null ) {
var e=C$.newJSKeyEvent$javax_swing_JComponent$O$I$Z(c, jqevent, 0, false);
c.dispatchEvent$java_awt_AWTEvent(e);
if (!ui.j2sDoPropagate) $I$(1).consumeEvent$O(e);
if (!e.isConsumed$() && id == 401  && e.getKeyChar$() != "\uffff" ) {
e=C$.newJSKeyEvent$javax_swing_JComponent$O$I$Z(c, jqevent, 400, false);
c.dispatchEvent$java_awt_AWTEvent(e);
if (!ui.j2sDoPropagate) $I$(1).consumeEvent$O(e);
}}return true;
}, 1);

Clazz.newMeth(C$, 'newJSKeyEvent$javax_swing_JComponent$O$I$Z', function (source, jqevent, id, isList) {
var evType=null;
var jskey=null;
var jskeyCode=0;
var jskeyLocation=0;
var ev=jqevent;

evType = ev.type; jskey = ev.key;
jskeyCode = ev.keyCode || ev.which;
jskeyLocation = ev.originalEvent.location || 0;
if (isList && evType == "keypress") ev.originalEvent.preventDefault();
if (id == 0) id=C$.fixEventType$O$I(jqevent, 0);
if (id == 0) return null;
var keyCode=C$.getJavaKeyCode$I$S(jskeyCode, jskey);
var keyChar=C$.getJavaKeyChar$I$S(keyCode, jskey);
return (keyChar == "\uffff" && id == 400  ? null : Clazz.new_(C$.c$$javax_swing_JComponent$O$I$I$C$I,[source, jqevent, id, (id == 400 ? 0 : keyCode), keyChar, (id == 400 ? 0 : jskeyLocation + 1)]));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$O$I$I$C$I', function (source, ev, id, keyCode, keyChar, location) {
C$.superclazz.c$$java_awt_Component$I$J$I$I$C$I.apply(this, [source, id, System.currentTimeMillis$(), 0, keyCode, keyChar, location]);
C$.$init$.apply(this);
var bdata=Clazz.array(Byte.TYPE, [0]);

bdata.jqevent = ev;
this.setBData$BA(bdata);
this.modifiers=C$.getModifiers$O(ev);
}, 1);

Clazz.newMeth(C$, 'getJavaKeyCode$I$S', function (jskeyCode, jskey) {
if (jskeyCode <= 40) {
if (jskeyCode == 13) return 10;
return jskeyCode;
}if (jskey.length$() == 1) {
return (jskeyCode >= 96 && jskeyCode <= 105  ? jskeyCode : 0 + (jskey.toUpperCase$().charCodeAt$I(0)));
}switch (jskeyCode) {
case 91:
return 157;
case 93:
return 525;
case 144:
case 145:
return jskeyCode;
case 244:
return 25;
}
var keyName="VK_" + jskey.toUpperCase$();
try {
return $I$(2).getVKValue$S(keyName);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("JSKeyEvent adding key/keyCode " + keyName + " " + jskeyCode );
$I$(2).addKeyCode$S$I(keyName, jskeyCode);
} else {
throw e;
}
}
return jskeyCode;
}, 1);

Clazz.newMeth(C$, 'getJavaKeyChar$I$S', function (jsKeyCode, jskey) {
if (jskey.length$() == 1) return jskey.charAt$I(0);
switch (jsKeyCode) {
case 13:
jsKeyCode=10;
case 10:
case 8:
case 9:
case 127:
case 27:
return String.fromCharCode(jsKeyCode);
default:
return "\uffff";
}
}, 1);

Clazz.newMeth(C$, 'hasKeyChar$I$S', function (javaKeyCode, jskey) {
switch (javaKeyCode) {
case 10:
case 8:
case 9:
case 127:
case 27:
return true;
default:
return (jskey.length$() == 1);
}
}, 1);

Clazz.newMeth(C$, 'getModifiers$O', function (ev) {
var shift=false;
var ctrl=false;
var meta=false;
var alt=false;
var altGraph=false;

shift = ev.shiftKey;
ctrl = ev.ctrlKey;
alt = ev.altKey;
meta = ev.metaKey;
altGraph = ev.altGraphKey;
return C$.getModifiers$Z$Z$Z$Z$Z(shift, ctrl, alt, meta, altGraph);
}, 1);

Clazz.newMeth(C$, 'getModifiers$Z$Z$Z$Z$Z', function (shift, ctrl, alt, meta, altGraph) {
var modifiers=0;
if (shift) modifiers|=65;
if (ctrl) modifiers|=130;
if (alt) modifiers|=520;
if (meta) modifiers|=260;
if (altGraph) modifiers|=8224;
return modifiers;
}, 1);

Clazz.newMeth(C$, 'fixEventType$O$I', function (jqevent, eventType) {
var evType=jqevent.type ||"";
return (evType == "keydown" ? 401 : evType == "keypress" ? 400 : evType == "keyup" ? 402 : eventType);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
