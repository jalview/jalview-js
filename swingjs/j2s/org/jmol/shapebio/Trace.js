(function(){var P$=Clazz.newPackage("org.jmol.shapebio"),p$1={},I$=[[0,'org.jmol.atomdata.RadiusData',['org.jmol.atomdata.RadiusData','.EnumType'],'org.jmol.c.VDW']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Trace", null, 'org.jmol.shapebio.BioShapeCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initShape$', function () {
this.madOn=($s$[0] = 600, $s$[0]);
this.madHelixSheet=($s$[0] = 1500, $s$[0]);
this.madTurnRandom=($s$[0] = 500, $s$[0]);
this.madDnaRna=($s$[0] = 1500, $s$[0]);
});

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bsSelected) {
if (propertyName == "putty") {
p$1.setPutty$FA$javajs_util_BS.apply(this, [value, bsSelected]);
return;
}this.setPropBSC$S$O$javajs_util_BS(propertyName, value, bsSelected);
});

Clazz.newMeth(C$, 'setPutty$FA$javajs_util_BS', function (info, bsAtoms) {
var n=bsAtoms.cardinality$();
if (n == 0) return;
var data=Clazz.array(Float.TYPE, [bsAtoms.length$()]);
var sum=0.0;
var sumsq=0.0;
var min=3.4028235E38;
var max=0;
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var value=this.atoms[i].atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(null, 1111492620, null);
sum += value;
sumsq += (value * value);
if (value < min ) min=value;
if (value > max ) max=value;
}
var mean=(sum / n);
var stdev=Math.sqrt((sumsq - (sum * sum / n)) / n);
var rad=info[1];
var range=info[2];
var scale_min=info[3];
var scale_max=info[4];
var power=info[5];
var transform=(info[6]|0);
var data_range=max - min;
var nonlinear=false;
switch (transform) {
case 0:
case 1:
case 2:
case 3:
nonlinear=true;
break;
}
for (var i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1)) {
var scale=this.atoms[i].atomPropertyFloat$org_jmol_viewer_Viewer$I$javajs_util_P3(null, 1111492620, null);
switch (transform) {
case 3:
case 7:
default:
break;
case 0:
case 4:
scale=1 + (scale - mean) / range / stdev ;
break;
case 1:
case 5:
scale=(scale - min) / data_range / range ;
break;
case 2:
case 6:
scale /= range;
break;
case 8:
if (scale < 0.0 ) scale=0.0;
scale=(Math.sqrt(scale / 8.0) / 3.141592653589793);
break;
}
if (scale < 0.0 ) scale=0.0;
if (nonlinear) scale=Math.pow(scale, power);
if ((scale < scale_min ) && (scale_min >= 0.0 ) ) scale=scale_min;
if ((scale > scale_max ) && (scale_max >= 0.0 ) ) scale=scale_max;
data[i]=scale * rad;
}
var rd=Clazz.new_([data, 0, $I$(2).ABSOLUTE, $I$(3).AUTO],$I$(1,1).c$$FA$F$org_jmol_atomdata_RadiusData_EnumType$org_jmol_c_VDW);
this.setShapeSizeRD$I$org_jmol_atomdata_RadiusData$javajs_util_BS(0, rd, bsAtoms);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
