(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Prop','com.stevesoft.pat.Regex','com.stevesoft.pat.StringRule','com.stevesoft.pat.ReplaceRule']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "parsePerl");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'close$C', function (c) {
if (c == "<") {
return ">";
}if (c == "[") {
return "]";
}if (c == "(") {
return ")";
}if (c == "{") {
return "}";
}return c;
}, 1);

Clazz.newMeth(C$, 'codify$S$Z', function (s, keepbs) {
return C$.codify$S$I$I$Z(s, 0, s.length$(), keepbs);
}, 1);

Clazz.newMeth(C$, 'codify$S$I$I$Z', function (s, i0, iN, keepbs) {
var sb=Clazz.new_($I$(1,1));
var ucmode=false;
var lcmode=false;
var litmode=false;
var uc1=false;
var lc1=false;
var modified=false;
for (var i=i0; i < iN; i++) {
var c=s.charAt$I(i);
var mf=true;
var app=true;
if (c == "\\") {
app=false;
i++;
if (i < s.length$()) {
var c2=s.charAt$I(i);
switch (c2.$c()) {
case 81:
litmode=true;
break;
case 85:
ucmode=true;
break;
case 76:
lcmode=true;
break;
case 117:
uc1=true;
break;
case 108:
lc1=true;
break;
case 69:
uc1=lc1=ucmode=lcmode=litmode=false;
break;
default:
if (keepbs) {
sb.append$C("\\");
}c=c2;
if (keepbs) {
mf=false;
}app=true;
break;
}
modified|=mf;
}}if (app) {
if (lc1) {
c=C$.lc$C(c);
lc1=false;
} else if (uc1) {
c=C$.uc$C(c);
uc1=false;
} else if (ucmode) {
c=C$.uc$C(c);
} else if (lcmode) {
c=C$.lc$C(c);
}if (litmode && C$.needbs$C(c) ) {
sb.append$C("\\");
}sb.append$C(c);
}}
return modified ? sb.toString() : s;
}, 1);

Clazz.newMeth(C$, 'uc$C', function (c) {
return $I$(2).toUpperCase$C(c);
}, 1);

Clazz.newMeth(C$, 'lc$C', function (c) {
return $I$(2).toLowerCase$C(c);
}, 1);

Clazz.newMeth(C$, 'needbs$C', function (c) {
if (c >= "a" && c <= "z" ) {
return false;
}if (c >= "A" && c <= "Z" ) {
return false;
}if (c >= "0" && c <= "9" ) {
return false;
}if (c == "_") {
return false;
}return true;
}, 1);

Clazz.newMeth(C$, 'parse$S', function (s) {
var igncase=false;
var optim=false;
var gFlag=false;
var sFlag=false;
var mFlag=false;
var xFlag=false;
var s1=Clazz.new_($I$(1,1));
var s2=Clazz.new_($I$(1,1));
var i=0;
var count=0;
var mode;
var delim="/";
var cdelim="/";
if (s.length$() >= 3 && s.charAt$I(0) == "s" ) {
mode="s";
delim=s.charAt$I(1);
cdelim=C$.close$C(delim);
i=2;
} else if (s.length$() >= 2 && s.charAt$I(0) == "m" ) {
mode="m";
delim=s.charAt$I(1);
cdelim=C$.close$C(delim);
i=2;
} else if (s.length$() >= 1 && s.charAt$I(0) == "/" ) {
mode="m";
i=1;
} else {
try {
$I$(3).endItAll$S("Regex.perlCode should be of the form s/// or m// or //");
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
return null;
}for (; i < s.length$(); i++) {
if (s.charAt$I(i) == "\\") {
s1.append$C("\\");
i++;
} else if (s.charAt$I(i) == cdelim && count == 0 ) {
i++;
break;
} else if (s.charAt$I(i) == delim && cdelim != delim ) {
count++;
} else if (s.charAt$I(i) == cdelim && cdelim != delim ) {
count--;
}s1.append$C(s.charAt$I(i));
}
if (mode == "s" && cdelim != delim ) {
while (i < s.length$() && $I$(4,"isWhite$C",[s.charAt$I(i)]) ){
i++;
}
if (i >= s.length$()) {
try {
$I$(3).endItAll$S("" + mode + delim + " needs " + cdelim );
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
return null;
}cdelim=C$.close$C(delim=s.charAt$I(i));
i++;
}count=0;
if (mode == "s") {
for (; i < s.length$(); i++) {
if (s.charAt$I(i) == "\\") {
s2.append$C("\\");
i++;
} else if (s.charAt$I(i) == cdelim && count == 0 ) {
i++;
break;
} else if (s.charAt$I(i) == delim && cdelim != delim ) {
count++;
} else if (s.charAt$I(i) == cdelim && cdelim != delim ) {
count--;
}s2.append$C(s.charAt$I(i));
}
}for (; i < s.length$(); i++) {
var c=s.charAt$I(i);
switch (c.$c()) {
case 120:
xFlag=true;
break;
case 105:
igncase=true;
break;
case 111:
optim=true;
break;
case 115:
sFlag=true;
break;
case 109:
mFlag=true;
break;
case 103:
gFlag=true;
break;
default:
try {
$I$(3).endItAll$S("Illegal flag to pattern: " + c);
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
return null;
}
}
var r=Clazz.new_($I$(5,1));
try {
var pat=s1.toString();
var reprul=s2.toString();
if (xFlag) {
pat=C$.strip$S(pat);
reprul=C$.strip$S(reprul);
}r.compile$S(pat);
r.ignoreCase|=igncase;
r.gFlag|=gFlag;
r.sFlag|=sFlag;
r.mFlag|=mFlag;
if (optim) {
r.optimize$();
}if (delim == "\'") {
r.setReplaceRule$com_stevesoft_pat_ReplaceRule(Clazz.new_($I$(6,1).c$$S,[reprul]));
} else {
r.setReplaceRule$com_stevesoft_pat_ReplaceRule($I$(7).perlCode$S(reprul));
}} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
r=null;
} else {
throw rs;
}
}
return r;
}, 1);

Clazz.newMeth(C$, 'strip$S', function (s) {
var sb=Clazz.new_($I$(1,1));
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if ($I$(4).isWhite$C(c)) {
;} else if (c == "#") {
i++;
while (i < s.length$()){
if (s.charAt$I(i) == "\n") {
break;
}i++;
}
} else if (c == "\\") {
sb.append$C(c);
sb.append$C(s.charAt$I(++i));
} else {
sb.append$C(c);
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
