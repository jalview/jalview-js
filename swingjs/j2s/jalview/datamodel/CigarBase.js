(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'StringBuffer','Error','jalview.util.MessageManager','java.util.Vector']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CigarBase");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.length=0;
this._inc_length=10;
this.operation=null;
this.range=null;
},1);

C$.$fields$=[['I',['length','_inc_length'],'O',['operation','char[]','range','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSequenceAndDeletions$S$C', function (reference, GapChar) {
var rlength=0;
var deletions=Clazz.array(Integer.TYPE, [this.length, null]);
var trunc_deletions=null;
var sq=Clazz.new_($I$(1,1));
var cursor=0;
var alcursor=0;
var start=0;
var startpos=0;
var end=0;
var endpos=0;
var delcount=-1;
var consecutive_del=false;
if (this.length == 0) {
return null;
}if (reference != null ) {
rlength=reference.length$();
}var modstart=true;
for (var i=0; i < this.length; i++) {
switch ((this.operation[i]).$c()) {
case 68:
if (!consecutive_del) {
deletions[++delcount]=Clazz.array(Integer.TYPE, -1, [cursor, 0, alcursor]);
}cursor+=this.range[i];
deletions[delcount][1]=cursor - 1;
consecutive_del=true;
break;
case 73:
consecutive_del=false;
for (var r=0; r < this.range[i]; r++) {
sq.append$C(GapChar);
alcursor++;
}
break;
case 77:
consecutive_del=false;
if (modstart) {
start=cursor;
startpos=alcursor;
modstart=false;
}if (reference != null ) {
var sbend=cursor + this.range[i];
if (sbend > rlength) {
sq.append$S(reference.substring$I$I(cursor, rlength));
while (sbend-- >= rlength){
sq.append$C(GapChar);
}
} else {
sq.append$S(reference.substring$I$I(cursor, sbend));
}}alcursor+=this.range[i];
cursor+=this.range[i];
end=cursor - 1;
endpos=alcursor;
break;
default:
throw Clazz.new_([$I$(3,"formatMessage$S$SA",["error.unknown_seq_cigar_operation", Clazz.array(String, -1, [Clazz.new_([this.operation[i].$c()],$I$(1,1).c$$I).toString()])])],$I$(2,1).c$$S);
}
}
if (++delcount > 0) {
trunc_deletions=Clazz.array(Integer.TYPE, [delcount, null]);
System.arraycopy$O$I$O$I$I(deletions, 0, trunc_deletions, 0, delcount);
}deletions=null;
return Clazz.array(java.lang.Object, -1, [((reference != null ) ? sq.toString() : null), Clazz.array(Integer.TYPE, -1, [start, startpos, end, endpos]), trunc_deletions]);
});

Clazz.newMeth(C$, 'compact_operations$', function () {
var i=1;
if (this.operation == null ) {
return;
}var last=this.operation[0];
while (i < this.length){
if (last == this.operation[i]) {
this.range[i - 1]+=this.range[i];
var r=this.length - i;
if (r > 0) {
System.arraycopy$O$I$O$I$I(this.range, i + 1, this.range, i, r);
System.arraycopy$O$I$O$I$I(this.operation, i + 1, this.operation, i, r);
}this.length--;
} else {
last=this.operation[i++];
}}
});

Clazz.newMeth(C$, 'parseCigarString$S', function (cigarString) {
var ops=0;
for (var i=0, l=cigarString.length$(); i < l; i++) {
var c=cigarString.charAt$I(i);
if (c == "M" || c.$c() == (45)   || c == "I"  || c.$c() == (41)   || c == "D"  || c.$c() == (36)  ) {
ops++;
}}
var operation=Clazz.array(Character.TYPE, [ops]);
var range=Clazz.array(Integer.TYPE, [ops]);
var op=0;
var i=0;
var l=cigarString.length$();
while (i < l){
var c;
var j=i;
do {
c=cigarString.charAt$I(j++);
} while (c >= "0" && c <= "9"  && j < l );
if (j >= l && c >= "0"  && c <= "9" ) {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(3).getString$S("exception.unterminated_cigar_string")]);
}try {
var rangeint=cigarString.substring$I$I(i, j - 1);
range[op]=Integer.parseInt$S(rangeint);
i=j;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_([$I$(3).getString$S("error.implementation_bug_parse_cigar_string")],$I$(2,1).c$$S);
} else {
throw e;
}
}
if (c >= "a" && c <= "z" ) {
c = String.fromCharCode(c.$c()- 32);
}if ((c == "M" || c == "I"  || c == "D" )) {
operation[op++]=c;
} else {
throw Clazz.new_(Clazz.load('Exception').c$$S,[$I$(3,"formatMessage$S$SA",["exception.unexpected_operation_cigar_string_pos", Clazz.array(String, -1, [Clazz.new_([c.$c()],$I$(1,1).c$$I).toString(), Integer.valueOf$I(i).toString(), cigarString])])]);
}}
return Clazz.array(java.lang.Object, -1, [operation, range]);
}, 1);

Clazz.newMeth(C$, 'addOperation$C$I', function (op, range) {
if (op >= "a" && op <= "z" ) {
op = String.fromCharCode(op.$c()- 32);
}if (op != "M" && op != "D"  && op != "I" ) {
throw Clazz.new_([$I$(3).getString$S("error.implementation_error_invalid_operation_string")],$I$(2,1).c$$S);
}if (range == 0) {
return;
}if (range < 0) {
throw Clazz.new_([$I$(3).getString$S("error.invalid_range_string")],$I$(2,1).c$$S);
}var lngth=0;
if (this.operation == null ) {
this.operation=Clazz.array(Character.TYPE, [this._inc_length]);
this.range=Clazz.array(Integer.TYPE, [this._inc_length]);
}if (this.length + 1 == this.operation.length) {
var ops=this.operation;
this.operation=Clazz.array(Character.TYPE, [this.length + 1 + this._inc_length ]);
System.arraycopy$O$I$O$I$I(ops, 0, this.operation, 0, this.length);
ops=null;
var rng=this.range;
this.range=Clazz.array(Integer.TYPE, [this.length + 1 + this._inc_length ]);
System.arraycopy$O$I$O$I$I(rng, 0, this.range, 0, this.length);
rng=null;
}if ((this.length > 0) && (this.operation[this.length - 1] == op) ) {
this.length--;
} else {
this.range[this.length]=0;
}this.operation[this.length]=op;
this.range[this.length++]+=range;
});

Clazz.newMeth(C$, 'deleteRange$I$I', function (start, end) {
var deleted=0;
if (this.length == 0) {
return deleted;
}if (start < 0 || start > end ) {
throw Clazz.new_([$I$(3).getString$S("error.implementation_error_delete_range_out_of_bounds")],$I$(2,1).c$$S);
}var cursor=0;
var rlength=1 + end - start;
var oldlen=this.length;
var o=0;
var editing=false;
var oldops=this.operation;
var oldrange=this.range;
this.length=0;
this.operation=null;
this.range=null;
this.compact_operations$();
while (o < oldlen && cursor <= end  && rlength > 0 ){
if (oldops[o] == "D") {
this.addDeleted$I(oldrange[o++]);
continue;
}var remain=oldrange[o];
if (!editing) {
if ((cursor + remain) <= start) {
this.addOperation$C$I(oldops[o], oldrange[o]);
cursor+=oldrange[o++];
continue;
}editing=true;
if (start - cursor > 0) {
this.addOperation$C$I(oldops[o], start - cursor);
remain-=start - cursor;
}}if (o < oldlen && editing  && rlength > 0  && remain > 0 ) {
switch ((oldops[o]).$c()) {
case 77:
if (rlength > remain) {
this.addDeleted$I(remain);
deleted+=remain;
} else {
deleted+=rlength;
this.addDeleted$I(rlength);
if (remain - rlength > 0) {
this.addOperation$C$I("M", remain - rlength);
}rlength=0;
remain=0;
}break;
case 73:
if (remain - rlength > 0) {
this.addInsertion$I(remain - rlength);
rlength=0;
}break;
case 68:
throw Clazz.new_([$I$(3).getString$S("error.implementation_error")],$I$(2,1).c$$S);
default:
throw Clazz.new_([$I$(3,"formatMessage$S$SA",["error.implementation_error_unknown_operation", Clazz.array(String, -1, [Clazz.new_([oldops[o].$c()],$I$(1,1).c$$I).toString()])])],$I$(2,1).c$$S);
}
rlength-=remain;
remain=oldrange[++o];
}}
while (o < oldlen){
this.addOperation$C$I(oldops[o], oldrange[o++]);
}
return deleted;
});

Clazz.newMeth(C$, 'hasDeletedRegions$', function () {
for (var i=0; i < this.length; i++) {
if (this.operation[i] == "D") {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getDeletedRegions$', function () {
if (this.length == 0) {
return null;
}var dr=Clazz.new_($I$(4,1));
var cursor=0;
var vcursor=0;
for (var i=0; i < this.length; i++) {
switch ((this.operation[i]).$c()) {
case 77:
cursor+=this.range[i];
break;
case 73:
vcursor+=this.range[i];
break;
case 68:
dr.addElement$O(Clazz.array(Integer.TYPE, -1, [vcursor, cursor, this.range[i]]));
cursor+=this.range[i];
}
}
if (dr.size$() == 0) {
return null;
}var delregions=Clazz.array(Integer.TYPE, [dr.size$() * 3]);
for (var i=0, l=dr.size$(); i < l; i++) {
var reg=dr.elementAt$I(i);
delregions[i * 3]=reg[0];
delregions[i * 3 + 1]=reg[1];
delregions[i * 3 + 2]=reg[2];
}
return delregions;
});

Clazz.newMeth(C$, 'getFullWidth$', function () {
var w=0;
if (this.range != null ) {
for (var i=0; i < this.length; i++) {
w+=this.range[i];
}
}return w;
});

Clazz.newMeth(C$, 'getWidth$', function () {
var w=0;
if (this.range != null ) {
for (var i=0; i < this.length; i++) {
if (this.operation[i] == "M" || this.operation[i] == "I" ) {
w+=this.range[i];
}}
}return w;
});

Clazz.newMeth(C$, 'addInsertion$I', function (range) {
this.addOperation$C$I("I", range);
});

Clazz.newMeth(C$, 'addDeleted$I', function (range) {
this.addOperation$C$I("D", range);
});

Clazz.newMeth(C$, 'getCigarstring$', function () {
var cigarString=Clazz.new_($I$(1,1));
for (var i=0; i < this.length; i++) {
cigarString.append$S("" + this.range[i]);
cigarString.append$C(this.operation[i]);
}
return cigarString.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
