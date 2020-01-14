(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Font','java.awt.Panel','java.awt.BorderLayout','java.awt.TextField','java.awt.Label']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EditNameDialog", null, 'jalview.appletgui.JVDialog');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.id.getText$();
});

Clazz.newMeth(C$, 'getDescription$', function () {
if (this.description.getText$().length$() < 1) {
return null;
} else {
return this.description.getText$();
}});

Clazz.newMeth(C$, 'c$$S$S$S$S$java_awt_Frame$S$I$I$Z', function (name, desc, label1, label2, owner, title, width, height, display) {
C$.superclazz.c$$java_awt_Frame$S$Z$I$I.apply(this, [owner, title, true, width, height]);
C$.$init$.apply(this);
var mono=Clazz.new_($I$(1).c$$S$I$I,["Monospaced", 0, 12]);
var panel=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
var panel2=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
this.id=Clazz.new_($I$(4).c$$S$I,[name, 40]);
this.id.setFont$java_awt_Font(mono);
var label=Clazz.new_($I$(5).c$$S,[label1]);
label.setFont$java_awt_Font(mono);
panel2.add$java_awt_Component$O(label, "West");
panel2.add$java_awt_Component$O(this.id, "Center");
panel.add$java_awt_Component$O(panel2, "North");
if (label2 != null ) {
panel2=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(3))]);
this.description=Clazz.new_($I$(4).c$$S$I,[desc, 40]);
this.description.setFont$java_awt_Font(mono);
label=Clazz.new_($I$(5).c$$S,[label2]);
label.setFont$java_awt_Font(mono);
panel2.add$java_awt_Component$O(label, "West");
panel2.add$java_awt_Component$O(this.description, "Center");
panel.add$java_awt_Component$O(panel2, "Center");
}this.setMainPanel$java_awt_Panel(panel);
this.setVisible$Z(display);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
