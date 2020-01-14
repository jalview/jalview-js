(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,['sun.awt.image.ImageWatched','.Link'],['sun.awt.image.ImageWatched','.WeakLink']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageWatched", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.endlink=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.endlink=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.watcherList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.watcherList=C$.endlink;
}, 1);

Clazz.newMeth(C$, 'addWatcher$java_awt_image_ImageObserver', function (iw) {
if (iw != null  && !this.isWatcher$java_awt_image_ImageObserver(iw) ) {
this.watcherList=Clazz.new_($I$(2).c$$java_awt_image_ImageObserver$sun_awt_image_ImageWatched_Link,[iw, this.watcherList]);
}});

Clazz.newMeth(C$, 'isWatcher$java_awt_image_ImageObserver', function (iw) {
return this.watcherList.isWatcher$java_awt_image_ImageObserver(iw);
});

Clazz.newMeth(C$, 'removeWatcher$java_awt_image_ImageObserver', function (iw) {
{
this.watcherList=this.watcherList.removeWatcher$java_awt_image_ImageObserver(iw);
}if (this.watcherList === C$.endlink ) {
this.notifyWatcherListEmpty$();
}});

Clazz.newMeth(C$, 'isWatcherListEmpty$', function () {
{
this.watcherList=this.watcherList.removeWatcher$java_awt_image_ImageObserver(null);
}return (this.watcherList === C$.endlink );
});

Clazz.newMeth(C$, 'newInfo$java_awt_Image$I$I$I$I$I', function (img, info, x, y, w, h) {
if (this.watcherList.newInfo$java_awt_Image$I$I$I$I$I(img, info, x, y, w, h)) {
this.removeWatcher$java_awt_image_ImageObserver(null);
}});
;
(function(){var C$=Clazz.newClass(P$.ImageWatched, "Link", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isWatcher$java_awt_image_ImageObserver', function (iw) {
return false;
});

Clazz.newMeth(C$, 'removeWatcher$java_awt_image_ImageObserver', function (iw) {
return this;
});

Clazz.newMeth(C$, 'newInfo$java_awt_Image$I$I$I$I$I', function (img, info, x, y, w, h) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ImageWatched, "WeakLink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.image.ImageWatched','.Link']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myref=null;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ImageObserver$sun_awt_image_ImageWatched_Link', function (obs, next) {
Clazz.super_(C$, this,1);
this.myref=obs;
this.next=next;
}, 1);

Clazz.newMeth(C$, 'isWatcher$java_awt_image_ImageObserver', function (iw) {
return (this.myref === iw  || this.next.isWatcher$java_awt_image_ImageObserver(iw) );
});

Clazz.newMeth(C$, 'removeWatcher$java_awt_image_ImageObserver', function (iw) {
var myiw=this.myref;
if (myiw == null ) {
return this.next.removeWatcher$java_awt_image_ImageObserver(iw);
}if (myiw === iw ) {
return this.next;
}this.next=this.next.removeWatcher$java_awt_image_ImageObserver(iw);
return this;
});

Clazz.newMeth(C$, 'newInfo$java_awt_Image$I$I$I$I$I', function (img, info, x, y, w, h) {
var ret=this.next.newInfo$java_awt_Image$I$I$I$I$I(img, info, x, y, w, h);
var myiw=this.myref;
if (myiw == null ) {
ret=true;
} else if (myiw.imageUpdate$(img, info, x, y, w, h) == false ) {
this.myref=null;
ret=true;
}return ret;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
