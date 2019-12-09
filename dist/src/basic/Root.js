Object.defineProperty(exports,"__esModule",{value:true});exports.Root=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Root.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _ToastContainer=require('./ToastContainer');var _Actionsheet=require('./Actionsheet');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Root=function(_Component){_inherits(Root,_Component);function Root(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Root);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Root.__proto__||Object.getPrototypeOf(Root)).call.apply(_ref,[this].concat(args))),_this),_this.actionSheetRef=function(c){_this.actionSheet=c;},_this.toastRef=function(c){_this.toast=c;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Root,[{key:'componentDidMount',value:function componentDidMount(){Root.instances.push(this);}},{key:'componentWillUnmount',value:function componentWillUnmount(){var idx=Root.instances.indexOf(this);if(idx!==-1){Root.instances.splice(idx,1);}}},{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.View,_extends({ref:function ref(c){return _this2._root=c;}},this.props,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:54}}),this.props.children,_react2.default.createElement(_ToastContainer.ToastContainer,{ref:this.toastRef,__source:{fileName:_jsxFileName,lineNumber:56}}),_react2.default.createElement(_Actionsheet.ActionSheetContainer,{ref:this.actionSheetRef,__source:{fileName:_jsxFileName,lineNumber:59}}));}}]);return Root;}(_react.Component);Root.getActionSheetInstance=function(){var c=Root.instances[Root.instances.length-1];if(c){return c.actionSheet;}return null;};Root.getToastInstance=function(){var c=Root.instances[Root.instances.length-1];if(c){return c.toast;}return null;};Root.instances=[];Root.propTypes=_extends({},_reactNative.ViewPropTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])});var StyledRoot=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Root',{},_mapPropsToStyleNames2.default)(Root);exports.Root=StyledRoot;
//# sourceMappingURL=Root.js.map