(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'org.jmol.awtjs.swing.Grid','org.jmol.awtjs.swing.GridBagConstraints','javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPanel", null, 'org.jmol.awtjs.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nElements'],'O',['grid','org.jmol.awtjs.swing.Grid','last','org.jmol.awtjs.swing.JComponent']]]

Clazz.newMeth(C$, 'c$$org_jmol_awtjs_swing_LayoutManager', function (manager) {
;C$.superclazz.c$$S.apply(this,["JP"]);C$.$init$.apply(this);
this.grid=Clazz.new_($I$(1,1).c$$I$I,[10, 10]);
}, 1);

Clazz.newMeth(C$, 'add$org_jmol_awtjs_swing_JComponent$O', function (btn, c) {
this.last=(++this.nElements == 1 ? btn : null);
if (Clazz.instanceOf(c, "java.lang.String")) {
if (c.equals$O("North")) c=Clazz.new_($I$(2,1).c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I,[0, 0, 3, 1, 0, 0, 10, 0, null, 0, 0]);
 else if (c.equals$O("South")) c=Clazz.new_($I$(2,1).c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I,[0, 2, 3, 1, 0, 0, 10, 0, null, 0, 0]);
 else if (c.equals$O("East")) c=Clazz.new_($I$(2,1).c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I,[2, 1, 1, 1, 0, 0, 13, 0, null, 0, 0]);
 else if (c.equals$O("West")) c=Clazz.new_($I$(2,1).c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I,[0, 1, 1, 1, 0, 0, 17, 0, null, 0, 0]);
 else c=Clazz.new_($I$(2,1).c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I,[1, 1, 1, 1, 0, 0, 10, 0, null, 0, 0]);
}this.grid.add$org_jmol_awtjs_swing_JComponent$org_jmol_awtjs_swing_GridBagConstraints(btn, c);
});

Clazz.newMeth(C$, 'toHTML$', function () {
if (this.last != null ) {
this.grid=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.grid.add$org_jmol_awtjs_swing_JComponent$org_jmol_awtjs_swing_GridBagConstraints(this.last, Clazz.new_($I$(2,1).c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I,[0, 0, 1, 1, 0, 0, 10, 0, null, 0, 0]));
this.last=null;
}var sb=Clazz.new_($I$(3,1));
sb.append$S("\n<div id='" + this.id + "' class='JPanel' style='" + this.getCSSstyle$I$I(100, 100) + "'>\n" );
sb.append$S("\n<span id='" + this.id + "_minimizer' style='width:" + this.minWidth + "px;height:" + this.minHeight + "px;'>" );
sb.append$S(this.grid.toHTML$S(this.id));
sb.append$S("</span>");
sb.append$S("\n</div>\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
