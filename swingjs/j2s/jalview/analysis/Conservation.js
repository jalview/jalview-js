(function(){var P$=Clazz.newPackage("jalview.analysis"),p$1={},I$=[[0,'jalview.util.Format','jalview.datamodel.SequenceI','jalview.util.Comparison','java.util.Map','java.util.TreeMap','jalview.schemes.ResidueProperties','jalview.datamodel.ResidueCount','StringBuilder','jalview.datamodel.Sequence','jalview.analysis.scoremodels.ScoreModels','java.util.Vector','jalview.datamodel.Annotation','java.awt.Color']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Conservation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxLength=0;
this.seqNumsChanged=false;
this.canonicaliseAa=true;
this.name="";
},1);

C$.$fields$=[['Z',['seqNumsChanged','canonicaliseAa'],'D',['qualityMinimum','qualityMaximum'],'I',['start','end','maxLength','threshold'],'S',['name'],'O',['sequences','jalview.datamodel.SequenceI[]','seqNums','java.util.Vector','total','java.util.Map[]','quality','java.util.Vector','consSequence','jalview.datamodel.Sequence','cons2','int[][]','cons2GapCounts','int[]','consSymbs','String[]']]
,['O',['FORMAT_3DP','jalview.util.Format']]]

Clazz.newMeth(C$, 'c$$S$java_util_List$I$I', function (name, sequences, start, end) {
C$.c$$S$I$java_util_List$I$I.apply(this, [name, 3, sequences, start, end]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$java_util_List$I$I', function (name, threshold, sequences, start, end) {
;C$.$init$.apply(this);
this.name=name;
this.threshold=threshold;
this.start=start;
this.end=end;
this.maxLength=end - start + 1;
var s;
var sSize=sequences.size$();
var sarray=Clazz.array($I$(2), [sSize]);
this.sequences=sarray;
try {
for (s=0; s < sSize; s++) {
sarray[s]=sequences.get$I(s);
if (sarray[s].getLength$() > this.maxLength) {
this.maxLength=sarray[s].getLength$();
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
this.sequences=Clazz.array($I$(2), [0]);
this.maxLength=0;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'calcSeqNum$I$jalview_analysis_scoremodels_ScoreMatrix', function (i, sm) {
var sSize=this.sequences.length;
if ((i > -1) && (i < sSize) ) {
var sq=this.sequences[i].getSequenceAsString$();
if (this.seqNums.size$() <= i) {
this.seqNums.addElement$O(Clazz.array(Integer.TYPE, [sq.length$() + 1]));
}if (sq.hashCode$() != this.seqNums.elementAt$I(i)[0]) {
var j;
var len;
this.seqNumsChanged=true;
len=sq.length$();
if (this.maxLength < len) {
this.maxLength=len;
}var sqnum=Clazz.array(Integer.TYPE, [len + 1]);
sqnum[0]=sq.hashCode$();
for (j=1; j <= len; j++) {
var residue=sq.charAt$I(j - 1);
if ($I$(3).isGap$C(residue)) {
sqnum[j]=-1;
} else {
sqnum[j]=sm.getMatrixIndex$C(residue);
if (sqnum[j] == -1) {
sqnum[j]=-1;
}}}
this.seqNums.setElementAt$O$I(sqnum, i);
} else {
System.out.println$S("SEQUENCE HAS BEEN DELETED!!!");
}} else {
System.err.println$S("ERROR: calcSeqNum called with out of range sequence index for Alignment\n");
}}, p$1);

Clazz.newMeth(C$, 'calculate$', function () {
var height=this.sequences.length;
this.total=Clazz.array($I$(4), [this.maxLength]);
for (var column=this.start; column <= this.end; column++) {
var values=this.countResidues$I(column);
var thresh=((this.threshold * height)/100|0);
var resultHash=Clazz.new_($I$(5,1));
var symbolCounts=values.getSymbolCounts$();
var symbols=symbolCounts.symbols;
var counts=symbolCounts.values;
for (var j=0; j < symbols.length; j++) {
var c=symbols[j];
if (counts[j] > thresh) {
C$.recordConservation$java_util_Map$S(resultHash, String.valueOf$C(c));
}}
if (values.getGapCount$() > thresh) {
C$.recordConservation$java_util_Map$S(resultHash, "-");
}if (this.total.length > 0) {
this.total[column - this.start]=resultHash;
}}
});

Clazz.newMeth(C$, 'recordConservation$java_util_Map$S', function (resultMap, res) {
res=res.toUpperCase$();
for (var property, $property = $I$(6).propHash.entrySet$().iterator$(); $property.hasNext$()&&((property=($property.next$())),1);) {
var propertyName=property.getKey$();
var residuePropertyValue=property.getValue$().get$O(res);
if (!resultMap.containsKey$O(propertyName)) {
if (residuePropertyValue != null ) {
resultMap.put$O$O(propertyName, residuePropertyValue);
} else {
resultMap.put$O$O(propertyName, property.getValue$().get$O("-"));
}} else {
var currentResult=resultMap.get$O(propertyName);
if (currentResult.intValue$() != -1 && !currentResult.equals$O(residuePropertyValue) ) {
resultMap.put$O$O(propertyName, Integer.valueOf$I(-1));
}}}
}, 1);

Clazz.newMeth(C$, 'countResidues$I', function (column) {
var values=Clazz.new_($I$(7,1).c$$Z,[false]);
for (var row=0; row < this.sequences.length; row++) {
if (this.sequences[row].getLength$() > column) {
var c=this.sequences[row].getCharAt$I(column);
if (this.canonicaliseAa) {
var index=$I$(6).aaIndex[c.$c()];
c=index > 20 ? "-" : $I$(6).aa[index].charAt$I(0);
} else {
c=this.toUpperCase$C(c);
}if ($I$(3).isGap$C(c)) {
values.addGap$();
} else {
values.add$C(c);
}} else {
values.addGap$();
}}
return values;
});

Clazz.newMeth(C$, 'countConservationAndGaps$I', function (column) {
var gapCount=0;
var fullyConserved=true;
var iSize=this.sequences.length;
if (iSize == 0) {
return Clazz.array(Integer.TYPE, -1, [0, 0]);
}var lastRes="0";
for (var i=0; i < iSize; i++) {
if (column >= this.sequences[i].getLength$()) {
gapCount++;
continue;
}var c=this.sequences[i].getCharAt$I(column);
if ($I$(3,"isGap$C",[(c)])) {
gapCount++;
} else {
c=this.toUpperCase$C(c);
if (lastRes == "0") {
lastRes=c;
}if (c != lastRes) {
fullyConserved=false;
}}}
var r=Clazz.array(Integer.TYPE, -1, [fullyConserved ? 1 : 0, gapCount]);
return r;
});

Clazz.newMeth(C$, 'toUpperCase$C', function (c) {
if ("a" <= c && c <= "z" ) {
c = String.fromCharCode(c.$c()- 32);
}return c;
});

Clazz.newMeth(C$, 'verdict$Z$F', function (positiveOnly, maxPercentageGaps) {
var consString=Clazz.new_($I$(8,1).c$$I,[this.end]);
for (var i=0; i < this.start; i++) {
consString.append$C("-");
}
this.consSymbs=Clazz.array(String, [this.end - this.start + 1]);
for (var i=this.start; i <= this.end; i++) {
var gapcons=this.countConservationAndGaps$I(i);
var fullyConserved=gapcons[0] == 1;
var totGaps=gapcons[1];
var pgaps=(totGaps * 100.0) / this.sequences.length;
if (maxPercentageGaps > pgaps ) {
var resultHash=this.total[i - this.start];
var count=0;
var positives=Clazz.new_($I$(8,1).c$$I,[64]);
var negatives=Clazz.new_($I$(8,1).c$$I,[32]);
for (var type, $type = resultHash.keySet$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var result=resultHash.get$O(type).intValue$();
if (result == -1) {
continue;
}count++;
if (result == 1) {
positives.append$S(positives.length$() == 0 ? "" : " ");
positives.append$S(type);
}if (result == 0 && !positiveOnly ) {
negatives.append$S(negatives.length$() == 0 ? "" : " ");
negatives.append$S("!").append$S(type);
}}
if (negatives.length$() > 0) {
positives.append$S(" ").append$CharSequence(negatives);
}this.consSymbs[i - this.start]=positives.toString();
if (count < 10) {
consString.append$I(count);
} else {
consString.append$S(fullyConserved ? "*" : "+");
}} else {
consString.append$C("-");
}}
this.consSequence=Clazz.new_([this.name, consString.toString(), this.start, this.end],$I$(9,1).c$$S$S$I$I);
});

Clazz.newMeth(C$, 'getConsSequence$', function () {
return this.consSequence;
});

Clazz.newMeth(C$, 'findQuality$', function () {
this.findQuality$I$I$jalview_analysis_scoremodels_ScoreMatrix(0, this.maxLength - 1, $I$(10).getInstance$().getBlosum62$());
});

Clazz.newMeth(C$, 'percentIdentity$jalview_analysis_scoremodels_ScoreMatrix', function (sm) {
this.seqNums=Clazz.new_($I$(11,1));
var i=0;
var iSize=this.sequences.length;
for (i=0; i < iSize; i++) {
p$1.calcSeqNum$I$jalview_analysis_scoremodels_ScoreMatrix.apply(this, [i, sm]);
}
if ((this.cons2 == null ) || this.seqNumsChanged ) {
this.cons2=Clazz.array(Integer.TYPE, [this.maxLength, 24]);
this.cons2GapCounts=Clazz.array(Integer.TYPE, [this.maxLength]);
var j=0;
while (j < this.sequences.length){
var sqnum=this.seqNums.elementAt$I(j);
for (i=1; i < sqnum.length; i++) {
var index=sqnum[i];
if (index == -1) {
this.cons2GapCounts[i - 1]++;
} else {
this.cons2[i - 1][index]++;
}}
for (i=sqnum.length - 1; i < this.maxLength; i++) {
this.cons2GapCounts[i]++;
}
j++;
}
}}, p$1);

Clazz.newMeth(C$, 'findQuality$I$I$jalview_analysis_scoremodels_ScoreMatrix', function (startCol, endCol, scoreMatrix) {
this.quality=Clazz.new_($I$(11,1));
var max=-1.7976931348623157E308;
var scores=scoreMatrix.getMatrix$();
p$1.percentIdentity$jalview_analysis_scoremodels_ScoreMatrix.apply(this, [scoreMatrix]);
var size=this.seqNums.size$();
var lengths=Clazz.array(Integer.TYPE, [size]);
for (var l=0; l < size; l++) {
lengths[l]=this.seqNums.elementAt$I(l).length - 1;
}
var symbolCount=scoreMatrix.getSize$();
for (var j=startCol; j <= endCol; j++) {
var bigtot=0;
var x=Clazz.array(Double.TYPE, [symbolCount]);
for (var ii=0; ii < symbolCount; ii++) {
x[ii]=0;
for (var i2=0; i2 < symbolCount - 1; i2++) {
x[ii] += ((this.cons2[j][i2] * scores[ii][i2]) + 4.0);
}
x[ii] += 4.0 + this.cons2GapCounts[j] * scoreMatrix.getMinimumScore$();
x[ii] /= size;
}
for (var k=0; k < size; k++) {
var tot=0;
var xx=Clazz.array(Double.TYPE, [symbolCount]);
var seqNum=(j < lengths[k]) ? this.seqNums.elementAt$I(k)[j + 1] : -1;
for (var i=0; i < symbolCount - 1; i++) {
var sr=4.0;
if (seqNum == -1) {
sr += scoreMatrix.getMinimumScore$();
} else {
sr += scores[i][seqNum];
}xx[i]=x[i] - sr;
tot += (xx[i] * xx[i]);
}
bigtot += Math.sqrt(tot);
}
max=Math.max(max, bigtot);
this.quality.addElement$O(Double.valueOf$D(bigtot));
}
var newmax=-1.7976931348623157E308;
for (var j=startCol; j <= endCol; j++) {
var tmp=this.quality.elementAt$I(j).doubleValue$();
tmp=((max - tmp) * (size - this.cons2GapCounts[j])) / size;
this.quality.setElementAt$O$I(Double.valueOf$D(tmp), j);
if (tmp > newmax ) {
newmax=tmp;
}}
this.qualityMinimum=0.0;
this.qualityMaximum=newmax;
});

Clazz.newMeth(C$, 'completeAnnotations$jalview_datamodel_AlignmentAnnotation$jalview_datamodel_AlignmentAnnotation$I$I', function (conservation, quality2, istart, alWidth) {
var cons=this.getConsSequence$();
var minR=0.3;
var minG=0.0;
var minB=0.0;
var maxR=1.0 - minR;
var maxG=0.9 - minG;
var maxB=0.0 - minB;
var min=0.0;
var max=11.0;
var qmin=0.0;
var qmax=0.0;
if (conservation != null  && conservation.annotations != null   && conservation.annotations.length != alWidth ) {
conservation.annotations=Clazz.array($I$(12), [alWidth]);
}if (quality2 != null ) {
quality2.graphMax=this.qualityMaximum;
if (quality2.annotations != null  && quality2.annotations.length != alWidth ) {
quality2.annotations=Clazz.array($I$(12), [alWidth]);
}qmin=this.qualityMinimum;
qmax=this.qualityMaximum;
}for (var i=istart; i < alWidth; i++) {
var value=0;
var c=cons.getCharAt$I(i);
if (Character.isDigit$C(c)) {
value=c.$c() - 48;
} else if (c == "*") {
value=11;
} else if (c == "+") {
value=10;
}if (conservation != null ) {
var vprop=value - min;
vprop /= max;
var consp=i - this.start;
var conssym=(value > 0  && consp > -1  && consp < this.consSymbs.length ) ? this.consSymbs[consp] : "";
conservation.annotations[i]=Clazz.new_([String.valueOf$C(c), conssym, " ", value, Clazz.new_([minR + (maxR * vprop), minG + (maxG * vprop), minB + (maxB * vprop)],$I$(13,1).c$$F$F$F)],$I$(12,1).c$$S$S$C$F$java_awt_Color);
}if (quality2 != null ) {
value=this.quality.elementAt$I(i).floatValue$();
var vprop=value - qmin;
vprop /= qmax;
var description=C$.FORMAT_3DP.form$D(value);
quality2.annotations[i]=Clazz.new_([" ", description, " ", value, Clazz.new_([minR + (maxR * vprop), minG + (maxG * vprop), minB + (maxB * vprop)],$I$(13,1).c$$F$F$F)],$I$(12,1).c$$S$S$C$F$java_awt_Color);
}}
});

Clazz.newMeth(C$, 'calculateConservation$S$java_util_List$I$I$Z$I$Z', function (name, seqs, start, end, positiveOnly, maxPercentGaps, calcQuality) {
var cons=Clazz.new_(C$.c$$S$java_util_List$I$I,[name, seqs, start, end]);
cons.calculate$();
cons.verdict$Z$F(positiveOnly, maxPercentGaps);
if (calcQuality) {
cons.findQuality$();
}return cons;
}, 1);

Clazz.newMeth(C$, 'getTooltip$I', function (column) {
var cons=this.getConsSequence$();
var val=column < cons.getLength$() ? cons.getCharAt$I(column) : "-";
var hasConservation=val != "-" && val != "0" ;
var consp=column - this.start;
var tip=(hasConservation && consp > -1  && consp < this.consSymbs.length ) ? this.consSymbs[consp] : "";
return tip;
});

C$.$static$=function(){C$.$static$=0;
C$.FORMAT_3DP=Clazz.new_($I$(1,1).c$$S,["%2.5f"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:42 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
