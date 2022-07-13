(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Position", function(){
});
C$.$classes$=[['Bias',25]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.Position, "Bias", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['Forward','javax.swing.text.Position.Bias','+Backward']]]

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.Forward=Clazz.new_(C$.c$$S,["Forward"]);
C$.Backward=Clazz.new_(C$.c$$S,["Backward"]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:48 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
