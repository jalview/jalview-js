(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "Cell");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.component=null;
this.colspan=0;
this.rowspan=0;
this.textAlign=0;
this.c=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_awtjs_swing_JComponent$org_jmol_awtjs_swing_GridBagConstraints', function (btn, c) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
