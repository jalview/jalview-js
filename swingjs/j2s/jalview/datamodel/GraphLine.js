(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GraphLine");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=0;
this.label=null;
this.colour=null;
this.displayed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.label="";
this.colour=$I$(1).black;
this.displayed=true;
}, 1);

Clazz.newMeth(C$, 'c$$F$S$java_awt_Color', function (value, label, col) {
C$.$init$.apply(this);
this.value=value;
if (label != null ) {
this.label=label;
}if (col != null ) {
this.colour=col;
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_GraphLine', function (from) {
C$.$init$.apply(this);
if (from != null ) {
this.value=from.value;
this.label= String.instantialize(from.label);
this.colour=from.colour;
this.displayed=from.displayed;
}}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (obj != null  && Clazz.instanceOf(obj, "jalview.datamodel.GraphLine") ) {
var other=obj;
return this.displayed == other.displayed  && this.value == other.value   && (this.colour != null  ? (other.colour != null  && other.colour.equals$O(this.colour) ) : other.colour == null )  && (this.label != null  ? (other.label != null  && other.label.equals$O(this.label) ) : other.label == null ) ;
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
