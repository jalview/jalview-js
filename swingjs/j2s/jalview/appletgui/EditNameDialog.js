(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Font','java.awt.Panel','java.awt.BorderLayout','java.awt.TextField','java.awt.Label']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EditNameDialog", null, 'jalview.appletgui.JVDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['id','java.awt.TextField','+description']]]

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
;C$.superclazz.c$$java_awt_Frame$S$Z$I$I.apply(this,[owner, title, true, width, height]);C$.$init$.apply(this);
var mono=Clazz.new_($I$(1,1).c$$S$I$I,["Monospaced", 0, 12]);
var panel=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
var panel2=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.id=Clazz.new_($I$(4,1).c$$S$I,[name, 40]);
this.id.setFont$java_awt_Font(mono);
var label=Clazz.new_($I$(5,1).c$$S,[label1]);
label.setFont$java_awt_Font(mono);
panel2.add$java_awt_Component$O(label, "West");
panel2.add$java_awt_Component$O(this.id, "Center");
panel.add$java_awt_Component$O(panel2, "North");
if (label2 != null ) {
panel2=Clazz.new_([Clazz.new_($I$(3,1))],$I$(2,1).c$$java_awt_LayoutManager);
this.description=Clazz.new_($I$(4,1).c$$S$I,[desc, 40]);
this.description.setFont$java_awt_Font(mono);
label=Clazz.new_($I$(5,1).c$$S,[label2]);
label.setFont$java_awt_Font(mono);
panel2.add$java_awt_Component$O(label, "West");
panel2.add$java_awt_Component$O(this.description, "Center");
panel.add$java_awt_Component$O(panel2, "Center");
}this.setMainPanel$java_awt_Panel(panel);
this.setVisible$Z(display);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
