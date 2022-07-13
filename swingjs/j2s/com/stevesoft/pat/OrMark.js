(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.SubMark']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OrMark", null, 'com.stevesoft.pat.Or');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sm=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['id'],'O',['sm','com.stevesoft.pat.SubMark']]]

Clazz.newMeth(C$, 'c$$I',  function (i) {
Clazz.super_(C$, this);
this.sm.om=this;
this.id=i;
}, 1);

Clazz.newMeth(C$, 'leftForm$',  function () {
return "(";
});

Clazz.newMeth(C$, 'getNext$',  function () {
return this.sm;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
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

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
var om=Clazz.new_(C$.c$$I,[this.id]);
h.put$O$O(om, om);
h.put$O$O(this, om);
for (var i=0; i < this.v.size$(); i++) {
om.v.addElement$O((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return om;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
