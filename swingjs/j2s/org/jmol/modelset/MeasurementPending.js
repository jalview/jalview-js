(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={};
var C$=Clazz.newClass(P$, "MeasurementPending", null, 'org.jmol.modelset.Measurement');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.haveTarget=false;
this.haveModified=false;
this.numSet=0;
this.lastIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.numSet=0;
this.lastIndex=-1;
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_modelset_ModelSet', function (modelSet) {
return this.setM$org_jmol_modelset_ModelSet$org_jmol_modelset_Measurement$F$H$S$I(modelSet, null, NaN, 0, null, 0);
});

Clazz.newMeth(C$, 'checkPoint$org_jmol_util_Point3fi', function (ptClicked) {
for (var i=1; i <= this.numSet; i++) if (this.countPlusIndices[i] == -1 - i && this.pts[i - 1].distance$javajs_util_T3(ptClicked) < 0.01  ) return false;

return true;
}, p$1);

Clazz.newMeth(C$, 'getIndexOf$I', function (atomIndex) {
for (var i=1; i <= this.numSet; i++) if (this.countPlusIndices[i] == atomIndex) return i;

return 0;
});

Clazz.newMeth(C$, 'setCount$I', function (count) {
this.setCountM$I(count);
this.numSet=count;
});

Clazz.newMeth(C$, 'addPoint$I$org_jmol_util_Point3fi$Z', function (atomIndex, ptClicked, doSet) {
this.haveModified=(atomIndex != this.lastIndex);
this.lastIndex=atomIndex;
if (ptClicked == null ) {
if (this.getIndexOf$I(atomIndex) > 0) {
if (doSet) this.numSet=this.count;
return this.count;
}this.haveTarget=(atomIndex >= 0);
if (!this.haveTarget) return this.count=this.numSet;
this.count=this.numSet + 1;
this.countPlusIndices[this.count]=atomIndex;
} else {
if (!p$1.checkPoint$org_jmol_util_Point3fi.apply(this, [ptClicked])) {
if (doSet) this.numSet=this.count;
return this.count;
}var pt=this.numSet;
this.haveModified=this.haveTarget=true;
this.count=this.numSet + 1;
this.pts[pt]=ptClicked;
this.countPlusIndices[this.count]=-2 - pt;
}this.countPlusIndices[0]=this.count;
if (doSet) this.numSet=this.count;
this.value=this.getMeasurement$org_jmol_util_Point3fiA(null);
this.strFormat=null;
this.formatMeasurement$S(null);
return this.count;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
