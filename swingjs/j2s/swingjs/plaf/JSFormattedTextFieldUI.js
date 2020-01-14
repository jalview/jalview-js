(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSFormattedTextFieldUI", null, 'swingjs.plaf.JSTextFieldUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setJSText$swingjs_api_js_DOMNode$S$S', function (obj, prop, val) {
if (prop == "value" && val != null   && val.length$() >= 2 ) {
if ((val.charCodeAt$I(0)) == 164 ) val="$" + val.substring$I(1);
 else if (val.charAt$I(0) == "-" && (val.charCodeAt$I(1)) == 164  ) val="($" + val.substring$I(2) + ")" ;
}return $I$(1).setAttr(obj, prop, val);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
