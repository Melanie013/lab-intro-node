class SortedList {
  constructor() {

    this.items = [];
    this.length = this.items.length

  }

  add(item) {

    this.items.push(item)
    this.items.sort(function(a, b){
      return a-b

    })
    this.length++
  }

  get(pos) {

    if (pos < this.length) return this.items[pos];
    else throw new Error('OutOfBounds');

  }

  max(items) {

    if (this.items.length === 0) throw new Error('EmptySortedList')
    else 
    return Math.max(...this.items)
  }

  min() {

    if (this.items.length === 0) throw new Error('EmptySortedList')
    else 
    return Math.min(...this.items)
  }

  sum() {

    const totalSum = this.items.reduce(function(acc, val){
      return acc += val

    },0)
      return totalSum;
  }

  avg() {


    if (this.items.length === 0) throw new Error('EmptySortedList')

    const totalSum = this.items.reduce(function(acc, val){
      return acc += val

    },0)
      return totalSum / this.items.length;
      
  }
}

module.exports = SortedList;
