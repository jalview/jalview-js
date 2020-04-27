(function(){var P$=Clazz.newPackage("org.apache.commons.cli");
/*c*/var C$=Clazz.newClass(P$, "AlreadySelectedException", null, 'org.apache.commons.cli.ParseException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['group','org.apache.commons.cli.OptionGroup','option','org.apache.commons.cli.Option']]]

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_commons_cli_OptionGroup$org_apache_commons_cli_Option', function (group, option) {
C$.c$$S.apply(this, ["The option '" + option.getKey$() + "' was specified but an option from this group " + "has already been selected: '" + group.getSelected$() + "'" ]);
this.group=group;
this.option=option;
}, 1);

Clazz.newMeth(C$, 'getOptionGroup$', function () {
return this.group;
});

Clazz.newMeth(C$, 'getOption$', function () {
return this.option;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:29 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
