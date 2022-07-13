(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequencePoint");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sequence','jalview.datamodel.SequenceI','coord','jalview.datamodel.Point']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_Point',  function (sequence, pt) {
;C$.$init$.apply(this);
this.sequence=sequence;
this.coord=pt;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$FA',  function (sequence, coords) {
C$.c$$jalview_datamodel_SequenceI$jalview_datamodel_Point.apply(this, [sequence, Clazz.new_($I$(1,1).c$$F$F$F,[coords[0], coords[1], coords[2]])]);
}, 1);

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'translate$F$F$F',  function (x, y, z) {
this.coord=Clazz.new_($I$(1,1).c$$F$F$F,[this.coord.x + x, this.coord.y + y, this.coord.z + z]);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.sequence.getName$() + " " + this.coord.toString() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
