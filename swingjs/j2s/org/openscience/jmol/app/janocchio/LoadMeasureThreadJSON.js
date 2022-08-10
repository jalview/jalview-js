(function(){var P$=Clazz.newPackage("org.openscience.jmol.app.janocchio"),p$1={},I$=[[0,'java.io.File','javajs.util.Lst','java.util.Hashtable','java.io.PrintWriter','java.io.FileWriter','java.text.DecimalFormat','java.util.Vector','java.util.zip.ZipOutputStream','java.io.FileOutputStream','java.io.FileInputStream','java.util.zip.ZipEntry','org.jmol.util.JSONWriter','org.openscience.jmol.app.janocchio.MeasureDist','org.openscience.jmol.app.janocchio.MeasureNoe','org.openscience.jmol.app.janocchio.MeasureCouple']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LoadMeasureThreadJSON", null, 'org.openscience.jmol.app.janocchio.LoadMeasureThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$java_util_Map', function (nmrPanel, jsonData) {
Clazz.super_(C$, this);
this.nmrPanel=nmrPanel;
this.data=jsonData;
}, 1);

Clazz.newMeth(C$, 'setMore$', function () {
if (!this.data.containsKey$O("NamfisPopulation")) return;
var populations=this.data.get$O("NamfisPopulation");
if (populations.size$() > 0) {
var nmodel=(this.nmrPanel.vwr).getModelCount$();
var population=Clazz.array(Double.TYPE, [nmodel + 1]);
for (var i=0; i <= nmodel; i++) {
population[i]=0.0;
}
for (var i=0; i < populations.size$(); i++) {
var p=populations.get$I(i);
var index=C$.getInt$java_util_Map$S(p, "index");
var pop=p$1.getDouble$java_util_Map$S.apply(this, [p, "p"]);
population[index]=pop;
}
this.nmrPanel.populationDisplay.addPopulation$DA(population);
var mi=this.nmrPanel.getMenuItem$S("NMR.populationDisplayCheck");
mi.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'setNOEs$', function () {
if (!this.data.containsKey$O("NOEs")) {
return;
}var noes=this.data.get$O("NOEs");
for (var i=0; i < noes.size$(); i++) {
var noe=noes.get$I(i);
var ia=C$.getInt$java_util_Map$S(noe, "a");
var ib=C$.getInt$java_util_Map$S(noe, "b");
var exp=noe.get$O("exp");
var expd=noe.get$O("expd");
this.addNOE$I$I$S$S(ia, ib, exp, expd);
}
if (this.data.containsKey$O("RefNOE")) {
var noeNPrefIndices=Clazz.array(Integer.TYPE, [2]);
var refNOE=this.data.get$O("RefNOE");
noeNPrefIndices[0]=C$.getInt$java_util_Map$S(refNOE, "a");
noeNPrefIndices[1]=C$.getInt$java_util_Map$S(refNOE, "b");
this.nmrPanel.noeTable.setNoeNPrefIndices$IA(noeNPrefIndices);
}if (this.data.containsKey$O("ExpRefNOEValue")) {
var expRefValue=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "ExpRefNOEValue"]);
this.nmrPanel.noeTable.setNoeExprefValue$D(expRefValue);
}if (this.data.containsKey$O("CorrelationTime")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "CorrelationTime"]);
this.nmrPanel.noeTable.setCorrelationTime$D(dval);
this.nmrPanel.noeTable.noeParameterSelectionPanel.getTauField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("MixingTime")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "MixingTime"]);
this.nmrPanel.noeTable.setMixingTime$D(dval);
this.nmrPanel.noeTable.noeParameterSelectionPanel.gettMixField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("NMRfreq")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "NMRfreq"]);
this.nmrPanel.noeTable.setNMRfreq$D(dval);
this.nmrPanel.noeTable.noeParameterSelectionPanel.getFreqField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("RhoStar")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "RhoStar"]);
this.nmrPanel.noeTable.setRhoStar$D(dval);
this.nmrPanel.noeTable.noeParameterSelectionPanel.getRhoStarField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("NoeYellowValue")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "NoeYellowValue"]);
this.nmrPanel.noeTable.setYellowValue$D(dval);
this.nmrPanel.noeTable.noeColourSelectionPanel.getYellowField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("NoeRedValue")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "NoeRedValue"]);
this.nmrPanel.noeTable.setRedValue$D(dval);
this.nmrPanel.noeTable.noeColourSelectionPanel.getRedField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("CoupleYellowValue")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "CoupleYellowValue"]);
this.nmrPanel.coupleTable.setYellowValue$D(dval);
this.nmrPanel.coupleTable.coupleColourSelectionPanel.getYellowField$().setText$S(String.valueOf$D(dval));
}if (this.data.containsKey$O("CoupleRedValue")) {
var dval=p$1.getDouble$java_util_Map$S.apply(this, [this.data, "CoupleRedValue"]);
this.nmrPanel.coupleTable.setRedValue$D(dval);
this.nmrPanel.coupleTable.coupleColourSelectionPanel.getRedField$().setText$S(String.valueOf$D(dval));
}});

Clazz.newMeth(C$, 'setCouples$', function () {
if (!this.data.containsKey$O("Couples")) return;
var couples=this.data.get$O("Couples");
for (var i=0; i < couples.size$(); i++) {
var couple=couples.get$I(i);
var ia=C$.getInt$java_util_Map$S(couple, "a");
var ib=C$.getInt$java_util_Map$S(couple, "b");
var ic=C$.getInt$java_util_Map$S(couple, "c");
var id=C$.getInt$java_util_Map$S(couple, "d");
var exp=couple.get$O("exp");
this.addCouple$I$I$I$I$S(ia, ib, ic, id, exp);
}
});

Clazz.newMeth(C$, 'setLabels$', function () {
if (!this.data.containsKey$O("Labels")) return false;
var labels=this.data.get$O("Labels");
for (var i=0; i < labels.size$(); i++) {
var label=labels.get$I(i);
var j=C$.getInt$java_util_Map$S(label, "index");
var l=label.get$O("label");
this.addCommand$I$S(j - 1, l);
}
return true;
});

Clazz.newMeth(C$, 'getDouble$java_util_Map$S', function (p, key) {
return (p.get$O(key)).doubleValue$();
}, p$1);

Clazz.newMeth(C$, 'getInt$java_util_Map$S', function (noe, key) {
return (noe.get$O(key)).intValue$();
}, 1);

Clazz.newMeth(C$, 'writeNamfisFiles$S', function (name) {
var namfis1=Clazz.new_($I$(1,1).c$$S,[name + ".in1"]);
var namfis2=Clazz.new_($I$(1,1).c$$S,[name + ".in2"]);
var namfis3=Clazz.new_($I$(1,1).c$$S,[name + ".in3"]);
var namfisout=Clazz.new_($I$(1,1).c$$S,[name + ".out"]);
var parent=namfis1.getParent$();
var filename=Clazz.new_($I$(1,1).c$$S,[parent + "/filename.dat"]);
var optionfile=Clazz.new_($I$(1,1).c$$S,[parent + "/optionfile"]);
var zipFileName=name + ".zip";
var nmrdata;
var noes=Clazz.new_($I$(2,1));
var couples=Clazz.new_($I$(2,1));
try {
nmrdata=this.getNmrDataJSON$();
noes=nmrdata.get$O("NOEs");
couples=nmrdata.get$O("Couples");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
nmrdata=Clazz.new_($I$(3,1));
} else {
throw e;
}
}
try {
var mols=this.nmrPanel.getAllMolecules$();
var out1=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[namfis1])],$I$(4,1).c$$java_io_Writer);
var labelArray=this.nmrPanel.labelSetter.getLabelArray$();
for (var base=0, i=0; i < mols.length; base+=mols[i].cardinality$(), i++) {
var props=this.nmrPanel.getDistanceJMolecule$javajs_util_BS$SA$Z(mols[i], labelArray, true);
props.calcNOEs$();
for (var n=0; n < noes.size$(); n++) {
var noe=noes.get$I(n);
var a=noe.get$O("a");
var b=noe.get$O("b");
if (noe.containsKey$O("expd")) {
var exp=noe.get$O("expd");
if (exp != null ) {
var j=( new Integer(a)).intValue$() - 1;
var k=( new Integer(b)).intValue$() - 1;
props.addJmolDistance$I$I(j + base, k + base);
}}}
for (var n=0; n < couples.size$(); n++) {
var couple=couples.get$I(n);
var a=couple.get$O("a");
var b=couple.get$O("b");
var c=couple.get$O("c");
var d=couple.get$O("d");
if (couple.containsKey$O("exp")) {
var exp=couple.get$O("exp");
if (exp != null ) {
var j=( new Integer(a)).intValue$() - 1;
var k=( new Integer(b)).intValue$() - 1;
var l=( new Integer(c)).intValue$() - 1;
var m=( new Integer(d)).intValue$() - 1;
props.addJmolCouple$I$I$I$I(j + base, k + base, l + base, m + base);
}}}
var vec=props.getDistances$();
vec.add$O( new Double(1.0));
p$1.writeVector$java_util_Vector$java_io_PrintWriter.apply(this, [vec, out1]);
vec=props.getCouples$();
vec.add$O( new Double(1.0));
p$1.writeVector$java_util_Vector$java_io_PrintWriter.apply(this, [vec, out1]);
}
out1.flush$();
out1.close$();
var out2=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[namfis2])],$I$(4,1).c$$java_io_Writer);
var df=Clazz.new_($I$(6,1).c$$S,["#0.00  "]);
out2.print$S("-1\n");
var nnoe=0;
for (var i=0; i < noes.size$(); i++) {
var noe=noes.get$I(i);
if (noe.containsKey$O("expd")) {
nnoe++;
}}
var ncouple=0;
for (var i=0; i < couples.size$(); i++) {
var couple=couples.get$I(i);
if (couple.containsKey$O("exp")) {
ncouple++;
}}
nnoe++;
ncouple++;
out2.print$S(ncouple + " " + nnoe + " 0\n" );
for (var i=0; i < noes.size$(); i++) {
var noe=noes.get$I(i);
if (noe.containsKey$O("expd")) {
var exp=noe.get$O("expd");
if (exp != null ) {
out2.print$S(df.format$O(Double.valueOf$S(exp)) + " " + new Double(0.4).toString() + "\n" );
}}}
out2.print$S("1.0 0.4\n");
out2.print$S("\n");
for (var i=0; i < couples.size$(); i++) {
var couple=couples.get$I(i);
if (couple.containsKey$O("exp")) {
var exp=couple.get$O("exp");
out2.print$S(exp + " ");
}}
out2.print$D(1.0);
out2.print$S("\n");
for (var i=0; i < couples.size$(); i++) {
var couple=couples.get$I(i);
if (couple.containsKey$O("exp")) {
out2.print$S("2.0 ");
}}
out2.print$D(0.5);
out2.print$S("\n");
out2.print$S("\n");
out2.print$S("1.0 1.0\n");
out2.print$S("5.0\n");
out2.print$S("0\n");
out2.flush$();
out2.close$();
var out3=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[namfis3])],$I$(4,1).c$$java_io_Writer);
out3.flush$();
out3.close$();
var out4=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[filename])],$I$(4,1).c$$java_io_Writer);
out4.print$S(namfis1.getName$() + "\n");
out4.print$S(namfis2.getName$() + "\n");
out4.print$S(namfisout.getName$() + "\n");
out4.print$S(namfis3.getName$() + "\n");
out4.flush$();
out4.close$();
var out5=Clazz.new_([Clazz.new_($I$(5,1).c$$java_io_File,[optionfile])],$I$(4,1).c$$java_io_Writer);
out5.print$S("  Begin\n");
out5.print$S("    NoList\n");
out5.print$S("    Derivative level          3\n");
out5.print$S("    Verify                   No\n");
out5.print$S("    Infinite step size      1.0d+20\n");
out5.print$S("    step limit              1.0d-02\n");
out5.print$S("    Major iterations limit    200\n");
out5.print$S("    Minor iterations limit   2000\n");
out5.print$S("    Major print level         10\n");
out5.print$S("    Function precision        1.0d-20\n");
out5.print$S("    Optimality Tolerance      1.0d-20\n");
out5.print$S("    Linear Feasibility Tolerance 1.0d-2\n");
out5.print$S("  end\n");
out5.flush$();
out5.close$();
var inputFileNames=Clazz.new_($I$(7,1));
inputFileNames.add$O(namfis1.getAbsolutePath$());
inputFileNames.add$O(namfis2.getAbsolutePath$());
inputFileNames.add$O(namfis3.getAbsolutePath$());
inputFileNames.add$O(filename.getAbsolutePath$());
inputFileNames.add$O(optionfile.getAbsolutePath$());
p$1.writeZip$java_util_Vector$S.apply(this, [inputFileNames, zipFileName]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeVector$java_util_Vector$java_io_PrintWriter', function (vector, out) {
var df=Clazz.new_($I$(6,1).c$$S,["0.000  "]);
var count=0;
for (var j=0; j < vector.size$(); j++) {
out.print$S(df.format$O(vector.get$I(j)));
if (count++ == 10) {
out.print$S("\n");
count=0;
}}
if (count != 0) {
out.print$S("\n");
}}, p$1);

Clazz.newMeth(C$, 'writeZip$java_util_Vector$S', function (v, outFilename) {
var buf=Clazz.array(Byte.TYPE, [2048]);
try {
var out=Clazz.new_([Clazz.new_($I$(9,1).c$$S,[outFilename])],$I$(8,1).c$$java_io_OutputStream);
for (var i=0; i < v.size$(); i++) {
var $in=Clazz.new_([v.get$I(i)],$I$(10,1).c$$S);
out.putNextEntry$java_util_zip_ZipEntry(Clazz.new_([v.get$I(i)],$I$(11,1).c$$S));
var len;
while ((len=$in.read$BA(buf)) > 0){
out.write$BA$I$I(buf, 0, len);
}
out.closeEntry$();
$in.close$();
}
out.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Error Writing zip....");
e.printStackTrace$();
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'writeNmrDataJSON$java_io_File', function (file) {
var writer=Clazz.new_($I$(12,1));
writer.setStream$java_io_OutputStream(Clazz.new_($I$(9,1).c$$java_io_File,[file]));
writer.writeMap$java_util_Map(this.getNmrDataJSON$());
writer.closeStream$();
});

Clazz.newMeth(C$, 'getNmrDataJSON$', function () {
var data=Clazz.new_($I$(3,1));
data.put$O$O("StructureFile", this.nmrPanel.vwr.getModelSetPathName$());
var labels=Clazz.new_($I$(2,1));
var labelArray=this.nmrPanel.labelSetter.getLabelArray$();
for (var i=0; i < labelArray.length; i++) {
if (labelArray[i] != null ) {
var l=Clazz.new_($I$(3,1));
l.put$O$O("index", String.valueOf$I(i + 1));
l.put$O$O("label", labelArray[i]);
labels.addLast$O(l);
}}
data.put$O$O("Labels", labels);
var noeTable=this.nmrPanel.noeTable;
var noes=Clazz.new_($I$(2,1));
var noeCount=noeTable.getRowCount$();
for (var i=0; i < noeCount; i++) {
var atomIndices=noeTable.getMeasurementCountPlusIndices$I(i);
var n=Clazz.new_($I$(3,1));
n.put$O$O("a", String.valueOf$I(atomIndices[1] + 1));
n.put$O$O("b", String.valueOf$I(atomIndices[2] + 1));
n.put$O$O("exp", noeTable.getExpNoe$I$I(atomIndices[1], atomIndices[2]));
n.put$O$O("expd", noeTable.getExpDist$I$I(atomIndices[1], atomIndices[2]));
noes.addLast$O(n);
}
data.put$O$O("NOEs", noes);
var coupleTable=this.nmrPanel.coupleTable;
var coupleCount=coupleTable.getRowCount$();
var couples=Clazz.new_($I$(2,1));
for (var i=0; i < coupleCount; i++) {
var atomIndices=coupleTable.getMeasurementCountPlusIndices$I(i);
var c=Clazz.new_($I$(3,1));
c.put$O$O("a", String.valueOf$I(atomIndices[1] + 1));
c.put$O$O("b", String.valueOf$I(atomIndices[2] + 1));
c.put$O$O("c", String.valueOf$I(atomIndices[3] + 1));
c.put$O$O("d", String.valueOf$I(atomIndices[4] + 1));
c.put$O$O("exp", coupleTable.getExpCouple$I$I(atomIndices[1], atomIndices[4]));
couples.addLast$O(c);
}
data.put$O$O("Couples", couples);
var noeNPrefIndices=noeTable.getnoeNPrefIndices$();
var refNOE=Clazz.new_($I$(3,1));
refNOE.put$O$O("a",  new Integer(noeNPrefIndices[0]));
refNOE.put$O$O("b",  new Integer(noeNPrefIndices[1]));
data.put$O$O("RefNOE", refNOE);
var noeExprefValue=noeTable.getNoeExprefValue$();
data.put$O$O("ExpRefNOEValue", Double.toString$D(noeExprefValue));
data.put$O$O("CorrelationTime", Double.toString$D(noeTable.getCorrelationTime$()));
data.put$O$O("MixingTime", Double.toString$D(noeTable.getMixingTime$()));
data.put$O$O("NMRfreq", Double.toString$D(noeTable.getNMRfreq$()));
data.put$O$O("Cutoff", Double.toString$D(noeTable.getCutoff$()));
data.put$O$O("RhoStar", Double.toString$D(noeTable.getRhoStar$()));
data.put$O$O("NoeRedValue", Double.toString$D(noeTable.getRedValue$()));
data.put$O$O("NoeYellowValue", Double.toString$D(noeTable.getYellowValue$()));
data.put$O$O("CoupleRedValue", Double.toString$D(coupleTable.getRedValue$()));
data.put$O$O("CoupleYellowValue", Double.toString$D(coupleTable.getYellowValue$()));
var population=this.nmrPanel.populationDisplay.getPopulation$();
var populationLength=0;
if (population != null ) {
populationLength=population.length;
}var populations=Clazz.new_($I$(2,1));
for (var i=0; i < populationLength; i++) {
if (population[i] > 0.0 ) {
var p=Clazz.new_($I$(3,1));
p.put$O$O("index", new Integer(i));
p.put$O$O("p", String.valueOf$D(population[i]));
populations.addLast$O(p);
}}
data.put$O$O("NamfisPopulation", populations);
return data;
});

Clazz.newMeth(C$, 'jumpBestFrame$', function () {
var nmrdata=Clazz.new_(C$.c$$org_openscience_jmol_app_janocchio_NMR_JmolPanel$java_util_Map,[this.nmrPanel, null]).getNmrDataJSON$();
var noes=nmrdata.get$O("NOEs");
var couples=nmrdata.get$O("Couples");
try {
var mols=this.nmrPanel.getAllMolecules$();
var labelArray=this.nmrPanel.labelSetter.getLabelArray$();
var noeWeight=this.nmrPanel.frameDeltaDisplay.getNoeWeight$();
var coupleWeight=this.nmrPanel.frameDeltaDisplay.getCoupleWeight$();
var lexpNoes=this.nmrPanel.noeTable.getlexpNoes$();
var minDiff=1.7976931348623157E308;
var minFrame=-1;
for (var base=0, i=0; i < mols.length; base+=mols[i].cardinality$(), i++) {
var props=this.nmrPanel.getDistanceJMolecule$javajs_util_BS$SA$Z(mols[i], labelArray, true);
props.calcNOEs$();
var diffDist=0.0;
var diffNoe=0.0;
var diffCouple=0.0;
for (var n=0; n < noes.size$(); n++) {
var noe=noes.get$I(n);
var a=noe.get$O("a");
var b=noe.get$O("b");
if (noe.containsKey$O("expd")) {
var exp=noe.get$O("expd");
if (exp != null ) {
var j=( new Integer(a)).intValue$() - 1;
var k=( new Integer(b)).intValue$() - 1;
var cDist=props.getJmolDistance$I$I(j + base, k + base);
var measure=Clazz.new_($I$(13,1).c$$S$D,[exp, cDist]);
diffDist += measure.getDiff$();
}}if (noe.containsKey$O("exp")) {
var exp=noe.get$O("exp");
if (exp != null ) {
var j=( new Integer(a)).intValue$() - 1;
var k=( new Integer(b)).intValue$() - 1;
var cNoe=props.getJmolNoe$I$I(j + base, k + base);
var measure=Clazz.new_($I$(14,1).c$$S$D,[exp, cNoe]);
diffNoe += measure.getDiff$();
}}}
for (var n=0; n < couples.size$(); n++) {
var couple=couples.get$I(n);
var a=couple.get$O("a");
var b=couple.get$O("b");
var c=couple.get$O("c");
var d=couple.get$O("d");
if (couple.containsKey$O("exp")) {
var exp=couple.get$O("exp");
if (exp != null ) {
var j=( new Integer(a)).intValue$() - 1;
var k=( new Integer(b)).intValue$() - 1;
var l=( new Integer(c)).intValue$() - 1;
var m=( new Integer(d)).intValue$() - 1;
var cCouple=props.calcJmolCouple$I$I$I$I(j + base, k + base, l + base, m + base);
var measure=Clazz.new_($I$(15,1).c$$S$D,[exp, cCouple[1]]);
diffCouple += measure.getDiff$();
}}}
var diff=diffCouple * coupleWeight;
if (lexpNoes) {
diff += diffNoe * noeWeight;
} else {
diff += diffDist * noeWeight;
}if (diff < minDiff ) {
minDiff=diff;
minFrame=i;
}}
return minFrame + 1;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return -1;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
