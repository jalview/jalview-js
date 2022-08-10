(function(){var P$=Clazz.newPackage("org.jmol.shapesurface"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.V3','org.jmol.util.C','javajs.util.SB','org.jmol.shape.Shape','org.jmol.util.Escape']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LcaoCartoon", null, 'org.jmol.shapesurface.Isosurface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isMolecular','lcaoTranslucent','isLonePair','isRadical'],'F',['lcaoTranslucentLevel'],'I',['myColorPt'],'S',['thisType','lcaoID','fullCommand'],'O',['thisSet','javajs.util.BS','rotationAxis','javajs.util.V3','lcaoScale','Float','lcaoColorPos','Integer','+lcaoColorNeg','cappingObject','java.lang.Object','+slabbingObject']]]

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.myType="lcaoCartoon";
this.allowMesh=false;
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
var setInfo=false;
if ("init" === propertyName ) {
this.myColorPt=0;
this.lcaoID=null;
this.thisSet=bs;
this.isMolecular=this.isLonePair=this.isRadical=false;
this.thisType=null;
this.rotationAxis=null;
this.fullCommand=value;
this.setPropI$S$O$javajs_util_BS("init", null, null);
return;
}if ("lcaoID" === propertyName ) {
this.lcaoID=value;
return;
}if ("thisID" === propertyName ) {
this.lcaoID=value;
}if ("selectType" === propertyName ) {
this.thisType=value;
return;
}if ("rotationAxis" === propertyName ) {
this.rotationAxis=value;
return;
}if ("scale" === propertyName ) {
this.lcaoScale=value;
}if ("colorRGB" === propertyName ) {
this.lcaoColorPos=value;
if (this.myColorPt++ == 0) this.lcaoColorNeg=this.lcaoColorPos;
}if ("select" === propertyName ) {
this.thisSet=value;
}if ("translucentLevel" === propertyName ) {
this.lcaoTranslucentLevel=(value).floatValue$();
}if ("settranslucency" === propertyName ) {
this.lcaoTranslucent=((value).equals$O("translucent"));
return;
}if ("translucency" === propertyName ) {
this.lcaoTranslucent=((value).equals$O("translucent"));
if (this.lcaoID == null ) return;
}if ("molecular" === propertyName ) {
this.isMolecular=true;
if (value == null ) return;
propertyName="create";
}if ("create" === propertyName ) {
this.myColorPt=0;
this.thisType=value;
p$1.createLcaoCartoon.apply(this, []);
return;
}if ("lonePair" === propertyName ) {
this.isLonePair=true;
return;
}if ("lp" === propertyName ) {
this.isLonePair=setInfo=true;
}if ("radical" === propertyName ) {
this.isRadical=true;
return;
}if ("rad" === propertyName ) {
this.isRadical=setInfo=true;
}if ("delete" === propertyName ) {
p$1.deleteLcaoCartoon.apply(this, []);
return;
}if ("on" === propertyName ) {
p$1.setLcaoOn$Z.apply(this, [true]);
return;
}if ("off" === propertyName ) {
p$1.setLcaoOn$Z.apply(this, [false]);
return;
}if ("slab" === propertyName ) {
this.slabbingObject=value;
}if ("cap" === propertyName ) {
this.cappingObject=value;
}if ("lobe" === propertyName  || "sphere" === propertyName  ) {
this.getCapSlabInfo$S(this.fullCommand);
}this.setPropI$S$O$javajs_util_BS(propertyName, value, bs);
if (setInfo || "lobe" === propertyName   || "sphere" === propertyName  ) {
this.setScriptInfo$S(null);
}});

Clazz.newMeth(C$, 'setLcaoOn$Z', function (TF) {
if ($I$(1).isWild$S(this.lcaoID)) {
var list=this.getMeshList$S$Z(this.lcaoID, false);
for (var i=list.size$(); --i >= 0; ) list.get$I(i).visible=TF;

return;
}var ac=this.vwr.ms.ac;
for (var i=ac; --i >= 0; ) if (this.lcaoID != null  || this.thisSet.get$I(i) ) p$1.setLcaoOn$I$Z.apply(this, [i, TF]);

}, p$1);

Clazz.newMeth(C$, 'setLcaoOn$I$Z', function (iAtom, TF) {
var id=p$1.getID$S$I.apply(this, [this.lcaoID, iAtom]);
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i].thisID.indexOf$S(id) == 0) this.meshes[i].visible=TF;

}, p$1);

Clazz.newMeth(C$, 'deleteLcaoCartoon', function () {
if ($I$(1).isWild$S(this.lcaoID)) {
this.deleteMeshKey$S(this.lcaoID);
return;
}var ac=this.vwr.ms.ac;
for (var i=ac; --i >= 0; ) if (this.lcaoID != null  || this.thisSet.get$I(i) ) p$1.deleteLcaoCartoon$I.apply(this, [i]);

}, p$1);

Clazz.newMeth(C$, 'deleteLcaoCartoon$I', function (iAtom) {
var id=p$1.getID$S$I.apply(this, [this.lcaoID, iAtom]);
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i].thisID.indexOf$S(id) == 0) this.deleteMeshI$I(i);

}, p$1);

Clazz.newMeth(C$, 'createLcaoCartoon', function () {
this.isMolecular=(this.isMolecular && (this.thisType.indexOf$S("px") >= 0 || this.thisType.indexOf$S("py") >= 0  || this.thisType.indexOf$S("pz") >= 0 ) );
var lcaoID0=this.lcaoID;
for (var i=this.thisSet.nextSetBit$I(0); i >= 0; i=this.thisSet.nextSetBit$I(i + 1)) {
p$1.createLcaoCartoon$I.apply(this, [i]);
this.lcaoID=lcaoID0;
}
}, p$1);

Clazz.newMeth(C$, 'createLcaoCartoon$I', function (iAtom) {
var id=p$1.getID$S$I.apply(this, [this.lcaoID, iAtom]);
var isCpk=(this.thisType.equals$O("cpk"));
for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i].thisID.indexOf$S(id) == 0) this.deleteMeshI$I(i);

this.setPropI$S$O$javajs_util_BS("init", null, null);
this.translucentLevel=this.lcaoTranslucentLevel;
this.setPropI$S$O$javajs_util_BS("thisID", id, null);
if (this.lcaoScale != null ) this.setPropI$S$O$javajs_util_BS("scale", this.lcaoScale, null);
if (isCpk) {
this.setPropI$S$O$javajs_util_BS("colorRGB", Integer.valueOf$I(this.vwr.gdata.getColorArgbOrGray$H(this.ms.at[iAtom].colixAtom)), null);
} else if (this.lcaoColorNeg != null ) {
this.setPropI$S$O$javajs_util_BS("colorRGB", this.lcaoColorNeg, null);
this.setPropI$S$O$javajs_util_BS("colorRGB", this.lcaoColorPos, null);
}if (this.slabbingObject != null ) this.setPropI$S$O$javajs_util_BS("slab", this.slabbingObject, null);
if (this.cappingObject != null ) this.setPropI$S$O$javajs_util_BS("cap", this.cappingObject, null);
this.setPropI$S$O$javajs_util_BS("lcaoType", this.thisType, null);
this.setPropI$S$O$javajs_util_BS("atomIndex", Integer.valueOf$I(iAtom), null);
var axes=Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1)), Clazz.new_($I$(2,1)), $I$(2).newV$javajs_util_T3(this.ms.at[iAtom]), Clazz.new_($I$(2,1))]);
if (this.rotationAxis != null ) axes[3].setT$javajs_util_T3(this.rotationAxis);
if (this.isMolecular) {
if (this.thisType.indexOf$S("px") >= 0) {
axes[0].set$F$F$F(0, -1, 0);
axes[1].set$F$F$F(1, 0, 0);
} else if (this.thisType.indexOf$S("py") >= 0) {
axes[0].set$F$F$F(-1, 0, 0);
axes[1].set$F$F$F(0, 0, 1);
} else if (this.thisType.indexOf$S("pz") >= 0) {
axes[0].set$F$F$F(0, 0, 1);
axes[1].set$F$F$F(1, 0, 0);
}if (this.thisType.indexOf$S("-") == 0) axes[0].scale$F(-1);
}if (this.isMolecular || isCpk || this.thisType.equalsIgnoreCase$S("s") || this.vwr.getHybridizationAndAxes$I$javajs_util_V3$javajs_util_V3$S(iAtom, axes[0], axes[1], this.thisType) != null   ) {
this.setPropI$S$O$javajs_util_BS((this.isRadical ? "radical" : this.isLonePair ? "lonePair" : "lcaoCartoon"), axes, null);
}if (isCpk) {
var colix=this.vwr.ms.at[iAtom].colixAtom;
if ($I$(3).isColixTranslucent$H(colix)) {
this.setPropI$S$O$javajs_util_BS("translucentLevel", Float.valueOf$F($I$(3).getColixTranslucencyLevel$H(colix)), null);
this.setPropI$S$O$javajs_util_BS("translucency", "translucent", null);
}} else if (this.lcaoTranslucent) for (var i=this.meshCount; --i >= 0; ) if (this.meshes[i].thisID.indexOf$S(id) == 0) this.meshes[i].setTranslucent$Z$F(true, this.translucentLevel);

}, p$1);

Clazz.newMeth(C$, 'getID$S$I', function (id, i) {
return (id != null  ? id : (this.isLonePair || this.isRadical  ? "lp_" : "lcao_") + (i + 1) + "_" ) + (this.thisType == null  ? "" : $I$(1,"rep$S$S$S",[this.thisType, "-", (this.thisType.indexOf$S("-p") == 0 ? "" : "_")]));
}, p$1);

Clazz.newMeth(C$, 'getShapeState$', function () {
var sb=Clazz.new_($I$(4,1));
if (this.lcaoScale != null ) $I$(5,"appendCmd$javajs_util_SB$S",[sb, "lcaoCartoon scale " + new Float(this.lcaoScale.floatValue$()).toString()]);
if (this.lcaoColorNeg != null ) $I$(5,"appendCmd$javajs_util_SB$S",[sb, "lcaoCartoon color " + $I$(6,"escapeColor$I",[this.lcaoColorNeg.intValue$()]) + " " + $I$(6,"escapeColor$I",[this.lcaoColorPos.intValue$()]) ]);
if (this.lcaoTranslucent) $I$(5,"appendCmd$javajs_util_SB$S",[sb, "lcaoCartoon translucent " + new Float(this.translucentLevel).toString()]);
for (var i=this.meshCount; --i >= 0; ) if (!this.meshes[i].visible) $I$(5).appendCmd$javajs_util_SB$S(sb, "lcaoCartoon ID " + this.meshes[i].thisID + " off" );

return C$.superclazz.prototype.getShapeState$.apply(this, []) + sb.toString();
});

Clazz.newMeth(C$, 'merge$org_jmol_shape_MeshCollection', function (shape) {
var lc=shape;
this.lcaoScale=lc.lcaoScale;
this.lcaoColorNeg=lc.lcaoColorNeg;
this.lcaoTranslucent=lc.lcaoTranslucent;
this.lcaoTranslucentLevel=lc.lcaoTranslucentLevel;
C$.superclazz.prototype.merge$org_jmol_shape_MeshCollection.apply(this, [shape]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
