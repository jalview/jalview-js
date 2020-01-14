(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'sun.awt.AppContext','javax.swing.UIManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LayoutStyle", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setInstance$javax_swing_LayoutStyle', function (style) {
{
if (style == null ) {
$I$(1).getAppContext$().remove$O(Clazz.getClass(C$));
} else {
$I$(1).getAppContext$().put$O$O(Clazz.getClass(C$), style);
}}}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
var style;
{
style=$I$(1).getAppContext$().get$O(Clazz.getClass(C$));
}if (style == null ) {
return $I$(2).getLookAndFeel$().getLayoutStyle$();
}return style;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.LayoutStyle, "ComponentPlacement", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "RELATED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "UNRELATED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "INDENT", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
