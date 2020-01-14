(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),p$1={},I$=[[0,'java.util.Objects','java.util.concurrent.TimeUnit','AssertionError','java.time.Instant','java.time.LocalDateTime','java.time.ZoneOffset','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FileTime", null, null, 'Comparable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unit=null;
this.value=0;
this.instant=null;
this.valueAsString=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$java_util_concurrent_TimeUnit$java_time_Instant', function (value, unit, instant) {
C$.$init$.apply(this);
this.value=value;
this.unit=unit;
this.instant=instant;
}, 1);

Clazz.newMeth(C$, 'from$J$java_util_concurrent_TimeUnit', function (value, unit) {
$I$(1).requireNonNull$TT$S(unit, "unit");
return Clazz.new_(C$.c$$J$java_util_concurrent_TimeUnit$java_time_Instant,[value, unit, null]);
}, 1);

Clazz.newMeth(C$, 'fromMillis$J', function (value) {
return Clazz.new_(C$.c$$J$java_util_concurrent_TimeUnit$java_time_Instant,[value, $I$(2).MILLISECONDS, null]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_Instant', function (instant) {
$I$(1).requireNonNull$TT$S(instant, "instant");
return Clazz.new_(C$.c$$J$java_util_concurrent_TimeUnit$java_time_Instant,[0, null, instant]);
}, 1);

Clazz.newMeth(C$, 'to$java_util_concurrent_TimeUnit', function (unit) {
$I$(1).requireNonNull$TT$S(unit, "unit");
if (this.unit != null ) {
return unit.convert$J$java_util_concurrent_TimeUnit(this.value, this.unit);
} else {
var secs=unit.convert$J$java_util_concurrent_TimeUnit(this.instant.getEpochSecond$(), $I$(2).SECONDS);
if (secs == -9223372036854775808 || secs == 9223372036854775807 ) {
return secs;
}var nanos=unit.convert$J$java_util_concurrent_TimeUnit(this.instant.getNano$(), $I$(2).NANOSECONDS);
var r=secs + nanos;
if (((secs ^ r) & (nanos ^ r)) < 0) {
return (secs < 0) ? -9223372036854775808 : 9223372036854775807;
}return r;
}});

Clazz.newMeth(C$, 'toMillis$', function () {
if (this.unit != null ) {
return this.unit.toMillis$J(this.value);
} else {
var secs=this.instant.getEpochSecond$();
var nanos=this.instant.getNano$();
var r=secs * 1000;
var ax=Math.abs(secs);
if (((ax | 1000) >>> 31 != 0)) {
if (((r/1000|0)) != secs) {
return (secs < 0) ? -9223372036854775808 : 9223372036854775807;
}}return r + (nanos/1000000|0);
}});

Clazz.newMeth(C$, 'scale$J$J$J', function (d, m, over) {
if (d > over) return 9223372036854775807;
if (d < -over) return -9223372036854775808;
return d * m;
}, 1);

Clazz.newMeth(C$, 'toInstant$', function () {
if (this.instant == null ) {
var secs=0;
var nanos=0;
switch (this.unit) {
case $I$(2).DAYS:
secs=C$.scale$J$J$J(this.value, 86400, 106751991167300);
break;
case $I$(2).HOURS:
secs=C$.scale$J$J$J(this.value, 3600, 2562047788015215);
break;
case $I$(2).MINUTES:
secs=C$.scale$J$J$J(this.value, 60, 153722867280912930);
break;
case $I$(2).SECONDS:
secs=this.value;
break;
case $I$(2).MILLISECONDS:
secs=Math.floorDiv(this.value, 1000);
nanos=(Math.floorMod(this.value, 1000)|0) * 1000000;
break;
case $I$(2).MICROSECONDS:
secs=Math.floorDiv(this.value, 1000000);
nanos=(Math.floorMod(this.value, 1000000)|0) * 1000;
break;
case $I$(2).NANOSECONDS:
secs=Math.floorDiv(this.value, 1000000000);
nanos=(Math.floorMod(this.value, 1000000000)|0);
break;
default:
throw Clazz.new_($I$(3).c$$O,["Unit not handled"]);
}
if (secs <= -31557014167219200) this.instant=$I$(4).MIN;
 else if (secs >= 31556889864403199) this.instant=$I$(4).MAX;
 else this.instant=$I$(4).ofEpochSecond$J$J(secs, nanos);
}return this.instant;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return (Clazz.instanceOf(obj, "java.nio.file.attribute.FileTime")) ? this.compareTo$java_nio_file_attribute_FileTime(obj) == 0 : false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.toInstant$().hashCode$();
});

Clazz.newMeth(C$, 'toDays', function () {
if (this.unit != null ) {
return this.unit.toDays$J(this.value);
} else {
return $I$(2).SECONDS.toDays$J(this.toInstant$().getEpochSecond$());
}}, p$1);

Clazz.newMeth(C$, 'toExcessNanos$J', function (days) {
if (this.unit != null ) {
return this.unit.toNanos$J(this.value - this.unit.convert$J$java_util_concurrent_TimeUnit(days, $I$(2).DAYS));
} else {
return $I$(2).SECONDS.toNanos$J(this.toInstant$().getEpochSecond$() - $I$(2).DAYS.toSeconds$J(days));
}}, p$1);

Clazz.newMeth(C$, ['compareTo$java_nio_file_attribute_FileTime','compareTo$','compareTo$TT'], function (other) {
if (this.unit != null  && this.unit === other.unit  ) {
return Long.compare$J$J(this.value, other.value);
} else {
var secs=this.toInstant$().getEpochSecond$();
var secsOther=other.toInstant$().getEpochSecond$();
var cmp=Long.compare$J$J(secs, secsOther);
if (cmp != 0) {
return cmp;
}cmp=Long.compare$J$J(this.toInstant$().getNano$(), other.toInstant$().getNano$());
if (cmp != 0) {
return cmp;
}if (secs != 31556889864403199 && secs != -31557014167219200 ) {
return 0;
}var days=p$1.toDays.apply(this, []);
var daysOther=p$1.toDays.apply(other, []);
if (days == daysOther) {
return Long.compare$J$J(p$1.toExcessNanos$J.apply(this, [days]), p$1.toExcessNanos$J.apply(other, [daysOther]));
}return Long.compare$J$J(days, daysOther);
}});

Clazz.newMeth(C$, 'append$StringBuilder$I$I', function (sb, w, d) {
while (w > 0){
sb.append$C(String.fromCharCode(((d/w|0) + 48)));
d=d % w;
w=(w/(10)|0);
}
return sb;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
if (this.valueAsString == null ) {
var secs=0;
var nanos=0;
if (this.instant == null  && this.unit.compareTo$TE($I$(2).SECONDS) >= 0 ) {
secs=this.unit.toSeconds$J(this.value);
} else {
secs=this.toInstant$().getEpochSecond$();
nanos=this.toInstant$().getNano$();
}var ldt;
var year=0;
if (secs >= -62167219200) {
var zeroSecs=secs - 315569520000 + 62167219200;
var hi=Math.floorDiv(zeroSecs, 315569520000) + 1;
var lo=Math.floorMod(zeroSecs, 315569520000);
ldt=$I$(5).ofEpochSecond$J$I$java_time_ZoneOffset(lo - 62167219200, nanos, $I$(6).UTC);
year=ldt.getYear$() + (hi|0) * 10000;
} else {
var zeroSecs=secs + 62167219200;
var hi=(zeroSecs/315569520000|0);
var lo=zeroSecs % 315569520000;
ldt=$I$(5).ofEpochSecond$J$I$java_time_ZoneOffset(lo - 62167219200, nanos, $I$(6).UTC);
year=ldt.getYear$() + (hi|0) * 10000;
}if (year <= 0) {
year=year - 1;
}var fraction=ldt.getNano$();
var sb=Clazz.new_($I$(7).c$$I,[64]);
sb.append$S(year < 0 ? "-" : "");
year=Math.abs(year);
if (year < 10000) {
p$1.append$StringBuilder$I$I.apply(this, [sb, 1000, Math.abs(year)]);
} else {
sb.append$S(String.valueOf$I(year));
}sb.append$C("-");
p$1.append$StringBuilder$I$I.apply(this, [sb, 10, ldt.getMonthValue$()]);
sb.append$C("-");
p$1.append$StringBuilder$I$I.apply(this, [sb, 10, ldt.getDayOfMonth$()]);
sb.append$C("T");
p$1.append$StringBuilder$I$I.apply(this, [sb, 10, ldt.getHour$()]);
sb.append$C(":");
p$1.append$StringBuilder$I$I.apply(this, [sb, 10, ldt.getMinute$()]);
sb.append$C(":");
p$1.append$StringBuilder$I$I.apply(this, [sb, 10, ldt.getSecond$()]);
if (fraction != 0) {
sb.append$C(".");
var w=100000000;
while (fraction % 10 == 0){
fraction=(fraction/(10)|0);
w=(w/(10)|0);
}
p$1.append$StringBuilder$I$I.apply(this, [sb, w, fraction]);
}sb.append$C("Z");
this.valueAsString=sb.toString();
}return this.valueAsString;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
