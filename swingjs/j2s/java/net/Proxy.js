(function(){var P$=Clazz.newPackage("java.net"),I$=[[0,['java.net.Proxy','.Type']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Proxy", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.NO_PROXY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NO_PROXY=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.sa=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.type=$I$(1).DIRECT;
this.sa=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_net_Proxy_Type$java_net_SocketAddress', function (type, sa) {
C$.$init$.apply(this);
if ((type === $I$(1).DIRECT ) || !(Clazz.instanceOf(sa, "java.net.InetSocketAddress")) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type " + type + " is not compatible with address " + sa ]);
this.type=type;
this.sa=sa;
}, 1);

Clazz.newMeth(C$, 'type$', function () {
return this.type;
});

Clazz.newMeth(C$, 'address$', function () {
return this.sa;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.type$() === $I$(1).DIRECT ) return "DIRECT";
return this.type$() + " @ " + this.address$() ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "java.net.Proxy")) ) return false;
var p=obj;
if (p.type$() === this.type$() ) {
if (this.address$() == null ) {
return (p.address$() == null );
} else return this.address$().equals$O(p.address$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.address$() == null ) return this.type$().hashCode$();
return this.type$().hashCode$() + this.address$().hashCode$();
});
;
(function(){var C$=Clazz.newClass(P$.Proxy, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DIRECT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "HTTP", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SOCKS", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
