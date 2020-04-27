(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.util.Comparison','jalview.util.SparseCount','StringBuilder',['jalview.datamodel.ResidueCount','.SymbolCounts'],'jalview.util.QuickSort','jalview.util.Format']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ResidueCount", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SymbolCounts',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['useIntCounts','isNucleotide'],'I',['maxCount'],'O',['counts','short[]','intCounts','int[]','otherData','jalview.util.SparseCount']]
,['O',['NUC_INDEX','int[]','+AA_INDEX']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (nucleotide) {
;C$.$init$.apply(this);
this.isNucleotide=nucleotide;
var charsToCount=nucleotide ? "ACGNTU".length$() : "ACDEFGHIKLMNPQRSTUVWXY".length$();
this.counts=Clazz.array(Short.TYPE, [charsToCount + 1]);
}, 1);

Clazz.newMeth(C$, 'add$C', function (c) {
var u=this.toUpperCase$C(c);
var newValue=0;
var offset=this.getOffset$C(u);
if (offset == 0) {
if ($I$(1).isGap$C(u)) {
newValue=this.addGap$();
} else {
newValue=this.addOtherCharacter$C(u);
}} else {
newValue=this.increment$I(offset);
}return newValue;
});

Clazz.newMeth(C$, 'increment$I', function (offset) {
var newValue=0;
if (this.useIntCounts) {
newValue=this.intCounts[offset];
this.intCounts[offset]=++newValue;
} else {
if (this.counts[offset] == 32767) {
this.handleOverflow$();
newValue=this.intCounts[offset];
this.intCounts[offset]=++newValue;
} else {
newValue=this.counts[offset];
this.counts[offset]=(++newValue|0);
}}this.maxCount=Math.max(this.maxCount, newValue);
return newValue;
});

Clazz.newMeth(C$, 'handleOverflow$', function () {
this.intCounts=Clazz.array(Integer.TYPE, [this.counts.length]);
for (var i=0; i < this.counts.length; i++) {
this.intCounts[i]=this.counts[i];
}
this.counts=null;
this.useIntCounts=true;
});

Clazz.newMeth(C$, 'getOffset$C', function (c) {
var offset=0;
if ("A" <= c && c <= "Z" ) {
offset=this.isNucleotide ? C$.NUC_INDEX[c.$c() - 65] : C$.AA_INDEX[c.$c() - 65];
}return offset;
});

Clazz.newMeth(C$, 'toUpperCase$C', function (c) {
var u=c;
if ("a" <= c && c <= "z" ) {
u=String.fromCharCode((c.$c() + -32));
}return u;
});

Clazz.newMeth(C$, 'addOtherCharacter$C', function (c) {
if (this.otherData == null ) {
this.otherData=Clazz.new_($I$(2,1));
}var newValue=this.otherData.add$I$I(c.$c(), 1);
this.maxCount=Math.max(this.maxCount, newValue);
return newValue;
});

Clazz.newMeth(C$, 'setOtherCharacter$C$I', function (c, value) {
if (this.otherData == null ) {
this.otherData=Clazz.new_($I$(2,1));
}this.otherData.put$I$I(c.$c(), value);
});

Clazz.newMeth(C$, 'addGap$', function () {
var newValue;
if (this.useIntCounts) {
newValue=++this.intCounts[0];
} else {
newValue=(($s$[0]=++this.counts[0],this.counts[0]=$s$[0],$s$[0]));
}return newValue;
});

Clazz.newMeth(C$, 'isCountingInts$', function () {
return this.useIntCounts;
});

Clazz.newMeth(C$, 'put$C$I', function (c, count) {
var u=this.toUpperCase$C(c);
var offset=this.getOffset$C(u);
if (offset == 0) {
if ($I$(1).isGap$C(u)) {
this.set$I$I(0, count);
} else {
this.setOtherCharacter$C$I(u, count);
this.maxCount=Math.max(this.maxCount, count);
}} else {
this.set$I$I(offset, count);
this.maxCount=Math.max(this.maxCount, count);
}});

Clazz.newMeth(C$, 'set$I$I', function (offset, value) {
if (this.useIntCounts) {
this.intCounts[offset]=value;
} else {
if (value > 32767 || value < -32768 ) {
this.handleOverflow$();
this.intCounts[offset]=value;
} else {
this.counts[offset]=(value|0);
}}});

Clazz.newMeth(C$, 'getCount$C', function (c) {
var u=this.toUpperCase$C(c);
var offset=this.getOffset$C(u);
if (offset == 0) {
if (!$I$(1).isGap$C(u)) {
return this.otherData == null  ? 0 : this.otherData.get$I(u.$c());
}}return this.useIntCounts ? this.intCounts[offset] : this.counts[offset];
});

Clazz.newMeth(C$, 'getGapCount$', function () {
return this.useIntCounts ? this.intCounts[0] : this.counts[0];
});

Clazz.newMeth(C$, 'isUsingOtherData$', function () {
return this.otherData != null ;
});

Clazz.newMeth(C$, 'getResiduesForCount$I', function (count) {
if (count == 0) {
return "";
}var modal=Clazz.new_($I$(3,1));
if (this.useIntCounts) {
for (var i=1; i < this.intCounts.length; i++) {
if (this.intCounts[i] == count) {
modal.append$C(this.isNucleotide ? "ACGNTU".charAt$I(i - 1) : "ACDEFGHIKLMNPQRSTUVWXY".charAt$I(i - 1));
}}
} else {
for (var i=1; i < this.counts.length; i++) {
if (this.counts[i] == count) {
modal.append$C(this.isNucleotide ? "ACGNTU".charAt$I(i - 1) : "ACDEFGHIKLMNPQRSTUVWXY".charAt$I(i - 1));
}}
}if (this.otherData != null ) {
for (var i=0; i < this.otherData.size$(); i++) {
if (this.otherData.valueAt$I(i) == count) {
modal.append$C(String.fromCharCode(this.otherData.keyAt$I(i)));
}}
}return modal.toString();
});

Clazz.newMeth(C$, 'getModalCount$', function () {
return this.maxCount;
});

Clazz.newMeth(C$, 'size$', function () {
var size=0;
if (this.useIntCounts) {
for (var i=1; i < this.intCounts.length; i++) {
if (this.intCounts[i] > 0) {
size++;
}}
} else {
for (var i=1; i < this.counts.length; i++) {
if (this.counts[i] > 0) {
size++;
}}
}if (this.otherData != null ) {
size+=this.otherData.size$();
}return size;
});

Clazz.newMeth(C$, 'getSymbolCounts$', function () {
var size=this.size$();
var symbols=Clazz.array(Character.TYPE, [size]);
var values=Clazz.array(Integer.TYPE, [size]);
var j=0;
if (this.useIntCounts) {
for (var i=1; i < this.intCounts.length; i++) {
if (this.intCounts[i] > 0) {
var symbol=this.isNucleotide ? "ACGNTU".charAt$I(i - 1) : "ACDEFGHIKLMNPQRSTUVWXY".charAt$I(i - 1);
symbols[j]=symbol;
values[j]=this.intCounts[i];
j++;
}}
} else {
for (var i=1; i < this.counts.length; i++) {
if (this.counts[i] > 0) {
var symbol=this.isNucleotide ? "ACGNTU".charAt$I(i - 1) : "ACDEFGHIKLMNPQRSTUVWXY".charAt$I(i - 1);
symbols[j]=symbol;
values[j]=this.counts[i];
j++;
}}
}if (this.otherData != null ) {
for (var i=0; i < this.otherData.size$(); i++) {
symbols[j]=String.fromCharCode(this.otherData.keyAt$I(i));
values[j]=this.otherData.valueAt$I(i);
j++;
}
}return Clazz.new_($I$(4,1).c$$CA$IA,[this, null, symbols, values]);
});

Clazz.newMeth(C$, 'getTooltip$I$I', function (normaliseBy, percentageDecPl) {
var symbolCounts=this.getSymbolCounts$();
var ca=symbolCounts.symbols;
var vl=symbolCounts.values;
$I$(5).sort$IA$CA(vl, ca);
var first=true;
var sb=Clazz.new_($I$(3,1).c$$I,[64]);
for (var c=ca.length - 1; c >= 0; c--) {
var residue=ca[c];
var tval=(vl[c] * 100.0) / normaliseBy;
sb.append$S(first ? "" : "; ").append$C(residue).append$S(" ");
$I$(6).appendPercentage$StringBuilder$F$I(sb, tval, percentageDecPl);
sb.append$S("%");
first=false;
}
return sb.toString();
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(3,1));
sb.append$S("[ ");
var sc=this.getSymbolCounts$();
for (var i=0; i < sc.symbols.length; i++) {
sb.append$C(sc.symbols[i]).append$S(":").append$I(sc.values[i]).append$S(" ");
}
sb.append$S("]");
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.NUC_INDEX=Clazz.array(Integer.TYPE, [26]);
C$.AA_INDEX=Clazz.array(Integer.TYPE, [26]);
{
for (var i=0; i < "ACGNTU".length$(); i++) {
C$.NUC_INDEX[("ACGNTU".charCodeAt$I(i)) - 65]=i + 1;
}
for (var i=0; i < "ACDEFGHIKLMNPQRSTUVWXY".length$(); i++) {
C$.AA_INDEX[("ACDEFGHIKLMNPQRSTUVWXY".charCodeAt$I(i)) - 65]=i + 1;
}
};
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ResidueCount, "SymbolCounts", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['symbols','char[]','values','int[]']]]

Clazz.newMeth(C$, 'c$$CA$IA', function (s, v) {
;C$.$init$.apply(this);
this.symbols=s;
this.values=v;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
