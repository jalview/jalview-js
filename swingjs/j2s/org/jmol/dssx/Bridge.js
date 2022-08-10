(function(){var P$=Clazz.newPackage("org.jmol.dssx"),p$1={},I$=[[0,'org.jmol.util.Escape']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bridge");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAntiparallel'],'O',['a','org.jmol.modelset.Atom','+b','ladder','int[][]']]]

Clazz.newMeth(C$, 'c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$java_util_Map', function (a, b, htLadders) {
;C$.$init$.apply(this);
this.a=a;
this.b=b;
this.ladder=Clazz.array(Integer.TYPE, [2, 2]);
this.ladder[0][0]=this.ladder[0][1]=Math.min(a.i, b.i);
this.ladder[1][0]=this.ladder[1][1]=Math.max(a.i, b.i);
p$1.addLadder$java_util_Map.apply(this, [htLadders]);
}, 1);

Clazz.newMeth(C$, 'addBridge$org_jmol_dssx_Bridge$java_util_Map', function (bridge, htLadders) {
if (bridge.isAntiparallel != this.isAntiparallel  || !p$1.canAdd$org_jmol_dssx_Bridge.apply(this, [bridge])  || !p$1.canAdd$org_jmol_dssx_Bridge.apply(bridge, [this]) ) return false;
p$1.extendLadder$I$I.apply(this, [bridge.ladder[0][0], bridge.ladder[1][0]]);
p$1.extendLadder$I$I.apply(this, [bridge.ladder[0][1], bridge.ladder[1][1]]);
bridge.ladder=this.ladder;
if (bridge.ladder !== this.ladder ) {
htLadders.remove$O(bridge.ladder);
p$1.addLadder$java_util_Map.apply(this, [htLadders]);
}return true;
});

Clazz.newMeth(C$, 'addLadder$java_util_Map', function (htLadders) {
htLadders.put$O$O(this.ladder, (this.isAntiparallel ? Boolean.TRUE : Boolean.FALSE));
}, p$1);

Clazz.newMeth(C$, 'canAdd$org_jmol_dssx_Bridge', function (bridge) {
var index1=bridge.a.i;
var index2=bridge.b.i;
return (this.isAntiparallel ? (index1 >= this.ladder[0][1] && index2 <= this.ladder[1][0]  || index1 <= this.ladder[0][0] && index2 >= this.ladder[1][1]  ) : (index1 <= this.ladder[0][0] && index2 <= this.ladder[1][0]  || index1 >= this.ladder[0][1] && index2 >= this.ladder[1][1]  ));
}, p$1);

Clazz.newMeth(C$, 'extendLadder$I$I', function (index1, index2) {
if (this.ladder[0][0] > index1) this.ladder[0][0]=index1;
if (this.ladder[0][1] < index1) this.ladder[0][1]=index1;
if (this.ladder[1][0] > index2) this.ladder[1][0]=index2;
if (this.ladder[1][1] < index2) this.ladder[1][1]=index2;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return (this.isAntiparallel ? "a " : "p ") + this.a + " - " + this.b + "\t" + $I$(1).e$O(this.ladder) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
