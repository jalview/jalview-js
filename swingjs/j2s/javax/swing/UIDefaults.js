(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.LookAndFeel','java.util.Locale','java.util.HashMap','javax.swing.SwingUtilities','Error','swingjs.JSToolkit','javax.swing.event.SwingPropertyChangeSupport','java.beans.PropertyChangeListener','java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UIDefaults", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Hashtable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.changeSupport=null;
this.resourceBundles=null;
this.defaultLocale=null;
this.resourceCache=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.defaultLocale=$I$(2).getDefault$();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I$F.apply(this, [700, 0.75]);
}, 1);

Clazz.newMeth(C$, 'c$$I$F', function (initialCapacity, loadFactor) {
C$.superclazz.c$$I$F.apply(this, [initialCapacity, loadFactor]);
C$.$init$.apply(this);
this.resourceCache=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$OA', function (keyValueList) {
C$.superclazz.c$$I.apply(this, [(keyValueList.length/2|0)]);
C$.$init$.apply(this);
for (var i=0; i < keyValueList.length; i+=2) {
C$.superclazz.prototype.put$TK$TV.apply(this, [keyValueList[i], keyValueList[i + 1]]);
}
}, 1);

Clazz.newMeth(C$, 'get$O', function (key) {
var value=p$1.getFromHashtable$O.apply(this, [key]);
return (value != null ) ? value : p$1.getFromResourceBundle$O$java_util_Locale.apply(this, [key, null]);
});

Clazz.newMeth(C$, 'getFromHashtable$O', function (key) {
var value=C$.superclazz.prototype.get$O.apply(this, [key]);
if (value == null  && (Clazz.instanceOf(key, "java.lang.String")) ) {
var skey=key;
if (skey.endsWith$S(".font") || skey.endsWith$S(".background") || skey.endsWith$S(".foreground")  ) value=C$.superclazz.prototype.get$O.apply(this, ["*" + skey.substring$I(skey.lastIndexOf$S("."))]);
}if (!(Clazz.instanceOf(value, "javax.swing.UIDefaults.ActiveValue")) && !(Clazz.instanceOf(value, "javax.swing.UIDefaults.LazyValue")) ) {
return value;
}if (Clazz.instanceOf(value, "javax.swing.UIDefaults.LazyValue")) {
try {
value=(value).createValue$(this);
} finally {
if (value == null ) {
C$.superclazz.prototype.remove$O.apply(this, [key]);
} else {
C$.superclazz.prototype.put$TK$TV.apply(this, [key, value]);
}}
} else {
value=(value).createValue$(this);
}return value;
}, p$1);

Clazz.newMeth(C$, 'get$O$java_util_Locale', function (key, l) {
var value=p$1.getFromHashtable$O.apply(this, [key]);
return (value != null ) ? value : p$1.getFromResourceBundle$O$java_util_Locale.apply(this, [key, l]);
});

Clazz.newMeth(C$, 'getFromResourceBundle$O$java_util_Locale', function (key, l) {
if (this.resourceBundles == null  || this.resourceBundles.isEmpty$()  || !(Clazz.instanceOf(key, "java.lang.String")) ) {
return null;
}if (l == null ) {
if (this.defaultLocale == null ) return null;
 else l=this.defaultLocale;
}{
return p$1.getResourceCache$java_util_Locale.apply(this, [l]).get$O(key);
}}, p$1);

Clazz.newMeth(C$, 'getResourceCache$java_util_Locale', function (l) {
return null;
}, p$1);

Clazz.newMeth(C$, ['put$O$O','put$TK$TV'], function (key, value) {
var oldValue=(value == null ) ? C$.superclazz.prototype.remove$O.apply(this, [key]) : C$.superclazz.prototype.put$TK$TV.apply(this, [key, value]);
if (Clazz.instanceOf(key, "java.lang.String")) {
this.firePropertyChange$S$O$O(key, oldValue, value);
}return oldValue;
});

Clazz.newMeth(C$, 'putDefaults$OA', function (keyValueList) {
for (var i=0, max=keyValueList.length; i < max; i+=2) {
var value=keyValueList[i + 1];
if (value == null ) {
C$.superclazz.prototype.remove$O.apply(this, [keyValueList[i]]);
} else {
C$.superclazz.prototype.put$TK$TV.apply(this, [keyValueList[i], value]);
}}
this.firePropertyChange$S$O$O("UIDefaults", null, null);
});

Clazz.newMeth(C$, 'getFont$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.awt.Font")) ? value : null;
});

Clazz.newMeth(C$, 'getFont$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.awt.Font")) ? value : null;
});

Clazz.newMeth(C$, 'getColor$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.awt.Color")) ? value : null;
});

Clazz.newMeth(C$, 'getColor$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.awt.Color")) ? value : null;
});

Clazz.newMeth(C$, 'getIcon$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "javax.swing.Icon")) ? value : null;
});

Clazz.newMeth(C$, 'getIcon$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "javax.swing.Icon")) ? value : null;
});

Clazz.newMeth(C$, 'getBorder$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "javax.swing.border.Border")) ? value : null;
});

Clazz.newMeth(C$, 'getBorder$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "javax.swing.border.Border")) ? value : null;
});

Clazz.newMeth(C$, 'getString$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.lang.String")) ? value : null;
});

Clazz.newMeth(C$, 'getString$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.lang.String")) ? value : null;
});

Clazz.newMeth(C$, 'getInt$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.lang.Integer")) ? (value).intValue$() : 0;
});

Clazz.newMeth(C$, 'getInt$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.lang.Integer")) ? (value).intValue$() : 0;
});

Clazz.newMeth(C$, 'getBoolean$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.lang.Boolean")) ? (value).booleanValue$() : false;
});

Clazz.newMeth(C$, 'getBoolean$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.lang.Boolean")) ? (value).booleanValue$() : false;
});

Clazz.newMeth(C$, 'getInsets$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.awt.Insets")) ? value : null;
});

Clazz.newMeth(C$, 'getInsets$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.awt.Insets")) ? value : null;
});

Clazz.newMeth(C$, 'getDimension$O', function (key) {
var value=this.get$O(key);
return (Clazz.instanceOf(value, "java.awt.Dimension")) ? value : null;
});

Clazz.newMeth(C$, 'getDimension$O$java_util_Locale', function (key, l) {
var value=this.get$O$java_util_Locale(key, l);
return (Clazz.instanceOf(value, "java.awt.Dimension")) ? value : null;
});

Clazz.newMeth(C$, 'getUIClass$S$ClassLoader', function (uiClassID, uiClassLoader) {
try {
var className=this.get$O(uiClassID);
if (className != null ) {
var cls=this.get$O(className);
if (cls == null ) {
if (uiClassLoader == null ) {
cls=$I$(4).loadSystemClass$S(className);
} else {
cls=uiClassLoader.loadClass$S(className);
}if (cls != null ) {
this.put$O$O(className, cls);
}}return cls;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"ClassCastException")){
var e = e$$;
{
return null;
}
} else {
throw e$$;
}
}
return null;
});

Clazz.newMeth(C$, 'getUIClass$S', function (uiClassID) {
return this.getUIClass$S$ClassLoader(uiClassID, null);
});

Clazz.newMeth(C$, 'getUIError$S', function (msg) {
System.err.println$S("UIDefaults.getUI() failed: " + msg);
try {
throw Clazz.new_($I$(5));
} catch (e) {
e.printStackTrace$();
}
});

Clazz.newMeth(C$, 'getUI$javax_swing_JComponent', function (target) {
return $I$(6).getComponentUI$javax_swing_JComponent(target);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(7).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener', function (listener) {
if (this.changeSupport != null ) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$', function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(8), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O', function (propertyName, oldValue, newValue) {
if (this.changeSupport != null ) {
this.changeSupport.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
}});

Clazz.newMeth(C$, 'addResourceBundle$S', function (bundleName) {
if (bundleName == null ) {
return;
}if (this.resourceBundles == null ) {
this.resourceBundles=Clazz.new_($I$(9).c$$I,[5]);
}if (!this.resourceBundles.contains$O(bundleName)) {
this.resourceBundles.add$TE(bundleName);
this.resourceCache.clear$();
}});

Clazz.newMeth(C$, 'removeResourceBundle$S', function (bundleName) {
if (this.resourceBundles != null ) {
this.resourceBundles.remove$O(bundleName);
}this.resourceCache.clear$();
});

Clazz.newMeth(C$, 'setDefaultLocale$java_util_Locale', function (l) {
this.defaultLocale=l;
});

Clazz.newMeth(C$, 'getDefaultLocale$', function () {
return this.defaultLocale;
});
;
(function(){var C$=Clazz.newInterface(P$.UIDefaults, "LazyValue", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.UIDefaults, "ActiveValue", function(){
});
})()
;
(function(){var C$=Clazz.newClass(P$.UIDefaults, "LazyInputMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.UIDefaults','javax.swing.UIDefaults.LazyValue']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bindings=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$OA', function (bindings) {
C$.$init$.apply(this);
this.bindings=bindings;
}, 1);

Clazz.newMeth(C$, ['createValue$javax_swing_UIDefaults','createValue$'], function (table) {
if (this.bindings != null ) {
var km=$I$(1).makeInputMap$OA(this.bindings);
return km;
}return null;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
