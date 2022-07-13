(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.NucleotideColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.RNAInteractionColourScheme','jalview.schemes.PIDColourScheme','jalview.schemes.Blosum62ColourScheme','java.util.Locale','jalview.schemes.TCoffeeColourScheme','jalview.schemes.RNAHelicesColour','jalview.schemes.ClustalxColourScheme']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColourSchemeMapper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['csZappo','jalview.schemes.ColourSchemeI','+csTaylor','+csNucleotide','+csPurine','+csHelix','+csTurn','+csStrand','+csBuried','+csHydro','+csRNAInteractionType','+csPID','+csBlosum62']]]

Clazz.newMeth(C$, 'getJalviewColourScheme$S$jalview_datamodel_AnnotatedCollectionI',  function (colourSchemeName, annotCol) {
switch (colourSchemeName.toUpperCase$java_util_Locale($I$(13).ROOT)) {
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
return (annotCol != null ) ? Clazz.new_($I$(14,1).c$$jalview_datamodel_AnnotatedCollectionI,[annotCol]) : null;
case "RNA HELICES":
return (annotCol != null ) ? Clazz.new_($I$(15,1).c$$jalview_datamodel_AnnotatedCollectionI,[annotCol]) : null;
case "CLUSTAL":
return (annotCol != null ) ? Clazz.new_($I$(16,1).c$$jalview_datamodel_AnnotatedCollectionI$java_util_Map,[annotCol, null]) : null;
case "USER DEFINED":
return null;
default:
return null;
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.csBlosum62=null;
{
C$.csZappo=Clazz.new_($I$(1,1));
C$.csTaylor=Clazz.new_($I$(2,1));
C$.csNucleotide=Clazz.new_($I$(3,1));
C$.csPurine=Clazz.new_($I$(4,1));
C$.csHelix=Clazz.new_($I$(5,1));
C$.csTurn=Clazz.new_($I$(6,1));
C$.csStrand=Clazz.new_($I$(7,1));
C$.csBuried=Clazz.new_($I$(8,1));
C$.csHydro=Clazz.new_($I$(9,1));
C$.csRNAInteractionType=Clazz.new_($I$(10,1));
C$.csPID=Clazz.new_($I$(11,1));
C$.csBlosum62=Clazz.new_($I$(12,1));
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
