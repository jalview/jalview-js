(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Parser");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parseStringInfestedFloatArray$S$javajs_util_BS$FA', function (str, bs, data) {
return C$.parseFloatArrayBsData$SA$javajs_util_BS$FA($I$(1).getTokens$S(str), bs, data);
}, 1);

Clazz.newMeth(C$, 'parseFloatArrayBsData$SA$javajs_util_BS$FA', function (tokens, bs, data) {
var len=data.length;
var nTokens=tokens.length;
var n=0;
var max=0;
var haveBitSet=(bs != null );
for (var i=(haveBitSet ? bs.nextSetBit$I(0) : 0); i >= 0 && i < len  && n < nTokens ; i=(haveBitSet ? bs.nextSetBit$I(i + 1) : i + 1)) {
var f;
while (Float.isNaN$F(f=$I$(1).parseFloat$S(tokens[n++])) && n < nTokens ){
}
if (!Float.isNaN$F(f)) data[(max=i)]=f;
if (n == nTokens) break;
}
return max + 1;
}, 1);

Clazz.newMeth(C$, 'parseFloatArrayFromMatchAndField$S$javajs_util_BS$I$I$IA$I$I$FA$I', function (str, bs, fieldMatch, fieldMatchColumnCount, matchData, field, fieldColumnCount, data, firstLine) {
var f;
var i=-1;
var isMatch=(matchData != null );
var lines=C$.markLines$S$C(str, (str.indexOf$I("\n") >= 0 ? "\n" : ";"));
var iLine=(firstLine <= 1 || firstLine >= lines.length  ? 0 : firstLine - 1);
var pt=(iLine == 0 ? 0 : lines[iLine - 1]);
var nLines=lines.length;
if (data == null ) data=Clazz.array(Float.TYPE, [nLines - iLine]);
var len=data.length;
var minLen=(fieldColumnCount <= 0 ? Math.max(field, fieldMatch) : Math.max(field + fieldColumnCount, fieldMatch + fieldMatchColumnCount) - 1);
var haveBitSet=(bs != null );
for (; iLine < nLines; iLine++) {
var line=str.substring$I$I(pt, lines[iLine]).trim$();
pt=lines[iLine];
var tokens=(fieldColumnCount <= 0 ? $I$(1).getTokens$S(line) : null);
if (fieldColumnCount <= 0) {
if (tokens.length < minLen || Float.isNaN$F(f=$I$(1).parseFloat$S(tokens[field - 1])) ) continue;
} else {
if (line.length$() < minLen || Float.isNaN$F(f=$I$(1).parseFloat$S(line.substring$I$I(field - 1, field + fieldColumnCount - 1))) ) continue;
}var iData;
if (isMatch) {
iData=$I$(1).parseInt$S(tokens == null  ? line.substring$I$I(fieldMatch - 1, fieldMatch + fieldMatchColumnCount - 1) : tokens[fieldMatch - 1]);
if (iData == -2147483648 || iData < 0  || iData >= len  || (iData=matchData[iData]) < 0 ) continue;
if (haveBitSet) bs.set$I(iData);
} else {
if (haveBitSet) i=bs.nextSetBit$I(i + 1);
 else i++;
if (i < 0 || i >= len ) return data;
iData=i;
}data[iData]=f;
}
return data;
}, 1);

Clazz.newMeth(C$, 'fixDataString$S', function (str) {
str=str.replace$C$C(";", str.indexOf$I("\n") < 0 ? "\n" : " ");
str=$I$(1).trim$S$S(str, "\n \t");
str=$I$(1).rep$S$S$S(str, "\n ", "\n");
str=$I$(1).rep$S$S$S(str, "\n\n", "\n");
return str;
}, 1);

Clazz.newMeth(C$, 'markLines$S$C', function (data, eol) {
var nLines=0;
for (var i=data.length$(); --i >= 0; ) if (data.charAt$I(i) == eol) nLines++;

var lines=Clazz.array(Integer.TYPE, [nLines + 1]);
nLines=0;
var pt=0;
while ((pt=data.indexOf$I$I(eol, pt)) >= 0)lines[nLines++]=++pt;

lines[nLines]=data.length$();
return lines;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
