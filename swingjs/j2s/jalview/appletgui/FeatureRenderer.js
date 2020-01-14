(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.awt.Color','java.awt.Font','jalview.util.MessageManager','java.awt.Panel','java.awt.BorderLayout','java.awt.TextField','java.awt.TextArea','java.awt.Button',['jalview.appletgui.FeatureRenderer','.FeatureColourPanel'],'java.awt.GridLayout','java.awt.Label','java.awt.Choice','jalview.datamodel.SearchResults','jalview.util.ColorUtils','jalview.schemes.FeatureColour','java.awt.ScrollPane','jalview.appletgui.JVDialog','jalview.appletgui.UserDefinedColours','jalview.appletgui.FeatureColourChooser','java.awt.event.MouseAdapter','jalview.io.FeaturesFile','jalview.datamodel.SequenceFeature','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.renderer.seqfeatures.FeatureRenderer');
C$.lastFeatureAdded=null;
C$.lastFeatureGroupAdded=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.lastFeatureAdded="feature_1";
C$.lastFeatureGroupAdded="Jalview";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.featureLinks=null;
this.featureIndex=0;
this.deleteFeature=false;
this.colourPanel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.featureLinks=null;
this.featureIndex=0;
this.deleteFeature=false;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_viewmodel_AlignmentViewport', function (av) {
C$.superclazz.c$$jalview_api_AlignViewportI.apply(this, [av]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'amendFeatures$java_util_List$java_util_List$Z$jalview_appletgui_AlignmentPanel', function (sequences, features, create, ap) {
var bigPanel=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(5))]);
var name=Clazz.new_($I$(6).c$$I,[16]);
var group=Clazz.new_($I$(6).c$$I,[16]);
var description=Clazz.new_($I$(7).c$$I$I,[3, 35]);
var start=Clazz.new_($I$(6).c$$I,[8]);
var end=Clazz.new_($I$(6).c$$I,[8]);
var overlaps;
var deleteButton=Clazz.new_($I$(8).c$$S,["Delete"]);
this.deleteFeature=false;
name.addTextListener$java_awt_event_TextListener(((P$.FeatureRenderer$1||
(function(){var C$=Clazz.newClass(P$, "FeatureRenderer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.TextListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['textValueChanged$java_awt_event_TextEvent','textValueChanged$'], function (e) {
this.b$['jalview.appletgui.FeatureRenderer'].warnIfTypeHidden$java_awt_Frame$S.apply(this.b$['jalview.appletgui.FeatureRenderer'], [this.$finals$.ap.alignFrame, this.$finals$.name.getText$()]);
});
})()
), Clazz.new_(P$.FeatureRenderer$1.$init$, [this, {ap: ap, name: name}])));
group.addTextListener$java_awt_event_TextListener(((P$.FeatureRenderer$2||
(function(){var C$=Clazz.newClass(P$, "FeatureRenderer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.TextListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['textValueChanged$java_awt_event_TextEvent','textValueChanged$'], function (e) {
this.b$['jalview.appletgui.FeatureRenderer'].warnIfGroupHidden$java_awt_Frame$S.apply(this.b$['jalview.appletgui.FeatureRenderer'], [this.$finals$.ap.alignFrame, this.$finals$.group.getText$()]);
});
})()
), Clazz.new_(P$.FeatureRenderer$2.$init$, [this, {ap: ap, group: group}])));
this.colourPanel=Clazz.new_($I$(9), [this, null]);
this.colourPanel.setSize$I$I(110, 15);
var fr=this;
var panel=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(10).c$$I$I,[3, 1])]);
this.featureIndex=0;
var tmp;
if (!create && features.size$() > 1 ) {
panel=Clazz.new_($I$(4).c$$java_awt_LayoutManager,[Clazz.new_($I$(10).c$$I$I,[4, 1])]);
tmp=Clazz.new_($I$(4));
tmp.add$java_awt_Component(Clazz.new_($I$(11).c$$S,["Select Feature: "]));
overlaps=Clazz.new_($I$(12));
for (var sf, $sf = features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var item=sf.getType$() + "/" + sf.getBegin$() + "-" + sf.getEnd$() ;
if (sf.getFeatureGroup$() != null ) {
item += " (" + sf.getFeatureGroup$() + ")" ;
}overlaps.addItem$S(item);
}
tmp.add$java_awt_Component(overlaps);
overlaps.addItemListener$java_awt_event_ItemListener(((P$.FeatureRenderer$3||
(function(){var C$=Clazz.newClass(P$, "FeatureRenderer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
var index=this.$finals$.overlaps.getSelectedIndex$();
if (index != -1) {
this.b$['jalview.appletgui.FeatureRenderer'].featureIndex=index;
var sf=this.$finals$.features.get$I(index);
this.$finals$.name.setText$S(sf.getType$());
this.$finals$.description.setText$S(sf.getDescription$());
this.$finals$.group.setText$S(sf.getFeatureGroup$());
this.$finals$.start.setText$S(sf.getBegin$() + "");
this.$finals$.end.setText$S(sf.getEnd$() + "");
var highlight=Clazz.new_($I$(13));
highlight.addResult$jalview_datamodel_SequenceI$I$I(this.$finals$.sequences.get$I(0), sf.getBegin$(), sf.getEnd$());
this.$finals$.ap.seqPanel.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(highlight);
}var col=this.b$['jalview.viewmodel.seqfeatures.FeatureRendererModel'].getFeatureStyle$S.apply(this.b$['jalview.viewmodel.seqfeatures.FeatureRendererModel'], [this.$finals$.name.getText$()]);
if (col == null ) {
var generatedColour=$I$(14).createColourFromName$S(this.$finals$.name.getText$());
col=Clazz.new_($I$(15).c$$java_awt_Color,[generatedColour]);
}this.b$['jalview.appletgui.FeatureRenderer'].colourPanel.updateColor$jalview_api_FeatureColourI(col);
});
})()
), Clazz.new_(P$.FeatureRenderer$3.$init$, [this, {overlaps: overlaps, features: features, name: name, description: description, group: group, start: start, end: end, sequences: sequences, ap: ap}])));
panel.add$java_awt_Component(tmp);
}tmp=Clazz.new_($I$(4));
panel.add$java_awt_Component(tmp);
tmp.add$java_awt_Component(Clazz.new_($I$(11).c$$S$I,[$I$(3).getString$S("label.name:"), 2]));
tmp.add$java_awt_Component(name);
tmp=Clazz.new_($I$(4));
panel.add$java_awt_Component(tmp);
tmp.add$java_awt_Component(Clazz.new_($I$(11).c$$S$I,[$I$(3).getString$S("label.group:"), 2]));
tmp.add$java_awt_Component(group);
tmp=Clazz.new_($I$(4));
panel.add$java_awt_Component(tmp);
tmp.add$java_awt_Component(Clazz.new_($I$(11).c$$S$I,[$I$(3).getString$S("label.colour"), 2]));
tmp.add$java_awt_Component(this.colourPanel);
bigPanel.add$java_awt_Component$O(panel, "North");
panel=Clazz.new_($I$(4));
panel.add$java_awt_Component(Clazz.new_($I$(11).c$$S$I,[$I$(3).getString$S("label.description:"), 2]));
panel.add$java_awt_Component(Clazz.new_($I$(16)).add$java_awt_Component(description));
if (!create) {
bigPanel.add$java_awt_Component$O(panel, "South");
panel=Clazz.new_($I$(4));
panel.add$java_awt_Component(Clazz.new_($I$(11).c$$S$I,[$I$(3).getString$S("label.start"), 2]));
panel.add$java_awt_Component(start);
panel.add$java_awt_Component(Clazz.new_($I$(11).c$$S$I,[$I$(3).getString$S("label.end"), 2]));
panel.add$java_awt_Component(end);
bigPanel.add$java_awt_Component$O(panel, "Center");
} else {
bigPanel.add$java_awt_Component$O(panel, "Center");
}var firstFeature=features.get$I(0);
var useLastDefaults=firstFeature.getType$() == null ;
var featureType=useLastDefaults ? C$.lastFeatureAdded : firstFeature.getType$();
var featureGroup=useLastDefaults ? C$.lastFeatureGroupAdded : firstFeature.getFeatureGroup$();
var title=create ? $I$(3).getString$S("label.create_new_sequence_features") : $I$(3).formatMessage$S$SA("label.amend_delete_features", Clazz.array(String, -1, [sequences.get$I(0).getName$()]));
var dialog=Clazz.new_($I$(17).c$$java_awt_Frame$S$Z$I$I,[ap.alignFrame, title, true, 385, 240]);
dialog.setMainPanel$java_awt_Panel(bigPanel);
name.setText$S(featureType);
group.setText$S(featureGroup);
if (!create) {
dialog.ok.setLabel$S($I$(3).getString$S("label.amend"));
dialog.buttonPanel.add$java_awt_Component$I(deleteButton, 1);
deleteButton.addActionListener$java_awt_event_ActionListener(((P$.FeatureRenderer$4||
(function(){var C$=Clazz.newClass(P$, "FeatureRenderer$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
this.b$['jalview.appletgui.FeatureRenderer'].deleteFeature=true;
this.$finals$.dialog.setVisible$Z(false);
});
})()
), Clazz.new_(P$.FeatureRenderer$4.$init$, [this, {dialog: dialog}])));
}start.setText$S(firstFeature.getBegin$() + "");
end.setText$S(firstFeature.getEnd$() + "");
description.setText$S(firstFeature.getDescription$());
var fcol=this.getFeatureStyle$S(name.getText$());
this.colourPanel.updateColor$jalview_api_FeatureColourI(fcol);
dialog.setResizable$Z(true);
this.colourPanel.addMouseListener$java_awt_event_MouseListener(((P$.FeatureRenderer$5||
(function(){var C$=Clazz.newClass(P$, "FeatureRenderer$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (evt) {
if (!this.b$['jalview.appletgui.FeatureRenderer'].colourPanel.isGcol) {
Clazz.new_($I$(18).c$$jalview_appletgui_FeatureRenderer$java_awt_Frame,[this.$finals$.fr, this.$finals$.ap.alignFrame]);
} else {
Clazz.new_($I$(19).c$$jalview_appletgui_AlignFrame$S,[this.$finals$.ap.alignFrame, this.$finals$.name.getText$()]);
this.$finals$.dialog.transferFocus$();
}});
})()
), Clazz.new_($I$(20), [this, {fr: fr, ap: ap, name: name, dialog: dialog}],P$.FeatureRenderer$5)));
dialog.setVisible$Z(true);
var ffile=Clazz.new_($I$(21));
var enteredType=name.getText$().trim$();
var enteredGroup=group.getText$().trim$();
var enteredDesc=description.getText$().replace$C$C("\n", " ");
if (dialog.accept && useLastDefaults ) {
C$.lastFeatureAdded=enteredType;
C$.lastFeatureGroupAdded=enteredGroup;
}if (!create) {
var sf=features.get$I(this.featureIndex);
if (dialog.accept) {
if (!this.colourPanel.isGcol) {
this.setColour$S$jalview_api_FeatureColourI(enteredType, Clazz.new_($I$(15).c$$java_awt_Color,[this.colourPanel.getBackground$()]));
}var newBegin=sf.begin;
var newEnd=sf.end;
try {
newBegin=Integer.parseInt$S(start.getText$());
newEnd=Integer.parseInt$S(end.getText$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
sequences.get$I(0).deleteFeature$jalview_datamodel_SequenceFeature(sf);
var newSf=Clazz.new_($I$(22).c$$jalview_datamodel_SequenceFeature$S$I$I$S$F,[sf, enteredType, newBegin, newEnd, enteredGroup, sf.getScore$()]);
newSf.setDescription$S(enteredDesc);
ffile.parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z(newSf, false);
sequences.get$I(0).addSequenceFeature$jalview_datamodel_SequenceFeature(newSf);
var typeOrGroupChanged=(!featureType.equals$O(newSf.getType$()) || !featureGroup.equals$O(newSf.getFeatureGroup$()) );
ffile.parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z(sf, false);
if (typeOrGroupChanged) {
this.featuresAdded$();
}}if (this.deleteFeature) {
sequences.get$I(0).deleteFeature$jalview_datamodel_SequenceFeature(sf);
this.featuresAdded$();
}} else {
if (dialog.accept && name.getText$().length$() > 0 ) {
for (var i=0; i < sequences.size$(); i++) {
var sf=features.get$I(i);
var sf2=Clazz.new_($I$(22).c$$S$S$I$I$S,[enteredType, enteredDesc, sf.getBegin$(), sf.getEnd$(), enteredGroup]);
ffile.parseDescriptionHTML$jalview_datamodel_SequenceFeature$Z(sf2, false);
sequences.get$I(i).addSequenceFeature$jalview_datamodel_SequenceFeature(sf2);
}
var newColour=this.colourPanel.getBackground$();
this.setColour$S$jalview_api_FeatureColourI(enteredType, Clazz.new_($I$(15).c$$java_awt_Color,[newColour]));
this.featuresAdded$();
} else {
return false;
}}if ((this.av).featureSettings != null ) {
(this.av).featureSettings.refreshTable$();
}ap.paintAlignment$Z$Z(true, true);
return true;
});

Clazz.newMeth(C$, 'warnIfGroupHidden$java_awt_Frame$S', function (frame, group) {
if (this.featureGroups.containsKey$O(group) && !(this.featureGroups.get$O(group)).booleanValue$() ) {
var msg=$I$(3).formatMessage$S$OA("label.warning_hidden", [$I$(3).getString$S("label.group"), group]);
this.showWarning$java_awt_Frame$S(frame, msg);
}});

Clazz.newMeth(C$, 'warnIfTypeHidden$java_awt_Frame$S', function (frame, type) {
if (this.getRenderOrder$().contains$O(type)) {
if (!this.showFeatureOfType$S(type)) {
var msg=$I$(3).formatMessage$S$OA("label.warning_hidden", [$I$(3).getString$S("label.feature_type"), type]);
this.showWarning$java_awt_Frame$S(frame, msg);
}}});

Clazz.newMeth(C$, 'showWarning$java_awt_Frame$S', function (frame, msg) {
var d=Clazz.new_($I$(17).c$$java_awt_Frame$S$Z$I$I,[frame, "", true, 350, 200]);
var mp=Clazz.new_($I$(4));
d.ok.setLabel$S($I$(3).getString$S("action.ok"));
d.cancel.setVisible$Z(false);
mp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(23)));
mp.add$java_awt_Component(Clazz.new_($I$(11).c$$S,[msg]));
d.setMainPanel$java_awt_Panel(mp);
d.setVisible$Z(true);
});
;
(function(){var C$=Clazz.newClass(P$.FeatureRenderer, "FeatureColourPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Panel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.label=null;
this.maxCol=null;
this.isColourByLabel=false;
this.isGcol=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.label="";
}, 1);

Clazz.newMeth(C$, 'updateColor$jalview_api_FeatureColourI', function (newcol) {
var bg=null;
var vlabel="";
if (newcol.isSimpleColour$()) {
bg=newcol.getColour$();
this.setBackground$java_awt_Color(bg);
} else {
if (newcol.isAboveThreshold$()) {
vlabel += " (>)";
} else if (newcol.isBelowThreshold$()) {
vlabel += " (<)";
}if (this.isColourByLabel=newcol.isColourByLabel$()) {
this.setBackground$java_awt_Color(bg=$I$(1).white);
vlabel += " (by Label)";
} else {
this.setBackground$java_awt_Color(bg=newcol.getMinColour$());
this.maxCol=newcol.getMaxColour$();
}}this.label=vlabel;
this.setBackground$java_awt_Color(bg);
this.repaint$();
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [null]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
var d=this.getSize$();
if (this.isGcol) {
if (this.isColourByLabel) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I((d.width/2|0), 0, (d.width/2|0), d.height);
g.setColor$java_awt_Color($I$(1).black);
var f=Clazz.new_($I$(2).c$$S$I$I,["Verdana", 0, 10]);
g.setFont$java_awt_Font(f);
g.drawString$S$I$I($I$(3).getString$S("label.label"), 0, 0);
} else {
g.setColor$java_awt_Color(this.maxCol);
g.fillRect$I$I$I$I((d.width/2|0), 0, (d.width/2|0), d.height);
}}});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
