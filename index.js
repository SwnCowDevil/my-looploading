'use strict';

module.exports = function () {
	return {
		name: 'loop-loading',
		prop: {
			template: '<div>\n\n\t\t\t\t\t\t\t\t\t<div class="spot-container">\n\t\t                <div \n\t\t                \tclass="pre-spot pr" \n\t\t                \tv-for="(item,index) in spotData" \n\n\t\t                \t:style="{\'marginLeft\' : spotBetweenSpace + \'px\',width: spotDimension + \'px\',height : spotDimension + \'px\'}">\n\t\t                  <div\n\t\t\t\t\t\t\t\t\t\t\t\tv-if="index !== currentIndex"\n\t\t\t\t\t\t\t\t\t\t\t\t:style="{borderWidth : staticSpotBorderWidth + \'px\',borderColor : staticSpotColor , borderStyle : \'solid\',width: spotDimension + \'px\',height : spotDimension + \'px\', }"\n\t\t                    class="static-spot">\n\t\t                  </div>\n\n\t\t                  <div v-else>\n\t\t                  \t<div \n\t\t                  \t\tclass="circle-left-mask public-spot"\n\t\t                  \t\t:style="{width: spotDimension + \'px\',height : spotDimension + \'px\',\'clip\': \'rect(0,\' + spotDimension / 2 + \'px, auto, 0)\',background : activeSpotMaskBg}">\n\t\t\t                    <div \n\t\t\t                    \tclass="circle-left public-spot"\n\t\t\t                    \t:style="{width: spotDimension + \'px\',height : spotDimension + \'px\',\'clip\': \'rect(0,\' + spotDimension / 2 + \'px, auto, 0)\',background : activeSpotBg, \'animationDuration\' : progressTime + \'s\',animationPlayState : isPaused}" \n\t\t\t                    \t:class="leftRotate"></div>\n\t\t\t                  </div>\n\n\t\t\t                  <div \n\t\t\t                  \tclass="circle-right-mask public-spot"\n\t\t\t                  \t:style="{width: spotDimension + \'px\',height : spotDimension + \'px\',\'clip\': \'rect(0,\' + spotDimension + \'px, auto,\' + spotDimension / 2 + \'px)\',background : activeSpotMaskBg}">\n\t\t\t                    <div \n\t\t\t                    \tclass="circle-right public-spot" \n\t\t\t                    \t:style="{width: spotDimension + \'px\',height : spotDimension + \'px\',\'clip\': \'rect(0,\' + spotDimension + \'px, auto,\' + spotDimension / 2 + \'px)\',background : activeSpotBg, \'animationDuration\' : progressTime + \'s\' , animationPlayState : isPaused}"\n\t\t\t                    \t:class="rightRotate"></div>\n\t\t\t                  </div>\n\t\t                  </div>\n\n\n\t\t                </div>\n\n\t\t           \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>',
			props: {
				currentIndex: {
					type: Number,
					default: 0
				},
				spotBetweenSpace: {
					type: Number,
					default: 10
				},
				staticSpotBorderWidth: {
					type: Number,
					default: 1
				},
				staticSpotColor: {
					type: String,
					default: '#000000'
				},
				spotDimension: {
					type: Number,
					default: 6
				},
				activeSpotBg: {
					type: String,
					default: '#efefef'
				},
				activeSpotMaskBg: {
					type: String,
					default: '#000000'
				},
				progressTime: {
					type: Number,
					default: 7
				},
				isPaused: {
					type: String,
					default: 'running'
				},
				spotData: {
					type: Array,
					default: function _default() {
						return [{
							'index': 0
						}, {
							'index': 1
						}, {
							'index': 2
						}, {
							'index': 3
						}, {
							'index': 4
						}, {
							'index': 5
						}];
					}
				}

			},
			data: function data() {
				return {
					leftRotate: '',
					rightRotate: ''
				};
			},
			mounted: function mounted() {
				this.doLoadingAgain();
			},

			methods: {
				doLoadingAgain: function doLoadingAgain() {
					this.leftRotate = 'do-left-rotate';
					this.rightRotate = 'do-right-rotate';
				}
			},
			watch: {
				isPaused: function isPaused(playState) {
					this.isPaused = playState;
				},
				currentIndex: function currentIndex() {
					this.doLoadingAgain();
				}
			}

		}

	};
};