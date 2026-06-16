namespace SurveyBuilderNamespace {

    class Survey {

        public title: string = "Untitled survey";
        public eventName: string = "Event not defined";
        public questions: string[] = [];
        public anonymous: boolean = false;
        public maxScore: number = 5;
        public expirationDate?: string;

        // Muestra toda la información de la encuesta
        displaySurvey(): void {

            console.log(`
            Survey Information
            -------------------------
            Title: ${this.title}
            Event: ${this.eventName}
            Anonymous: ${this.anonymous ? "Yes" : "No"}
            Max Score: ${this.maxScore}
            Expiration Date: ${this.expirationDate ?? "No expiration"}

            Questions:
            ${this.questions.map((q, index) => `${index + 1}. ${q}`).join("\n")}
            `);

        }

    }

    class SurveyBuilder {

        // Objeto que se construirá paso a paso
        private survey: Survey;

        constructor() {

            // Se crea una encuesta vacía
            this.survey = new Survey();

        }

        // Configura el título
        setTitle(title: string): SurveyBuilder {

            this.survey.title = title;
            return this;

        }

        // Configura el nombre del evento
        setEventName(eventName: string): SurveyBuilder {

            this.survey.eventName = eventName;
            return this;

        }

        // Agrega preguntas a la encuesta
        addQuestion(question: string): SurveyBuilder {

            this.survey.questions.push(question);
            return this;

        }

        // Define si la encuesta será anónima
        setAnonymous(anonymous: boolean): SurveyBuilder {

            this.survey.anonymous = anonymous;
            return this;

        }

        // Configura la puntuación máxima
        setMaxScore(maxScore: number): SurveyBuilder {

            this.survey.maxScore = maxScore;
            return this;

        }

        // Configura la fecha límite
        setExpirationDate(expirationDate: string): SurveyBuilder {

            this.survey.expirationDate = expirationDate;
            return this;

        }

        // Devuelve la encuesta final
        build(): Survey {

            return this.survey;

        }

    }

    function main(): void {

        // Encuesta para Expo Ingeniería
        const engineeringSurvey: Survey = new SurveyBuilder()
            .setTitle("Expo Ingenierias")
            .setEventName("Expo Ingeniería 2026")
            .addQuestion("¿Como calificarias la organizacion del evento?")
            .addQuestion("¿El evento cumplio con tus espectativas?")
            .addQuestion("¿Atenderias este evento en su proxima edicion?")
            .addQuestion("Comentarios adicionales")
            .setAnonymous(true)
            .setMaxScore(10)
            .setExpirationDate("2026-06-30")
            .build();

        engineeringSurvey.displaySurvey();

        // Encuesta para conferencia cristiana
        const christianConferenceSurvey: Survey = new SurveyBuilder()
            .setTitle("Encuesta de Satisfacción de la Conferencia Cristiana")
            .setEventName("Congreso Juvenil Renacer 2026")
            .addQuestion("¿Qué te parecieron las predicaciones del evento?")
            .addQuestion("¿La organización del evento fue adecuada?")
            .addQuestion("¿Las actividades espirituales cumplieron tus expectativas?")
            .addQuestion("¿Te gustaría asistir nuevamente a este congreso?")
            .addQuestion("Comentarios adicionales")
            .setAnonymous(true)
            .setMaxScore(10)
            .build();

            christianConferenceSurvey.displaySurvey();

    }

    main();

}