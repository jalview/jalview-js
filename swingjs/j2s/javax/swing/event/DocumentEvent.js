(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "DocumentEvent", function(){
});
C$.$classes$=[['EventType',25],['ElementChange',9]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.DocumentEvent, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['typeString']]
,['O',['INSERT','javax.swing.event.DocumentEvent.EventType','+REMOVE','+CHANGE']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
this.typeString=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.typeString;
});

C$.$static$=function(){C$.$static$=0;
C$.INSERT=Clazz.new_(C$.c$$S,["INSERT"]);
C$.REMOVE=Clazz.new_(C$.c$$S,["REMOVE"]);
C$.CHANGE=Clazz.new_(C$.c$$S,["CHANGE"]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DocumentEvent, "ElementChange", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DocumentEvent, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['typeString']]
,['O',['INSERT','javax.swing.event.DocumentEvent.EventType','+REMOVE','+CHANGE']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
this.typeString=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.typeString;
});

C$.$static$=function(){C$.$static$=0;
C$.INSERT=Clazz.new_(C$.c$$S,["INSERT"]);
C$.REMOVE=Clazz.new_(C$.c$$S,["REMOVE"]);
C$.CHANGE=Clazz.new_(C$.c$$S,["CHANGE"]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DocumentEvent, "ElementChange", function(){
});
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
