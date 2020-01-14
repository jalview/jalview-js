(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.MultiUIDefaults','.MultiUIDefaultsEnumerator','.Type'],'javax.swing.UIDefaults',['javax.swing.MultiUIDefaults','.MultiUIDefaultsEnumerator'],'java.util.HashSet','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MultiUIDefaults", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.UIDefaults');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tables=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_UIDefaultsA', function (defaults) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.tables=defaults;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.tables=Clazz.array($I$(2), [0]);
}, 1);

Clazz.newMeth(C$, 'get$O', function (key) {
var value=C$.superclazz.prototype.get$O.apply(this, [key]);
if (value != null ) {
return value;
}for (var i=0; i < this.tables.length; i++) {
var table=this.tables[i];
value=(table != null ) ? table.get$O(key) : null;
if (value != null ) {
return value;
}}
return null;
});

Clazz.newMeth(C$, 'get$O$java_util_Locale', function (key, l) {
var value=C$.superclazz.prototype.get$O$java_util_Locale.apply(this, [key, l]);
if (value != null ) {
return value;
}for (var i=0; i < this.tables.length; i++) {
var table=this.tables[i];
value=(table != null ) ? table.get$O$java_util_Locale(key, l) : null;
if (value != null ) {
return value;
}}
return null;
});

Clazz.newMeth(C$, 'size$', function () {
return this.entrySet$().size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'keys$', function () {
return Clazz.new_($I$(3).c$$javax_swing_MultiUIDefaults_MultiUIDefaultsEnumerator_Type$java_util_Set,[$I$(1).KEYS, this.entrySet$()]);
});

Clazz.newMeth(C$, 'elements$', function () {
return Clazz.new_($I$(3).c$$javax_swing_MultiUIDefaults_MultiUIDefaultsEnumerator_Type$java_util_Set,[$I$(1).ELEMENTS, this.entrySet$()]);
});

Clazz.newMeth(C$, 'entrySet$', function () {
var set=Clazz.new_($I$(4));
for (var i=this.tables.length - 1; i >= 0; i--) {
if (this.tables[i] != null ) {
set.addAll$java_util_Collection(this.tables[i].entrySet$());
}}
set.addAll$java_util_Collection(C$.superclazz.prototype.entrySet$.apply(this, []));
return set;
});

Clazz.newMeth(C$, 'getUIError$S', function (msg) {
if (this.tables.length > 0) {
this.tables[0].getUIError$S(msg);
} else {
C$.superclazz.prototype.getUIError$S.apply(this, [msg]);
}});

Clazz.newMeth(C$, 'remove$O', function (key) {
var value=null;
for (var i=this.tables.length - 1; i >= 0; i--) {
if (this.tables[i] != null ) {
var v=this.tables[i].remove$O(key);
if (v != null ) {
value=v;
}}}
var v=C$.superclazz.prototype.remove$O.apply(this, [key]);
if (v != null ) {
value=v;
}return value;
});

Clazz.newMeth(C$, 'clear$', function () {
C$.superclazz.prototype.clear$.apply(this, []);
for (var i=0; i < this.tables.length; i++) {
var table=this.tables[i];
if (table != null ) {
table.clear$();
}}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(5));
buf.append$S("{");
var keys=this.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
buf.append$S(key + "=" + this.get$O(key) + ", " );
}
var length=buf.length$();
if (length > 1) {
buf.delete$I$I(length - 2, length);
}buf.append$S("}");
return buf.toString();
});
;
(function(){var C$=Clazz.newClass(P$.MultiUIDefaults, "MultiUIDefaultsEnumerator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iterator=null;
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_MultiUIDefaults_MultiUIDefaultsEnumerator_Type$java_util_Set', function (type, entries) {
C$.$init$.apply(this);
this.type=type;
this.iterator=entries.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
return this.iterator.hasNext$();
});

Clazz.newMeth(C$, 'nextElement$', function () {
switch (this.type) {
case $I$(1).KEYS:
return this.iterator.next$().getKey$();
case $I$(1).ELEMENTS:
return this.iterator.next$().getValue$();
default:
return null;
}
});
;
(function(){var C$=Clazz.newClass(P$.MultiUIDefaults.MultiUIDefaultsEnumerator, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "KEYS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ELEMENTS", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
