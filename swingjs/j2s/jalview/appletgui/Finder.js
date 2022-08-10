(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.TextField','java.awt.Button','java.awt.Checkbox','java.util.HashMap','java.awt.Frame','jalview.bin.JalviewLite','jalview.util.MessageManager','java.awt.event.WindowAdapter','java.util.ArrayList','jalview.datamodel.SequenceFeature','jalview.analysis.Finder','java.awt.Label','java.awt.Font','java.awt.Rectangle','java.awt.event.KeyAdapter','java.awt.Panel','java.awt.GridLayout']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Finder", null, 'java.awt.Panel', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textfield=Clazz.new_($I$(1,1));
this.findAll=Clazz.new_($I$(2,1));
this.findNext=Clazz.new_($I$(2,1));
this.createFeatures=Clazz.new_($I$(2,1));
this.caseSensitive=Clazz.new_($I$(3,1));
this.searchDescription=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['av','jalview.api.AlignViewportI','ap','jalview.appletgui.AlignmentPanel','textfield','java.awt.TextField','findAll','java.awt.Button','+findNext','+createFeatures','caseSensitive','java.awt.Checkbox','+searchDescription','searchResults','jalview.datamodel.SearchResultsI','finders','java.util.Map']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignmentPanel',  function (ap) {
Clazz.super_(C$, this);
this.finders=Clazz.new_($I$(4,1));
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
var frame=Clazz.new_($I$(5,1));
frame.add$java_awt_Component(this);
$I$(6,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(7).getString$S("action.find"), 340, 120]);
frame.repaint$();
frame.addWindowListener$java_awt_event_WindowListener(((P$.Finder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Finder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (evt) {
this.$finals$.ap.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
});
})()
), Clazz.new_($I$(8,1),[this, {ap:ap}],P$.Finder$1)));
this.textfield.requestFocus$();
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (evt.getSource$() === this.textfield ) {
this.doSearch$Z(false);
} else if (evt.getSource$() === this.findNext ) {
this.doSearch$Z(false);
} else if (evt.getSource$() === this.findAll ) {
this.doSearch$Z(true);
} else if (evt.getSource$() === this.createFeatures ) {
this.createFeatures_actionPerformed$();
}});

Clazz.newMeth(C$, 'createFeatures_actionPerformed$',  function () {
var seqs=Clazz.new_($I$(9,1));
var features=Clazz.new_($I$(9,1));
var searchString=this.textfield.getText$().trim$();
for (var match, $match = this.searchResults.getResults$().iterator$(); $match.hasNext$()&&((match=($match.next$())),1);) {
seqs.add$O(match.getSequence$().getDatasetSequence$());
features.add$O(Clazz.new_([searchString, "Search Results", match.getStart$(), match.getEnd$(), "Search Results"],$I$(10,1).c$$S$S$I$I$S));
}
if (this.ap.seqPanel.seqCanvas.getFeatureRenderer$().amendFeatures$java_util_List$java_util_List$Z$jalview_appletgui_AlignmentPanel(seqs, features, true, this.ap)) {
this.ap.alignFrame.sequenceFeatures.setState$Z(true);
this.av.setShowSequenceFeatures$Z(true);
this.ap.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
}});

Clazz.newMeth(C$, 'doSearch$Z',  function (doFindAll) {
if (this.ap.av.applet.currentAlignFrame != null ) {
this.ap=this.ap.av.applet.currentAlignFrame.alignPanel;
this.av=this.ap.av;
}this.createFeatures.setEnabled$Z(false);
var finder=this.finders.get$O(this.av);
if (finder == null ) {
finder=Clazz.new_($I$(11,1).c$$jalview_api_AlignViewportI,[this.av]);
this.finders.put$O$O(this.av, finder);
}var searchString=this.textfield.getText$();
var isCaseSensitive=this.caseSensitive.getState$();
var doSearchDescription=this.searchDescription.getState$();
if (doFindAll) {
finder.findAll$S$Z$Z$Z(searchString, isCaseSensitive, doSearchDescription, false);
} else {
finder.findNext$S$Z$Z$Z(searchString, isCaseSensitive, doSearchDescription, false);
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
if (idMatches.size$() > 0 && this.searchResults != null   && this.searchResults.getCount$() > 0 ) {
message+=" and ";
}if (this.searchResults != null ) {
message+=this.searchResults.getCount$() + " subsequence matches.";
}this.ap.alignFrame.statusBar.setText$S($I$(7,"formatMessage$S$SA",["label.search_results", Clazz.array(String, -1, [searchString, message])]));
} else {
this.ap.alignFrame.statusBar.setText$S($I$(7,"formatMessage$S$SA",["label.found_match_for", Clazz.array(String, -1, [searchString])]));
}}});

Clazz.newMeth(C$, 'jbInit',  function () {
var jLabel1=Clazz.new_([$I$(7).getString$S("action.find")],$I$(12,1).c$$S);
jLabel1.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 0, 12]));
jLabel1.setBounds$java_awt_Rectangle(Clazz.new_($I$(14,1).c$$I$I$I$I,[3, 30, 34, 15]));
this.setLayout$java_awt_LayoutManager(null);
this.textfield.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 0, 10]));
this.textfield.setText$S("");
this.textfield.setBounds$java_awt_Rectangle(Clazz.new_($I$(14,1).c$$I$I$I$I,[40, 17, 133, 21]));
this.textfield.addKeyListener$java_awt_event_KeyListener(((P$.Finder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Finder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
this.b$['jalview.appletgui.Finder'].textfield_keyTyped$.apply(this.b$['jalview.appletgui.Finder'], []);
});
})()
), Clazz.new_($I$(15,1),[this, null],P$.Finder$2)));
this.textfield.addActionListener$java_awt_event_ActionListener(this);
this.findAll.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 0, 10]));
this.findAll.setLabel$S($I$(7).getString$S("action.find_all"));
this.findAll.addActionListener$java_awt_event_ActionListener(this);
this.findNext.setEnabled$Z(false);
this.findNext.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 0, 10]));
this.findNext.setLabel$S($I$(7).getString$S("action.find_next"));
this.findNext.addActionListener$java_awt_event_ActionListener(this);
var actionsPanel=Clazz.new_($I$(16,1));
actionsPanel.setBounds$java_awt_Rectangle(Clazz.new_($I$(14,1).c$$I$I$I$I,[195, 5, 141, 64]));
var gridLayout1=Clazz.new_($I$(17,1));
actionsPanel.setLayout$java_awt_LayoutManager(gridLayout1);
gridLayout1.setHgap$I(0);
gridLayout1.setRows$I(3);
gridLayout1.setVgap$I(2);
this.createFeatures.setEnabled$Z(false);
this.createFeatures.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 0, 10]));
this.createFeatures.setLabel$S($I$(7).getString$S("label.new_feature"));
this.createFeatures.addActionListener$java_awt_event_ActionListener(this);
this.caseSensitive.setLabel$S($I$(7).getString$S("label.match_case"));
this.caseSensitive.setBounds$java_awt_Rectangle(Clazz.new_($I$(14,1).c$$I$I$I$I,[30, 39, 126, 23]));
this.searchDescription.setLabel$S($I$(7).getString$S("label.include_description"));
this.searchDescription.setBounds$java_awt_Rectangle(Clazz.new_($I$(14,1).c$$I$I$I$I,[30, 59, 170, 23]));
actionsPanel.add$java_awt_Component$O(this.findNext, null);
actionsPanel.add$java_awt_Component$O(this.findAll, null);
actionsPanel.add$java_awt_Component$O(this.createFeatures, null);
this.add$java_awt_Component(this.caseSensitive);
this.add$java_awt_Component$O(this.textfield, null);
this.add$java_awt_Component$O(jLabel1, null);
this.add$java_awt_Component$O(actionsPanel, null);
this.add$java_awt_Component(this.searchDescription);
}, p$1);

Clazz.newMeth(C$, 'textfield_keyTyped$',  function () {
this.findNext.setEnabled$Z(true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:28 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
