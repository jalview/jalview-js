(function(){var P$=Clazz.newPackage("java.time.zone"),p$1={},I$=[[0,'java.time.zone.ZoneOffsetTransitionRule','java.time.LocalDateTime','java.util.concurrent.ConcurrentHashMap','java.util.Objects','java.time.ZoneOffset','java.util.ArrayList','java.time.zone.ZoneOffsetTransition','java.time.zone.Ser','java.util.Arrays','java.util.Collections','java.time.Duration','java.time.LocalDate']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneRules", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastRulesCache=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['standardTransitions','long[]','standardOffsets','java.time.ZoneOffset[]','savingsInstantTransitions','long[]','savingsLocalTransitions','java.time.LocalDateTime[]','wallOffsets','java.time.ZoneOffset[]','lastRules','java.time.zone.ZoneOffsetTransitionRule[]','lastRulesCache','java.util.concurrent.ConcurrentMap']]
,['O',['EMPTY_LONG_ARRAY','long[]','EMPTY_LASTRULES','java.time.zone.ZoneOffsetTransitionRule[]','EMPTY_LDT_ARRAY','java.time.LocalDateTime[]']]]

Clazz.newMeth(C$, 'of$java_time_ZoneOffset$java_time_ZoneOffset$java_util_List$java_util_List$java_util_List', function (baseStandardOffset, baseWallOffset, standardOffsetTransitionList, transitionList, lastRules) {
$I$(4).requireNonNull$O$S(baseStandardOffset, "baseStandardOffset");
$I$(4).requireNonNull$O$S(baseWallOffset, "baseWallOffset");
$I$(4).requireNonNull$O$S(standardOffsetTransitionList, "standardOffsetTransitionList");
$I$(4).requireNonNull$O$S(transitionList, "transitionList");
$I$(4).requireNonNull$O$S(lastRules, "lastRules");
return Clazz.new_(C$.c$$java_time_ZoneOffset$java_time_ZoneOffset$java_util_List$java_util_List$java_util_List,[baseStandardOffset, baseWallOffset, standardOffsetTransitionList, transitionList, lastRules]);
}, 1);

Clazz.newMeth(C$, 'of$java_time_ZoneOffset', function (offset) {
$I$(4).requireNonNull$O$S(offset, "offset");
return Clazz.new_(C$.c$$java_time_ZoneOffset,[offset]);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_ZoneOffset$java_time_ZoneOffset$java_util_List$java_util_List$java_util_List', function (baseStandardOffset, baseWallOffset, standardOffsetTransitionList, transitionList, lastRules) {
;C$.$init$.apply(this);
this.standardTransitions=Clazz.array(Long.TYPE, [standardOffsetTransitionList.size$()]);
this.standardOffsets=Clazz.array($I$(5), [standardOffsetTransitionList.size$() + 1]);
this.standardOffsets[0]=baseStandardOffset;
for (var i=0; i < standardOffsetTransitionList.size$(); i++) {
this.standardTransitions[i]=standardOffsetTransitionList.get$I(i).toEpochSecond$();
this.standardOffsets[i + 1]=standardOffsetTransitionList.get$I(i).getOffsetAfter$();
}
var localTransitionList=Clazz.new_($I$(6,1));
var localTransitionOffsetList=Clazz.new_($I$(6,1));
localTransitionOffsetList.add$O(baseWallOffset);
for (var trans, $trans = transitionList.iterator$(); $trans.hasNext$()&&((trans=($trans.next$())),1);) {
if (trans.isGap$()) {
localTransitionList.add$O(trans.getDateTimeBefore$());
localTransitionList.add$O(trans.getDateTimeAfter$());
} else {
localTransitionList.add$O(trans.getDateTimeAfter$());
localTransitionList.add$O(trans.getDateTimeBefore$());
}localTransitionOffsetList.add$O(trans.getOffsetAfter$());
}
this.savingsLocalTransitions=localTransitionList.toArray$OA(Clazz.array($I$(2), [localTransitionList.size$()]));
this.wallOffsets=localTransitionOffsetList.toArray$OA(Clazz.array($I$(5), [localTransitionOffsetList.size$()]));
this.savingsInstantTransitions=Clazz.array(Long.TYPE, [transitionList.size$()]);
for (var i=0; i < transitionList.size$(); i++) {
this.savingsInstantTransitions[i]=transitionList.get$I(i).toEpochSecond$();
}
if (lastRules.size$() > 16) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many transition rules"]);
}this.lastRules=lastRules.toArray$OA(Clazz.array($I$(1), [lastRules.size$()]));
}, 1);

Clazz.newMeth(C$, 'c$$JA$java_time_ZoneOffsetA$JA$java_time_ZoneOffsetA$java_time_zone_ZoneOffsetTransitionRuleA', function (standardTransitions, standardOffsets, savingsInstantTransitions, wallOffsets, lastRules) {
;C$.$init$.apply(this);
this.standardTransitions=standardTransitions;
this.standardOffsets=standardOffsets;
this.savingsInstantTransitions=savingsInstantTransitions;
this.wallOffsets=wallOffsets;
this.lastRules=lastRules;
if (savingsInstantTransitions.length == 0) {
this.savingsLocalTransitions=C$.EMPTY_LDT_ARRAY;
} else {
var localTransitionList=Clazz.new_($I$(6,1));
for (var i=0; i < savingsInstantTransitions.length; i++) {
var before=wallOffsets[i];
var after=wallOffsets[i + 1];
var trans=Clazz.new_($I$(7,1).c$$J$java_time_ZoneOffset$java_time_ZoneOffset,[savingsInstantTransitions[i], before, after]);
if (trans.isGap$()) {
localTransitionList.add$O(trans.getDateTimeBefore$());
localTransitionList.add$O(trans.getDateTimeAfter$());
} else {
localTransitionList.add$O(trans.getDateTimeAfter$());
localTransitionList.add$O(trans.getDateTimeBefore$());
}}
this.savingsLocalTransitions=localTransitionList.toArray$OA(Clazz.array($I$(2), [localTransitionList.size$()]));
}}, 1);

Clazz.newMeth(C$, 'c$$java_time_ZoneOffset', function (offset) {
;C$.$init$.apply(this);
this.standardOffsets=Clazz.array($I$(5), [1]);
this.standardOffsets[0]=offset;
this.standardTransitions=C$.EMPTY_LONG_ARRAY;
this.savingsInstantTransitions=C$.EMPTY_LONG_ARRAY;
this.savingsLocalTransitions=C$.EMPTY_LDT_ARRAY;
this.wallOffsets=this.standardOffsets;
this.lastRules=C$.EMPTY_LASTRULES;
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(8,1).c$$B$O,[1, this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
out.writeInt$I(this.standardTransitions.length);
for (var trans, $trans = 0, $$trans = this.standardTransitions; $trans<$$trans.length&&((trans=($$trans[$trans])),1);$trans++) {
$I$(8).writeEpochSec$J$java_io_DataOutput(trans, out);
}
for (var offset, $offset = 0, $$offset = this.standardOffsets; $offset<$$offset.length&&((offset=($$offset[$offset])),1);$offset++) {
$I$(8).writeOffset$java_time_ZoneOffset$java_io_DataOutput(offset, out);
}
out.writeInt$I(this.savingsInstantTransitions.length);
for (var trans, $trans = 0, $$trans = this.savingsInstantTransitions; $trans<$$trans.length&&((trans=($$trans[$trans])),1);$trans++) {
$I$(8).writeEpochSec$J$java_io_DataOutput(trans, out);
}
for (var offset, $offset = 0, $$offset = this.wallOffsets; $offset<$$offset.length&&((offset=($$offset[$offset])),1);$offset++) {
$I$(8).writeOffset$java_time_ZoneOffset$java_io_DataOutput(offset, out);
}
out.writeByte$I(this.lastRules.length);
for (var rule, $rule = 0, $$rule = this.lastRules; $rule<$$rule.length&&((rule=($$rule[$rule])),1);$rule++) {
rule.writeExternal$java_io_DataOutput(out);
}
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var stdSize=$in.readInt$();
var stdTrans=(stdSize == 0) ? C$.EMPTY_LONG_ARRAY : Clazz.array(Long.TYPE, [stdSize]);
for (var i=0; i < stdSize; i++) {
stdTrans[i]=$I$(8).readEpochSec$java_io_DataInput($in);
}
var stdOffsets=Clazz.array($I$(5), [stdSize + 1]);
for (var i=0; i < stdOffsets.length; i++) {
stdOffsets[i]=$I$(8).readOffset$java_io_DataInput($in);
}
var savSize=$in.readInt$();
var savTrans=(savSize == 0) ? C$.EMPTY_LONG_ARRAY : Clazz.array(Long.TYPE, [savSize]);
for (var i=0; i < savSize; i++) {
savTrans[i]=$I$(8).readEpochSec$java_io_DataInput($in);
}
var savOffsets=Clazz.array($I$(5), [savSize + 1]);
for (var i=0; i < savOffsets.length; i++) {
savOffsets[i]=$I$(8).readOffset$java_io_DataInput($in);
}
var ruleSize=$in.readByte$();
var rules=(ruleSize == 0) ? C$.EMPTY_LASTRULES : Clazz.array($I$(1), [ruleSize]);
for (var i=0; i < ruleSize; i++) {
rules[i]=$I$(1).readExternal$java_io_DataInput($in);
}
return Clazz.new_(C$.c$$JA$java_time_ZoneOffsetA$JA$java_time_ZoneOffsetA$java_time_zone_ZoneOffsetTransitionRuleA,[stdTrans, stdOffsets, savTrans, savOffsets, rules]);
}, 1);

Clazz.newMeth(C$, 'isFixedOffset$', function () {
return this.savingsInstantTransitions.length == 0;
});

Clazz.newMeth(C$, 'getOffset$java_time_Instant', function (instant) {
if (this.savingsInstantTransitions.length == 0) {
return this.standardOffsets[0];
}var epochSec=instant.getEpochSecond$();
if (this.lastRules.length > 0 && epochSec > this.savingsInstantTransitions[this.savingsInstantTransitions.length - 1] ) {
var year=p$1.findYear$J$java_time_ZoneOffset.apply(this, [epochSec, this.wallOffsets[this.wallOffsets.length - 1]]);
var transArray=p$1.findTransitionArray$I.apply(this, [year]);
var trans=null;
for (var i=0; i < transArray.length; i++) {
trans=transArray[i];
if (epochSec < trans.toEpochSecond$()) {
return trans.getOffsetBefore$();
}}
return trans.getOffsetAfter$();
}var index=$I$(9).binarySearch$JA$J(this.savingsInstantTransitions, epochSec);
if (index < 0) {
index=-index - 2;
}return this.wallOffsets[index + 1];
});

Clazz.newMeth(C$, 'getOffset$java_time_LocalDateTime', function (localDateTime) {
var info=p$1.getOffsetInfo$java_time_LocalDateTime.apply(this, [localDateTime]);
if (Clazz.instanceOf(info, "java.time.zone.ZoneOffsetTransition")) {
return (info).getOffsetBefore$();
}return info;
});

Clazz.newMeth(C$, 'getValidOffsets$java_time_LocalDateTime', function (localDateTime) {
var info=p$1.getOffsetInfo$java_time_LocalDateTime.apply(this, [localDateTime]);
if (Clazz.instanceOf(info, "java.time.zone.ZoneOffsetTransition")) {
return (info).getValidOffsets$();
}return $I$(10).singletonList$O(info);
});

Clazz.newMeth(C$, 'getTransition$java_time_LocalDateTime', function (localDateTime) {
var info=p$1.getOffsetInfo$java_time_LocalDateTime.apply(this, [localDateTime]);
return (Clazz.instanceOf(info, "java.time.zone.ZoneOffsetTransition") ? info : null);
});

Clazz.newMeth(C$, 'getOffsetInfo$java_time_LocalDateTime', function (dt) {
if (this.savingsInstantTransitions.length == 0) {
return this.standardOffsets[0];
}if (this.lastRules.length > 0 && dt.isAfter$java_time_chrono_ChronoLocalDateTime(this.savingsLocalTransitions[this.savingsLocalTransitions.length - 1]) ) {
var transArray=p$1.findTransitionArray$I.apply(this, [dt.getYear$()]);
var info=null;
for (var trans, $trans = 0, $$trans = transArray; $trans<$$trans.length&&((trans=($$trans[$trans])),1);$trans++) {
info=p$1.findOffsetInfo$java_time_LocalDateTime$java_time_zone_ZoneOffsetTransition.apply(this, [dt, trans]);
if (Clazz.instanceOf(info, "java.time.zone.ZoneOffsetTransition") || info.equals$O(trans.getOffsetBefore$()) ) {
return info;
}}
return info;
}var index=$I$(9).binarySearch$OA$O(this.savingsLocalTransitions, dt);
if (index == -1) {
return this.wallOffsets[0];
}if (index < 0) {
index=-index - 2;
} else if (index < this.savingsLocalTransitions.length - 1 && this.savingsLocalTransitions[index].equals$O(this.savingsLocalTransitions[index + 1]) ) {
index++;
}if ((index & 1) == 0) {
var dtBefore=this.savingsLocalTransitions[index];
var dtAfter=this.savingsLocalTransitions[index + 1];
var offsetBefore=this.wallOffsets[(index/2|0)];
var offsetAfter=this.wallOffsets[(index/2|0) + 1];
if (offsetAfter.getTotalSeconds$() > offsetBefore.getTotalSeconds$()) {
return Clazz.new_($I$(7,1).c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset,[dtBefore, offsetBefore, offsetAfter]);
} else {
return Clazz.new_($I$(7,1).c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset,[dtAfter, offsetBefore, offsetAfter]);
}} else {
return this.wallOffsets[(index/2|0) + 1];
}}, p$1);

Clazz.newMeth(C$, 'findOffsetInfo$java_time_LocalDateTime$java_time_zone_ZoneOffsetTransition', function (dt, trans) {
var localTransition=trans.getDateTimeBefore$();
if (trans.isGap$()) {
if (dt.isBefore$java_time_chrono_ChronoLocalDateTime(localTransition)) {
return trans.getOffsetBefore$();
}if (dt.isBefore$java_time_chrono_ChronoLocalDateTime(trans.getDateTimeAfter$())) {
return trans;
} else {
return trans.getOffsetAfter$();
}} else {
if (dt.isBefore$java_time_chrono_ChronoLocalDateTime(localTransition) == false ) {
return trans.getOffsetAfter$();
}if (dt.isBefore$java_time_chrono_ChronoLocalDateTime(trans.getDateTimeAfter$())) {
return trans.getOffsetBefore$();
} else {
return trans;
}}}, p$1);

Clazz.newMeth(C$, 'findTransitionArray$I', function (year) {
var yearObj=Integer.valueOf$I(year);
var transArray=this.lastRulesCache.get$O(yearObj);
if (transArray != null ) {
return transArray;
}var ruleArray=this.lastRules;
transArray=Clazz.array($I$(7), [ruleArray.length]);
for (var i=0; i < ruleArray.length; i++) {
transArray[i]=ruleArray[i].createTransition$I(year);
}
if (year < 2100) {
this.lastRulesCache.putIfAbsent$O$O(yearObj, transArray);
}return transArray;
}, p$1);

Clazz.newMeth(C$, 'getStandardOffset$java_time_Instant', function (instant) {
if (this.savingsInstantTransitions.length == 0) {
return this.standardOffsets[0];
}var epochSec=instant.getEpochSecond$();
var index=$I$(9).binarySearch$JA$J(this.standardTransitions, epochSec);
if (index < 0) {
index=-index - 2;
}return this.standardOffsets[index + 1];
});

Clazz.newMeth(C$, 'getDaylightSavings$java_time_Instant', function (instant) {
if (this.savingsInstantTransitions.length == 0) {
return $I$(11).ZERO;
}var standardOffset=this.getStandardOffset$java_time_Instant(instant);
var actualOffset=this.getOffset$java_time_Instant(instant);
return $I$(11,"ofSeconds$J",[actualOffset.getTotalSeconds$() - standardOffset.getTotalSeconds$()]);
});

Clazz.newMeth(C$, 'isDaylightSavings$java_time_Instant', function (instant) {
return (this.getStandardOffset$java_time_Instant(instant).equals$O(this.getOffset$java_time_Instant(instant)) == false );
});

Clazz.newMeth(C$, 'isValidOffset$java_time_LocalDateTime$java_time_ZoneOffset', function (localDateTime, offset) {
return this.getValidOffsets$java_time_LocalDateTime(localDateTime).contains$O(offset);
});

Clazz.newMeth(C$, 'nextTransition$java_time_Instant', function (instant) {
if (this.savingsInstantTransitions.length == 0) {
return null;
}var epochSec=instant.getEpochSecond$();
if (epochSec >= this.savingsInstantTransitions[this.savingsInstantTransitions.length - 1]) {
if (this.lastRules.length == 0) {
return null;
}var year=p$1.findYear$J$java_time_ZoneOffset.apply(this, [epochSec, this.wallOffsets[this.wallOffsets.length - 1]]);
var transArray=p$1.findTransitionArray$I.apply(this, [year]);
for (var trans, $trans = 0, $$trans = transArray; $trans<$$trans.length&&((trans=($$trans[$trans])),1);$trans++) {
if (epochSec < trans.toEpochSecond$()) {
return trans;
}}
if (year < 999999999) {
transArray=p$1.findTransitionArray$I.apply(this, [year + 1]);
return transArray[0];
}return null;
}var index=$I$(9).binarySearch$JA$J(this.savingsInstantTransitions, epochSec);
if (index < 0) {
index=-index - 1;
} else {
index+=1;
}return Clazz.new_($I$(7,1).c$$J$java_time_ZoneOffset$java_time_ZoneOffset,[this.savingsInstantTransitions[index], this.wallOffsets[index], this.wallOffsets[index + 1]]);
});

Clazz.newMeth(C$, 'previousTransition$java_time_Instant', function (instant) {
if (this.savingsInstantTransitions.length == 0) {
return null;
}var epochSec=instant.getEpochSecond$();
if (instant.getNano$() > 0 && epochSec < 9223372036854775807 ) {
epochSec+=1;
}var lastHistoric=this.savingsInstantTransitions[this.savingsInstantTransitions.length - 1];
if (this.lastRules.length > 0 && epochSec > lastHistoric ) {
var lastHistoricOffset=this.wallOffsets[this.wallOffsets.length - 1];
var year=p$1.findYear$J$java_time_ZoneOffset.apply(this, [epochSec, lastHistoricOffset]);
var transArray=p$1.findTransitionArray$I.apply(this, [year]);
for (var i=transArray.length - 1; i >= 0; i--) {
if (epochSec > transArray[i].toEpochSecond$()) {
return transArray[i];
}}
var lastHistoricYear=p$1.findYear$J$java_time_ZoneOffset.apply(this, [lastHistoric, lastHistoricOffset]);
if (--year > lastHistoricYear) {
transArray=p$1.findTransitionArray$I.apply(this, [year]);
return transArray[transArray.length - 1];
}}var index=$I$(9).binarySearch$JA$J(this.savingsInstantTransitions, epochSec);
if (index < 0) {
index=-index - 1;
}if (index <= 0) {
return null;
}return Clazz.new_($I$(7,1).c$$J$java_time_ZoneOffset$java_time_ZoneOffset,[this.savingsInstantTransitions[index - 1], this.wallOffsets[index - 1], this.wallOffsets[index]]);
});

Clazz.newMeth(C$, 'findYear$J$java_time_ZoneOffset', function (epochSecond, offset) {
var localSecond=epochSecond + offset.getTotalSeconds$();
var localEpochDay=Math.floorDiv(localSecond, 86400);
return $I$(12).ofEpochDay$J(localEpochDay).getYear$();
}, p$1);

Clazz.newMeth(C$, 'getTransitions$', function () {
var list=Clazz.new_($I$(6,1));
for (var i=0; i < this.savingsInstantTransitions.length; i++) {
list.add$O(Clazz.new_($I$(7,1).c$$J$java_time_ZoneOffset$java_time_ZoneOffset,[this.savingsInstantTransitions[i], this.wallOffsets[i], this.wallOffsets[i + 1]]));
}
return $I$(10).unmodifiableList$java_util_List(list);
});

Clazz.newMeth(C$, 'getTransitionRules$', function () {
return $I$(10,"unmodifiableList$java_util_List",[$I$(9).asList$OA(this.lastRules)]);
});

Clazz.newMeth(C$, 'equals$O', function (otherRules) {
if (this === otherRules ) {
return true;
}if (Clazz.instanceOf(otherRules, "java.time.zone.ZoneRules")) {
var other=otherRules;
return $I$(9).equals$JA$JA(this.standardTransitions, other.standardTransitions) && $I$(9).equals$OA$OA(this.standardOffsets, other.standardOffsets) && $I$(9).equals$JA$JA(this.savingsInstantTransitions, other.savingsInstantTransitions) && $I$(9).equals$OA$OA(this.wallOffsets, other.wallOffsets) && $I$(9).equals$OA$OA(this.lastRules, other.lastRules)  ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(9).hashCode$JA(this.standardTransitions) ^ $I$(9).hashCode$OA(this.standardOffsets) ^ $I$(9).hashCode$JA(this.savingsInstantTransitions) ^ $I$(9).hashCode$OA(this.wallOffsets) ^ $I$(9).hashCode$OA(this.lastRules) ;
});

Clazz.newMeth(C$, 'toString', function () {
return "ZoneRules[currentStandardOffset=" + this.standardOffsets[this.standardOffsets.length - 1] + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_LONG_ARRAY=Clazz.array(Long.TYPE, [0]);
C$.EMPTY_LASTRULES=Clazz.array($I$(1), [0]);
C$.EMPTY_LDT_ARRAY=Clazz.array($I$(2), [0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
