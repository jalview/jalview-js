(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.V3','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Vibration", null, 'javajs.util.V3');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modDim=0;
this.modScale=0;
this.showTrace=false;
this.trace=null;
this.tracePt=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.modDim=-1;
this.modScale=NaN;
this.trace=null;
}, 1);

Clazz.newMeth(C$, 'setCalcPoint$javajs_util_T3$javajs_util_T3$F$F', function (pt, t456, scale, modulationScale) {
switch (this.modDim) {
case -2:
break;
default:
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3((Math.cos(t456.x * 6.283185307179586) * scale), this, pt);
break;
}
return pt;
});

Clazz.newMeth(C$, 'getInfo$java_util_Map', function (info) {
info.put$TK$TV("vibVector", $I$(1).newV$javajs_util_T3(this));
info.put$TK$TV("vibType", (this.modDim == -2 ? "spin" : this.modDim == -1 ? "vib" : "mod"));
});

Clazz.newMeth(C$, 'clone$', function () {
var v=Clazz.new_(C$);
v.setT$javajs_util_T3(this);
v.modDim=this.modDim;
return v;
});

Clazz.newMeth(C$, 'setXYZ$javajs_util_T3', function (vib) {
this.setT$javajs_util_T3(vib);
});

Clazz.newMeth(C$, 'setType$I', function (type) {
this.modDim=type;
return this;
});

Clazz.newMeth(C$, 'isNonzero$', function () {
return this.x != 0  || this.y != 0   || this.z != 0  ;
});

Clazz.newMeth(C$, 'getOccupancy100$Z', function (isTemp) {
return -2147483648;
});

Clazz.newMeth(C$, 'startTrace$I', function (n) {
this.trace=Clazz.array($I$(2), [n]);
this.tracePt=n;
});

Clazz.newMeth(C$, 'addTracePt$I$org_jmol_util_Point3fi', function (n, ptNew) {
if (this.trace == null  || n == 0  || n != this.trace.length ) this.startTrace$I(n);
if (ptNew != null  && n > 2 ) {
if (--this.tracePt <= 0) {
var p0=this.trace[this.trace.length - 1];
for (var i=this.trace.length; --i >= 1; ) this.trace[i]=this.trace[i - 1];

this.trace[1]=p0;
this.tracePt=1;
}var p=this.trace[this.tracePt];
if (p == null ) p=this.trace[this.tracePt]=Clazz.new_($I$(2));
p.setT$javajs_util_T3(ptNew);
}return this.trace;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
