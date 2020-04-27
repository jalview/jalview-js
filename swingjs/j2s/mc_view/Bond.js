(function(){var P$=Clazz.newPackage("mc_view"),I$=[[0,'java.awt.Color']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bond");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.startCol=$I$(1).lightGray;
this.endCol=$I$(1).lightGray;
},1);

C$.$fields$=[['O',['start','float[]','+end','startCol','java.awt.Color','+endCol','at1','mc_view.Atom','+at2']]]

Clazz.newMeth(C$, 'c$$mc_view_Atom$mc_view_Atom', function (at1, at2) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
