(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphLine");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.label="";
this.colour=$I$(1).black;
this.displayed=true;
},1);

C$.$fields$=[['Z',['displayed'],'F',['value'],'S',['label'],'O',['colour','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$F$S$java_awt_Color',  function (value, label, col) {
;C$.$init$.apply(this);
this.value=value;
if (label != null ) {
this.label=label;
}if (col != null ) {
this.colour=col;
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_GraphLine',  function (from) {
;C$.$init$.apply(this);
if (from != null ) {
this.value=from.value;
this.label= String.instantialize(from.label);
this.colour=from.colour;
this.displayed=from.displayed;
}}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj != null  && Clazz.instanceOf(obj, "jalview.datamodel.GraphLine") ) {
var other=obj;
return this.displayed == other.displayed  && this.value == other.value   && (this.colour != null  ? (other.colour != null  && other.colour.equals$O(this.colour) ) : other.colour == null )  && (this.label != null  ? (other.label != null  && other.label.equals$O(this.label) ) : other.label == null ) ;
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
