(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "JCheckBox", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["chkJCB"]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toHTML$', function () {
var s="<label><input type=checkbox id='" + this.id + "' class='JCheckBox' style='" + this.getCSSstyle$I$I(0, 0) + "' " + (this.selected ? "checked=\'checked\' " : "") + "onclick='SwingController.click(this)'>" + this.text + "</label>" ;
return s;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
