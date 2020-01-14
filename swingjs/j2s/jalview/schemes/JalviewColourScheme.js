(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ClustalxColourScheme','jalview.schemes.Blosum62ColourScheme','jalview.schemes.PIDColourScheme','jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.NucleotideColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.schemes.RNAHelicesColour','jalview.schemes.TCoffeeColourScheme','jalview.schemes.IdColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewColourScheme", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Clustal", 0, ["Clustal", Clazz.getClass($I$(1))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Blosum62", 1, ["Blosum62", Clazz.getClass($I$(2))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "PID", 2, ["% Identity", Clazz.getClass($I$(3))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Zappo", 3, ["Zappo", Clazz.getClass($I$(4))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Taylor", 4, ["Taylor", Clazz.getClass($I$(5))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Hydrophobic", 5, ["Hydrophobic", Clazz.getClass($I$(6))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Helix", 6, ["Helix Propensity", Clazz.getClass($I$(7))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Strand", 7, ["Strand Propensity", Clazz.getClass($I$(8))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Turn", 8, ["Turn Propensity", Clazz.getClass($I$(9))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Buried", 9, ["Buried Index", Clazz.getClass($I$(10))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "Nucleotide", 10, ["Nucleotide", Clazz.getClass($I$(11))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "PurinePyrimidine", 11, ["Purine/Pyrimidine", Clazz.getClass($I$(12))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "RNAHelices", 12, ["RNA Helices", Clazz.getClass($I$(13))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "TCoffee", 13, ["T-Coffee Scores", Clazz.getClass($I$(14))]);
Clazz.newEnumConst($vals, C$.c$$S$Class, "IdColour", 14, ["Sequence ID", Clazz.getClass($I$(15))]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$name=null;
this.myClass=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$Class', function (s, cl) {
C$.$init$.apply(this);
this.$name=s;
this.myClass=cl;
}, 1);

Clazz.newMeth(C$, 'getSchemeClass$', function () {
return this.myClass;
});

Clazz.newMeth(C$, 'toString', function () {
return this.$name;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
