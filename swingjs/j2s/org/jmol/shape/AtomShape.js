(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'javajs.util.AU','org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'javajs.util.BS','org.jmol.util.C','org.jmol.c.PAL','org.jmol.c.VDW','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomShape", null, 'org.jmol.shape.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mad=-1;
},1);

C$.$fields$=[['Z',['isActive'],'I',['ac','monomerCount'],'H',['mad'],'O',['mads','short[]','+colixes','paletteIDs','byte[]','atoms','org.jmol.modelset.Atom[]','bsSizeDefault','javajs.util.BS','rd','org.jmol.atomdata.RadiusData']]]

Clazz.newMeth(C$, 'initShape$', function () {
});

Clazz.newMeth(C$, 'initModelSet$', function () {
this.atoms=this.ms.at;
this.ac=this.ms.ac;
if (this.mads != null ) this.mads=$I$(1).arrayCopyShort$HA$I(this.mads, this.ac);
if (this.colixes != null ) this.colixes=$I$(1).arrayCopyShort$HA$I(this.colixes, this.ac);
if (this.paletteIDs != null ) this.paletteIDs=$I$(1).arrayCopyByte$BA$I(this.paletteIDs, this.ac);
});

Clazz.newMeth(C$, 'getSize$I', function (atomIndex) {
return (this.mads == null  ? ($s$[0] = 0, $s$[0]) : this.mads[atomIndex]);
});

Clazz.newMeth(C$, 'setSize$I$javajs_util_BS', function (size, bsSelected) {
this.setSize2$I$javajs_util_BS(size, bsSelected);
});

Clazz.newMeth(C$, 'setSize2$I$javajs_util_BS', function (size, bsSelected) {
if (size == 0) {
this.setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS(null, bsSelected);
return;
}if (this.rd == null ) this.rd=Clazz.new_([null, size, $I$(3).SCREEN, null],$I$(2,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
 else this.rd.value=size;
this.setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS(this.rd, bsSelected);
});

Clazz.newMeth(C$, 'setSizeRD$org_jmol_atomdata_RadiusData$javajs_util_BS', function (rd, bsSelected) {
if (this.atoms == null ) return;
this.isActive=true;
var isVisible=(rd != null  && rd.value != 0  );
var isAll=(bsSelected == null );
var i0=(isAll ? this.ac - 1 : bsSelected.nextSetBit$I(0));
if (this.bsSizeSet == null ) this.bsSizeSet=$I$(4).newN$I(this.ac);
if (this.mads == null  && i0 >= 0 ) this.mads=Clazz.array(Short.TYPE, [this.ac]);
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsSelected.nextSetBit$I(i + 1))) this.setSizeRD2$I$org_jmol_atomdata_RadiusData$Z(i, rd, isVisible);

});

Clazz.newMeth(C$, 'setSizeRD2$I$org_jmol_atomdata_RadiusData$Z', function (i, rd, isVisible) {
var atom=this.atoms[i];
this.mads[i]=atom.calculateMad$org_jmol_viewer_Viewer$org_jmol_atomdata_RadiusData(this.vwr, rd);
this.bsSizeSet.setBitTo$I$Z(i, isVisible);
atom.setShapeVisibility$I$Z(this.vf, isVisible);
});

Clazz.newMeth(C$, 'setPropAS$S$O$javajs_util_BS', function (propertyName, value, bs) {
if ("color" == propertyName) {
this.isActive=true;
var colix=$I$(5).getColixO$O(value);
var pid=$I$(6).pidOf$O(value);
var n=this.checkColixLength$H$I(colix, bs.length$());
for (var i=bs.nextSetBit$I(0); i >= 0 && i < n ; i=bs.nextSetBit$I(i + 1)) this.setColixAndPalette$H$B$I(colix, pid, i);

return;
}if ("params" == propertyName) {
this.isActive=true;
var data=value;
var colixes=data[0];
var atrans=data[1];
var sizes=data[2];
var rd=Clazz.new_([null, 0, $I$(3).FACTOR, $I$(7).AUTO],$I$(2,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
if (this.bsColixSet == null ) this.bsColixSet=Clazz.new_($I$(4,1));
if (this.bsSizeSet == null ) this.bsSizeSet=Clazz.new_($I$(4,1));
var i0=bs.nextSetBit$I(0);
if (this.mads == null  && i0 >= 0 ) this.mads=Clazz.array(Short.TYPE, [this.ac]);
var n=this.checkColixLength$H$I(colixes == null  ? ($s$[0] = 0, $s$[0]) : 4, bs.length$());
for (var i=i0, pt=0; i >= 0 && i < n ; i=bs.nextSetBit$I(i + 1), pt++) {
var colix=(colixes == null  ? ($s$[0] = 0, $s$[0]) : colixes[pt]);
var f=(atrans == null  ? 0 : atrans[pt]);
if (f > 0.01 ) colix=$I$(5).getColixTranslucent3$H$Z$F(colix, true, f);
this.setColixAndPalette$H$B$I(colix, $I$(6).UNKNOWN.id, i);
if (sizes == null ) continue;
var isVisible=((rd.value=sizes[pt]) > 0 );
this.setSizeRD2$I$org_jmol_atomdata_RadiusData$Z(i, rd, isVisible);
}
return;
}if ("translucency" == propertyName) {
this.isActive=true;
var isTranslucent=(value.equals$O("translucent"));
this.checkColixLength$H$I(4, this.ac);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
this.colixes[i]=$I$(5).getColixTranslucent3$H$Z$F(this.colixes[i], isTranslucent, this.translucentLevel);
if (isTranslucent) this.bsColixSet.set$I(i);
}
return;
}if (propertyName == "deleteModelAtoms") {
this.atoms=(value)[1];
var info=(value)[2];
this.ac=this.ms.ac;
var firstAtomDeleted=info[1];
var nAtomsDeleted=info[2];
this.mads=$I$(1).deleteElements$O$I$I(this.mads, firstAtomDeleted, nAtomsDeleted);
this.colixes=$I$(1).deleteElements$O$I$I(this.colixes, firstAtomDeleted, nAtomsDeleted);
this.paletteIDs=$I$(1).deleteElements$O$I$I(this.paletteIDs, firstAtomDeleted, nAtomsDeleted);
$I$(8).deleteBits$javajs_util_BS$javajs_util_BS(this.bsSizeSet, bs);
$I$(8).deleteBits$javajs_util_BS$javajs_util_BS(this.bsColixSet, bs);
return;
}this.setPropS$S$O$javajs_util_BS(propertyName, value, bs);
});

Clazz.newMeth(C$, 'checkColixLength$H$I', function (colix, n) {
n=Math.min(this.ac, n);
if (colix == 0) return (this.colixes == null  ? 0 : this.colixes.length);
if (this.colixes == null  || n > this.colixes.length ) {
this.colixes=$I$(1).ensureLengthShort$HA$I(this.colixes, n);
this.paletteIDs=$I$(1).ensureLengthByte$BA$I(this.paletteIDs, n);
}if (this.bsColixSet == null ) this.bsColixSet=$I$(4).newN$I(this.ac);
return n;
});

Clazz.newMeth(C$, 'setColixAndPalette$H$B$I', function (colix, paletteID, atomIndex) {
if (this.colixes == null ) System.out.println$S("ATOMSHAPE ERROR");
this.colixes[atomIndex]=colix=this.getColixI$H$B$I(colix, paletteID, atomIndex);
this.bsColixSet.setBitTo$I$Z(atomIndex, colix != 0 || this.shapeID == 0 );
this.paletteIDs[atomIndex]=paletteID;
});

Clazz.newMeth(C$, 'setAtomClickability$', function () {
if (!this.isActive) return;
for (var i=this.ac; --i >= 0; ) {
var atom=this.atoms[i];
if ((atom.shapeVisibilityFlags & this.vf) == 0 || this.ms.isAtomHidden$I(i) ) continue;
atom.setClickable$I(this.vf);
}
});

Clazz.newMeth(C$, 'getInfoAsString$I', function (i) {
return null;
});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
