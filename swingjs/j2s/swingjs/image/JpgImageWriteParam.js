(function(){var P$=Clazz.newPackage("swingjs.image"),I$=[];
var C$=Clazz.newClass(P$, "JpgImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale', function (l) {
C$.superclazz.c$$java_util_Locale.apply(this, [l]);
C$.$init$.apply(this);
this.canWriteCompressed=true;
this.compressionTypes=Clazz.array(String, -1, ["JPEG"]);
this.compressionMode=3;
this.compressionType="JPEG";
this.compressionQuality=0.75;
}, 1);

Clazz.newMeth(C$, 'unsetCompression$', function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}this.compressionQuality=0.75;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:46 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
