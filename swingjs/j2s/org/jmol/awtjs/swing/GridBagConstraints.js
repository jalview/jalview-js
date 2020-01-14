(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'org.jmol.awtjs.swing.Insets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GridBagConstraints");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gridx=0;
this.gridy=0;
this.gridwidth=0;
this.gridheight=0;
this.weightx=0;
this.weighty=0;
this.anchor=0;
this.fill=0;
this.insets=null;
this.ipadx=0;
this.ipady=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I', function (gridx, gridy, gridwidth, gridheight, weightx, weighty, anchor, fill, insets, ipadx, ipady) {
C$.$init$.apply(this);
this.gridx=gridx;
this.gridy=gridy;
this.gridwidth=gridwidth;
this.gridheight=gridheight;
this.weightx=weightx;
this.weighty=weighty;
this.anchor=anchor;
this.fill=fill;
if (insets == null ) insets=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
this.insets=insets;
this.ipadx=ipadx;
this.ipady=ipady;
}, 1);

Clazz.newMeth(C$, 'getStyle$Z', function (margins) {
return "style='" + (margins ? "margin:" + this.insets.top + "px " + (this.ipady + this.insets.right) + "px " + this.insets.bottom + "px " + (this.ipadx + this.insets.left) + "px;"  : "text-align:" + (this.anchor == 13 ? "right" : this.anchor == 17 ? "left" : "center")) + "'" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
