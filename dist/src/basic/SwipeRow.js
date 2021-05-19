var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.SwipeRow=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _shoutem=require("../theme/shoutem");var _mapPropsToStyleNames=_interopRequireDefault(require("../utils/mapPropsToStyleNames"));var _Left=require("./Left");var _Right=require("./Right");var _Body=require("./Body");var _ListItem=require("./ListItem");var _jsxFileName="/Users/cristiano/Desktop/trabajo/zinspector/NativeBase/src/basic/SwipeRow.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var PREVIEW_OPEN_DELAY=700;var PREVIEW_CLOSE_DELAY=300;var SwipeRow=function(_Component){(0,_inherits2.default)(SwipeRow,_Component);var _super=_createSuper(SwipeRow);function SwipeRow(props){var _this;(0,_classCallCheck2.default)(this,SwipeRow);_this=_super.call(this,props);_this.horizontalSwipeGestureBegan=false;_this.swipeInitialX=null;_this.parentScrollEnabled=true;_this.ranPreview=false;_this.state={dimensionsSet:false,hiddenHeight:0,hiddenWidth:0};_this._translateX=new _reactNative.Animated.Value(0);return _this;}(0,_createClass2.default)(SwipeRow,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this._panResponder=_reactNative.PanResponder.create({onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(e,gs){return _this2.handleOnMoveShouldSetPanResponder(e,gs);},onPanResponderMove:function onPanResponderMove(e,gs){return _this2.handlePanResponderMove(e,gs);},onPanResponderRelease:function onPanResponderRelease(e,gs){return _this2.handlePanResponderEnd(e,gs);},onPanResponderTerminate:function onPanResponderTerminate(e,gs){return _this2.handlePanResponderEnd(e,gs);},onShouldBlockNativeResponder:function onShouldBlockNativeResponder(_){return false;}});}},{key:"getPreviewAnimation",value:function getPreviewAnimation(toValue,delay){return _reactNative.Animated.timing(this._translateX,{duration:this.props.previewDuration,toValue:toValue,delay:delay,useNativeDriver:true});}},{key:"onContentLayout",value:function onContentLayout(e){var _this3=this;this.setState({dimensionsSet:!this.props.recalculateHiddenLayout,hiddenHeight:e.nativeEvent.layout.height,hiddenWidth:e.nativeEvent.layout.width});if(this.props.preview&&!this.ranPreview){this.ranPreview=true;var previewOpenValue=this.props.previewOpenValue||this.props.rightOpenValue*0.5;this.getPreviewAnimation(previewOpenValue,PREVIEW_OPEN_DELAY).start(function(_){_this3.getPreviewAnimation(0,PREVIEW_CLOSE_DELAY).start();});}}},{key:"handleOnMoveShouldSetPanResponder",value:function handleOnMoveShouldSetPanResponder(e,gs){var dx=gs.dx;return Math.abs(dx)>this.props.directionalDistanceChangeThreshold;}},{key:"handlePanResponderMove",value:function handlePanResponderMove(e,gestureState){var dx=gestureState.dx,dy=gestureState.dy;var absDx=Math.abs(dx);var absDy=Math.abs(dy);if(absDx>this.props.directionalDistanceChangeThreshold||absDy>this.props.directionalDistanceChangeThreshold){if(absDy>absDx&&!this.horizontalSwipeGestureBegan){return;}if(this.parentScrollEnabled){this.parentScrollEnabled=false;this.props.setScrollEnabled&&this.props.setScrollEnabled(false);}if(this.swipeInitialX===null){this.swipeInitialX=this._translateX._value;}if(!this.horizontalSwipeGestureBegan){this.horizontalSwipeGestureBegan=true;this.props.swipeGestureBegan&&this.props.swipeGestureBegan();}var newDX=this.swipeInitialX+dx;if(this.props.disableLeftSwipe&&newDX<0){newDX=0;}if(this.props.disableRightSwipe&&newDX>0){newDX=0;}if(this.props.stopLeftSwipe&&newDX>this.props.stopLeftSwipe){newDX=this.props.stopLeftSwipe;}if(this.props.stopRightSwipe&&newDX<this.props.stopRightSwipe){newDX=this.props.stopRightSwipe;}this._translateX.setValue(newDX);}}},{key:"handlePanResponderEnd",value:function handlePanResponderEnd(e,gestureState){if(!this.parentScrollEnabled){this.parentScrollEnabled=true;this.props.setScrollEnabled&&this.props.setScrollEnabled(true);}var toValue=0;if(this._translateX._value>=0){if(this._translateX._value>this.props.leftOpenValue*(this.props.swipeToOpenPercent/100)){toValue=this.props.leftOpenValue;}}else{if(this._translateX._value<this.props.rightOpenValue*(this.props.swipeToOpenPercent/100)){toValue=this.props.rightOpenValue;}}this.manuallySwipeRow(toValue);}},{key:"closeRow",value:function closeRow(){this.manuallySwipeRow(0);}},{key:"openLeftRow",value:function openLeftRow(){this.manuallySwipeRow(this.props.leftOpenValue);}},{key:"openRightRow",value:function openRightRow(){this.manuallySwipeRow(this.props.rightOpenValue);}},{key:"manuallySwipeRow",value:function manuallySwipeRow(toValue){var _this4=this;_reactNative.Animated.spring(this._translateX,{toValue:toValue,friction:this.props.friction,tension:this.props.tension,useNativeDriver:true}).start(function(_){if(toValue===0){_this4.props.onRowDidClose&&_this4.props.onRowDidClose();}else{_this4.props.onRowDidOpen&&_this4.props.onRowDidOpen();}});if(toValue===0){this.props.onRowClose&&this.props.onRowClose();}else{this.props.onRowOpen&&this.props.onRowOpen(toValue);}this.swipeInitialX=null;this.horizontalSwipeGestureBegan=false;}},{key:"renderMainContent",value:function renderMainContent(){var _this5=this;if(this.state.dimensionsSet){return _react.default.createElement(_reactNative.Animated.View,(0,_extends2.default)({},this._panResponder.panHandlers,{style:{transform:[{translateX:this._translateX}],zIndex:2},__self:this,__source:{fileName:_jsxFileName,lineNumber:215,columnNumber:9}}),!this.props.list?_react.default.createElement(_ListItem.ListItem,{list:true,style:this.props.style,__self:this,__source:{fileName:_jsxFileName,lineNumber:223,columnNumber:13}},this.props.body):_react.default.createElement(_reactNative.View,{style:[{backgroundColor:'#FFF'},this.props.style],__self:this,__source:{fileName:_jsxFileName,lineNumber:227,columnNumber:13}},this.props.body));}return _react.default.createElement(_reactNative.Animated.View,(0,_extends2.default)({},this._panResponder.panHandlers,{onLayout:function onLayout(e){return _this5.onContentLayout(e);},style:{transform:[{translateX:this._translateX}],zIndex:2},__self:this,__source:{fileName:_jsxFileName,lineNumber:235,columnNumber:7}}),!this.props.list?_react.default.createElement(_ListItem.ListItem,{list:true,style:this.props.style,__self:this,__source:{fileName:_jsxFileName,lineNumber:244,columnNumber:11}},this.props.body):_react.default.createElement(_reactNative.View,{style:[{backgroundColor:'#FFF'},this.props.style],__self:this,__source:{fileName:_jsxFileName,lineNumber:248,columnNumber:11}},this.props.body));}},{key:"render",value:function render(){return _react.default.createElement(_reactNative.View,{style:this.props.style?this.props.style:undefined,__self:this,__source:{fileName:_jsxFileName,lineNumber:258,columnNumber:7}},_react.default.createElement(_reactNative.View,{style:[styles.hidden,{height:this.state.hiddenHeight,flex:1,flexDirection:'row',justifyContent:'space-between'}],__self:this,__source:{fileName:_jsxFileName,lineNumber:259,columnNumber:9}},_react.default.createElement(_Left.Left,{style:{width:this.props.leftOpenValue,zIndex:1},__self:this,__source:{fileName:_jsxFileName,lineNumber:270,columnNumber:11}},this.props.left),_react.default.createElement(_Body.Body,{style:{flex:0},__self:this,__source:{fileName:_jsxFileName,lineNumber:273,columnNumber:11}}),_react.default.createElement(_Right.Right,{style:{width:-this.props.rightOpenValue,zIndex:1},__self:this,__source:{fileName:_jsxFileName,lineNumber:274,columnNumber:11}},this.props.right)),this.renderMainContent());}}]);return SwipeRow;}(_react.Component);SwipeRow.defaultProps={leftOpenValue:0,rightOpenValue:0,closeOnRowPress:true,disableLeftSwipe:false,disableRightSwipe:false,recalculateHiddenLayout:false,preview:false,previewDuration:300,directionalDistanceChangeThreshold:2,swipeToOpenPercent:50};var styles={container:{},hidden:{bottom:0,left:0,overflow:'hidden',position:'absolute',right:0,top:0}};var StyledSwipeRow=(0,_shoutem.connectStyle)('NativeBase.SwipeRow',{},_mapPropsToStyleNames.default)(SwipeRow);exports.SwipeRow=StyledSwipeRow;
//# sourceMappingURL=SwipeRow.js.map