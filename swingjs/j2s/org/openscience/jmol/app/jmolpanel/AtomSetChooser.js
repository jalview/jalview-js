(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.jmolpanel"),p$1={},I$=[[0,'org.jmol.i18n.GT','javax.swing.tree.DefaultTreeModel','javax.swing.tree.DefaultMutableTreeNode','java.awt.BorderLayout','javax.swing.JPanel','javax.swing.JTree','javax.swing.JScrollPane','javax.swing.border.TitledBorder','javax.swing.JTextArea','javax.swing.JSplitPane','javax.swing.BoxLayout','javax.swing.JLabel','javax.swing.JSlider','javax.swing.JCheckBox','java.awt.Insets','javax.swing.JButton','org.openscience.jmol.app.jmolpanel.JmolResourceHandler','javax.swing.Box','Thread','org.jmol.util.Logger','javax.swing.JFileChooser','java.io.PrintWriter','java.io.FileOutputStream','javajs.util.SB',['org.openscience.jmol.app.jmolpanel.AtomSetChooser','.AtomSet']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AtomSetChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['javax.swing.event.TreeSelectionListener', 'java.beans.PropertyChangeListener', 'java.awt.event.ActionListener', 'javax.swing.event.ChangeListener', 'Runnable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.animThread=null;
this.propertiesTextArea=null;
this.tree=null;
this.treeModel=null;
this.vwr=null;
this.repeatCheckBox=null;
this.selectSlider=null;
this.infoLabel=null;
this.fpsSlider=null;
this.amplitudeSlider=null;
this.periodSlider=null;
this.scaleSlider=null;
this.radiusSlider=null;
this.saveChooser=null;
this.indexes=null;
this.currentIndex=0;
this.radiusValue=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.animThread=null;
this.currentIndex=-1;
this.radiusValue=1;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$javax_swing_JFrame', function (vwr, frame) {
C$.superclazz.c$$S.apply(this, [$I$(1).$$S("AtomSetChooser")]);
C$.$init$.apply(this);
this.vwr=vwr;
this.treeModel=Clazz.new_($I$(2).c$$javax_swing_tree_TreeNode,[Clazz.new_($I$(3).c$$O,[$I$(1).$$S("No AtomSets")])]);
p$1.layoutWindow$java_awt_Container.apply(this, [this.getContentPane$()]);
this.pack$();
this.setLocationRelativeTo$java_awt_Component(frame);
}, 1);

Clazz.newMeth(C$, 'layoutWindow$java_awt_Container', function (container) {
container.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
var treePanel=Clazz.new_($I$(5));
treePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this.tree=Clazz.new_($I$(6).c$$javax_swing_tree_TreeModel,[this.treeModel]);
this.tree.setVisibleRowCount$I(5);
this.tree.getSelectionModel$().setSelectionMode$I(1);
this.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this);
this.tree.setEnabled$Z(false);
treePanel.add$java_awt_Component$O(Clazz.new_($I$(7).c$$java_awt_Component,[this.tree]), "Center");
var propertiesPanel=Clazz.new_($I$(5));
propertiesPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
propertiesPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Properties")]));
this.propertiesTextArea=Clazz.new_($I$(9));
this.propertiesTextArea.setEditable$Z(false);
propertiesPanel.add$java_awt_Component$O(Clazz.new_($I$(7).c$$java_awt_Component,[this.propertiesTextArea]), "Center");
var astPanel=Clazz.new_($I$(5));
astPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
astPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Atom Set Collection")]));
var splitPane=Clazz.new_($I$(10).c$$I$java_awt_Component$java_awt_Component,[0, treePanel, propertiesPanel]);
astPanel.add$java_awt_Component$O(splitPane, "Center");
splitPane.setResizeWeight$D(0.5);
container.add$java_awt_Component$O(astPanel, "Center");
var controllerPanel=Clazz.new_($I$(5));
controllerPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[controllerPanel, 1]));
container.add$java_awt_Component$O(controllerPanel, "South");
var collectionPanel=Clazz.new_($I$(5));
collectionPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[collectionPanel, 1]));
collectionPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Collection")]));
controllerPanel.add$java_awt_Component(collectionPanel);
var infoPanel=Clazz.new_($I$(5));
infoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
infoPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Info")]));
this.infoLabel=Clazz.new_($I$(12).c$$S,[" "]);
infoPanel.add$java_awt_Component$O(this.infoLabel, "South");
collectionPanel.add$java_awt_Component(infoPanel);
var cpsPanel=Clazz.new_($I$(5));
cpsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
cpsPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Select")]));
this.selectSlider=Clazz.new_($I$(13).c$$I$I$I,[0, 0, 0]);
this.selectSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.selectSlider.setMajorTickSpacing$I(5);
this.selectSlider.setMinorTickSpacing$I(1);
this.selectSlider.setPaintTicks$Z(true);
this.selectSlider.setSnapToTicks$Z(true);
this.selectSlider.setEnabled$Z(false);
cpsPanel.add$java_awt_Component$O(this.selectSlider, "South");
collectionPanel.add$java_awt_Component(cpsPanel);
var row=Clazz.new_($I$(5));
collectionPanel.add$java_awt_Component(row);
row.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[row, 0]));
this.repeatCheckBox=Clazz.new_($I$(14).c$$S$Z,[$I$(1).$$S("Repeat"), false]);
var vcrpanel=p$1.createVCRController$S.apply(this, ["collection"]);
vcrpanel.add$java_awt_Component(this.repeatCheckBox);
row.add$java_awt_Component(vcrpanel);
var fpsPanel=Clazz.new_($I$(5));
row.add$java_awt_Component(fpsPanel);
var fps=this.vwr.getInt$I(553648132);
if (fps > 30) fps=30;
fpsPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
fpsPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("FPS")]));
this.fpsSlider=Clazz.new_($I$(13).c$$I$I$I,[0, 30, fps]);
this.fpsSlider.setMajorTickSpacing$I(5);
this.fpsSlider.setMinorTickSpacing$I(1);
this.fpsSlider.setPaintTicks$Z(true);
this.fpsSlider.setSnapToTicks$Z(true);
this.fpsSlider.addChangeListener$javax_swing_event_ChangeListener(this);
fpsPanel.add$java_awt_Component$O(this.fpsSlider, "South");
var vectorPanel=Clazz.new_($I$(5));
controllerPanel.add$java_awt_Component(vectorPanel);
vectorPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[vectorPanel, 1]));
vectorPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Vector")]));
var row1=Clazz.new_($I$(5));
row1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[row1, 0]));
var radiusPanel=Clazz.new_($I$(5));
radiusPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
radiusPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Radius")]));
this.radiusSlider=Clazz.new_($I$(13).c$$I$I$I,[0, 19, 3]);
this.radiusSlider.setMajorTickSpacing$I(5);
this.radiusSlider.setMinorTickSpacing$I(1);
this.radiusSlider.setPaintTicks$Z(true);
this.radiusSlider.setSnapToTicks$Z(true);
this.radiusSlider.addChangeListener$javax_swing_event_ChangeListener(this);
p$1.script$S.apply(this, ["vector 3"]);
radiusPanel.add$java_awt_Component(this.radiusSlider);
row1.add$java_awt_Component(radiusPanel);
var scalePanel=Clazz.new_($I$(5));
scalePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
scalePanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Scale")]));
this.scaleSlider=Clazz.new_($I$(13).c$$I$I$I,[0, 200, 100]);
this.scaleSlider.addChangeListener$javax_swing_event_ChangeListener(this);
p$1.script$S.apply(this, ["vector scale 1.0"]);
scalePanel.add$java_awt_Component(this.scaleSlider);
row1.add$java_awt_Component(scalePanel);
vectorPanel.add$java_awt_Component(row1);
var row2=Clazz.new_($I$(5));
row2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[row2, 0]));
var amplitudePanel=Clazz.new_($I$(5));
amplitudePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
amplitudePanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Amplitude")]));
this.amplitudeSlider=Clazz.new_($I$(13).c$$I$I$I,[0, 100, 50]);
p$1.script$S.apply(this, ["vibration scale 0.5"]);
this.amplitudeSlider.addChangeListener$javax_swing_event_ChangeListener(this);
amplitudePanel.add$java_awt_Component(this.amplitudeSlider);
row2.add$java_awt_Component(amplitudePanel);
var periodPanel=Clazz.new_($I$(5));
periodPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
periodPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[$I$(1).$$S("Period")]));
this.periodSlider=Clazz.new_($I$(13).c$$I$I$I,[0, 999, 499]);
p$1.script$S.apply(this, ["vibration 0.5;vibration off;"]);
this.periodSlider.addChangeListener$javax_swing_event_ChangeListener(this);
periodPanel.add$java_awt_Component(this.periodSlider);
row2.add$java_awt_Component(periodPanel);
vectorPanel.add$java_awt_Component(row2);
vectorPanel.add$java_awt_Component(p$1.createVCRController$S.apply(this, ["vector"]));
}, p$1);

Clazz.newMeth(C$, 'createVCRController$S', function (section) {
var controlPanel=Clazz.new_($I$(5));
controlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11).c$$java_awt_Container$I,[controlPanel, 0]));
controlPanel.setBorder$javax_swing_border_Border(Clazz.new_($I$(8).c$$S,[(section.equals$O("collection") ? $I$(1).$$S("Frame") : $I$(1).$$S("Vibration"))]));
var inset=Clazz.new_($I$(15).c$$I$I$I$I,[1, 1, 1, 1]);
var buttons=Clazz.array(String, -1, ["rewind", "prev", "play", "pause", "next", "ff"]);
var tooltips=null;
if (section.equals$O("collection")) {
tooltips=Clazz.array(String, -1, [$I$(1).$$S("Go to first atom set in the collection"), $I$(1).$$S("Go to previous atom set in the collection"), $I$(1).$$S("Play the whole collection of atom sets"), $I$(1).$$S("Pause playing"), $I$(1).$$S("Go to next atom set in the collection"), $I$(1).$$S("Jump to last atom set in the collection")]);
} else if (section.equals$O("vector")) {
tooltips=Clazz.array(String, -1, [$I$(1).$$S("Go to first atom set in the collection"), $I$(1).$$S("Go to previous atom set in the collection"), $I$(1).$$S("Vibration ON"), $I$(1).$$S("Vibration OFF"), $I$(1).$$S("Go to next atom set in the collection"), $I$(1).$$S("Jump to last atom set in the collection")]);
}for (var i=buttons.length, idx=0; --i >= 0; idx++) {
var action=buttons[idx];
var btn=Clazz.new_($I$(16).c$$javax_swing_Icon,[$I$(17).getIconX$S("AtomSetChooser." + action + "Image" )]);
if ((tooltips != null ) && (tooltips.length > idx) ) {
btn.setToolTipText$S(tooltips[idx]);
}btn.setMargin$java_awt_Insets(inset);
btn.setActionCommand$S(section + "." + action );
btn.addActionListener$java_awt_event_ActionListener(this);
controlPanel.add$java_awt_Component(btn);
}
controlPanel.add$java_awt_Component($I$(18).createHorizontalGlue$());
return controlPanel;
}, p$1);

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_TreeSelectionEvent','valueChanged$'], function (e) {
var node=this.tree.getLastSelectedPathComponent$();
if (node == null ) {
return;
}try {
var index=0;
if (node.isLeaf$()) {
var parent=node.getParent$();
this.setIndexes$javax_swing_tree_DefaultMutableTreeNode(parent);
index=parent.getIndex$javax_swing_tree_TreeNode(node);
} else {
this.setIndexes$javax_swing_tree_DefaultMutableTreeNode(node);
}this.showAtomSetIndex$I$Z(index, true);
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'showAtomSetIndex$I$Z', function (index, bSetSelectSlider) {
if (bSetSelectSlider) {
this.selectSlider.setValue$I(index);
return;
}try {
this.currentIndex=index;
var atomSetIndex=this.indexes[index];
p$1.script$S.apply(this, ["frame " + this.vwr.getModelNumberDotted$I(atomSetIndex)]);
this.infoLabel.setText$S(this.vwr.getModelName$I(atomSetIndex));
this.showProperties$java_util_Properties(this.vwr.ms.am[atomSetIndex].properties);
this.showAuxiliaryInfo$java_util_Map(this.vwr.ms.getModelAuxiliaryInfo$I(atomSetIndex));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setIndexes$javax_swing_tree_DefaultMutableTreeNode', function (node) {
var atomSetCount=node.getLeafCount$();
this.indexes=Clazz.array(Integer.TYPE, [atomSetCount]);
var e=node.depthFirstEnumeration$();
var idx=0;
while (e.hasMoreElements$()){
node=e.nextElement$();
if (node.isLeaf$()) this.indexes[idx++]=(node).getAtomSetIndex$();
}
this.selectSlider.setEnabled$Z(atomSetCount > 0);
this.selectSlider.setMaximum$I(atomSetCount - 1);
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
var cmd=e.getActionCommand$();
var parts=cmd.split$S("\\.");
try {
if (parts.length == 2) {
var section=parts[0];
cmd=parts[1];
if ("collection".equals$O(section)) {
if ("rewind".equals$O(cmd)) {
this.animThread=null;
this.showAtomSetIndex$I$Z(0, true);
} else if ("prev".equals$O(cmd)) {
this.showAtomSetIndex$I$Z(this.currentIndex - 1, true);
} else if ("play".equals$O(cmd)) {
if (this.animThread == null ) {
this.animThread=Clazz.new_($I$(19).c$$Runnable$S,[this, "AtomSetChooserAnimationThread"]);
this.animThread.start$();
}} else if ("pause".equals$O(cmd)) {
this.animThread=null;
} else if ("next".equals$O(cmd)) {
this.showAtomSetIndex$I$Z(this.currentIndex + 1, true);
} else if ("ff".equals$O(cmd)) {
this.animThread=null;
this.showAtomSetIndex$I$Z(this.indexes.length - 1, true);
} else if ("save".equals$O(cmd)) {
this.saveXYZCollection$();
}} else if ("vector".equals$O(section)) {
if ("rewind".equals$O(cmd)) {
this.findFrequency$I$I(0, 1);
} else if ("prev".equals$O(cmd)) {
this.findFrequency$I$I(this.currentIndex - 1, -1);
} else if ("play".equals$O(cmd)) {
p$1.script$S.apply(this, ["vibration on; vectors " + this.radiusValue]);
} else if ("pause".equals$O(cmd)) {
p$1.script$S.apply(this, ["vibration off; vectors off"]);
} else if ("next".equals$O(cmd)) {
this.findFrequency$I$I(this.currentIndex + 1, 1);
} else if ("ff".equals$O(cmd)) {
this.findFrequency$I$I(this.indexes.length - 1, -1);
} else if ("save".equals$O(cmd)) {
$I$(20).warn$S("Not implemented");
}}}} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'saveXYZCollection$', function () {
var nidx=this.indexes.length;
if (nidx == 0) {
$I$(20).warn$S("No collection selected.");
return;
}if (this.saveChooser == null ) this.saveChooser=Clazz.new_($I$(21));
var retval=this.saveChooser.showSaveDialog$java_awt_Component(this);
if (retval == 0) {
var file=this.saveChooser.getSelectedFile$();
var fname=file.getAbsolutePath$();
try {
var f=Clazz.new_($I$(22).c$$java_io_OutputStream,[Clazz.new_($I$(23).c$$S,[fname])]);
for (var idx=0; idx < nidx; idx++) {
var modelIndex=this.indexes[idx];
var str=Clazz.new_($I$(24));
str.append$S(this.vwr.getModelName$I(modelIndex)).append$S("\n");
var natoms=0;
for (var i=0, n=this.vwr.ms.ac; i < n; i++) {
if (this.vwr.ms.at[i].mi == modelIndex) {
natoms++;
var p=this.vwr.ms.at[i];
str.append$S(this.vwr.ms.at[i].getAtomName$()).append$S("\t");
str.appendF$F(p.x).append$S("\t").appendF$F(p.y).append$S("\t").appendF$F(p.z).append$S("\n");
}}
f.println$I(natoms);
f.print$O(str);
}
f.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'findFrequency$I$I', function (index, increment) {
var maxIndex=this.indexes.length;
var foundFrequency=false;
while (index >= 0 && index < maxIndex  && !(foundFrequency=(this.vwr.modelHasVibrationVectors$I(this.indexes[index]))) ){
index+=increment;
}
if (foundFrequency) {
this.showAtomSetIndex$I$Z(index, true);
}});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var src=e.getSource$();
var value=(src).getValue$();
var cmd=null;
if (src === this.selectSlider ) {
this.showAtomSetIndex$I$Z(value, false);
} else if (src === this.fpsSlider ) {
if (value == 0) this.fpsSlider.setValue$I(1);
 else cmd="animation fps " + value;
} else if (src === this.radiusSlider ) {
if (value == 0) this.radiusSlider.setValue$I(value=1);
 else cmd="vector " + value;
this.radiusValue=value;
} else if (src === this.scaleSlider ) {
cmd="vector scale " + (new Float(value * 0.01).toString());
} else if (src === this.amplitudeSlider ) {
cmd="vibration scale " + (new Float(value * 0.01).toString());
} else if (src === this.periodSlider ) {
cmd="vibration " + (new Float(value * 0.001).toString());
}if (cmd != null ) p$1.script$S.apply(this, [cmd]);
});

Clazz.newMeth(C$, 'script$S', function (cmd) {
this.vwr.evalStringQuiet$S(cmd + "\u0001## REPAINT_IGNORE ##");
}, p$1);

Clazz.newMeth(C$, 'showProperties$java_util_Properties', function (properties) {
var needLF=false;
this.propertiesTextArea.setText$S("");
if (properties != null ) {
var e=properties.propertyNames$();
while (e.hasMoreElements$()){
var propertyName=e.nextElement$();
if (propertyName.startsWith$S(".")) continue;
this.propertiesTextArea.append$S((needLF ? "\n " : " ") + propertyName + "=" + properties.getProperty$S(propertyName) );
needLF=true;
}
}});

Clazz.newMeth(C$, 'showAuxiliaryInfo$java_util_Map', function (auxiliaryInfo) {
var separator=" ";
if (auxiliaryInfo != null ) {
for (var keyName, $keyName = auxiliaryInfo.keySet$().iterator$(); $keyName.hasNext$()&&((keyName=($keyName.next$())),1);) {
if (keyName.startsWith$S(".")) continue;
this.propertiesTextArea.append$S(separator + keyName + "=" + auxiliaryInfo.get$O(keyName) );
separator="\n ";
}
}});

Clazz.newMeth(C$, 'createTreeModel', function () {
var key=null;
var separator=null;
var name=this.vwr.ms.modelSetName;
var root=Clazz.new_($I$(3).c$$O,[name == null  ? "zapped" : name]);
var modelSetProperties=(name == null  ? null : this.vwr.getModelSetProperties$());
if (modelSetProperties != null ) {
key=modelSetProperties.getProperty$S("PATH_KEY");
separator=modelSetProperties.getProperty$S("PATH_SEPARATOR");
}if (key == null  || separator == null  ) {
if (name != null ) for (var atomSetIndex=0, count=this.vwr.ms.mc; atomSetIndex < count; ++atomSetIndex) {
root.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(25).c$$I$S,[atomSetIndex, this.vwr.getModelName$I(atomSetIndex)]));
}
} else {
for (var atomSetIndex=0, count=this.vwr.ms.mc; atomSetIndex < count; ++atomSetIndex) {
var current=root;
var path=this.vwr.ms.getModelProperty$I$S(atomSetIndex, key);
if (path != null ) {
var child=null;
var folders=path.split$S(separator);
for (var i=0, nFolders=folders.length; --nFolders >= 0; i++) {
var found=false;
var lookForFolder=folders[i];
for (var childIndex=current.getChildCount$(); --childIndex >= 0; ) {
child=current.getChildAt$I(childIndex);
found=lookForFolder.equals$O(child.toString());
if (found) break;
}
if (found) {
current=child;
} else {
var newFolder=Clazz.new_($I$(3).c$$O,[lookForFolder]);
current.add$javax_swing_tree_MutableTreeNode(newFolder);
current=newFolder;
}}
}current.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(25).c$$I$S,[atomSetIndex, this.vwr.getModelName$I(atomSetIndex)]));
}
}this.treeModel.setRoot$javax_swing_tree_TreeNode(root);
this.treeModel.reload$();
this.tree.setEnabled$Z(root.getChildCount$() > 0);
this.indexes=null;
this.currentIndex=-1;
this.selectSlider.setEnabled$Z(false);
}, p$1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (propertyChangeEvent) {
var eventName=propertyChangeEvent.getPropertyName$();
if (eventName.equals$O("chemFile")) {
p$1.createTreeModel.apply(this, []);
}});

Clazz.newMeth(C$, 'run$', function () {
var myThread=$I$(19).currentThread$();
myThread.setPriority$I(1);
while (this.animThread === myThread ){
if (this.currentIndex < 0) {
this.animThread=null;
} else {
++this.currentIndex;
if (this.currentIndex == this.indexes.length) {
if (this.repeatCheckBox.isSelected$()) this.currentIndex=0;
 else {
this.currentIndex--;
this.animThread=null;
}}this.showAtomSetIndex$I$Z(this.currentIndex, true);
try {
var fps=this.vwr.getInt$I(553648132);
$I$(19).sleep$J(((1000.0 / (fps == 0 ? 1 : fps))|0));
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
$I$(20).errorEx$S$Throwable(null, e);
} else {
throw e;
}
}
}}
});
;
(function(){var C$=Clazz.newClass(P$.AtomSetChooser, "AtomSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atomSetIndex=0;
this.atomSetName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$S', function (atomSetIndex, atomSetName) {
Clazz.super_(C$, this,1);
this.atomSetIndex=atomSetIndex;
this.atomSetName=atomSetName;
}, 1);

Clazz.newMeth(C$, 'getAtomSetIndex$', function () {
return this.atomSetIndex;
});

Clazz.newMeth(C$, 'toString', function () {
return this.atomSetName;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
