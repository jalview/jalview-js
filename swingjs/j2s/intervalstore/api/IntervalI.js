(function(){var P$=Clazz.newPackage("intervalstore.api"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "IntervalI");

C$.$fields$=[[]
,['O',['COMPARE_BEGIN_ASC_END_DESC','java.util.Comparator','+COMPARE_BEGIN_ASC_END_ASC','+COMPARE_BEGIN_ASC','+COMPARE_END_DESC']]]
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'containsInterval$intervalstore_api_IntervalI', function (i) {
return i != null  && i.getBegin$() >= this.getBegin$()  && i.getEnd$() <= this.getEnd$() ;
});

Clazz.newMeth(C$, 'properlyContainsInterval$intervalstore_api_IntervalI', function (i) {
return this.containsInterval$intervalstore_api_IntervalI(i) && (i.getBegin$() > this.getBegin$() || i.getEnd$() < this.getEnd$() ) ;
});

Clazz.newMeth(C$, 'equalsInterval$intervalstore_api_IntervalI', function (i) {
return i != null  && i.getBegin$() == this.getBegin$()  && i.getEnd$() == this.getEnd$() ;
});

Clazz.newMeth(C$, 'overlapsInterval$intervalstore_api_IntervalI', function (i) {
if (i == null ) {
return false;
}if (i.getBegin$() < this.getBegin$()) {
return i.getEnd$() >= this.getBegin$();
}if (i.getEnd$() > this.getEnd$()) {
return i.getBegin$() <= this.getEnd$();
}return true;
});
};
C$.$static$=function(){C$.$static$=0;
C$.COMPARE_BEGIN_ASC_END_DESC=((P$.IntervalI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntervalI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$O$O'], function (o1, o2) {
var ret=Integer.signum$I(o1.getBegin$() - o2.getBegin$());
return (ret == 0 ? Integer.signum$I(o2.getEnd$() - o1.getEnd$()) : ret);
});
})()
), Clazz.new_(P$.IntervalI$1.$init$,[this, null]));
C$.COMPARE_BEGIN_ASC_END_ASC=((P$.IntervalI$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntervalI$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$O$O'], function (o1, o2) {
var ret=Integer.signum$I(o1.getBegin$() - o2.getBegin$());
return (ret == 0 ? Integer.signum$I(o1.getEnd$() - o2.getEnd$()) : ret);
});
})()
), Clazz.new_(P$.IntervalI$2.$init$,[this, null]));
C$.COMPARE_BEGIN_ASC=((P$.IntervalI$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntervalI$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$O$O'], function (o1, o2) {
return Integer.signum$I(o1.getBegin$() - o2.getBegin$());
});
})()
), Clazz.new_(P$.IntervalI$3.$init$,[this, null]));
C$.COMPARE_END_DESC=((P$.IntervalI$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntervalI$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$O$O'], function (o1, o2) {
return Integer.signum$I(o2.getEnd$() - o1.getEnd$());
});
})()
), Clazz.new_(P$.IntervalI$4.$init$,[this, null]));
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
