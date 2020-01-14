(function(){var P$=Clazz.newPackage("javax.xml.datatype"),I$=[[0,['javax.xml.datatype.DatatypeConstants','.Field'],'javax.xml.namespace.QName']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DatatypeConstants", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.YEARS=null;
C$.MONTHS=null;
C$.DAYS=null;
C$.HOURS=null;
C$.MINUTES=null;
C$.SECONDS=null;
C$.DATETIME=null;
C$.TIME=null;
C$.DATE=null;
C$.GYEARMONTH=null;
C$.GMONTHDAY=null;
C$.GYEAR=null;
C$.GMONTH=null;
C$.GDAY=null;
C$.DURATION=null;
C$.DURATION_DAYTIME=null;
C$.DURATION_YEARMONTH=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.YEARS=Clazz.new_($I$(1).c$$S$I,["YEARS", 0]);
C$.MONTHS=Clazz.new_($I$(1).c$$S$I,["MONTHS", 1]);
C$.DAYS=Clazz.new_($I$(1).c$$S$I,["DAYS", 2]);
C$.HOURS=Clazz.new_($I$(1).c$$S$I,["HOURS", 3]);
C$.MINUTES=Clazz.new_($I$(1).c$$S$I,["MINUTES", 4]);
C$.SECONDS=Clazz.new_($I$(1).c$$S$I,["SECONDS", 5]);
C$.DATETIME=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "dateTime"]);
C$.TIME=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "time"]);
C$.DATE=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "date"]);
C$.GYEARMONTH=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gYearMonth"]);
C$.GMONTHDAY=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gMonthDay"]);
C$.GYEAR=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gYear"]);
C$.GMONTH=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gMonth"]);
C$.GDAY=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gDay"]);
C$.DURATION=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2001/XMLSchema", "duration"]);
C$.DURATION_DAYTIME=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2003/11/xpath-datatypes", "dayTimeDuration"]);
C$.DURATION_YEARMONTH=Clazz.new_($I$(2).c$$S$S,["http://www.w3.org/2003/11/xpath-datatypes", "yearMonthDuration"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.DatatypeConstants, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.str=null;
this.id=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (str, id) {
C$.$init$.apply(this);
this.str=str;
this.id=id;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.str;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:29 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
