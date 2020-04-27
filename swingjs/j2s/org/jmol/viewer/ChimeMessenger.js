(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[[0,'org.jmol.util.Logger','org.jmol.c.CBK','java.util.Hashtable','Boolean','org.jmol.c.STR']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChimeMessenger", null, null, 'org.jmol.viewer.JmolChimeMessenger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vwr','org.jmol.viewer.Viewer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
return this;
});

Clazz.newMeth(C$, 'getInfoXYZ$org_jmol_modelset_Atom', function (a) {
var group3=a.getGroup3$Z(true);
var chainID=a.group.chain.chainID;
return "Atom: " + (group3 == null  ? a.getElementSymbol$() : a.getAtomName$()) + " " + a.getAtomNumber$() + (group3 != null  && group3.length$() > 0  ? (a.isHetero$() ? " Hetero: " : " Group: ") + group3 + " " + a.getResno$() + (chainID != 0 && chainID != 32  ? " Chain: " + a.group.chain.getIDStr$() : "")  : "") + " Model: " + a.getModelNumber$() + " Coordinates: " + new Float(a.x).toString() + " " + new Float(a.y).toString() + " " + new Float(a.z).toString() ;
});

Clazz.newMeth(C$, 'showHash$javajs_util_SB$S', function (outputBuffer, s) {
if (s == null ) return;
if (outputBuffer == null ) {
if (!this.vwr.isPrintOnly) $I$(1).warn$S(s);
this.vwr.scriptStatus$S(s);
} else {
outputBuffer.append$S(s).appendC$C("\n");
}});

Clazz.newMeth(C$, 'reportSelection$I', function (n) {
this.vwr.reportSelection$S((n == 0 ? "No atoms" : n == 1 ? "1 atom" : n + " atoms") + " selected!");
});

Clazz.newMeth(C$, 'update$S', function (msg) {
if (msg == null ) msg="script <exiting>";
 else msg="Requesting " + msg;
this.vwr.scriptStatus$S(msg);
});

Clazz.newMeth(C$, 'scriptCompleted$org_jmol_viewer_StatusManager$S$S', function (sm, statusMessage, strErrorMessageUntranslated) {
var data=Clazz.array(java.lang.Object, -1, [null, "script <exiting>", statusMessage, Integer.valueOf$I(-1), strErrorMessageUntranslated]);
if (sm.notifyEnabled$org_jmol_c_CBK($I$(2).SCRIPT)) sm.cbl.notifyCallback$org_jmol_c_CBK$OA($I$(2).SCRIPT, data);
sm.processScript$OA(data);
return "Jmol script completed.";
});

Clazz.newMeth(C$, 'getAllChimeInfo$javajs_util_SB', function (sb) {
var nHetero=0;
var nH=-1;
var nS=0;
var nT=0;
var ms=this.vwr.ms;
if (ms.haveBioModels) {
var n=0;
var models=ms.am;
var modelCount=ms.mc;
var ac=ms.ac;
var atoms=ms.at;
sb.append$S("\nMolecule name ....... " + ms.getInfoM$S("COMPND"));
sb.append$S("\nSecondary Structure . PDB Data Records");
sb.append$S("\nBrookhaven Code ..... " + ms.modelSetName);
for (var i=modelCount; --i >= 0; ) n+=models[i].getChainCount$Z(false);

sb.append$S("\nNumber of Chains .... " + n);
var ng=0;
var ngHetero=0;
var map=Clazz.new_($I$(3,1));
var id;
var lastid=-1;
nH=0;
for (var i=ac; --i >= 0; ) {
var isHetero=atoms[i].isHetero$();
if (isHetero) nHetero++;
var g=atoms[i].group;
if (!map.containsKey$O(g)) {
map.put$O$O(g, $I$(4).TRUE);
if (isHetero) ngHetero++;
 else ng++;
}if (atoms[i].mi == 0) {
if ((id=g.getStrucNo$()) != lastid && id != 0 ) {
lastid=id;
switch (g.getProteinStructureType$()) {
case $I$(5).HELIX:
nH++;
break;
case $I$(5).SHEET:
nS++;
break;
case $I$(5).TURN:
nT++;
break;
}
}}}
sb.append$S("\nNumber of Groups .... " + ng);
if (ngHetero > 0) sb.append$S(" (" + ngHetero + ")" );
}sb.append$S("\nNumber of Atoms ..... " + (ms.ac - nHetero));
if (nHetero > 0) sb.append$S(" (" + nHetero + ")" );
sb.append$S("\nNumber of Bonds ..... " + ms.bondCount);
sb.append$S("\nNumber of Models ...... " + ms.mc);
if (nH >= 0) {
sb.append$S("\nNumber of Helices ... " + nH);
sb.append$S("\nNumber of Strands ... " + nS);
sb.append$S("\nNumber of Turns ..... " + nT);
}});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
