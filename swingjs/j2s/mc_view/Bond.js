(function(){var P$=Clazz.newPackage("mc_view"),I$=[[0,'java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Bond");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=null;
this.end=null;
this.startCol=null;
this.endCol=null;
this.at1=null;
this.at2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.startCol=$I$(1).lightGray;
this.endCol=$I$(1).lightGray;
}, 1);

Clazz.newMeth(C$, 'c$$mc_view_Atom$mc_view_Atom', function (at1, at2) {
C$.$init$.apply(this);
this.start=Clazz.array(Float.TYPE, -1, [at1.x, at1.y, at1.z]);
this.end=Clazz.array(Float.TYPE, -1, [at2.x, at2.y, at2.z]);
this.startCol=at1.color;
this.endCol=at2.color;
this.at1=at1;
this.at2=at2;
}, 1);

Clazz.newMeth(C$, 'translate$F$F$F', function (x, y, z) {
this.start[0]=this.start[0] + x;
this.end[0]=this.end[0] + x;
this.start[1]=this.start[1] + y;
this.end[1]=this.end[1] + y;
this.start[2]=this.start[2] + z;
this.end[2]=this.end[2] + z;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
