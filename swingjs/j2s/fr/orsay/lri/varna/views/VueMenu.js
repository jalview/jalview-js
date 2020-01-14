(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'javax.swing.JCheckBoxMenuItem','java.util.ArrayList','java.awt.Point','fr.orsay.lri.varna.controlers.ControleurMenu',['javax.swing.JPopupMenu','.Separator'],'javax.swing.JMenuItem','javax.swing.KeyStroke','javax.swing.JMenu']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueMenu", null, 'javax.swing.JPopupMenu');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._controlerMenu=null;
this._itemOptionSpecialBaseColored=null;
this._itemShowWarnings=null;
this._itemDrawBackbone=null;
this._itemOptionGapsBaseColored=null;
this._itemOptionBondsColored=null;
this._itemShowNCBP=null;
this._itemShowOnlyPlanar=null;
this._itemFlatExteriorLoop=null;
this._itemShowColorMap=null;
this._dashBasesColor=null;
this._disabled=null;
this._rotation=null;
this._bpHeightIncrement=null;
this._spawnOrigin=null;
this._subMenuBases=null;
this._selectionMenuIndex=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._itemOptionSpecialBaseColored=Clazz.new_($I$(1).c$$S$Z,["Custom colored", false]);
this._itemShowWarnings=Clazz.new_($I$(1).c$$S$Z,["Show warnings", false]);
this._itemDrawBackbone=Clazz.new_($I$(1).c$$S$Z,["Draw backbone", true]);
this._itemOptionGapsBaseColored=Clazz.new_($I$(1).c$$S$Z,["Custom colored", false]);
this._itemOptionBondsColored=Clazz.new_($I$(1).c$$S$Z,["Use base color for base-pairs", false]);
this._itemShowNCBP=Clazz.new_($I$(1).c$$S$Z,["Show non-canonical BPs", true]);
this._itemShowOnlyPlanar=Clazz.new_($I$(1).c$$S$Z,["Hide tertiary BPs", false]);
this._itemFlatExteriorLoop=Clazz.new_($I$(1).c$$S$Z,["Flat exterior loop", false]);
this._itemShowColorMap=Clazz.new_($I$(1).c$$S$Z,["Show color map", false]);
this._disabled=Clazz.new_($I$(2));
this._spawnOrigin=Clazz.new_($I$(3).c$$I$I,[-1, -1]);
this._selectionMenuIndex=null;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
Clazz.super_(C$, this,1);
this._vp=vp;
this._controlerMenu=Clazz.new_($I$(4).c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_views_VueMenu,[this._vp, this]);
}, 1);

Clazz.newMeth(C$, 'addTitle$S$Z', function (title, keep) {
var sep=Clazz.new_($I$(5));
var titleItem=Clazz.new_($I$(6).c$$S,[" " + title]);
var previousFont=titleItem.getFont$();
var futureFont=previousFont.deriveFont$I(1).deriveFont$F(previousFont.getSize$() + 1.0);
titleItem.setFont$java_awt_Font(futureFont);
var current=titleItem.getForeground$();
var future=current.brighter$().brighter$();
titleItem.setForeground$java_awt_Color(future);
this.add$javax_swing_JMenuItem(titleItem);
this.add$java_awt_Component(sep);
if (!keep) {
this._disabled.add$TE(sep);
this._disabled.add$TE(titleItem);
}}, p$1);

Clazz.newMeth(C$, 'configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container', function (mi, command, keyStroke, par) {
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container$Z.apply(this, [mi, command, keyStroke, par, false]);
}, p$1);

Clazz.newMeth(C$, 'configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container$Z', function (mi, command, keyStroke, par, disabled) {
mi.setActionCommand$S(command);
mi.addActionListener$java_awt_event_ActionListener(this._controlerMenu);
if (keyStroke != null ) if (!keyStroke.equals$O("")) mi.setAccelerator$javax_swing_KeyStroke($I$(7).getKeyStroke$S(keyStroke));
if (disabled) {
this._disabled.add$TE(mi);
}par.add$java_awt_Component(mi);
}, p$1);

Clazz.newMeth(C$, 'createMenuItem$S$S$S$java_awt_Container$Z', function (caption, command, keyStroke, par, disabled) {
var mi=Clazz.new_($I$(6).c$$S,[caption]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container$Z.apply(this, [mi, command, keyStroke, par, disabled]);
return mi;
}, p$1);

Clazz.newMeth(C$, 'createMenuItem$S$S$S$java_awt_Container', function (caption, command, keyStroke, par) {
return p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, [caption, command, keyStroke, par, false]);
}, p$1);

Clazz.newMeth(C$, 'updateDialog$', function () {
for (var i=0; i < this._disabled.size$(); i++) {
var j=this._disabled.get$I(i);
j.setVisible$Z(this._vp.isModifiable$());
}
this._itemOptionSpecialBaseColored.setState$Z(this._vp.getColorSpecialBases$());
this._itemShowWarnings.setState$Z(this._vp.getShowWarnings$());
this._itemOptionGapsBaseColored.setState$Z(this._vp.getColorGapsBases$());
this._itemOptionGapsBaseColored.setEnabled$Z(this._vp.isComparisonMode$());
this._dashBasesColor.setEnabled$Z(this._vp.isComparisonMode$());
this._rotation.setEnabled$Z(this._vp.getDrawMode$() != 4);
this._bpHeightIncrement.setEnabled$Z(this._vp.getDrawMode$() == 4);
this._itemOptionBondsColored.setState$Z(this._vp.getUseBaseColorsForBPs$());
this._itemShowNCBP.setState$Z(this._vp.getShowNonCanonicalBP$());
this._itemShowOnlyPlanar.setState$Z(!this._vp.getShowNonPlanarBP$());
this._itemShowColorMap.setState$Z(this._vp.getColorMapVisible$());
this._itemFlatExteriorLoop.setState$Z(this._vp.getFlatExteriorLoop$());
this._itemFlatExteriorLoop.setEnabled$Z(this._vp.getDrawMode$() == 2);
});

Clazz.newMeth(C$, 'buildPopupMenu$', function () {
p$1.addTitle$S$Z.apply(this, ["File", true]);
p$1.fileMenu.apply(this, []);
p$1.exportMenu.apply(this, []);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Print...", "print", "control P", this]);
this.addSeparator$();
p$1.addTitle$S$Z.apply(this, ["Display", true]);
p$1.viewMenu.apply(this, []);
p$1.displayMenu.apply(this, []);
var sep=Clazz.new_($I$(5));
this.add$java_awt_Component(sep);
this._disabled.add$TE(sep);
p$1.addTitle$S$Z.apply(this, ["Edit", false]);
p$1.editRNAMenu.apply(this, []);
p$1.redrawMenu.apply(this, []);
p$1.colorClassesMenu.apply(this, []);
p$1.annotationMenu.apply(this, []);
this._disabled.add$TE(this._itemShowNCBP);
this._disabled.add$TE(this._itemShowOnlyPlanar);
p$1.aboutMenu.apply(this, []);
});

Clazz.newMeth(C$, 'annotationMenu', function () {
var submenuAnnotations=Clazz.new_($I$(8).c$$S,["Annotations"]);
var addAnnotations=Clazz.new_($I$(8).c$$S,["New"]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Here", "annotationsaddPosition", "", addAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Base", "annotationsaddBase", "", addAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Loop", "annotationsaddLoop", "", addAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Helix", "annotationsaddHelix", "", addAnnotations]);
var sep=Clazz.new_($I$(5));
addAnnotations.add$java_awt_Component(sep);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Region", "annotationsaddRegion", "", addAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Chem. prob.", "annotationsaddChemProb", "", addAnnotations]);
submenuAnnotations.add$javax_swing_JMenuItem(addAnnotations);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Edit from list...", "annotationsedit", "", submenuAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Remove from list...", "annotationsremove", "", submenuAnnotations]);
submenuAnnotations.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Auto 5\'/3\'", "annotationsautoextremites", "control alt Q", submenuAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Auto helices", "annotationsautohelices", "control Q", submenuAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Auto interior loops", "annotationsautointerior", "alt shift Q", submenuAnnotations]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Auto terminal loops", "annotationsautoterminal", "control shift Q", submenuAnnotations]);
this.add$javax_swing_JMenuItem(submenuAnnotations);
}, p$1);

Clazz.newMeth(C$, 'fileMenu', function () {
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["New...", "userInput", "control N", this, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Open...", "file", "control O", this, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Save...", "saveas", "control S", this, true]);
var submenuSave=Clazz.new_($I$(8).c$$S,["Save as"]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["DBN (Vienna)", "dbn", "", submenuSave]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["BPSEQ", "bpseq", "", submenuSave]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["CT", "ct", "", submenuSave]);
this.add$javax_swing_JMenuItem(submenuSave);
}, p$1);

Clazz.newMeth(C$, 'exportMenu', function () {
var submenuExport=Clazz.new_($I$(8).c$$S,["Export"]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["SVG", "svg", "", submenuExport]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["PGF/TIKZ", "tikz", "", submenuExport]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["XFIG", "xfig", "", submenuExport]);
submenuExport.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["EPS", "eps", "", submenuExport]);
submenuExport.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["PNG", "png", "", submenuExport]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["JPEG", "jpeg", "", submenuExport]);
this.add$javax_swing_JMenuItem(submenuExport);
}, p$1);

Clazz.newMeth(C$, 'displayMenu', function () {
var subMenuBasePairs=Clazz.new_($I$(8).c$$S,["Base Pairs"]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["BP style...", "bpstyle", "control shift P", subMenuBasePairs]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container.apply(this, [this._itemShowNCBP, "shownc", "control W", subMenuBasePairs]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container.apply(this, [this._itemShowOnlyPlanar, "shownp", "control E", subMenuBasePairs]);
var subMenuNSBases=Clazz.new_($I$(8).c$$S,["Non-standard bases"]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container.apply(this, [this._itemOptionSpecialBaseColored, "specialbasecolored", "control J", subMenuNSBases]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Color", "specialBasesColor", "control shift J", subMenuNSBases]);
var subMenuGapsBases=Clazz.new_($I$(8).c$$S,["\'Gaps\' bases"]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container.apply(this, [this._itemOptionGapsBaseColored, "dashbasecolored", "control D", subMenuGapsBases]);
this._dashBasesColor=p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Color", "dashBasesColor", "control shift D", subMenuGapsBases]);
var sep=Clazz.new_($I$(5));
this._disabled.add$TE(sep);
var submenuStyle=Clazz.new_($I$(8).c$$S,["RNA style"]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Toggle draw bases", "gaspin", "alt G", submenuStyle, true]);
submenuStyle.add$javax_swing_JMenuItem(subMenuBasePairs);
submenuStyle.addSeparator$();
submenuStyle.add$javax_swing_JMenuItem(subMenuNSBases);
submenuStyle.add$javax_swing_JMenuItem(subMenuGapsBases);
submenuStyle.add$java_awt_Component(sep);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Backbone color", "backbone", "control K", submenuStyle, true]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container.apply(this, [this._itemDrawBackbone, "showbackbone", "alt B", submenuStyle]);
var submenuTitle=Clazz.new_($I$(8).c$$S,["Title"]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Set Title", "setTitle", "control T", submenuTitle, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Font", "titleDisplay", "control shift T", submenuTitle, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Color", "titleColor", "control alt T", submenuTitle, true]);
this._disabled.add$TE(submenuTitle);
var submenuColorMap=Clazz.new_($I$(8).c$$S,["Color map"]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container$Z.apply(this, [this._itemShowColorMap, "toggleshowcolormap", "control shift L", submenuColorMap, false]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Caption", "colormapcaption", "control shift C", submenuColorMap, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Style...", "colormapstyle", "control L", submenuColorMap, false]);
submenuColorMap.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Edit values...", "colormapvalues", "shift L", submenuColorMap, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Load values...", "colormaploadvalues", "control shift K", submenuColorMap, true]);
this._disabled.add$TE(submenuColorMap);
var submenuMisc=Clazz.new_($I$(8).c$$S,["Misc"]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Num. period.", "numPeriod", "control M", submenuMisc]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Background color", "background", "control G", submenuMisc]);
submenuMisc.add$javax_swing_JMenuItem(submenuTitle);
this.add$javax_swing_JMenuItem(submenuStyle);
this.add$javax_swing_JMenuItem(submenuColorMap);
this.add$javax_swing_JMenuItem(submenuMisc);
}, p$1);

Clazz.newMeth(C$, 'editRNAMenu', function () {
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Bases...", "editallbases", "", this, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["BasePairs...", "editallbps", "", this, true]);
}, p$1);

Clazz.newMeth(C$, 'redrawMenu', function () {
var submenuRedraw=Clazz.new_($I$(8).c$$S,["Redraw"]);
this._disabled.add$TE(submenuRedraw);
var submenuAlgorithms=Clazz.new_($I$(8).c$$S,["Algorithm"]);
this._disabled.add$TE(submenuAlgorithms);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Linear", "line", "control 1", submenuAlgorithms, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Circular", "circular", "control 2", submenuAlgorithms, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Radiate", "radiate", "control 3", submenuAlgorithms, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["NAView", "naview", "control 4", submenuAlgorithms, true]);
submenuRedraw.add$javax_swing_JMenuItem(submenuAlgorithms);
this._bpHeightIncrement=p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["BP height increment", "bpheightincrement", "control H", submenuRedraw]);
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container$Z.apply(this, [this._itemFlatExteriorLoop, "flat", "control F", submenuRedraw, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Space between bases", "spaceBetweenBases", "control shift S", submenuRedraw, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Reset", "reset", "control shift R", submenuRedraw, true]);
this.add$javax_swing_JMenuItem(submenuRedraw);
}, p$1);

Clazz.newMeth(C$, 'warningMenu', function () {
p$1.configMenuItem$javax_swing_JMenuItem$S$S$java_awt_Container$Z.apply(this, [this._itemShowWarnings, "showwarnings", "", this, true]);
}, p$1);

Clazz.newMeth(C$, 'viewMenu', function () {
var submenuView=Clazz.new_($I$(8).c$$S,["View"]);
var zoomDisplay=Clazz.new_($I$(8).c$$S,["Zoom"]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["25%", "zoom25", "", zoomDisplay]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["50%", "zoom50", "", zoomDisplay]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["100%", "zoom100", "", zoomDisplay]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["150%", "zoom150", "", zoomDisplay]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["200%", "zoom200", "", zoomDisplay]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Custom", "zoom", "control Z", zoomDisplay]);
submenuView.add$javax_swing_JMenuItem(zoomDisplay);
this._rotation=p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Rotation...", "rotation", "control R", submenuView]);
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Rescale...", "rescale", "", submenuView]);
submenuView.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["Border size", "borderSize", "control B", submenuView]);
this.add$javax_swing_JMenuItem(submenuView);
}, p$1);

Clazz.newMeth(C$, 'addSelectionMenu$javax_swing_JMenuItem', function (s) {
this._selectionMenuIndex=s;
this._disabled.add$TE(s);
this.insert$java_awt_Component$I(s, this.getComponentCount$() - 2);
});

Clazz.newMeth(C$, 'removeSelectionMenu$', function () {
if (this._selectionMenuIndex != null ) {
this.remove$java_awt_Component(this._selectionMenuIndex);
this._selectionMenuIndex=null;
}});

Clazz.newMeth(C$, 'colorClassesMenu', function () {
this._subMenuBases=Clazz.new_($I$(8).c$$S,["Colors"]);
this._disabled.add$TE(this._subMenuBases);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["By Base", "eachKind", "control U", this._subMenuBases, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["By BP", "eachCouple", "shift U", this._subMenuBases, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["By Position", "eachBase", "alt U", this._subMenuBases, true]);
this.add$javax_swing_JMenuItem(this._subMenuBases);
}, p$1);

Clazz.newMeth(C$, 'addColorOptions$javax_swing_JMenu', function (submenu) {
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Fill Color", submenu.getActionCommand$() + ",InnerColor", "", submenu, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Stroke Color", submenu.getActionCommand$() + ",OutlineColor", "", submenu, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Label Color", submenu.getActionCommand$() + ",NameColor", "", submenu, true]);
submenu.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["BP Color", submenu.getActionCommand$() + ",BPColor", "", submenu, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["BP Thickness", submenu.getActionCommand$() + ",BPThickness", "", submenu, true]);
submenu.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Number Color", submenu.getActionCommand$() + ",NumberColor", "", submenu, true]);
});

Clazz.newMeth(C$, 'aboutMenu', function () {
this.addSeparator$();
p$1.createMenuItem$S$S$S$java_awt_Container.apply(this, ["About VARNA", "about", "control A", this]);
}, p$1);

Clazz.newMeth(C$, 'addAnnotationMenu$javax_swing_JMenu', function (menu) {
this.addAnnotationMenu$javax_swing_JMenu$Z(menu, false);
});

Clazz.newMeth(C$, 'addAnnotationMenu$javax_swing_JMenu$Z', function (menu, existingAnnot) {
var title="Annotation";
if (existingAnnot) {
var debut="";
var texte=this._vp.get_selectedAnnotation$().getTexte$();
if (texte.length$() < 5) debut=texte;
 else debut=texte.substring$I$I(0, 5) + "...";
title="Annotation: " + debut;
}var menuAnnotation=Clazz.new_($I$(8).c$$S,[title]);
if (!existingAnnot) p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Add", menu.getActionCommand$() + "annotationadd", "", menuAnnotation, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Edit", menu.getActionCommand$() + "annotationedit", "", menuAnnotation, true]);
p$1.createMenuItem$S$S$S$java_awt_Container$Z.apply(this, ["Remove", menu.getActionCommand$() + "annotationremove", "", menuAnnotation, true]);
menu.add$javax_swing_JMenuItem(menuAnnotation);
});

Clazz.newMeth(C$, 'getSerialVersionUID$', function () {
return 1;
}, 1);

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'get_controleurMenu$', function () {
return this._controlerMenu;
});

Clazz.newMeth(C$, 'get_itemOptionSpecialBaseColored$', function () {
return this._itemOptionSpecialBaseColored;
});

Clazz.newMeth(C$, 'get_itemShowWarnings$', function () {
return this._itemShowWarnings;
});

Clazz.newMeth(C$, 'get_itemOptionDashBaseColored$', function () {
return this._itemOptionGapsBaseColored;
});

Clazz.newMeth(C$, 'set_controleurMenu$fr_orsay_lri_varna_controlers_ControleurMenu', function (menu) {
this._controlerMenu=menu;
});

Clazz.newMeth(C$, 'set_itemOptionSpecialBaseColored$javax_swing_JCheckBoxMenuItem', function (optionSpecialBaseColored) {
this._itemOptionSpecialBaseColored=optionSpecialBaseColored;
});

Clazz.newMeth(C$, 'set_itemShowWarnings$javax_swing_JCheckBoxMenuItem', function (showWarnings) {
this._itemShowWarnings=showWarnings;
});

Clazz.newMeth(C$, 'set_itemOptionDashBaseColored$javax_swing_JCheckBoxMenuItem', function (optionDashBaseColored) {
this._itemOptionGapsBaseColored=optionDashBaseColored;
});

Clazz.newMeth(C$, 'get_rotation$', function () {
return this._rotation;
});

Clazz.newMeth(C$, 'set_rotation$javax_swing_JMenuItem', function (_rotation) {
this._rotation=_rotation;
});

Clazz.newMeth(C$, 'get_itemOptionBondsColored$', function () {
return this._itemOptionBondsColored;
});

Clazz.newMeth(C$, 'set_itemOptionBondsColored$javax_swing_JCheckBoxMenuItem', function (optionBondsColored) {
this._itemOptionBondsColored=optionBondsColored;
});

Clazz.newMeth(C$, 'show$java_awt_Component$I$I', function (invoker, x, y) {
this._spawnOrigin=Clazz.new_($I$(3).c$$I$I,[x, y]);
C$.superclazz.prototype.show$java_awt_Component$I$I.apply(this, [invoker, x, y]);
});

Clazz.newMeth(C$, 'getSpawnPoint$', function () {
return this._spawnOrigin;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
