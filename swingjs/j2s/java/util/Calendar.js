(function(){var P$=java.util,p$1={},I$=[[0,'java.util.Hashtable','java.util.TimeZone','java.util.Locale','java.util.GregorianCalendar','java.util.Date','java.text.DateFormatSymbols','java.util.HashMap','InternalError','StringBuilder','sun.util.resources.LocaleData']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Calendar", null, null, ['Cloneable', 'Comparable']);
C$.cachedLocaleData=null;
C$.FIELD_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.cachedLocaleData=Clazz.new_($I$(1).c$$I,[3]);
C$.FIELD_NAME=Clazz.array(String, -1, ["ERA", "YEAR", "MONTH", "WEEK_OF_YEAR", "WEEK_OF_MONTH", "DAY_OF_MONTH", "DAY_OF_YEAR", "DAY_OF_WEEK", "DAY_OF_WEEK_IN_MONTH", "AM_PM", "HOUR", "HOUR_OF_DAY", "MINUTE", "SECOND", "MILLISECOND", "ZONE_OFFSET", "DST_OFFSET"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fields=null;
this.isSet=null;
this.stamp=null;
this.time=0;
this.isTimeSet=false;
this.areFieldsSet=false;
this.areAllFieldsSet=false;
this.lenient=false;
this.zone=null;
this.sharedZone=false;
this.firstDayOfWeek=0;
this.minimalDaysInFirstWeek=0;
this.nextStamp=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lenient=true;
this.sharedZone=false;
this.nextStamp=2;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [$I$(2).getDefaultRef$(), $I$(3).getDefault$()]);
this.sharedZone=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone$java_util_Locale', function (zone, aLocale) {
C$.$init$.apply(this);
this.fields=Clazz.array(Integer.TYPE, [17]);
this.isSet=Clazz.array(Boolean.TYPE, [17]);
this.stamp=Clazz.array(Integer.TYPE, [17]);
this.zone=zone;
p$1.setWeekCountData$java_util_Locale.apply(this, [aLocale]);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
var cal=C$.createCalendar$java_util_TimeZone$java_util_Locale($I$(2).getDefaultRef$(), $I$(3).getDefault$());
cal.sharedZone=true;
return cal;
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_TimeZone', function (zone) {
return C$.createCalendar$java_util_TimeZone$java_util_Locale(zone, $I$(3).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale', function (aLocale) {
var cal=C$.createCalendar$java_util_TimeZone$java_util_Locale($I$(2).getDefaultRef$(), aLocale);
cal.sharedZone=true;
return cal;
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_TimeZone$java_util_Locale', function (zone, aLocale) {
return C$.createCalendar$java_util_TimeZone$java_util_Locale(zone, aLocale);
}, 1);

Clazz.newMeth(C$, 'createCalendar$java_util_TimeZone$java_util_Locale', function (zone, aLocale) {
return Clazz.new_($I$(4).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
}, 1);

Clazz.newMeth(C$, 'getTime$', function () {
return Clazz.new_($I$(5).c$$J,[this.getTimeInMillis$()]);
});

Clazz.newMeth(C$, 'setTime$java_util_Date', function (date) {
this.setTimeInMillis$J(date.getTime$());
});

Clazz.newMeth(C$, 'getTimeInMillis$', function () {
if (!this.isTimeSet) {
p$1.updateTime.apply(this, []);
}return this.time;
});

Clazz.newMeth(C$, 'setTimeInMillis$J', function (millis) {
if (this.time == millis && this.isTimeSet  && this.areFieldsSet  && this.areAllFieldsSet  && (Clazz.instanceOf(this.zone, "sun.util.calendar.ZoneInfo"))  && !(this.zone).isDirty$() ) {
return;
}this.time=millis;
this.isTimeSet=true;
this.areFieldsSet=false;
this.computeFields$();
this.areAllFieldsSet=this.areFieldsSet=true;
});

Clazz.newMeth(C$, 'get$I', function (field) {
this.complete$();
return this.internalGet$I(field);
});

Clazz.newMeth(C$, 'internalGet$I', function (field) {
return this.fields[field];
});

Clazz.newMeth(C$, 'internalSet$I$I', function (field, value) {
this.fields[field]=value;
});

Clazz.newMeth(C$, 'set$I$I', function (field, value) {
if (this.isLenient$() && this.areFieldsSet && !this.areAllFieldsSet  ) {
this.computeFields$();
}this.internalSet$I$I(field, value);
this.isTimeSet=false;
this.areFieldsSet=false;
this.isSet[field]=true;
this.stamp[field]=this.nextStamp++;
if (this.nextStamp == 2147483647) {
p$1.adjustStamp.apply(this, []);
}});

Clazz.newMeth(C$, 'set$I$I$I', function (year, month, date) {
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, date);
});

Clazz.newMeth(C$, 'set$I$I$I$I$I', function (year, month, date, hourOfDay, minute) {
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, date);
this.set$I$I(11, hourOfDay);
this.set$I$I(12, minute);
});

Clazz.newMeth(C$, 'set$I$I$I$I$I$I', function (year, month, date, hourOfDay, minute, second) {
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, date);
this.set$I$I(11, hourOfDay);
this.set$I$I(12, minute);
this.set$I$I(13, second);
});

Clazz.newMeth(C$, 'clear$', function () {
for (var i=0; i < this.fields.length; ) {
this.stamp[i]=this.fields[i]=0;
this.isSet[i++]=false;
}
this.areAllFieldsSet=this.areFieldsSet=false;
this.isTimeSet=false;
});

Clazz.newMeth(C$, 'clear$I', function (field) {
this.fields[field]=0;
this.stamp[field]=0;
this.isSet[field]=false;
this.areAllFieldsSet=this.areFieldsSet=false;
this.isTimeSet=false;
});

Clazz.newMeth(C$, 'isSet$I', function (field) {
return this.stamp[field] != 0;
});

Clazz.newMeth(C$, 'getDisplayName$I$I$java_util_Locale', function (field, style, locale) {
if (!this.checkDisplayNameParams$I$I$I$I$java_util_Locale$I(field, style, 0, 2, locale, 645)) {
return null;
}var symbols=$I$(6).getInstance$java_util_Locale(locale);
var strings=p$1.getFieldStrings$I$I$java_text_DateFormatSymbols.apply(this, [field, style, symbols]);
if (strings != null ) {
var fieldValue=this.get$I(field);
if (fieldValue < strings.length) {
return strings[fieldValue];
}}return null;
});

Clazz.newMeth(C$, 'getDisplayNames$I$I$java_util_Locale', function (field, style, locale) {
if (!this.checkDisplayNameParams$I$I$I$I$java_util_Locale$I(field, style, 0, 2, locale, 645)) {
return null;
}if (style == 0) {
var shortNames=p$1.getDisplayNamesImpl$I$I$java_util_Locale.apply(this, [field, 1, locale]);
if (field == 0 || field == 9 ) {
return shortNames;
}var longNames=p$1.getDisplayNamesImpl$I$I$java_util_Locale.apply(this, [field, 2, locale]);
if (shortNames == null ) {
return longNames;
}if (longNames != null ) {
shortNames.putAll$java_util_Map(longNames);
}return shortNames;
}return p$1.getDisplayNamesImpl$I$I$java_util_Locale.apply(this, [field, style, locale]);
});

Clazz.newMeth(C$, 'getDisplayNamesImpl$I$I$java_util_Locale', function (field, style, locale) {
var symbols=$I$(6).getInstance$java_util_Locale(locale);
var strings=p$1.getFieldStrings$I$I$java_text_DateFormatSymbols.apply(this, [field, style, symbols]);
if (strings != null ) {
var names=Clazz.new_($I$(7));
for (var i=0; i < strings.length; i++) {
if (strings[i].length$() == 0) {
continue;
}names.put$TK$TV(strings[i], new Integer(i));
}
return names;
}return null;
}, p$1);

Clazz.newMeth(C$, 'checkDisplayNameParams$I$I$I$I$java_util_Locale$I', function (field, style, minStyle, maxStyle, locale, fieldMask) {
if (field < 0 || field >= this.fields.length  || style < minStyle  || style > maxStyle ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return C$.isFieldSet$I$I(fieldMask, field);
});

Clazz.newMeth(C$, 'getFieldStrings$I$I$java_text_DateFormatSymbols', function (field, style, symbols) {
var strings=null;
switch (field) {
case 0:
strings=symbols.getEras$();
break;
case 2:
strings=(style == 2) ? symbols.getMonths$() : symbols.getShortMonths$();
break;
case 7:
strings=(style == 2) ? symbols.getWeekdays$() : symbols.getShortWeekdays$();
break;
case 9:
strings=symbols.getAmPmStrings$();
break;
}
return strings;
}, p$1);

Clazz.newMeth(C$, 'complete$', function () {
if (!this.isTimeSet) p$1.updateTime.apply(this, []);
if (!this.areFieldsSet || !this.areAllFieldsSet ) {
this.computeFields$();
this.areAllFieldsSet=this.areFieldsSet=true;
}});

Clazz.newMeth(C$, 'isExternallySet$I', function (field) {
return this.stamp[field] >= 2;
});

Clazz.newMeth(C$, 'getSetStateFields$', function () {
var mask=0;
for (var i=0; i < this.fields.length; i++) {
if (this.stamp[i] != 0) {
mask|=1 << i;
}}
return mask;
});

Clazz.newMeth(C$, 'setFieldsComputed$I', function (fieldMask) {
if (fieldMask == 131071) {
for (var i=0; i < this.fields.length; i++) {
this.stamp[i]=1;
this.isSet[i]=true;
}
this.areFieldsSet=this.areAllFieldsSet=true;
} else {
for (var i=0; i < this.fields.length; i++) {
if ((fieldMask & 1) == 1) {
this.stamp[i]=1;
this.isSet[i]=true;
} else {
if (this.areAllFieldsSet && !this.isSet[i] ) {
this.areAllFieldsSet=false;
}}fieldMask>>>=1;
}
}});

Clazz.newMeth(C$, 'setFieldsNormalized$I', function (fieldMask) {
if (fieldMask != 131071) {
for (var i=0; i < this.fields.length; i++) {
if ((fieldMask & 1) == 0) {
this.stamp[i]=this.fields[i]=0;
this.isSet[i]=false;
}fieldMask>>=1;
}
}this.areFieldsSet=true;
this.areAllFieldsSet=false;
});

Clazz.newMeth(C$, 'isPartiallyNormalized$', function () {
return this.areFieldsSet && !this.areAllFieldsSet ;
});

Clazz.newMeth(C$, 'isFullyNormalized$', function () {
return this.areFieldsSet && this.areAllFieldsSet ;
});

Clazz.newMeth(C$, 'setUnnormalized$', function () {
this.areFieldsSet=this.areAllFieldsSet=false;
});

Clazz.newMeth(C$, 'isFieldSet$I$I', function (fieldMask, field) {
return (fieldMask & (1 << field)) != 0;
}, 1);

Clazz.newMeth(C$, 'selectFields$', function () {
var fieldMask=2;
if (this.stamp[0] != 0) {
fieldMask|=1;
}var dowStamp=this.stamp[7];
var monthStamp=this.stamp[2];
var domStamp=this.stamp[5];
var womStamp=C$.aggregateStamp$I$I(this.stamp[4], dowStamp);
var dowimStamp=C$.aggregateStamp$I$I(this.stamp[8], dowStamp);
var doyStamp=this.stamp[6];
var woyStamp=C$.aggregateStamp$I$I(this.stamp[3], dowStamp);
var bestStamp=domStamp;
if (womStamp > bestStamp) {
bestStamp=womStamp;
}if (dowimStamp > bestStamp) {
bestStamp=dowimStamp;
}if (doyStamp > bestStamp) {
bestStamp=doyStamp;
}if (woyStamp > bestStamp) {
bestStamp=woyStamp;
}if (bestStamp == 0) {
womStamp=this.stamp[4];
dowimStamp=Math.max(this.stamp[8], dowStamp);
woyStamp=this.stamp[3];
bestStamp=Math.max(Math.max(womStamp, dowimStamp), woyStamp);
if (bestStamp == 0) {
bestStamp=domStamp=monthStamp;
}}if (bestStamp == domStamp || (bestStamp == womStamp && this.stamp[4] >= this.stamp[3] )  || (bestStamp == dowimStamp && this.stamp[8] >= this.stamp[3] ) ) {
fieldMask|=4;
if (bestStamp == domStamp) {
fieldMask|=32;
} else {
Clazz.assert(C$, this, function(){return (bestStamp == womStamp || bestStamp == dowimStamp )});
if (dowStamp != 0) {
fieldMask|=128;
}if (womStamp == dowimStamp) {
if (this.stamp[4] >= this.stamp[8]) {
fieldMask|=16;
} else {
fieldMask|=256;
}} else {
if (bestStamp == womStamp) {
fieldMask|=16;
} else {
Clazz.assert(C$, this, function(){return (bestStamp == dowimStamp)});
if (this.stamp[8] != 0) {
fieldMask|=256;
}}}}} else {
Clazz.assert(C$, this, function(){return (bestStamp == doyStamp || bestStamp == woyStamp  || bestStamp == 0 )});
if (bestStamp == doyStamp) {
fieldMask|=64;
} else {
Clazz.assert(C$, this, function(){return (bestStamp == woyStamp)});
if (dowStamp != 0) {
fieldMask|=128;
}fieldMask|=8;
}}var hourOfDayStamp=this.stamp[11];
var hourStamp=C$.aggregateStamp$I$I(this.stamp[10], this.stamp[9]);
bestStamp=(hourStamp > hourOfDayStamp) ? hourStamp : hourOfDayStamp;
if (bestStamp == 0) {
bestStamp=Math.max(this.stamp[10], this.stamp[9]);
}if (bestStamp != 0) {
if (bestStamp == hourOfDayStamp) {
fieldMask|=2048;
} else {
fieldMask|=1024;
if (this.stamp[9] != 0) {
fieldMask|=512;
}}}if (this.stamp[12] != 0) {
fieldMask|=4096;
}if (this.stamp[13] != 0) {
fieldMask|=8192;
}if (this.stamp[14] != 0) {
fieldMask|=16384;
}if (this.stamp[15] >= 2) {
fieldMask|=32768;
}if (this.stamp[16] >= 2) {
fieldMask|=65536;
}return fieldMask;
});

Clazz.newMeth(C$, 'aggregateStamp$I$I', function (stamp_a, stamp_b) {
if (stamp_a == 0 || stamp_b == 0 ) {
return 0;
}return (stamp_a > stamp_b) ? stamp_a : stamp_b;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) return true;
try {
var that=obj;
return p$1.compareTo$J.apply(this, [C$.getMillisOf$java_util_Calendar(that)]) == 0 && this.lenient == that.lenient   && this.firstDayOfWeek == that.firstDayOfWeek  && this.minimalDaysInFirstWeek == that.minimalDaysInFirstWeek  && this.zone.equals$O(that.zone) ;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var otheritems=(this.lenient ? 1 : 0) | (this.firstDayOfWeek << 1) | (this.minimalDaysInFirstWeek << 4) | (this.zone.hashCode$() << 7) ;
var t=C$.getMillisOf$java_util_Calendar(this);
return (t|0) ^ ((t >> 32)|0) ^ otheritems ;
});

Clazz.newMeth(C$, 'before$O', function (when) {
return Clazz.instanceOf(when, "java.util.Calendar") && this.compareTo$java_util_Calendar(when) < 0 ;
});

Clazz.newMeth(C$, 'after$O', function (when) {
return Clazz.instanceOf(when, "java.util.Calendar") && this.compareTo$java_util_Calendar(when) > 0 ;
});

Clazz.newMeth(C$, ['compareTo$java_util_Calendar','compareTo$','compareTo$TT'], function (anotherCalendar) {
return p$1.compareTo$J.apply(this, [C$.getMillisOf$java_util_Calendar(anotherCalendar)]);
});

Clazz.newMeth(C$, 'roll$I$I', function (field, amount) {
while (amount > 0){
this.roll$I$Z(field, true);
amount--;
}
while (amount < 0){
this.roll$I$Z(field, false);
amount++;
}
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone', function (value) {
this.zone=value;
this.sharedZone=false;
this.areAllFieldsSet=this.areFieldsSet=false;
});

Clazz.newMeth(C$, 'getTimeZone$', function () {
if (this.sharedZone) {
this.zone=this.zone.clone$();
this.sharedZone=false;
}return this.zone;
});

Clazz.newMeth(C$, 'getZone$', function () {
return this.zone;
});

Clazz.newMeth(C$, 'setZoneShared$Z', function (shared) {
this.sharedZone=shared;
});

Clazz.newMeth(C$, 'setLenient$Z', function (lenient) {
this.lenient=lenient;
});

Clazz.newMeth(C$, 'isLenient$', function () {
return this.lenient;
});

Clazz.newMeth(C$, 'setFirstDayOfWeek$I', function (value) {
if (this.firstDayOfWeek == value) {
return;
}this.firstDayOfWeek=value;
p$1.invalidateWeekFields.apply(this, []);
});

Clazz.newMeth(C$, 'getFirstDayOfWeek$', function () {
return this.firstDayOfWeek;
});

Clazz.newMeth(C$, 'setMinimalDaysInFirstWeek$I', function (value) {
if (this.minimalDaysInFirstWeek == value) {
return;
}this.minimalDaysInFirstWeek=value;
p$1.invalidateWeekFields.apply(this, []);
});

Clazz.newMeth(C$, 'getMinimalDaysInFirstWeek$', function () {
return this.minimalDaysInFirstWeek;
});

Clazz.newMeth(C$, 'getActualMinimum$I', function (field) {
var fieldValue=this.getGreatestMinimum$I(field);
var endValue=this.getMinimum$I(field);
if (fieldValue == endValue) {
return fieldValue;
}var work=this.clone$();
work.setLenient$Z(true);
var result=fieldValue;
do {
work.set$I$I(field, fieldValue);
if (work.get$I(field) != fieldValue) {
break;
} else {
result=fieldValue;
fieldValue--;
}} while (fieldValue >= endValue);
return result;
});

Clazz.newMeth(C$, 'getActualMaximum$I', function (field) {
var fieldValue=this.getLeastMaximum$I(field);
var endValue=this.getMaximum$I(field);
if (fieldValue == endValue) {
return fieldValue;
}var work=this.clone$();
work.setLenient$Z(true);
if (field == 3 || field == 4 ) work.set$I$I(7, this.firstDayOfWeek);
var result=fieldValue;
do {
work.set$I$I(field, fieldValue);
if (work.get$I(field) != fieldValue) {
break;
} else {
result=fieldValue;
fieldValue++;
}} while (fieldValue <= endValue);
return result;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var other=Clazz.clone(this);
other.fields=Clazz.array(Integer.TYPE, [17]);
other.isSet=Clazz.array(Boolean.TYPE, [17]);
other.stamp=Clazz.array(Integer.TYPE, [17]);
for (var i=0; i < 17; i++) {
other.fields[i]=this.fields[i];
other.stamp[i]=this.stamp[i];
other.isSet[i]=this.isSet[i];
}
other.zone=this.zone.clone$();
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(8));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getFieldName$I', function (field) {
return C$.FIELD_NAME[field];
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var buffer=Clazz.new_($I$(9).c$$I,[800]);
buffer.append$S(this.getClass$().getName$()).append$C("[");
C$.appendValue$StringBuilder$S$Z$J(buffer, "time", this.isTimeSet, this.time);
buffer.append$S(",areFieldsSet=").append$Z(this.areFieldsSet);
buffer.append$S(",areAllFieldsSet=").append$Z(this.areAllFieldsSet);
buffer.append$S(",lenient=").append$Z(this.lenient);
buffer.append$S(",zone=").append$O(this.zone);
C$.appendValue$StringBuilder$S$Z$J(buffer, ",firstDayOfWeek", true, this.firstDayOfWeek);
C$.appendValue$StringBuilder$S$Z$J(buffer, ",minimalDaysInFirstWeek", true, this.minimalDaysInFirstWeek);
for (var i=0; i < 17; ++i) {
buffer.append$C(",");
C$.appendValue$StringBuilder$S$Z$J(buffer, C$.FIELD_NAME[i], this.isSet$I(i), this.fields[i]);
}
buffer.append$C("]");
return buffer.toString();
});

Clazz.newMeth(C$, 'appendValue$StringBuilder$S$Z$J', function (sb, item, valid, value) {
sb.append$S(item).append$C("=");
if (valid) {
sb.append$J(value);
} else {
sb.append$C("?");
}}, 1);

Clazz.newMeth(C$, 'setWeekCountData$java_util_Locale', function (desiredLocale) {
var data=C$.cachedLocaleData.get$O(desiredLocale);
if (data == null ) {
var bundle=$I$(10).getCalendarData$java_util_Locale(desiredLocale);
data=Clazz.array(Integer.TYPE, [2]);
data[0]=Integer.parseInt$S(bundle.getString$S("firstDayOfWeek"));
data[1]=Integer.parseInt$S(bundle.getString$S("minimalDaysInFirstWeek"));
C$.cachedLocaleData.put$TK$TV(desiredLocale, data);
}this.firstDayOfWeek=data[0];
this.minimalDaysInFirstWeek=data[1];
}, p$1);

Clazz.newMeth(C$, 'updateTime', function () {
this.computeTime$();
this.isTimeSet=true;
}, p$1);

Clazz.newMeth(C$, ['compareTo$J','compareTonull'], function (t) {
var thisTime=C$.getMillisOf$java_util_Calendar(this);
return (thisTime > t) ? 1 : (thisTime == t) ? 0 : -1;
}, p$1);

Clazz.newMeth(C$, 'getMillisOf$java_util_Calendar', function (calendar) {
if (calendar.isTimeSet) {
return calendar.time;
}var cal=calendar.clone$();
cal.setLenient$Z(true);
return cal.getTimeInMillis$();
}, 1);

Clazz.newMeth(C$, 'adjustStamp', function () {
var max=2;
var newStamp=2;
for (; ; ) {
var min=2147483647;
for (var i=0; i < this.stamp.length; i++) {
var v=this.stamp[i];
if (v >= newStamp && min > v ) {
min=v;
}if (max < v) {
max=v;
}}
if (max != min && min == 2147483647 ) {
break;
}for (var i=0; i < this.stamp.length; i++) {
if (this.stamp[i] == min) {
this.stamp[i]=newStamp;
}}
newStamp++;
if (min == max) {
break;
}}
this.nextStamp=newStamp;
}, p$1);

Clazz.newMeth(C$, 'invalidateWeekFields', function () {
if (this.stamp[4] != 1 && this.stamp[3] != 1 ) {
return;
}var cal=this.clone$();
cal.setLenient$Z(true);
cal.clear$I(4);
cal.clear$I(3);
if (this.stamp[4] == 1) {
var weekOfMonth=cal.get$I(4);
if (this.fields[4] != weekOfMonth) {
this.fields[4]=weekOfMonth;
}}if (this.stamp[3] == 1) {
var weekOfYear=cal.get$I(3);
if (this.fields[3] != weekOfYear) {
this.fields[3]=weekOfYear;
}}}, p$1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
