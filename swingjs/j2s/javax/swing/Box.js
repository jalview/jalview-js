(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.BoxLayout',['javax.swing.Box','.Filler'],'java.awt.Dimension','java.awt.AWTError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Box", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (axis) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1).c$$java_awt_Container$I,[this, axis])]);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'createHorizontalBox$', function () {
return Clazz.new_(C$.c$$I,[0]);
}, 1);

Clazz.newMeth(C$, 'createVerticalBox$', function () {
return Clazz.new_(C$.c$$I,[1]);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "BoxUI";
});

Clazz.newMeth(C$, 'createRigidArea$java_awt_Dimension', function (d) {
return Clazz.new_($I$(2).c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension,[d, d, d]);
}, 1);

Clazz.newMeth(C$, 'createHorizontalStrut$I', function (width) {
return Clazz.new_($I$(2).c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension,[Clazz.new_($I$(3).c$$I$I,[width, 0]), Clazz.new_($I$(3).c$$I$I,[width, 0]), Clazz.new_($I$(3).c$$I$I,[width, 32767])]);
}, 1);

Clazz.newMeth(C$, 'createVerticalStrut$I', function (height) {
return Clazz.new_($I$(2).c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension,[Clazz.new_($I$(3).c$$I$I,[0, height]), Clazz.new_($I$(3).c$$I$I,[0, height]), Clazz.new_($I$(3).c$$I$I,[32767, height])]);
}, 1);

Clazz.newMeth(C$, 'createGlue$', function () {
return Clazz.new_($I$(2).c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension,[Clazz.new_($I$(3).c$$I$I,[0, 0]), Clazz.new_($I$(3).c$$I$I,[0, 0]), Clazz.new_($I$(3).c$$I$I,[32767, 32767])]);
}, 1);

Clazz.newMeth(C$, 'createHorizontalGlue$', function () {
return Clazz.new_($I$(2).c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension,[Clazz.new_($I$(3).c$$I$I,[0, 0]), Clazz.new_($I$(3).c$$I$I,[0, 0]), Clazz.new_($I$(3).c$$I$I,[32767, 0])]);
}, 1);

Clazz.newMeth(C$, 'createVerticalGlue$', function () {
return Clazz.new_($I$(2).c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension,[Clazz.new_($I$(3).c$$I$I,[0, 0]), Clazz.new_($I$(3).c$$I$I,[0, 0]), Clazz.new_($I$(3).c$$I$I,[0, 32767])]);
}, 1);

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager', function (l) {
throw Clazz.new_($I$(4).c$$S,["Illegal request"]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
if (this.ui != null ) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
} else if (this.isOpaque$()) {
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
}});
;
(function(){var C$=Clazz.newClass(P$.Box, "Filler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JComponent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension', function (min, pref, max) {
Clazz.super_(C$, this,1);
this.setMinimumSize$java_awt_Dimension(min);
this.setPreferredSize$java_awt_Dimension(pref);
this.setMaximumSize$java_awt_Dimension(max);
}, 1);

Clazz.newMeth(C$, 'changeShape$java_awt_Dimension$java_awt_Dimension$java_awt_Dimension', function (min, pref, max) {
this.setMinimumSize$java_awt_Dimension(min);
this.setPreferredSize$java_awt_Dimension(pref);
this.setMaximumSize$java_awt_Dimension(max);
this.revalidate$();
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
if (this.ui != null ) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
} else if (this.isOpaque$()) {
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
