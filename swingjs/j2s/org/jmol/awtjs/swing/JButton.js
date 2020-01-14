(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JButton", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["btnJB"]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1));
sb.append$S("<input type=button id='" + this.id + "' class='JButton' style='" + this.getCSSstyle$I$I(80, 0) + "' onclick='SwingController.click(this)' value='" + this.text + "'/>" );
return sb.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
