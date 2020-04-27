(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.ws.SequenceFetcher','javax.swing.JInternalFrame','jalview.gui.Desktop','jalview.util.Platform','jalview.util.MessageManager','java.awt.BorderLayout','javax.swing.JComboBox','jalview.gui.JvSwingUtils','java.util.Arrays','jalview.fts.service.pdb.PDBFTSPanel','jalview.fts.service.uniprot.UniprotFTSPanel','javax.swing.JLabel','java.awt.Font','javax.swing.JCheckBox','javax.swing.JButton','javax.swing.JTextArea','java.awt.event.KeyAdapter','javax.swing.JPanel','javax.swing.JScrollPane','StringBuilder','java.util.HashSet','Thread','java.util.ArrayList','StringBuffer','jalview.gui.OOMWarning','jalview.bin.Cache','jalview.util.DBRefUtils','jalview.gui.AlignFrame','javax.swing.SwingUtilities','jalview.gui.JvOptionPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceFetcher", null, 'javax.swing.JPanel', 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._isConstructing=false;
},1);

C$.$fields$=[['Z',['_isConstructing'],'O',['exampleAccession','javax.swing.JLabel','database','javax.swing.JComboBox','replacePunctuation','javax.swing.JCheckBox','okBtn','javax.swing.JButton','+exampleBtn','+closeBtn','+backBtn','textArea','javax.swing.JTextArea','frame','javax.swing.JInternalFrame','guiWindow','jalview.gui.IProgressIndicator','alignFrame','jalview.gui.AlignFrame','parentSearchPanel','jalview.fts.core.GFTSPanel','progressIndicator','jalview.gui.IProgressIndicator']]
,['O',['sfetch','jalview.ws.SequenceFetcher']]]

Clazz.newMeth(C$, 'getSequenceFetcherSingleton$', function () {
if (C$.sfetch == null ) {
C$.sfetch=Clazz.new_($I$(1,1));
}return C$.sfetch;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_IProgressIndicator', function (guiIndic) {
C$.c$$jalview_gui_IProgressIndicator$S$S.apply(this, [guiIndic, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_IProgressIndicator$S$S', function (guiIndic, selectedDb, queryString) {
Clazz.super_(C$, this);
this.progressIndicator=guiIndic;
C$.getSequenceFetcherSingleton$();
this.guiWindow=this.progressIndicator;
if (Clazz.instanceOf(this.progressIndicator, "jalview.gui.AlignFrame")) {
this.alignFrame=this.progressIndicator;
}p$1.jbInit$S.apply(this, [selectedDb]);
this.textArea.setText$S(queryString);
this.frame=Clazz.new_($I$(2,1));
this.frame.setContentPane$java_awt_Container(this);
$I$(3,"addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I",[this.frame, p$1.getFrameTitle.apply(this, []), true, 400, $I$(4).isAMacAndNotJS$() ? 240 : 180]);
}, 1);

Clazz.newMeth(C$, 'getFrameTitle', function () {
return ((this.alignFrame == null ) ? $I$(5).getString$S("label.new_sequence_fetcher") : $I$(5).getString$S("label.additional_sequence_fetcher"));
}, p$1);

Clazz.newMeth(C$, 'jbInit$S', function (selectedDb) {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this.database=Clazz.new_($I$(7,1));
this.database.setFont$java_awt_Font($I$(8).getLabelFont$());
this.database.setPrototypeDisplayValue$O("ENSEMBLGENOMES   ");
var sources=Clazz.new_($I$(1,1)).getSupportedDb$();
$I$(9).sort$OA$java_util_Comparator(sources, String.CASE_INSENSITIVE_ORDER);
this.database.addItem$O($I$(5).getString$S("action.select_ddbb"));
for (var source, $source = 0, $$source = sources; $source<$$source.length&&((source=($$source[$source])),1);$source++) {
this.database.addItem$O(source);
}
this.database.setSelectedItem$O(selectedDb);
if (this.database.getSelectedIndex$() == -1) {
this.database.setSelectedIndex$I(0);
}this.database.setMaximumRowCount$I(this.database.getItemCount$());
this.database.addActionListener$java_awt_event_ActionListener(((P$.SequenceFetcher$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var currentSelection=this.b$['jalview.gui.SequenceFetcher'].database.getSelectedItem$();
this.b$['jalview.gui.SequenceFetcher'].updateExampleQuery$S.apply(this.b$['jalview.gui.SequenceFetcher'], [currentSelection]);
if ("pdb".equalsIgnoreCase$S(currentSelection)) {
this.b$['jalview.gui.SequenceFetcher'].frame.dispose$();
Clazz.new_($I$(10,1).c$$jalview_gui_SequenceFetcher,[this.b$['jalview.gui.SequenceFetcher']]);
} else if ("uniprot".equalsIgnoreCase$S(currentSelection)) {
this.b$['jalview.gui.SequenceFetcher'].frame.dispose$();
Clazz.new_($I$(11,1).c$$jalview_gui_SequenceFetcher,[this.b$['jalview.gui.SequenceFetcher']]);
} else {
this.b$['jalview.gui.SequenceFetcher'].otherSourceAction$.apply(this.b$['jalview.gui.SequenceFetcher'], []);
}});
})()
), Clazz.new_(P$.SequenceFetcher$1.$init$,[this, null])));
this.exampleAccession=Clazz.new_($I$(12,1).c$$S,[""]);
this.exampleAccession.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 1, 11]));
var jLabel1=Clazz.new_([$I$(5).getString$S("label.separate_multiple_accession_ids")],$I$(12,1).c$$S);
jLabel1.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 2, 11]));
jLabel1.setHorizontalAlignment$I(2);
this.replacePunctuation=Clazz.new_([$I$(5).getString$S("label.replace_commas_semicolons")],$I$(14,1).c$$S);
this.replacePunctuation.setHorizontalAlignment$I(2);
this.replacePunctuation.setFont$java_awt_Font(Clazz.new_($I$(13,1).c$$S$I$I,["Verdana", 2, 11]));
this.okBtn=Clazz.new_([$I$(5).getString$S("action.ok")],$I$(15,1).c$$S);
this.okBtn.addActionListener$java_awt_event_ActionListener(((P$.SequenceFetcher$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SequenceFetcher'].ok_actionPerformed$.apply(this.b$['jalview.gui.SequenceFetcher'], []);
});
})()
), Clazz.new_(P$.SequenceFetcher$2.$init$,[this, null])));
var clear=Clazz.new_([$I$(5).getString$S("action.clear")],$I$(15,1).c$$S);
clear.addActionListener$java_awt_event_ActionListener(((P$.SequenceFetcher$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SequenceFetcher'].clear_actionPerformed$.apply(this.b$['jalview.gui.SequenceFetcher'], []);
});
})()
), Clazz.new_(P$.SequenceFetcher$3.$init$,[this, null])));
this.exampleBtn=Clazz.new_([$I$(5).getString$S("label.example")],$I$(15,1).c$$S);
this.exampleBtn.addActionListener$java_awt_event_ActionListener(((P$.SequenceFetcher$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SequenceFetcher'].example_actionPerformed$.apply(this.b$['jalview.gui.SequenceFetcher'], []);
});
})()
), Clazz.new_(P$.SequenceFetcher$4.$init$,[this, null])));
this.closeBtn=Clazz.new_([$I$(5).getString$S("action.cancel")],$I$(15,1).c$$S);
this.closeBtn.addActionListener$java_awt_event_ActionListener(((P$.SequenceFetcher$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SequenceFetcher'].close_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.SequenceFetcher'], [e]);
});
})()
), Clazz.new_(P$.SequenceFetcher$5.$init$,[this, null])));
this.backBtn=Clazz.new_([$I$(5).getString$S("action.back")],$I$(15,1).c$$S);
this.backBtn.addActionListener$java_awt_event_ActionListener(((P$.SequenceFetcher$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.SequenceFetcher'].parentSearchPanel.btn_back_ActionPerformed$();
});
})()
), Clazz.new_(P$.SequenceFetcher$6.$init$,[this, null])));
this.backBtn.setVisible$Z(false);
this.textArea=Clazz.new_($I$(16,1));
this.textArea.setFont$java_awt_Font($I$(8).getLabelFont$());
this.textArea.setLineWrap$Z(true);
this.textArea.addKeyListener$java_awt_event_KeyListener(((P$.SequenceFetcher$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
if (e.getKeyCode$() == 10) {
this.b$['jalview.gui.SequenceFetcher'].ok_actionPerformed$.apply(this.b$['jalview.gui.SequenceFetcher'], []);
}});
})()
), Clazz.new_($I$(17,1),[this, null],P$.SequenceFetcher$7)));
var actionPanel=Clazz.new_($I$(18,1));
actionPanel.add$java_awt_Component(this.backBtn);
actionPanel.add$java_awt_Component(this.exampleBtn);
actionPanel.add$java_awt_Component(clear);
actionPanel.add$java_awt_Component(this.okBtn);
actionPanel.add$java_awt_Component(this.closeBtn);
var databasePanel=Clazz.new_($I$(18,1));
databasePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
databasePanel.add$java_awt_Component$O(this.database, "North");
databasePanel.add$java_awt_Component$O(this.exampleAccession, "Center");
var jPanel2a=Clazz.new_([Clazz.new_($I$(6,1))],$I$(18,1).c$$java_awt_LayoutManager);
jPanel2a.add$java_awt_Component$O(jLabel1, "North");
jPanel2a.add$java_awt_Component$O(this.replacePunctuation, "South");
databasePanel.add$java_awt_Component$O(jPanel2a, "South");
var idsPanel=Clazz.new_($I$(18,1));
idsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1).c$$I$I,[0, 5]));
var jScrollPane1=Clazz.new_($I$(19,1));
jScrollPane1.getViewport$().add$java_awt_Component(this.textArea);
idsPanel.add$java_awt_Component$O(jScrollPane1, "Center");
this.add$java_awt_Component$O(actionPanel, "South");
this.add$java_awt_Component$O(idsPanel, "Center");
this.add$java_awt_Component$O(databasePanel, "North");
}, p$1);

Clazz.newMeth(C$, 'getExampleQueries$S', function (db) {
var sb=Clazz.new_($I$(20,1));
var hs=Clazz.new_($I$(21,1));
for (var dbs, $dbs = C$.sfetch.getSourceProxy$S(db).iterator$(); $dbs.hasNext$()&&((dbs=($dbs.next$())),1);) {
var tq=dbs.getTestQuery$();
if (hs.add$O(tq)) {
if (sb.length$() > 0) {
sb.append$S(";");
}sb.append$S(tq);
}}
return sb.toString();
});

Clazz.newMeth(C$, 'otherSourceAction$', function () {
try {
var eq=this.exampleAccession.getText$();
var enablePunct=!(eq != null  && eq.indexOf$S(",") > -1 );
this.replacePunctuation.setEnabled$Z(enablePunct);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.exampleAccession.setText$S("");
this.replacePunctuation.setEnabled$Z(true);
} else {
throw ex;
}
}
this.repaint$();
});

Clazz.newMeth(C$, 'updateExampleQuery$S', function (selectedDatabase) {
var eq=this.getExampleQueries$S(selectedDatabase);
this.exampleAccession.setText$S($I$(5,"formatMessage$S$SA",["label.example_query_param", Clazz.array(String, -1, [eq])]));
return eq;
});

Clazz.newMeth(C$, 'example_actionPerformed$', function () {
var eq=this.getExampleQueries$S(this.database.getSelectedItem$());
this.textArea.setText$S(eq);
this.repaint$();
});

Clazz.newMeth(C$, 'clear_actionPerformed$', function () {
this.textArea.setText$S("");
this.repaint$();
});

Clazz.newMeth(C$, 'close_actionPerformed$java_awt_event_ActionEvent', function (e) {
try {
this.frame.setClosed$Z(true);
if (this.parentSearchPanel != null ) {
this.parentSearchPanel.btn_cancel_ActionPerformed$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'ok_actionPerformed$', function () {
var t0=this.textArea.getText$();
var text=t0.trim$();
if (this.replacePunctuation.isEnabled$() && this.replacePunctuation.isSelected$() ) {
text=text.replace$CharSequence$CharSequence(",", ";");
}text=text.replaceAll$S$S("(\\s|[; ])+", ";");
if (!t0.equals$O(text)) {
this.textArea.setText$S(text);
}if (text.isEmpty$()) {
this.showErrorMessage$S("Please enter a (semi-colon separated list of) database id(s)");
p$1.resetDialog.apply(this, []);
return;
}if (this.database.getSelectedIndex$() == 0) {
this.showErrorMessage$S("Please choose a database");
p$1.resetDialog.apply(this, []);
return;
}this.exampleBtn.setEnabled$Z(false);
this.textArea.setEnabled$Z(false);
this.okBtn.setEnabled$Z(false);
this.closeBtn.setEnabled$Z(false);
this.backBtn.setEnabled$Z(false);
var worker=Clazz.new_($I$(22,1).c$$Runnable,[this]);
worker.start$();
});

Clazz.newMeth(C$, 'resetDialog', function () {
this.exampleBtn.setEnabled$Z(true);
this.textArea.setEnabled$Z(true);
this.okBtn.setEnabled$Z(true);
this.closeBtn.setEnabled$Z(true);
this.backBtn.setEnabled$Z(this.parentSearchPanel != null );
}, p$1);

Clazz.newMeth(C$, 'run$', function () {
var addToLast=false;
var aresultq=Clazz.new_($I$(23,1));
var presultTitle=Clazz.new_($I$(23,1));
var presult=Clazz.new_($I$(23,1));
var aresult=Clazz.new_($I$(23,1));
var sources=C$.sfetch.getSourceProxy$S(this.database.getSelectedItem$());
var proxies=sources.iterator$();
var qries=this.textArea.getText$().trim$().split$S(";");
var nextFetch=$I$(9).asList$OA(qries);
var en=$I$(9,"asList$OA",[Clazz.array(String, [0])]).iterator$();
var nqueries=qries.length;
var preferredFeatureColours=null;
while (proxies.hasNext$() && (en.hasNext$() || nextFetch.size$() > 0 ) ){
if (!en.hasNext$() && nextFetch.size$() > 0 ) {
en=nextFetch.iterator$();
nqueries=nextFetch.size$();
qries=nextFetch.toArray$OA(Clazz.array(String, [nqueries]));
nextFetch=Clazz.new_($I$(23,1));
}var proxy=proxies.next$();
try {
this.guiWindow.setProgressBar$S$J($I$(5,"formatMessage$S$SA",["status.fetching_sequence_queries_from", Clazz.array(String, -1, [Integer.valueOf$I(nqueries).toString(), proxy.getDbName$()])]), $I$(22).currentThread$().hashCode$());
if (proxy.getMaximumQueryCount$() == 1) {
while (en.hasNext$()){
var acc=en.next$();
if (!this.fetchSingleAccession$jalview_ws_seqfetcher_DbSourceProxy$S$java_util_List$java_util_List(proxy, acc, aresultq, aresult)) {
nextFetch.add$O(acc);
}}
} else {
this.fetchMultipleAccessions$jalview_ws_seqfetcher_DbSourceProxy$java_util_Iterator$java_util_List$java_util_List$java_util_List(proxy, en, aresultq, aresult, nextFetch);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.showErrorMessage$S("Error retrieving " + this.textArea.getText$() + " from " + this.database.getSelectedItem$() );
System.err.println$S("Retrieval failed for source ='" + this.database.getSelectedItem$() + "' and query\n'" + this.textArea.getText$() + "'\n" );
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var e = e$$;
{
this.showErrorMessage$S("Out of Memory when retrieving " + this.textArea.getText$() + " from " + this.database.getSelectedItem$() + "\nPlease see the Jalview FAQ for instructions for increasing the memory available to Jalview.\n" );
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
this.showErrorMessage$S("Serious Error retrieving " + this.textArea.getText$() + " from " + this.database.getSelectedItem$() );
e.printStackTrace$();
}
} else {
throw e$$;
}
}
if (aresult != null  && aresult.size$() > 0 ) {
var proxyColourScheme=proxy.getFeatureColourScheme$();
if (proxyColourScheme != null ) {
preferredFeatureColours=proxyColourScheme;
}var ar=null;
if (proxy.isAlignmentSource$()) {
addToLast=false;
while (aresult.size$() > 0){
presult.add$O(aresult.remove$I(0));
presultTitle.add$O(aresultq.remove$I(0) + " " + this.getDefaultRetrievalTitle$() );
}
} else {
var titl=null;
if (addToLast && presult.size$() > 0 ) {
ar=presult.remove$I(presult.size$() - 1);
titl=presultTitle.remove$I(presultTitle.size$() - 1);
}while (aresult.size$() > 0){
if (ar == null ) {
ar=aresult.remove$I(0);
} else {
ar.append$jalview_datamodel_AlignmentI(aresult.remove$I(0));
}}
addToLast=true;
presult.add$O(ar);
presultTitle.add$O(titl);
}}this.guiWindow.setProgressBar$S$J($I$(5).getString$S("status.finshed_querying"), $I$(22).currentThread$().hashCode$());
}
this.guiWindow.setProgressBar$S$J((presult.size$() > 0) ? $I$(5).getString$S("status.parsing_results") : $I$(5).getString$S("status.processing"), $I$(22).currentThread$().hashCode$());
while (presult.size$() > 0){
this.parseResult$jalview_datamodel_AlignmentI$S$jalview_io_FileFormatI$jalview_api_FeatureSettingsModelI(presult.remove$I(0), presultTitle.remove$I(0), null, preferredFeatureColours);
}
this.guiWindow.setProgressBar$S$J(null, $I$(22).currentThread$().hashCode$());
if (nextFetch.size$() > 0) {
var sb=Clazz.new_($I$(24,1));
sb.append$S("Didn't retrieve the following " + (nextFetch.size$() == 1 ? "query" : nextFetch.size$() + " queries") + ": \n" );
var l=sb.length$();
var lr=0;
for (var s, $s = nextFetch.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
if (l != sb.length$()) {
sb.append$S("; ");
}if (lr - sb.length$() > 40) {
sb.append$S("\n");
}sb.append$S(s);
}
this.showErrorMessage$S(sb.toString());
}p$1.resetDialog.apply(this, []);
});

Clazz.newMeth(C$, 'fetchMultipleAccessions$jalview_ws_seqfetcher_DbSourceProxy$java_util_Iterator$java_util_List$java_util_List$java_util_List', function (proxy, accessions, aresultq, aresult, nextFetch) {
var multiacc=Clazz.new_($I$(20,1));
var tosend=Clazz.new_($I$(23,1));
while (accessions.hasNext$()){
var nel=accessions.next$();
tosend.add$O(nel);
multiacc.append$S(nel);
if (accessions.hasNext$()) {
multiacc.append$S(proxy.getAccessionSeparator$());
}}
try {
var query=multiacc.toString();
var rslt=proxy.getSequenceRecords$S(query);
if (rslt == null  || rslt.getHeight$() == 0 ) {
nextFetch.addAll$java_util_Collection(tosend);
} else {
aresultq.add$O(query);
aresult.add$O(rslt);
if (tosend.size$() > 1) {
this.checkResultForQueries$jalview_datamodel_AlignmentI$java_util_List$java_util_List$jalview_ws_seqfetcher_DbSourceProxy(rslt, tosend, nextFetch, proxy);
}}} catch (oome) {
if (Clazz.exceptionOf(oome,"OutOfMemoryError")){
Clazz.new_(["fetching " + multiacc + " from " + this.database.getSelectedItem$() , oome, this],$I$(25,1).c$$S$OutOfMemoryError$java_awt_Component);
} else {
throw oome;
}
}
});

Clazz.newMeth(C$, 'fetchSingleAccession$jalview_ws_seqfetcher_DbSourceProxy$S$java_util_List$java_util_List', function (proxy, accession, aresultq, aresult) {
var success=false;
try {
if (aresult != null ) {
try {
$I$(22).sleep$J(5);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}var indres=null;
try {
indres=proxy.getSequenceRecords$S(accession);
} catch (oome) {
if (Clazz.exceptionOf(oome,"OutOfMemoryError")){
Clazz.new_(["fetching " + accession + " from " + proxy.getDbName$() , oome, this],$I$(25,1).c$$S$OutOfMemoryError$java_awt_Component);
} else {
throw oome;
}
}
if (indres != null ) {
aresultq.add$O(accession);
aresult.add$O(indres);
success=true;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(26).log.info$O$Throwable("Error retrieving " + accession + " from " + proxy.getDbName$() , e);
} else {
throw e;
}
}
return success;
});

Clazz.newMeth(C$, 'checkResultForQueries$jalview_datamodel_AlignmentI$java_util_List$java_util_List$jalview_ws_seqfetcher_DbSourceProxy', function (rslt, queries, nextFetch, proxy) {
var rs=rslt.getSequencesArray$();
for (var q, $q = queries.iterator$(); $q.hasNext$()&&((q=($q.next$())),1);) {
var accId=proxy.getAccessionIdFromQuery$S(q);
var rfound=false;
for (var r=0, nr=rs.length; r < nr; r++) {
if (rs[r] != null ) {
var found=$I$(27,"searchRefs$java_util_List$S",[rs[r].getDBRefs$(), accId]);
if (!found.isEmpty$()) {
rfound=true;
break;
}}}
if (!rfound) {
nextFetch.add$O(q);
}}
});

Clazz.newMeth(C$, 'getDefaultRetrievalTitle$', function () {
return "Retrieved from " + this.database.getSelectedItem$();
});

Clazz.newMeth(C$, 'parseResult$jalview_datamodel_AlignmentI$S$jalview_io_FileFormatI$jalview_api_FeatureSettingsModelI', function (al, title, currentFileFormat, preferredFeatureColours) {
if (al != null  && al.getHeight$() > 0 ) {
if (title == null ) {
title=this.getDefaultRetrievalTitle$();
}if (this.alignFrame == null ) {
var af=Clazz.new_($I$(28,1).c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
if (currentFileFormat != null ) {
af.currentFileFormat=currentFileFormat;
}var alsqs=al.getSequences$();
{
for (var sq, $sq = alsqs.iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (sq.getFeatures$().hasFeatures$()) {
af.setShowSeqFeatures$Z(true);
break;
}}
}if (preferredFeatureColours != null ) {
af.getViewport$().applyFeaturesStyle$jalview_api_FeatureSettingsModelI(preferredFeatureColours);
}if ($I$(26).getDefault$S$Z("HIDE_INTRONS", true)) {
af.hideFeatureColumns$S$Z("exon", false);
}$I$(3).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, title, 700, 500);
af.setStatus$S($I$(5).getString$S("label.successfully_pasted_alignment_file"));
try {
af.setMaximum$Z($I$(26).getDefault$S$Z("SHOW_FULLSCREEN", false));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
} else {
this.alignFrame.viewport.addAlignment$jalview_datamodel_AlignmentI$S(al, title);
}}return al;
});

Clazz.newMeth(C$, 'showErrorMessage$S', function (error) {
p$1.resetDialog.apply(this, []);
$I$(29,"invokeLater$Runnable",[((P$.SequenceFetcher$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequenceFetcher$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
$I$(30,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(3).desktop, this.$finals$.error, $I$(5).getString$S("label.error_retrieving_data"), 2]);
});
})()
), Clazz.new_(P$.SequenceFetcher$8.$init$,[this, {error:error}]))]);
});

Clazz.newMeth(C$, 'getProgressIndicator$', function () {
return this.progressIndicator;
});

Clazz.newMeth(C$, 'setProgressIndicator$jalview_gui_IProgressIndicator', function (progressIndicator) {
this.progressIndicator=progressIndicator;
});

Clazz.newMeth(C$, 'hidePanel$', function () {
this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'setQuery$S', function (ids) {
this.textArea.setText$S(ids);
});

Clazz.newMeth(C$, 'embedIn$jalview_fts_core_GFTSPanel', function (parentPanel) {
this.database.setVisible$Z(false);
this.backBtn.setVisible$Z(true);
this.parentSearchPanel=parentPanel;
});

C$.$static$=function(){C$.$static$=0;
C$.sfetch=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
