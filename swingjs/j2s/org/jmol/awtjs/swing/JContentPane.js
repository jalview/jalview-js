(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JContentPane", null, 'org.jmol.awtjs.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["JCP"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("\n<div id='" + this.id + "' class='JContentPane' style='" + this.getCSSstyle$I$I(100, 100) + "'>\n" );
if (this.list != null ) for (var i=0; i < this.list.size$(); i++) sb.append$S(this.list.get$I(i).toHTML$());

sb.append$S("\n</div>\n");
return sb.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
