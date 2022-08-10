(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[[0,'org.jmol.awtjs.swing.Insets']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridBagConstraints");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['weightx','weighty'],'I',['gridx','gridy','gridwidth','gridheight','anchor','fill','ipadx','ipady'],'O',['insets','org.jmol.awtjs.swing.Insets']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$D$D$I$I$org_jmol_awtjs_swing_Insets$I$I', function (gridx, gridy, gridwidth, gridheight, weightx, weighty, anchor, fill, insets, ipadx, ipady) {
;C$.$init$.apply(this);
this.gridx=gridx;
this.gridy=gridy;
this.gridwidth=gridwidth;
this.gridheight=gridheight;
this.weightx=weightx;
this.weighty=weighty;
this.anchor=anchor;
this.fill=fill;
if (insets == null ) insets=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.insets=insets;
this.ipadx=ipadx;
this.ipady=ipady;
}, 1);

Clazz.newMeth(C$, 'getStyle$Z', function (margins) {
return "style='" + (margins ? "margin:" + this.insets.top + "px " + (this.ipady + this.insets.right) + "px " + this.insets.bottom + "px " + (this.ipadx + this.insets.left) + "px;"  : "text-align:" + (this.anchor == 13 ? "right" : this.anchor == 17 ? "left" : "center")) + "'" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
