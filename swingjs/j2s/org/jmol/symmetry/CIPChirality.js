(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},p$2={},I$=[[0,'javajs.util.BS','java.util.Hashtable','org.jmol.util.Logger','java.util.Arrays','org.jmol.util.Elements','javajs.util.PT','org.jmol.symmetry.CIPChirality','javajs.util.Lst','java.util.Collections',['org.jmol.symmetry.CIPChirality','.CIPAtom'],'org.jmol.viewer.JC','org.jmol.util.SimpleNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CIPChirality", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CIPAtom',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentRule=1;
this.bsNeedRule=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['doTrack','isAux','havePseudoAuxiliary'],'I',['currentRule','ptIDLogger'],'O',['root','org.jmol.symmetry.CIPChirality.CIPAtom','data','org.jmol.symmetry.CIPData','bsNeedRule','javajs.util.BS']]
,['O',['ruleNames','String[]']]]

Clazz.newMeth(C$, 'getRuleName$I', function (rule) {
return C$.ruleNames[rule];
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getChiralityForAtoms$org_jmol_symmetry_CIPData', function (data) {
if (data.bsAtoms.cardinality$() == 0) return;
this.data=data;
this.doTrack=data.isTracker$();
this.ptIDLogger=0;
var bsToDo=data.bsMolecule.clone$();
var haveAlkenes=p$2.preFilterAtomList$org_jmol_util_SimpleNodeA$javajs_util_BS$javajs_util_BS.apply(this, [data.atoms, bsToDo, data.bsEnes]);
if (!data.bsEnes.isEmpty$()) data.getEneKekule$();
$I$(3).info$S("bsKekule:" + data.bsKekuleAmbiguous);
bsToDo=data.bsAtoms.clone$();
for (var i=bsToDo.nextSetBit$I(0); i >= 0; i=bsToDo.nextSetBit$I(i + 1)) {
var a=data.atoms[i];
a.setCIPChirality$I(0);
this.ptIDLogger=0;
var c=this.getAtomChiralityLimited$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_util_SimpleNode(a, null, null);
a.setCIPChirality$I(c == 0 ? 3 : c | ((this.currentRule - 1) << 5));
if (this.doTrack && c != 0 ) data.getRootTrackerResult$org_jmol_symmetry_CIPChirality_CIPAtom(this.root);
}
if (haveAlkenes) {
var lstEZ=Clazz.new_($I$(8,1));
for (var i=bsToDo.nextSetBit$I(0); i >= 0; i=bsToDo.nextSetBit$I(i + 1)) p$2.getAtomBondChirality$org_jmol_util_SimpleNode$javajs_util_Lst$javajs_util_BS.apply(this, [data.atoms[i], lstEZ, bsToDo]);

if (data.lstSmallRings.length > 0 && lstEZ.size$() > 0 ) p$2.clearSmallRingEZ$org_jmol_util_SimpleNodeA$javajs_util_Lst.apply(this, [data.atoms, lstEZ]);
p$2.setStereoFromSmiles$javajs_util_BS$I$org_jmol_util_SimpleNodeA.apply(this, [data.bsHelixM, 17, data.atoms]);
p$2.setStereoFromSmiles$javajs_util_BS$I$org_jmol_util_SimpleNodeA.apply(this, [data.bsHelixP, 18, data.atoms]);
}if ($I$(3).debugging) {
(function(a,f){return f.apply(null,a)})(["Kekule ambiguous = " + data.bsKekuleAmbiguous],$I$(3).info$S);
(function(a,f){return f.apply(null,a)})(["small rings = " + $I$(6).toJSON$S$O(null, data.lstSmallRings)],$I$(3).info$S);
}});

Clazz.newMeth(C$, 'setStereoFromSmiles$javajs_util_BS$I$org_jmol_util_SimpleNodeA', function (bsHelix, stereo, atoms) {
if (bsHelix != null ) for (var i=bsHelix.nextSetBit$I(0); i >= 0; i=bsHelix.nextSetBit$I(i + 1)) atoms[i].setCIPChirality$I(stereo);

}, p$2);

Clazz.newMeth(C$, 'preFilterAtomList$org_jmol_util_SimpleNodeA$javajs_util_BS$javajs_util_BS', function (atoms, bsToDo, bsEnes) {
var haveAlkenes=false;
for (var i=bsToDo.nextSetBit$I(0); i >= 0; i=bsToDo.nextSetBit$I(i + 1)) {
if (!this.data.couldBeChiralAtom$org_jmol_util_SimpleNode(atoms[i])) {
bsToDo.clear$I(i);
continue;
}switch (this.data.couldBeChiralAlkene$org_jmol_util_SimpleNode$org_jmol_util_SimpleEdge(atoms[i], null)) {
case -1:
break;
case 13:
bsEnes.set$I(i);
case 17:
haveAlkenes=true;
break;
}
}
return haveAlkenes;
}, p$2);

Clazz.newMeth(C$, 'isFirstRow$org_jmol_util_SimpleNode', function (a) {
var n=a.getElementNumber$();
return (n > 2 && n <= 10 );
}, 1);

Clazz.newMeth(C$, 'clearSmallRingEZ$org_jmol_util_SimpleNodeA$javajs_util_Lst', function (atoms, lstEZ) {
for (var j=this.data.lstSmallRings.length; --j >= 0; ) this.data.lstSmallRings[j].andNot$javajs_util_BS(this.data.bsAtropisomeric);

for (var i=lstEZ.size$(); --i >= 0; ) {
var ab=lstEZ.get$I(i);
for (var j=this.data.lstSmallRings.length; --j >= 0; ) {
var ring=this.data.lstSmallRings[j];
if (ring.get$I(ab[0]) && ring.get$I(ab[1]) ) {
atoms[ab[0]].setCIPChirality$I(3);
atoms[ab[1]].setCIPChirality$I(3);
}}
}
}, p$2);

Clazz.newMeth(C$, 'getAtomBondChirality$org_jmol_util_SimpleNode$javajs_util_Lst$javajs_util_BS', function (atom, lstEZ, bsToDo) {
var index=atom.getIndex$();
var bonds=atom.getEdges$();
var c=0;
var isAtropic=this.data.bsAtropisomeric.get$I(index);
for (var j=bonds.length; --j >= 0; ) {
var bond=bonds[j];
var atom1;
var index1;
if (isAtropic) {
atom1=bonds[j].getOtherNode$org_jmol_util_SimpleNode(atom);
index1=atom1.getIndex$();
if (!this.data.bsAtropisomeric.get$I(index1)) continue;
c=p$2.setBondChirality$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$Z.apply(this, [atom, atom1, atom, atom1, true]);
} else if (this.data.getBondOrder$org_jmol_util_SimpleEdge(bond) == 2) {
atom1=p$2.getLastCumuleneAtom$org_jmol_util_SimpleEdge$org_jmol_util_SimpleNode$IA$org_jmol_util_SimpleNodeA.apply(this, [bond, atom, null, null]);
index1=atom1.getIndex$();
if (index1 < index) continue;
c=p$2.getBondChiralityLimited$org_jmol_util_SimpleEdge$org_jmol_util_SimpleNode.apply(this, [bond, atom]);
} else {
continue;
}if (c != 0) {
if (!isAtropic) lstEZ.addLast$O(Clazz.array(Integer.TYPE, -1, [index, index1]));
bsToDo.clear$I(index);
bsToDo.clear$I(index1);
}if (isAtropic) break;
}
}, p$2);

Clazz.newMeth(C$, 'getLastCumuleneAtom$org_jmol_util_SimpleEdge$org_jmol_util_SimpleNode$IA$org_jmol_util_SimpleNodeA', function (bond, atom, nSP2, parents) {
var atom2=bond.getOtherNode$org_jmol_util_SimpleNode(atom);
if (parents != null ) {
parents[0]=atom2;
parents[1]=atom;
}if (nSP2 != null ) nSP2[0]=2;
var ppt=0;
while (true){
if (atom2.getCovalentBondCount$() != 2) return atom2;
var edges=atom2.getEdges$();
for (var i=edges.length; --i >= 0; ) {
var atom3=(bond=edges[i]).getOtherNode$org_jmol_util_SimpleNode(atom2);
if (atom3 === atom ) continue;
if (this.data.getBondOrder$org_jmol_util_SimpleEdge(bond) != 2) return atom2;
if (parents != null ) {
if (ppt == 0) {
parents[0]=atom2;
ppt=1;
}parents[1]=atom2;
}if (nSP2 != null ) nSP2[0]++;
atom=atom2;
atom2=atom3;
break;
}
}
}, p$2);

Clazz.newMeth(C$, 'getAtomChiralityLimited$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_util_SimpleNode', function (atom, cipAtom, parentAtom) {
var rs=0;
this.bsNeedRule.clearAll$();
this.bsNeedRule.set$I(1);
try {
var isAlkeneEndCheck=(atom == null );
if (isAlkeneEndCheck) {
atom=(this.root=cipAtom).atom;
cipAtom.htPathPoints=(cipAtom.parent=Clazz.new_($I$(10,1),[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(parentAtom, null, true, false, false)).htPathPoints;
} else {
if (!(this.root=cipAtom=(cipAtom == null  ? Clazz.new_($I$(10,1),[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(atom, null, false, false, false) : cipAtom)).isSP3) {
return 0;
}}if (cipAtom.setNode$()) {
for (this.currentRule=1; this.currentRule <= 9; this.currentRule++) {
var nPrioritiesPrev=cipAtom.nPriorities;
switch (this.currentRule) {
case 3:
if (cipAtom.rule6refIndex >= 0) this.bsNeedRule.set$I(3);
break;
case 4:
this.isAux=true;
this.doTrack=false;
this.havePseudoAuxiliary=false;
cipAtom.createAuxiliaryDescriptors$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtomA(null, null);
this.doTrack=this.data.isTracker$();
this.isAux=false;
break;
case 5:
if (!this.bsNeedRule.get$I(5)) {
this.currentRule=8;
continue;
}case 6:
case 7:
cipAtom.sortSubstituents$I(-2147483648);
this.bsNeedRule.set$I(this.currentRule);
break;
case 8:
if (this.havePseudoAuxiliary) cipAtom.clearRule4Lists$();
cipAtom.sortSubstituents$I(-2147483648);
this.bsNeedRule.set$I(this.currentRule);
break;
case 9:
this.bsNeedRule.setBitTo$I$Z(9, (cipAtom.rule6refIndex < 0 && (rs=cipAtom.getRule6Descriptor$Z(false)) != 0 ));
break;
}
if (!this.bsNeedRule.get$I(this.currentRule)) continue;
if (rs == 0 && cipAtom.sortSubstituents$I(0) ) {
if ($I$(3).debuggingHigh && cipAtom.h1Count < 2 ) {
for (var i=0; i < cipAtom.bondCount; i++) {
if (cipAtom.atoms[i] != null ) $I$(3).info$S(cipAtom.atoms[i] + " " + cipAtom.priorities[i] );
}
}if (isAlkeneEndCheck) return cipAtom.getEneTop$();
rs=this.data.checkHandedness$org_jmol_symmetry_CIPChirality_CIPAtom(cipAtom);
if (this.currentRule == 8) {
if (cipAtom.nPriorities == 4 && nPrioritiesPrev == 2 ) cipAtom.isRule5Pseudo=!cipAtom.isRule5Pseudo;
if (cipAtom.isRule5Pseudo) rs|=8;
}if ($I$(3).debugging) (function(a,f){return f.apply(null,a)})([atom + " " + $I$(11).getCIPChiralityName$I(rs) + " by Rule " + this.getRuleName$I(this.currentRule) + "\n----------------------------------" ],$I$(3).info$S);
return rs;
}}
}} catch (e) {
System.out.println$S(e + " in CIPChirality " + this.currentRule );
{
alert(e);
}
return 3;
}
return rs;
});

Clazz.newMeth(C$, 'getBondChiralityLimited$org_jmol_util_SimpleEdge$org_jmol_util_SimpleNode', function (bond, a) {
if (a == null ) a=bond.getOtherNode$org_jmol_util_SimpleNode(null);
if (this.data.couldBeChiralAlkene$org_jmol_util_SimpleNode$org_jmol_util_SimpleEdge(a, bond) == -1) return 0;
var nSP2=Clazz.array(Integer.TYPE, [1]);
var parents=Clazz.array($I$(12), [2]);
var b=p$2.getLastCumuleneAtom$org_jmol_util_SimpleEdge$org_jmol_util_SimpleNode$IA$org_jmol_util_SimpleNodeA.apply(this, [bond, a, nSP2, parents]);
var isAxial=nSP2[0] % 2 == 1;
if (!isAxial && this.data.bsAromatic.get$I(a.getIndex$()) ) return -1;
var c=p$2.setBondChirality$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$Z.apply(this, [a, parents[0], parents[1], b, isAxial]);
if ($I$(3).debugging) (function(a,f){return f.apply(null,a)})(["get Bond Chirality " + $I$(11).getCIPChiralityName$I(c) + " " + bond ],$I$(3).info$S);
return c;
}, p$2);

Clazz.newMeth(C$, 'setBondChirality$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$org_jmol_util_SimpleNode$Z', function (a, pa, pb, b, isAxial) {
var a1=Clazz.new_($I$(10,1),[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(a, null, true, false, false);
var b2=Clazz.new_($I$(10,1),[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(b, null, true, false, false);
var atop=this.getAtomChiralityLimited$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_util_SimpleNode(null, a1, pa) - 1;
var ruleA=this.currentRule;
var btop=this.getAtomChiralityLimited$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_util_SimpleNode(null, b2, pb) - 1;
var ruleB=this.currentRule;
if (isAxial && a1.nRootDuplicates > 3  && atop < 0  && btop < 0 ) {
ruleA=ruleB=this.currentRule=9;
b2.rule6refIndex=a1.atoms[atop=a1.getEneTop$() - 1].atomIndex;
if (b2.sortSubstituents$I(0)) btop=b2.getEneTop$() - 1;
}var c=(atop >= 0 && btop >= 0  ? this.getEneChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z(b2.atoms[btop], b2, a1, a1.atoms[atop], isAxial, true) : 0);
if (c != 0 && (isAxial || !this.data.bsAtropisomeric.get$I(a.getIndex$()) && !this.data.bsAtropisomeric.get$I(b.getIndex$())  ) ) {
if (isAxial == (ruleA == 8)  == (ruleB == 8) ) c&=~8;
 else c|=8;
a.setCIPChirality$I(c | ((ruleA - 1) << 5));
b.setCIPChirality$I(c | ((ruleB - 1) << 5));
if ($I$(3).debugging) (function(a,f){return f.apply(null,a)})([a + "-" + b + " " + $I$(11).getCIPChiralityName$I(c) ],$I$(3).info$S);
}return c;
}, p$2);

Clazz.newMeth(C$, 'getEneChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z', function (winner1, end1, end2, winner2, isAxial, allowPseudo) {
return (winner1 == null  || winner2 == null   || winner1.atom == null   || winner2.atom == null   ? 0 : isAxial ? this.data.isPositiveTorsion$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom(winner1, end1, end2, winner2) : this.data.isCis$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom(winner1, end1, end2, winner2));
});

C$.$static$=function(){C$.$static$=0;
C$.ruleNames=Clazz.array(String, -1, ["", "1a", "1b", "2", "3", "4a", "4b", "4c", "5", "6"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CIPChirality, "CIPAtom", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['Comparable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isRule5Pseudo=true;
this.isDuplicate=true;
this.atomIndex=-1;
this.mass=-1;
this.atoms=Clazz.array(C$, [4]);
this.myPath="";
this.priorities=Clazz.array(Integer.TYPE, [4]);
this.rule6refIndex=-1;
this.isEvenEne=true;
this.auxEZ=-1;
this.isSP3=true;
this.auxChirality="~";
this.bsTemp=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['isRule5Pseudo','isSet','isDuplicate','isTerminal','isAlkene','isAlkeneAtom2','isKekuleAmbiguous','multipleBondDuplicate','isEvenEne','isSP3','isChiralPath'],'C',['auxChirality'],'F',['elemNo','mass'],'I',['id','sphere','rootDistance','atomIndex','bondCount','h1Count','nAtoms','oldNPriorities','nPriorities','priority','nRootDuplicates','rule6refIndex','auxEZ','rule4Type','rule4Ref'],'S',['myPath','chiralPath'],'O',['atom','org.jmol.util.SimpleNode','parent','org.jmol.symmetry.CIPChirality.CIPAtom','+rootSubstituent','atoms','org.jmol.symmetry.CIPChirality.CIPAtom[]','bsPath','javajs.util.BS','oldPriorities','int[]','+priorities','htPathPoints','java.util.Map','bsRule6Subs','javajs.util.BS','alkeneParent','org.jmol.symmetry.CIPChirality.CIPAtom','+alkeneChild','+nextSP2','+nextChiralBranch','bsTemp','javajs.util.BS','listRS','javajs.util.BS[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z', function (atom, parent, isAlkene, isDuplicate, isParentBond) {
this.id=++this.this$0.ptIDLogger;
this.parent=parent;
if (atom == null ) return this;
this.isAlkene=isAlkene;
this.atom=atom;
this.atomIndex=atom.getIndex$();
if (atom.getIsotopeNumber$() > 0) this.this$0.bsNeedRule.set$I(3);
this.isDuplicate=this.multipleBondDuplicate=isDuplicate;
this.isKekuleAmbiguous=(this.this$0.data.bsKekuleAmbiguous != null  && this.this$0.data.bsKekuleAmbiguous.get$I(this.atomIndex) );
this.elemNo=(isDuplicate && this.isKekuleAmbiguous  ? p$1.getKekuleElementNumber.apply(parent, []) : atom.getElementNumber$());
this.bondCount=atom.getCovalentBondCount$();
this.isSP3=(this.bondCount == 4 || this.bondCount == 3 && !isAlkene  && (this.elemNo > 10  || this.this$0.data.bsAzacyclic != null  && this.this$0.data.bsAzacyclic.get$I(this.atomIndex)  )  );
if (parent != null ) this.sphere=parent.sphere + 1;
if (this.sphere == 1) {
this.rootSubstituent=this;
this.htPathPoints=Clazz.new_($I$(2,1));
} else if (parent != null ) {
this.rootSubstituent=parent.rootSubstituent;
this.htPathPoints=(parent.htPathPoints).clone$();
}this.bsPath=(parent == null  ? Clazz.new_($I$(1,1)) : parent.bsPath.clone$());
if (isDuplicate) this.this$0.bsNeedRule.set$I(4);
this.rootDistance=this.sphere;
if (parent == null ) {
this.bsPath.set$I(this.atomIndex);
} else if (this.multipleBondDuplicate) {
this.rootDistance--;
} else if (this.bsPath.get$I(this.atomIndex)) {
this.this$0.bsNeedRule.setBitTo$I$Z(2, (this.isDuplicate=true));
if ((this.rootDistance=(atom === this.this$0.root.atom  ? 0 : isParentBond ? parent.sphere : this.htPathPoints.get$O(Integer.valueOf$I(this.atomIndex)).intValue$())) == 0) {
this.this$0.root.nRootDuplicates++;
}} else {
this.bsPath.set$I(this.atomIndex);
this.htPathPoints.put$O$O(Integer.valueOf$I(this.atomIndex), Integer.valueOf$I(this.rootDistance));
}if (this.this$0.doTrack) {
if (this.sphere < 50) this.myPath=(parent != null  ? parent.myPath + "-" : "") + this;
if ($I$(3).debuggingHigh) $I$(3).info$S("new CIPAtom " + this.myPath);
}return this;
});

Clazz.newMeth(C$, 'getEneTop$', function () {
return (this.atoms[0].isDuplicate ? 2 : 1);
});

Clazz.newMeth(C$, 'getRule6Descriptor$Z', function (isAux) {
if (this.nPriorities > 2 || (isAux ? p$1.countAuxDuplicates$I.apply(this, [this.atomIndex]) : this.nRootDuplicates) <= 2 ) return 0;
var i1=(this.priorities[0] == this.priorities[1] ? 0 : 1);
var i2=(this.priorities[2] != this.priorities[3] ? 3 : 4);
var istep=(this.priorities[2] == this.priorities[1] ? 1 : 2);
var rsRM=0;
var rsSP=0;
var bsSubs=Clazz.new_($I$(1,1));
for (var i=i1; i < i2; i++) bsSubs.set$I(this.atoms[i].atomIndex);

if (this.nPriorities == 1) i2=2;
var cipAtom=null;
var rs;
for (var i=i1; i < i2; i+=istep) {
if (this.this$0.data.testRule6Full) {
cipAtom=Clazz.new_(C$,[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(this.atom, null, false, false, false);
cipAtom.rule6refIndex=this.atoms[i].atomIndex;
cipAtom.setNode$();
for (var j=0; j < 4; j++) {
cipAtom.atoms[j]=this.atoms[j].clone$();
cipAtom.priorities[j]=this.priorities[j];
}
cipAtom.bsRule6Subs=bsSubs;
rs=this.this$0.getAtomChiralityLimited$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_util_SimpleNode.apply(this.this$0, [this.atom, cipAtom, null]);
this.this$0.currentRule=9;
if (rs == 0) return 0;
} else {
this.this$0.root.bsRule6Subs=Clazz.new_($I$(1,1));
this.this$0.root.rule6refIndex=this.atoms[i].atomIndex;
p$1.saveRestorePriorities$Z.apply(this, [false]);
this.sortSubstituents$I(-2147483648);
if (!this.sortSubstituents$I(0)) return 0;
rs=this.this$0.data.checkHandedness$org_jmol_symmetry_CIPChirality_CIPAtom(this);
p$1.saveRestorePriorities$Z.apply(this, [true]);
}if ((rs & 8) == 0) {
if (rs == 1 || rs == 17 ) {
if (rsRM == 0) {
rsRM=rs;
continue;
}} else if (rsSP == 0) {
rsSP=rs;
continue;
}}return rs;
}
return 0;
});

Clazz.newMeth(C$, 'saveRestorePriorities$Z', function (isRestore) {
if (isRestore) {
this.priorities=this.oldPriorities;
this.nPriorities=this.oldNPriorities;
} else {
this.oldPriorities=$I$(4).copyOf$IA$I(this.priorities, 4);
this.oldNPriorities=this.nPriorities;
}for (var i=0; i < this.nAtoms; i++) p$1.saveRestorePriorities$Z.apply(this.atoms[i], [isRestore]);

}, p$1);

Clazz.newMeth(C$, 'countAuxDuplicates$I', function (index) {
var n=0;
for (var i=0; i < 4; i++) {
if (this.atoms[i] == null ) continue;
if (this.atoms[i].isDuplicate) {
if (this.atoms[i].atomIndex == index) n++;
} else {
n+=p$1.countAuxDuplicates$I.apply(this.atoms[i], [index]);
}}
return n;
}, p$1);

Clazz.newMeth(C$, 'getMass', function () {
if (this.isDuplicate) return 0;
if (this.mass == -1 ) {
if (this.isDuplicate || (this.mass=this.atom.getMass$()) != (this.mass|0)   || p$1.isType$S.apply(this, [";9Be;19F;23Na;27Al;31P;45Sc;55Mn;59Co;75As;89Y;93Nb;98Tc;103Rh;127I;133Cs;141Pr;145Pm;159Tb;165Ho;169Tm;197Au;209Bi;209Po;210At;222Rn;223Fr;226Ra;227Ac;231Pa;232Th;and all > U (atomno > 92)"]) ) return (this.mass == -1  ? this.mass=(function(a,f){return f.apply(null,a)})([(this.elemNo|0)],$I$(5).getAtomicMass$I) : this.mass);
if (p$1.isType$S.apply(this, [";16O;52Cr;96Mo;175Lu;"])) this.mass -= 0.1;
}return this.mass;
}, p$1);

Clazz.newMeth(C$, 'isType$S', function (rule2Type) {
return (function(a,f){return f.apply(null,a)})([(this.mass|0) + (function(a,f){return f.apply(null,a)})([(this.elemNo|0)],$I$(5).elementSymbolFromNumber$I), rule2Type],$I$(6).isOneOf$S$S);
}, p$1);

Clazz.newMeth(C$, 'getKekuleElementNumber', function () {
var edges=this.atom.getEdges$();
var bond;
var ave=0;
var n=0;
for (var i=edges.length; --i >= 0; ) if ((bond=edges[i]).isCovalent$()) {
var other=bond.getOtherNode$org_jmol_util_SimpleNode(this.atom);
if (this.this$0.data.bsKekuleAmbiguous.get$I(other.getIndex$())) {
n++;
ave += other.getElementNumber$();
}}
return ave / n;
}, p$1);

Clazz.newMeth(C$, 'setNode$', function () {
if (this.isSet || (this.isSet=true) && this.isDuplicate  ) return true;
var index=this.atom.getIndex$();
var bonds=this.atom.getEdges$();
var nBonds=bonds.length;
if ($I$(3).debuggingHigh) $I$(3).info$S("set " + this);
var pt=0;
for (var i=0; i < nBonds; i++) {
var bond=bonds[i];
if (!bond.isCovalent$()) continue;
var other=bond.getOtherNode$org_jmol_util_SimpleNode(this.atom);
var isParentBond=(this.parent != null  && this.parent.atom === other  );
var order=this.this$0.data.getBondOrder$org_jmol_util_SimpleEdge(bond);
if (order == 2) {
if (this.elemNo > 10  || !$I$(7).isFirstRow$org_jmol_util_SimpleNode(other) ) order=1;
 else {
this.isAlkene=true;
if (isParentBond) p$1.setEne.apply(this, []);
}}if (nBonds == 1 && order == 1  && isParentBond ) return this.isTerminal=true;
switch (order) {
case 3:
if (p$1.addAtom$I$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [pt++, other, isParentBond, false, isParentBond]) == null ) return !(this.isTerminal=true);
case 2:
if (p$1.addAtom$I$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [pt++, other, order != 2 || isParentBond , order == 2, isParentBond]) == null ) return !(this.isTerminal=true);
case 1:
if (isParentBond || p$1.addAtom$I$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [pt++, other, order != 1 && this.elemNo <= 10  , false, false]) != null  ) break;
default:
return !(this.isTerminal=true);
}
}
this.nAtoms=pt;
switch (pt) {
case 2:
case 3:
if (this.elemNo == 6  && this.this$0.data.bsNegativeAromatic.get$I(index)  || this.this$0.data.bsXAromatic.get$I(index) ) {
this.nAtoms++;
p$1.addAtom$I$org_jmol_util_SimpleNode$Z$Z$Z.apply(this, [pt++, this.atom, true, false, false]);
}break;
}
if (pt < 4) for (; pt < this.atoms.length; pt++) this.atoms[pt]=Clazz.new_(C$,[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(null, this, false, true, false);

try {
$I$(4).sort$OA(this.atoms);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'setEne', function () {
this.parent.alkeneChild=null;
this.alkeneParent=(this.parent.alkeneParent == null  ? this.parent : this.parent.alkeneParent);
this.alkeneParent.alkeneChild=this;
this.nextSP2=this.parent;
if (this.parent.alkeneParent == null ) this.parent.nextSP2=this;
if (this.atom.getCovalentBondCount$() == 2 && this.atom.getValence$() == 4 ) {
this.parent.isAlkeneAtom2=false;
this.alkeneParent.isEvenEne=!this.alkeneParent.isEvenEne;
} else {
this.isAlkeneAtom2=true;
}}, p$1);

Clazz.newMeth(C$, 'addAtom$I$org_jmol_util_SimpleNode$Z$Z$Z', function (i, other, isDuplicate, isAlkene, isParentBond) {
if (i >= this.atoms.length) {
if ($I$(3).debugging) $I$(3).info$S(" too many bonds on " + this.atom);
return null;
}if (other.getElementNumber$() == 1 && other.getIsotopeNumber$() == 0 ) {
if (++this.h1Count > 1) {
if (this.parent == null ) {
if ($I$(3).debuggingHigh) $I$(3).info$S(" second H atom found on " + this.atom);
return null;
}}}return this.atoms[i]=Clazz.new_(C$,[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(other, this, isAlkene, isDuplicate, isParentBond);
}, p$1);

Clazz.newMeth(C$, 'sortSubstituents$I', function (sphere) {
if (this.nPriorities == (sphere < 1 ? 4 : 3)) return true;
var ignoreTies=(sphere == -2147483648);
if (ignoreTies) {
if (this.isTerminal) return false;
switch (this.this$0.currentRule) {
case 5:
case 7:
for (var i=0; i < 4; i++) if (this.atoms[i] != null  && (this.atoms[i].isChiralPath || this.atoms[i].nextChiralBranch != null  ) ) this.atoms[i].sortSubstituents$I(-2147483648);

if (this.isAlkene) return false;
break;
case 9:
for (var i=0; i < 4; i++) if (this.atoms[i] != null  && !this.atoms[i].isDuplicate  && this.atoms[i].atom != null   && this.atoms[i].setNode$() ) this.atoms[i].sortSubstituents$I(-2147483648);

break;
}
}ignoreTies|=(this.this$0.currentRule == 6 || this.this$0.currentRule == 8 );
var indices=Clazz.array(Integer.TYPE, [4]);
var newPriorities=Clazz.array(Integer.TYPE, [4]);
if ($I$(3).debuggingHigh && this.h1Count < 2 ) {
$I$(3).info$S(this.this$0.root + "---sortSubstituents---" + this );
for (var i=0; i < 4; i++) {
(function(a,f){return f.apply(null,a)})([this.this$0.getRuleName$I.apply(this.this$0, [this.this$0.currentRule]) + ": " + this + "[" + i + "]=" + this.atoms[i].myPath + " " + Integer.toHexString$I(this.priorities[i]) ],$I$(3).info$S);
}
$I$(3).info$S("---" + this.nPriorities);
}var loser;
for (var i=0; i < 3; i++) {
var a=this.atoms[i];
var aLoses=a.isDuplicate && this.this$0.currentRule > 2 ;
for (var j=i + 1; j < 4; j++) {
var b=this.atoms[loser=j];
var score=0;
switch (b.atom == null  || this.priorities[i] < this.priorities[j]  ? -1 : aLoses || a.atom == null   || this.priorities[j] < this.priorities[i]  ? 1 : (score=p$1.checkCurrentRule$org_jmol_symmetry_CIPChirality_CIPAtom.apply(a, [b])) != 0 && score != -2147483648  || ignoreTies  ? score : p$1.sign$I.apply(this, [p$1.breakTie$org_jmol_symmetry_CIPChirality_CIPAtom$I.apply(a, [b, sphere + 1])])) {
case 1:
loser=i;
case -1:
newPriorities[loser]++;
if (this.this$0.doTrack && score != 0  && (sphere == 0 || ignoreTies ) ) this.this$0.data.track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z(this.this$0, a, b, 1, score, false);
case -2147483648:
case 0:
indices[loser]++;
continue;
}
}
}
this.bsTemp.clearAll$();
var newAtoms=Clazz.array(C$, [4]);
for (var i=0; i < 4; i++) {
var pt=indices[i];
var a=newAtoms[pt]=this.atoms[i];
var p=newPriorities[i];
if (a.atom != null ) this.bsTemp.set$I(p);
a.priority=this.priorities[pt]=p;
}
this.atoms=newAtoms;
this.nPriorities=this.bsTemp.cardinality$();
if ($I$(3).debuggingHigh && this.atoms[2].atom != null   && this.atoms[2].elemNo != 1  ) {
(function(a,f){return f.apply(null,a)})([p$1.dots.apply(this, []) + this.atom + " nPriorities = " + this.nPriorities ],$I$(3).info$S);
for (var i=0; i < 4; i++) {
(function(a,f){return f.apply(null,a)})([p$1.dots.apply(this, []) + this.myPath + "[" + i + "]=" + this.atoms[i] + " " + this.priorities[i] + " " + Integer.toHexString$I(this.priorities[i]) ],$I$(3).info$S);
}
(function(a,f){return f.apply(null,a)})([p$1.dots.apply(this, []) + "-------" + this.nPriorities ],$I$(3).info$S);
}return (this.nPriorities == this.bondCount);
});

Clazz.newMeth(C$, 'dots', function () {
return ".....................".substring$I$I(0, Math.min(20, this.sphere));
}, p$1);

Clazz.newMeth(C$, 'breakTie$org_jmol_symmetry_CIPChirality_CIPAtom$I', function (b, sphere) {
var finalScore=0;
while (true){
if (this.isDuplicate && (this.this$0.currentRule > 2 || b.isDuplicate && this.atom === b.atom   && this.rootDistance == b.rootDistance  )  || !this.setNode$()  || !b.setNode$()  || this.isTerminal && b.isTerminal   || this.isDuplicate && b.isDuplicate  ) break;
if (this.isTerminal != b.isTerminal ) {
finalScore=(this.isTerminal ? 1 : -1) * (sphere + (b.isDuplicate || this.isDuplicate  ? 0 : 1));
if (this.this$0.doTrack) this.this$0.data.track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z(this.this$0, this, b, sphere, finalScore, true);
break;
}var score=(this.this$0.currentRule > 2 ? 0 : p$1.unlikeDuplicates$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]));
if (score != 0) {
finalScore=score * (sphere + 1);
if (this.this$0.doTrack) this.this$0.data.track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z(this.this$0, this, b, sphere, finalScore, false);
break;
}for (var i=0; i < this.nAtoms; i++) if ((score=p$1.checkCurrentRule$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this.atoms[i], [b.atoms[i]])) != 0) {
finalScore=score * (sphere + 1);
if (this.this$0.doTrack) this.this$0.data.track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z(this.this$0, this.atoms[i], b.atoms[i], sphere, finalScore, false);
break;
}
if (finalScore != 0) {
break;
}this.sortSubstituents$I(sphere);
b.sortSubstituents$I(sphere);
for (var i=0, abs, absScore=2147483647; i < this.nAtoms; i++) {
if ((score=p$1.breakTie$org_jmol_symmetry_CIPChirality_CIPAtom$I.apply(this.atoms[i], [b.atoms[i], sphere + 1])) != 0 && (abs=Math.abs(score)) < absScore ) {
absScore=abs;
finalScore=score;
}}
break;
}
return finalScore;
}, p$1);

Clazz.newMeth(C$, ['compareTo$org_jmol_symmetry_CIPChirality_CIPAtom','compareTo$O'], function (b) {
var score;
return (this.this$0.root.rule4Ref == 0 ? (b == null  ? -1 : (this.atom == null ) != (b.atom == null )  ? (this.atom == null  ? 1 : -1) : (score=p$1.compareRule1a$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b])) != 0 ? score : (score=p$1.unlikeDuplicates$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b])) != 0 ? score : this.isDuplicate ? p$1.compareRule1b$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]) : p$1.compareRule2$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b])) : this.sphere < b.sphere ? -1 : this.sphere > b.sphere ? 1 : this.chiralPath.compareTo$S(b.chiralPath));
});

Clazz.newMeth(C$, 'checkCurrentRule$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
switch (this.this$0.currentRule) {
default:
case 1:
return p$1.compareRule1a$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]);
case 2:
return p$1.compareRule1b$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]);
case 3:
return p$1.compareRule2$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]);
case 4:
return p$1.compareRule3$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]);
case 5:
return p$1.compareRules4ac$org_jmol_symmetry_CIPChirality_CIPAtom$S.apply(this, [b, " sr SR PM"]);
case 6:
case 8:
return (this.isTerminal || b.isTerminal  ? 0 : p$1.compareRule4b5$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]));
case 7:
return p$1.compareRules4ac$org_jmol_symmetry_CIPChirality_CIPAtom$S.apply(this, [b, " s r p m"]);
case 9:
return p$1.compareRule6$org_jmol_symmetry_CIPChirality_CIPAtom.apply(this, [b]);
}
}, p$1);

Clazz.newMeth(C$, 'unlikeDuplicates$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
return b.isDuplicate == this.isDuplicate  ? 0 : this.isDuplicate ? 1 : -1;
}, p$1);

Clazz.newMeth(C$, 'compareRule1a$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
return b.atom == null  ? -1 : this.atom == null  ? 1 : b.elemNo < this.elemNo  ? -1 : b.elemNo > this.elemNo  ? 1 : 0;
}, p$1);

Clazz.newMeth(C$, 'compareRule1b$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
return Integer.compare$I$I(this.rootDistance, b.rootDistance);
}, p$1);

Clazz.newMeth(C$, 'compareRule2$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
return (this.atomIndex == b.atomIndex ? 0 : p$1.getMass.apply(this, []) > p$1.getMass.apply(b, [])  ? -1 : this.mass < b.mass  ? 1 : this.this$0.root.rule6refIndex < 0 ? 0 : !this.this$0.root.bsRule6Subs.get$I(this.atomIndex) || !this.this$0.root.bsRule6Subs.get$I(b.atomIndex)  ? 0 : this.this$0.root.rule6refIndex == this.atomIndex ? -1 : this.this$0.root.rule6refIndex == b.atomIndex ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'compareRule3$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
return this.isDuplicate || b.isDuplicate || !this.parent.isAlkeneAtom2 || !b.parent.isAlkeneAtom2 || !this.parent.alkeneParent.isEvenEne || !b.parent.alkeneParent.isEvenEne || this.parent === b.parent    ? 0 : Integer.compare$I$I(this.parent.auxEZ, b.parent.auxEZ);
}, p$1);

Clazz.newMeth(C$, 'compareRules4ac$org_jmol_symmetry_CIPChirality_CIPAtom$S', function (b, test) {
if (this.isTerminal || this.isDuplicate ) return 0;
var isRa=test.indexOf$I(this.auxChirality);
var isRb=test.indexOf$I(b.auxChirality);
return (isRa > isRb + 1 ? -1 : isRb > isRa + 1 ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'compareRule4b5$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
var bsA=p$1.getBetter4bList.apply(this, []);
var bsB=p$1.getBetter4bList.apply(b, []);
var best=p$1.compareLikeUnlike$javajs_util_BS$javajs_util_BS.apply(this, [bsA, bsB]);
var score=(best == null  ? -2147483648 : best === bsA  ? -1 : 1);
if (best != null ) {
if (this.this$0.currentRule == 8) {
if ((p$1.compareLikeUnlike$javajs_util_BS$javajs_util_BS.apply(this, [this.listRS[2], b.listRS[2]]) === this.listRS[2] ) == (best === bsA ) ) this.parent.isRule5Pseudo=!this.parent.isRule5Pseudo;
}if (this.this$0.doTrack) this.this$0.data.track$org_jmol_symmetry_CIPChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$I$I$Z(this.this$0, this, b, 1, score, false);
}return score;
}, p$1);

Clazz.newMeth(C$, 'compareRule6$org_jmol_symmetry_CIPChirality_CIPAtom', function (b) {
return ((this.atomIndex == this.this$0.root.rule6refIndex) == (b.atomIndex == this.this$0.root.rule6refIndex)  ? 0 : this.atomIndex == this.this$0.root.rule6refIndex ? -1 : 1);
}, p$1);

Clazz.newMeth(C$, 'clearRule4Lists$', function () {
this.listRS=null;
for (var i=0; i < 4 && this.atoms[i] != null  ; i++) this.atoms[i].clearRule4Lists$();

});

Clazz.newMeth(C$, 'getBetter4bList', function () {
if (this.listRS != null ) return this.listRS[this.this$0.currentRule == 8 ? 1 : 0];
var bs;
this.listRS=Clazz.array($I$(1), -1, [null, bs=p$1.rank4bAndRead$javajs_util_BS.apply(this, [null]), p$1.rank4bAndRead$javajs_util_BS.apply(this, [bs])]);
$I$(3).info$S("getBest " + this.this$0.currentRule + " " + this + " " + this.listRS[1] + this.listRS[2] + " " + this.myPath );
bs=p$1.compareLikeUnlike$javajs_util_BS$javajs_util_BS.apply(this, [this.listRS[1], this.listRS[2]]);
return this.listRS[0]=(this.this$0.currentRule == 8 || bs == null   ? this.listRS[1] : bs);
}, p$1);

Clazz.newMeth(C$, 'rank4bAndRead$javajs_util_BS', function (bsR) {
var isS=(bsR != null );
var ref=(isS ? 2 : 1);
var list=Clazz.new_($I$(1,1));
var chiralAtoms=Clazz.new_($I$(8,1));
this.this$0.root.rule4Ref=ref;
p$1.addChiralAtoms$javajs_util_Lst$I.apply(this, [chiralAtoms, ref]);
$I$(9).sort$java_util_List(chiralAtoms);
this.this$0.root.rule4Ref=0;
for (var i=0, n=chiralAtoms.size$(); i < n; i++) {
if ($I$(3).debugging) (function(a,f){return f.apply(null,a)})(["" + ref + " " + this + " " + chiralAtoms.get$I(i).chiralPath ],$I$(3).info$S);
if (chiralAtoms.get$I(i).rule4Type == ref) list.set$I(i);
}
return list;
}, p$1);

Clazz.newMeth(C$, 'addChiralAtoms$javajs_util_Lst$I', function (chiralAtoms, ref) {
if (this.atom == null  || this.isTerminal  || this.isDuplicate ) return;
if (this.rule4Type != 0) {
var s="";
var a=this;
while (a != null ){
s=String.fromCharCode((64 + (a.priority << 2) + (a.rule4Type == 0 ? 0 : a.rule4Type == ref ? 1 : 2) )) + s;
if ((a=a.parent) != null  && a.chiralPath != null  ) {
s=a.chiralPath + s;
break;
}}
this.chiralPath=s;
chiralAtoms.addLast$O(this);
}for (var i=0; i < 4; i++) if (this.atoms[i] != null ) p$1.addChiralAtoms$javajs_util_Lst$I.apply(this.atoms[i], [chiralAtoms, ref]);

}, p$1);

Clazz.newMeth(C$, 'compareLikeUnlike$javajs_util_BS$javajs_util_BS', function (bsA, bsB) {
var bsXOR=bsB.clone$();
bsXOR.xor$javajs_util_BS(bsA);
var l=bsXOR.nextSetBit$I(0);
return (l < 0 ? null : bsA.get$I(l) ? bsA : bsB);
}, p$1);

Clazz.newMeth(C$, 'createAuxiliaryDescriptors$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtomA', function (node1, ret) {
var isChiralPath=false;
var c="~";
if (this.atom == null ) return false;
this.setNode$();
var rs=-1;
var nRS=0;
var ret1=Clazz.array(C$, [1]);
var skipRules4And5=false;
var prevIsChiral=true;
var allowTwoSame=(!this.isAlkene && this.nPriorities <= (node1 == null  ? 2 : 1) );
for (var i=0; i < 4; i++) {
var a=this.atoms[i];
if (a != null  && !a.isDuplicate  && !a.isTerminal ) {
ret1[0]=null;
var aIsChiralPath=a.createAuxiliaryDescriptors$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtomA(node1 == null  ? a : node1, ret1);
if (ret1[0] != null  && ret != null  ) ret[0]=this.nextChiralBranch=a.nextChiralBranch;
if (a.nextChiralBranch != null  || aIsChiralPath ) {
nRS++;
isChiralPath=aIsChiralPath;
prevIsChiral=true;
} else {
if (!allowTwoSame && !prevIsChiral && this.priorities[i] == this.priorities[i - 1]  ) {
return false;
}prevIsChiral=false;
}}}
var isBranch=(nRS >= 2);
switch (nRS) {
case 0:
isChiralPath=false;
case 1:
skipRules4And5=true;
break;
case 2:
case 3:
case 4:
isChiralPath=false;
if (ret != null ) ret[0]=this.nextChiralBranch=this;
break;
}
if (this.isAlkene) {
if (this.alkeneChild != null ) {
if (!this.isEvenEne || (this.auxEZ == 15 || this.auxEZ == -1 ) && !this.isKekuleAmbiguous && this.alkeneChild.bondCount >= 2   ) {
var rule2=(this.isEvenEne ? Clazz.array(Integer.TYPE, [1]) : null);
rs=p$1.getAuxEneWinnerChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$Z$IA.apply(this, [this, this.alkeneChild, !this.isEvenEne, rule2]);
if (rs == 0) {
this.auxEZ=this.alkeneChild.auxEZ=15;
} else {
isChiralPath=true;
if (rule2 != null  && rule2[0] != 8 ) {
this.auxEZ=this.alkeneChild.auxEZ=rs;
if ($I$(3).debuggingHigh) (function(a,f){return f.apply(null,a)})(["alkene type " + this + " " + (this.auxEZ == 14 ? "E" : "Z") ],$I$(3).info$S);
} else if (!isBranch) {
switch (rs) {
case 17:
case 13:
rs=1;
c="R";
isChiralPath=true;
break;
case 18:
case 14:
rs=2;
c="S";
isChiralPath=true;
break;
}
this.auxChirality=c;
this.rule4Type=rs;
}}}}} else if (this.isSP3 && ret != null  ) {
var atom1=this.clone$();
if (atom1.setNode$()) {
p$1.addReturnPath$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom.apply(atom1, [null, this]);
var rule=1;
for (; rule <= 9; rule++) if ((!skipRules4And5 || rule < 5  || rule > 8 ) && p$1.auxSort$I.apply(atom1, [rule]) ) break;

if (rule > 9) {
c="~";
} else {
rs=this.this$0.data.checkHandedness$org_jmol_symmetry_CIPChirality_CIPAtom(atom1);
isChiralPath|=(rs != 0);
c=(rs == 1 ? "R" : rs == 2 ? "S" : "~");
if (rule == 8) {
c=(c == "R" ? "r" : c == "S" ? "s" : "~");
if (rs != 0) this.this$0.havePseudoAuxiliary=true;
} else {
this.rule4Type=rs;
}}}this.auxChirality=c;
}if (node1 == null ) this.this$0.bsNeedRule.setBitTo$I$Z(5, nRS > 0);
if (c != "~") {
(function(a,f){return f.apply(null,a)})(["creating aux " + c + " for " + this + (this.myPath.length$() == 0 ? "" : " = " + this.myPath) ],$I$(3).info$S);
}return (this.isChiralPath=isChiralPath);
});

Clazz.newMeth(C$, 'auxSort$I', function (rule) {
var current=this.this$0.currentRule;
this.this$0.currentRule=rule;
var rule6ref=this.this$0.root.rule6refIndex;
var nDup=this.this$0.root.nRootDuplicates;
var isChiral=(rule == 9 ? this.getRule6Descriptor$Z(true) != 0 : this.sortSubstituents$I(0));
this.this$0.root.nRootDuplicates=nDup;
this.this$0.root.rule6refIndex=rule6ref;
this.this$0.currentRule=current;
return isChiral;
}, p$1);

Clazz.newMeth(C$, 'getAuxEneWinnerChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$Z$IA', function (end1, end2, isAxial, retRule2) {
if (isAxial && end1.nextSP2 === end2  ) return 0;
var winner1=p$1.getAuxEneEndWinner$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$IA.apply(this, [end1, end1.nextSP2, null]);
var winner2=(winner1 == null  || winner1.atom == null   ? null : p$1.getAuxEneEndWinner$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$IA.apply(this, [end2, end2.nextSP2, retRule2]));
if ($I$(3).debuggingHigh) $I$(3).info$S(this + " alkene end winners " + winner1 + winner2 );
return this.this$0.getEneChirality$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z.apply(this.this$0, [winner1, end1, end2, winner2, isAxial, false]);
}, p$1);

Clazz.newMeth(C$, 'getAuxEneEndWinner$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$IA', function (end, prevSP2, retRule) {
var atom1=end.clone$();
if (atom1.parent !== prevSP2 ) p$1.addReturnPath$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom.apply(atom1, [prevSP2, end]);
var a;
for (var rule=1; rule <= 9; rule++) {
if (p$1.auxSort$I.apply(atom1, [rule])) {
for (var i=0; i < 4; i++) {
a=atom1.atoms[i];
if (!a.multipleBondDuplicate) {
if (atom1.priorities[i] != atom1.priorities[i + 1]) {
if (retRule != null ) retRule[0]=rule;
return (a.atom == null  ? null : a);
}}}
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'addReturnPath$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (newParent, fromAtom) {
var path=Clazz.new_($I$(8,1));
var thisAtom=this;
var newSub;
var oldParent=fromAtom;
var oldSub=newParent;
while (oldParent.parent != null  && oldParent.parent.atoms[0] != null  ){
if ($I$(3).debuggingHigh) $I$(3).info$S("path:" + oldParent.parent + "->" + oldParent );
path.addLast$O(oldParent=oldParent.parent);
}
path.addLast$O(null);
for (var i=0, n=path.size$(); i < n; i++) {
oldParent=path.get$I(i);
newSub=(oldParent == null  ? Clazz.new_(C$,[this, null]).create$org_jmol_util_SimpleNode$org_jmol_symmetry_CIPChirality_CIPAtom$Z$Z$Z(null, this, this.isAlkene, true, false) : oldParent.clone$());
newSub.nPriorities=0;
newSub.sphere=thisAtom.sphere + 1;
p$1.replaceParentSubstituent$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom.apply(thisAtom, [oldSub, newParent, newSub]);
if (i > 0 && thisAtom.isAlkene  && !thisAtom.isAlkeneAtom2 ) {
if (newParent.isAlkeneAtom2) {
newParent.isAlkeneAtom2=false;
thisAtom.alkeneParent=newParent;
}p$1.setEne.apply(thisAtom, []);
}newParent=thisAtom;
thisAtom=newSub;
oldSub=fromAtom;
fromAtom=oldParent;
}
}, p$1);

Clazz.newMeth(C$, 'replaceParentSubstituent$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom$org_jmol_symmetry_CIPChirality_CIPAtom', function (oldSub, newParent, newSub) {
for (var i=0; i < 4; i++) if (this.atoms[i] === oldSub  || newParent == null  && this.atoms[i].atom == null   ) {
if ($I$(3).debuggingHigh) $I$(3).info$S("reversed: " + newParent + "->" + this + "->" + newSub );
this.parent=newParent;
this.atoms[i]=newSub;
$I$(4).sort$OA(this.atoms);
break;
}
}, p$1);

Clazz.newMeth(C$, 'sign$I', function (score) {
return (score < 0 ? -1 : score > 0 ? 1 : 0);
}, p$1);

Clazz.newMeth(C$, 'clone$', function () {
var a=null;
try {
a=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
a.id=this.this$0.ptIDLogger++;
a.atoms=Clazz.array(C$, [4]);
for (var i=0; i < 4; i++) a.atoms[i]=this.atoms[i];

a.priorities=Clazz.array(Integer.TYPE, [4]);
a.htPathPoints=this.htPathPoints;
a.alkeneParent=null;
a.auxEZ=-1;
a.rule4Type=0;
a.listRS=null;
if ($I$(3).debuggingHigh) a.myPath=a.toString();
return a;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.atom == null ) return "<null>";
if ($I$(3).debuggingHigh) return ("[" + this.this$0.currentRule + "." + this.sphere + "," + this.id + "." + (this.isDuplicate ? this.parent.atom : this.atom).getAtomName$() + (this.isDuplicate ? "*(" + this.rootDistance + ")"  : "") + (this.auxChirality == "~" ? "" : "" + this.auxChirality) + " " + new Float(this.elemNo).toString() + "]" );
return (this.isDuplicate ? "(" + this.atom.getAtomName$() + "." + this.rootDistance + ")"  : this.atom.getAtomName$());
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
