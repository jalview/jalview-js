(function(){var P$=Clazz.newPackage("jalview.jbgui"),I$=[[0,'javax.swing.JPanel','net.miginfocom.swing.MigLayout','java.awt.Dimension','javax.swing.JList','javax.swing.JTextField','javax.swing.JScrollPane','jalview.gui.JvSwingUtils','jalview.util.MessageManager','javax.swing.JLabel','javax.swing.border.TitledBorder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GRestInputParamEditDialog");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dpane','javax.swing.JPanel','+okcancel','typeList','javax.swing.JList','tok','javax.swing.JTextField','options','javax.swing.JPanel','+optionsPanel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.jbInit$();
}, 1);

Clazz.newMeth(C$, 'jbInit$',  function () {
this.dpane=Clazz.new_([Clazz.new_($I$(2,1).c$$S$S$S,["", "[][][fill]", "[][fill][]"])],$I$(1,1).c$$java_awt_LayoutManager);
this.dpane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[550, 400]));
this.typeList=Clazz.new_($I$(4,1));
this.typeList.setSelectionMode$I(0);
this.typeList.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.GRestInputParamEditDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestInputParamEditDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['jalview.jbgui.GRestInputParamEditDialog'].type_SelectionChangedActionPerformed$javax_swing_event_ListSelectionEvent.apply(this.b$['jalview.jbgui.GRestInputParamEditDialog'], [e]);
});
})()
), Clazz.new_(P$.GRestInputParamEditDialog$1.$init$,[this, null])));
this.tok=Clazz.new_($I$(5,1));
this.tok.addKeyListener$java_awt_event_KeyListener(((P$.GRestInputParamEditDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "GRestInputParamEditDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.KeyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.jbgui.GRestInputParamEditDialog'].tokChanged_actionPerformed$.apply(this.b$['jalview.jbgui.GRestInputParamEditDialog'], []);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
});
})()
), Clazz.new_(P$.GRestInputParamEditDialog$2.$init$,[this, null])));
this.options=Clazz.new_([Clazz.new_($I$(2,1).c$$S$S$S,["", "[grow 100,fill]", ""])],$I$(1,1).c$$java_awt_LayoutManager);
this.optionsPanel=Clazz.new_([Clazz.new_($I$(2,1).c$$S$S$S,["", "[fill]", "[fill]"])],$I$(1,1).c$$java_awt_LayoutManager);
var optionView=Clazz.new_($I$(6,1));
optionView.setViewportView$java_awt_Component(this.options);
$I$(7,"mgAddtoLayout$javax_swing_JPanel$S$javax_swing_JLabel$javax_swing_JComponent$S",[this.dpane, $I$(8).getString$S("label.input_parameter_name"), Clazz.new_([$I$(8).getString$S("label.name")],$I$(9,1).c$$S), this.tok, "grow,spanx 3,wrap"]);
var paramsType=Clazz.new_([Clazz.new_($I$(2,1).c$$S$S$S,["", "[grow 100,fill]", "[grow 100,fill]"])],$I$(1,1).c$$java_awt_LayoutManager);
paramsType.setBorder$javax_swing_border_Border(Clazz.new_([$I$(8).getString$S("label.select_input_type")],$I$(10,1).c$$S));
var jlistScroller=Clazz.new_($I$(6,1));
jlistScroller.setViewportView$java_awt_Component(this.typeList);
paramsType.add$java_awt_Component$O(jlistScroller, "spanx 2,spany 2");
this.dpane.add$java_awt_Component(paramsType);
this.optionsPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(8).getString$S("label.set_options_for_type")],$I$(10,1).c$$S));
this.optionsPanel.add$java_awt_Component(optionView);
this.dpane.add$java_awt_Component$O(this.optionsPanel, "wrap");
this.okcancel=Clazz.new_([Clazz.new_($I$(2,1).c$$S$S$S,["", "[center][center]", "[]"])],$I$(1,1).c$$java_awt_LayoutManager);
this.dpane.add$java_awt_Component$O(this.okcancel, "spanx 3,wrap");
});

Clazz.newMeth(C$, 'tokChanged_actionPerformed$',  function () {
});

Clazz.newMeth(C$, 'type_SelectionChangedActionPerformed$javax_swing_event_ListSelectionEvent',  function (e) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
