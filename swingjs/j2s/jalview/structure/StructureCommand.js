(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[[0,'java.util.ArrayList','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureCommand", null, null, 'jalview.structure.StructureCommandI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['command'],'O',['parameters','java.util.List']]]

Clazz.newMeth(C$, 'c$$S$SA',  function (cmd, params) {
;C$.$init$.apply(this);
this.command=cmd;
if (params != null ) {
for (var p, $p = 0, $$p = params; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
this.addParameter$S(p);
}
}}, 1);

Clazz.newMeth(C$, 'addParameter$S',  function (param) {
if (this.parameters == null ) {
this.parameters=Clazz.new_($I$(1,1));
}this.parameters.add$O(param);
});

Clazz.newMeth(C$, 'getCommand$',  function () {
return this.command;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return this.parameters;
});

Clazz.newMeth(C$, 'hasParameters$',  function () {
return this.parameters != null  && !this.parameters.isEmpty$() ;
});

Clazz.newMeth(C$, 'toString',  function () {
if (!this.hasParameters$()) {
return this.command;
}var sb=Clazz.new_($I$(2,1).c$$I,[32]);
sb.append$S(this.command).append$S("(");
var first=true;
for (var p, $p = this.parameters.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (!first) {
sb.append$S(",");
}first=false;
sb.append$S(p);
}
sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=this.command.hashCode$();
if (this.parameters != null ) {
for (var p, $p = this.parameters.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
h=h * 37 + p.hashCode$();
}
}return h;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "jalview.structure.StructureCommand")) ) {
return false;
}var sc=obj;
if (!this.command.equals$O(sc.command)) {
return false;
}if (this.parameters == null  || sc.parameters == null  ) {
return (this.parameters == null ) && (sc.parameters == null ) ;
}var j=this.parameters.size$();
if (j != sc.parameters.size$()) {
return false;
}for (var i=0; i < j; i++) {
if (!this.parameters.get$I(i).equals$O(sc.parameters.get$I(i))) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
