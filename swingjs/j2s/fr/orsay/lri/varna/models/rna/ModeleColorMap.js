(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'fr.orsay.lri.varna.models.rna.ModeleColorMap','java.awt.Color','java.util.Vector','java.util.Arrays',['fr.orsay.lri.varna.models.rna.ModeleColorMap','.NamedColorMapTypes'],'java.util.Formatter']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModeleColorMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['Cloneable', 'java.io.Serializable']);
C$.$classes$=[['NamedColorMapTypes',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_map','java.util.Vector','+_values']]
,['O',['DEFAULT_COLOR','java.awt.Color']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_Vector$java_util_Vector.apply(this, [Clazz.new_($I$(3,1)), Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector$java_util_Vector', function (map, values) {
;C$.$init$.apply(this);
this._map=map;
this._values=values;
}, 1);

Clazz.newMeth(C$, 'addColor$D$java_awt_Color', function (val, col) {
var offset=$I$(4,"binarySearch$OA$O",[this._values.toArray$(), new Double(val)]);
if (offset < 0) {
var inspoint=(-offset) - 1;
this._map.insertElementAt$O$I(col, inspoint);
this._values.insertElementAt$O$I(new Double(val), inspoint);
}});

Clazz.newMeth(C$, 'getMinValue$', function () {
if (this._values.size$() > 0) return (this._values.get$I(0)).valueOf();
return 0.0;
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
if (this._values.size$() > 0) return (this._values.get$I(this._values.size$() - 1)).valueOf();
return 0.0;
});

Clazz.newMeth(C$, 'getMinColor$', function () {
if (this._map.size$() > 0) return this._map.get$I(0);
return C$.DEFAULT_COLOR;
});

Clazz.newMeth(C$, 'getMaxColor$', function () {
if (this._map.size$() > 0) return this._map.get$I(this._map.size$() - 1);
return C$.DEFAULT_COLOR;
});

Clazz.newMeth(C$, 'getNumColors$', function () {
return (this._map.size$());
});

Clazz.newMeth(C$, 'getColorAt$I', function (i) {
return (this._map.get$I(i));
});

Clazz.newMeth(C$, 'getValueAt$I', function (i) {
return (this._values.get$I(i));
});

Clazz.newMeth(C$, 'getColorForValue$D', function (val) {
var result;
if (val <= this.getMinValue$() ) {
result=this.getMinColor$();
} else if (val >= this.getMaxValue$() ) {
result=this.getMaxColor$();
} else {
var offset=$I$(4,"binarySearch$OA$O",[this._values.toArray$(), new Double(val)]);
if (offset >= 0) {
result=this._map.get$I(offset);
} else {
var inspoint=(-offset) - 1;
var c1=this._map.get$I(inspoint);
var v1=(this._values.get$I(inspoint)).valueOf();
if (inspoint > 0) {
var c2=this._map.get$I(inspoint - 1);
var v2=(this._values.get$I(inspoint - 1)).valueOf();
var blendCoeff=(v2 - val) / (v2 - v1);
result=Clazz.new_([((blendCoeff * c1.getRed$() + (1.0 - blendCoeff) * c2.getRed$())|0), ((blendCoeff * c1.getGreen$() + (1.0 - blendCoeff) * c2.getGreen$())|0), ((blendCoeff * c1.getBlue$() + (1.0 - blendCoeff) * c2.getBlue$())|0)],$I$(2,1).c$$I$I$I);
} else {
result=c1;
}}}return result;
});

Clazz.newMeth(C$, 'energyColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(1.0, Clazz.new_($I$(2,1).c$$I$I$I,[128, 50, 50]).brighter$());
cm.addColor$D$java_awt_Color(0.9, Clazz.new_($I$(2,1).c$$I$I$I,[255, 50, 50]).brighter$());
cm.addColor$D$java_awt_Color(0.65, Clazz.new_($I$(2,1).c$$I$I$I,[255, 255, 50]).brighter$());
cm.addColor$D$java_awt_Color(0.55, Clazz.new_($I$(2,1).c$$I$I$I,[20, 255, 50]).brighter$());
cm.addColor$D$java_awt_Color(0.2, Clazz.new_($I$(2,1).c$$I$I$I,[50, 50, 255]).brighter$());
cm.addColor$D$java_awt_Color(0.0, Clazz.new_($I$(2,1).c$$I$I$I,[50, 50, 128]).brighter$());
return cm;
}, 1);

Clazz.newMeth(C$, 'viennaColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, Clazz.new_($I$(2,1).c$$I$I$I,[0, 80, 220]));
cm.addColor$D$java_awt_Color(0.1, Clazz.new_($I$(2,1).c$$I$I$I,[0, 139, 220]));
cm.addColor$D$java_awt_Color(0.2, Clazz.new_($I$(2,1).c$$I$I$I,[0, 220, 218]));
cm.addColor$D$java_awt_Color(0.3, Clazz.new_($I$(2,1).c$$I$I$I,[0, 220, 123]));
cm.addColor$D$java_awt_Color(0.4, Clazz.new_($I$(2,1).c$$I$I$I,[0, 220, 49]));
cm.addColor$D$java_awt_Color(0.5, Clazz.new_($I$(2,1).c$$I$I$I,[34, 220, 0]));
cm.addColor$D$java_awt_Color(0.6, Clazz.new_($I$(2,1).c$$I$I$I,[109, 220, 0]));
cm.addColor$D$java_awt_Color(0.7, Clazz.new_($I$(2,1).c$$I$I$I,[199, 220, 0]));
cm.addColor$D$java_awt_Color(0.8, Clazz.new_($I$(2,1).c$$I$I$I,[220, 165, 0]));
cm.addColor$D$java_awt_Color(0.9, Clazz.new_($I$(2,1).c$$I$I$I,[220, 86, 0]));
cm.addColor$D$java_awt_Color(1.0, Clazz.new_($I$(2,1).c$$I$I$I,[220, 0, 0]));
return cm;
}, 1);

Clazz.newMeth(C$, 'bwColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, $I$(2).white);
cm.addColor$D$java_awt_Color(1.0, $I$(2).gray.darker$());
return cm;
}, 1);

Clazz.newMeth(C$, 'greenColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, $I$(2).gray.brighter$().brighter$());
cm.addColor$D$java_awt_Color(1.0, $I$(2).green.darker$());
return cm;
}, 1);

Clazz.newMeth(C$, 'blueColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, $I$(2).gray.brighter$().brighter$());
cm.addColor$D$java_awt_Color(1.0, $I$(2).blue);
return cm;
}, 1);

Clazz.newMeth(C$, 'redColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, $I$(2).gray.brighter$().brighter$());
cm.addColor$D$java_awt_Color(1.0, $I$(2).red);
return cm;
}, 1);

Clazz.newMeth(C$, 'heatColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, $I$(2).yellow);
cm.addColor$D$java_awt_Color(1.0, $I$(2).red);
return cm;
}, 1);

Clazz.newMeth(C$, 'rockNRollColorMap$', function () {
var cm=Clazz.new_(C$);
cm.addColor$D$java_awt_Color(0.0, $I$(2).red.brighter$());
cm.addColor$D$java_awt_Color(1.0, $I$(2).black);
cm.addColor$D$java_awt_Color(2.0, $I$(2).green.brighter$());
return cm;
}, 1);

Clazz.newMeth(C$, 'defaultColorMap$', function () {
return C$.energyColorMap$();
}, 1);

Clazz.newMeth(C$, 'parseColorMap$S', function (s) {
var data=s.split$S("[;,]");
if (data.length == 1) {
var name=data[0].toLowerCase$();
for (var p, $p = 0, $$p = $I$(5).values$(); $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (name.equals$O(p.getId$().toLowerCase$())) {
return p.getColorMap$();
}}
return C$.defaultColorMap$();
} else {
var cm=Clazz.new_(C$);
for (var i=0; i < data.length; i++) {
var data2=data[i].split$S(":");
if (data2.length == 2) {
try {
var val=new Double(Double.parseDouble$S(data2[0]));
var col=$I$(2).decode$S(data2[1]);
cm.addColor$D$java_awt_Color((val).valueOf(), col);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}}
if (cm.getNumColors$() > 1) return cm;
}return C$.defaultColorMap$();
}, 1);

Clazz.newMeth(C$, 'setMinValue$D', function (newMin) {
this.rescale$D$D(newMin, this.getMaxValue$());
});

Clazz.newMeth(C$, 'setMaxValue$D', function (newMax) {
this.rescale$D$D(this.getMinValue$(), newMax);
});

Clazz.newMeth(C$, 'rescale$D$D', function (newMin, newMax) {
var minBck=this.getMinValue$();
var maxBck=this.getMaxValue$();
var spanBck=maxBck - minBck;
if (newMax != newMin ) {
newMax=Math.max(newMax, newMin + 1.0);
for (var i=0; i < this._values.size$(); i++) {
var valBck=(this._values.get$I(i)).valueOf();
this._values.set$I$O(i, new Double(newMin + (newMax - newMin) * (valBck - minBck) / (spanBck)));
}
}});

Clazz.newMeth(C$, 'clone$', function () {
var cm=Clazz.new_(C$);
cm._map=this._map.clone$();
cm._values=this._values.clone$();
return cm;
});

Clazz.newMeth(C$, 'equals$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (cm) {
if (this.getNumColors$() != cm.getNumColors$()) return false;
for (var i=0; i < this.getNumColors$(); i++) {
if ((!this.getColorAt$I(i).equals$O(cm.getColorAt$I(i))) || (!this.getValueAt$I(i).equals$O(cm.getValueAt$I(i))) ) return false;
}
return true;
});

Clazz.newMeth(C$, 'getParamEncoding$', function () {
var result="";
var f=Clazz.new_($I$(6,1));
for (var i=0; i < this.getNumColors$(); i++) {
if (i != 0) f.format$S$OA(",", []);
f.format$S$OA("%.2f:#%02X%02X%02X", [this._values.get$I(i), new Integer(this._map.get$I(i).getRed$()), new Integer(this._map.get$I(i).getGreen$()), new Integer(this._map.get$I(i).getBlue$())]);
}
return f.out$().toString();
});

Clazz.newMeth(C$, 'toString', function () {
return this.getParamEncoding$();
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_COLOR=$I$(2).GREEN;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.ModeleColorMap, "NamedColorMapTypes", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_id'],'O',['_cm','fr.orsay.lri.varna.models.rna.ModeleColorMap']]]

Clazz.newMeth(C$, 'c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap', function (id, cm) {
;C$.$init$.apply(this);
this._id=id;
this._cm=cm;
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this._id;
});

Clazz.newMeth(C$, 'getColorMap$', function () {
return this._cm;
});

Clazz.newMeth(C$, 'toString', function () {
return this._id;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "RED", 0, ["red", $I$(1).redColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "BLUE", 1, ["blue", $I$(1).blueColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "GREEN", 2, ["green", $I$(1).greenColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "HEAT", 3, ["heat", $I$(1).heatColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "ENERGY", 4, ["energy", $I$(1).energyColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "ROCKNROLL", 5, ["rocknroll", $I$(1).rockNRollColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "VIENNA", 6, ["vienna", $I$(1).viennaColorMap$()]);
Clazz.newEnumConst($vals, C$.c$$S$fr_orsay_lri_varna_models_rna_ModeleColorMap, "BW", 7, ["bw", $I$(1).bwColorMap$()]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
