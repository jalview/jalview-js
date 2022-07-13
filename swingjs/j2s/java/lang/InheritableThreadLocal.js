(function(){var P$=java.lang,I$=[[0,['ThreadLocal','.ThreadLocalMap']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InheritableThreadLocal", null, 'ThreadLocal');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'childValue$O',  function (parentValue) {
return parentValue;
});

Clazz.newMeth(C$, 'getMap$Thread',  function (t) {
return t.inheritableThreadLocals;
});

Clazz.newMeth(C$, 'createMap$Thread$O',  function (t, firstValue) {
t.inheritableThreadLocals=Clazz.new_($I$(1,1).c$$ThreadLocal$O,[this, firstValue]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:58 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
