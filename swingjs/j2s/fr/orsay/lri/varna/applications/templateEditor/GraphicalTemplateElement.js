(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),p$1={},I$=[[0,'java.awt.Color','java.awt.Font','java.util.HashMap','java.awt.BasicStroke','fr.orsay.lri.varna.applications.templateEditor.Couple','java.awt.Dimension',['java.awt.geom.Point2D','.Double']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphicalTemplateElement", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RelativePosition',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._debug=false;
this._mainColors=Clazz.new_($I$(3,1));
this._dominantColor=Clazz.new_($I$(1,1).c$$F$F$F$F,[0.5, 0.5, 0.5, 0.9]);
this._attachedElements=Clazz.new_($I$(3,1));
this._boldStroke=Clazz.new_($I$(4,1).c$$F$I$I$F,[2.5, 1, 1, 3.0]);
this._solidStroke=Clazz.new_($I$(4,1).c$$F$I$I$F,[1.5, 1, 1, 3.0]);
this.dash=Clazz.array(Float.TYPE, -1, [5.0, 5.0]);
this._dashedStroke=Clazz.new_($I$(4,1).c$$F$I$I$F$FA$F,[1.5, 1, 1, 3.0, this.dash, 0]);
},1);

C$.$fields$=[['Z',['_debug'],'O',['_mainColors','java.util.HashMap','_dominantColor','java.awt.Color','_attachedElements','java.util.HashMap','_boldStroke','java.awt.Stroke','+_solidStroke','dash','float[]','_dashedStroke','java.awt.Stroke']]
,['O',['BACKBONE_COLOR','java.awt.Color','+CONTROL_COLOR','NUMBER_FONT','java.awt.Font','NUMBER_COLOR','java.awt.Color','+BASE_PAIR_COLOR','+BASE_COLOR','+BASE_FILL_COLOR','+BASE_FILL_3_COLOR','+BASE_FILL_5_COLOR','+MAGNET_COLOR']]]

Clazz.newMeth(C$, 'setDominantColor$java_awt_Color', function (c) {
this._dominantColor=c;
});

Clazz.newMeth(C$, 'getDominantColor$', function () {
return this._dominantColor;
});

Clazz.newMeth(C$, 'setMainColor$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_Color', function (edge, c) {
this._mainColors.put$O$O(edge, c);
});

Clazz.newMeth(C$, 'attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (e, edgeOrig, edgeDest) {
this._attachedElements.put$O$O(edgeOrig, Clazz.new_($I$(5,1).c$$O$O,[edgeDest, e]));
});

Clazz.newMeth(C$, 'graphicalAttach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (e, edgeOrig, edgeDest) {
this._attachedElements.put$O$O(edgeOrig, Clazz.new_($I$(5,1).c$$O$O,[edgeDest, e]));
});

Clazz.newMeth(C$, 'detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
if (this._attachedElements.containsKey$O(edge)) {
var c=this._attachedElements.get$O(edge);
this._attachedElements.remove$O(edge);
c.second.detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c.first);
}});

Clazz.newMeth(C$, 'getAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (localedge) {
if (this._attachedElements.containsKey$O(localedge)) return this._attachedElements.get$O(localedge);
return null;
});

Clazz.newMeth(C$, 'hasAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (localedge) {
return this._attachedElements.containsKey$O(localedge);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D', function (g2d) {
this.draw$java_awt_Graphics2D$Z(g2d, false);
});

Clazz.newMeth(C$, 'getStringDimension$java_awt_Graphics2D$S', function (g, s) {
var fm=g.getFontMetrics$();
var r=fm.getStringBounds$S$java_awt_Graphics(s, g);
return (Clazz.new_([(r.getWidth$()|0), fm.getAscent$() - fm.getDescent$()],$I$(6,1).c$$I$I));
}, p$1);

Clazz.newMeth(C$, 'drawStringCentered$java_awt_Graphics2D$S$D$D', function (g2, res, x, y) {
var d=p$1.getStringDimension$java_awt_Graphics2D$S.apply(this, [g2, res]);
x -= d.width / 2.0;
y += d.height / 2.0;
if (this._debug) g2.drawRect$I$I$I$I((x|0), (y|0) - d.height, d.width, d.height);
g2.drawString$S$I$I(res, (Math.round(x)|0), (Math.round(y)|0));
});

Clazz.newMeth(C$, 'canConnect$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (el1, e1, el2, e2) {
return (!el1.hasAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(e1)) && (!el2.hasAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(e2)) && (el1.isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(e1) != el2.isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(e2) )  ;
}, 1);

Clazz.newMeth(C$, 'drawMove$java_awt_Graphics2D$java_awt_geom_Point2D_Double', function (g2d, center) {
g2d.setStroke$java_awt_Stroke(this._solidStroke);
g2d.setColor$java_awt_Color(C$.CONTROL_COLOR);
g2d.fillOval$I$I$I$I((((center.x - 13.0))|0), (((center.y - 13.0))|0), 26, 26);
g2d.setColor$java_awt_Color(C$.BACKBONE_COLOR);
g2d.drawOval$I$I$I$I((((center.x - 13.0))|0), (((center.y - 13.0))|0), 26, 26);
var arrowLength=11.0;
var width=3.0;
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x + arrowLength, center.y]), width);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x - arrowLength, center.y]), width);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x, center.y + arrowLength]), width);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x, center.y - arrowLength]), width);
});

Clazz.newMeth(C$, 'drawEditStart$java_awt_Graphics2D$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D$D$D', function (g2d, h, dx, dy, nx, ny) {
var center=h.getCenterEditStart$();
this.drawEdit$java_awt_Graphics2D$java_awt_geom_Point2D_Double$D$D$D$D(g2d, center, dx, dy, nx, ny);
});

Clazz.newMeth(C$, 'drawEditEnd$java_awt_Graphics2D$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D$D$D', function (g2d, h, dx, dy, nx, ny) {
var center=h.getCenterEditEnd$();
this.drawEdit$java_awt_Graphics2D$java_awt_geom_Point2D_Double$D$D$D$D(g2d, center, dx, dy, nx, ny);
});

Clazz.newMeth(C$, 'drawEdit$java_awt_Graphics2D$java_awt_geom_Point2D_Double$D$D$D$D', function (g2d, center, dx, dy, nx, ny) {
g2d.setColor$java_awt_Color(C$.CONTROL_COLOR);
g2d.fillOval$I$I$I$I((((center.x - 10.0))|0), (((center.y - 10.0))|0), 20, 20);
g2d.setColor$java_awt_Color(C$.BACKBONE_COLOR);
g2d.drawOval$I$I$I$I((((center.x - 10.0))|0), (((center.y - 10.0))|0), 20, 20);
var arrowLength=8.0;
var width=3.0;
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x + nx * arrowLength, center.y + ny * arrowLength]), width);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x - nx * arrowLength, center.y - ny * arrowLength]), width);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x + dx * arrowLength, center.y + dy * arrowLength]), width);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, center, Clazz.new_($I$(7,1).c$$D$D,[center.x - dx * arrowLength, center.y - dy * arrowLength]), width);
});

Clazz.newMeth(C$, 'drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D', function (g2d, orig, dest, width) {
g2d.setStroke$java_awt_Stroke(this._solidStroke);
g2d.drawLine$I$I$I$I((orig.x|0), (orig.y|0), (dest.x|0), (dest.y|0));
var dx=(orig.x - dest.x) / (orig.distance$java_awt_geom_Point2D(dest));
var dy=(orig.y - dest.y) / (orig.distance$java_awt_geom_Point2D(dest));
var nx=dy;
var ny=-dx;
g2d.drawLine$I$I$I$I((dest.x|0), (dest.y|0), ((dest.x - width * (-dx + nx))|0), ((dest.y - width * (-dy + ny))|0));
g2d.drawLine$I$I$I$I((dest.x|0), (dest.y|0), ((dest.x - width * (-dx - nx))|0), ((dest.y - width * (-dy - ny))|0));
});

Clazz.newMeth(C$, 'drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double', function (g2d, p) {
this.drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_Color(g2d, p, C$.CONTROL_COLOR);
});

Clazz.newMeth(C$, 'drawAnchor5$java_awt_Graphics2D$java_awt_geom_Point2D_Double', function (g2d, p) {
this.drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_Color(g2d, p, C$.BASE_FILL_5_COLOR);
});

Clazz.newMeth(C$, 'drawAnchor3$java_awt_Graphics2D$java_awt_geom_Point2D_Double', function (g2d, p) {
this.drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_Color(g2d, p, C$.BASE_FILL_3_COLOR);
});

Clazz.newMeth(C$, 'drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_Color', function (g2d, p, c) {
g2d.setColor$java_awt_Color(c);
g2d.fillOval$I$I$I$I(((p.x - 7.0)|0), ((p.y - 7.0)|0), 14, 14);
g2d.setColor$java_awt_Color(C$.BASE_COLOR);
g2d.drawOval$I$I$I$I(((p.x - 7.0)|0), ((p.y - 7.0)|0), 14, 14);
});

Clazz.newMeth(C$, 'drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double', function (g2d, p) {
this.drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_Color(g2d, p, C$.MAGNET_COLOR);
g2d.setColor$java_awt_Color(C$.BASE_COLOR);
g2d.drawOval$I$I$I$I(((p.x - 7.0)|0), ((p.y - 7.0)|0), 14, 14);
g2d.drawOval$I$I$I$I(((p.x - 2)|0), ((p.y - 2)|0), 4, 4);
});

Clazz.newMeth(C$, 'drawBase$java_awt_Graphics2D$java_awt_geom_Point2D_Double', function (g2d, p) {
g2d.setColor$java_awt_Color(C$.BASE_FILL_COLOR);
g2d.fillOval$I$I$I$I(((p.x - 8.0)|0), ((p.y - 8.0)|0), 16, 16);
g2d.setColor$java_awt_Color(C$.BASE_COLOR);
g2d.drawOval$I$I$I$I(((p.x - 8.0)|0), ((p.y - 8.0)|0), 16, 16);
});

Clazz.newMeth(C$, 'equals$O', function (b) {
if (Clazz.instanceOf(b, "fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement")) {
return b === this ;
} else return false;
});

C$.$static$=function(){C$.$static$=0;
C$.BACKBONE_COLOR=$I$(1).gray;
C$.CONTROL_COLOR=$I$(1).decode$S("#D0D0FF");
C$.NUMBER_FONT=Clazz.new_($I$(2,1).c$$S$I$I,["Arial", 1, 18]);
C$.NUMBER_COLOR=$I$(1).gray;
C$.BASE_PAIR_COLOR=$I$(1).blue;
C$.BASE_COLOR=$I$(1).gray;
C$.BASE_FILL_COLOR=$I$(1).white;
C$.BASE_FILL_3_COLOR=$I$(1).red;
C$.BASE_FILL_5_COLOR=$I$(1).green;
C$.MAGNET_COLOR=C$.CONTROL_COLOR;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.GraphicalTemplateElement, "RelativePosition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "RP_OUTER", 0, []);
Clazz.newEnumConst($vals, C$.c$, "RP_INNER_GENERAL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RP_INNER_MOVE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "RP_EDIT_START", 3, []);
Clazz.newEnumConst($vals, C$.c$, "RP_EDIT_END", 4, []);
Clazz.newEnumConst($vals, C$.c$, "RP_CONNECT_START5", 5, []);
Clazz.newEnumConst($vals, C$.c$, "RP_CONNECT_START3", 6, []);
Clazz.newEnumConst($vals, C$.c$, "RP_CONNECT_END5", 7, []);
Clazz.newEnumConst($vals, C$.c$, "RP_CONNECT_END3", 8, []);
Clazz.newEnumConst($vals, C$.c$, "RP_EDIT_TANGENT_3", 9, []);
Clazz.newEnumConst($vals, C$.c$, "RP_EDIT_TANGENT_5", 10, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
