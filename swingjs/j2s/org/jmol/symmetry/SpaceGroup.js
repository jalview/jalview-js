(function(){var P$=Clazz.newPackage("org.jmol.symmetry"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.symmetry.HallInfo','org.jmol.symmetry.HallTranslation','org.jmol.symmetry.SymmetryOperation','javajs.util.P3','javajs.util.SB','javajs.util.Lst','java.util.Arrays','javajs.util.PT','org.jmol.util.Logger','javajs.util.AU','javajs.util.M4']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SpaceGroup");
C$.canonicalSeitzList=null;
C$.sgIndex=0;
C$.ambiguousNames=null;
C$.lastInfo=null;
C$.SG=null;
C$.htByOpCount=null;
C$.STR_SG=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sgIndex=-1;
C$.ambiguousNames="";
C$.lastInfo="";
C$.htByOpCount=Clazz.new_($I$(1));
C$.STR_SG=Clazz.array(String, -1, ["1;1;c1^1;p 1;p 1", "2;2;ci^1;p -1;-p 1", "3:b;2;c2^1;p 1 2 1;p 2y", "3:b;2;c2^1;p 2;p 2y", "3:c;2;c2^1;p 1 1 2;p 2", "3:a;2;c2^1;p 2 1 1;p 2x", "4:b;2;c2^2;p 1 21 1;p 2yb", "4:b;2;c2^2;p 21;p 2yb", "4:b*;2;c2^2;p 1 21 1*;p 2y1", "4:c;2;c2^2;p 1 1 21;p 2c", "4:c*;2;c2^2;p 1 1 21*;p 21", "4:a;2;c2^2;p 21 1 1;p 2xa", "4:a*;2;c2^2;p 21 1 1*;p 2x1", "5:b1;4;c2^3;c 1 2 1;c 2y", "5:b1;4;c2^3;c 2;c 2y", "5:b2;4;c2^3;a 1 2 1;a 2y", "5:b3;4;c2^3;i 1 2 1;i 2y", "5:c1;4;c2^3;a 1 1 2;a 2", "5:c2;4;c2^3;b 1 1 2;b 2", "5:c3;4;c2^3;i 1 1 2;i 2", "5:a1;4;c2^3;b 2 1 1;b 2x", "5:a2;4;c2^3;c 2 1 1;c 2x", "5:a3;4;c2^3;i 2 1 1;i 2x", "6:b;2;cs^1;p 1 m 1;p -2y", "6:b;2;cs^1;p m;p -2y", "6:c;2;cs^1;p 1 1 m;p -2", "6:a;2;cs^1;p m 1 1;p -2x", "7:b1;2;cs^2;p 1 c 1;p -2yc", "7:b1;2;cs^2;p c;p -2yc", "7:b2;2;cs^2;p 1 n 1;p -2yac", "7:b2;2;cs^2;p n;p -2yac", "7:b3;2;cs^2;p 1 a 1;p -2ya", "7:b3;2;cs^2;p a;p -2ya", "7:c1;2;cs^2;p 1 1 a;p -2a", "7:c2;2;cs^2;p 1 1 n;p -2ab", "7:c3;2;cs^2;p 1 1 b;p -2b", "7:a1;2;cs^2;p b 1 1;p -2xb", "7:a2;2;cs^2;p n 1 1;p -2xbc", "7:a3;2;cs^2;p c 1 1;p -2xc", "8:b1;4;cs^3;c 1 m 1;c -2y", "8:b1;4;cs^3;c m;c -2y", "8:b2;4;cs^3;a 1 m 1;a -2y", "8:b3;4;cs^3;i 1 m 1;i -2y", "8:b3;4;cs^3;i m;i -2y", "8:c1;4;cs^3;a 1 1 m;a -2", "8:c2;4;cs^3;b 1 1 m;b -2", "8:c3;4;cs^3;i 1 1 m;i -2", "8:a1;4;cs^3;b m 1 1;b -2x", "8:a2;4;cs^3;c m 1 1;c -2x", "8:a3;4;cs^3;i m 1 1;i -2x", "9:b1;4;cs^4;c 1 c 1;c -2yc", "9:b1;4;cs^4;c c;c -2yc", "9:b2;4;cs^4;a 1 n 1;a -2yab", "9:b3;4;cs^4;i 1 a 1;i -2ya", "9:-b1;4;cs^4;a 1 a 1;a -2ya", "9:-b2;4;cs^4;c 1 n 1;c -2yac", "9:-b3;4;cs^4;i 1 c 1;i -2yc", "9:c1;4;cs^4;a 1 1 a;a -2a", "9:c2;4;cs^4;b 1 1 n;b -2ab", "9:c3;4;cs^4;i 1 1 b;i -2b", "9:-c1;4;cs^4;b 1 1 b;b -2b", "9:-c2;4;cs^4;a 1 1 n;a -2ab", "9:-c3;4;cs^4;i 1 1 a;i -2a", "9:a1;4;cs^4;b b 1 1;b -2xb", "9:a2;4;cs^4;c n 1 1;c -2xac", "9:a3;4;cs^4;i c 1 1;i -2xc", "9:-a1;4;cs^4;c c 1 1;c -2xc", "9:-a2;4;cs^4;b n 1 1;b -2xab", "9:-a3;4;cs^4;i b 1 1;i -2xb", "10:b;4;c2h^1;p 1 2/m 1;-p 2y", "10:b;4;c2h^1;p 2/m;-p 2y", "10:c;4;c2h^1;p 1 1 2/m;-p 2", "10:a;4;c2h^1;p 2/m 1 1;-p 2x", "11:b;4;c2h^2;p 1 21/m 1;-p 2yb", "11:b;4;c2h^2;p 21/m;-p 2yb", "11:b*;4;c2h^2;p 1 21/m 1*;-p 2y1", "11:c;4;c2h^2;p 1 1 21/m;-p 2c", "11:c*;4;c2h^2;p 1 1 21/m*;-p 21", "11:a;4;c2h^2;p 21/m 1 1;-p 2xa", "11:a*;4;c2h^2;p 21/m 1 1*;-p 2x1", "12:b1;8;c2h^3;c 1 2/m 1;-c 2y", "12:b1;8;c2h^3;c 2/m;-c 2y", "12:b2;8;c2h^3;a 1 2/m 1;-a 2y", "12:b3;8;c2h^3;i 1 2/m 1;-i 2y", "12:b3;8;c2h^3;i 2/m;-i 2y", "12:c1;8;c2h^3;a 1 1 2/m;-a 2", "12:c2;8;c2h^3;b 1 1 2/m;-b 2", "12:c3;8;c2h^3;i 1 1 2/m;-i 2", "12:a1;8;c2h^3;b 2/m 1 1;-b 2x", "12:a2;8;c2h^3;c 2/m 1 1;-c 2x", "12:a3;8;c2h^3;i 2/m 1 1;-i 2x", "13:b1;4;c2h^4;p 1 2/c 1;-p 2yc", "13:b1;4;c2h^4;p 2/c;-p 2yc", "13:b2;4;c2h^4;p 1 2/n 1;-p 2yac", "13:b2;4;c2h^4;p 2/n;-p 2yac", "13:b3;4;c2h^4;p 1 2/a 1;-p 2ya", "13:b3;4;c2h^4;p 2/a;-p 2ya", "13:c1;4;c2h^4;p 1 1 2/a;-p 2a", "13:c2;4;c2h^4;p 1 1 2/n;-p 2ab", "13:c3;4;c2h^4;p 1 1 2/b;-p 2b", "13:a1;4;c2h^4;p 2/b 1 1;-p 2xb", "13:a2;4;c2h^4;p 2/n 1 1;-p 2xbc", "13:a3;4;c2h^4;p 2/c 1 1;-p 2xc", "14:b1;4;c2h^5;p 1 21/c 1;-p 2ybc", "14:b1;4;c2h^5;p 21/c;-p 2ybc", "14:b2;4;c2h^5;p 1 21/n 1;-p 2yn", "14:b2;4;c2h^5;p 21/n;-p 2yn", "14:b3;4;c2h^5;p 1 21/a 1;-p 2yab", "14:b3;4;c2h^5;p 21/a;-p 2yab", "14:c1;4;c2h^5;p 1 1 21/a;-p 2ac", "14:c2;4;c2h^5;p 1 1 21/n;-p 2n", "14:c3;4;c2h^5;p 1 1 21/b;-p 2bc", "14:a1;4;c2h^5;p 21/b 1 1;-p 2xab", "14:a2;4;c2h^5;p 21/n 1 1;-p 2xn", "14:a3;4;c2h^5;p 21/c 1 1;-p 2xac", "15:b1;8;c2h^6;c 1 2/c 1;-c 2yc", "15:b1;8;c2h^6;c 2/c;-c 2yc", "15:b2;8;c2h^6;a 1 2/n 1;-a 2yab", "15:b3;8;c2h^6;i 1 2/a 1;-i 2ya", "15:b3;8;c2h^6;i 2/a;-i 2ya", "15:-b1;8;c2h^6;a 1 2/a 1;-a 2ya", "15:-b2;8;c2h^6;c 1 2/n 1;-c 2yac", "15:-b2;8;c2h^6;c 2/n;-c 2yac", "15:-b3;8;c2h^6;i 1 2/c 1;-i 2yc", "15:-b3;8;c2h^6;i 2/c;-i 2yc", "15:c1;8;c2h^6;a 1 1 2/a;-a 2a", "15:c2;8;c2h^6;b 1 1 2/n;-b 2ab", "15:c3;8;c2h^6;i 1 1 2/b;-i 2b", "15:-c1;8;c2h^6;b 1 1 2/b;-b 2b", "15:-c2;8;c2h^6;a 1 1 2/n;-a 2ab", "15:-c3;8;c2h^6;i 1 1 2/a;-i 2a", "15:a1;8;c2h^6;b 2/b 1 1;-b 2xb", "15:a2;8;c2h^6;c 2/n 1 1;-c 2xac", "15:a3;8;c2h^6;i 2/c 1 1;-i 2xc", "15:-a1;8;c2h^6;c 2/c 1 1;-c 2xc", "15:-a2;8;c2h^6;b 2/n 1 1;-b 2xab", "15:-a3;8;c2h^6;i 2/b 1 1;-i 2xb", "16;4;d2^1;p 2 2 2;p 2 2", "17;4;d2^2;p 2 2 21;p 2c 2", "17*;4;d2^2;p 2 2 21*;p 21 2", "17:cab;4;d2^2;p 21 2 2;p 2a 2a", "17:bca;4;d2^2;p 2 21 2;p 2 2b", "18;4;d2^3;p 21 21 2;p 2 2ab", "18:cab;4;d2^3;p 2 21 21;p 2bc 2", "18:bca;4;d2^3;p 21 2 21;p 2ac 2ac", "19;4;d2^4;p 21 21 21;p 2ac 2ab", "20;8;d2^5;c 2 2 21;c 2c 2", "20*;8;d2^5;c 2 2 21*;c 21 2", "20:cab;8;d2^5;a 21 2 2;a 2a 2a", "20:cab*;8;d2^5;a 21 2 2*;a 2a 21", "20:bca;8;d2^5;b 2 21 2;b 2 2b", "21;8;d2^6;c 2 2 2;c 2 2", "21:cab;8;d2^6;a 2 2 2;a 2 2", "21:bca;8;d2^6;b 2 2 2;b 2 2", "22;16;d2^7;f 2 2 2;f 2 2", "23;8;d2^8;i 2 2 2;i 2 2", "24;8;d2^9;i 21 21 21;i 2b 2c", "25;4;c2v^1;p m m 2;p 2 -2", "25:cab;4;c2v^1;p 2 m m;p -2 2", "25:bca;4;c2v^1;p m 2 m;p -2 -2", "26;4;c2v^2;p m c 21;p 2c -2", "26*;4;c2v^2;p m c 21*;p 21 -2", "26:ba-c;4;c2v^2;p c m 21;p 2c -2c", "26:ba-c*;4;c2v^2;p c m 21*;p 21 -2c", "26:cab;4;c2v^2;p 21 m a;p -2a 2a", "26:-cba;4;c2v^2;p 21 a m;p -2 2a", "26:bca;4;c2v^2;p b 21 m;p -2 -2b", "26:a-cb;4;c2v^2;p m 21 b;p -2b -2", "27;4;c2v^3;p c c 2;p 2 -2c", "27:cab;4;c2v^3;p 2 a a;p -2a 2", "27:bca;4;c2v^3;p b 2 b;p -2b -2b", "28;4;c2v^4;p m a 2;p 2 -2a", "28*;4;c2v^4;p m a 2*;p 2 -21", "28:ba-c;4;c2v^4;p b m 2;p 2 -2b", "28:cab;4;c2v^4;p 2 m b;p -2b 2", "28:-cba;4;c2v^4;p 2 c m;p -2c 2", "28:-cba*;4;c2v^4;p 2 c m*;p -21 2", "28:bca;4;c2v^4;p c 2 m;p -2c -2c", "28:a-cb;4;c2v^4;p m 2 a;p -2a -2a", "29;4;c2v^5;p c a 21;p 2c -2ac", "29:ba-c;4;c2v^5;p b c 21;p 2c -2b", "29:cab;4;c2v^5;p 21 a b;p -2b 2a", "29:-cba;4;c2v^5;p 21 c a;p -2ac 2a", "29:bca;4;c2v^5;p c 21 b;p -2bc -2c", "29:a-cb;4;c2v^5;p b 21 a;p -2a -2ab", "30;4;c2v^6;p n c 2;p 2 -2bc", "30:ba-c;4;c2v^6;p c n 2;p 2 -2ac", "30:cab;4;c2v^6;p 2 n a;p -2ac 2", "30:-cba;4;c2v^6;p 2 a n;p -2ab 2", "30:bca;4;c2v^6;p b 2 n;p -2ab -2ab", "30:a-cb;4;c2v^6;p n 2 b;p -2bc -2bc", "31;4;c2v^7;p m n 21;p 2ac -2", "31:ba-c;4;c2v^7;p n m 21;p 2bc -2bc", "31:cab;4;c2v^7;p 21 m n;p -2ab 2ab", "31:-cba;4;c2v^7;p 21 n m;p -2 2ac", "31:bca;4;c2v^7;p n 21 m;p -2 -2bc", "31:a-cb;4;c2v^7;p m 21 n;p -2ab -2", "32;4;c2v^8;p b a 2;p 2 -2ab", "32:cab;4;c2v^8;p 2 c b;p -2bc 2", "32:bca;4;c2v^8;p c 2 a;p -2ac -2ac", "33;4;c2v^9;p n a 21;p 2c -2n", "33*;4;c2v^9;p n a 21*;p 21 -2n", "33:ba-c;4;c2v^9;p b n 21;p 2c -2ab", "33:ba-c*;4;c2v^9;p b n 21*;p 21 -2ab", "33:cab;4;c2v^9;p 21 n b;p -2bc 2a", "33:cab*;4;c2v^9;p 21 n b*;p -2bc 21", "33:-cba;4;c2v^9;p 21 c n;p -2n 2a", "33:-cba*;4;c2v^9;p 21 c n*;p -2n 21", "33:bca;4;c2v^9;p c 21 n;p -2n -2ac", "33:a-cb;4;c2v^9;p n 21 a;p -2ac -2n", "34;4;c2v^10;p n n 2;p 2 -2n", "34:cab;4;c2v^10;p 2 n n;p -2n 2", "34:bca;4;c2v^10;p n 2 n;p -2n -2n", "35;8;c2v^11;c m m 2;c 2 -2", "35:cab;8;c2v^11;a 2 m m;a -2 2", "35:bca;8;c2v^11;b m 2 m;b -2 -2", "36;8;c2v^12;c m c 21;c 2c -2", "36*;8;c2v^12;c m c 21*;c 21 -2", "36:ba-c;8;c2v^12;c c m 21;c 2c -2c", "36:ba-c*;8;c2v^12;c c m 21*;c 21 -2c", "36:cab;8;c2v^12;a 21 m a;a -2a 2a", "36:cab*;8;c2v^12;a 21 m a*;a -2a 21", "36:-cba;8;c2v^12;a 21 a m;a -2 2a", "36:-cba*;8;c2v^12;a 21 a m*;a -2 21", "36:bca;8;c2v^12;b b 21 m;b -2 -2b", "36:a-cb;8;c2v^12;b m 21 b;b -2b -2", "37;8;c2v^13;c c c 2;c 2 -2c", "37:cab;8;c2v^13;a 2 a a;a -2a 2", "37:bca;8;c2v^13;b b 2 b;b -2b -2b", "38;8;c2v^14;a m m 2;a 2 -2", "38:ba-c;8;c2v^14;b m m 2;b 2 -2", "38:cab;8;c2v^14;b 2 m m;b -2 2", "38:-cba;8;c2v^14;c 2 m m;c -2 2", "38:bca;8;c2v^14;c m 2 m;c -2 -2", "38:a-cb;8;c2v^14;a m 2 m;a -2 -2", "39;8;c2v^15;a e m 2;a 2 -2b", "39;8;c2v^15;a b m 2;a 2 -2b", "39:ba-c;8;c2v^15;b m a 2;b 2 -2a", "39:cab;8;c2v^15;b 2 c m;b -2a 2", "39:-cba;8;c2v^15;c 2 m b;c -2a 2", "39:bca;8;c2v^15;c m 2 a;c -2a -2a", "39:a-cb;8;c2v^15;a c 2 m;a -2b -2b", "40;8;c2v^16;a m a 2;a 2 -2a", "40:ba-c;8;c2v^16;b b m 2;b 2 -2b", "40:cab;8;c2v^16;b 2 m b;b -2b 2", "40:-cba;8;c2v^16;c 2 c m;c -2c 2", "40:bca;8;c2v^16;c c 2 m;c -2c -2c", "40:a-cb;8;c2v^16;a m 2 a;a -2a -2a", "41;8;c2v^17;a e a 2;a 2 -2ab", "41;8;c2v^17;a b a 2;a 2 -2ab;-b", "41:ba-c;8;c2v^17;b b a 2;b 2 -2ab", "41:cab;8;c2v^17;b 2 c b;b -2ab 2", "41:-cba;8;c2v^17;c 2 c b;c -2ac 2", "41:bca;8;c2v^17;c c 2 a;c -2ac -2ac", "41:a-cb;8;c2v^17;a c 2 a;a -2ab -2ab", "42;16;c2v^18;f m m 2;f 2 -2", "42:cab;16;c2v^18;f 2 m m;f -2 2", "42:bca;16;c2v^18;f m 2 m;f -2 -2", "43;16;c2v^19;f d d 2;f 2 -2d", "43:cab;16;c2v^19;f 2 d d;f -2d 2", "43:bca;16;c2v^19;f d 2 d;f -2d -2d", "44;8;c2v^20;i m m 2;i 2 -2", "44:cab;8;c2v^20;i 2 m m;i -2 2", "44:bca;8;c2v^20;i m 2 m;i -2 -2", "45;8;c2v^21;i b a 2;i 2 -2c", "45:cab;8;c2v^21;i 2 c b;i -2a 2", "45:bca;8;c2v^21;i c 2 a;i -2b -2b", "46;8;c2v^22;i m a 2;i 2 -2a", "46:ba-c;8;c2v^22;i b m 2;i 2 -2b", "46:cab;8;c2v^22;i 2 m b;i -2b 2", "46:-cba;8;c2v^22;i 2 c m;i -2c 2", "46:bca;8;c2v^22;i c 2 m;i -2c -2c", "46:a-cb;8;c2v^22;i m 2 a;i -2a -2a", "47;8;d2h^1;p m m m;-p 2 2", "48:1;8;d2h^2;p n n n:1;p 2 2 -1n;-b", "48:2;8;d2h^2;p n n n:2;-p 2ab 2bc", "49;8;d2h^3;p c c m;-p 2 2c", "49:cab;8;d2h^3;p m a a;-p 2a 2", "49:bca;8;d2h^3;p b m b;-p 2b 2b", "50:1;8;d2h^4;p b a n:1;p 2 2 -1ab;-b", "50:2;8;d2h^4;p b a n:2;-p 2ab 2b", "50:1cab;8;d2h^4;p n c b:1;p 2 2 -1bc", "50:2cab;8;d2h^4;p n c b:2;-p 2b 2bc", "50:1bca;8;d2h^4;p c n a:1;p 2 2 -1ac", "50:2bca;8;d2h^4;p c n a:2;-p 2a 2c", "51;8;d2h^5;p m m a;-p 2a 2a", "51:ba-c;8;d2h^5;p m m b;-p 2b 2", "51:cab;8;d2h^5;p b m m;-p 2 2b", "51:-cba;8;d2h^5;p c m m;-p 2c 2c", "51:bca;8;d2h^5;p m c m;-p 2c 2", "51:a-cb;8;d2h^5;p m a m;-p 2 2a", "52;8;d2h^6;p n n a;-p 2a 2bc", "52:ba-c;8;d2h^6;p n n b;-p 2b 2n", "52:cab;8;d2h^6;p b n n;-p 2n 2b", "52:-cba;8;d2h^6;p c n n;-p 2ab 2c", "52:bca;8;d2h^6;p n c n;-p 2ab 2n", "52:a-cb;8;d2h^6;p n a n;-p 2n 2bc", "53;8;d2h^7;p m n a;-p 2ac 2", "53:ba-c;8;d2h^7;p n m b;-p 2bc 2bc", "53:cab;8;d2h^7;p b m n;-p 2ab 2ab", "53:-cba;8;d2h^7;p c n m;-p 2 2ac", "53:bca;8;d2h^7;p n c m;-p 2 2bc", "53:a-cb;8;d2h^7;p m a n;-p 2ab 2", "54;8;d2h^8;p c c a;-p 2a 2ac", "54:ba-c;8;d2h^8;p c c b;-p 2b 2c", "54:cab;8;d2h^8;p b a a;-p 2a 2b", "54:-cba;8;d2h^8;p c a a;-p 2ac 2c", "54:bca;8;d2h^8;p b c b;-p 2bc 2b", "54:a-cb;8;d2h^8;p b a b;-p 2b 2ab", "55;8;d2h^9;p b a m;-p 2 2ab", "55:cab;8;d2h^9;p m c b;-p 2bc 2", "55:bca;8;d2h^9;p c m a;-p 2ac 2ac", "56;8;d2h^10;p c c n;-p 2ab 2ac", "56:cab;8;d2h^10;p n a a;-p 2ac 2bc", "56:bca;8;d2h^10;p b n b;-p 2bc 2ab", "57;8;d2h^11;p b c m;-p 2c 2b", "57:ba-c;8;d2h^11;p c a m;-p 2c 2ac", "57:cab;8;d2h^11;p m c a;-p 2ac 2a", "57:-cba;8;d2h^11;p m a b;-p 2b 2a", "57:bca;8;d2h^11;p b m a;-p 2a 2ab", "57:a-cb;8;d2h^11;p c m b;-p 2bc 2c", "58;8;d2h^12;p n n m;-p 2 2n", "58:cab;8;d2h^12;p m n n;-p 2n 2", "58:bca;8;d2h^12;p n m n;-p 2n 2n", "59:1;8;d2h^13;p m m n:1;p 2 2ab -1ab;-b", "59:2;8;d2h^13;p m m n:2;-p 2ab 2a", "59:1cab;8;d2h^13;p n m m:1;p 2bc 2 -1bc", "59:2cab;8;d2h^13;p n m m:2;-p 2c 2bc", "59:1bca;8;d2h^13;p m n m:1;p 2ac 2ac -1ac", "59:2bca;8;d2h^13;p m n m:2;-p 2c 2a", "60;8;d2h^14;p b c n;-p 2n 2ab", "60:ba-c;8;d2h^14;p c a n;-p 2n 2c", "60:cab;8;d2h^14;p n c a;-p 2a 2n", "60:-cba;8;d2h^14;p n a b;-p 2bc 2n", "60:bca;8;d2h^14;p b n a;-p 2ac 2b", "60:a-cb;8;d2h^14;p c n b;-p 2b 2ac", "61;8;d2h^15;p b c a;-p 2ac 2ab", "61:ba-c;8;d2h^15;p c a b;-p 2bc 2ac", "62;8;d2h^16;p n m a;-p 2ac 2n", "62:ba-c;8;d2h^16;p m n b;-p 2bc 2a", "62:cab;8;d2h^16;p b n m;-p 2c 2ab", "62:-cba;8;d2h^16;p c m n;-p 2n 2ac", "62:bca;8;d2h^16;p m c n;-p 2n 2a", "62:a-cb;8;d2h^16;p n a m;-p 2c 2n", "63;16;d2h^17;c m c m;-c 2c 2", "63:ba-c;16;d2h^17;c c m m;-c 2c 2c", "63:cab;16;d2h^17;a m m a;-a 2a 2a", "63:-cba;16;d2h^17;a m a m;-a 2 2a", "63:bca;16;d2h^17;b b m m;-b 2 2b", "63:a-cb;16;d2h^17;b m m b;-b 2b 2", "64;16;d2h^18;c m c e;-c 2ac 2", "64;16;d2h^18;c m c a;-c 2ac 2", "64:ba-c;16;d2h^18;c c m b;-c 2ac 2ac", "64:cab;16;d2h^18;a b m a;-a 2ab 2ab", "64:-cba;16;d2h^18;a c a m;-a 2 2ab", "64:bca;16;d2h^18;b b c m;-b 2 2ab", "64:a-cb;16;d2h^18;b m a b;-b 2ab 2", "65;16;d2h^19;c m m m;-c 2 2", "65:cab;16;d2h^19;a m m m;-a 2 2", "65:bca;16;d2h^19;b m m m;-b 2 2", "66;16;d2h^20;c c c m;-c 2 2c", "66:cab;16;d2h^20;a m a a;-a 2a 2", "66:bca;16;d2h^20;b b m b;-b 2b 2b", "67;16;d2h^21;c m m e;-c 2a 2", "67;16;d2h^21;c m m a;-c 2a 2", "67:ba-c;16;d2h^21;c m m b;-c 2a 2a", "67:cab;16;d2h^21;a b m m;-a 2b 2b", "67:-cba;16;d2h^21;a c m m;-a 2 2b", "67:bca;16;d2h^21;b m c m;-b 2 2a", "67:a-cb;16;d2h^21;b m a m;-b 2a 2", "68:1;16;d2h^22;c c c e:1;c 2 2 -1ac;-b", "68:1;16;d2h^22;c c c a:1;c 2 2 -1ac;-b", "68:2;16;d2h^22;c c c e:2;-c 2a 2ac", "68:2;16;d2h^22;c c c a:2;-c 2a 2ac", "68:1ba-c;16;d2h^22;c c c b:1;c 2 2 -1ac", "68:2ba-c;16;d2h^22;c c c b:2;-c 2a 2c", "68:1cab;16;d2h^22;a b a a:1;a 2 2 -1ab", "68:2cab;16;d2h^22;a b a a:2;-a 2a 2b", "68:1-cba;16;d2h^22;a c a a:1;a 2 2 -1ab", "68:2-cba;16;d2h^22;a c a a:2;-a 2ab 2b", "68:1bca;16;d2h^22;b b c b:1;b 2 2 -1ab", "68:2bca;16;d2h^22;b b c b:2;-b 2ab 2b", "68:1a-cb;16;d2h^22;b b a b:1;b 2 2 -1ab", "68:2a-cb;16;d2h^22;b b a b:2;-b 2b 2ab", "69;32;d2h^23;f m m m;-f 2 2", "70:1;32;d2h^24;f d d d:1;f 2 2 -1d;-b", "70:2;32;d2h^24;f d d d:2;-f 2uv 2vw", "71;16;d2h^25;i m m m;-i 2 2", "72;16;d2h^26;i b a m;-i 2 2c", "72:cab;16;d2h^26;i m c b;-i 2a 2", "72:bca;16;d2h^26;i c m a;-i 2b 2b", "73;16;d2h^27;i b c a;-i 2b 2c", "73:ba-c;16;d2h^27;i c a b;-i 2a 2b", "74;16;d2h^28;i m m a;-i 2b 2", "74:ba-c;16;d2h^28;i m m b;-i 2a 2a", "74:cab;16;d2h^28;i b m m;-i 2c 2c", "74:-cba;16;d2h^28;i c m m;-i 2 2b", "74:bca;16;d2h^28;i m c m;-i 2 2a", "74:a-cb;16;d2h^28;i m a m;-i 2c 2", "75;4;c4^1;p 4;p 4", "76;4;c4^2;p 41;p 4w", "76*;4;c4^2;p 41*;p 41", "77;4;c4^3;p 42;p 4c", "77*;4;c4^3;p 42*;p 42", "78;4;c4^4;p 43;p 4cw", "78*;4;c4^4;p 43*;p 43", "79;8;c4^5;i 4;i 4", "80;8;c4^6;i 41;i 4bw", "81;4;s4^1;p -4;p -4", "82;8;s4^2;i -4;i -4", "83;8;c4h^1;p 4/m;-p 4", "84;8;c4h^2;p 42/m;-p 4c", "84*;8;c4h^2;p 42/m*;-p 42", "85:1;8;c4h^3;p 4/n:1;p 4ab -1ab;-b", "85:2;8;c4h^3;p 4/n:2;-p 4a", "86:1;8;c4h^4;p 42/n:1;p 4n -1n;-b", "86:2;8;c4h^4;p 42/n:2;-p 4bc", "87;16;c4h^5;i 4/m;-i 4", "88:1;16;c4h^6;i 41/a:1;i 4bw -1bw;-b", "88:2;16;c4h^6;i 41/a:2;-i 4ad", "89;8;d4^1;p 4 2 2;p 4 2", "90;8;d4^2;p 4 21 2;p 4ab 2ab", "91;8;d4^3;p 41 2 2;p 4w 2c", "91*;8;d4^3;p 41 2 2*;p 41 2c", "92;8;d4^4;p 41 21 2;p 4abw 2nw", "93;8;d4^5;p 42 2 2;p 4c 2", "93*;8;d4^5;p 42 2 2*;p 42 2", "94;8;d4^6;p 42 21 2;p 4n 2n", "95;8;d4^7;p 43 2 2;p 4cw 2c", "95*;8;d4^7;p 43 2 2*;p 43 2c", "96;8;d4^8;p 43 21 2;p 4nw 2abw", "97;16;d4^9;i 4 2 2;i 4 2", "98;16;d4^10;i 41 2 2;i 4bw 2bw", "99;8;c4v^1;p 4 m m;p 4 -2", "100;8;c4v^2;p 4 b m;p 4 -2ab", "101;8;c4v^3;p 42 c m;p 4c -2c", "101*;8;c4v^3;p 42 c m*;p 42 -2c", "102;8;c4v^4;p 42 n m;p 4n -2n", "103;8;c4v^5;p 4 c c;p 4 -2c", "104;8;c4v^6;p 4 n c;p 4 -2n", "105;8;c4v^7;p 42 m c;p 4c -2", "105*;8;c4v^7;p 42 m c*;p 42 -2", "106;8;c4v^8;p 42 b c;p 4c -2ab", "106*;8;c4v^8;p 42 b c*;p 42 -2ab", "107;16;c4v^9;i 4 m m;i 4 -2", "108;16;c4v^10;i 4 c m;i 4 -2c", "109;16;c4v^11;i 41 m d;i 4bw -2", "110;16;c4v^12;i 41 c d;i 4bw -2c", "111;8;d2d^1;p -4 2 m;p -4 2", "112;8;d2d^2;p -4 2 c;p -4 2c", "113;8;d2d^3;p -4 21 m;p -4 2ab", "114;8;d2d^4;p -4 21 c;p -4 2n", "115;8;d2d^5;p -4 m 2;p -4 -2", "116;8;d2d^6;p -4 c 2;p -4 -2c", "117;8;d2d^7;p -4 b 2;p -4 -2ab", "118;8;d2d^8;p -4 n 2;p -4 -2n", "119;16;d2d^9;i -4 m 2;i -4 -2", "120;16;d2d^10;i -4 c 2;i -4 -2c", "121;16;d2d^11;i -4 2 m;i -4 2", "122;16;d2d^12;i -4 2 d;i -4 2bw", "123;16;d4h^1;p 4/m m m;-p 4 2", "124;16;d4h^2;p 4/m c c;-p 4 2c", "125:1;16;d4h^3;p 4/n b m:1;p 4 2 -1ab;-b", "125:2;16;d4h^3;p 4/n b m:2;-p 4a 2b", "126:1;16;d4h^4;p 4/n n c:1;p 4 2 -1n;-b", "126:2;16;d4h^4;p 4/n n c:2;-p 4a 2bc", "127;16;d4h^5;p 4/m b m;-p 4 2ab", "128;16;d4h^6;p 4/m n c;-p 4 2n", "129:1;16;d4h^7;p 4/n m m:1;p 4ab 2ab -1ab;-b", "129:2;16;d4h^7;p 4/n m m:2;-p 4a 2a", "130:1;16;d4h^8;p 4/n c c:1;p 4ab 2n -1ab;-b", "130:2;16;d4h^8;p 4/n c c:2;-p 4a 2ac", "131;16;d4h^9;p 42/m m c;-p 4c 2", "132;16;d4h^10;p 42/m c m;-p 4c 2c", "133:1;16;d4h^11;p 42/n b c:1;p 4n 2c -1n;-b", "133:2;16;d4h^11;p 42/n b c:2;-p 4ac 2b", "134:1;16;d4h^12;p 42/n n m:1;p 4n 2 -1n;-b", "134:2;16;d4h^12;p 42/n n m:2;-p 4ac 2bc", "135;16;d4h^13;p 42/m b c;-p 4c 2ab", "135*;16;d4h^13;p 42/m b c*;-p 42 2ab", "136;16;d4h^14;p 42/m n m;-p 4n 2n", "137:1;16;d4h^15;p 42/n m c:1;p 4n 2n -1n;-b", "137:2;16;d4h^15;p 42/n m c:2;-p 4ac 2a", "138:1;16;d4h^16;p 42/n c m:1;p 4n 2ab -1n;-b", "138:2;16;d4h^16;p 42/n c m:2;-p 4ac 2ac", "139;32;d4h^17;i 4/m m m;-i 4 2", "140;32;d4h^18;i 4/m c m;-i 4 2c", "141:1;32;d4h^19;i 41/a m d:1;i 4bw 2bw -1bw;-b", "141:2;32;d4h^19;i 41/a m d:2;-i 4bd 2", "142:1;32;d4h^20;i 41/a c d:1;i 4bw 2aw -1bw;-b", "142:2;32;d4h^20;i 41/a c d:2;-i 4bd 2c", "143;3;c3^1;p 3;p 3", "144;3;c3^2;p 31;p 31", "145;3;c3^3;p 32;p 32", "146:h;9;c3^4;r 3:h;r 3", "146:r;3;c3^4;r 3:r;p 3*", "147;6;c3i^1;p -3;-p 3", "148:h;18;c3i^2;r -3:h;-r 3", "148:r;6;c3i^2;r -3:r;-p 3*", "149;6;d3^1;p 3 1 2;p 3 2", "150;6;d3^2;p 3 2 1;p 3 2\"", "151;6;d3^3;p 31 1 2;p 31 2 (0 0 4)", "152;6;d3^4;p 31 2 1;p 31 2\"", "153;6;d3^5;p 32 1 2;p 32 2 (0 0 2)", "154;6;d3^6;p 32 2 1;p 32 2\"", "155:h;18;d3^7;r 3 2:h;r 3 2\"", "155:r;6;d3^7;r 3 2:r;p 3* 2", "156;6;c3v^1;p 3 m 1;p 3 -2\"", "157;6;c3v^2;p 3 1 m;p 3 -2", "158;6;c3v^3;p 3 c 1;p 3 -2\"c", "159;6;c3v^4;p 3 1 c;p 3 -2c", "160:h;18;c3v^5;r 3 m:h;r 3 -2\"", "160:r;6;c3v^5;r 3 m:r;p 3* -2", "161:h;18;c3v^6;r 3 c:h;r 3 -2\"c", "161:r;6;c3v^6;r 3 c:r;p 3* -2n", "162;12;d3d^1;p -3 1 m;-p 3 2", "163;12;d3d^2;p -3 1 c;-p 3 2c", "164;12;d3d^3;p -3 m 1;-p 3 2\"", "165;12;d3d^4;p -3 c 1;-p 3 2\"c", "166:h;36;d3d^5;r -3 m:h;-r 3 2\"", "166:r;12;d3d^5;r -3 m:r;-p 3* 2", "167:h;36;d3d^6;r -3 c:h;-r 3 2\"c", "167:r;12;d3d^6;r -3 c:r;-p 3* 2n", "168;6;c6^1;p 6;p 6", "169;6;c6^2;p 61;p 61", "170;6;c6^3;p 65;p 65", "171;6;c6^4;p 62;p 62", "172;6;c6^5;p 64;p 64", "173;6;c6^6;p 63;p 6c", "173*;6;c6^6;p 63*;p 63 ", "174;6;c3h^1;p -6;p -6", "175;12;c6h^1;p 6/m;-p 6", "176;12;c6h^2;p 63/m;-p 6c", "176*;12;c6h^2;p 63/m*;-p 63", "177;12;d6^1;p 6 2 2;p 6 2", "178;12;d6^2;p 61 2 2;p 61 2 (0 0 5)", "179;12;d6^3;p 65 2 2;p 65 2 (0 0 1)", "180;12;d6^4;p 62 2 2;p 62 2 (0 0 4)", "181;12;d6^5;p 64 2 2;p 64 2 (0 0 2)", "182;12;d6^6;p 63 2 2;p 6c 2c", "182*;12;d6^6;p 63 2 2*;p 63 2c", "183;12;c6v^1;p 6 m m;p 6 -2", "184;12;c6v^2;p 6 c c;p 6 -2c", "185;12;c6v^3;p 63 c m;p 6c -2", "185*;12;c6v^3;p 63 c m*;p 63 -2", "186;12;c6v^4;p 63 m c;p 6c -2c", "186*;12;c6v^4;p 63 m c*;p 63 -2c", "187;12;d3h^1;p -6 m 2;p -6 2", "188;12;d3h^2;p -6 c 2;p -6c 2", "189;12;d3h^3;p -6 2 m;p -6 -2", "190;12;d3h^4;p -6 2 c;p -6c -2c", "191;24;d6h^1;p 6/m m m;-p 6 2", "192;24;d6h^2;p 6/m c c;-p 6 2c", "193;24;d6h^3;p 63/m c m;-p 6c 2", "193*;24;d6h^3;p 63/m c m*;-p 63 2", "194;24;d6h^4;p 63/m m c;-p 6c 2c", "194*;24;d6h^4;p 63/m m c*;-p 63 2c", "195;12;t^1;p 2 3;p 2 2 3", "196;48;t^2;f 2 3;f 2 2 3", "197;24;t^3;i 2 3;i 2 2 3", "198;12;t^4;p 21 3;p 2ac 2ab 3", "199;24;t^5;i 21 3;i 2b 2c 3", "200;24;th^1;p m -3;-p 2 2 3", "201:1;24;th^2;p n -3:1;p 2 2 3 -1n;-b", "201:2;24;th^2;p n -3:2;-p 2ab 2bc 3", "202;96;th^3;f m -3;-f 2 2 3", "203:1;96;th^4;f d -3:1;f 2 2 3 -1d;-b", "203:2;96;th^4;f d -3:2;-f 2uv 2vw 3", "204;48;th^5;i m -3;-i 2 2 3", "205;24;th^6;p a -3;-p 2ac 2ab 3", "206;48;th^7;i a -3;-i 2b 2c 3", "207;24;o^1;p 4 3 2;p 4 2 3", "208;24;o^2;p 42 3 2;p 4n 2 3", "209;96;o^3;f 4 3 2;f 4 2 3", "210;96;o^4;f 41 3 2;f 4d 2 3", "211;48;o^5;i 4 3 2;i 4 2 3", "212;24;o^6;p 43 3 2;p 4acd 2ab 3", "213;24;o^7;p 41 3 2;p 4bd 2ab 3", "214;48;o^8;i 41 3 2;i 4bd 2c 3", "215;24;td^1;p -4 3 m;p -4 2 3", "216;96;td^2;f -4 3 m;f -4 2 3", "217;48;td^3;i -4 3 m;i -4 2 3", "218;24;td^4;p -4 3 n;p -4n 2 3", "219;96;td^5;f -4 3 c;f -4a 2 3", "220;48;td^6;i -4 3 d;i -4bd 2c 3", "221;48;oh^1;p m -3 m;-p 4 2 3", "222:1;48;oh^2;p n -3 n:1;p 4 2 3 -1n;-b", "222:2;48;oh^2;p n -3 n:2;-p 4a 2bc 3", "223;48;oh^3;p m -3 n;-p 4n 2 3", "224:1;48;oh^4;p n -3 m:1;p 4n 2 3 -1n;-b", "224:2;48;oh^4;p n -3 m:2;-p 4bc 2bc 3", "225;192;oh^5;f m -3 m;-f 4 2 3", "226;192;oh^6;f m -3 c;-f 4a 2 3", "227:1;192;oh^7;f d -3 m:1;f 4d 2 3 -1d;-b", "227:2;192;oh^7;f d -3 m:2;-f 4vw 2vw 3", "228:1;192;oh^8;f d -3 c:1;f 4d 2 3 -1ad;-b", "228:2;192;oh^8;f d -3 c:2;-f 4ud 2vw 3", "229;96;oh^9;i m -3 m;-i 4 2 3", "230;96;oh^10;i a -3 d;-i 4bd 2c 3"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.isSSG=false;
this.name=null;
this.hallSymbol=null;
this.crystalClass=null;
this.hmSymbol=null;
this.hmSymbolFull=null;
this.hmSymbolExt=null;
this.hmSymbolAbbr=null;
this.hmSymbolAlternative=null;
this.hmSymbolAbbrShort=null;
this.ambiguityType='\0';
this.uniqueAxis='\0';
this.axisChoice='\0';
this.intlTableNumber=null;
this.intlTableNumberFull=null;
this.intlTableNumberExt=null;
this.hallInfo=null;
this.latticeParameter=0;
this.operations=null;
this.finalOperations=null;
this.operationCount=0;
this.latticeOp=0;
this.xyzList=null;
this.modDim=0;
this.doNormalize=false;
this.isBio=false;
this.isBilbao=false;
this.latticeType=null;
this.nHallOperators=null;
this.info=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.name="unknown!";
this.ambiguityType="\u0000";
this.uniqueAxis="\u0000";
this.axisChoice="\u0000";
this.latticeOp=-1;
this.doNormalize=true;
this.latticeType="P";
}, 1);

Clazz.newMeth(C$, 'getNull$Z$Z$Z', function (doInit, doNormalize, doFinalize) {
C$.getSpaceGroups$();
var sg=Clazz.new_(C$.c$$I$S$Z,[-1, null, doInit]);
sg.doNormalize=doNormalize;
if (doFinalize) sg.setFinalOperations$javajs_util_P3A$I$I$Z(null, 0, 0, false);
return sg;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$Z', function (index, cifLine, doInit) {
C$.$init$.apply(this);
++C$.sgIndex;
if (index < 0) index=C$.sgIndex;
this.index=index;
p$1.init$Z.apply(this, [doInit && cifLine == null  ]);
if (doInit && cifLine != null  ) p$1.buildSpaceGroup$S.apply(this, [cifLine]);
}, 1);

Clazz.newMeth(C$, 'init$Z', function (addXYZ) {
this.xyzList=Clazz.new_($I$(1));
this.operationCount=0;
if (addXYZ) this.addSymmetry$S$I$Z("x,y,z", 0, false);
}, p$1);

Clazz.newMeth(C$, 'createSpaceGroup$I$S$O$I', function (desiredSpaceGroupIndex, name, data, modDim) {
var sg=null;
if (desiredSpaceGroupIndex >= 0) {
sg=C$.getSpaceGroups$()[desiredSpaceGroupIndex];
} else {
if (Clazz.instanceOf(data, "javajs.util.Lst")) sg=C$.createSGFromList$S$javajs_util_Lst(name, data);
 else sg=C$.determineSpaceGroupNA$S$FA(name, data);
if (sg == null ) sg=C$.createSpaceGroupN$S(modDim <= 0 ? name : "x1,x2,x3,x4,x5,x6,x7,x8,x9".substring$I$I(0, modDim * 3 + 8));
}if (sg != null ) p$1.generateAllOperators$org_jmol_symmetry_HallInfo.apply(sg, [null]);
return sg;
}, 1);

Clazz.newMeth(C$, 'createSGFromList$S$javajs_util_Lst', function (name, data) {
var sg=Clazz.new_(C$.c$$I$S$Z,[-1, "0;0;--;--;--", true]);
sg.doNormalize=false;
sg.name=name;
var n=data.size$();
for (var i=0; i < n; i++) {
var operation=data.get$I(i);
if (Clazz.instanceOf(operation, "org.jmol.symmetry.SymmetryOperation")) {
var op=operation;
var iop=p$1.addOp$org_jmol_symmetry_SymmetryOperation$S$Z.apply(sg, [op, op.xyz, false]);
sg.operations[iop].setTimeReversal$I(op.timeReversal);
} else {
sg.addSymmetrySM$S$javajs_util_M4("xyz matrix:" + operation, operation);
}}
var sgn=sg.getDerivedSpaceGroup$();
if (sgn != null ) sg=sgn;
return sg;
}, 1);

Clazz.newMeth(C$, 'addSymmetry$S$I$Z', function (xyz, opId, allowScaling) {
xyz=xyz.toLowerCase$();
return (xyz.indexOf$S("[[") < 0 && xyz.indexOf$S("x4") < 0  && xyz.indexOf$S(";") < 0  && (xyz.indexOf$S("x") < 0 || xyz.indexOf$S("y") < 0  || xyz.indexOf$S("z") < 0 )  ? -1 : p$1.addOperation$S$I$Z.apply(this, [xyz, opId, allowScaling]));
});

Clazz.newMeth(C$, 'setFinalOperations$javajs_util_P3A$I$I$Z', function (atoms, atomIndex, count, doNormalize) {
if (this.hallInfo == null  && this.latticeParameter != 0 ) {
var h=Clazz.new_($I$(2).c$$S,[$I$(3).getHallLatticeEquivalent$I(this.latticeParameter)]);
p$1.generateAllOperators$org_jmol_symmetry_HallInfo.apply(this, [h]);
}this.finalOperations=null;
this.isBio=(this.name.indexOf$S("bio") >= 0);
if (this.index >= C$.getSpaceGroups$().length && !this.isBio  && this.name.indexOf$S("SSG:") < 0  && this.name.indexOf$S("[subsystem") < 0 ) {
var sg=this.getDerivedSpaceGroup$();
if (sg != null ) {
this.name=sg.getName$();
this.latticeType=sg.latticeType;
this.intlTableNumber=sg.intlTableNumber;
}}this.finalOperations=Clazz.array($I$(4), [this.operationCount]);
if (doNormalize && count > 0  && atoms != null  ) {
this.finalOperations[0]=Clazz.new_($I$(4).c$$org_jmol_symmetry_SymmetryOperation$javajs_util_P3A$I$I$Z,[this.operations[0], atoms, atomIndex, count, true]);
var atom=atoms[atomIndex];
var c=$I$(5).newP$javajs_util_T3(atom);
this.finalOperations[0].rotTrans$javajs_util_T3(c);
if (c.distance$javajs_util_T3(atom) > 1.0E-4 ) for (var i=0; i < count; i++) {
atom=atoms[atomIndex + i];
c.setT$javajs_util_T3(atom);
this.finalOperations[0].rotTrans$javajs_util_T3(c);
atom.setT$javajs_util_T3(c);
}
}for (var i=0; i < this.operationCount; i++) {
this.finalOperations[i]=Clazz.new_($I$(4).c$$org_jmol_symmetry_SymmetryOperation$javajs_util_P3A$I$I$Z,[this.operations[i], atoms, atomIndex, count, doNormalize]);
this.finalOperations[i].getCentering$();
}
});

Clazz.newMeth(C$, 'getOperationCount$', function () {
return this.finalOperations.length;
});

Clazz.newMeth(C$, 'getOperation$I', function (i) {
return this.finalOperations[i];
});

Clazz.newMeth(C$, 'getXyz$I$Z', function (i, doNormalize) {
return (this.finalOperations == null  ? this.operations[i].getXyz$Z(doNormalize) : this.finalOperations[i].getXyz$Z(doNormalize));
});

Clazz.newMeth(C$, 'newPoint$I$javajs_util_P3$javajs_util_P3$I$I$I', function (i, atom1, atom2, transX, transY, transZ) {
$I$(4).newPoint$javajs_util_M4$javajs_util_P3$javajs_util_P3$I$I$I(this.finalOperations[i], atom1, atom2, transX, transY, transZ);
});

Clazz.newMeth(C$, 'getInfo$org_jmol_symmetry_SpaceGroup$S$org_jmol_api_SymmetryInterface$Z', function (sg, spaceGroup, cellInfo, asMap) {
if (cellInfo != null ) {
if (sg == null ) {
if (spaceGroup.indexOf$S("[") >= 0) spaceGroup=spaceGroup.substring$I$I(0, spaceGroup.indexOf$S("[")).trim$();
if (spaceGroup.equals$O("unspecified!")) return "no space group identified in file";
sg=C$.determineSpaceGroupNA$S$FA(spaceGroup, cellInfo.getUnitCellParams$());
}} else if (spaceGroup.equalsIgnoreCase$S("ALL")) {
return C$.dumpAll$();
} else if (spaceGroup.equalsIgnoreCase$S("ALLSEITZ")) {
return C$.dumpAllSeitz$();
} else {
sg=C$.determineSpaceGroupN$S(spaceGroup);
if (sg == null ) {
sg=C$.createSpaceGroupN$S(spaceGroup);
} else {
var sb=Clazz.new_($I$(6));
while (sg != null ){
sb.append$S(sg.dumpInfo$());
sg=C$.determineSpaceGroupNS$S$org_jmol_symmetry_SpaceGroup(spaceGroup, sg);
}
return sb.toString();
}}var o;
try {
o=(asMap ? (sg == null  ? null : p$1.getInfo$org_jmol_api_SymmetryInterface.apply(sg, [cellInfo])) : sg == null  ? "?" : sg.dumpInfo$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
o=null;
} else {
throw e;
}
}
return o;
}, 1);

Clazz.newMeth(C$, 'getInfo$org_jmol_api_SymmetryInterface', function (cellInfo) {
if (this.info == null ) {
if (this.hmSymbol == null  || this.hmSymbolExt == null  ) {
this.info=Clazz.new_($I$(1));
this.info.put$TK$TV("HMSymbol", "??");
} else {
var seitz=p$1.dumpCanonicalSeitzList.apply(this, []);
this.info.put$TK$TV("SeitzList", seitz == null  ? "" : seitz);
this.info.put$TK$TV("HMSymbol", this.hmSymbolExt.length$() > 0 ? ":" + this.hmSymbolExt : "");
this.info.put$TK$TV("ITSNumber", Integer.valueOf$S(this.intlTableNumber));
this.info.put$TK$TV("ITSNumberFull", this.intlTableNumberFull);
this.info.put$TK$TV("crystalClass", this.crystalClass);
this.info.put$TK$TV("HallSymbol", this.hallInfo.hallSymbol.equals$O("--") ? "" : this.hallInfo.hallSymbol);
}this.info.put$TK$TV("operationCount", Integer.valueOf$I(this.operationCount));
var ops=Clazz.new_($I$(7));
this.info.put$TK$TV("operationInfo", ops);
for (var i=0; i < this.operationCount; i++) ops.addLast$TV(this.operations[i].getInfo$());

}var ucmap=(cellInfo == null  ? null : cellInfo.getUnitCellInfoMap$());
if (ucmap != null ) this.info.put$TK$TV("unitCell", ucmap);
return this.info;
}, p$1);

Clazz.newMeth(C$, 'dumpInfo$', function () {
var info=p$1.dumpCanonicalSeitzList.apply(this, []);
if (Clazz.instanceOf(info, "org.jmol.symmetry.SpaceGroup")) return (info).dumpInfo$();
var sb=Clazz.new_($I$(6)).append$S("\nHermann-Mauguin symbol: ");
if (this.hmSymbol == null  || this.hmSymbolExt == null  ) sb.append$S("?");
 else sb.append$S(this.hmSymbol).append$S(this.hmSymbolExt.length$() > 0 ? ":" + this.hmSymbolExt : "");
if (this.intlTableNumber != null ) {
sb.append$S("\ninternational table number: ").append$S(this.intlTableNumber).append$S(this.intlTableNumberExt.length$() > 0 ? ":" + this.intlTableNumberExt : "").append$S("\ncrystal class: " + this.crystalClass).append$S("\n\n").appendI$I(this.operationCount).append$S(" operators").append$S(!this.hallInfo.hallSymbol.equals$O("--") ? " from Hall symbol " + this.hallInfo.hallSymbol + "  #" + this.intlTableNumberFull  : "").append$S(": ");
}for (var i=0; i < this.operationCount; i++) {
sb.append$S("\n").append$S(this.operations[i].xyz);
}
sb.append$S("\n\n").append$S(this.hallInfo == null  ? "Hall symbol unknown" : this.hallInfo.dumpInfo$());
sb.append$S("\n\ncanonical Seitz: ").append$S(info).append$S("\n----------------------------------------------------\n");
return sb.toString();
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getLatticeDesignation$', function () {
return $I$(3).getLatticeDesignation$I(this.latticeParameter);
});

Clazz.newMeth(C$, 'setLatticeParam$I', function (latticeParameter) {
this.latticeParameter=latticeParameter;
if (latticeParameter > 10) this.latticeParameter=-$I$(3).getLatticeIndex$C($I$(3).getLatticeCode$I(latticeParameter));
});

Clazz.newMeth(C$, 'dumpCanonicalSeitzList', function () {
if (this.nHallOperators != null ) {
if (this.hallInfo == null ) this.hallInfo=Clazz.new_($I$(2).c$$S,[this.hallSymbol]);
p$1.generateAllOperators$org_jmol_symmetry_HallInfo.apply(this, [null]);
}var s=p$1.getCanonicalSeitzList.apply(this, []);
if (this.index >= C$.SG.length) {
var sgDerived=C$.findSpaceGroup$I$S(this.operationCount, s);
if (sgDerived != null ) return sgDerived;
}return (this.index >= 0 && this.index < C$.SG.length  ? this.hallSymbol + " = " : "") + s;
}, p$1);

Clazz.newMeth(C$, 'getDerivedSpaceGroup$', function () {
if (this.index >= 0 && this.index < C$.SG.length  || this.modDim > 0  || this.operations == null   || this.operations.length == 0  || this.operations[0].timeReversal != 0 ) return this;
if (this.finalOperations != null ) this.setFinalOperations$javajs_util_P3A$I$I$Z(null, 0, 0, false);
var s=p$1.getCanonicalSeitzList.apply(this, []);
return (s == null  ? null : C$.findSpaceGroup$I$S(this.operationCount, s));
});

Clazz.newMeth(C$, 'getCanonicalSeitzList', function () {
var list=Clazz.array(String, [this.operationCount]);
for (var i=0; i < this.operationCount; i++) list[i]=$I$(4).dumpSeitz$javajs_util_M4$Z(this.operations[i], true);

$I$(8).sort$OA$I$I(list, 0, this.operationCount);
var sb=Clazz.new_($I$(6)).append$S("\n[");
for (var i=0; i < this.operationCount; i++) sb.append$S(list[i].replace$C$C("\t", " ").replace$C$C("\n", " ")).append$S("; ");

sb.append$S("]");
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'findSpaceGroup$I$S', function (opCount, s) {
C$.getSpaceGroups$();
var lst=C$.htByOpCount.get$O(Integer.valueOf$I(opCount));
if (lst != null ) for (var i=0, n=lst.size$(); i < n; i++) {
var sg=lst.get$I(i);
if (C$.getCanonicalSeitz$I(sg.index).indexOf$S(s) >= 0) return C$.SG[sg.index];
}
return null;
}, 1);

Clazz.newMeth(C$, 'dumpAll$', function () {
var sb=Clazz.new_($I$(6));
C$.getSpaceGroups$();
for (var i=0; i < C$.SG.length; i++) sb.append$S("\n----------------------\n" + C$.SG[i].dumpInfo$());

return sb.toString();
}, 1);

Clazz.newMeth(C$, 'dumpAllSeitz$', function () {
C$.getSpaceGroups$();
var sb=Clazz.new_($I$(6));
for (var i=0; i < C$.SG.length; i++) sb.append$S("\n").appendO$O(C$.getCanonicalSeitz$I(i));

return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getCanonicalSeitz$I', function (i) {
if (C$.canonicalSeitzList == null ) C$.canonicalSeitzList=Clazz.array(String, [C$.SG.length]);
var cs=C$.canonicalSeitzList[i];
return (cs == null  ? C$.canonicalSeitzList[i]=p$1.dumpCanonicalSeitzList.apply(C$.SG[i], []).toString() : cs);
}, 1);

Clazz.newMeth(C$, 'setLattice$C$Z', function (latticeCode, isCentrosymmetric) {
this.latticeParameter=$I$(3).getLatticeIndex$C(latticeCode);
if (!isCentrosymmetric) this.latticeParameter=-this.latticeParameter;
}, p$1);

Clazz.newMeth(C$, 'createSpaceGroupN$S', function (name) {
C$.getSpaceGroups$();
name=name.trim$();
var sg=C$.determineSpaceGroupN$S(name);
var hallInfo;
if (sg == null ) {
hallInfo=Clazz.new_($I$(2).c$$S,[name]);
if (hallInfo.nRotations > 0) {
sg=Clazz.new_(C$.c$$I$S$Z,[-1, "0;0;--;--;" + name, true]);
sg.hallInfo=hallInfo;
} else if (name.indexOf$S(",") >= 0) {
sg=Clazz.new_(C$.c$$I$S$Z,[-1, "0;0;--;--;--", true]);
sg.doNormalize=false;
p$1.generateOperatorsFromXyzInfo$S.apply(sg, [name]);
}}if (sg != null ) p$1.generateAllOperators$org_jmol_symmetry_HallInfo.apply(sg, [null]);
return sg;
}, 1);

Clazz.newMeth(C$, 'addOperation$S$I$Z', function (xyz0, opId, allowScaling) {
if (xyz0 == null  || xyz0.length$() < 3 ) {
p$1.init$Z.apply(this, [false]);
return -1;
}var isSpecial=(xyz0.charAt$I(0) == "=");
if (isSpecial) xyz0=xyz0.substring$I(1);
var id=p$1.checkXYZlist$S.apply(this, [xyz0]);
if (id >= 0) return id;
if (xyz0.startsWith$S("x1,x2,x3,x4") && this.modDim == 0 ) {
this.xyzList.clear$();
this.operationCount=0;
this.modDim=$I$(9).parseInt$S(xyz0.substring$I(xyz0.lastIndexOf$S("x") + 1)) - 3;
} else if (xyz0.indexOf$S("m") >= 0) {
xyz0=$I$(9).rep$S$S$S(xyz0, "+m", "m");
if (xyz0.equals$O("x,y,z,m") || xyz0.equals$O("x,y,z(mx,my,mz)") ) {
this.xyzList.clear$();
this.operationCount=0;
}}var op=Clazz.new_($I$(4).c$$org_jmol_symmetry_SymmetryOperation$javajs_util_P3A$I$I$Z,[null, null, 0, opId, this.doNormalize]);
if (!op.setMatrixFromXYZ$S$I$Z(xyz0, this.modDim, allowScaling)) {
$I$(10).error$S("couldn't interpret symmetry operation: " + xyz0);
return -1;
}return p$1.addOp$org_jmol_symmetry_SymmetryOperation$S$Z.apply(this, [op, xyz0, isSpecial]);
}, p$1);

Clazz.newMeth(C$, 'checkXYZlist$S', function (xyz) {
return (this.xyzList.containsKey$O(xyz) ? this.xyzList.get$O(xyz).intValue$() : -1);
}, p$1);

Clazz.newMeth(C$, 'addOp$org_jmol_symmetry_SymmetryOperation$S$Z', function (op, xyz0, isSpecial) {
var xyz=op.xyz;
if (!isSpecial) {
var id=p$1.checkXYZlist$S.apply(this, [xyz]);
if (id >= 0) return id;
if (this.latticeOp < 0) {
var xxx=$I$(9).replaceAllCharacters$S$S$S(this.modDim > 0 ? $I$(4).replaceXn$S$I(xyz, this.modDim + 3) : xyz, "+123/", "");
if (this.xyzList.containsKey$O(xxx + "!")) {
this.latticeOp=this.operationCount;
} else {
this.xyzList.put$TK$TV(xxx + "!", Integer.valueOf$I(this.operationCount));
}}this.xyzList.put$TK$TV(xyz, Integer.valueOf$I(this.operationCount));
}if (!xyz.equals$O(xyz0)) this.xyzList.put$TK$TV(xyz0, Integer.valueOf$I(this.operationCount));
if (this.operations == null ) this.operations=Clazz.array($I$(4), [4]);
if (this.operationCount == this.operations.length) this.operations=$I$(11).arrayCopyObject$O$I(this.operations, this.operationCount * 2);
this.operations[this.operationCount++]=op;
op.index=this.operationCount;
if (op.timeReversal != 0) this.operations[0].timeReversal=1;
if ($I$(10).debugging) $I$(10).debug$S("\naddOperation " + this.operationCount + op.dumpInfo$() );
return this.operationCount - 1;
}, p$1);

Clazz.newMeth(C$, 'generateOperatorsFromXyzInfo$S', function (xyzInfo) {
p$1.init$Z.apply(this, [true]);
var terms=$I$(9).split$S$S(xyzInfo.toLowerCase$(), ";");
for (var i=0; i < terms.length; i++) this.addSymmetry$S$I$Z(terms[i], 0, false);

}, p$1);

Clazz.newMeth(C$, 'generateAllOperators$org_jmol_symmetry_HallInfo', function (h) {
if (h == null ) {
if (this.operationCount > 0) return;
h=this.hallInfo;
this.operations=Clazz.array($I$(4), [4]);
if (this.hallInfo == null  || this.hallInfo.nRotations == 0 ) h=this.hallInfo=Clazz.new_($I$(2).c$$S,[this.hallSymbol]);
p$1.setLattice$C$Z.apply(this, [this.hallInfo.latticeCode, this.hallInfo.isCentrosymmetric]);
p$1.init$Z.apply(this, [true]);
}switch (h.latticeCode.$c()) {
case 0:
case 83:
case 84:
case 80:
this.latticeType="P";
break;
default:
this.latticeType="" + h.latticeCode;
break;
}
var mat1=Clazz.new_($I$(12));
var operation=Clazz.new_($I$(12));
var newOps=Clazz.array($I$(12), [7]);
for (var i=0; i < 7; i++) newOps[i]=Clazz.new_($I$(12));

for (var i=0; i < h.nRotations; i++) {
var rt=h.rotationTerms[i];
mat1.setM4$javajs_util_M4(rt.seitzMatrix12ths);
var nRot=rt.order;
newOps[0].setIdentity$();
var nOps=this.operationCount;
for (var j=1; j <= nRot; j++) {
var m=newOps[j];
m.mul2$javajs_util_M4$javajs_util_M4(mat1, newOps[0]);
newOps[0].setM4$javajs_util_M4(m);
for (var k=0; k < nOps; k++) {
operation.mul2$javajs_util_M4$javajs_util_M4(m, this.operations[k]);
operation.m03=((operation.m03|0) + 12) % 12;
operation.m13=((operation.m13|0) + 12) % 12;
operation.m23=((operation.m23|0) + 12) % 12;
var xyz=$I$(4).getXYZFromMatrix$javajs_util_M4$Z$Z$Z(operation, true, true, true);
this.addSymmetrySM$S$javajs_util_M4(xyz, operation);
}
}
}
if (this.nHallOperators != null  && this.operationCount != this.nHallOperators.intValue$() ) $I$(10).error$S("Operator mismatch " + this.operationCount + " for " + this );
}, p$1);

Clazz.newMeth(C$, 'addSymmetrySM$S$javajs_util_M4', function (xyz, operation) {
var iop=p$1.addOperation$S$I$Z.apply(this, [xyz, 0, false]);
if (iop >= 0) {
var symmetryOperation=this.operations[iop];
symmetryOperation.setM4$javajs_util_M4(operation);
}return iop;
});

Clazz.newMeth(C$, 'determineSpaceGroupN$S', function (name) {
return C$.determineSpaceGroup$S$F$F$F$F$F$F$I(name, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1);
}, 1);

Clazz.newMeth(C$, 'determineSpaceGroupNS$S$org_jmol_symmetry_SpaceGroup', function (name, sg) {
return C$.determineSpaceGroup$S$F$F$F$F$F$F$I(name, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, sg.index);
}, 1);

Clazz.newMeth(C$, 'determineSpaceGroupNA$S$FA', function (name, unitCellParams) {
return (unitCellParams == null  ? C$.determineSpaceGroup$S$F$F$F$F$F$F$I(name, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1) : C$.determineSpaceGroup$S$F$F$F$F$F$F$I(name, unitCellParams[0], unitCellParams[1], unitCellParams[2], unitCellParams[3], unitCellParams[4], unitCellParams[5], -1));
}, 1);

Clazz.newMeth(C$, 'determineSpaceGroup$S$F$F$F$F$F$F$I', function (name, a, b, c, alpha, beta, gamma, lastIndex) {
var i=C$.determineSpaceGroupIndex$S$F$F$F$F$F$F$I(name, a, b, c, alpha, beta, gamma, lastIndex);
return (i >= 0 ? C$.SG[i] : null);
}, 1);

Clazz.newMeth(C$, 'determineSpaceGroupIndex$S$F$F$F$F$F$F$I', function (name, a, b, c, alpha, beta, gamma, lastIndex) {
C$.getSpaceGroups$();
if (lastIndex < 0) lastIndex=C$.SG.length;
name=name.trim$().toLowerCase$();
var checkBilbao=false;
if (name.startsWith$S("bilbao:")) {
checkBilbao=true;
name=name.substring$I(7);
}var nameType=(name.startsWith$S("hall:") ? 5 : name.startsWith$S("hm:") ? 3 : 0);
switch (nameType) {
case 3:
case 5:
name=name.substring$I(nameType);
break;
case 0:
if (name.contains$CharSequence("[")) {
nameType=5;
name=name.substring$I$I(0, name.indexOf$S("[")).trim$();
}}
var nameExt=name;
var i;
var haveExtension=false;
name=name.replace$C$C("_", " ");
if (name.length$() >= 2) {
i=(name.indexOf$S("-") == 0 ? 2 : 1);
if (i < name.length$() && name.charAt$I(i) != " " ) name=name.substring$I$I(0, i) + " " + name.substring$I(i) ;
name=C$.toCap$S$I(name, 2);
}var ext="";
if ((i=name.indexOf$S(":")) > 0) {
ext=name.substring$I(i + 1);
name=name.substring$I$I(0, i).trim$();
haveExtension=true;
}if (nameType != 5 && !haveExtension  && $I$(9).isOneOf$S$S(name, C$.ambiguousNames) ) {
ext="?";
haveExtension=true;
}var abbr=$I$(9).replaceAllCharacters$S$S$S(name, " ()", "");
var s;
if (nameType != 3 && !haveExtension ) for (i=lastIndex; --i >= 0; ) {
if (C$.SG[i].hallSymbol.equalsIgnoreCase$S(name)) return i;
}
if (nameType != 5) {
if (nameType != 3) for (i=lastIndex; --i >= 0; ) if (C$.SG[i].intlTableNumberFull.equalsIgnoreCase$S(nameExt)) return i;

for (i=lastIndex; --i >= 0; ) {
if (C$.SG[i].hmSymbolFull.equalsIgnoreCase$S(nameExt)) return i;
}
for (i=lastIndex; --i >= 0; ) if ((s=C$.SG[i]).hmSymbolAlternative != null  && s.hmSymbolAlternative.equalsIgnoreCase$S(nameExt) ) return i;

if (haveExtension) {
for (i=lastIndex; --i >= 0; ) if ((s=C$.SG[i]).hmSymbolAbbr.equalsIgnoreCase$S(abbr) && s.intlTableNumberExt.equalsIgnoreCase$S(ext) ) return i;

for (i=lastIndex; --i >= 0; ) if ((s=C$.SG[i]).hmSymbolAbbrShort.equalsIgnoreCase$S(abbr) && s.intlTableNumberExt.equalsIgnoreCase$S(ext) ) return i;

}var uniqueAxis=C$.determineUniqueAxis$F$F$F$F$F$F(a, b, c, alpha, beta, gamma);
if (!haveExtension || ext.charAt$I(0) == "?" ) for (i=0; i < lastIndex; i++) if (((s=C$.SG[i]).hmSymbolAbbr.equalsIgnoreCase$S(abbr) || s.hmSymbolAbbrShort.equalsIgnoreCase$S(abbr) ) && (!checkBilbao || s.isBilbao ) ) switch (s.ambiguityType.$c()) {
case 0:
return i;
case 97:
if (s.uniqueAxis == uniqueAxis || uniqueAxis == "\u0000" ) return i;
break;
case 111:
if (ext.length$() == 0) {
if (s.hmSymbolExt.equals$O("2")) return i;
} else if (s.hmSymbolExt.equalsIgnoreCase$S(ext)) return i;
break;
case 116:
if (ext.length$() == 0) {
if (s.axisChoice == "h") return i;
} else if ((s.axisChoice + "").equalsIgnoreCase$S(ext)) return i;
break;
}

}if (ext.length$() == 0) for (i=0; i < lastIndex; i++) if ((s=C$.SG[i]).intlTableNumber.equals$O(nameExt) && (!checkBilbao || s.isBilbao ) ) return i;

return -1;
}, 1);

Clazz.newMeth(C$, 'determineUniqueAxis$F$F$F$F$F$F', function (a, b, c, alpha, beta, gamma) {
if (a == b ) return (b == c  ? "\u0000" : "c");
if (b == c ) return "a";
if (c == a ) return "b";
if (alpha == beta ) return (beta == gamma  ? "\u0000" : "c");
if (beta == gamma ) return "a";
if (gamma == alpha ) return "b";
return "\u0000";
}, 1);

Clazz.newMeth(C$, 'buildSpaceGroup$S', function (cifLine) {
var terms=$I$(9).split$S$S(cifLine.toLowerCase$(), ";");
this.intlTableNumberFull=terms[0].trim$();
this.isBilbao=(terms.length < 6 && !this.intlTableNumberFull.equals$O("0") );
var parts=$I$(9).split$S$S(this.intlTableNumberFull, ":");
this.intlTableNumber=parts[0];
this.intlTableNumberExt=(parts.length == 1 ? "" : parts[1]);
this.ambiguityType="\u0000";
if (this.intlTableNumberExt.length$() > 0) {
if (this.intlTableNumberExt.equals$O("h") || this.intlTableNumberExt.equals$O("r") ) {
this.ambiguityType="t";
this.axisChoice=this.intlTableNumberExt.charAt$I(0);
} else if (this.intlTableNumberExt.startsWith$S("1") || this.intlTableNumberExt.startsWith$S("2") ) {
this.ambiguityType="o";
} else if (this.intlTableNumberExt.length$() <= 2) {
this.ambiguityType="a";
this.uniqueAxis=this.intlTableNumberExt.charAt$I(0);
} else if (this.intlTableNumberExt.contains$CharSequence("-")) {
this.ambiguityType="-";
}}if (!terms[1].equals$O("0")) {
this.nHallOperators=Integer.valueOf$S(terms[1]);
var lst=C$.htByOpCount.get$O(this.nHallOperators);
if (lst == null ) C$.htByOpCount.put$TK$TV(this.nHallOperators, lst=Clazz.new_($I$(7)));
lst.addLast$TV(this);
}this.crystalClass=C$.toCap$S$I($I$(9).split$S$S(terms[2], "^")[0], 1);
p$1.setHMSymbol$S.apply(this, [terms[3]]);
this.hallSymbol=terms[4];
if (this.hallSymbol.length$() > 1) this.hallSymbol=C$.toCap$S$I(this.hallSymbol, 2);
var info=this.intlTableNumber + this.hallSymbol;
if (this.intlTableNumber.charAt$I(0) != "0" && C$.lastInfo.equals$O(info) ) C$.ambiguousNames += this.hmSymbol + ";";
C$.lastInfo=info;
this.name=this.hallSymbol + " [" + this.hmSymbolFull + "] #" + this.intlTableNumber ;
}, p$1);

Clazz.newMeth(C$, 'setHMSymbol$S', function (name) {
this.hmSymbolFull=C$.toCap$S$I(name, 1);
this.latticeType=this.hmSymbolFull.substring$I$I(0, 1);
var parts=$I$(9).split$S$S(this.hmSymbolFull, ":");
this.hmSymbol=parts[0];
this.hmSymbolExt=(parts.length == 1 ? "" : parts[1]);
var pt=this.hmSymbol.indexOf$S(" -3");
if (pt >= 1) if ("admn".indexOf$I(this.hmSymbol.charAt$I(pt - 1)) >= 0) {
this.hmSymbolAlternative=(this.hmSymbol.substring$I$I(0, pt) + " 3" + this.hmSymbol.substring$I(pt + 3) ).toLowerCase$();
}this.hmSymbolAbbr=$I$(9).rep$S$S$S(this.hmSymbol, " ", "");
this.hmSymbolAbbrShort=$I$(9).rep$S$S$S(this.hmSymbol, " 1", "");
this.hmSymbolAbbrShort=$I$(9).rep$S$S$S(this.hmSymbolAbbrShort, " ", "");
}, p$1);

Clazz.newMeth(C$, 'toCap$S$I', function (s, n) {
return s.substring$I$I(0, n).toUpperCase$() + s.substring$I(n);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "" + this.intlTableNumberFull + "[" + this.index + "," + this.nHallOperators + "] " + this.hmSymbolFull + " " + this.hallSymbol ;
});

Clazz.newMeth(C$, 'getSpaceGroups$', function () {
return (C$.SG == null  ? (C$.SG=C$.createSpaceGroups$()) : C$.SG);
}, 1);

Clazz.newMeth(C$, 'createSpaceGroups$', function () {
var n=C$.STR_SG.length;
var defs=Clazz.array(C$, [n]);
for (var i=0; i < n; i++) defs[i]=Clazz.new_(C$.c$$I$S$Z,[i, C$.STR_SG[i], true]);

C$.STR_SG=null;
return defs;
}, 1);

Clazz.newMeth(C$, 'addLatticeVectors$javajs_util_Lst', function (lattvecs) {
if (this.latticeOp >= 0 || lattvecs.size$() == 0 ) return false;
var nOps=this.latticeOp=this.operationCount;
var isMagnetic=(lattvecs.get$I(0).length == this.modDim + 4);
var magRev=-2;
for (var j=0; j < lattvecs.size$(); j++) {
var data=lattvecs.get$I(j);
if (isMagnetic) {
magRev=(data[this.modDim + 3]|0);
data=$I$(11).arrayCopyF$FA$I(data, this.modDim + 3);
}if (data.length > this.modDim + 3) return false;
for (var i=0; i < nOps; i++) {
var newOp=Clazz.new_($I$(4).c$$org_jmol_symmetry_SymmetryOperation$javajs_util_P3A$I$I$Z,[null, null, 0, 0, true]);
newOp.modDim=this.modDim;
var op=this.operations[i];
newOp.linearRotTrans=$I$(11).arrayCopyF$FA$I(op.linearRotTrans, -1);
newOp.setFromMatrix$FA$Z(data, false);
if (magRev != -2) newOp.setTimeReversal$I(op.timeReversal * magRev);
newOp.xyzOriginal=newOp.xyz;
p$1.addOp$org_jmol_symmetry_SymmetryOperation$S$Z.apply(this, [newOp, newOp.xyz, true]);
}
}
return true;
});

Clazz.newMeth(C$, 'getSiteMultiplicity$javajs_util_P3$org_jmol_symmetry_UnitCell', function (pt, unitCell) {
var n=this.finalOperations.length;
var pts=Clazz.new_($I$(7));
for (var i=n; --i >= 0; ) {
var pt1=$I$(5).newP$javajs_util_T3(pt);
this.finalOperations[i].rotTrans$javajs_util_T3(pt1);
unitCell.unitize$javajs_util_T3(pt1);
for (var j=pts.size$(); --j >= 0; ) {
var pt0=pts.get$I(j);
if (pt1.distanceSquared$javajs_util_T3(pt0) < 1.0E-6 ) {
pt1=null;
break;
}}
if (pt1 != null ) pts.addLast$TV(pt1);
}
return (n/pts.size$()|0);
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
if (name != null  && name.startsWith$S("HM:") ) {
p$1.setHMSymbol$S.apply(this, [name.substring$I(3)]);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
