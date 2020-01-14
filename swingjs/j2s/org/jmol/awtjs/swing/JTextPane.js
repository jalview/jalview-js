(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JTextPane", null, 'org.jmol.awtjs.swing.JComponent', 'org.jmol.awtjs.swing.Document');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["txtJTP"]);
C$.$init$.apply(this);
this.text="";
}, 1);

Clazz.newMeth(C$, 'getDocument$', function () {
return this;
});

Clazz.newMeth(C$, ['insertString$I$S$O','insertString$'], function (i, s, object) {
i=Math.min(i, this.text.length$());
this.text=this.text.substring$I$I(0, i) + s + this.text.substring$I(i) ;
});

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1));
sb.append$S("<textarea type=text id='" + this.id + "' class='JTextPane' style='" + this.getCSSstyle$I$I(98, 98) + "'>" + this.text + "</textarea>" );
return sb.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
