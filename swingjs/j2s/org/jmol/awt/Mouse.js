(function(){var P$=Clazz.newPackage("org.jmol.awt"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','org.jmol.util.Elements']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Mouse", null, null, ['java.awt.event.MouseWheelListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.KeyListener', 'org.jmol.api.GenericMouseInterface']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keyBuffer="";
},1);

C$.$fields$=[['Z',['isMouseDown','wheeling'],'I',['modifiersDown','xWhenPressed','yWhenPressed','modifiersWhenPressed10'],'S',['keyBuffer'],'O',['vwr','org.jmol.viewer.Viewer','manager','org.jmol.api.EventManager']]]

Clazz.newMeth(C$, 'c$$D$org_jmol_api_PlatformViewer$O', function (privateKey, vwr, odisplay) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.manager=this.vwr.acm;
var display=odisplay;
display.addKeyListener$java_awt_event_KeyListener(this);
display.addMouseListener$java_awt_event_MouseListener(this);
display.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
display.addMouseWheelListener$java_awt_event_MouseWheelListener(this);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
});

Clazz.newMeth(C$, 'dispose$', function () {
var display=this.vwr.display;
display.removeMouseListener$java_awt_event_MouseListener(this);
display.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
display.removeMouseWheelListener$java_awt_event_MouseWheelListener(this);
display.removeKeyListener$java_awt_event_KeyListener(this);
});

Clazz.newMeth(C$, 'processEvent$I$I$I$I$J', function (id, x, y, modifiers, time) {
modifiers=C$.applyLeftMouse$I(modifiers);
switch (id) {
case 501:
this.xWhenPressed=x;
this.yWhenPressed=y;
this.modifiersWhenPressed10=modifiers;
p$1.mousePressed$J$I$I$I$Z.apply(this, [time, x, y, modifiers, false]);
break;
case 506:
p$1.mouseDragged$J$I$I.apply(this, [time, x, y]);
break;
case 504:
p$1.mouseEntered$J$I$I.apply(this, [time, x, y]);
break;
case 505:
p$1.mouseExited$J$I$I.apply(this, [time, x, y]);
break;
case 503:
p$1.mouseMoved$J$I$I$I.apply(this, [time, x, y, modifiers]);
break;
case 502:
p$1.mouseReleased$J$I$I$I.apply(this, [time, x, y, modifiers]);
if (x == this.xWhenPressed && y == this.yWhenPressed  && modifiers == this.modifiersWhenPressed10 ) {
p$1.mouseClicked$J$I$I$I$I.apply(this, [time, x, y, modifiers, 1]);
}break;
default:
return false;
}
return true;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
p$1.mouseClicked$J$I$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$(), e.getClickCount$()]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
p$1.mouseEntered$J$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$()]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
p$1.mouseExited$J$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$()]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
p$1.mousePressed$J$I$I$I$Z.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$(), e.isPopupTrigger$()]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
p$1.mouseReleased$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
p$1.mouseDragged$J$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$()]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
p$1.mouseMoved$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent', function (e) {
e.consume$();
p$1.mouseWheel$J$I$I.apply(this, [e.getWhen$(), e.getWheelRotation$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (ke) {
ke.consume$();
if (!this.vwr.menuEnabled$()) return;
var ch=ke.getKeyChar$();
var modifiers=ke.getModifiers$();
if (modifiers != 0 && modifiers != 1 ) {
switch (ch.$c()) {
case 11:
case 107:
var isON=!this.vwr.getBooleanProperty$S("allowKeyStrokes");
switch (modifiers) {
case 2:
this.vwr.setBooleanProperty$S$Z("allowKeyStrokes", isON);
this.vwr.setBooleanProperty$S$Z("showKeyStrokes", true);
break;
case 10:
case 8:
this.vwr.setBooleanProperty$S$Z("allowKeyStrokes", isON);
this.vwr.setBooleanProperty$S$Z("showKeyStrokes", false);
break;
}
p$1.clearKeyBuffer.apply(this, []);
this.vwr.refresh$I$S(3, "showkey");
break;
case 22:
case 118:
switch (modifiers) {
case 2:
var ret=this.vwr.getClipboardText$();
if (ret == null ) break;
if (ret.startsWith$S("http://") && ret.indexOf$S("\n") < 0 ) ret="LoAd " + $I$(1).esc$S(ret);
if (ret.startsWith$S("LoAd ")) {
this.vwr.evalStringQuietSync$S$Z$Z(ret, false, true);
break;
}ret=this.vwr.loadInlineAppend$S$Z(ret, false);
if (ret != null ) $I$(2).error$S(ret);
}
break;
case 26:
case 122:
switch (modifiers) {
case 2:
this.vwr.undoMoveAction$I$I(4165, 1);
break;
case 3:
this.vwr.undoMoveAction$I$I(4139, 1);
break;
}
break;
case 25:
case 121:
switch (modifiers) {
case 2:
this.vwr.undoMoveAction$I$I(4139, 1);
break;
}
break;
}
return;
}p$1.addKeyBuffer$C.apply(this, [ke.getModifiers$() == 1 ? Character.toUpperCase$C(ch) : ch]);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (ke) {
if (this.vwr.isApplet) ke.consume$();
this.manager.keyPressed$I$I(ke.getKeyCode$(), ke.getModifiers$());
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (ke) {
ke.consume$();
this.manager.keyReleased$I(ke.getKeyCode$());
});

Clazz.newMeth(C$, 'clearKeyBuffer', function () {
if (this.keyBuffer.length$() == 0) return;
this.keyBuffer="";
if (this.vwr.getBooleanProperty$S("showKeyStrokes")) this.vwr.evalStringQuietSync$S$Z$Z("!set echo _KEYSTROKES; set echo bottom left;echo \"\"", true, true);
}, p$1);

Clazz.newMeth(C$, 'addKeyBuffer$C', function (ch) {
if (!this.vwr.getBooleanProperty$S("allowKeyStrokes")) {
if (this.vwr.atomHighlighted >= 0) {
p$1.checkElementSelected$C.apply(this, [ch]);
}return;
}if (ch.$c() == 10 ) {
p$1.sendKeyBuffer.apply(this, []);
return;
}if (ch.$c() == 8 ) {
if (this.keyBuffer.length$() > 0) this.keyBuffer=this.keyBuffer.substring$I$I(0, this.keyBuffer.length$() - 1);
} else {
this.keyBuffer += ch;
}if (this.vwr.getBooleanProperty$S("showKeyStrokes")) this.vwr.evalStringQuietSync$S$Z$Z("!set echo _KEYSTROKES; set echo bottom left;echo " + $I$(1).esc$S("\u0001" + this.keyBuffer), true, true);
}, p$1);

Clazz.newMeth(C$, 'checkElementSelected$C', function (ch) {
if ($I$(1).isUpperCase$C(ch)) {
this.keyBuffer="";
}this.keyBuffer += ch;
var elemno=$I$(3).elementNumberFromSymbol$S$Z(this.keyBuffer, true);
if (elemno <= 0) elemno=(function(a,f){return f.apply(null,a)})([this.keyBuffer.toUpperCase$(), true],$I$(3).elementNumberFromSymbol$S$Z);
System.out.println$S("CHECKELEME " + ch + " " + this.keyBuffer + " " + elemno );
if (elemno > 0) this.vwr.assignAtom$I$S$javajs_util_P3(-1, $I$(3).elementSymbolFromNumber$I(elemno), null);
if (!$I$(1).isUpperCase$C(ch)) this.keyBuffer="";
}, p$1);

Clazz.newMeth(C$, 'sendKeyBuffer', function () {
var kb=this.keyBuffer;
if (this.vwr.getBooleanProperty$S("showKeyStrokes")) this.vwr.evalStringQuietSync$S$Z$Z("!set echo _KEYSTROKES; set echo bottom left;echo " + $I$(1).esc$S(this.keyBuffer), true, true);
p$1.clearKeyBuffer.apply(this, []);
this.vwr.evalStringQuietSync$S$Z$Z(kb, false, true);
}, p$1);

Clazz.newMeth(C$, 'mouseEntered$J$I$I', function (time, x, y) {
this.wheeling=false;
this.manager.mouseEnterExit$J$I$I$Z(time, x, y, false);
}, p$1);

Clazz.newMeth(C$, 'mouseExited$J$I$I', function (time, x, y) {
this.wheeling=false;
this.manager.mouseEnterExit$J$I$I$Z(time, x, y, true);
}, p$1);

Clazz.newMeth(C$, 'mouseClicked$J$I$I$I$I', function (time, x, y, modifiers, clickCount) {
p$1.clearKeyBuffer.apply(this, []);
this.manager.mouseAction$I$J$I$I$I$I(2, time, x, y, 1, modifiers);
}, p$1);

Clazz.newMeth(C$, 'mouseMoved$J$I$I$I', function (time, x, y, modifiers) {
p$1.clearKeyBuffer.apply(this, []);
if (this.isMouseDown) this.manager.mouseAction$I$J$I$I$I$I(1, time, x, y, 0, this.modifiersDown);
 else this.manager.mouseAction$I$J$I$I$I$I(0, time, x, y, 0, modifiers);
}, p$1);

Clazz.newMeth(C$, 'mouseWheel$J$I$I', function (time, rotation, modifiers) {
p$1.clearKeyBuffer.apply(this, []);
this.wheeling=true;
this.manager.mouseAction$I$J$I$I$I$I(3, time, 0, rotation, 0, modifiers & ~8 | 32);
}, p$1);

Clazz.newMeth(C$, 'mousePressed$J$I$I$I$Z', function (time, x, y, modifiers, isPopupTrigger) {
p$1.clearKeyBuffer.apply(this, []);
this.isMouseDown=true;
this.modifiersDown=modifiers;
this.wheeling=false;
this.manager.mouseAction$I$J$I$I$I$I(4, time, x, y, 0, modifiers);
}, p$1);

Clazz.newMeth(C$, 'mouseReleased$J$I$I$I', function (time, x, y, modifiers) {
this.isMouseDown=false;
this.modifiersDown=0;
this.wheeling=false;
this.manager.mouseAction$I$J$I$I$I$I(5, time, x, y, 0, modifiers);
}, p$1);

Clazz.newMeth(C$, 'mouseDragged$J$I$I', function (time, x, y) {
if (this.wheeling) return;
if ((this.modifiersDown & 20) == 20) this.modifiersDown=this.modifiersDown & ~4 | 2;
this.manager.mouseAction$I$J$I$I$I$I(1, time, x, y, 0, this.modifiersDown);
}, p$1);

Clazz.newMeth(C$, 'applyLeftMouse$I', function (modifiers) {
return ((modifiers & 28) == 0) ? (modifiers | 16) : modifiers;
}, 1);

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA', function (touches) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
