(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'jalview.datamodel.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequencePoint");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.coord=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$jalview_datamodel_Point', function (sequence, pt) {
C$.$init$.apply(this);
this.sequence=sequence;
this.coord=pt;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceI$FA', function (sequence, coords) {
C$.c$$jalview_datamodel_SequenceI$jalview_datamodel_Point.apply(this, [sequence, Clazz.new_($I$(1).c$$F$F$F,[coords[0], coords[1], coords[2]])]);
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'translate$F$F$F', function (x, y, z) {
this.coord=Clazz.new_($I$(1).c$$F$F$F,[this.coord.x + x, this.coord.y + y, this.coord.z + z]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.sequence.getName$() + " " + this.coord.toString() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
