(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'sun.font.StrikeCache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontStrikeDisposer", null, null, ['sun.java2d.DisposerRecord', ['sun.java2d.Disposer','sun.java2d.Disposer.PollDisposable']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pScalerContext=0;
this.disposed=false;
this.comp=false;
},1);

C$.$fields$=[['Z',['disposed','comp'],'J',['pScalerContext'],'O',['font2D','sun.font.Font2D','desc','sun.font.FontStrikeDesc','longGlyphImages','long[]','intGlyphImages','int[]','segIntGlyphImages','int[][]','segLongGlyphImages','long[][]']]]

Clazz.newMeth(C$, 'c$$sun_font_Font2D$sun_font_FontStrikeDesc$J$IA',  function (font2D, desc, pContext, images) {
;C$.$init$.apply(this);
this.font2D=font2D;
this.desc=desc;
this.pScalerContext=pContext;
this.intGlyphImages=images;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_Font2D$sun_font_FontStrikeDesc$J$JA',  function (font2D, desc, pContext, images) {
;C$.$init$.apply(this);
this.font2D=font2D;
this.desc=desc;
this.pScalerContext=pContext;
this.longGlyphImages=images;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_Font2D$sun_font_FontStrikeDesc$J',  function (font2D, desc, pContext) {
;C$.$init$.apply(this);
this.font2D=font2D;
this.desc=desc;
this.pScalerContext=pContext;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_Font2D$sun_font_FontStrikeDesc',  function (font2D, desc) {
;C$.$init$.apply(this);
this.font2D=font2D;
this.desc=desc;
this.comp=true;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (!this.disposed) {
this.font2D.removeFromCache$sun_font_FontStrikeDesc(this.desc);
$I$(1).disposeStrike$sun_font_FontStrikeDisposer(this);
this.disposed=true;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:04 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
