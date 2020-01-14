(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.SubMark']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OrMark", null, 'com.stevesoft.pat.Or');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sm=null;
this.id=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.sm=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$I', function (i) {
Clazz.super_(C$, this,1);
this.sm.om=this;
this.id=i;
}, 1);

Clazz.newMeth(C$, 'leftForm$', function () {
return "(";
});

Clazz.newMeth(C$, 'getNext$', function () {
return this.sm;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
this.sm.next=C$.superclazz.prototype.getNext$.apply(this, []);
if (pt.marks == null ) {
var n2=2 * pt.nMarks + 2;
pt.marks=Clazz.array(Integer.TYPE, [n2]);
for (var i=0; i < n2; i++) {
pt.marks[i]=-1;
}
}pt.marks[this.id]=pos;
var ret=C$.superclazz.prototype.matchInternal$I$com_stevesoft_pat_Pthings.apply(this, [pos, pt]);
if (ret < 0) {
pt.marks[this.id]=-1;
} else if (pt.marks[this.id] > pt.marks[this.id + pt.nMarks]) {
var swap=pt.marks[this.id];
pt.marks[this.id]=pt.marks[this.id + pt.nMarks] + 1;
pt.marks[this.id + pt.nMarks]=swap + 1;
}return ret;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var om=Clazz.new_(C$.c$$I,[this.id]);
h.put$TK$TV(om, om);
h.put$TK$TV(this, om);
for (var i=0; i < this.v.size$(); i++) {
om.v.addElement$TE((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return om;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
