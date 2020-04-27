(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'InternalError','sun.util.locale.provider.LocaleServiceProviderPool','java.util.spi.CalendarDataProvider',['sun.util.locale.provider.CalendarDataUtility','.CalendarWeekParameterGetter'],'java.util.spi.CalendarNameProvider',['sun.util.locale.provider.CalendarDataUtility','.CalendarFieldValueNameGetter'],['sun.util.locale.provider.CalendarDataUtility','.CalendarFieldValueNamesMapGetter']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalendarDataUtility", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CalendarFieldValueNameGetter',10],['CalendarFieldValueNamesMapGetter',10],['CalendarWeekParameterGetter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'retrieveFirstDayOfWeek$java_util_Locale', function (locale) {
var pool=$I$(2,"getPool$Class",[Clazz.getClass($I$(3))]);
var value=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(4).INSTANCE, locale, "firstDayOfWeek", []);
return (value != null  && ((value).valueOf() >= 1  && (value).valueOf() <= 7  ) ) ? (value).valueOf() : 1;
}, 1);

Clazz.newMeth(C$, 'retrieveMinimalDaysInFirstWeek$java_util_Locale', function (locale) {
var pool=$I$(2,"getPool$Class",[Clazz.getClass($I$(3))]);
var value=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(4).INSTANCE, locale, "minimalDaysInFirstWeek", []);
return (value != null  && ((value).valueOf() >= 1  && (value).valueOf() <= 7  ) ) ? (value).valueOf() : 1;
}, 1);

Clazz.newMeth(C$, 'retrieveFieldValueName$S$I$I$I$java_util_Locale', function (id, field, value, style, locale) {
var pool=$I$(2,"getPool$Class",[Clazz.getClass($I$(5))]);
return pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(6).INSTANCE, locale, C$.normalizeCalendarType$S(id), [new Integer(field), new Integer(value), new Integer(style), new Boolean(false)]);
}, 1);

Clazz.newMeth(C$, 'retrieveJavaTimeFieldValueName$S$I$I$I$java_util_Locale', function (id, field, value, style, locale) {
var pool=$I$(2,"getPool$Class",[Clazz.getClass($I$(5))]);
var name;
name=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(6).INSTANCE, locale, C$.normalizeCalendarType$S(id), [new Integer(field), new Integer(value), new Integer(style), new Boolean(true)]);
if (name == null ) {
name=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(6).INSTANCE, locale, C$.normalizeCalendarType$S(id), [new Integer(field), new Integer(value), new Integer(style), new Boolean(false)]);
}return name;
}, 1);

Clazz.newMeth(C$, 'retrieveFieldValueNames$S$I$I$java_util_Locale', function (id, field, style, locale) {
var pool=$I$(2,"getPool$Class",[Clazz.getClass($I$(5))]);
return pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(7).INSTANCE, locale, C$.normalizeCalendarType$S(id), [new Integer(field), new Integer(style), new Boolean(false)]);
}, 1);

Clazz.newMeth(C$, 'retrieveJavaTimeFieldValueNames$S$I$I$java_util_Locale', function (id, field, style, locale) {
var pool=$I$(2,"getPool$Class",[Clazz.getClass($I$(5))]);
var map;
map=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(7).INSTANCE, locale, C$.normalizeCalendarType$S(id), [new Integer(field), new Integer(style), new Boolean(true)]);
if (map == null ) {
map=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(7).INSTANCE, locale, C$.normalizeCalendarType$S(id), [new Integer(field), new Integer(style), new Boolean(false)]);
}return map;
}, 1);

Clazz.newMeth(C$, 'normalizeCalendarType$S', function (requestID) {
var type;
if (requestID.equals$O("gregorian") || requestID.equals$O("iso8601") ) {
type="gregory";
} else if (requestID.startsWith$S("islamic")) {
type="islamic";
} else {
type=requestID;
}return type;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalendarDataUtility, "CalendarFieldValueNameGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.locale.provider.CalendarDataUtility.CalendarFieldValueNameGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_CalendarNameProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'], function (calendarNameProvider, locale, requestID, params) {
Clazz.assert(C$, this, function(){return params.length == 4});
var field=((params[0]).valueOf()|0);
var value=((params[1]).valueOf()|0);
var style=((params[2]).valueOf()|0);
var javatime=(params[3]).valueOf();
if (javatime && Clazz.instanceOf(calendarNameProvider, "sun.util.locale.provider.CalendarNameProviderImpl") ) {
var name;
name=(calendarNameProvider).getJavaTimeDisplayName$S$I$I$I$java_util_Locale(requestID, field, value, style, locale);
return name;
}return calendarNameProvider.getDisplayName$S$I$I$I$java_util_Locale(requestID, field, value, style, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalendarDataUtility, "CalendarFieldValueNamesMapGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.locale.provider.CalendarDataUtility.CalendarFieldValueNamesMapGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_CalendarNameProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'], function (calendarNameProvider, locale, requestID, params) {
Clazz.assert(C$, this, function(){return params.length == 3});
var field=((params[0]).valueOf()|0);
var style=((params[1]).valueOf()|0);
var javatime=(params[2]).valueOf();
if (javatime && Clazz.instanceOf(calendarNameProvider, "sun.util.locale.provider.CalendarNameProviderImpl") ) {
var map;
map=(calendarNameProvider).getJavaTimeDisplayNames$S$I$I$java_util_Locale(requestID, field, style, locale);
return map;
}return calendarNameProvider.getDisplayNames$S$I$I$java_util_Locale(requestID, field, style, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalendarDataUtility, "CalendarWeekParameterGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.locale.provider.CalendarDataUtility.CalendarWeekParameterGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_CalendarDataProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'], function (calendarDataProvider, locale, requestID, params) {
Clazz.assert(C$, this, function(){return params.length == 0});
var value;
switch (requestID) {
case "firstDayOfWeek":
value=calendarDataProvider.getFirstDayOfWeek$java_util_Locale(locale);
break;
case "minimalDaysInFirstWeek":
value=calendarDataProvider.getMinimalDaysInFirstWeek$java_util_Locale(locale);
break;
default:
throw Clazz.new_($I$(1,1).c$$S,["invalid requestID: " + requestID]);
}
return (value != 0) ? new Integer(value) : null;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
