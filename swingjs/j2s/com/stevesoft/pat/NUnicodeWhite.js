(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeWhite", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isWhite$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
