(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.Component','.BaselineResizeBehavior']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GridBagLayoutInfo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.width=0;
this.height=0;
this.startx=0;
this.starty=0;
this.minWidth=null;
this.minHeight=null;
this.weightX=null;
this.weightY=null;
this.hasBaseline=false;
this.baselineType=null;
this.maxAscent=null;
this.maxDescent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
C$.$init$.apply(this);
this.width=width;
this.height=height;
}, 1);

Clazz.newMeth(C$, 'hasConstantDescent$I', function (row) {
return ((this.baselineType[row] & (1 << $I$(1).CONSTANT_DESCENT.ordinal$())) != 0);
});

Clazz.newMeth(C$, 'hasBaseline$I', function (row) {
return (this.hasBaseline && this.baselineType[row] != 0 );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
