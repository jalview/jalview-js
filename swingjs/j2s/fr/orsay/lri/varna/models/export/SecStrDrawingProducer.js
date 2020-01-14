(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.export"),p$1={},I$=[[0,'java.util.Vector','java.awt.Color','fr.orsay.lri.varna.models.export.LineCommand',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.models.export.ArcCommand','fr.orsay.lri.varna.models.export.TextCommand','fr.orsay.lri.varna.models.export.RectangleCommand','fr.orsay.lri.varna.models.export.CircleCommand','fr.orsay.lri.varna.models.export.ColorCommand','fr.orsay.lri.varna.models.export.FillCircleCommand','fr.orsay.lri.varna.models.export.PolygonCommand','fr.orsay.lri.varna.models.export.FillPolygonCommand','fr.orsay.lri.varna.models.export.FontCommand',['java.awt.geom.Rectangle2D','.Double'],'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SecStrDrawingProducer");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._commands=null;
this._scale=0;
this._xmin=0;
this._ymin=0;
this._xmax=0;
this._ymax=0;
this._curColor=null;
this._backgroundColor=null;
this._fontsize=0;
this._font=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._commands=Clazz.new_($I$(1));
this._scale=1.0;
this._xmin=1.7976931348623157E308;
this._ymin=1.7976931348623157E308;
this._xmax=-1.7976931348623157E308;
this._ymax=-1.7976931348623157E308;
this._curColor=$I$(2).black;
this._backgroundColor=null;
this._fontsize=10.0;
this._font=18;
}, 1);

Clazz.newMeth(C$, 'getCurrentColor$', function () {
return this._curColor;
});

Clazz.newMeth(C$, 'getCurFontSize$', function () {
return this._fontsize;
});

Clazz.newMeth(C$, 'getCurrentFont$', function () {
return this._font;
});

Clazz.newMeth(C$, 'setColorS$java_awt_Color', function (col) {
this._curColor=col;
return "";
});

Clazz.newMeth(C$, 'resetBoundingBox', function () {
this._xmin=1.7976931348623157E308;
this._ymin=1.7976931348623157E308;
this._xmax=-1.7976931348623157E308;
this._ymax=-1.7976931348623157E308;
}, p$1);

Clazz.newMeth(C$, 'updateBoundingBox$D$D', function (x, y) {
this._xmin=Math.min(this._xmin, x - 10);
this._ymin=Math.min(this._ymin, y - 10);
this._xmax=Math.max(this._xmax, x + 10);
this._ymax=Math.max(this._ymax, y + 10);
}, p$1);

Clazz.newMeth(C$, 'drawLine$D$D$D$D$D', function (x0, y0, x1, y1, thickness) {
p$1.updateBoundingBox$D$D.apply(this, [x0, y0]);
p$1.updateBoundingBox$D$D.apply(this, [x1, y1]);
this._commands.add$TE(Clazz.new_($I$(3).c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D,[Clazz.new_($I$(4).c$$D$D,[x0, y0]), Clazz.new_($I$(4).c$$D$D,[x1, y1]), thickness]));
});

Clazz.newMeth(C$, 'drawArc$java_awt_geom_Point2D_Double$D$D$D$D', function (origine, width, height, startAngle, endAngle) {
p$1.updateBoundingBox$D$D.apply(this, [origine.x + width / 2.0, origine.y + height / 2.0]);
p$1.updateBoundingBox$D$D.apply(this, [origine.x - width / 2.0, origine.y - height / 2.0]);
this._commands.add$TE(Clazz.new_($I$(5).c$$java_awt_geom_Point2D_Double$D$D$D$D,[origine, width, height, startAngle, endAngle]));
});

Clazz.newMeth(C$, 'drawText$D$D$S', function (x, y, txt) {
p$1.updateBoundingBox$D$D.apply(this, [x, y]);
this._commands.add$TE(Clazz.new_($I$(6).c$$java_awt_geom_Point2D_Double$S,[Clazz.new_($I$(4).c$$D$D,[x, y]),  String.instantialize(txt)]));
});

Clazz.newMeth(C$, 'drawRectangle$D$D$D$D$D', function (x, y, w, h, thickness) {
p$1.updateBoundingBox$D$D.apply(this, [x, y]);
p$1.updateBoundingBox$D$D.apply(this, [x + w, y + h]);
this._commands.add$TE(Clazz.new_($I$(7).c$$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D,[Clazz.new_($I$(4).c$$D$D,[x, y]), Clazz.new_($I$(4).c$$D$D,[w, h]), thickness]));
});

Clazz.newMeth(C$, 'fillRectangle$D$D$D$D$java_awt_Color', function (x, y, w, h, color) {
var xtab=Clazz.array(Double.TYPE, [4]);
var ytab=Clazz.array(Double.TYPE, [4]);
xtab[0]=x;
xtab[1]=x + w;
xtab[2]=x + w;
xtab[3]=x;
ytab[0]=y;
ytab[1]=y;
ytab[2]=y + h;
ytab[3]=y + h;
this.fillPolygon$DA$DA$java_awt_Color(xtab, ytab, color);
});

Clazz.newMeth(C$, 'drawCircle$D$D$D$D', function (x, y, radius, thickness) {
p$1.updateBoundingBox$D$D.apply(this, [x - radius, y - radius]);
p$1.updateBoundingBox$D$D.apply(this, [x + radius, y + radius]);
this._commands.add$TE(Clazz.new_($I$(8).c$$java_awt_geom_Point2D_Double$D$D,[Clazz.new_($I$(4).c$$D$D,[x, y]), radius, thickness]));
});

Clazz.newMeth(C$, 'setColor$java_awt_Color', function (col) {
this._curColor=col;
this._commands.add$TE(Clazz.new_($I$(9).c$$java_awt_Color,[col]));
});

Clazz.newMeth(C$, 'setBackgroundColor$java_awt_Color', function (col) {
this._backgroundColor=col;
});

Clazz.newMeth(C$, 'removeBackgroundColor$', function () {
this._backgroundColor=null;
});

Clazz.newMeth(C$, 'fillCircle$D$D$D$D$java_awt_Color', function (x, y, radius, thickness, color) {
p$1.updateBoundingBox$D$D.apply(this, [x - radius, y - radius]);
p$1.updateBoundingBox$D$D.apply(this, [x + radius, y + radius]);
this._commands.add$TE(Clazz.new_($I$(10).c$$java_awt_geom_Point2D_Double$D$D$java_awt_Color,[Clazz.new_($I$(4).c$$D$D,[x, y]), radius, thickness, color]));
});

Clazz.newMeth(C$, 'drawPolygon$DA$DA$D', function (xtab, ytab, thickness) {
if (xtab.length == ytab.length) {
var points=Clazz.array($I$(4), [xtab.length]);
for (var i=0; i < xtab.length; i++) {
points[i]=Clazz.new_($I$(4).c$$D$D,[xtab[i], ytab[i]]);
p$1.updateBoundingBox$D$D.apply(this, [xtab[i], ytab[i]]);
}
this._commands.add$TE(Clazz.new_($I$(11).c$$java_awt_geom_Point2D_DoubleA$D,[points, thickness]));
}});

Clazz.newMeth(C$, 'drawPolygon$java_awt_geom_GeneralPath$D', function (p, thickness) {
var pi=p.getPathIterator$java_awt_geom_AffineTransform(null);
var v=Clazz.new_($I$(1));
var coords=Clazz.array(Double.TYPE, [6]);
while (!pi.isDone$()){
var code=pi.currentSegment$DA(coords);
if (code == 0) {
v.add$TE(Clazz.new_($I$(4).c$$D$D,[coords[0], coords[1]]));
}if (code == 1) {
v.add$TE(Clazz.new_($I$(4).c$$D$D,[coords[0], coords[1]]));
}pi.next$();
}
var xtab=Clazz.array(Double.TYPE, [v.size$()]);
var ytab=Clazz.array(Double.TYPE, [v.size$()]);
for (var i=0; i < v.size$(); i++) {
xtab[i]=v.get$I(i).x;
ytab[i]=v.get$I(i).y;
}
this.drawPolygon$DA$DA$D(xtab, ytab, thickness);
});

Clazz.newMeth(C$, 'fillPolygon$java_awt_geom_GeneralPath$java_awt_Color', function (p, color) {
var pi=p.getPathIterator$java_awt_geom_AffineTransform(null);
var v=Clazz.new_($I$(1));
var coords=Clazz.array(Double.TYPE, [6]);
while (!pi.isDone$()){
var code=pi.currentSegment$DA(coords);
if (code == 0) {
v.add$TE(Clazz.new_($I$(4).c$$D$D,[coords[0], coords[1]]));
}if (code == 1) {
v.add$TE(Clazz.new_($I$(4).c$$D$D,[coords[0], coords[1]]));
}pi.next$();
}
var xtab=Clazz.array(Double.TYPE, [v.size$()]);
var ytab=Clazz.array(Double.TYPE, [v.size$()]);
for (var i=0; i < v.size$(); i++) {
xtab[i]=v.get$I(i).x;
ytab[i]=v.get$I(i).y;
}
this.fillPolygon$DA$DA$java_awt_Color(xtab, ytab, color);
});

Clazz.newMeth(C$, 'fillPolygon$DA$DA$java_awt_Color', function (xtab, ytab, color) {
if (xtab.length == ytab.length) {
var points=Clazz.array($I$(4), [xtab.length]);
for (var i=0; i < xtab.length; i++) {
points[i]=Clazz.new_($I$(4).c$$D$D,[xtab[i], ytab[i]]);
p$1.updateBoundingBox$D$D.apply(this, [xtab[i], ytab[i]]);
}
this._commands.add$TE(Clazz.new_($I$(12).c$$java_awt_geom_Point2D_DoubleA$java_awt_Color,[points, color]));
}});

Clazz.newMeth(C$, 'setFont$I$D', function (font, size) {
this._fontsize=size;
this._font=font;
this._commands.add$TE(Clazz.new_($I$(13).c$$I$D,[font, size]));
});

Clazz.newMeth(C$, 'setScale$D', function (sc) {
this._scale=sc;
});

Clazz.newMeth(C$, 'getScale$', function () {
return this._scale;
});

Clazz.newMeth(C$, 'getBoundingBox$', function () {
return (Clazz.new_($I$(14).c$$D$D$D$D,[this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin]));
});

Clazz.newMeth(C$, 'transform$java_awt_geom_Point2D_Double$D$D$D', function (p, factor, dx, dy) {
return p$1.transform$D$D$D$D$D.apply(this, [p.x, p.y, factor, dx, dy]);
}, p$1);

Clazz.newMeth(C$, 'transform$D$D$D$D$D', function (x, y, factor, dx, dy) {
return Clazz.new_($I$(4).c$$D$D,[(x + dx) * factor, (y + dy) * factor]);
}, p$1);

Clazz.newMeth(C$, 'export$', function () {
var oldbb=this.getBoundingBox$();
var dx=-oldbb.x;
var dy=-oldbb.y;
var nbb=Clazz.new_($I$(14).c$$D$D$D$D,[0, 0, oldbb.width * this._scale, oldbb.height * this._scale]);
var buf=Clazz.new_($I$(15));
buf.append$S(this.headerS$java_awt_geom_Rectangle2D_Double(nbb));
if (this._backgroundColor != null ) {
var w=oldbb.width * this._scale;
var h=oldbb.height * this._scale;
var tab=Clazz.array($I$(4), [4]);
tab[0]=Clazz.new_($I$(4).c$$D$D,[0, 0]);
tab[1]=Clazz.new_($I$(4).c$$D$D,[w, 0]);
tab[2]=Clazz.new_($I$(4).c$$D$D,[w, h]);
tab[3]=Clazz.new_($I$(4).c$$D$D,[0, h]);
buf.append$S(this.fillPolygonS$java_awt_geom_Point2D_DoubleA$java_awt_Color(tab, this._backgroundColor));
}for (var i=0; i < this._commands.size$(); i++) {
var ge=this._commands.elementAt$I(i);
if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.LineCommand")) {
var c=ge;
var tmp=this.drawLineS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_orig$(), this._scale, dx, dy]), p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_dest$(), this._scale, dx, dy]), c.get_thickness$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.TextCommand")) {
var c=ge;
var tmp=this.drawTextS$java_awt_geom_Point2D_Double$S(p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_base$(), this._scale, dx, dy]), c.get_txt$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.RectangleCommand")) {
var c=ge;
var tmp=this.drawRectangleS$java_awt_geom_Point2D_Double$java_awt_geom_Point2D_Double$D(p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_orig$(), this._scale, dx, dy]), p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_dims$(), this._scale, 0.0, 0.0]), c.get_thickness$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.CircleCommand")) {
var c=ge;
var tmp=this.drawCircleS$java_awt_geom_Point2D_Double$D$D(p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_base$(), this._scale, dx, dy]), c.get_radius$() * this._scale, c.get_thickness$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.FillCircleCommand")) {
var c=ge;
var tmp=this.fillCircleS$java_awt_geom_Point2D_Double$D$D$java_awt_Color(p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.get_base$(), this._scale, dx, dy]), c.get_radius$() * this._scale, c.get_thickness$(), c.get_color$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.FontCommand")) {
var c=ge;
var tmp=this.setFontS$I$D(c.get_font$(), c.get_size$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.ColorCommand")) {
var c=ge;
var tmp=this.setColorS$java_awt_Color(c.getColor$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.ArcCommand")) {
var c=ge;
var tmp=this.drawArcS$java_awt_geom_Point2D_Double$D$D$D$D(p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [c.getCenter$(), this._scale, dx, dy]), c.getWidth$() * this._scale, c.getHeight$() * this._scale, c.getStartAngle$(), c.getEndAngle$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.PolygonCommand")) {
var c=ge;
var points=c.get_points$();
for (var j=0; j < points.length; j++) {
points[j]=p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [points[j], this._scale, dx, dy]);
}
var tmp=this.drawPolygonS$java_awt_geom_Point2D_DoubleA$D(points, c.get_thickness$());
buf.append$S(tmp);
} else if (Clazz.instanceOf(ge, "fr.orsay.lri.varna.models.export.FillPolygonCommand")) {
var c=ge;
var points=c.get_points$();
for (var j=0; j < points.length; j++) {
points[j]=p$1.transform$java_awt_geom_Point2D_Double$D$D$D.apply(this, [points[j], this._scale, dx, dy]);
}
var tmp=this.fillPolygonS$java_awt_geom_Point2D_DoubleA$java_awt_Color(points, c.get_color$());
buf.append$S(tmp);
}}
buf.append$S(this.footerS$());
return buf.toString();
});

Clazz.newMeth(C$, 'reset$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:45 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
