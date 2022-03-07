Vue.createApp({

    data(){
        return{
            Word: null,
            Words: [],
            tempWord: null,
            Message: "",
            
        }

    },

    methods: {
        saveWords(word){
            if(word != ""){
                this.Words.push(word)
                this.Words.push(word.toUpperCase())
                this.Words.push(word.toLowerCase())
                this.Word = word.substring(0,1)
                this.tempWord = word.substring(1)
                this.Word = this.Words.push(this.Word.toUpperCase() + this.tempWord)
                this.Word = word.substring(word.length-1)
                this.tempWord = word.substring(0, word.length-1)
                this.Word = this.Words.push(this.tempWord + this.Word.toUpperCase())
                this.Words.push(word.split("").reverse().join(""))
                this.Word = ""
            }
        },
    }
}).mount("#app")