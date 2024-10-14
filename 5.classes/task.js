class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix(){
        this.state = this.state * 1.5;
    }

    set state(state){
        if(state < 0){
            this._state = 0;
        }
        if(state > 100){
            this._state = 100;
        } else {
        this._state = state;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = "magazine"){
        super(name, releaseDate, pagesCount, state, type)
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state, type = "book"){
        super(name, releaseDate, pagesCount, state, type)
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type = "novel"){
        super(author, name, releaseDate, pagesCount, state, type)
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type = "fantastic"){
        super(author, name, releaseDate, pagesCount, state, type)
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pageCount, state, type = "detective"){
        super(author, name, releaseDate, pageCount, state, type)
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let findBook = this.books.find(item => item[type] === value);
        if (findBook === undefined){
            return null
        } else {
            return findBook;
        }
    }

    giveBookByName(bookName){
        let findBook = this.books.find(item => item.name === bookName);
        if (findBook === undefined){
            return null
        } else {
            this.books.splice((this.books.indexOf(findBook)), 1);
            return findBook;
        }
    }
}

class Student {
    constructor(name, marks = {}){
        this.name = name;
        this.marks = marks;
    }

    addMark(mark, subject){
        if(mark < 2 || mark > 5){
            return
        } else if(subject in this.marks){
            this.marks[subject].push(mark);
        } else {
            this.marks[subject] = [mark];
        }
    }

    getAverageBySubject(subject){
        if(subject in this.marks){
        return (this.marks[subject].reduce((acc, val) => acc + val, 0)) / this.marks[subject].length;
        } else {
            return 0
        }
    }

    getAverage(){
        if(Object.keys(this.marks).length === 0){
            return 0
        } else {
        return Object.keys(this.marks).reduce((acc, val) => acc + this.getAverageBySubject(val), 0) / Object.keys(this.marks).length;
        }
    }
}