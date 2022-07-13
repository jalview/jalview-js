(function(){var P$=Clazz.newPackage("org.jmol.render"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3','javajs.util.BS','org.jmol.render.FontLineShapeRenderer','org.jmol.util.Edge','org.jmol.util.C','org.jmol.c.PAL','javajs.util.M3','javajs.util.A4']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SticksRenderer", null, 'org.jmol.render.FontLineShapeRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.x=Clazz.new_($I$(1,1));
this.y=Clazz.new_($I$(1,1));
this.z=Clazz.new_($I$(1,1));
this.p1=Clazz.new_($I$(2,1));
this.p2=Clazz.new_($I$(2,1));
this.bsForPass2=$I$(3).newN$I(64);
},1);

C$.$fields$=[['Z',['showMultipleBonds','bondsPerp','useBananas','isCartesian','ssbondsBackbone','hbondsBackbone','bondsBackbone','hbondsSolid','wireframeOnly','isAntialiased','slabbing','slabByAtom','isPass2'],'B',['modeMultipleBond','endcaps'],'D',['rTheta'],'F',['multipleBondSpacing','multipleBondRadiusFactor'],'I',['xA','yA','zA','xB','yB','zB','dx','dy','mag2d','bondOrder','xAxis1','yAxis1','xAxis2','yAxis2','dxStep','dyStep'],'O',['a','org.jmol.modelset.Atom','+b','bond','org.jmol.modelset.Bond','x','javajs.util.V3','+y','+z','p1','javajs.util.P3','+p2','bsForPass2','javajs.util.BS','rot','javajs.util.M3','a4','javajs.util.A4']]]

Clazz.newMeth(C$, 'render$', function () {
var bonds=this.ms.bo;
if (bonds == null ) return false;
this.isPass2=this.vwr.gdata.isPass2;
if (!this.isPass2) this.bsForPass2.clearAll$();
this.slabbing=this.tm.slabEnabled;
this.slabByAtom=this.vwr.getBoolean$I(603979939);
this.endcaps=3;
this.dashDots=(this.vwr.getBoolean$I(603979893) ? $I$(4).sixdots : $I$(4).dashes);
this.isCartesian=(this.exportType == 1);
p$1.getMultipleBondSettings$Z.apply(this, [false]);
this.wireframeOnly=!this.vwr.checkMotionRendering$I(1677721602);
this.ssbondsBackbone=this.vwr.getBoolean$I(603979952);
this.hbondsBackbone=this.vwr.getBoolean$I(603979852);
this.bondsBackbone=!!(this.hbondsBackbone | this.ssbondsBackbone);
this.hbondsSolid=this.vwr.getBoolean$I(603979854);
this.isAntialiased=this.g3d.isAntialiased$();
var needTranslucent=false;
if (this.isPass2) {
if (!this.isExport) for (var i=this.bsForPass2.nextSetBit$I(0); i >= 0; i=this.bsForPass2.nextSetBit$I(i + 1)) {
this.bond=bonds[i];
p$1.renderBond.apply(this, []);
}
} else {
for (var i=this.ms.bondCount; --i >= 0; ) {
this.bond=bonds[i];
if ((this.bond.shapeVisibilityFlags & this.myVisibilityFlag) != 0 && p$1.renderBond.apply(this, []) ) {
needTranslucent=true;
this.bsForPass2.set$I(i);
}}
}return needTranslucent;
});

Clazz.newMeth(C$, 'getMultipleBondSettings$Z', function (isPymol) {
this.useBananas=(this.vwr.getBoolean$I(603979886) && !isPymol );
this.multipleBondSpacing=(isPymol ? 0.15 : this.vwr.getFloat$I(570425370));
this.multipleBondRadiusFactor=(isPymol ? 0.4 : this.vwr.getFloat$I(570425369));
this.bondsPerp=(this.useBananas || this.multipleBondSpacing > 0  && this.multipleBondRadiusFactor < 0   );
if (this.useBananas) this.multipleBondSpacing=(this.multipleBondSpacing < 0  ? -this.multipleBondSpacing * 0.4 : this.multipleBondSpacing);
this.multipleBondRadiusFactor=Math.abs(this.multipleBondRadiusFactor);
if (this.multipleBondSpacing == 0  && this.isCartesian ) this.multipleBondSpacing=0.2;
this.modeMultipleBond=this.vwr.g.modeMultipleBond;
this.showMultipleBonds=(this.multipleBondSpacing != 0  && this.modeMultipleBond != 0  && this.vwr.getBoolean$I(603979928) );
}, p$1);

Clazz.newMeth(C$, 'renderBond', function () {
var atomA0;
var atomB0;
this.a=atomA0=this.bond.atom1;
this.b=atomB0=this.bond.atom2;
var order=this.bond.order & ~131072;
if (this.bondsBackbone) {
if (this.ssbondsBackbone && (order & 256) != 0 ) {
this.a=this.a.group.getLeadAtomOr$org_jmol_modelset_Atom(this.a);
this.b=this.b.group.getLeadAtomOr$org_jmol_modelset_Atom(this.b);
} else if (this.hbondsBackbone && $I$(5).isOrderH$I(order) ) {
this.a=this.a.group.getLeadAtomOr$org_jmol_modelset_Atom(this.a);
this.b=this.b.group.getLeadAtomOr$org_jmol_modelset_Atom(this.b);
}}if (!this.isPass2 && (!this.a.isVisible$I(9) || !this.b.isVisible$I(9) || !this.g3d.isInDisplayRange$I$I(this.a.sX, this.a.sY) || !this.g3d.isInDisplayRange$I$I(this.b.sX, this.b.sY)  ) ) return false;
if (this.slabbing) {
var ba=this.vwr.gdata.isClippedZ$I(this.a.sZ);
if (ba && this.vwr.gdata.isClippedZ$I(this.b.sZ)  || this.slabByAtom && (ba || this.vwr.gdata.isClippedZ$I(this.b.sZ) )  ) return false;
}this.zA=this.a.sZ;
this.zB=this.b.sZ;
if (this.zA == 1 || this.zB == 1 ) return false;
this.colixA=atomA0.colixAtom;
this.colixB=atomB0.colixAtom;
if (((this.colix=this.bond.colix) & -30721) == 2) {
this.colix=($s$[0] = (this.colix & ~-30721), $s$[0]);
this.colixA=$I$(6,"getColixInherited$H$H",[($s$[0] = (this.colix | this.vwr.cm.getColixAtomPalette$org_jmol_modelset_Atom$B(atomA0, $I$(7).CPK.id)), $s$[0]), this.colixA]);
this.colixB=$I$(6,"getColixInherited$H$H",[($s$[0] = (this.colix | this.vwr.cm.getColixAtomPalette$org_jmol_modelset_Atom$B(atomB0, $I$(7).CPK.id)), $s$[0]), this.colixB]);
} else {
this.colixA=$I$(6).getColixInherited$H$H(this.colix, this.colixA);
this.colixB=$I$(6).getColixInherited$H$H(this.colix, this.colixB);
}var needTranslucent=false;
if (!this.isExport && !this.isPass2 ) {
var doA=!$I$(6).renderPass2$H(this.colixA);
var doB=!$I$(6).renderPass2$H(this.colixB);
if (!doA || !doB ) {
if (!doA && !doB && !needTranslucent  ) {
this.g3d.setC$H(!doA ? this.colixA : this.colixB);
return true;
}needTranslucent=true;
}}this.bondOrder=order & ~131072;
if ((this.bondOrder & 224) == 0) {
if ((this.bondOrder & 256) != 0) this.bondOrder&=~256;
if ((this.bondOrder & 1023) != 0) {
if (!this.showMultipleBonds || (this.modeMultipleBond == 2 && this.mad > 500 ) || (this.bondOrder & 98304) == 65536  ) {
this.bondOrder=1;
}}}var mask=0;
switch (this.bondOrder) {
case 1025:
case 1041:
this.bondOrder=1;
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
break;
case 17:
case 513:
this.bondOrder=1;
mask=(order == 513 ? 0 : 1);
break;
case 515:
case 514:
this.bondOrder=2;
mask=(order == 515 ? p$1.getAromaticDottedBondMask.apply(this, []) : 0);
break;
default:
if ((this.bondOrder & 224) != 0) {
this.bondOrder=$I$(5).getPartialBondOrder$I(order);
mask=$I$(5).getPartialBondDotted$I(order);
} else if ($I$(5).isOrderH$I(this.bondOrder)) {
this.bondOrder=1;
if (!this.hbondsSolid) mask=-1;
} else if (this.bondOrder == 32768) {
this.bondOrder=1;
} else if ((this.bondOrder & 98304) == 98304) {
p$1.getMultipleBondSettings$Z.apply(this, [true]);
this.bondOrder&=3;
mask=-2;
}}
this.xA=this.a.sX;
this.yA=this.a.sY;
this.xB=this.b.sX;
this.yB=this.b.sY;
this.mad=this.bond.mad;
if (this.multipleBondRadiusFactor > 0  && this.bondOrder > 1 ) this.mad=($s$[0] = this.mad*(this.multipleBondRadiusFactor), $s$[0]);
this.dx=this.xB - this.xA;
this.dy=this.yB - this.yA;
this.width=(this.vwr.tm.scaleToScreen$I$I(((this.zA + this.zB)/2|0), this.mad)|0);
if (this.wireframeOnly && this.width > 0 ) this.width=1;
if (!this.isCartesian) {
this.asLineOnly=(this.width <= 1);
if (this.asLineOnly && (this.isAntialiased) ) {
this.width=3;
this.asLineOnly=false;
}}switch (mask) {
case -2:
p$1.drawBond$I.apply(this, [0]);
p$1.getMultipleBondSettings$Z.apply(this, [false]);
break;
case -1:
this.drawDashed$I$I$I$I$I$I$IA(this.xA, this.yA, this.zA, this.xB, this.yB, this.zB, $I$(4).hDashes);
break;
default:
switch (this.bondOrder) {
case 4:
{
this.bondOrder=2;
var f=this.multipleBondRadiusFactor;
if (f == 0  && this.width > 1 ) this.width=((this.width * 0.5)|0);
var m=this.multipleBondSpacing;
if (m < 0 ) this.multipleBondSpacing=0.3;
p$1.drawBond$I.apply(this, [mask]);
this.bondsPerp=!this.bondsPerp;
this.bondOrder=2;
p$1.drawBond$I.apply(this, [mask >> 2]);
this.bondsPerp=!this.bondsPerp;
this.multipleBondSpacing=m;
}break;
case 5:
{
this.bondOrder=3;
var f=this.multipleBondRadiusFactor;
if (f == 0  && this.width > 1 ) this.width=((this.width * 0.5)|0);
var m=this.multipleBondSpacing;
if (m < 0 ) this.multipleBondSpacing=0.2;
p$1.drawBond$I.apply(this, [mask]);
this.bondsPerp=!this.bondsPerp;
this.bondOrder=2;
this.multipleBondSpacing *= 1.5;
p$1.drawBond$I.apply(this, [mask >> 3]);
this.bondsPerp=!this.bondsPerp;
this.multipleBondSpacing=m;
}break;
case 6:
{
this.bondOrder=4;
var f=this.multipleBondRadiusFactor;
if (f == 0  && this.width > 1 ) this.width=((this.width * 0.5)|0);
var m=this.multipleBondSpacing;
if (m < 0 ) this.multipleBondSpacing=0.15;
p$1.drawBond$I.apply(this, [mask]);
this.bondsPerp=!this.bondsPerp;
this.bondOrder=2;
this.multipleBondSpacing *= 1.5;
p$1.drawBond$I.apply(this, [mask >> 4]);
this.bondsPerp=!this.bondsPerp;
this.multipleBondSpacing=m;
}break;
default:
p$1.drawBond$I.apply(this, [mask]);
}
break;
}
return needTranslucent;
}, p$1);

Clazz.newMeth(C$, 'drawBond$I', function (dottedMask) {
var isDashed=(dottedMask & 1) != 0;
if (this.isCartesian && this.bondOrder == 1  && !isDashed ) {
this.g3d.drawBond$javajs_util_P3$javajs_util_P3$H$H$B$H$I(this.a, this.b, this.colixA, this.colixB, this.endcaps, this.mad, -1);
return;
}var isEndOn=(this.dx == 0 && this.dy == 0 );
if (isEndOn && this.asLineOnly && !this.isCartesian  ) return;
var doFixedSpacing=(this.bondOrder > 1 && this.multipleBondSpacing > 0  );
var isPiBonded=doFixedSpacing && (this.vwr.getHybridizationAndAxes$I$javajs_util_V3$javajs_util_V3$S(this.a.i, this.z, this.x, "pz") != null  || this.vwr.getHybridizationAndAxes$I$javajs_util_V3$javajs_util_V3$S(this.b.i, this.z, this.x, "pz") != null  ) && !Float.isNaN$F(this.x.x)  ;
if (isEndOn && !doFixedSpacing ) {
var space=(this.width/8|0) + 3;
var step=this.width + space;
var y=this.yA - ((this.bondOrder - 1) * step/2|0);
do {
this.fillCylinder$H$H$B$I$I$I$I$I$I$I(this.colixA, this.colixB, this.endcaps, this.width, this.xA, y, this.zA, this.xB, y, this.zB);
y+=step;
} while (--this.bondOrder > 0);
return;
}if (this.bondOrder == 1) {
if (isDashed) this.drawDashed$I$I$I$I$I$I$IA(this.xA, this.yA, this.zA, this.xB, this.yB, this.zB, this.dashDots);
 else this.fillCylinder$H$H$B$I$I$I$I$I$I$I(this.colixA, this.colixB, this.endcaps, this.width, this.xA, this.yA, this.zA, this.xB, this.yB, this.zB);
return;
}if (doFixedSpacing) {
if (!isPiBonded) this.z.setT$javajs_util_T3($I$(2).getUnlikely$());
this.x.sub2$javajs_util_T3$javajs_util_T3(this.b, this.a);
this.y.cross$javajs_util_T3$javajs_util_T3(this.x, this.z);
this.y.normalize$();
if (Float.isNaN$F(this.y.x)) {
this.z.setT$javajs_util_T3($I$(2).getUnlikely$());
this.y.cross$javajs_util_T3$javajs_util_T3(this.x, this.z);
this.y.cross$javajs_util_T3$javajs_util_T3(this.y, this.x);
this.y.normalize$();
}if (this.bondsPerp) this.y.cross$javajs_util_T3$javajs_util_T3(this.y, this.x);
this.y.scale$F(this.multipleBondSpacing);
this.x.setT$javajs_util_T3(this.y);
this.x.scale$F((this.bondOrder - 1) / 2.0);
if (this.useBananas) {
p$1.drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I.apply(this, [this.a, this.b, this.x, 0]);
switch (this.bondOrder) {
case 4:
p$1.drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I.apply(this, [this.a, this.b, this.x, 90]);
p$1.drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I.apply(this, [this.a, this.b, this.x, -90]);
case 2:
default:
p$1.drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I.apply(this, [this.a, this.b, this.x, 180]);
break;
case 3:
p$1.drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I.apply(this, [this.a, this.b, this.x, 120]);
p$1.drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I.apply(this, [this.a, this.b, this.x, -120]);
break;
}
return;
}this.p1.sub2$javajs_util_T3$javajs_util_T3(this.a, this.x);
this.p2.sub2$javajs_util_T3$javajs_util_T3(this.b, this.x);
while (true){
if (this.isCartesian) {
this.g3d.drawBond$javajs_util_P3$javajs_util_P3$H$H$B$H$I(this.p1, this.p2, this.colixA, this.colixB, this.endcaps, this.mad, -2);
} else {
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.p1, this.s1);
this.tm.transformPtScr$javajs_util_T3$javajs_util_P3i(this.p2, this.s2);
if (isDashed) this.drawDashed$I$I$I$I$I$I$IA(this.s1.x, this.s1.y, this.s1.z, this.s2.x, this.s2.y, this.s2.z, this.dashDots);
 else this.fillCylinder$H$H$B$I$I$I$I$I$I$I(this.colixA, this.colixB, this.endcaps, this.width, this.s1.x, this.s1.y, this.s1.z, this.s2.x, this.s2.y, this.s2.z);
}dottedMask>>=1;
isDashed=(dottedMask & 1) != 0;
if (--this.bondOrder <= 0) break;
this.p1.add$javajs_util_T3(this.y);
this.p2.add$javajs_util_T3(this.y);
p$1.stepAxisCoordinates.apply(this, []);
}
return;
}var dxB=this.dx * this.dx;
var dyB=this.dy * this.dy;
this.mag2d=(Math.round(Math.sqrt(dxB + dyB))|0);
p$1.resetAxisCoordinates.apply(this, []);
if (this.isCartesian && this.bondOrder == 3 ) {
this.fillCylinder$H$H$B$I$I$I$I$I$I$I(this.colixA, this.colixB, this.endcaps, this.width, this.xAxis1, this.yAxis1, this.zA, this.xAxis2, this.yAxis2, this.zB);
p$1.stepAxisCoordinates.apply(this, []);
this.x.sub2$javajs_util_T3$javajs_util_T3(this.b, this.a);
this.x.scale$F(0.05);
this.p1.sub2$javajs_util_T3$javajs_util_T3(this.a, this.x);
this.p2.add2$javajs_util_T3$javajs_util_T3(this.b, this.x);
this.g3d.drawBond$javajs_util_P3$javajs_util_P3$H$H$B$H$I(this.p1, this.p2, this.colixA, this.colixB, this.endcaps, this.mad, -2);
p$1.stepAxisCoordinates.apply(this, []);
this.fillCylinder$H$H$B$I$I$I$I$I$I$I(this.colixA, this.colixB, this.endcaps, this.width, this.xAxis1, this.yAxis1, this.zA, this.xAxis2, this.yAxis2, this.zB);
return;
}while (true){
if ((dottedMask & 1) != 0) this.drawDashed$I$I$I$I$I$I$IA(this.xAxis1, this.yAxis1, this.zA, this.xAxis2, this.yAxis2, this.zB, this.dashDots);
 else this.fillCylinder$H$H$B$I$I$I$I$I$I$I(this.colixA, this.colixB, this.endcaps, this.width, this.xAxis1, this.yAxis1, this.zA, this.xAxis2, this.yAxis2, this.zB);
dottedMask>>=1;
if (--this.bondOrder <= 0) break;
p$1.stepAxisCoordinates.apply(this, []);
}
}, p$1);

Clazz.newMeth(C$, 'resetAxisCoordinates', function () {
var space=this.mag2d >> 3;
if (this.multipleBondSpacing != -1  && this.multipleBondSpacing < 0  ) space=(space*(-this.multipleBondSpacing)|0);
var step=this.width + space;
this.dxStep=(step * this.dy/this.mag2d|0);
this.dyStep=(step * -this.dx/this.mag2d|0);
this.xAxis1=this.xA;
this.yAxis1=this.yA;
this.xAxis2=this.xB;
this.yAxis2=this.yB;
var f=(this.bondOrder - 1);
this.xAxis1-=(this.dxStep * f/2|0);
this.yAxis1-=(this.dyStep * f/2|0);
this.xAxis2-=(this.dxStep * f/2|0);
this.yAxis2-=(this.dyStep * f/2|0);
}, p$1);

Clazz.newMeth(C$, 'stepAxisCoordinates', function () {
this.xAxis1+=this.dxStep;
this.yAxis1+=this.dyStep;
this.xAxis2+=this.dxStep;
this.yAxis2+=this.dyStep;
}, p$1);

Clazz.newMeth(C$, 'getAromaticDottedBondMask', function () {
var atomC=this.b.findAromaticNeighbor$I(this.a.i);
if (atomC == null ) return 1;
var dxAC=atomC.sX - this.xA;
var dyAC=atomC.sY - this.yA;
return ((this.dx * dyAC - this.dy * dxAC) < 0 ? 2 : 1);
}, p$1);

Clazz.newMeth(C$, 'drawBanana$org_jmol_modelset_Atom$org_jmol_modelset_Atom$javajs_util_V3$I', function (a, b, x, deg) {
this.g3d.addRenderer$I(553648145);
this.vectorT.sub2$javajs_util_T3$javajs_util_T3(b, a);
if (this.rot == null ) {
this.rot=Clazz.new_($I$(8,1));
this.a4=Clazz.new_($I$(9,1));
}this.a4.setVA$javajs_util_V3$F(this.vectorT, (deg * 3.141592653589793 / 180));
this.rot.setAA$javajs_util_A4(this.a4);
this.pointT.setT$javajs_util_T3(a);
this.pointT3.setT$javajs_util_T3(b);
this.pointT2.ave$javajs_util_T3$javajs_util_T3(a, b);
this.rot.rotate2$javajs_util_T3$javajs_util_T3(x, this.vectorT);
this.pointT2.add$javajs_util_T3(this.vectorT);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(a, this.pointT);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(this.pointT2, this.pointT2);
this.tm.transformPtScrT3$javajs_util_T3$javajs_util_T3(b, this.pointT3);
var w=Math.max(this.width, 1);
this.g3d.setC$H(this.colixA);
this.g3d.fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(5, w, w, w, this.pointT, this.pointT, this.pointT2, this.pointT3);
this.g3d.setC$H(this.colixB);
this.g3d.fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(5, w, w, w, this.pointT, this.pointT2, this.pointT3, this.pointT3);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:41 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
