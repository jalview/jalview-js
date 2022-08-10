(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.newGUI"),p$1={},I$=[[0,'fr.orsay.lri.varna.VARNAPanel','java.awt.Dimension','javax.swing.JTextPane','javax.swing.JScrollPane','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.BorderFactory','java.awt.dnd.DropTarget','java.awt.Color','javax.swing.JToolBar','javax.swing.JFileChooser','java.util.ArrayList','javax.swing.JFrame','javax.swing.JList','fr.orsay.lri.varna.applications.newGUI.VARNAGUITreeModel','fr.orsay.lri.varna.applications.newGUI.VARNAGUITree','fr.orsay.lri.varna.applications.newGUI.VARNAGUIRenderer','fr.orsay.lri.varna.applications.newGUI.VARNAGUICellEditor','java.awt.datatransfer.DataFlavor','fr.orsay.lri.varna.applications.newGUI.VARNAGUIModel','javax.swing.TransferHandler','javax.swing.JButton',['fr.orsay.lri.varna.applications.newGUI.VARNAGUI','.Commands'],'java.awt.GridLayout','javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.JLabel','javax.swing.JSplitPane',['fr.orsay.lri.varna.applications.newGUI.VARNAGUI','.VARNAHolder'],'javax.swing.UIManager','javax.swing.tree.TreePath','fr.orsay.lri.varna.applications.BasicINI','javax.swing.JOptionPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAGUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['javax.swing.event.TreeModelListener', 'java.awt.event.MouseListener', 'java.awt.dnd.DropTargetListener', 'java.awt.event.WindowListener', 'java.awt.event.ComponentListener', 'java.awt.event.ActionListener']);
C$.$classes$=[['Commands',26],['VARNAHolder',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._INIFilename="FragSeqUI.ini";
this._backgroundColor=$I$(9).white;
this.redrawOnSlide=false;
this.dividerWidth=5;
this._varnaUpperPanels=Clazz.new_($I$(5,1));
this._varnaLowerPanels=Clazz.new_($I$(5,1));
this._listPanel=Clazz.new_($I$(5,1));
this._infoPanel=Clazz.new_($I$(5,1));
this._sideList=null;
this._toolbar=Clazz.new_($I$(10,1));
this._choice=Clazz.new_($I$(11,1));
this.index=0;
this._varnaPanels=Clazz.new_($I$(12,1));
},1);

C$.$fields$=[['Z',['redrawOnSlide'],'I',['dividerWidth','index'],'S',['_INIFilename'],'O',['_backgroundColor','java.awt.Color','_varnaUpperPanels','javax.swing.JPanel','+_varnaLowerPanels','+_listPanel','+_infoPanel','_sideList','fr.orsay.lri.varna.applications.newGUI.VARNAGUITree','_treeModel','fr.orsay.lri.varna.applications.newGUI.VARNAGUITreeModel','_toolbar','javax.swing.JToolBar','_choice','javax.swing.JFileChooser','_listScroller','javax.swing.JScrollPane','_selectedElems','javax.swing.JList','_splitLeft','javax.swing.JSplitPane','+_splitRight','+_splitVARNA','_varnaPanels','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["VARNA Explorer"]);C$.$init$.apply(this);
p$1.RNAPanelDemoInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'RNAPanelDemoInit', function () {
$I$(13).setDefaultLookAndFeelDecorated$Z(true);
this.addWindowListener$java_awt_event_WindowListener(this);
this._selectedElems=Clazz.new_($I$(14,1));
this._treeModel=Clazz.new_($I$(15,1));
this._treeModel.addTreeModelListener$javax_swing_event_TreeModelListener(this);
this._sideList=Clazz.new_($I$(16,1).c$$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel,[this._treeModel]);
this._sideList.addMouseListener$java_awt_event_MouseListener(this);
this._sideList.setLargeModel$Z(true);
this._sideList.setEditable$Z(true);
var renderer=Clazz.new_($I$(17,1).c$$javax_swing_JTree$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel,[this._sideList, this._treeModel]);
this._sideList.setCellRenderer$javax_swing_tree_TreeCellRenderer(renderer);
this._sideList.setCellEditor$javax_swing_tree_TreeCellEditor(Clazz.new_($I$(18,1).c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer$fr_orsay_lri_varna_applications_newGUI_VARNAGUITreeModel,[this._sideList, renderer, this._treeModel]));
var m=this._sideList.getSelectionModel$();
m.setSelectionMode$I(4);
this._sideList.setSelectionModel$javax_swing_tree_TreeSelectionModel(m);
this._sideList.setShowsRootHandles$Z(true);
this._sideList.setDragEnabled$Z(true);
this._sideList.setRootVisible$Z(false);
this._sideList.setTransferHandler$javax_swing_TransferHandler(((P$.VARNAGUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.TransferHandler'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getSourceActions$javax_swing_JComponent', function (c) {
return 3;
});

Clazz.newMeth(C$, 'createTransferable$javax_swing_JComponent', function (c) {
var tree=c;
var tp=tree.getSelectionPath$();
if (tp != null ) {
var node=tp.getLastPathComponent$();
if (Clazz.instanceOf(node.getUserObject$(), "fr.orsay.lri.varna.applications.newGUI.VARNAGUIModel")) {
return ((P$.VARNAGUI$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.datatransfer.Transferable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
var dt=Clazz.array($I$(19), -1, [$I$(20).Flavor]);
return dt;
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (df) {
if (!this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df)) throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[df]);
var node=this.b$['fr.orsay.lri.varna.applications.newGUI.VARNAGUI']._sideList.getSelectionPath$().getLastPathComponent$();
return node.getUserObject$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (df) {
return $I$(20).Flavor.equals$java_awt_datatransfer_DataFlavor(df);
});
})()
), Clazz.new_(P$.VARNAGUI$1$1.$init$,[this, null]));
} else {
return null;
}}return null;
});
})()
), Clazz.new_($I$(21,1).c$$S,[this, null, null],P$.VARNAGUI$1)));
var refreshAllFoldersButton=Clazz.new_($I$(22,1).c$$S,["Refresh All"]);
refreshAllFoldersButton.setActionCommand$S("" + $I$(23).REFRESH_ALL);
refreshAllFoldersButton.addActionListener$java_awt_event_ActionListener(this);
var watchFolderButton=Clazz.new_($I$(22,1).c$$S,["Add folder"]);
watchFolderButton.setActionCommand$S("" + $I$(23).NEW_FOLDER);
watchFolderButton.addActionListener$java_awt_event_ActionListener(this);
var addUpperButton=Clazz.new_($I$(22,1).c$$S,["+Up"]);
addUpperButton.setActionCommand$S("" + $I$(23).ADD_PANEL_UP);
addUpperButton.addActionListener$java_awt_event_ActionListener(this);
var removeUpperButton=Clazz.new_($I$(22,1).c$$S,["-Up"]);
removeUpperButton.setActionCommand$S("" + $I$(23).REMOVE_PANEL_UP);
removeUpperButton.addActionListener$java_awt_event_ActionListener(this);
var addLowerButton=Clazz.new_($I$(22,1).c$$S,["+Down"]);
addLowerButton.setActionCommand$S("" + $I$(23).ADD_PANEL_DOWN);
addLowerButton.addActionListener$java_awt_event_ActionListener(this);
var removeLowerButton=Clazz.new_($I$(22,1).c$$S,["-Down"]);
removeLowerButton.setActionCommand$S("" + $I$(23).REMOVE_PANEL_DOWN);
removeLowerButton.addActionListener$java_awt_event_ActionListener(this);
this._toolbar.setFloatable$Z(false);
this._toolbar.add$java_awt_Component(refreshAllFoldersButton);
this._toolbar.addSeparator$();
this._toolbar.add$java_awt_Component(addUpperButton);
this._toolbar.add$java_awt_Component(removeUpperButton);
this._toolbar.add$java_awt_Component(addLowerButton);
this._toolbar.add$java_awt_Component(removeLowerButton);
this._listScroller=Clazz.new_($I$(4,1).c$$java_awt_Component$I$I,[this._sideList, 22, 32]);
this._listScroller.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[300, 200]));
this._listScroller.addComponentListener$java_awt_event_ComponentListener(this);
this._listPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this._listPanel.add$java_awt_Component$O(this._listScroller, "Center");
this._listPanel.add$java_awt_Component$O(this._selectedElems, "South");
this._listPanel.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("Structures"));
this._listPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[300, 0]));
this._varnaUpperPanels.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1)));
this._varnaUpperPanels.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[800, 600]));
this._varnaLowerPanels.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1)));
this._varnaLowerPanels.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[800, 0]));
var sortFileName=Clazz.new_($I$(25,1).c$$S,["Filename"]);
sortFileName.setActionCommand$S("sortfilename");
sortFileName.setSelected$Z(true);
sortFileName.setOpaque$Z(false);
sortFileName.setActionCommand$S("" + $I$(23).SORT_FILENAME);
sortFileName.addActionListener$java_awt_event_ActionListener(this);
var sortID=Clazz.new_($I$(25,1).c$$S,["ID"]);
sortID.setActionCommand$S("sortid");
sortID.setOpaque$Z(false);
sortID.setActionCommand$S("" + $I$(23).SORT_ID);
sortID.addActionListener$java_awt_event_ActionListener(this);
var group=Clazz.new_($I$(26,1));
group.add$javax_swing_AbstractButton(sortFileName);
group.add$javax_swing_AbstractButton(sortID);
var listTools=Clazz.new_($I$(10,1));
listTools.setFloatable$Z(false);
listTools.add$java_awt_Component(watchFolderButton);
listTools.addSeparator$();
listTools.add$java_awt_Component(Clazz.new_($I$(27,1).c$$S,["Sort by"]));
listTools.add$java_awt_Component(sortFileName);
listTools.add$java_awt_Component(sortID);
var sidePanel=Clazz.new_($I$(5,1));
sidePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
sidePanel.add$java_awt_Component$O(listTools, "North");
sidePanel.add$java_awt_Component$O(this._listPanel, "Center");
var mainVARNAPanel=Clazz.new_($I$(5,1));
mainVARNAPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this._splitVARNA=Clazz.new_($I$(28,1).c$$I$Z$java_awt_Component$java_awt_Component,[0, this.redrawOnSlide, this._varnaUpperPanels, this._varnaLowerPanels]);
this._splitVARNA.setDividerSize$I(this.dividerWidth);
this._splitVARNA.setResizeWeight$D(1.0);
this._splitLeft=Clazz.new_($I$(28,1).c$$I$Z$java_awt_Component$java_awt_Component,[1, this.redrawOnSlide, sidePanel, this._splitVARNA]);
this._splitLeft.setResizeWeight$D(0.1);
this._splitLeft.setDividerSize$I(this.dividerWidth);
this._splitRight=Clazz.new_($I$(28,1).c$$I$Z$java_awt_Component$java_awt_Component,[1, this.redrawOnSlide, this._splitLeft, this._infoPanel]);
this._splitRight.setResizeWeight$D(0.85);
this._splitRight.setDividerSize$I(this.dividerWidth);
this._infoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1).c$$I$I,[0, 1]));
p$1.restoreConfig.apply(this, []);
this.setBackground$java_awt_Color(this._backgroundColor);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this.getContentPane$().add$java_awt_Component$O(this._splitRight, "Center");
this.getContentPane$().add$java_awt_Component$O(this._toolbar, "North");
this.addUpperPanel$();
this.setVisible$Z(true);
}, p$1);

Clazz.newMeth(C$, 'getSelf$', function () {
return this;
});

Clazz.newMeth(C$, 'createIntegratedPanel$I', function (height) {
var vh=Clazz.new_($I$(29,1).c$$java_awt_dnd_DropTargetListener,[this, null, this]);
this._varnaPanels.add$O(vh);
return vh;
});

Clazz.newMeth(C$, 'removeUpperPanel$', function () {
if (this._varnaUpperPanels.getComponentCount$() > 1) {
var vh=this._varnaUpperPanels.getComponent$I(this._varnaUpperPanels.getComponentCount$() - 1);
this._infoPanel.remove$java_awt_Component(vh.getInfoPane$());
this._varnaUpperPanels.remove$java_awt_Component(vh);
this._splitLeft.validate$();
this._splitRight.validate$();
}});

Clazz.newMeth(C$, 'addUpperPanel$', function () {
var vh=this.createIntegratedPanel$I(100);
this._varnaUpperPanels.add$java_awt_Component(vh);
this._infoPanel.add$java_awt_Component(vh.getInfoPane$());
this._splitRight.validate$();
this._splitLeft.validate$();
});

Clazz.newMeth(C$, 'removeLowerPanel$', function () {
if (this._varnaLowerPanels.getComponentCount$() > 0) {
this._varnaLowerPanels.remove$I(this._varnaLowerPanels.getComponentCount$() - 1);
if (this._varnaLowerPanels.getComponentCount$() == 0) {
this._splitVARNA.setDividerLocation$D(1.0);
this._splitVARNA.validate$();
this._splitVARNA.repaint$();
}this._splitLeft.validate$();
}});

Clazz.newMeth(C$, 'addLowerPanel$', function () {
if (this._varnaLowerPanels.getComponentCount$() == 0) {
this._splitVARNA.setDividerLocation$D(0.7);
this._splitVARNA.validate$();
}this._varnaLowerPanels.add$java_awt_Component(this.createIntegratedPanel$I(400));
this._splitLeft.validate$();
});

Clazz.newMeth(C$, 'main$SA', function (args) {
try {
for (var info, $info = 0, $$info = $I$(30).getInstalledLookAndFeels$(); $info<$$info.length&&((info=($$info[$info])),1);$info++) {
if ("Nimbus".equals$O(info.getName$())) {
$I$(30,"setLookAndFeel$S",[info.getClassName$()]);
break;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
var d=Clazz.new_(C$);
d.setDefaultCloseOperation$I(3);
d.pack$();
d.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent', function (e) {
var node;
node=(e.getTreePath$().getLastPathComponent$());
try {
var index=e.getChildIndices$()[0];
node=(node.getChildAt$I(index));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NullPointerException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'addFolder$S', function (path) {
this.addFolder$S$Z(path, true);
});

Clazz.newMeth(C$, 'addFolder$S$Z', function (path, shouldBeVisible) {
var childNode=this._treeModel.addFolder$S(path);
if ((childNode != null ) && shouldBeVisible ) {
System.out.println$S("  Expanding: " + childNode.getUserObject$());
var tp=Clazz.new_([childNode.getPath$()],$I$(31,1).c$$OA);
this._sideList.scrollPathToVisible$javax_swing_tree_TreePath(tp);
this._sideList.expandRow$I(this._sideList.getRowForPath$javax_swing_tree_TreePath(tp));
this._sideList.updateUI$();
this._sideList.validate$();
}});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent', function (e) {
System.out.println$O(e);
});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent', function (e) {
});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this._sideList ) {
if (e.getClickCount$() == 2) {
var t=this._sideList.getSelectionPath$();
if (t != null ) {
var node=t.getLastPathComponent$();
if (Clazz.instanceOf(node.getUserObject$(), "fr.orsay.lri.varna.applications.newGUI.VARNAGUIModel")) {
var model=node.getUserObject$();
var res=this.index % (this._varnaUpperPanels.getComponentCount$() + this._varnaLowerPanels.getComponentCount$());
var c=null;
if (res < this._varnaUpperPanels.getComponentCount$()) {
c=this._varnaUpperPanels.getComponent$I(res);
} else {
res-=this._varnaUpperPanels.getComponentCount$();
c=this._varnaLowerPanels.getComponent$I(res);
}if (Clazz.instanceOf(c, "fr.orsay.lri.varna.applications.newGUI.VARNAGUI.VARNAHolder")) {
var h=c;
h.setModel$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel(model);
}this.index++;
}}}}});

Clazz.newMeth(C$, 'getHolder$java_awt_Component', function (vp) {
if (Clazz.instanceOf(vp, "fr.orsay.lri.varna.applications.newGUI.VARNAGUI.VARNAHolder")) {
var i=this._varnaPanels.indexOf$O(vp);
if (i != -1) {
return this._varnaPanels.get$I(i);
}}if (Clazz.instanceOf(vp, "fr.orsay.lri.varna.VARNAPanel")) {
for (var vh, $vh = this._varnaPanels.iterator$(); $vh.hasNext$()&&((vh=($vh.next$())),1);) {
if (vh.getVARNAPanel$() === vp ) return vh;
}
}return null;
}, p$1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (arg0) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (arg0) {
try {
var o=arg0.getSource$();
if (Clazz.instanceOf(o.getComponent$(), "fr.orsay.lri.varna.VARNAPanel")) {
var h=p$1.getHolder$java_awt_Component.apply(this, [o.getComponent$()]);
if (h != null ) {
h.setModel$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel(arg0.getTransferable$().getTransferData$java_awt_datatransfer_DataFlavor($I$(20).Flavor));
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.awt.datatransfer.UnsupportedFlavorException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (arg0) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
p$1.saveConfig.apply(this, []);
System.exit$I(0);
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'restoreConfig', function () {
var config=$I$(32).loadINI$S(this._INIFilename);
var vals=config.getItemList$S("folders");
System.out.print$S("[C]" + vals);
for (var path, $path = vals.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
System.out.println$S("Loading folder " + path);
this.addFolder$S(path);
}
this._sideList.validate$();
this._listScroller.validate$();
}, p$1);

Clazz.newMeth(C$, 'saveConfig', function () {
var data=Clazz.new_($I$(32,1));
var i=0;
for (var folderPath, $folderPath = this._treeModel.getFolders$().iterator$(); $folderPath.hasNext$()&&((folderPath=($folderPath.next$())),1);) {
data.addItem$S$S$S("folders", "val" + i, folderPath);
i++;
}
$I$(32).saveINI$fr_orsay_lri_varna_applications_BasicINI$S(data, this._INIFilename);
}, p$1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
this._sideList.validate$();
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var cmd=e.getActionCommand$();
System.out.println$S(cmd);
if (cmd.equals$O("" + $I$(23).NEW_FOLDER)) {
this._choice.setDialogTitle$S("Watch new folder...");
this._choice.setFileSelectionMode$I(1);
this._choice.setAcceptAllFileFilterUsed$Z(false);
try {
if (this._choice.showOpenDialog$java_awt_Component(this.getSelf$()) == 0) {
this.addFolder$S(this._choice.getSelectedFile$().getCanonicalPath$());
} else {
System.out.println$S("No Selection ");
}} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else if (cmd.equals$O("" + $I$(23).ADD_PANEL_DOWN)) {
this.addLowerPanel$();
} else if (cmd.equals$O("" + $I$(23).ADD_PANEL_UP)) {
this.addUpperPanel$();
} else if (cmd.equals$O("" + $I$(23).REMOVE_PANEL_DOWN)) {
this.removeLowerPanel$();
} else if (cmd.equals$O("" + $I$(23).REMOVE_PANEL_UP)) {
this.removeUpperPanel$();
} else {
$I$(33).showMessageDialog$java_awt_Component$O(this, "Command '" + cmd + "' not implemented yet." );
}});
;
(function(){/*e*/var C$=Clazz.newClass(P$.VARNAGUI, "Commands", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NEW_FOLDER", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ADD_PANEL_UP", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ADD_PANEL_DOWN", 2, []);
Clazz.newEnumConst($vals, C$.c$, "REMOVE_PANEL_UP", 3, []);
Clazz.newEnumConst($vals, C$.c$, "REMOVE_PANEL_DOWN", 4, []);
Clazz.newEnumConst($vals, C$.c$, "SORT_ID", 5, []);
Clazz.newEnumConst($vals, C$.c$, "SORT_FILENAME", 6, []);
Clazz.newEnumConst($vals, C$.c$, "REFRESH_ALL", 7, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VARNAGUI, "VARNAHolder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vp','fr.orsay.lri.varna.VARNAPanel','_m','fr.orsay.lri.varna.applications.newGUI.VARNAGUIModel','_infoPanel','javax.swing.JPanel','_infoTxt','javax.swing.JTextPane']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetListener', function (f) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.vp=Clazz.new_($I$(1,1));
this.vp.addFocusListener$java_awt_event_FocusListener(((P$.VARNAGUI$VARNAHolder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "VARNAGUI$VARNAHolder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
});
})()
), Clazz.new_(P$.VARNAGUI$VARNAHolder$1.$init$,[this, null])));
this.vp.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[800, 400]));
this.vp.setBackground$java_awt_Color(this.this$0._backgroundColor);
this._infoTxt=Clazz.new_($I$(3,1));
this._infoTxt.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[200, 0]));
this._infoTxt.setContentType$S("text/html");
var scroll=Clazz.new_($I$(4,1).c$$java_awt_Component$I$I,[this._infoTxt, 22, 32]);
this._infoPanel=Clazz.new_($I$(5,1));
this._infoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this._infoPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[200, 0]));
this._infoPanel.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("Info"));
this._infoPanel.add$java_awt_Component$O(scroll, "Center");
this._infoPanel.validate$();
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[300, 600]));
this.setBorder$javax_swing_border_Border($I$(7).createTitledBorder$S("None"));
this.add$java_awt_Component$O(this.vp, "Center");
var dt=Clazz.new_($I$(8,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this.vp, f]);
}, 1);

Clazz.newMeth(C$, 'getVARNAPanel$', function () {
return this.vp;
});

Clazz.newMeth(C$, 'setModel$fr_orsay_lri_varna_applications_newGUI_VARNAGUIModel', function (m) {
this._m=m;
this.vp.showRNAInterpolated$fr_orsay_lri_varna_models_rna_RNA(m.getRNA$());
this.setBorder$javax_swing_border_Border($I$(7,"createTitledBorder$S",[m.toString()]));
this._infoTxt.setText$S(m.getRNA$().getHTMLDescription$());
this._infoPanel.setBorder$javax_swing_border_Border($I$(7,"createTitledBorder$S",["Info (" + this._m + ")" ]));
this.vp.requestFocus$();
});

Clazz.newMeth(C$, 'getModel$', function () {
this.setBorder$javax_swing_border_Border($I$(7,"createTitledBorder$S",[this._m.toString()]));
return this._m;
});

Clazz.newMeth(C$, 'setInfoTxt$S', function (s) {
this._infoTxt.setText$S(this.vp.getRNA$().getHTMLDescription$());
this._infoTxt.validate$();
});

Clazz.newMeth(C$, 'getInfoPane$', function () {
return this._infoPanel;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
