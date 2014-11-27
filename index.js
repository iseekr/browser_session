// 支持同时保存在sessionStorage里面，备份和同步
var cookiePre = skrs_;
var CookieStore = require('cookie-store');

var browserSessionHelper = function(option) {
	this.store = new CookieStore(cookiePre, {
		domain: option.domain,
		path: '/'
	});
	return this;
};

browserSessionHelper.prototype.set = function(k, v) {
	this.store.put(k, v);
	return this;
};

browserSessionHelper.prototype.get = function(k) {
	this.store.get(k);
	return this;
};