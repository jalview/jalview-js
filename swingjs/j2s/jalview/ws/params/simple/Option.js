(function(){var P$=Clazz.newPackage("jalview.ws.params.simple"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Option", null, null, 'jalview.ws.params.OptionI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.value=null;
this.defvalue=null;
this.description=null;
this.possibleVals=null;
this.required=false;
this.fdetails=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.possibleVals=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value == null  ? this.defvalue : this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (selectedItem) {
this.value=selectedItem;
});

Clazz.newMeth(C$, 'getFurtherDetails$', function () {
return this.fdetails;
});

Clazz.newMeth(C$, 'isRequired$', function () {
return this.required;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'getPossibleValues$', function () {
return this.possibleVals;
});

Clazz.newMeth(C$, 'c$$jalview_ws_params_simple_Option', function (opt) {
C$.$init$.apply(this);
this.name= String.instantialize(opt.name);
if (opt.value != null ) this.value= String.instantialize(opt.value);
if (opt.defvalue != null ) this.defvalue= String.instantialize(opt.defvalue);
if (opt.description != null ) this.description= String.instantialize(opt.description);
if (opt.possibleVals != null ) {
this.possibleVals=opt.possibleVals.clone$();
}this.required=opt.required;
this.fdetails=opt.fdetails;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z$S$S$java_util_Collection$java_net_URL', function (name2, description2, isrequired, defValue, value, possibleVals, fdetails) {
C$.$init$.apply(this);
this.name=name2;
this.description=description2;
this.value=value;
this.required=isrequired;
this.defvalue=defValue;
if (possibleVals != null ) {
this.possibleVals=Clazz.new_($I$(1));
this.possibleVals.addAll$java_util_Collection(possibleVals);
}this.fdetails=fdetails;
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var opt=Clazz.new_(C$.c$$jalview_ws_params_simple_Option,[this]);
return opt;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
