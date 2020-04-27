(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,['javax.json.JsonValue','.ValueType']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonStringImpl", null, null, 'javax.json.JsonString');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value']]]

Clazz.newMeth(C$, 'c$$S', function (value) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getString$', function () {
return this.value;
});

Clazz.newMeth(C$, 'getChars$', function () {
return this.value;
});

Clazz.newMeth(C$, 'getValueType$', function () {
return $I$(1).STRING;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getString$().hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "javax.json.JsonString"))) {
return false;
}var other=obj;
return this.getString$().equals$O(other.getString$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
