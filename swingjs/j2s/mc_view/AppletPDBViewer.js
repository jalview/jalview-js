(function(){var P$=Clazz.newPackage("mc_view"),p$1={},I$=[[0,'java.awt.MenuBar','java.awt.Menu','java.awt.MenuItem','java.awt.CheckboxGroup','java.awt.CheckboxMenuItem','mc_view.AppletPDBCanvas','StringBuffer','jalview.bin.JalviewLite','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.util.MessageManager','jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.BuriedColourScheme','jalview.appletgui.UserDefinedColours']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppletPDBViewer", null, 'jalview.appletgui.EmbmenuFrame', ['java.awt.event.ActionListener', 'java.awt.event.ItemListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jMenuBar1=Clazz.new_($I$(1,1));
this.fileMenu=Clazz.new_($I$(2,1));
this.coloursMenu=Clazz.new_($I$(2,1));
this.mapping=Clazz.new_($I$(3,1));
this.bg=Clazz.new_($I$(4,1));
this.wire=Clazz.new_($I$(5,1));
this.depth=Clazz.new_($I$(5,1));
this.zbuffer=Clazz.new_($I$(5,1));
this.charge=Clazz.new_($I$(3,1));
this.hydro=Clazz.new_($I$(3,1));
this.chain=Clazz.new_($I$(3,1));
this.seqButton=Clazz.new_($I$(3,1));
this.allchains=Clazz.new_($I$(5,1));
this.viewMenu=Clazz.new_($I$(2,1));
this.turn=Clazz.new_($I$(3,1));
this.strand=Clazz.new_($I$(3,1));
this.helix=Clazz.new_($I$(3,1));
this.taylor=Clazz.new_($I$(3,1));
this.zappo=Clazz.new_($I$(3,1));
this.buried=Clazz.new_($I$(3,1));
this.user=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['pdbcanvas','mc_view.AppletPDBCanvas','jMenuBar1','java.awt.MenuBar','fileMenu','java.awt.Menu','+coloursMenu','mapping','java.awt.MenuItem','bg','java.awt.CheckboxGroup','wire','java.awt.CheckboxMenuItem','+depth','+zbuffer','charge','java.awt.MenuItem','+hydro','+chain','+seqButton','allchains','java.awt.CheckboxMenuItem','viewMenu','java.awt.Menu','turn','java.awt.MenuItem','+strand','+helix','+taylor','+zappo','+buried','+user']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType', function (pdbentry, seq, chains, ap, protocol) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
this.pdbcanvas=Clazz.new_($I$(6,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType,[pdbentry, seq, chains, ap, protocol]);
this.embedMenuIfNeeded$java_awt_Panel(this.pdbcanvas);
this.add$java_awt_Component$O(this.pdbcanvas, "Center");
var title=Clazz.new_([seq[0].getName$() + ":" + this.pdbcanvas.pdbentry.getFile$() ],$I$(7,1).c$$S);
$I$(8,"addFrame$java_awt_Frame$S$I$I",[this, title.toString(), 400, 400]);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
if (evt.getSource$() === this.mapping ) {
var cap=Clazz.new_($I$(9,1).c$$Z$jalview_appletgui_AlignFrame,[false, null]);
var frame=Clazz.new_($I$(10,1));
frame.add$java_awt_Component(cap);
$I$(8,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(11).getString$S("label.pdb_sequence_mapping"), 500, 600]);
cap.setText$S(this.pdbcanvas.mappingDetails.toString());
} else if (evt.getSource$() === this.charge ) {
this.pdbcanvas.bysequence=false;
this.pdbcanvas.pdb.setChargeColours$();
} else if (evt.getSource$() === this.chain ) {
this.pdbcanvas.bysequence=false;
this.pdbcanvas.pdb.setChainColours$();
} else if (evt.getSource$() === this.seqButton ) {
this.pdbcanvas.bysequence=true;
this.pdbcanvas.colourBySequence$();
} else if (evt.getSource$() === this.zappo ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(12,1)));
} else if (evt.getSource$() === this.taylor ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(13,1)));
} else if (evt.getSource$() === this.hydro ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(14,1)));
} else if (evt.getSource$() === this.helix ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(15,1)));
} else if (evt.getSource$() === this.strand ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(16,1)));
} else if (evt.getSource$() === this.turn ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(17,1)));
} else if (evt.getSource$() === this.buried ) {
this.pdbcanvas.setColours$jalview_schemes_ColourSchemeI(Clazz.new_($I$(18,1)));
} else if (evt.getSource$() === this.user ) {
this.pdbcanvas.bysequence=false;
Clazz.new_($I$(19,1).c$$mc_view_AppletPDBCanvas,[this.pdbcanvas]);
}this.pdbcanvas.redrawneeded=true;
this.pdbcanvas.repaint$();
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (evt) {
if (evt.getSource$() === this.allchains ) {
this.pdbcanvas.setAllchainsVisible$Z(this.allchains.getState$());
} else if (evt.getSource$() === this.wire ) {
this.pdbcanvas.wire=!this.pdbcanvas.wire;
} else if (evt.getSource$() === this.depth ) {
this.pdbcanvas.depthcue=!this.pdbcanvas.depthcue;
} else if (evt.getSource$() === this.zbuffer ) {
this.pdbcanvas.zbuffer=!this.pdbcanvas.zbuffer;
}this.pdbcanvas.redrawneeded=true;
this.pdbcanvas.repaint$();
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setMenuBar$java_awt_MenuBar(this.jMenuBar1);
this.fileMenu.setLabel$S($I$(11).getString$S("action.file"));
this.coloursMenu.setLabel$S($I$(11).getString$S("label.colours"));
this.mapping.setLabel$S($I$(11).getString$S("label.view_mapping"));
this.mapping.addActionListener$java_awt_event_ActionListener(this);
this.wire.setLabel$S($I$(11).getString$S("label.wireframe"));
this.wire.addItemListener$java_awt_event_ItemListener(this);
this.depth.setState$Z(true);
this.depth.setLabel$S($I$(11).getString$S("label.depthcue"));
this.depth.addItemListener$java_awt_event_ItemListener(this);
this.zbuffer.setState$Z(true);
this.zbuffer.setLabel$S($I$(11).getString$S("label.z_buffering"));
this.zbuffer.addItemListener$java_awt_event_ItemListener(this);
this.charge.setLabel$S($I$(11).getString$S("label.charge_cysteine"));
this.charge.addActionListener$java_awt_event_ActionListener(this);
this.hydro.setLabel$S($I$(11).getString$S("label.colourScheme_hydrophobic"));
this.hydro.addActionListener$java_awt_event_ActionListener(this);
this.chain.setLabel$S($I$(11).getString$S("action.by_chain"));
this.chain.addActionListener$java_awt_event_ActionListener(this);
this.seqButton.setLabel$S($I$(11).getString$S("action.by_sequence"));
this.seqButton.addActionListener$java_awt_event_ActionListener(this);
this.allchains.setLabel$S($I$(11).getString$S("label.all_chains_visible"));
this.allchains.addItemListener$java_awt_event_ItemListener(this);
this.viewMenu.setLabel$S($I$(11).getString$S("action.view"));
this.zappo.setLabel$S($I$(11).getString$S("label.colourScheme_zappo"));
this.zappo.addActionListener$java_awt_event_ActionListener(this);
this.taylor.setLabel$S($I$(11).getString$S("label.colourScheme_taylor"));
this.taylor.addActionListener$java_awt_event_ActionListener(this);
this.helix.setLabel$S($I$(11).getString$S("label.colourScheme_helix_propensity"));
this.helix.addActionListener$java_awt_event_ActionListener(this);
this.strand.setLabel$S($I$(11).getString$S("label.colourScheme_strand_propensity"));
this.strand.addActionListener$java_awt_event_ActionListener(this);
this.turn.setLabel$S($I$(11).getString$S("label.colourScheme_turn_propensity"));
this.turn.addActionListener$java_awt_event_ActionListener(this);
this.buried.setLabel$S($I$(11).getString$S("label.colourScheme_buried_index"));
this.buried.addActionListener$java_awt_event_ActionListener(this);
this.user.setLabel$S($I$(11).getString$S("action.user_defined"));
this.user.addActionListener$java_awt_event_ActionListener(this);
this.jMenuBar1.add$java_awt_Menu(this.fileMenu);
this.jMenuBar1.add$java_awt_Menu(this.coloursMenu);
this.jMenuBar1.add$java_awt_Menu(this.viewMenu);
this.fileMenu.add$java_awt_MenuItem(this.mapping);
;this.coloursMenu.add$java_awt_MenuItem(this.seqButton);
this.coloursMenu.add$java_awt_MenuItem(this.chain);
this.coloursMenu.add$java_awt_MenuItem(this.charge);
this.coloursMenu.add$java_awt_MenuItem(this.zappo);
this.coloursMenu.add$java_awt_MenuItem(this.taylor);
this.coloursMenu.add$java_awt_MenuItem(this.hydro);
this.coloursMenu.add$java_awt_MenuItem(this.helix);
this.coloursMenu.add$java_awt_MenuItem(this.strand);
this.coloursMenu.add$java_awt_MenuItem(this.turn);
this.coloursMenu.add$java_awt_MenuItem(this.buried);
this.coloursMenu.add$java_awt_MenuItem(this.user);
this.viewMenu.add$java_awt_MenuItem(this.wire);
this.viewMenu.add$java_awt_MenuItem(this.depth);
this.viewMenu.add$java_awt_MenuItem(this.zbuffer);
this.viewMenu.add$java_awt_MenuItem(this.allchains);
this.allchains.setState$Z(true);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
