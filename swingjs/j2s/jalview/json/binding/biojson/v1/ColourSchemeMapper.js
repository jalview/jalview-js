(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.NucleotideColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.RNAInteractionColourScheme','jalview.schemes.PIDColourScheme','jalview.schemes.Blosum62ColourScheme','jalview.schemes.TCoffeeColourScheme','jalview.schemes.RNAHelicesColour','jalview.schemes.ClustalxColourScheme']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColourSchemeMapper");
C$.csZappo=null;
C$.csTaylor=null;
C$.csNucleotide=null;
C$.csPurine=null;
C$.csHelix=null;
C$.csTurn=null;
C$.csStrand=null;
C$.csBuried=null;
C$.csHydro=null;
C$.csRNAInteractionType=null;
C$.csPID=null;
C$.csBlosum62=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.csBlosum62=null;
{
C$.csZappo=Clazz.new_($I$(1));
C$.csTaylor=Clazz.new_($I$(2));
C$.csNucleotide=Clazz.new_($I$(3));
C$.csPurine=Clazz.new_($I$(4));
C$.csHelix=Clazz.new_($I$(5));
C$.csTurn=Clazz.new_($I$(6));
C$.csStrand=Clazz.new_($I$(7));
C$.csBuried=Clazz.new_($I$(8));
C$.csHydro=Clazz.new_($I$(9));
C$.csRNAInteractionType=Clazz.new_($I$(10));
C$.csPID=Clazz.new_($I$(11));
C$.csBlosum62=Clazz.new_($I$(12));
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI', function (colourSchemeName, annotCol) {
switch (colourSchemeName.toUpperCase$()) {
case "ZAPPO":
return C$.csZappo;
case "TAYLOR":
return C$.csTaylor;
case "NUCLEOTIDE":
return C$.csNucleotide;
case "PURINE":
case "PURINE/PYRIMIDINE":
return C$.csPurine;
case "HELIX":
case "HELIX PROPENSITY":
return C$.csHelix;
case "TURN":
case "TURN PROPENSITY":
return C$.csTurn;
case "STRAND":
case "STRAND PROPENSITY":
return C$.csStrand;
case "BURIED":
case "BURIED INDEX":
return C$.csBuried;
case "HYDRO":
case "HYDROPHOBIC":
return C$.csHydro;
case "RNA INTERACTION TYPE":
return C$.csRNAInteractionType;
case "PID":
case "% IDENTITY":
return C$.csPID;
case "BLOSUM62":
return C$.csBlosum62;
case "T-COFFEE SCORES":
return (annotCol != null ) ? Clazz.new_($I$(13).c$$jalview_datamodel_AnnotatedCollectionI,[annotCol]) : null;
case "RNA HELICES":
return (annotCol != null ) ? Clazz.new_($I$(14).c$$jalview_datamodel_AnnotatedCollectionI,[annotCol]) : null;
case "CLUSTAL":
return (annotCol != null ) ? Clazz.new_($I$(15).c$$jalview_datamodel_AnnotatedCollectionI$java_util_Map,[annotCol, null]) : null;
case "USER DEFINED":
return null;
default:
return null;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
