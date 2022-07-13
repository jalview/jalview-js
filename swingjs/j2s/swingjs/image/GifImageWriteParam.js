(function(){var P$=Clazz.newPackage("swingjs.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "GifImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (l) {
;C$.superclazz.c$$java_util_Locale.apply(this,[l]);C$.$init$.apply(this);
this.canWriteCompressed=true;
this.compressionTypes=Clazz.array(String, -1, ["LZW", "lzw"]);
this.compressionMode=3;
this.compressionType="LZW";
this.compressionQuality=1.0;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:21 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
