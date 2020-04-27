(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),I$=[[0,'java.util.Properties','javajs.util.PT','org.jmol.adapter.smarter.Atom']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForceFieldReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomTypes=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['userAtomTypes'],'O',['atomTypes','java.util.Properties']]]

Clazz.newMeth(C$, 'setUserAtomTypes$', function () {
this.userAtomTypes=this.htParams.get$O("atomTypes");
if (this.userAtomTypes != null ) this.userAtomTypes=";" + this.userAtomTypes + ";" ;
});

Clazz.newMeth(C$, 'getElementSymbol$org_jmol_adapter_smarter_Atom$S', function (atom, atomType) {
var elementSymbol=this.atomTypes.get$O(atomType);
if (elementSymbol != null ) {
atom.elementSymbol=elementSymbol;
return true;
}var nChar=atomType.length$();
var haveSymbol=(nChar < 2);
var ptType;
if (this.userAtomTypes != null  && (ptType=this.userAtomTypes.indexOf$S(";" + atomType + "=>" )) >= 0 ) {
ptType+=nChar + 3;
elementSymbol=this.userAtomTypes.substring$I$I(ptType, this.userAtomTypes.indexOf$S$I(";", ptType)).trim$();
haveSymbol=true;
} else if (nChar == 1) {
elementSymbol=atomType.toUpperCase$();
haveSymbol=true;
} else {
var ch0=atomType.charAt$I(0);
var ch1=atomType.charAt$I(1);
var isXx=($I$(2).isUpperCase$C(ch0) && $I$(2).isLowerCase$C(ch1) );
if (" IM IP sz az sy ay ayt ".indexOf$S(atomType) >= 0) {
if (ch0 == "I") {
elementSymbol=atom.atomName.substring$I$I(0, 2);
if (!(function(a,f){return f.apply(null,a)})([elementSymbol.charAt$I(1)],$I$(2).isLowerCase$C)) elementSymbol=elementSymbol.substring$I$I(0, 1);
} else {
elementSymbol=(ch0 == "s" ? "Si" : "Al");
}} else if (nChar == 2 && isXx ) {
} else if ($I$(2).isLetter$C(ch0) && !$I$(2).isLetter$C(ch1) ) {
elementSymbol="" + Character.toUpperCase$C(ch0);
} else if (nChar > 2 && isXx  && !(function(a,f){return f.apply(null,a)})([atomType.charAt$I(2)],$I$(2).isLetter$C) ) {
elementSymbol="" + ch0 + ch1 ;
} else {
ch0=Character.toUpperCase$C(ch0);
var check=" " + atomType + " " ;
if (" CA CB CC CD CE CF CG CH CI CJ CK CM CN CP CQ CR CT CV CW HA HP HC HO HS HW LP NA NB NC NT OH OS OW SH AH BH HT HY AC BC CS OA OB OE OT  dw hc hi hn ho hp hs hw hscp htip ca cg ci cn co coh cp cr cs ct c3h c3m c4h c4m na nb nh nho nh+ ni nn np npc nr nt nz oc oe oh op oscp otip sc sh sp br cl ca+ ar si lp nu sz oz az pz ga ge tioc titd li+ na+ rb+ cs+ mg2+ ca2+ ba2+ cu2+ cl- br- so4 sy oy ay ayt nac+ mg2c fe2c mn4c mn3c co2c ni2c lic+ pd2+ ti4c sr2c ca2c cly- hocl py vy nh4+ so4y lioh naoh koh foh cloh beoh al  CE1 CF1 CF2 CF3 CG CD2 CH1E CH2E CH3E CM CP3 CPH1 CPH2 CQ66 CR55 CR56 CR66 CS66 CT CT3 CT4 CUA1 CUA2 CUA3 CUY1 CUY2 HA HC HMU HO HT LP NC NC2 NO2 NP NR1 NR2 NR3 NR55 NR56 NR66 NT NX OA OAC OC OE OH2 OK OM OS OSH OSI OT OW PO3 PO4 PT PUA1 PUY1 SE SH1E SK SO1 SO2 SO3 SO4 ST ST2 ST2  br br- br1 cl cl- cl1 cl12 cl13 cl14 cl1p ca+ cu+2 fe+2 mg+2 zn+2 cs+ li+ na+ rb+ al4z si si4 si4c si4z ar he kr ne xe  dw hi hw ca cg ci co coh cp cr cs ct ct3 na nb nh nho ni no np nt nt2 nz oa oc oh op os ot sp bt cl\' si4l si5l si5t si6 si6o si\'  br ca cc cd ce cf cl cp cq cu cv cx cy ha hc hn ho hp hs na nb nc nd nh oh os pb pc pd pe pf px py sh ss sx sy  hn2 ho2 cz oo oz si sio hsi osi ".indexOf$S(check) < 0) {
} else if (" AH BH AC BC ".indexOf$S(check) >= 0) {
elementSymbol="" + ch1;
} else if (" al al4z ar ba2+ beoh br br- br1 ca+ ca2+ ca2c cl cl\' cl- cl1 cl12 cl13 cl14 cl1p cloh cly- co2c cs+ cu+2 cu2+ fe+2 fe2c ga ge he kr li+ lic+ lioh lp LP mg+2 mg2+ mg2c mn3c mn4c na+ nac+ naoh ne ni2c nu pd2+ rb+ si si\' si4 si4c si4l si4z si5l si5t si6 si6o sio sr2c ti4c tioc titd xe zn+2 ".indexOf$S(check) >= 0) {
elementSymbol="" + ch0 + ch1 ;
} else {
elementSymbol="" + ch0;
}}if (elementSymbol == null ) {
elementSymbol="" + ch0 + Character.toLowerCase$C(ch1) ;
} else {
haveSymbol=true;
}}atom.elementSymbol=elementSymbol;
if (haveSymbol) this.atomTypes.put$O$O(atomType, elementSymbol);
return haveSymbol;
});

Clazz.newMeth(C$, 'deducePdbElementSymbol$Z$S$S', function (isHetero, XX, group3) {
var i=XX.indexOf$I("\u0000");
var atomType=null;
if (i >= 0) {
atomType=XX.substring$I(i + 1);
XX=XX.substring$I$I(0, i);
if (atomType != null  && atomType.length$() == 1 ) return atomType;
}if (XX.equalsIgnoreCase$S(group3)) return XX;
var len=XX.length$();
var ch1=" ";
i=0;
while (i < len && (ch1=XX.charAt$I(i++)) <= "9" ){
}
var ch2=(i < len ? XX.charAt$I(i) : " ");
var full=group3 + "." + ch1 + ch2 ;
if (("OEC.CA ICA.CA OC1.CA OC2.CA OC4.CA").indexOf$S(full) >= 0) return "Ca";
if (XX.indexOf$S("\'") > 0 || XX.indexOf$S("*") >= 0  || "HCNO".indexOf$I(ch1) >= 0 && ch2 <= "H"   || XX.startsWith$S("CM") ) return "" + ch1;
if (isHetero && $I$(3).isValidSymNoCase$C$C(ch1, ch2) ) return ("" + ch1 + ch2 ).trim$();
if ($I$(3).isValidSym1$C(ch1)) return "" + ch1;
if ($I$(3).isValidSym1$C(ch2)) return "" + ch2;
return "Xx";
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
