(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),I$=[[0,'org.jmol.i18n.GT',['org.openscience.jmol.app.janocchio.NMR_DisplayPanel','.PickAction'],['org.openscience.jmol.app.janocchio.NMR_DisplayPanel','.RotateAction'],['org.openscience.jmol.app.janocchio.NMR_DisplayPanel','.PopulationDisplayAction'],['org.openscience.jmol.app.janocchio.NMR_DisplayPanel','.FrameDeltaDisplayAction'],['org.openscience.jmol.app.janocchio.NMR_DisplayPanel','.SelectallAction'],['org.openscience.jmol.app.janocchio.NMR_DisplayPanel','.DeselectallAction']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NMR_DisplayPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.openscience.jmol.app.jmolpanel.DisplayPanel');
C$.$classes$=[['PopulationDisplayAction',0],['FrameDeltaDisplayAction',0],['SelectallAction',0],['DeselectallAction',0],['PickAction',0],['RotateAction',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['status','org.openscience.jmol.app.jmolpanel.StatusBar','guimap','org.openscience.jmol.app.janocchio.NmrGuiMap','viewer','org.openscience.jmol.app.janocchio.NMR_Viewer','frameDeltaDisplay','org.openscience.jmol.app.janocchio.FrameDeltaDisplay','populationDisplay','org.openscience.jmol.app.janocchio.PopulationDisplay']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_jmolpanel_JmolPanel', function (jmol) {
;C$.superclazz.c$$org_openscience_jmol_app_jmolpanel_JmolPanel.apply(this,[jmol]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (viewer) {
this.viewer=viewer;
this.vwr=viewer;
this.getSize$java_awt_Dimension(this.dimSize);
var d=(this.haveDisplay && this.dimSize.width > 0  ? this.dimSize : this.startupDim);
this.setSize$java_awt_Dimension(d);
this.setPreferredSize$java_awt_Dimension(d);
viewer.setScreenDimension$I$I(d.width, d.height);
});

Clazz.newMeth(C$, 'setPopulationDisplay$org_openscience_jmol_app_janocchio_PopulationDisplay', function (populationDisplay) {
this.populationDisplay=populationDisplay;
});

Clazz.newMeth(C$, 'setFrameDeltaDisplay$org_openscience_jmol_app_janocchio_FrameDeltaDisplay', function (frameDeltaDisplay) {
this.frameDeltaDisplay=frameDeltaDisplay;
});

Clazz.newMeth(C$, 'moveTo$S', function (move) {
if (this.viewer.getShowBbcage$() || this.viewer.getBooleanProperty$S("showUnitCell") ) this.viewer.evalStringQuiet$S(move);
 else this.viewer.evalStringQuiet$S("boundbox on;" + move + ";delay 1;boundbox off" );
});

Clazz.newMeth(C$, 'addActions$java_util_List', function (list) {
C$.superclazz.prototype.addActions$java_util_List.apply(this, [list]);
list.add$O(Clazz.new_($I$(2,1),[this, null]));
list.add$O(Clazz.new_($I$(3,1),[this, null]));
list.add$O(Clazz.new_($I$(4,1),[this, null]));
list.add$O(Clazz.new_($I$(5,1),[this, null]));
list.add$O(Clazz.new_($I$(6,1),[this, null]));
list.add$O(Clazz.new_($I$(7,1),[this, null]));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_DisplayPanel, "PopulationDisplayAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["populationDisplayCheck"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var cbmi=e.getSource$();
this.this$0.populationDisplay.setVisible$Z(cbmi.isSelected$());
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_DisplayPanel, "FrameDeltaDisplayAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["frameDeltaDisplayCheck"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var cbmi=e.getSource$();
this.this$0.frameDeltaDisplay.setVisible$Z(cbmi.isSelected$());
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_DisplayPanel, "SelectallAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["selectall"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.viewer.evalStringQuiet$S("select all");
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_DisplayPanel, "DeselectallAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["deselectall"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.viewer.evalStringQuiet$S("select none");
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_DisplayPanel, "PickAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["pick"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.viewer.setSelectionHalos$Z(false);
this.this$0.status.setStatus$I$S(1, $I$(1).$$S("Select Atoms"));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NMR_DisplayPanel, "RotateAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["rotate"]);C$.$init$.apply(this);
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.this$0.viewer.setSelectionHalos$Z(false);
this.this$0.status.setStatus$I$S(1, (e.getSource$()).getToolTipText$());
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
