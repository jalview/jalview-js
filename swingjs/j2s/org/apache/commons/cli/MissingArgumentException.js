(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MissingArgumentException", null, 'org.apache.commons.cli.ParseException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['option','org.apache.commons.cli.Option']]]

Clazz.newMeth(C$, 'c$$S',  function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_commons_cli_Option',  function (option) {
C$.c$$S.apply(this, ["Missing argument for option: " + option.getKey$()]);
this.option=option;
}, 1);

Clazz.newMeth(C$, 'getOption$',  function () {
return this.option;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
