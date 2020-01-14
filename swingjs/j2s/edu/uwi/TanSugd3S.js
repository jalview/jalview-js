(function(){var P$=Clazz.newPackage("edu.uwi"),p$1={},p$2={},I$=[[0,'java.awt.BorderLayout','edu.uwi.TSd3Canvas','edu.uwi.TSd3Controls','javax.swing.JFrame','StringBuffer','java.awt.Font','java.awt.Color','java.awt.Rectangle','java.awt.BasicStroke','java.awt.Point','edu.uwi.TanSugd3S','java.awt.FlowLayout','javax.swing.ButtonGroup','javax.swing.JRadioButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TanSugd3S", null, 'javax.swing.JApplet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$canvas=null;
this.controls=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setName$S("TanSugd3S");
}, 1);

Clazz.newMeth(C$, ['init$','init'], function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(1)));
this.$canvas=Clazz.new_($I$(2));
this.$canvas.setSize$I$I(850, 500);
var c=this.getContentPane$();
c.setSize$I$I(850, 500);
c.add$java_awt_Component$O(this.$canvas, "Center");
c.add$java_awt_Component$O(this.controls=Clazz.new_($I$(3).c$$edu_uwi_TSd3Canvas,[this.$canvas]), "North");
System.out.println$S("Hello, world!");
});

Clazz.newMeth(C$, ['setSize$I$I','setSize'], function (width, height) {
C$.superclazz.prototype.setSize$I$I.apply(this, [width, height]);
this.validate$();
});

Clazz.newMeth(C$, ['destroy$','destroy'], function () {
this.remove$java_awt_Component(this.controls);
this.remove$java_awt_Component(this.$canvas);
});

Clazz.newMeth(C$, ['start$','start'], function () {
this.controls.setEnabled$Z(true);
});

Clazz.newMeth(C$, ['stop$','stop'], function () {
this.controls.setEnabled$Z(false);
});

Clazz.newMeth(C$, ['processEvent$java_awt_AWTEvent','processEvent'], function (e) {
if (e.getID$() == 201) {
System.exit$I(0);
}});

Clazz.newMeth(C$, 'main$SA', function (args) {
var f=Clazz.new_($I$(4).c$$S,["Tanabe-Sugano"]);
var tanabe=Clazz.new_(C$);
tanabe.init$();
tanabe.start$();
f.add$S$java_awt_Component("Center", tanabe);
f.pack$();
f.setVisible$Z(true);
f.setDefaultCloseOperation$I(3);
}, 1);

Clazz.newMeth(C$, ['getAppletInfo$','getAppletInfo'], function () {
return "A d3 octahedral Tanabe-Sugano Diagram";
});

Clazz.newMeth(C$, 'CalcF4T1g$D', function (x1) {
return (15 + (3 * x1) - Math.sqrt(225 - (18 * x1) + (x1 * x1))) / 2;
}, 1);

Clazz.newMeth(C$, 'CalcP4T1g$D', function (x1) {
return (15 + (3 * x1) + Math.sqrt(225 - (18 * x1) + (x1 * x1)) ) / 2;
}, 1);

Clazz.newMeth(C$, 'CalcG2Eg$D', function (x1) {
return 2.727E-7 * x1 * x1 * x1 * x1 * x1  - 3.926E-5 * x1 * x1 * x1 * x1  + 0.00211 * x1 * x1 * x1  - 0.05256 * x1 * x1  + 0.6345 * x1 + 17.50161;
}, 1);

Clazz.newMeth(C$, 'CalcG2A1g$D', function (x1) {
return x1 + 17.50161;
}, 1);

Clazz.newMeth(C$, 'CalcG2T1g$D', function (x1) {
return 3.205E-7 * x1 * x1 * x1 * x1 * x1  - 4.689E-5 * x1 * x1 * x1 * x1  + 0.00258 * x1 * x1 * x1  - 0.06641 * x1 * x1  + 0.8232 * x1 + 17.50161;
}, 1);

Clazz.newMeth(C$, 'CalcG2T2g$D', function (x1) {
return 1.933E-7 * x1 * x1 * x1 * x1 * x1  - 3.336E-5 * x1 * x1 * x1 * x1  + 0.002274 * x1 * x1 * x1  - 0.07898 * x1 * x1  + 1.557 * x1 + 17.50161;
}, 1);

Clazz.newMeth(C$, 'CalcH2T2g$D', function (x1) {
return 2.443E-8 * x1 * x1 * x1 * x1 * x1  + 2.677E-7 * x1 * x1 * x1 * x1  - 3.003E-4 * x1 * x1 * x1  + 0.01745 * x1 * x1  + 0.6635 * x1 + 22.50161;
}, 1);

Clazz.newMeth(C$, 'CalcH2T1g$D', function (x1) {
return 2.195E-8 * x1 * x1 * x1 * x1 * x1  - 5.305E-6 * x1 * x1 * x1 * x1  + 4.933E-4 * x1 * x1 * x1  - 0.02294 * x1 * x1  + 1.57 * x1 + 22.50161;
}, 1);

Clazz.newMeth(C$, 'CalcH2Eg$D', function (x1) {
return 1.881E-7 * x1 * x1 * x1 * x1 * x1  - 2.683E-5 * x1 * x1 * x1 * x1  + 0.001416 * x1 * x1 * x1  - 0.0338 * x1 * x1  + 1.3525 * x1 + 22.50161;
}, 1);

Clazz.newMeth(C$, 'CalcD2T2g$D', function (x1) {
return -7.532E-7 * x1 * x1 * x1 * x1 * x1  + 9.886E-5 * x1 * x1 * x1 * x1  - 0.004352 * x1 * x1 * x1  + 0.06092 * x1 * x1  + 1.378 * x1 + 24.8951929;
}, 1);

Clazz.newMeth(C$, ['processDelB$S','processDelB'], function (msgstr) {
var x1;
var y1;
var y2;
var y3;
var fE;
var fT1;
var fT2;
var fA1;
var fT2b;
var fT2H;
var fT1H;
var fEH;
var Delta;
var Bp;
var ret=Clazz.new_($I$(5));
var ii=msgstr.indexOf$S(":");
var ll=msgstr.length$();
Delta=Double.parseDouble$S(msgstr.substring$I$I(0, ii).trim$());
Bp=Double.parseDouble$S(msgstr.substring$I$I(ii + 1, ll).trim$());
x1=Delta / Bp;
y1=x1;
y2=C$.CalcF4T1g$D(x1);
y3=C$.CalcP4T1g$D(x1);
fE=C$.CalcG2Eg$D(x1);
fT1=C$.CalcG2T1g$D(x1);
fT2=C$.CalcG2T2g$D(x1);
fA1=C$.CalcG2A1g$D(x1);
fT2b=C$.CalcD2T2g$D(x1);
fT2H=C$.CalcH2T2g$D(x1);
fEH=C$.CalcH2Eg$D(x1);
fT1H=C$.CalcH2T1g$D(x1);
var sBp="" + Math.round(Bp);
var va1="" + Math.round(y1 * Bp);
var va2="" + Math.round(y2 * Bp);
var va3="" + Math.round(y3 * Bp);
var vfE="" + Math.round(fE * Bp);
var vfT1="" + Math.round(fT1 * Bp);
var vfT2="" + Math.round(fT2 * Bp);
var vfA1="" + Math.round(fA1 * Bp);
var vfT2b="" + Math.round(fT2b * Bp);
var vfT2H="" + Math.round(fT2H * Bp);
var vfEH="" + Math.round(fEH * Bp);
var vfT1H="" + Math.round(fT1H * Bp);
ret.append$S("B\' " + sBp + ", A " + va1 + ", " + va2 + ", " + va3 + ", F " + vfE + ", " + vfT1 + ", " + vfT2 + ", " + vfA1 + ", " + vfT2H + ", " + vfEH + ", " + vfT1H + ", " + vfT2b );
this.$canvas.start_x=0;
this.$canvas.end_x=50;
this.$canvas.mouseOn=true;
this.$canvas.deltaB=x1;
this.$canvas.y1=x1;
this.$canvas.y2=y2;
this.$canvas.y3=y3;
this.$canvas.fE=fE;
this.$canvas.fT1=fT1;
this.$canvas.fT2=fT2;
this.$canvas.fA1=fA1;
this.$canvas.fT2b=fT2b;
this.$canvas.fT2H=fT2H;
this.$canvas.fEH=fEH;
this.$canvas.fT1H=fT1H;
this.$canvas.ratio21=y2 / y1;
this.$canvas.repaint$();
return ret.toString();
});

Clazz.newMeth(C$, ['processRatio$S','processRatio'], function (msgstr) {
var x1;
var temp_ratio21;
var y1;
var y2;
var y3;
var ratio21;
var v1;
var fE;
var fT1;
var fT2;
var fA1;
var fT2b;
var fT2H;
var fT1H;
var fEH;
var ii=msgstr.indexOf$S(":");
var ll=msgstr.length$();
ratio21=Double.parseDouble$S(msgstr.substring$I$I(0, ii).trim$());
v1=Double.parseDouble$S(msgstr.substring$I$I(ii + 1, ll).trim$());
var x;
var ratioFound=false;
var ret=Clazz.new_($I$(5));
ret.append$S("no value");
for (x=0; x <= 50; x++) {
y1=x;
y2=C$.CalcF4T1g$D(x);
temp_ratio21=y2 / y1;
if ((temp_ratio21 < ratio21 ) && (ratio21 > 1.192 ) && (ratio21 < 1.75 )  ) {
ratioFound=true;
break;
}}
if (ratioFound) {
for (x1=(x - 1); x1 < x ; x1 += 0.02) {
y1=x1;
y2=C$.CalcF4T1g$D(x1);
y3=C$.CalcP4T1g$D(x1);
fE=C$.CalcG2Eg$D(x1);
fT1=C$.CalcG2T1g$D(x1);
fT2=C$.CalcG2T2g$D(x1);
fA1=C$.CalcG2A1g$D(x1);
fT2b=C$.CalcD2T2g$D(x1);
fT2H=C$.CalcH2T2g$D(x1);
fEH=C$.CalcH2Eg$D(x1);
fT1H=C$.CalcH2T1g$D(x1);
temp_ratio21=y2 / y1;
if (temp_ratio21 < ratio21 ) {
ret=Clazz.new_($I$(5));
var Bp=v1 / x1;
var temp=Math.round(Bp * 10);
var tmp= String.instantialize("" + temp);
var Bprime=(tmp.substring$I$I(0, tmp.length$() - 1) + "." + tmp.substring$I$I(tmp.length$() - 1, tmp.length$()) );
y3=C$.CalcP4T1g$D(x1);
var va1="" + Math.round(y1 * Bp);
var va2="" + Math.round(y2 * Bp);
var va3="" + Math.round(y3 * Bp);
var vfE="" + Math.round(fE * Bp);
var vfT1="" + Math.round(fT1 * Bp);
var vfT2="" + Math.round(fT2 * Bp);
var vfA1="" + Math.round(fA1 * Bp);
var vfT2b="" + Math.round(fT2b * Bp);
var vfT2H="" + Math.round(fT2H * Bp);
var vfEH="" + Math.round(fEH * Bp);
var vfT1H="" + Math.round(fT1H * Bp);
ret.append$S("B\' " + Bprime + ", A " + va1 + ", " + va2 + ", " + va3 + ", F " + vfE + ", " + vfT1 + ", " + vfT2 + ", " + vfA1 + ", " + vfT2H + ", " + vfEH + ", " + vfT1H + ", " + vfT2b );
this.$canvas.start_x=0;
this.$canvas.end_x=50;
this.$canvas.mouseOn=true;
this.$canvas.deltaB=x1;
this.$canvas.y1=x1;
this.$canvas.y2=y2;
this.$canvas.y3=y3;
this.$canvas.fE=fE;
this.$canvas.fT1=fT1;
this.$canvas.fT2=fT2;
this.$canvas.fA1=fA1;
this.$canvas.fT2b=fT2b;
this.$canvas.fT2H=fT2H;
this.$canvas.fEH=fEH;
this.$canvas.fT1H=fT1H;
this.$canvas.ratio21=y2 / y1;
this.$canvas.repaint$();
return ret.toString();
}}
}this.$canvas.mouseOn=false;
this.$canvas.repaint$();
return ret.toString();
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-05 09:36:50 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
