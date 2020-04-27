(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ClustalxColourScheme','jalview.schemes.Blosum62ColourScheme','jalview.schemes.PIDColourScheme','jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.NucleotideColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.schemes.RNAHelicesColour','jalview.schemes.TCoffeeColourScheme','jalview.schemes.IdColourScheme']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "JalviewColourScheme", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['$name'],'O',['myClass','Class']]]

Clazz.newMeth(C$, 'c$$S$Class', function (s, cl) {
;C$.$init$.apply(this);
this.$name=s;
this.myClass=cl;
}, 1);

Clazz.newMeth(C$, 'getSchemeClass$', function () {
return this.myClass;
});

Clazz.newMeth(C$, 'toString', function () {
return this.$name;
});

C$.$static$=function(){C$.$static$=0;
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
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
