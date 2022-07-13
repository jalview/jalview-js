(function(){var P$=Clazz.newPackage("java.time.temporal"),p$1={},I$=[[0,'StringBuilder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ValueRange", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['minSmallest','minLargest','maxSmallest','maxLargest']]]

Clazz.newMeth(C$, 'of$J$J', function (min, max) {
if (min > max) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Minimum value must be less than maximum value"]);
}return Clazz.new_(C$.c$$J$J$J$J,[min, min, max, max]);
}, 1);

Clazz.newMeth(C$, 'of$J$J$J', function (min, maxSmallest, maxLargest) {
return C$.of$J$J$J$J(min, min, maxSmallest, maxLargest);
}, 1);

Clazz.newMeth(C$, 'of$J$J$J$J', function (minSmallest, minLargest, maxSmallest, maxLargest) {
if (minSmallest > minLargest) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Smallest minimum value must be less than largest minimum value"]);
}if (maxSmallest > maxLargest) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Smallest maximum value must be less than largest maximum value"]);
}if (minLargest > maxLargest) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Minimum value must be less than maximum value"]);
}return Clazz.new_(C$.c$$J$J$J$J,[minSmallest, minLargest, maxSmallest, maxLargest]);
}, 1);

Clazz.newMeth(C$, 'c$$J$J$J$J', function (minSmallest, minLargest, maxSmallest, maxLargest) {
;C$.$init$.apply(this);
this.minSmallest=minSmallest;
this.minLargest=minLargest;
this.maxSmallest=maxSmallest;
this.maxLargest=maxLargest;
}, 1);

Clazz.newMeth(C$, 'isFixed$', function () {
return this.minSmallest == this.minLargest && this.maxSmallest == this.maxLargest ;
});

Clazz.newMeth(C$, 'getMinimum$', function () {
return this.minSmallest;
});

Clazz.newMeth(C$, 'getLargestMinimum$', function () {
return this.minLargest;
});

Clazz.newMeth(C$, 'getSmallestMaximum$', function () {
return this.maxSmallest;
});

Clazz.newMeth(C$, 'getMaximum$', function () {
return this.maxLargest;
});

Clazz.newMeth(C$, 'isIntValue$', function () {
return this.getMinimum$() >= -2147483648 && this.getMaximum$() <= 2147483647 ;
});

Clazz.newMeth(C$, 'isValidValue$J', function (value) {
return (value >= this.getMinimum$() && value <= this.getMaximum$() );
});

Clazz.newMeth(C$, 'isValidIntValue$J', function (value) {
return this.isIntValue$() && this.isValidValue$J(value) ;
});

Clazz.newMeth(C$, 'checkValidValue$J$java_time_temporal_TemporalField', function (value, field) {
if (this.isValidValue$J(value) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,[p$1.genInvalidFieldMessage$java_time_temporal_TemporalField$J.apply(this, [field, value])]);
}return value;
});

Clazz.newMeth(C$, 'checkValidIntValue$J$java_time_temporal_TemporalField', function (value, field) {
if (this.isValidIntValue$J(value) == false ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,[p$1.genInvalidFieldMessage$java_time_temporal_TemporalField$J.apply(this, [field, value])]);
}return (value|0);
});

Clazz.newMeth(C$, 'genInvalidFieldMessage$java_time_temporal_TemporalField$J', function (field, value) {
if (field != null ) {
return "Invalid value for " + field + " (valid values " + this + "): " + value ;
} else {
return "Invalid value (valid values " + this + "): " + value ;
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
if (this.minSmallest > this.minLargest) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Smallest minimum value must be less than largest minimum value"]);
}if (this.maxSmallest > this.maxLargest) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Smallest maximum value must be less than largest maximum value"]);
}if (this.minLargest > this.maxLargest) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Minimum value must be less than maximum value"]);
}}, p$1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.time.temporal.ValueRange")) {
var other=obj;
return this.minSmallest == other.minSmallest && this.minLargest == other.minLargest  && this.maxSmallest == other.maxSmallest  && this.maxLargest == other.maxLargest ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hash=this.minSmallest + this.minLargest << 16 + this.minLargest >> 48 + this.maxSmallest << 32 + this.maxSmallest >> 32 + this.maxLargest << 48 + this.maxLargest >> 16;
return ((hash ^ (hash >>> 32))|0);
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(1,1));
buf.append$J(this.minSmallest);
if (this.minSmallest != this.minLargest) {
buf.append$C("/").append$J(this.minLargest);
}buf.append$S(" - ").append$J(this.maxSmallest);
if (this.maxSmallest != this.maxLargest) {
buf.append$C("/").append$J(this.maxLargest);
}return buf.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
