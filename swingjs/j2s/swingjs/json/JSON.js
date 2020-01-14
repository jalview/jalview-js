(function(){var P$=Clazz.newPackage("swingjs.json"),p$1={},I$=[[0,'swingjs.JSUtil','swingjs.json.JSON','java.util.Hashtable',['swingjs.json.JSON','.JSONList','.ListIterator'],['swingjs.json.JSON','.JSONMap'],'Boolean',['swingjs.json.JSON','.JSONReader'],['swingjs.json.JSON','.JSONList']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSON", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.o=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.o=Clazz.getClass($I$(5));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setAjax$OA', function (keyValues) {
var ajax=null;

ajax = {}; if (keyValues[0] == "url" && typeof keyValues[1] == "object") { ajax = keyValues[1].ajax || (keyValues[1].ajax = ajax); } for (var i = 0; i < keyValues.length;) { var key = keyValues[i++];
var val = keyValues[i++]; ajax[key] = val; }
return ajax;
}, 1);

Clazz.newMeth(C$, 'setAjax$java_net_URL', function (url) {
return C$.setAjax$OA(["url", url, "dataType", "json", "async", $I$(6).FALSE]);
}, 1);

Clazz.newMeth(C$, 'getJSONReader$java_io_InputStream', function (is) {
return Clazz.new_($I$(7).c$$java_io_InputStream,[is]);
}, 1);

Clazz.newMeth(C$, 'parse$O', function (o) {
if (Clazz.instanceOf(o, "java.lang.String")) return C$.parse$S(o);
if (Clazz.instanceOf(o, "java.io.InputStream")) return C$.parse$java_io_InputStream(o);
if (Clazz.instanceOf(o, "java.io.Reader")) return C$.parse$java_io_Reader(o);
if (Clazz.instanceOf(o, "java.net.URL")) {
return C$.parse$java_net_URL(o);
}return Clazz.new_($I$(7).c$$O,[o]).data;
}, 1);

Clazz.newMeth(C$, 'parse$java_io_InputStream', function (json) {
return Clazz.new_($I$(7).c$$java_io_InputStream,[json]).data;
}, 1);

Clazz.newMeth(C$, 'parse$S', function (json) {
return Clazz.new_($I$(7).c$$S,[json]).data;
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader', function (br) {
if (Clazz.instanceOf(br, "swingjs.json.JSON.JSONReader")) return (br).data;
var is=br.$in ||null;
return C$.parse$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'parse$java_net_URL', function (url) {
$I$(1).setAjax$java_net_URL(url);
try {
return Clazz.new_($I$(7).c$$O,[$I$(1).parseJSON$O(url.getContent$())]).data;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'toObject$O', function (o) {
if (o == null ) return null;
var type=
(typeof o) +
"";
switch (type) {
case "string":
return o;
case "number":
var n=0;
if ((n = o) == (n|0) ||false) return Long.valueOf$J((n|0));
return Double.valueOf$D(n);
case "boolean":
return $I$(6).valueOf$Z(!!o ||false);
case "object":
var isArray=o instanceof Array ||false;
if (isArray) {
return C$.toList$OA(o);
}return (1,o.__CLASS_NAME__ ? o :C$.toMap$O(o));
default:
return o;
}
}, 1);

Clazz.newMeth(C$, 'toMap$O', function (map) {
return Clazz.new_($I$(5).c$$O,[map]);
}, 1);

Clazz.newMeth(C$, 'toList$OA', function (a) {
return Clazz.new_($I$(8).c$$OA,[a]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.JSON, "JSONReader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.BufferedReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
C$.superclazz.c$$java_io_Reader.apply(this, [""]);
C$.$init$.apply(this);
this.data=P$.JSON.toObject$O($in._jsonData || $in.$in && $in.$in._jsonData ||null);
if (this.data == null ) {
var json=($in.str || $in.$in && $in.$in.str ||null);
this.data=P$.JSON.toObject$O($I$(1).parseJSONRaw$S(json));
}}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader', function ($in) {
C$.superclazz.c$$java_io_Reader.apply(this, [$in]);
C$.$init$.apply(this);
this.data=P$.JSON.toObject$O($in._jsonData || $in.$in && $in.$in._jsonData ||null);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (json) {
C$.superclazz.c$$java_io_Reader.apply(this, [""]);
C$.$init$.apply(this);
this.data=P$.JSON.toObject$O($I$(1).parseJSONRaw$S(json));
}, 1);

Clazz.newMeth(C$, 'c$$O', function (jsObject) {
C$.superclazz.c$$java_io_Reader.apply(this, [""]);
C$.$init$.apply(this);
this.data=P$.JSON.toObject$O(jsObject);
}, 1);

Clazz.newMeth(C$, 'close$', function () {
this.data=null;
try {
C$.superclazz.prototype.close$.apply(this, []);
} catch (e) {
}
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSON, "JSONMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Map');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.keys=null;
this.map=null;
this.ht=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (map) {
C$.$init$.apply(this);
this.map=map;
var keys=Clazz.array(String, [0]);

for (var i in map) keys.push(i);
this.keys=keys;
}, 1);

Clazz.newMeth(C$, 'get$O', function (key) {
return (this.ht == null  ? $I$(2).toObject$O(this.map[1 ? key :0]) : this.ht.get$O(key));
});

Clazz.newMeth(C$, 'size$', function () {
return (this.ht == null  ? this.keys.length : this.ht.size$());
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return (this.ht == null  ? this.keys.length == 0 : this.ht.isEmpty$());
});

Clazz.newMeth(C$, 'containsKey$O', function (key) {
if (this.ht != null ) return this.ht.containsKey$O(key);
var val=this.get$O(key);
return (1 ? typeof val :val) !== "undefined" ;
});

Clazz.newMeth(C$, 'getHashTable', function () {
if (this.ht != null ) return this.ht;
var ht=Clazz.new_($I$(3));
for (var i=this.keys.length; --i >= 0; ) {
var key=this.keys[i];
ht.put$TK$TV(key, $I$(2).toObject$O(this.get$O(key)));
}
this.map=null;
this.keys=null;
return this.ht=ht;
}, p$1);

Clazz.newMeth(C$, 'keySet$', function () {
return p$1.getHashTable.apply(this, []).keySet$();
});

Clazz.newMeth(C$, 'entrySet$', function () {
return p$1.getHashTable.apply(this, []).entrySet$();
});

Clazz.newMeth(C$, ['put$S$O','put$TK$TV'], function (key, value) {
return p$1.getHashTable.apply(this, []).put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
return p$1.getHashTable.apply(this, []).remove$O(key);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
p$1.getHashTable.apply(this, []).putAll$java_util_Map(m);
});

Clazz.newMeth(C$, 'clear$', function () {
p$1.getHashTable.apply(this, []).clear$();
});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
return p$1.getHashTable.apply(this, []).containsValue$O(value);
});

Clazz.newMeth(C$, 'values$', function () {
return p$1.getHashTable.apply(this, []).values$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSON, "JSONList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.ArrayList');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$OA', function (a) {
Clazz.super_(C$, this,1);

this.elementData = a; this.size = a.length;
}, 1);

Clazz.newMeth(C$, 'get$I', function (i) {
var o=null;

o = this.elementData[i];
return $I$(2).toObject$O(o);
});

Clazz.newMeth(C$, 'iterator$', function () {
if (this.iter == null ) this.iter=Clazz.new_($I$(4));
this.iter.pt=0;
this.iter.list=this;
return this.iter;
});
;
(function(){var C$=Clazz.newClass(P$.JSON.JSONList, "ListIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.list=null;
this.pt=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pt=-1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
var more;
{
more = this.list && (this.pt < this.list.size);
if (!more) { this.list = null; this.pt = -1; } return more;
}
});

Clazz.newMeth(C$, 'next$', function () {
var o=null;

o = this.list.elementData[this.pt++];
return P$.JSON.toObject$O(o);
});
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:47 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
