(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,['sun.font.GlyphLayout','.LayoutEngineKey'],'java.util.concurrent.ConcurrentHashMap','swingjs.JSFontMetrics']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SunLayoutEngine", null, null, [['sun.font.GlyphLayout','sun.font.GlyphLayout.LayoutEngine'], ['sun.font.GlyphLayout','sun.font.GlyphLayout.LayoutEngineFactory']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['key','sun.font.GlyphLayout.LayoutEngineKey','cacheref','java.util.concurrent.ConcurrentHashMap']]
,['O',['instance','sun.font.GlyphLayout.LayoutEngineFactory']]]

Clazz.newMeth(C$, 'instance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEngine$sun_font_Font2D$I$I',  function (font, script, lang) {
return this.getEngine$sun_font_GlyphLayout_LayoutEngineKey(Clazz.new_($I$(1,1).c$$sun_font_Font2D$I$I,[font, script, lang]));
});

Clazz.newMeth(C$, 'getEngine$sun_font_GlyphLayout_LayoutEngineKey',  function (key) {
var cache=this.cacheref;
if (cache == null ) {
this.cacheref=cache=Clazz.new_($I$(2,1));
}var e=cache.get$O(key);
if (e == null ) {
var copy=key.copy$();
e=Clazz.new_(C$.c$$sun_font_GlyphLayout_LayoutEngineKey,[copy]);
cache.put$O$O(copy, e);
}return e;
});

Clazz.newMeth(C$, 'c$$sun_font_GlyphLayout_LayoutEngineKey',  function (key) {
;C$.$init$.apply(this);
this.key=key;
}, 1);

Clazz.newMeth(C$, 'layout$sun_font_FontStrikeDesc$FA$I$I$sun_font_TextRecord$I$java_awt_geom_Point2D_Float$sun_font_GlyphLayout_GVData',  function (desc, mat, gmask, baseIndex, tr, typo_flags, pt, data) {
$I$(3,"layout$sun_font_Font2D$FA$I$I$sun_font_TextRecord$I$java_awt_geom_Point2D_Float$sun_font_GlyphLayout_GVData",[this.key.font$(), mat, gmask, baseIndex, tr, typo_flags, pt, data]);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:04 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
