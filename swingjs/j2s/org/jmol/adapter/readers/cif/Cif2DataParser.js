(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.cif"),p$1={},I$=[[0,'javajs.util.PT','javajs.util.Lst','java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Cif2DataParser", null, 'javajs.util.CifDataParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getVersion$', function () {
return 2;
});

Clazz.newMeth(C$, 'toUnicode$S', function (data) {
return data;
});

Clazz.newMeth(C$, 'isQuote$C', function (ch) {
switch (ch.$c()) {
case 1:
case 39:
case 34:
case 91:
case 93:
case 123:
case 125:
case 59:
return true;
}
return false;
});

Clazz.newMeth(C$, 'getQuotedStringOrObject$C', function (ch) {
return p$1.processQuotedString.apply(this, []);
});

Clazz.newMeth(C$, 'preprocessString$', function () {
this.line=(this.ich == 0 ? this.str : this.str.substring$I(this.ich));
return this.setString$S(this.processSemiString$());
});

Clazz.newMeth(C$, 'processQuotedString', function () {
var str=null;
var quoteChar=this.str.charAt$I(this.ich);
var tripleChar=null;
try {
switch (quoteChar.$c()) {
case 1:
str=this.str.substring$I$I(1, (this.ich=this.str.indexOf$S$I("\u0001", this.ich + 1)));
this.ich++;
break;
case 91:
return this.readList$();
case 93:
this.ich++;
return "]";
case 123:
return this.readTable$();
case 125:
this.ich++;
return "}";
case 39:
case 34:
if (this.str.indexOf$S("\'\'\'") == this.ich) tripleChar="\'\'\'";
 else if (this.str.indexOf$S("\"\"\"") == this.ich) tripleChar="\"\"\"";
var nchar=(tripleChar == null  ? 1 : 3);
var pt=this.ich + nchar;
var pt1=0;
while ((pt1=(tripleChar == null  ? this.str.indexOf$I$I(quoteChar, pt) : this.str.indexOf$S$I(tripleChar, pt))) < 0){
if (this.readLine$() == null ) break;
this.str += this.line;
}
this.ich=pt1 + nchar;
this.cch=this.str.length$();
str=this.str.substring$I$I(pt, pt1);
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("exception in Cif2DataParser ; " + e);
} else {
throw e;
}
}
return (this.cterm == "\u0000" || this.asObject  ? str : $I$(1).esc$S(str));
}, p$1);

Clazz.newMeth(C$, 'processSemiString$', function () {
var pt1;
var pt2;
var str=this.preprocessSemiString$();
if (str.indexOf$I(";") != 1 && (pt1=str.indexOf$I("\\")) > 1  && ((pt2=str.indexOf$I("\n")) > pt1 || pt2 < 0 ) ) {
var prefix=str.substring$I$I(1, pt1);
str=$I$(1).rep$S$S$S(str, "\n" + prefix, "\n");
str="\u0001" + str.substring$I(str.charAt$I(pt1 + 1) == "\\" ? pt1 + 1 : pt2 < 0 ? str.length$() - 1 : pt2 + 1);
}this.ich=0;
return p$1.fixLineFolding$S.apply(this, [str]);
});

Clazz.newMeth(C$, 'readList$', function () {
this.ich++;
var cterm0=this.cterm;
this.cterm="]";
var ns=this.nullString;
this.nullString=null;
var lst=(this.asObject ? Clazz.new_($I$(2,1)) : null);
var n=0;
var str="";
while (true){
var value=(this.asObject ? this.getNextTokenObject$() : this.getNextToken$());
if (value == null  || value.equals$O("]") ) break;
if (this.asObject) {
lst.addLast$O(value);
} else {
if (n++ > 0) str += ",";
str += value;
}}
this.cterm=cterm0;
this.nullString=ns;
return (this.asObject ? lst : "[" + str + "]" );
});

Clazz.newMeth(C$, 'readTable$', function () {
this.ich++;
var cterm0=this.cterm;
this.cterm="}";
var ns=this.nullString;
this.nullString=null;
var map=(this.asObject ? Clazz.new_($I$(3,1)) : null);
var n=0;
var str="";
while (true){
var key=this.getNextToken$();
if (key == null  || key.equals$O("}") ) break;
while (p$1.isSpaceOrColon$I.apply(this, [this.ich]))this.ich++;

if (this.asObject) {
map.put$O$O(key, this.getNextTokenObject$());
} else {
if (n++ > 0) str += ",";
str += key + " : " + this.getNextToken$() ;
}}
this.cterm=cterm0;
this.nullString=ns;
return (this.asObject ? map : "{" + str + "}" );
});

Clazz.newMeth(C$, 'isSpaceOrColon$I', function (ich) {
if (ich < this.cch) switch ((this.line.charCodeAt$I(ich))) {
case 32:
case 9:
case 10:
case 58:
return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'unquoted$S', function (s) {
if (this.cterm == "\u0000" && !this.asObject ) return s;
var n=s.length$();
if (n > 0) {
var c=s.charAt$I(0);
if ($I$(1).isDigit$C(c) || c == "-"  || c == "." && n > 1  ) {
var pt=s.indexOf$I("(");
var isFloat=(s.indexOf$S(".") >= 0);
if (n > 1 && pt > 0  && s.indexOf$I$I(")", pt + 1) == n - 1 ) s=s.substring$I$I(0, pt);
try {
if (isFloat) {
var f=Float.parseFloat$S(s);
if (this.asObject) return Float.valueOf$F(f);
s="" + new Float(f).toString();
if (s.indexOf$S(".") < 0 && s.indexOf$S("E") < 0 ) s += ".0";
return s;
}var i=Integer.parseInt$S(s);
return (this.asObject ? Integer.valueOf$I(i) : "" + i);
} catch (e) {
}
}}return (this.asObject ? s : $I$(1).esc$S(s));
});

Clazz.newMeth(C$, 'fixLineFolding$S', function (str) {
if (str.indexOf$I("\\") < 0) return str;
var n=str.length$();
if (str.endsWith$S("\\\u0001")) str=str.substring$I$I(0, n - 1) + "\n\u0001";
var pt=0;
while ((pt=str.indexOf$I$I("\\", pt + 1)) >= 0){
var eol=str.indexOf$I$I("\n", pt);
if (eol < 0) break;
for (var i=eol; --i > pt; ) {
var ch=str.charAt$I(i);
if (!$I$(1).isWhitespace$C(ch)) {
if (ch == "\\") {
pt=i;
break;
}pt=eol;
break;
}}
if (pt < eol) str=str.substring$I$I(0, pt) + str.substring$I(eol + 1);
}
return str;
}, p$1);

Clazz.newMeth(C$, 'getArrayFromStringList$S$I', function (s, n) {
var f=Clazz.array(Float.TYPE, [n]);
(function(a,f){return f.apply(null,a)})([(function(a,f){return f.apply(null,a)})([s.replace$C$C(",", " ").replace$C$C("[", " ")],$I$(1).getTokens$S), f],$I$(1).parseFloatArrayInfested$SA$FA);
var d=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) d[i]=f[i];

return d;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:00:55 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
