(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.naView"),I$=[[0,'fr.orsay.lri.varna.models.naView.Loop','fr.orsay.lri.varna.models.naView.Region']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Connection");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.loop=Clazz.new_($I$(1,1));
this.region=Clazz.new_($I$(2,1));
this._isNull=false;
},1);

C$.$fields$=[['Z',['extruded','broken','_isNull'],'D',['xrad','yrad','angle'],'I',['start','end'],'O',['loop','fr.orsay.lri.varna.models.naView.Loop','region','fr.orsay.lri.varna.models.naView.Region']]]

Clazz.newMeth(C$, 'isNull$', function () {
return this._isNull;
});

Clazz.newMeth(C$, 'setNull$Z', function (isNull) {
this._isNull=isNull;
});

Clazz.newMeth(C$, 'getLoop$', function () {
return this.loop;
});

Clazz.newMeth(C$, 'setLoop$fr_orsay_lri_varna_models_naView_Loop', function (loop) {
this.loop=loop;
});

Clazz.newMeth(C$, 'getRegion$', function () {
return this.region;
});

Clazz.newMeth(C$, 'setRegion$fr_orsay_lri_varna_models_naView_Region', function (region) {
this.region=region;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (start) {
this.start=start;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (end) {
this.end=end;
});

Clazz.newMeth(C$, 'getXrad$', function () {
return this.xrad;
});

Clazz.newMeth(C$, 'setXrad$D', function (xrad) {
this.xrad=xrad;
});

Clazz.newMeth(C$, 'getYrad$', function () {
return this.yrad;
});

Clazz.newMeth(C$, 'setYrad$D', function (yrad) {
this.yrad=yrad;
});

Clazz.newMeth(C$, 'getAngle$', function () {
return this.angle;
});

Clazz.newMeth(C$, 'setAngle$D', function (angle) {
this.angle=angle;
});

Clazz.newMeth(C$, 'isExtruded$', function () {
return this.extruded;
});

Clazz.newMeth(C$, 'setExtruded$Z', function (extruded) {
this.extruded=extruded;
});

Clazz.newMeth(C$, 'isBroken$', function () {
return this.broken;
});

Clazz.newMeth(C$, 'setBroken$Z', function (broken) {
this.broken=broken;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
