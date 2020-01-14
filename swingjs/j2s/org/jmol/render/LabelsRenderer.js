(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'javajs.util.P3i','javajs.util.P3','org.jmol.viewer.JC','org.jmol.render.TextRenderer','org.jmol.modelset.Text']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LabelsRenderer", null, 'org.jmol.render.FontLineShapeRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.minZ=null;
this.ascent=0;
this.descent=0;
this.sppm=0;
this.xy=null;
this.screen=null;
this.fidPrevious=0;
this.pTemp=null;
this.bgcolix=0;
this.labelColix=0;
this.fid=0;
this.atom=null;
this.atomPt=null;
this.isAbsolute=false;
this.offset=0;
this.textAlign=0;
this.pointer=0;
this.zSlab=0;
this.zBox=0;
this.boxXY=null;
this.scalePixelsPerMicron=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.minZ=Clazz.array(Integer.TYPE, [1]);
this.xy=Clazz.array(Float.TYPE, [3]);
this.screen=Clazz.new_($I$(1));
this.pTemp=Clazz.new_($I$(2));
this.zSlab=-2147483648;
}, 1);

Clazz.newMeth(C$, 'render$', function () {
this.fidPrevious=($b$[0] = 0, $b$[0]);
var labels=this.shape;
var labelStrings=labels.strings;
var fids=labels.fids;
var offsets=labels.offsets;
if (labelStrings == null ) return false;
var atoms=this.ms.at;
var backgroundColixContrast=this.vwr.cm.colixBackgroundContrast;
var backgroundColor=this.vwr.getBackgroundArgb$();
this.sppm=this.vwr.getScalePixelsPerAngstrom$Z(true);
this.scalePixelsPerMicron=(this.vwr.getBoolean$I(603979845) ? this.sppm * 10000.0 : 0);
this.imageFontScaling=this.vwr.imageFontScaling;
var iGroup=-1;
this.minZ[0]=2147483647;
var isAntialiased=this.g3d.isAntialiased$();
for (var i=labelStrings.length; --i >= 0; ) {
this.atomPt=this.atom=atoms[i];
if (!this.isVisibleForMe$org_jmol_modelset_Atom(this.atom)) continue;
var label=labelStrings[i];
if (label == null  || label.length$() == 0  || labels.mads != null  && labels.mads[i] < 0  ) continue;
this.labelColix=labels.getColix2$I$org_jmol_modelset_Atom$Z(i, this.atom, false);
this.bgcolix=labels.getColix2$I$org_jmol_modelset_Atom$Z(i, this.atom, true);
if (this.bgcolix == 0 && this.vwr.gdata.getColorArgbOrGray$H(this.labelColix) == backgroundColor ) this.labelColix=backgroundColixContrast;
this.fid=($b$[0] = ((fids == null  || i >= fids.length  || fids[i] == 0 ) ? (labels.zeroFontId|0) : (fids[i]|0)), $b$[0]);
this.offset=(offsets == null  || i >= offsets.length  ? 0 : offsets[i]);
var labelsFront=((this.offset & 32) != 0);
var labelsGroup=((this.offset & 16) != 0);
this.textAlign=$I$(3).getAlignment$I(this.offset);
this.isAbsolute=$I$(3).isOffsetAbsolute$I(this.offset);
this.pointer=$I$(3).getPointer$I(this.offset);
this.zSlab=this.atom.sZ - ($s$[0] = this.atom.sD/2, $s$[0]) - 3;
if (this.zSlab < 1) this.zSlab=1;
this.zBox=this.zSlab;
if (labelsGroup) {
var group=this.atom.group;
var ig=group.groupIndex;
if (ig != iGroup) {
group.getMinZ$org_jmol_modelset_AtomA$IA(atoms, this.minZ);
iGroup=ig;
}this.zBox=this.minZ[0];
} else if (labelsFront) {
this.zBox=1;
}if (this.zBox < 1) this.zBox=1;
var text=labels.getLabel$I(i);
this.boxXY=(!this.isExport || this.vwr.creatingImage  ? labels.getBox$I(i) : Clazz.array(Float.TYPE, [5]));
if (this.boxXY == null ) labels.putBox$I$FA(i, this.boxXY=Clazz.array(Float.TYPE, [5]));
text=this.renderLabelOrMeasure$org_jmol_modelset_Text$S(text, label);
if (text != null ) {
labels.putLabel$I$org_jmol_modelset_Text(i, text);
}if (isAntialiased) {
this.boxXY[0] /= 2;
this.boxXY[1] /= 2;
}this.boxXY[4]=this.zBox;
}
return false;
});

Clazz.newMeth(C$, 'renderLabelOrMeasure$org_jmol_modelset_Text$S', function (text, label) {
var newText=false;
if (text != null ) {
if (text.font == null ) text.setFontFromFid$B(($b$[0] = this.fid, $b$[0]));
text.atomX=this.atomPt.sX;
text.atomY=this.atomPt.sY;
text.atomZ=this.zSlab;
if (text.pymolOffset == null ) {
text.setXYZs$I$I$I$I(this.atomPt.sX, this.atomPt.sY, this.zBox, this.zSlab);
text.colix=this.labelColix;
text.bgcolix=this.bgcolix;
} else {
text.getPymolScreenOffset$javajs_util_P3$javajs_util_P3i$I$javajs_util_P3$F(this.atomPt, this.screen, this.zSlab, this.pTemp, this.sppm);
}} else {
var isLeft=(this.textAlign == 4 || this.textAlign == 0 );
if (this.fid != this.fidPrevious || this.ascent == 0 ) {
this.vwr.gdata.setFontFid$B(($b$[0] = this.fid, $b$[0]));
this.fidPrevious=($b$[0] = this.fid, $b$[0]);
this.font3d=this.vwr.gdata.getFont3DCurrent$();
if (isLeft) {
this.ascent=this.font3d.getAscent$();
this.descent=this.font3d.getDescent$();
}}var isSimple=isLeft && (this.imageFontScaling == 1  && this.scalePixelsPerMicron == 0   && label.indexOf$S("|") < 0  && label.indexOf$S("\n") < 0  && label.indexOf$S("<su") < 0  && label.indexOf$S("<co") < 0 ) ;
if (isSimple) {
var doPointer=((this.pointer & 1) != 0);
var pointerColix=((this.pointer & 2) != 0 && this.bgcolix != 0  ? this.bgcolix : this.labelColix);
this.boxXY[0]=this.atomPt.sX;
this.boxXY[1]=this.atomPt.sY;
$I$(4).renderSimpleLabel$org_jmol_api_JmolRendererInterface$javajs_awt_Font$S$H$H$FA$I$I$I$I$F$I$Z$H$Z(this.g3d, this.font3d, label, this.labelColix, this.bgcolix, this.boxXY, this.zBox, this.zSlab, $I$(3).getXOffset$I(this.offset), $I$(3).getYOffset$I(this.offset), this.ascent, this.descent, doPointer, pointerColix, this.isAbsolute);
return null;
}text=$I$(5).newLabel$org_jmol_viewer_Viewer$javajs_awt_Font$S$H$H$I$F(this.vwr, this.font3d, label, this.labelColix, this.bgcolix, this.textAlign, 0);
text.atomX=this.atomPt.sX;
text.atomY=this.atomPt.sY;
text.atomZ=this.zSlab;
text.setXYZs$I$I$I$I(this.atomPt.sX, this.atomPt.sY, this.zBox, this.zSlab);
newText=true;
}if (text.pymolOffset == null ) {
if (text.font == null ) text.setFontFromFid$B(($b$[0] = this.font3d.fid, $b$[0]));
text.setOffset$I(this.offset);
if (this.textAlign != 0) text.setAlignment$I(this.textAlign);
}text.pointer=this.pointer;
$I$(4).render$org_jmol_modelset_Text$org_jmol_api_JmolRendererInterface$F$F$Z$FA$FA(text, this.g3d, this.scalePixelsPerMicron, this.imageFontScaling, this.isAbsolute, this.boxXY, this.xy);
return (newText ? text : null);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
