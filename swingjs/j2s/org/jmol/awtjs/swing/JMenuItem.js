(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "JMenuItem", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['btnType']]]

Clazz.newMeth(C$, 'c$$S', function (text) {
;C$.superclazz.c$$S.apply(this,["btn"]);C$.$init$.apply(this);
this.setText$S(text);
this.btnType=(text == null  ? 0 : 1);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (type, i) {
;C$.superclazz.c$$S.apply(this,[type]);C$.$init$.apply(this);
this.btnType=i;
}, 1);

Clazz.newMeth(C$, 'toHTML$', function () {
return this.htmlMenuOpener$S("li") + (this.text == null  ? "" : "<a>" + p$1.htmlLabel.apply(this, []) + "</a>" ) + "</li>" ;
});

Clazz.newMeth(C$, 'getHtmlDisabled$', function () {
return " class=\"ui-state-disabled\"";
});

Clazz.newMeth(C$, 'htmlLabel', function () {
return (this.btnType == 1 ? this.text : "<label><input id=\"" + this.id + "-" + (this.btnType == 3 ? "r" : "c") + "b\" type=\"" + (this.btnType == 3 ? "radio\" name=\"" + this.htmlName : "checkbox") + "\" " + (this.selected ? "checked" : "") + " />" + this.text + "</label>" );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
