(function(){var P$=Clazz.newPackage("jalview.jbgui"),p$1={},I$=[[0,'javax.swing.JScrollBar','java.awt.BorderLayout','javax.swing.ButtonGroup','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.Color','javax.swing.BorderFactory','java.awt.Dimension']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GAlignmentPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vscroll=Clazz.new_($I$(1,1));
this.hscroll=Clazz.new_($I$(1,1));
this.borderLayout1=Clazz.new_($I$(2,1));
this.borderLayout3=Clazz.new_($I$(2,1));
this.borderLayout5=Clazz.new_($I$(2,1));
this.borderLayout6=Clazz.new_($I$(2,1));
this.buttonGroup1=Clazz.new_($I$(3,1));
this.borderLayout7=Clazz.new_($I$(2,1));
this.borderLayout10=Clazz.new_($I$(2,1));
this.borderLayout11=Clazz.new_($I$(2,1));
this.annotationScroller=Clazz.new_($I$(4,1));
this.borderLayout4=Clazz.new_($I$(2,1));
this.sequenceHolderPanel=C$.newJPanel$();
this.seqPanelHolder=C$.newJPanel$();
this.scalePanelHolder=C$.newJPanel$();
this.idPanelHolder=C$.newJPanel$();
this.idSpaceFillerPanel1=C$.newJPanel$();
this.annotationSpaceFillerHolder=C$.newJPanel$();
this.hscrollFillerPanel=C$.newJPanel$();
this.hscrollHolder=C$.newJPanel$();
},1);

C$.$fields$=[['O',['vscroll','javax.swing.JScrollBar','+hscroll','borderLayout1','java.awt.BorderLayout','+borderLayout3','+borderLayout5','+borderLayout6','buttonGroup1','javax.swing.ButtonGroup','borderLayout7','java.awt.BorderLayout','+borderLayout10','+borderLayout11','annotationScroller','javax.swing.JScrollPane','border1','javax.swing.border.Border','borderLayout4','java.awt.BorderLayout','sequenceHolderPanel','javax.swing.JPanel','+seqPanelHolder','+scalePanelHolder','+idPanelHolder','+idSpaceFillerPanel1','+annotationSpaceFillerHolder','+hscrollFillerPanel','+hscrollHolder']]]

Clazz.newMeth(C$, 'newJPanel$', function () {
var p=Clazz.new_($I$(5,1));
p.setBackground$java_awt_Color($I$(6).white);
return p;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
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
this.border1=$I$(7,"createLineBorder$java_awt_Color$I",[$I$(6).gray, 1]);
this.idPanelHolder.setBorder$javax_swing_border_Border(null);
this.idPanelHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[70, 10]));
this.setLayout$java_awt_LayoutManager(this.borderLayout7);
this.sequenceHolderPanel.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[2147483647, 2147483647]));
this.sequenceHolderPanel.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[150, 150]));
this.sequenceHolderPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[150, 150]));
this.sequenceHolderPanel.setLayout$java_awt_LayoutManager(this.borderLayout3);
this.seqPanelHolder.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.scalePanelHolder.setBackground$java_awt_Color($I$(6).white);
this.scalePanelHolder.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[10, 80]));
this.scalePanelHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[10, 30]));
this.scalePanelHolder.setLayout$java_awt_LayoutManager(this.borderLayout6);
this.idPanelHolder.setLayout$java_awt_LayoutManager(this.borderLayout5);
this.idSpaceFillerPanel1.setBackground$java_awt_Color($I$(6).white);
this.idSpaceFillerPanel1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[10, 30]));
this.idSpaceFillerPanel1.setLayout$java_awt_LayoutManager(this.borderLayout11);
this.annotationSpaceFillerHolder.setBackground$java_awt_Color($I$(6).white);
this.annotationSpaceFillerHolder.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[10, 80]));
this.annotationSpaceFillerHolder.setLayout$java_awt_LayoutManager(this.borderLayout4);
this.hscroll.setOrientation$I(0);
this.hscrollHolder.setLayout$java_awt_LayoutManager(this.borderLayout10);
this.hscrollFillerPanel.setBackground$java_awt_Color($I$(6).white);
this.hscrollFillerPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[70, 10]));
this.hscrollHolder.setBackground$java_awt_Color($I$(6).white);
this.annotationScroller.setBorder$javax_swing_border_Border(null);
this.annotationScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[10, 80]));
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8,1).c$$I$I,[220, 166]));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
