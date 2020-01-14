(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JColorChooser']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewColourChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener', function (parent, title, initialColour, listener) {
var colorChooser=Clazz.new_($I$(1));
if (initialColour != null ) {
colorChooser.setColor$java_awt_Color(initialColour);
}var onChoose=((P$.JalviewColourChooser$lambda1||
(function(){var C$=Clazz.newClass(P$, "JalviewColourChooser$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'actionPerformed$', function (evt) { return (this.$finals$.listener.colourSelected$(this.$finals$.colorChooser.getColor$()));});
})()
), Clazz.new_(P$.JalviewColourChooser$lambda1.$init$, [this, {listener: listener, colorChooser: colorChooser}]));
var onCancel=((P$.JalviewColourChooser$lambda2||
(function(){var C$=Clazz.newClass(P$, "JalviewColourChooser$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'actionPerformed$', function (evt) { return (this.$finals$.listener.cancel$());});
})()
), Clazz.new_(P$.JalviewColourChooser$lambda2.$init$, [this, {listener: listener}]));
var dialog=$I$(1).createDialog$java_awt_Component$S$Z$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(parent, title, true, colorChooser, onChoose, onCancel);
dialog.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'showColourChooser$java_awt_Component$S$javax_swing_JComponent', function (parent, title, paintable) {
var listener=((P$.JalviewColourChooser$1||
(function(){var C$=Clazz.newClass(P$, "JalviewColourChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['colourSelected$java_awt_Color','colourSelected$'], function (c) {
this.$finals$.paintable.setBackground$java_awt_Color(c);
this.$finals$.paintable.repaint$();
});
})()
), Clazz.new_(P$.JalviewColourChooser$1.$init$, [this, {paintable: paintable}]));
C$.showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener(parent, title, paintable.getBackground$(), listener);
}, 1);
;
(function(){var C$=Clazz.newInterface(P$.JalviewColourChooser, "ColourChooserListener", function(){
});
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'cancel$', function () {
});
};})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
