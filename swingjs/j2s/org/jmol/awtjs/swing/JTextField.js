(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JTextField", null, 'org.jmol.awtjs.swing.JComponent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (value) {
C$.superclazz.c$$S.apply(this, ["txtJT"]);
C$.$init$.apply(this);
this.text=value;
}, 1);

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1));
sb.append$S("<input type=text id='" + this.id + "' class='JTextField' style='" + this.getCSSstyle$I$I(0, 0) + "' value='" + this.text + "' onkeyup	=SwingController.click(this,event)	>" );
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
