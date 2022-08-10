(function(){var P$=Clazz.newPackage("java.time.format"),p$1={},I$=[[0,'java.util.ArrayList','java.time.format.Parsed','java.time.chrono.IsoChronology','java.util.Objects','java.util.function.Consumer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateTimeParseContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.caseSensitive=true;
this.strict=true;
this.parsed=Clazz.new_($I$(1,1));
this.chronoListeners=null;
},1);

C$.$fields$=[['Z',['caseSensitive','strict'],'O',['formatter','java.time.format.DateTimeFormatter','parsed','java.util.ArrayList','+chronoListeners']]]

Clazz.newMeth(C$, 'c$$java_time_format_DateTimeFormatter', function (formatter) {
;C$.$init$.apply(this);
this.formatter=formatter;
this.parsed.add$O(Clazz.new_($I$(2,1)));
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var newContext=Clazz.new_(C$.c$$java_time_format_DateTimeFormatter,[this.formatter]);
newContext.caseSensitive=this.caseSensitive;
newContext.strict=this.strict;
return newContext;
});

Clazz.newMeth(C$, 'getLocale$', function () {
return this.formatter.getLocale$();
});

Clazz.newMeth(C$, 'getDecimalStyle$', function () {
return this.formatter.getDecimalStyle$();
});

Clazz.newMeth(C$, 'getEffectiveChronology$', function () {
var chrono=p$1.currentParsed.apply(this, []).chrono;
if (chrono == null ) {
chrono=this.formatter.getChronology$();
if (chrono == null ) {
chrono=$I$(3).INSTANCE;
}}return chrono;
});

Clazz.newMeth(C$, 'isCaseSensitive$', function () {
return this.caseSensitive;
});

Clazz.newMeth(C$, 'setCaseSensitive$Z', function (caseSensitive) {
this.caseSensitive=caseSensitive;
});

Clazz.newMeth(C$, 'subSequenceEquals$CharSequence$I$CharSequence$I$I', function (cs1, offset1, cs2, offset2, length) {
if (offset1 + length > cs1.length$() || offset2 + length > cs2.length$() ) {
return false;
}if (this.isCaseSensitive$()) {
for (var i=0; i < length; i++) {
var ch1=cs1.charAt$I(offset1 + i);
var ch2=cs2.charAt$I(offset2 + i);
if (ch1 != ch2) {
return false;
}}
} else {
for (var i=0; i < length; i++) {
var ch1=cs1.charAt$I(offset1 + i);
var ch2=cs2.charAt$I(offset2 + i);
if (ch1 != ch2 && Character.toUpperCase$C(ch1) != Character.toUpperCase$C(ch2)  && Character.toLowerCase$C(ch1) != Character.toLowerCase$C(ch2) ) {
return false;
}}
}return true;
});

Clazz.newMeth(C$, 'charEquals$C$C', function (ch1, ch2) {
if (this.isCaseSensitive$()) {
return ch1 == ch2;
}return C$.charEqualsIgnoreCase$C$C(ch1, ch2);
});

Clazz.newMeth(C$, 'charEqualsIgnoreCase$C$C', function (c1, c2) {
return c1 == c2 || Character.toUpperCase$C(c1) == Character.toUpperCase$C(c2)  || Character.toLowerCase$C(c1) == Character.toLowerCase$C(c2) ;
}, 1);

Clazz.newMeth(C$, 'isStrict$', function () {
return this.strict;
});

Clazz.newMeth(C$, 'setStrict$Z', function (strict) {
this.strict=strict;
});

Clazz.newMeth(C$, 'startOptional$', function () {
this.parsed.add$O(p$1.currentParsed.apply(this, []).copy$());
});

Clazz.newMeth(C$, 'endOptional$Z', function (successful) {
if (successful) {
this.parsed.remove$I(this.parsed.size$() - 2);
} else {
this.parsed.remove$I(this.parsed.size$() - 1);
}});

Clazz.newMeth(C$, 'currentParsed', function () {
return this.parsed.get$I(this.parsed.size$() - 1);
}, p$1);

Clazz.newMeth(C$, 'toUnresolved$', function () {
return p$1.currentParsed.apply(this, []);
});

Clazz.newMeth(C$, 'toResolved$java_time_format_ResolverStyle$java_util_Set', function (resolverStyle, resolverFields) {
var parsed=p$1.currentParsed.apply(this, []);
parsed.chrono=this.getEffectiveChronology$();
parsed.zone=(parsed.zone != null  ? parsed.zone : this.formatter.getZone$());
return parsed.resolve$java_time_format_ResolverStyle$java_util_Set(resolverStyle, resolverFields);
});

Clazz.newMeth(C$, 'getParsed$java_time_temporal_TemporalField', function (field) {
return p$1.currentParsed.apply(this, []).fieldValues.get$O(field);
});

Clazz.newMeth(C$, 'setParsedField$java_time_temporal_TemporalField$J$I$I', function (field, value, errorPos, successPos) {
$I$(4).requireNonNull$O$S(field, "field");
var old=p$1.currentParsed.apply(this, []).fieldValues.put$O$O(field, Long.valueOf$J(value));
return (old != null  && old.longValue$() != value ) ? ~errorPos : successPos;
});

Clazz.newMeth(C$, 'setParsed$java_time_chrono_Chronology', function (chrono) {
$I$(4).requireNonNull$O$S(chrono, "chrono");
p$1.currentParsed.apply(this, []).chrono=chrono;
if (this.chronoListeners != null  && !this.chronoListeners.isEmpty$() ) {
var tmp=Clazz.array($I$(5), [1]);
var listeners=this.chronoListeners.toArray$OA(tmp);
this.chronoListeners.clear$();
for (var l, $l = 0, $$l = listeners; $l<$$l.length&&((l=($$l[$l])),1);$l++) {
l.accept$O(chrono);
}
}});

Clazz.newMeth(C$, 'addChronoChangedListener$java_util_function_Consumer', function (listener) {
if (this.chronoListeners == null ) {
this.chronoListeners=Clazz.new_($I$(1,1));
}this.chronoListeners.add$O(listener);
});

Clazz.newMeth(C$, 'setParsed$java_time_ZoneId', function (zone) {
$I$(4).requireNonNull$O$S(zone, "zone");
p$1.currentParsed.apply(this, []).zone=zone;
});

Clazz.newMeth(C$, 'setParsedLeapSecond$', function () {
p$1.currentParsed.apply(this, []).leapSecond=true;
});

Clazz.newMeth(C$, 'toString', function () {
return p$1.currentParsed.apply(this, []).toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
