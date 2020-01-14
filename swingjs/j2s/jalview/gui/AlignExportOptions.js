(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JCheckBox','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager','javax.swing.JPanel','java.awt.BorderLayout','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlignExportOptions", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.chkHiddenSeqs=null;
this.chkHiddenCols=null;
this.chkExportAnnots=null;
this.chkExportFeats=null;
this.chkExportGrps=null;
this.settings=null;
this.isComplexAlignFile=false;
this.dialog=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.chkHiddenSeqs=Clazz.new_($I$(1));
this.chkHiddenCols=Clazz.new_($I$(1));
this.chkExportAnnots=Clazz.new_($I$(1));
this.chkExportFeats=Clazz.new_($I$(1));
this.chkExportGrps=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'isNeeded$jalview_api_AlignViewportI$jalview_io_FileFormatI', function (viewport, format) {
if (viewport.hasHiddenColumns$() || viewport.hasHiddenRows$() || format.isComplexAlignFile$()  ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_AlignViewportI$jalview_io_FileFormatI$jalview_api_AlignExportSettingsI', function (viewport, format, defaults) {
Clazz.super_(C$, this,1);
this.settings=defaults;
this.isComplexAlignFile=format.isComplexAlignFile$();
p$1.init$Z$Z.apply(this, [viewport.hasHiddenRows$(), viewport.hasHiddenColumns$()]);
this.dialog=$I$(2).newOptionDialog$java_awt_Component($I$(3).desktop);
}, 1);

Clazz.newMeth(C$, 'showDialog$', function () {
var options=Clazz.array(java.lang.Object, -1, [$I$(4).getString$S("action.ok"), $I$(4).getString$S("action.cancel")]);
this.dialog.showInternalDialog$javax_swing_JPanel$S$I$I$javax_swing_Icon$OA$S(this, $I$(4).getString$S("label.export_settings"), 2, -1, null, options, $I$(4).getString$S("action.ok"));
});

Clazz.newMeth(C$, 'setResponseAction$O$Runnable', function (response, action) {
this.dialog.setResponseHandler$O$Runnable(response, action);
});

Clazz.newMeth(C$, 'checkAllAction$Z', function (isSelected) {
var set=this.chkHiddenSeqs.isEnabled$() && isSelected ;
this.chkHiddenSeqs.setSelected$Z(set);
this.settings.setExportHiddenSequences$Z(set);
set=this.chkHiddenCols.isEnabled$() && isSelected ;
this.chkHiddenCols.setSelected$Z(set);
this.settings.setExportHiddenColumns$Z(set);
set=this.isComplexAlignFile && this.chkExportAnnots.isEnabled$() && isSelected  ;
this.chkExportAnnots.setSelected$Z(set);
this.settings.setExportAnnotations$Z(set);
set=this.isComplexAlignFile && this.chkExportFeats.isEnabled$() && isSelected  ;
this.chkExportFeats.setSelected$Z(set);
this.settings.setExportFeatures$Z(set);
set=this.isComplexAlignFile && this.chkExportGrps.isEnabled$() && isSelected  ;
this.chkExportGrps.setSelected$Z(set);
this.settings.setExportGroups$Z(set);
});

Clazz.newMeth(C$, 'init$Z$Z', function (hasHiddenSeq, hasHiddenCols) {
this.chkHiddenSeqs.setText$S($I$(4).getString$S("action.export_hidden_sequences"));
this.chkHiddenSeqs.addActionListener$java_awt_event_ActionListener(((P$.AlignExportOptions$1||
(function(){var C$=Clazz.newClass(P$, "AlignExportOptions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.AlignExportOptions'].settings.setExportHiddenSequences$Z(this.b$['jalview.gui.AlignExportOptions'].chkHiddenSeqs.isSelected$());
});
})()
), Clazz.new_(P$.AlignExportOptions$1.$init$, [this, null])));
this.chkHiddenCols.setText$S($I$(4).getString$S("action.export_hidden_columns"));
this.chkHiddenCols.addActionListener$java_awt_event_ActionListener(((P$.AlignExportOptions$2||
(function(){var C$=Clazz.newClass(P$, "AlignExportOptions$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.AlignExportOptions'].settings.setExportHiddenColumns$Z(this.b$['jalview.gui.AlignExportOptions'].chkHiddenCols.isSelected$());
});
})()
), Clazz.new_(P$.AlignExportOptions$2.$init$, [this, null])));
this.chkExportAnnots.setText$S($I$(4).getString$S("action.export_annotations"));
this.chkExportAnnots.addActionListener$java_awt_event_ActionListener(((P$.AlignExportOptions$3||
(function(){var C$=Clazz.newClass(P$, "AlignExportOptions$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.AlignExportOptions'].settings.setExportAnnotations$Z(this.b$['jalview.gui.AlignExportOptions'].chkExportAnnots.isSelected$());
});
})()
), Clazz.new_(P$.AlignExportOptions$3.$init$, [this, null])));
this.chkExportFeats.setText$S($I$(4).getString$S("action.export_features"));
this.chkExportFeats.addActionListener$java_awt_event_ActionListener(((P$.AlignExportOptions$4||
(function(){var C$=Clazz.newClass(P$, "AlignExportOptions$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.AlignExportOptions'].settings.setExportFeatures$Z(this.b$['jalview.gui.AlignExportOptions'].chkExportFeats.isSelected$());
});
})()
), Clazz.new_(P$.AlignExportOptions$4.$init$, [this, null])));
this.chkExportGrps.setText$S($I$(4).getString$S("action.export_groups"));
this.chkExportGrps.addActionListener$java_awt_event_ActionListener(((P$.AlignExportOptions$5||
(function(){var C$=Clazz.newClass(P$, "AlignExportOptions$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.AlignExportOptions'].settings.setExportGroups$Z(this.b$['jalview.gui.AlignExportOptions'].chkExportGrps.isSelected$());
});
})()
), Clazz.new_(P$.AlignExportOptions$5.$init$, [this, null])));
var chkAll=Clazz.new_($I$(1).c$$S,[$I$(4).getString$S("action.select_all")]);
var hiddenRegionConfPanel=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
var complexExportPanel=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(6))]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6)));
chkAll.addItemListener$java_awt_event_ItemListener(((P$.AlignExportOptions$6||
(function(){var C$=Clazz.newClass(P$, "AlignExportOptions$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
this.b$['jalview.gui.AlignExportOptions'].checkAllAction$Z.apply(this.b$['jalview.gui.AlignExportOptions'], [this.$finals$.chkAll.isSelected$()]);
});
})()
), Clazz.new_(P$.AlignExportOptions$6.$init$, [this, {chkAll: chkAll}])));
hiddenRegionConfPanel.add$java_awt_Component$O(this.chkHiddenSeqs, "Center");
hiddenRegionConfPanel.add$java_awt_Component$O(this.chkHiddenCols, "South");
this.chkHiddenSeqs.setEnabled$Z(hasHiddenSeq);
this.chkHiddenCols.setEnabled$Z(hasHiddenCols);
complexExportPanel.add$java_awt_Component$O(this.chkExportAnnots, "North");
complexExportPanel.add$java_awt_Component$O(this.chkExportFeats, "Center");
complexExportPanel.add$java_awt_Component$O(this.chkExportGrps, "South");
var actionPanel=Clazz.new_($I$(5).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I,[1])]);
actionPanel.add$java_awt_Component(chkAll);
var optionsPanel=Clazz.new_($I$(5));
if (this.isComplexAlignFile) {
optionsPanel.add$java_awt_Component(complexExportPanel);
}if (hasHiddenSeq || hasHiddenCols ) {
optionsPanel.add$java_awt_Component(hiddenRegionConfPanel);
}this.add$java_awt_Component$O(optionsPanel, "North");
this.add$java_awt_Component$O(actionPanel, "South");
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
