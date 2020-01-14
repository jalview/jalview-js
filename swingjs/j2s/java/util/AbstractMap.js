(function(){var P$=java.util,I$=[[0,'java.util.AbstractSet','java.util.AbstractCollection','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.Map');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.keySet=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.entrySet$().size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
var i=this.entrySet$().iterator$();
if (value == null ) {
while (i.hasNext$()){
var e=i.next$();
if (e.getValue$() == null ) return true;
}
} else {
while (i.hasNext$()){
var e=i.next$();
if (value.equals$O(e.getValue$())) return true;
}
}return false;
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
var i=this.entrySet$().iterator$();
if (key == null ) {
while (i.hasNext$()){
var e=i.next$();
if (e.getKey$() == null ) return true;
}
} else {
while (i.hasNext$()){
var e=i.next$();
if (key.equals$O(e.getKey$())) return true;
}
}return false;
});

Clazz.newMeth(C$, 'get$O', function (key) {
var i=this.entrySet$().iterator$();
if (key == null ) {
while (i.hasNext$()){
var e=i.next$();
if (e.getKey$() == null ) return e.getValue$();
}
} else {
while (i.hasNext$()){
var e=i.next$();
if (key.equals$O(e.getKey$())) return e.getValue$();
}
}return null;
});

Clazz.newMeth(C$, ['put$TK$TV'], function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$O', function (key) {
var i=this.entrySet$().iterator$();
var correctEntry=null;
if (key == null ) {
while (correctEntry == null  && i.hasNext$() ){
var e=i.next$();
if (e.getKey$() == null ) correctEntry=e;
}
} else {
while (correctEntry == null  && i.hasNext$() ){
var e=i.next$();
if (key.equals$O(e.getKey$())) correctEntry=e;
}
}var oldValue=null;
if (correctEntry != null ) {
oldValue=correctEntry.getValue$();
i.remove$();
}return oldValue;
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.put$TK$TV(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'clear$', function () {
this.entrySet$().clear$();
});

Clazz.newMeth(C$, 'keySet$', function () {
if (this.keySet == null ) {
this.keySet=((P$.AbstractMap$1||
(function(){var C$=Clazz.newClass(P$, "AbstractMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.AbstractMap$1$1||
(function(){var C$=Clazz.newClass(P$, "AbstractMap$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['java.util.AbstractMap'].entrySet$.apply(this.b$['java.util.AbstractMap'], []).iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.i.next$().getKey$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.i.remove$();
});
})()
), Clazz.new_(P$.AbstractMap$1$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['java.util.AbstractMap'].size$.apply(this.b$['java.util.AbstractMap'], []);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['java.util.AbstractMap'].isEmpty$.apply(this.b$['java.util.AbstractMap'], []);
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.AbstractMap'].clear$.apply(this.b$['java.util.AbstractMap'], []);
});

Clazz.newMeth(C$, 'contains$O', function (k) {
return this.b$['java.util.AbstractMap'].containsKey$O.apply(this.b$['java.util.AbstractMap'], [k]);
});
})()
), Clazz.new_($I$(1), [this, null],P$.AbstractMap$1));
}return this.keySet;
});

Clazz.newMeth(C$, 'values$', function () {
if (this.values == null ) {
this.values=((P$.AbstractMap$2||
(function(){var C$=Clazz.newClass(P$, "AbstractMap$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractCollection'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.AbstractMap$2$1||
(function(){var C$=Clazz.newClass(P$, "AbstractMap$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.i=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['java.util.AbstractMap'].entrySet$.apply(this.b$['java.util.AbstractMap'], []).iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.i.next$().getValue$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.i.remove$();
});
})()
), Clazz.new_(P$.AbstractMap$2$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'size$', function () {
return this.b$['java.util.AbstractMap'].size$.apply(this.b$['java.util.AbstractMap'], []);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.b$['java.util.AbstractMap'].isEmpty$.apply(this.b$['java.util.AbstractMap'], []);
});

Clazz.newMeth(C$, 'clear$', function () {
this.b$['java.util.AbstractMap'].clear$.apply(this.b$['java.util.AbstractMap'], []);
});

Clazz.newMeth(C$, 'contains$O', function (v) {
return this.b$['java.util.AbstractMap'].containsValue$O.apply(this.b$['java.util.AbstractMap'], [v]);
});
})()
), Clazz.new_($I$(2), [this, null],P$.AbstractMap$2));
}return this.values;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Map"))) return false;
var m=o;
if (m.size$() != this.size$()) return false;
try {
var i=this.entrySet$().iterator$();
while (i.hasNext$()){
var e=i.next$();
var key=e.getKey$();
var value=e.getValue$();
if (value == null ) {
if (!(m.get$O(key) == null  && m.containsKey$O(key) )) return false;
} else {
if (!value.equals$O(m.get$O(key))) return false;
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var h=0;
var i=this.entrySet$().iterator$();
while (i.hasNext$())h+=i.next$().hashCode$();

return h;
});

Clazz.newMeth(C$, 'toString', function () {
var i=this.entrySet$().iterator$();
if (!i.hasNext$()) return "{}";
var sb=Clazz.new_($I$(3));
sb.append$C("{");
for (; ; ) {
var e=i.next$();
var key=e.getKey$();
var value=e.getValue$();
sb.append$O(key === this  ? "(this Map)" : key);
sb.append$C("=");
sb.append$O(value === this  ? "(this Map)" : value);
if (!i.hasNext$()) return sb.append$C("}").toString();
sb.append$C(",").append$C(" ");
}
});

Clazz.newMeth(C$, 'clone$', function () {
var result=Clazz.clone(this);
result.keySet=null;
result.values=null;
return result;
});

Clazz.newMeth(C$, 'eq$O$O', function (o1, o2) {
return o1 == null  ? o2 == null  : o1.equals$O(o2);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.AbstractMap, "SimpleEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry'], 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TK$TV'], function (key, value) {
C$.$init$.apply(this);
this.key=key;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map_Entry', function (entry) {
C$.$init$.apply(this);
this.key=entry.getKey$();
this.value=entry.getValue$();
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, ['setValue$TV'], function (value) {
var oldValue=this.value;
this.value=value;
return oldValue;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return P$.AbstractMap.eq$O$O(this.key, e.getKey$()) && P$.AbstractMap.eq$O$O(this.value, e.getValue$()) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.key == null  ? 0 : this.key.hashCode$()) ^ (this.value == null  ? 0 : this.value.hashCode$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.key + "=" + this.value ;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AbstractMap, "SimpleImmutableEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry'], 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TK$TV'], function (key, value) {
C$.$init$.apply(this);
this.key=key;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map_Entry', function (entry) {
C$.$init$.apply(this);
this.key=entry.getKey$();
this.value=entry.getValue$();
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, ['setValue$TV'], function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return P$.AbstractMap.eq$O$O(this.key, e.getKey$()) && P$.AbstractMap.eq$O$O(this.value, e.getValue$()) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.key == null  ? 0 : this.key.hashCode$()) ^ (this.value == null  ? 0 : this.value.hashCode$());
});

Clazz.newMeth(C$, 'toString', function () {
return this.key + "=" + this.value ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
