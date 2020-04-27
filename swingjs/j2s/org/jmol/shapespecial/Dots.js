(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),I$=[[0,'javajs.util.BS','org.jmol.atomdata.RadiusData','org.jmol.geodesic.EnvelopeCalculation','org.jmol.util.C','javajs.util.M3','org.jmol.util.BSUtil',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW','javajs.util.SB','java.util.Hashtable','org.jmol.shape.Shape','org.jmol.util.Escape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Dots", null, 'org.jmol.shape.AtomShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isSurface=false;
this.bsOn=Clazz.new_($I$(1,1));
this.rdLast=Clazz.new_($I$(2,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW,[null, 0, null, null]);
},1);

C$.$fields$=[['Z',['isSurface'],'F',['thisRadius'],'I',['thisAtom','thisArgb'],'O',['ec','org.jmol.geodesic.EnvelopeCalculation','bsOn','javajs.util.BS','+bsSelected','+bsIgnore','rdLast','org.jmol.atomdata.RadiusData']]
,['I',['MAX_LEVEL']]]

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.translucentAllowed=false;
this.ec=Clazz.new_($I$(3,1)).set$org_jmol_atomdata_AtomDataServer$I$HA(this.vwr, this.ac, this.mads);
});

Clazz.newMeth(C$, 'getSize$I', function (atomIndex) {
return (this.mads != null  ? this.mads[atomIndex] * 2 : this.bsOn.get$I(atomIndex) ? (Math.floor(this.ec.getRadius$I(atomIndex) * 2000)|0) : 0);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("init" == propertyName) {
this.initialize$();
return;
}if ("translucency" == propertyName) {
if (!this.translucentAllowed) return;
}if ("ignore" == propertyName) {
this.bsIgnore=value;
return;
}if ("select" == propertyName) {
this.bsSelected=value;
return;
}if ("radius" == propertyName) {
this.thisRadius=(value).floatValue$();
if (this.thisRadius > 16 ) this.thisRadius=16.1;
return;
}if ("colorRGB" == propertyName) {
this.thisArgb=(value).intValue$();
return;
}if ("atom" == propertyName) {
this.thisAtom=(value).intValue$();
if (this.thisAtom >= this.atoms.length) return;
this.atoms[this.thisAtom].setShapeVisibility$I$Z(this.vf, true);
this.ec.allocDotsConvexMaps$I(this.ac);
return;
}if ("dots" == propertyName) {
if (this.thisAtom >= this.atoms.length) return;
this.isActive=true;
this.ec.setFromBits$I$javajs_util_BS(this.thisAtom, value);
this.atoms[this.thisAtom].setShapeVisibility$I$Z(this.vf, true);
if (this.mads == null ) {
this.ec.setMads$HA(null);
this.mads=Clazz.array(Short.TYPE, [this.ac]);
for (var i=0; i < this.ac; i++) if (this.atoms[i].isVisible$I(1 | this.vf)) try {
this.mads[i]=((this.ec.getAppropriateRadius$I(i) * 1000)|0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}

this.ec.setMads$HA(this.mads);
}this.mads[this.thisAtom]=((this.thisRadius * 1000.0)|0);
if (this.colixes == null ) this.checkColixLength$H$I(4, this.ac);
this.colixes[this.thisAtom]=$I$(4).getColix$I(this.thisArgb);
this.bsOn.set$I(this.thisAtom);
return;
}if ("refreshTrajectories" == propertyName) {
bs=(value)[1];
var m4=(value)[2];
if (m4 == null ) return;
var m=Clazz.new_($I$(5,1));
m4.getRotationScale$javajs_util_M3(m);
this.ec.reCalculate$javajs_util_BS$javajs_util_M3(bs, m);
return;
}if (propertyName == "deleteModelAtoms") {
var firstAtomDeleted=((value)[2])[1];
var nAtomsDeleted=((value)[2])[2];
$I$(6).deleteBits$javajs_util_BS$javajs_util_BS(this.bsOn, bs);
this.ec.deleteAtoms$I$I(firstAtomDeleted, nAtomsDeleted);
}this.setPropAS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'initialize$', function () {
this.bsSelected=null;
this.bsIgnore=null;
this.isActive=false;
if (this.ec == null ) this.ec=Clazz.new_($I$(3,1)).set$org_jmol_atomdata_AtomDataServer$I$HA(this.vwr, this.ac, this.mads);
});

Clazz.newMeth(C$, 'setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS', function (rd, bsSelected) {
if (rd == null ) rd=Clazz.new_([null, 0, $I$(7).ABSOLUTE, null],$I$(2,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
if (this.bsSelected != null ) bsSelected=this.bsSelected;
var isVisible=true;
var setRadius=3.4028235E38;
this.isActive=true;
switch (rd.factorType) {
case $I$(7).OFFSET:
break;
case $I$(7).ABSOLUTE:
if (rd.value == 0 ) isVisible=false;
setRadius=rd.value;
default:
rd.valueExtended=this.vwr.getCurrentSolventProbeRadius$();
}
var maxRadius;
switch (rd.vdwType) {
case $I$(8).ADPMIN:
case $I$(8).ADPMAX:
case $I$(8).HYDRO:
case $I$(8).TEMP:
maxRadius=setRadius;
break;
case $I$(8).BONDING:
maxRadius=this.ms.getMaxVanderwaalsRadius$() * 2;
break;
default:
maxRadius=this.ms.getMaxVanderwaalsRadius$();
}
var newSet=(this.rdLast.value != rd.value  || this.rdLast.valueExtended != rd.valueExtended   || this.rdLast.factorType !== rd.factorType   || this.rdLast.vdwType !== rd.vdwType   || this.ec.getDotsConvexMax$() == 0 );
if (isVisible) {
for (var i=bsSelected.nextSetBit$I(0); i >= 0; i=bsSelected.nextSetBit$I(i + 1)) if (!this.bsOn.get$I(i)) {
this.bsOn.set$I(i);
newSet=true;
}
} else {
var isAll=(bsSelected == null );
var i0=(isAll ? this.ac - 1 : bsSelected.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsSelected.nextSetBit$I(i + 1))) this.bsOn.setBitTo$I$Z(i, false);

}for (var i=this.ac; --i >= 0; ) this.atoms[i].setShapeVisibility$I$Z(this.vf, this.bsOn.get$I(i));

if (!isVisible) return;
if (newSet) {
this.mads=null;
this.ec.newSet$();
}var dotsConvexMaps=this.ec.getDotsConvexMaps$();
if (dotsConvexMaps != null ) {
for (var i=this.ac; --i >= 0; ) if (this.bsOn.get$I(i)) {
dotsConvexMaps[i]=null;
}
}if (dotsConvexMaps == null  && (this.colixes == null  || this.colixes.length != this.ac ) ) this.checkColixLength$H$I(4, this.ac);
this.ec.calculate$org_jmol_atomdata_RadiusData$F$javajs_util_BS$javajs_util_BS$Z$Z$Z$Z(rd, maxRadius, this.bsOn, this.bsIgnore, !this.vwr.getBoolean$I(603979830), this.vwr.getBoolean$I(603979829), this.isSurface, true);
this.rdLast=rd;
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
for (var i=this.ac; --i >= 0; ) {
var atom=this.atoms[i];
if ((atom.shapeVisibilityFlags & this.vf) == 0 || this.ms.isAtomHidden$I(i) ) continue;
atom.setClickable$I(this.vf);
}
});

Clazz.newMeth(C$, 'getShapeState$', function () {
var dotsConvexMaps=this.ec.getDotsConvexMaps$();
if (dotsConvexMaps == null  || this.ec.getDotsConvexMax$() == 0 ) return "";
var s=Clazz.new_($I$(9,1));
var temp=Clazz.new_($I$(10,1));
var ac=this.vwr.ms.ac;
var type=(this.isSurface ? "geoSurface " : "dots ");
for (var i=0; i < ac; i++) {
if (!this.bsOn.get$I(i) || dotsConvexMaps[i] == null  ) continue;
if (this.bsColixSet != null  && this.bsColixSet.get$I(i) ) (function(a,f){return f.apply(null,a)})([temp, i, i, $I$(11).getColorCommand$S$B$H$Z(type, this.paletteIDs[i], this.colixes[i], this.translucentAllowed)],$I$(6).setMapBitSet$java_util_Map$I$I$S);
var bs=dotsConvexMaps[i];
if (!bs.isEmpty$()) {
var r=this.ec.getAppropriateRadius$I(i);
(function(a,f){return f.apply(null,a)})([s, type + i + " radius " + new Float(r).toString() + " " + $I$(12).eBS$javajs_util_BS(bs) ],$I$(11).appendCmd$javajs_util_SB$S);
}}
return s.append$S(this.vwr.getCommands$java_util_Map$java_util_Map$S(temp, null, "select")).toString();
});

C$.$static$=function(){C$.$static$=0;
C$.MAX_LEVEL=3;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
