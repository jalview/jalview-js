(function(){var P$=Clazz.newPackage("jalview.schemes"),I$=[[0,'jalview.schemes.ColourSchemes','jalview.schemes.UserColourScheme','java.awt.Color','jalview.util.ColorUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColourSchemeProperty");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['rnaHelices','java.awt.Color[]']]]

Clazz.newMeth(C$, 'getColourScheme$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$S',  function (view, forData, name) {
if ("None".equalsIgnoreCase$S(name)) {
return null;
}var scheme=$I$(1).getInstance$().getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(name, view, forData, null);
if (scheme != null ) {
return scheme;
}var ucs=Clazz.new_($I$(2,1).c$$S,[name]);
return ucs;
}, 1);

Clazz.newMeth(C$, 'initRnaHelicesShading$I',  function (n) {
var j=0;
if (C$.rnaHelices == null ) {
C$.rnaHelices=Clazz.array($I$(3), [n + 1]);
} else if (C$.rnaHelices != null  && C$.rnaHelices.length <= n ) {
var t=Clazz.array($I$(3), [n + 1]);
System.arraycopy$O$I$O$I$I(C$.rnaHelices, 0, t, 0, C$.rnaHelices.length);
j=C$.rnaHelices.length;
C$.rnaHelices=t;
} else {
return;
}for (; j <= n; j++) {
C$.rnaHelices[j]=$I$(4,"generateRandomColor$java_awt_Color",[$I$(3).white]);
}
}, 1);

Clazz.newMeth(C$, 'resetRnaHelicesShading$',  function () {
C$.rnaHelices=null;
}, 1);

Clazz.newMeth(C$, 'getColourName$jalview_schemes_ColourSchemeI',  function (cs) {
return cs == null  ? "None" : cs.getSchemeName$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.rnaHelices=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
