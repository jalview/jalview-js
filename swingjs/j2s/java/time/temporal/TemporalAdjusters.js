(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.util.Objects','java.time.LocalDate','java.time.temporal.ChronoField','java.time.temporal.ChronoUnit']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TemporalAdjusters");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'ofDateAdjuster$java_util_function_UnaryOperator', function (dateBasedAdjuster) {
$I$(1).requireNonNull$O$S(dateBasedAdjuster, "dateBasedAdjuster");
return ((P$.TemporalAdjusters$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var input=$I$(2).from$java_time_temporal_TemporalAccessor(temporal);
var output=this.$finals$.dateBasedAdjuster.apply$O(input);
return temporal.with$java_time_temporal_TemporalAdjuster(output);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda1.$init$,[this, {dateBasedAdjuster:dateBasedAdjuster}]));
}, 1);

Clazz.newMeth(C$, 'firstDayOfMonth$', function () {
return (P$.TemporalAdjusters$lambda2$||(P$.TemporalAdjusters$lambda2$=(((P$.TemporalAdjusters$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) { return (temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_MONTH, 1));});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda2.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'lastDayOfMonth$', function () {
return (P$.TemporalAdjusters$lambda3$||(P$.TemporalAdjusters$lambda3$=(((P$.TemporalAdjusters$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) { return (temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_MONTH, temporal.range$java_time_temporal_TemporalField($I$(3).DAY_OF_MONTH).getMaximum$()));});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda3.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'firstDayOfNextMonth$', function () {
return (P$.TemporalAdjusters$lambda4$||(P$.TemporalAdjusters$lambda4$=(((P$.TemporalAdjusters$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) { return (temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_MONTH, 1).plus$J$java_time_temporal_TemporalUnit(1, $I$(4).MONTHS));});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda4.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'firstDayOfYear$', function () {
return (P$.TemporalAdjusters$lambda5$||(P$.TemporalAdjusters$lambda5$=(((P$.TemporalAdjusters$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) { return (temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_YEAR, 1));});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda5.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'lastDayOfYear$', function () {
return (P$.TemporalAdjusters$lambda6$||(P$.TemporalAdjusters$lambda6$=(((P$.TemporalAdjusters$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) { return (temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_YEAR, temporal.range$java_time_temporal_TemporalField($I$(3).DAY_OF_YEAR).getMaximum$()));});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda6.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'firstDayOfNextYear$', function () {
return (P$.TemporalAdjusters$lambda7$||(P$.TemporalAdjusters$lambda7$=(((P$.TemporalAdjusters$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) { return (temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_YEAR, 1).plus$J$java_time_temporal_TemporalUnit(1, $I$(4).YEARS));});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda7.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'firstInMonth$java_time_DayOfWeek', function (dayOfWeek) {
return C$.dayOfWeekInMonth$I$java_time_DayOfWeek(1, dayOfWeek);
}, 1);

Clazz.newMeth(C$, 'lastInMonth$java_time_DayOfWeek', function (dayOfWeek) {
return C$.dayOfWeekInMonth$I$java_time_DayOfWeek(-1, dayOfWeek);
}, 1);

Clazz.newMeth(C$, 'dayOfWeekInMonth$I$java_time_DayOfWeek', function (ordinal, dayOfWeek) {
$I$(1).requireNonNull$O$S(dayOfWeek, "dayOfWeek");
var dowValue=dayOfWeek.getValue$();
if (ordinal >= 0) {
return ((P$.TemporalAdjusters$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var temp=temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_MONTH, 1);
var curDow=temp.get$java_time_temporal_TemporalField($I$(3).DAY_OF_WEEK);
var dowDiff=(this.$finals$.dowValue - curDow + 7) % 7;
dowDiff+=(this.$finals$.ordinal - 1) * 7;
return temp.plus$J$java_time_temporal_TemporalUnit(dowDiff, $I$(4).DAYS);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda8.$init$,[this, {ordinal:ordinal,dowValue:dowValue}]));
} else {
return ((P$.TemporalAdjusters$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var temp=temporal.with$java_time_temporal_TemporalField$J($I$(3).DAY_OF_MONTH, temporal.range$java_time_temporal_TemporalField($I$(3).DAY_OF_MONTH).getMaximum$());
var curDow=temp.get$java_time_temporal_TemporalField($I$(3).DAY_OF_WEEK);
var daysDiff=this.$finals$.dowValue - curDow;
daysDiff=(daysDiff == 0 ? 0 : (daysDiff > 0 ? daysDiff - 7 : daysDiff));
daysDiff-=(-this.$finals$.ordinal - 1) * 7;
return temp.plus$J$java_time_temporal_TemporalUnit(daysDiff, $I$(4).DAYS);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda9.$init$,[this, {ordinal:ordinal,dowValue:dowValue}]));
}}, 1);

Clazz.newMeth(C$, 'next$java_time_DayOfWeek', function (dayOfWeek) {
var dowValue=dayOfWeek.getValue$();
return ((P$.TemporalAdjusters$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var calDow=temporal.get$java_time_temporal_TemporalField($I$(3).DAY_OF_WEEK);
var daysDiff=calDow - this.$finals$.dowValue;
return temporal.plus$J$java_time_temporal_TemporalUnit(daysDiff >= 0 ? 7 - daysDiff : -daysDiff, $I$(4).DAYS);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda10.$init$,[this, {dowValue:dowValue}]));
}, 1);

Clazz.newMeth(C$, 'nextOrSame$java_time_DayOfWeek', function (dayOfWeek) {
var dowValue=dayOfWeek.getValue$();
return ((P$.TemporalAdjusters$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var calDow=temporal.get$java_time_temporal_TemporalField($I$(3).DAY_OF_WEEK);
if (calDow == this.$finals$.dowValue) {
return temporal;
}var daysDiff=calDow - this.$finals$.dowValue;
return temporal.plus$J$java_time_temporal_TemporalUnit(daysDiff >= 0 ? 7 - daysDiff : -daysDiff, $I$(4).DAYS);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda11.$init$,[this, {dowValue:dowValue}]));
}, 1);

Clazz.newMeth(C$, 'previous$java_time_DayOfWeek', function (dayOfWeek) {
var dowValue=dayOfWeek.getValue$();
return ((P$.TemporalAdjusters$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var calDow=temporal.get$java_time_temporal_TemporalField($I$(3).DAY_OF_WEEK);
var daysDiff=this.$finals$.dowValue - calDow;
return temporal.minus$J$java_time_temporal_TemporalUnit(daysDiff >= 0 ? 7 - daysDiff : -daysDiff, $I$(4).DAYS);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda12.$init$,[this, {dowValue:dowValue}]));
}, 1);

Clazz.newMeth(C$, 'previousOrSame$java_time_DayOfWeek', function (dayOfWeek) {
var dowValue=dayOfWeek.getValue$();
return ((P$.TemporalAdjusters$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalAdjusters$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalAdjuster', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['adjustInto$java_time_temporal_Temporal','adjustInto$O'], function (temporal) {
var calDow=temporal.get$java_time_temporal_TemporalField($I$(3).DAY_OF_WEEK);
if (calDow == this.$finals$.dowValue) {
return temporal;
}var daysDiff=this.$finals$.dowValue - calDow;
return temporal.minus$J$java_time_temporal_TemporalUnit(daysDiff >= 0 ? 7 - daysDiff : -daysDiff, $I$(4).DAYS);
});
})()
), Clazz.new_(P$.TemporalAdjusters$lambda13.$init$,[this, {dowValue:dowValue}]));
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
