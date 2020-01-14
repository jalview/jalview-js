(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),I$=[[0,'java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurVARNAPanelKeys", null, null, ['java.awt.event.KeyListener', 'java.awt.event.FocusListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
var controlDown=(e.getModifiersEx$() & (128)) == 128;
var shiftDown=(e.getModifiersEx$() & (64)) == 64;
var altDown=(e.getModifiersEx$() & (512)) == 512;
var ui=this._vp.getVARNAUI$();
try {
switch (e.getKeyCode$()) {
case (65):
if (controlDown) {
ui.UIAbout$();
}break;
case (66):
if (controlDown) {
ui.UISetBorder$();
} else if (altDown) {
ui.UIToggleDrawBackbone$();
}break;
case (67):
if (shiftDown && controlDown ) {
ui.UISetColorMapCaption$();
}break;
case (68):
if (controlDown) {
if (shiftDown) {
ui.UIPickGapsBasesColor$();
} else {
ui.UIToggleColorGapsBases$();
}}break;
case (69):
if (controlDown) {
ui.UIToggleShowNonPlanar$();
}break;
case (70):
if (controlDown) {
ui.UIToggleFlatExteriorLoop$();
}break;
case (71):
if (controlDown) {
ui.UISetBackground$();
} else if (!shiftDown && altDown ) {
ui.UIToggleGaspinMode$();
}break;
case (72):
if (controlDown && !shiftDown ) {
ui.UISetBPHeightIncrement$();
} else if (controlDown && shiftDown ) {
var p=this._vp.getLastSelectedPosition$();
ui.UIAnnotationsAddPosition$I$I((p.x|0), (p.y|0));
}break;
case (74):
if (controlDown) {
if (shiftDown) {
ui.UIPickSpecialBasesColor$();
} else {
ui.UIToggleColorSpecialBases$();
}}break;
case (75):
if (controlDown && shiftDown ) {
ui.UILoadColorMapValues$();
} else if (controlDown) {
ui.UISetBackboneColor$();
}break;
case (76):
if (shiftDown && controlDown ) {
ui.UIToggleColorMap$();
} else if (controlDown) {
ui.UISetColorMapStyle$();
} else if (shiftDown) {
ui.UISetColorMapValues$();
}break;
case (77):
if (controlDown) {
ui.UISetNumPeriod$();
} else if (shiftDown && altDown ) {
ui.UIToggleModifiable$();
}break;
case (78):
if (controlDown) {
ui.UIManualInput$();
}break;
case (79):
if (controlDown) {
ui.UIFile$();
}break;
case (80):
if (controlDown && shiftDown ) {
ui.UISetBPStyle$();
} else if (controlDown && !shiftDown ) {
ui.UIPrint$();
}break;
case (81):
if (controlDown && !shiftDown && !altDown  ) {
this._vp.getVARNAUI$().UIAutoAnnotateHelices$();
} else if (controlDown && shiftDown && !altDown  ) {
this._vp.getVARNAUI$().UIAutoAnnotateTerminalLoops$();
} else if (!controlDown && shiftDown && altDown  ) {
this._vp.getVARNAUI$().UIAutoAnnotateInteriorLoops$();
} else if (controlDown && !shiftDown && altDown  ) {
this._vp.getVARNAUI$().UIAutoAnnotateStrandEnds$();
}break;
case (82):
if (controlDown) {
if (shiftDown) {
ui.UIReset$();
} else {
ui.UIGlobalRotation$();
}}break;
case (83):
if (controlDown) {
if (shiftDown) {
ui.UISetSpaceBetweenBases$();
} else {
ui.UISaveAs$();
}}break;
case (84):
if (controlDown) {
if (shiftDown) {
ui.UISetTitleFont$();
} else if (altDown) {
ui.UISetTitleColor$();
} else {
ui.UISetTitle$();
}}break;
case (85):
if (controlDown && !shiftDown && !altDown  ) {
this._vp.getVARNAUI$().UIBaseTypeColor$();
} else if (!controlDown && shiftDown && !altDown  ) {
this._vp.getVARNAUI$().UIBasePairTypeColor$();
} else if (!controlDown && !shiftDown && altDown  ) {
this._vp.getVARNAUI$().UIBaseAllColor$();
}break;
case (87):
if (controlDown) {
ui.UIToggleShowNCBP$();
}break;
case (88):
if (controlDown) {
ui.UIExport$();
}break;
case (89):
if (controlDown) {
ui.UIRedo$();
}break;
case (90):
if (controlDown && !shiftDown ) {
ui.UIUndo$();
} else if (controlDown && shiftDown ) {
ui.UIRedo$();
} else if (!controlDown && !shiftDown ) {
ui.UICustomZoom$();
}break;
case (49):
if (controlDown) {
ui.UILine$();
}break;
case (50):
if (controlDown) {
ui.UICircular$();
}break;
case (51):
if (controlDown) {
ui.UIRadiate$();
}break;
case (52):
if (controlDown) {
ui.UINAView$();
}break;
case (53):
if (controlDown) {
ui.UIVARNAView$();
}break;
case (54):
if (controlDown) {
ui.UIMOTIFView$();
}break;
case (40):
if (this._vp.getZoom$() > 1 ) {
this._vp.setTranslation$java_awt_Point(Clazz.new_($I$(1).c$$I$I,[this._vp.getTranslation$().x, this._vp.getTranslation$().y - 5]));
this._vp.checkTranslation$();
}break;
case (38):
if (this._vp.getZoom$() > 1 ) {
this._vp.setTranslation$java_awt_Point(Clazz.new_($I$(1).c$$I$I,[this._vp.getTranslation$().x, this._vp.getTranslation$().y + 5]));
this._vp.checkTranslation$();
}break;
case (37):
if (this._vp.getZoom$() > 1 ) {
this._vp.setTranslation$java_awt_Point(Clazz.new_($I$(1).c$$I$I,[this._vp.getTranslation$().x + 5, this._vp.getTranslation$().y]));
this._vp.checkTranslation$();
}break;
case (39):
if (this._vp.getZoom$() > 1 ) {
this._vp.setTranslation$java_awt_Point(Clazz.new_($I$(1).c$$I$I,[this._vp.getTranslation$().x - 5, this._vp.getTranslation$().y]));
this._vp.checkTranslation$();
}break;
case (61):
case (521):
ui.UIZoomIn$();
break;
case (45):
ui.UIZoomOut$();
break;
}
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
this._vp.errorDialog$Exception(e1);
} else {
throw e1;
}
}
this._vp.repaint$();
});

Clazz.newMeth(C$, 'getRandomRNA$', function () {
var pile=0;
var j;
var i=0;
var l;
var fun="";
while (i < 2000){
if (Math.random() > 0.5 ) {
j=0;
l=Math.random() * 10;
while (j < l ){
fun += ".";
i++;
j++;
}
} else {
if (Math.random() > 0.5  && pile > 0 ) {
j=0;
l=Math.random() * 5;
while (j < l  && pile > 0 ){
fun += ")";
pile--;
j++;
i++;
}
} else {
j=0;
l=Math.random() * 5;
while (j < l ){
fun += "(";
pile++;
j++;
i++;
}
}}}
while (pile > 0){
fun += ")";
pile--;
}
return fun;
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (arg0) {
this._vp.repaint$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (arg0) {
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
