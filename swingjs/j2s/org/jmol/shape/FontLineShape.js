(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[[0,'org.jmol.modelset.TickInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FontLineShape", null, 'org.jmol.shape.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tickInfos=Clazz.array($I$(1), [4]);
},1);

C$.$fields$=[['O',['tickInfos','org.jmol.modelset.TickInfo[]','font3d','org.jmol.util.Font']]]

Clazz.newMeth(C$, 'initShape$', function () {
this.translucentAllowed=false;
});

Clazz.newMeth(C$, 'setPropFLS$S$O', function (propertyName, value) {
if ("tickInfo" == propertyName) {
var t=value;
if (t.ticks == null ) {
if (t.type.equals$O(" ")) this.tickInfos[0]=this.tickInfos[1]=this.tickInfos[2]=this.tickInfos[3]=null;
 else this.tickInfos["xyz".indexOf$S(t.type) + 1]=null;
return;
}this.tickInfos["xyz".indexOf$S(t.type) + 1]=t;
return;
}if ("font" == propertyName) {
this.font3d=value;
return;
}});

Clazz.newMeth(C$, 'getShapeState$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:20 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
