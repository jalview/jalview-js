(function(){var P$=Clazz.newPackage("swingjs.a2s"),p$1={},I$=[[0,'swingjs.a2s.A2SListener','swingjs.a2s.Util']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Dialog", null, 'javax.swing.JDialog', 'swingjs.a2s.A2SContainer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame', function (owner) {
C$.superclazz.c$$java_awt_Frame.apply(this, [owner]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setListener', function () {
this.listener=Clazz.new_($I$(1));
this.addMouseListener$java_awt_event_MouseListener(this.listener);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.listener);
$I$(2).setAWTWindowDefaults$java_awt_Component(this);
}, p$1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Frame', function (owner) {
C$.superclazz.c$$java_awt_JSFrame.apply(this, [owner]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$Z', function (owner, modal) {
C$.superclazz.c$$java_awt_Frame$Z.apply(this, [owner, modal]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Frame$Z', function (owner, modal) {
C$.superclazz.c$$java_awt_JSFrame$Z.apply(this, [owner, modal]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S', function (owner, title) {
C$.superclazz.c$$java_awt_Frame$S.apply(this, [owner, title]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Frame$S', function (owner, title) {
C$.superclazz.c$$java_awt_JSFrame$S.apply(this, [owner, title]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z', function (owner, title, modal) {
C$.superclazz.c$$java_awt_Frame$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Frame$S$Z', function (owner, title, modal) {
C$.superclazz.c$$java_awt_JSFrame$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.superclazz.c$$java_awt_Frame$S$Z$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal, gc]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Frame$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.superclazz.c$$java_awt_JSFrame$S$Z$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal, gc]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog', function (owner) {
C$.superclazz.c$$java_awt_Dialog.apply(this, [owner]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Dialog', function (owner) {
C$.superclazz.c$$java_awt_JSDialog.apply(this, [owner]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S', function (owner, title) {
C$.superclazz.c$$java_awt_Dialog$S$Z.apply(this, [owner, title, false]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Dialog$S', function (owner, title) {
C$.superclazz.c$$java_awt_JSDialog$S$Z.apply(this, [owner, title, false]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z', function (owner, title, modal) {
C$.superclazz.c$$java_awt_Dialog$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Dialog$S$Z', function (owner, title, modal) {
C$.superclazz.c$$java_awt_JSDialog$S$Z.apply(this, [owner, title, modal]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.superclazz.c$$java_awt_Dialog$S$Z$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal, gc]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_a2s_Dialog$S$Z$java_awt_GraphicsConfiguration', function (owner, title, modal, gc) {
C$.superclazz.c$$java_awt_JSDialog$S$Z$java_awt_GraphicsConfiguration.apply(this, [owner, title, modal, gc]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window', function (owner) {
C$.superclazz.c$$java_awt_Window.apply(this, [owner]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S', function (owner, title) {
C$.superclazz.c$$java_awt_Window$S.apply(this, [owner, title]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$java_awt_Dialog_ModalityType', function (owner, modalityType) {
C$.superclazz.c$$java_awt_Window$java_awt_Dialog_ModalityType.apply(this, [owner, modalityType]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType', function (owner, title, modalityType) {
C$.superclazz.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this, [owner, title, modalityType]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration', function (owner, title, modalityType, gc) {
C$.superclazz.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this, [owner, title, modalityType, gc]);
C$.$init$.apply(this);
p$1.setListener.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getA2SListener$', function () {
return this.listener;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
