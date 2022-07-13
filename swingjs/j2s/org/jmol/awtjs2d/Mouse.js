(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),p$1={},I$=[[0,'javajs.util.V3','org.jmol.util.Logger','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Mouse", null, null, 'org.jmol.api.GenericMouseInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keyBuffer="";
},1);

C$.$fields$=[['Z',['isMouseDown','wheeling'],'I',['modifiersDown','xWhenPressed','yWhenPressed','modifiersWhenPressed10'],'S',['keyBuffer'],'O',['vwr','org.jmol.viewer.Viewer','manager','org.jmol.api.EventManager']]]

Clazz.newMeth(C$, 'c$$D$org_jmol_viewer_Viewer$O', function (privateKey, vwr, display) {
;C$.$init$.apply(this);
this.vwr=vwr;
this.manager=this.vwr.acm;
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
});

Clazz.newMeth(C$, 'dispose$', function () {
});

Clazz.newMeth(C$, 'processEvent$I$I$I$I$J', function (id, x, y, modifiers, time) {
if (id != 507) modifiers=C$.applyLeftMouse$I(modifiers);
switch (id) {
case 507:
p$1.wheeled$J$I$I.apply(this, [time, x, modifiers]);
break;
case 501:
this.xWhenPressed=x;
this.yWhenPressed=y;
this.modifiersWhenPressed10=modifiers;
p$1.pressed$J$I$I$I$Z.apply(this, [time, x, y, modifiers, false]);
break;
case 506:
p$1.dragged$J$I$I$I.apply(this, [time, x, y, modifiers]);
break;
case 504:
p$1.entry$J$I$I$Z.apply(this, [time, x, y, false]);
break;
case 505:
p$1.entry$J$I$I$Z.apply(this, [time, x, y, true]);
break;
case 503:
p$1.moved$J$I$I$I.apply(this, [time, x, y, modifiers]);
break;
case 502:
p$1.released$J$I$I$I.apply(this, [time, x, y, modifiers]);
if (x == this.xWhenPressed && y == this.yWhenPressed  && modifiers == this.modifiersWhenPressed10 ) {
p$1.clicked$J$I$I$I$I.apply(this, [time, x, y, modifiers, 1]);
}break;
default:
return false;
}
return true;
});

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA', function (touches) {
if (touches[0].length < 2) return;
var t1=touches[0];
var t2=touches[1];
var t1first=t1[0];
var t1last=t1[t2.length - 1];
var x1first=t1first[0];
var x1last=t1last[0];
var dx1=x1last - x1first;
var y1first=t1first[1];
var y1last=t1last[1];
var dy1=y1last - y1first;
var v1=$I$(1).new3$F$F$F(dx1, dy1, 0);
var d1=v1.length$();
var t2first=t2[0];
var t2last=t2[t2.length - 1];
var x2first=t2first[0];
var x2last=t2last[0];
var dx2=x2last - x2first;
var y2first=t2first[1];
var y2last=t2last[1];
var dy2=y2last - y2first;
var v2=$I$(1).new3$F$F$F(dx2, dy2, 0);
var d2=v2.length$();
if (d1 < 1  || d2 < 1  ) return;
v1.normalize$();
v2.normalize$();
var cos12=(v1.dot$javajs_util_T3(v2));
if (cos12 > 0.8 ) {
var deltaX=((x1last - t1[t1.length - 2][0])|0);
var deltaY=((y1last - t1[t1.length - 2][1])|0);
this.vwr.translateXYBy$I$I(deltaX, deltaY);
} else if (cos12 < -0.8 ) {
v1=$I$(1).new3$F$F$F(x2first - x1first, y2first - y1first, 0);
v2=$I$(1).new3$F$F$F(x2last - x1last, y2last - y1last, 0);
var dx=v2.length$() - v1.length$();
p$1.wheeled$J$I$I.apply(this, [System.currentTimeMillis$(), dx < 0  ? -1 : 1, 32]);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
p$1.clicked$J$I$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$(), e.getClickCount$()]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
p$1.entry$J$I$I$Z.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), false]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
p$1.entry$J$I$I$Z.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), true]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
p$1.pressed$J$I$I$I$Z.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$(), e.isPopupTrigger$()]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
p$1.released$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
var modifiers=e.getModifiers$();
if ((modifiers & 28) == 0) modifiers|=16;
p$1.dragged$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), modifiers]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
p$1.moved$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent', function (e) {
e.consume$();
p$1.wheeled$J$I$I.apply(this, [e.getWhen$(), e.getWheelRotation$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (ke) {
ke.consume$();
if (!this.vwr.menuEnabled$()) return;
var ch=ke.getKeyChar$();
var modifiers=ke.getModifiers$();
if ($I$(2).debuggingHigh) $I$(2,"debug$S",["MouseManager keyTyped: " + ch + " " + (0 + ch.$c()) + " " + modifiers ]);
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
case 1:
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
break;
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
}if (!this.vwr.getBooleanProperty$S("allowKeyStrokes")) return;
p$1.addKeyBuffer$C.apply(this, [ke.getModifiers$() == 1 ? Character.toUpperCase$C(ch) : ch]);
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
if (ch.$c() == 10 ) {
p$1.sendKeyBuffer.apply(this, []);
return;
}if (ch.$c() == 8 ) {
if (this.keyBuffer.length$() > 0) this.keyBuffer=this.keyBuffer.substring$I$I(0, this.keyBuffer.length$() - 1);
} else {
this.keyBuffer += ch;
}if (this.vwr.getBooleanProperty$S("showKeyStrokes")) this.vwr.evalStringQuietSync$S$Z$Z("!set echo _KEYSTROKES; set echo bottom left;echo " + $I$(3).esc$S("\u0001" + this.keyBuffer), true, true);
}, p$1);

Clazz.newMeth(C$, 'sendKeyBuffer', function () {
var kb=this.keyBuffer;
if (this.vwr.getBooleanProperty$S("showKeyStrokes")) this.vwr.evalStringQuietSync$S$Z$Z("!set echo _KEYSTROKES; set echo bottom left;echo " + $I$(3).esc$S(this.keyBuffer), true, true);
p$1.clearKeyBuffer.apply(this, []);
this.vwr.evalStringQuietSync$S$Z$Z(kb, false, true);
}, p$1);

Clazz.newMeth(C$, 'entry$J$I$I$Z', function (time, x, y, isExit) {
this.wheeling=false;
this.isMouseDown=false;
this.modifiersDown=0;
this.manager.mouseEnterExit$J$I$I$Z(time, x, y, isExit);
}, p$1);

Clazz.newMeth(C$, 'clicked$J$I$I$I$I', function (time, x, y, modifiers, clickCount) {
p$1.clearKeyBuffer.apply(this, []);
this.manager.mouseAction$I$J$I$I$I$I(2, time, x, y, 1, modifiers);
}, p$1);

Clazz.newMeth(C$, 'moved$J$I$I$I', function (time, x, y, modifiers) {
p$1.clearKeyBuffer.apply(this, []);
if (this.isMouseDown) this.manager.mouseAction$I$J$I$I$I$I(1, time, x, y, 0, this.modifiersDown);
 else this.manager.mouseAction$I$J$I$I$I$I(0, time, x, y, 0, modifiers);
}, p$1);

Clazz.newMeth(C$, 'wheeled$J$I$I', function (time, rotation, modifiers) {
p$1.clearKeyBuffer.apply(this, []);
this.wheeling=true;
this.manager.mouseAction$I$J$I$I$I$I(3, time, 0, rotation, 0, modifiers & ~28 | 32);
}, p$1);

Clazz.newMeth(C$, 'pressed$J$I$I$I$Z', function (time, x, y, modifiers, isPopupTrigger) {
p$1.clearKeyBuffer.apply(this, []);
this.isMouseDown=true;
this.modifiersDown=modifiers;
this.wheeling=false;
this.manager.mouseAction$I$J$I$I$I$I(4, time, x, y, 0, modifiers);
}, p$1);

Clazz.newMeth(C$, 'released$J$I$I$I', function (time, x, y, modifiers) {
this.isMouseDown=false;
this.modifiersDown=0;
this.wheeling=false;
this.manager.mouseAction$I$J$I$I$I$I(5, time, x, y, 0, modifiers);
}, p$1);

Clazz.newMeth(C$, 'dragged$J$I$I$I', function (time, x, y, modifiers) {
if (this.wheeling) return;
if ((this.modifiersDown & 20) == 20) this.modifiersDown=this.modifiersDown & ~4 | 2;
this.manager.mouseAction$I$J$I$I$I$I(1, time, x, y, 0, this.modifiersDown);
}, p$1);

Clazz.newMeth(C$, 'applyLeftMouse$I', function (modifiers) {
return ((modifiers & 28) == 0) ? (modifiers | 16) : modifiers;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
