(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'org.jmol.modelset.Atom','javajs.util.V3','javajs.util.P3','org.jmol.script.T']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ContactPair");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.radii=null;
this.vdws=null;
this.myAtoms=null;
this.pt=null;
this.volume=0;
this.vdwVolume=0;
this.score=0;
this.d=0;
this.chord=0;
this.contactType=0;
this.xVdwClash=0;
this.oldType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.radii=Clazz.array(Float.TYPE, [2]);
this.vdws=Clazz.array(Float.TYPE, [2]);
this.myAtoms=Clazz.array($I$(1), [2]);
this.volume=0;
this.vdwVolume=0;
this.xVdwClash=NaN;
this.oldType=0;
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelset_AtomA$I$I$F$F$F$F', function (atoms, i1, i2, R, r, vdwA, vdwB) {
C$.$init$.apply(this);
this.radii[0]=R;
this.radii[1]=r;
this.vdws[0]=vdwA;
this.vdws[1]=vdwB;
this.myAtoms[0]=atoms[i1];
this.myAtoms[1]=atoms[i2];
var v=$I$(2).newVsub$javajs_util_T3$javajs_util_T3(this.myAtoms[1], this.myAtoms[0]);
this.d=v.length$();
var f=(R - r + this.d) / (2 * this.d);
this.pt=Clazz.new_($I$(3));
this.pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f, v, this.myAtoms[0]);
this.score=this.d - vdwA - vdwB ;
this.contactType=(this.score < 0  ? 1073741881 : 1648363544);
if (this.score < 0 ) {
this.radii[0]=R=vdwA;
this.radii[1]=r=vdwB;
}p$1.getVolume.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getVolume', function () {
var R=this.radii[0];
var r=this.radii[1];
this.volume=(R + r - this.d);
this.volume *= 3.141592653589793 * this.volume * (this.d * this.d + 2 * this.d * r  - 3 * r * r  + 2 * this.d * R  + 6 * r * R  - 3 * R * R )  / 12 / this.d;
this.vdwVolume=(this.score > 0  ? -this.volume : this.volume);
var a=(this.d * this.d - r * r + R * R);
this.chord=Math.sqrt(4 * this.d * this.d * R * R  - a * a) / this.d;
}, p$1);

Clazz.newMeth(C$, 'setForVdwClash$Z', function (isVdw) {
if (Float.isNaN$F(this.xVdwClash)) return false;
if (isVdw) {
this.oldType=this.contactType;
this.contactType=1648363544;
this.radii[0]=this.vdws[0] + this.xVdwClash;
this.radii[1]=this.vdws[1] + this.xVdwClash;
} else {
this.contactType=this.oldType;
this.radii[0]=this.vdws[0];
this.radii[1]=this.vdws[1];
}p$1.getVolume.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'switchAtoms$', function () {
var atom=this.myAtoms[0];
this.myAtoms[0]=this.myAtoms[1];
this.myAtoms[1]=atom;
var r=this.radii[0];
this.radii[0]=this.radii[1];
this.radii[1]=r;
r=this.vdws[0];
this.vdws[0]=this.vdws[1];
this.vdws[1]=r;
});

Clazz.newMeth(C$, 'toString', function () {
return "type=" + $I$(4).nameOf$I(this.contactType) + " " + this.myAtoms[0] + " " + this.myAtoms[1] + " dAB=" + new Float(this.d).toString() + " score=" + new Float(this.score).toString() + " chord=" + new Float(this.chord).toString() + " volume=" + new Double(this.volume).toString() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
