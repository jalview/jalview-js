(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JScrollBar','java.awt.BorderLayout','javax.swing.ButtonGroup','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.Color','javax.swing.BorderFactory','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GAlignmentPanel", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vscroll=null;
this.hscroll=null;
this.borderLayout1=null;
this.borderLayout3=null;
this.borderLayout5=null;
this.borderLayout6=null;
this.buttonGroup1=null;
this.borderLayout7=null;
this.borderLayout10=null;
this.borderLayout11=null;
this.annotationScroller=null;
this.border1=null;
this.borderLayout4=null;
this.sequenceHolderPanel=null;
this.seqPanelHolder=null;
this.scalePanelHolder=null;
this.idPanelHolder=null;
this.idSpaceFillerPanel1=null;
this.annotationSpaceFillerHolder=null;
this.hscrollFillerPanel=null;
this.hscrollHolder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.vscroll=Clazz.new_($I$(1));
this.hscroll=Clazz.new_($I$(1));
this.borderLayout1=Clazz.new_($I$(2));
this.borderLayout3=Clazz.new_($I$(2));
this.borderLayout5=Clazz.new_($I$(2));
this.borderLayout6=Clazz.new_($I$(2));
this.buttonGroup1=Clazz.new_($I$(3));
this.borderLayout7=Clazz.new_($I$(2));
this.borderLayout10=Clazz.new_($I$(2));
this.borderLayout11=Clazz.new_($I$(2));
this.annotationScroller=Clazz.new_($I$(4));
this.borderLayout4=Clazz.new_($I$(2));
this.sequenceHolderPanel=C$.newJPanel$();
this.seqPanelHolder=C$.newJPanel$();
this.scalePanelHolder=C$.newJPanel$();
this.idPanelHolder=C$.newJPanel$();
this.idSpaceFillerPanel1=C$.newJPanel$();
this.annotationSpaceFillerHolder=C$.newJPanel$();
this.hscrollFillerPanel=C$.newJPanel$();
this.hscrollHolder=C$.newJPanel$();
}, 1);

Clazz.newMeth(C$, 'newJPanel$', function () {
var p=Clazz.new_($I$(5));
p.setBackground$java_awt_Color($I$(6).white);
return p;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.border1=$I$(7).createLineBorder$java_awt_Color$I($I$(6).gray, 1);
this.idPanelHolder.setBorder$javax_swing_border_Border(null);
this.idPanelHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[70, 10]));
this.setLayout$java_awt_LayoutManager(this.borderLayout7);
this.sequenceHolderPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[2147483647, 2147483647]));
this.sequenceHolderPanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[150, 150]));
this.sequenceHolderPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[150, 150]));
this.sequenceHolderPanel.setLayout$java_awt_LayoutManager(this.borderLayout3);
this.seqPanelHolder.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.scalePanelHolder.setBackground$java_awt_Color($I$(6).white);
this.scalePanelHolder.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[10, 80]));
this.scalePanelHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[10, 30]));
this.scalePanelHolder.setLayout$java_awt_LayoutManager(this.borderLayout6);
this.idPanelHolder.setLayout$java_awt_LayoutManager(this.borderLayout5);
this.idSpaceFillerPanel1.setBackground$java_awt_Color($I$(6).white);
this.idSpaceFillerPanel1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[10, 30]));
this.idSpaceFillerPanel1.setLayout$java_awt_LayoutManager(this.borderLayout11);
this.annotationSpaceFillerHolder.setBackground$java_awt_Color($I$(6).white);
this.annotationSpaceFillerHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[10, 80]));
this.annotationSpaceFillerHolder.setLayout$java_awt_LayoutManager(this.borderLayout4);
this.hscroll.setOrientation$I(0);
this.hscrollHolder.setLayout$java_awt_LayoutManager(this.borderLayout10);
this.hscrollFillerPanel.setBackground$java_awt_Color($I$(6).white);
this.hscrollFillerPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[70, 10]));
this.hscrollHolder.setBackground$java_awt_Color($I$(6).white);
this.annotationScroller.setBorder$javax_swing_border_Border(null);
this.annotationScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[10, 80]));
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[220, 166]));
this.sequenceHolderPanel.add$java_awt_Component$O(this.scalePanelHolder, "North");
this.sequenceHolderPanel.add$java_awt_Component$O(this.seqPanelHolder, "Center");
this.seqPanelHolder.add$java_awt_Component$O(this.vscroll, "East");
this.sequenceHolderPanel.add$java_awt_Component$O(this.annotationScroller, "South");
this.add$java_awt_Component$O(this.idPanelHolder, "West");
this.idPanelHolder.add$java_awt_Component$O(this.idSpaceFillerPanel1, "North");
this.idPanelHolder.add$java_awt_Component$O(this.annotationSpaceFillerHolder, "South");
this.add$java_awt_Component$O(this.hscrollHolder, "South");
this.hscrollHolder.add$java_awt_Component$O(this.hscroll, "Center");
this.hscrollHolder.add$java_awt_Component$O(this.hscrollFillerPanel, "West");
this.add$java_awt_Component$O(this.sequenceHolderPanel, "Center");
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
