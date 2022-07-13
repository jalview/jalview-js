(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),I$=[[0,['org.jmol.atomdata.RadiusData','.EnumType']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Vectors", null, 'org.jmol.shape.AtomShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initModelSet$', function () {
if (!!(this.isActive=this.ms.modelSetHasVibrationVectors$())) C$.superclazz.prototype.initModelSet$.apply(this, []);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if (!this.isActive) return;
this.setPropAS$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'getProperty$S$I', function (propertyName, param) {
if (propertyName === "mad" ) return Integer.valueOf$I(this.mads == null  || param < 0  || this.mads.length <= param  ? ($s$[0] = 0, $s$[0]) : this.mads[param]);
return null;
});

Clazz.newMeth(C$, 'setSizeRD2$I$org_jmol_atomdata_RadiusData$Z', function (i, rd, isVisible) {
C$.superclazz.prototype.setSizeRD2$I$org_jmol_atomdata_RadiusData$Z.apply(this, [i, rd, isVisible]);
if (rd != null  && rd.factorType === $I$(1).SCREEN  ) this.mads[i]=((($s$[0]=-this.mads[i],this.mads[i]=$s$[0],$s$[0]))|0);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
