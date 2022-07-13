(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'org.jmol.util.Logger','org.jmol.util.Escape','java.util.Hashtable','javajs.util.AU']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Modulation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['axis','type'],'D',['a1','a2','center','left','right','delta2'],'I',['order'],'S',['utens'],'O',['qCoefs','double[]','+params']]
,['O',['legendre','double[][]']]]

Clazz.newMeth(C$, 'c$$C$C$DA$S$DA', function (axis, type, params, utens, qCoefs) {
;C$.$init$.apply(this);
$I$(1,"info$S",["MOD create " + $I$(2).e$O(qCoefs) + " axis=" + axis + " type=" + type + " params=" + $I$(2).e$O(params) + " utens=" + utens ]);
this.axis=axis;
this.type=type;
this.utens=utens;
this.params=params;
this.qCoefs=qCoefs;
switch (type.$c()) {
case 109:
case 102:
case 111:
case 117:
this.a1=params[0];
this.a2=params[1];
break;
case 108:
case 76:
this.a1=params[2];
this.order=(params[3]|0);
this.calcLegendre$I(this.order);
case 116:
case 115:
case 99:
this.center=params[0];
this.delta2=params[1] / 2;
if (this.delta2 > 0.5 ) this.delta2=0.5;
this.left=this.center - this.delta2;
this.right=this.center + this.delta2;
if (this.left < 0 ) this.left += 1;
if (this.right > 1 ) this.right -= 1;
if (this.left >= this.right  && this.left - this.right < 0.01  ) this.left=this.right + 0.01;
if (this.a1 == 0 ) {
this.a1=params[2] / this.delta2;
}break;
}
}, 1);

Clazz.newMeth(C$, 'apply$org_jmol_util_ModulationSet$DAA', function (ms, t) {
var v=0;
var nt=0;
var isSpin=false;
for (var i=this.qCoefs.length; --i >= 0; ) nt += this.qCoefs[i] * t[i][0];

switch (this.type.$c()) {
case 109:
isSpin=true;
case 102:
case 111:
case 117:
var theta=6.283185307179586 * nt;
if (this.a1 != 0 ) v += this.a1 * Math.sin(theta);
if (this.a2 != 0 ) v += this.a2 * Math.cos(theta);
if ($I$(1).debuggingHigh) $I$(1,"info$S",["MOD " + ms.id + " " + $I$(2).e$O(this.qCoefs) + " axis=" + this.axis + " v=" + new Double(v).toString() + " csin,ccos=" + new Double(this.a1).toString() + "," + new Double(this.a2).toString() + " / theta=" + new Double(theta).toString() ]);
break;
case 76:
case 108:
ms.occAbsolute=true;
nt -= Math.floor(nt);
if (!p$1.range$D.apply(this, [nt])) {
ms.vOcc=0;
return;
}ms.vOcc=1;
var x=(nt - this.center) / this.delta2;
x=((x + 1) % 2) + (x < -1  ? 1 : -1);
var xp=1;
var p=C$.legendre[this.order];
var i=0;
var n=p.length;
while (true){
v += p[i] * xp;
if (++i == n) break;
xp *= x;
}
v *= this.a1;
break;
case 99:
ms.occAbsolute=true;
ms.vOcc=(p$1.range$D.apply(this, [nt - Math.floor(nt)]) ? 1 : 0);
return;
case 116:
isSpin=true;
case 115:
ms.occAbsolute=true;
nt -= Math.floor(nt);
if (!p$1.range$D.apply(this, [nt])) {
ms.vOcc=0;
return;
}ms.vOcc=1;
if (this.left > this.right ) {
if (nt < this.left  && this.left < this.center  ) nt += 1;
 else if (nt > this.right  && this.right > this.center  ) nt -= 1;
}v=this.a1 * (nt - this.center);
break;
}
if (isSpin) {
var f=ms.axesLengths;
if (f == null ) System.out.println$S("Modulation.java axis error");
switch (this.axis.$c()) {
case 120:
ms.mxyz.x += v / f[0];
break;
case 121:
ms.mxyz.y += v / f[1];
break;
case 122:
ms.mxyz.z += v / f[2];
break;
}
} else {
switch (this.axis.$c()) {
case 120:
ms.x += v;
break;
case 121:
ms.y += v;
break;
case 122:
ms.z += v;
break;
case 85:
ms.addUTens$S$F(this.utens, v);
break;
default:
if (Float.isNaN$F(ms.vOcc)) ms.vOcc=0;
ms.vOcc += v;
}
}});

Clazz.newMeth(C$, 'range$D', function (x4) {
return (this.left < this.right  ? this.left <= x4  && x4 <= this.right   : this.left <= x4  || x4 <= this.right  );
}, p$1);

Clazz.newMeth(C$, 'getInfo$', function () {
var info=Clazz.new_($I$(3,1));
info.put$O$O("type", "" + this.type + this.axis );
info.put$O$O("params", this.params);
info.put$O$O("qCoefs", this.qCoefs);
if (this.utens != null ) info.put$O$O("Utens", this.utens);
return info;
});

Clazz.newMeth(C$, 'calcLegendre$I', function (m) {
var n=C$.legendre.length;
if (n > m) return;
m+=3;
var l=$I$(4).newDouble2$I(m + 1);
for (var i=0; i < n; i++) l[i]=C$.legendre[i];

for (; n <= m; n++) {
var p=l[n]=Clazz.array(Double.TYPE, [n + 1]);
for (var i=0; i < n; i++) {
p[i + 1]=(2 * n - 1) * l[n - 1][i] / n;
if (i < n - 1) p[i] += (1 - n) * l[n - 2][i] / n;
}
}
C$.legendre=l;
});

C$.$static$=function(){C$.$static$=0;
C$.legendre=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1]), Clazz.array(Double.TYPE, -1, [0, 1])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
