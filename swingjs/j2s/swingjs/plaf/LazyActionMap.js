(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.UIManager','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LazyActionMap", null, 'javax.swing.plaf.ActionMapUIResource');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._loader=null;
this._key=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'installLazyActionMap$javax_swing_JComponent$Class$S', function (c, loaderClass, defaultsKey) {
var map=$I$(1).get$O(defaultsKey);
if (map == null ) {
map=Clazz.new_(C$.c$$Class$S,[loaderClass, defaultsKey]);
$I$(1).getLookAndFeelDefaults$().put$O$O(defaultsKey, map);
}$I$(2).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(c, map);
}, 1);

Clazz.newMeth(C$, 'getActionMap$Class$S', function (loaderClass, defaultsKey) {
var map=$I$(1).get$O(defaultsKey);
if (map == null ) {
map=Clazz.new_(C$.c$$Class$S,[loaderClass, defaultsKey]);
$I$(1).getLookAndFeelDefaults$().put$O$O(defaultsKey, map);
}return map;
}, 1);

Clazz.newMeth(C$, 'c$$Class$S', function (loader, key) {
Clazz.super_(C$, this,1);
this._loader=loader;
this._key=key;
}, 1);

Clazz.newMeth(C$, 'put$javax_swing_Action', function (action) {
this.put$O$javax_swing_Action(action.getValue$S("Name"), action);
});

Clazz.newMeth(C$, 'put$O$javax_swing_Action', function (key, action) {
p$1.loadIfNecessary.apply(this, []);
C$.superclazz.prototype.put$O$javax_swing_Action.apply(this, [key, action]);
});

Clazz.newMeth(C$, 'get$O', function (key) {
p$1.loadIfNecessary.apply(this, []);
return C$.superclazz.prototype.get$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'remove$O', function (key) {
p$1.loadIfNecessary.apply(this, []);
C$.superclazz.prototype.remove$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'clear$', function () {
p$1.loadIfNecessary.apply(this, []);
C$.superclazz.prototype.clear$.apply(this, []);
});

Clazz.newMeth(C$, 'keys$', function () {
p$1.loadIfNecessary.apply(this, []);
return C$.superclazz.prototype.keys$.apply(this, []);
});

Clazz.newMeth(C$, 'size$', function () {
p$1.loadIfNecessary.apply(this, []);
return C$.superclazz.prototype.size$.apply(this, []);
});

Clazz.newMeth(C$, 'allKeys$', function () {
p$1.loadIfNecessary.apply(this, []);
return C$.superclazz.prototype.allKeys$.apply(this, []);
});

Clazz.newMeth(C$, 'setParent$javax_swing_ActionMap', function (map) {
p$1.loadIfNecessary.apply(this, []);
C$.superclazz.prototype.setParent$javax_swing_ActionMap.apply(this, [map]);
});

Clazz.newMeth(C$, 'loadIfNecessary', function () {
if (this._loader != null ) {
var loader=this._loader;
this._loader=null;
{
loader.$clazz$.loadActionMap$swingjs_plaf_LazyActionMap(this);
}
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
