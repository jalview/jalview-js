(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.simple"),p$1={},I$=[[0,'javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CubeReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isAngstroms=false;
},1);

C$.$fields$=[['Z',['isAngstroms'],'I',['ac']]]

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
var tokens=$I$(1,"getTokens$S",[this.rd$()]);
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 2, f).elementNumber=($s$[0] = this.parseIntStr$S(tokens[0]), $s$[0]);
}
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:26 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
