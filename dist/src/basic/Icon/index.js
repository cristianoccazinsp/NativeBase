Object.defineProperty(exports,"__esModule",{value:true});exports.Icon=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Icon/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _shoutem=require('../../theme/shoutem');var _platform=require('../../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);var _mapPropsToStyleNames=require('../../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _IconNB=require('../IconNB');var _NBIcons=require('./NBIcons.json');var _NBIcons2=_interopRequireDefault(_NBIcons);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var IS_IOS=_reactNative.Platform.OS==='ios';var Icon=function(_React$PureComponent){_inherits(Icon,_React$PureComponent);function Icon(){_classCallCheck(this,Icon);return _possibleConstructorReturn(this,(Icon.__proto__||Object.getPrototypeOf(Icon)).apply(this,arguments));}_createClass(Icon,[{key:'setRoot',value:function setRoot(c){this._root=c;}},{key:'getName',value:function getName(){var variables=this.context.theme?this.context.theme['@@shoutem.theme/themeStyle'].variables:_platform2.default;var platformStyle=variables.platformStyle;if((this.props.type||variables.iconFamily)==='Ionicons'){if(typeof _NBIcons2.default[this.props.name]!=='object'){return this.props.name;}var name=void 0;if(IS_IOS&&platformStyle!=='material'){name=this.props.active?_NBIcons2.default[this.props.name].ios.active:_NBIcons2.default[this.props.name].ios.default;}else{name=this.props.active?_NBIcons2.default[this.props.name].android.active:_NBIcons2.default[this.props.name].android.default;}return name;}return this.props.name;}},{key:'getIconName',value:function getIconName(){if(IS_IOS){if(this.props.ios){return this.props.ios;}return this.props.active?_NBIcons2.default[this.props.name].ios.active:_NBIcons2.default[this.props.name].ios.default;}else if(this.props.android){return this.props.android;}return this.props.active?_NBIcons2.default[this.props.name].android.active:_NBIcons2.default[this.props.name].android.default;}},{key:'render',value:function render(){if(this.props.ios&&this.props.android){return _react2.default.createElement(_IconNB.IconNB,_extends({ref:this.setRoot},this.props,{name:IS_IOS?this.props.ios:this.props.android,__source:{fileName:_jsxFileName,lineNumber:69}}));}else if(this.props.name&&(this.props.android||this.props.ios)){return _react2.default.createElement(_IconNB.IconNB,_extends({ref:this.setRoot},this.props,{name:this.getIconName(),__source:{fileName:_jsxFileName,lineNumber:77}}));}return _react2.default.createElement(_IconNB.IconNB,_extends({ref:this.setRoot},this.props,{name:this.getName(),__source:{fileName:_jsxFileName,lineNumber:85}}));}}]);return Icon;}(_react2.default.PureComponent);Icon.contextTypes={theme:_propTypes2.default.object};Icon.propTypes=_extends({},_IconNB.IconNB.propTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),name:_propTypes2.default.string,ios:_propTypes2.default.string,android:_propTypes2.default.string,active:_propTypes2.default.bool,type:_propTypes2.default.string});var StyledIcon=(0,_shoutem.connectStyle)('NativeBase.Icon',{},_mapPropsToStyleNames2.default)(Icon);exports.Icon=StyledIcon;
//# sourceMappingURL=index.js.map