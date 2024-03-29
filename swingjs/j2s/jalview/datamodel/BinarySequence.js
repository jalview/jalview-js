(function(){var P$=Clazz.newPackage("jalview.datamodel"),p$1={},I$=[[0,'jalview.schemes.ResidueProperties',['jalview.datamodel.BinarySequence','.InvalidSequenceTypeException']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BinarySequence", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.datamodel.Sequence');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.binary=null;
this.dbinary=null;
this.isNa=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isNa=false;
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (s, isNa) {
C$.superclazz.c$$S$S$I$I.apply(this, ["", s, 0, s.length$()]);
C$.$init$.apply(this);
this.isNa=isNa;
}, 1);

Clazz.newMeth(C$, 'initMatrixGetNoRes', function () {
var nores=(this.isNa) ? 10 : 23;
this.dbinary=Clazz.array(Double.TYPE, [this.getLength$() * nores]);
return nores;
}, p$1);

Clazz.newMeth(C$, 'getSymbolmatrix', function () {
return (this.isNa) ? $I$(1).nucleotideIndex : $I$(1).aaIndex;
}, p$1);

Clazz.newMeth(C$, 'encode$', function () {
var nores=p$1.initMatrixGetNoRes.apply(this, []);
var sindex=p$1.getSymbolmatrix.apply(this, []);
for (var i=0; i < this.getLength$(); i++) {
var aanum=nores - 1;
try {
aanum=sindex[(this.getCharAt$I(i)).$c()];
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
aanum=nores - 1;
} else {
throw e;
}
}
if (aanum >= nores) {
aanum=nores - 1;
}this.dbinary[(i * nores) + aanum]=1.0;
}
});

Clazz.newMeth(C$, 'matrixEncode$jalview_analysis_scoremodels_ScoreMatrix', function (smtrx) {
if (this.isNa != smtrx.isDNA$() ) {
throw Clazz.new_($I$(2).c$$S, [this, null, "matrix " + smtrx.getClass$().getCanonicalName$() + " is not a valid matrix for " + (this.isNa ? "nucleotide" : "protein") + "sequences" ]);
}p$1.matrixEncode$IA$FAA.apply(this, [smtrx.isDNA$() ? $I$(1).nucleotideIndex : $I$(1).aaIndex, smtrx.getMatrix$()]);
});

Clazz.newMeth(C$, 'matrixEncode$IA$FAA', function (aaIndex, matrix) {
var nores=p$1.initMatrixGetNoRes.apply(this, []);
for (var i=0, iSize=this.getLength$(); i < iSize; i++) {
var aanum=nores - 1;
try {
aanum=aaIndex[(this.getCharAt$I(i)).$c()];
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
aanum=nores - 1;
} else {
throw e;
}
}
if (aanum >= nores) {
aanum=nores - 1;
}for (var j=0; j < nores; j++) {
this.dbinary[(i * nores) + j]=matrix[aanum][j];
}
}
}, p$1);

Clazz.newMeth(C$, 'toBinaryString$', function () {
var out="";
for (var i=0; i < this.binary.length; i++) {
out += ( new Integer(this.binary[i])).toString();
if (i < (this.binary.length - 1)) {
out += " ";
}}
return out;
});

Clazz.newMeth(C$, 'getDBinary$', function () {
return this.dbinary;
});
;
(function(){var C$=Clazz.newClass(P$.BinarySequence, "InvalidSequenceTypeException", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S.apply(this, [string]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
