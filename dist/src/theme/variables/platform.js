Object.defineProperty(exports,"__esModule",{value:true});var _color=require('color');var _color2=_interopRequireDefault(_color);var _reactNative=require('react-native');var _commonColor=require('./commonColor');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var deviceHeight=_reactNative.Dimensions.get('window').height;var deviceWidth=_reactNative.Dimensions.get('window').width;var platform=_reactNative.Platform.OS;var platformStyle=undefined;var isIphoneX=platform===_commonColor.PLATFORM.IOS&&(deviceHeight===812||deviceWidth===812||deviceHeight===896||deviceWidth===896);exports.default={platformStyle:platformStyle,platform:platform,accordionBorderColor:'#d3d3d3',accordionContentPadding:10,accordionIconFontSize:18,contentStyle:'#f5f4f5',expandedIconStyle:'#000',headerStyle:'#edebed',iconStyle:'#000',elevation:4,containerTouchableBackgroundColor:'rgba(0,0,0,0.4)',innerTouchableBackgroundColor:'#fff',listItemHeight:50,listItemBorderColor:'transparent',marginHorizontal:-15,marginLeft:14,marginTop:15,minHeight:56,padding:15,touchableTextColor:'#757575',androidRipple:true,androidRippleColor:'rgba(256, 256, 256, 0.3)',androidRippleColorDark:'rgba(0, 0, 0, 0.15)',buttonUppercaseAndroidText:true,badgeBg:'#ED1727',badgeColor:'#fff',badgePadding:platform===_commonColor.PLATFORM.IOS?3:0,buttonFontFamily:platform===_commonColor.PLATFORM.IOS?'System':'Roboto_medium',buttonDisabledBg:'#b5b5b5',buttonPadding:6,buttonDefaultActiveOpacity:0.5,buttonDefaultFlex:1,buttonDefaultBorderRadius:2,buttonDefaultBorderWidth:1,get buttonPrimaryBg(){return this.brandPrimary;},get buttonPrimaryColor(){return this.inverseTextColor;},get buttonInfoBg(){return this.brandInfo;},get buttonInfoColor(){return this.inverseTextColor;},get buttonSuccessBg(){return this.brandSuccess;},get buttonSuccessColor(){return this.inverseTextColor;},get buttonDangerBg(){return this.brandDanger;},get buttonDangerColor(){return this.inverseTextColor;},get buttonWarningBg(){return this.brandWarning;},get buttonWarningColor(){return this.inverseTextColor;},get buttonTextSize(){return platform===_commonColor.PLATFORM.IOS?this.fontSizeBase*1.1:this.fontSizeBase-1;},get buttonTextSizeLarge(){return this.fontSizeBase*1.5;},get buttonTextSizeSmall(){return this.fontSizeBase*0.8;},get borderRadiusLarge(){return this.fontSizeBase*3.8;},get iconSizeLarge(){return this.iconFontSize*1.5;},get iconSizeSmall(){return this.iconFontSize*0.6;},cardDefaultBg:'#fff',cardBorderColor:'#ccc',cardBorderRadius:2,cardItemPadding:platform===_commonColor.PLATFORM.IOS?10:12,CheckboxRadius:platform===_commonColor.PLATFORM.IOS?10:0,CheckboxBorderWidth:platform===_commonColor.PLATFORM.IOS?1:2,CheckboxPaddingLeft:platform===_commonColor.PLATFORM.IOS?2:2,CheckboxPaddingBottom:platform===_commonColor.PLATFORM.IOS?2:1,CheckboxIconSize:platform===_commonColor.PLATFORM.IOS?18:16,CheckboxIconMarginTop:platform===_commonColor.PLATFORM.IOS?0:0,CheckboxFontSize:platform===_commonColor.PLATFORM.IOS?17:17,checkboxBgColor:'#039BE5',checkboxSize:20,checkboxTickColor:'#fff',checkboxDefaultColor:'transparent',checkboxTextShadowRadius:0,brandPrimary:platform===_commonColor.PLATFORM.IOS?'#007aff':'#3F51B5',brandInfo:'#62B1F6',brandSuccess:'#5cb85c',brandDanger:'#d9534f',brandWarning:'#f0ad4e',brandDark:'#000',brandLight:'#f4f4f4',containerBgColor:'#fff',fabBackgroundColor:'blue',fabBorderRadius:28,fabBottom:0,fabButtonBorderRadius:20,fabButtonHeight:40,fabButtonLeft:7,fabButtonMarginBottom:10,fabContainerBottom:20,fabDefaultPosition:20,fabElevation:4,fabIconColor:'#fff',fabIconSize:24,fabShadowColor:'#000',fabShadowOffsetHeight:2,fabShadowOffsetWidth:0,fabShadowOpacity:0.4,fabShadowRadius:2,fabWidth:56,DefaultFontSize:16,fontFamily:platform===_commonColor.PLATFORM.IOS?'System':'Roboto',fontSizeBase:15,get fontSizeH1(){return this.fontSizeBase*1.8;},get fontSizeH2(){return this.fontSizeBase*1.6;},get fontSizeH3(){return this.fontSizeBase*1.4;},footerHeight:55,footerDefaultBg:platform===_commonColor.PLATFORM.IOS?'#F8F8F8':'#3F51B5',footerPaddingBottom:0,tabBarTextColor:platform===_commonColor.PLATFORM.IOS?'#6b6b6b':'#b3c7f9',tabBarTextSize:platform===_commonColor.PLATFORM.IOS?14:11,activeTab:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',sTabBarActiveTextColor:'#007aff',tabBarActiveTextColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',tabActiveBgColor:platform===_commonColor.PLATFORM.IOS?'#cde1f9':'#3F51B5',toolbarBtnColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',toolbarDefaultBg:platform===_commonColor.PLATFORM.IOS?'#F8F8F8':'#3F51B5',toolbarHeight:platform===_commonColor.PLATFORM.IOS?64:56,toolbarSearchIconSize:platform===_commonColor.PLATFORM.IOS?20:23,toolbarInputColor:platform===_commonColor.PLATFORM.IOS?'#CECDD2':'#fff',searchBarHeight:platform===_commonColor.PLATFORM.IOS?30:40,searchBarInputHeight:platform===_commonColor.PLATFORM.IOS?30:50,toolbarBtnTextColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',toolbarDefaultBorder:platform===_commonColor.PLATFORM.IOS?'#a7a6ab':'#3F51B5',iosStatusbar:platform===_commonColor.PLATFORM.IOS?'dark-content':'light-content',get statusBarColor(){return(0,_color2.default)(this.toolbarDefaultBg).darken(0.2).hex();},get darkenHeader(){return(0,_color2.default)(this.tabBgColor).darken(0.03).hex();},iconFamily:'Ionicons',iconFontSize:platform===_commonColor.PLATFORM.IOS?30:28,iconHeaderSize:platform===_commonColor.PLATFORM.IOS?33:24,inputFontSize:17,inputBorderColor:'#D9D5DC',inputSuccessBorderColor:'#2b8339',inputErrorBorderColor:'#ed2f2f',inputHeightBase:50,get inputColor(){return this.textColor;},get inputColorPlaceholder(){return'#575757';},buttonLineHeight:19,lineHeightH1:32,lineHeightH2:27,lineHeightH3:22,lineHeight:platform===_commonColor.PLATFORM.IOS?20:24,listItemSelected:platform===_commonColor.PLATFORM.IOS?'#007aff':'#3F51B5',listBg:'transparent',listBorderColor:'#c9c9c9',listDividerBg:'#f4f4f4',listBtnUnderlayColor:'#DDD',listItemPadding:platform===_commonColor.PLATFORM.IOS?10:12,listNoteColor:'#808080',listNoteSize:13,defaultProgressColor:'#E4202D',inverseProgressColor:'#1A191B',radioBtnSize:platform===_commonColor.PLATFORM.IOS?25:23,radioSelectedColorAndroid:'#3F51B5',radioBtnLineHeight:platform===_commonColor.PLATFORM.IOS?29:24,get radioColor(){return this.brandPrimary;},segmentBackgroundColor:platform===_commonColor.PLATFORM.IOS?'#F8F8F8':'#3F51B5',segmentActiveBackgroundColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',segmentTextColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',segmentActiveTextColor:platform===_commonColor.PLATFORM.IOS?'#fff':'#3F51B5',segmentBorderColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',segmentBorderColorMain:platform===_commonColor.PLATFORM.IOS?'#a7a6ab':'#3F51B5',defaultSpinnerColor:'#45D56E',inverseSpinnerColor:'#1A191B',tabBarDisabledTextColor:'#BDBDBD',tabDefaultBg:platform===_commonColor.PLATFORM.IOS?'#F8F8F8':'#3F51B5',topTabBarTextColor:platform===_commonColor.PLATFORM.IOS?'#6b6b6b':'#b3c7f9',topTabBarActiveTextColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',topTabBarBorderColor:platform===_commonColor.PLATFORM.IOS?'#a7a6ab':'#fff',topTabBarActiveBorderColor:platform===_commonColor.PLATFORM.IOS?'#007aff':'#fff',tabBgColor:'#F8F8F8',tabFontSize:15,textColor:'#000',inverseTextColor:'#fff',noteFontSize:14,get defaultTextColor(){return this.textColor;},titleFontfamily:platform===_commonColor.PLATFORM.IOS?'System':'Roboto_medium',titleFontSize:platform===_commonColor.PLATFORM.IOS?17:19,subTitleFontSize:platform===_commonColor.PLATFORM.IOS?11:14,subtitleColor:platform===_commonColor.PLATFORM.IOS?'#8e8e93':'#FFF',titleFontColor:platform===_commonColor.PLATFORM.IOS?'#000':'#FFF',borderRadiusBase:platform===_commonColor.PLATFORM.IOS?5:2,borderWidth:1/_reactNative.PixelRatio.getPixelSizeForLayoutSize(1),contentPadding:10,dropdownLinkColor:'#414142',inputLineHeight:24,deviceWidth:deviceWidth,deviceHeight:deviceHeight,isIphoneX:isIphoneX,inputGroupRoundedBorderRadius:30,Inset:{portrait:{topInset:24,leftInset:0,rightInset:0,bottomInset:34},landscape:{topInset:0,leftInset:44,rightInset:44,bottomInset:21}}};
//# sourceMappingURL=platform.js.map