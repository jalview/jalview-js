(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GIFImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Locale', function (locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
this.canWriteCompressed=true;
this.canWriteProgressive=true;
this.compressionTypes=Clazz.array(String, -1, ["LZW", "lzw"]);
this.compressionType=this.compressionTypes[0];
}, 1);

Clazz.newMeth(C$, 'setCompressionMode$I', function (mode) {
if (mode == 0) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["MODE_DISABLED is not supported."]);
}C$.superclazz.prototype.setCompressionMode$I.apply(this, [mode]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
