(function(){var P$=Clazz.newPackage("org.jmol.jsv"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.SB','javajs.util.Lst','org.jmol.util.Logger','java.util.Hashtable','javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JDXMOLParser", null, null, 'org.jmol.api.JmolJDXMOLParser');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.line=null;
this.lastModel=null;
this.thisModelID=null;
this.baseModel=null;
this.vibScale=0;
this.piUnitsX=null;
this.piUnitsY=null;
this.loader=null;
this.modelIdList=null;
this.peakIndex=null;
this.peakFilePath=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lastModel="";
this.modelIdList="";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_api_JmolJDXMOLReader$S$java_util_Map', function (loader, filePath, htParams) {
this.loader=loader;
this.peakFilePath=filePath;
this.peakIndex=Clazz.array(Integer.TYPE, [1]);
if (htParams != null ) {
htParams.remove$O("modelNumber");
if (htParams.containsKey$O("zipSet")) {
this.peakIndex=htParams.get$O("peakIndex");
if (this.peakIndex == null ) {
this.peakIndex=Clazz.array(Integer.TYPE, [1]);
htParams.put$TK$TV("peakIndex", this.peakIndex);
}if (!htParams.containsKey$O("subFileName")) this.peakFilePath=$I$(1).split$S$S(filePath, "|")[0];
}}return this;
});

Clazz.newMeth(C$, 'getAttribute$S$S', function (line, tag) {
var attr=$I$(1).getQuotedAttribute$S$S(line, tag);
return (attr == null  ? "" : attr);
});

Clazz.newMeth(C$, 'getRecord$S', function (key) {
if (this.line == null  || this.line.indexOf$S(key) < 0 ) return null;
var s=this.line;
while (s.indexOf$S(">") < 0)s += " " + p$1.readLine.apply(this, []);

return this.line=s;
});

Clazz.newMeth(C$, 'readModels$', function () {
if (!p$1.findRecord$S.apply(this, ["Models"])) return false;
this.line="";
this.thisModelID="";
var isFirst=true;
while (true){
this.line=this.loader.discardLinesUntilNonBlank$();
if (this.getRecord$S("<ModelData") == null ) break;
p$1.getModelData$Z.apply(this, [isFirst]);
isFirst=false;
}
return true;
});

Clazz.newMeth(C$, 'readACDMolFile$', function () {
var sb=Clazz.new_($I$(2));
sb.append$S(this.line.substring$I(this.line.indexOf$S("=") + 1)).appendC$C("\n");
while (p$1.readLine.apply(this, []) != null  && !this.line.contains$CharSequence("$$$$") )sb.append$S(this.line).appendC$C("\n");

return $I$(1).rep$S$S$S(sb.toString(), "  $$ Empty String", "");
});

Clazz.newMeth(C$, 'readACDAssignments$I$Z', function (nPoints, isPeakAssignment) {
var list=Clazz.new_($I$(3));
try {
p$1.readLine.apply(this, []);
if (nPoints < 0) nPoints=2147483647;
for (var i=0; i < nPoints; i++) {
var s=p$1.readLine.apply(this, []);
if (s == null  || s.indexOf$S("#") == 0 ) break;
if (isPeakAssignment) {
while (s.indexOf$S(">") < 0)s += " " + p$1.readLine.apply(this, []);

s=s.trim$();
}s=$I$(1).replaceAllCharacters$S$S$S(s, "()<>", " ").trim$();
if (s.length$() == 0) break;
var pt=s.indexOf$S("\'");
if (pt >= 0) {
var pt2=s.indexOf$S$I("\'", pt + 1);
s=s.substring$I$I(0, pt) + $I$(1).rep$S$S$S(s.substring$I$I(pt + 1, pt2), ",", ";") + s.substring$I(pt2 + 1) ;
}$I$(4).info$S("Peak Assignment: " + s);
var tokens=$I$(1).split$S$S(s, ",");
list.addLast$TV(tokens);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4).error$S("Error reading peak assignments at " + this.line + ": " + e );
} else {
throw e;
}
}
return list;
});

Clazz.newMeth(C$, 'setACDAssignments$S$S$I$javajs_util_Lst$S', function (model, mytype, peakCount, acdlist, molFile) {
try {
if (peakCount >= 0) this.peakIndex=Clazz.array(Integer.TYPE, -1, [peakCount]);
var isMS=(mytype.indexOf$S("MASS") == 0);
var file=" file=" + $I$(1).esc$S(this.peakFilePath.replace$C$C("\\", "/"));
model=" model=" + $I$(1).esc$S(model + " (assigned)");
this.piUnitsX="";
this.piUnitsY="";
var dx=p$1.getACDPeakWidth$S.apply(this, [mytype]) / 2;
var htSets=Clazz.new_($I$(5));
var list=Clazz.new_($I$(3));
var zzcMap=null;
var ptx;
var pta;
var nAtoms=0;
if (isMS) {
zzcMap=Clazz.new_($I$(5));
var tokens=$I$(1).split$S$S(molFile, "M  ZZC");
for (var i=tokens.length; --i >= 1; ) {
var ab=$I$(1).getTokens$S(tokens[i]);
nAtoms=Math.max(nAtoms, $I$(1).parseInt$S(ab[0]));
zzcMap.put$TK$TV(ab[1], ab[0]);
}
ptx=4;
pta=0;
} else if (mytype.indexOf$S("NMR") >= 0) {
ptx=0;
pta=3;
} else {
ptx=0;
pta=2;
}var nPeaks=acdlist.size$();
for (var i=0; i < nPeaks; i++) {
var data=acdlist.get$I(i);
var x=$I$(1).parseFloat$S(data[ptx]);
var a=data[pta];
if (isMS) a=p$1.fixACDAtomList$S$java_util_Map$I.apply(this, [a, zzcMap, nAtoms]);
 else a=a.replace$C$C(";", ",");
if (a.indexOf$S("select") >= 0) {
var pt=a.indexOf$S("select atomno=");
if (pt < 0) continue;
a=$I$(1).split$S$S(a.substring$I(pt + 14), " ")[0];
}var title=(isMS ? "m/z=" + Math.round(x) + ": " + data[2] + " (" + data[1] + ")"  : pta == 2 ? "" + (new Float(Math.round(x * 10) / 10.0).toString()) : null);
p$1.getStringInfo$S$S$S$S$S$java_util_Map$S$javajs_util_Lst$S.apply(this, [file, title, mytype, model, a, htSets, "" + new Float(x).toString(), list, " atoms=\"%ATOMS%\" xMin=\"" + (new Float(x - dx).toString()) + "\" xMax=\"" + new Float((x + dx)).toString() + "\">" ]);
}
return p$1.setPeakData$javajs_util_Lst$I.apply(this, [list, 0]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'fixACDAtomList$S$java_util_Map$I', function (atoms, zzcMap, nAtoms) {
atoms=atoms.trim$();
var tokens=$I$(1).getTokens$S(atoms.replace$C$C(";", " "));
var bs=Clazz.new_($I$(6));
var isM=false;
for (var i=0; i < tokens.length; i++) {
var a=tokens[i];
isM=(a.indexOf$S("M") >= 0);
if (isM) a="1-" + nAtoms;
var pt=a.indexOf$I("-");
if (pt >= 0) {
var i1=$I$(1).parseInt$S(a.substring$I$I(0, pt));
var i2=$I$(1).parseInt$S(a.substring$I(pt + 1)) + 1;
for (var k=i1; k < i2; k++) bs.set$I(isM ? k : $I$(1).parseInt$S(zzcMap.get$O("" + k)));

} else {
bs.set$I($I$(1).parseInt$S(zzcMap.get$O(a)));
}}
var s=bs.toJSON$();
return s.substring$I$I(1, s.length$() - 1);
}, p$1);

Clazz.newMeth(C$, 'getACDPeakWidth$S', function (type) {
return (type.indexOf$S("HNMR") >= 0 ? 0.05 : type.indexOf$S("CNMR") >= 0 ? 1.0 : type.indexOf$S("MASS") >= 0 ? 1.0 : 10);
}, p$1);

Clazz.newMeth(C$, 'readPeaks$Z$I', function (isSignals, peakCount) {
try {
if (peakCount >= 0) this.peakIndex=Clazz.array(Integer.TYPE, -1, [peakCount]);
var offset=(isSignals ? 1 : 0);
var tag1=(isSignals ? "Signals" : "Peaks");
var tag2=(isSignals ? "<Signal" : "<PeakData");
if (!p$1.findRecord$S.apply(this, [tag1])) return 0;
var file=" file=" + $I$(1).esc$S(this.peakFilePath.replace$C$C("\\", "/"));
var model=$I$(1).getQuotedAttribute$S$S(this.line, "model");
model=" model=" + $I$(1).esc$S(model == null  ? this.thisModelID : model);
var mytype=$I$(1).getQuotedAttribute$S$S(this.line, "type");
this.piUnitsX=$I$(1).getQuotedAttribute$S$S(this.line, "xLabel");
this.piUnitsY=$I$(1).getQuotedAttribute$S$S(this.line, "yLabel");
var htSets=Clazz.new_($I$(5));
var list=Clazz.new_($I$(3));
while (p$1.readLine.apply(this, []) != null  && !(this.line=this.line.trim$()).startsWith$S("</" + tag1) ){
if (this.line.startsWith$S(tag2)) {
this.getRecord$S(tag2);
$I$(4).info$S(this.line);
var title=$I$(1).getQuotedAttribute$S$S(this.line, "title");
if (mytype == null ) mytype=$I$(1).getQuotedAttribute$S$S(this.line, "type");
var atoms=$I$(1).getQuotedAttribute$S$S(this.line, "atoms");
var key=((($I$(1).parseFloat$S($I$(1).getQuotedAttribute$S$S(this.line, "xMin")) * 100)|0)) + "_" + ((($I$(1).parseFloat$S($I$(1).getQuotedAttribute$S$S(this.line, "xMax")) * 100)|0)) ;
p$1.getStringInfo$S$S$S$S$S$java_util_Map$S$javajs_util_Lst$S.apply(this, [file, title, mytype, ($I$(1).getQuotedAttribute$S$S(this.line, "model") == null  ? model : ""), atoms, htSets, key, list, this.line.substring$I(tag2.length$()).trim$()]);
}}
return p$1.setPeakData$javajs_util_Lst$I.apply(this, [list, offset]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setPeakData$javajs_util_Lst$I', function (list, offset) {
var nH=0;
var n=list.size$();
for (var i=0; i < n; i++) {
var o=list.get$I(i);
var info=$I$(1).rep$S$S$S(o[0], "%INDEX%", "" + (++this.peakIndex[0]));
var bs=o[1];
if (bs != null ) {
var s="";
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) s += "," + (j + offset);

var na=bs.cardinality$();
nH+=na;
info=$I$(1).rep$S$S$S(info, "%ATOMS%", s.substring$I(1));
info=$I$(1).rep$S$S$S(info, "%S%", (na == 1 ? "" : "s"));
info=$I$(1).rep$S$S$S(info, "%NATOMS%", "" + na);
}$I$(4).info$S("adding PeakData " + info);
this.loader.addPeakData$S(info);
}
this.loader.setSpectrumPeaks$I$S$S(nH, this.piUnitsX, this.piUnitsY);
return n;
}, p$1);

Clazz.newMeth(C$, 'getStringInfo$S$S$S$S$S$java_util_Map$S$javajs_util_Lst$S', function (file, title, mytype, model, atoms, htSets, key, list, more) {
if ("HNMR".equals$O(mytype)) mytype="1HNMR";
 else if ("CNMR".equals$O(mytype)) mytype="13CNMR";
var type=(mytype == null  ? "" : " type=" + $I$(1).esc$S(mytype));
if (title == null ) title=("1HNMR".equals$O(mytype) ? "atom%S%: %ATOMS%; integration: %NATOMS%" : "");
title=" title=" + $I$(1).esc$S(title);
var stringInfo="<PeakData " + file + " index=\"%INDEX%\"" + title + type + model + " " + more ;
if (atoms != null ) stringInfo=$I$(1).rep$S$S$S(stringInfo, "atoms=\"" + atoms + "\"" , "atoms=\"%ATOMS%\"");
var o=htSets.get$O(key);
if (o == null ) {
o=Clazz.array(java.lang.Object, -1, [stringInfo, (atoms == null  ? null : Clazz.new_($I$(6)))]);
htSets.put$TK$TV(key, o);
list.addLast$TV(o);
}if (atoms != null ) {
var bs=o[1];
atoms=atoms.replace$C$C(",", " ");
if (atoms.equals$O("*")) atoms="0:1000";
bs.or$javajs_util_BS($I$(6).unescape$S("({" + atoms + "})" ));
}}, p$1);

Clazz.newMeth(C$, 'getModelData$Z', function (isFirst) {
this.lastModel=this.thisModelID;
this.thisModelID=this.getAttribute$S$S(this.line, "id");
var key=";" + this.thisModelID + ";" ;
if (this.modelIdList.indexOf$S(key) >= 0) {
this.line=this.loader.discardLinesUntilContains$S("</ModelData>");
return;
}this.modelIdList += key;
this.baseModel=this.getAttribute$S$S(this.line, "baseModel");
while (this.line.indexOf$S(">") < 0 && this.line.indexOf$S("type") < 0 )p$1.readLine.apply(this, []);

var modelType=this.getAttribute$S$S(this.line, "type").toLowerCase$();
this.vibScale=$I$(1).parseFloat$S(this.getAttribute$S$S(this.line, "vibrationScale"));
if (modelType.equals$O("xyzvib")) modelType="xyz";
 else if (modelType.length$() == 0) modelType=null;
var sb=Clazz.new_($I$(2));
while (p$1.readLine.apply(this, []) != null  && !this.line.contains$CharSequence("</ModelData>") )sb.append$S(this.line).appendC$C("\n");

this.loader.processModelData$S$S$S$S$S$F$F$Z(sb.toString(), this.thisModelID, modelType, this.baseModel, this.lastModel, NaN, this.vibScale, isFirst);
}, p$1);

Clazz.newMeth(C$, 'findRecord$S', function (tag) {
if (this.line == null ) p$1.readLine.apply(this, []);
if (this.line.indexOf$S("<" + tag) < 0) this.line=this.loader.discardLinesUntilContains2$S$S("<" + tag, "##");
return (this.line != null  && this.line.indexOf$S("<" + tag) >= 0 );
}, p$1);

Clazz.newMeth(C$, 'readLine', function () {
return this.line=this.loader.rd$();
}, p$1);

Clazz.newMeth(C$, 'setLine$S', function (s) {
this.line=s;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
