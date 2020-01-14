(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),p$1={},I$=[[0,['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateUnpairedSequence'],['java.awt.geom.Point2D','.Double'],['fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','.RelativePosition'],'java.awt.geom.GeneralPath',['java.awt.geom.CubicCurve2D','.Double'],'fr.orsay.lri.varna.models.geom.CubicBezierCurve','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','java.awt.Polygon','java.util.ArrayList','fr.orsay.lri.varna.applications.templateEditor.Couple',['fr.orsay.lri.varna.models.templates.RNATemplate','.EdgeEndPointPosition']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UnpairedRegion", null, 'fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._e=null;
this.sequenceBasesCoords=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sequenceBasesCoords=null;
}, 1);

Clazz.newMeth(C$, 'c$$D$D$fr_orsay_lri_varna_models_templates_RNATemplate', function (x, y, tmp) {
Clazz.super_(C$, this,1);
this._e=Clazz.new_($I$(1).c$$S, [tmp, null, ""]);
this._e.setVertex5$java_awt_geom_Point2D_Double(Clazz.new_($I$(2).c$$D$D,[x, y]));
this._e.setVertex3$java_awt_geom_Point2D_Double(Clazz.new_($I$(2).c$$D$D,[x + 35.0, y]));
this._e.setInTangentVectorLength$D(35.0);
this._e.setInTangentVectorAngle$D(-1.5707963267948966);
this._e.setOutTangentVectorLength$D(35.0);
this._e.setOutTangentVectorAngle$D(-1.5707963267948966);
p$1.updateLength.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateUnpairedSequence', function (templateSequence) {
Clazz.super_(C$, this,1);
this._e=templateSequence;
}, 1);

Clazz.newMeth(C$, 'getEdge5$', function () {
var r=$I$(3).RP_CONNECT_START5;
var c=this.getAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(r);
return (this.isAnchored5$() ? c.second.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c.first) : this._e.getVertex5$());
});

Clazz.newMeth(C$, 'getEdge3$', function () {
var r=$I$(3).RP_CONNECT_END3;
var c=this.getAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(r);
return (this.isAnchored3$() ? c.second.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(c.first) : this._e.getVertex3$());
});

Clazz.newMeth(C$, 'getCenter$', function () {
var p1=this.getEdge5$();
var p2=this.getEdge3$();
return Clazz.new_($I$(2).c$$D$D,[(p1.x + p2.x) / 2.0, (p1.y + p2.y) / 2.0]);
});

Clazz.newMeth(C$, 'setEdge5$java_awt_geom_Point2D_Double', function (d) {
this._e.setVertex5$java_awt_geom_Point2D_Double(d);
p$1.updateLength.apply(this, []);
});

Clazz.newMeth(C$, 'setEdge3$java_awt_geom_Point2D_Double', function (d) {
this._e.setVertex3$java_awt_geom_Point2D_Double(d);
p$1.updateLength.apply(this, []);
});

Clazz.newMeth(C$, 'setCenter$java_awt_geom_Point2D_Double', function (d) {
var p1=this.getEdge5$();
var p2=this.getEdge3$();
var dx=p1.x - p2.x;
var dy=p1.y - p2.y;
this._e.setVertex3$java_awt_geom_Point2D_Double(Clazz.new_($I$(2).c$$D$D,[d.x - dx / 2.0, d.y - dy / 2.0]));
this._e.setVertex5$java_awt_geom_Point2D_Double(Clazz.new_($I$(2).c$$D$D,[d.x + dx / 2.0, d.y + dy / 2.0]));
p$1.invalidateCoords.apply(this, []);
});

Clazz.newMeth(C$, 'isAnchored5$', function () {
return (this._e.getIn$().getOtherElement$() != null );
});

Clazz.newMeth(C$, 'isAnchored3$', function () {
return (this._e.getOut$().getOtherElement$() != null );
});

Clazz.newMeth(C$, 'bezToShape$fr_orsay_lri_varna_models_geom_CubicBezierCurve', function (c) {
var p=Clazz.new_($I$(4));
var nb=9;
var tab=Clazz.array(Double.TYPE, [nb]);
for (var i=0; i < nb; i++) {
tab[i]=(c.getApproxCurveLength$() * i) / nb;
}
var points=c.uniformParam$DA(tab);
System.out.println$I(points.length);
p.moveTo$F$F(points[0].x, points[0].y);
for (var i=1; i < nb; i++) {
var a=points[i];
System.out.println$O(a);
p.lineTo$F$F(a.x, a.y);
}
p.lineTo$F$F(c.getP3$().x, c.getP3$().y);
return p;
}, 1);

Clazz.newMeth(C$, 'getCurve$', function () {
var p5=this.getEdge5$();
var p3=this.getEdge3$();
var t5=this.getControl5$();
var t3=this.getControl3$();
return Clazz.new_($I$(5).c$$D$D$D$D$D$D$D$D,[p5.x, p5.y, t5.x, t5.y, t3.x, t3.y, p3.x, p3.y]);
});

Clazz.newMeth(C$, 'estimateNumberOfBases', function () {
var p5=this.getEdge5$();
var p3=this.getEdge3$();
var t5=this.getControl5$();
var t3=this.getControl3$();
var c=Clazz.new_($I$(6).c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$I,[p5, t5, t3, p3, 30]);
return Math.max((Math.round(c.getApproxCurveLength$() / 40.0)|0) - 1, 1);
}, p$1);

Clazz.newMeth(C$, 'updateLength', function () {
this._e.setLength$I(p$1.estimateNumberOfBases.apply(this, []));
p$1.invalidateCoords.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'invalidateCoords', function () {
this.sequenceBasesCoords=null;
}, p$1);

Clazz.newMeth(C$, 'calculeCoords', function () {
var p5=this.getEdge5$();
var p3=this.getEdge3$();
var t5=this.getControl5$();
var t3=this.getControl3$();
var n=this._e.getLength$();
var bezier=Clazz.new_($I$(6).c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$I,[p5, t5, t3, p3, 10 * n]);
var curveLength=bezier.getApproxCurveLength$();
var delta_t=curveLength / (n + 1);
var t=Clazz.array(Double.TYPE, [n]);
for (var k=0; k < n; k++) {
t[k]=(k + 1) * delta_t;
}
this.sequenceBasesCoords=bezier.uniformParam$DA(t);
}, p$1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z', function (g2d, selected) {
var p5=this.getEdge5$();
var p3=this.getEdge3$();
var t5=this.getControl5$();
var t3=this.getControl3$();
if (selected) {
g2d.setStroke$java_awt_Stroke(this._dashedStroke);
g2d.setColor$java_awt_Color($I$(7).BACKBONE_COLOR);
g2d.draw$java_awt_Shape(this.getBoundingPolygon$());
g2d.setStroke$java_awt_Stroke(this._solidStroke);
this.drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, t5);
this.drawAnchor$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, t3);
var d5x=(t5.x - p5.x) / (t5.distance$java_awt_geom_Point2D(p5));
var d5y=(t5.y - p5.y) / (t5.distance$java_awt_geom_Point2D(p5));
var d3x=(t3.x - p3.x) / (t3.distance$java_awt_geom_Point2D(p3));
var d3y=(t3.y - p3.y) / (t3.distance$java_awt_geom_Point2D(p3));
var shift=-3.5;
var tp5=Clazz.new_($I$(2).c$$D$D,[t5.x - shift * d5x, t5.y - shift * d5y]);
var tp3=Clazz.new_($I$(2).c$$D$D,[t3.x - shift * d3x, t3.y - shift * d3y]);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, p5, tp5, 6.0);
this.drawArrow$java_awt_Graphics2D$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(g2d, p3, tp3, 6.0);
}g2d.setColor$java_awt_Color($I$(7).BACKBONE_COLOR);
g2d.setStroke$java_awt_Stroke(this._solidStroke);
g2d.draw$java_awt_Shape(this.getCurve$());
if (this.sequenceBasesCoords == null ) {
p$1.calculeCoords.apply(this, []);
}for (var k=0; k < this.sequenceBasesCoords.length; k++) {
this.drawBase$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, this.sequenceBasesCoords[k]);
}
if (!this.isAnchored5$()) {
this.drawAnchor5$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
} else {
this.drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
}if (!this.isAnchored3$()) {
this.drawAnchor3$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
} else {
this.drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
}if (!this.isAnchored5$() && !this.isAnchored3$() ) this.drawMove$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, this.getCenter$());
});

Clazz.newMeth(C$, 'getControl5$', function () {
var p5=this.getEdge5$();
var angle=this._e.getInTangentVectorAngle$();
return Clazz.new_($I$(2).c$$D$D,[p5.x + Math.cos(angle) * this._e.getInTangentVectorLength$(), p5.y + Math.sin(angle) * this._e.getInTangentVectorLength$()]);
});

Clazz.newMeth(C$, 'getControl3$', function () {
var p3=this.getEdge3$();
var angle=this._e.getOutTangentVectorAngle$();
return Clazz.new_($I$(2).c$$D$D,[p3.x + Math.cos(angle) * this._e.getOutTangentVectorLength$(), p3.y + Math.sin(angle) * this._e.getOutTangentVectorLength$()]);
});

Clazz.newMeth(C$, 'getBoundingPolygon$', function () {
var p5=this.getEdge5$();
var p3=this.getEdge3$();
var t5=this.getControl5$();
var t3=this.getControl3$();
var minx=Math.min(p5.x, Math.min(p3.x, Math.min(t5.x, t3.x)));
var maxx=Math.max(p5.x, Math.max(p3.x, Math.max(t5.x, t3.x)));
var miny=Math.min(p5.y, Math.min(p3.y, Math.min(t5.y, t3.y)));
var maxy=Math.max(p5.y, Math.max(p3.y, Math.max(t5.y, t3.y)));
minx -= 10;
maxx += 10;
miny -= 10;
maxy += 10;
var x=Clazz.array(Integer.TYPE, -1, [(minx|0), (maxx|0), (maxx|0), (minx|0)]);
var y=Clazz.array(Integer.TYPE, -1, [(miny|0), (miny|0), (maxy|0), (maxy|0)]);
return Clazz.new_($I$(8).c$$IA$IA$I,[x, y, 4]);
});

Clazz.newMeth(C$, 'getClosestEdge$D$D', function (x, y) {
var p=Clazz.new_($I$(2).c$$D$D,[x, y]);
var p5=this.getEdge5$();
var p3=this.getEdge3$();
var t5=this.getControl5$();
var t3=this.getControl3$();
var ct=this.getCenter$();
var v=Clazz.new_($I$(9));
v.add$TE(Clazz.new_($I$(10).c$$TT$TU,[new Double(p.distance$java_awt_geom_Point2D(p5)), $I$(3).RP_CONNECT_START5]));
v.add$TE(Clazz.new_($I$(10).c$$TT$TU,[new Double(p.distance$java_awt_geom_Point2D(p3)), $I$(3).RP_CONNECT_END3]));
v.add$TE(Clazz.new_($I$(10).c$$TT$TU,[new Double(p.distance$java_awt_geom_Point2D(t5)), $I$(3).RP_EDIT_TANGENT_5]));
v.add$TE(Clazz.new_($I$(10).c$$TT$TU,[new Double(p.distance$java_awt_geom_Point2D(t3)), $I$(3).RP_EDIT_TANGENT_3]));
v.add$TE(Clazz.new_($I$(10).c$$TT$TU,[new Double(p.distance$java_awt_geom_Point2D(ct)), $I$(3).RP_INNER_MOVE]));
var dist=1.7976931348623157E308;
var r=$I$(3).RP_OUTER;
for (var c, $c = v.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if ((c.first).doubleValue$() < dist ) {
dist=(c.first).doubleValue$();
r=c.second;
}}
return r;
});

Clazz.newMeth(C$, 'getConnectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
switch (edge) {
case $I$(3).RP_CONNECT_START5:
return $I$(3).RP_CONNECT_END3;
case $I$(3).RP_CONNECT_END3:
return $I$(3).RP_CONNECT_START5;
default:
return $I$(3).RP_OUTER;
}
});

Clazz.newMeth(C$, 'getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
switch (edge) {
case $I$(3).RP_INNER_MOVE:
return this.getCenter$();
case $I$(3).RP_CONNECT_START5:
return this.getEdge5$();
case $I$(3).RP_CONNECT_END3:
return this.getEdge3$();
case $I$(3).RP_EDIT_TANGENT_5:
return this.getControl5$();
case $I$(3).RP_EDIT_TANGENT_3:
return this.getControl3$();
default:
return this.getEdge5$();
}
});

Clazz.newMeth(C$, 'v2a$java_awt_geom_Point2D_Double', function (p) {
return Math.atan2(p.y, p.x);
});

Clazz.newMeth(C$, 'updateControl5$java_awt_geom_Point2D_Double', function (p) {
var p5=this.getEdge5$();
this._e.setInTangentVectorLength$D(p5.distance$java_awt_geom_Point2D(p));
var x=Clazz.new_($I$(2).c$$D$D,[p.x - p5.x, p.y - p5.y]);
this._e.setInTangentVectorAngle$D(this.v2a$java_awt_geom_Point2D_Double(x));
p$1.updateLength.apply(this, []);
});

Clazz.newMeth(C$, 'updateControl3$java_awt_geom_Point2D_Double', function (p) {
var p3=this.getEdge3$();
this._e.setOutTangentVectorLength$D(p3.distance$java_awt_geom_Point2D(p));
var x=Clazz.new_($I$(2).c$$D$D,[p.x - p3.x, p.y - p3.y]);
this._e.setOutTangentVectorAngle$D(this.v2a$java_awt_geom_Point2D_Double(x));
p$1.updateLength.apply(this, []);
});

Clazz.newMeth(C$, 'translate$D$D', function (x, y) {
this._e.getVertex5$().x += x;
this._e.getVertex5$().y += y;
this._e.getVertex3$().x += x;
this._e.getVertex3$().y += y;
p$1.invalidateCoords.apply(this, []);
});

Clazz.newMeth(C$, 'getRelativePosition$D$D', function (x, y) {
var rp=this.getClosestEdge$D$D(x, y);
var d=this.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(rp).distance$java_awt_geom_Point2D(Clazz.new_($I$(2).c$$D$D,[x, y]));
if (d < 10.0 ) return rp;
if (this.getCurve$().contains$java_awt_geom_Point2D(Clazz.new_($I$(2).c$$D$D,[x, y]))) return $I$(3).RP_INNER_GENERAL;
return $I$(3).RP_OUTER;
});

Clazz.newMeth(C$, 'getArea$', function () {
return this.getCurve$();
});

Clazz.newMeth(C$, 'attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (e, edgeOrig, edgeDest) {
C$.superclazz.prototype.attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition.apply(this, [e, edgeOrig, edgeDest]);
if (Clazz.instanceOf(e, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
var e1=this.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeOrig);
var e2=e.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeDest);
var parity1=this.isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeOrig);
var parity2=e.isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeDest);
if ((e1 != null ) && (e2 != null ) && (parity1 != parity2 )  ) {
e1.disconnect$();
e2.disconnect$();
e1.connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(e2);
}}});

Clazz.newMeth(C$, 'getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (r) {
switch (r) {
case $I$(3).RP_CONNECT_START5:
return this._e.getIn$();
case $I$(3).RP_CONNECT_END3:
return this._e.getOut$();
}
return null;
});

Clazz.newMeth(C$, 'isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (r) {
switch (r) {
case $I$(3).RP_CONNECT_START5:
return true;
case $I$(3).RP_CONNECT_END3:
return false;
}
return true;
});

Clazz.newMeth(C$, 'detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
if (this.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge).isConnected$()) {
var c=this.getAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge);
this.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge).disconnect$();
}C$.superclazz.prototype.detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition.apply(this, [edge]);
});

Clazz.newMeth(C$, 'setEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_geom_Point2D_Double', function (edge, pos) {
switch (edge) {
case $I$(3).RP_CONNECT_START5:
this.setEdge5$java_awt_geom_Point2D_Double(pos);
break;
case $I$(3).RP_INNER_MOVE:
this.setCenter$java_awt_geom_Point2D_Double(pos);
break;
case $I$(3).RP_CONNECT_END3:
this.setEdge3$java_awt_geom_Point2D_Double(pos);
break;
case $I$(3).RP_EDIT_TANGENT_5:
this.updateControl5$java_awt_geom_Point2D_Double(pos);
break;
case $I$(3).RP_EDIT_TANGENT_3:
this.updateControl3$java_awt_geom_Point2D_Double(pos);
break;
}
});

Clazz.newMeth(C$, 'getConnectedEdges$', function () {
var result=Clazz.new_($I$(9));
result.add$TE($I$(3).RP_CONNECT_START5);
result.add$TE($I$(3).RP_CONNECT_END3);
return result;
});

Clazz.newMeth(C$, 'getTemplateElement$', function () {
return this._e;
});

Clazz.newMeth(C$, 'relativePositionFromEdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition', function (pos) {
switch (pos) {
case $I$(11).IN1:
return $I$(3).RP_CONNECT_START5;
case $I$(11).OUT1:
return $I$(3).RP_CONNECT_END3;
default:
return null;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
