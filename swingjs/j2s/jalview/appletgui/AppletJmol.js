(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Dimension','java.awt.Color','java.awt.Font','jalview.util.MessageManager','java.awt.Menu','java.awt.MenuItem','java.awt.CheckboxMenuItem','java.util.ArrayList','Error','jalview.appletgui.AppletJmolBinding','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI','jalview.io.DataSourceType','jalview.bin.JalviewLite','jalview.structure.StructureSelectionManager','java.awt.MenuBar','java.awt.BorderLayout',['jalview.appletgui.AppletJmol','.RenderPanel'],'java.awt.Panel','java.awt.event.WindowAdapter','jalview.io.FileParse','java.util.Vector','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','StringBuffer','jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.appletgui.UserDefinedColours','java.net.URL','java.awt.GridLayout']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppletJmol", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.appletgui.EmbmenuFrame', ['java.awt.event.KeyListener', 'java.awt.event.ActionListener', 'java.awt.event.ItemListener']);
C$.$classes$=[['RenderPanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fileMenu=Clazz.new_([$I$(4).getString$S("action.file")],$I$(5,1).c$$S);
this.viewMenu=Clazz.new_([$I$(4).getString$S("action.view")],$I$(5,1).c$$S);
this.coloursMenu=Clazz.new_([$I$(4).getString$S("action.colour")],$I$(5,1).c$$S);
this.chainMenu=Clazz.new_([$I$(4).getString$S("action.show_chain")],$I$(5,1).c$$S);
this.helpMenu=Clazz.new_([$I$(4).getString$S("action.help")],$I$(5,1).c$$S);
this.mappingMenuItem=Clazz.new_([$I$(4).getString$S("label.view_mapping")],$I$(6,1).c$$S);
this.seqColour=Clazz.new_([$I$(4).getString$S("action.by_sequence"), true],$I$(7,1).c$$S$Z);
this.jmolColour=Clazz.new_([$I$(4).getString$S("action.using_jmol"), false],$I$(7,1).c$$S$Z);
this.chain=Clazz.new_([$I$(4).getString$S("action.by_chain")],$I$(6,1).c$$S);
this.charge=Clazz.new_([$I$(4).getString$S("label.charge_cysteine")],$I$(6,1).c$$S);
this.zappo=Clazz.new_([$I$(4).getString$S("label.colourScheme_zappo")],$I$(6,1).c$$S);
this.taylor=Clazz.new_([$I$(4).getString$S("label.colourScheme_taylor")],$I$(6,1).c$$S);
this.hydro=Clazz.new_([$I$(4).getString$S("label.colourScheme_hydrophobic")],$I$(6,1).c$$S);
this.helix=Clazz.new_([$I$(4).getString$S("label.colourScheme_helixpropensity")],$I$(6,1).c$$S);
this.strand=Clazz.new_([$I$(4).getString$S("label.colourScheme_strandpropensity")],$I$(6,1).c$$S);
this.turn=Clazz.new_([$I$(4).getString$S("label.colourScheme_turnpropensity")],$I$(6,1).c$$S);
this.buried=Clazz.new_([$I$(4).getString$S("label.colourScheme_buriedindex")],$I$(6,1).c$$S);
this.purinepyrimidine=Clazz.new_([$I$(4).getString$S("label.colourScheme_purine/pyrimidine")],$I$(6,1).c$$S);
this.user=Clazz.new_([$I$(4).getString$S("label.user_defined_colours")],$I$(6,1).c$$S);
this.jmolHelp=Clazz.new_([$I$(4).getString$S("label.jmol_help")],$I$(6,1).c$$S);
this._aps=Clazz.new_($I$(8,1));
this.fr=null;
this.protocol=null;
this.allChainsSelected=false;
this.splitPane=null;
},1);

C$.$fields$=[['Z',['loadedInline','allChainsSelected'],'S',['fileLoadingError','protocol'],'O',['fileMenu','java.awt.Menu','+viewMenu','+coloursMenu','+chainMenu','+helpMenu','mappingMenuItem','java.awt.MenuItem','seqColour','java.awt.CheckboxMenuItem','+jmolColour','chain','java.awt.MenuItem','+charge','+zappo','+taylor','+hydro','+helix','+strand','+turn','+buried','+purinepyrimidine','+user','+jmolHelp','scriptWindow','java.awt.Panel','inputLine','java.awt.TextField','history','java.awt.TextArea','renderPanel','jalview.appletgui.AppletJmol.RenderPanel','ap','jalview.appletgui.AlignmentPanel','_aps','java.util.List','fr','jalview.appletgui.FeatureRenderer','jmb','jalview.appletgui.AppletJmolBinding','splitPane','java.awt.Panel']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA$Z$jalview_appletgui_AlignmentPanel$S',  function (pdbentries, boundseqs, boundchains, align, ap, protocol) {
Clazz.super_(C$, this);
throw Clazz.new_([$I$(4).getString$S("error.not_yet_implemented")],$I$(9,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType',  function (pdbentry, seq, chains, ap, protocol) {
Clazz.super_(C$, this);
this.ap=ap;
this.jmb=Clazz.new_([this, ap.getStructureSelectionManager$(), Clazz.array($I$(11), -1, [pdbentry]), Clazz.array($I$(12), -2, [seq]), protocol],$I$(10,1).c$$jalview_appletgui_AppletJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
this.jmb.setColourBySequence$Z(true);
if (pdbentry.getId$() == null  || pdbentry.getId$().length$() < 1 ) {
if (protocol === $I$(13).PASTE ) {
pdbentry.setId$S("PASTED PDB" + (chains == null  ? "_" : chains.toString()));
} else {
pdbentry.setId$S(pdbentry.getFile$());
}}if ($I$(14).debug) {
System.err.println$S("AppletJmol: PDB ID is '" + pdbentry.getId$() + "'" );
}var alreadyMapped=$I$(15).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(ap.av.applet).alreadyMappedToFile$S(pdbentry.getId$());
var reader=null;
if (alreadyMapped != null ) {
reader=$I$(15).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(ap.av.applet).setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seq, chains, pdbentry.getFile$(), protocol, null);
}var menuBar=Clazz.new_($I$(16,1));
menuBar.add$java_awt_Menu(this.fileMenu);
this.fileMenu.add$java_awt_MenuItem(this.mappingMenuItem);
menuBar.add$java_awt_Menu(this.viewMenu);
this.mappingMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.viewMenu.add$java_awt_MenuItem(this.chainMenu);
menuBar.add$java_awt_Menu(this.coloursMenu);
menuBar.add$java_awt_Menu(this.helpMenu);
this.charge.addActionListener$java_awt_event_ActionListener(this);
this.hydro.addActionListener$java_awt_event_ActionListener(this);
this.chain.addActionListener$java_awt_event_ActionListener(this);
this.seqColour.addItemListener$java_awt_event_ItemListener(this);
this.jmolColour.addItemListener$java_awt_event_ItemListener(this);
this.zappo.addActionListener$java_awt_event_ActionListener(this);
this.taylor.addActionListener$java_awt_event_ActionListener(this);
this.helix.addActionListener$java_awt_event_ActionListener(this);
this.strand.addActionListener$java_awt_event_ActionListener(this);
this.turn.addActionListener$java_awt_event_ActionListener(this);
this.buried.addActionListener$java_awt_event_ActionListener(this);
this.purinepyrimidine.addActionListener$java_awt_event_ActionListener(this);
this.user.addActionListener$java_awt_event_ActionListener(this);
this.jmolHelp.addActionListener$java_awt_event_ActionListener(this);
this.coloursMenu.add$java_awt_MenuItem(this.seqColour);
this.coloursMenu.add$java_awt_MenuItem(this.chain);
this.coloursMenu.add$java_awt_MenuItem(this.charge);
this.coloursMenu.add$java_awt_MenuItem(this.zappo);
this.coloursMenu.add$java_awt_MenuItem(this.taylor);
this.coloursMenu.add$java_awt_MenuItem(this.hydro);
this.coloursMenu.add$java_awt_MenuItem(this.helix);
this.coloursMenu.add$java_awt_MenuItem(this.strand);
this.coloursMenu.add$java_awt_MenuItem(this.turn);
this.coloursMenu.add$java_awt_MenuItem(this.buried);
this.coloursMenu.add$java_awt_MenuItem(this.purinepyrimidine);
this.coloursMenu.add$java_awt_MenuItem(this.user);
this.coloursMenu.add$java_awt_MenuItem(this.jmolColour);
this.helpMenu.add$java_awt_MenuItem(this.jmolHelp);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17,1)));
this.setMenuBar$java_awt_MenuBar(menuBar);
this.renderPanel=Clazz.new_($I$(18,1),[this, null]);
this.embedMenuIfNeeded$java_awt_Panel(this.renderPanel);
this.add$java_awt_Component$O(this.renderPanel, "Center");
this.scriptWindow=Clazz.new_($I$(19,1));
this.scriptWindow.setVisible$Z(false);
try {
this.jmb.allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S(this.renderPanel, true, ap.av.applet.getName$() + "_jmol_", ap.av.applet.getDocumentBase$(), ap.av.applet.getCodeBase$(), "-applet", this.scriptWindow, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't create a jmol viewer. Args to allocate viewer were:\nDocumentBase=" + ap.av.applet.getDocumentBase$() + "\nCodebase=" + ap.av.applet.getCodeBase$() );
e.printStackTrace$();
this.dispose$();
return;
} else {
throw e;
}
}
this.addWindowListener$java_awt_event_WindowListener(((P$.AppletJmol$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppletJmol$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (evt) {
this.b$['jalview.appletgui.AppletJmol'].closeViewer$.apply(this.b$['jalview.appletgui.AppletJmol'], []);
});
})()
), Clazz.new_($I$(20,1),[this, null],P$.AppletJmol$1)));
pdbentry.setProperty$S$O("protocol", protocol);
if (pdbentry.getFile$() != null ) {
if (protocol === $I$(13).PASTE ) {
this.loadInline$S(pdbentry.getFile$());
} else if (protocol === $I$(13).FILE  || protocol === $I$(13).URL  ) {
this.jmb.jmolViewer.openFile$S(pdbentry.getFile$());
} else {
try {
var freader=null;
if (reader != null ) {
if ($I$(14).debug) {
System.err.println$S("AppletJmol:Trying to reuse existing PDBfile IO parser.");
}freader=reader.getReader$();
}if (freader == null ) {
if ($I$(14).debug) {
System.err.println$S("AppletJmol:Creating new PDBfile IO parser.");
}var fp=Clazz.new_([pdbentry.getFile$(), protocol],$I$(21,1).c$$O$jalview_io_DataSourceType);
fp.mark$();
freader=fp.getReader$();
}if (freader == null ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(4).getString$S("exception.invalid_datasource_couldnt_obtain_reader")]);
}this.jmb.jmolViewer.openReader$S$S$O(pdbentry.getFile$(), pdbentry.getId$(), freader);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Couldn't access pdbentry id=" + pdbentry.getId$() + " and file=" + pdbentry.getFile$() + " using protocol=" + protocol );
e.printStackTrace$();
} else {
throw e;
}
}
}}$I$(14,"addFrame$java_awt_Frame$S$I$I",[this, this.jmb.getViewerTitle$(), 400, 400]);
}, 1);

Clazz.newMeth(C$, 'loadInline$S',  function (string) {
this.loadedInline=true;
this.jmb.loadInline$S(string);
});

Clazz.newMeth(C$, 'setChainMenuItems$java_util_List',  function (chains) {
this.chainMenu.removeAll$();
var menuItem=Clazz.new_([$I$(4).getString$S("label.all")],$I$(6,1).c$$S);
menuItem.addActionListener$java_awt_event_ActionListener(this);
this.chainMenu.add$java_awt_MenuItem(menuItem);
var menuItemCB;
for (var ch, $ch = chains.iterator$(); $ch.hasNext$()&&((ch=($ch.next$())),1);) {
menuItemCB=Clazz.new_($I$(7,1).c$$S$Z,[ch, true]);
menuItemCB.addItemListener$java_awt_event_ItemListener(this);
this.chainMenu.add$java_awt_MenuItem(menuItemCB);
}
});

Clazz.newMeth(C$, 'centerViewer$',  function () {
var toshow=Clazz.new_($I$(22,1));
for (var i=0; i < this.chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.chainMenu.getItem$I(i), "java.awt.CheckboxMenuItem")) {
var item=this.chainMenu.getItem$I(i);
if (item.getState$()) {
toshow.addElement$O(item.getLabel$());
}}}
this.jmb.showChains$java_util_List(toshow);
});

Clazz.newMeth(C$, 'closeViewer$',  function () {
this.jmb.closeViewer$Z(true);
this.jmb=null;
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (evt.getSource$() === this.mappingMenuItem ) {
var cap=Clazz.new_($I$(23,1).c$$Z$jalview_appletgui_AlignFrame,[false, null]);
var frame=Clazz.new_($I$(24,1));
frame.add$java_awt_Component(cap);
var sb=Clazz.new_($I$(25,1));
try {
cap.setText$S(this.jmb.printMappings$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"OutOfMemoryError")){
frame.dispose$();
System.err.println$S("Out of memory when trying to create dialog box with sequence-structure mapping.");
return;
} else {
throw ex;
}
}
$I$(14,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(4).getString$S("label.pdb_sequence_mapping"), 550, 600]);
} else if (evt.getSource$() === this.charge ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.charge]);
this.jmb.colourByCharge$();
} else if (evt.getSource$() === this.chain ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.chain]);
this.jmb.colourByChain$();
} else if (evt.getSource$() === this.zappo ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.zappo]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(26,1)));
} else if (evt.getSource$() === this.taylor ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.taylor]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(27,1)));
} else if (evt.getSource$() === this.hydro ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.hydro]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(28,1)));
} else if (evt.getSource$() === this.helix ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.helix]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(29,1)));
} else if (evt.getSource$() === this.strand ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.strand]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(30,1)));
} else if (evt.getSource$() === this.turn ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.turn]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(31,1)));
} else if (evt.getSource$() === this.buried ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.buried]);
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(32,1)));
} else if (evt.getSource$() === this.purinepyrimidine ) {
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_($I$(33,1)));
} else if (evt.getSource$() === this.user ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.user]);
Clazz.new_($I$(34,1).c$$jalview_appletgui_AppletJmol,[this]);
} else if (evt.getSource$() === this.jmolHelp ) {
try {
this.ap.av.applet.getAppletContext$().showDocument$java_net_URL$S(Clazz.new_($I$(35,1).c$$S,["http://jmol.sourceforge.net/docs/JmolUserGuide/"]), "jmolHelp");
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
} else {
throw ex;
}
}
} else {
this.allChainsSelected=true;
for (var i=0; i < this.chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.chainMenu.getItem$I(i), "java.awt.CheckboxMenuItem")) {
(this.chainMenu.getItem$I(i)).setState$Z(true);
}}
this.centerViewer$();
this.allChainsSelected=false;
}});

Clazz.newMeth(C$, 'setEnabled$java_awt_MenuItem',  function (itm) {
this.jmolColour.setState$Z(itm === this.jmolColour );
this.seqColour.setState$Z(itm === this.seqColour );
this.jmb.setColourBySequence$Z(itm === this.seqColour );
}, p$1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getSource$() === this.jmolColour ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.jmolColour]);
this.jmb.setColourBySequence$Z(false);
} else if (evt.getSource$() === this.seqColour ) {
p$1.setEnabled$java_awt_MenuItem.apply(this, [this.seqColour]);
this.jmb.colourBySequence$jalview_api_AlignmentViewPanel(this.ap);
} else if (!this.allChainsSelected) {
this.centerViewer$();
}});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (evt) {
if (evt.getKeyCode$() == 10 && this.scriptWindow.isVisible$() ) {
this.jmb.eval$S(this.inputLine.getText$());
this.addToHistory$S("$ " + this.inputLine.getText$());
this.inputLine.setText$S("");
}});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'updateColours$O',  function (source) {
var panel=source;
this.jmb.colourBySequence$jalview_api_AlignmentViewPanel(panel);
});

Clazz.newMeth(C$, 'updateTitleAndMenus$',  function () {
if (this.jmb.hasFileLoadingError$()) {
this.repaint$();
return;
}this.setChainMenuItems$java_util_List(this.jmb.getChainNames$());
this.jmb.colourBySequence$jalview_api_AlignmentViewPanel(this.ap);
this.setTitle$S(this.jmb.getViewerTitle$());
});

Clazz.newMeth(C$, 'showUrl$S',  function (url) {
try {
this.ap.av.applet.getAppletContext$().showDocument$java_net_URL$S(Clazz.new_($I$(35,1).c$$S,[url]), "jmolOutput");
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'showConsole$Z',  function (showConsole) {
if (showConsole) {
this.remove$java_awt_Component(this.renderPanel);
this.splitPane=Clazz.new_($I$(19,1));
this.splitPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(36,1).c$$I$I,[2, 1]));
this.splitPane.add$java_awt_Component(this.renderPanel);
this.splitPane.add$java_awt_Component(this.scriptWindow);
this.scriptWindow.setVisible$Z(true);
this.add$java_awt_Component$O(this.splitPane, "Center");
this.splitPane.setVisible$Z(true);
this.splitPane.validate$();
} else {
this.scriptWindow.setVisible$Z(false);
this.remove$java_awt_Component(this.splitPane);
this.add$java_awt_Component$O(this.renderPanel, "Center");
this.splitPane=null;
}this.validate$();
});

Clazz.newMeth(C$, 'functionXY$S$I$I',  function (functionName, x, y) {
return null;
});

Clazz.newMeth(C$, 'colourByJalviewColourScheme$jalview_schemes_UserColourScheme',  function (ucs) {
this.jmb.colourByJalviewColourScheme$jalview_schemes_ColourSchemeI(ucs);
});

Clazz.newMeth(C$, 'getAlignmentPanelFor$jalview_datamodel_AlignmentI',  function (alignment) {
for (var i=0; i < this._aps.size$(); i++) {
if (this._aps.get$I(i).av.getAlignment$() === alignment ) {
return (this._aps.get$I(i));
}}
return this.ap;
});

Clazz.newMeth(C$, 'addToHistory$S',  function (text) {
if (this.history != null ) {
this.history.append$S("\n" + text);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppletJmol, "RenderPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Panel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['currentSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
this.currentSize=this.getSize$();
if (this.b$['jalview.appletgui.AppletJmol'].jmb.jmolViewer == null ) {
g.setColor$java_awt_Color($I$(2).black);
g.fillRect$I$I$I$I(0, 0, this.currentSize.width, this.currentSize.height);
g.setColor$java_awt_Color($I$(2).white);
g.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(4).getString$S("label.retrieving_pdb_data"), 20, (this.currentSize.height/2|0));
} else {
this.b$['jalview.appletgui.AppletJmol'].jmb.jmolViewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
