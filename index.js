
module.exports = function  () {
	return {
		name: 'loop-loading',
		prop: {
			template: `<div>

									<div class="spot-container">
		                <div 
		                	class="pre-spot pr" 
		                	v-for="(item,index) in spotData" 

		                	:style="{'marginLeft' : spotBetweenSpace + 'px',width: spotDimension + 'px',height : spotDimension + 'px'}">
		                  <div
												v-if="index !== currentIndex"
												:style="{borderWidth : staticSpotBorderWidth + 'px',borderColor : staticSpotColor , borderStyle : 'solid',width: spotDimension + 'px',height : spotDimension + 'px', }"
		                    class="static-spot">
		                  </div>

		                  <div v-else>
		                  	<div 
		                  		class="circle-left-mask public-spot"
		                  		:style="{width: spotDimension + 'px',height : spotDimension + 'px','clip': 'rect(0,' + spotDimension / 2 + 'px, auto, 0)',background : activeSpotMaskBg}">
			                    <div 
			                    	class="circle-left public-spot"
			                    	:style="{width: spotDimension + 'px',height : spotDimension + 'px','clip': 'rect(0,' + spotDimension / 2 + 'px, auto, 0)',background : activeSpotBg, 'animationDuration' : progressTime + 's',animationPlayState : isPaused}" 
			                    	:class="leftRotate"></div>
			                  </div>

			                  <div 
			                  	class="circle-right-mask public-spot"
			                  	:style="{width: spotDimension + 'px',height : spotDimension + 'px','clip': 'rect(0,' + spotDimension + 'px, auto,' + spotDimension / 2 + 'px)',background : activeSpotMaskBg}">
			                    <div 
			                    	class="circle-right public-spot" 
			                    	:style="{width: spotDimension + 'px',height : spotDimension + 'px','clip': 'rect(0,' + spotDimension + 'px, auto,' + spotDimension / 2 + 'px)',background : activeSpotBg, 'animationDuration' : progressTime + 's' , animationPlayState : isPaused}"
			                    	:class="rightRotate"></div>
			                  </div>
		                  </div>


		                </div>

		           		</div>

								</div>`,
			props: {
				currentIndex: {
					type: Number,
					default: 0,
				},
				spotBetweenSpace: {
					type: Number,
					default: 10,
				},
				staticSpotBorderWidth: {
					type: Number,
					default: 1,
				},
				staticSpotColor: {
					type: String,
					default: '#000000',
				},
				spotDimension: {
					type: Number,
					default: 6,
				},
				activeSpotBg: {
					type: String,
					default: '#efefef',
				},
				activeSpotMaskBg: {
					type: String,
					default: '#000000',
				},
				progressTime: {
					type: Number,
					default: 7,
				},
				isPaused:{
					type: String,
					default: 'running',
				},
				spotData: {
					type: Array,
					default: function(){
						return [
		          {
		            'index': 0
		          },
		          {
		            'index': 1
		          },
		          {
		            'index': 2
		          },
		          {
		            'index': 3
		          },
		          {
		            'index': 4
		          },
		          {
		            'index': 5
		          },
		        ]
					},
				}

			},
			data() {
				return {
					leftRotate: '',
	      	rightRotate: '',
				}
			},
			mounted () {
				this.doLoadingAgain()
			},
			methods: {
				doLoadingAgain(){
					this.leftRotate = 'do-left-rotate'
					this.rightRotate = 'do-right-rotate'
				}
			},
			watch: {
				isPaused(playState){
					this.isPaused = playState
				},
				currentIndex(){
					this.doLoadingAgain()
				}
			}

		},
		
	}
}