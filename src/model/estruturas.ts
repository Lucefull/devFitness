export class Exercicio {
     id : number
     name : string
     serie : number
     repeticoes : number
     isDone : boolean

    constructor(id : number, name : string, serie : number, repeticoes: number) {
        this.id = id
        this.name = name
        this.serie = serie
        this.repeticoes = repeticoes
        this.isDone = false
    }
}

export class Treino {
     id : number
     tipo : string
     name : string
     tempo : number
     data : Date
     exercicios : Exercicio[]
     isDone : boolean

    constructor(id : number, tipo : string, name : string, tempo : number) {
        this.id = id
        this.tempo = tempo
        this.tipo = tipo
        this.name = name
        this.data = new Date()
        this.exercicios = []
        this.isDone = false
    }
    getExercicioById(id: number) : Exercicio {
        return this.exercicios[id - 1] 
    }
    addExercicio(name : string, serie : number, repeticoes : number) : void {
        this.exercicios.push(new Exercicio(this.exercicios.length + 1, name, serie, repeticoes))
    }
    editExercicio(id : number, name : string, serie : number, repeticoes : number) : void {
        for(let index = 0; index < this.exercicios.length; index++) {
            if(this.exercicios[index].id == id) {
                this.exercicios[index].name = name
                this.exercicios[index].serie = serie
                this.exercicios[index].repeticoes = repeticoes
            }
        }
    }
    removeExercicio(id : number) : void {
        this.exercicios.splice(id - 1, 1)
    }
}