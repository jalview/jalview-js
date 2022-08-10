(function(){var P$=Clazz.newPackage("jalview.bin"),I$=[[0,'java.util.Vector','java.net.URLDecoder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArgsParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vargs=null;
},1);

C$.$fields$=[['O',['vargs','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$SA',  function (args) {
;C$.$init$.apply(this);
this.vargs=Clazz.new_($I$(1,1));
for (var i=0; i < args.length; i++) {
var arg=args[i].trim$();
if (arg.charAt$I(0) == "-") {
arg=arg.substring$I(1);
}this.vargs.addElement$O(arg);
}
}, 1);

Clazz.newMeth(C$, 'getValue$S',  function (arg) {
return this.getValue$S$Z(arg, false);
});

Clazz.newMeth(C$, 'getValue$S$Z',  function (arg, utf8decode) {
var index=this.vargs.indexOf$O(arg);
var dc=null;
var ret=null;
if (index != -1) {
ret=this.vargs.elementAt$I(index + 1).toString();
this.vargs.removeElementAt$I(index);
this.vargs.removeElementAt$I(index);
if (utf8decode && ret != null  ) {
try {
dc=$I$(2).decode$S$S(ret, "UTF-8");
ret=dc;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}return ret;
});

Clazz.newMeth(C$, 'contains$S',  function (arg) {
if (this.vargs.contains$O(arg)) {
this.vargs.removeElement$O(arg);
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'nextValue$',  function () {
return this.vargs.remove$I(0);
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.vargs.size$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:29 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
