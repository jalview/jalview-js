(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},p$2={},I$=[[0,'javajs.util.BS','java.util.Hashtable',['org.jmol.symmetry.CIPDataTracker','.CIPTracker'],'org.jmol.viewer.JC']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CIPDataTracker", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.symmetry.CIPData');
C$.$classes$=[['CIPTracker',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htTracker=Clazz.new_($I$(2,1));
this.lastIndex=-1;
},1);

C$.$fields$=[['I',['lastIndex'],'O',['htTracker','java.util.Map','+lastInfo']]]

Clazz.newMeth(C$, 'isTracker$', function () {
return true;
});

Clazz.newMeth(C$, 'track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z', function (cip, a, b, sphere, finalScore, trackTerminal) {
if (a == null  || b == null   || a.rootSubstituent === b.rootSubstituent  ) return;
var t;
var a1;
var b1;
if (finalScore > 0) {
a1=b;
b1=a;
} else {
a1=a;
b1=b;
}t=Clazz.new_([this, null, cip.currentRule, a1, b1, sphere, Math.abs(finalScore), trackTerminal],$I$(3,1).c$$I$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z);
this.htTracker.put$O$O(C$.getTrackerKey$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom(cip.root, a1, b1), t);
});

Clazz.newMeth(C$, 'getRootTrackerResult$org_jmol_symmetry_CIPChirality_CIPAtom', function (root) {
var s="";
for (var i=0; i < 3; i++) {
s += "\t" + root.atoms[i] + "\t--------------\n" ;
var t=this.htTracker.get$O(C$.getTrackerKey$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom(root, root.atoms[i], root.atoms[i + 1]));
if (t != null ) {
var n=Math.max(t.bsa.length$(), t.bsb.length$());
s += t.getTrackerLine$org_jmol_symmetry_CIPChirality_CIPAtom$javajs_util_BS$javajs_util_BS$I(t.a, t.bsa, (t.rule == 8 ? t.a.listRS[2] : null), n);
s += "\t   " + $I$(4).getCIPRuleName$I(t.rule) + "\n" ;
s += t.getTrackerLine$org_jmol_symmetry_CIPChirality_CIPAtom$javajs_util_BS$javajs_util_BS$I(t.b, t.bsb, (t.rule == 8 ? t.b.listRS[2] : null), n);
}}
s += "\t" + root.atoms[3] + "\t--------------\n" ;
System.out.println$S(root + "\n\n" + s );
p$2.setCIPInfo$S$I$S.apply(this, [s, root.atom.getIndex$(), root.atom.getAtomName$()]);
return s;
});

Clazz.newMeth(C$, 'setCIPInfo$S$I$S', function (s, index, name) {
var modelInfo=p$2.getModelAuxiliaryInfoForAtom$I.apply(this, [index]);
if (modelInfo != null ) {
var cipInfo=modelInfo.get$O("CIPInfo");
if (cipInfo == null ) modelInfo.put$O$O("CIPInfo", cipInfo=Clazz.new_($I$(2,1)));
cipInfo.put$O$O(name, s);
}}, p$2);

Clazz.newMeth(C$, 'getModelAuxiliaryInfoForAtom$I', function (index) {
return (index == this.lastIndex ? this.lastInfo : (this.lastInfo=this.vwr.ms.getModelAuxiliaryInfo$I(this.vwr.ms.at[this.lastIndex=index].getModelIndex$())));
}, p$2);

Clazz.newMeth(C$, 'getTrackerKey$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (root, a, b) {
return (b.rootSubstituent == null  ? "" : root.atom.getAtomName$() + "." + a.rootSubstituent.atom.getAtomName$() + "-" + b.rootSubstituent.atom.getAtomName$() );
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CIPDataTracker, "CIPTracker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['trackTerminal'],'I',['sphere','score','rule'],'O',['a','org.jmol.symmetry.CIPChirality.CIPAtom','+b','bsa','javajs.util.BS','+bsb']]]

Clazz.newMeth(C$, 'c$$I$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z', function (rule, a, b, sphere, score, trackTerminal) {
;C$.$init$.apply(this);
this.rule=rule;
this.a=a;
this.b=b;
this.sphere=sphere;
this.score=score;
this.trackTerminal=trackTerminal;
this.bsa=a.listRS == null  ? Clazz.new_($I$(1,1)) : a.listRS[0];
this.bsb=b.listRS == null  ? Clazz.new_($I$(1,1)) : b.listRS[0];
}, 1);

Clazz.newMeth(C$, 'getTrackerLine$org_jmol_symmetry_CIPChirality_CIPAtom$javajs_util_BS$javajs_util_BS$I', function (b, bsb, bsS, n) {
return "\t\t" + b.myPath + (!this.trackTerminal ? "" : b.isTerminal ? "-o" : "-" + b.atoms[0].atom.getAtomName$()) + (this.rule != 8 && bsb.length$() == 0  ? "" : "\t" + p$1.getLikeUnlike$javajs_util_BS$javajs_util_BSA$I.apply(this, [bsb, b.listRS, n]) + (bsS == null  ? "" : "  " + p$1.getLikeUnlike$javajs_util_BS$javajs_util_BSA$I.apply(this, [bsS, b.listRS, -n])) ) + "\n" ;
});

Clazz.newMeth(C$, 'getLikeUnlike$javajs_util_BS$javajs_util_BSA$I', function (bsa, listRS, n) {
if (this.rule != 8 && this.rule != 6 ) return "";
var s=(n > 0 && (this.rule == 8 || bsa === listRS[1]  )  ? "(R)" : "(S)");
n=Math.abs(n);
for (var i=0; i < n; i++) s += (bsa.get$I(i) ? "l" : "u");

return s;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
