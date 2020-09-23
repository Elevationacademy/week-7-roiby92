class UniqueArray {
    constructor() {
        this.length = 0
        this.existsList = {}
    }
    add(item) {
        if (this.length === 0) {
            this[this.length] = item
            this.existsList[item] = "_"
            this.length++
            return;
        }
        if (!this.exists(item)) {
            this[this.length] = item
            this.existsList[item] = "_"
            this.length++
        } 
        else {
            console.log(`the item alredy exists`);
        }

    }
    exists(item) {
        if (item === this.existsList[item]) {
            return true
        }
        return false
    }
    get(index) {
        return this[index]
    }
    showAll() {
        let str = ""
        for (let i = 0; i < this.length; i++) {
            str += this[i] + ","
        }
        str.substring(str.length - 1)
        return `[${str}]`
    }
}


const ua = new UniqueArray()

ua.add("roi")
ua.add("idan")
// ua.add("roi")

console.log(ua.showAll());