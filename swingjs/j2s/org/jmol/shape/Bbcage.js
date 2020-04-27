(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Bbcage", null, 'org.jmol.shape.FontLineShape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isVisible']]]

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
this.setPropFLS$S$O(propertyName, value);
});

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.font3d=this.vwr.gdata.getFont3D$F(16);
this.myType="boundBox";
});

Clazz.newMeth(C$, 'setModelVisibilityFlags$javajs_util_BS', function (bs) {
var bboxModels;
this.isVisible=(this.vwr.getShowBbcage$() && ((bboxModels=this.vwr.ms.bboxModels) == null  || bs.intersects$javajs_util_BS(bboxModels) ) );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
