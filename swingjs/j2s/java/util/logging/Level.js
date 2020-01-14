(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.HashMap','java.util.logging.Level','java.util.ArrayList',['java.util.logging.Level','.KnownLevel'],'java.util.ResourceBundle','java.util.Locale']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Level", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.OFF=null;
C$.SEVERE=null;
C$.WARNING=null;
C$.INFO=null;
C$.CONFIG=null;
C$.FINE=null;
C$.FINER=null;
C$.FINEST=null;
C$.ALL=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OFF=Clazz.new_(C$.c$$S$I$S,["OFF", 2147483647, "sun.util.logging.resources.logging"]);
C$.SEVERE=Clazz.new_(C$.c$$S$I$S,["SEVERE", 1000, "sun.util.logging.resources.logging"]);
C$.WARNING=Clazz.new_(C$.c$$S$I$S,["WARNING", 900, "sun.util.logging.resources.logging"]);
C$.INFO=Clazz.new_(C$.c$$S$I$S,["INFO", 800, "sun.util.logging.resources.logging"]);
C$.CONFIG=Clazz.new_(C$.c$$S$I$S,["CONFIG", 700, "sun.util.logging.resources.logging"]);
C$.FINE=Clazz.new_(C$.c$$S$I$S,["FINE", 500, "sun.util.logging.resources.logging"]);
C$.FINER=Clazz.new_(C$.c$$S$I$S,["FINER", 400, "sun.util.logging.resources.logging"]);
C$.FINEST=Clazz.new_(C$.c$$S$I$S,["FINEST", 300, "sun.util.logging.resources.logging"]);
C$.ALL=Clazz.new_(C$.c$$S$I$S,["ALL", -2147483648, "sun.util.logging.resources.logging"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.value=0;
this.resourceBundleName=null;
this.localizedLevelName=null;
this.cachedLocale=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (name, value) {
C$.c$$S$I$S.apply(this, [name, value, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$S', function (name, value, resourceBundleName) {
C$.c$$S$I$S$Z.apply(this, [name, value, resourceBundleName, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$S$Z', function (name, value, resourceBundleName, visible) {
C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.name=name;
this.value=value;
this.resourceBundleName=resourceBundleName;
this.localizedLevelName=resourceBundleName == null  ? name : null;
this.cachedLocale=null;
if (visible) {
$I$(4).add$java_util_logging_Level(this);
}}, 1);

Clazz.newMeth(C$, 'getResourceBundleName$', function () {
return this.resourceBundleName;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getLocalizedName$', function () {
return this.getLocalizedLevelName$();
});

Clazz.newMeth(C$, 'getLevelName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'computeLocalizedLevelName$java_util_Locale', function (newLocale) {
var rb=$I$(5).getBundle$S$java_util_Locale(this.resourceBundleName, newLocale);
var localizedName=rb.getString$S(this.name);
var isDefaultBundle="sun.util.logging.resources.logging".equals$O(this.resourceBundleName);
if (!isDefaultBundle) return localizedName;
var rbLocale=rb.getLocale$();
var locale=$I$(6).ROOT.equals$O(rbLocale) || this.name.equals$O(localizedName.toUpperCase$java_util_Locale($I$(6).ROOT))  ? $I$(6).ROOT : rbLocale;
return $I$(6).ROOT.equals$O(locale) ? this.name : localizedName.toUpperCase$java_util_Locale(locale);
}, p$1);

Clazz.newMeth(C$, 'getCachedLocalizedLevelName$', function () {
if (this.localizedLevelName != null ) {
if (this.cachedLocale != null ) {
if (this.cachedLocale.equals$O($I$(6).getDefault$())) {
return this.localizedLevelName;
}}}if (this.resourceBundleName == null ) {
return this.name;
}return null;
});

Clazz.newMeth(C$, 'getLocalizedLevelName$', function () {
var cachedLocalizedName=this.getCachedLocalizedLevelName$();
if (cachedLocalizedName != null ) {
return cachedLocalizedName;
}var newLocale=$I$(6).getDefault$();
try {
this.localizedLevelName=p$1.computeLocalizedLevelName$java_util_Locale.apply(this, [newLocale]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.localizedLevelName=this.name;
} else {
throw ex;
}
}
this.cachedLocale=newLocale;
return this.localizedLevelName;
});

Clazz.newMeth(C$, 'findLevel$S', function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var level;
level=$I$(4).findByName$S(name);
if (level != null ) {
return level.mirroredLevel;
}try {
var x=Integer.parseInt$S(name);
level=$I$(4).findByValue$I(x);
if (level == null ) {
var levelObject=Clazz.new_(C$.c$$S$I,[name, x]);
level=$I$(4).findByValue$I(x);
}return level.mirroredLevel;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
level=$I$(4).findByLocalizedLevelName$S(name);
if (level != null ) {
return level.mirroredLevel;
}return null;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$, 'intValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'readResolve', function () {
var o=$I$(4).matches$java_util_logging_Level(this);
if (o != null ) {
return o.levelObject;
}var level=Clazz.new_(C$.c$$S$I$S,[this.name, this.value, this.resourceBundleName]);
return level;
}, p$1);

Clazz.newMeth(C$, 'parse$S', function (name) {
name.length$();
var level;
level=$I$(4).findByName$S(name);
if (level != null ) {
return level.levelObject;
}try {
var x=Integer.parseInt$S(name);
level=$I$(4).findByValue$I(x);
if (level == null ) {
var levelObject=Clazz.new_(C$.c$$S$I,[name, x]);
level=$I$(4).findByValue$I(x);
}return level.levelObject;
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
level=$I$(4).findByLocalizedLevelName$S(name);
if (level != null ) {
return level.levelObject;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad level \"" + name + "\"" ]);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (ox) {
try {
var lx=ox;
return (lx.value == this.value);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return false;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.value;
});
;
(function(){var C$=Clazz.newClass(P$.Level, "KnownLevel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.nameToLevels=null;
C$.intToLevels=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nameToLevels=Clazz.new_($I$(1));
C$.intToLevels=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.levelObject=null;
this.mirroredLevel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_logging_Level', function (l) {
C$.$init$.apply(this);
this.levelObject=l;
if (l.getClass$() === Clazz.getClass($I$(2)) ) {
this.mirroredLevel=l;
} else {
this.mirroredLevel=Clazz.new_($I$(2).c$$S$I$S$Z,[l.name, l.value, l.resourceBundleName, false]);
}}, 1);

Clazz.newMeth(C$, 'add$java_util_logging_Level', function (l) {
var o=Clazz.new_(C$.c$$java_util_logging_Level,[l]);
var list=C$.nameToLevels.get$O(l.name);
if (list == null ) {
list=Clazz.new_($I$(3));
C$.nameToLevels.put$TK$TV(l.name, list);
}list.add$TE(o);
list=C$.intToLevels.get$O(new Integer(l.value));
if (list == null ) {
list=Clazz.new_($I$(3));
C$.intToLevels.put$TK$TV(new Integer(l.value), list);
}list.add$TE(o);
}, 1);

Clazz.newMeth(C$, 'findByName$S', function (name) {
var list=C$.nameToLevels.get$O(name);
if (list != null ) {
return list.get$I(0);
}return null;
}, 1);

Clazz.newMeth(C$, 'findByValue$I', function (value) {
var list=C$.intToLevels.get$O(new Integer(value));
if (list != null ) {
return list.get$I(0);
}return null;
}, 1);

Clazz.newMeth(C$, 'findByLocalizedLevelName$S', function (name) {
for (var levels, $levels = C$.nameToLevels.values$().iterator$(); $levels.hasNext$()&&((levels=($levels.next$())),1);) {
for (var l, $l = levels.iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
var lname=l.levelObject.getLocalizedLevelName$();
if (name.equals$O(lname)) {
return l;
}}
}
return null;
}, 1);

Clazz.newMeth(C$, 'matches$java_util_logging_Level', function (l) {
var list=C$.nameToLevels.get$O(l.name);
if (list != null ) {
for (var level, $level = list.iterator$(); $level.hasNext$()&&((level=($level.next$())),1);) {
var other=level.mirroredLevel;
if (l.value == other.value && (l.resourceBundleName == other.resourceBundleName || (l.resourceBundleName != null  && l.resourceBundleName.equals$O(other.resourceBundleName) ) ) ) {
return level;
}}
}return null;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
