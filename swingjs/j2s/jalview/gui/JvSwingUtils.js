(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.Objects','javax.swing.JButton','java.awt.Font','java.awt.Color','javax.swing.JMenu','javax.swing.JPanel','java.awt.GridLayout','java.awt.BorderLayout','java.awt.Rectangle','jalview.util.MessageManager','javax.swing.JComboBox','jalview.gui.ComboBoxTooltipRenderer','java.awt.event.MouseAdapter','javax.swing.BorderFactory']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JvSwingUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'wrapTooltip$Z$S', function (enclose, ttext) {
$I$(1).requireNonNull$TT$S(ttext, "Tootip text to format must not be null!");
ttext=ttext.trim$();
var maxLengthExceeded=false;
if (ttext.contains$CharSequence("<br>")) {
var htmllines=ttext.split$S("<br>");
for (var line, $line = 0, $$line = htmllines; $line<$$line.length&&((line=($$line[$line])),1);$line++) {
maxLengthExceeded=line.length$() > 60;
if (maxLengthExceeded) {
break;
}}
} else {
maxLengthExceeded=ttext.length$() > 60;
}if (!maxLengthExceeded) {
return enclose ? "<html>" + ttext + "</html>"  : ttext;
}return (enclose ? "<html>" : "") + "<style> div.ttip {width:350px;white-space:pre-wrap;padding:2px;overflow-wrap:break-word;}</style><div class=\"ttip\">" + ttext + " </div>" + ((enclose ? "</html>" : "")) ;
}, 1);

Clazz.newMeth(C$, 'makeButton$S$S$java_awt_event_ActionListener', function (label, tooltip, action) {
var button=Clazz.new_($I$(2));
button.setText$S(label);
button.setFont$java_awt_Font(Clazz.new_($I$(3).c$$S$I$I,["Verdana", 0, 10]));
button.setForeground$java_awt_Color($I$(4).black);
button.setHorizontalAlignment$I(0);
button.setToolTipText$S(tooltip);
button.addActionListener$java_awt_event_ActionListener(action);
return button;
}, 1);

Clazz.newMeth(C$, 'findOrCreateMenu$javax_swing_JMenu$S', function (menu, submenu) {
var submenuinstance=null;
for (var i=0, iSize=menu.getMenuComponentCount$(); i < iSize; i++) {
if (Clazz.instanceOf(menu.getMenuComponent$I(i), "javax.swing.JMenu") && (menu.getMenuComponent$I(i)).getText$().equals$O(submenu) ) {
submenuinstance=menu.getMenuComponent$I(i);
}}
if (submenuinstance == null ) {
submenuinstance=Clazz.new_($I$(5).c$$S,[submenu]);
menu.add$javax_swing_JMenuItem(submenuinstance);
}return submenuinstance;
}, 1);

Clazz.newMeth(C$, 'addtoLayout$javax_swing_JPanel$S$javax_swing_JComponent$javax_swing_JComponent', function (panel, tooltip, label, valBox) {
var laypanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[1, 2])]);
var labPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(8))]);
var valPanel=Clazz.new_($I$(6));
labPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(9).c$$I$I$I$I,[7, 7, 158, 23]));
valPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(9).c$$I$I$I$I,[172, 7, 270, 23]));
labPanel.add$java_awt_Component$O(label, "West");
valPanel.add$java_awt_Component(valBox);
laypanel.add$java_awt_Component(labPanel);
laypanel.add$java_awt_Component(valPanel);
valPanel.setToolTipText$S(tooltip);
labPanel.setToolTipText$S(tooltip);
valBox.setToolTipText$S(tooltip);
panel.add$java_awt_Component(laypanel);
panel.validate$();
return laypanel;
}, 1);

Clazz.newMeth(C$, 'mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent', function (cpanel, tooltip, jLabel, name) {
C$.mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S(cpanel, tooltip, jLabel, name, null);
}, 1);

Clazz.newMeth(C$, 'mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S', function (cpanel, tooltip, jLabel, name, params) {
cpanel.add$java_awt_Component(jLabel);
if (params == null ) {
cpanel.add$java_awt_Component(name);
} else {
cpanel.add$java_awt_Component$O(name, params);
}name.setToolTipText$S(tooltip);
jLabel.setToolTipText$S(tooltip);
}, 1);

Clazz.newMeth(C$, 'getLabelFont$', function () {
return C$.getLabelFont$Z$Z(false, false);
}, 1);

Clazz.newMeth(C$, 'getLabelFont$Z$Z', function (bold, italic) {
return Clazz.new_($I$(3).c$$S$I$I,["Verdana", (!bold && !italic ) ? 0 : (bold ? 1 : 0) + (italic ? 2 : 0), 11]);
}, 1);

Clazz.newMeth(C$, 'getTextAreaFont$', function () {
return C$.getLabelFont$Z$Z(false, false);
}, 1);

Clazz.newMeth(C$, 'cleanMenu$javax_swing_JMenu', function (webService) {
for (var i=0; i < webService.getItemCount$(); ) {
var item=webService.getItem$I(i);
if (Clazz.instanceOf(item, "javax.swing.JMenu") && (item).getItemCount$() == 0 ) {
webService.remove$I(i);
} else {
i++;
}}
}, 1);

Clazz.newMeth(C$, 'getScrollBarProportion$javax_swing_JScrollBar', function (scroll) {
var possibleRange=scroll.getMaximum$() - scroll.getMinimum$() - scroll.getModel$().getExtent$() ;
var valueInRange=scroll.getValue$() - (scroll.getModel$().getExtent$() / 2.0);
var proportion=valueInRange / possibleRange;
return proportion;
}, 1);

Clazz.newMeth(C$, 'getScrollValueForProportion$javax_swing_JScrollBar$F', function (scrollbar, proportion) {
var fraction=proportion * (scrollbar.getMaximum$() - scrollbar.getMinimum$() - scrollbar.getModel$().getExtent$() ) + (scrollbar.getModel$().getExtent$() / 2.0);
return Math.min(Math.round(fraction), scrollbar.getMaximum$());
}, 1);

Clazz.newMeth(C$, 'jvInitComponent$javax_swing_AbstractButton$S', function (comp, i18nString) {
C$.setColorAndFont$javax_swing_JComponent(comp);
if (i18nString != null  && !i18nString.isEmpty$() ) {
comp.setText$S($I$(10).getString$S(i18nString));
}}, 1);

Clazz.newMeth(C$, 'jvInitComponent$javax_swing_JComponent', function (comp) {
C$.setColorAndFont$javax_swing_JComponent(comp);
}, 1);

Clazz.newMeth(C$, 'setColorAndFont$javax_swing_JComponent', function (comp) {
comp.setBackground$java_awt_Color($I$(4).white);
comp.setFont$java_awt_Font(C$.getLabelFont$());
}, 1);

Clazz.newMeth(C$, 'buildComboWithTooltips$java_util_List$java_util_List', function (entries, tooltips) {
var combo=Clazz.new_($I$(11));
var renderer=Clazz.new_($I$(12));
combo.setRenderer$javax_swing_ListCellRenderer(renderer);
for (var attName, $attName = entries.iterator$(); $attName.hasNext$()&&((attName=($attName.next$())),1);) {
combo.addItem$TE(attName);
}
renderer.setTooltips$java_util_List(tooltips);
var mouseListener=((P$.JvSwingUtils$1||
(function(){var C$=Clazz.newClass(P$, "JvSwingUtils$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
var j=this.$finals$.combo.getSelectedIndex$();
if (j > -1) {
this.$finals$.combo.setToolTipText$S(this.$finals$.tooltips.get$I(j));
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
this.$finals$.combo.setToolTipText$S(null);
});
})()
), Clazz.new_($I$(13), [this, {combo: combo, tooltips: tooltips}],P$.JvSwingUtils$1));
for (var c, $c = 0, $$c = combo.getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
c.addMouseListener$java_awt_event_MouseListener(mouseListener);
}
return combo;
}, 1);

Clazz.newMeth(C$, 'createTitledBorder$javax_swing_JComponent$S$Z', function (comp, title, italic) {
var font=comp.getFont$();
if (italic) {
font=Clazz.new_($I$(3).c$$S$I$I,[font.getName$(), 2, font.getSize$()]);
}var border=$I$(14).createTitledBorder$S("");
var titledBorder=$I$(14).createTitledBorder$javax_swing_border_Border$S$I$I$java_awt_Font(border, title, 4, 0, font);
comp.setBorder$javax_swing_border_Border(titledBorder);
return titledBorder;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
