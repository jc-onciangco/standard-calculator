new Vue({
  el: "#app",
  data: {
		screen: '0',
    firstValue: '0',
    computedValue: null,
    chosenOperation: '',
    chosenOperationToEqualize: '',
    isOperationSet: false,
    isOperationReadyToUse: false,
    solution: '',
    valueCache: '',
    usedOp: '',
    setOp: '',
    isEqualReadyToUse: false,
    histories: [],
    postEqual: false,
    preEquateValueCache: '',
    isNotPreEquateValue: true,
    showWallpapers: false,
  },
  methods: {
 		writeDigit: function (digit) {
      if(this.isOperationSet){
      	/* this.isOpLock = false */
        this.screen = ''
        this.isOperationSet = false
        this.screen +=  digit
        this.chosenOperation = ''
        this.valueCache = this.solution
        this.isEqualReadyToUse = true
        this.isNotPreEquateValue = false
        /* this.isEqualReadyToUse = false */
      }
      else{
      	if(this.postEqual){
        	this.screen = ''
          this.firstValue = 0;
          this.valueCache = '';
          this.chosenOperation = ''
          this.solution = ''
        }

        if(this.screen === '0') this.screen = ''
        this.screen +=  digit
        this.isOperationReadyToUse = true
        this.postEqual = false
      }
    },
    op: function (op) {
      if(this.postEqual){
        this.isNotPreEquateValue = true
        this.solution = this.screen
        this.valueCache = ''
        this.postEqual = false
      }

    	if(this.isOperationReadyToUse === false){
      	return
      }
      else{
      	if(this.chosenOperation === op){
        	return
        }
      	else{
					 this.chosenOperation = op
        }
        switch(this.chosenOperation){
        	case '+':
          	if(this.isEqualReadyToUse){
              if(this.setOp === 'plus'){
                var resultparseInt = parseFloat(this.firstValue) + parseFloat(this.screen)
                }else if(this.setOp === 'minus'){
                  var resultparseInt = parseFloat(this.firstValue) - parseFloat(this.screen)
                  }else if(this.setOp === 'times'){
                    var resultparseInt = parseFloat(this.firstValue) * parseFloat(this.screen)
                    }else if(this.setOp === 'divide'){
                      var resultparseInt = parseFloat(this.firstValue) / parseFloat(this.screen)}
              this.isEqualReadyToUse = false
              this.setOp = 'plus'
              this.preEquateValueCache = this.screen
            }
            else{
              this.setOp = ''
              this.setOp = 'plus'
              if(this.isNotPreEquateValue)this.preEquateValueCache = this.screen
            }

            this.solution = `${this.valueCache}${this.preEquateValueCache}`
            this.solution += ` ${this.chosenOperation} `
            this.firstValue = (typeof resultparseInt) === 'number'? resultparseInt:this.screen
            this.screen = (typeof resultparseInt) === 'number'? resultparseInt:this.screen

            break

        	case '-':
          	if(this.isEqualReadyToUse){
              if(this.setOp === 'plus'){
                var resultparseInt = parseFloat(this.firstValue) + parseFloat(this.screen)
                }else if(this.setOp === 'minus'){
                  var resultparseInt = parseFloat(this.firstValue) - parseFloat(this.screen)
                  }else if(this.setOp === 'times'){
                    var resultparseInt = parseFloat(this.firstValue) * parseFloat(this.screen)
                    }else if(this.setOp === 'divide'){
                      var resultparseInt = parseFloat(this.firstValue) / parseFloat(this.screen)}
              this.isEqualReadyToUse = false
              this.setOp = 'minus'
              this.preEquateValueCache = this.screen
            }
            else{
              this.setOp = ''
              this.setOp = 'minus'
              if(this.isNotPreEquateValue)this.preEquateValueCache = this.screen
            }

            this.solution = `${this.valueCache}${this.preEquateValueCache}`
            this.solution += ` ${this.chosenOperation} `
            this.firstValue = (typeof resultparseInt) === 'number'? resultparseInt:this.screen
            this.screen = (typeof resultparseInt) === 'number'? resultparseInt:this.screen

            break

        	case '*':

          	if(this.isEqualReadyToUse){
              if(this.setOp === 'plus'){
                var resultparseInt = parseFloat(this.firstValue) + parseFloat(this.screen)
                }else if(this.setOp === 'minus'){
                  var resultparseInt = parseFloat(this.firstValue) - parseFloat(this.screen)
                  }else if(this.setOp === 'times'){
                    var resultparseInt = parseFloat(this.firstValue) * parseFloat(this.screen)
                    }else if(this.setOp === 'divide'){
                      var resultparseInt = parseFloat(this.firstValue) / parseFloat(this.screen)}
              this.isEqualReadyToUse = false
              this.setOp = 'times'
              this.preEquateValueCache = this.screen
            }
            else{
              this.setOp = ''
              this.setOp = 'times'
              if(this.isNotPreEquateValue)this.preEquateValueCache = this.screen
            }

            this.solution = `${this.valueCache}${this.preEquateValueCache}`
            this.solution += ' × '
            this.firstValue = (typeof resultparseInt) === 'number'? resultparseInt:this.screen
            this.screen = (typeof resultparseInt) === 'number'? resultparseInt:this.screen

            break

        	case '/':

          	if(this.isEqualReadyToUse){
              if(this.setOp === 'plus'){
                var resultparseInt = parseFloat(this.firstValue) + parseFloat(this.screen)
                }else if(this.setOp === 'minus'){
                  var resultparseInt = parseFloat(this.firstValue) - parseFloat(this.screen)
                  }else if(this.setOp === 'times'){
                    var resultparseInt = parseFloat(this.firstValue) * parseFloat(this.screen)
                    }else if(this.setOp === 'divide'){
                      var resultparseInt = parseFloat(this.firstValue) / parseFloat(this.screen)}
              this.isEqualReadyToUse = false
              this.setOp = 'divide'
              this.preEquateValueCache = this.screen
            }
            else{
              this.setOp = ''
              this.setOp = 'divide'
              if(this.isNotPreEquateValue)this.preEquateValueCache = this.screen
            }

            this.solution = `${this.valueCache}${this.preEquateValueCache}`
            this.solution += ' ÷ '
            this.firstValue = (typeof resultparseInt) === 'number'? resultparseInt:this.screen
            this.screen = (typeof resultparseInt) === 'number'? resultparseInt:this.screen

            break

        }
        this.isOperationSet = true
      }
    },
    equal: function () {
      if(this.isEqualReadyToUse){
        if(this.setOp === 'plus'){
          var resultparseInt = parseFloat(this.firstValue) + parseFloat(this.screen)
          }else if(this.setOp === 'minus'){
            var resultparseInt = parseFloat(this.firstValue) - parseFloat(this.screen)
            }else if(this.setOp === 'times'){
              var resultparseInt = parseFloat(this.firstValue) * parseFloat(this.screen)
              }else if(this.setOp === 'divide'){
                var resultparseInt = parseFloat(this.firstValue) / parseFloat(this.screen)}
        this.isEqualReadyToUse = false
        this.solution = `${this.valueCache}${this.screen}`
        this.firstValue = (typeof resultparseInt) === 'number'? resultparseInt:this.screen
        this.screen = (typeof resultparseInt) === 'number'? resultparseInt:this.screen
        console.log(`${this.solution} = ${this.screen}`)
        this.histories.unshift({
          solution: `${this.solution} =`,
          answer: `  ${this.screen} `
        })
      }
      else{
      	console.log(`${this.screen} =`)
      }
      this.isOperationSet = false
      this.postEqual = true
    },
    clear: function () {
      this.screen = ''
      this.chosenOperation = ''
      this.isOperationReadyToUse = false
      this.solution = ''
      this.isEqualReadyToUse = false
      this.firstValue = 0;
      this.valueCache = '';
      this.isOperationSet = false
      this.preEquateValueCache = ''
      this.isNotPreEquateValue = true
      if(this.screen === '') this.screen = '0'

    },
    deleteDigit: function () {
    	this.screen = this.screen.substr(0,(this.screen.length - 1))
      if(this.screen === '') this.screen = '0'

    },
    clearHistory: function () {
      this.histories = []
  },
    changeWallpaper: function (wp) {
      var body = document.body
      switch(wp){
        case 'crumbledPaper':
          body.style.backgroundImage = 'url(https://images.pexels.com/photos/220634/pexels-photo-220634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
          break
        case  'blueTextile':
          body.style.backgroundImage = 'url(https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
          break
        case 'wooden':
          body.style.backgroundImage = 'url(https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
          break
        case 'blueWater' :
          body.style.backgroundImage = 'url(https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
          break
        case 'forest' :
          body.style.backgroundImage = 'url(https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
          break
      }

    },
    show: function () {
       this.showWallpapers = !this.showWallpapers
    }
  },
  computed: {
  	isActive: function() {
    	return this.chosenOperation===''? false:true
    }
  }
})
