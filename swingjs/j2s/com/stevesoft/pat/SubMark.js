(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubMark", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['end_pos','start_pos'],'O',['om','com.stevesoft.pat.OrMark']]]

Clazz.newMeth(C$, 'toString',  function () {
return "";
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (i, pt) {
pt.marks[this.om.id + pt.nMarks]=i;
var ret=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ret < 0) {
pt.marks[this.om.id + pt.nMarks]=-1;
}return ret;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
