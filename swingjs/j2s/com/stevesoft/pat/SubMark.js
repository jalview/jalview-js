(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
var C$=Clazz.newClass(P$, "SubMark", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.end_pos=0;
this.start_pos=0;
this.om=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "";
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (i, pt) {
pt.marks[this.om.id + pt.nMarks]=i;
var ret=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ret < 0) {
pt.marks[this.om.id + pt.nMarks]=-1;
}return ret;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
