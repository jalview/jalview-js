(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[[0,'javax.swing.JPanel','net.miginfocom.swing.MigLayout','java.awt.Dimension','javax.swing.JList','javax.swing.JTextField','javax.swing.JScrollPane','jalview.gui.JvSwingUtils','jalview.util.MessageManager','javax.swing.JLabel','javax.swing.border.TitledBorder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GRestInputParamEditDialog");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dpane=null;
this.okcancel=null;
this.typeList=null;
this.tok=null;
this.options=null;
this.optionsPanel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.jbInit$();
}, 1);

Clazz.newMeth(C$, 'jbInit$', function () {
this.dpane=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2).c$$S$S$S,["", "[][][fill]", "[][fill][]"])]);
this.dpane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[550, 400]));
this.typeList=Clazz.new_($I$(4));
this.typeList.setSelectionMode$I(0);
this.typeList.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.GRestInputParamEditDialog$1||
(function(){var C$=Clazz.newClass(P$, "GRestInputParamEditDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_ListSelectionEvent','valueChanged$'], function (e) {
this.b$['jalview.jbgui.GRestInputParamEditDialog'].type_SelectionChangedActionPerformed$javax_swing_event_ListSelectionEvent.apply(this.b$['jalview.jbgui.GRestInputParamEditDialog'], [e]);
});
})()
), Clazz.new_(P$.GRestInputParamEditDialog$1.$init$, [this, null])));
this.tok=Clazz.new_($I$(5));
this.tok.addKeyListener$java_awt_event_KeyListener(((P$.GRestInputParamEditDialog$2||
(function(){var C$=Clazz.newClass(P$, "GRestInputParamEditDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
this.b$['jalview.jbgui.GRestInputParamEditDialog'].tokChanged_actionPerformed$.apply(this.b$['jalview.jbgui.GRestInputParamEditDialog'], []);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
});
})()
), Clazz.new_(P$.GRestInputParamEditDialog$2.$init$, [this, null])));
this.options=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2).c$$S$S$S,["", "[grow 100,fill]", ""])]);
this.optionsPanel=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2).c$$S$S$S,["", "[fill]", "[fill]"])]);
var optionView=Clazz.new_($I$(6));
optionView.setViewportView$java_awt_Component(this.options);
$I$(7).mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S(this.dpane, $I$(8).getString$S("label.input_parameter_name"), Clazz.new_($I$(9).c$$S,[$I$(8).getString$S("label.name")]), this.tok, "grow,spanx 3,wrap");
var paramsType=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2).c$$S$S$S,["", "[grow 100,fill]", "[grow 100,fill]"])]);
paramsType.setBorder$javax_swing_border_Border(Clazz.new_($I$(10).c$$S,[$I$(8).getString$S("label.select_input_type")]));
var jlistScroller=Clazz.new_($I$(6));
jlistScroller.setViewportView$java_awt_Component(this.typeList);
paramsType.add$java_awt_Component$O(jlistScroller, "spanx 2,spany 2");
this.dpane.add$java_awt_Component(paramsType);
this.optionsPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(10).c$$S,[$I$(8).getString$S("label.set_options_for_type")]));
this.optionsPanel.add$java_awt_Component(optionView);
this.dpane.add$java_awt_Component$O(this.optionsPanel, "wrap");
this.okcancel=Clazz.new_($I$(1).c$$java_awt_LayoutManager,[Clazz.new_($I$(2).c$$S$S$S,["", "[center][center]", "[]"])]);
this.dpane.add$java_awt_Component$O(this.okcancel, "spanx 3,wrap");
});

Clazz.newMeth(C$, 'tokChanged_actionPerformed$', function () {
});

Clazz.newMeth(C$, 'type_SelectionChangedActionPerformed$javax_swing_event_ListSelectionEvent', function (e) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
