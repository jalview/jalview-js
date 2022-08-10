(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CaseInsensitiveString");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.value=s;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.value;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o == null ) {
return false;
}if (!(Clazz.instanceOf(o, "jalview.util.CaseInsensitiveString"))) {
return false;
}var obj=o;
if (this.value == null ) {
return obj.value == null ;
}return this.value.equalsIgnoreCase$S(obj.value);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.value == null  ? C$.superclazz.prototype.hashCode$.apply(this, []) : this.value.toUpperCase$java_util_Locale($I$(1).ROOT).hashCode$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
