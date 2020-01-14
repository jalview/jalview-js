(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.surfacetool"),p$1={},I$=[[0,'java.awt.Color','java.awt.BorderLayout','javax.swing.JFrame','org.jmol.i18n.GT','javax.swing.ImageIcon','javax.swing.JPanel','java.awt.GridLayout','javax.swing.ButtonGroup','javax.swing.JRadioButton','javax.swing.BorderFactory','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JComboBox','javax.swing.JSlider','javax.swing.JList','javax.swing.DefaultListModel',['org.openscience.jmol.app.surfacetool.SurfaceToolGUI','.SurfaceListCellRenderer'],'javax.swing.JScrollPane','java.awt.Dimension','org.openscience.jmol.app.jmolpanel.JmolPanel','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SurfaceToolGUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', ['javax.swing.WindowConstants', 'java.awt.event.WindowListener', 'java.awt.event.WindowFocusListener', 'javax.swing.event.ChangeListener', 'java.awt.event.ActionListener', 'javax.swing.event.ListSelectionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.histWinName=null;
this.slicerFrame=null;
this.slicer=null;
this.tabPanel=null;
this.objectsPanel=null;
this.topPanel=null;
this.angleUnitsPanel=null;
this.angleUnitsList=null;
this.originPanel=null;
this.viewCenterButton=null;
this.absoluteButton=null;
this.capCheck=null;
this.capPlanesPanel=null;
this.ghostPanel=null;
this.ghostCheck=null;
this.boundaryPlaneCheck=null;
this.sliderPanel=null;
this.normAnglePanel=null;
this.angleXYSlider=null;
this.angleZSlider=null;
this.positionThicknessPanel=null;
this.positionSlider=null;
this.thicknessSlider=null;
this.whichOrigin=null;
this.surfaceScrollPane=null;
this.surfaceList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_api_JmolViewer$org_openscience_jmol_app_HistoryFile$S$org_openscience_jmol_app_surfacetool_SurfaceTool', function (vwr, hfxile, winName, slicer) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(2))]);
C$.$init$.apply(this);
this.histWinName=winName;
this.slicer=slicer;
if (this.slicerFrame != null ) {
this.slicerFrame.setVisible$Z(true);
this.slicerFrame.toFront$();
} else {
this.slicerFrame=Clazz.new_($I$(3).c$$S,[$I$(4).$$S("SurfaceTool")]);
this.slicerFrame.setDefaultCloseOperation$I(2);
var imageName="org/openscience/jmol/app/images/icon.png";
var imageUrl=this.getClass$().getClassLoader$().getResource$S(imageName);
var jmolIcon=Clazz.new_($I$(5).c$$java_net_URL,[imageUrl]);
this.slicerFrame.setIconImage$java_awt_Image(jmolIcon.getImage$());
this.slicerFrame.addWindowFocusListener$java_awt_event_WindowFocusListener(this);
this.slicerFrame.addWindowListener$java_awt_event_WindowListener(this);
this.setOpaque$Z(true);
this.tabPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(2))]);
this.topPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[1, 0])]);
this.whichOrigin=Clazz.new_($I$(8));
this.originPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[0, 1])]);
if (slicer.getUseMolecular$()) {
this.viewCenterButton=Clazz.new_($I$(9).c$$S$Z,[$I$(4).$$S("View Center"), false]);
this.absoluteButton=Clazz.new_($I$(9).c$$S$Z,[$I$(4).$$S("Absolute"), true]);
} else {
this.viewCenterButton=Clazz.new_($I$(9).c$$S$Z,[$I$(4).$$S("View Center"), true]);
this.absoluteButton=Clazz.new_($I$(9).c$$S$Z,[$I$(4).$$S("Absolute"), false]);
}this.viewCenterButton.addActionListener$java_awt_event_ActionListener(this);
this.absoluteButton.addActionListener$java_awt_event_ActionListener(this);
this.whichOrigin.add$javax_swing_AbstractButton(this.viewCenterButton);
this.whichOrigin.add$javax_swing_AbstractButton(this.absoluteButton);
this.originPanel.add$java_awt_Component(this.viewCenterButton);
this.originPanel.add$java_awt_Component(this.absoluteButton);
this.originPanel.setBorder$javax_swing_border_Border($I$(10).createTitledBorder$S($I$(4).$$S("Origin")));
this.capPlanesPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[0, 1])]);
this.capCheck=Clazz.new_($I$(11).c$$S,[$I$(4).$$S("Cap")]);
this.capCheck.setToolTipText$S($I$(4).$$S("Caps slice with opaque surfaces.\nIgnores MOs and surfaces with interior layers."));
this.capCheck.setSelected$Z(slicer.getCapOn$());
this.capCheck.addActionListener$java_awt_event_ActionListener(this);
this.capPlanesPanel.add$java_awt_Component(this.capCheck);
this.boundaryPlaneCheck=Clazz.new_($I$(11).c$$S,[$I$(4).$$S("Slice Planes")]);
this.boundaryPlaneCheck.setToolTipText$S($I$(4).$$S("Shows planes at slicing surfaces."));
this.boundaryPlaneCheck.setSelected$Z(false);
slicer.showSliceBoundaryPlanes$Z(false);
this.boundaryPlaneCheck.addActionListener$java_awt_event_ActionListener(this);
this.capPlanesPanel.add$java_awt_Component(this.boundaryPlaneCheck);
this.ghostPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[0, 1])]);
this.ghostCheck=Clazz.new_($I$(11).c$$S,[$I$(4).$$S("Ghost On")]);
this.ghostCheck.setSelected$Z(slicer.getGhostOn$());
this.ghostCheck.addActionListener$java_awt_event_ActionListener(this);
this.ghostCheck.setToolTipText$S($I$(4).$$S("Shows an unsliced \"ghost\"."));
this.ghostPanel.add$java_awt_Component(this.ghostCheck);
this.topPanel.add$java_awt_Component(this.originPanel);
this.topPanel.add$java_awt_Component(this.capPlanesPanel);
this.topPanel.add$java_awt_Component(this.ghostPanel);
this.topPanel.setSize$I$I(200, 40);
this.sliderPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[0, 1])]);
this.normAnglePanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[0, 1])]);
this.angleUnitsPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(2))]);
var space=Clazz.new_($I$(12).c$$S,["   "]);
this.angleUnitsPanel.add$java_awt_Component$O(space, "West");
var angleUnits=slicer.getAngleUnitsList$();
this.angleUnitsList=Clazz.new_($I$(13).c$$TEA,[angleUnits]);
this.angleUnitsList.setSelectedIndex$I(slicer.getAngleUnits$());
this.angleUnitsList.addActionListener$java_awt_event_ActionListener(this);
this.angleUnitsPanel.add$java_awt_Component$O(this.angleUnitsList, "East");
var labelAndUnits=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[1, 0])]);
var sliderLabel=Clazz.new_($I$(12).c$$S$I,[$I$(4).$$S("Angle from X-axis in XY plane"), 0]);
sliderLabel.setAlignmentX$F(0.5);
labelAndUnits.add$java_awt_Component(sliderLabel);
labelAndUnits.add$java_awt_Component(this.angleUnitsPanel);
this.normAnglePanel.add$java_awt_Component(labelAndUnits);
this.angleXYSlider=Clazz.new_($I$(14).c$$I$I$I,[0, 180, 0]);
this.angleXYSlider.setMajorTickSpacing$I(30);
this.angleXYSlider.setPaintTicks$Z(true);
this.angleXYSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.normAnglePanel.add$java_awt_Component(this.angleXYSlider);
var sliderLabel2=Clazz.new_($I$(12).c$$S$I,[$I$(4).$$S("Angle from Z-axis"), 0]);
sliderLabel2.setAlignmentX$F(0.5);
this.normAnglePanel.add$java_awt_Component(sliderLabel2);
this.angleZSlider=Clazz.new_($I$(14).c$$I$I$I,[0, 180, 0]);
this.angleZSlider.setMajorTickSpacing$I(30);
this.angleZSlider.setPaintTicks$Z(true);
this.angleZSlider.addChangeListener$javax_swing_event_ChangeListener(this);
p$1.updateAngleSliders.apply(this, []);
this.normAnglePanel.add$java_awt_Component(this.angleZSlider);
this.normAnglePanel.setBorder$javax_swing_border_Border($I$(10).createTitledBorder$S($I$(4).$$S("Direction vector of normal to slice")));
this.sliderPanel.add$java_awt_Component(this.normAnglePanel);
this.positionThicknessPanel=Clazz.new_($I$(6).c$$java_awt_LayoutManager,[Clazz.new_($I$(7).c$$I$I,[0, 1])]);
var sliderLabel3=Clazz.new_($I$(12).c$$S$I,[$I$(4).$$S("Distance of slice from origin"), 0]);
sliderLabel3.setAlignmentX$F(0.5);
this.positionThicknessPanel.add$java_awt_Component(sliderLabel3);
var tempPos=((180 * (slicer.getSlicePosition$() - slicer.getPositionMin$()) / slicer.getThicknessMax$())|0);
this.positionSlider=Clazz.new_($I$(14).c$$I$I$I,[0, 180, tempPos]);
this.positionSlider.setMajorTickSpacing$I(30);
this.positionSlider.setPaintTicks$Z(true);
this.positionSlider.addChangeListener$javax_swing_event_ChangeListener(this);
p$1.updatePositionSlider.apply(this, []);
this.positionThicknessPanel.add$java_awt_Component(this.positionSlider);
var sliderLabel4=Clazz.new_($I$(12).c$$S$I,[$I$(4).$$S("Thickness of slice"), 0]);
sliderLabel4.setAlignmentX$F(0.5);
this.positionThicknessPanel.add$java_awt_Component(sliderLabel4);
this.thicknessSlider=Clazz.new_($I$(14).c$$I$I$I,[0, 180, ((180 * slicer.getSliceThickness$() / slicer.getThicknessMax$())|0)]);
this.thicknessSlider.setMajorTickSpacing$I(30);
this.thicknessSlider.setPaintTicks$Z(true);
this.thicknessSlider.addChangeListener$javax_swing_event_ChangeListener(this);
p$1.updateThicknessSlider.apply(this, []);
this.positionThicknessPanel.add$java_awt_Component(this.thicknessSlider);
this.sliderPanel.add$java_awt_Component(this.positionThicknessPanel);
this.tabPanel.add$java_awt_Component$O(this.topPanel, "North");
this.tabPanel.add$java_awt_Component$O(this.sliderPanel, "South");
this.objectsPanel=Clazz.new_($I$(6));
this.objectsPanel.setBorder$javax_swing_border_Border($I$(10).createTitledBorder$S($I$(4).$$S("Select Surface(s)")));
this.surfaceList=Clazz.new_($I$(15).c$$javax_swing_ListModel,[Clazz.new_($I$(16))]);
this.surfaceList.setCellRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(17), [this, null]));
this.surfaceList.addListSelectionListener$javax_swing_event_ListSelectionListener(this);
this.updateSurfaceList$();
this.surfaceScrollPane=Clazz.new_($I$(18).c$$java_awt_Component,[this.surfaceList]);
this.surfaceScrollPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(19).c$$I$I,[120, 300]));
this.objectsPanel.add$java_awt_Component(this.surfaceScrollPane);
this.add$java_awt_Component$O(this.tabPanel, "West");
this.add$java_awt_Component$O(this.objectsPanel, "East");
this.slicerFrame.setContentPane$java_awt_Container(this);
this.slicerFrame.addWindowListener$java_awt_event_WindowListener(this);
if ($I$(20).historyFile != null ) $I$(20).historyFile.repositionWindow$S$java_awt_Component$I$I$Z(winName, this.slicerFrame, 200, 300, true);
this.slicerFrame.pack$();
this.slicerFrame.setVisible$Z(true);
this.saveHistory$();
}}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getSource$() === this.angleUnitsList ) {
this.slicer.setAngleUnits$I(this.angleUnitsList.getSelectedIndex$());
p$1.updateAngleSliders.apply(this, []);
}if (e.getSource$() === this.viewCenterButton  || e.getSource$() === this.absoluteButton  ) {
if (this.absoluteButton.isSelected$() && !this.slicer.getUseMolecular$() ) {
this.slicer.setUseMolecular$Z(true);
this.slicer.setSurfaceToolParam$();
p$1.updatePositionSlider.apply(this, []);
}if (this.viewCenterButton.isSelected$() && this.slicer.getUseMolecular$() ) {
this.slicer.setUseMolecular$Z(false);
this.slicer.setSurfaceToolParam$();
p$1.updatePositionSlider.apply(this, []);
}}if (e.getSource$() === this.ghostCheck ) {
var isOn=this.ghostCheck.isSelected$();
this.slicer.setGhostOn$Z(isOn);
if (isOn) {
this.slicer.setCapOn$Z(false);
this.capCheck.setSelected$Z(false);
}p$1.sliceSelected.apply(this, []);
}if (e.getSource$() === this.boundaryPlaneCheck ) {
this.slicer.showSliceBoundaryPlanes$Z(this.boundaryPlaneCheck.isSelected$());
}if (e.getSource$() === this.capCheck ) {
var isOn=this.capCheck.isSelected$();
this.slicer.setCapOn$Z(isOn);
if (isOn) {
this.slicer.setGhostOn$Z(false);
this.ghostCheck.setSelected$Z(false);
}p$1.sliceSelected.apply(this, []);
}});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
var source=e.getSource$();
if (source === this.angleXYSlider  || source === this.angleZSlider  ) {
var tempAngleZ=(3.141592653589793 * this.angleZSlider.getValue$() / 180);
var tempAngleXY=(3.141592653589793 * this.angleXYSlider.getValue$() / 180);
this.slicer.setSliceAnglefromZ$F(tempAngleZ);
this.slicer.setSliceAngleXY$F(tempAngleXY);
if (!source.getValueIsAdjusting$()) p$1.sliceSelected.apply(this, []);
}if (source === this.positionSlider  || source === this.thicknessSlider  ) {
var tempThickness=this.thicknessSlider.getValue$() * this.slicer.getThicknessMax$() / 180;
var tempPos=this.positionSlider.getValue$() * this.slicer.getThicknessMax$() / 180 + this.slicer.getPositionMin$();
this.slicer.setSliceThickness$F(tempThickness);
this.slicer.setSlicePosition$F(tempPos);
if (!source.getValueIsAdjusting$()) p$1.sliceSelected.apply(this, []);
}});

Clazz.newMeth(C$, ['valueChanged$javax_swing_event_ListSelectionEvent','valueChanged$'], function (e) {
if (e.getValueIsAdjusting$()) return;
var whichList=e.getSource$();
if (whichList.isSelectionEmpty$()) return;
var selected=whichList.getSelectedIndices$();
if (selected != null ) {
var lastIndex=selected[(selected.length - 1)];
var surfaces=this.slicer.getSurfaces$();
var lastSurface=surfaces.get$I(lastIndex);
if (lastSurface.beenSliced) {
this.slicer.setSlice$F$F$F$F(lastSurface.slice.angleXY, lastSurface.slice.anglefromZ, lastSurface.slice.position, lastSurface.slice.thickness);
this.slicer.setCapOn$Z(lastSurface.capOn);
this.capCheck.setSelected$Z(lastSurface.capOn);
this.slicer.setGhostOn$Z(lastSurface.ghostOn);
this.ghostCheck.setSelected$Z(lastSurface.ghostOn);
p$1.updateAngleSliders.apply(this, []);
p$1.updatePositionSlider.apply(this, []);
p$1.updateThicknessSlider.apply(this, []);
}p$1.sliceSelected.apply(this, []);
}});

Clazz.newMeth(C$, 'sliceSelected', function () {
if (this.surfaceList == null ) return;
var whichSelected=this.surfaceList.getSelectedIndices$();
if (whichSelected == null  || whichSelected.length == 0 ) return;
for (var i=0; i < whichSelected.length; i++) {
var surfaces=this.slicer.getSurfaces$();
var k=whichSelected[i];
this.slicer.sliceObject$S$I(surfaces.get$I(k).id, surfaces.get$I(k).kind);
surfaces.get$I(k).beenSliced=true;
surfaces.get$I(k).capOn=this.slicer.getCapOn$();
surfaces.get$I(k).ghostOn=this.slicer.getGhostOn$();
surfaces.get$I(k).slice.setSlice$F$F$F$F$javajs_util_P3$javajs_util_V3$Z(this.slicer.getSliceAngleXY$(), this.slicer.getAnglefromZ$(), this.slicer.getSlicePosition$(), this.slicer.getSliceThickness$(), this.slicer.getCenter$(), this.slicer.getBoxVec$(), this.slicer.getUseMolecular$());
}
}, p$1);

Clazz.newMeth(C$, 'updatePositionSlider', function () {
var positionLabels=Clazz.new_($I$(21));
var temp="";
for (var i=0; i < 7; i++) {
var tempVal=(this.slicer.getPositionMin$() + i * 0.16666666666 * this.slicer.getThicknessMax$() );
if (Math.abs(tempVal) < 0.001 ) tempVal=0;
temp="" + new Float(tempVal).toString();
if (temp.length$() > 5) {
if (tempVal < 0 ) {
temp=temp.substring$I$I(0, 5);
} else {
temp=temp.substring$I$I(0, 4);
}}positionLabels.put$TK$TV(Integer.valueOf$I(i * 30), Clazz.new_($I$(12).c$$S,[temp]));
}
this.positionSlider.setLabelTable$java_util_Dictionary(positionLabels);
this.positionSlider.setPaintLabels$Z(true);
var tempPos=((180 * (this.slicer.getSlicePosition$() - this.slicer.getPositionMin$()) / this.slicer.getThicknessMax$())|0);
this.positionSlider.setValue$I(tempPos);
}, p$1);

Clazz.newMeth(C$, 'updateThicknessSlider', function () {
var thicknessLabels=Clazz.new_($I$(21));
var temp="";
for (var i=0; i < 7; i++) {
var tempVal=(i * 0.16666666666 * this.slicer.getThicknessMax$() );
temp="" + new Float(tempVal).toString();
if (temp.length$() > 5) {
temp=temp.substring$I$I(0, 4);
}thicknessLabels.put$TK$TV(Integer.valueOf$I(i * 30), Clazz.new_($I$(12).c$$S,[temp]));
}
this.thicknessSlider.setLabelTable$java_util_Dictionary(thicknessLabels);
this.thicknessSlider.setPaintLabels$Z(true);
var tempPos=((180 * this.slicer.getSliceThickness$() / this.slicer.getThicknessMax$())|0);
this.thicknessSlider.setValue$I(tempPos);
}, p$1);

Clazz.newMeth(C$, 'updateAngleSliders', function () {
var angleLabels=Clazz.new_($I$(21));
angleLabels.put$TK$TV(Integer.valueOf$I(0), Clazz.new_($I$(12).c$$S,["0"]));
switch (this.slicer.getAngleUnits$()) {
case 0:
angleLabels.put$TK$TV(Integer.valueOf$I(30), Clazz.new_($I$(12).c$$S,["30"]));
angleLabels.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(12).c$$S,["60"]));
angleLabels.put$TK$TV(Integer.valueOf$I(90), Clazz.new_($I$(12).c$$S,["90"]));
angleLabels.put$TK$TV(Integer.valueOf$I(120), Clazz.new_($I$(12).c$$S,["120"]));
angleLabels.put$TK$TV(Integer.valueOf$I(150), Clazz.new_($I$(12).c$$S,["150"]));
angleLabels.put$TK$TV(Integer.valueOf$I(180), Clazz.new_($I$(12).c$$S,["180"]));
break;
case 1:
angleLabels.put$TK$TV(Integer.valueOf$I(30), Clazz.new_($I$(12).c$$S,["0.52"]));
angleLabels.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(12).c$$S,["1.05"]));
angleLabels.put$TK$TV(Integer.valueOf$I(90), Clazz.new_($I$(12).c$$S,["1.75"]));
angleLabels.put$TK$TV(Integer.valueOf$I(120), Clazz.new_($I$(12).c$$S,["2.09"]));
angleLabels.put$TK$TV(Integer.valueOf$I(150), Clazz.new_($I$(12).c$$S,["2.62"]));
angleLabels.put$TK$TV(Integer.valueOf$I(180), Clazz.new_($I$(12).c$$S,["3.14"]));
break;
case 2:
angleLabels.put$TK$TV(Integer.valueOf$I(30), Clazz.new_($I$(12).c$$S,["33.3"]));
angleLabels.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(12).c$$S,["66.7"]));
angleLabels.put$TK$TV(Integer.valueOf$I(90), Clazz.new_($I$(12).c$$S,["100"]));
angleLabels.put$TK$TV(Integer.valueOf$I(120), Clazz.new_($I$(12).c$$S,["133"]));
angleLabels.put$TK$TV(Integer.valueOf$I(150), Clazz.new_($I$(12).c$$S,["167"]));
angleLabels.put$TK$TV(Integer.valueOf$I(180), Clazz.new_($I$(12).c$$S,["200"]));
break;
case 3:
angleLabels.put$TK$TV(Integer.valueOf$I(30), Clazz.new_($I$(12).c$$S,["1/12"]));
angleLabels.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(12).c$$S,["1/6"]));
angleLabels.put$TK$TV(Integer.valueOf$I(90), Clazz.new_($I$(12).c$$S,["1/4"]));
angleLabels.put$TK$TV(Integer.valueOf$I(120), Clazz.new_($I$(12).c$$S,["1/3"]));
angleLabels.put$TK$TV(Integer.valueOf$I(150), Clazz.new_($I$(12).c$$S,["5/12"]));
angleLabels.put$TK$TV(Integer.valueOf$I(180), Clazz.new_($I$(12).c$$S,["1/2"]));
break;
case 4:
var piStr="\u03c0";
angleLabels.put$TK$TV(Integer.valueOf$I(30), Clazz.new_($I$(12).c$$S,[piStr + "/6"]));
angleLabels.put$TK$TV(Integer.valueOf$I(60), Clazz.new_($I$(12).c$$S,[piStr + "/3"]));
angleLabels.put$TK$TV(Integer.valueOf$I(90), Clazz.new_($I$(12).c$$S,[piStr + "/2"]));
angleLabels.put$TK$TV(Integer.valueOf$I(120), Clazz.new_($I$(12).c$$S,["2" + piStr + "/3" ]));
angleLabels.put$TK$TV(Integer.valueOf$I(150), Clazz.new_($I$(12).c$$S,["5" + piStr + "/6" ]));
angleLabels.put$TK$TV(Integer.valueOf$I(180), Clazz.new_($I$(12).c$$S,[piStr]));
break;
}
this.angleXYSlider.setLabelTable$java_util_Dictionary(angleLabels);
this.angleXYSlider.setPaintLabels$Z(true);
this.angleZSlider.setLabelTable$java_util_Dictionary(angleLabels);
this.angleZSlider.setPaintLabels$Z(true);
var tempAngle=((180 * this.slicer.getSliceAngleXY$() / 3.141592653589793)|0);
this.angleXYSlider.setValue$I(tempAngle);
tempAngle=((180 * this.slicer.getAnglefromZ$() / 3.141592653589793)|0);
this.angleZSlider.setValue$I(tempAngle);
}, p$1);

Clazz.newMeth(C$, 'updateSurfaceList$', function () {
var listModel=this.surfaceList.getModel$();
listModel.removeAllElements$();
var size=this.slicer.getSurfaces$().size$();
for (var i=0; i < size; i++) {
listModel.addElement$TE(this.slicer.getSurfaces$().get$I(i));
}
});

Clazz.newMeth(C$, 'saveHistory$', function () {
$I$(20).addJmolWindowInfo$S$java_awt_Component$java_awt_Point(this.histWinName, this.slicerFrame, null);
});

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager', function (layout) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [layout]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (isDoubleBuffered) {
C$.superclazz.c$$Z.apply(this, [isDoubleBuffered]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager$Z', function (layout, isDoubleBuffered) {
C$.superclazz.c$$java_awt_LayoutManager$Z.apply(this, [layout, isDoubleBuffered]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getFrame$', function () {
return this.slicerFrame;
});

Clazz.newMeth(C$, 'toFront$', function () {
this.slicer.toFrontOrGotFocus$();
p$1.updateAngleSliders.apply(this, []);
p$1.updatePositionSlider.apply(this, []);
p$1.updateThicknessSlider.apply(this, []);
this.updateSurfaceList$();
this.slicerFrame.setVisible$Z(true);
this.slicerFrame.toFront$();
});

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent', function (e) {
this.slicer.toFrontOrGotFocus$();
p$1.updateAngleSliders.apply(this, []);
p$1.updatePositionSlider.apply(this, []);
p$1.updateThicknessSlider.apply(this, []);
this.updateSurfaceList$();
});

Clazz.newMeth(C$, 'windowLostFocus$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
this.slicer.toFrontOrGotFocus$();
p$1.updateAngleSliders.apply(this, []);
p$1.updatePositionSlider.apply(this, []);
p$1.updateThicknessSlider.apply(this, []);
this.updateSurfaceList$();
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
this.slicer.toFrontOrGotFocus$();
p$1.updateAngleSliders.apply(this, []);
p$1.updatePositionSlider.apply(this, []);
p$1.updateThicknessSlider.apply(this, []);
this.updateSurfaceList$();
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
this.slicer.toFrontOrGotFocus$();
p$1.updateAngleSliders.apply(this, []);
p$1.updatePositionSlider.apply(this, []);
p$1.updateThicknessSlider.apply(this, []);
this.updateSurfaceList$();
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
});
;
(function(){var C$=Clazz.newClass(P$.SurfaceToolGUI, "SurfaceListCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$O$I$Z$Z','getListCellRendererComponent$','getListCellRendererComponent$javax_swing_JList$TE$I$Z$Z'], function (list, value, index, isSelected, cellHasFocus) {
this.setText$S(" " + (value).id);
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(Clazz.new_($I$(1).c$$I,[(value).color]));
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(Clazz.new_($I$(1).c$$I,[(value).color]));
}this.setEnabled$Z(list.isEnabled$());
this.setFont$java_awt_Font(list.getFont$());
this.setOpaque$Z(true);
return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
