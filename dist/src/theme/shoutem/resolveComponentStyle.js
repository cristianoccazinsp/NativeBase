var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.resolveComponentStyle=resolveComponentStyle;var _customMerge=_interopRequireDefault(require("./customMerge"));function resolveComponentStyle(componentName){var styleNames=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var themeStyle=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var parentStyle=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var themeCache=arguments.length>4?arguments[4]:undefined;var mergedStyle=(0,_customMerge.default)(themeStyle,parentStyle[componentName]);styleNames.forEach(function(sn,index){mergedStyle=(0,_customMerge.default)(mergedStyle,themeStyle[""+sn]);});styleNames.forEach(function(sn,index){mergedStyle=(0,_customMerge.default)(mergedStyle,parentStyle[""+componentName+sn]);});var resolvedStyle=(0,_customMerge.default)(mergedStyle,parentStyle[componentName]);styleNames.forEach(function(sn,index){resolvedStyle=(0,_customMerge.default)(resolvedStyle,mergedStyle[""+sn]);});styleNames.forEach(function(sn,index){resolvedStyle=(0,_customMerge.default)(resolvedStyle,parentStyle[""+componentName+sn]);});return resolvedStyle;}
//# sourceMappingURL=resolveComponentStyle.js.map