(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.spartan"),p$1={},I$=[[0,'javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.Bond']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpartanInputReader", null, 'org.jmol.adapter.readers.quantum.BasisFunctionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.modelAtomCount=0;
this.bondData=null;
this.constraints=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bondData="";
this.constraints="";
}, 1);

Clazz.newMeth(C$, 'readInputRecords$', function () {
var ac0=this.asc.ac;
var modelName=p$1.readInputHeader.apply(this, []);
while (this.rd$() != null ){
var tokens=this.getTokens$();
if (tokens.length == 2 && this.parseIntStr$S(tokens[0]) != -2147483648  && this.parseIntStr$S(tokens[1]) >= 0 ) break;
}
if (this.line == null ) return null;
p$1.readInputAtoms.apply(this, []);
this.discardLinesUntilContains$S("ATOMLABELS");
if (this.line != null ) p$1.readAtomNames.apply(this, []);
if (this.modelAtomCount > 1) {
this.discardLinesUntilContains$S("HESSIAN");
if (this.line != null ) p$1.readBonds$I.apply(this, [ac0]);
if (this.line != null  && this.line.indexOf$S("BEGINCONSTRAINTS") >= 0 ) p$1.readConstraints.apply(this, []);
}while (this.line != null  && this.line.indexOf$S("END ") < 0  && this.line.indexOf$S("MOLSTATE") < 0 )this.rd$();

if (this.line != null  && this.line.indexOf$S("MOLSTATE") >= 0 ) p$1.readTransform.apply(this, []);
return modelName;
});

Clazz.newMeth(C$, 'readConstraints', function () {
this.constraints="";
while (this.rd$() != null  && this.line.indexOf$S("END") < 0 )this.constraints += (this.constraints == "" ? "" : "\n") + this.line;

this.rd$();
if (this.constraints.length$() == 0) return;
this.asc.setCurrentModelInfo$S$O("constraints", this.constraints);
this.asc.setAtomSetModelProperty$S$S(".PATH", "EnergyProfile");
this.asc.setAtomSetModelProperty$S$S("Constraint", this.constraints);
}, p$1);

Clazz.newMeth(C$, 'readTransform', function () {
this.rd$();
var tokens=$I$(1).getTokens$S(this.rd$() + " " + this.rd$() );
this.setTransform$F$F$F$F$F$F$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[4]), this.parseFloatStr$S(tokens[5]), this.parseFloatStr$S(tokens[6]), this.parseFloatStr$S(tokens[8]), this.parseFloatStr$S(tokens[9]), this.parseFloatStr$S(tokens[10]));
}, p$1);

Clazz.newMeth(C$, 'readInputHeader', function () {
while (this.rd$() != null  && !this.line.startsWith$S(" ") ){
}
this.rd$();
return this.line.substring$I$I(0, (this.line + ";").indexOf$S(";")).trim$();
}, p$1);

Clazz.newMeth(C$, 'readInputAtoms', function () {
this.modelAtomCount=0;
while (this.rd$() != null  && !this.line.startsWith$S("ENDCART") ){
var tokens=this.getTokens$();
this.addAtomXYZSymName$SA$I$S$S(tokens, 1, org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(this.parseIntStr$S(tokens[0])), null);
this.modelAtomCount++;
}
if (this.debugging) $I$(2).debug$S(this.asc.ac + " atoms read");
}, p$1);

Clazz.newMeth(C$, 'readAtomNames', function () {
var atom0=this.asc.ac - this.modelAtomCount;
for (var i=0; i < this.modelAtomCount; i++) {
this.line=this.rd$().trim$();
var name=this.line.substring$I$I(1, this.line.length$() - 1);
this.asc.atoms[atom0 + i].atomName=name;
}
}, p$1);

Clazz.newMeth(C$, 'readBonds$I', function (ac0) {
var nAtoms=this.modelAtomCount;
this.bondData="";
while (this.rd$() != null  && !this.line.startsWith$S("ENDHESS") ){
var tokens=this.getTokens$();
this.bondData += this.line + " ";
if (nAtoms == 0) {
var sourceIndex=this.parseIntStr$S(tokens[0]) - 1 + ac0;
var targetIndex=this.parseIntStr$S(tokens[1]) - 1 + ac0;
var bondOrder=this.parseIntStr$S(tokens[2]);
if (bondOrder > 0) {
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(3).c$$I$I$I,[sourceIndex, targetIndex, bondOrder < 4 ? bondOrder : bondOrder == 5 ? 515 : 1]));
}} else {
nAtoms-=tokens.length;
}}
this.rd$();
if (this.debugging) $I$(2).debug$S(this.asc.bondCount + " bonds read");
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
