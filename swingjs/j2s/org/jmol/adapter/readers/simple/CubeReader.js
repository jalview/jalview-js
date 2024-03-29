(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CubeReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ac=0;
this.isAngstroms=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isAngstroms=false;
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.asc.newAtomSet$();
p$1.readTitleLines.apply(this, []);
p$1.readAtomCountAndOrigin.apply(this, []);
this.readLines$I(3);
p$1.readAtoms.apply(this, []);
this.applySymmetryAndSetTrajectory$();
this.continuing=false;
});

Clazz.newMeth(C$, 'readTitleLines', function () {
if (this.rd$().indexOf$S("#JVXL") == 0) while (this.rd$().indexOf$S("#") == 0){
}
this.checkCurrentLineForScript$();
var name=this.line.trim$();
this.rd$();
this.checkCurrentLineForScript$();
this.asc.setAtomSetName$S(name + " - " + this.line.trim$() );
}, p$1);

Clazz.newMeth(C$, 'readAtomCountAndOrigin', function () {
this.rd$();
this.isAngstroms=(this.line.indexOf$S("ANGSTROMS") >= 0);
var tokens=this.getTokens$();
if (tokens[0].charAt$I(0) == "+") tokens[0]=tokens[0].substring$I(1);
this.ac=Math.abs(this.parseIntStr$S(tokens[0]));
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
var f=(this.isAngstroms ? 1 : 0.5291772);
for (var i=0; i < this.ac; ++i) {
var tokens=$I$(1).getTokens$S(this.rd$());
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 2, f).elementNumber=($s$[0] = this.parseIntStr$S(tokens[0]), $s$[0]);
}
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
