(function(){var P$=Clazz.newPackage("org.jmol.render"),I$=[[0,'org.jmol.modelset.Text']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TextRenderer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'render$org_jmol_modelset_Text$org_jmol_api_JmolRendererInterface$F$F$Z$FA$FA', function (text, g3d, scalePixelsPerMicron, imageFontScaling, isAbsolute, boxXY, temp) {
if (text == null  || text.image == null  && !text.doFormatText  && text.lines == null   ) return false;
var showText=g3d.setC$H(text.colix);
if (!showText && (text.image == null  && (text.bgcolix == 0 || !g3d.setC$H(text.bgcolix) ) ) ) return false;
text.setPosition$F$F$Z$FA(scalePixelsPerMicron, imageFontScaling, isAbsolute, boxXY);
if (text.image == null  && text.bgcolix != 0 ) {
if (g3d.setC$H(text.bgcolix)) C$.showBox$org_jmol_api_JmolRendererInterface$H$I$I$I$I$I$I$F$Z(g3d, text.colix, (text.boxX|0), (text.boxY|0) + text.boxYoff2 * 2, text.z + 2, text.zSlab, (text.boxWidth|0), (text.boxHeight|0), text.fontScale, text.isLabelOrHover);
if (!showText) return false;
}if (text.image == null ) {
for (var i=0; i < text.lines.length; i++) {
text.setXYA$FA$I(temp, i);
g3d.drawString$S$javajs_awt_Font$I$I$I$I$H(text.lines[i], text.font, (temp[0]|0), (temp[1]|0), text.z, text.zSlab, text.bgcolix);
}
} else {
g3d.drawImage$O$I$I$I$I$H$I$I(text.image, (text.boxX|0), (text.boxY|0), text.z, text.zSlab, text.bgcolix, (text.boxWidth|0), (text.boxHeight|0));
}if ((text.pointer & 1) == 0 || !g3d.setC$H((text.pointer & 2) != 0 && text.bgcolix != 0  ? text.bgcolix : text.colix) ) return true;
var w=text.boxWidth;
var h=text.boxHeight;
var pt=NaN;
var x=text.boxX + (text.boxX > text.atomX + w  ? 0 : text.boxX + w < text.atomX - w  ? w : (pt=w / 2));
var setY=!Float.isNaN$F(pt);
var y=text.boxY + (setY && text.boxY > text.atomY   ? 0 : setY && text.boxY + h < text.atomY   ? h : h / 2);
g3d.drawLineXYZ$I$I$I$I$I$I(text.atomX, text.atomY, text.atomZ, (x|0), (y|0), text.zSlab);
return true;
}, 1);

Clazz.newMeth(C$, 'renderSimpleLabel$org_jmol_api_JmolRendererInterface$javajs_awt_Font$S$H$H$FA$I$I$I$I$F$I$Z$H$Z', function (g3d, font, strLabel, colix, bgcolix, boxXY, z, zSlab, xOffset, yOffset, ascent, descent, doPointer, pointerColix, isAbsolute) {
var boxWidth=font.stringWidth$S(strLabel) + 8;
var boxHeight=ascent + descent + 8 ;
var x0=(boxXY[0]|0);
var y0=(boxXY[1]|0);
$I$(1).setBoxXY$F$F$F$F$FA$Z(boxWidth, boxHeight, xOffset, yOffset, boxXY, isAbsolute);
var x=boxXY[0];
var y=boxXY[1];
if (bgcolix != 0 && g3d.setC$H(bgcolix) ) C$.showBox$org_jmol_api_JmolRendererInterface$H$I$I$I$I$I$I$F$Z(g3d, colix, (x|0), (y|0), z, zSlab, (boxWidth|0), (boxHeight|0), 1, true);
 else g3d.setC$H(colix);
g3d.drawString$S$javajs_awt_Font$I$I$I$I$H(strLabel, font, ((x + 4)|0), ((y + 4 + ascent )|0), z - 1, zSlab, bgcolix);
if (doPointer) {
g3d.setC$H(pointerColix);
if (xOffset > 0) g3d.drawLineXYZ$I$I$I$I$I$I(x0, y0, zSlab, (x|0), ((y + boxHeight / 2)|0), zSlab);
 else if (xOffset < 0) g3d.drawLineXYZ$I$I$I$I$I$I(x0, y0, zSlab, ((x + boxWidth)|0), ((y + boxHeight / 2)|0), zSlab);
}}, 1);

Clazz.newMeth(C$, 'showBox$org_jmol_api_JmolRendererInterface$H$I$I$I$I$I$I$F$Z', function (g3d, colix, x, y, z, zSlab, boxWidth, boxHeight, imageFontScaling, atomBased) {
g3d.fillTextRect$I$I$I$I$I$I(x, y, z, zSlab, boxWidth, boxHeight);
g3d.setC$H(colix);
if (!atomBased) return;
if (imageFontScaling >= 2 ) {
g3d.drawRect$I$I$I$I$I$I(x + 3, y + 3, z - 1, zSlab, boxWidth - 6, boxHeight - 6);
} else {
g3d.drawRect$I$I$I$I$I$I(x + 1, y + 1, z - 1, zSlab, boxWidth - 2, boxHeight - 2);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
