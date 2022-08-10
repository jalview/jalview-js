(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.pymol"),p$1={},I$=[[0,'org.jmol.util.BSUtil','javajs.util.SB','javajs.util.PT','org.jmol.util.Escape','org.jmol.adapter.readers.pymol.PyMOLReader','javajs.util.P3']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JmolObject");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=-1;
this.modelIndex=-2147483648;
this.translucency=0;
this.visible=true;
},1);

C$.$fields$=[['Z',['visible'],'F',['translucency'],'I',['id','size','modelIndex','argb'],'S',['jmolName','cacheID'],'O',['bsAtoms','javajs.util.BS','info','java.lang.Object','colors','Object[]','rd','org.jmol.atomdata.RadiusData']]]

Clazz.newMeth(C$, 'c$$I$S$javajs_util_BS$O', function (id, branchNameID, bsAtoms, info) {
;C$.$init$.apply(this);
this.id=id;
this.bsAtoms=bsAtoms;
this.info=info;
this.jmolName=branchNameID;
}, 1);

Clazz.newMeth(C$, 'offset$I$I', function (modelOffset, atomOffset) {
if (modelOffset > 0) {
if (this.modelIndex != -2147483648) this.modelIndex+=modelOffset;
switch (this.id) {
case 1610625028:
case 12294:
return;
case 4115:
var i=(this.info).intValue$();
if (i >= 0) this.info=Integer.valueOf$I(modelOffset + i);
return;
case 1073742031:
var movie=this.info;
var frames=movie.get$O("frames");
for (var j=frames.length; --j >= 0; ) frames[j]+=modelOffset;

return;
}
}if (atomOffset <= 0) return;
if (this.id == 12290) {
var map=(this.info).values$();
for (var o, $o = map.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) $I$(1).offset$javajs_util_BS$I$I(o, 0, atomOffset);

return;
}if (this.bsAtoms != null ) $I$(1).offset$javajs_util_BS$I$I(this.bsAtoms, 0, atomOffset);
if (this.colors != null ) {
var colixes=this.colors[0];
var c=Clazz.array(Short.TYPE, [colixes.length + atomOffset]);
System.arraycopy$O$I$O$I$I(colixes, 0, c, atomOffset, colixes.length);
this.colors[0]=c;
}});

Clazz.newMeth(C$, 'finalizeObject$org_jmol_adapter_readers_pymol_PyMOLScene$org_jmol_modelset_ModelSet$S$Z', function (pymolScene, m, mepList, doCache) {
var sm=m.sm;
var color="color";
var sID;
var sb=null;
if (this.bsAtoms != null ) this.modelIndex=p$1.getModelIndex$org_jmol_modelset_ModelSet.apply(this, [m]);
switch (this.id) {
case 2097194:
sm.vwr.displayAtoms$javajs_util_BS$Z$Z$I$Z(this.bsAtoms, false, false, 1275069441, true);
return;
case 12295:
var bs=sm.vwr.getModelUndeletedAtomsBitSet$I(this.argb);
$I$(1).invertInPlace$javajs_util_BS$I(bs, sm.vwr.ms.ac);
sm.vwr.select$javajs_util_BS$Z$I$Z(bs, false, 0, true);
sm.restrictSelected$Z$Z(false, true);
return;
case 1610625028:
case 12294:
if (this.bsAtoms == null ) {
if (this.info == null ) {
sm.vwr.displayAtoms$javajs_util_BS$Z$Z$I$Z(null, true, false, 0, true);
}sm.vwr.setObjectProp$S$I(this.info, this.id);
} else {
sm.vwr.displayAtoms$javajs_util_BS$Z$Z$I$Z(this.bsAtoms, this.id == 1610625028, false, 1275069441, true);
}return;
case 12290:
sm.vwr.defineAtomSets$java_util_Map(this.info);
return;
case 1073742031:
sm.vwr.am.setMovie$java_util_Map(this.info);
return;
case 4115:
var frame=(this.info).intValue$();
if (frame >= 0) {
sm.vwr.setCurrentModelIndex$I(frame);
} else {
sm.vwr.setAnimationRange$I$I(-1, -1);
sm.vwr.setCurrentModelIndex$I(-1);
}return;
case 1073742139:
sm.vwr.stm.saveScene$S$java_util_Map(this.jmolName, this.info);
sm.vwr.stm.saveOrientation$S$FA(this.jmolName, (this.info).get$O("pymolView"));
return;
case 5:
sm.loadShape$I(this.id);
sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "pymolLabels", this.info, this.bsAtoms);
return;
case 1677721602:
break;
case 659488:
case 1:
if (this.size != -1) {
sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(1, this.size, null, this.bsAtoms);
var bsBonds=(sm.getShapePropertyIndex$I$S$I(1, "sets", 0))[1];
pymolScene.setUniqueBonds$javajs_util_BS$Z(bsBonds, this.id == 1);
this.size=-1;
}this.id=1;
break;
case 1140850689:
this.id=0;
break;
case 0:
break;
case 10:
case 9:
sm.loadShape$I(this.id);
var bsCarb=m.getAtoms$I$O(2097188, null);
$I$(1).andNot$javajs_util_BS$javajs_util_BS(this.bsAtoms, bsCarb);
break;
case 16:
sm.loadShape$I(this.id);
sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "ignore", $I$(1).copyInvert$javajs_util_BS$I(this.bsAtoms, sm.vwr.ms.ac), null);
break;
default:
if (!this.visible) return;
break;
}
switch (this.id) {
case 23:
sm.vwr.setCGO$javajs_util_Lst(this.info);
break;
case 16:
case 0:
case 7:
case 20:
case 11:
case 9:
case 10:
case 24:
if (Clazz.instanceOf(this.info, Clazz.array(java.lang.Object, -1))) {
sm.loadShape$I(this.id);
sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "params", this.info, this.bsAtoms);
}break;
case 6:
if (this.modelIndex < 0) return;
sm.loadShape$I(this.id);
var md=this.info;
md.setModelSet$org_jmol_modelset_ModelSet(m);
var points=md.points;
for (var i=points.size$(); --i >= 0; ) (points.get$I(i)).mi=($s$[0] = this.modelIndex, $s$[0]);

sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "measure", md, this.bsAtoms);
return;
case 135180:
sID=(this.bsAtoms == null  ? this.info : this.jmolName);
if (sm.getShapeIdFromObjectName$S(sID) >= 0) {
sm.vwr.setObjectProp$S$I(sID, 1610625028);
return;
}sb=Clazz.new_($I$(2,1));
sb.append$S("isosurface ID ").append$S($I$(3).esc$S(sID));
if (this.modelIndex < 0) this.modelIndex=sm.vwr.am.cmi;
if (this.bsAtoms == null ) {
sb.append$S(" model ").append$S(m.getModelNumberDotted$I(this.modelIndex)).append$S(" color density sigma 1.0 ").append$S($I$(3).esc$S(this.cacheID)).append$S(" ").append$S($I$(3).esc$S(sID));
if (doCache) sb.append$S(";isosurface cache");
} else {
var lighting=(this.info)[0];
var only=(this.info)[1];
only=" only";
var bsCarve=(this.info)[2];
var carveDistance=((this.info)[3]).floatValue$();
var resolution="";
if (lighting == null ) {
lighting="mesh nofill";
resolution=" resolution 1.5";
}var haveMep=$I$(3).isOneOf$S$S(sID, mepList);
var model=m.getModelNumberDotted$I(this.modelIndex);
var ignore="";
var type=(this.size < 0 ? " sasurface " : " solvent ");
sb.append$S(" model ").append$S(model).append$S(resolution).append$S(" select ").append$S($I$(4).eBS$javajs_util_BS(this.bsAtoms)).append$S(only).append$S(ignore).append$S(type).appendF$F(Math.abs(this.size / 1000.0));
if (!haveMep) {
if (this.argb == 0) sb.append$S(" map property color");
 else sb.append$S(";color isosurface ").append$S($I$(4).escapeColor$I(this.argb));
}sb.append$S(";isosurface frontOnly ").append$S(lighting);
if (this.translucency > 0 ) sb.append$S(";color isosurface translucent " + new Float(this.translucency).toString());
if (bsCarve != null  && !bsCarve.isEmpty$() ) sb.append$S(";isosurface slab within " + new Float(carveDistance).toString() + " {" + model + " and " + $I$(4).eBS$javajs_util_BS(bsCarve) + "}" );
if (doCache && !haveMep ) sb.append$S(";isosurface cache");
}break;
case 1073742016:
var mep=this.info;
sID=mep.get$I(mep.size$() - 2).toString();
var mapID=mep.get$I(mep.size$() - 1).toString();
var min=$I$(5,"floatAt$javajs_util_Lst$I",[$I$(5).listAt$javajs_util_Lst$I(mep, 3), 0]);
var max=$I$(5,"floatAt$javajs_util_Lst$I",[$I$(5).listAt$javajs_util_Lst$I(mep, 3), 2]);
sb=Clazz.new_($I$(2,1));
sb.append$S(";isosurface ID ").append$S($I$(3).esc$S(sID)).append$S(" map ").append$S($I$(3).esc$S(this.cacheID)).append$S(" ").append$S($I$(3).esc$S(mapID)).append$S(";color isosurface range " + new Float(min).toString() + " " + new Float(max).toString() + ";isosurface colorscheme rwb;set isosurfacekey true" );
if (this.translucency > 0 ) sb.append$S(";color isosurface translucent " + new Float(this.translucency).toString());
if (doCache) sb.append$S(";isosurface cache");
break;
case 1073742018:
this.modelIndex=sm.vwr.am.cmi;
var mesh=this.info;
sID=mesh.get$I(mesh.size$() - 2).toString();
sb=Clazz.new_($I$(2,1));
sb.append$S("isosurface ID ").append$S($I$(3).esc$S(sID)).append$S(" model ").append$S(m.getModelNumberDotted$I(this.modelIndex)).append$S(" color ").append$S($I$(4).escapeColor$I(this.argb)).append$S("  ").append$S($I$(3).esc$S(this.cacheID)).append$S(" ").append$S($I$(3).esc$S(sID)).append$S(" mesh nofill frontonly");
var list=$I$(5).sublistAt$javajs_util_Lst$IA(mesh, [2, 0]);
var within=$I$(5).floatAt$javajs_util_Lst$I(list, 11);
list=$I$(5).listAt$javajs_util_Lst$I(list, 12);
if (within > 0 ) {
var pt=Clazz.new_($I$(6,1));
sb.append$S(";isosurface slab within ").appendF$F(within).append$S(" [ ");
for (var j=list.size$() - 3; j >= 0; j-=3) {
$I$(5).pointAt$javajs_util_Lst$I$javajs_util_P3(list, j, pt);
sb.append$S($I$(4).eP$javajs_util_T3(pt));
}
sb.append$S(" ]");
}if (doCache && !$I$(3).isOneOf$S$S(sID, mepList) ) sb.append$S(";isosurface cache");
sb.append$S(";set meshScale ").appendI$I((this.size/500|0));
break;
case 134222850:
sb=this.info;
break;
case 1112152078:
sm.loadShape$I(this.id=10);
sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "putty", this.info, this.bsAtoms);
break;
}
if (sb != null ) {
sm.vwr.runScriptCautiously$S(sb.toString());
return;
}if (this.size != -1 || this.rd != null  ) sm.setShapeSizeBs$I$I$org_jmol_atomdata_RadiusData$javajs_util_BS(this.id, this.size, this.rd, this.bsAtoms);
if (this.argb != 0) sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, color, Integer.valueOf$I(this.argb), this.bsAtoms);
if (this.translucency > 0 ) {
sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "translucentLevel", Float.valueOf$F(this.translucency), this.bsAtoms);
sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "translucency", "translucent", this.bsAtoms);
} else if (this.colors != null ) sm.setShapePropertyBs$I$S$O$javajs_util_BS(this.id, "colors", this.colors, this.bsAtoms);
});

Clazz.newMeth(C$, 'getModelIndex$org_jmol_modelset_ModelSet', function (m) {
if (this.bsAtoms == null ) return -1;
var iAtom=this.bsAtoms.nextSetBit$I(0);
if (iAtom >= m.at.length) System.out.println$S("PyMOL LOADING ERROR IN MERGE");
return (iAtom < 0 ? ($s$[0] = -1, $s$[0]) : m.at[iAtom].mi);
}, p$1);

Clazz.newMeth(C$, 'setColors$HA$F', function (colixes, translucency) {
this.colors=Clazz.array(java.lang.Object, -1, [colixes, Float.valueOf$F(translucency)]);
});

Clazz.newMeth(C$, 'setSize$F', function (size) {
this.size=((size * 1000)|0);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
