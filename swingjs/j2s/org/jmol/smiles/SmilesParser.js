(function(){var P$=Clazz.newPackage("org.jmol.smiles"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.smiles.SmilesSearch','javajs.util.PT','javajs.util.SB','org.jmol.smiles.SmilesBond','org.jmol.util.Elements','org.jmol.smiles.SmilesMeasure','org.jmol.util.Logger','javajs.util.Lst','org.jmol.smiles.SmilesAtom','org.jmol.smiles.SmilesStereo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmilesParser");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.connections=null;
this.htMeasures=null;
this.flags=0;
this.isSmarts=false;
this.isBioSequence=false;
this.bioType='\0';
this.braceCount=0;
this.branchLevel=0;
this.componentCount=0;
this.componentParenCount=0;
this.ignoreStereochemistry=false;
this.bondDirectionPaired=false;
this.isTarget=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.connections=Clazz.new_($I$(1));
this.htMeasures=Clazz.new_($I$(1));
this.bioType="\u0000";
this.bondDirectionPaired=true;
}, 1);

Clazz.newMeth(C$, 'newSearch$S$Z$Z', function (pattern, isSmarts, isTarget) {
return (Clazz.new_(C$.c$$Z$Z,[isSmarts, isTarget])).parse$S(pattern);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z', function (isSmarts, isTarget) {
C$.$init$.apply(this);
this.isSmarts=isSmarts;
this.isTarget=isTarget;
}, 1);

Clazz.newMeth(C$, 'parse$S', function (pattern) {
if (pattern == null ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["expression must not be null"]);
var search=Clazz.new_($I$(2));
if (pattern.indexOf$S("$(select") >= 0) pattern=p$1.parseNested$org_jmol_smiles_SmilesSearch$S$S.apply(this, [search, pattern, "select"]);
var ret=Clazz.array(Integer.TYPE, [1]);
pattern=C$.extractFlags$S$IA(pattern, ret);
this.flags=ret[0];
this.ignoreStereochemistry=((this.flags & 32) == 32);
search.setFlags$I(this.flags);
if (pattern.indexOf$S("$") >= 0) pattern=p$1.parseVariables$S.apply(this, [pattern]);
if (this.isSmarts && pattern.indexOf$S("[$") >= 0 ) pattern=p$1.parseVariableLength$S.apply(this, [pattern]);
if (pattern.indexOf$S("||") < 0) return this.getSubsearch$org_jmol_smiles_SmilesSearch$S$I(search, pattern, this.flags);
var patterns=$I$(3).split$S$S(pattern, "||");
var toDo="";
search.subSearches=Clazz.array($I$(2), [patterns.length]);
for (var i=0; i < patterns.length; i++) {
var key="|" + patterns[i] + "|" ;
if (toDo.indexOf$S(key) < 0) {
search.subSearches[i]=this.getSubsearch$org_jmol_smiles_SmilesSearch$S$I(search, patterns[i], this.flags);
toDo += key;
}}
return search;
});

Clazz.newMeth(C$, 'parseVariableLength$S', function (pattern) {
var sout=Clazz.new_($I$(4));
var len=pattern.length$() - 1;
var nParen=0;
var haveInternalOr=false;
for (var i=0; i < len; i++) {
switch ((pattern.charCodeAt$I(i))) {
case 40:
nParen++;
break;
case 41:
nParen--;
break;
case 124:
if (nParen > 0) {
haveInternalOr=true;
if (pattern.charAt$I(i + 1) == "|") {
pattern=pattern.substring$I$I(0, i) + pattern.substring$I(i + 1);
len--;
}}break;
}
}
if (pattern.indexOf$S("||") >= 0) {
var patterns=$I$(3).split$S$S(pattern, "||");
for (var i=0; i < patterns.length; i++) sout.append$S("||").append$S(p$1.parseVariableLength$S.apply(this, [patterns[i]]));

} else {
var pt=-1;
var ret=Clazz.array(Integer.TYPE, [1]);
var isOK=true;
var bracketed=null;
while ((pt=pattern.indexOf$S$I("[$", pt + 1)) >= 0){
var pt0=pt;
var min=-2147483648;
var max=-2147483648;
pt=C$.getDigits$S$I$IA(pattern, pt + 2, ret);
min=ret[0];
if (min != -2147483648) {
if (C$.getChar$S$I(pattern, pt) == "-") {
pt=C$.getDigits$S$I$IA(pattern, pt + 1, ret);
max=ret[0];
}}if (C$.getChar$S$I(pattern, pt) != "(") continue;
bracketed=C$.getSubPattern$S$I$C(pattern, pt0, "[");
if (!bracketed.endsWith$S(")")) continue;
var pt1=pt0 + bracketed.length$() + 2 ;
var repeat=C$.getSubPattern$S$I$C(pattern, pt, "(");
var pt2=pt;
bracketed=C$.getSubPattern$S$I$C(pattern, pt, "[");
pt+=1 + repeat.length$();
if (repeat.indexOf$I(":") >= 0 && repeat.indexOf$I("|") < 0 ) {
var parenCount=0;
var n=repeat.length$();
var ptColon=-1;
for (var i=0; i < n; i++) {
switch ((repeat.charCodeAt$I(i))) {
case 91:
case 40:
parenCount++;
break;
case 41:
case 93:
parenCount--;
break;
case 46:
if (ptColon >= 0 && parenCount == 0 ) n=i;
break;
case 58:
if (ptColon < 0 && parenCount == 0 ) ptColon=i;
break;
}
}
if (ptColon > 0) repeat=repeat.substring$I$I(0, ptColon) + "(" + repeat.substring$I$I(ptColon, n) + ")" + repeat.substring$I(n) ;
}if (min == -2147483648) {
var ptOr=repeat.indexOf$S("|");
if (ptOr >= 0) return p$1.parseVariableLength$S.apply(this, [pattern.substring$I$I(0, pt0) + "[$1" + pattern.substring$I$I(pt2, pt2 + ptOr + 1 ) + ")]" + pattern.substring$I(pt1) + "||" + pattern.substring$I$I(0, pt0) + "[$1(" + pattern.substring$I(pt2 + ptOr + 2 ) + pattern.substring$I(pt1) ]);
continue;
}if (max == -2147483648) max=min;
if (repeat.indexOf$S("|") >= 0) repeat="[$(" + repeat + ")]" ;
for (var i=min; i <= max; i++) {
var sb=Clazz.new_($I$(4));
sb.append$S("||").append$S(pattern.substring$I$I(0, pt0));
for (var j=0; j < i; j++) sb.append$S(repeat);

sb.append$S(pattern.substring$I(pt1));
sout.appendSB$javajs_util_SB(sb);
}
}
if (!isOK) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["bad variable expression: " + bracketed]);
}return (haveInternalOr ? p$1.parseVariableLength$S.apply(this, [sout.substring$I(2)]) : sout.length$() < 2 ? pattern : sout.substring$I(2));
}, p$1);

Clazz.newMeth(C$, 'getSubsearch$org_jmol_smiles_SmilesSearch$S$I', function (parent, pattern, flags) {
this.htMeasures=Clazz.new_($I$(1));
var search=Clazz.new_($I$(2));
search.setTop$org_jmol_smiles_SmilesSearch(parent);
search.isSmarts=this.isSmarts;
search.pattern=pattern;
search.setFlags$I(flags);
if (pattern.indexOf$S("$(") >= 0) pattern=p$1.parseNested$org_jmol_smiles_SmilesSearch$S$S.apply(this, [search, pattern, ""]);
p$1.parseSmiles$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom$Z.apply(this, [search, pattern, null, false]);
if (this.braceCount != 0) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["unmatched \'{\'"]);
if (!this.connections.isEmpty$()) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Open connection"]);
search.set$();
if (this.isSmarts) for (var i=search.ac; --i >= 0; ) p$1.checkNested$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$I.apply(this, [search, search.patternAtoms[i], flags]);

 else if (!this.isBioSequence) search.elementCounts[1]=search.getMissingHydrogenCount$();
if (!this.ignoreStereochemistry && !this.isTarget ) p$1.fixChirality$org_jmol_smiles_SmilesSearch.apply(this, [search]);
return search;
});

Clazz.newMeth(C$, 'checkNested$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$I', function (search, atom, flags) {
if (atom.iNested > 0) {
var o=search.getNested$I(atom.iNested);
if (Clazz.instanceOf(o, "java.lang.String")) {
var s=o;
if (s.startsWith$S("select")) return;
if (s.charAt$I(0) != "~" && atom.bioType != "\u0000" ) s="~" + atom.bioType + "~" + s ;
var nested=this.getSubsearch$org_jmol_smiles_SmilesSearch$S$I(search, s, flags);
if (nested.ac > 0 && nested.patternAtoms[0].selected ) atom.selected=true;
search.setNested$I$O(atom.iNested, nested);
}}for (var i=0; i < atom.nSubAtoms; i++) p$1.checkNested$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$I.apply(this, [search, atom.subAtoms[i], flags]);

}, p$1);

Clazz.newMeth(C$, 'fixChirality$org_jmol_smiles_SmilesSearch', function (search) {
for (var i=search.ac; --i >= 0; ) {
var sAtom=search.patternAtoms[i];
if (sAtom.stereo != null ) sAtom.stereo.fixStereo$org_jmol_smiles_SmilesAtom(sAtom);
}
}, p$1);

Clazz.newMeth(C$, 'parseSmiles$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom$Z', function (search, pattern, currentAtom, isBranchAtom) {
var ret=Clazz.array(Integer.TYPE, [1]);
var pt=0;
var ch;
var bond=null;
var wasMeasure=false;
var wasBranch=false;
 loop : while (pattern != null  && pattern.length$() != 0 ){
var index=0;
if (currentAtom == null ) {
index=p$1.checkBioType$S$I.apply(this, [pattern, 0]);
if (index == pattern.length$()) pattern += "*";
if (this.isBioSequence) search.needAromatic=search.top.needAromatic=false;
}ch=C$.getChar$S$I(pattern, index);
var haveOpen=p$1.checkBrace$org_jmol_smiles_SmilesSearch$C$C.apply(this, [search, ch, "{"]);
if (haveOpen) ch=C$.getChar$S$I(pattern, ++index);
if (ch == "(") {
var subString=C$.getSubPattern$S$I$C(pattern, index, "(");
var isMeasure=(C$.getChar$S$I(pattern, index + 1) == ".");
if (currentAtom == null ) {
if (isMeasure || !this.isSmarts ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["No previous atom for measure"]);
search.haveComponents=true;
do {
this.componentCount++;
this.componentParenCount++;
ch=C$.getChar$S$I(pattern=pattern.substring$I(1), 0);
} while (ch == "(");
if (!haveOpen && (haveOpen=p$1.checkBrace$org_jmol_smiles_SmilesSearch$C$C.apply(this, [search, ch, "{"])) == true  ) ch=C$.getChar$S$I(pattern=pattern.substring$I(1), 0);
} else {
wasMeasure=wasBranch=false;
if (subString.startsWith$S(".")) {
p$1.parseMeasure$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom.apply(this, [search, subString.substring$I(1), currentAtom]);
wasMeasure=true;
} else if (subString.length$() == 0 && this.isBioSequence ) {
currentAtom.notCrossLinked=true;
} else {
this.branchLevel++;
p$1.parseSmiles$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom$Z.apply(this, [search, subString, currentAtom, true]);
wasBranch=true;
this.branchLevel--;
}index=subString.length$() + 2;
ch=C$.getChar$S$I(pattern, index);
if (ch == "}" && p$1.checkBrace$org_jmol_smiles_SmilesSearch$C$C.apply(this, [search, ch, "}"]) ) index++;
ch="\u0000";
}}if (ch != "\u0000") {
pt=index;
 out : while (ch != "\u0000"){
switch ($I$(5).isBondType$C$Z$Z(ch, this.isSmarts, this.isBioSequence)) {
case 1:
break;
case 0:
break out;
case -1:
if (!(($I$(3).isDigit$C(C$.getChar$S$I(pattern, ++index)) && index++ > 0  ? $I$(3).isDigit$C(C$.getChar$S$I(pattern, index++)) : true) && (ch=C$.getChar$S$I(pattern, index)) == "-" )) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["malformed atropisomerism bond ^nn-  or ^^nn-"]);
continue;
}
ch=C$.getChar$S$I(pattern, ++index);
}
ch=C$.getChar$S$I(pattern, index);
if (ch == ")") {
switch ((ch=C$.getChar$S$I(pattern, ++index)).$c()) {
case 0:
case 41:
case 46:
pattern=pattern.substring$I(index);
this.componentParenCount--;
if (this.componentParenCount >= 0) continue loop;
}
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["invalid continuation after component grouping (SMARTS).(SMARTS)"]);
}bond=p$1.parseBond$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesBond$S$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$I$IA.apply(this, [search, null, pattern.substring$I$I(pt, index), null, currentAtom, false, isBranchAtom, index - pt, ret]);
if (haveOpen && bond.order != -1 ) ch=C$.getChar$S$I(pattern, index=pt);
if (p$1.checkBrace$org_jmol_smiles_SmilesSearch$C$C.apply(this, [search, ch, "{"])) ch=C$.getChar$S$I(pattern, ++index);
switch (ch.$c()) {
case 126:
if (bond.order == 0) {
index=p$1.checkBioType$S$I.apply(this, [pattern, index]);
if (index == pattern.length$()) pattern += "*";
}break;
case 40:
do {
this.componentCount++;
this.componentParenCount++;
ch=C$.getChar$S$I(pattern, ++index);
} while (ch == "(");
break;
case 0:
if (bond.order == 0) return;
}
var isConnect=($I$(3).isDigit$C(ch) || ch == "%" );
var isAtom=(!isConnect && (ch == "_" || ch == "["  || ch == "*"  || $I$(3).isLetter$C(ch) ) );
if (isConnect) {
if (wasMeasure || wasBranch ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["connection number must immediately follow its connecting atom"]);
index=C$.getRingNumber$S$I$C$IA(pattern, index, ch, ret);
var ringNumber=ret[0];
p$1.parseConnection$org_jmol_smiles_SmilesSearch$I$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond.apply(this, [search, ringNumber, currentAtom, bond]);
bond=null;
} else if (isAtom) {
wasMeasure=wasBranch=false;
switch (ch.$c()) {
case 91:
case 95:
var subPattern=C$.getSubPattern$S$I$C(pattern, index, ch);
index+=subPattern.length$() + (ch == "[" ? 2 : 0);
if (this.isBioSequence && ch == "["  && subPattern.indexOf$S(".") < 0  && subPattern.indexOf$S("_") < 0 ) subPattern += ".0";
currentAtom=p$1.parseAtom$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$Z$Z$Z.apply(this, [search, null, subPattern, currentAtom, bond, ch == "[", false, isBranchAtom]);
currentAtom.hasSubpattern=true;
if (bond.order != -1 && bond.order != 0 ) p$1.setBondAtom$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch.apply(this, [bond, null, currentAtom, search]);
bond=null;
break;
default:
var ch2=(!this.isBioSequence && $I$(3).isUpperCase$C(ch)  ? C$.getChar$S$I(pattern, index + 1) : "\u0000");
if (ch != "X" || ch2 != "x" ) if (!$I$(3).isLowerCase$C(ch2) || $I$(6).elementNumberFromSymbol$S$Z(pattern.substring$I$I(index, index + 2), true) == 0 ) ch2="\u0000";
if (ch2 != "\u0000" && "NA CA BA PA SC AC".indexOf$S(pattern.substring$I$I(index, index + 2)) >= 0 ) {
ch2="\u0000";
}var size=($I$(3).isUpperCase$C(ch) && $I$(3).isLowerCase$C(ch2)  ? 2 : 1);
currentAtom=p$1.parseAtom$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$Z$Z$Z.apply(this, [search, null, pattern.substring$I$I(index, index + size), currentAtom, bond, false, false, isBranchAtom]);
bond=null;
index+=size;
}
} else {
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Unexpected character: " + C$.getChar$S$I(pattern, index)]);
}ch=C$.getChar$S$I(pattern, index);
if (ch == "}" && p$1.checkBrace$org_jmol_smiles_SmilesSearch$C$C.apply(this, [search, ch, "}"]) ) index++;
}pattern=pattern.substring$I(index);
isBranchAtom=false;
}
}, p$1);

Clazz.newMeth(C$, 'parseConnection$org_jmol_smiles_SmilesSearch$I$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond', function (search, ringNum, currentAtom, bond) {
var r=Integer.valueOf$I(ringNum);
var bond0=this.connections.get$O(r);
if (bond0 == null ) {
this.connections.put$TK$TV(r, bond);
search.top.ringCount++;
return;
}this.connections.remove$O(r);
switch (bond.order) {
case -1:
bond.order=(bond0.order != -1 ? bond0.order : this.isSmarts || currentAtom.isAromatic && bond0.atom1.isAromatic   ? 81 : 1);
break;
case 1025:
bond.order=1041;
break;
case 1041:
bond.order=1025;
break;
}
if (bond0.order != -1 && bond0.order != bond.order  || currentAtom === bond0.atom1   || bond0.atom1.getBondTo$org_jmol_smiles_SmilesAtom(currentAtom) != null  ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Bad connection type or atom"]);
bond0.set$org_jmol_smiles_SmilesBond(bond);
currentAtom.bondCount--;
bond0.setAtom2$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch(currentAtom, search);
}, p$1);

Clazz.newMeth(C$, 'setBondAtom$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch', function (bond, a1, a2, search) {
bond.set2a$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom(a1, a2);
if (search != null  && bond.order == 2  && bond.atom1 != null   && bond.atom2 != null   && bond.atom1.isAromatic  && bond.atom2.isAromatic  && ((this.flags & 512) == 0) ) search.setFlags$I(this.flags=(this.flags | 512));
}, p$1);

Clazz.newMeth(C$, 'getRingNumber$S$I$C$IA', function (pattern, index, ch, ret) {
var ringNumber;
switch (ch.$c()) {
case 37:
if (C$.getChar$S$I(pattern, index + 1) == "(") {
var subPattern=C$.getSubPattern$S$I$C(pattern, index + 1, "(");
C$.getDigits$S$I$IA(subPattern, 0, ret);
index+=subPattern.length$() + 3;
if (ret[0] < 0) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid number designation: " + subPattern]);
} else {
if (index + 3 <= pattern.length$()) index=C$.getDigits$S$I$IA(pattern.substring$I$I(0, index + 3), index + 1, ret);
if (ret[0] < 10) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Two digits must follow the % sign"]);
}ringNumber=ret[0];
break;
default:
ringNumber=ch.$c() - 48;
index++;
}
ret[0]=ringNumber;
return index;
}, 1);

Clazz.newMeth(C$, 'checkBioType$S$I', function (pattern, index) {
this.isBioSequence=(pattern.charAt$I(index) == "~");
if (this.isBioSequence) {
index++;
this.bioType="*";
var ch=C$.getChar$S$I(pattern, 2);
if (ch == "~" && ((ch=pattern.charAt$I(1)) == "*" || $I$(3).isLowerCase$C(ch) ) ) {
this.bioType=ch;
index=3;
}}return index;
}, p$1);

Clazz.newMeth(C$, 'parseMeasure$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom', function (search, strMeasure, currentAtom) {
var pt=strMeasure.indexOf$S(":");
var id=(pt < 0 ? strMeasure : strMeasure.substring$I$I(0, pt));
while (pt != 0){
var len=id.length$();
if (len == 1) id += "0";
var m=this.htMeasures.get$O(id);
if ((m == null ) == (pt < 0)  || len == 0 ) break;
try {
if (pt > 0) {
var type=("__dat".indexOf$I(id.charAt$I(0)));
if (type < 2) break;
var ret=Clazz.array(Integer.TYPE, [1]);
C$.getDigits$S$I$IA(id, 1, ret);
var index=ret[0];
strMeasure=strMeasure.substring$I(pt + 1);
var isNot=strMeasure.startsWith$S("!");
if (isNot) strMeasure=strMeasure.substring$I(1);
var isNegative=(strMeasure.startsWith$S("-"));
if (isNegative) strMeasure=strMeasure.substring$I(1);
strMeasure=$I$(3).rep$S$S$S(strMeasure, "-", ",");
strMeasure=$I$(3).rep$S$S$S(strMeasure, ",,", ",-");
if (isNegative) strMeasure="-" + strMeasure;
var tokens=$I$(3).split$S$S(strMeasure, ",");
if (tokens.length % 2 == 1 || isNot && tokens.length != 2  ) break;
var vals=Clazz.array(Float.TYPE, [tokens.length]);
var i=tokens.length;
for (; --i >= 0; ) if (Float.isNaN$F(vals[i]=Float.parseFloat$S(tokens[i]))) break;

if (i >= 0) break;
m=Clazz.new_($I$(7).c$$org_jmol_smiles_SmilesSearch$I$I$Z$FA,[search, index, type, isNot, vals]);
search.measures.addLast$TV(m);
if (index > 0) this.htMeasures.put$TK$TV(id, m);
 else if (index == 0 && $I$(8).debugging ) $I$(8).debug$S("measure created: " + m);
} else {
if (!m.addPoint$I(currentAtom.index)) break;
if (m.nPoints == m.type) {
this.htMeasures.remove$O(id);
if ($I$(8).debugging) $I$(8).debug$S("measure created: " + m);
}return;
}if (!m.addPoint$I(currentAtom.index)) break;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
break;
} else {
throw e;
}
}
return;
}
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["invalid measure: " + strMeasure]);
}, p$1);

Clazz.newMeth(C$, 'checkBrace$org_jmol_smiles_SmilesSearch$C$C', function (search, ch, type) {
switch (ch.$c()) {
case 123:
if (ch != type) break;
this.braceCount++;
search.top.haveSelected=true;
return true;
case 125:
if (ch != type) break;
if (this.braceCount > 0) {
this.braceCount--;
return true;
}break;
default:
return false;
}
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Unmatched \'}\'"]);
}, p$1);

Clazz.newMeth(C$, 'parseNested$org_jmol_smiles_SmilesSearch$S$S', function (search, pattern, prefix) {
var index;
prefix="$(" + prefix;
while ((index=pattern.lastIndexOf$S(prefix)) >= 0){
var s=C$.getSubPattern$S$I$C(pattern, index + 1, "(");
var pt=index + s.length$() + 3 ;
var ext=pattern.substring$I(pt);
pattern=pattern.substring$I$I(0, index);
var op="";
if (pattern.endsWith$S("]")) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["$(...) must be enclosed in brackets: " + pattern + "$(" + s + ")" ]);
if (index > 1 && prefix.length$() == 2  && ((pt=pattern.length$()) > 1 && ",;&![".indexOf$S(pattern.substring$I(pt - 1)) < 0 ) ) op="&";
if (ext.length$() > 1 && ",;&!)]".indexOf$I(ext.charAt$I(0)) < 0 ) ext="&" + ext;
pattern=pattern + op + "_" + search.top.addNested$S(s) + "_" + ext ;
}
return pattern;
}, p$1);

Clazz.newMeth(C$, 'parseVariables$S', function (pattern) {
var keys=Clazz.new_($I$(9));
var values=Clazz.new_($I$(9));
var index;
var ipt=0;
var iptLast=-1;
if ($I$(8).debugging) $I$(8).info$S(pattern);
while ((index=pattern.indexOf$S$I("$", ipt)) >= 0){
if (C$.getChar$S$I(pattern, index + 1) == "(") break;
ipt=C$.skipTo$S$I$C(pattern, index, "=");
if (ipt <= index + 1 || C$.getChar$S$I(pattern, ipt + 1) != "\"" ) break;
var key=pattern.substring$I$I(index, ipt);
if (key.lastIndexOf$I("$") > 0 || key.indexOf$I("]") > 0 ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid variable name: " + key]);
var s=C$.getSubPattern$S$I$C(pattern, ipt + 1, "\"");
keys.addLast$TV("[" + key + "]" );
values.addLast$TV(s);
ipt+=s.length$() + 2;
ipt=C$.skipTo$S$I$C(pattern, ipt, ";");
iptLast=++ipt;
}
if (iptLast < 0) return pattern;
pattern=pattern.substring$I(iptLast);
for (var i=keys.size$(); --i >= 0; ) {
var k=keys.get$I(i);
var v=values.get$I(i);
if (!v.equals$O(k)) pattern=$I$(3).rep$S$S$S(pattern, k, v);
}
if ($I$(8).debugging) $I$(8).info$S(pattern);
return pattern;
}, p$1);

Clazz.newMeth(C$, 'parseAtom$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$Z$Z$Z', function (search, atomSet, pattern, atom, bond, isBracketed, isAND, isBranchAtom) {
if (pattern == null  || pattern.length$() == 0 ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Empty atom definition"]);
var newAtom=Clazz.new_($I$(10));
if (this.componentParenCount > 0) newAtom.component=this.componentCount;
if (atomSet == null ) search.appendAtom$org_jmol_smiles_SmilesAtom(newAtom);
var isNewAtom=true;
if (!p$1.checkLogic$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$IA.apply(this, [search, pattern, newAtom, null, atom, isAND, isBranchAtom, null])) {
var ret=Clazz.array(Integer.TYPE, [1]);
if (this.isBioSequence && pattern.length$() == 1 ) pattern += ".0";
var ch=pattern.charAt$I(0);
var index=0;
var isNot=false;
if (this.isSmarts && ch == "!" ) {
ch=C$.getChar$S$I(pattern, ++index);
if (ch == "\u0000") throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["invalid \'!\'"]);
newAtom.not=isNot=true;
}var biopt=pattern.indexOf$I(".");
if (biopt >= 0) {
newAtom.isBioResidue=true;
var resOrName=pattern.substring$I$I(index, biopt);
pattern=pattern.substring$I(biopt + 1).toUpperCase$();
var len=resOrName.length$();
if ((biopt=resOrName.indexOf$S("^")) >= 0) {
if (biopt == len - 2) {
ch=resOrName.charAt$I(len - 1);
if (ch != "*") newAtom.insCode=ch;
}resOrName=resOrName.substring$I$I(0, biopt);
}if ((biopt=resOrName.indexOf$S("#")) >= 0) {
C$.getDigits$S$I$IA(resOrName, biopt + 1, ret);
newAtom.residueNumber=ret[0];
resOrName=resOrName.substring$I$I(0, biopt);
}if (resOrName.length$() == 0) resOrName="*";
if (resOrName.length$() > 1) newAtom.residueName=resOrName.toUpperCase$();
 else if (!resOrName.equals$O("*")) newAtom.residueChar=resOrName;
resOrName=pattern;
if ((biopt=resOrName.indexOf$S("#")) >= 0) {
C$.getDigits$S$I$IA(resOrName, biopt + 1, ret);
newAtom.elementNumber=ret[0];
resOrName=resOrName.substring$I$I(0, biopt);
}if (resOrName.length$() == 0) resOrName="*";
 else if (resOrName.equals$O("0")) resOrName="\u0000";
if (resOrName.equals$O("*")) newAtom.isBioAtomWild=true;
 else newAtom.setAtomName$S(resOrName);
ch="\u0000";
}newAtom.setBioAtom$C(this.bioType);
var hydrogenCount=-2147483648;
while (ch != "\u0000" && isNewAtom ){
newAtom.setAtomName$S(this.isBioSequence ? "\u0000" : "");
if ($I$(3).isDigit$C(ch)) {
index=C$.getDigits$S$I$IA(pattern, index, ret);
var mass=ret[0];
if (mass == -2147483648) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Non numeric atomic mass"]);
if (C$.getChar$S$I(pattern, index) == "?") {
index++;
mass=-mass;
}if (newAtom.elementDefined) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["atom mass must precede atom symbol or be separated from it with \";\""]);
newAtom.setAtomicMass$I(mass);
} else {
switch (ch.$c()) {
case 34:
var type=$I$(3).getQuotedStringAt$S$I(pattern, index);
index+=type.length$() + 2;
newAtom.atomType=type;
break;
case 95:
index=C$.getDigits$S$I$IA(pattern, index + 1, ret) + 1;
if (ret[0] == -2147483648) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid SEARCH primitive: " + pattern.substring$I(index)]);
newAtom.iNested=ret[0];
if (!isBracketed) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["nesting must appear in [...]: $(" + search.getNested$I(ret[0]) + ")" ]);
if (this.isBioSequence && index != pattern.length$() ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["invalid characters: " + pattern.substring$I(index)]);
break;
case 61:
index=C$.getDigits$S$I$IA(pattern, index + 1, ret);
newAtom.jmolIndex=ret[0];
break;
case 35:
var isAtomNo=(pattern.charAt$I(index + 1) == "-");
index=C$.getDigits$S$I$IA(pattern, index + (isAtomNo ? 2 : 1), ret);
if (isAtomNo) newAtom.atomNumber=ret[0];
 else newAtom.elementNumber=ret[0];
break;
case 45:
case 43:
index=p$1.checkCharge$S$I$org_jmol_smiles_SmilesAtom.apply(this, [pattern, index, newAtom]);
break;
case 64:
if (search.stereo == null ) search.stereo=$I$(11).newStereo$org_jmol_smiles_SmilesSearch(search);
index=$I$(11).checkChirality$org_jmol_smiles_SmilesSearch$S$I$org_jmol_smiles_SmilesAtom(search, pattern, index, search.patternAtoms[newAtom.index]);
break;
case 58:
index=C$.getDigits$S$I$IA(pattern, ++index, ret);
if (ret[0] == -2147483648) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid atom class"]);
newAtom.atomClass=ret[0];
break;
default:
var nextChar=C$.getChar$S$I(pattern, index + 1);
var len=index + ($I$(3).isLowerCase$C(nextChar) && (!isBracketed || !$I$(3).isDigit$C(C$.getChar$S$I(pattern, index + 2)) )  ? 2 : 1);
var sym2=pattern.substring$I$I(index + 1, len);
var symbol=Character.toUpperCase$C(ch) + sym2;
var mustBeSymbol=true;
var checkForPrimitive=(isBracketed && $I$(3).isLetter$C(ch) );
if (checkForPrimitive) {
if (!isNot && (isAND ? atomSet : newAtom).hasSymbol ) {
mustBeSymbol=false;
} else if (ch == "H") {
mustBeSymbol=(pattern.length$() == 1 || !$I$(3).isDigit$C(nextChar) );
} else if ($I$(3).isDigit$C(nextChar)) {
mustBeSymbol=false;
} else if (!symbol.equals$O("A") && !symbol.equals$O("Xx") ) {
mustBeSymbol=((ch == "h" ? len == 2 : true) && $I$(6).elementNumberFromSymbol$S$Z(symbol, true) > 0 );
if (!mustBeSymbol && len == 2 ) {
sym2="";
symbol=symbol.substring$I$I(0, 1);
mustBeSymbol=($I$(6).elementNumberFromSymbol$S$Z(symbol, true) > 0);
}}}if (mustBeSymbol) {
if (!isBracketed && !this.isSmarts && !this.isBioSequence && !$I$(10).allowSmilesUnbracketed$S(symbol)   || !newAtom.setSymbol$S(symbol=ch + sym2) ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid atom symbol: " + symbol]);
if (isAND) atomSet.hasSymbol=true;
index+=symbol.length$();
} else {
index=C$.getDigits$S$I$IA(pattern, index + 1, ret);
var val=ret[0];
switch (ch.$c()) {
default:
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Invalid SEARCH primitive: " + pattern.substring$I(index)]);
case 68:
newAtom.setDegree$I(val == -2147483648 ? 1 : val);
break;
case 100:
newAtom.setNonhydrogenDegree$I(val == -2147483648 ? 1 : val);
break;
case 72:
hydrogenCount=(val == -2147483648 ? 1 : val);
break;
case 104:
newAtom.setImplicitHydrogenCount$I(val == -2147483648 ? -1 : val);
break;
case 82:
if (val == -2147483648) val=-1;
newAtom.setRingMembership$I(val);
search.top.needRingData=true;
break;
case 114:
if (val == -2147483648) {
val=-1;
newAtom.setRingMembership$I(val);
} else {
newAtom.setRingSize$I(val);
switch (val) {
case 500:
val=5;
break;
case 600:
val=6;
break;
}
if (val > search.ringDataMax) search.ringDataMax=val;
}search.top.needRingData=true;
break;
case 118:
newAtom.setValence$I(val == -2147483648 ? 1 : val);
break;
case 88:
newAtom.setConnectivity$I(val == -2147483648 ? 1 : val);
break;
case 120:
newAtom.setRingConnectivity$I(val == -2147483648 ? -1 : val);
search.top.needRingData=true;
break;
}
}}
}ch=C$.getChar$S$I(pattern, index);
if (isNot && ch != "\u0000" ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["\'!\' may only involve one primitive."]);
}
if (hydrogenCount == -2147483648 && isBracketed ) hydrogenCount=-2147483647;
newAtom.setExplicitHydrogenCount$I(hydrogenCount);
search.patternAtoms[newAtom.index].setExplicitHydrogenCount$I(hydrogenCount);
}if (this.braceCount > 0) newAtom.selected=true;
if (isNewAtom && atomSet != null  ) atomSet.addSubAtom$org_jmol_smiles_SmilesAtom$Z(newAtom, isAND);
if (atom != null  && bond.order == 0 ) {
newAtom.notBondedIndex=atom.index;
}if (atom != null  && bond.order != 0 ) {
if (bond.order == -1) bond.order=(this.isBioSequence && isBranchAtom  ? 112 : this.isSmarts || atom.isAromatic && newAtom.isAromatic   ? 81 : 1);
if (!isBracketed) p$1.setBondAtom$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch.apply(this, [bond, null, newAtom, search]);
if (this.branchLevel == 0 && (bond.order == 17 || bond.order == 112 ) ) this.branchLevel++;
}if (this.branchLevel == 0) search.lastChainAtom=newAtom;
return newAtom;
}, p$1);

Clazz.newMeth(C$, 'checkCharge$S$I$org_jmol_smiles_SmilesAtom', function (pattern, index, newAtom) {
var len=pattern.length$();
var ch=pattern.charAt$I(index);
var count=1;
++index;
if (index < len) {
var nextChar=pattern.charAt$I(index);
if ($I$(3).isDigit$C(nextChar)) {
var ret=Clazz.array(Integer.TYPE, [1]);
index=C$.getDigits$S$I$IA(pattern, index, ret);
count=ret[0];
if (count == -2147483648) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Non numeric charge"]);
} else {
while (index < len && pattern.charAt$I(index) == ch ){
index++;
count++;
}
}}newAtom.setCharge$I(ch == "+" ? count : -count);
return index;
}, p$1);

Clazz.newMeth(C$, 'parseBond$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesBond$S$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$I$IA', function (search, bondSet, pattern, bond, currentAtom, isAND, isBranchAtom, len, ret) {
var ch;
if (len > 0) {
switch ((ch=pattern.charAt$I(0)).$c()) {
case 62:
if (!pattern.equals$O(">>")) {
len=-1;
break;
}case 46:
if (bond == null  && bondSet == null  ) {
this.isBioSequence=(C$.getChar$S$I(pattern, 1) == "~");
return Clazz.new_($I$(5).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[null, null, 0, false]);
}len=-1;
break;
case 43:
if (bondSet != null ) len=-1;
break;
}
} else {
ch="\u0000";
}var newBond=(bondSet == null  ? (bond == null  ? Clazz.new_($I$(5).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[currentAtom, null, (this.isBioSequence && currentAtom != null   ? (isBranchAtom ? 112 : 96) : -1), false]) : bond) : isAND ? bondSet.addPrimitive$() : bondSet.addBondOr$());
if (len > 0 && !p$1.checkLogic$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$IA.apply(this, [search, pattern, null, newBond, currentAtom, isAND, false, ret]) ) {
var isBondNot=(ch == "!");
if (isBondNot) {
ch=C$.getChar$S$I(pattern, 1);
if (ch == "\u0000" || ch == "!" ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["invalid \'!\'"]);
}var bondType=$I$(5).getBondTypeFromCode$C(ch);
if (bondType == 65) search.top.needRingMemberships=true;
if (currentAtom == null  && bondType != 0 ) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Bond without a previous atom"]);
switch (bondType) {
case 65537:
case 65538:
if ((len=pattern.length$()) < (isBondNot ? 3 : 2) || pattern.charAt$I(len - 1) != "-" ) {
len=0;
} else {
if (len == (isBondNot ? 3 : 2)) {
newBond.setAtropType$I(22);
} else {
C$.getDigits$S$I$IA(pattern, (isBondNot ? 2 : 1), ret);
newBond.setAtropType$I(ret[0]);
}}search.haveBondStereochemistry=true;
break;
case 1025:
case 1041:
this.bondDirectionPaired=!this.bondDirectionPaired;
search.haveBondStereochemistry=true;
break;
case 17:
break;
case 2:
search.top.nDouble++;
case 1:
if (currentAtom.isAromatic) search.top.needRingData=true;
break;
}
newBond.set2$I$Z(bondType, isBondNot);
if (this.isBioSequence && bondSet != null  ) bondSet.set2$I$Z(bondType, isBondNot);
}if (len == -1) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["invalid bond:" + ch]);
return newBond;
}, p$1);

Clazz.newMeth(C$, 'checkLogic$org_jmol_smiles_SmilesSearch$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$IA', function (search, pattern, atom, bond, currentAtom, isAND, isBranchAtom, ret) {
var pt=pattern.lastIndexOf$S("!");
if (atom != null ) atom.pattern=pattern;
while (pt > 0){
if (",;&!".indexOf$I(pattern.charAt$I(pt - 1)) < 0) pattern=pattern.substring$I$I(0, pt) + "&" + pattern.substring$I(pt) ;
pt=pattern.lastIndexOf$S$I("!", pt - 1);
}
pt=pattern.indexOf$I(",");
var len=pattern.length$();
var and="&";
 out : while (true){
var haveOr=(pt > 0);
if (haveOr && !this.isSmarts  || pt == 0 ) break;
pt=pattern.indexOf$I(";");
if (pt >= 0) {
if (!this.isSmarts || pt == 0 ) break;
if (haveOr) {
and=";";
haveOr=false;
} else {
pattern=pattern.replace$C$C(";", "&");
}}var index=0;
if (haveOr) {
pattern += ",";
while ((pt=pattern.indexOf$I$I(",", index)) > 0 && pt <= len ){
var s=pattern.substring$I$I(index, pt);
if (s.length$() == 0) throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["missing " + (bond == null  ? "atom" : "bond") + " token" ]);
if (bond == null ) p$1.parseAtom$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$Z$Z$Z.apply(this, [search, atom, s, null, null, true, false, isBranchAtom]);
 else p$1.parseBond$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesBond$S$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$I$IA.apply(this, [search, bond, s, null, currentAtom, false, false, s.length$(), ret]);
index=pt + 1;
}
} else if ((pt=pattern.indexOf$S(and)) >= 0 || bond != null  && len > 1  && !isAND  ) {
if (pt == 0 || bond == null  && !this.isSmarts  ) break;
if (bond != null  && pt < 0 ) {
if (len > 1) {
var sNew=Clazz.new_($I$(4));
for (var i=0; i < len; ) {
var ch=pattern.charAt$I(i++);
sNew.appendC$C(ch);
switch (ch.$c()) {
case 33:
if (!this.isSmarts) break out;
continue;
case 94:
case 96:
while ((ch=pattern.charAt$I(i++)) != "-" && ch != "\u0000" ){
sNew.appendC$C(ch);
}
sNew.appendC$C("-");
break;
}
if (i < len) {
if (!this.isSmarts) break out;
sNew.append$S(and);
}}
pattern=sNew.toString();
len=pattern.length$();
}}pattern += and;
while ((pt=pattern.indexOf$S$I(and, index)) > 0 && pt <= len ){
var s=pattern.substring$I$I(index, pt);
if (bond == null ) p$1.parseAtom$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom$S$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesBond$Z$Z$Z.apply(this, [search, atom, s, null, null, true, true, isBranchAtom]);
 else p$1.parseBond$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesBond$S$org_jmol_smiles_SmilesBond$org_jmol_smiles_SmilesAtom$Z$Z$I$IA.apply(this, [search, this.isSmarts ? bond : null, s, this.isSmarts ? null : bond, currentAtom, true, false, s.length$(), ret]);
index=pt + 1;
}
} else {
return false;
}return true;
}
var ch=pattern.charAt$I(pt);
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,[(this.isSmarts ? "invalid placement for '" + ch + "'"  : "[" + ch + "] notation only valid with SMARTS, not SMILES," ) + " in " + pattern ]);
}, p$1);

Clazz.newMeth(C$, 'getSubPattern$S$I$C', function (pattern, index, ch) {
var ch2;
var margin=1;
switch (ch.$c()) {
case 91:
ch2="]";
break;
case 34:
case 37:
case 47:
ch2=ch;
break;
case 40:
ch2=")";
break;
default:
ch2=ch;
margin=0;
}
var len=pattern.length$();
var pCount=1;
for (var pt=index + 1; pt < len; pt++) {
var ch1=pattern.charAt$I(pt);
if (ch1 == ch2) {
pCount--;
if (pCount == 0) return pattern.substring$I$I(index + margin, pt + 1 - margin);
} else if (ch1 == ch) {
pCount++;
}}
throw Clazz.new_(Clazz.load('org.jmol.smiles.InvalidSmilesException').c$$S,["Unmatched " + ch]);
}, 1);

Clazz.newMeth(C$, 'getChar$S$I', function (pattern, i) {
return (i < pattern.length$() ? pattern.charAt$I(i) : "\u0000");
}, 1);

Clazz.newMeth(C$, 'getDigits$S$I$IA', function (pattern, index, ret) {
var pt=index;
var len=pattern.length$();
while (pt < len && $I$(3).isDigit$C(pattern.charAt$I(pt)) )pt++;

if (pt > index) try {
ret[0]=Integer.parseInt$S(pattern.substring$I$I(index, pt));
return pt;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
ret[0]=-2147483648;
return pt;
}, 1);

Clazz.newMeth(C$, 'skipTo$S$I$C', function (pattern, index, ch0) {
var pt=index;
var ch;
while ((ch=C$.getChar$S$I(pattern, ++pt)) != ch0 && ch != "\u0000" ){
}
return (ch == "\u0000" ? -1 : pt);
}, 1);

Clazz.newMeth(C$, 'cleanPattern$S', function (pattern) {
pattern=$I$(3).replaceAllCharacters$S$S$S(pattern, " \t\n\r", "");
pattern=$I$(3).rep$S$S$S(pattern, "^^", "`");
var i=0;
var i2=0;
while ((i=pattern.indexOf$S("//*")) >= 0 && (i2=pattern.indexOf$S("*//")) >= i )pattern=pattern.substring$I$I(0, i) + pattern.substring$I(i2 + 3);

pattern=$I$(3).rep$S$S$S(pattern, "//", "");
return pattern;
}, 1);

Clazz.newMeth(C$, 'extractFlags$S$IA', function (pattern, ret) {
pattern=C$.cleanPattern$S(pattern);
var flags=0;
while (pattern.startsWith$S("/")){
var strFlags=C$.getSubPattern$S$I$C(pattern, 0, "/").toUpperCase$();
pattern=pattern.substring$I(strFlags.length$() + 2);
flags=$I$(2).addFlags$I$S(flags, strFlags);
}
ret[0]=flags;
return pattern;
}, 1);

Clazz.newMeth(C$, 'getFlags$S', function (pattern) {
var ret=Clazz.array(Integer.TYPE, [1]);
C$.extractFlags$S$IA(pattern, ret);
return ret[0];
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
