(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Cell");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['colspan','rowspan','textAlign'],'O',['component','org.jmol.awtjs.swing.JComponent','c','org.jmol.awtjs.swing.GridBagConstraints']]]

Clazz.newMeth(C$, 'c$$org_jmol_awtjs_swing_JComponent$org_jmol_awtjs_swing_GridBagConstraints', function (btn, c) {
;C$.$init$.apply(this);
this.component=btn;
this.colspan=c.gridwidth;
this.rowspan=c.gridheight;
this.c=c;
}, 1);

Clazz.newMeth(C$, 'toHTML$S', function (id) {
var style=this.c.getStyle$Z(false);
return "<td id='" + id + "' " + (this.colspan < 2 ? "" : "colspan='" + this.colspan + "' " ) + style + "><span " + this.c.getStyle$Z(true) + ">" + this.component.toHTML$() + "</span></td>" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
