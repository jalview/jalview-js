(function(){var P$=Clazz.newPackage("jalview.util"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Arrays','StringBuilder','jalview.util.MathUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MapList");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fromShifts=null;
this.toShifts=null;
this.fromRatio=0;
this.toRatio=0;
this.fromLowest=0;
this.fromHighest=0;
this.toLowest=0;
this.toHighest=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.fromShifts=Clazz.new_($I$(1));
this.toShifts=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o == null  || !(Clazz.instanceOf(o, "jalview.util.MapList")) ) {
return false;
}var obj=o;
if (obj === this ) {
return true;
}if (obj.fromRatio != this.fromRatio || obj.toRatio != this.toRatio  || obj.fromShifts == null   || obj.toShifts == null  ) {
return false;
}return $I$(2).deepEquals$OA$OA(this.fromShifts.toArray$(), obj.fromShifts.toArray$()) && $I$(2).deepEquals$OA$OA(this.toShifts.toArray$(), obj.toShifts.toArray$()) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hashCode=31 * this.fromRatio;
hashCode=31 * hashCode + this.toRatio;
for (var shift, $shift = this.fromShifts.iterator$(); $shift.hasNext$()&&((shift=($shift.next$())),1);) {
hashCode=31 * hashCode + shift[0];
hashCode=31 * hashCode + shift[1];
}
for (var shift, $shift = this.toShifts.iterator$(); $shift.hasNext$()&&((shift=($shift.next$())),1);) {
hashCode=31 * hashCode + shift[0];
hashCode=31 * hashCode + shift[1];
}
return hashCode;
});

Clazz.newMeth(C$, 'getFromRanges$', function () {
return this.fromShifts;
});

Clazz.newMeth(C$, 'getToRanges$', function () {
return this.toShifts;
});

Clazz.newMeth(C$, 'getRanges$java_util_List', function (shifts) {
var rnges=Clazz.array(Integer.TYPE, [2 * shifts.size$()]);
var i=0;
for (var r, $r = shifts.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
rnges[i++]=r[0];
rnges[i++]=r[1];
}
return rnges;
}, 1);

Clazz.newMeth(C$, 'getFromRatio$', function () {
return this.fromRatio;
});

Clazz.newMeth(C$, 'getToRatio$', function () {
return this.toRatio;
});

Clazz.newMeth(C$, 'getFromLowest$', function () {
return this.fromLowest;
});

Clazz.newMeth(C$, 'getFromHighest$', function () {
return this.fromHighest;
});

Clazz.newMeth(C$, 'getToLowest$', function () {
return this.toLowest;
});

Clazz.newMeth(C$, 'getToHighest$', function () {
return this.toHighest;
});

Clazz.newMeth(C$, 'c$$IA$IA$I$I', function (from, to, fromRatio, toRatio) {
C$.c$.apply(this, []);
this.fromRatio=fromRatio;
this.toRatio=toRatio;
this.fromLowest=2147483647;
this.fromHighest=-2147483648;
var added=0;
for (var i=0; i < from.length; i+=2) {
this.fromLowest=Math.min(this.fromLowest, Math.min(from[i], from[i + 1]));
this.fromHighest=Math.max(this.fromHighest, Math.max(from[i], from[i + 1]));
if (added > 0 && from[i] == this.fromShifts.get$I(added - 1)[1] ) {
this.fromShifts.get$I(added - 1)[1]=from[i + 1];
} else {
this.fromShifts.add$TE(Clazz.array(Integer.TYPE, -1, [from[i], from[i + 1]]));
added++;
}}
this.toLowest=2147483647;
this.toHighest=-2147483648;
added=0;
for (var i=0; i < to.length; i+=2) {
this.toLowest=Math.min(this.toLowest, Math.min(to[i], to[i + 1]));
this.toHighest=Math.max(this.toHighest, Math.max(to[i], to[i + 1]));
if (added > 0 && to[i] == this.toShifts.get$I(added - 1)[1] ) {
this.toShifts.get$I(added - 1)[1]=to[i + 1];
} else {
this.toShifts.add$TE(Clazz.array(Integer.TYPE, -1, [to[i], to[i + 1]]));
added++;
}}
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_MapList', function (map) {
C$.c$.apply(this, []);
this.fromLowest=map.fromLowest;
this.fromHighest=map.fromHighest;
this.toLowest=map.toLowest;
this.toHighest=map.toHighest;
this.fromRatio=map.fromRatio;
this.toRatio=map.toRatio;
if (map.fromShifts != null ) {
for (var r, $r = map.fromShifts.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
this.fromShifts.add$TE(Clazz.array(Integer.TYPE, -1, [r[0], r[1]]));
}
}if (map.toShifts != null ) {
for (var r, $r = map.toShifts.iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
this.toShifts.add$TE(Clazz.array(Integer.TYPE, -1, [r[0], r[1]]));
}
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$java_util_List$I$I', function (fromRange, toRange, fromRatio, toRatio) {
C$.c$.apply(this, []);
fromRange=C$.coalesceRanges$java_util_List(fromRange);
toRange=C$.coalesceRanges$java_util_List(toRange);
this.fromShifts=fromRange;
this.toShifts=toRange;
this.fromRatio=fromRatio;
this.toRatio=toRatio;
this.fromLowest=2147483647;
this.fromHighest=-2147483648;
for (var range, $range = fromRange.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (range.length != 2) {
System.err.println$S("Invalid format for fromRange " + $I$(2).toString$IA(range) + " may cause errors" );
}this.fromLowest=Math.min(this.fromLowest, Math.min(range[0], range[1]));
this.fromHighest=Math.max(this.fromHighest, Math.max(range[0], range[1]));
}
this.toLowest=2147483647;
this.toHighest=-2147483648;
for (var range, $range = toRange.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (range.length != 2) {
System.err.println$S("Invalid format for toRange " + $I$(2).toString$IA(range) + " may cause errors" );
}this.toLowest=Math.min(this.toLowest, Math.min(range[0], range[1]));
this.toHighest=Math.max(this.toHighest, Math.max(range[0], range[1]));
}
}, 1);

Clazz.newMeth(C$, 'coalesceRanges$java_util_List', function (ranges) {
if (ranges == null  || ranges.size$() < 2 ) {
return ranges;
}var changed=false;
var merged=Clazz.new_($I$(1));
var lastRange=ranges.get$I(0);
var lastDirection=lastRange[1] >= lastRange[0] ? 1 : -1;
lastRange=Clazz.array(Integer.TYPE, -1, [lastRange[0], lastRange[1]]);
merged.add$TE(lastRange);
var first=true;
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (first) {
first=false;
continue;
}if (range[0] == lastRange[0] && range[1] == lastRange[1] ) {
changed=true;
continue;
}if ((lastDirection == 1 && range[0] >= lastRange[0]  && range[0] <= lastRange[1]  && range[1] >= lastRange[0]  && range[1] <= lastRange[1] ) || (lastDirection == -1 && range[0] <= lastRange[0]  && range[0] >= lastRange[1]  && range[1] <= lastRange[0]  && range[1] >= lastRange[1] ) ) {
changed=true;
continue;
}var direction=range[1] >= range[0] ? 1 : -1;
var sameDirection=range[1] == range[0] || direction == lastDirection ;
var extending=range[0] == lastRange[1] + lastDirection;
var overlapping=(lastDirection == 1 && range[0] >= lastRange[0]  && range[0] <= lastRange[1] ) || (lastDirection == -1 && range[0] <= lastRange[0]  && range[0] >= lastRange[1] ) ;
if (sameDirection && (overlapping || extending ) ) {
lastRange[1]=range[1];
changed=true;
} else {
lastRange=Clazz.array(Integer.TYPE, -1, [range[0], range[1]]);
merged.add$TE(lastRange);
lastDirection=(range[1] == range[0]) ? lastDirection : direction;
}}
return changed ? merged : ranges;
}, 1);

Clazz.newMeth(C$, 'makeFromMap$', function () {
return p$1.posMap$java_util_List$I$java_util_List$I.apply(this, [this.fromShifts, this.fromRatio, this.toShifts, this.toRatio]);
});

Clazz.newMeth(C$, 'makeToMap$', function () {
return p$1.posMap$java_util_List$I$java_util_List$I.apply(this, [this.toShifts, this.toRatio, this.fromShifts, this.fromRatio]);
});

Clazz.newMeth(C$, 'posMap$java_util_List$I$java_util_List$I', function (shiftTo, ratio, shiftFrom, toRatio) {
var iv=0;
var ivSize=shiftTo.size$();
if (iv >= ivSize) {
return null;
}var intv=shiftTo.get$I(iv++);
var from=intv[0];
var to=intv[1];
if (from > to) {
from=intv[1];
to=intv[0];
}while (iv < ivSize){
intv=shiftTo.get$I(iv++);
if (intv[0] < from) {
from=intv[0];
}if (intv[1] < from) {
from=intv[1];
}if (intv[0] > to) {
to=intv[0];
}if (intv[1] > to) {
to=intv[1];
}}
var tF=0;
var tT=0;
var mp=Clazz.array(Integer.TYPE, [to - from + 2, null]);
for (var i=0; i < mp.length; i++) {
var m=C$.shift$I$java_util_List$I$java_util_List$I(i + from, shiftTo, ratio, shiftFrom, toRatio);
if (m != null ) {
if (i == 0) {
tF=tT=m[0];
} else {
if (m[0] < tF) {
tF=m[0];
}if (m[0] > tT) {
tT=m[0];
}}}mp[i]=m;
}
var map=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [from, to, tF, tT]), Clazz.array(Integer.TYPE, [to - from + 2])]);
map[0][2]=tF;
map[0][3]=tT;
for (var i=0; i < mp.length; i++) {
if (mp[i] != null ) {
map[1][i]=mp[i][0] - tF;
} else {
map[1][i]=-1;
}}
return map;
}, p$1);

Clazz.newMeth(C$, 'shiftFrom$I', function (pos) {
return C$.shift$I$java_util_List$I$java_util_List$I(pos, this.fromShifts, this.fromRatio, this.toShifts, this.toRatio);
});

Clazz.newMeth(C$, 'shiftTo$I', function (pos) {
return C$.shift$I$java_util_List$I$java_util_List$I(pos, this.toShifts, this.toRatio, this.fromShifts, this.fromRatio);
});

Clazz.newMeth(C$, 'shift$I$java_util_List$I$java_util_List$I', function (pos, shiftTo, fromRatio, shiftFrom, toRatio) {
var fromCount=C$.countPos$java_util_List$I(shiftTo, pos);
if (fromCount == null ) {
return null;
}var fromRemainder=(fromCount[0] - 1) % fromRatio;
var toCount=1 + ((((fromCount[0] - 1)/fromRatio|0)) * toRatio);
var toPos=C$.countToPos$java_util_List$I(shiftFrom, toCount);
if (toPos == null ) {
return null;
}return Clazz.array(Integer.TYPE, -1, [toPos[0], fromRemainder, toPos[1]]);
}, 1);

Clazz.newMeth(C$, 'countPos$java_util_List$I', function (shiftTo, pos) {
var count=0;
var intv;
var iv=0;
var ivSize=shiftTo.size$();
while (iv < ivSize){
intv=shiftTo.get$I(iv++);
if (intv[0] <= intv[1]) {
if (pos >= intv[0] && pos <= intv[1] ) {
return Clazz.array(Integer.TYPE, -1, [count + pos - intv[0] + 1, +1]);
} else {
count+=intv[1] - intv[0] + 1;
}} else {
if (pos >= intv[1] && pos <= intv[0] ) {
return Clazz.array(Integer.TYPE, -1, [count + intv[0] - pos + 1, -1]);
} else {
count+=intv[0] - intv[1] + 1;
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'countToPos$java_util_List$I', function (shiftFrom, pos) {
var count=0;
var diff=0;
var iv=0;
var ivSize=shiftFrom.size$();
var intv=Clazz.array(Integer.TYPE, -1, [0, 0]);
while (iv < ivSize){
intv=shiftFrom.get$I(iv++);
diff=intv[1] - intv[0];
if (diff >= 0) {
if (pos <= count + 1 + diff ) {
return Clazz.array(Integer.TYPE, -1, [pos - count - 1  + intv[0], +1]);
} else {
count+=1 + diff;
}} else {
if (pos <= count + 1 - diff) {
return Clazz.array(Integer.TYPE, -1, [intv[0] - (pos - count - 1 ), -1]);
} else {
count+=1 - diff;
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'locateInFrom$I$I', function (start, end) {
var fromStart=this.shiftTo$I(start);
var fromEnd=this.shiftTo$I(end);
return C$.getIntervals$java_util_List$IA$IA$I(this.fromShifts, fromStart, fromEnd, this.fromRatio);
});

Clazz.newMeth(C$, 'locateInTo$I$I', function (start, end) {
var toStart=this.shiftFrom$I(start);
var toEnd=this.shiftFrom$I(end);
return C$.getIntervals$java_util_List$IA$IA$I(this.toShifts, toStart, toEnd, this.toRatio);
});

Clazz.newMeth(C$, 'getIntervals$java_util_List$IA$IA$I', function (shiftFrom, fromStart, fromEnd, fromRatio2) {
if (fromStart == null  || fromEnd == null  ) {
return null;
}var startpos;
var endpos;
startpos=fromStart[0];
endpos=fromEnd[0];
var endindx=(fromRatio2 - 1);
var intv=0;
var intvSize=shiftFrom.size$();
var iv;
var i=0;
var fs=-1;
var fe_s=-1;
var fe=-1;
while (intv < intvSize && (fs == -1 || fe == -1 ) ){
iv=shiftFrom.get$I(intv++);
if (fe_s > -1) {
endpos=iv[0];
endindx--;
}if (iv[0] <= iv[1]) {
if (fs == -1 && startpos >= iv[0]  && startpos <= iv[1] ) {
fs=i;
}if (endpos >= iv[0] && endpos <= iv[1] ) {
if (fe_s == -1) {
fe_s=i;
}if (fe_s != -1) {
if (endpos + endindx <= iv[1]) {
fe=i;
endpos=endpos + endindx;
} else {
endindx-=iv[1] - endpos;
}}}} else {
if (fs == -1 && startpos <= iv[0]  && startpos >= iv[1] ) {
fs=i;
}if (endpos <= iv[0] && endpos >= iv[1] ) {
if (fe_s == -1) {
fe_s=i;
}if (fe_s != -1) {
if (endpos - endindx >= iv[1]) {
fe=i;
endpos=endpos - endindx;
} else {
endindx-=endpos - iv[1];
}}}}i++;
}
if (fs == fe && fe == -1 ) {
return null;
}var ranges=Clazz.new_($I$(1));
if (fs <= fe) {
intv=fs;
i=fs;
iv=shiftFrom.get$I(intv++);
iv=Clazz.array(Integer.TYPE, -1, [iv[0], iv[1]]);
if (i == fs) {
iv[0]=startpos;
}while (i != fe){
ranges.add$TE(iv);
iv=shiftFrom.get$I(intv++);
iv=Clazz.array(Integer.TYPE, -1, [iv[0], iv[1]]);
i++;
}
if (i == fe) {
iv[1]=endpos;
}ranges.add$TE(iv);
} else {
i=shiftFrom.size$() - 1;
while (i > fs){
i--;
}
iv=shiftFrom.get$I(i);
iv=Clazz.array(Integer.TYPE, -1, [iv[1], iv[0]]);
if (i == fs) {
iv[0]=startpos;
}while (--i != fe){
ranges.add$TE(iv);
iv=shiftFrom.get$I(i);
iv=Clazz.array(Integer.TYPE, -1, [iv[1], iv[0]]);
}
if (i == fe) {
iv[1]=endpos;
}ranges.add$TE(iv);
}var range=null;
if (ranges != null  && ranges.size$() > 0 ) {
range=Clazz.array(Integer.TYPE, [ranges.size$() * 2]);
intv=0;
intvSize=ranges.size$();
i=0;
while (intv < intvSize){
iv=ranges.get$I(intv);
range[i++]=iv[0];
range[i++]=iv[1];
ranges.set$I$TE(intv++, null);
}
}return range;
}, 1);

Clazz.newMeth(C$, 'getToPosition$I', function (mpos) {
var mp=this.shiftTo$I(mpos);
if (mp != null ) {
return mp[0];
}return mpos;
});

Clazz.newMeth(C$, 'getToWord$I', function (mpos) {
var mp=this.shiftTo$I(mpos);
if (mp != null ) {
return Clazz.array(Integer.TYPE, -1, [mp[0], mp[0] + mp[2] * (this.getFromRatio$() - 1)]);
}return null;
});

Clazz.newMeth(C$, 'getMappedPosition$I', function (pos) {
var mp=this.shiftFrom$I(pos);
if (mp != null ) {
return mp[0];
}return pos;
});

Clazz.newMeth(C$, 'getMappedWord$I', function (pos) {
var mp=this.shiftFrom$I(pos);
if (mp != null ) {
return Clazz.array(Integer.TYPE, -1, [mp[0], mp[0] + mp[2] * (this.getToRatio$() - 1)]);
}return null;
});

Clazz.newMeth(C$, 'getInverse$', function () {
return Clazz.new_(C$.c$$java_util_List$java_util_List$I$I,[this.getToRanges$(), this.getFromRanges$(), this.getToRatio$(), this.getFromRatio$()]);
});

Clazz.newMeth(C$, 'containsEither$Z$jalview_util_MapList', function (local, map) {
if (local) {
return ((this.getFromLowest$() >= map.getFromLowest$() && this.getFromHighest$() <= map.getFromHighest$() ) || (this.getFromLowest$() <= map.getFromLowest$() && this.getFromHighest$() >= map.getFromHighest$() ) );
} else {
return ((this.getToLowest$() >= map.getToLowest$() && this.getToHighest$() <= map.getToHighest$() ) || (this.getToLowest$() <= map.getToLowest$() && this.getToHighest$() >= map.getToHighest$() ) );
}});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(3).c$$I,[64]);
sb.append$S("[");
for (var shift, $shift = this.fromShifts.iterator$(); $shift.hasNext$()&&((shift=($shift.next$())),1);) {
sb.append$S(" ").append$S($I$(2).toString$IA(shift));
}
sb.append$S(" ] ");
sb.append$I(this.fromRatio).append$S(":").append$I(this.toRatio);
sb.append$S(" to [");
for (var shift, $shift = this.toShifts.iterator$(); $shift.hasNext$()&&((shift=($shift.next$())),1);) {
sb.append$S(" ").append$S($I$(2).toString$IA(shift));
}
sb.append$S(" ]");
return sb.toString();
});

Clazz.newMeth(C$, 'addMapList$jalview_util_MapList', function (map) {
if (this.equals$O(map)) {
return;
}this.fromLowest=Math.min(this.fromLowest, map.fromLowest);
this.toLowest=Math.min(this.toLowest, map.toLowest);
this.fromHighest=Math.max(this.fromHighest, map.fromHighest);
this.toHighest=Math.max(this.toHighest, map.toHighest);
for (var range, $range = map.getFromRanges$().iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
C$.addRange$IA$java_util_List(range, this.fromShifts);
}
for (var range, $range = map.getToRanges$().iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
C$.addRange$IA$java_util_List(range, this.toShifts);
}
});

Clazz.newMeth(C$, 'addRange$IA$java_util_List', function (range, addTo) {
if (addTo.size$() == 0) {
addTo.add$TE(range);
return;
}var last=addTo.get$I(addTo.size$() - 1);
var lastForward=last[1] >= last[0];
var newForward=range[1] >= range[0];
if (lastForward == newForward  && last[1] == range[0] ) {
last[1]=range[1];
return;
}if (lastForward && newForward && range[0] == last[1] + 1  ) {
last[1]=range[1];
return;
}if (!lastForward && !newForward && range[0] == last[1] - 1  ) {
last[1]=range[1];
return;
}addTo.add$TE(range);
}, 1);

Clazz.newMeth(C$, 'isFromForwardStrand$', function () {
return p$1.isForwardStrand$java_util_List.apply(this, [this.getFromRanges$()]);
});

Clazz.newMeth(C$, 'isToForwardStrand$', function () {
return p$1.isForwardStrand$java_util_List.apply(this, [this.getToRanges$()]);
});

Clazz.newMeth(C$, 'isForwardStrand$java_util_List', function (ranges) {
var forwardStrand=true;
for (var range, $range = ranges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
if (range[1] > range[0]) {
break;
} else if (range[1] < range[0]) {
forwardStrand=false;
break;
}}
return forwardStrand;
}, p$1);

Clazz.newMeth(C$, 'isTripletMap$', function () {
return (this.toRatio == 3 && this.fromRatio == 1 ) || (this.fromRatio == 3 && this.toRatio == 1 ) ;
});

Clazz.newMeth(C$, 'traverse$jalview_util_MapList', function (map) {
if (map == null ) {
return null;
}var outFromRatio=this.getFromRatio$() * map.getFromRatio$();
var outToRatio=this.getToRatio$() * map.getToRatio$();
var gcd=$I$(4).gcd$I$I(outFromRatio, outToRatio);
outFromRatio=(outFromRatio/(gcd)|0);
outToRatio=(outToRatio/(gcd)|0);
var toRanges=Clazz.new_($I$(1));
for (var range, $range = this.getToRanges$().iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
var transferred=map.locateInTo$I$I(range[0], range[1]);
if (transferred == null  || transferred.length % 2 != 0 ) {
return null;
}for (var i=0; i < transferred.length; ) {
toRanges.add$TE(Clazz.array(Integer.TYPE, -1, [transferred[i], transferred[i + 1]]));
i+=2;
}
}
return Clazz.new_(C$.c$$java_util_List$java_util_List$I$I,[this.getFromRanges$(), toRanges, outFromRatio, outToRatio]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
