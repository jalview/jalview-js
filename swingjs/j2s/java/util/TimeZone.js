(function(){var P$=java.util,I$=[[0,'java.util.Date','sun.util.calendar.ZoneInfo','InternalError','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TimeZone", null, null, 'Cloneable');
C$.NO_TIMEZONE=null;
C$.defaultTimeZone=null;
C$.zoneInfoObjects=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NO_TIMEZONE=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ID=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ID="GMT";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getOffset$J', function (date) {
if (this.inDaylightTime$java_util_Date(Clazz.new_($I$(1).c$$J,[date]))) {
return this.getRawOffset$() + this.getDSTSavings$();
}return this.getRawOffset$();
});

Clazz.newMeth(C$, 'getOffsets$J$IA', function (date, offsets) {
var rawoffset=this.getRawOffset$();
var dstoffset=0;
if (this.inDaylightTime$java_util_Date(Clazz.new_($I$(1).c$$J,[date]))) {
dstoffset=this.getDSTSavings$();
}if (offsets != null ) {
offsets[0]=rawoffset;
offsets[1]=dstoffset;
}return rawoffset + dstoffset;
});

Clazz.newMeth(C$, 'getID$', function () {
return this.ID;
});

Clazz.newMeth(C$, 'setID$S', function (ID) {
if (ID == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.ID=ID;
});

Clazz.newMeth(C$, 'getDSTSavings$', function () {
if (this.useDaylightTime$()) {
return 3600000;
}return 0;
});

Clazz.newMeth(C$, 'getTimeZone$S', function (ID) {
return C$.getTimeZone$S$Z(ID, true);
}, 1);

Clazz.newMeth(C$, 'getTimeZone$S$Z', function (ID, fallback) {
var tz=null;
tz=C$.parseCustomTimeZone$S(ID);
if (tz == null  && fallback ) {
tz=Clazz.new_($I$(2).c$$S$I,["GMT", 0]);
}return tz;
}, 1);

Clazz.newMeth(C$, 'getAvailableIDs$I', function (rawOffset) {
return null;
}, 1);

Clazz.newMeth(C$, 'getAvailableIDs$', function () {
return null;
}, 1);

Clazz.newMeth(C$, 'getDefault$', function () {
return C$.getDefaultRef$().clone$();
}, 1);

Clazz.newMeth(C$, 'getDefaultRef$', function () {
if (C$.defaultTimeZone == null ) {
var ms=C$.getTimeZoneOffsetMillis$();
var gmtOffsetID=C$.getGMTID$I(ms);
C$.defaultTimeZone=C$.getTimeZone$S$Z(gmtOffsetID, true);
C$.addToCache$S$sun_util_calendar_ZoneInfo(gmtOffsetID, Clazz.new_($I$(2).c$$S$I,[gmtOffsetID, ms]));
}return C$.defaultTimeZone;
}, 1);

Clazz.newMeth(C$, 'getTimeZoneOffsetMillis$', function () {
return 1?-(new Date()).getTimezoneOffset() * 60000 :0;
}, 1);

Clazz.newMeth(C$, 'setDefault$java_util_TimeZone', function (zone) {
}, 1);

Clazz.newMeth(C$, 'hasSameRules$java_util_TimeZone', function (other) {
return other != null  && this.getRawOffset$() == other.getRawOffset$()  && this.useDaylightTime$() == other.useDaylightTime$()  ;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var other=Clazz.clone(this);
other.ID=this.ID;
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parseCustomTimeZone$S', function (id) {
if ((id.length$()) < (5) || id.indexOf$S("GMT") != 0 ) {
return null;
}var zi;
var neghrmin=C$.getOffsetHHMM$S(id);
if (neghrmin == null ) return null;
var gmtOffset=(neghrmin[0]) * (neghrmin[1] * 60 + neghrmin[2]) * 60 * 1000 ;
var gmtID=C$.getGMTID$I(gmtOffset);
zi=Clazz.new_($I$(2));
if (gmtOffset == 0) {
} else {
zi.setRawOffsetReally$I(gmtOffset);
}zi.setID$S(gmtID);
return zi;
}, 1);

Clazz.newMeth(C$, 'getOffsetHHMM$S', function (id) {
var index=3;
var length=id.length$();
var negative=false;
var c=id.charAt$I(index++);
if (c == "-") {
negative=true;
} else if (c != "+") {
return null;
}var hours=0;
var num=0;
var countDelim=0;
var len=0;
while (index < length){
c=id.charAt$I(index++);
if (c == ":") {
if (countDelim > 0) {
return null;
}if (len > 2) {
return null;
}hours=num;
countDelim++;
num=0;
len=0;
continue;
}if (c < "0" || c > "9" ) {
return null;
}num=num * 10 + (c.$c() - 48);
len++;
}
if (index != length) {
return null;
}if (countDelim == 0) {
if (len <= 2) {
hours=num;
num=0;
} else {
hours=(num/100|0);
num%=100;
}} else {
if (len != 2) {
return null;
}}if (hours > 23 || num > 59 ) {
return null;
}return Clazz.array(Integer.TYPE, -1, [(negative ? -1 : 1), hours, num]);
}, 1);

Clazz.newMeth(C$, 'getGMTID$I', function (gmtOffset) {
var isNegative=(gmtOffset < 0);
if (isNegative) gmtOffset=-gmtOffset;
gmtOffset=(gmtOffset/60000|0);
var hours=(gmtOffset/60|0);
var min=gmtOffset - hours * 60;
var NN="00" + hours;
NN=NN.substring$I(NN.length$() - 2);
var MM="00" + min;
MM=MM.substring$I(MM.length$() - 2);
return "GMT" + (isNegative ? "-" : "") + NN ;
}, 1);

Clazz.newMeth(C$, 'getCustomTimeZone$S$I', function (originalId, gmtOffset) {
var id=C$.toCustomID$I(gmtOffset);
var zi=C$.getFromCache$S(id);
if (zi == null ) {
zi=Clazz.new_($I$(2).c$$S$I,[id, gmtOffset]);
zi=C$.addToCache$S$sun_util_calendar_ZoneInfo(id, zi);
if (originalId != null  && !id.equals$O(originalId) ) {
zi=C$.addToCache$S$sun_util_calendar_ZoneInfo(originalId, zi);
}}return zi.clone$();
}, 1);

Clazz.newMeth(C$, 'toCustomID$I', function (gmtOffset) {
var sign;
var offset=(gmtOffset/60000|0);
if (offset >= 0) {
sign="+";
} else {
sign="-";
offset=-offset;
}var hh=(offset/60|0);
var mm=offset % 60;
var buf=Clazz.array(Character.TYPE, -1, ["G", "M", "T", sign, "0", "0", ":", "0", "0"]);
if (hh >= 10) {
buf[4] = String.fromCharCode((buf[4]).$c()+ ((hh/10|0)));
}buf[5] = String.fromCharCode((buf[5]).$c()+ (hh % 10));
if (mm != 0) {
buf[7] = String.fromCharCode((buf[7]).$c()+ ((mm/10|0)));
buf[8] = String.fromCharCode((buf[8]).$c()+ (mm % 10));
}return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'getFromCache$S', function (id) {
if (C$.zoneInfoObjects == null ) {
return null;
}return C$.zoneInfoObjects.get$O(id);
}, 1);

Clazz.newMeth(C$, 'addToCache$S$sun_util_calendar_ZoneInfo', function (id, zi) {
if (C$.zoneInfoObjects == null ) {
C$.zoneInfoObjects=Clazz.new_($I$(4));
} else {
var zone=C$.zoneInfoObjects.get$O(id);
if (zone != null ) {
return zone;
}}C$.zoneInfoObjects.put$TK$TV(id, zi);
return zi;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
