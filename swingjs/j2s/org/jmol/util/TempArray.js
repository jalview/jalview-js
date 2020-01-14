(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.P3i','org.jmol.c.STR','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TempArray");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lengthsFreePoints=null;
this.freePoints=null;
this.lengthsFreeScreens=null;
this.freeScreens=null;
this.lengthsFreeEnum=null;
this.freeEnum=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lengthsFreePoints=Clazz.array(Integer.TYPE, [6]);
this.freePoints=Clazz.array($I$(1), [6, null]);
this.lengthsFreeScreens=Clazz.array(Integer.TYPE, [6]);
this.freeScreens=Clazz.array($I$(2), [6, null]);
this.lengthsFreeEnum=Clazz.array(Integer.TYPE, [2]);
this.freeEnum=Clazz.array($I$(3), [2, null]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
p$1.clearTempPoints.apply(this, []);
p$1.clearTempScreens.apply(this, []);
});

Clazz.newMeth(C$, 'findBestFit$I$IA', function (size, lengths) {
var iFit=-1;
var fitLength=2147483647;
for (var i=lengths.length; --i >= 0; ) {
var freeLength=lengths[i];
if (freeLength >= size && freeLength < fitLength ) {
fitLength=freeLength;
iFit=i;
}}
if (iFit >= 0) lengths[iFit]=0;
return iFit;
}, 1);

Clazz.newMeth(C$, 'findShorter$I$IA', function (size, lengths) {
for (var i=lengths.length; --i >= 0; ) if (lengths[i] == 0) {
lengths[i]=size;
return i;
}
var iShortest=0;
var shortest=lengths[0];
for (var i=lengths.length; --i > 0; ) if (lengths[i] < shortest) {
shortest=lengths[i];
iShortest=i;
}
if (shortest < size) {
lengths[iShortest]=size;
return iShortest;
}return -1;
}, 1);

Clazz.newMeth(C$, 'clearTempPoints', function () {
for (var i=0; i < 6; i++) {
this.lengthsFreePoints[i]=0;
this.freePoints[i]=null;
}
}, p$1);

Clazz.newMeth(C$, 'allocTempPoints$I', function (size) {
var tempPoints;
var iFit=C$.findBestFit$I$IA(size, this.lengthsFreePoints);
if (iFit > 0) {
tempPoints=this.freePoints[iFit];
} else {
tempPoints=Clazz.array($I$(1), [size]);
for (var i=size; --i >= 0; ) tempPoints[i]=Clazz.new_($I$(1));

}return tempPoints;
});

Clazz.newMeth(C$, 'freeTempPoints$javajs_util_P3A', function (tempPoints) {
for (var i=0; i < this.freePoints.length; i++) if (this.freePoints[i] === tempPoints ) {
this.lengthsFreePoints[i]=tempPoints.length;
return;
}
var iFree=C$.findShorter$I$IA(tempPoints.length, this.lengthsFreePoints);
if (iFree >= 0) this.freePoints[iFree]=tempPoints;
});

Clazz.newMeth(C$, 'clearTempScreens', function () {
for (var i=0; i < 6; i++) {
this.lengthsFreeScreens[i]=0;
this.freeScreens[i]=null;
}
}, p$1);

Clazz.newMeth(C$, 'allocTempScreens$I', function (size) {
var tempScreens;
var iFit=C$.findBestFit$I$IA(size, this.lengthsFreeScreens);
if (iFit > 0) {
tempScreens=this.freeScreens[iFit];
} else {
tempScreens=Clazz.array($I$(2), [size]);
for (var i=size; --i >= 0; ) tempScreens[i]=Clazz.new_($I$(2));

}return tempScreens;
});

Clazz.newMeth(C$, 'freeTempScreens$javajs_util_P3iA', function (tempScreens) {
for (var i=0; i < this.freeScreens.length; i++) if (this.freeScreens[i] === tempScreens ) {
this.lengthsFreeScreens[i]=tempScreens.length;
return;
}
var iFree=C$.findShorter$I$IA(tempScreens.length, this.lengthsFreeScreens);
if (iFree >= 0) this.freeScreens[iFree]=tempScreens;
});

Clazz.newMeth(C$, 'allocTempEnum$I', function (size) {
var tempEnum;
var iFit=C$.findBestFit$I$IA(size, this.lengthsFreeEnum);
if (iFit > 0) {
tempEnum=this.freeEnum[iFit];
} else {
tempEnum=Clazz.array($I$(3), [size]);
}return tempEnum;
});

Clazz.newMeth(C$, 'freeTempEnum$org_jmol_c_STRA', function (tempEnum) {
for (var i=0; i < this.freeEnum.length; i++) if (this.freeEnum[i] === tempEnum ) {
this.lengthsFreeEnum[i]=tempEnum.length;
return;
}
var iFree=C$.findShorter$I$IA(tempEnum.length, this.lengthsFreeEnum);
if (iFree >= 0) this.freeEnum[iFree]=tempEnum;
});

Clazz.newMeth(C$, 'getSlabWithinRange$F$F', function (min, max) {
return Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(1073742114), Clazz.array(Float, -1, [Float.valueOf$F(min), Float.valueOf$F(max)]), $I$(4).FALSE, null]);
}, 1);

Clazz.newMeth(C$, 'getSlabObjectType$I$O$Z$O', function (tok, data, isCap, colorData) {
return Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(tok), data, $I$(4).valueOf$Z(isCap), colorData]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
