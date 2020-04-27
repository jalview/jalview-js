(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodingErrorAction");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['IGNORE','java.nio.charset.CodingErrorAction','+REPLACE','+REPORT']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.IGNORE=Clazz.new_(C$.c$$S,["IGNORE"]);
C$.REPLACE=Clazz.new_(C$.c$$S,["REPLACE"]);
C$.REPORT=Clazz.new_(C$.c$$S,["REPORT"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
