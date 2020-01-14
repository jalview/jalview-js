(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Insets','java.awt.event.TextEvent','swingjs.a2s.A2SEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextField", null, 'javax.swing.JTextField');
C$.awtInsets=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.awtInsets=Clazz.new_($I$(1).c$$I$I$I$I,[5, 2, 5, 2]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$I.apply(this, ["", 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.c$$S$I.apply(this, [text, (text != null ) ? text.length$() : 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (width) {
C$.c$$S$I.apply(this, ["", width]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (text, width) {
C$.superclazz.c$$S$I.apply(this, [text, width]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMargin$', function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'addTextListener$java_awt_event_TextListener', function (textListener) {
this.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(((P$.TextField$1||
(function(){var C$=Clazz.newClass(P$, "TextField$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent', function (e) {
this.$finals$.textListener.textValueChanged$(Clazz.new_($I$(2).c$$O$I,[this, 0]));
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent', function (e) {
this.$finals$.textListener.textValueChanged$(Clazz.new_($I$(2).c$$O$I,[this, 0]));
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent', function (e) {
this.$finals$.textListener.textValueChanged$(Clazz.new_($I$(2).c$$O$I,[this, 0]));
});
})()
), Clazz.new_(P$.TextField$1.$init$, [this, {textListener: textListener}])));
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return this.preferredSize$I(this.columns);
});

Clazz.newMeth(C$, 'preferredSize$', function () {
return this.preferredSize$I(this.columns);
});

Clazz.newMeth(C$, 'getPreferredSize$I', function (columns) {
return this.preferredSize$I(columns);
});

Clazz.newMeth(C$, 'preferredSize$I', function (columns) {
return this.getPrefSizeJTF$I(columns);
});

Clazz.newMeth(C$, 'getMinimumSize$I', function (columns) {
return this.minimumSize$I(columns);
});

Clazz.newMeth(C$, 'minimumSize$I', function (columns) {
return this.getMinimumSizeJTF$I(columns);
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return this.minimumSize$();
});

Clazz.newMeth(C$, 'minimumSize$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
return (this.columns > 0) ? this.minimumSize$I(this.columns) : C$.superclazz.prototype.minimumSize$.apply(this, []);
}});

Clazz.newMeth(C$, 'getColumnWidth$', function () {
if (this.columnWidth == 0) {
var metrics=this.getFontMetrics$java_awt_Font(this.getFont$());
this.columnWidth=metrics.charWidth$C("_");
}return this.columnWidth;
});

Clazz.newMeth(C$, 'getJ2SWidth$I', function (columns) {
return columns * this.getColumnWidth$() + 24;
});

Clazz.newMeth(C$, 'fireActionPerformed$', function () {
$I$(3).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionPerformed$.apply(this, []);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
