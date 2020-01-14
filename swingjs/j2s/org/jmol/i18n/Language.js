(function(){var P$=Clazz.newPackage("org.jmol.i18n"),I$=[[0,'org.jmol.i18n.GT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Language");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.code=null;
this.language=null;
this.nativeLanguage=null;
this.display=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getLanguageList$', function () {
return Clazz.array(C$, -1, [Clazz.new_(C$.c$$S$S$S$Z,["ar", $I$(1).$$S("Arabic"), "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", false]), Clazz.new_(C$.c$$S$S$S$Z,["ast", $I$(1).$$S("Asturian"), "Asturian", false]), Clazz.new_(C$.c$$S$S$S$Z,["az", $I$(1).$$S("Azerbaijani"), "az\u0259rbaycan dili", false]), Clazz.new_(C$.c$$S$S$S$Z,["bs", $I$(1).$$S("Bosnian"), "bosanski jezik", false]), Clazz.new_(C$.c$$S$S$S$Z,["ca", $I$(1).$$S("Catalan"), "Catal\u00e0", true]), Clazz.new_(C$.c$$S$S$S$Z,["cs", $I$(1).$$S("Czech"), "\u010ce\u0161tina", true]), Clazz.new_(C$.c$$S$S$S$Z,["da", $I$(1).$$S("Danish"), "Dansk", true]), Clazz.new_(C$.c$$S$S$S$Z,["de", $I$(1).$$S("German"), "Deutsch", true]), Clazz.new_(C$.c$$S$S$S$Z,["el", $I$(1).$$S("Greek"), "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", false]), Clazz.new_(C$.c$$S$S$S$Z,["en_AU", $I$(1).$$S("Australian English"), "Australian English", false]), Clazz.new_(C$.c$$S$S$S$Z,["en_GB", $I$(1).$$S("British English"), "British English", true]), Clazz.new_(C$.c$$S$S$S$Z,["en_US", $I$(1).$$S("American English"), "American English", true]), Clazz.new_(C$.c$$S$S$S$Z,["es", $I$(1).$$S("Spanish"), "Espa\u00f1ol", true]), Clazz.new_(C$.c$$S$S$S$Z,["et", $I$(1).$$S("Estonian"), "Eesti", false]), Clazz.new_(C$.c$$S$S$S$Z,["eu", $I$(1).$$S("Basque"), "Euskara", true]), Clazz.new_(C$.c$$S$S$S$Z,["fi", $I$(1).$$S("Finnish"), "Suomi", true]), Clazz.new_(C$.c$$S$S$S$Z,["fo", $I$(1).$$S("Faroese"), "F\u00f8royskt", false]), Clazz.new_(C$.c$$S$S$S$Z,["fr", $I$(1).$$S("French"), "Fran\u00e7ais", true]), Clazz.new_(C$.c$$S$S$S$Z,["fy", $I$(1).$$S("Frisian"), "Frysk", false]), Clazz.new_(C$.c$$S$S$S$Z,["gl", $I$(1).$$S("Galician"), "Galego", false]), Clazz.new_(C$.c$$S$S$S$Z,["hr", $I$(1).$$S("Croatian"), "Hrvatski", false]), Clazz.new_(C$.c$$S$S$S$Z,["hu", $I$(1).$$S("Hungarian"), "Magyar", true]), Clazz.new_(C$.c$$S$S$S$Z,["hy", $I$(1).$$S("Armenian"), "\u0540\u0561\u0575\u0565\u0580\u0565\u0576", false]), Clazz.new_(C$.c$$S$S$S$Z,["id", $I$(1).$$S("Indonesian"), "Indonesia", true]), Clazz.new_(C$.c$$S$S$S$Z,["it", $I$(1).$$S("Italian"), "Italiano", true]), Clazz.new_(C$.c$$S$S$S$Z,["ja", $I$(1).$$S("Japanese"), "\u65e5\u672c\u8a9e", true]), Clazz.new_(C$.c$$S$S$S$Z,["jv", $I$(1).$$S("Javanese"), "Basa Jawa", false]), Clazz.new_(C$.c$$S$S$S$Z,["ko", $I$(1).$$S("Korean"), "\ud55c\uad6d\uc5b4", true]), Clazz.new_(C$.c$$S$S$S$Z,["ms", $I$(1).$$S("Malay"), "Bahasa Melayu", true]), Clazz.new_(C$.c$$S$S$S$Z,["nb", $I$(1).$$S("Norwegian Bokmal"), "Norsk Bokm\u00e5l", false]), Clazz.new_(C$.c$$S$S$S$Z,["nl", $I$(1).$$S("Dutch"), "Nederlands", true]), Clazz.new_(C$.c$$S$S$S$Z,["oc", $I$(1).$$S("Occitan"), "Occitan", false]), Clazz.new_(C$.c$$S$S$S$Z,["pl", $I$(1).$$S("Polish"), "Polski", false]), Clazz.new_(C$.c$$S$S$S$Z,["pt", $I$(1).$$S("Portuguese"), "Portugu\u00eas", false]), Clazz.new_(C$.c$$S$S$S$Z,["pt_BR", $I$(1).$$S("Brazilian Portuguese"), "Portugu\u00eas brasileiro", true]), Clazz.new_(C$.c$$S$S$S$Z,["ru", $I$(1).$$S("Russian"), "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", true]), Clazz.new_(C$.c$$S$S$S$Z,["sl", $I$(1).$$S("Slovenian"), "Sloven\u0161\u010dina", false]), Clazz.new_(C$.c$$S$S$S$Z,["sr", $I$(1).$$S("Serbian"), "\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a", false]), Clazz.new_(C$.c$$S$S$S$Z,["sv", $I$(1).$$S("Swedish"), "Svenska", true]), Clazz.new_(C$.c$$S$S$S$Z,["ta", $I$(1).$$S("Tamil"), "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd", false]), Clazz.new_(C$.c$$S$S$S$Z,["te", $I$(1).$$S("Telugu"), "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41", false]), Clazz.new_(C$.c$$S$S$S$Z,["tr", $I$(1).$$S("Turkish"), "T\u00fcrk\u00e7e", true]), Clazz.new_(C$.c$$S$S$S$Z,["ug", $I$(1).$$S("Uyghur"), "Uy\u01a3urq\u0259", false]), Clazz.new_(C$.c$$S$S$S$Z,["uk", $I$(1).$$S("Ukrainian"), "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430", true]), Clazz.new_(C$.c$$S$S$S$Z,["uz", $I$(1).$$S("Uzbek"), "O\'zbek", false]), Clazz.new_(C$.c$$S$S$S$Z,["zh_CN", $I$(1).$$S("Simplified Chinese"), "\u7b80\u4f53\u4e2d\u6587", true]), Clazz.new_(C$.c$$S$S$S$Z,["zh_TW", $I$(1).$$S("Traditional Chinese"), "\u7e41\u9ad4\u4e2d\u6587", true])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$Z', function (code, language, nativeLanguage, display) {
C$.$init$.apply(this);
this.code=code;
this.language=language;
this.nativeLanguage=nativeLanguage;
this.display=display;
}, 1);

Clazz.newMeth(C$, 'getSupported$org_jmol_i18n_LanguageA$S', function (list, code) {
for (var i=list.length; --i >= 0; ) if (list[i].code.equalsIgnoreCase$S(code)) return list[i].code;

for (var i=list.length; --i >= 0; ) if (list[i].code.startsWith$S(code)) return list[i].code;

return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
