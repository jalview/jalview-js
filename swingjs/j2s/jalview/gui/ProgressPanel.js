(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JPanel','java.awt.CardLayout','java.awt.BorderLayout','javax.swing.border.EmptyBorder','java.awt.Dimension','javax.swing.JProgressBar','javax.swing.JLabel','java.awt.Font','javax.swing.BorderFactory','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ProgressPanel", null, 'javax.swing.JPanel', 'jalview.api.RendererListenerI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.MAXVALUE=0;
this.VISIBLE=null;
this.INVISIBLE=null;
this.eventName=null;
this.progressBar=null;
this.progressLabel=null;
this.labelPanel=null;
this.labelLayout=null;
this.barPanel=null;
this.barLayout=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.MAXVALUE=100;
this.VISIBLE="VISIBLE";
this.INVISIBLE="INVISIBLE";
this.labelPanel=Clazz.new_($I$(1));
this.labelLayout=Clazz.new_($I$(2));
this.barPanel=Clazz.new_($I$(1));
this.barLayout=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (eventPropertyName, label, maxwidth) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(3).c$$I$I,[10, 0])]);
C$.$init$.apply(this);
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(4).c$$I$I$I$I,[0, 3, 0, 0]));
this.eventName=eventPropertyName;
var labelText=label;
var w=maxwidth;
this.progressBar=((P$.ProgressPanel$1||
(function(){var C$=Clazz.newClass(P$, "ProgressPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JProgressBar'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMaximumSize$', function () {
return Clazz.new_($I$(5).c$$I$I,[this.$finals$.w, 1]);
});
})()
), Clazz.new_($I$(6), [this, {w: w}],P$.ProgressPanel$1));
this.progressBar.setMinimum$I(0);
this.progressBar.setPreferredSize$java_awt_Dimension(this.progressBar.getMaximumSize$());
this.progressLabel=Clazz.new_($I$(7).c$$S,[labelText]);
this.progressLabel.setFont$java_awt_Font(Clazz.new_($I$(8).c$$S$I$I,["Verdana", 0, 11]));
this.labelPanel.setLayout$java_awt_LayoutManager(this.labelLayout);
this.barPanel.setLayout$java_awt_LayoutManager(this.barLayout);
this.labelPanel.add$java_awt_Component$O(this.progressLabel, "VISIBLE");
this.labelPanel.add$java_awt_Component$O(Clazz.new_($I$(1)), "INVISIBLE");
this.barPanel.add$java_awt_Component$O(this.progressBar, "VISIBLE");
this.barPanel.add$java_awt_Component$O(Clazz.new_($I$(1)), "INVISIBLE");
this.labelLayout.show$java_awt_Container$S(this.labelPanel, "VISIBLE");
this.barLayout.show$java_awt_Container$S(this.barPanel, "VISIBLE");
this.add$java_awt_Component$O(this.labelPanel, "West");
this.add$java_awt_Component$O(this.barPanel, "Center");
this.add$java_awt_Component$O(Clazz.new_($I$(7).c$$S,[" "]), "East");
this.setBorder$javax_swing_border_Border($I$(9).createLineBorder$java_awt_Color($I$(10).black));
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (evt.getPropertyName$().equals$O(this.eventName)) {
var progress=((evt.getNewValue$()).objectValue$()|0);
this.progressBar.setValue$I(progress);
if (progress < 100 && !this.progressBar.isVisible$() ) {
this.labelLayout.show$java_awt_Container$S(this.labelPanel, "VISIBLE");
this.barLayout.show$java_awt_Container$S(this.barPanel, "VISIBLE");
}if (progress >= 100) {
this.labelLayout.show$java_awt_Container$S(this.labelPanel, "INVISIBLE");
this.barLayout.show$java_awt_Container$S(this.barPanel, "INVISIBLE");
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
