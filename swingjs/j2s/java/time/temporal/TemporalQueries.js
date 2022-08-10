(function(){var P$=Clazz.newPackage("java.time.temporal"),I$=[[0,'java.time.temporal.TemporalQueries','java.time.temporal.ChronoField']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TemporalQueries");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ZONE_ID','java.time.temporal.TemporalQuery','+CHRONO','+PRECISION','+OFFSET','+ZONE','+LOCAL_DATE','+LOCAL_TIME']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'zoneId$', function () {
return C$.ZONE_ID;
}, 1);

Clazz.newMeth(C$, 'chronology$', function () {
return C$.CHRONO;
}, 1);

Clazz.newMeth(C$, 'precision$', function () {
return C$.PRECISION;
}, 1);

Clazz.newMeth(C$, 'zone$', function () {
return C$.ZONE;
}, 1);

Clazz.newMeth(C$, 'offset$', function () {
return C$.OFFSET;
}, 1);

Clazz.newMeth(C$, 'localDate$', function () {
return C$.LOCAL_DATE;
}, 1);

Clazz.newMeth(C$, 'localTime$', function () {
return C$.LOCAL_TIME;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ZONE_ID=(P$.TemporalQueries$lambda1$||(P$.TemporalQueries$lambda1$=(((P$.TemporalQueries$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) { return (temporal.query$java_time_temporal_TemporalQuery($I$(1).ZONE_ID));});
})()
), Clazz.new_(P$.TemporalQueries$lambda1.$init$,[this, null])))));
C$.CHRONO=(P$.TemporalQueries$lambda2$||(P$.TemporalQueries$lambda2$=(((P$.TemporalQueries$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) { return (temporal.query$java_time_temporal_TemporalQuery($I$(1).CHRONO));});
})()
), Clazz.new_(P$.TemporalQueries$lambda2.$init$,[this, null])))));
C$.PRECISION=(P$.TemporalQueries$lambda3$||(P$.TemporalQueries$lambda3$=(((P$.TemporalQueries$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) { return (temporal.query$java_time_temporal_TemporalQuery($I$(1).PRECISION));});
})()
), Clazz.new_(P$.TemporalQueries$lambda3.$init$,[this, null])))));
C$.OFFSET=(P$.TemporalQueries$lambda4$||(P$.TemporalQueries$lambda4$=(((P$.TemporalQueries$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) {
if (temporal.isSupported$java_time_temporal_TemporalField($I$(2).OFFSET_SECONDS)) {
return null;
}return null;
});
})()
), Clazz.new_(P$.TemporalQueries$lambda4.$init$,[this, null])))));
C$.ZONE=(P$.TemporalQueries$lambda5$||(P$.TemporalQueries$lambda5$=(((P$.TemporalQueries$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) {
var zone=temporal.query$java_time_temporal_TemporalQuery($I$(1).ZONE_ID);
return null;
});
})()
), Clazz.new_(P$.TemporalQueries$lambda5.$init$,[this, null])))));
C$.LOCAL_DATE=(P$.TemporalQueries$lambda6$||(P$.TemporalQueries$lambda6$=(((P$.TemporalQueries$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) {
if (temporal.isSupported$java_time_temporal_TemporalField($I$(2).EPOCH_DAY)) {
return null;
}return null;
});
})()
), Clazz.new_(P$.TemporalQueries$lambda6.$init$,[this, null])))));
C$.LOCAL_TIME=(P$.TemporalQueries$lambda7$||(P$.TemporalQueries$lambda7$=(((P$.TemporalQueries$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "TemporalQueries$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'], function (temporal) {
if (temporal.isSupported$java_time_temporal_TemporalField($I$(2).NANO_OF_DAY)) {
return null;
}return null;
});
})()
), Clazz.new_(P$.TemporalQueries$lambda7.$init$,[this, null])))));
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:57 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
