(function(){var P$=Clazz.newPackage("java.nio.charset"),p$1={},I$=[[0,'java.util.HashMap','java.nio.charset.CoderResult',['java.nio.charset.CoderResult','.Cache']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CoderResult", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.names=null;
C$.UNDERFLOW=null;
C$.OVERFLOW=null;
C$.malformedCache=null;
C$.unmappableCache=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.names=Clazz.array(String, -1, ["UNDERFLOW", "OVERFLOW", "MALFORMED", "UNMAPPABLE"]);
C$.UNDERFLOW=Clazz.new_(C$.c$$I$I,[0, 0]);
C$.OVERFLOW=Clazz.new_(C$.c$$I$I,[1, 0]);
C$.malformedCache=((P$.CoderResult$1||
(function(){var C$=Clazz.newClass(P$, "CoderResult$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.nio.charset.CoderResult','.Cache']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'create$I', function (len) {
return Clazz.new_($I$(2).c$$I$I,[2, len]);
});
})()
), Clazz.new_($I$(3), [this, null],P$.CoderResult$1));
C$.unmappableCache=((P$.CoderResult$2||
(function(){var C$=Clazz.newClass(P$, "CoderResult$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.nio.charset.CoderResult','.Cache']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'create$I', function (len) {
return Clazz.new_($I$(2).c$$I$I,[3, len]);
});
})()
), Clazz.new_($I$(3), [this, null],P$.CoderResult$2));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=0;
this.length=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (type, length) {
C$.$init$.apply(this);
this.type=type;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var nm=C$.names[this.type];
return this.isError$() ? nm + "[" + this.length + "]"  : nm;
});

Clazz.newMeth(C$, 'isUnderflow$', function () {
return (this.type == 0);
});

Clazz.newMeth(C$, 'isOverflow$', function () {
return (this.type == 1);
});

Clazz.newMeth(C$, 'isError$', function () {
return (this.type >= 2);
});

Clazz.newMeth(C$, 'isMalformed$', function () {
return (this.type == 2);
});

Clazz.newMeth(C$, 'isUnmappable$', function () {
return (this.type == 3);
});

Clazz.newMeth(C$, 'length$', function () {
if (!this.isError$()) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
return this.length;
});

Clazz.newMeth(C$, 'malformedForLength$I', function (length) {
return p$1.get$I.apply(C$.malformedCache, [length]);
}, 1);

Clazz.newMeth(C$, 'unmappableForLength$I', function (length) {
return p$1.get$I.apply(C$.unmappableCache, [length]);
}, 1);

Clazz.newMeth(C$, 'throwException$', function () {
switch (this.type) {
case 0:
throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
case 1:
throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
case 2:
throw Clazz.new_(Clazz.load('java.nio.charset.MalformedInputException').c$$I,[this.length]);
case 3:
throw Clazz.new_(Clazz.load('java.nio.charset.UnmappableCharacterException').c$$I,[this.length]);
default:
Clazz.assert(C$, this, function(){return false});
}
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.CoderResult, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cache=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.cache=null;
}, 1);

Clazz.newMeth(C$, 'get$I', function (len) {
if (len <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive length"]);
var k= new Integer(len);
var w;
var e=null;
if (this.cache == null ) {
this.cache=Clazz.new_($I$(1));
} else if ((w=this.cache.get$O(k)) != null ) {
e=w;
}if (e == null ) {
e=this.create$I(len);
this.cache.put$TK$TV(k, (e));
}return e;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
