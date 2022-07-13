(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.templateEditor"),p$1={},I$=[[0,['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateHelix'],['java.awt.geom.Point2D','.Double'],'java.util.HashSet',['fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','.RelativePosition'],'java.awt.Polygon','fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement','java.util.ArrayList',['fr.orsay.lri.varna.models.templates.RNATemplate','.EdgeEndPointPosition']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Helix", null, 'fr.orsay.lri.varna.applications.templateEditor.GraphicalTemplateElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_h','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix']]]

Clazz.newMeth(C$, 'c$$D$D$fr_orsay_lri_varna_models_templates_RNATemplate$java_util_List', function (x, y, tmp, existingRNAElements) {
C$.c$$D$D$S$fr_orsay_lri_varna_models_templates_RNATemplate.apply(this, [x, y, C$.getNextAutomaticCaption$java_util_List(existingRNAElements), tmp]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$S$fr_orsay_lri_varna_models_templates_RNATemplate', function (x, y, cap, tmp) {
Clazz.super_(C$, this);
this._h=Clazz.new_($I$(1,1).c$$S,[tmp, null, cap]);
this._h.setStartPosition$java_awt_geom_Point2D_Double(Clazz.new_($I$(2,1).c$$D$D,[x, y]));
this._h.setEndPosition$java_awt_geom_Point2D_Double(Clazz.new_($I$(2,1).c$$D$D,[x, y]));
this._h.setLength$I(1);
this._h.setCaption$S(cap);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix', function (templateHelix) {
Clazz.super_(C$, this);
this._h=templateHelix;
}, 1);

Clazz.newMeth(C$, 'getNextAutomaticCaption$java_util_List', function (existingRNAElements) {
var captions=Clazz.new_($I$(3,1));
for (var element, $element = existingRNAElements.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.applications.templateEditor.Helix")) {
var helix=element;
if (helix.getCaption$() != null ) {
captions.add$O(helix.getCaption$());
}}}
for (var i=1; ; i++) {
var candidateCaption="H" + i;
if (!captions.contains$O(candidateCaption)) {
return candidateCaption;
}}
}, 1);

Clazz.newMeth(C$, 'toggleFlipped$', function () {
this._h.setFlipped$Z(!this._h.isFlipped$());
this.updateAttachedUnpairedRegions$();
});

Clazz.newMeth(C$, 'updateAttachedUnpairedRegions$', function () {
for (var rpos, $rpos = this.getConnectedEdges$().iterator$(); $rpos.hasNext$()&&((rpos=($rpos.next$())),1);) {
var c=this.getAttachedElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(rpos);
if (c != null  && Clazz.instanceOf(c.second, "fr.orsay.lri.varna.applications.templateEditor.UnpairedRegion") ) {
var unpairedRegion=c.second;
var pos=this.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(rpos);
if (c.first === $I$(4).RP_CONNECT_START5 ) {
unpairedRegion.setEdge5$java_awt_geom_Point2D_Double(pos);
} else if (c.first === $I$(4).RP_CONNECT_END3 ) {
unpairedRegion.setEdge3$java_awt_geom_Point2D_Double(pos);
}}}
});

Clazz.newMeth(C$, 'getPosX$', function () {
return this._h.getStartPosition$().x;
});

Clazz.newMeth(C$, 'getCaption$', function () {
return this._h.getCaption$();
});

Clazz.newMeth(C$, 'getPosY$', function () {
return this._h.getStartPosition$().y;
});

Clazz.newMeth(C$, 'getTemplateElement$', function () {
return this._h;
});

Clazz.newMeth(C$, 'setX$D', function (x) {
this._h.getStartPosition$().x=x;
});

Clazz.newMeth(C$, 'setY$D', function (y) {
this._h.getStartPosition$().y=y;
});

Clazz.newMeth(C$, 'setPos$java_awt_geom_Point2D_Double', function (p) {
this._h.setStartPosition$java_awt_geom_Point2D_Double(p);
p$1.updateLength.apply(this, []);
});

Clazz.newMeth(C$, 'setPos$D$D', function (x, y) {
this.setPos$java_awt_geom_Point2D_Double(Clazz.new_($I$(2,1).c$$D$D,[x, y]));
});

Clazz.newMeth(C$, 'getPos$', function () {
return this._h.getStartPosition$();
});

Clazz.newMeth(C$, 'moveCenter$D$D', function (x, y) {
var center=Clazz.new_([(this._h.getStartPosition$().x + this._h.getEndPosition$().x) / 2.0, (this._h.getStartPosition$().y + this._h.getEndPosition$().y) / 2.0],$I$(2,1).c$$D$D);
var dx=x - center.x;
var dy=y - center.y;
this._h.setStartPosition$java_awt_geom_Point2D_Double(Clazz.new_([this._h.getStartPosition$().x + dx, this._h.getStartPosition$().y + dy],$I$(2,1).c$$D$D));
this._h.setEndPosition$java_awt_geom_Point2D_Double(Clazz.new_([this._h.getEndPosition$().x + dx, this._h.getEndPosition$().y + dy],$I$(2,1).c$$D$D));
});

Clazz.newMeth(C$, 'setExtent$D$D', function (x, y) {
this.setExtent$java_awt_geom_Point2D_Double(Clazz.new_($I$(2,1).c$$D$D,[x, y]));
});

Clazz.newMeth(C$, 'updateLength', function () {
this._h.setLength$I(this.getNbBP$());
}, p$1);

Clazz.newMeth(C$, 'setExtent$java_awt_geom_Point2D_Double', function (p) {
this._h.setEndPosition$java_awt_geom_Point2D_Double(p);
p$1.updateLength.apply(this, []);
});

Clazz.newMeth(C$, 'getExtentX$', function () {
return this._h.getEndPosition$().x;
});

Clazz.newMeth(C$, 'getExtent$', function () {
return this._h.getEndPosition$();
});

Clazz.newMeth(C$, 'getExtentY$', function () {
return this._h.getEndPosition$().y;
});

Clazz.newMeth(C$, 'getAbsStart5$', function () {
var dx=(this._h.getStartPosition$().x - this._h.getEndPosition$().x) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var dy=(this._h.getStartPosition$().y - this._h.getEndPosition$().y) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var nx=dy;
var ny=-dx;
var start5=Clazz.new_([(this.getPosX$() - 65.0 * nx / 2.0), (this.getPosY$() - 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
return start5;
});

Clazz.newMeth(C$, 'getAbsStart3$', function () {
var dx=(this._h.getStartPosition$().x - this._h.getEndPosition$().x) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var dy=(this._h.getStartPosition$().y - this._h.getEndPosition$().y) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var nx=dy;
var ny=-dx;
var start3=Clazz.new_([(this.getPosX$() + 65.0 * nx / 2.0), (this.getPosY$() + 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
return start3;
});

Clazz.newMeth(C$, 'getAbsEnd5$', function () {
var dx=(this._h.getStartPosition$().x - this._h.getEndPosition$().x) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var dy=(this._h.getStartPosition$().y - this._h.getEndPosition$().y) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var nx=dy;
var ny=-dx;
var end5=Clazz.new_([(this.getExtentX$() - 65.0 * nx / 2.0), (this.getExtentY$() - 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
return end5;
});

Clazz.newMeth(C$, 'getAbsEnd3$', function () {
var dx=(this._h.getStartPosition$().x - this._h.getEndPosition$().x) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var dy=(this._h.getStartPosition$().y - this._h.getEndPosition$().y) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var nx=dy;
var ny=-dx;
var end3=Clazz.new_([(this.getExtentX$() + 65.0 * nx / 2.0), (this.getExtentY$() + 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
return end3;
});

Clazz.newMeth(C$, 'getStart5$', function () {
if (this._h.isFlipped$()) return this.getAbsStart3$();
 else return this.getAbsStart5$();
});

Clazz.newMeth(C$, 'getStart3$', function () {
if (this._h.isFlipped$()) return this.getAbsStart5$();
 else return this.getAbsStart3$();
});

Clazz.newMeth(C$, 'getEnd5$', function () {
if (this._h.isFlipped$()) return this.getAbsEnd3$();
 else return this.getAbsEnd5$();
});

Clazz.newMeth(C$, 'getEnd3$', function () {
if (this._h.isFlipped$()) return this.getAbsEnd5$();
 else return this.getAbsEnd3$();
});

Clazz.newMeth(C$, 'getBoundingPolygon$', function () {
var dx=(this._h.getStartPosition$().x - this._h.getEndPosition$().x) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var dy=(this._h.getStartPosition$().y - this._h.getEndPosition$().y) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var nx=dy;
var ny=-dx;
var start5=Clazz.new_([(this.getPosX$() + 65.0 * nx / 2.0), (this.getPosY$() + 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
var end5=Clazz.new_([(this.getExtentX$() + 65.0 * nx / 2.0), (this.getExtentY$() + 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
var start3=Clazz.new_([(this.getPosX$() - 65.0 * nx / 2.0), (this.getPosY$() - 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
var end3=Clazz.new_([(this.getExtentX$() - 65.0 * nx / 2.0), (this.getExtentY$() - 65.0 * ny / 2.0)],$I$(2,1).c$$D$D);
var p=Clazz.new_($I$(5,1));
p.addPoint$I$I((start5.x|0), (start5.y|0));
p.addPoint$I$I((end5.x|0), (end5.y|0));
p.addPoint$I$I((end3.x|0), (end3.y|0));
p.addPoint$I$I((start3.x|0), (start3.y|0));
return p;
});

Clazz.newMeth(C$, 'getCenter$', function () {
return Clazz.new_([(((this._h.getStartPosition$().x + this._h.getEndPosition$().x) / 2.0)|0), (((this._h.getStartPosition$().y + this._h.getEndPosition$().y) / 2.0)|0)],$I$(2,1).c$$D$D);
});

Clazz.newMeth(C$, 'getCenterEditStart$', function () {
var dist=this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$());
var dx=(this._h.getEndPosition$().x - this._h.getStartPosition$().x) / (dist);
var dy=(this._h.getEndPosition$().y - this._h.getStartPosition$().y) / (dist);
return Clazz.new_([((this._h.getStartPosition$().x + (dist - 10.0) * dx)|0), ((this._h.getStartPosition$().y + (dist - 10.0) * dy)|0)],$I$(2,1).c$$D$D);
});

Clazz.newMeth(C$, 'getCenterEditEnd$', function () {
var dist=this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$());
var dx=(this._h.getEndPosition$().x - this._h.getStartPosition$().x) / (dist);
var dy=(this._h.getEndPosition$().y - this._h.getStartPosition$().y) / (dist);
return Clazz.new_([((this._h.getStartPosition$().x + (10.0) * dx)|0), ((this._h.getStartPosition$().y + (10.0) * dy)|0)],$I$(2,1).c$$D$D);
});

Clazz.newMeth(C$, 'getSelectionBox$', function () {
var dx=(this._h.getStartPosition$().x - this._h.getEndPosition$().x) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var dy=(this._h.getStartPosition$().y - this._h.getEndPosition$().y) / (this._h.getStartPosition$().distance$java_awt_geom_Point2D(this._h.getEndPosition$()));
var nx=dy;
var ny=-dx;
var hbox=this.getBoundingPolygon$();
var p=Clazz.new_($I$(5,1));
var start5=Clazz.new_([hbox.xpoints[0] + 15.0 * (dx + nx), hbox.ypoints[0] + 15.0 * (dy + ny)],$I$(2,1).c$$D$D);
var end5=Clazz.new_([hbox.xpoints[1] + 15.0 * (-dx + nx), hbox.ypoints[1] + 15.0 * (-dy + ny)],$I$(2,1).c$$D$D);
var end3=Clazz.new_([hbox.xpoints[2] + 15.0 * (-dx - nx), hbox.ypoints[2] + 15.0 * (-dy - ny)],$I$(2,1).c$$D$D);
;var start3=Clazz.new_([hbox.xpoints[3] + 15.0 * (dx - nx), hbox.ypoints[3] + 15.0 * (dy - ny)],$I$(2,1).c$$D$D);
;p.addPoint$I$I((start5.x|0), (start5.y|0));
p.addPoint$I$I((end5.x|0), (end5.y|0));
p.addPoint$I$I((end3.x|0), (end3.y|0));
p.addPoint$I$I((start3.x|0), (start3.y|0));
return p;
});

Clazz.newMeth(C$, 'getArea$', function () {
return this.getSelectionBox$();
});

Clazz.newMeth(C$, 'getRelativePosition$D$D', function (x, y) {
var current=Clazz.new_($I$(2,1).c$$D$D,[x, y]);
var p=this.getSelectionBox$();
if (p.contains$java_awt_geom_Point2D(current)) {
if (this.getCenterEditStart$().distance$java_awt_geom_Point2D(current) < 10.0 ) {
return $I$(4).RP_EDIT_START;
} else if (this.getCenterEditEnd$().distance$java_awt_geom_Point2D(current) < 10.0 ) {
return $I$(4).RP_EDIT_END;
} else if (this.getCenter$().distance$java_awt_geom_Point2D(current) < 13.0 ) {
return $I$(4).RP_INNER_MOVE;
} else if (this.getEnd3$().distance$java_awt_geom_Point2D(current) < 7.0 ) {
return $I$(4).RP_CONNECT_END3;
} else if (this.getEnd5$().distance$java_awt_geom_Point2D(current) < 7.0 ) {
return $I$(4).RP_CONNECT_END5;
} else if (this.getStart3$().distance$java_awt_geom_Point2D(current) < 7.0 ) {
return $I$(4).RP_CONNECT_START3;
} else if (this.getStart5$().distance$java_awt_geom_Point2D(current) < 7.0 ) {
return $I$(4).RP_CONNECT_START5;
}return $I$(4).RP_INNER_GENERAL;
} else return $I$(4).RP_OUTER;
});

Clazz.newMeth(C$, 'getClosestEdge$D$D', function (x, y) {
var result=$I$(4).RP_OUTER;
var dist=1.7976931348623157E308;
var current=Clazz.new_($I$(2,1).c$$D$D,[x, y]);
var dcand=this.getStart5$().distance$java_awt_geom_Point2D(current);
if (dcand < dist ) {
dist=dcand;
result=$I$(4).RP_CONNECT_START5;
}dcand=this.getStart3$().distance$java_awt_geom_Point2D(current);
if (dcand < dist ) {
dist=dcand;
result=$I$(4).RP_CONNECT_START3;
}dcand=this.getEnd5$().distance$java_awt_geom_Point2D(current);
if (dcand < dist ) {
dist=dcand;
result=$I$(4).RP_CONNECT_END5;
}dcand=this.getEnd3$().distance$java_awt_geom_Point2D(current);
if (dcand < dist ) {
dist=dcand;
result=$I$(4).RP_CONNECT_END3;
}return result;
});

Clazz.newMeth(C$, 'getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
switch (edge) {
case $I$(4).RP_CONNECT_END3:
return this.getEnd3$();
case $I$(4).RP_CONNECT_END5:
return this.getEnd5$();
case $I$(4).RP_CONNECT_START5:
return this.getStart5$();
case $I$(4).RP_CONNECT_START3:
return this.getStart3$();
case $I$(4).RP_EDIT_START:
return this.getPos$();
case $I$(4).RP_EDIT_END:
return this.getExtent$();
case $I$(4).RP_INNER_MOVE:
return this.getCenter$();
}
return this.getCenter$();
});

Clazz.newMeth(C$, 'getConnectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
switch (edge) {
case $I$(4).RP_CONNECT_END3:
return $I$(4).RP_CONNECT_START3;
case $I$(4).RP_CONNECT_END5:
return $I$(4).RP_CONNECT_START5;
case $I$(4).RP_CONNECT_START5:
return $I$(4).RP_CONNECT_END5;
case $I$(4).RP_CONNECT_START3:
return $I$(4).RP_CONNECT_END3;
}
return $I$(4).RP_OUTER;
});

Clazz.newMeth(C$, 'isAnchored5Start$', function () {
return (this._h.getIn1$().getOtherElement$() != null );
});

Clazz.newMeth(C$, 'isAnchored5End$', function () {
return (this._h.getOut1$().getOtherElement$() != null );
});

Clazz.newMeth(C$, 'isAnchored3Start$', function () {
return (this._h.getOut2$().getOtherElement$() != null );
});

Clazz.newMeth(C$, 'isAnchored3End$', function () {
return (this._h.getIn2$().getOtherElement$() != null );
});

Clazz.newMeth(C$, 'getNbBP$', function () {
var pos=this.getPos$();
var extent=this.getExtent$();
var helLength=pos.distance$java_awt_geom_Point2D(extent);
return Math.max((Math.round(helLength / 40.0)|0) + 1, 2);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$Z', function (g2d, isSelected) {
g2d.setStroke$java_awt_Stroke(this._solidStroke);
var pos=this.getPos$();
var extent=this.getExtent$();
var dx=(pos.x - extent.x) / pos.distance$java_awt_geom_Point2D(extent);
var dy=(pos.y - extent.y) / pos.distance$java_awt_geom_Point2D(extent);
var nx=65.0 * dy / 2.0;
var ny=-65.0 * dx / 2.0;
var start5=this.getStart5$();
var end5=this.getEnd5$();
var start3=this.getStart3$();
var end3=this.getEnd3$();
for (var e, $e = this.getConnectedEdges$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
g2d.setStroke$java_awt_Stroke(this._solidStroke);
g2d.setColor$java_awt_Color($I$(6).BACKBONE_COLOR);
var p1=this.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(e);
var p2=this.getEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(this.getConnectedEdge$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(e));
if (this._mainColors.containsKey$O(e)) {
g2d.setColor$java_awt_Color(this._mainColors.get$O(e));
g2d.setStroke$java_awt_Stroke(this._boldStroke);
}g2d.drawLine$I$I$I$I((p1.x|0), (p1.y|0), (((p1.x + p2.x)|0)/2|0), (((p1.y + p2.y)|0)/2|0));
}
g2d.setColor$java_awt_Color($I$(6).NUMBER_COLOR);
var captionx=(this._h.isFlipped$() ? -1.0 : 1.0) * 1.5 * nx  + (start3.x + end3.x) / 2.0;
var captiony=(this._h.isFlipped$() ? -1.0 : 1.0) * 1.5 * ny  + (start3.y + end3.y) / 2.0;
this.drawStringCentered$java_awt_Graphics2D$S$D$D(g2d, this.getCaption$(), captionx, captiony);
var nbBasePairs=this._h.getLength$();
g2d.setStroke$java_awt_Stroke(this._solidStroke);
for (var i=0; i < nbBasePairs; i++) {
g2d.setColor$java_awt_Color($I$(6).BASE_PAIR_COLOR);
var p5=Clazz.new_([(i * start5.x + (nbBasePairs - 1 - i ) * end5.x) / (nbBasePairs - 1), (i * start5.y + (nbBasePairs - 1 - i ) * end5.y) / (nbBasePairs - 1)],$I$(2,1).c$$D$D);
var p3=Clazz.new_([(i * start3.x + (nbBasePairs - 1 - i ) * end3.x) / (nbBasePairs - 1), (i * start3.y + (nbBasePairs - 1 - i ) * end3.y) / (nbBasePairs - 1)],$I$(2,1).c$$D$D);
g2d.drawLine$I$I$I$I((p3.x|0), (p3.y|0), (p5.x|0), (p5.y|0));
if (i == 0) {
if (this.isAnchored5End$()) {
this.drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
} else {
this.drawAnchor3$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
}if (this.isAnchored3End$()) {
this.drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
} else {
this.drawAnchor5$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
}} else if (i == nbBasePairs - 1) {
if (this.isAnchored5Start$()) {
this.drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
} else {
this.drawAnchor5$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
}if (this.isAnchored3Start$()) {
this.drawMagnet$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
} else {
this.drawAnchor3$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
}} else {
this.drawBase$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p3);
this.drawBase$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, p5);
}}
if (isSelected) {
nx=dy;
ny=-dx;
var p=this.getSelectionBox$();
g2d.setColor$java_awt_Color($I$(6).BACKBONE_COLOR);
g2d.setStroke$java_awt_Stroke(this._dashedStroke);
g2d.draw$java_awt_Shape(p);
var center=this.getCenter$();
g2d.setStroke$java_awt_Stroke(this._solidStroke);
this.drawMove$java_awt_Graphics2D$java_awt_geom_Point2D_Double(g2d, center);
this.drawEditStart$java_awt_Graphics2D$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D$D$D(g2d, this, -dx, -dy, nx, ny);
this.drawEditEnd$java_awt_Graphics2D$fr_orsay_lri_varna_applications_templateEditor_Helix$D$D$D$D(g2d, this, -dx, -dy, nx, ny);
}});

Clazz.newMeth(C$, 'translate$D$D', function (x, y) {
var pos=this.getPos$();
var extent=this.getExtent$();
this.setPos$D$D(pos.x + x, pos.y + y);
this.setExtent$D$D(extent.x + x, extent.y + y);
});

Clazz.newMeth(C$, 'getHelix$', function () {
return this._h;
});

Clazz.newMeth(C$, 'getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (r) {
switch (r) {
case $I$(4).RP_CONNECT_START5:
return this._h.getIn1$();
case $I$(4).RP_CONNECT_START3:
return this._h.getOut2$();
case $I$(4).RP_CONNECT_END3:
return this._h.getIn2$();
case $I$(4).RP_CONNECT_END5:
return this._h.getOut1$();
}
return null;
});

Clazz.newMeth(C$, 'isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (r) {
switch (r) {
case $I$(4).RP_CONNECT_START5:
return true;
case $I$(4).RP_CONNECT_START3:
return false;
case $I$(4).RP_CONNECT_END3:
return true;
case $I$(4).RP_CONNECT_END5:
return false;
}
return true;
});

Clazz.newMeth(C$, 'attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (e, edgeOrig, edgeDest) {
C$.superclazz.prototype.attach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition.apply(this, [e, edgeOrig, edgeDest]);
var e1=this.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeOrig);
var e2=e.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeDest);
var parity1=this.isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeOrig);
var parity2=e.isIn$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edgeDest);
if ((e1 != null ) && (e2 != null ) && (parity1 != parity2 )  ) {
e1.disconnect$();
e2.disconnect$();
e1.connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(e2);
}});

Clazz.newMeth(C$, 'detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition', function (edge) {
if (this.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge).isConnected$()) {
this.getEndPoint$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition(edge).disconnect$();
}C$.superclazz.prototype.detach$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition.apply(this, [edge]);
});

Clazz.newMeth(C$, 'setEdgePosition$fr_orsay_lri_varna_applications_templateEditor_GraphicalTemplateElement_RelativePosition$java_awt_geom_Point2D_Double', function (edge, pos) {
switch (edge) {
case $I$(4).RP_EDIT_START:
this.setPos$java_awt_geom_Point2D_Double(pos);
break;
case $I$(4).RP_EDIT_END:
this.setExtent$java_awt_geom_Point2D_Double(pos);
break;
case $I$(4).RP_INNER_MOVE:
this.moveCenter$D$D(pos.x, pos.y);
break;
}
this.updateAttachedUnpairedRegions$();
});

Clazz.newMeth(C$, 'getConnectedEdges$', function () {
var result=Clazz.new_($I$(7,1));
result.add$O($I$(4).RP_CONNECT_START5);
result.add$O($I$(4).RP_CONNECT_START3);
result.add$O($I$(4).RP_CONNECT_END5);
result.add$O($I$(4).RP_CONNECT_END3);
return result;
});

Clazz.newMeth(C$, 'toString', function () {
return "Helix " + this.getCaption$();
});

Clazz.newMeth(C$, 'relativePositionFromEdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition', function (pos) {
switch (pos) {
case $I$(8).IN1:
return $I$(4).RP_CONNECT_START5;
case $I$(8).OUT1:
return $I$(4).RP_CONNECT_END5;
case $I$(8).IN2:
return $I$(4).RP_CONNECT_END3;
case $I$(8).OUT2:
return $I$(4).RP_CONNECT_START3;
default:
return null;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:19 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
