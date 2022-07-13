(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),p$1={},I$=[[0,'java.awt.Color',['fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','.RelativePosition'],['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI','java.util.ArrayList','java.util.Hashtable','fr.orsay.lri.varna.models.templates.RNATemplate','fr.orsay.lri.varna.applications.templateEditor.MouseControler','java.awt.BasicStroke','fr.orsay.lri.varna.applications.templateEditor.Couple','fr.orsay.lri.varna.applications.templateEditor.Connection','java.util.Stack','java.util.HashMap','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','java.awt.RenderingHints','java.awt.Rectangle','java.awt.Dimension','fr.orsay.lri.varna.applications.templateEditor.Helix','fr.orsay.lri.varna.applications.templateEditor.UnpairedRegion','javax.swing.JOptionPane']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TemplatePanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._nextBackgroundColor=0;
this.scaleFactor=C$.scaleFactorDefault;
this._selected=null;
this._relpos=$I$(2).RP_OUTER;
this._mousePos=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['D',['scaleFactor'],'I',['_nextBackgroundColor'],'O',['_RNAComponents','java.util.ArrayList','+_RNAConnections','_helixToConnection','java.util.Hashtable','_ui','fr.orsay.lri.varna.applications.templateEditor.TemplateEditorPanelUI','_template','fr.orsay.lri.varna.models.templates.RNATemplate','_editor','fr.orsay.lri.varna.applications.templateEditor.TemplateEditor','_selected','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','_relpos','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement.RelativePosition','_mousePos','java.awt.geom.Point2D.Double','_solidStroke','java.awt.Stroke','+_dashedStroke']]
,['D',['scaleFactorDefault'],'O',['BackgroundColors','java.awt.Color[]','+_colors','CYCLE_COLOR','java.awt.Color','+NON_EXISTANT_COLOR','+CONTROL_COLOR','+BACKGROUND_COLOR']]]

Clazz.newMeth(C$, 'getScaleFactor$', function () {
return this.scaleFactor;
});

Clazz.newMeth(C$, 'setScaleFactor$D', function (scaleFactor) {
this.scaleFactor=scaleFactor;
});

Clazz.newMeth(C$, 'nextBackgroundColor$', function () {
var c=C$.BackgroundColors[this._nextBackgroundColor++];
this._nextBackgroundColor=this._nextBackgroundColor % C$.BackgroundColors.length;
return Clazz.new_([c.getRed$(), c.getBlue$(), c.getGreen$(), 50],$I$(1,1).c$$I$I$I$I);
});

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_applications_templateEditor_TemplateEditor', function (parent) {
Clazz.super_(C$, this);
this._editor=parent;
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getTemplate$', function () {
return this._template;
});

Clazz.newMeth(C$, 'getRNAComponents$', function () {
return this._RNAComponents;
});

Clazz.newMeth(C$, 'init', function () {
this._ui=Clazz.new_($I$(4,1).c$$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel,[this]);
this._RNAComponents=Clazz.new_($I$(5,1));
this._RNAConnections=Clazz.new_($I$(5,1));
this._helixToConnection=Clazz.new_($I$(6,1));
this._template=Clazz.new_($I$(7,1));
this.setBackground$java_awt_Color($I$(1).WHITE);
var mc=Clazz.new_($I$(8,1).c$$fr_orsay_lri_varna_applications_templateEditor_TemplatePanel$fr_orsay_lri_varna_applications_templateEditor_TemplateEditorPanelUI,[this, this._ui]);
this.addMouseListener$java_awt_event_MouseListener(mc);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(mc);
this.addMouseWheelListener$java_awt_event_MouseWheelListener(mc);
this._solidStroke=Clazz.new_($I$(9,1).c$$F$I$I$F,[1.5, 1, 1, 3.0]);
var dash=Clazz.array(Float.TYPE, -1, [5.0, 5.0]);
this._dashedStroke=Clazz.new_($I$(9,1).c$$F$I$I$F$FA$F,[1.5, 1, 1, 3.0, dash, 0]);
}, p$1);

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_undo_UndoManager', function (manager) {
this._ui.addUndoableEditListener$javax_swing_undo_UndoManager(manager);
});

Clazz.newMeth(C$, 'getTemplateUI$', function () {
return this._ui;
});

Clazz.newMeth(C$, 'flip$fr_orsay_lri_varna_applications_templateEditor_Helix', function (h) {
h.toggleFlipped$();
});

Clazz.newMeth(C$, 'addElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (h) {
this._RNAComponents.add$O(h);
});

Clazz.newMeth(C$, 'removeElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (h) {
this._RNAComponents.remove$O(h);
try {
this._template.removeElement$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement(h.getTemplateElement$());
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getSelected$', function () {
return this._selected;
});

Clazz.newMeth(C$, 'setSelected$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (sel) {
this._selected=sel;
if (Clazz.instanceOf(this._selected, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
this._editor.flipButtonEnable$();
} else {
this._editor.flipButtonDisable$();
}});

Clazz.newMeth(C$, 'setSelectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (rel) {
this._relpos=rel;
});

Clazz.newMeth(C$, 'unselectEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (rel) {
this._relpos=rel;
});

Clazz.newMeth(C$, 'setPointerPos$java_awt_geom_Point2D_Double', function (p) {
this._mousePos=p;
});

Clazz.newMeth(C$, 'Unselect$', function () {
this._editor.flipButtonDisable$();
this._selected=null;
});

Clazz.newMeth(C$, 'getElement$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement', function (t) {
for (var t2, $t2 = this._RNAComponents.iterator$(); $t2.hasNext$()&&((t2=($t2.next$())),1);) if (t === t2.getTemplateElement$() ) return t2;

return null;
});

Clazz.newMeth(C$, 'getElementAt$D$D', function (x, y) {
return this.getElementAt$D$D$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(x, y, null);
});

Clazz.newMeth(C$, 'getElementAt$D$D$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (x, y, excluded) {
var h=null;
for (var i=0; i < this._RNAComponents.size$(); i++) {
var h2=this._RNAComponents.get$I(i);
if (((h2.getRelativePosition$D$D(x, y) === $I$(2).RP_CONNECT_END3 ) || (h2.getRelativePosition$D$D(x, y) === $I$(2).RP_CONNECT_END5 ) || (h2.getRelativePosition$D$D(x, y) === $I$(2).RP_CONNECT_START3 ) || (h2.getRelativePosition$D$D(x, y) === $I$(2).RP_CONNECT_START5 )  ) && (excluded !== h2 ) ) {
h=h2;
}}
if (h == null ) {
h=this.getElementCloseTo$D$D$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(x, y, excluded);
};return h;
});

Clazz.newMeth(C$, 'getElementCloseTo$D$D', function (x, y) {
return this.getElementCloseTo$D$D$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement(x, y, null);
});

Clazz.newMeth(C$, 'getElementCloseTo$D$D$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement', function (x, y, excluded) {
var h=null;
for (var i=0; i < this._RNAComponents.size$(); i++) {
var h2=this._RNAComponents.get$I(i);
if ((h2.getRelativePosition$D$D(x, y) !== $I$(2).RP_OUTER ) && (excluded !== h2 ) ) {
h=h2;
}}
return h;
});

Clazz.newMeth(C$, 'addConnection$fr_orsay_lri_varna_applications_templateEditor_Connection', function (c) {
this._RNAConnections.add$O(c);
this._helixToConnection.put$O$O(Clazz.new_($I$(10,1).c$$O$O,[c._h1, c._edge1]), c);
this._helixToConnection.put$O$O(Clazz.new_($I$(10,1).c$$O$O,[c._h2, c._edge2]), c);
try {
c._h1.attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c._h2, c._edge1, c._edge2);
c._h2.attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c._h1, c._edge2, c._edge1);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h1, edge1, h2, edge2) {
if ((h1 !== h2 ) && (this.getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(h1, edge1) == null ) && (this.getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(h2, edge2) == null )  ) {
var c=Clazz.new_($I$(11,1).c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition,[h1, edge1, h2, edge2]);
this.addConnection$fr_orsay_lri_varna_applications_templateEditor_Connection(c);
return c;
}return null;
});

Clazz.newMeth(C$, 'addGraphicalConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h1, edge1, h2, edge2) {
var c=Clazz.new_($I$(11,1).c$$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition,[h1, edge1, h2, edge2]);
this._RNAConnections.add$O(c);
this._helixToConnection.put$O$O(Clazz.new_($I$(10,1).c$$O$O,[c._h1, c._edge1]), c);
this._helixToConnection.put$O$O(Clazz.new_($I$(10,1).c$$O$O,[c._h2, c._edge2]), c);
c._h1.graphicalAttach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c._h2, c._edge1, c._edge2);
c._h2.graphicalAttach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c._h1, c._edge2, c._edge1);
});

Clazz.newMeth(C$, 'removeConnection$fr_orsay_lri_varna_applications_templateEditor_Connection', function (c) {
this._RNAConnections.remove$O(c);
this._helixToConnection.remove$O(Clazz.new_($I$(10,1).c$$O$O,[c._h1, c._edge1]));
this._helixToConnection.remove$O(Clazz.new_($I$(10,1).c$$O$O,[c._h2, c._edge2]));
System.out.println$S("[A]" + c);
c._h1.detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c._edge1);
});

Clazz.newMeth(C$, 'isInCycle$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (el, edge) {
var p=Clazz.new_($I$(12,1));
var alreadySeen=Clazz.new_($I$(6,1));
p.add$O(Clazz.new_($I$(10,1).c$$O$O,[el, edge]));
while (!p.empty$()){
var c2=p.pop$();
if (alreadySeen.containsKey$O(c2)) {
return true;
} else {
alreadySeen.put$O$O(c2,  new Integer(1));
}var next=c2.first.getConnectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c2.second);
var otherEnd=Clazz.new_($I$(10,1).c$$O$O,[c2.first, next]);
if (!alreadySeen.containsKey$O(otherEnd)) {
p.push$O(otherEnd);
} else {
var child=this.getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c2.first, c2.second);
if (child != null ) {
p.push$O(child);
}}}
return false;
});

Clazz.newMeth(C$, 'getIndexedColor$I', function (n) {
return C$._colors[n % C$._colors.length];
}, 1);

Clazz.newMeth(C$, 'buildConnectedComponents$', function () {
var alreadySeen=Clazz.new_($I$(13,1));
var numConnectedComponents=0;
for (var el, $el = this._RNAComponents.iterator$(); $el.hasNext$()&&((el=($el.next$())),1);) {
for (var edge, $edge = el.getConnectedEdges$().iterator$(); $edge.hasNext$()&&((edge=($edge.next$())),1);) {
var c=Clazz.new_($I$(10,1).c$$O$O,[el, edge]);
if (!alreadySeen.containsKey$O(c)) {
var p=Clazz.new_($I$(12,1));
p.add$O(c);
p.add$O(Clazz.new_([el, el.getConnectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge)],$I$(10,1).c$$O$O));
while (!p.empty$()){
var c2=p.pop$();
if (!alreadySeen.containsKey$O(c2)) {
c2.first.setMainColor$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_Color(c2.second, C$.getIndexedColor$I(numConnectedComponents));
alreadySeen.put$O$O(c2,  new Integer(numConnectedComponents));
var next=c2.first.getConnectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c2.second);
var otherEnd=Clazz.new_($I$(10,1).c$$O$O,[c2.first, next]);
p.push$O(otherEnd);
var child=this.getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c2.first, c2.second);
if (child != null ) {
p.push$O(child);
}}}
numConnectedComponents+=1;
}}
}
return alreadySeen;
});

Clazz.newMeth(C$, 'isInCycle$fr_orsay_lri_varna_applications_templateEditor_Connection', function (c) {
return this.isInCycle$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c._h1, c._edge1);
});

Clazz.newMeth(C$, 'getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h, edge) {
var c=this.getConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(h, edge);
if (c != null ) {
if ((c._h1 === h ) && (c._edge1 === edge ) ) {
return Clazz.new_($I$(10,1).c$$O$O,[c._h2, c._edge2]);
} else {
return Clazz.new_($I$(10,1).c$$O$O,[c._h1, c._edge1]);
}} else {
return null;
}});

Clazz.newMeth(C$, 'getConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h, edge) {
var target=Clazz.new_($I$(10,1).c$$O$O,[h, edge]);
if (this._helixToConnection.containsKey$O(target)) {
return this._helixToConnection.get$O(target);
} else {
return null;
}});

Clazz.newMeth(C$, 'isConnected$fr_orsay_lri_varna_applications_templateEditor_Helix$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (h, edge) {
var partner=this.getPartner$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(h, edge);
return partner != null ;
}, p$1);

Clazz.newMeth(C$, 'drawConnections$java_awt_Graphics2D$fr_orsay_lri_varna_applications_templateEditor_Connection', function (g2d, c) {
var h1=c._h1;
var edge1=c._edge1;
var p1=h1.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge1);
var h2=c._h2;
var edge2=c._edge2;
var p2=h2.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge2);
if (this.isInCycle$fr_orsay_lri_varna_applications_templateEditor_Connection(c)) {
g2d.setColor$java_awt_Color(C$.CYCLE_COLOR);
} else {
g2d.setColor$java_awt_Color($I$(14).BACKBONE_COLOR);
}g2d.drawLine$I$I$I$I((p1.x|0), (p1.y|0), (p2.x|0), (p2.y|0));
}, p$1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
g.setColor$java_awt_Color($I$(1).white);
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
var g2d=g;
g2d.scale$D$D(this.scaleFactor, this.scaleFactor);
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(15).KEY_ANTIALIASING, $I$(15).VALUE_ANTIALIAS_ON);
this.removeAll$();
this.buildConnectedComponents$();
if (this._selected != null ) {
if (this._relpos !== $I$(2).RP_OUTER ) {
var p=this._selected.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(this._relpos);
g2d.setStroke$java_awt_Stroke(this._solidStroke);
g2d.drawLine$I$I$I$I((this._mousePos.x|0), (this._mousePos.y|0), (p.x|0), (p.y|0));
}}for (var i=0; i < this._RNAConnections.size$(); i++) {
var c=this._RNAConnections.get$I(i);
p$1.drawConnections$java_awt_Graphics2D$fr_orsay_lri_varna_applications_templateEditor_Connection.apply(this, [g2d, c]);
}
for (var i=0; i < this._RNAComponents.size$(); i++) {
var elem=this._RNAComponents.get$I(i);
if (this._selected === elem ) {
elem.draw$java_awt_Graphics2D$Z(g2d, true);
} else {
elem.draw$java_awt_Graphics2D$Z(g2d, false);
}}
});

Clazz.newMeth(C$, 'getBoundingRectange$', function () {
var minX=0;
var maxX=0;
var minY=0;
var maxY=0;
for (var i=0; i < this._RNAComponents.size$(); i++) {
var h=this._RNAComponents.get$I(i);
var p=h.getBoundingPolygon$();
var r=p.getBounds$();
minX=Math.min(minX, r.x);
maxX=Math.max(maxX, r.x + r.width);
minY=Math.min(minY, r.y);
maxY=Math.max(maxY, r.y + r.height);
}
var res=Clazz.new_($I$(16,1));
res.x=minX;
res.y=minY;
res.width=maxX - minX;
res.height=maxY - minY;
return res;
});

Clazz.newMeth(C$, 'rescale$', function () {
var rect=this.getBoundingRectange$();
if (rect.x < 0 || rect.y < 0 ) {
for (var i=0; i < this._RNAComponents.size$(); i++) {
var h=this._RNAComponents.get$I(i);
h.translate$D$D(rect.x < 0 ? -rect.x : 0, rect.y < 0 ? -rect.y : 0);
}
rect=this.getBoundingRectange$();
}var areaW=(((rect.width + 100) * this.scaleFactor)|0);
var areaH=(((rect.height + 100) * this.scaleFactor)|0);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[areaW, areaH]));
this.revalidate$();
});

Clazz.newMeth(C$, 'clearTemplate$', function () {
this.loadTemplate$fr_orsay_lri_varna_models_templates_RNATemplate(Clazz.new_($I$(7,1)));
});

Clazz.newMeth(C$, 'loadTemplate$fr_orsay_lri_varna_models_templates_RNATemplate', function (template) {
this._template=template;
this._RNAComponents.clear$();
this._RNAConnections.clear$();
this._helixToConnection.clear$();
var map=Clazz.new_($I$(13,1));
{
var iter=template.classicIterator$();
while (iter.hasNext$()){
var templateElement=iter.next$();
if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var templateHelix=templateElement;
var graphicalHelix=Clazz.new_($I$(18,1).c$$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix,[templateHelix]);
graphicalHelix.setDominantColor$java_awt_Color(this.nextBackgroundColor$());
this._RNAComponents.add$O(graphicalHelix);
map.put$O$O(templateHelix, graphicalHelix);
} else if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
var templateSequence=templateElement;
var graphicalSequence=Clazz.new_($I$(19,1).c$$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateUnpairedSequence,[templateSequence]);
graphicalSequence.setDominantColor$java_awt_Color(this.nextBackgroundColor$());
this._RNAComponents.add$O(graphicalSequence);
map.put$O$O(templateSequence, graphicalSequence);
}}
}{
var iter=template.makeEdgeList$().iterator$();
while (iter.hasNext$()){
var v1=iter.next$();
var v2=v1.getOtherEndPoint$();
var gte1=map.get$O(v1.getElement$());
var gte2=map.get$O(v2.getElement$());
var rp1=gte1.relativePositionFromEdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition(v1.getPosition$());
var rp2=gte2.relativePositionFromEdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition(v2.getPosition$());
this.addGraphicalConnection$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(gte1, rp1, gte2, rp2);
}
}this.zoomFit$();
});

Clazz.newMeth(C$, 'loadFromXmlFile$java_io_File', function (filename) {
try {
var newTemplate=$I$(7).fromXMLFile$java_io_File(filename);
this.loadTemplate$fr_orsay_lri_varna_models_templates_RNATemplate(newTemplate);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionXmlLoading")){
e.printStackTrace$();
$I$(20,"showMessageDialog$java_awt_Component$O$S$I",[this, e.getMessage$(), "Template loading error", 0]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'zoomFinish', function () {
this.rescale$();
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'zoomIn$', function () {
this.scaleFactor *= 1.2;
p$1.zoomFinish.apply(this, []);
});

Clazz.newMeth(C$, 'zoomOut$', function () {
this.scaleFactor /= 1.2;
p$1.zoomFinish.apply(this, []);
});

Clazz.newMeth(C$, 'zoomReset$', function () {
this.scaleFactor=C$.scaleFactorDefault;
p$1.zoomFinish.apply(this, []);
});

Clazz.newMeth(C$, 'zoomFit$', function () {
if (this._RNAComponents.isEmpty$()) {
this.zoomReset$();
} else {
var rect=this.getBoundingRectange$();
var areaW=(rect.width + 100);
var areaH=(rect.height + 100);
this.scaleFactor=1;
this.scaleFactor=Math.min(this.scaleFactor, this._editor.getJp$().getViewport$().getSize$().width / areaW);
this.scaleFactor=Math.min(this.scaleFactor, this._editor.getJp$().getViewport$().getSize$().height / areaH);
p$1.zoomFinish.apply(this, []);
}});

Clazz.newMeth(C$, 'translateView$java_awt_Point', function (trans) {
var newX=this._editor.getJp$().getHorizontalScrollBar$().getValue$() - trans.x;
var newY=this._editor.getJp$().getVerticalScrollBar$().getValue$() - trans.y;
newX=Math.max(0, Math.min(newX, this._editor.getJp$().getHorizontalScrollBar$().getMaximum$()));
newY=Math.max(0, Math.min(newY, this._editor.getJp$().getVerticalScrollBar$().getMaximum$()));
this._editor.getJp$().getHorizontalScrollBar$().setValue$I(newX);
this._editor.getJp$().getVerticalScrollBar$().setValue$I(newY);
});

C$.$static$=function(){C$.$static$=0;
C$.BackgroundColors=Clazz.array($I$(1), -1, [$I$(1).blue, $I$(1).red, $I$(1).cyan, $I$(1).green, $I$(1).lightGray, $I$(1).magenta, $I$(1).PINK]);
C$.scaleFactorDefault=0.7;
C$._colors=Clazz.array($I$(1), -1, [$I$(1).gray, $I$(1).pink, $I$(1).cyan, $I$(1).RED, $I$(1).green, $I$(1).orange]);
C$.CYCLE_COLOR=$I$(1).red;
C$.NON_EXISTANT_COLOR=$I$(1).gray.brighter$();
C$.CONTROL_COLOR=$I$(1).gray.darker$();
C$.BACKGROUND_COLOR=$I$(1).white;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
