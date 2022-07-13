(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JCheckBoxMenuItem','jalview.util.MessageManager','javax.swing.JMenuItem','java.awt.event.MouseAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ViewSelectionMenu", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JMenu');
C$.$classes$=[['ViewSetProvider',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.append=false;
this.$enabled=true;
this.toggleview=null;
},1);

C$.$fields$=[['Z',['append','$enabled'],'O',['_allviews','jalview.gui.ViewSelectionMenu.ViewSetProvider','_selectedviews','java.util.List','_handler','java.awt.event.ItemListener','selectAll','javax.swing.JMenuItem','+invertSel','toggleview','javax.swing.JCheckBoxMenuItem']]]

Clazz.newMeth(C$, 'c$$S$jalview_gui_ViewSelectionMenu_ViewSetProvider$java_util_List$java_awt_event_ItemListener',  function (title, allviews, selectedviews, handler) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
this._allviews=allviews;
this._selectedviews=selectedviews;
this._handler=handler;
this.addMenuListener$javax_swing_event_MenuListener(((P$.ViewSelectionMenu$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ViewSelectionMenu$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.MenuListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'menuSelected$javax_swing_event_MenuEvent',  function (e) {
p$1.rebuild.apply(this.b$['jalview.gui.ViewSelectionMenu'], []);
});

Clazz.newMeth(C$, 'menuDeselected$javax_swing_event_MenuEvent',  function (e) {
});

Clazz.newMeth(C$, 'menuCanceled$javax_swing_event_MenuEvent',  function (e) {
});
})()
), Clazz.new_(P$.ViewSelectionMenu$1.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'rebuild',  function () {
this.removeAll$();
var allviews=this._allviews.getAllAlignmentPanels$();
if (allviews == null ) {
this.setVisible$Z(false);
return;
}if (allviews.length >= 2) {
this.append=this.append || this._selectedviews.size$() > 1 ;
this.toggleview=Clazz.new_([$I$(2).getString$S("label.select_many_views"), this.append],$I$(1,1).c$$S$Z);
this.toggleview.setToolTipText$S($I$(2).getString$S("label.toggle_enabled_views"));
this.toggleview.addItemListener$java_awt_event_ItemListener(((P$.ViewSelectionMenu$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ViewSelectionMenu$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (arg0) {
if (this.b$['jalview.gui.ViewSelectionMenu'].$enabled) {
this.b$['jalview.gui.ViewSelectionMenu'].append=!this.b$['jalview.gui.ViewSelectionMenu'].append;
this.b$['jalview.gui.ViewSelectionMenu'].selectAll.setEnabled$Z(this.b$['jalview.gui.ViewSelectionMenu'].append);
this.b$['jalview.gui.ViewSelectionMenu'].invertSel.setEnabled$Z(this.b$['jalview.gui.ViewSelectionMenu'].append);
}});
})()
), Clazz.new_(P$.ViewSelectionMenu$2.$init$,[this, null])));
this.add$javax_swing_JMenuItem(this.toggleview);
this.add$javax_swing_JMenuItem(this.selectAll=Clazz.new_([$I$(2).getString$S("label.select_all_views")],$I$(3,1).c$$S));
this.selectAll.addActionListener$java_awt_event_ActionListener(((P$.ViewSelectionMenu$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ViewSelectionMenu$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var c, $c = 0, $$c = this.b$['javax.swing.JMenu'].getMenuComponents$.apply(this.b$['javax.swing.JMenu'], []); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var t=this.b$['jalview.gui.ViewSelectionMenu'].append;
this.b$['jalview.gui.ViewSelectionMenu'].append=true;
if (Clazz.instanceOf(c, "javax.swing.JCheckBoxMenuItem")) {
if (this.b$['jalview.gui.ViewSelectionMenu'].toggleview !== c  && !(c).isSelected$() ) {
(c).doClick$();
}}this.b$['jalview.gui.ViewSelectionMenu'].append=t;
}
});
})()
), Clazz.new_(P$.ViewSelectionMenu$3.$init$,[this, null])));
this.add$javax_swing_JMenuItem(this.invertSel=Clazz.new_([$I$(2).getString$S("label.invert_selection")],$I$(3,1).c$$S));
this.invertSel.addActionListener$java_awt_event_ActionListener(((P$.ViewSelectionMenu$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ViewSelectionMenu$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var t=this.b$['jalview.gui.ViewSelectionMenu'].append;
this.b$['jalview.gui.ViewSelectionMenu'].append=true;
for (var c, $c = 0, $$c = this.b$['javax.swing.JMenu'].getMenuComponents$.apply(this.b$['javax.swing.JMenu'], []); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (this.b$['jalview.gui.ViewSelectionMenu'].toggleview !== c  && Clazz.instanceOf(c, "javax.swing.JCheckBoxMenuItem") ) {
(c).doClick$();
}}
this.b$['jalview.gui.ViewSelectionMenu'].append=t;
});
})()
), Clazz.new_(P$.ViewSelectionMenu$4.$init$,[this, null])));
this.invertSel.setEnabled$Z(this.append);
this.selectAll.setEnabled$Z(this.append);
}for (var ap, $ap = 0, $$ap = allviews; $ap<$$ap.length&&((ap=($$ap[$ap])),1);$ap++) {
var nm=((ap.getViewName$() == null  || ap.getViewName$().length$() == 0 ) ? "" : ap.getViewName$() + " for ") + ap.alignFrame.getTitle$();
var checkBox=Clazz.new_([nm, this._selectedviews.contains$O(ap)],$I$(1,1).c$$S$Z);
checkBox.addItemListener$java_awt_event_ItemListener(((P$.ViewSelectionMenu$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ViewSelectionMenu$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['jalview.gui.ViewSelectionMenu'].$enabled) {
if (this.b$['jalview.gui.ViewSelectionMenu'].append) {
this.b$['jalview.gui.ViewSelectionMenu'].$enabled=false;
if (this.b$['jalview.gui.ViewSelectionMenu']._selectedviews.indexOf$O(this.$finals$.ap) == -1) {
this.b$['jalview.gui.ViewSelectionMenu']._selectedviews.add$O(this.$finals$.ap);
this.$finals$.checkBox.setSelected$Z(true);
} else {
this.b$['jalview.gui.ViewSelectionMenu']._selectedviews.remove$O(this.$finals$.ap);
this.$finals$.checkBox.setSelected$Z(false);
}this.b$['jalview.gui.ViewSelectionMenu'].$enabled=true;
this.b$['jalview.gui.ViewSelectionMenu']._handler.itemStateChanged$java_awt_event_ItemEvent(e);
} else {
this.b$['jalview.gui.ViewSelectionMenu']._selectedviews.clear$();
this.b$['jalview.gui.ViewSelectionMenu']._selectedviews.add$O(this.$finals$.ap);
this.b$['jalview.gui.ViewSelectionMenu'].$enabled=false;
for (var c, $c = 0, $$c = this.b$['javax.swing.JMenu'].getMenuComponents$.apply(this.b$['javax.swing.JMenu'], []); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (Clazz.instanceOf(c, "javax.swing.JCheckBoxMenuItem")) {
(c).setSelected$Z(this.$finals$.checkBox === c );
}}
this.b$['jalview.gui.ViewSelectionMenu'].$enabled=true;
this.b$['jalview.gui.ViewSelectionMenu']._handler.itemStateChanged$java_awt_event_ItemEvent(e);
}}});
})()
), Clazz.new_(P$.ViewSelectionMenu$5.$init$,[this, {ap:ap,checkBox:checkBox}])));
var us=this;
checkBox.addMouseListener$java_awt_event_MouseListener(((P$.ViewSelectionMenu$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ViewSelectionMenu$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
try {
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
try {
this.$finals$.ap.setAlignFrameView$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});
})()
), Clazz.new_($I$(4,1),[this, {ap:ap}],P$.ViewSelectionMenu$6)));
this.add$javax_swing_JMenuItem(checkBox);
}
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ViewSelectionMenu, "ViewSetProvider", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
