var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.resolveComponentStyle=resolveComponentStyle;var _customMerge=_interopRequireDefault(require("./customMerge"));function _createForOfIteratorHelperLoose(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function resolveComponentStyle(componentName){var styleNames=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var themeStyle=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var parentStyle=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var themeCache=arguments.length>4?arguments[4]:undefined;var mergedStyle=(0,_customMerge.default)(themeStyle,parentStyle[componentName]);var sn;for(var _iterator=_createForOfIteratorHelperLoose(styleNames),_step;!(_step=_iterator()).done;){sn=_step.value;mergedStyle=(0,_customMerge.default)(mergedStyle,themeStyle[""+sn]);}for(var _iterator2=_createForOfIteratorHelperLoose(styleNames),_step2;!(_step2=_iterator2()).done;){sn=_step2.value;mergedStyle=(0,_customMerge.default)(mergedStyle,parentStyle[""+componentName+sn]);}var resolvedStyle=(0,_customMerge.default)(mergedStyle,parentStyle[componentName]);for(var _iterator3=_createForOfIteratorHelperLoose(styleNames),_step3;!(_step3=_iterator3()).done;){sn=_step3.value;resolvedStyle=(0,_customMerge.default)(resolvedStyle,mergedStyle[""+sn]);}for(var _iterator4=_createForOfIteratorHelperLoose(styleNames),_step4;!(_step4=_iterator4()).done;){sn=_step4.value;resolvedStyle=(0,_customMerge.default)(resolvedStyle,parentStyle[""+componentName+sn]);}return resolvedStyle;}
//# sourceMappingURL=resolveComponentStyle.js.map