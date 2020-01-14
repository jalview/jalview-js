(function(){var P$=Clazz.newPackage("swingjs.a2s"),p$1={},I$=[[0,'java.awt.AWTEventMulticaster','java.awt.event.TextListener']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextArea", null, 'javax.swing.JTextArea');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.textListener=null;
this.horizontalScrollBarPolicy=0;
this.verticalScrollBarPolicy=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$$I$I', function (rows, cols) {
C$.c$$S$I$I$I.apply(this, [null, rows, cols, 0]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$I$I$I.apply(this, [null, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.c$$S$I$I$I.apply(this, [text, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I', function (text, rows, cols) {
C$.c$$S$I$I$I.apply(this, [text, rows, cols, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$I', function (text, rows, columns, scrollbars) {
C$.superclazz.c$$S$I$I.apply(this, [text, rows < 0 ? 0 : rows, columns < 0 ? 0 : columns]);
C$.$init$.apply(this);
this.setWrapStyleWord$Z(false);
this.setLineWrap$Z(false);
switch (scrollbars) {
case 0:
p$1.setVerticalScrollBarPolicy$I.apply(this, [20]);
p$1.setHorizontalScrollBarPolicy$I.apply(this, [30]);
break;
case 1:
this.setLineWrap$Z(true);
p$1.setVerticalScrollBarPolicy$I.apply(this, [20]);
p$1.setHorizontalScrollBarPolicy$I.apply(this, [31]);
break;
case 2:
p$1.setVerticalScrollBarPolicy$I.apply(this, [21]);
p$1.setHorizontalScrollBarPolicy$I.apply(this, [30]);
break;
case 3:
p$1.setVerticalScrollBarPolicy$I.apply(this, [21]);
p$1.setHorizontalScrollBarPolicy$I.apply(this, [31]);
break;
}
}, 1);

Clazz.newMeth(C$, 'getVerticalScrollBarPolicy$', function () {
return this.verticalScrollBarPolicy;
});

Clazz.newMeth(C$, 'setVerticalScrollBarPolicy$I', function (policy) {
var old=this.verticalScrollBarPolicy;
this.verticalScrollBarPolicy=policy;
this.firePropertyChange$S$I$I("verticalScrollBarPolicy", old, policy);
this.revalidate$();
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'getHorizontalScrollBarPolicy$', function () {
return this.horizontalScrollBarPolicy;
});

Clazz.newMeth(C$, 'setHorizontalScrollBarPolicy$I', function (policy) {
var old=this.horizontalScrollBarPolicy;
this.horizontalScrollBarPolicy=policy;
this.firePropertyChange$S$I$I("horizontalScrollBarPolicy", old, policy);
this.revalidate$();
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'getScrollbarVisibility$', function () {
var v=(this.getVerticalScrollBarPolicy$() != 21);
var h=(this.getHorizontalScrollBarPolicy$() != 31);
return (v && h  ? 0 : v ? 1 : h ? 2 : 3);
});

Clazz.newMeth(C$, 'addTextListener$java_awt_event_TextListener', function (l) {
if (l == null ) {
return;
}this.textListener=$I$(1).add$java_awt_event_TextListener$java_awt_event_TextListener(this.textListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeTextListener$java_awt_event_TextListener', function (l) {
if (l == null ) {
return;
}this.textListener=$I$(1).remove$java_awt_event_TextListener$java_awt_event_TextListener(this.textListener, l);
});

Clazz.newMeth(C$, 'getTextListeners$', function () {
return this.getListeners$Class(Clazz.getClass($I$(2),['textValueChanged$java_awt_event_TextEvent']));
});

Clazz.newMeth(C$, 'getPreferredSize$I$I', function (rows, columns) {
return this.preferredSize$I$I(rows, columns);
});

Clazz.newMeth(C$, 'preferredSize$I$I', function (rows, columns) {
return C$.superclazz.prototype.getSizeJS$java_awt_Dimension$I$I$I.apply(this, [null, 400, rows, columns]);
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'preferredSize$', function () {
return ((this.rows > 0) && (this.columns > 0) ) ? this.preferredSize$I$I(this.rows, this.columns) : C$.superclazz.prototype.preferredSize$.apply(this, []);
});

Clazz.newMeth(C$, 'getColumnWidth$', function () {
if (this.columnWidth == 0) {
var metrics=this.getFontMetrics$java_awt_Font(this.getFont$());
this.columnWidth=metrics.charWidth$C("n");
}return this.columnWidth;
});

Clazz.newMeth(C$, 'getMinimumSize$I$I', function (rows, columns) {
return this.minimumSize$I$I(rows, columns);
});

Clazz.newMeth(C$, 'minimumSize$I$I', function (rows, columns) {
return C$.superclazz.prototype.getSizeJS$java_awt_Dimension$I$I$I.apply(this, [null, 100, rows, columns]);
});

Clazz.newMeth(C$, 'getJ2SWidth$I', function (columns) {
return columns * this.getColumnWidth$() + 24;
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return this.minimumSize$();
});

Clazz.newMeth(C$, 'minimumSize$', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
return ((this.rows > 0) && (this.columns > 0) ) ? this.minimumSize$I$I(this.rows, this.columns) : C$.superclazz.prototype.minimumSize$.apply(this, []);
}});

Clazz.newMeth(C$, 'getInputMethodRequests$', function () {
return null;
});

Clazz.newMeth(C$, 'setCaretPosition$I', function (pos) {
C$.superclazz.prototype.setCaretPosition$I.apply(this, [pos]);
C$.superclazz.prototype.requestFocusInWindow$.apply(this, []);
});

Clazz.newMeth(C$, 'awtDefaults$', function () {
});

Clazz.newMeth(C$, 'setTextFromUI$S', function (t) {
C$.superclazz.prototype.setText$S.apply(this, [t]);
});

Clazz.newMeth(C$, 'setText$S', function (t) {
var top=this.ui.domNode.scrollTop ||0;
C$.superclazz.prototype.setText$S.apply(this, [t]);

this.ui.domNode.scrollTop = top
});

Clazz.newMeth(C$, 'appendText$S', function (str) {
C$.superclazz.prototype.append$S.apply(this, [str]);
p$1.toEnd.apply(this, []);
});

Clazz.newMeth(C$, 'toEnd', function () {
C$.superclazz.prototype.setCaretPosition$I.apply(this, [C$.superclazz.prototype.getText$.apply(this, []).length$()]);
C$.superclazz.prototype.requestFocusInWindow$.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'append$S', function (str) {
C$.superclazz.prototype.append$S.apply(this, [str]);
p$1.toEnd.apply(this, []);
});

Clazz.newMeth(C$, 'replaceText$S$I$I', function (str, start, end) {
C$.superclazz.prototype.replaceRange$S$I$I.apply(this, [str, start, end]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
