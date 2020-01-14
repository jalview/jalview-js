(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "AttributedCharacterIterator", function(){
}, null, 'java.text.CharacterIterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
;
(function(){var C$=Clazz.newClass(P$.AttributedCharacterIterator, "Attribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');
C$.instanceMap=null;
C$.LANGUAGE=null;
C$.READING=null;
C$.INPUT_METHOD_SEGMENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instanceMap=Clazz.new_($I$(1).c$$I,[7]);
C$.LANGUAGE=Clazz.new_(C$.c$$S,["language"]);
C$.READING=Clazz.new_(C$.c$$S,["reading"]);
C$.INPUT_METHOD_SEGMENT=Clazz.new_(C$.c$$S,["input_method_segment"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.instanceMap.put$TK$TV(name, this);
}}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "(" + this.name + ")" ;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'readResolve$', function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributedCharacterIterator, "Attribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');
C$.instanceMap=null;
C$.LANGUAGE=null;
C$.READING=null;
C$.INPUT_METHOD_SEGMENT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instanceMap=Clazz.new_($I$(1).c$$I,[7]);
C$.LANGUAGE=Clazz.new_(C$.c$$S,["language"]);
C$.READING=Clazz.new_(C$.c$$S,["reading"]);
C$.INPUT_METHOD_SEGMENT=Clazz.new_(C$.c$$S,["input_method_segment"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.instanceMap.put$TK$TV(name, this);
}}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "(" + this.name + ")" ;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'readResolve$', function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
