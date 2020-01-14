(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'javajs.util.P3','org.jmol.util.Txt','org.jmol.render.TextRenderer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HoverRenderer", null, 'org.jmol.render.ShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tempXY=null;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tempXY=Clazz.array(Float.TYPE, [3]);
}, 1);

Clazz.newMeth(C$, 'render$', function () {
if (this.tm.isNavigating$()) return false;
if (this.ptTemp == null ) this.ptTemp=Clazz.new_($I$(1));
var hover=this.shape;
var antialias=this.g3d.isAntialiased$();
var text=hover.hoverText;
var label;
if (hover.atomIndex >= 0) {
var atom=this.ms.at[hover.atomIndex];
label=(hover.specialLabel != null  ? hover.specialLabel : hover.atomFormats != null  && hover.atomFormats[hover.atomIndex] != null   ? this.vwr.ms.getLabeler$().formatLabel$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$S$javajs_util_P3(this.vwr, atom, hover.atomFormats[hover.atomIndex], this.ptTemp) : hover.labelFormat != null  ? this.vwr.ms.getLabeler$().formatLabel$org_jmol_viewer_Viewer$org_jmol_modelset_Atom$S$javajs_util_P3(this.vwr, atom, this.fixLabel$org_jmol_modelset_Atom$S(atom, hover.labelFormat), this.ptTemp) : null);
if (label == null ) return false;
text.setXYZs$I$I$I$I(atom.sX, atom.sY, 1, -2147483648);
} else if (hover.text != null ) {
label=hover.text;
text.setXYZs$I$I$I$I(hover.xy.x, hover.xy.y, 1, -2147483648);
} else {
return true;
}if (this.vwr != null  && (label.indexOf$S("%{") >= 0 || label.indexOf$S("@{") >= 0 ) ) label=$I$(2).formatText$org_jmol_api_JmolViewer$S(this.vwr, label);
text.setText$S(label);
$I$(3).render$org_jmol_modelset_Text$org_jmol_api_JmolRendererInterface$F$F$Z$FA$FA(text, this.g3d, 0, antialias ? 2 : 1, false, null, this.tempXY);
return true;
});

Clazz.newMeth(C$, 'fixLabel$org_jmol_modelset_Atom$S', function (atom, label) {
if (label == null ) return null;
return (this.vwr.ms.isJmolDataFrameForModel$I(atom.mi) && label.equals$O("%U")  ? "%W" : label);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
