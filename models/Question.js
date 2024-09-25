
export class Question{

    /**
     * 
     * @param {string} text this  a text of question
     * @param {string[]} choices this are choices of the question 
     * @param {string} answer this is the answer of the question 
     */ 

    constructor(text, choices, answer){
        this.text =text;
        this.choices = choices;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} choice some text to guess 
     * @returns {boolean} return true if the answer is correct
     */

    correctAnswer(choice){
        return choice === this.answer
    }
}


//voy a usar new para instanciar= instancias es lo mismo que decir que voy a usar una clase para crear un objeto o varios.

