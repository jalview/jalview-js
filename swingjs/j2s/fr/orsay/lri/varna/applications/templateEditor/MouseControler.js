(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),p$1={},I$=[[0,['fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','.RelativePosition'],['java.awt.geom.Point2D','.Double'],'java.awt.Point',['fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI','.Tool'],'fr.orsay.lri.varna.applications.templateEditor.UnpairedRegion','fr.orsay.lri.varna.applications.templateEditor.Helix']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MouseControler", null, null, ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.MouseWheelListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._granularity=8;
this.HYSTERESIS_DISTANCE=10;
this._currentMode=$I$(1).RP_OUTER;
this.movingView=false;
this._clickedPos=Clazz.new_($I$(2,1));
this._clickedPosScreen=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['movingView'],'I',['_granularity','HYSTERESIS_DISTANCE'],'O',['_sp','fr.orsay.lri.varna.applications.templateEditor.TemplatePanel','_elem','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','_ui','fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI','_currentMode','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement.RelativePosition','_clickedPos','java.awt.geom.Point2D.Double','_clickedPosScreen','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel$fr_orsay_lri_varna_applications_templateEditor_TemplateEditorPanelUI', function (sp, ui) {
;C$.$init$.apply(this);
this._sp=sp;
this._elem=null;
this._ui=ui;
}, 1);

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent', function (e) {
if (e.getWheelRotation$() == -1) {
this._sp.zoomIn$();
} else {
this._sp.zoomOut$();
}e.consume$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$, 'getLogicalMouseCoords$java_awt_event_MouseEvent', function (event) {
return Clazz.new_([event.getX$() / this._sp.getScaleFactor$(), event.getY$() / this._sp.getScaleFactor$()],$I$(2,1).c$$D$D);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (arg0) {
this.movingView=false;
this._clickedPos=Clazz.new_([arg0.getX$(), arg0.getY$()],$I$(2,1).c$$D$D);
this._clickedPosScreen.x=arg0.getXOnScreen$();
this._clickedPosScreen.y=arg0.getYOnScreen$();
if (arg0.getButton$() == 2) {
this.movingView=true;
} else {
var logicalMousePos=this.getLogicalMouseCoords$java_awt_event_MouseEvent(arg0);
var elem=this._sp.getElementAt$D$D(logicalMousePos.getX$(), logicalMousePos.getY$());
this._sp.Unselect$();
if (elem == null ) {
if (arg0.getButton$() == 1 && this._ui.getSelectedTool$() === $I$(4).CREATE_HELIX  ) {
this._currentMode=$I$(1).RP_EDIT_START;
} else if ((arg0.getButton$() == 1 && this._ui.getSelectedTool$() === $I$(4).CREATE_UNPAIRED  )) {
var n=Clazz.new_([logicalMousePos.getX$(), logicalMousePos.getY$(), this._sp.getTemplate$()],$I$(5,1).c$$D$D$fr_orsay_lri_varna_models_templates_RNATemplate);
n.setDominantColor$java_awt_Color(this._sp.nextBackgroundColor$());
this._ui.addElementUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(n);
this._sp.setSelected$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(n);
this._sp.repaint$();
this._elem=n;
this._currentMode=$I$(1).RP_EDIT_START;
}} else if (arg0.getButton$() == 1) {
this._currentMode=elem.getRelativePosition$D$D(logicalMousePos.getX$(), logicalMousePos.getY$());
this._sp.setSelected$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(elem);
this._elem=elem;
switch (this._currentMode) {
case $I$(1).RP_EDIT_START:
case $I$(1).RP_EDIT_END:
case $I$(1).RP_EDIT_TANGENT_5:
case $I$(1).RP_EDIT_TANGENT_3:
break;
case $I$(1).RP_INNER_MOVE:
break;
case $I$(1).RP_INNER_GENERAL:
this._currentMode=$I$(1).RP_INNER_MOVE;
break;
case $I$(1).RP_CONNECT_END3:
case $I$(1).RP_CONNECT_END5:
case $I$(1).RP_CONNECT_START5:
case $I$(1).RP_CONNECT_START3:
{
var al=this._sp.getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(elem, this._currentMode);
var isConnected=(al != null );
if (isConnected) {
var c=this._sp.getConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(elem, this._currentMode);
this._ui.removeConnectionUI$fr_orsay_lri_varna_applications_templateEditor_Connection(c);
var p1=c._h1;
var p2=c._h2;
var p1IsHelix=(Clazz.instanceOf(p1, "fr.orsay.lri.varna.applications.templateEditor.Helix"));
var p1IsUnpaired=(Clazz.instanceOf(p1, "fr.orsay.lri.varna.applications.templateEditor.UnpairedRegion"));
var p2IsHelix=(Clazz.instanceOf(p2, "fr.orsay.lri.varna.applications.templateEditor.Helix"));
var p2IsUnpaired=(Clazz.instanceOf(p2, "fr.orsay.lri.varna.applications.templateEditor.UnpairedRegion"));
var p1StillAttached=(p1 === elem );
if ((p1IsUnpaired && p2IsHelix )) {
p1StillAttached=false;
}if (p1StillAttached) {
this._elem=p2;
this._currentMode=c._edge2;
} else if (!p1StillAttached) {
this._elem=p1;
this._currentMode=c._edge1;
}}if (Clazz.instanceOf(this._elem, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
this._sp.setPointerPos$java_awt_geom_Point2D_Double(Clazz.new_([logicalMousePos.getX$(), logicalMousePos.getY$()],$I$(2,1).c$$D$D));
this._sp.setSelectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(this._currentMode);
}this._sp.setSelected$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(this._elem);
}break;
case $I$(1).RP_OUTER:
this._sp.Unselect$();
this._elem=null;
}
this._sp.repaint$();
}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (arg0) {
this.movingView=false;
var logicalMousePos=this.getLogicalMouseCoords$java_awt_event_MouseEvent(arg0);
if (this._elem != null ) {
switch (this._currentMode) {
case $I$(1).RP_EDIT_START:
case $I$(1).RP_EDIT_END:
{
if (Clazz.instanceOf(this._elem, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
var h=this._elem;
if (h.getPos$().distance$java_awt_geom_Point2D(h.getExtent$()) < 10.0 ) {
this._ui.removeElementUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(this._elem);
this._sp.Unselect$();
}}}break;
case $I$(1).RP_INNER_MOVE:
break;
case $I$(1).RP_CONNECT_END3:
case $I$(1).RP_CONNECT_END5:
case $I$(1).RP_CONNECT_START5:
case $I$(1).RP_CONNECT_START3:
{
var t=this._sp.getElementAt$D$D$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(logicalMousePos.getX$(), logicalMousePos.getY$(), this._elem);
if (t != null ) {
var edge=t.getClosestEdge$D$D(logicalMousePos.getX$(), logicalMousePos.getY$());
this._ui.addConnectionUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(this._elem, this._currentMode, t, edge);
}this._sp.setSelectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition($I$(1).RP_OUTER);
}break;
}
this._elem=null;
this._sp.rescale$();
}this._sp.setSelectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition($I$(1).RP_OUTER);
this._currentMode=$I$(1).RP_OUTER;
this._sp.repaint$();
});

Clazz.newMeth(C$, 'projectPoint$D$D$java_awt_geom_Point2D_Double', function (x, y, ref) {
var result=Clazz.new_($I$(2,1));
var nx=x - ref.x;
var ny=y - ref.y;
var tmp=4.9E-324;
for (var i=0; i < this._granularity; i++) {
var angle=2.0 * 3.141592653589793 * (i / this._granularity) ;
var dx=Math.cos(angle);
var dy=Math.sin(angle);
var norm=nx * dx + ny * dy;
if (norm > tmp ) {
tmp=norm;
result.x=ref.x + dx * norm;
result.y=ref.y + dy * norm;
}}
return result;
}, p$1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (arg0) {
if (this.movingView) {
var trans=Clazz.new_([arg0.getXOnScreen$() - this._clickedPosScreen.x, arg0.getYOnScreen$() - this._clickedPosScreen.y],$I$(3,1).c$$I$I);
this._sp.translateView$java_awt_Point(trans);
this._clickedPosScreen.x=arg0.getXOnScreen$();
this._clickedPosScreen.y=arg0.getYOnScreen$();
} else {
var logicalMousePos=this.getLogicalMouseCoords$java_awt_event_MouseEvent(arg0);
if (this._elem == null ) {
switch (this._currentMode) {
case $I$(1).RP_EDIT_START:
{
if (this._clickedPos.distance$D$D(arg0.getX$(), arg0.getY$()) > 10 ) {
System.out.println$S("Creating Helix...");
var h1=Clazz.new_([logicalMousePos.getX$(), logicalMousePos.getY$(), this._sp.getTemplate$(), this._sp.getRNAComponents$()],$I$(6,1).c$$D$D$fr_orsay_lri_varna_models_templates_RNATemplate$java_util_List);
h1.setDominantColor$java_awt_Color(this._sp.nextBackgroundColor$());
this._ui.addElementUI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(h1);
this._sp.setSelected$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(h1);
this._sp.repaint$();
this._elem=h1;
}}break;
}
} else {
if (Clazz.instanceOf(this._elem, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
var h=this._elem;
switch (this._currentMode) {
case $I$(1).RP_EDIT_START:
{
var d=p$1.projectPoint$D$D$java_awt_geom_Point2D_Double.apply(this, [logicalMousePos.getX$(), logicalMousePos.getY$(), h.getPos$()]);
this._ui.setHelixExtentUI$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D(h, d.x, d.y);
}break;
case $I$(1).RP_EDIT_END:
{
var d=p$1.projectPoint$D$D$java_awt_geom_Point2D_Double.apply(this, [logicalMousePos.getX$(), logicalMousePos.getY$(), h.getExtent$()]);
this._ui.setHelixPosUI$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D(h, d.x, d.y);
}break;
case $I$(1).RP_INNER_MOVE:
this._ui.moveHelixUI$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D(h, logicalMousePos.getX$(), logicalMousePos.getY$());
break;
case $I$(1).RP_CONNECT_END3:
case $I$(1).RP_CONNECT_END5:
case $I$(1).RP_CONNECT_START5:
case $I$(1).RP_CONNECT_START3:
this._sp.setPointerPos$java_awt_geom_Point2D_Double(Clazz.new_([logicalMousePos.getX$(), logicalMousePos.getY$()],$I$(2,1).c$$D$D));
this._sp.repaint$();
break;
}
} else if (Clazz.instanceOf(this._elem, "fr.orsay.lri.varna.applications.templateEditor.UnpairedRegion")) {
var ur=this._elem;
var p=Clazz.new_([logicalMousePos.getX$(), logicalMousePos.getY$()],$I$(2,1).c$$D$D);
switch (this._currentMode) {
case $I$(1).RP_EDIT_TANGENT_5:
{
this._ui.setEdge5TangentUI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D(ur, logicalMousePos.getX$(), logicalMousePos.getY$());
this._sp.repaint$();
break;
}case $I$(1).RP_EDIT_TANGENT_3:
{
this._ui.setEdge3TangentUI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D(ur, logicalMousePos.getX$(), logicalMousePos.getY$());
this._sp.repaint$();
break;
}case $I$(1).RP_INNER_MOVE:
{
this._ui.moveUnpairedUI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D(ur, logicalMousePos.getX$(), logicalMousePos.getY$());
this._sp.repaint$();
break;
}case $I$(1).RP_CONNECT_START5:
this._ui.setEdge5UI$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$D$D(ur, logicalMousePos.getX$(), logicalMousePos.getY$());
break;
case $I$(1).RP_CONNECT_END3:
this._ui.setEdge3UI$fr_orsay_lri_varna_applications_templateEditor_UnpairedRegion$D$D(ur, logicalMousePos.getX$(), logicalMousePos.getY$());
break;
}
this._sp.repaint$();
}}}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (arg0) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
