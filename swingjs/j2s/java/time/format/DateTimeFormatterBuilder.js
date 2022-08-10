(function(){var P$=Clazz.newPackage("java.time.format"),p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},p$8={},p$9={},p$10={},p$11={},I$=[[0,['java.time.format.DateTimeFormatterBuilder','.DateTimePrinterParser'],'StringBuilder','java.time.format.SignStyle','java.math.BigInteger','java.time.LocalDate',['java.time.format.DateTimeFormatterBuilder','.NumberPrinterParser'],'java.time.chrono.Chronology','java.util.Objects','java.math.RoundingMode','java.math.BigDecimal','java.time.temporal.TemporalQueries','java.time.chrono.IsoChronology','java.time.format.TextStyle','java.time.temporal.ChronoField','java.time.LocalDateTime','java.time.ZoneOffset','java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatter','java.util.concurrent.ConcurrentHashMap','java.util.HashMap','java.util.HashSet','sun.util.locale.provider.TimeZoneNameUtility','java.util.Arrays','java.lang.ref.SoftReference','java.time.Instant','java.time.zone.ZoneRulesProvider',['java.time.format.DateTimeFormatterBuilder','.PrefixTree'],'java.time.format.ZoneName',['java.util.AbstractMap','.SimpleImmutableEntry'],['java.time.format.DateTimeFormatterBuilder','.OffsetIdPrinterParser'],'java.text.ParsePosition','java.time.ZoneId','java.time.format.DateTimeParseContext',['java.time.format.DateTimeFormatterBuilder','.PrefixTree','.CI'],'java.time.format.DateTimeTextProvider','java.time.temporal.WeekFields',['java.time.format.DateTimeFormatterBuilder','.ReducedPrinterParser'],'java.time.temporal.IsoFields','java.util.ArrayList','sun.util.locale.provider.LocaleProviderAdapter',['java.time.format.DateTimeFormatterBuilder','.SettingsParser'],['java.time.format.DateTimeFormatterBuilder','.DefaultValueParser'],['java.time.format.DateTimeFormatterBuilder','.FractionPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.TextPrinterParser'],'java.util.LinkedHashMap','java.util.Collections',['java.time.format.DateTimeTextProvider','.LocaleStore'],['java.time.format.DateTimeFormatterBuilder','.InstantPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.LocalizedOffsetIdPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.ZoneIdPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.ZoneTextPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.ChronoPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.LocalizedPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.CharLiteralPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.StringLiteralPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.WeekBasedFieldPrinterParser'],['java.time.format.DateTimeFormatterBuilder','.CompositePrinterParser'],['java.time.format.DateTimeFormatterBuilder','.PadPrinterParserDecorator'],'java.util.Locale',['java.util.Locale','.Category'],'java.time.format.ResolverStyle','java.time.format.DecimalStyle']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateTimeFormatterBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['DateTimePrinterParser',8],['CompositePrinterParser',24],['PadPrinterParserDecorator',24],['SettingsParser',24],['DefaultValueParser',8],['CharLiteralPrinterParser',24],['StringLiteralPrinterParser',24],['NumberPrinterParser',8],['ReducedPrinterParser',24],['FractionPrinterParser',24],['TextPrinterParser',24],['InstantPrinterParser',24],['OffsetIdPrinterParser',24],['LocalizedOffsetIdPrinterParser',24],['ZoneTextPrinterParser',24],['ZoneIdPrinterParser',8],['PrefixTree',8],['ChronoPrinterParser',24],['LocalizedPrinterParser',24],['WeekBasedFieldPrinterParser',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.active=this;
this.printerParsers=Clazz.new_($I$(39,1));
this.valueParserIndex=-1;
},1);

C$.$fields$=[['Z',['optional'],'C',['padNextChar'],'I',['padNextWidth','valueParserIndex'],'O',['active','java.time.format.DateTimeFormatterBuilder','+parent','printerParsers','java.util.List']]
,['O',['QUERY_REGION_ONLY','java.time.temporal.TemporalQuery','FIELD_MAP','java.util.Map','LENGTH_SORT','java.util.Comparator']]]

Clazz.newMeth(C$, 'getLocalizedDateTimePattern$java_time_format_FormatStyle$java_time_format_FormatStyle$java_time_chrono_Chronology$java_util_Locale', function (dateStyle, timeStyle, chrono, locale) {
$I$(8).requireNonNull$O$S(locale, "locale");
$I$(8).requireNonNull$O$S(chrono, "chrono");
if (dateStyle == null  && timeStyle == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Either dateStyle or timeStyle must be non-null"]);
}var lr=$I$(40).getResourceBundleBased$().getLocaleResources$java_util_Locale(locale);
var pattern=lr.getJavaTimeDateTimePattern$I$I$S(C$.convertStyle$java_time_format_FormatStyle(timeStyle), C$.convertStyle$java_time_format_FormatStyle(dateStyle), chrono.getCalendarType$());
return pattern;
}, 1);

Clazz.newMeth(C$, 'convertStyle$java_time_format_FormatStyle', function (style) {
if (style == null ) {
return -1;
}return style.ordinal$();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.parent=null;
this.optional=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_format_DateTimeFormatterBuilder$Z', function (parent, optional) {
;C$.$init$.apply(this);
this.parent=parent;
this.optional=optional;
}, 1);

Clazz.newMeth(C$, 'parseCaseSensitive$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [$I$(41).SENSITIVE]);
return this;
});

Clazz.newMeth(C$, 'parseCaseInsensitive$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [$I$(41).INSENSITIVE]);
return this;
});

Clazz.newMeth(C$, 'parseStrict$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [$I$(41).STRICT]);
return this;
});

Clazz.newMeth(C$, 'parseLenient$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [$I$(41).LENIENT]);
return this;
});

Clazz.newMeth(C$, 'parseDefaulting$java_time_temporal_TemporalField$J', function (field, value) {
$I$(8).requireNonNull$O$S(field, "field");
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(42,1).c$$java_time_temporal_TemporalField$J,[field, value])]);
return this;
});

Clazz.newMeth(C$, 'appendValue$java_time_temporal_TemporalField', function (field) {
$I$(8).requireNonNull$O$S(field, "field");
p$11.appendValue$java_time_format_DateTimeFormatterBuilder_NumberPrinterParser.apply(this, [Clazz.new_([field, 1, 19, $I$(3).NORMAL],$I$(6,1).c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle)]);
return this;
});

Clazz.newMeth(C$, 'appendValue$java_time_temporal_TemporalField$I', function (field, width) {
$I$(8).requireNonNull$O$S(field, "field");
if (width < 1 || width > 19 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The width must be from 1 to 19 inclusive but was " + width]);
}var pp=Clazz.new_([field, width, width, $I$(3).NOT_NEGATIVE],$I$(6,1).c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle);
p$11.appendValue$java_time_format_DateTimeFormatterBuilder_NumberPrinterParser.apply(this, [pp]);
return this;
});

Clazz.newMeth(C$, 'appendValue$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle', function (field, minWidth, maxWidth, signStyle) {
if (minWidth == maxWidth && signStyle === $I$(3).NOT_NEGATIVE  ) {
return this.appendValue$java_time_temporal_TemporalField$I(field, maxWidth);
}$I$(8).requireNonNull$O$S(field, "field");
$I$(8).requireNonNull$O$S(signStyle, "signStyle");
if (minWidth < 1 || minWidth > 19 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The minimum width must be from 1 to 19 inclusive but was " + minWidth]);
}if (maxWidth < 1 || maxWidth > 19 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The maximum width must be from 1 to 19 inclusive but was " + maxWidth]);
}if (maxWidth < minWidth) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The maximum width must exceed or equal the minimum width but " + maxWidth + " < " + minWidth ]);
}var pp=Clazz.new_($I$(6,1).c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle,[field, minWidth, maxWidth, signStyle]);
p$11.appendValue$java_time_format_DateTimeFormatterBuilder_NumberPrinterParser.apply(this, [pp]);
return this;
});

Clazz.newMeth(C$, 'appendValueReduced$java_time_temporal_TemporalField$I$I$I', function (field, width, maxWidth, baseValue) {
$I$(8).requireNonNull$O$S(field, "field");
var pp=Clazz.new_($I$(37,1).c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate,[field, width, maxWidth, baseValue, null]);
p$11.appendValue$java_time_format_DateTimeFormatterBuilder_NumberPrinterParser.apply(this, [pp]);
return this;
});

Clazz.newMeth(C$, 'appendValueReduced$java_time_temporal_TemporalField$I$I$java_time_chrono_ChronoLocalDate', function (field, width, maxWidth, baseDate) {
$I$(8).requireNonNull$O$S(field, "field");
$I$(8).requireNonNull$O$S(baseDate, "baseDate");
var pp=Clazz.new_($I$(37,1).c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate,[field, width, maxWidth, 0, baseDate]);
p$11.appendValue$java_time_format_DateTimeFormatterBuilder_NumberPrinterParser.apply(this, [pp]);
return this;
});

Clazz.newMeth(C$, 'appendValue$java_time_format_DateTimeFormatterBuilder_NumberPrinterParser', function (pp) {
if (this.active.valueParserIndex >= 0) {
var activeValueParser=this.active.valueParserIndex;
var basePP=this.active.printerParsers.get$I(activeValueParser);
if (pp.minWidth == pp.maxWidth && pp.signStyle === $I$(3).NOT_NEGATIVE  ) {
basePP=basePP.withSubsequentWidth$I(pp.maxWidth);
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [pp.withFixedWidth$()]);
this.active.valueParserIndex=activeValueParser;
} else {
basePP=basePP.withFixedWidth$();
this.active.valueParserIndex=p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [pp]);
}this.active.printerParsers.set$I$O(activeValueParser, basePP);
} else {
this.active.valueParserIndex=p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [pp]);
}return this;
}, p$11);

Clazz.newMeth(C$, 'appendFraction$java_time_temporal_TemporalField$I$I$Z', function (field, minWidth, maxWidth, decimalPoint) {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(43,1).c$$java_time_temporal_TemporalField$I$I$Z,[field, minWidth, maxWidth, decimalPoint])]);
return this;
});

Clazz.newMeth(C$, 'appendText$java_time_temporal_TemporalField', function (field) {
return this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, $I$(13).FULL);
});

Clazz.newMeth(C$, 'appendText$java_time_temporal_TemporalField$java_time_format_TextStyle', function (field, textStyle) {
$I$(8).requireNonNull$O$S(field, "field");
$I$(8).requireNonNull$O$S(textStyle, "textStyle");
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_([field, textStyle, $I$(35).getInstance$()],$I$(44,1).c$$java_time_temporal_TemporalField$java_time_format_TextStyle$java_time_format_DateTimeTextProvider)]);
return this;
});

Clazz.newMeth(C$, 'appendText$java_time_temporal_TemporalField$java_util_Map', function (field, textLookup) {
$I$(8).requireNonNull$O$S(field, "field");
$I$(8).requireNonNull$O$S(textLookup, "textLookup");
var copy=Clazz.new_($I$(45,1).c$$java_util_Map,[textLookup]);
var map=$I$(46,"singletonMap$O$O",[$I$(13).FULL, copy]);
var store=Clazz.new_($I$(47,1).c$$java_util_Map,[map]);
var provider=((P$.DateTimeFormatterBuilder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DateTimeFormatterBuilder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.time.format.DateTimeTextProvider'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getText$java_time_temporal_TemporalField$J$java_time_format_TextStyle$java_util_Locale', function (field, value, style, locale) {
return this.$finals$.store.getText$J$java_time_format_TextStyle(value, style);
});

Clazz.newMeth(C$, 'getTextIterator$java_time_temporal_TemporalField$java_time_format_TextStyle$java_util_Locale', function (field, style, locale) {
return this.$finals$.store.getTextIterator$java_time_format_TextStyle(style);
});
})()
), Clazz.new_($I$(35,1),[this, {store:store}],P$.DateTimeFormatterBuilder$2));
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_([field, $I$(13).FULL, provider],$I$(44,1).c$$java_time_temporal_TemporalField$java_time_format_TextStyle$java_time_format_DateTimeTextProvider)]);
return this;
});

Clazz.newMeth(C$, 'appendInstant$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(48,1).c$$I,[-2])]);
return this;
});

Clazz.newMeth(C$, 'appendInstant$I', function (fractionalDigits) {
if (fractionalDigits < -1 || fractionalDigits > 9 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The fractional digits must be from -1 to 9 inclusive but was " + fractionalDigits]);
}p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(48,1).c$$I,[fractionalDigits])]);
return this;
});

Clazz.newMeth(C$, 'appendOffsetId$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [$I$(30).INSTANCE_ID_Z]);
return this;
});

Clazz.newMeth(C$, 'appendOffset$S$S', function (pattern, noOffsetText) {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(30,1).c$$S$S,[pattern, noOffsetText])]);
return this;
});

Clazz.newMeth(C$, 'appendLocalizedOffset$java_time_format_TextStyle', function (style) {
$I$(8).requireNonNull$O$S(style, "style");
if (style !== $I$(13).FULL  && style !== $I$(13).SHORT  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Style must be either full or short"]);
}p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(49,1).c$$java_time_format_TextStyle,[style])]);
return this;
});

Clazz.newMeth(C$, 'appendZoneId$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_([$I$(11).zoneId$(), "ZoneId()"],$I$(50,1).c$$java_time_temporal_TemporalQuery$S)]);
return this;
});

Clazz.newMeth(C$, 'appendZoneRegionId$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_([C$.QUERY_REGION_ONLY, "ZoneRegionId()"],$I$(50,1).c$$java_time_temporal_TemporalQuery$S)]);
return this;
});

Clazz.newMeth(C$, 'appendZoneOrOffsetId$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_([$I$(11).zone$(), "ZoneOrOffsetId()"],$I$(50,1).c$$java_time_temporal_TemporalQuery$S)]);
return this;
});

Clazz.newMeth(C$, 'appendZoneText$java_time_format_TextStyle', function (textStyle) {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(51,1).c$$java_time_format_TextStyle$java_util_Set,[textStyle, null])]);
return this;
});

Clazz.newMeth(C$, 'appendZoneText$java_time_format_TextStyle$java_util_Set', function (textStyle, preferredZones) {
$I$(8).requireNonNull$O$S(preferredZones, "preferredZones");
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(51,1).c$$java_time_format_TextStyle$java_util_Set,[textStyle, preferredZones])]);
return this;
});

Clazz.newMeth(C$, 'appendChronologyId$', function () {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(52,1).c$$java_time_format_TextStyle,[null])]);
return this;
});

Clazz.newMeth(C$, 'appendChronologyText$java_time_format_TextStyle', function (textStyle) {
$I$(8).requireNonNull$O$S(textStyle, "textStyle");
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(52,1).c$$java_time_format_TextStyle,[textStyle])]);
return this;
});

Clazz.newMeth(C$, 'appendLocalized$java_time_format_FormatStyle$java_time_format_FormatStyle', function (dateStyle, timeStyle) {
if (dateStyle == null  && timeStyle == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Either the date or time style must be non-null"]);
}p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(53,1).c$$java_time_format_FormatStyle$java_time_format_FormatStyle,[dateStyle, timeStyle])]);
return this;
});

Clazz.newMeth(C$, 'appendLiteral$C', function (literal) {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(54,1).c$$C,[literal])]);
return this;
});

Clazz.newMeth(C$, 'appendLiteral$S', function (literal) {
$I$(8).requireNonNull$O$S(literal, "literal");
if (literal.length$() > 0) {
if (literal.length$() == 1) {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_([literal.charAt$I(0)],$I$(54,1).c$$C)]);
} else {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(55,1).c$$S,[literal])]);
}}return this;
});

Clazz.newMeth(C$, 'append$java_time_format_DateTimeFormatter', function (formatter) {
$I$(8).requireNonNull$O$S(formatter, "formatter");
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [formatter.toPrinterParser$Z(false)]);
return this;
});

Clazz.newMeth(C$, 'appendOptional$java_time_format_DateTimeFormatter', function (formatter) {
$I$(8).requireNonNull$O$S(formatter, "formatter");
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [formatter.toPrinterParser$Z(true)]);
return this;
});

Clazz.newMeth(C$, 'appendPattern$S', function (pattern) {
$I$(8).requireNonNull$O$S(pattern, "pattern");
p$11.parsePattern$S.apply(this, [pattern]);
return this;
});

Clazz.newMeth(C$, 'parsePattern$S', function (pattern) {
for (var pos=0; pos < pattern.length$(); pos++) {
var cur=pattern.charAt$I(pos);
if ((cur >= "A" && cur <= "Z" ) || (cur >= "a" && cur <= "z" ) ) {
var start=pos++;
for (; pos < pattern.length$() && pattern.charAt$I(pos) == cur ; pos++) ;
var count=pos - start;
if (cur == "p") {
var pad=0;
if (pos < pattern.length$()) {
cur=pattern.charAt$I(pos);
if ((cur >= "A" && cur <= "Z" ) || (cur >= "a" && cur <= "z" ) ) {
pad=count;
start=pos++;
for (; pos < pattern.length$() && pattern.charAt$I(pos) == cur ; pos++) ;
count=pos - start;
}}if (pad == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pad letter 'p' must be followed by valid pad pattern: " + pattern]);
}this.padNext$I(pad);
}var field=C$.FIELD_MAP.get$O(Character.valueOf$C(cur));
if (field != null ) {
p$11.parseField$C$I$java_time_temporal_TemporalField.apply(this, [cur, count, field]);
} else if (cur == "z") {
if (count > 4) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
} else if (count == 4) {
this.appendZoneText$java_time_format_TextStyle($I$(13).FULL);
} else {
this.appendZoneText$java_time_format_TextStyle($I$(13).SHORT);
}} else if (cur == "V") {
if (count != 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern letter count must be 2: " + cur]);
}this.appendZoneId$();
} else if (cur == "Z") {
if (count < 4) {
this.appendOffset$S$S("+HHMM", "+0000");
} else if (count == 4) {
this.appendLocalizedOffset$java_time_format_TextStyle($I$(13).FULL);
} else if (count == 5) {
this.appendOffset$S$S("+HH:MM:ss", "Z");
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}} else if (cur == "O") {
if (count == 1) {
this.appendLocalizedOffset$java_time_format_TextStyle($I$(13).SHORT);
} else if (count == 4) {
this.appendLocalizedOffset$java_time_format_TextStyle($I$(13).FULL);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern letter count must be 1 or 4: " + cur]);
}} else if (cur == "X") {
if (count > 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}this.appendOffset$S$S($I$(30).PATTERNS[count + (count == 1 ? 0 : 1)], "Z");
} else if (cur == "x") {
if (count > 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}var zero=(count == 1 ? "+00" : (count % 2 == 0 ? "+0000" : "+00:00"));
this.appendOffset$S$S($I$(30).PATTERNS[count + (count == 1 ? 0 : 1)], zero);
} else if (cur == "W") {
if (count > 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(56,1).c$$C$I,[cur, count])]);
} else if (cur == "w") {
if (count > 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(56,1).c$$C$I,[cur, count])]);
} else if (cur == "Y") {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(56,1).c$$C$I,[cur, count])]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown pattern letter: " + cur]);
}pos--;
} else if (cur == "\'") {
var start=pos++;
for (; pos < pattern.length$(); pos++) {
if (pattern.charAt$I(pos) == "\'") {
if (pos + 1 < pattern.length$() && pattern.charAt$I(pos + 1) == "\'" ) {
pos++;
} else {
break;
}}}
if (pos >= pattern.length$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern ends with an incomplete string literal: " + pattern]);
}var str=pattern.substring$I$I(start + 1, pos);
if (str.length$() == 0) {
this.appendLiteral$C("\'");
} else {
this.appendLiteral$S(str.replace$CharSequence$CharSequence("\'\'", "\'"));
}} else if (cur == "[") {
this.optionalStart$();
} else if (cur == "]") {
if (this.active.parent == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern invalid as it contains ] without previous ["]);
}this.optionalEnd$();
} else if (cur == "{" || cur == "}"  || cur == "#" ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern includes reserved character: '" + cur + "'" ]);
} else {
this.appendLiteral$C(cur);
}}
}, p$11);

Clazz.newMeth(C$, 'parseField$C$I$java_time_temporal_TemporalField', function (cur, count, field) {
var standalone=false;
switch (cur.$c()) {
case 117:
case 121:
if (count == 2) {
this.appendValueReduced$java_time_temporal_TemporalField$I$I$java_time_chrono_ChronoLocalDate(field, 2, 2, $I$(37).BASE_DATE);
} else if (count < 4) {
this.appendValue$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle(field, count, 19, $I$(3).NORMAL);
} else {
this.appendValue$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle(field, count, 19, $I$(3).EXCEEDS_PAD);
}break;
case 99:
if (count == 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid pattern \"cc\""]);
}case 76:
case 113:
standalone=true;
case 77:
case 81:
case 69:
case 101:
switch (count) {
case 1:
case 2:
if (cur == "c" || cur == "e" ) {
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [Clazz.new_($I$(56,1).c$$C$I,[cur, count])]);
} else if (cur == "E") {
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, $I$(13).SHORT);
} else {
if (count == 1) {
this.appendValue$java_time_temporal_TemporalField(field);
} else {
this.appendValue$java_time_temporal_TemporalField$I(field, 2);
}}break;
case 3:
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, standalone ? $I$(13).SHORT_STANDALONE : $I$(13).SHORT);
break;
case 4:
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, standalone ? $I$(13).FULL_STANDALONE : $I$(13).FULL);
break;
case 5:
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, standalone ? $I$(13).NARROW_STANDALONE : $I$(13).NARROW);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}
break;
case 97:
if (count == 1) {
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, $I$(13).SHORT);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}break;
case 71:
switch (count) {
case 1:
case 2:
case 3:
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, $I$(13).SHORT);
break;
case 4:
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, $I$(13).FULL);
break;
case 5:
this.appendText$java_time_temporal_TemporalField$java_time_format_TextStyle(field, $I$(13).NARROW);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}
break;
case 83:
this.appendFraction$java_time_temporal_TemporalField$I$I$Z($I$(14).NANO_OF_SECOND, count, count, false);
break;
case 70:
if (count == 1) {
this.appendValue$java_time_temporal_TemporalField(field);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}break;
case 100:
case 104:
case 72:
case 107:
case 75:
case 109:
case 115:
if (count == 1) {
this.appendValue$java_time_temporal_TemporalField(field);
} else if (count == 2) {
this.appendValue$java_time_temporal_TemporalField$I(field, count);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}break;
case 68:
if (count == 1) {
this.appendValue$java_time_temporal_TemporalField(field);
} else if (count <= 3) {
this.appendValue$java_time_temporal_TemporalField$I(field, count);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many pattern letters: " + cur]);
}break;
default:
if (count == 1) {
this.appendValue$java_time_temporal_TemporalField(field);
} else {
this.appendValue$java_time_temporal_TemporalField$I(field, count);
}break;
}
}, p$11);

Clazz.newMeth(C$, 'padNext$I', function (padWidth) {
return this.padNext$I$C(padWidth, " ");
});

Clazz.newMeth(C$, 'padNext$I$C', function (padWidth, padChar) {
if (padWidth < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The pad width must be at least one but was " + padWidth]);
}this.active.padNextWidth=padWidth;
this.active.padNextChar=padChar;
this.active.valueParserIndex=-1;
return this;
});

Clazz.newMeth(C$, 'optionalStart$', function () {
this.active.valueParserIndex=-1;
this.active=Clazz.new_(C$.c$$java_time_format_DateTimeFormatterBuilder$Z,[this.active, true]);
return this;
});

Clazz.newMeth(C$, 'optionalEnd$', function () {
if (this.active.parent == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot call optionalEnd() as there was no previous call to optionalStart()"]);
}if (this.active.printerParsers.size$() > 0) {
var cpp=Clazz.new_($I$(57,1).c$$java_util_List$Z,[this.active.printerParsers, this.active.optional]);
this.active=this.active.parent;
p$11.appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser.apply(this, [cpp]);
} else {
this.active=this.active.parent;
}return this;
});

Clazz.newMeth(C$, 'appendInternal$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser', function (pp) {
$I$(8).requireNonNull$O$S(pp, "pp");
if (this.active.padNextWidth > 0) {
if (pp != null ) {
pp=Clazz.new_($I$(58,1).c$$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser$I$C,[pp, this.active.padNextWidth, this.active.padNextChar]);
}this.active.padNextWidth=0;
this.active.padNextChar=String.fromCharCode(0);
}this.active.printerParsers.add$O(pp);
this.active.valueParserIndex=-1;
return this.active.printerParsers.size$() - 1;
}, p$11);

Clazz.newMeth(C$, 'toFormatter$', function () {
return this.toFormatter$java_util_Locale($I$(59,"getDefault$java_util_Locale_Category",[$I$(60).FORMAT]));
});

Clazz.newMeth(C$, 'toFormatter$java_util_Locale', function (locale) {
return p$11.toFormatter$java_util_Locale$java_time_format_ResolverStyle$java_time_chrono_Chronology.apply(this, [locale, $I$(61).SMART, null]);
});

Clazz.newMeth(C$, 'toFormatter$java_time_format_ResolverStyle$java_time_chrono_Chronology', function (resolverStyle, chrono) {
return p$11.toFormatter$java_util_Locale$java_time_format_ResolverStyle$java_time_chrono_Chronology.apply(this, [$I$(59,"getDefault$java_util_Locale_Category",[$I$(60).FORMAT]), resolverStyle, chrono]);
});

Clazz.newMeth(C$, 'toFormatter$java_util_Locale$java_time_format_ResolverStyle$java_time_chrono_Chronology', function (locale, resolverStyle, chrono) {
$I$(8).requireNonNull$O$S(locale, "locale");
while (this.active.parent != null ){
this.optionalEnd$();
}
var pp=Clazz.new_($I$(57,1).c$$java_util_List$Z,[this.printerParsers, false]);
return Clazz.new_([pp, locale, $I$(62).STANDARD, resolverStyle, null, chrono, null],$I$(18,1).c$$java_time_format_DateTimeFormatterBuilder_CompositePrinterParser$java_util_Locale$java_time_format_DecimalStyle$java_time_format_ResolverStyle$java_util_Set$java_time_chrono_Chronology$java_time_ZoneId);
}, p$11);

C$.$static$=function(){C$.$static$=0;
C$.QUERY_REGION_ONLY=(P$.DateTimeFormatterBuilder$lambda1$||(P$.DateTimeFormatterBuilder$lambda1$=(((P$.DateTimeFormatterBuilder$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DateTimeFormatterBuilder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) {
var zone=temporal.query$java_time_temporal_TemporalQuery($I$(11).zoneId$());
return null;
});
})()
), Clazz.new_(P$.DateTimeFormatterBuilder$lambda1.$init$,[this, null])))));
C$.FIELD_MAP=Clazz.new_($I$(20,1));
{
C$.FIELD_MAP.put$O$O(Character.valueOf$C('G'), $I$(14).ERA);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('y'), $I$(14).YEAR_OF_ERA);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('u'), $I$(14).YEAR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('Q'), $I$(38).QUARTER_OF_YEAR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('q'), $I$(38).QUARTER_OF_YEAR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('M'), $I$(14).MONTH_OF_YEAR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('L'), $I$(14).MONTH_OF_YEAR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('D'), $I$(14).DAY_OF_YEAR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('d'), $I$(14).DAY_OF_MONTH);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('F'), $I$(14).ALIGNED_DAY_OF_WEEK_IN_MONTH);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('E'), $I$(14).DAY_OF_WEEK);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('c'), $I$(14).DAY_OF_WEEK);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('e'), $I$(14).DAY_OF_WEEK);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('a'), $I$(14).AMPM_OF_DAY);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('H'), $I$(14).HOUR_OF_DAY);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('k'), $I$(14).CLOCK_HOUR_OF_DAY);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('K'), $I$(14).HOUR_OF_AMPM);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('h'), $I$(14).CLOCK_HOUR_OF_AMPM);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('m'), $I$(14).MINUTE_OF_HOUR);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('s'), $I$(14).SECOND_OF_MINUTE);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('S'), $I$(14).NANO_OF_SECOND);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('A'), $I$(14).MILLI_OF_DAY);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('n'), $I$(14).NANO_OF_SECOND);
C$.FIELD_MAP.put$O$O(Character.valueOf$C('N'), $I$(14).NANO_OF_DAY);
};
C$.LENGTH_SORT=((P$.DateTimeFormatterBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DateTimeFormatterBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'], function (str1, str2) {
return str1.length$() == str2.length$() ? str1.compareTo$S(str2) : str1.length$() - str2.length$();
});
})()
), Clazz.new_(P$.DateTimeFormatterBuilder$1.$init$,[this, null]));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DateTimeFormatterBuilder, "DateTimePrinterParser", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "CompositePrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['optional'],'O',['printerParsers','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser[]']]]

Clazz.newMeth(C$, 'c$$java_util_List$Z', function (printerParsers, optional) {
C$.c$$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParserA$Z.apply(this, [printerParsers.toArray$OA(Clazz.array($I$(1), [printerParsers.size$()])), optional]);
}, 1);

Clazz.newMeth(C$, 'c$$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParserA$Z', function (printerParsers, optional) {
;C$.$init$.apply(this);
this.printerParsers=printerParsers;
this.optional=optional;
}, 1);

Clazz.newMeth(C$, 'withOptional$Z', function (optional) {
if (optional == this.optional ) {
return this;
}return Clazz.new_(C$.c$$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParserA$Z,[this.printerParsers, optional]);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var length=buf.length$();
if (this.optional) {
context.startOptional$();
}try {
for (var pp, $pp = 0, $$pp = this.printerParsers; $pp<$$pp.length&&((pp=($$pp[$pp])),1);$pp++) {
if (pp.format$java_time_format_DateTimePrintContext$StringBuilder(context, buf) == false ) {
buf.setLength$I(length);
return true;
}}
} finally {
if (this.optional) {
context.endOptional$();
}}
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
if (this.optional) {
context.startOptional$();
var pos=position;
for (var pp, $pp = 0, $$pp = this.printerParsers; $pp<$$pp.length&&((pp=($$pp[$pp])),1);$pp++) {
pos=pp.parse$java_time_format_DateTimeParseContext$CharSequence$I(context, text, pos);
if (pos < 0) {
context.endOptional$Z(false);
return position;
}}
context.endOptional$Z(true);
return pos;
} else {
for (var pp, $pp = 0, $$pp = this.printerParsers; $pp<$$pp.length&&((pp=($$pp[$pp])),1);$pp++) {
position=pp.parse$java_time_format_DateTimeParseContext$CharSequence$I(context, text, position);
if (position < 0) {
break;
}}
return position;
}});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(2,1));
if (this.printerParsers != null ) {
buf.append$S(this.optional ? "[" : "(");
for (var pp, $pp = 0, $$pp = this.printerParsers; $pp<$$pp.length&&((pp=($$pp[$pp])),1);$pp++) {
buf.append$O(pp);
}
buf.append$S(this.optional ? "]" : ")");
}return buf.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "PadPrinterParserDecorator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['padChar'],'I',['padWidth'],'O',['printerParser','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]]

Clazz.newMeth(C$, 'c$$java_time_format_DateTimeFormatterBuilder_DateTimePrinterParser$I$C', function (printerParser, padWidth, padChar) {
;C$.$init$.apply(this);
this.printerParser=printerParser;
this.padWidth=padWidth;
this.padChar=padChar;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var preLen=buf.length$();
if (this.printerParser.format$java_time_format_DateTimePrintContext$StringBuilder(context, buf) == false ) {
return false;
}var len=buf.length$() - preLen;
if (len > this.padWidth) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Cannot print as output of " + len + " characters exceeds pad width of " + this.padWidth ]);
}for (var i=0; i < this.padWidth - len; i++) {
buf.insert$I$C(preLen, this.padChar);
}
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var strict=context.isStrict$();
if (position > text.length$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (position == text.length$()) {
return ~position;
}var endPos=position + this.padWidth;
if (endPos > text.length$()) {
if (strict) {
return ~position;
}endPos=text.length$();
}var pos=position;
while (pos < endPos && context.charEquals$C$C(text.charAt$I(pos), this.padChar) ){
pos++;
}
text=text.subSequence$I$I(0, endPos);
var resultPos=this.printerParser.parse$java_time_format_DateTimeParseContext$CharSequence$I(context, text, pos);
if (resultPos != endPos && strict ) {
return ~(position + pos);
}return resultPos;
});

Clazz.newMeth(C$, 'toString', function () {
return "Pad(" + this.printerParser + "," + this.padWidth + (this.padChar == " " ? ")" : ",'" + this.padChar + "')" ) ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "SettingsParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
switch (this.ordinal$()) {
case 0:
context.setCaseSensitive$Z(true);
break;
case 1:
context.setCaseSensitive$Z(false);
break;
case 2:
context.setStrict$Z(true);
break;
case 3:
context.setStrict$Z(false);
break;
}
return position;
});

Clazz.newMeth(C$, 'toString', function () {
switch (this.ordinal$()) {
case 0:
return "ParseCaseSensitive(true)";
case 1:
return "ParseCaseSensitive(false)";
case 2:
return "ParseStrict(true)";
case 3:
return "ParseStrict(false)";
}
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unreachable"]);
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SENSITIVE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "INSENSITIVE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "STRICT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "LENIENT", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "DefaultValueParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value'],'O',['field','java.time.temporal.TemporalField']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$J', function (field, value) {
;C$.$init$.apply(this);
this.field=field;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
if (context.getParsed$java_time_temporal_TemporalField(this.field) == null ) {
context.setParsedField$java_time_temporal_TemporalField$J$I$I(this.field, this.value, position, position);
}return position;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "CharLiteralPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['literal']]]

Clazz.newMeth(C$, 'c$$C', function (literal) {
;C$.$init$.apply(this);
this.literal=literal;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
buf.append$C(this.literal);
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var length=text.length$();
if (position == length) {
return ~position;
}var ch=text.charAt$I(position);
if (ch != this.literal) {
if (context.isCaseSensitive$() || (Character.toUpperCase$C(ch) != Character.toUpperCase$C(this.literal) && Character.toLowerCase$C(ch) != Character.toLowerCase$C(this.literal) ) ) {
return ~position;
}}return position + 1;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.literal == "\'") {
return "\'\'";
}return "'" + this.literal + "'" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "StringLiteralPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['literal']]]

Clazz.newMeth(C$, 'c$$S', function (literal) {
;C$.$init$.apply(this);
this.literal=literal;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
buf.append$S(this.literal);
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var length=text.length$();
if (position > length || position < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (context.subSequenceEquals$CharSequence$I$CharSequence$I$I(text, position, this.literal, 0, this.literal.length$()) == false ) {
return ~position;
}return position + this.literal.length$();
});

Clazz.newMeth(C$, 'toString', function () {
var converted=this.literal.replace$CharSequence$CharSequence("\'", "\'\'");
return "'" + converted + "'" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "NumberPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['minWidth','maxWidth','subsequentWidth'],'O',['field','java.time.temporal.TemporalField','signStyle','java.time.format.SignStyle']]
,['O',['EXCEED_POINTS','long[]']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle', function (field, minWidth, maxWidth, signStyle) {
;C$.$init$.apply(this);
this.field=field;
this.minWidth=minWidth;
this.maxWidth=maxWidth;
this.signStyle=signStyle;
this.subsequentWidth=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle$I', function (field, minWidth, maxWidth, signStyle, subsequentWidth) {
;C$.$init$.apply(this);
this.field=field;
this.minWidth=minWidth;
this.maxWidth=maxWidth;
this.signStyle=signStyle;
this.subsequentWidth=subsequentWidth;
}, 1);

Clazz.newMeth(C$, 'withFixedWidth$', function () {
if (this.subsequentWidth == -1) {
return this;
}return Clazz.new_(C$.c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle$I,[this.field, this.minWidth, this.maxWidth, this.signStyle, -1]);
});

Clazz.newMeth(C$, 'withSubsequentWidth$I', function (subsequentWidth) {
return Clazz.new_(C$.c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle$I,[this.field, this.minWidth, this.maxWidth, this.signStyle, this.subsequentWidth + subsequentWidth]);
});

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var valueLong=context.getValue$java_time_temporal_TemporalField(this.field);
if (valueLong == null ) {
return false;
}var value=this.getValue$java_time_format_DateTimePrintContext$J(context, (valueLong).valueOf());
var decimalStyle=context.getDecimalStyle$();
var str=(value == -9223372036854775808 ? "9223372036854775808" : Long.toString$J(Math.abs(value)));
if (str.length$() > this.maxWidth) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Field " + this.field + " cannot be printed as the value " + value + " exceeds the maximum print width of " + this.maxWidth ]);
}str=decimalStyle.convertNumberToI18N$S(str);
if (value >= 0) {
switch (this.signStyle) {
case $I$(3).EXCEEDS_PAD:
if (this.minWidth < 19 && value >= C$.EXCEED_POINTS[this.minWidth] ) {
buf.append$C(decimalStyle.getPositiveSign$());
}break;
case $I$(3).ALWAYS:
buf.append$C(decimalStyle.getPositiveSign$());
break;
}
} else {
switch (this.signStyle) {
case $I$(3).NORMAL:
case $I$(3).EXCEEDS_PAD:
case $I$(3).ALWAYS:
buf.append$C(decimalStyle.getNegativeSign$());
break;
case $I$(3).NOT_NEGATIVE:
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Field " + this.field + " cannot be printed as the value " + value + " cannot be negative according to the SignStyle" ]);
}
}for (var i=0; i < this.minWidth - str.length$(); i++) {
buf.append$C(decimalStyle.getZeroDigit$());
}
buf.append$S(str);
return true;
});

Clazz.newMeth(C$, 'getValue$java_time_format_DateTimePrintContext$J', function (context, value) {
return value;
});

Clazz.newMeth(C$, 'isFixedWidth$java_time_format_DateTimeParseContext', function (context) {
return this.subsequentWidth == -1 || (this.subsequentWidth > 0 && this.minWidth == this.maxWidth  && this.signStyle === $I$(3).NOT_NEGATIVE  ) ;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var length=text.length$();
if (position == length) {
return ~position;
}var sign=text.charAt$I(position);
var negative=false;
var positive=false;
if (sign == context.getDecimalStyle$().getPositiveSign$()) {
if (this.signStyle.parse$Z$Z$Z(true, context.isStrict$(), this.minWidth == this.maxWidth) == false ) {
return ~position;
}positive=true;
position++;
} else if (sign == context.getDecimalStyle$().getNegativeSign$()) {
if (this.signStyle.parse$Z$Z$Z(false, context.isStrict$(), this.minWidth == this.maxWidth) == false ) {
return ~position;
}negative=true;
position++;
} else {
if (this.signStyle === $I$(3).ALWAYS  && context.isStrict$() ) {
return ~position;
}}var effMinWidth=(context.isStrict$() || this.isFixedWidth$java_time_format_DateTimeParseContext(context)  ? this.minWidth : 1);
var minEndPos=position + effMinWidth;
if (minEndPos > length) {
return ~position;
}var effMaxWidth=(context.isStrict$() || this.isFixedWidth$java_time_format_DateTimeParseContext(context)  ? this.maxWidth : 9) + Math.max(this.subsequentWidth, 0);
var total=0;
var totalBig=null;
var pos=position;
for (var pass=0; pass < 2; pass++) {
var maxEndPos=Math.min(pos + effMaxWidth, length);
while (pos < maxEndPos){
var ch=text.charAt$I(pos++);
var digit=context.getDecimalStyle$().convertToDigit$C(ch);
if (digit < 0) {
pos--;
if (pos < minEndPos) {
return ~position;
}break;
}if ((pos - position) > 18) {
if (totalBig == null ) {
totalBig=$I$(4).valueOf$J(total);
}totalBig=totalBig.multiply$java_math_BigInteger($I$(4).TEN).add$java_math_BigInteger($I$(4).valueOf$J(digit));
} else {
total=total * 10 + digit;
}}
if (this.subsequentWidth > 0 && pass == 0 ) {
var parseLen=pos - position;
effMaxWidth=Math.max(effMinWidth, parseLen - this.subsequentWidth);
pos=position;
total=0;
totalBig=null;
} else {
break;
}}
if (negative) {
if (totalBig != null ) {
if (totalBig.equals$O($I$(4).ZERO) && context.isStrict$() ) {
return ~(position - 1);
}totalBig=totalBig.negate$();
} else {
if (total == 0 && context.isStrict$() ) {
return ~(position - 1);
}total=-total;
}} else if (this.signStyle === $I$(3).EXCEEDS_PAD  && context.isStrict$() ) {
var parseLen=pos - position;
if (positive) {
if (parseLen <= this.minWidth) {
return ~(position - 1);
}} else {
if (parseLen > this.minWidth) {
return ~position;
}}}if (totalBig != null ) {
if (totalBig.bitLength$() > 63) {
totalBig=totalBig.divide$java_math_BigInteger($I$(4).TEN);
pos--;
}return this.setValue$java_time_format_DateTimeParseContext$J$I$I(context, totalBig.longValue$(), position, pos);
}return this.setValue$java_time_format_DateTimeParseContext$J$I$I(context, total, position, pos);
});

Clazz.newMeth(C$, 'setValue$java_time_format_DateTimeParseContext$J$I$I', function (context, value, errorPos, successPos) {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I(this.field, value, errorPos, successPos);
});

Clazz.newMeth(C$, 'toString', function () {
if (this.minWidth == 1 && this.maxWidth == 19  && this.signStyle === $I$(3).NORMAL  ) {
return "Value(" + this.field + ")" ;
}if (this.minWidth == this.maxWidth && this.signStyle === $I$(3).NOT_NEGATIVE  ) {
return "Value(" + this.field + "," + this.minWidth + ")" ;
}return "Value(" + this.field + "," + this.minWidth + "," + this.maxWidth + "," + this.signStyle + ")" ;
});

C$.$static$=function(){C$.$static$=0;
C$.EXCEED_POINTS=Clazz.array(Long.TYPE, -1, [0, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "ReducedPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.time.format.DateTimeFormatterBuilder','.NumberPrinterParser']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['baseValue'],'O',['baseDate','java.time.chrono.ChronoLocalDate']]
,['O',['BASE_DATE','java.time.LocalDate']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate', function (field, minWidth, maxWidth, baseValue, baseDate) {
C$.c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate$I.apply(this, [field, minWidth, maxWidth, baseValue, baseDate, 0]);
if (minWidth < 1 || minWidth > 10 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The minWidth must be from 1 to 10 inclusive but was " + minWidth]);
}if (maxWidth < 1 || maxWidth > 10 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The maxWidth must be from 1 to 10 inclusive but was " + minWidth]);
}if (maxWidth < minWidth) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Maximum width must exceed or equal the minimum width but " + maxWidth + " < " + minWidth ]);
}if (baseDate == null ) {
if (field.range$().isValidValue$J(baseValue) == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The base value must be within the range of the field"]);
}if (((baseValue) + $I$(6).EXCEED_POINTS[maxWidth]) > 2147483647) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Unable to add printer-parser as the range exceeds the capacity of an int"]);
}}}, 1);

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate$I', function (field, minWidth, maxWidth, baseValue, baseDate, subsequentWidth) {
;C$.superclazz.c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle$I.apply(this,[field, minWidth, maxWidth, $I$(3).NOT_NEGATIVE, subsequentWidth]);C$.$init$.apply(this);
this.baseValue=baseValue;
this.baseDate=baseDate;
}, 1);

Clazz.newMeth(C$, 'getValue$java_time_format_DateTimePrintContext$J', function (context, value) {
var absValue=Math.abs(value);
var baseValue=this.baseValue;
if (this.baseDate != null ) {
var chrono=$I$(7,"from$java_time_temporal_TemporalAccessor",[context.getTemporal$()]);
baseValue=chrono.date$java_time_temporal_TemporalAccessor(this.baseDate).get$java_time_temporal_TemporalField(this.field);
}if (value >= baseValue && value < baseValue + $I$(6).EXCEED_POINTS[this.minWidth] ) {
return absValue % $I$(6).EXCEED_POINTS[this.minWidth];
}return absValue % $I$(6).EXCEED_POINTS[this.maxWidth];
});

Clazz.newMeth(C$, 'setValue$java_time_format_DateTimeParseContext$J$I$I', function (context, value, errorPos, successPos) {
var baseValue=this.baseValue;
if (this.baseDate != null ) {
var chrono=context.getEffectiveChronology$();
baseValue=chrono.date$java_time_temporal_TemporalAccessor(this.baseDate).get$java_time_temporal_TemporalField(this.field);
var initialValue=value;
context.addChronoChangedListener$java_util_function_Consumer(((P$.DateTimeFormatterBuilder$ReducedPrinterParser$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DateTimeFormatterBuilder$ReducedPrinterParser$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_time_chrono_Chronology','accept$O'], function (_unused) {
this.b$['java.time.format.DateTimeFormatterBuilder.ReducedPrinterParser'].setValue$java_time_format_DateTimeParseContext$J$I$I.apply(this.b$['java.time.format.DateTimeFormatterBuilder.ReducedPrinterParser'], [this.$finals$.context, this.$finals$.initialValue, this.$finals$.errorPos, this.$finals$.successPos]);
});
})()
), Clazz.new_(P$.DateTimeFormatterBuilder$ReducedPrinterParser$lambda1.$init$,[this, {errorPos:errorPos,context:context,successPos:successPos,initialValue:initialValue}])));
}var parseLen=successPos - errorPos;
if (parseLen == this.minWidth && value >= 0 ) {
var range=$I$(6).EXCEED_POINTS[this.minWidth];
var lastPart=baseValue % range;
var basePart=baseValue - lastPart;
if (baseValue > 0) {
value=basePart + value;
} else {
value=basePart - value;
}if (value < baseValue) {
value+=range;
}}return context.setParsedField$java_time_temporal_TemporalField$J$I$I(this.field, value, errorPos, successPos);
});

Clazz.newMeth(C$, 'withFixedWidth$', function () {
if (this.subsequentWidth == -1) {
return this;
}return Clazz.new_(C$.c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate$I,[this.field, this.minWidth, this.maxWidth, this.baseValue, this.baseDate, -1]);
});

Clazz.newMeth(C$, 'withSubsequentWidth$I', function (subsequentWidth) {
return Clazz.new_(C$.c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate$I,[this.field, this.minWidth, this.maxWidth, this.baseValue, this.baseDate, this.subsequentWidth + subsequentWidth]);
});

Clazz.newMeth(C$, 'isFixedWidth$java_time_format_DateTimeParseContext', function (context) {
if (context.isStrict$() == false ) {
return false;
}return C$.superclazz.prototype.isFixedWidth$java_time_format_DateTimeParseContext.apply(this, [context]);
});

Clazz.newMeth(C$, 'toString', function () {
return "ReducedValue(" + this.field + "," + this.minWidth + "," + this.maxWidth + "," + (this.baseDate != null  ? this.baseDate : Integer.valueOf$I(this.baseValue)) + ")" ;
});

C$.$static$=function(){C$.$static$=0;
C$.BASE_DATE=$I$(5).of$I$I$I(2000, 1, 1);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "FractionPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['decimalPoint'],'I',['minWidth','maxWidth'],'O',['field','java.time.temporal.TemporalField']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$I$I$Z', function (field, minWidth, maxWidth, decimalPoint) {
;C$.$init$.apply(this);
$I$(8).requireNonNull$O$S(field, "field");
if (field.range$().isFixed$() == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Field must have a fixed set of values: " + field]);
}if (minWidth < 0 || minWidth > 9 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Minimum width must be from 0 to 9 inclusive but was " + minWidth]);
}if (maxWidth < 1 || maxWidth > 9 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Maximum width must be from 1 to 9 inclusive but was " + maxWidth]);
}if (maxWidth < minWidth) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Maximum width must exceed or equal the minimum width but " + maxWidth + " < " + minWidth ]);
}this.field=field;
this.minWidth=minWidth;
this.maxWidth=maxWidth;
this.decimalPoint=decimalPoint;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var value=context.getValue$java_time_temporal_TemporalField(this.field);
if (value == null ) {
return false;
}var decimalStyle=context.getDecimalStyle$();
var fraction=p$1.convertToFraction$J.apply(this, [(value).valueOf()]);
if (fraction.scale$() == 0) {
if (this.minWidth > 0) {
if (this.decimalPoint) {
buf.append$C(decimalStyle.getDecimalSeparator$());
}for (var i=0; i < this.minWidth; i++) {
buf.append$C(decimalStyle.getZeroDigit$());
}
}} else {
var outputScale=Math.min(Math.max(fraction.scale$(), this.minWidth), this.maxWidth);
fraction=fraction.setScale$I$java_math_RoundingMode(outputScale, $I$(9).FLOOR);
var str=fraction.toPlainString$().substring$I(2);
str=decimalStyle.convertNumberToI18N$S(str);
if (this.decimalPoint) {
buf.append$C(decimalStyle.getDecimalSeparator$());
}buf.append$S(str);
}return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var effectiveMin=(context.isStrict$() ? this.minWidth : 0);
var effectiveMax=(context.isStrict$() ? this.maxWidth : 9);
var length=text.length$();
if (position == length) {
return (effectiveMin > 0 ? ~position : position);
}if (this.decimalPoint) {
if (text.charAt$I(position) != context.getDecimalStyle$().getDecimalSeparator$()) {
return (effectiveMin > 0 ? ~position : position);
}position++;
}var minEndPos=position + effectiveMin;
if (minEndPos > length) {
return ~position;
}var maxEndPos=Math.min(position + effectiveMax, length);
var total=0;
var pos=position;
while (pos < maxEndPos){
var ch=text.charAt$I(pos++);
var digit=context.getDecimalStyle$().convertToDigit$C(ch);
if (digit < 0) {
if (pos < minEndPos) {
return ~position;
}pos--;
break;
}total=total * 10 + digit;
}
var fraction=Clazz.new_($I$(10,1).c$$I,[total]).movePointLeft$I(pos - position);
var value=p$1.convertFromFraction$java_math_BigDecimal.apply(this, [fraction]);
return context.setParsedField$java_time_temporal_TemporalField$J$I$I(this.field, value, position, pos);
});

Clazz.newMeth(C$, 'convertToFraction$J', function (value) {
var range=this.field.range$();
range.checkValidValue$J$java_time_temporal_TemporalField(value, this.field);
var minBD=$I$(10,"valueOf$J",[range.getMinimum$()]);
var rangeBD=$I$(10,"valueOf$J",[range.getMaximum$()]).subtract$java_math_BigDecimal(minBD).add$java_math_BigDecimal($I$(10).ONE);
var valueBD=$I$(10).valueOf$J(value).subtract$java_math_BigDecimal(minBD);
var fraction=valueBD.divide$java_math_BigDecimal$I$java_math_RoundingMode(rangeBD, 9, $I$(9).FLOOR);
return fraction.compareTo$java_math_BigDecimal($I$(10).ZERO) == 0 ? $I$(10).ZERO : fraction.stripTrailingZeros$();
}, p$1);

Clazz.newMeth(C$, 'convertFromFraction$java_math_BigDecimal', function (fraction) {
var range=this.field.range$();
var minBD=$I$(10,"valueOf$J",[range.getMinimum$()]);
var rangeBD=$I$(10,"valueOf$J",[range.getMaximum$()]).subtract$java_math_BigDecimal(minBD).add$java_math_BigDecimal($I$(10).ONE);
var valueBD=fraction.multiply$java_math_BigDecimal(rangeBD).setScale$I$java_math_RoundingMode(0, $I$(9).FLOOR).add$java_math_BigDecimal(minBD);
return valueBD.longValueExact$();
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var decimal=(this.decimalPoint ? ",DecimalPoint" : "");
return "Fraction(" + this.field + "," + this.minWidth + "," + this.maxWidth + decimal + ")" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "TextPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['field','java.time.temporal.TemporalField','textStyle','java.time.format.TextStyle','provider','java.time.format.DateTimeTextProvider','numberPrinterParser','java.time.format.DateTimeFormatterBuilder.NumberPrinterParser']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalField$java_time_format_TextStyle$java_time_format_DateTimeTextProvider', function (field, textStyle, provider) {
;C$.$init$.apply(this);
this.field=field;
this.textStyle=textStyle;
this.provider=provider;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var value=context.getValue$java_time_temporal_TemporalField(this.field);
if (value == null ) {
return false;
}var text;
var chrono=context.getTemporal$().query$java_time_temporal_TemporalQuery($I$(11).chronology$());
if (chrono == null  || chrono === $I$(12).INSTANCE  ) {
text=this.provider.getText$java_time_temporal_TemporalField$J$java_time_format_TextStyle$java_util_Locale(this.field, (value).valueOf(), this.textStyle, context.getLocale$());
} else {
text=this.provider.getText$java_time_chrono_Chronology$java_time_temporal_TemporalField$J$java_time_format_TextStyle$java_util_Locale(chrono, this.field, (value).valueOf(), this.textStyle, context.getLocale$());
}if (text == null ) {
return p$2.numberPrinterParser.apply(this, []).format$java_time_format_DateTimePrintContext$StringBuilder(context, buf);
}buf.append$S(text);
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, parseText, position) {
var length=parseText.length$();
if (position < 0 || position > length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var style=(context.isStrict$() ? this.textStyle : null);
var chrono=context.getEffectiveChronology$();
var it;
if (chrono == null  || chrono === $I$(12).INSTANCE  ) {
it=this.provider.getTextIterator$java_time_temporal_TemporalField$java_time_format_TextStyle$java_util_Locale(this.field, style, context.getLocale$());
} else {
it=this.provider.getTextIterator$java_time_chrono_Chronology$java_time_temporal_TemporalField$java_time_format_TextStyle$java_util_Locale(chrono, this.field, style, context.getLocale$());
}if (it != null ) {
while (it.hasNext$()){
var entry=it.next$();
var itText=entry.getKey$();
if (context.subSequenceEquals$CharSequence$I$CharSequence$I$I(itText, 0, parseText, position, itText.length$())) {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I(this.field, (entry.getValue$()).valueOf(), position, position + itText.length$());
}}
if (context.isStrict$()) {
return ~position;
}}return p$2.numberPrinterParser.apply(this, []).parse$java_time_format_DateTimeParseContext$CharSequence$I(context, parseText, position);
});

Clazz.newMeth(C$, 'numberPrinterParser', function () {
if (this.numberPrinterParser == null ) {
this.numberPrinterParser=Clazz.new_([this.field, 1, 19, $I$(3).NORMAL],$I$(6,1).c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle);
}return this.numberPrinterParser;
}, p$2);

Clazz.newMeth(C$, 'toString', function () {
if (this.textStyle === $I$(13).FULL ) {
return "Text(" + this.field + ")" ;
}return "Text(" + this.field + "," + this.textStyle + ")" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "InstantPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['fractionalDigits']]]

Clazz.newMeth(C$, 'c$$I', function (fractionalDigits) {
;C$.$init$.apply(this);
this.fractionalDigits=fractionalDigits;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var inSecs=context.getValue$java_time_temporal_TemporalField($I$(14).INSTANT_SECONDS);
var inNanos=null;
if (context.getTemporal$().isSupported$java_time_temporal_TemporalField($I$(14).NANO_OF_SECOND)) {
inNanos=Long.valueOf$J(context.getTemporal$().getLong$java_time_temporal_TemporalField($I$(14).NANO_OF_SECOND));
}if (inSecs == null ) {
return false;
}var inSec=(inSecs).valueOf();
var inNano=$I$(14).NANO_OF_SECOND.checkValidIntValue$J(inNanos != null  ? (inNanos).valueOf() : 0);
if (inSec >= -62167219200) {
var zeroSecs=inSec - 315569520000 + 62167219200;
var hi=Math.floorDiv(zeroSecs, 315569520000) + 1;
var lo=Math.floorMod(zeroSecs, 315569520000);
var ldt=$I$(15,"ofEpochSecond$J$I$java_time_ZoneOffset",[lo - 62167219200, 0, $I$(16).UTC]);
if (hi > 0) {
buf.append$C("+").append$J(hi);
}buf.append$O(ldt);
if (ldt.getSecond$() == 0) {
buf.append$S(":00");
}} else {
var zeroSecs=inSec + 62167219200;
var hi=Clazz.toLong(zeroSecs/315569520000);
var lo=zeroSecs % 315569520000;
var ldt=$I$(15,"ofEpochSecond$J$I$java_time_ZoneOffset",[lo - 62167219200, 0, $I$(16).UTC]);
var pos=buf.length$();
buf.append$O(ldt);
if (ldt.getSecond$() == 0) {
buf.append$S(":00");
}if (hi < 0) {
if (ldt.getYear$() == -10000) {
buf.replace$I$I$S(pos, pos + 2, Long.toString$J(hi - 1));
} else if (lo == 0) {
buf.insert$I$J(pos, hi);
} else {
buf.insert$I$J(pos + 1, Math.abs(hi));
}}}if ((this.fractionalDigits < 0 && inNano > 0 ) || this.fractionalDigits > 0 ) {
buf.append$C(".");
var div=100000000;
for (var i=0; ((this.fractionalDigits == -1 && inNano > 0 ) || (this.fractionalDigits == -2 && (inNano > 0 || (i % 3) != 0 ) ) || i < this.fractionalDigits  ); i++) {
var digit=(inNano/div|0);
buf.append$C(String.fromCharCode((digit + 48)));
inNano=inNano - (digit * div);
div=(div/10|0);
}
}buf.append$C("Z");
return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var minDigits=(this.fractionalDigits < 0 ? 0 : this.fractionalDigits);
var maxDigits=(this.fractionalDigits < 0 ? 9 : this.fractionalDigits);
var parser=Clazz.new_($I$(17,1)).append$java_time_format_DateTimeFormatter($I$(18).ISO_LOCAL_DATE).appendLiteral$C("T").appendValue$java_time_temporal_TemporalField$I($I$(14).HOUR_OF_DAY, 2).appendLiteral$C(":").appendValue$java_time_temporal_TemporalField$I($I$(14).MINUTE_OF_HOUR, 2).appendLiteral$C(":").appendValue$java_time_temporal_TemporalField$I($I$(14).SECOND_OF_MINUTE, 2).appendFraction$java_time_temporal_TemporalField$I$I$Z($I$(14).NANO_OF_SECOND, minDigits, maxDigits, true).appendLiteral$C("Z").toFormatter$().toPrinterParser$Z(false);
var newContext=context.copy$();
var pos=parser.parse$java_time_format_DateTimeParseContext$CharSequence$I(newContext, text, position);
if (pos < 0) {
return pos;
}var yearParsed=(newContext.getParsed$java_time_temporal_TemporalField($I$(14).YEAR)).valueOf();
var month=newContext.getParsed$java_time_temporal_TemporalField($I$(14).MONTH_OF_YEAR).intValue$();
var day=newContext.getParsed$java_time_temporal_TemporalField($I$(14).DAY_OF_MONTH).intValue$();
var hour=newContext.getParsed$java_time_temporal_TemporalField($I$(14).HOUR_OF_DAY).intValue$();
var min=newContext.getParsed$java_time_temporal_TemporalField($I$(14).MINUTE_OF_HOUR).intValue$();
var secVal=newContext.getParsed$java_time_temporal_TemporalField($I$(14).SECOND_OF_MINUTE);
var nanoVal=newContext.getParsed$java_time_temporal_TemporalField($I$(14).NANO_OF_SECOND);
var sec=(secVal != null  ? secVal.intValue$() : 0);
var nano=(nanoVal != null  ? nanoVal.intValue$() : 0);
var days=0;
if (hour == 24 && min == 0  && sec == 0  && nano == 0 ) {
hour=0;
days=1;
} else if (hour == 23 && min == 59  && sec == 60 ) {
context.setParsedLeapSecond$();
sec=59;
}var year=(yearParsed|0) % 10000;
var instantSecs;
try {
var ldt=$I$(15).of$I$I$I$I$I$I$I(year, month, day, hour, min, sec, 0).plusDays$J(days);
instantSecs=ldt.toEpochSecond$java_time_ZoneOffset($I$(16).UTC);
instantSecs+=Math.multiplyExact(Clazz.toLong(yearParsed/10000), 315569520000);
} catch (ex) {
if (Clazz.exceptionOf(ex,"RuntimeException")){
return ~position;
} else {
throw ex;
}
}
var successPos=pos;
successPos=context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).INSTANT_SECONDS, instantSecs, position, successPos);
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).NANO_OF_SECOND, nano, position, successPos);
});

Clazz.newMeth(C$, 'toString', function () {
return "Instant()";
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "OffsetIdPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type'],'S',['noOffsetText']]
,['O',['PATTERNS','String[]','INSTANCE_ID_Z','java.time.format.DateTimeFormatterBuilder.OffsetIdPrinterParser','+INSTANCE_ID_ZERO']]]

Clazz.newMeth(C$, 'c$$S$S', function (pattern, noOffsetText) {
;C$.$init$.apply(this);
$I$(8).requireNonNull$O$S(pattern, "pattern");
$I$(8).requireNonNull$O$S(noOffsetText, "noOffsetText");
this.type=p$3.checkPattern$S.apply(this, [pattern]);
this.noOffsetText=noOffsetText;
}, 1);

Clazz.newMeth(C$, 'checkPattern$S', function (pattern) {
for (var i=0; i < C$.PATTERNS.length; i++) {
if (C$.PATTERNS[i].equals$O(pattern)) {
return i;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid zone offset pattern: " + pattern]);
}, p$3);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var offsetSecs=context.getValue$java_time_temporal_TemporalField($I$(14).OFFSET_SECONDS);
if (offsetSecs == null ) {
return false;
}var totalSecs=Math.toIntExact((offsetSecs).valueOf());
if (totalSecs == 0) {
buf.append$S(this.noOffsetText);
} else {
var absHours=Math.abs(((totalSecs/3600|0)) % 100);
var absMinutes=Math.abs(((totalSecs/60|0)) % 60);
var absSeconds=Math.abs(totalSecs % 60);
var bufPos=buf.length$();
var output=absHours;
buf.append$S(totalSecs < 0 ? "-" : "+").append$C(String.fromCharCode(((absHours/10|0) + 48))).append$C(String.fromCharCode((absHours % 10 + 48)));
if (this.type >= 3 || (this.type >= 1 && absMinutes > 0 ) ) {
buf.append$S((this.type % 2) == 0 ? ":" : "").append$C(String.fromCharCode(((absMinutes/10|0) + 48))).append$C(String.fromCharCode((absMinutes % 10 + 48)));
output+=absMinutes;
if (this.type >= 7 || (this.type >= 5 && absSeconds > 0 ) ) {
buf.append$S((this.type % 2) == 0 ? ":" : "").append$C(String.fromCharCode(((absSeconds/10|0) + 48))).append$C(String.fromCharCode((absSeconds % 10 + 48)));
output+=absSeconds;
}}if (output == 0) {
buf.setLength$I(bufPos);
buf.append$S(this.noOffsetText);
}}return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var length=text.length$();
var noOffsetLen=this.noOffsetText.length$();
if (noOffsetLen == 0) {
if (position == length) {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, 0, position, position);
}} else {
if (position == length) {
return ~position;
}if (context.subSequenceEquals$CharSequence$I$CharSequence$I$I(text, position, this.noOffsetText, 0, noOffsetLen)) {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, 0, position, position + noOffsetLen);
}}var sign=text.charAt$I(position);
if (sign == "+" || sign == "-" ) {
var negative=(sign == "-" ? -1 : 1);
var array=Clazz.array(Integer.TYPE, [4]);
array[0]=position + 1;
if ((p$3.parseNumber$IA$I$CharSequence$Z.apply(this, [array, 1, text, true]) || p$3.parseNumber$IA$I$CharSequence$Z.apply(this, [array, 2, text, this.type >= 3]) || p$3.parseNumber$IA$I$CharSequence$Z.apply(this, [array, 3, text, false])  ) == false ) {
var offsetSecs=negative * (array[1] * 3600 + array[2] * 60 + array[3]);
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, offsetSecs, position, array[0]);
}}if (noOffsetLen == 0) {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, 0, position, position + noOffsetLen);
}return ~position;
});

Clazz.newMeth(C$, 'parseNumber$IA$I$CharSequence$Z', function (array, arrayIndex, parseText, required) {
if (((this.type + 3)/2|0) < arrayIndex) {
return false;
}var pos=array[0];
if ((this.type % 2) == 0 && arrayIndex > 1 ) {
if (pos + 1 > parseText.length$() || parseText.charAt$I(pos) != ":" ) {
return required;
}pos++;
}if (pos + 2 > parseText.length$()) {
return required;
}var ch1=parseText.charAt$I(pos++);
var ch2=parseText.charAt$I(pos++);
if (ch1 < "0" || ch1 > "9"  || ch2 < "0"  || ch2 > "9" ) {
return required;
}var value=(ch1.$c() - 48) * 10 + (ch2.$c() - 48);
if (value < 0 || value > 59 ) {
return required;
}array[arrayIndex]=value;
array[0]=pos;
return false;
}, p$3);

Clazz.newMeth(C$, 'toString', function () {
var converted=this.noOffsetText.replace$CharSequence$CharSequence("\'", "\'\'");
return "Offset(" + C$.PATTERNS[this.type] + ",'" + converted + "')" ;
});

C$.$static$=function(){C$.$static$=0;
C$.PATTERNS=Clazz.array(String, -1, ["+HH", "+HHmm", "+HH:mm", "+HHMM", "+HH:MM", "+HHMMss", "+HH:MM:ss", "+HHMMSS", "+HH:MM:SS"]);
C$.INSTANCE_ID_Z=Clazz.new_(C$.c$$S$S,["+HH:MM:ss", "Z"]);
C$.INSTANCE_ID_ZERO=Clazz.new_(C$.c$$S$S,["+HH:MM:ss", "0"]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "LocalizedOffsetIdPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['style','java.time.format.TextStyle']]]

Clazz.newMeth(C$, 'c$$java_time_format_TextStyle', function (style) {
;C$.$init$.apply(this);
this.style=style;
}, 1);

Clazz.newMeth(C$, 'appendHMS$StringBuilder$I', function (buf, t) {
return buf.append$C(String.fromCharCode(((t/10|0) + 48))).append$C(String.fromCharCode((t % 10 + 48)));
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var offsetSecs=context.getValue$java_time_temporal_TemporalField($I$(14).OFFSET_SECONDS);
if (offsetSecs == null ) {
return false;
}var gmtText="GMT";
if (gmtText != null ) {
buf.append$S(gmtText);
}var totalSecs=Math.toIntExact((offsetSecs).valueOf());
if (totalSecs != 0) {
var absHours=Math.abs(((totalSecs/3600|0)) % 100);
var absMinutes=Math.abs(((totalSecs/60|0)) % 60);
var absSeconds=Math.abs(totalSecs % 60);
buf.append$S(totalSecs < 0 ? "-" : "+");
if (this.style === $I$(13).FULL ) {
C$.appendHMS$StringBuilder$I(buf, absHours);
buf.append$C(":");
C$.appendHMS$StringBuilder$I(buf, absMinutes);
if (absSeconds != 0) {
buf.append$C(":");
C$.appendHMS$StringBuilder$I(buf, absSeconds);
}} else {
if (absHours >= 10) {
buf.append$C(String.fromCharCode(((absHours/10|0) + 48)));
}buf.append$C(String.fromCharCode((absHours % 10 + 48)));
if (absMinutes != 0 || absSeconds != 0 ) {
buf.append$C(":");
C$.appendHMS$StringBuilder$I(buf, absMinutes);
if (absSeconds != 0) {
buf.append$C(":");
C$.appendHMS$StringBuilder$I(buf, absSeconds);
}}}}return true;
});

Clazz.newMeth(C$, 'getDigit$CharSequence$I', function (text, position) {
var c=text.charAt$I(position);
if (c < "0" || c > "9" ) {
return -1;
}return c.$c() - 48;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var pos=position;
var end=pos + text.length$();
var gmtText="GMT";
if (gmtText != null ) {
if (!context.subSequenceEquals$CharSequence$I$CharSequence$I$I(text, pos, gmtText, 0, gmtText.length$())) {
return ~position;
}pos+=gmtText.length$();
}var negative=0;
if (pos == end) {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, 0, position, pos);
}var sign=text.charAt$I(pos);
if (sign == "+") {
negative=1;
} else if (sign == "-") {
negative=-1;
} else {
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, 0, position, pos);
}pos++;
var h=0;
var m=0;
var s=0;
if (this.style === $I$(13).FULL ) {
var h1=this.getDigit$CharSequence$I(text, pos++);
var h2=this.getDigit$CharSequence$I(text, pos++);
if (h1 < 0 || h2 < 0  || text.charAt$I(pos++) != ":" ) {
return ~position;
}h=h1 * 10 + h2;
var m1=this.getDigit$CharSequence$I(text, pos++);
var m2=this.getDigit$CharSequence$I(text, pos++);
if (m1 < 0 || m2 < 0 ) {
return ~position;
}m=m1 * 10 + m2;
if (pos + 2 < end && text.charAt$I(pos) == ":" ) {
var s1=this.getDigit$CharSequence$I(text, pos + 1);
var s2=this.getDigit$CharSequence$I(text, pos + 2);
if (s1 >= 0 && s2 >= 0 ) {
s=s1 * 10 + s2;
pos+=3;
}}} else {
h=this.getDigit$CharSequence$I(text, pos++);
if (h < 0) {
return ~position;
}if (pos < end) {
var h2=this.getDigit$CharSequence$I(text, pos);
if (h2 >= 0) {
h=h * 10 + h2;
pos++;
}if (pos + 2 < end && text.charAt$I(pos) == ":" ) {
if (pos + 2 < end && text.charAt$I(pos) == ":" ) {
var m1=this.getDigit$CharSequence$I(text, pos + 1);
var m2=this.getDigit$CharSequence$I(text, pos + 2);
if (m1 >= 0 && m2 >= 0 ) {
m=m1 * 10 + m2;
pos+=3;
if (pos + 2 < end && text.charAt$I(pos) == ":" ) {
var s1=this.getDigit$CharSequence$I(text, pos + 1);
var s2=this.getDigit$CharSequence$I(text, pos + 2);
if (s1 >= 0 && s2 >= 0 ) {
s=s1 * 10 + s2;
pos+=3;
}}}}}}}var offsetSecs=negative * (h * 3600 + m * 60 + s);
return context.setParsedField$java_time_temporal_TemporalField$J$I$I($I$(14).OFFSET_SECONDS, offsetSecs, position, pos);
});

Clazz.newMeth(C$, 'toString', function () {
return "LocalizedOffset(" + this.style + ")" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "ZoneTextPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.time.format.DateTimeFormatterBuilder','.ZoneIdPrinterParser']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cachedTree=Clazz.new_($I$(20,1));
this.cachedTreeCI=Clazz.new_($I$(20,1));
},1);

C$.$fields$=[['O',['textStyle','java.time.format.TextStyle','preferredZones','java.util.Set','cachedTree','java.util.Map','+cachedTreeCI']]
,['O',['cache','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_time_format_TextStyle$java_util_Set', function (textStyle, preferredZones) {
;C$.superclazz.c$$java_time_temporal_TemporalQuery$S.apply(this,[$I$(11).zone$(), "ZoneText(" + textStyle + ")" ]);C$.$init$.apply(this);
this.textStyle=$I$(8).requireNonNull$O$S(textStyle, "textStyle");
if (preferredZones != null  && preferredZones.size$() != 0 ) {
this.preferredZones=Clazz.new_($I$(21,1));
for (var id, $id = preferredZones.iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
this.preferredZones.add$O(id.getId$());
}
}}, 1);

Clazz.newMeth(C$, 'getDisplayName$S$I$java_util_Locale', function (id, type, locale) {
if (this.textStyle === $I$(13).NARROW ) {
return null;
}var names;
var ref=C$.cache.get$O(id);
var perLocale=null;
if (ref == null  || (perLocale=ref.get$()) == null   || (names=perLocale.get$O(locale)) == null  ) {
names=$I$(22).retrieveDisplayNames$S$java_util_Locale(id, locale);
if (names == null ) {
return null;
}names=$I$(23).copyOfRange$OA$I$I(names, 0, 7);
names[5]=$I$(22).retrieveGenericDisplayName$S$I$java_util_Locale(id, 1, locale);
if (names[5] == null ) {
names[5]=names[0];
}names[6]=$I$(22).retrieveGenericDisplayName$S$I$java_util_Locale(id, 0, locale);
if (names[6] == null ) {
names[6]=names[0];
}if (perLocale == null ) {
perLocale=Clazz.new_($I$(19,1));
}perLocale.put$O$O(locale, names);
C$.cache.put$O$O(id, Clazz.new_($I$(24,1).c$$O,[perLocale]));
}switch (type) {
case 0:
return names[this.textStyle.zoneNameStyleIndex$() + 1];
case 1:
return names[this.textStyle.zoneNameStyleIndex$() + 3];
}
return names[this.textStyle.zoneNameStyleIndex$() + 5];
}, p$4);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var zone=context.getValue$java_time_temporal_TemporalQuery($I$(11).zoneId$());
if (zone == null ) {
return false;
}var zname=zone.getId$();
if (!(Clazz.instanceOf(zone, "java.time.ZoneOffset"))) {
var dt=context.getTemporal$();
var name=p$4.getDisplayName$S$I$java_util_Locale.apply(this, [zname, dt.isSupported$java_time_temporal_TemporalField($I$(14).INSTANT_SECONDS) ? (zone.getRules$().isDaylightSavings$java_time_Instant($I$(25).from$java_time_temporal_TemporalAccessor(dt)) ? 1 : 0) : 2, context.getLocale$()]);
if (name != null ) {
zname=name;
}}buf.append$S(zname);
return true;
});

Clazz.newMeth(C$, 'getTree$java_time_format_DateTimeParseContext', function (context) {
if (this.textStyle === $I$(13).NARROW ) {
return C$.superclazz.prototype.getTree$java_time_format_DateTimeParseContext.apply(this, [context]);
}var locale=context.getLocale$();
var isCaseSensitive=context.isCaseSensitive$();
var regionIds=$I$(26).getAvailableZoneIds$();
var regionIdsSize=regionIds.size$();
var cached=isCaseSensitive ? this.cachedTree : this.cachedTreeCI;
var entry=null;
var tree=null;
var zoneStrings=null;
if ((entry=cached.get$O(locale)) == null  || ((entry.getKey$()).valueOf() !== regionIdsSize  || (tree=entry.getValue$().get$()) == null  ) ) {
tree=$I$(27).newTree$java_time_format_DateTimeParseContext(context);
zoneStrings=$I$(22).getZoneStrings$java_util_Locale(locale);
for (var names, $names = 0, $$names = zoneStrings; $names<$$names.length&&((names=($$names[$names])),1);$names++) {
var zid=names[0];
if (!regionIds.contains$O(zid)) {
continue;
}tree.add$S$S(zid, zid);
zid=$I$(28).toZid$S$java_util_Locale(zid, locale);
var i=this.textStyle === $I$(13).FULL  ? 1 : 2;
for (; i < names.length; i+=2) {
tree.add$S$S(names[i], zid);
}
}
if (this.preferredZones != null ) {
for (var names, $names = 0, $$names = zoneStrings; $names<$$names.length&&((names=($$names[$names])),1);$names++) {
var zid=names[0];
if (!this.preferredZones.contains$O(zid) || !regionIds.contains$O(zid) ) {
continue;
}var i=this.textStyle === $I$(13).FULL  ? 1 : 2;
for (; i < names.length; i+=2) {
tree.add$S$S(names[i], zid);
}
}
}cached.put$O$O(locale, Clazz.new_([Integer.valueOf$I(regionIdsSize), Clazz.new_($I$(24,1).c$$O,[tree])],$I$(29,1).c$$O$O));
}return tree;
});

C$.$static$=function(){C$.$static$=0;
C$.cache=Clazz.new_($I$(19,1));
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "ZoneIdPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['description'],'O',['query','java.time.temporal.TemporalQuery']]
,['O',['cachedPrefixTree','java.util.Map.Entry','+cachedPrefixTreeCI']]]

Clazz.newMeth(C$, 'c$$java_time_temporal_TemporalQuery$S', function (query, description) {
;C$.$init$.apply(this);
this.query=query;
this.description=description;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var zone=context.getValue$java_time_temporal_TemporalQuery(this.query);
if (zone == null ) {
return false;
}buf.append$S(zone.getId$());
return true;
});

Clazz.newMeth(C$, 'getTree$java_time_format_DateTimeParseContext', function (context) {
var regionIds=$I$(26).getAvailableZoneIds$();
var regionIdsSize=regionIds.size$();
var cached=context.isCaseSensitive$() ? C$.cachedPrefixTree : C$.cachedPrefixTreeCI;
if (cached == null  || (cached.getKey$()).valueOf() !== regionIdsSize  ) {
{
cached=context.isCaseSensitive$() ? C$.cachedPrefixTree : C$.cachedPrefixTreeCI;
if (cached == null  || (cached.getKey$()).valueOf() !== regionIdsSize  ) {
cached=Clazz.new_([Integer.valueOf$I(regionIdsSize), $I$(27).newTree$java_util_Set$java_time_format_DateTimeParseContext(regionIds, context)],$I$(29,1).c$$O$O);
if (context.isCaseSensitive$()) {
C$.cachedPrefixTree=cached;
} else {
C$.cachedPrefixTreeCI=cached;
}}}}return cached.getValue$();
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var length=text.length$();
if (position > length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (position == length) {
return ~position;
}var nextChar=text.charAt$I(position);
if (nextChar == "+" || nextChar == "-" ) {
return p$5.parseOffsetBased$java_time_format_DateTimeParseContext$CharSequence$I$I$java_time_format_DateTimeFormatterBuilder_OffsetIdPrinterParser.apply(this, [context, text, position, position, $I$(30).INSTANCE_ID_Z]);
} else if (length >= position + 2) {
var nextNextChar=text.charAt$I(position + 1);
if (context.charEquals$C$C(nextChar, "U") && context.charEquals$C$C(nextNextChar, "T") ) {
if (length >= position + 3 && context.charEquals$C$C(text.charAt$I(position + 2), "C") ) {
return p$5.parseOffsetBased$java_time_format_DateTimeParseContext$CharSequence$I$I$java_time_format_DateTimeFormatterBuilder_OffsetIdPrinterParser.apply(this, [context, text, position, position + 3, $I$(30).INSTANCE_ID_ZERO]);
}return p$5.parseOffsetBased$java_time_format_DateTimeParseContext$CharSequence$I$I$java_time_format_DateTimeFormatterBuilder_OffsetIdPrinterParser.apply(this, [context, text, position, position + 2, $I$(30).INSTANCE_ID_ZERO]);
} else if (context.charEquals$C$C(nextChar, "G") && length >= position + 3  && context.charEquals$C$C(nextNextChar, "M")  && context.charEquals$C$C(text.charAt$I(position + 2), "T") ) {
return p$5.parseOffsetBased$java_time_format_DateTimeParseContext$CharSequence$I$I$java_time_format_DateTimeFormatterBuilder_OffsetIdPrinterParser.apply(this, [context, text, position, position + 3, $I$(30).INSTANCE_ID_ZERO]);
}}var tree=this.getTree$java_time_format_DateTimeParseContext(context);
var ppos=Clazz.new_($I$(31,1).c$$I,[position]);
var parsedZoneId=tree.match$CharSequence$java_text_ParsePosition(text, ppos);
if (parsedZoneId == null ) {
if (context.charEquals$C$C(nextChar, "Z")) {
context.setParsed$java_time_ZoneId($I$(16).UTC);
return position + 1;
}return ~position;
}context.setParsed$java_time_ZoneId($I$(32).of$S(parsedZoneId));
return ppos.getIndex$();
});

Clazz.newMeth(C$, 'parseOffsetBased$java_time_format_DateTimeParseContext$CharSequence$I$I$java_time_format_DateTimeFormatterBuilder_OffsetIdPrinterParser', function (context, text, prefixPos, position, parser) {
var prefix=text.toString().substring$I$I(prefixPos, position).toUpperCase$();
if (position >= text.length$()) {
context.setParsed$java_time_ZoneId($I$(32).of$S(prefix));
return position;
}if (text.charAt$I(position) == "0" || context.charEquals$C$C(text.charAt$I(position), "Z") ) {
context.setParsed$java_time_ZoneId($I$(32).of$S(prefix));
return position;
}var newContext=context.copy$();
var endPos=parser.parse$java_time_format_DateTimeParseContext$CharSequence$I(newContext, text, position);
try {
if (endPos < 0) {
if (parser === $I$(30).INSTANCE_ID_Z ) {
return ~prefixPos;
}context.setParsed$java_time_ZoneId($I$(32).of$S(prefix));
return position;
}var offset=(newContext.getParsed$java_time_temporal_TemporalField($I$(14).OFFSET_SECONDS).longValue$()|0);
var zoneOffset=$I$(16).ofTotalSeconds$I(offset);
context.setParsed$java_time_ZoneId($I$(32).ofOffset$S$java_time_ZoneOffset(prefix, zoneOffset));
return endPos;
} catch (dte) {
if (Clazz.exceptionOf(dte,"java.time.DateTimeException")){
return ~prefixPos;
} else {
throw dte;
}
}
}, p$5);

Clazz.newMeth(C$, 'toString', function () {
return this.description;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "PrefixTree", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['CI',10],['LENIENT',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c0'],'S',['key','value'],'O',['child','java.time.format.DateTimeFormatterBuilder.PrefixTree','+sibling']]]

Clazz.newMeth(C$, 'c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree', function (k, v, child) {
;C$.$init$.apply(this);
this.key=k;
this.value=v;
this.child=child;
if (k.length$() == 0) {
this.c0=String.fromCharCode(65535);
} else {
this.c0=this.key.charAt$I(0);
}}, 1);

Clazz.newMeth(C$, 'newTree$java_time_format_DateTimeParseContext', function (context) {
if (context.isCaseSensitive$()) {
return Clazz.new_(C$.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree,["", null, null]);
}return Clazz.new_($I$(34,1).c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree,["", null, null]);
}, 1);

Clazz.newMeth(C$, 'newTree$java_util_Set$java_time_format_DateTimeParseContext', function (keys, context) {
var tree=C$.newTree$java_time_format_DateTimeParseContext(context);
for (var k, $k = keys.iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) {
p$7.add0$S$S.apply(tree, [k, k]);
}
return tree;
}, 1);

Clazz.newMeth(C$, 'copyTree$', function () {
var copy=Clazz.new_(C$.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree,[this.key, this.value, null]);
if (this.child != null ) {
copy.child=this.child.copyTree$();
}if (this.sibling != null ) {
copy.sibling=this.sibling.copyTree$();
}return copy;
});

Clazz.newMeth(C$, 'add$S$S', function (k, v) {
return p$7.add0$S$S.apply(this, [k, v]);
});

Clazz.newMeth(C$, 'add0$S$S', function (k, v) {
k=this.toKey$S(k);
var prefixLen=p$7.prefixLength$S.apply(this, [k]);
if (prefixLen == this.key.length$()) {
if (prefixLen < k.length$()) {
var subKey=k.substring$I(prefixLen);
var c=this.child;
while (c != null ){
if (this.isEqual$C$C(c.c0, subKey.charAt$I(0))) {
return p$7.add0$S$S.apply(c, [subKey, v]);
}c=c.sibling;
}
c=this.newNode$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree(subKey, v, null);
c.sibling=this.child;
this.child=c;
return true;
}this.value=v;
return true;
}var n1=this.newNode$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree(this.key.substring$I(prefixLen), this.value, this.child);
this.key=k.substring$I$I(0, prefixLen);
this.child=n1;
if (prefixLen < k.length$()) {
var n2=this.newNode$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree(k.substring$I(prefixLen), v, null);
this.child.sibling=n2;
this.value=null;
} else {
this.value=v;
}return true;
}, p$7);

Clazz.newMeth(C$, 'match$CharSequence$I$I', function (text, off, end) {
if (!this.prefixOf$CharSequence$I$I(text, off, end)) {
return null;
}if (this.child != null  && (off+=this.key.length$()) != end ) {
var c=this.child;
do {
if (this.isEqual$C$C(c.c0, text.charAt$I(off))) {
var found=c.match$CharSequence$I$I(text, off, end);
if (found != null ) {
return found;
}return this.value;
}c=c.sibling;
} while (c != null );
}return this.value;
});

Clazz.newMeth(C$, 'match$CharSequence$java_text_ParsePosition', function (text, pos) {
var off=pos.getIndex$();
var end=text.length$();
if (!this.prefixOf$CharSequence$I$I(text, off, end)) {
return null;
}off+=this.key.length$();
if (this.child != null  && off != end ) {
var c=this.child;
do {
if (this.isEqual$C$C(c.c0, text.charAt$I(off))) {
pos.setIndex$I(off);
var found=c.match$CharSequence$java_text_ParsePosition(text, pos);
if (found != null ) {
return found;
}break;
}c=c.sibling;
} while (c != null );
}pos.setIndex$I(off);
return this.value;
});

Clazz.newMeth(C$, 'toKey$S', function (k) {
return k;
});

Clazz.newMeth(C$, 'newNode$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree', function (k, v, child) {
return Clazz.new_(C$.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree,[k, v, child]);
});

Clazz.newMeth(C$, 'isEqual$C$C', function (c1, c2) {
return c1 == c2;
});

Clazz.newMeth(C$, 'prefixOf$CharSequence$I$I', function (text, off, end) {
if (Clazz.instanceOf(text, "java.lang.String")) {
return (text).startsWith$S$I(this.key, off);
}var len=this.key.length$();
if (len > end - off) {
return false;
}var off0=0;
while (len-- > 0){
if (!this.isEqual$C$C(this.key.charAt$I(off0++), text.charAt$I(off++))) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'prefixLength$S', function (k) {
var off=0;
while (off < k.length$() && off < this.key.length$() ){
if (!this.isEqual$C$C(k.charAt$I(off), this.key.charAt$I(off))) {
return off;
}off++;
}
return off;
}, p$7);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder.PrefixTree, "CI", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.time.format.DateTimeFormatterBuilder','.PrefixTree']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree', function (k, v, child) {
;C$.superclazz.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree.apply(this,[k, v, child]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newNode$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree', function (k, v, child) {
return Clazz.new_(C$.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree,[k, v, child]);
});

Clazz.newMeth(C$, 'isEqual$C$C', function (c1, c2) {
return $I$(33).charEqualsIgnoreCase$C$C(c1, c2);
});

Clazz.newMeth(C$, 'prefixOf$CharSequence$I$I', function (text, off, end) {
var len=this.key.length$();
if (len > end - off) {
return false;
}var off0=0;
while (len-- > 0){
if (!this.isEqual$C$C(this.key.charAt$I(off0++), text.charAt$I(off++))) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder.PrefixTree, "LENIENT", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.time.format.DateTimeFormatterBuilder','.PrefixTree','.CI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree', function (k, v, child) {
;C$.superclazz.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree.apply(this,[k, v, child]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newNode$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree', function (k, v, child) {
return Clazz.new_(C$.c$$S$S$java_time_format_DateTimeFormatterBuilder_PrefixTree,[k, v, child]);
});

Clazz.newMeth(C$, 'isLenientChar$C', function (c) {
return c == " " || c == "_"  || c == "/" ;
}, p$6);

Clazz.newMeth(C$, 'toKey$S', function (k) {
for (var i=0; i < k.length$(); i++) {
if (p$6.isLenientChar$C.apply(this, [k.charAt$I(i)])) {
var sb=Clazz.new_([k.length$()],$I$(2,1).c$$I);
sb.append$CharSequence$I$I(k, 0, i);
i++;
while (i < k.length$()){
if (!p$6.isLenientChar$C.apply(this, [k.charAt$I(i)])) {
sb.append$C(k.charAt$I(i));
}i++;
}
return sb.toString();
}}
return k;
});

Clazz.newMeth(C$, 'match$CharSequence$java_text_ParsePosition', function (text, pos) {
var off=pos.getIndex$();
var end=text.length$();
var len=this.key.length$();
var koff=0;
while (koff < len && off < end ){
if (p$6.isLenientChar$C.apply(this, [text.charAt$I(off)])) {
off++;
continue;
}if (!this.isEqual$C$C(this.key.charAt$I(koff++), text.charAt$I(off++))) {
return null;
}}
if (koff != len) {
return null;
}if (this.child != null  && off != end ) {
var off0=off;
while (off0 < end && p$6.isLenientChar$C.apply(this, [text.charAt$I(off0)]) ){
off0++;
}
if (off0 < end) {
var c=this.child;
do {
if (this.isEqual$C$C(c.c0, text.charAt$I(off0))) {
pos.setIndex$I(off0);
var found=c.match$CharSequence$java_text_ParsePosition(text, pos);
if (found != null ) {
return found;
}break;
}c=c.sibling;
} while (c != null );
}}pos.setIndex$I(off);
return this.value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "ChronoPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['textStyle','java.time.format.TextStyle']]]

Clazz.newMeth(C$, 'c$$java_time_format_TextStyle', function (textStyle) {
;C$.$init$.apply(this);
this.textStyle=textStyle;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var chrono=context.getValue$java_time_temporal_TemporalQuery($I$(11).chronology$());
if (chrono == null ) {
return false;
}if (this.textStyle == null ) {
buf.append$S(chrono.getId$());
} else {
buf.append$S(p$8.getChronologyName$java_time_chrono_Chronology$java_util_Locale.apply(this, [chrono, context.getLocale$()]));
}return true;
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
if (position < 0 || position > text.length$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var chronos=$I$(7).getAvailableChronologies$();
var bestMatch=null;
var matchLen=-1;
for (var chrono, $chrono = chronos.iterator$(); $chrono.hasNext$()&&((chrono=($chrono.next$())),1);) {
var name;
if (this.textStyle == null ) {
name=chrono.getId$();
} else {
name=p$8.getChronologyName$java_time_chrono_Chronology$java_util_Locale.apply(this, [chrono, context.getLocale$()]);
}var nameLen=name.length$();
if (nameLen > matchLen && context.subSequenceEquals$CharSequence$I$CharSequence$I$I(text, position, name, 0, nameLen) ) {
bestMatch=chrono;
matchLen=nameLen;
}}
if (bestMatch == null ) {
return ~position;
}context.setParsed$java_time_chrono_Chronology(bestMatch);
return position + matchLen;
});

Clazz.newMeth(C$, 'getChronologyName$java_time_chrono_Chronology$java_util_Locale', function (chrono, locale) {
var key="calendarname." + chrono.getCalendarType$();
var name=$I$(35).getLocalizedResource$S$java_util_Locale(key, locale);
return name != null  ? name : chrono.getId$();
}, p$8);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "LocalizedPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dateStyle','java.time.format.FormatStyle','+timeStyle']]
,['O',['FORMATTER_CACHE','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, 'c$$java_time_format_FormatStyle$java_time_format_FormatStyle', function (dateStyle, timeStyle) {
;C$.$init$.apply(this);
this.dateStyle=dateStyle;
this.timeStyle=timeStyle;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
var chrono=$I$(7,"from$java_time_temporal_TemporalAccessor",[context.getTemporal$()]);
return p$9.formatter$java_util_Locale$java_time_chrono_Chronology.apply(this, [context.getLocale$(), chrono]).toPrinterParser$Z(false).format$java_time_format_DateTimePrintContext$StringBuilder(context, buf);
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
var chrono=context.getEffectiveChronology$();
return p$9.formatter$java_util_Locale$java_time_chrono_Chronology.apply(this, [context.getLocale$(), chrono]).toPrinterParser$Z(false).parse$java_time_format_DateTimeParseContext$CharSequence$I(context, text, position);
});

Clazz.newMeth(C$, 'formatter$java_util_Locale$java_time_chrono_Chronology', function (locale, chrono) {
var key=chrono.getId$() + '|' + locale.toString() + '|' + this.dateStyle + this.timeStyle ;
var formatter=C$.FORMATTER_CACHE.get$O(key);
if (formatter == null ) {
var pattern=$I$(17).getLocalizedDateTimePattern$java_time_format_FormatStyle$java_time_format_FormatStyle$java_time_chrono_Chronology$java_util_Locale(this.dateStyle, this.timeStyle, chrono, locale);
formatter=Clazz.new_($I$(17,1)).appendPattern$S(pattern).toFormatter$java_util_Locale(locale);
var old=C$.FORMATTER_CACHE.putIfAbsent$O$O(key, formatter);
if (old != null ) {
formatter=old;
}}return formatter;
}, p$9);

Clazz.newMeth(C$, 'toString', function () {
return "Localized(" + (this.dateStyle != null  ? this.dateStyle : "") + "," + (this.timeStyle != null  ? this.timeStyle : "") + ")" ;
});

C$.$static$=function(){C$.$static$=0;
C$.FORMATTER_CACHE=Clazz.new_($I$(19,1).c$$I$F$I,[16, 0.75, 2]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateTimeFormatterBuilder, "WeekBasedFieldPrinterParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.time.format.DateTimeFormatterBuilder','java.time.format.DateTimeFormatterBuilder.DateTimePrinterParser']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['chr'],'I',['count']]]

Clazz.newMeth(C$, 'c$$C$I', function (chr, count) {
;C$.$init$.apply(this);
this.chr=chr;
this.count=count;
}, 1);

Clazz.newMeth(C$, 'format$java_time_format_DateTimePrintContext$StringBuilder', function (context, buf) {
return p$10.printerParser$java_util_Locale.apply(this, [context.getLocale$()]).format$java_time_format_DateTimePrintContext$StringBuilder(context, buf);
});

Clazz.newMeth(C$, 'parse$java_time_format_DateTimeParseContext$CharSequence$I', function (context, text, position) {
return p$10.printerParser$java_util_Locale.apply(this, [context.getLocale$()]).parse$java_time_format_DateTimeParseContext$CharSequence$I(context, text, position);
});

Clazz.newMeth(C$, 'printerParser$java_util_Locale', function (locale) {
var weekDef=$I$(36).of$java_util_Locale(locale);
var field=null;
switch (this.chr.$c()) {
case 89:
field=weekDef.weekBasedYear$();
if (this.count == 2) {
return Clazz.new_([field, 2, 2, 0, $I$(37).BASE_DATE, 0],$I$(37,1).c$$java_time_temporal_TemporalField$I$I$I$java_time_chrono_ChronoLocalDate$I);
} else {
return Clazz.new_([field, this.count, 19, (this.count < 4) ? $I$(3).NORMAL : $I$(3).EXCEEDS_PAD, -1],$I$(6,1).c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle$I);
}case 101:
case 99:
field=weekDef.dayOfWeek$();
break;
case 119:
field=weekDef.weekOfWeekBasedYear$();
break;
case 87:
field=weekDef.weekOfMonth$();
break;
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["unreachable"]);
}
return Clazz.new_([field, (this.count == 2 ? 2 : 1), 2, $I$(3).NOT_NEGATIVE],$I$(6,1).c$$java_time_temporal_TemporalField$I$I$java_time_format_SignStyle);
}, p$10);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(2,1).c$$I,[30]);
sb.append$S("Localized(");
if (this.chr == "Y") {
if (this.count == 1) {
sb.append$S("WeekBasedYear");
} else if (this.count == 2) {
sb.append$S("ReducedValue(WeekBasedYear,2,2,2000-01-01)");
} else {
sb.append$S("WeekBasedYear,").append$I(this.count).append$S(",").append$I(19).append$S(",").append$O((this.count < 4) ? $I$(3).NORMAL : $I$(3).EXCEEDS_PAD);
}} else {
switch (this.chr.$c()) {
case 99:
case 101:
sb.append$S("DayOfWeek");
break;
case 119:
sb.append$S("WeekOfWeekBasedYear");
break;
case 87:
sb.append$S("WeekOfMonth");
break;
default:
break;
}
sb.append$S(",");
sb.append$I(this.count);
}sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
