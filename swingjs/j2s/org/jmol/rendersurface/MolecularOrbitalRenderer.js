(function(){var P$=Clazz.newPackage("org.jmol.rendersurface"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MolecularOrbitalRenderer", null, 'org.jmol.rendersurface.IsosurfaceRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'render$', function () {
this.imageFontScaling=this.vwr.imageFontScaling;
this.renderIso$();
return this.needTranslucent;
});

Clazz.newMeth(C$, 'renderInfo$', function () {
if (this.isExport || this.vwr.am.cmi < 0  || this.mesh.title == null   || !this.g3d.setC$H(this.vwr.cm.colixBackgroundContrast)  || this.vwr.gdata.getTextPosition$() != 0 ) return;
var ht=this.vwr.getInt$I(553648147);
this.vwr.gdata.setFontFid$B(this.vwr.gdata.getFontFidFS$S$F("Serif", ht * this.imageFontScaling));
var lineheight=Math.round((ht + 1) * this.imageFontScaling);
var x=Math.round(5 * this.imageFontScaling);
var y=lineheight;
for (var i=0; i < this.mesh.title.length; i++) if (this.mesh.title[i].length$() > 0) {
this.g3d.drawStringNoSlab$S$org_jmol_util_Font$I$I$I$H(this.mesh.title[i], null, x, y, 0, 0);
y+=lineheight;
}
this.vwr.gdata.setTextPosition$I(y);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:43 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
