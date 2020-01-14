(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.TextField','java.awt.Button','java.awt.Checkbox','java.util.HashMap','java.awt.Frame','jalview.bin.JalviewLite','jalview.util.MessageManager','java.awt.event.WindowAdapter','java.util.ArrayList','jalview.datamodel.SequenceFeature','jalview.analysis.Finder','java.awt.Label','java.awt.Font','java.awt.Rectangle','java.awt.event.KeyAdapter','java.awt.Panel','java.awt.GridLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Finder", null, 'java.awt.Panel', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.av=null;
this.ap=null;
this.textfield=null;
this.findAll=null;
this.findNext=null;
this.createFeatures=null;
this.caseSensitive=null;
this.searchDescription=null;
this.searchResults=null;
this.finders=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.textfield=Clazz.new_($I$(1));
this.findAll=Clazz.new_($I$(2));
this.findNext=Clazz.new_($I$(2));
this.createFeatures=Clazz.new_($I$(2));
this.caseSensitive=Clazz.new_($I$(3));
this.searchDescription=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this,1);
this.finders=Clazz.new_($I$(4));
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
this.av=ap.av;
this.ap=ap;
var frame=Clazz.new_($I$(5));
frame.add$java_awt_Component(this);
$I$(6).addFrame$java_awt_Frame$S$I$I(frame, $I$(7).getString$S("action.find"), 340, 120);
frame.repaint$();
frame.addWindowListener$java_awt_event_WindowListener(((P$.Finder$1||
(function(){var C$=Clazz.newClass(P$, "Finder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (evt) {
this.$finals$.ap.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
});
})()
), Clazz.new_($I$(8), [this, {ap: ap}],P$.Finder$1)));
this.textfield.requestFocus$();
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
if (evt.getSource$() === this.textfield ) {
this.doSearch$Z(false);
} else if (evt.getSource$() === this.findNext ) {
this.doSearch$Z(false);
} else if (evt.getSource$() === this.findAll ) {
this.doSearch$Z(true);
} else if (evt.getSource$() === this.createFeatures ) {
this.createFeatures_actionPerformed$();
}});

Clazz.newMeth(C$, 'createFeatures_actionPerformed$', function () {
var seqs=Clazz.new_($I$(9));
var features=Clazz.new_($I$(9));
var searchString=this.textfield.getText$().trim$();
for (var match, $match = this.searchResults.getResults$().iterator$(); $match.hasNext$()&&((match=($match.next$())),1);) {
seqs.add$TE(match.getSequence$().getDatasetSequence$());
features.add$TE(Clazz.new_($I$(10).c$$S$S$I$I$S,[searchString, "Search Results", match.getStart$(), match.getEnd$(), "Search Results"]));
}
if (this.ap.seqPanel.seqCanvas.getFeatureRenderer$().amendFeatures$java_util_List$java_util_List$Z$jalview_appletgui_AlignmentPanel(seqs, features, true, this.ap)) {
this.ap.alignFrame.sequenceFeatures.setState$Z(true);
this.av.setShowSequenceFeatures$Z(true);
this.ap.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
}});

Clazz.newMeth(C$, 'doSearch$Z', function (doFindAll) {
if (this.ap.av.applet.currentAlignFrame != null ) {
this.ap=this.ap.av.applet.currentAlignFrame.alignPanel;
this.av=this.ap.av;
}this.createFeatures.setEnabled$Z(false);
var finder=this.finders.get$O(this.av);
if (finder == null ) {
finder=Clazz.new_($I$(11).c$$jalview_api_AlignViewportI,[this.av]);
this.finders.put$TK$TV(this.av, finder);
}var searchString=this.textfield.getText$();
var isCaseSensitive=this.caseSensitive.getState$();
var doSearchDescription=this.searchDescription.getState$();
if (doFindAll) {
finder.findAll$S$Z$Z(searchString, isCaseSensitive, doSearchDescription);
} else {
finder.findNext$S$Z$Z(searchString, isCaseSensitive, doSearchDescription);
}this.searchResults=finder.getSearchResults$();
var idMatches=finder.getIdMatches$();
this.ap.idPanel.highlightSearchResults$java_util_List(idMatches);
if (this.searchResults.isEmpty$()) {
this.searchResults=null;
} else {
this.createFeatures.setEnabled$Z(true);
}this.ap.highlightSearchResults$jalview_datamodel_SearchResultsI(this.searchResults);
if (idMatches.isEmpty$() && this.searchResults == null  ) {
this.ap.alignFrame.statusBar.setText$S($I$(7).getString$S("label.finished_searching"));
} else {
if (doFindAll) {
var message=(idMatches.size$() > 0) ? "" + idMatches.size$() + " IDs"  : "";
if (idMatches.size$() > 0 && this.searchResults != null   && this.searchResults.getSize$() > 0 ) {
message += " and ";
}if (this.searchResults != null ) {
message += this.searchResults.getSize$() + " subsequence matches.";
}this.ap.alignFrame.statusBar.setText$S($I$(7).formatMessage$S$SA("label.search_results", Clazz.array(String, -1, [searchString, message])));
} else {
this.ap.alignFrame.statusBar.setText$S($I$(7).formatMessage$S$SA("label.found_match_for", Clazz.array(String, -1, [searchString])));
}}});

Clazz.newMeth(C$, 'jbInit', function () {
var jLabel1=Clazz.new_($I$(12).c$$S,[$I$(7).getString$S("action.find")]);
jLabel1.setFont$java_awt_Font(Clazz.new_($I$(13).c$$S$I$I,["Verdana", 0, 12]));
jLabel1.setBounds$java_awt_Rectangle(Clazz.new_($I$(14).c$$I$I$I$I,[3, 30, 34, 15]));
this.setLayout$java_awt_LayoutManager(null);
this.textfield.setFont$java_awt_Font(Clazz.new_($I$(13).c$$S$I$I,["Verdana", 0, 10]));
this.textfield.setText$S("");
this.textfield.setBounds$java_awt_Rectangle(Clazz.new_($I$(14).c$$I$I$I$I,[40, 17, 133, 21]));
this.textfield.addKeyListener$java_awt_event_KeyListener(((P$.Finder$2||
(function(){var C$=Clazz.newClass(P$, "Finder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
this.b$['jalview.appletgui.Finder'].textfield_keyTyped$.apply(this.b$['jalview.appletgui.Finder'], []);
});
})()
), Clazz.new_($I$(15), [this, null],P$.Finder$2)));
this.textfield.addActionListener$java_awt_event_ActionListener(this);
this.findAll.setFont$java_awt_Font(Clazz.new_($I$(13).c$$S$I$I,["Verdana", 0, 10]));
this.findAll.setLabel$S($I$(7).getString$S("action.find_all"));
this.findAll.addActionListener$java_awt_event_ActionListener(this);
this.findNext.setEnabled$Z(false);
this.findNext.setFont$java_awt_Font(Clazz.new_($I$(13).c$$S$I$I,["Verdana", 0, 10]));
this.findNext.setLabel$S($I$(7).getString$S("action.find_next"));
this.findNext.addActionListener$java_awt_event_ActionListener(this);
var actionsPanel=Clazz.new_($I$(16));
actionsPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(14).c$$I$I$I$I,[195, 5, 141, 64]));
var gridLayout1=Clazz.new_($I$(17));
actionsPanel.setLayout$java_awt_LayoutManager(gridLayout1);
gridLayout1.setHgap$I(0);
gridLayout1.setRows$I(3);
gridLayout1.setVgap$I(2);
this.createFeatures.setEnabled$Z(false);
this.createFeatures.setFont$java_awt_Font(Clazz.new_($I$(13).c$$S$I$I,["Verdana", 0, 10]));
this.createFeatures.setLabel$S($I$(7).getString$S("label.new_feature"));
this.createFeatures.addActionListener$java_awt_event_ActionListener(this);
this.caseSensitive.setLabel$S($I$(7).getString$S("label.match_case"));
this.caseSensitive.setBounds$java_awt_Rectangle(Clazz.new_($I$(14).c$$I$I$I$I,[30, 39, 126, 23]));
this.searchDescription.setLabel$S($I$(7).getString$S("label.include_description"));
this.searchDescription.setBounds$java_awt_Rectangle(Clazz.new_($I$(14).c$$I$I$I$I,[30, 59, 170, 23]));
actionsPanel.add$java_awt_Component$O(this.findNext, null);
actionsPanel.add$java_awt_Component$O(this.findAll, null);
actionsPanel.add$java_awt_Component$O(this.createFeatures, null);
this.add$java_awt_Component(this.caseSensitive);
this.add$java_awt_Component$O(this.textfield, null);
this.add$java_awt_Component$O(jLabel1, null);
this.add$java_awt_Component$O(actionsPanel, null);
this.add$java_awt_Component(this.searchDescription);
}, p$1);

Clazz.newMeth(C$, 'textfield_keyTyped$', function () {
this.findNext.setEnabled$Z(true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
