(function(){var P$=java.util,p$1={},I$=[[0,'sun.util.ResourceBundleEnumeration','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ListResourceBundle", null, 'java.util.ResourceBundle');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lookup=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lookup=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'handleGetObject$S', function (key) {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return this.lookup.get$O(key);
});

Clazz.newMeth(C$, 'getKeys$', function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}var parent=this.parent;
return Clazz.new_($I$(1).c$$java_util_Set$java_util_Enumeration,[this.lookup.keySet$(), (parent != null ) ? parent.getKeys$() : null]);
});

Clazz.newMeth(C$, 'handleKeySet$', function () {
if (this.lookup == null ) {
p$1.loadLookup.apply(this, []);
}return this.lookup.keySet$();
});

Clazz.newMeth(C$, 'loadLookup', function () {
if (this.lookup != null ) return;
var contents=this.getContents$();
var temp=Clazz.new_($I$(2).c$$I,[contents.length]);
for (var i=0; i < contents.length; ++i) {
var key=contents[i][0];
var value=contents[i][1];
if (key == null  || value == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}temp.put$TK$TV(key, value);
}
this.lookup=temp;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
