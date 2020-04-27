(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'javajs.util.SB']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JScrollPane", null, 'org.jmol.awtjs.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_jmol_awtjs_swing_JComponent', function (component) {
;C$.superclazz.c$$S.apply(this,["JScP"]);C$.$init$.apply(this);
this.add$org_jmol_awtjs_swing_Component(component);
}, 1);

Clazz.newMeth(C$, 'toHTML$', function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("\n<div id='" + this.id + "' class='JScrollPane' style='" + this.getCSSstyle$I$I(98, 98) + "overflow:auto'>\n" );
if (this.list != null ) {
var c=this.list.get$I(0);
sb.append$S(c.toHTML$());
}sb.append$S("\n</div>\n");
return sb.toString();
});

Clazz.newMeth(C$, 'setMinimumSize$org_jmol_awtjs_swing_Dimension', function (dimension) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
