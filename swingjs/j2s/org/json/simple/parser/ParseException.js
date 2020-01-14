(function(){var P$=Clazz.newPackage("org.json.simple.parser"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ParseException", null, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.errorType=0;
this.unexpectedObject=null;
this.position=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (errorType) {
C$.c$$I$I$O.apply(this, [-1, errorType, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$O', function (errorType, unexpectedObject) {
C$.c$$I$I$O.apply(this, [-1, errorType, unexpectedObject]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$O', function (position, errorType, unexpectedObject) {
Clazz.super_(C$, this,1);
this.position=position;
this.errorType=errorType;
this.unexpectedObject=unexpectedObject;
}, 1);

Clazz.newMeth(C$, 'getErrorType$', function () {
return this.errorType;
});

Clazz.newMeth(C$, 'setErrorType$I', function (errorType) {
this.errorType=errorType;
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$I', function (position) {
this.position=position;
});

Clazz.newMeth(C$, 'getUnexpectedObject$', function () {
return this.unexpectedObject;
});

Clazz.newMeth(C$, 'setUnexpectedObject$O', function (unexpectedObject) {
this.unexpectedObject=unexpectedObject;
});

Clazz.newMeth(C$, 'getMessage$', function () {
var sb=Clazz.new_($I$(1));
switch (this.errorType) {
case 0:
sb.append$S("Unexpected character (").append$O(this.unexpectedObject).append$S(") at position ").append$I(this.position).append$S(".");
break;
case 1:
sb.append$S("Unexpected token ").append$O(this.unexpectedObject).append$S(" at position ").append$I(this.position).append$S(".");
break;
case 2:
sb.append$S("Unexpected exception at position ").append$I(this.position).append$S(": ").append$O(this.unexpectedObject);
break;
default:
sb.append$S("Unkown error at position ").append$I(this.position).append$S(".");
break;
}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
