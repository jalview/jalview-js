(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newInterface(P$, "DocumentEvent", function(){
});
;
(function(){var C$=Clazz.newClass(P$.DocumentEvent, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.INSERT=null;
C$.REMOVE=null;
C$.CHANGE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.INSERT=Clazz.new_(C$.c$$S,["INSERT"]);
C$.REMOVE=Clazz.new_(C$.c$$S,["REMOVE"]);
C$.CHANGE=Clazz.new_(C$.c$$S,["CHANGE"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.typeString=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.typeString=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.typeString;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newInterface(P$.DocumentEvent, "ElementChange", function(){
});
})()
;
(function(){var C$=Clazz.newClass(P$.DocumentEvent, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.INSERT=null;
C$.REMOVE=null;
C$.CHANGE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.INSERT=Clazz.new_(C$.c$$S,["INSERT"]);
C$.REMOVE=Clazz.new_(C$.c$$S,["REMOVE"]);
C$.CHANGE=Clazz.new_(C$.c$$S,["CHANGE"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.typeString=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.typeString=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.typeString;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newInterface(P$.DocumentEvent, "ElementChange", function(){
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
