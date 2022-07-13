(function(){var P$=Clazz.newPackage("java.time.zone"),p$1={},I$=[[0,'java.time.ZoneOffset','java.util.Objects','java.time.LocalTime','java.time.zone.Ser','java.time.Month','java.time.DayOfWeek',['java.time.zone.ZoneOffsetTransitionRule','.TimeDefinition'],'java.time.LocalDate','java.time.chrono.IsoChronology','java.time.temporal.TemporalAdjusters','java.time.LocalDateTime','java.time.zone.ZoneOffsetTransition','StringBuilder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneOffsetTransitionRule", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['TimeDefinition',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['timeEndOfDay'],'B',['dom'],'O',['month','java.time.Month','dow','java.time.DayOfWeek','time','java.time.LocalTime','timeDefinition','java.time.zone.ZoneOffsetTransitionRule.TimeDefinition','standardOffset','java.time.ZoneOffset','+offsetBefore','+offsetAfter']]]

Clazz.newMeth(C$, 'of$java_time_Month$I$java_time_DayOfWeek$java_time_LocalTime$Z$java_time_zone_ZoneOffsetTransitionRule_TimeDefinition$java_time_ZoneOffset$java_time_ZoneOffset$java_time_ZoneOffset', function (month, dayOfMonthIndicator, dayOfWeek, time, timeEndOfDay, timeDefnition, standardOffset, offsetBefore, offsetAfter) {
$I$(2).requireNonNull$O$S(month, "month");
$I$(2).requireNonNull$O$S(time, "time");
$I$(2).requireNonNull$O$S(timeDefnition, "timeDefnition");
$I$(2).requireNonNull$O$S(standardOffset, "standardOffset");
$I$(2).requireNonNull$O$S(offsetBefore, "offsetBefore");
$I$(2).requireNonNull$O$S(offsetAfter, "offsetAfter");
if (dayOfMonthIndicator < -28 || dayOfMonthIndicator > 31  || dayOfMonthIndicator == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Day of month indicator must be between -28 and 31 inclusive excluding zero"]);
}if (timeEndOfDay && time.equals$O($I$(3).MIDNIGHT) == false  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Time must be midnight when end of day flag is true"]);
}return Clazz.new_(C$.c$$java_time_Month$I$java_time_DayOfWeek$java_time_LocalTime$Z$java_time_zone_ZoneOffsetTransitionRule_TimeDefinition$java_time_ZoneOffset$java_time_ZoneOffset$java_time_ZoneOffset,[month, dayOfMonthIndicator, dayOfWeek, time, timeEndOfDay, timeDefnition, standardOffset, offsetBefore, offsetAfter]);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_Month$I$java_time_DayOfWeek$java_time_LocalTime$Z$java_time_zone_ZoneOffsetTransitionRule_TimeDefinition$java_time_ZoneOffset$java_time_ZoneOffset$java_time_ZoneOffset', function (month, dayOfMonthIndicator, dayOfWeek, time, timeEndOfDay, timeDefnition, standardOffset, offsetBefore, offsetAfter) {
;C$.$init$.apply(this);
this.month=month;
this.dom=($b$[0] = dayOfMonthIndicator, $b$[0]);
this.dow=dayOfWeek;
this.time=time;
this.timeEndOfDay=timeEndOfDay;
this.timeDefinition=timeDefnition;
this.standardOffset=standardOffset;
this.offsetBefore=offsetBefore;
this.offsetAfter=offsetAfter;
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
return Clazz.new_($I$(4,1).c$$B$O,[3, this]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput', function (out) {
var timeSecs=(this.timeEndOfDay ? 86400 : this.time.toSecondOfDay$());
var stdOffset=this.standardOffset.getTotalSeconds$();
var beforeDiff=this.offsetBefore.getTotalSeconds$() - stdOffset;
var afterDiff=this.offsetAfter.getTotalSeconds$() - stdOffset;
var timeByte=(timeSecs % 3600 == 0 ? (this.timeEndOfDay ? 24 : this.time.getHour$()) : 31);
var stdOffsetByte=(stdOffset % 900 == 0 ? (stdOffset/900|0) + 128 : 255);
var beforeByte=(beforeDiff == 0 || beforeDiff == 1800  || beforeDiff == 3600  ? (beforeDiff/1800|0) : 3);
var afterByte=(afterDiff == 0 || afterDiff == 1800  || afterDiff == 3600  ? (afterDiff/1800|0) : 3);
var dowByte=(this.dow == null  ? 0 : this.dow.getValue$());
var b=(this.month.getValue$() << 28) + ((this.dom + 32) << 22) + (dowByte << 19) + (timeByte << 14) + (this.timeDefinition.ordinal$() << 12) + (stdOffsetByte << 4) + (beforeByte << 2) + afterByte ;
out.writeInt$I(b);
if (timeByte == 31) {
out.writeInt$I(timeSecs);
}if (stdOffsetByte == 255) {
out.writeInt$I(stdOffset);
}if (beforeByte == 3) {
out.writeInt$I(this.offsetBefore.getTotalSeconds$());
}if (afterByte == 3) {
out.writeInt$I(this.offsetAfter.getTotalSeconds$());
}});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput', function ($in) {
var data=$in.readInt$();
var month=$I$(5).of$I(data >>> 28);
var dom=((data & (264241152)) >>> 22) - 32;
var dowByte=(data & (3670016)) >>> 19;
var dow=dowByte == 0 ? null : $I$(6).of$I(dowByte);
var timeByte=(data & (507904)) >>> 14;
var defn=$I$(7).values$()[(data & (12288)) >>> 12];
var stdByte=(data & (4080)) >>> 4;
var beforeByte=(data & (12)) >>> 2;
var afterByte=(data & 3);
var time=(timeByte == 31 ? $I$(3,"ofSecondOfDay$J",[$in.readInt$()]) : $I$(3).of$I$I(timeByte % 24, 0));
var std=(stdByte == 255 ? $I$(1,"ofTotalSeconds$I",[$in.readInt$()]) : $I$(1,"ofTotalSeconds$I",[(stdByte - 128) * 900]));
var before=(beforeByte == 3 ? $I$(1,"ofTotalSeconds$I",[$in.readInt$()]) : $I$(1,"ofTotalSeconds$I",[std.getTotalSeconds$() + beforeByte * 1800]));
var after=(afterByte == 3 ? $I$(1,"ofTotalSeconds$I",[$in.readInt$()]) : $I$(1,"ofTotalSeconds$I",[std.getTotalSeconds$() + afterByte * 1800]));
return C$.of$java_time_Month$I$java_time_DayOfWeek$java_time_LocalTime$Z$java_time_zone_ZoneOffsetTransitionRule_TimeDefinition$java_time_ZoneOffset$java_time_ZoneOffset$java_time_ZoneOffset(month, dom, dow, time, timeByte == 24, defn, std, before, after);
}, 1);

Clazz.newMeth(C$, 'getMonth$', function () {
return this.month;
});

Clazz.newMeth(C$, 'getDayOfMonthIndicator$', function () {
return this.dom;
});

Clazz.newMeth(C$, 'getDayOfWeek$', function () {
return this.dow;
});

Clazz.newMeth(C$, 'getLocalTime$', function () {
return this.time;
});

Clazz.newMeth(C$, 'isMidnightEndOfDay$', function () {
return this.timeEndOfDay;
});

Clazz.newMeth(C$, 'getTimeDefinition$', function () {
return this.timeDefinition;
});

Clazz.newMeth(C$, 'getStandardOffset$', function () {
return this.standardOffset;
});

Clazz.newMeth(C$, 'getOffsetBefore$', function () {
return this.offsetBefore;
});

Clazz.newMeth(C$, 'getOffsetAfter$', function () {
return this.offsetAfter;
});

Clazz.newMeth(C$, 'createTransition$I', function (year) {
var date;
if (this.dom < 0) {
date=$I$(8,"of$I$java_time_Month$I",[year, this.month, this.month.length$Z($I$(9).INSTANCE.isLeapYear$J(year)) + 1 + this.dom ]);
if (this.dow != null ) {
date=date.with$java_time_temporal_TemporalAdjuster($I$(10).previousOrSame$java_time_DayOfWeek(this.dow));
}} else {
date=$I$(8).of$I$java_time_Month$I(year, this.month, this.dom);
if (this.dow != null ) {
date=date.with$java_time_temporal_TemporalAdjuster($I$(10).nextOrSame$java_time_DayOfWeek(this.dow));
}}if (this.timeEndOfDay) {
date=date.plusDays$J(1);
}var localDT=$I$(11).of$java_time_LocalDate$java_time_LocalTime(date, this.time);
var transition=this.timeDefinition.createDateTime$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset(localDT, this.standardOffset, this.offsetBefore);
return Clazz.new_($I$(12,1).c$$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset,[transition, this.offsetBefore, this.offsetAfter]);
});

Clazz.newMeth(C$, 'equals$O', function (otherRule) {
if (otherRule === this ) {
return true;
}if (Clazz.instanceOf(otherRule, "java.time.zone.ZoneOffsetTransitionRule")) {
var other=otherRule;
return this.month === other.month  && this.dom == other.dom  && this.dow === other.dow   && this.timeDefinition === other.timeDefinition   && this.time.equals$O(other.time)  && this.timeEndOfDay == other.timeEndOfDay   && this.standardOffset.equals$O(other.standardOffset)  && this.offsetBefore.equals$O(other.offsetBefore)  && this.offsetAfter.equals$O(other.offsetAfter) ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hash=((this.time.toSecondOfDay$() + (this.timeEndOfDay ? 1 : 0)) << 15) + (this.month.ordinal$() << 11) + ((this.dom + 32) << 5) + ((this.dow == null  ? 7 : this.dow.ordinal$()) << 2) + (this.timeDefinition.ordinal$()) ;
return hash ^ this.standardOffset.hashCode$() ^ this.offsetBefore.hashCode$() ^ this.offsetAfter.hashCode$() ;
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(13,1));
buf.append$S("TransitionRule[").append$S(this.offsetBefore.compareTo$java_time_ZoneOffset(this.offsetAfter) > 0 ? "Gap " : "Overlap ").append$O(this.offsetBefore).append$S(" to ").append$O(this.offsetAfter).append$S(", ");
if (this.dow != null ) {
if (this.dom == -1) {
buf.append$S(this.dow.name$()).append$S(" on or before last day of ").append$S(this.month.name$());
} else if (this.dom < 0) {
buf.append$S(this.dow.name$()).append$S(" on or before last day minus ").append$I((($b$[0]=-this.dom,this.dom=$b$[0],$b$[0])) - 1).append$S(" of ").append$S(this.month.name$());
} else {
buf.append$S(this.dow.name$()).append$S(" on or after ").append$S(this.month.name$()).append$C(" ").append$I(this.dom);
}} else {
buf.append$S(this.month.name$()).append$C(" ").append$I(this.dom);
}buf.append$S(" at ").append$S(this.timeEndOfDay ? "24:00" : this.time.toString()).append$S(" ").append$O(this.timeDefinition).append$S(", standard offset ").append$O(this.standardOffset).append$C("]");
return buf.toString();
});
var $b$ = new Int8Array(1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.ZoneOffsetTransitionRule, "TimeDefinition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createDateTime$java_time_LocalDateTime$java_time_ZoneOffset$java_time_ZoneOffset', function (dateTime, standardOffset, wallOffset) {
switch (this) {
case C$.UTC:
{
var difference=wallOffset.getTotalSeconds$() - $I$(1).UTC.getTotalSeconds$();
return dateTime.plusSeconds$J(difference);
}case C$.STANDARD:
{
var difference=wallOffset.getTotalSeconds$() - standardOffset.getTotalSeconds$();
return dateTime.plusSeconds$J(difference);
}default:
return dateTime;
}
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "UTC", 0, []);
Clazz.newEnumConst($vals, C$.c$, "WALL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "STANDARD", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
