(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.more"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','javajs.util.BS','org.jmol.util.Logger','javajs.util.SB','javajs.util.Lst','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AFLOWReader", null, 'org.jmol.adapter.readers.xtal.VaspPoscarReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fracB=NaN;
this.keyMap=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['readPRE','getComposition','havePRE'],'F',['fracB'],'I',['fileModelNumber'],'S',['aabb','listKey','listKeyCase','titleMsg'],'O',['compositions','java.util.Map','+keyMap']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.readPRE=this.checkFilterKey$S("PRE");
var s;
s=this.getFilter$S("CA=");
if (s != null ) this.fracB=(1 - this.parseFloatStr$S(s));
s=this.getFilter$S("CB=");
if (s != null ) this.fracB=this.parseFloatStr$S(s);
s=this.getFilter$S("LIST=");
this.listKey=(s == null  ? "HF" : s);
this.listKeyCase=this.listKey;
this.getComposition=!Float.isNaN$F(this.fracB);
this.discardLinesUntilStartsWith$S("[");
this.aabb=this.line.substring$I$I(1, this.line.indexOf$S("]"));
var pt=((function(a,f){return f.apply(null,a)})([this.aabb.charAt$I(1)],$I$(2).isUpperCase$C) ? 1 : 2);
this.defaultLabels=Clazz.array(String, -1, [this.aabb.substring$I$I(0, pt), this.aabb.substring$I(pt)]);
while (this.rd$().indexOf$S("] REFERENCE:") >= 0)this.appendLoadNote$S(this.line);

this.compositions=Clazz.new_($I$(1,1));
this.quiet=true;
this.asc.bsAtoms=Clazz.new_($I$(3,1));
this.addJmolScript$S("unitcell off;axes off;");
this.havePRE=(this.line.indexOf$S("Structure PRE") >= 0);
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (!this.havePRE) this.discardLinesUntilContains$S("Structure PRE");
this.havePRE=false;
if (this.line == null ) return false;
this.continuing&=p$1.readPrePost.apply(this, []);
return this.continuing;
});

Clazz.newMeth(C$, 'readPrePost', function () {
this.fileModelNumber++;
this.titleMsg="#" + (this.modelNumber + 1) + (this.getComposition ? "," + this.fileModelNumber + ", Cb=" + new Float(this.fracB).toString()  : "") ;
this.elementLabel=null;
var n0=this.asc.bsAtoms.cardinality$();
if (this.readPRE) {
this.readStructure$S(this.titleMsg);
} else {
p$1.readElementLabelsOnly.apply(this, []);
this.discardLinesUntilContains$S("Structure POST");
this.readStructure$S(this.titleMsg);
}if (p$1.getData.apply(this, [])) {
this.applySymmetryAndSetTrajectory$();
} else {
this.asc.bsAtoms.clearBits$I$I(this.asc.getLastAtomSetAtomIndex$(), this.asc.ac);
this.doCheckUnitCell=false;
}p$1.finalizeModel.apply(this, []);
if (n0 != this.asc.bsAtoms.cardinality$()) (function(a,f){return f.apply(null,a)})(["AFLOW: file#, saved#, atoms: " + this.fileModelNumber + " " + this.modelNumber + " " + (this.asc.bsAtoms.cardinality$() - n0) ],$I$(4).info$S);
return !this.haveModel || this.modelNumber != this.desiredModelNumber ;
}, p$1);

Clazz.newMeth(C$, 'finalizeModel', function () {
this.asc.removeLastUnselectedAtoms$();
}, p$1);

Clazz.newMeth(C$, 'readElementLabelsOnly', function () {
this.readLines$I(5);
this.rdline$();
var n=this.getTokens$().length;
this.elementLabel=Clazz.array(String, [n]);
this.rdline$();
this.line="";
var s=null;
var last=null;
for (var i=0; i < n; i++) {
while (s == null  || s.equals$O(last) ){
this.rdline$();
var tokens=this.getTokens$();
if (tokens.length != 4 || (s=this.elementLabel[i]=this.getElement$S(tokens[3])) == null  ) {
i=n + 1;
break;
}}
last=s;
}
if (s == null ) this.elementLabel=this.defaultLabels;
}, p$1);

Clazz.newMeth(C$, 'getData', function () {
this.discardLinesUntilContains$S("- DATA -");
var htAFLOW=Clazz.new_($I$(1,1));
htAFLOW.put$O$O("fileModelNumber", Integer.valueOf$I(this.fileModelNumber));
htAFLOW.put$O$O("modelNumber", Integer.valueOf$I(this.modelNumber + 1));
htAFLOW.put$O$O("AaBb", this.aabb);
var pt=0;
var sb=Clazz.new_($I$(5,1));
var listVal=3.4028235E38;
var strcb="?";
var listValStr=null;
var cb=0;
while (this.rdline$() != null  && (pt=this.line.indexOf$S(" # ")) >= 0 ){
var key=this.line.substring$I(pt + 3).trim$();
var val=this.line.substring$I$I(0, pt).trim$();
sb.append$S(key).append$S("=").append$S(val).append$S(" | ");
if (key.toUpperCase$().startsWith$S(this.listKey)) {
this.listKey=key.toUpperCase$();
this.listKeyCase=key;
listValStr=val;
listVal=this.parseFloatStr$S(val);
}if (key.equals$O("Ca")) {
var ca=this.parseFloatStr$S(val);
if (this.getComposition && Math.abs((1 - ca) - this.fracB) > 0.01  ) return false;
} else if (key.equals$O("Cb")) {
cb=this.parseFloatStr$S(strcb=val);
if (this.getComposition && Math.abs(cb - this.fracB) > 0.01  ) return false;
} else if (key.equals$O("Hf_atom [eV] (VASP)")) {
var e=this.parseFloatStr$S(val);
this.asc.setAtomSetEnergy$S$F(val, e);
}}
this.asc.setAtomSetName$S(this.titleMsg + (this.getComposition ? "" : " Cb=" + new Float(cb).toString()) + " " + this.listKey + "=" + listValStr );
var count_min=this.compositions.get$O(strcb);
if (!this.doGetModel$I$S(++this.modelNumber, null)) return false;
if (count_min == null ) this.compositions.put$O$O(strcb, count_min=Clazz.array(Float.TYPE, -1, [0, 3.4028235E38, 0]));
count_min[0]++;
if (listVal < count_min[1] ) {
count_min[1]=listVal;
count_min[2]=this.fileModelNumber;
}while (this.line.indexOf$S("- URL -") < 0)this.rdline$();

sb.append$S("URL=" + this.rdline$() + "|" );
while (this.line.indexOf$S("aurl=") < 0)this.rdline$();

sb.append$S(this.line);
var pairs=(function(a,f){return f.apply(null,a)})([sb.toString(), " | "],$I$(2).split$S$S);
for (var i=pairs.length; --i >= 0; ) {
var kv=pairs[i].split$S("=");
if (kv.length < 2) continue;
var f=this.parseFloatStr$S(kv[1]);
var o=Float.isNaN$F(f) ? kv[1] : Float.valueOf$F(f);
htAFLOW.put$O$O(kv[0], o);
var kvclean=p$1.cleanKey$S.apply(this, [kv[0]]);
if (kvclean != kv[0]) htAFLOW.put$O$O(kvclean, o);
}
this.asc.setCurrentModelInfo$S$O("aflowInfo", htAFLOW);
return true;
}, p$1);

Clazz.newMeth(C$, 'cleanKey$S', function (key) {
var kclean=this.keyMap.get$O(key);
if (kclean != null ) return kclean;
var chars=key.toCharArray$();
for (var i=chars.length; --i >= 0; ) if (!$I$(2).isLetterOrDigit$C(chars[i])) chars[i]="_";

this.keyMap.put$O$O(key, kclean=(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([ String.instantialize(chars), "__", "_"],$I$(2).rep$S$S$S), "_"],$I$(2).trim$S$S));
return kclean;
}, p$1);

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
p$1.alignUnitCells.apply(this, []);
p$1.listCompositions.apply(this, []);
this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'listCompositions', function () {
var list=Clazz.new_($I$(6,1));
for (var e, $e = this.compositions.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var count_min=e.getValue$();
list.addLast$O(e.getKey$() + "\t" + ((count_min[0]|0)) + "\t" + (count_min[2]|0) + "\t" + this.listKeyCase + "\t" + new Float(count_min[1]).toString() );
}
var a=Clazz.array(String, [list.size$()]);
list.toArray$OA(a);
$I$(7).sort$OA(a);
for (var i=0, n=a.length; i < n; i++) this.appendLoadNote$S(this.aabb + "\t" + a[i] );

}, p$1);

Clazz.newMeth(C$, 'alignUnitCells', function () {
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
