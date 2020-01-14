(function(){var P$=Clazz.newPackage("jalview.analysis"),I$=[[0,'java.util.Hashtable','java.util.ArrayList','java.util.Stack','jalview.util.MessageManager',['jalview.analysis.SecStrConsensus','.SimpleBP'],'StringBuilder','java.util.HashMap','jalview.datamodel.SequenceFeature']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Rna");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isOpeningParenthesis$C', function (c) {
return ("A" <= c && c <= "Z"  || c == "("  || c == "["  || c == "{"  || c == "<" );
}, 1);

Clazz.newMeth(C$, 'isOpeningParenthesis$S', function (s) {
return s != null  && s.length$() == 1  && C$.isOpeningParenthesis$C(s.charAt$I(0)) ;
}, 1);

Clazz.newMeth(C$, 'isClosingParenthesis$C', function (c) {
return ("a" <= c && c <= "z"  || c == ")"  || c == "]"  || c == "}"  || c == ">" );
}, 1);

Clazz.newMeth(C$, 'isClosingParenthesis$S', function (s) {
return s != null  && s.length$() == 1  && C$.isClosingParenthesis$C(s.charAt$I(0)) ;
}, 1);

Clazz.newMeth(C$, 'getMatchingOpeningParenthesis$C', function (c) {
if ("a" <= c && c <= "z" ) {
return String.fromCharCode((c.$c() + 65 - 97));
}switch (c.$c()) {
case 41:
return "(";
case 93:
return "[";
case 125:
return "{";
case 62:
return "<";
default:
return c;
}
}, 1);

Clazz.newMeth(C$, 'getSimpleBPs$CharSequence', function (line) {
var stacks=Clazz.new_($I$(1));
var pairs=Clazz.new_($I$(2));
var i=0;
while (i < line.length$()){
var base=line.charAt$I(i);
if (C$.isOpeningParenthesis$C(base)) {
if (!stacks.containsKey$O(new Character(base))) {
stacks.put$TK$TV(new Character(base), Clazz.new_($I$(3)));
}stacks.get$O(new Character(base)).push$TE(new Integer(i));
} else if (C$.isClosingParenthesis$C(base)) {
var opening=C$.getMatchingOpeningParenthesis$C(base);
if (!stacks.containsKey$O(new Character(opening))) {
throw Clazz.new_(Clazz.load('jalview.analysis.WUSSParseException').c$$S$J,[$I$(4).formatMessage$S$SA("exception.mismatched_unseen_closing_char", Clazz.array(String, -1, [String.valueOf$C(base)])), i]);
}var stack=stacks.get$O(new Character(opening));
if (stack.isEmpty$()) {
throw Clazz.new_(Clazz.load('jalview.analysis.WUSSParseException').c$$S$J,[$I$(4).formatMessage$S$SA("exception.mismatched_closing_char", Clazz.array(String, -1, [String.valueOf$C(base)])), i]);
}var temp=(stack.pop$()).intValue$();
pairs.add$TE(Clazz.new_($I$(5).c$$I$I,[temp, i]));
}i++;
}
for (var opening, $opening = stacks.keySet$().iterator$(); $opening.hasNext$()&&((opening=($opening.next$()).objectValue$()),1);) {
var stack=stacks.get$O(new Character(opening));
if (!stack.empty$()) {
throw Clazz.new_(Clazz.load('jalview.analysis.WUSSParseException').c$$S$J,[$I$(4).formatMessage$S$SA("exception.mismatched_opening_char", Clazz.array(String, -1, [String.valueOf$C(opening), String.valueOf$O(stack.pop$())])), i]);
}}
return pairs;
}, 1);

Clazz.newMeth(C$, 'isRnaSecondaryStructureSymbol$C', function (c) {
return C$.isOpeningParenthesis$C(c) || C$.isClosingParenthesis$C(c) ;
}, 1);

Clazz.newMeth(C$, 'isRnaSecondaryStructureSymbol$S', function (s) {
return C$.isOpeningParenthesis$S(s) || C$.isClosingParenthesis$S(s) ;
}, 1);

Clazz.newMeth(C$, 'getRNASecStrucState$S', function (ssString) {
if (ssString == null ) {
return null;
}var result=Clazz.new_($I$(6).c$$I,[ssString.length$()]);
for (var i=0; i < ssString.length$(); i++) {
var c=ssString.charAt$I(i);
result.append$O(C$.isRnaSecondaryStructureSymbol$C(c) ? new Character(c) : " ");
}
return result.toString();
}, 1);

Clazz.newMeth(C$, 'isCanonicalOrWobblePair$C$C', function (first, second) {
if (first > "Z") {
first = String.fromCharCode(first.$c()- 32);
}if (second > "Z") {
second = String.fromCharCode(second.$c()- 32);
}switch (first.$c()) {
case 65:
switch (second.$c()) {
case 84:
case 85:
return true;
}
break;
case 67:
switch (second.$c()) {
case 71:
return true;
}
break;
case 84:
case 85:
switch (second.$c()) {
case 65:
case 71:
return true;
}
break;
case 71:
switch (second.$c()) {
case 67:
case 84:
case 85:
return true;
}
break;
}
return false;
}, 1);

Clazz.newMeth(C$, 'isCanonicalPair$C$C', function (first, second) {
if (first > "Z") {
first = String.fromCharCode(first.$c()- 32);
}if (second > "Z") {
second = String.fromCharCode(second.$c()- 32);
}switch (first.$c()) {
case 65:
switch (second.$c()) {
case 84:
case 85:
return true;
}
break;
case 71:
switch (second.$c()) {
case 67:
return true;
}
break;
case 67:
switch (second.$c()) {
case 71:
return true;
}
break;
case 84:
case 85:
switch (second.$c()) {
case 65:
return true;
}
break;
}
return false;
}, 1);

Clazz.newMeth(C$, 'getMatchingClosingParenthesis$C', function (c) {
if ("A" <= c && c <= "Z" ) {
return String.fromCharCode((c.$c() + 97 - 65));
}switch (c.$c()) {
case 40:
return ")";
case 91:
return "]";
case 123:
return "}";
case 60:
return ">";
default:
return c;
}
}, 1);

Clazz.newMeth(C$, 'getHelixMap$CharSequence', function (rnaAnnotation) {
var result=Clazz.new_($I$(2));
var helix=0;
var lastopen=0;
var lastclose=9999999;
var helices=Clazz.new_($I$(7));
var bps=C$.getSimpleBPs$CharSequence(rnaAnnotation);
for (var basePair, $basePair = bps.iterator$(); $basePair.hasNext$()&&((basePair=($basePair.next$())),1);) {
var open=basePair.getBP5$();
var close=basePair.getBP3$();
if (open > lastclose) {
helix++;
}var j=bps.size$();
while (--j >= 0){
var popen=bps.get$I(j).getBP5$();
if ((popen < lastopen) && (popen > open) ) {
if (helices.containsValue$O(new Integer(popen)) && (((helices.get$O(new Integer(popen))).intValue$()) === helix ) ) {
continue;
} else {
helix++;
break;
}}}
helices.put$TK$TV(new Integer(open), new Integer(helix));
helices.put$TK$TV(new Integer(close), new Integer(helix));
result.add$TE(Clazz.new_($I$(8).c$$S$S$I$I$S,["RNA helix", "", open, close, String.valueOf$I(helix)]));
lastopen=open;
lastclose=close;
}
return result.toArray$TTA(Clazz.array($I$(8), [result.size$()]));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
