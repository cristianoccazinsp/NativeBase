var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Header=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _propTypes=_interopRequireDefault(require("prop-types"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _shoutem=require("../theme/shoutem");var _mapPropsToStyleNames=_interopRequireDefault(require("../utils/mapPropsToStyleNames"));var _getStyle=_interopRequireDefault(require("../utils/getStyle"));var _platform=_interopRequireDefault(require("../theme/variables/platform"));var _jsxFileName="/Users/cristiano/Desktop/trabajo/zinspector/NativeBase/src/basic/Header.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Header=function(_Component){(0,_inherits2.default)(Header,_Component);var _super=_createSuper(Header);function Header(){(0,_classCallCheck2.default)(this,Header);return _super.apply(this,arguments);}(0,_createClass2.default)(Header,[{key:"render",value:function render(){var _this=this;var _this$props=this.props,androidStatusBarColor=_this$props.androidStatusBarColor,iosBarStyle=_this$props.iosBarStyle,style=_this$props.style,transparent=_this$props.transparent,translucent=_this$props.translucent;var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform.default;var platformStyle=variables.platformStyle;return _react.default.createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:31,columnNumber:7}},_react.default.createElement(_reactNative.StatusBar,{backgroundColor:androidStatusBarColor?androidStatusBarColor:variables.statusBarColor,barStyle:iosBarStyle?iosBarStyle:platformStyle==='material'?'light-content':variables.iosStatusbar,translucent:transparent?true:translucent,__self:this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:9}}),_react.default.createElement(_reactNative.SafeAreaView,{style:{backgroundColor:(0,_getStyle.default)(style).backgroundColor},__self:this,__source:{fileName:_jsxFileName,lineNumber:47,columnNumber:9}},_react.default.createElement(_reactNative.View,(0,_extends2.default)({ref:function ref(c){return _this._root=c;}},this.props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:51,columnNumber:11}}))));}}]);return Header;}(_react.Component);Header.contextTypes={theme:_propTypes.default.object};Header.propTypes=(0,_extends2.default)({},_reactNative.ViewPropTypes,{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.number,_propTypes.default.array]),searchBar:_propTypes.default.bool,rounded:_propTypes.default.bool});var StyledHeader=(0,_shoutem.connectStyle)('NativeBase.Header',{},_mapPropsToStyleNames.default)(Header);exports.Header=StyledHeader;
//# sourceMappingURL=Header.js.map