(function(){var P$=Clazz.newPackage("org.jmol.scriptext"),I$=[[0,'javajs.util.AU','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScriptExt");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
this.e=null;
this.chk=false;
this.st=null;
this.slen=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'init$O', function (eval) {
this.e=eval;
this.vwr=this.e.vwr;
return this;
});

Clazz.newMeth(C$, 'atomExpressionAt$I', function (i) {
return this.e.atomExpressionAt$I(i);
});

Clazz.newMeth(C$, 'checkLength$I', function (i) {
this.e.checkLength$I(i);
});

Clazz.newMeth(C$, 'error$I', function (err) {
this.e.error$I(err);
});

Clazz.newMeth(C$, 'invArg$', function () {
this.e.invArg$();
});

Clazz.newMeth(C$, 'invPO$', function () {
this.error$I(23);
});

Clazz.newMeth(C$, 'getShapeProperty$I$S', function (shapeType, propertyName) {
return this.e.getShapeProperty$I$S(shapeType, propertyName);
});

Clazz.newMeth(C$, 'paramAsStr$I', function (i) {
return this.e.paramAsStr$I(i);
});

Clazz.newMeth(C$, 'centerParameter$I', function (i) {
return this.e.centerParameter$I$OA(i, null);
});

Clazz.newMeth(C$, 'floatParameter$I', function (i) {
return this.e.floatParameter$I(i);
});

Clazz.newMeth(C$, 'getPoint3f$I$Z', function (i, allowFractional) {
return this.e.getPoint3f$I$Z$Z(i, allowFractional, true);
});

Clazz.newMeth(C$, 'intParameter$I', function (index) {
return this.e.intParameter$I(index);
});

Clazz.newMeth(C$, 'isFloatParameter$I', function (index) {
switch (this.e.tokAt$I(index)) {
case 2:
case 3:
return true;
}
return false;
});

Clazz.newMeth(C$, 'setShapeProperty$I$S$O', function (shapeType, propertyName, propertyValue) {
this.e.setShapeProperty$I$S$O(shapeType, propertyName, propertyValue);
});

Clazz.newMeth(C$, 'showString$S', function (s) {
this.e.showString$S(s);
});

Clazz.newMeth(C$, 'stringParameter$I', function (index) {
return this.e.stringParameter$I(index);
});

Clazz.newMeth(C$, 'getToken$I', function (i) {
return this.e.getToken$I(i);
});

Clazz.newMeth(C$, 'tokAt$I', function (i) {
return this.e.tokAt$I(i);
});

Clazz.newMeth(C$, 'setShapeId$I$I$Z', function (iShape, i, idSeen) {
if (idSeen) this.invArg$();
var name=this.e.setShapeNameParameter$I(i).toLowerCase$();
this.setShapeProperty$I$S$O(iShape, "thisID", name);
return name;
});

Clazz.newMeth(C$, 'getColorTrans$org_jmol_script_ScriptEval$I$Z$IA', function (eval, i, allowNone, ret) {
var translucentLevel=3.4028235E38;
if (eval.theTok != 1765808134) --i;
switch (this.tokAt$I(i + 1)) {
case 603979967:
i++;
translucentLevel=(this.isFloatParameter$I(i + 1) ? eval.getTranslucentLevel$I(++i) : this.vwr.getFloat$I(570425354));
break;
case 1073742074:
i++;
translucentLevel=0;
break;
}
if (eval.isColorParam$I(i + 1)) {
ret[0]=eval.getArgbParam$I(++i);
} else if (this.tokAt$I(i + 1) == 1073742333) {
ret[0]=0;
eval.iToken=i + 1;
} else if (translucentLevel == 3.4028235E38 ) {
this.invArg$();
} else {
ret[0]=-2147483648;
}i=eval.iToken;
return translucentLevel;
});

Clazz.newMeth(C$, 'finalizeObject$I$I$F$I$Z$O$I$javajs_util_BS', function (shapeID, colorArgb, translucentLevel, intScale, doSet, data, iptDisplayProperty, bs) {
if (doSet) {
this.setShapeProperty$I$S$O(shapeID, "set", data);
}if (colorArgb != -2147483648) this.e.setShapePropertyBs$I$S$O$javajs_util_BS(shapeID, "color", Integer.valueOf$I(colorArgb), bs);
if (translucentLevel != 3.4028235E38 ) this.e.setShapeTranslucency$I$S$S$F$javajs_util_BS(shapeID, "", "translucent", translucentLevel, bs);
if (intScale != 0) {
this.setShapeProperty$I$S$O(shapeID, "scale", Integer.valueOf$I(intScale));
}if (iptDisplayProperty > 0) {
if (!this.e.setMeshDisplayProperty$I$I$I(shapeID, iptDisplayProperty, 0)) this.invArg$();
}});

Clazz.newMeth(C$, 'getIntArray2$I', function (i) {
var list=(this.e.getToken$I(i)).getList$();
var faces=$I$(1).newInt2$I(list.size$());
for (var vi=faces.length; --vi >= 0; ) {
var face=list.get$I(vi).getList$();
if (face == null ) this.invArg$();
faces[vi]=Clazz.array(Integer.TYPE, [face.size$()]);
for (var vii=faces[vi].length; --vii >= 0; ) faces[vi][vii]=face.get$I(vii).intValue;

}
return faces;
});

Clazz.newMeth(C$, 'getAllPoints$I', function (index) {
var points=null;
var bs=null;
try {
switch (this.e.tokAt$I(index)) {
case 7:
points=this.e.getPointArray$I$I$Z(index, -1, false);
break;
case 12290:
case 10:
case 1073742325:
bs=this.atomExpressionAt$I(index);
break;
}
if (points == null ) {
if (bs == null ) bs=this.vwr.getAllAtoms$();
points=Clazz.array($I$(2), [bs.cardinality$()]);
for (var i=bs.nextSetBit$I(0), pt=0; i >= 0; i=bs.nextSetBit$I(i + 1)) points[pt++]=this.vwr.ms.at[i];

}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (points.length < 3) this.invArg$();
return points;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-16 07:18:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
