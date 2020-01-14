(function(){var P$=Clazz.newPackage("org.jmol.rendersurface"),I$=[];
var C$=Clazz.newClass(P$, "MolecularOrbitalRenderer", null, 'org.jmol.rendersurface.IsosurfaceRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'render$', function () {
this.imageFontScaling=this.vwr.imageFontScaling;
this.renderIso$();
return this.needTranslucent;
});

Clazz.newMeth(C$, 'renderInfo$', function () {
if (this.isExport || this.vwr.am.cmi < 0  || this.mesh.title == null   || !this.g3d.setC$H(this.vwr.cm.colixBackgroundContrast)  || this.vwr.gdata.getTextPosition$() != 0 ) return;
var ht=this.vwr.getInt$I(553648148);
this.vwr.gdata.setFontFid$B(($b$[0] = this.vwr.gdata.getFontFidFS$S$F("Serif", ht * this.imageFontScaling), $b$[0]));
var lineheight=Math.round((ht + 1) * this.imageFontScaling);
var x=Math.round(5 * this.imageFontScaling);
var y=lineheight;
for (var i=0; i < this.mesh.title.length; i++) if (this.mesh.title[i].length$() > 0) {
this.g3d.drawStringNoSlab$S$javajs_awt_Font$I$I$I$H(this.mesh.title[i], null, x, y, 0, 0);
y+=lineheight;
}
this.vwr.gdata.setTextPosition$I(y);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
