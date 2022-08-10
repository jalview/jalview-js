(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CustomEndpoint", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['c','com.stevesoft.pat.Custom']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Custom',  function (cm) {
Clazz.super_(C$, this);
this.c=cm;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
var npos=this.c.v.validate$com_stevesoft_pat_StringLike$I$I(pt.src, this.c.start, pos);
if (npos >= 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(npos, pt);
}return -1;
});

Clazz.newMeth(C$, 'toString',  function () {
return "";
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$com_stevesoft_pat_Custom,[this.c.clone$java_util_Hashtable(h)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:23 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
