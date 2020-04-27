(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList','java.util.Arrays','Error']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentOrder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.Type=0;
this.Order=null;
},1);

C$.$fields$=[['I',['Type'],'S',['Name'],'O',['Order','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (anOrder) {
;C$.$init$.apply(this);
this.Order=anOrder;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI', function (orderFrom) {
;C$.$init$.apply(this);
this.Order=Clazz.new_($I$(1,1));
for (var seq, $seq = orderFrom.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
this.Order.add$O(seq);
}
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_SequenceIA', function (orderFrom) {
;C$.$init$.apply(this);
this.Order=Clazz.new_([$I$(2).asList$OA(orderFrom)],$I$(1,1).c$$java_util_Collection);
}, 1);

Clazz.newMeth(C$, 'setType$I', function (Type) {
this.Type=Type;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.Type;
});

Clazz.newMeth(C$, 'setName$S', function (Name) {
this.Name=Name;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.Name;
});

Clazz.newMeth(C$, 'setOrder$java_util_List', function (Order) {
this.Order=Order;
});

Clazz.newMeth(C$, 'getOrder$', function () {
return this.Order;
});

Clazz.newMeth(C$, 'updateSequence$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI', function (oldref, newref) {
var found=this.Order.indexOf$O(oldref);
if (found > -1) {
this.Order.set$I$O(found, newref);
}return found > -1;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (o == null  || !(Clazz.instanceOf(o, "jalview.datamodel.AlignmentOrder")) ) {
return false;
}return this.equals$jalview_datamodel_AlignmentOrder$Z(o, true);
});

Clazz.newMeth(C$, 'equals$jalview_datamodel_AlignmentOrder$Z', function (o, identity) {
if (o !== this ) {
if (o == null ) {
return false;
}if (this.Order != null  && o.Order != null   && this.Order.size$() == o.Order.size$() ) {
if (!identity) {
throw Clazz.new_($I$(3,1).c$$S,["Weak sequenceI equivalence not yet implemented."]);
} else {
for (var i=0, j=o.Order.size$(); i < j; i++) {
if (this.Order.get$I(i) !== o.Order.get$I(i) ) {
return false;
}}
}} else {
return false;
}}return true;
});

Clazz.newMeth(C$, 'isConsistent$jalview_datamodel_AlignmentOrder', function (o) {
return this.isConsistent$jalview_datamodel_AlignmentOrder$Z(o, true);
});

Clazz.newMeth(C$, 'isConsistent$jalview_datamodel_AlignmentOrder$Z', function (o, identity) {
if (o !== this ) {
if (o == null ) {
return false;
}if (this.Order != null  && o.Order != null  ) {
var c;
var s;
if (o.Order.size$() > this.Order.size$()) {
c=o.Order;
s=this.Order;
} else {
c=this.Order;
s=o.Order;
}if (!identity) {
throw Clazz.new_($I$(3,1).c$$S,["Weak sequenceI equivalence not yet implemented."]);
} else {
var last=-1;
for (var i=0, j=s.size$(); i < j; i++) {
var pos=c.indexOf$O(s.get$I(i));
if (pos > last) {
last=pos;
} else {
return false;
}}
}} else {
return false;
}}return true;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
