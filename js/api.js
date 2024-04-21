(function(){
    var app = angular.module('api',[]);
    
    app.factory('api',function($http){
        return {
            httpParam: function(obj){
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

                    for(name in obj) {
                        value = obj[name];

                        if(value instanceof Array) {
                            for(i=0; i<value.length; ++i) {
                                subValue = value[i];
                                fullSubName = name + '[' + i + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += this.httpParam(innerObj) + '&';
                            }
                        }
                        else if(value instanceof Object) {
                            for(subName in value) {
                                subValue = value[subName];
                                fullSubName = name + '[' + subName + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += this.httpParam(innerObj) + '&';
                            }
                        }
                        else if(value !== undefined && value !== null)
                            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                    }

                return query.length ? query.substr(0, query.length - 1) : query;
            },
            request: function(obj){
                var req = {
                    url: 'api/' + obj.url,
                    method: obj.method,
                    data: this.httpParam(obj.data),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
                };
                $http(req).then(obj.success,obj.error);
            }
        };
    });
    
})();