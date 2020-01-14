(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.util.MessageManager','jalview.gui.FeatureSettings','javax.swing.BorderFactory','javax.swing.JButton','jalview.schemes.FeatureColour','jalview.gui.JalviewColourChooser','jalview.gui.FeatureTypeSettings','jalview.util.Platform','jalview.datamodel.features.FeatureMatcherSet','javax.swing.JLabel','javax.swing.JScrollPane','javax.swing.JSlider','java.util.HashMap','jalview.gui.JvSwingUtils','java.awt.Point','javax.swing.JTable','java.awt.Font','javax.swing.ToolTipManager',['jalview.gui.FeatureSettings','.ColorEditor'],['jalview.gui.FeatureSettings','.ColorRenderer'],['jalview.gui.FeatureSettings','.FilterEditor'],['jalview.gui.FeatureSettings','.FilterRenderer'],'javax.swing.table.TableColumn','java.awt.event.MouseAdapter','java.awt.event.MouseMotionAdapter','javax.swing.JInternalFrame','jalview.gui.Desktop','java.awt.Dimension','javax.swing.event.InternalFrameAdapter','javax.swing.JLayeredPane','javax.swing.JPopupMenu','javax.swing.JCheckBoxMenuItem','javax.swing.JMenuItem','java.util.Arrays','java.util.HashSet','javax.swing.JCheckBox','java.util.Hashtable',['jalview.gui.FeatureSettings','.FeatureTableModel'],'java.awt.GridLayout','jalview.util.QuickSort','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','java.io.InputStreamReader','java.io.FileInputStream','javax.xml.bind.JAXBContext','javax.xml.stream.XMLInputFactory','jalview.xml.binding.jalview.JalviewUserColours','jalview.project.Jalview2XML','java.io.PrintWriter','java.io.OutputStreamWriter','java.io.FileOutputStream',['jalview.xml.binding.jalview.JalviewUserColours','.Filter'],'jalview.xml.binding.jalview.ObjectFactory',['jalview.viewmodel.seqfeatures.FeatureRendererModel','.FeatureSettingsBean'],'java.awt.BorderLayout','javax.swing.JPanel','jalview.gui.Help',['jalview.gui.Help','.HelpId'],'StringBuilder','jalview.datamodel.features.FeatureMatcher','jalview.gui.FeatureIcon','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureSettings", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'jalview.api.FeatureSettingsControllerI');
C$.SEQUENCE_FEATURE_COLOURS=null;
C$.BASE_TOOLTIP=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.SEQUENCE_FEATURE_COLOURS=$I$(1).getString$S("label.sequence_feature_colours");
C$.BASE_TOOLTIP=$I$(1).getString$S("label.click_to_edit");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fr=null;
this.af=null;
this.originalData=null;
this.originalTransparency=0;
this.originalFilters=null;
this.frame=null;
this.scrollPane=null;
this.table=null;
this.groupPanel=null;
this.transparency=null;
this.inConstruction=false;
this.selectedRow=0;
this.resettingTable=false;
this.handlingUpdate=false;
this.typeWidth=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.scrollPane=Clazz.new_($I$(11));
this.transparency=Clazz.new_($I$(12));
this.inConstruction=true;
this.selectedRow=-1;
this.resettingTable=false;
this.handlingUpdate=false;
this.typeWidth=null;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame', function (alignFrame) {
Clazz.super_(C$, this,1);
this.af=alignFrame;
this.fr=this.af.getFeatureRenderer$();
this.originalTransparency=this.fr.getTransparency$();
var originalTransparencyAsPercent=((this.originalTransparency * 100)|0);
this.transparency.setMaximum$I(100 - originalTransparencyAsPercent);
this.originalFilters=Clazz.new_($I$(13).c$$java_util_Map,[this.fr.getFeatureFilters$()]);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.table=((P$.FeatureSettings$1||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JTable'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent', function (e) {
var tip=null;
var column=this.b$['jalview.gui.FeatureSettings'].table.columnAtPoint$java_awt_Point(e.getPoint$());
var row=this.b$['jalview.gui.FeatureSettings'].table.rowAtPoint$java_awt_Point(e.getPoint$());
switch (column) {
case 0:
tip=$I$(14).wrapTooltip$Z$S(true, $I$(1).getString$S("label.feature_settings_click_drag"));
break;
case 1:
var colour=this.b$['jalview.gui.FeatureSettings'].table.getValueAt$I$I(row, column);
tip=P$.FeatureSettings.getColorTooltip$jalview_api_FeatureColourI$Z(colour, true);
break;
case 2:
var o=this.b$['jalview.gui.FeatureSettings'].table.getValueAt$I$I(row, column);
tip=o.isEmpty$() ? $I$(1).getString$S("label.configure_feature_tooltip") : o.toString();
break;
default:
break;
}
return tip;
});

Clazz.newMeth(C$, 'getToolTipLocation$java_awt_event_MouseEvent', function (e) {
var point=e.getPoint$();
var column=this.b$['jalview.gui.FeatureSettings'].table.columnAtPoint$java_awt_Point(point);
var row=this.b$['jalview.gui.FeatureSettings'].table.rowAtPoint$java_awt_Point(point);
var r=this.getCellRect$I$I$Z(row, column, false);
var loc=Clazz.new_($I$(15).c$$I$I,[r.x + (r.width/2|0), r.y + r.height - 3]);
return loc;
});
})()
), Clazz.new_($I$(16), [this, null],P$.FeatureSettings$1));
var tableHeader=this.table.getTableHeader$();
tableHeader.setFont$java_awt_Font(Clazz.new_($I$(17).c$$S$I$I,["Verdana", 0, 12]));
tableHeader.setReorderingAllowed$Z(false);
this.table.setFont$java_awt_Font(Clazz.new_($I$(17).c$$S$I$I,["Verdana", 0, 12]));
$I$(18).sharedInstance$().registerComponent$javax_swing_JComponent(this.table);
this.table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass($I$(5)), Clazz.new_($I$(19), [this, null]));
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(5)), Clazz.new_($I$(20), [this, null]));
this.table.setDefaultEditor$Class$javax_swing_table_TableCellEditor(Clazz.getClass($I$(9)), Clazz.new_($I$(21), [this, null]));
this.table.setDefaultRenderer$Class$javax_swing_table_TableCellRenderer(Clazz.getClass($I$(9)), Clazz.new_($I$(22), [this, null]));
var colourColumn=Clazz.new_($I$(23).c$$I$I$javax_swing_table_TableCellRenderer$javax_swing_table_TableCellEditor,[1, 75, Clazz.new_($I$(20), [this, null]), Clazz.new_($I$(19), [this, null])]);
this.table.addColumn$javax_swing_table_TableColumn(colourColumn);
var filterColumn=Clazz.new_($I$(23).c$$I$I$javax_swing_table_TableCellRenderer$javax_swing_table_TableCellEditor,[2, 75, Clazz.new_($I$(22), [this, null]), Clazz.new_($I$(21), [this, null])]);
this.table.addColumn$javax_swing_table_TableColumn(filterColumn);
this.table.setSelectionMode$I(0);
this.table.addMouseListener$java_awt_event_MouseListener(((P$.FeatureSettings$2||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
this.b$['jalview.gui.FeatureSettings'].selectedRow=this.b$['jalview.gui.FeatureSettings'].table.rowAtPoint$java_awt_Point(evt.getPoint$());
var type=this.b$['jalview.gui.FeatureSettings'].table.getValueAt$I$I(this.b$['jalview.gui.FeatureSettings'].selectedRow, 0);
if (evt.isPopupTrigger$()) {
var colour=this.b$['jalview.gui.FeatureSettings'].table.getValueAt$I$I(this.b$['jalview.gui.FeatureSettings'].selectedRow, 1);
this.b$['jalview.gui.FeatureSettings'].showPopupMenu$I$S$O$java_awt_Point.apply(this.b$['jalview.gui.FeatureSettings'], [this.b$['jalview.gui.FeatureSettings'].selectedRow, type, colour, evt.getPoint$()]);
} else if (evt.getClickCount$() == 2) {
var invertSelection=evt.isAltDown$();
var toggleSelection=$I$(8).isControlDown$java_awt_event_MouseEvent(evt);
var extendSelection=evt.isShiftDown$();
this.b$['jalview.gui.FeatureSettings'].fr.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(invertSelection, extendSelection, toggleSelection, type);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.b$['jalview.gui.FeatureSettings'].selectedRow=this.b$['jalview.gui.FeatureSettings'].table.rowAtPoint$java_awt_Point(evt.getPoint$());
if (evt.isPopupTrigger$()) {
var type=this.b$['jalview.gui.FeatureSettings'].table.getValueAt$I$I(this.b$['jalview.gui.FeatureSettings'].selectedRow, 0);
var colour=this.b$['jalview.gui.FeatureSettings'].table.getValueAt$I$I(this.b$['jalview.gui.FeatureSettings'].selectedRow, 1);
this.b$['jalview.gui.FeatureSettings'].showPopupMenu$I$S$O$java_awt_Point.apply(this.b$['jalview.gui.FeatureSettings'], [this.b$['jalview.gui.FeatureSettings'].selectedRow, type, colour, evt.getPoint$()]);
}});
})()
), Clazz.new_($I$(24), [this, null],P$.FeatureSettings$2)));
this.table.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.FeatureSettings$3||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseMotionAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
var newRow=this.b$['jalview.gui.FeatureSettings'].table.rowAtPoint$java_awt_Point(evt.getPoint$());
if (newRow != this.b$['jalview.gui.FeatureSettings'].selectedRow && this.b$['jalview.gui.FeatureSettings'].selectedRow != -1  && newRow != -1 ) {
var data=(this.b$['jalview.gui.FeatureSettings'].table.getModel$()).getData$();
var direction=newRow < this.b$['jalview.gui.FeatureSettings'].selectedRow ? -1 : 1;
for (var i=this.b$['jalview.gui.FeatureSettings'].selectedRow; i != newRow; i+=direction) {
var temp=data[i];
data[i]=data[i + direction];
data[i + direction]=temp;
}
this.b$['jalview.gui.FeatureSettings'].updateFeatureRenderer$OAA.apply(this.b$['jalview.gui.FeatureSettings'], [data]);
this.b$['jalview.gui.FeatureSettings'].table.repaint$();
this.b$['jalview.gui.FeatureSettings'].selectedRow=newRow;
}});
})()
), Clazz.new_($I$(25), [this, null],P$.FeatureSettings$3)));
this.scrollPane.setViewportView$java_awt_Component(this.table);
if (this.af.getViewport$().isShowSequenceFeatures$() || !this.fr.hasRenderOrder$() ) {
this.fr.findAllFeatures$Z(true);
}this.discoverAllFeatureData$();
var change;
var fs=this;
this.fr.addPropertyChangeListener$java_beans_PropertyChangeListener(change=((P$.FeatureSettings$4||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if (!this.$finals$.fs.resettingTable && !this.$finals$.fs.handlingUpdate ) {
this.$finals$.fs.handlingUpdate=true;
this.$finals$.fs.resetTable$SA(null);
this.$finals$.fs.handlingUpdate=false;
}});
})()
), Clazz.new_(P$.FeatureSettings$4.$init$, [this, {fs: fs}])));
this.frame=Clazz.new_($I$(26));
this.frame.setContentPane$java_awt_Container(this);
$I$(27).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.frame, $I$(1).getString$S("label.sequence_feature_settings"), 600, $I$(8).isAMacAndNotJS$() ? 480 : 450);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(28).c$$I$I,[400, 400]));
this.frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.FeatureSettings$5||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
this.b$['jalview.gui.FeatureSettings'].fr.removePropertyChangeListener$java_beans_PropertyChangeListener(this.$finals$.change);
});
})()
), Clazz.new_($I$(29), [this, {change: change}],P$.FeatureSettings$5)));
this.frame.setLayer$Integer($I$(30).PALETTE_LAYER);
this.inConstruction=false;
}, 1);

Clazz.newMeth(C$, 'showPopupMenu$I$S$O$java_awt_Point', function (rowSelected, type, typeCol, pt) {
var men=Clazz.new_($I$(31).c$$S,[$I$(1).formatMessage$S$SA("label.settings_for_param", Clazz.array(String, -1, [type]))]);
var featureColour=typeCol;
var variableColourCB=Clazz.new_($I$(32).c$$S,[$I$(1).getString$S("label.variable_colour")]);
variableColourCB.setSelected$Z(!featureColour.isSimpleColour$());
men.add$javax_swing_JMenuItem(variableColourCB);
variableColourCB.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$6||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getSource$() === this.$finals$.variableColourCB ) {
this.$finals$.men.setVisible$Z(true);
this.$finals$.men.setVisible$Z(false);
if (this.$finals$.featureColour.isSimpleColour$()) {
var fc=Clazz.new_($I$(7).c$$jalview_gui_FeatureRenderer$S,[this.b$['jalview.gui.FeatureSettings'].fr, this.$finals$.type]);
fc.addActionListener$java_awt_event_ActionListener(this);
} else {
var title=$I$(1).formatMessage$S$OA("label.select_colour_for", [this.$finals$.type]);
var listener=((P$.FeatureSettings$6$1||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['colourSelected$java_awt_Color','colourSelected$'], function (c) {
this.b$['jalview.gui.FeatureSettings'].table.setValueAt$O$I$I(Clazz.new_($I$(5).c$$java_awt_Color,[c]), this.$finals$.rowSelected, 1);
this.b$['jalview.gui.FeatureSettings'].table.validate$();
this.b$['jalview.gui.FeatureSettings'].updateFeatureRenderer$OAA$Z.apply(this.b$['jalview.gui.FeatureSettings'], [(this.b$['jalview.gui.FeatureSettings'].table.getModel$()).getData$(), false]);
});
})()
), Clazz.new_(P$.FeatureSettings$6$1.$init$, [this, {rowSelected: this.$finals$.rowSelected}]));
$I$(6).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener(this.b$['jalview.gui.FeatureSettings'], title, this.$finals$.featureColour.getMaxColour$(), listener);
}} else {
if (Clazz.instanceOf(e.getSource$(), "jalview.gui.FeatureTypeSettings")) {
var fci=this.b$['jalview.gui.FeatureSettings'].fr.getFeatureColours$().get$O(this.$finals$.type);
this.b$['jalview.gui.FeatureSettings'].table.setValueAt$O$I$I(fci, this.$finals$.rowSelected, 1);
}}});
})()
), Clazz.new_(P$.FeatureSettings$6.$init$, [this, {variableColourCB: variableColourCB, men: men, featureColour: featureColour, type: type, rowSelected: rowSelected}])));
men.addSeparator$();
var scr=Clazz.new_($I$(33).c$$S,[$I$(1).getString$S("label.sort_by_score")]);
men.add$javax_swing_JMenuItem(scr);
scr.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$7||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].af.avc.sortAlignmentByFeatureScore$java_util_List($I$(34).asList$TTA(Clazz.array(String, -1, [this.$finals$.type])));
});
})()
), Clazz.new_(P$.FeatureSettings$7.$init$, [this, {type: type}])));
var dens=Clazz.new_($I$(33).c$$S,[$I$(1).getString$S("label.sort_by_density")]);
dens.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$8||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].af.avc.sortAlignmentByFeatureDensity$java_util_List($I$(34).asList$TTA(Clazz.array(String, -1, [this.$finals$.type])));
});
})()
), Clazz.new_(P$.FeatureSettings$8.$init$, [this, {type: type}])));
men.add$javax_swing_JMenuItem(dens);
var selCols=Clazz.new_($I$(33).c$$S,[$I$(1).getString$S("label.select_columns_containing")]);
selCols.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$9||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.FeatureSettings'].fr.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(false, false, false, this.$finals$.type);
});
})()
), Clazz.new_(P$.FeatureSettings$9.$init$, [this, {type: type}])));
var clearCols=Clazz.new_($I$(33).c$$S,[$I$(1).getString$S("label.select_columns_not_containing")]);
clearCols.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$10||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.FeatureSettings'].fr.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(true, false, false, this.$finals$.type);
});
})()
), Clazz.new_(P$.FeatureSettings$10.$init$, [this, {type: type}])));
var hideCols=Clazz.new_($I$(33).c$$S,[$I$(1).getString$S("label.hide_columns_containing")]);
hideCols.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$11||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.FeatureSettings'].fr.ap.alignFrame.hideFeatureColumns$S$Z(this.$finals$.type, true);
});
})()
), Clazz.new_(P$.FeatureSettings$11.$init$, [this, {type: type}])));
var hideOtherCols=Clazz.new_($I$(33).c$$S,[$I$(1).getString$S("label.hide_columns_not_containing")]);
hideOtherCols.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$12||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.FeatureSettings'].fr.ap.alignFrame.hideFeatureColumns$S$Z(this.$finals$.type, false);
});
})()
), Clazz.new_(P$.FeatureSettings$12.$init$, [this, {type: type}])));
men.add$javax_swing_JMenuItem(selCols);
men.add$javax_swing_JMenuItem(clearCols);
men.add$javax_swing_JMenuItem(hideCols);
men.add$javax_swing_JMenuItem(hideOtherCols);
men.show$java_awt_Component$I$I(this.table, pt.x, pt.y);
});

Clazz.newMeth(C$, 'discoverAllFeatureData$', function () {
var allGroups=Clazz.new_($I$(35));
var alignment=this.af.getViewport$().getAlignment$();
for (var i=0; i < alignment.getHeight$(); i++) {
var seq=alignment.getSequenceAt$I(i);
for (var group, $group = seq.getFeatures$().getFeatureGroups$Z$SA(true, []).iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
if (group != null  && !allGroups.contains$O(group) ) {
allGroups.add$TE(group);
p$1.checkGroupState$S.apply(this, [group]);
}}
}
this.resetTable$SA(null);
this.validate$();
});

Clazz.newMeth(C$, 'checkGroupState$S', function (group) {
var visible=this.fr.checkGroupVisibility$S$Z(group, true);
for (var g=0; g < this.groupPanel.getComponentCount$(); g++) {
if ((this.groupPanel.getComponent$I(g)).getText$().equals$O(group)) {
(this.groupPanel.getComponent$I(g)).setSelected$Z(visible);
return visible;
}}
var grp=group;
var check=Clazz.new_($I$(36).c$$S$Z,[group, visible]);
check.setFont$java_awt_Font(Clazz.new_($I$(17).c$$S$I$I,["Serif", 1, 12]));
check.setToolTipText$S(group);
check.addItemListener$java_awt_event_ItemListener(((P$.FeatureSettings$13||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (evt) {
this.b$['jalview.gui.FeatureSettings'].fr.setGroupVisibility$S$Z(this.$finals$.check.getText$(), this.$finals$.check.isSelected$());
this.b$['jalview.gui.FeatureSettings'].resetTable$SA.apply(this.b$['jalview.gui.FeatureSettings'], [Clazz.array(String, -1, [this.$finals$.grp])]);
this.b$['jalview.gui.FeatureSettings'].af.alignPanel.paintAlignment$Z$Z(true, true);
});
})()
), Clazz.new_(P$.FeatureSettings$13.$init$, [this, {check: check, grp: grp}])));
this.groupPanel.add$java_awt_Component(check);
return visible;
}, p$1);

Clazz.newMeth(C$, 'resetTable$SA', function (groupChanged) {
if (this.resettingTable) {
return;
}this.resettingTable=true;
this.typeWidth=Clazz.new_($I$(37));
var displayableTypes=Clazz.new_($I$(35));
var foundGroups=Clazz.new_($I$(35));
for (var i=0; i < this.af.getViewport$().getAlignment$().getHeight$(); i++) {
var seq=this.af.getViewport$().getAlignment$().getSequenceAt$I(i);
var groups=seq.getFeatures$().getFeatureGroups$Z$SA(true, []);
var visibleGroups=Clazz.new_($I$(35));
for (var group, $group = groups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
if (group == null  || p$1.checkGroupState$S.apply(this, [group]) ) {
visibleGroups.add$TE(group);
}}
foundGroups.addAll$java_util_Collection(groups);
var types=seq.getFeatures$().getFeatureTypesForGroups$Z$SA(true, visibleGroups.toArray$TTA(Clazz.array(String, [visibleGroups.size$()])));
for (var type, $type = types.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
displayableTypes.add$TE(type);
var avWidth=this.typeWidth.get$O(type);
if (avWidth == null ) {
avWidth=Clazz.array(Float.TYPE, [2]);
this.typeWidth.put$TK$TV(type, avWidth);
}avWidth[0] += seq.getFeatures$().getFeatureCount$Z$SA(true, [type]);
avWidth[1] += seq.getFeatures$().getTotalFeatureLength$SA([type]);
}
}
var data=Clazz.array(java.lang.Object, [displayableTypes.size$(), 4]);
var dataIndex=0;
if (this.fr.hasRenderOrder$()) {
if (!this.handlingUpdate) {
this.fr.findAllFeatures$Z(groupChanged != null );
}var frl=this.fr.getRenderOrder$();
for (var ro=frl.size$() - 1; ro > -1; ro--) {
var type=frl.get$I(ro);
if (!displayableTypes.contains$O(type)) {
continue;
}data[dataIndex][0]=type;
data[dataIndex][1]=this.fr.getFeatureStyle$S(type);
var featureFilter=this.fr.getFeatureFilter$S(type);
data[dataIndex][2]=featureFilter == null  ? Clazz.new_($I$(9)) : featureFilter;
data[dataIndex][3]= Boolean.from(this.af.getViewport$().getFeaturesDisplayed$().isVisible$S(type));
dataIndex++;
displayableTypes.remove$O(type);
}
}while (!displayableTypes.isEmpty$()){
var type=displayableTypes.iterator$().next$();
data[dataIndex][0]=type;
data[dataIndex][1]=this.fr.getFeatureStyle$S(type);
if (data[dataIndex][1] == null ) {
this.fr.clearRenderOrder$();
return;
}var featureFilter=this.fr.getFeatureFilter$S(type);
data[dataIndex][2]=featureFilter == null  ? Clazz.new_($I$(9)) : featureFilter;
data[dataIndex][3]= Boolean.from(true);
dataIndex++;
displayableTypes.remove$O(type);
}
if (this.originalData == null ) {
this.originalData=Clazz.array(java.lang.Object, [data.length, 4]);
for (var i=0; i < data.length; i++) {
System.arraycopy$O$I$O$I$I(data[i], 0, this.originalData[i], 0, 4);
}
} else {
this.updateOriginalData$OAA(data);
}this.table.setModel$javax_swing_table_TableModel(Clazz.new_($I$(38).c$$OAA, [this, null, data]));
this.table.getColumnModel$().getColumn$I(0).setPreferredWidth$I(200);
this.groupPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(39).c$$I$I,[(this.fr.getFeatureGroupsSize$()/4|0) + 1, 4]));
this.pruneGroups$java_util_Set(foundGroups);
this.groupPanel.validate$();
this.updateFeatureRenderer$OAA$Z(data, groupChanged != null );
this.resettingTable=false;
});

Clazz.newMeth(C$, 'updateOriginalData$OAA', function (foundData) {
var currentData=(this.table.getModel$()).getData$();
for (var row, $row = 0, $$row = foundData; $row<$$row.length&&((row=($$row[$row])),1);$row++) {
var type=row[0];
var found=false;
for (var current, $current = 0, $$current = currentData; $current<$$current.length&&((current=($$current[$current])),1);$current++) {
if (type.equals$O(current[0])) {
found=true;
if (!row[1].equals$O(current[1])) {
for (var original, $original = 0, $$original = this.originalData; $original<$$original.length&&((original=($$original[$original])),1);$original++) {
if (type.equals$O(original[0])) {
original[1]=row[1];
break;
}}
}break;
}}
if (!found) {
var newData=Clazz.array(java.lang.Object, [this.originalData.length + 1, 4]);
for (var i=0; i < this.originalData.length; i++) {
System.arraycopy$O$I$O$I$I(this.originalData[i], 0, newData[i + 1], 0, 4);
}
newData[0]=row;
this.originalData=newData;
}}
});

Clazz.newMeth(C$, 'pruneGroups$java_util_Set', function (foundGroups) {
for (var g=0; g < this.groupPanel.getComponentCount$(); g++) {
var checkbox=this.groupPanel.getComponent$I(g);
if (!foundGroups.contains$O(checkbox.getText$())) {
this.groupPanel.remove$java_awt_Component(checkbox);
}}
});

Clazz.newMeth(C$, 'ensureOrder$OAA', function (data) {
var sort=false;
var order=Clazz.array(Float.TYPE, [data.length]);
for (var i=0; i < order.length; i++) {
order[i]=this.fr.getOrder$S(data[i][0].toString());
if (order[i] < 0 ) {
order[i]=this.fr.setOrder$S$F(data[i][0].toString(), (i/order.length|0));
}if (i > 1) {
sort=sort || order[i - 1] > order[i]  ;
}}
if (sort) {
$I$(40).sort$FA$OA(order, data);
}}, p$1);

Clazz.newMeth(C$, 'load$', function () {
var chooser=Clazz.new_($I$(41).c$$S$S,["fc", C$.SEQUENCE_FEATURE_COLOURS]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(42)));
chooser.setDialogTitle$S($I$(1).getString$S("label.load_feature_colours"));
chooser.setToolTipText$S($I$(1).getString$S("action.load"));
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.FeatureSettings$14||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var file=this.$finals$.chooser.getSelectedFile$();
this.b$['jalview.gui.FeatureSettings'].load$java_io_File.apply(this.b$['jalview.gui.FeatureSettings'], [file]);
});
})()
), Clazz.new_(P$.FeatureSettings$14.$init$, [this, {chooser: chooser}])));
chooser.showOpenDialog$java_awt_Component(this);
});

Clazz.newMeth(C$, 'load$java_io_File', function (file) {
try {
var $in=Clazz.new_($I$(43).c$$java_io_InputStream$S,[Clazz.new_($I$(44).c$$java_io_File,[file]), "UTF-8"]);
var jc=$I$(45).newInstance$S("jalview.xml.binding.jalview");
var um=jc.createUnmarshaller$();
var streamReader=$I$(46).newInstance$().createXMLStreamReader$java_io_Reader($in);
var jbe=um.unmarshal$javax_xml_stream_XMLStreamReader$Class(streamReader, Clazz.getClass($I$(47)));
var jucs=jbe.getValue$();
for (var i=jucs.getColour$().size$() - 1; i >= 0; i--) {
var newcol=jucs.getColour$().get$I(i);
var colour=$I$(48).parseColour$jalview_xml_binding_jalview_JalviewUserColours_Colour(newcol);
this.fr.setColour$S$jalview_api_FeatureColourI(newcol.getName$(), colour);
this.fr.setOrder$S$F(newcol.getName$(), i / jucs.getColour$().size$());
}
for (var i=0; i < jucs.getFilter$().size$(); i++) {
var filterModel=jucs.getFilter$().get$I(i);
var featureType=filterModel.getFeatureType$();
var filter=$I$(48).parseFilter$S$jalview_xml_binding_jalview_FeatureMatcherSet(featureType, filterModel.getMatcherSet$());
if (!filter.isEmpty$()) {
this.fr.setFeatureFilter$S$jalview_datamodel_features_FeatureMatcherSetI(featureType, filter);
}}
if (this.table != null ) {
this.resetTable$SA(null);
var data=(this.table.getModel$()).getData$();
p$1.ensureOrder$OAA.apply(this, [data]);
this.updateFeatureRenderer$OAA$Z(data, false);
this.table.repaint$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S("Error loading User Colour File\n" + ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'save$', function () {
var chooser=Clazz.new_($I$(41).c$$S$S,["fc", C$.SEQUENCE_FEATURE_COLOURS]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(42)));
chooser.setDialogTitle$S($I$(1).getString$S("label.save_feature_colours"));
chooser.setToolTipText$S($I$(1).getString$S("action.save"));
var option=chooser.showSaveDialog$java_awt_Component(this);
if (option == 0) {
var file=chooser.getSelectedFile$();
this.save$java_io_File(file);
}});

Clazz.newMeth(C$, 'save$java_io_File', function (file) {
var ucs=Clazz.new_($I$(47));
ucs.setSchemeName$S("Sequence Features");
try {
var out=Clazz.new_($I$(49).c$$java_io_Writer,[Clazz.new_($I$(50).c$$java_io_OutputStream$S,[Clazz.new_($I$(51).c$$java_io_File,[file]), "UTF-8"])]);
var fr_colours=this.fr.getAllFeatureColours$();
var sortedTypes=fr_colours.toArray$TTA(Clazz.array(String, [fr_colours.size$()]));
$I$(34).sort$TTA$java_util_Comparator(sortedTypes, ((P$.FeatureSettings$15||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$S$S','compare$','compare$TT$TT'], function (type1, type2) {
return Float.compare$F$F(this.b$['jalview.gui.FeatureSettings'].fr.getOrder$S(type1), this.b$['jalview.gui.FeatureSettings'].fr.getOrder$S(type2));
});
})()
), Clazz.new_(P$.FeatureSettings$15.$init$, [this, null])));
for (var featureType, $featureType = 0, $$featureType = sortedTypes; $featureType<$$featureType.length&&((featureType=($$featureType[$featureType])),1);$featureType++) {
var fcol=this.fr.getFeatureStyle$S(featureType);
var col=$I$(48).marshalColour$S$jalview_api_FeatureColourI(featureType, fcol);
ucs.getColour$().add$TE(col);
}
for (var featureType, $featureType = 0, $$featureType = sortedTypes; $featureType<$$featureType.length&&((featureType=($$featureType[$featureType])),1);$featureType++) {
var filter=this.fr.getFeatureFilter$S(featureType);
if (filter != null  && !filter.isEmpty$() ) {
var iterator=filter.getMatchers$().iterator$();
var firstMatcher=iterator.next$();
var ms=$I$(48).marshalFilter$jalview_datamodel_features_FeatureMatcherI$java_util_Iterator$Z(firstMatcher, iterator, filter.isAnded$());
var filterModel=Clazz.new_($I$(52));
filterModel.setFeatureType$S(featureType);
filterModel.setMatcherSet$jalview_xml_binding_jalview_FeatureMatcherSet(ms);
ucs.getFilter$().add$TE(filterModel);
}}
var jaxbContext=$I$(45).newInstance$ClassA([Clazz.getClass($I$(47))]);
var jaxbMarshaller=jaxbContext.createMarshaller$();
jaxbMarshaller.marshal$O$java_io_Writer(Clazz.new_($I$(53)).createJalviewUserColours$jalview_xml_binding_jalview_JalviewUserColours(ucs), out);
out.flush$();
out.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'invertSelection$', function () {
var data=(this.table.getModel$()).getData$();
for (var i=0; i < data.length; i++) {
data[i][3]=new Boolean(!(data[i][3]).booleanValue$());
}
this.updateFeatureRenderer$OAA$Z(data, true);
this.table.repaint$();
});

Clazz.newMeth(C$, 'orderByAvWidth$', function () {
if (this.table == null  || this.table.getModel$() == null  ) {
return;
}var data=(this.table.getModel$()).getData$();
var width=Clazz.array(Float.TYPE, [data.length]);
var awidth;
var max=0;
for (var i=0; i < data.length; i++) {
awidth=this.typeWidth.get$O(data[i][0]);
if (awidth[0] > 0 ) {
width[i]=awidth[1] / awidth[0];
} else {
width[i]=0;
}if (max < width[i] ) {
max=width[i];
}}
var sort=false;
for (var i=0; i < width.length; i++) {
if (width[i] == 0 ) {
width[i]=this.fr.getOrder$S(data[i][0].toString());
if (width[i] < 0 ) {
width[i]=this.fr.setOrder$S$F(data[i][0].toString(), (i/data.length|0));
}} else {
width[i] /= max;
this.fr.setOrder$S$F(data[i][0].toString(), width[i]);
}if (i > 0) {
sort=sort || width[i - 1] > width[i]  ;
}}
if (sort) {
$I$(40).sort$FA$OA(width, data);
}this.updateFeatureRenderer$OAA$Z(data, false);
this.table.repaint$();
});

Clazz.newMeth(C$, 'close$', function () {
try {
this.frame.setClosed$Z(true);
} catch (exe) {
if (Clazz.exceptionOf(exe,"Exception")){
} else {
throw exe;
}
}
});

Clazz.newMeth(C$, 'updateFeatureRenderer$OAA', function (data) {
this.updateFeatureRenderer$OAA$Z(data, true);
});

Clazz.newMeth(C$, 'updateFeatureRenderer$OAA$Z', function (data, visibleNew) {
var rowData=p$1.getTableAsBeans$OAA.apply(this, [data]);
if (this.fr.setFeaturePriority$jalview_viewmodel_seqfeatures_FeatureRendererModel_FeatureSettingsBeanA$Z(rowData, visibleNew)) {
this.af.alignPanel.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'getTableAsBeans$OAA', function (data) {
var rowData=Clazz.array($I$(54), [data.length]);
for (var i=0; i < data.length; i++) {
var type=data[i][0];
var colour=data[i][1];
var theFilter=data[i][2];
var isShown=data[i][3];
rowData[i]=Clazz.new_($I$(54).c$$S$jalview_api_FeatureColourI$jalview_datamodel_features_FeatureMatcherSetI$Boolean,[type, colour, theFilter, isShown]);
}
return rowData;
}, p$1);

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(55)));
var settingsPane=Clazz.new_($I$(56));
settingsPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(55)));
var bigPanel=Clazz.new_($I$(56));
bigPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(55)));
this.groupPanel=Clazz.new_($I$(56));
bigPanel.add$java_awt_Component$O(this.groupPanel, "North");
var invert=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("label.invert_selection")]);
invert.setFont$java_awt_Font($I$(14).getLabelFont$());
invert.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$16||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].invertSelection$.apply(this.b$['jalview.gui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$16.$init$, [this, null])));
var optimizeOrder=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("label.optimise_order")]);
optimizeOrder.setFont$java_awt_Font($I$(14).getLabelFont$());
optimizeOrder.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$17||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].orderByAvWidth$.apply(this.b$['jalview.gui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$17.$init$, [this, null])));
var sortByScore=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("label.seq_sort_by_score")]);
sortByScore.setFont$java_awt_Font($I$(14).getLabelFont$());
sortByScore.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$18||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].af.avc.sortAlignmentByFeatureScore$java_util_List(null);
});
})()
), Clazz.new_(P$.FeatureSettings$18.$init$, [this, null])));
var sortByDens=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("label.sequence_sort_by_density")]);
sortByDens.setFont$java_awt_Font($I$(14).getLabelFont$());
sortByDens.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$19||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].af.avc.sortAlignmentByFeatureDensity$java_util_List(null);
});
})()
), Clazz.new_(P$.FeatureSettings$19.$init$, [this, null])));
var help=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("action.help")]);
help.setFont$java_awt_Font($I$(14).getLabelFont$());
help.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$20||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
try {
$I$(57).showHelpWindow$jalview_gui_Help_HelpId($I$(58).SequenceFeatureSettings);
} catch (e1) {
if (Clazz.exceptionOf(e1,"javax.help.HelpSetException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
});
})()
), Clazz.new_(P$.FeatureSettings$20.$init$, [this, null])));
var cancel=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("action.cancel")]);
cancel.setFont$java_awt_Font($I$(14).getLabelFont$());
cancel.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$21||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].fr.setTransparency$F(this.b$['jalview.gui.FeatureSettings'].originalTransparency);
this.b$['jalview.gui.FeatureSettings'].fr.setFeatureFilters$java_util_Map(this.b$['jalview.gui.FeatureSettings'].originalFilters);
this.b$['jalview.gui.FeatureSettings'].updateFeatureRenderer$OAA.apply(this.b$['jalview.gui.FeatureSettings'], [this.b$['jalview.gui.FeatureSettings'].originalData]);
this.b$['jalview.gui.FeatureSettings'].close$.apply(this.b$['jalview.gui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$21.$init$, [this, null])));
var ok=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("action.ok")]);
ok.setFont$java_awt_Font($I$(14).getLabelFont$());
ok.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$22||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].close$.apply(this.b$['jalview.gui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$22.$init$, [this, null])));
var loadColours=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("label.load_colours")]);
loadColours.setFont$java_awt_Font($I$(14).getLabelFont$());
loadColours.setToolTipText$S($I$(1).getString$S("label.load_colours_tooltip"));
loadColours.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$23||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].load$.apply(this.b$['jalview.gui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$23.$init$, [this, null])));
var saveColours=Clazz.new_($I$(4).c$$S,[$I$(1).getString$S("label.save_colours")]);
saveColours.setFont$java_awt_Font($I$(14).getLabelFont$());
saveColours.setToolTipText$S($I$(1).getString$S("label.save_colours_tooltip"));
saveColours.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$24||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.FeatureSettings'].save$.apply(this.b$['jalview.gui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$24.$init$, [this, null])));
this.transparency.addChangeListener$javax_swing_event_ChangeListener(((P$.FeatureSettings$25||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (evt) {
if (!this.b$['jalview.gui.FeatureSettings'].inConstruction) {
this.b$['jalview.gui.FeatureSettings'].fr.setTransparency$F((100 - this.b$['jalview.gui.FeatureSettings'].transparency.getValue$()) / 100.0);
this.b$['jalview.gui.FeatureSettings'].af.alignPanel.paintAlignment$Z$Z(true, true);
}});
})()
), Clazz.new_(P$.FeatureSettings$25.$init$, [this, null])));
this.transparency.setMaximum$I(70);
this.transparency.setToolTipText$S($I$(1).getString$S("label.transparency_tip"));
var transPanel=Clazz.new_($I$(56).c$$java_awt_LayoutManager,[Clazz.new_($I$(39).c$$I$I,[1, 2])]);
bigPanel.add$java_awt_Component$O(transPanel, "South");
var transbuttons=Clazz.new_($I$(56).c$$java_awt_LayoutManager,[Clazz.new_($I$(39).c$$I$I,[5, 1])]);
transbuttons.add$java_awt_Component(optimizeOrder);
transbuttons.add$java_awt_Component(invert);
transbuttons.add$java_awt_Component(sortByScore);
transbuttons.add$java_awt_Component(sortByDens);
transbuttons.add$java_awt_Component(help);
transPanel.add$java_awt_Component(this.transparency);
transPanel.add$java_awt_Component(transbuttons);
var buttonPanel=Clazz.new_($I$(56));
buttonPanel.add$java_awt_Component(ok);
buttonPanel.add$java_awt_Component(cancel);
buttonPanel.add$java_awt_Component(loadColours);
buttonPanel.add$java_awt_Component(saveColours);
bigPanel.add$java_awt_Component$O(this.scrollPane, "Center");
settingsPane.add$java_awt_Component$O(bigPanel, "Center");
settingsPane.add$java_awt_Component$O(buttonPanel, "South");
this.add$java_awt_Component(settingsPane);
}, p$1);

Clazz.newMeth(C$, 'getColorTooltip$jalview_api_FeatureColourI$Z', function (fcol, withHint) {
if (fcol == null ) {
return null;
}if (fcol.isSimpleColour$()) {
return withHint ? C$.BASE_TOOLTIP : null;
}var description=fcol.getDescription$();
description=description.replaceAll$S$S("<", "&lt;");
description=description.replaceAll$S$S(">", "&gt;");
var tt=Clazz.new_($I$(59).c$$S,[description]);
if (withHint) {
tt.append$S("<br>").append$S(C$.BASE_TOOLTIP).append$S("</br>");
}return $I$(14).wrapTooltip$Z$S(true, tt.toString());
}, 1);

Clazz.newMeth(C$, 'renderGraduatedColor$javax_swing_JLabel$jalview_api_FeatureColourI$I$I', function (comp, gcol, w, h) {
var thr=false;
var tx=Clazz.new_($I$(59));
if (gcol.isColourByAttribute$()) {
tx.append$S($I$(60).toAttributeDisplayName$SA(gcol.getAttributeName$()));
} else if (!gcol.isColourByLabel$()) {
tx.append$S($I$(1).getString$S("label.score"));
}tx.append$S(" ");
if (gcol.isAboveThreshold$()) {
thr=true;
tx.append$S(">");
}if (gcol.isBelowThreshold$()) {
thr=true;
tx.append$S("<");
}if (gcol.isColourByLabel$()) {
if (thr) {
tx.append$S(" ");
}if (!gcol.isColourByAttribute$()) {
tx.append$S("Label");
}comp.setIcon$javax_swing_Icon(null);
} else {
var newColor=gcol.getMaxColour$();
comp.setBackground$java_awt_Color(newColor);
var ficon=Clazz.new_($I$(61).c$$jalview_api_FeatureColourI$java_awt_Color$I$I$Z,[gcol, comp.getBackground$(), w, h, thr]);
comp.setIcon$javax_swing_Icon(ficon);
}comp.setHorizontalAlignment$I(0);
comp.setText$S(tx.toString());
}, 1);

Clazz.newMeth(C$, 'renderGraduatedColor$javax_swing_JLabel$jalview_api_FeatureColourI', function (comp, gcol) {
var w=comp.getWidth$();
var h=comp.getHeight$();
if (w < 20) {
w=(comp.getPreferredSize$().getWidth$()|0);
h=(comp.getPreferredSize$().getHeight$()|0);
if (w < 20) {
w=80;
h=12;
}}C$.renderGraduatedColor$javax_swing_JLabel$jalview_api_FeatureColourI$I$I(comp, gcol, w, h);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.FeatureSettings, "FeatureTableModel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.table.AbstractTableModel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.columnNames=null;
this.data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.columnNames=Clazz.array(String, -1, [$I$(1).getString$S("label.feature_type"), $I$(1).getString$S("action.colour"), $I$(1).getString$S("label.configuration"), $I$(1).getString$S("label.show")]);
}, 1);

Clazz.newMeth(C$, 'c$$OAA', function (data) {
Clazz.super_(C$, this,1);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'setData$OAA', function (data) {
this.data=data;
});

Clazz.newMeth(C$, 'getColumnCount$', function () {
return this.columnNames.length;
});

Clazz.newMeth(C$, 'getRow$I', function (row) {
return this.data[row];
});

Clazz.newMeth(C$, 'getRowCount$', function () {
return this.data.length;
});

Clazz.newMeth(C$, 'getColumnName$I', function (col) {
return this.columnNames[col];
});

Clazz.newMeth(C$, 'getValueAt$I$I', function (row, col) {
return this.data[row][col];
});

Clazz.newMeth(C$, 'getColumnClass$I', function (c) {
var v=this.getValueAt$I$I(0, c);
return v == null  ? null : v.getClass$();
});

Clazz.newMeth(C$, 'isCellEditable$I$I', function (row, col) {
return col == 0 ? false : true;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I', function (value, row, col) {
this.data[row][col]=value;
this.fireTableCellUpdated$I$I(row, col);
this.this$0.updateFeatureRenderer$OAA.apply(this.this$0, [this.data]);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.FeatureSettings, "ColorRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unselectedBorder=null;
this.selectedBorder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.unselectedBorder=null;
this.selectedBorder=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setOpaque$Z(true);
this.setHorizontalTextPosition$I(0);
this.setVerticalTextPosition$I(0);
}, 1);

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (tbl, color, isSelected, hasFocus, row, column) {
var cellColour=color;
this.setOpaque$Z(true);
this.setBackground$java_awt_Color(tbl.getBackground$());
if (!cellColour.isSimpleColour$()) {
var cr=tbl.getCellRect$I$I$Z(row, column, false);
$I$(2).renderGraduatedColor$javax_swing_JLabel$jalview_api_FeatureColourI$I$I(this, cellColour, (cr.getWidth$()|0), (cr.getHeight$()|0));
} else {
this.setText$S("");
this.setIcon$javax_swing_Icon(null);
this.setBackground$java_awt_Color(cellColour.getColour$());
}if (isSelected) {
if (this.selectedBorder == null ) {
this.selectedBorder=$I$(3).createMatteBorder$I$I$I$I$java_awt_Color(2, 5, 2, 5, tbl.getSelectionBackground$());
}this.setBorder$javax_swing_border_Border(this.selectedBorder);
} else {
if (this.unselectedBorder == null ) {
this.unselectedBorder=$I$(3).createMatteBorder$I$I$I$I$java_awt_Color(2, 5, 2, 5, tbl.getBackground$());
}this.setBorder$javax_swing_border_Border(this.unselectedBorder);
}return this;
});
})()
;
(function(){var C$=Clazz.newClass(P$.FeatureSettings, "FilterRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unselectedBorder=null;
this.selectedBorder=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.unselectedBorder=null;
this.selectedBorder=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setOpaque$Z(true);
this.setHorizontalTextPosition$I(0);
this.setVerticalTextPosition$I(0);
}, 1);

Clazz.newMeth(C$, ['getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I','getTableCellRendererComponent$'], function (tbl, filter, isSelected, hasFocus, row, column) {
var theFilter=filter;
this.setOpaque$Z(true);
var asText=theFilter.toString();
this.setBackground$java_awt_Color(tbl.getBackground$());
this.setText$S(asText);
this.setIcon$javax_swing_Icon(null);
if (isSelected) {
if (this.selectedBorder == null ) {
this.selectedBorder=$I$(3).createMatteBorder$I$I$I$I$java_awt_Color(2, 5, 2, 5, tbl.getSelectionBackground$());
}this.setBorder$javax_swing_border_Border(this.selectedBorder);
} else {
if (this.unselectedBorder == null ) {
this.unselectedBorder=$I$(3).createMatteBorder$I$I$I$I$java_awt_Color(2, 5, 2, 5, tbl.getBackground$());
}this.setBorder$javax_swing_border_Border(this.unselectedBorder);
}return this;
});
})()
;
(function(){var C$=Clazz.newClass(P$.FeatureSettings, "ColorEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', ['javax.swing.table.TableCellEditor', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.currentColor=null;
this.chooser=null;
this.type=null;
this.button=null;
this.rowSelected=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.rowSelected=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.button=Clazz.new_($I$(4));
this.button.setActionCommand$S("edit");
this.button.addActionListener$java_awt_event_ActionListener(this);
this.button.setBorderPainted$Z(false);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.button === e.getSource$() ) {
if (this.currentColor.isSimpleColour$()) {
var ttl=$I$(1).formatMessage$S$OA("label.select_colour_for", [this.type]);
var listener=((P$.FeatureSettings$ColorEditor$1||
(function(){var C$=Clazz.newClass(P$, "FeatureSettings$ColorEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['colourSelected$java_awt_Color','colourSelected$'], function (c) {
this.b$['jalview.gui.FeatureSettings.ColorEditor'].currentColor=Clazz.new_($I$(5).c$$java_awt_Color,[c]);
this.b$['jalview.gui.FeatureSettings'].table.setValueAt$O$I$I(this.b$['jalview.gui.FeatureSettings.ColorEditor'].currentColor, this.b$['jalview.gui.FeatureSettings.ColorEditor'].rowSelected, 1);
this.b$['jalview.gui.FeatureSettings.ColorEditor'].fireEditingStopped$.apply(this.b$['jalview.gui.FeatureSettings.ColorEditor'], []);
});

Clazz.newMeth(C$, 'cancel$', function () {
this.b$['jalview.gui.FeatureSettings.ColorEditor'].fireEditingStopped$.apply(this.b$['jalview.gui.FeatureSettings.ColorEditor'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$ColorEditor$1.$init$, [this, null]));
$I$(6).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener(this.button, ttl, this.currentColor.getColour$(), listener);
} else {
this.chooser=Clazz.new_($I$(7).c$$jalview_gui_FeatureRenderer$S,[this.this$0.fr, this.type]);
if (!$I$(8).isJS$()) 
{}
this.chooser.addActionListener$java_awt_event_ActionListener(this);
this.fireEditingStopped$();
}} else {
this.currentColor=this.this$0.fr.getFeatureColours$().get$O(this.type);
var currentFilter=this.this$0.fr.getFeatureFilter$S(this.type);
if (currentFilter == null ) {
currentFilter=Clazz.new_($I$(9));
}var data=(this.this$0.table.getModel$()).getData$()[this.rowSelected];
data[1]=this.currentColor;
data[2]=currentFilter;
this.fireEditingStopped$();
this.this$0.table.validate$();
this.this$0.table.repaint$();
}});

Clazz.newMeth(C$, 'fireEditingStopped$', function () {
C$.superclazz.prototype.fireEditingStopped$.apply(this, []);
});

Clazz.newMeth(C$, 'getCellEditorValue$', function () {
return this.currentColor;
});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I', function (theTable, value, isSelected, row, column) {
this.currentColor=value;
this.rowSelected=row;
this.type=this.this$0.table.getValueAt$I$I(row, 0).toString();
this.button.setOpaque$Z(true);
this.button.setBackground$java_awt_Color(this.this$0.getBackground$.apply(this.this$0, []));
if (!this.currentColor.isSimpleColour$()) {
var btn=Clazz.new_($I$(10));
btn.setSize$java_awt_Dimension(this.button.getSize$());
$I$(2).renderGraduatedColor$javax_swing_JLabel$jalview_api_FeatureColourI(btn, this.currentColor);
this.button.setBackground$java_awt_Color(btn.getBackground$());
this.button.setIcon$javax_swing_Icon(btn.getIcon$());
this.button.setText$S(btn.getText$());
} else {
this.button.setText$S("");
this.button.setIcon$javax_swing_Icon(null);
this.button.setBackground$java_awt_Color(this.currentColor.getColour$());
}return this.button;
});
})()
;
(function(){var C$=Clazz.newClass(P$.FeatureSettings, "FilterEditor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractCellEditor', ['javax.swing.table.TableCellEditor', 'java.awt.event.ActionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.currentFilter=null;
this.lastLocation=null;
this.type=null;
this.button=null;
this.rowSelected=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.rowSelected=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.button=Clazz.new_($I$(4));
this.button.setActionCommand$S("edit");
this.button.addActionListener$java_awt_event_ActionListener(this);
this.button.setBorderPainted$Z(false);
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (this.button === e.getSource$() ) {
var chooser=Clazz.new_($I$(7).c$$jalview_gui_FeatureRenderer$S,[this.this$0.fr, this.type]);
chooser.addActionListener$java_awt_event_ActionListener(this);
chooser.setRequestFocusEnabled$Z(true);
chooser.requestFocus$();
if (this.lastLocation != null ) {
chooser.setBounds$I$I$I$I(this.lastLocation.x, this.lastLocation.y, chooser.getWidth$(), chooser.getHeight$());
chooser.validate$();
}this.fireEditingStopped$();
} else if (Clazz.instanceOf(e.getSource$(), "java.awt.Component")) {
var currentColor=this.this$0.fr.getFeatureColours$().get$O(this.type);
this.currentFilter=this.this$0.fr.getFeatureFilter$S(this.type);
if (this.currentFilter == null ) {
this.currentFilter=Clazz.new_($I$(9));
}var data=(this.this$0.table.getModel$()).getData$()[this.rowSelected];
data[1]=currentColor;
data[2]=this.currentFilter;
this.fireEditingStopped$();
this.this$0.table.validate$();
this.this$0.table.repaint$();
}});

Clazz.newMeth(C$, 'getCellEditorValue$', function () {
return this.currentFilter;
});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I', function (theTable, value, isSelected, row, column) {
this.currentFilter=value;
this.rowSelected=row;
this.type=this.this$0.table.getValueAt$I$I(row, 0).toString();
this.button.setOpaque$Z(true);
this.button.setBackground$java_awt_Color(this.this$0.getBackground$.apply(this.this$0, []));
this.button.setText$S(this.currentFilter.toString());
this.button.setIcon$javax_swing_Icon(null);
return this.button;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
