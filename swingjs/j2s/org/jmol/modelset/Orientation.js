(function(){var P$=Clazz.newPackage("org.jmol.modelset"),I$=[[0,'javajs.util.M3','javajs.util.P3','org.jmol.util.Escape','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Orientation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rotationMatrix=Clazz.new_($I$(1,1));
this.center=Clazz.new_($I$(2,1));
this.navCenter=Clazz.new_($I$(2,1));
this.xNav=NaN;
this.yNav=NaN;
this.navDepth=NaN;
this.cameraDepth=NaN;
this.cameraX=NaN;
this.cameraY=NaN;
},1);

C$.$fields$=[['Z',['windowCenteredFlag','navigationMode'],'F',['xTrans','yTrans','zoom','rotationRadius','xNav','yNav','navDepth','cameraDepth','cameraX','cameraY'],'S',['saveName','moveToText'],'O',['rotationMatrix','javajs.util.M3','center','javajs.util.P3','+navCenter','pymolView','float[]','vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$Z$FA', function (vwr, asDefault, pymolView) {
;C$.$init$.apply(this);
this.vwr=vwr;
if (pymolView != null ) {
this.pymolView=pymolView;
this.moveToText="moveTo -1.0 PyMOL " + $I$(3).eAF$FA(pymolView);
return;
}vwr.finalizeTransformParameters$();
if (asDefault) {
var rot=vwr.ms.getInfoM$S("defaultOrientationMatrix");
if (rot == null ) this.rotationMatrix.setScale$F(1);
 else this.rotationMatrix.setM3$javajs_util_M34(rot);
} else {
vwr.tm.getRotation$javajs_util_M3(this.rotationMatrix);
}this.xTrans=vwr.tm.getTranslationXPercent$();
this.yTrans=vwr.tm.getTranslationYPercent$();
this.zoom=vwr.tm.getZoomSetting$();
this.center.setT$javajs_util_T3(vwr.tm.fixedRotationCenter);
this.windowCenteredFlag=vwr.tm.isWindowCentered$();
this.rotationRadius=vwr.getFloat$I(570425388);
this.navigationMode=vwr.getBoolean$I(603979889);
this.moveToText=vwr.tm.getMoveToText$F$Z(-1, false);
if (this.navigationMode) {
this.xNav=vwr.tm.getNavigationOffsetPercent$C("X");
this.yNav=vwr.tm.getNavigationOffsetPercent$C("Y");
this.navDepth=vwr.tm.navigationDepthPercent;
this.navCenter=$I$(2).newP$javajs_util_T3(vwr.tm.navigationCenter);
}if (vwr.tm.camera.z != 0 ) {
this.cameraDepth=vwr.tm.getCameraDepth$();
this.cameraX=vwr.tm.camera.x;
this.cameraY=vwr.tm.camera.y;
}}, 1);

Clazz.newMeth(C$, 'getMoveToText$Z', function (asCommand) {
return (asCommand ? "   " + this.moveToText + "\n  save orientation " + $I$(4,"esc$S",[this.saveName.substring$I(12)]) + ";\n"  : this.moveToText);
});

Clazz.newMeth(C$, 'restore$F$Z', function (timeSeconds, isAll) {
if (isAll) {
this.vwr.setBooleanProperty$S$Z("windowCentered", this.windowCenteredFlag);
this.vwr.setBooleanProperty$S$Z("navigationMode", this.navigationMode);
if (this.pymolView == null ) this.vwr.moveTo$org_jmol_api_JmolScriptEvaluator$F$javajs_util_P3$javajs_util_V3$F$javajs_util_M3$F$F$F$F$javajs_util_P3$F$F$F$F$F$F(this.vwr.eval, timeSeconds, this.center, null, NaN, this.rotationMatrix, this.zoom, this.xTrans, this.yTrans, this.rotationRadius, this.navCenter, this.xNav, this.yNav, this.navDepth, this.cameraDepth, this.cameraX, this.cameraY);
 else this.vwr.tm.moveToPyMOL$org_jmol_api_JmolScriptEvaluator$F$FA(this.vwr.eval, timeSeconds, this.pymolView);
} else {
this.vwr.tm.setRotation$javajs_util_M3(this.rotationMatrix);
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
