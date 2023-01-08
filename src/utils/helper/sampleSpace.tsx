export  function findCoinOutcomes(value: number): number{
    if(Number.isNaN(value)) return 0

    if(value!==0){
      return Math.pow(2,value)
    }else{
      return 0
    }
  }