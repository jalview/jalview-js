(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Color','java.awt.Panel','java.awt.Scrollbar','java.awt.Toolkit','java.awt.BorderLayout','java.awt.ScrollPane','java.awt.Button','jalview.util.MessageManager','java.awt.GridLayout','java.awt.Label','java.awt.Frame','java.awt.event.WindowAdapter','jalview.bin.JalviewLite','java.awt.PopupMenu','java.awt.MenuItem','java.util.Arrays','jalview.appletgui.FeatureColourChooser','jalview.appletgui.UserDefinedColours',['jalview.appletgui.FeatureSettings','.MyCheckbox'],'java.awt.Font','java.util.ArrayList','java.util.HashSet',['jalview.viewmodel.seqfeatures.FeatureRendererModel','.FeatureSettingsBean']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureSettings", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Panel', ['java.awt.event.ItemListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.AdjustmentListener', 'jalview.api.FeatureSettingsControllerI']);
C$.$classes$=[['MyCheckbox',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.featurePanel=Clazz.new_($I$(2,1));
this.groupItemListener=((P$.FeatureSettings$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (evt) {
var source=evt.getSource$();
this.b$['jalview.appletgui.FeatureSettings'].fr.setGroupVisibility$S$Z(source.getLabel$(), source.getState$());
this.b$['jalview.appletgui.FeatureSettings'].ap.seqPanel.seqCanvas.repaint$();
if (this.b$['jalview.appletgui.FeatureSettings'].ap.overviewPanel != null ) {
this.b$['jalview.appletgui.FeatureSettings'].ap.overviewPanel.updateOverviewImage$();
}this.b$['jalview.appletgui.FeatureSettings'].resetTable$Z.apply(this.b$['jalview.appletgui.FeatureSettings'], [true]);
return;
});
})()
), Clazz.new_(P$.FeatureSettings$1.$init$,[this, null]));
this.dragging=false;
},1);

C$.$fields$=[['Z',['dragging'],'O',['fr','jalview.appletgui.FeatureRenderer','ap','jalview.appletgui.AlignmentPanel','av','jalview.appletgui.AlignViewport','frame','java.awt.Frame','groupPanel','java.awt.Panel','+featurePanel','scrollPane','java.awt.ScrollPane','linkImage','java.awt.Image','transparency','java.awt.Scrollbar','groupItemListener','java.awt.event.ItemListener','selectedCheck','jalview.appletgui.FeatureSettings.MyCheckbox']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.ap=ap;
this.av=ap.av;
ap.av.featureSettings=this;
this.fr=ap.seqPanel.seqCanvas.getFeatureRenderer$();
this.transparency=Clazz.new_([0, 100 - ((this.fr.getTransparency$() * 100)|0), 1, 1, 100],$I$(3,1).c$$I$I$I$I$I);
this.transparency.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
var url=this.getClass$().getResource$S("/images/link.gif");
if (url != null ) {
this.linkImage=$I$(4).getDefaultToolkit$().getImage$java_net_URL(url);
}if (this.av.isShowSequenceFeatures$() || !this.fr.hasRenderOrder$() ) {
this.fr.findAllFeatures$Z(true);
}this.groupPanel=Clazz.new_($I$(2,1));
this.discoverAllFeatureData$();
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
this.scrollPane=Clazz.new_($I$(6,1));
this.scrollPane.add$java_awt_Component(this.featurePanel);
if (this.fr.getAllFeatureColours$() != null  && this.fr.getAllFeatureColours$().size$() > 0 ) {
this.add$java_awt_Component$O(this.scrollPane, "Center");
}var invert=Clazz.new_([$I$(8).getString$S("label.invert_selection")],$I$(7,1).c$$S);
invert.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.FeatureSettings'].invertSelection$.apply(this.b$['jalview.appletgui.FeatureSettings'], []);
});
})()
), Clazz.new_(P$.FeatureSettings$2.$init$,[this, null])));
var lowerPanel=Clazz.new_([Clazz.new_($I$(9,1).c$$I$I$I$I,[2, 1, 5, 10])],$I$(2,1).c$$java_awt_LayoutManager);
lowerPanel.add$java_awt_Component(invert);
var tPanel=Clazz.new_([Clazz.new_($I$(5,1))],$I$(2,1).c$$java_awt_LayoutManager);
tPanel.add$java_awt_Component$O(this.transparency, "Center");
tPanel.add$java_awt_Component$O(Clazz.new_($I$(10,1).c$$S,["Transparency"]), "East");
lowerPanel.add$java_awt_Component$O(tPanel, "South");
this.add$java_awt_Component$O(lowerPanel, "South");
this.groupPanel.setLayout$java_awt_LayoutManager(Clazz.new_([((this.fr.getFeatureGroupsSize$())/4|0) + 1, 4],$I$(9,1).c$$I$I));
this.groupPanel.validate$();
this.add$java_awt_Component$O(this.groupPanel, "North");
this.frame=Clazz.new_($I$(11,1));
this.frame.add$java_awt_Component(this);
var me=this;
this.frame.addWindowListener$java_awt_event_WindowListener(((P$.FeatureSettings$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
if (this.$finals$.me.av.featureSettings === this.$finals$.me ) {
this.$finals$.me.av.featureSettings=null;
this.$finals$.me.ap=null;
this.$finals$.me.av=null;
}});
})()
), Clazz.new_($I$(12,1),[this, {me:me}],P$.FeatureSettings$3)));
var height=this.featurePanel.getComponentCount$() * 50 + 60;
height=Math.max(200, height);
height=Math.min(400, height);
var width=300;
$I$(13,"addFrame$java_awt_Frame$S$I$I",[this.frame, $I$(8).getString$S("label.sequence_feature_settings"), width, height]);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(1).black);
g.drawString$S$I$I($I$(8).getString$S("label.no_features_added_to_this_alignment"), 10, 20);
g.drawString$S$I$I($I$(8).getString$S("label.features_can_be_added_from_searches_1"), 10, 40);
g.drawString$S$I$I($I$(8).getString$S("label.features_can_be_added_from_searches_2"), 10, 60);
});

Clazz.newMeth(C$, 'popupSort$jalview_appletgui_FeatureSettings_MyCheckbox$java_util_Map$I$I', function (check, minmax, x, y) {
var type=check.type;
var typeCol=this.fr.getFeatureStyle$S(type);
var men=Clazz.new_([$I$(8,"formatMessage$S$SA",["label.settings_for_type", Clazz.array(String, -1, [type])])],$I$(14,1).c$$S);
var scr=Clazz.new_([$I$(8).getString$S("label.sort_by_score")],$I$(15,1).c$$S);
men.add$java_awt_MenuItem(scr);
var me=this;
scr.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.me.ap.alignFrame.avc.sortAlignmentByFeatureScore$java_util_List($I$(16,"asList$OA",[Clazz.array(String, -1, [this.$finals$.type])]));
});
})()
), Clazz.new_(P$.FeatureSettings$4.$init$,[this, {type:type,me:me}])));
var dens=Clazz.new_([$I$(8).getString$S("label.sort_by_density")],$I$(15,1).c$$S);
dens.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.me.ap.alignFrame.avc.sortAlignmentByFeatureDensity$java_util_List($I$(16,"asList$OA",[Clazz.array(String, -1, [this.$finals$.type])]));
});
})()
), Clazz.new_(P$.FeatureSettings$5.$init$,[this, {type:type,me:me}])));
men.add$java_awt_MenuItem(dens);
if (minmax != null ) {
var typeMinMax=minmax.get$O(type);
if (typeMinMax != null  && typeMinMax[0] != null  ) {
var mxcol=Clazz.new_([(typeCol.isSimpleColour$()) ? "Graduated Colour" : "Single Colour"],$I$(15,1).c$$S);
men.add$java_awt_MenuItem(mxcol);
mxcol.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.$finals$.typeCol.isSimpleColour$()) {
Clazz.new_($I$(17,1).c$$jalview_appletgui_FeatureSettings$S,[this.$finals$.me, this.$finals$.type]);
this.$finals$.check.updateColor$jalview_api_FeatureColourI(this.b$['jalview.appletgui.FeatureSettings'].fr.getFeatureStyle$S(this.$finals$.type));
} else {
Clazz.new_($I$(18,1).c$$jalview_appletgui_FeatureSettings$S$jalview_api_FeatureColourI,[this.$finals$.me, this.$finals$.check.type, this.$finals$.typeCol]);
}});
})()
), Clazz.new_(P$.FeatureSettings$6.$init$,[this, {type:type,me:me,check:check,typeCol:typeCol}])));
}}var selectContaining=Clazz.new_([$I$(8).getString$S("label.select_columns_containing")],$I$(15,1).c$$S);
selectContaining.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.me.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(false, false, false, this.$finals$.type);
});
})()
), Clazz.new_(P$.FeatureSettings$7.$init$,[this, {type:type,me:me}])));
men.add$java_awt_MenuItem(selectContaining);
var selectNotContaining=Clazz.new_([$I$(8).getString$S("label.select_columns_not_containing")],$I$(15,1).c$$S);
selectNotContaining.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.me.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(true, false, false, this.$finals$.type);
});
})()
), Clazz.new_(P$.FeatureSettings$8.$init$,[this, {type:type,me:me}])));
men.add$java_awt_MenuItem(selectNotContaining);
var hideContaining=Clazz.new_([$I$(8).getString$S("label.hide_columns_containing")],$I$(15,1).c$$S);
hideContaining.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.FeatureSettings'].hideFeatureColumns$S$Z.apply(this.b$['jalview.appletgui.FeatureSettings'], [this.$finals$.type, true]);
});
})()
), Clazz.new_(P$.FeatureSettings$9.$init$,[this, {type:type}])));
men.add$java_awt_MenuItem(hideContaining);
var hideNotContaining=Clazz.new_([$I$(8).getString$S("label.hide_columns_not_containing")],$I$(15,1).c$$S);
hideNotContaining.addActionListener$java_awt_event_ActionListener(((P$.FeatureSettings$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "FeatureSettings$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.appletgui.FeatureSettings'].hideFeatureColumns$S$Z.apply(this.b$['jalview.appletgui.FeatureSettings'], [this.$finals$.type, false]);
});
})()
), Clazz.new_(P$.FeatureSettings$10.$init$,[this, {type:type}])));
men.add$java_awt_MenuItem(hideNotContaining);
this.featurePanel.add$java_awt_PopupMenu(men);
men.show$java_awt_Component$I$I(this.featurePanel, x, y);
});

Clazz.newMeth(C$, 'discoverAllFeatureData$', function () {
if (this.fr.getAllFeatureColours$() != null  && this.fr.getAllFeatureColours$().size$() > 0 ) {
}this.resetTable$Z(false);
});

Clazz.newMeth(C$, 'checkGroupState$S', function (group) {
var visible=this.fr.checkGroupVisibility$S$Z(group, true);
for (var g=0; g < this.groupPanel.getComponentCount$(); g++) {
if ((this.groupPanel.getComponent$I(g)).getLabel$().equals$O(group)) {
(this.groupPanel.getComponent$I(g)).setState$Z(visible);
return visible;
}}
var check=Clazz.new_($I$(19,1).c$$S$Z$Z,[this, null, group, visible, false]);
check.addMouseListener$java_awt_event_MouseListener(this);
check.setFont$java_awt_Font(Clazz.new_($I$(20,1).c$$S$I$I,["Serif", 1, 12]));
check.addItemListener$java_awt_event_ItemListener(this.groupItemListener);
this.groupPanel.add$java_awt_Component(check);
this.groupPanel.validate$();
return visible;
});

Clazz.newMeth(C$, 'resetTable$Z', function (groupsChanged) {
var displayableTypes=Clazz.new_($I$(21,1));
var foundGroups=Clazz.new_($I$(22,1));
var alignment=this.av.getAlignment$();
for (var i=0; i < alignment.getHeight$(); i++) {
var seq=alignment.getSequenceAt$I(i);
var groups=seq.getFeatures$().getFeatureGroups$Z$SA(true, []);
var visibleGroups=Clazz.new_($I$(22,1));
for (var group, $group = groups.iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
if (group == null  || this.checkGroupState$S(group) ) {
visibleGroups.add$O(group);
}}
foundGroups.addAll$java_util_Collection(groups);
var types=seq.getFeatures$().getFeatureTypesForGroups$Z$SA(true, visibleGroups.toArray$OA(Clazz.array(String, [visibleGroups.size$()])));
displayableTypes.addAll$java_util_Collection(types);
}
this.pruneGroups$java_util_Set(foundGroups);
var comps;
var cSize=this.featurePanel.getComponentCount$();
var check;
for (var i=0; i < cSize; i++) {
comps=this.featurePanel.getComponents$();
check=comps[i];
if (!displayableTypes.contains$O(check.type)) {
this.featurePanel.remove$I(i);
cSize--;
i--;
}}
if (this.fr.getRenderOrder$() != null ) {
var rol=this.fr.getRenderOrder$();
for (var ro=rol.size$() - 1; ro > -1; ro--) {
var item=rol.get$I(ro);
if (!displayableTypes.contains$O(item)) {
continue;
}displayableTypes.remove$O(item);
this.addCheck$Z$S(false, item);
}
}for (var type, $type = displayableTypes.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
this.addCheck$Z$S(groupsChanged, type);
}
this.featurePanel.setLayout$java_awt_LayoutManager(Clazz.new_([this.featurePanel.getComponentCount$(), 1, 10, 5],$I$(9,1).c$$I$I$I$I));
this.featurePanel.validate$();
if (this.scrollPane != null ) {
this.scrollPane.validate$();
}this.itemStateChanged$java_awt_event_ItemEvent(null);
});

Clazz.newMeth(C$, 'pruneGroups$java_util_Set', function (foundGroups) {
for (var g=0; g < this.groupPanel.getComponentCount$(); g++) {
var checkbox=this.groupPanel.getComponent$I(g);
if (!foundGroups.contains$O(checkbox.getLabel$())) {
this.groupPanel.remove$java_awt_Component(checkbox);
}}
});

Clazz.newMeth(C$, 'addCheck$Z$S', function (groupsChanged, type) {
var addCheck;
var comps=this.featurePanel.getComponents$();
var check;
addCheck=true;
for (var i=0; i < this.featurePanel.getComponentCount$(); i++) {
check=comps[i];
if (check.type.equals$O(type)) {
addCheck=false;
break;
}}
if (addCheck) {
var selected=false;
if (groupsChanged || this.av.getFeaturesDisplayed$().isVisible$S(type) ) {
selected=true;
}check=Clazz.new_([this, null, type, selected, false, this.fr.getFeatureStyle$S(type)],$I$(19,1).c$$S$Z$Z$jalview_api_FeatureColourI);
check.addMouseListener$java_awt_event_MouseListener(this);
check.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
check.addItemListener$java_awt_event_ItemListener(this);
if (groupsChanged) {
this.featurePanel.add$java_awt_Component$I(check, 0);
} else {
this.featurePanel.add$java_awt_Component(check);
}}});

Clazz.newMeth(C$, 'invertSelection$', function () {
for (var i=0; i < this.featurePanel.getComponentCount$(); i++) {
var check=this.featurePanel.getComponent$I(i);
check.setState$Z(!check.getState$());
}
this.selectionChanged$Z(true);
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (evt) {
this.selectionChanged$Z(true);
});

Clazz.newMeth(C$, 'selectionChanged$Z', function (updateOverview) {
var comps=this.featurePanel.getComponents$();
var cSize=comps.length;
var rowData=Clazz.array($I$(23), [cSize]);
var i=0;
for (var comp, $comp = 0, $$comp = comps; $comp<$$comp.length&&((comp=($$comp[$comp])),1);$comp++) {
var check=comp;
var colour=this.fr.getFeatureStyle$S(check.type);
rowData[i]=Clazz.new_([check.type, colour, null, new Boolean(check.getState$())],$I$(23,1).c$$S$jalview_api_FeatureColourI$jalview_datamodel_features_FeatureMatcherSetI$Boolean);
i++;
}
this.fr.setFeaturePriority$jalview_viewmodel_seqfeatures_FeatureRendererModel_FeatureSettingsBeanA(rowData);
this.ap.paintAlignment$Z$Z(updateOverview, updateOverview);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (evt) {
if ((evt.getSource$()).getParent$() !== this.featurePanel ) {
return;
}this.dragging=true;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if ((evt.getSource$()).getParent$() !== this.featurePanel ) {
return;
}var comp=null;
var target=null;
var height=evt.getY$() + evt.getComponent$().getLocation$().y;
if (height > this.featurePanel.getSize$().height) {
comp=this.featurePanel.getComponent$I(this.featurePanel.getComponentCount$() - 1);
} else if (height < 0) {
comp=this.featurePanel.getComponent$I(0);
} else {
comp=this.featurePanel.getComponentAt$I$I(evt.getX$(), evt.getY$() + evt.getComponent$().getLocation$().y);
}if (comp != null  && Clazz.instanceOf(comp, "java.awt.Checkbox") ) {
target=comp;
}if (this.selectedCheck != null  && target != null   && this.selectedCheck !== target  ) {
var targetIndex=-1;
for (var i=0; i < this.featurePanel.getComponentCount$(); i++) {
if (target === this.featurePanel.getComponent$I(i) ) {
targetIndex=i;
break;
}}
this.featurePanel.remove$java_awt_Component(this.selectedCheck);
this.featurePanel.add$java_awt_Component$I(this.selectedCheck, targetIndex);
this.featurePanel.validate$();
this.itemStateChanged$java_awt_event_ItemEvent(null);
}});

Clazz.newMeth(C$, 'setUserColour$S$jalview_api_FeatureColourI', function (feature, originalColour) {
this.fr.setColour$S$jalview_api_FeatureColourI(feature, originalColour);
this.refreshTable$();
});

Clazz.newMeth(C$, 'refreshTable$', function () {
this.featurePanel.removeAll$();
this.resetTable$Z(false);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (evt) {
var check=evt.getSource$();
if ((evt.getModifiersEx$() & 4096) != 0) {
this.popupSort$jalview_appletgui_FeatureSettings_MyCheckbox$java_util_Map$I$I(check, this.fr.getMinMax$(), evt.getX$(), evt.getY$());
}if (check.getParent$() !== this.featurePanel ) {
return;
}if (evt.getClickCount$() > 1) {
var fcol=this.fr.getFeatureStyle$S(check.type);
if (fcol.isSimpleColour$()) {
Clazz.new_([this, check.type, fcol.getColour$()],$I$(18,1).c$$O$S$java_awt_Color);
} else {
Clazz.new_($I$(17,1).c$$jalview_appletgui_FeatureSettings$S,[this, check.type]);
check.updateColor$jalview_api_FeatureColourI(this.fr.getFeatureStyle$S(check.type));
}}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (evt) {
});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (evt) {
this.fr.setTransparency$F((100 - this.transparency.getValue$()) / 100.0);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'hideFeatureColumns$S$Z', function (type, columnsContaining) {
if (this.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(columnsContaining, false, false, type)) {
if (this.ap.alignFrame.avc.markColumnsContainingFeatures$Z$Z$Z$S(!columnsContaining, false, false, type)) {
this.ap.alignFrame.viewport.hideSelectedColumns$();
}}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FeatureSettings, "MyCheckbox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Checkbox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasLink'],'I',['stringWidth'],'S',['type'],'O',['col','jalview.api.FeatureColourI']]]

Clazz.newMeth(C$, 'updateColor$jalview_api_FeatureColourI', function (newcol) {
this.col=newcol;
if (this.col.isSimpleColour$()) {
this.setBackground$java_awt_Color(this.col.getColour$());
} else {
var vlabel=this.type;
if (this.col.isAboveThreshold$()) {
vlabel += " (>)";
} else if (this.col.isBelowThreshold$()) {
vlabel += " (<)";
}if (this.col.isColourByLabel$()) {
this.setBackground$java_awt_Color($I$(1).white);
vlabel += " (by Label)";
} else {
this.setBackground$java_awt_Color(this.col.getMinColour$());
}this.setLabel$S(vlabel);
}this.repaint$();
});

Clazz.newMeth(C$, 'c$$S$Z$Z', function (label, checked, haslink) {
;C$.superclazz.c$$S$Z.apply(this,[label, checked]);C$.$init$.apply(this);
this.type=label;
var fm=this.this$0.av.nullFrame.getFontMetrics$java_awt_Font(this.this$0.av.nullFrame.getFont$());
this.stringWidth=fm.stringWidth$S(label);
this.hasLink=haslink;
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z$jalview_api_FeatureColourI', function (type, selected, b, featureStyle) {
C$.c$$S$Z$Z.apply(this, [type, selected, b]);
this.updateColor$jalview_api_FeatureColourI(featureStyle);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var d=this.getSize$();
if (this.col != null ) {
if (this.col.isColourByLabel$()) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I((d.width/2|0), 0, (d.width/2|0), d.height);
} else if (this.col.isGraduatedColour$()) {
var maxCol=this.col.getMaxColour$();
g.setColor$java_awt_Color(maxCol);
g.fillRect$I$I$I$I((d.width/2|0), 0, (d.width/2|0), d.height);
}}if (this.hasLink) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.this$0.linkImage, this.stringWidth + 25, ((this.getSize$().height - this.this$0.linkImage.getHeight$java_awt_image_ImageObserver(this))/2|0), this);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:45 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
