(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionValidator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validateOption$S',  function (opt) {
if (opt == null ) {
return;
}if (opt.length$() == 1) {
var ch=opt.charAt$I(0);
if (!C$.isValidOpt$C(ch)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal option name '" + ch + "'" ]);
}} else {
for (var ch, $ch = 0, $$ch = opt.toCharArray$(); $ch<$$ch.length&&((ch=($$ch[$ch])),1);$ch++) {
if (!C$.isValidChar$C(ch)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The option '" + opt + "' contains an illegal " + "character : '" + ch + "'" ]);
}}
}}, 1);

Clazz.newMeth(C$, 'isValidOpt$C',  function (c) {
return C$.isValidChar$C(c) || c == "?"  || c == "@" ;
}, 1);

Clazz.newMeth(C$, 'isValidChar$C',  function (c) {
return Character.isJavaIdentifierPart$C(c);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:58 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
