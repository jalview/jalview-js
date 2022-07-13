(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'org.jmol.viewer.JC','org.jmol.util.Font','javajs.util.PT','org.jmol.util.Txt','org.jmol.shape.Shape','org.jmol.util.C']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Text");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageScale=1;
this.atomZ=2147483647;
this.movableXPercent=2147483647;
this.movableYPercent=2147483647;
this.movableZPercent=2147483647;
this.z=1;
this.zSlab=-2147483648;
this.modelIndex=-1;
this.visible=true;
this.hidden=false;
},1);

C$.$fields$=[['Z',['doFormatText','isMeasure','isEcho','adjustForWindow','visible','hidden'],'B',['fid'],'F',['imageScale','xAdj','yAdj','y0','fontScale','boxWidth','boxHeight','boxX','boxY','scalePixelsPerMicron'],'I',['ascent','descent','lineHeight','offsetX','offsetY','boxYoff2','textWidth','textHeight','pointer','align','valign','atomX','atomY','atomZ','movableX','movableY','movableZ','movableXPercent','movableYPercent','movableZPercent','z','zSlab','windowWidth','windowHeight','modelIndex'],'H',['colix','bgcolix'],'S',['text','textUnformatted','target','script'],'O',['vwr','org.jmol.viewer.Viewer','font','org.jmol.util.Font','widths','int[]','lines','String[]','image','java.lang.Object','pointerPt','javajs.util.P3','+xyz','pymolOffset','float[]','+boxXY']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.boxXY=Clazz.array(Float.TYPE, [5]);
}, 1);

Clazz.newMeth(C$, 'newLabel$org_jmol_viewer_Viewer$org_jmol_util_Font$S$H$H$I$F', function (vwr, font, text, colix, bgcolix, align, scalePixelsPerMicron) {
var t=Clazz.new_(C$);
t.vwr=vwr;
p$1.set$org_jmol_util_Font$H$I$F.apply(t, [font, colix, align, scalePixelsPerMicron]);
t.setText$S(text);
t.bgcolix=bgcolix;
return t;
}, 1);

Clazz.newMeth(C$, 'newMeasure$org_jmol_viewer_Viewer$org_jmol_util_Font$H', function (vwr, font, colix) {
var t=Clazz.new_(C$);
t.vwr=vwr;
p$1.set$org_jmol_util_Font$H$I$F.apply(t, [font, colix, 0, 0]);
t.isMeasure=true;
return t;
}, 1);

Clazz.newMeth(C$, 'newEcho$org_jmol_viewer_Viewer$org_jmol_util_Font$S$H$I$I$F', function (vwr, font, target, colix, valign, align, scalePixelsPerMicron) {
var t=Clazz.new_(C$);
t.isEcho=true;
t.vwr=vwr;
p$1.set$org_jmol_util_Font$H$I$F.apply(t, [font, colix, align, scalePixelsPerMicron]);
t.target=target;
t.valign=valign;
t.z=2;
t.zSlab=-2147483648;
return t;
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_util_Font$H$I$F', function (font, colix, align, scalePixelsPerMicron) {
this.scalePixelsPerMicron=scalePixelsPerMicron;
this.isEcho=this.isEcho;
this.colix=colix;
this.align=align;
this.setFont$org_jmol_util_Font$Z(font, !this.isEcho);
}, p$1);

Clazz.newMeth(C$, 'setOffset$I', function (offset) {
this.offsetX=$I$(1).getXOffset$I(offset);
this.offsetY=$I$(1).getYOffset$I(offset);
this.pymolOffset=null;
this.valign=3;
});

Clazz.newMeth(C$, 'getFontMetrics', function () {
this.descent=this.font.getDescent$();
this.ascent=this.font.getAscent$();
this.lineHeight=this.ascent + this.descent;
}, p$1);

Clazz.newMeth(C$, 'setFontFromFid$B', function (fid) {
if (this.fid == fid) return;
this.fontScale=0;
this.setFont$org_jmol_util_Font$Z($I$(2).getFont3D$B(fid), true);
});

Clazz.newMeth(C$, 'setText$S', function (text) {
if (this.image != null ) p$1.getFontMetrics.apply(this, []);
this.image=null;
if (text != null  && text.length$() == 0 ) text=null;
if (this.text != null  && this.text.equals$O(text) ) return;
this.text=this.textUnformatted=text;
this.doFormatText=(this.isEcho && text != null   && (text.indexOf$S("%{") >= 0 || text.indexOf$S("@{") >= 0 ) );
if (!this.doFormatText) p$1.recalc.apply(this, []);
});

Clazz.newMeth(C$, 'setImage$O', function (image) {
this.image=image;
p$1.recalc.apply(this, []);
});

Clazz.newMeth(C$, 'setScale$F', function (scale) {
this.imageScale=scale;
p$1.recalc.apply(this, []);
});

Clazz.newMeth(C$, 'setFont$org_jmol_util_Font$Z', function (f3d, doAll) {
this.font=f3d;
if (this.font == null ) return;
p$1.getFontMetrics.apply(this, []);
if (!doAll) return;
this.fid=this.font.fid;
p$1.recalc.apply(this, []);
});

Clazz.newMeth(C$, 'setFontScale$F', function (scale) {
if (this.fontScale == scale ) return;
this.fontScale=scale;
if (this.fontScale != 0 ) this.setFont$org_jmol_util_Font$Z(this.vwr.gdata.getFont3DScaled$org_jmol_util_Font$F(this.font, scale), true);
});

Clazz.newMeth(C$, 'recalc', function () {
if (this.image != null ) {
this.textWidth=this.textHeight=0;
this.boxWidth=this.vwr.apiPlatform.getImageWidth$O(this.image) * this.fontScale * this.imageScale ;
this.boxHeight=this.vwr.apiPlatform.getImageHeight$O(this.image) * this.fontScale * this.imageScale ;
this.ascent=0;
return;
}if (this.text == null ) {
this.text=null;
this.lines=null;
this.widths=null;
return;
}if (this.font == null ) return;
this.lines=$I$(3,"split$S$S",[this.text, (this.text.indexOf$S("\n") >= 0 ? "\n" : "|")]);
this.textWidth=0;
this.widths=Clazz.array(Integer.TYPE, [this.lines.length]);
for (var i=this.lines.length; --i >= 0; ) this.textWidth=Math.max(this.textWidth, this.widths[i]=p$1.stringWidth$S.apply(this, [this.lines[i]]));

this.textHeight=this.lines.length * this.lineHeight;
this.boxWidth=this.textWidth + (this.fontScale >= 2  ? 16 : 8);
this.boxHeight=this.textHeight + (this.fontScale >= 2  ? 16 : 8);
}, p$1);

Clazz.newMeth(C$, 'setPosition$F$F$Z$FA', function (scalePixelsPerMicron, imageFontScaling, isAbsolute, boxXY) {
if (boxXY == null ) boxXY=this.boxXY;
 else this.boxXY=boxXY;
this.setWindow$I$I$F(this.vwr.gdata.width, this.vwr.gdata.height, scalePixelsPerMicron);
if (scalePixelsPerMicron != 0  && this.scalePixelsPerMicron != 0  ) this.setFontScale$F(scalePixelsPerMicron / this.scalePixelsPerMicron);
 else if (this.fontScale != imageFontScaling ) this.setFontScale$F(imageFontScaling);
if (this.doFormatText) {
this.text=(this.isEcho ? $I$(4).formatText$org_jmol_api_JmolViewer$S(this.vwr, this.textUnformatted) : this.textUnformatted);
p$1.recalc.apply(this, []);
}var dx=this.offsetX * imageFontScaling;
var dy=this.offsetY * imageFontScaling;
this.xAdj=(this.fontScale >= 2  ? 8 : 4);
this.yAdj=this.ascent - this.lineHeight + this.xAdj;
if (!this.isEcho || this.pymolOffset != null  ) {
boxXY[0]=this.movableX;
boxXY[1]=this.movableY;
if (this.pymolOffset != null  && this.pymolOffset[0] != 2   && this.pymolOffset[0] != 3  ) {
var pixelsPerAngstrom=this.vwr.tm.scaleToScreen$I$I(this.z, 1000);
var pz=this.pymolOffset[3];
var dz=(pz < 0  ? -1 : 1) * Math.max(pz == 0  ? 0.5 : 0, Math.abs(pz) - 1) * pixelsPerAngstrom ;
this.z-=(dz|0);
pixelsPerAngstrom=this.vwr.tm.scaleToScreen$I$I(this.z, 1000);
dx=p$1.getPymolXYOffset$F$I$F.apply(this, [this.pymolOffset[1], this.textWidth, pixelsPerAngstrom]);
var dh=this.ascent - this.descent;
dy=-p$1.getPymolXYOffset$F$I$F.apply(this, [-this.pymolOffset[2], dh, pixelsPerAngstrom]) - ((this.textHeight + dh)/2|0);
if (this.pymolOffset[0] == 1 ) {
dy -= this.descent;
}this.xAdj=(this.fontScale >= 2  ? 8 : 4);
this.yAdj=-this.descent;
boxXY[0]=this.movableX - this.xAdj;
boxXY[1]=this.movableY - this.yAdj;
isAbsolute=true;
this.boxYoff2=-2;
} else {
this.boxYoff2=0;
}if (this.pymolOffset == null ) switch (this.align) {
case 8:
dy=0;
dx=0;
break;
case 12:
boxXY[0] -= this.boxWidth;
case 4:
dy=0;
}
C$.setBoxXY$F$F$F$F$FA$Z(this.boxWidth, this.boxHeight, dx, dy, boxXY, isAbsolute);
} else {
p$1.setPos$F.apply(this, [this.fontScale]);
}this.boxX=boxXY[0];
this.boxY=boxXY[1];
if (this.adjustForWindow) this.setBoxOffsetsInWindow$F$F$F(0, this.isEcho ? 0 : 16 * this.fontScale + this.lineHeight, this.boxY - this.textHeight);
this.y0=this.boxY + this.yAdj;
if (this.isMeasure && this.align != 8 ) this.y0 += this.ascent + (this.lines.length - 1) / 2.0 * this.lineHeight;
});

Clazz.newMeth(C$, 'getPymolXYOffset$F$I$F', function (off, width, ppa) {
var f=(off < -1  ? -1 : off > 1  ? 0 : (off - 1) / 2);
off=(off < -1  || off > 1   ? off + (off < 0  ? 1 : -1) : 0);
return f * width + off * ppa;
}, p$1);

Clazz.newMeth(C$, 'setPos$F', function (scale) {
var xLeft;
var xCenter;
var xRight;
var is3dEcho=(this.xyz != null );
if (this.valign == 3 || this.valign == 4 ) {
var x=(this.movableXPercent != 2147483647 ? (this.movableXPercent * this.windowWidth/100|0) : is3dEcho ? this.movableX : this.movableX * scale);
var offsetX=this.offsetX * scale;
xLeft=xRight=xCenter=x + offsetX;
} else {
xLeft=5 * scale;
xCenter=(this.windowWidth/2|0);
xRight=this.windowWidth - xLeft;
}this.boxXY[0]=xLeft;
switch (this.align) {
case 8:
this.boxXY[0]=xCenter - this.boxWidth / 2;
break;
case 12:
this.boxXY[0]=xRight - this.boxWidth;
}
this.boxXY[1]=0;
switch (this.valign) {
case 0:
break;
case 2:
this.boxXY[1]=(this.windowHeight/2|0);
break;
case 1:
this.boxXY[1]=this.windowHeight;
break;
default:
var y=(this.movableYPercent != 2147483647 ? (this.movableYPercent * this.windowHeight/100|0) : is3dEcho ? this.movableY : this.movableY * scale);
this.boxXY[1]=(is3dEcho ? y : (this.windowHeight - y)) + this.offsetY * scale;
}
if (this.align == 8) this.boxXY[1] -= (this.image != null  ? this.boxHeight : this.xyz != null  ? this.boxHeight : this.ascent - this.boxHeight) / 2;
 else if (this.image != null ) this.boxXY[1] -= 0;
 else if (this.xyz != null ) this.boxXY[1] -= (this.ascent/2|0);
}, p$1);

Clazz.newMeth(C$, 'setBoxXY$F$F$F$F$FA$Z', function (boxWidth, boxHeight, xOffset, yOffset, boxXY, isAbsolute) {
var xBoxOffset;
var yBoxOffset;
if (xOffset > 0  || isAbsolute ) {
xBoxOffset=xOffset;
} else {
xBoxOffset=-boxWidth;
if (xOffset == 0 ) xBoxOffset /= 2;
 else xBoxOffset += xOffset;
}if (isAbsolute || yOffset > 0  ) {
yBoxOffset=-boxHeight - yOffset;
} else if (yOffset == 0 ) {
yBoxOffset=-boxHeight / 2;
} else {
yBoxOffset=-yOffset;
}boxXY[0] += xBoxOffset;
boxXY[1] += yBoxOffset;
boxXY[2]=boxWidth;
boxXY[3]=boxHeight;
}, 1);

Clazz.newMeth(C$, 'stringWidth$S', function (str) {
var w=0;
var f=1;
var subscale=1;
if (str == null ) return 0;
if (str.indexOf$S("<su") < 0 && str.indexOf$S("<color") < 0 ) return this.font.stringWidth$S(str);
var len=str.length$();
var s;
for (var i=0; i < len; i++) {
if (str.charAt$I(i) == "<") {
if (i + 8 <= len && (str.substring$I$I(i, i + 7).equals$O("<color ") || str.substring$I$I(i, i + 8).equals$O("</color>") ) ) {
var i1=str.indexOf$S$I(">", i);
if (i1 >= 0) {
i=i1;
continue;
}}if (i + 5 <= len && ((s=str.substring$I$I(i, i + 5)).equals$O("<sub>") || s.equals$O("<sup>") ) ) {
i+=4;
f=subscale;
continue;
}if (i + 6 <= len && ((s=str.substring$I$I(i, i + 6)).equals$O("</sub>") || s.equals$O("</sup>") ) ) {
i+=5;
f=1;
continue;
}}w+=this.font.stringWidth$S(str.substring$I$I(i, i + 1)) * f;
}
return w;
}, p$1);

Clazz.newMeth(C$, 'setXYA$FA$I', function (xy, i) {
if (i == 0) {
xy[2]=this.boxX;
switch (this.align) {
case 8:
xy[2] += this.boxWidth / 2;
break;
case 12:
xy[2] += this.boxWidth - this.xAdj;
break;
default:
xy[2] += this.xAdj;
}
xy[0]=xy[2];
xy[1]=this.y0;
}switch (this.align) {
case 8:
xy[0]=xy[2] - (this.widths[i]/2|0);
break;
case 12:
xy[0]=xy[2] - this.widths[i];
}
xy[1] += this.lineHeight;
});

Clazz.newMeth(C$, 'appendFontCmd$javajs_util_SB', function (s) {
s.append$S("  " + $I$(5).getFontCommand$S$org_jmol_util_Font("echo", this.font));
if (this.scalePixelsPerMicron > 0 ) s.append$S(" " + (new Float(10000.0 / this.scalePixelsPerMicron).toString()));
});

Clazz.newMeth(C$, 'setScalePixelsPerMicron$F', function (scalePixelsPerMicron) {
this.fontScale=0;
this.scalePixelsPerMicron=scalePixelsPerMicron;
});

Clazz.newMeth(C$, 'setXYZ$javajs_util_P3$Z', function (xyz, doAdjust) {
this.xyz=xyz;
if (xyz == null ) this.zSlab=-2147483648;
if (doAdjust) {
this.valign=(xyz == null  ? 3 : 4);
this.adjustForWindow=(xyz == null );
}});

Clazz.newMeth(C$, 'setTranslucent$F$Z', function (level, isBackground) {
if (isBackground) {
if (this.bgcolix != 0) this.bgcolix=$I$(6,"getColixTranslucent3$H$Z$F",[this.bgcolix, !Float.isNaN$F(level), level]);
} else {
this.colix=$I$(6,"getColixTranslucent3$H$Z$F",[this.colix, !Float.isNaN$F(level), level]);
}});

Clazz.newMeth(C$, 'setMovableX$I', function (x) {
this.valign=(this.valign == 4 ? 4 : 3);
this.movableX=x;
this.movableXPercent=2147483647;
});

Clazz.newMeth(C$, 'setMovableY$I', function (y) {
this.valign=(this.valign == 4 ? 4 : 3);
this.movableY=y;
this.movableYPercent=2147483647;
});

Clazz.newMeth(C$, 'setMovableXPercent$I', function (x) {
this.valign=(this.valign == 4 ? 4 : 3);
this.movableX=2147483647;
this.movableXPercent=x;
});

Clazz.newMeth(C$, 'setMovableYPercent$I', function (y) {
this.valign=(this.valign == 4 ? 4 : 3);
this.movableY=2147483647;
this.movableYPercent=y;
});

Clazz.newMeth(C$, 'setMovableZPercent$I', function (z) {
if (this.valign != 4) this.valign=3;
this.movableZ=2147483647;
this.movableZPercent=z;
});

Clazz.newMeth(C$, 'setZs$I$I', function (z, zSlab) {
this.z=z;
this.zSlab=zSlab;
});

Clazz.newMeth(C$, 'setXYZs$I$I$I$I', function (x, y, z, zSlab) {
this.setMovableX$I(x);
this.setMovableY$I(y);
this.setZs$I$I(z, zSlab);
});

Clazz.newMeth(C$, 'setScript$S', function (script) {
this.script=(script == null  || script.length$() == 0  ? null : script);
});

Clazz.newMeth(C$, 'setAlignmentLCR$S', function (align) {
if ("left".equals$O(align)) return this.setAlignment$I(4);
if ("center".equals$O(align)) return this.setAlignment$I(8);
if ("right".equals$O(align)) return this.setAlignment$I(12);
return false;
});

Clazz.newMeth(C$, 'setAlignment$I', function (align) {
if (this.align != align) {
this.align=align;
p$1.recalc.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'setBoxOffsetsInWindow$F$F$F', function (margin, vMargin, vTop) {
var bw=this.boxWidth + margin;
var x=this.boxX;
if (x + bw > this.windowWidth ) x=this.windowWidth - bw;
if (x < margin ) x=margin;
this.boxX=x;
var bh=this.boxHeight;
var y=vTop;
if (y + bh > this.windowHeight ) y=this.windowHeight - bh;
if (y < vMargin ) y=vMargin;
this.boxY=y;
});

Clazz.newMeth(C$, 'setWindow$I$I$F', function (width, height, scalePixelsPerMicron) {
this.windowWidth=width;
this.windowHeight=height;
if (this.pymolOffset == null  && this.scalePixelsPerMicron < 0   && scalePixelsPerMicron != 0  ) this.setScalePixelsPerMicron$F(scalePixelsPerMicron);
});

Clazz.newMeth(C$, 'checkObjectClicked$Z$I$I$javajs_util_BS', function (isAntialiased, x, y, bsVisible) {
if (this.hidden || this.script == null   || this.modelIndex >= 0 && !bsVisible.get$I(this.modelIndex)  ) return false;
if (isAntialiased) {
x<<=1;
y<<=1;
}return (x >= this.boxX  && x <= this.boxX + this.boxWidth   && y >= this.boxY   && y <= this.boxY + this.boxHeight  );
});

Clazz.newMeth(C$, 'getPymolScreenOffset$javajs_util_P3$javajs_util_P3i$I$javajs_util_P3$F', function (atomPt, screen, zSlab, pTemp, sppm) {
var mode=this.pymolOffset[0];
if (atomPt != null  && (Math.abs(mode) % 2) == 1  ) pTemp.setT$javajs_util_T3(atomPt);
 else pTemp.set$F$F$F(0, 0, 0);
pTemp.add3$F$F$F(this.pymolOffset[4], this.pymolOffset[5], this.pymolOffset[6]);
this.vwr.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(pTemp, screen);
if (mode == 2  || mode == 3  ) {
screen.x=(screen.x+(this.pymolOffset[1])|0);
screen.y=(screen.y+(this.pymolOffset[2])|0);
screen.z=(screen.z+(this.pymolOffset[3])|0);
}this.setXYZs$I$I$I$I(screen.x, screen.y, screen.z, zSlab);
this.setScalePixelsPerMicron$F(sppm);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
