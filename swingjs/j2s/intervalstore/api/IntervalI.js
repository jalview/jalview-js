(function(){var P$=Clazz.newPackage("intervalstore.api"),I$=[[0,'java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "IntervalI");
C$.FORWARD_STRAND=null;
C$.REVERSE_STRAND=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FORWARD_STRAND=((P$.IntervalI$1||
(function(){var C$=Clazz.newClass(P$, "IntervalI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$','compare$TT$TT'], function (o1, o2) {
return Integer.compare$I$I(o1.getBegin$(), o2.getBegin$());
});
})()
), Clazz.new_(P$.IntervalI$1.$init$, [this, null]));
C$.REVERSE_STRAND=((P$.IntervalI$2||
(function(){var C$=Clazz.newClass(P$, "IntervalI$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$intervalstore_api_IntervalI$intervalstore_api_IntervalI','compare$','compare$TT$TT'], function (o1, o2) {
return Integer.compare$I$I(o2.getEnd$(), o1.getEnd$());
});
})()
), Clazz.new_(P$.IntervalI$2.$init$, [this, null]));
}

Clazz.newMeth(C$, 'sortIntervals$java_util_List$Z', function (intervals, forwardStrand) {
$I$(1).sort$java_util_List$java_util_Comparator(intervals, forwardStrand ? C$.FORWARD_STRAND : C$.REVERSE_STRAND);
}, 1);
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
};})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-13 17:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
