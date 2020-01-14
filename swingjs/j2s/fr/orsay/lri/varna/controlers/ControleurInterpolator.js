(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.controlers"),p$1={},p$2={},I$=[[0,'java.util.LinkedList',['fr.orsay.lri.varna.controlers.ControleurInterpolator','.Targets'],['fr.orsay.lri.varna.controlers.ControleurInterpolator','.TargetsHolder'],'fr.orsay.lri.varna.models.rna.Mapping',['java.awt.geom.Point2D','.Double'],'java.util.Vector','java.util.Arrays',['fr.orsay.lri.varna.controlers.ControleurInterpolator','.MinimizeRMSD'],'javax.swing.Timer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ControleurInterpolator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Thread', 'java.awt.event.ActionListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vpn=null;
this._numSteps=0;
this._timeDelay=0;
this._running=false;
this._d=null;
this._step=0;
this._firstHalf=false;
this._loop=null;
this._end=null;
this.mode=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._numSteps=25;
this._timeDelay=2 ||15;
this._running=false;
this._d=Clazz.new_($I$(2), [this, null]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vpn) {
Clazz.super_(C$, this,1);
this._vpn=vpn;
}, 1);

Clazz.newMeth(C$, 'addTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping', function (target, mapping) {
this.addTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping(target, null, mapping);
});

Clazz.newMeth(C$, 'addTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping', function (target, conf, mapping) {
this._d.add$fr_orsay_lri_varna_controlers_ControleurInterpolator_TargetsHolder(Clazz.new_($I$(3).c$$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping, [this, null, target, conf, mapping]));
});

Clazz.newMeth(C$, 'addTarget$fr_orsay_lri_varna_models_rna_RNA', function (target) {
this.addTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping(target, null, $I$(4).DefaultOutermostMapping$I$I(this._vpn.getRNA$().get_listeBases$().size$(), target.get_listeBases$().size$()));
});

Clazz.newMeth(C$, 'isInterpolationInProgress$', function () {
return this._running;
});

Clazz.newMeth(C$, 'computeDestination$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$I$I$java_awt_geom_Point2D$java_awt_geom_Point2D', function (pli, pri, pi, i, n, plf, prf) {
var plm=Clazz.new_($I$(5).c$$D$D,[(pli.getX$() + plf.getX$()) / 2.0, (pli.getY$() + plf.getY$()) / 2.0]);
var prm=Clazz.new_($I$(5).c$$D$D,[(pri.getX$() + prf.getX$()) / 2.0, (pri.getY$() + prf.getY$()) / 2.0]);
var pm=Clazz.new_($I$(5).c$$D$D,[((n - i) * plm.getX$() + i * prm.getX$()) / n, ((n - i) * plm.getY$() + i * prm.getY$()) / n]);
var v=Clazz.new_($I$(5).c$$D$D,[pm.getX$() - pi.getX$(), pm.getY$() - pi.getY$()]);
var pf=Clazz.new_($I$(5).c$$D$D,[pi.getX$() + 2.0 * v.getX$(), pi.getY$() + 2.0 * v.getY$()]);
return pf;
}, p$2);

Clazz.newMeth(C$, 'clusterIndices$I$IA', function (numIndices, mappedIndices) {
var indices=Clazz.array(Integer.TYPE, [numIndices]);
for (var i=0; i < numIndices; i++) {
indices[i]=i;
}
return p$2.clusterIndices$IA$IA.apply(this, [indices, mappedIndices]);
}, p$2);

Clazz.newMeth(C$, 'clusterIndices$IA$IA', function (indices, mappedIndices) {
if ((mappedIndices.length == 0) || (indices.length == 0) ) {
throw Clazz.new_(Clazz.load('fr.orsay.lri.varna.exceptions.MappingException').c$$S,["Mapping Error: Cannot cluster indices in an empty mapping"]);
}var res=Clazz.new_($I$(6));
$I$(7).sort$IA(indices);
$I$(7).sort$IA(mappedIndices);
var i;
var j=0;
var k;
var tmp=Clazz.new_($I$(6));
for (i=0; (i < indices.length) && (j < mappedIndices.length) ; i++) {
if (indices[i] == mappedIndices[j]) {
res.add$TE(tmp);
tmp=Clazz.new_($I$(6));
tmp.add$TE(new Integer(indices[i]));
res.add$TE(tmp);
tmp=Clazz.new_($I$(6));
j++;
} else {
tmp.add$TE(new Integer(indices[i]));
}}
k=i;
for (i=k; (i < indices.length); i++) {
tmp.add$TE(new Integer(indices[i]));
}
res.add$TE(tmp);
return res;
}, p$2);

Clazz.newMeth(C$, 'run$', function () {
while (true){
var d=this._d.get$();
this._running=true;
try {
this.nextTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping(d.target, d.conf, d.mapping);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$O(e);
e.printStackTrace$();
} else {
throw e;
}
}
this._running=false;

break;
}
});

Clazz.newMeth(C$, 'computeCentroid$java_util_ArrayList$IA', function (rnaBases, indexes) {
var centroidX=0;
var centroidY=0;
for (var i=0; i < indexes.length; i++) {
var index=indexes[i];
var coords=rnaBases.get$I(index).getCoords$();
centroidX += coords.getX$();
centroidY += coords.getY$();
}
centroidX /= indexes.length;
centroidY /= indexes.length;
return Clazz.new_($I$(5).c$$D$D,[centroidX, centroidY]);
}, 1);

Clazz.newMeth(C$, 'minimizeRotateRMSD$DA$DA$DA$DA', function (X1, Y1, X2, Y2) {
var minimizer=Clazz.new_($I$(8).c$$DA$DA$DA$DA,[X1, Y1, X2, Y2]);
return minimizer.computeOptimalTheta$();
}, 1);

Clazz.newMeth(C$, 'moveNearOtherRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping', function (rna1, rna2, mapping) {
var rna1MappedElems=mapping.getSourceElems$();
var rna2MappedElems=mapping.getTargetElems$();
var rna1Bases=rna1.get_listeBases$();
var rna2Bases=rna2.get_listeBases$();
var n=rna1MappedElems.length;
if (n < 2) return;
var rna1MappedElemsCentroid=C$.computeCentroid$java_util_ArrayList$IA(rna1Bases, rna1MappedElems);
var rna2MappedElemsCentroid=C$.computeCentroid$java_util_ArrayList$IA(rna2Bases, rna2MappedElems);
var X1=Clazz.array(Double.TYPE, [rna1MappedElems.length]);
var Y1=Clazz.array(Double.TYPE, [rna1MappedElems.length]);
var X2=Clazz.array(Double.TYPE, [rna2MappedElems.length]);
var Y2=Clazz.array(Double.TYPE, [rna2MappedElems.length]);
for (var i=0; i < rna1MappedElems.length; i++) {
var base1Index=rna1MappedElems[i];
var coords1=rna1Bases.get$I(base1Index).getCoords$();
X1[i]=coords1.x - rna1MappedElemsCentroid.x;
Y1[i]=coords1.y - rna1MappedElemsCentroid.y;
var coords2=rna2Bases.get$I(mapping.getPartner$I(base1Index)).getCoords$();
X2[i]=coords2.x - rna2MappedElemsCentroid.x;
Y2[i]=coords2.y - rna2MappedElemsCentroid.y;
}
var theta=C$.minimizeRotateRMSD$DA$DA$DA$DA(X1, Y1, X2, Y2);
rna2.globalRotation$Double(new Double(theta * 180.0 / 3.141592653589793));
}, 1);

Clazz.newMeth(C$, 'nextTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping', function (_target, _conf, _mapping) {
this.nextTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping$Z(_target, _conf, _mapping, false);
});

Clazz.newMeth(C$, 'nextTarget$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping$Z', function (_target, _conf, _mapping, moveTarget) {
this._end=((P$.ControleurInterpolator$1||
(function(){var C$=Clazz.newClass(P$, "ControleurInterpolator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._vpn.showRNA$fr_orsay_lri_varna_models_rna_RNA(this.$finals$._target);
this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._vpn.repaint$();
});
})()
), Clazz.new_(P$.ControleurInterpolator$1.$init$, [this, {_target: _target}]));
try {
var source=this._vpn.getRNA$();
if (moveTarget) C$.moveNearOtherRNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_rna_Mapping(source, _target, _mapping);
if (source.getSize$() != 0 && _target.getSize$() != 0 ) {
var currBases=source.get_listeBases$();
var destBases=_target.get_listeBases$();
var intArrSource=Clazz.new_($I$(6));
var intArrTarget=Clazz.new_($I$(6));
intArrSource=p$2.clusterIndices$I$IA.apply(this, [currBases.size$(), _mapping.getSourceElems$()]);
intArrTarget=p$2.clusterIndices$I$IA.apply(this, [destBases.size$(), _mapping.getTargetElems$()]);
var initPosSource=Clazz.array($I$(5), [currBases.size$()]);
var finalPosTarget=Clazz.array($I$(5), [destBases.size$()]);
for (var i=0; i < currBases.size$(); i++) {
var tmp=currBases.get$I(i).getCoords$();
initPosSource[i]=Clazz.new_($I$(5).c$$D$D,[tmp.getX$(), tmp.getY$()]);
}
for (var i=0; i < destBases.size$(); i++) {
var tmp=destBases.get$I(i).getCoords$();
finalPosTarget[i]=Clazz.new_($I$(5).c$$D$D,[tmp.getX$(), tmp.getY$()]);
}
var finalPosSource=Clazz.array($I$(5), [initPosSource.length]);
var initPosTarget=Clazz.array($I$(5), [finalPosTarget.length]);
for (var i=0; i < finalPosSource.length; i++) {
if (_mapping.getPartner$I(i) != -1) {
var dest;
dest=finalPosTarget[_mapping.getPartner$I(i)];
finalPosSource[i]=Clazz.new_($I$(5).c$$D$D,[dest.getX$(), dest.getY$()]);
}}
for (var i=0; i < intArrSource.size$(); i+=2) {
var matchedNeighborLeft;
var matchedNeighborRight;
if (i == 0) {
matchedNeighborLeft=(intArrSource.get$I(1).get$I(0)).intValue$();
matchedNeighborRight=(intArrSource.get$I(1).get$I(0)).intValue$();
} else if (i == intArrSource.size$() - 1) {
matchedNeighborLeft=(intArrSource.get$I(intArrSource.size$() - 2).get$I(0)).intValue$();
matchedNeighborRight=(intArrSource.get$I(intArrSource.size$() - 2).get$I(0)).intValue$();
} else {
matchedNeighborLeft=(intArrSource.get$I(i - 1).get$I(0)).intValue$();
matchedNeighborRight=(intArrSource.get$I(i + 1).get$I(0)).intValue$();
}var v=intArrSource.get$I(i);
for (var j=0; j < v.size$(); j++) {
var index=(v.get$I(j)).intValue$();
finalPosSource[index]=p$2.computeDestination$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$I$I$java_awt_geom_Point2D$java_awt_geom_Point2D.apply(this, [initPosSource[matchedNeighborLeft], initPosSource[matchedNeighborRight], initPosSource[index], j + 1, v.size$() + 1, finalPosSource[matchedNeighborLeft], finalPosSource[matchedNeighborRight]]);
}
}
for (var i=0; i < initPosTarget.length; i++) {
if (_mapping.getAncestor$I(i) != -1) {
var dest;
dest=initPosSource[_mapping.getAncestor$I(i)];
initPosTarget[i]=Clazz.new_($I$(5).c$$D$D,[dest.getX$(), dest.getY$()]);
}}
for (var i=0; i < intArrTarget.size$(); i+=2) {
var matchedNeighborLeft;
var matchedNeighborRight;
if (i == 0) {
matchedNeighborLeft=(intArrTarget.get$I(1).get$I(0)).intValue$();
matchedNeighborRight=(intArrTarget.get$I(1).get$I(0)).intValue$();
} else if (i == intArrTarget.size$() - 1) {
matchedNeighborLeft=(intArrTarget.get$I(intArrTarget.size$() - 2).get$I(0)).intValue$();
matchedNeighborRight=(intArrTarget.get$I(intArrTarget.size$() - 2).get$I(0)).intValue$();
} else {
matchedNeighborLeft=(intArrTarget.get$I(i - 1).get$I(0)).intValue$();
matchedNeighborRight=(intArrTarget.get$I(i + 1).get$I(0)).intValue$();
}var v=intArrTarget.get$I(i);
for (var j=0; j < v.size$(); j++) {
var index=(v.get$I(j)).intValue$();
initPosTarget[index]=p$2.computeDestination$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$I$I$java_awt_geom_Point2D$java_awt_geom_Point2D.apply(this, [finalPosTarget[matchedNeighborLeft], finalPosTarget[matchedNeighborRight], finalPosTarget[index], j + 1, v.size$() + 1, initPosTarget[matchedNeighborLeft], initPosTarget[matchedNeighborRight]]);
}
}
this.mode=0;
this._loop=((P$.ControleurInterpolator$2||
(function(){var C$=Clazz.newClass(P$, "ControleurInterpolator$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var i=this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._step;
var current=(this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._firstHalf ? this.$finals$.source : this.$finals$._target);
if (i == (this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._numSteps/2|0)) {
this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._vpn.showRNA$fr_orsay_lri_varna_models_rna_RNA(this.$finals$._target);
current=this.$finals$._target;
this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._firstHalf=false;
if (this.$finals$._conf != null ) {
this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._vpn.setConfig$fr_orsay_lri_varna_models_VARNAConfig(this.$finals$._conf);
}for (var j=0; j < this.$finals$.initPosSource.length; j++) {
this.$finals$.source.setCoord$I$java_awt_geom_Point2D_Double(j, this.$finals$.initPosSource[j]);
}
}var currBases=current.get_listeBases$();
for (var j=0; j < currBases.size$(); j++) {
var m=currBases.get$I(j);
var mpc;
var mnc;
if (this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._firstHalf) {
mpc=this.$finals$.initPosSource[j];
mnc=this.$finals$.finalPosSource[j];
} else {
mpc=this.$finals$.initPosTarget[j];
mnc=this.$finals$.finalPosTarget[j];
}m.setCoords$java_awt_geom_Point2D_Double(Clazz.new_($I$(5).c$$D$D,[((this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._numSteps - 1 - i ) * mpc.getX$() + (i) * mnc.getX$()) / (this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._numSteps - 1), ((this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._numSteps - 1 - i ) * mpc.getY$() + i * mnc.getY$()) / (this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._numSteps - 1)]));
}
this.b$['fr.orsay.lri.varna.controlers.ControleurInterpolator']._vpn.repaint$();
});
})()
), Clazz.new_(P$.ControleurInterpolator$2.$init$, [this, {source: source, _target: _target, _conf: _conf, initPosSource: initPosSource, finalPosSource: finalPosSource, initPosTarget: initPosTarget, finalPosTarget: finalPosTarget}]));
this.actionPerformed$java_awt_event_ActionEvent(null);
} else {
this._end.run$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.MappingException")){
var e = e$$;
{
e.printStackTrace$();
this._end.run$();
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
this._end.run$();
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
p$2.runAnimation.apply(this, []);
});

Clazz.newMeth(C$, 'runAnimation', function () {
switch (this.mode) {
case 0:
this._firstHalf=true;
this._step=0;
this.mode=1;
case 1:
if (this._step < this._numSteps) {
this._loop.run$();
++this._step;
break;
}this.mode=2;
case 2:
this._end.run$();
return;
}
var t=Clazz.new_($I$(9).c$$I$java_awt_event_ActionListener,[(this._timeDelay|0), this]);
t.setRepeats$Z(false);
t.start$();
}, p$2);
;
(function(){var C$=Clazz.newClass(P$.ControleurInterpolator, "MinimizeRMSD", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.X1=null;
this.X2=null;
this.Y1=null;
this.Y2=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$DA$DA', function (X1, Y1, X2, Y2) {
C$.$init$.apply(this);
this.X1=X1;
this.X2=X2;
this.Y1=Y1;
this.Y2=Y2;
}, 1);

Clazz.newMeth(C$, 'f$D', function (theta) {
var cos_theta=Math.cos(theta);
var sin_theta=Math.sin(theta);
var n=this.X1.length;
var sum=0;
for (var i=0; i < n; i++) {
var dsx=this.X2[i] * cos_theta - this.Y2[i] * sin_theta - this.X1[i];
var dsy=this.X2[i] * sin_theta + this.Y2[i] * cos_theta - this.Y1[i];
sum=sum + dsx * dsx + dsy * dsy;
}
return sum;
}, p$1);

Clazz.newMeth(C$, 'fprime$D', function (theta) {
var cos_theta=Math.cos(theta);
var sin_theta=Math.sin(theta);
var n=this.X1.length;
var sum=0;
for (var i=0; i < n; i++) {
sum=sum + (this.X1[i] * this.X2[i] + this.Y1[i] * this.Y2[i]) * sin_theta + (this.X1[i] * this.Y2[i] - this.X2[i] * this.Y1[i]) * cos_theta;
}
return sum;
}, p$1);

Clazz.newMeth(C$, 'fsecond$D', function (theta) {
var cos_theta=Math.cos(theta);
var sin_theta=Math.sin(theta);
var n=this.X1.length;
var sum=0;
for (var i=0; i < n; i++) {
sum=sum + (this.X1[i] * this.X2[i] + this.Y1[i] * this.Y2[i]) * cos_theta + (this.X2[i] * this.Y1[i] - this.X1[i] * this.Y2[i]) * sin_theta;
}
return sum;
}, p$1);

Clazz.newMeth(C$, 'computeOptimalTheta$', function () {
var epsilon=1.0E-5;
var x_n=0;
var numsteps=0;
var maxnumsteps=100;
var x_n_plus_1;
var result;
while (true){
numsteps=numsteps + 1;
var d=p$1.fsecond$D.apply(this, [x_n]);
if (d == 0 ) {
x_n_plus_1=x_n + 1.0E-5 * (Math.random() - 0.5);
} else {
x_n_plus_1=x_n - p$1.fprime$D.apply(this, [x_n]) / p$1.fsecond$D.apply(this, [x_n]);
if (Math.abs(x_n_plus_1 - x_n) < 1.0E-5 ) {
result=x_n_plus_1;
break;
}}if (numsteps >= 100) {
result=x_n_plus_1;
break;
}x_n=x_n_plus_1;
}
if (p$1.f$D.apply(this, [result + 3.141592653589793]) < p$1.f$D.apply(this, [result]) ) {
result=result + 3.141592653589793;
}return result;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurInterpolator, "TargetsHolder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.target=null;
this.conf=null;
this.mapping=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_models_rna_RNA$fr_orsay_lri_varna_models_VARNAConfig$fr_orsay_lri_varna_models_rna_Mapping', function (t, c, m) {
C$.$init$.apply(this);
this.target=t;
this.conf=c;
this.mapping=m;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ControleurInterpolator, "Targets", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._d=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._d=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$fr_orsay_lri_varna_controlers_ControleurInterpolator_TargetsHolder', function (d) {
this._d.addLast$TE(d);
var interpolator=this.this$0;
{
interpolator.run$();
}
});

Clazz.newMeth(C$, 'get$', function () {
{

}
var x=this._d.getLast$();
this._d.clear$();
return x;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:44 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
