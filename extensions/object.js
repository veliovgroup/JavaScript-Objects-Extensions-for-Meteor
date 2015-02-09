'use strict';
/*
 * @function
 * @name Object.defineReactiveProperty
 * @description define Reactive property:
 *      - set callback before Setter and Getter
 *      - set callback on Setter
 *      - set callback on Getter
 *
 * @param {object} target       - Object on which we define a property
 * @param {string} prop         - Name of defining property
 * @param {mix} value           - Assigned value to newly created property
 * @param {function} callback   - callback function with two parameters:
 *       @param {string} prop           - property name to be defined or modified
 *       @param {mix} currentValue      - Current value of object's property
 *       @param {object} target         - The object we working with
 *
 * @param {function} getCallback - Callback function on object's property Getter, with two parameters:
 *       @param {string} prop           - property name to be defined or modified
 *       @param {mix} currentValue      - Current value of object's property
 *
 * @param {function} setCallback - Callback function on object's property Setter, with two parameters:
 *       @param {string} prop           - property name to be defined or modified
 *       @param {mix} currentValue      - New (created || modified) value of object's property
 *
 */
Object.defineReactiveProperty = function (target, prop, value, callback, getCallback, setCallback) {

    var currentValue = (value) ? value : (target[prop]) ? target[prop] : ' ';
    callback && callback(prop, currentValue, target);

    Object.defineProperty(target, prop, {
        get: function () {

            if(getCallback){
                return getCallback(prop, currentValue);
            }else{
                return currentValue;
            }
        },

        set: function (newValue) {

            if(JSON.stringify(newValue) !== JSON.stringify(currentValue)) {
                currentValue = newValue;
                setCallback && setCallback(prop, currentValue);
            }
        }
    });
};


/*
 * @function
 * @name Object.prototype.diff
 * @description Extend Object prototype within diff function | Compare two arrays, and return matches if found
 *
 * @param {array}  comparable  - Comparable array
 * @param {bool}   hasMatches  - Return boolean if both arrays has matches?
 *
 */
Object.defineProperty(Object.prototype, 'diff',{
    value: function(comparable, hasMatches){
        if(!hasMatches){
            hasMatches = false;
        }

        var matches = [];

        this.sort();
        comparable.sort();

        for(var i = 0; i < this.length; i += 1) {
            if(comparable.indexOf(this[i]) > -1){
                matches.push(this[i]);
            }
        }

        return (hasMatches) ? (matches.length !== 0) : matches;
    },
    writable: true,
    configurable: true,
    enumerable: false
});


/*
 * @function
 * @name Object.prototype.inArray
 * @description Extend Object prototype within inArray function
 *
 * @param {mix}    needle       - Search-able needle
 * @param {bool}   searchInKey  - Search needle in keys?
 * @param {bool}   searchByKey  - Search needle only in keys?
 *
 */
Object.defineProperty(Object.prototype, 'inArray',{
    value: function(needle, searchInKey, searchByKey){
        var plain = [];
        var object = this;
        
        if( Object.prototype.toString.call(needle) === '[object Object]' || 
            Object.prototype.toString.call(needle) === '[object Array]'){
            needle = JSON.stringify(needle);
        }

        var each = function(arr){
          arr.forEach(function(v){
            if(Object.prototype.toString.call(v) === '[object Array]'){
              each(v);
            }else{
              plain.push(v);
            }
          });
        };

        each(object);

        return Object.keys(plain).some(function(key){
            
            var value = plain[key];

            if( Object.prototype.toString.call(value) === '[object Object]' || 
                Object.prototype.toString.call(value) === '[object Array]'){
                value = JSON.stringify(value);
            }

            if(searchByKey){
                if(key === needle){
                    return true;
                }
            }else if(searchInKey){
                if(value === needle || key === needle){
                    return true;
                }
            }else{
                if(value === needle){
                    return true;
                }
            }
        });
    },
    writable: true,
    configurable: true,
    enumerable: false
});


/*
 * @function
 * @name Object.prototype.walk
 * @description Extend Object prototype within walk function callback
 *
 * @callback callback
 *     @param {object}  object - original passed object
 *     @param {mix}     value  - current cursor value
 *     @param {string}  key    - current cursor key
 *
 */
Object.defineProperty(Object.prototype, 'walk',{
    value: function(callback){

        var object = this;
        
        return Object.keys(object).forEach(function(key){
            
            var value = object[key];

            if( Object.prototype.toString.call(value) === '[object Object]' || 
                Object.prototype.toString.call(value) === '[object Array]'){
                value.walk(callback);
            }
            
            callback(object, value, key);
        });
    },
    writable: true,
    configurable: true,
    enumerable: false
});



/*
 * @function
 * @name Object.Merge
 * @description Merge the enumerable attributes of two objects deeply
 * @url https://github.com/nrf110/deepmerge
 *
 * @param {object|array}   target   - Target Array|Project
 * @param {object|array}   src      - Source Array|Project
 *
 */
Object.Merge = function(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};

    if (array) {
        target = target || [];
        dst = dst.concat(target);
        src.forEach(function(e, i) {
            if (typeof dst[i] === 'undefined') {
                dst[i] = e;
            } else if (typeof e === 'object') {
                dst[i] = Object.Merge(target[i], e);
            } else {
                if (target.indexOf(e) === -1) {
                    dst.push(e);
                }
            }
        });
    } else {
        if (target && typeof target === 'object') {
            Object.keys(target).forEach(function (key) {
                dst[key] = target[key];
            });
        }
        Object.keys(src).forEach(function (key) {
            if (typeof src[key] !== 'object' || !src[key]) {
                dst[key] = src[key];
            }
            else {
                if (!target[key]) {
                    dst[key] = src[key];
                } else {
                    dst[key] = Object.Merge(target[key], src[key]);
                }
            }
        });
    }

    return dst;
};


/*
 * @function
 * @name Object.prototype.random
 * @description Extend Object prototype within random
 *              value pick up functionality for arrays
 */
Object.defineProperty(Object.prototype, 'random',{
    value: function(){
        return this[Math.floor(Math.random() * this.length)];
    }
});