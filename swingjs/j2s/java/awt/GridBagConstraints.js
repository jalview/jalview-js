(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Insets','InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GridBagConstraints", null, null, 'Cloneable');

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
this.tempX=0;
this.tempY=0;
this.tempWidth=0;
this.tempHeight=0;
this.minWidth=0;
this.minHeight=0;
this.ascent=0;
this.descent=0;
this.baselineResizeBehavior=null;
this.centerPadding=0;
this.centerOffset=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.gridx=-1;
this.gridy=-1;
this.gridwidth=1;
this.gridheight=1;
this.weightx=0;
this.weighty=0;
this.anchor=10;
this.fill=0;
this.insets=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
this.ipadx=0;
this.ipady=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I', function (gridx, gridy, gridwidth, gridheight, weightx, weighty, anchor, fill, insets, ipadx, ipady) {
C$.$init$.apply(this);
this.gridx=gridx;
this.gridy=gridy;
this.gridwidth=gridwidth;
this.gridheight=gridheight;
this.fill=fill;
this.ipadx=ipadx;
this.ipady=ipady;
this.insets=insets;
this.anchor=anchor;
this.weightx=weightx;
this.weighty=weighty;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "[" + this.gridx + "," + this.gridy + "," + this.gridwidth + "," + this.gridheight + "," + this.fill + "," + this.ipadx + "," + this.ipady + "," + this.insets + "," + this.anchor + "," + new Double(this.weightx).toString() + "," + new Double(this.weighty).toString() + "]" ;
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var c=Clazz.clone(this);
c.insets=this.insets.clone$();
return c;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isVerticallyResizable$', function () {
return (this.fill == 1 || this.fill == 3 );
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
