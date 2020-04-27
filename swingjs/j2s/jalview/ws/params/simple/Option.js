(function(){var P$=Clazz.newPackage("jalview.ws.params.simple"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Option", null, null, 'jalview.ws.params.OptionI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.possibleVals=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['required'],'S',['name','value','defvalue','description'],'O',['possibleVals','java.util.ArrayList','fdetails','java.net.URL']]]

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
;C$.$init$.apply(this);
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
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z$S$S$java_util_Collection$java_net_URL', function (name2, description2, isrequired, defValue, value, possibleVals, fdetails) {
;C$.$init$.apply(this);
this.name=name2;
this.description=description2;
this.value=value;
this.required=isrequired;
this.defvalue=defValue;
if (possibleVals != null ) {
this.possibleVals=Clazz.new_($I$(1,1));
this.possibleVals.addAll$java_util_Collection(possibleVals);
}this.fdetails=fdetails;
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
var opt=Clazz.new_(C$.c$$jalview_ws_params_simple_Option,[this]);
return opt;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:04 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
