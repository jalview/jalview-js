(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'jalview.analysis.scoremodels.ScoreModels','java.util.StringTokenizer','jalview.analysis.scoremodels.ScoreMatrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScoreMatrixFile", null, 'jalview.io.AlignFile', 'jalview.io.AlignmentFileReaderI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isLowerDiagonalOnly','hasGuideColumn'],'S',['matrixName']]]

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (source) {
;C$.superclazz.c$$Z$jalview_io_FileParse.apply(this,[false, source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'print$jalview_datamodel_SequenceIA$Z',  function (sqs, jvsuffix) {
return null;
});

Clazz.newMeth(C$, 'parse$',  function () {
var sm=this.parseMatrix$();
$I$(1).getInstance$().registerScoreModel$jalview_api_analysis_ScoreModelI(sm);
});

Clazz.newMeth(C$, 'parseMatrix$',  function () {
var sm=null;
var lineNo=0;
var name=null;
var alphabet=null;
var scores=null;
var size=0;
var row=0;
var err=null;
var data;
this.isLowerDiagonalOnly=false;
while ((data=this.nextLine$()) != null ){
++lineNo;
data=data.trim$();
if (data.startsWith$S("#") || data.length$() == 0 ) {
continue;
}if (data.regionMatches$Z$I$S$I$I(true, 0, "SCOREMATRIX", 0, "SCOREMATRIX".length$())) {
if (name != null ) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,["Error: 'ScoreMatrix' repeated in file at line " + lineNo]);
}var nameLine=Clazz.new_($I$(2,1).c$$S$S,[data, " ,\t"]);
if (nameLine.countTokens$() < 2) {
err="Format error: expected 'ScoreMatrix <name>', found '" + data + "' at line " + lineNo ;
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}nameLine.nextToken$();
name=nameLine.nextToken$();
name=data.substring$I(1).substring$I(data.substring$I(1).indexOf$S(name));
continue;
} else if (data.startsWith$S("H ") && name == null  ) {
return this.parseAAIndexFormat$I$S(lineNo, data);
} else if (name == null ) {
err="Format error: \'ScoreMatrix <name>\' should be the first non-comment line";
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}if (alphabet == null ) {
var columnHeadings=Clazz.new_($I$(2,1).c$$S$S,[data, " ,\t"]);
size=columnHeadings.countTokens$();
alphabet=Clazz.array(Character.TYPE, [size]);
var col=0;
while (columnHeadings.hasMoreTokens$()){
alphabet[col++]=columnHeadings.nextToken$().charAt$I(0);
}
scores=Clazz.array(Float.TYPE, [size, null]);
continue;
}if (row >= size) {
err="Unexpected extra input line in score model file: '" + data + "'" ;
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}this.parseValues$S$I$FAA$I$CA(data, lineNo, scores, row, alphabet);
++row;
}
if (row < size) {
err=String.format$S$OA("Expected %d rows of score data in score matrix but only found %d", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(size), Integer.valueOf$I(row)]));
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}sm=Clazz.new_($I$(3,1).c$$S$CA$FAA,[name, alphabet, scores]);
this.matrixName=name;
return sm;
});

Clazz.newMeth(C$, 'parseAAIndexFormat$I$S',  function (lineNo, data) {
var name=data.substring$I(2).trim$();
var description=null;
var scores=null;
var alphabet=null;
var row=0;
var size=0;
while ((data=this.nextLine$()) != null ){
++lineNo;
data=data.trim$();
if (this.skipAAindexLine$S(data)) {
continue;
}if (data.startsWith$S("D ")) {
description=data.substring$I(2).trim$();
} else if (data.startsWith$S("M ")) {
alphabet=this.parseAAindexRowsColumns$I$S(lineNo, data);
size=alphabet.length;
scores=Clazz.array(Float.TYPE, [size, size]);
} else if (scores == null ) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,["No alphabet specified in matrix file"]);
} else if (row >= size) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,["Too many data rows in matrix file"]);
} else {
this.parseValues$S$I$FAA$I$CA(data, lineNo, scores, row, alphabet);
++row;
}}
var sm=Clazz.new_($I$(3,1).c$$S$S$CA$FAA,[name, description, alphabet, scores]);
this.matrixName=name;
return sm;
});

Clazz.newMeth(C$, 'parseValues$S$I$FAA$I$CA',  function (data, lineNo, scores, row, alphabet) {
var err;
var size=alphabet.length;
var scoreLine=Clazz.new_($I$(2,1).c$$S$S,[data, " ,\t"]);
var tokenCount=scoreLine.countTokens$();
if (row == 0) {
if (data.startsWith$S(String.valueOf$C(alphabet[0]))) {
this.hasGuideColumn=true;
}if (tokenCount == (this.hasGuideColumn ? 2 : 1)) {
this.isLowerDiagonalOnly=true;
}}if (this.hasGuideColumn) {
var symbol=scoreLine.nextToken$();
if (symbol.length$() > 1 || symbol.charAt$I(0) != alphabet[row] ) {
err=String.format$S$OA("Error parsing score matrix at line %d, expected \'%s\' but found \'%s\'", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(lineNo), Character.valueOf$C(alphabet[row]), symbol]));
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}tokenCount=scoreLine.countTokens$();
}if (this.isLowerDiagonalOnly && tokenCount != row + 1 ) {
err=String.format$S$OA("Expected %d scores at line %d: \'%s\' but found %d", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(row + 1), Integer.valueOf$I(lineNo), data, Integer.valueOf$I(tokenCount)]));
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}if (!this.isLowerDiagonalOnly && tokenCount != size ) {
err=String.format$S$OA("Expected %d scores at line %d: \'%s\' but found %d", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(size), Integer.valueOf$I(lineNo), data, Integer.valueOf$I(scoreLine.countTokens$())]));
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
}scores[row]=Clazz.array(Float.TYPE, [size]);
var col=0;
var value=null;
while (scoreLine.hasMoreTokens$()){
try {
value=scoreLine.nextToken$();
scores[row][col]=(Float.valueOf$S(value)).valueOf();
if (this.isLowerDiagonalOnly) {
scores[col][row]=scores[row][col];
}++col;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
err=String.format$S$OA("Invalid score value \'%s\' at line %d column %d", Clazz.array(java.lang.Object, -1, [value, Integer.valueOf$I(lineNo), Integer.valueOf$I(col)]));
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err]);
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'parseAAindexRowsColumns$I$S',  function (lineNo, data) {
var err="Unexpected aaIndex score matrix data at line " + lineNo + ": " + data ;
try {
var toks=data.split$S(",");
var rowsAlphabet=toks[0].split$S("=")[1].trim$();
var colsAlphabet=toks[1].split$S("=")[1].trim$();
if (!rowsAlphabet.equals$O(colsAlphabet)) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,["rows != cols"]);
}return rowsAlphabet.toCharArray$();
} catch (t) {
throw Clazz.new_(Clazz.load('jalview.io.FileFormatException').c$$S,[err + " " + t.getMessage$() ]);
}
});

Clazz.newMeth(C$, 'skipAAindexLine$S',  function (data) {
if (data.startsWith$S("#") || data.length$() == 0 ) {
return true;
}if (data.startsWith$S("*") || data.startsWith$S("R ") || data.startsWith$S("A ") || data.startsWith$S("T ") || data.startsWith$S("J ") || data.startsWith$S("//")  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getMatrixName$',  function () {
return this.matrixName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
