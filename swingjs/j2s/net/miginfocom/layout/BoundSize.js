(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),p$1={},I$=[[0,'net.miginfocom.layout.UnitValue','net.miginfocom.layout.LayoutUtil','StringBuilder']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoundSize", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['gapPush'],'O',['min','net.miginfocom.layout.UnitValue','+pref','+max']]
,['O',['NULL_SIZE','net.miginfocom.layout.BoundSize','+ZERO_PIXEL']]]

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_UnitValue$S', function (minMaxPref, createString) {
C$.c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S.apply(this, [minMaxPref, minMaxPref, minMaxPref, createString]);
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$S', function (min, preferred, max, createString) {
C$.c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S.apply(this, [min, preferred, max, false, createString]);
}, 1);

Clazz.newMeth(C$, 'c$$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$net_miginfocom_layout_UnitValue$Z$S', function (min, preferred, max, gapPush, createString) {
;C$.$init$.apply(this);
this.min=min;
this.pref=preferred;
this.max=max;
this.gapPush=gapPush;
$I$(2).putCCString$O$S(this, createString);
}, 1);

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'getPreferred$', function () {
return this.pref;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'getGapPush$', function () {
return this.gapPush;
});

Clazz.newMeth(C$, 'isUnset$', function () {
return this === C$.ZERO_PIXEL  || (this.pref == null  && this.min == null   && this.max == null   && this.gapPush == false  ) ;
});

Clazz.newMeth(C$, 'constrain$I$F$net_miginfocom_layout_ContainerWrapper', function (size, refValue, parent) {
if (this.max != null ) size=Math.min(size, this.max.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, parent));
if (this.min != null ) size=Math.max(size, this.min.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refValue, parent, parent));
return size;
});

Clazz.newMeth(C$, 'getSize$I', function (sizeType) {
switch (sizeType) {
case 0:
return this.min;
case 1:
return this.pref;
case 2:
return this.max;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown size: " + sizeType]);
}
});

Clazz.newMeth(C$, 'getPixelSizes$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper', function (refSize, parent, comp) {
return Clazz.array(Integer.TYPE, -1, [this.min != null  ? this.min.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, parent, comp) : 0, this.pref != null  ? this.pref.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, parent, comp) : 0, this.max != null  ? this.max.getPixels$F$net_miginfocom_layout_ContainerWrapper$net_miginfocom_layout_ComponentWrapper(refSize, parent, comp) : 2097051]);
});

Clazz.newMeth(C$, 'getConstraintString$', function () {
var cs=$I$(2).getCCString$O(this);
if (cs != null ) return cs;
if (this.min === this.pref  && this.pref === this.max  ) return this.min != null  ? (this.min.getConstraintString$() + "!") : "null";
var sb=Clazz.new_($I$(3,1).c$$I,[16]);
if (this.min != null ) sb.append$S(this.min.getConstraintString$()).append$C(":");
if (this.pref != null ) {
if (this.min == null  && this.max != null  ) sb.append$S(":");
sb.append$S(this.pref.getConstraintString$());
} else if (this.min != null ) {
sb.append$C("n");
}if (this.max != null ) sb.append$S(sb.length$() == 0 ? "::" : ":").append$S(this.max.getConstraintString$());
if (this.gapPush) {
if (sb.length$() > 0) sb.append$C(":");
sb.append$S("push");
}return sb.toString();
});

Clazz.newMeth(C$, 'checkNotLinked$', function () {
if (this.isLinked$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Size may not contain links"]);
});

Clazz.newMeth(C$, 'isLinked$', function () {
return this.min != null  && this.min.isLinkedDeep$()  || this.pref != null  && this.pref.isLinkedDeep$()   || this.max != null  && this.max.isLinkedDeep$()  ;
});

Clazz.newMeth(C$, 'isAbsolute$', function () {
return (this.min == null  || this.min.isAbsoluteDeep$() ) && (this.pref == null  || this.pref.isAbsoluteDeep$() ) && (this.max == null  || this.max.isAbsoluteDeep$() )  ;
});

Clazz.newMeth(C$, 'toString', function () {
return "BoundSize{min=" + this.min + ", pref=" + this.pref + ", max=" + this.max + ", gapPush=" + this.gapPush + '}' ;
});

Clazz.newMeth(C$, 'readResolve$', function () {
return $I$(2).getSerializedObject$O(this);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
if (this.getClass$() === Clazz.getClass(C$) ) $I$(2).writeAsXML$java_io_ObjectOutput$O(out, this);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$I$(2,"setSerializedObject$O$O",[this, $I$(2).readAsXML$java_io_ObjectInput($in)]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.NULL_SIZE=Clazz.new_(C$.c$$net_miginfocom_layout_UnitValue$S,[null, null]);
C$.ZERO_PIXEL=Clazz.new_(C$.c$$net_miginfocom_layout_UnitValue$S,[$I$(1).ZERO, "0px"]);
{
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
