(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTextPane", null, 'org.jmol.awtjs.swing.JComponent', 'org.jmol.awtjs.swing.Document');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["txtJTP"]);C$.$init$.apply(this);
this.text="";
}, 1);

Clazz.newMeth(C$, 'getDocument$', function () {
return this;
});

Clazz.newMeth(C$, 'insertString$I$S$O', function (i, s, object) {
i=Math.min(i, this.text.length$());
this.text=this.text.substring$I$I(0, i) + s + this.text.substring$I(i) ;
});

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("<textarea type=text id='" + this.id + "' class='JTextPane' style='" + this.getCSSstyle$I$I(98, 98) + "'>" + this.text + "</textarea>" );
return sb.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
