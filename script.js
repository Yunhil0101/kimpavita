function showNB() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("nb-message").style.display = "block";
}

function demarrerQuiz() {
    document.getElementById("nb-message").style.display = "none";
    document.getElementById("question-box").style.display = "block";
    afficherQuestion();
}

const questions = [
    { question: "Avez-vous constaté un changement dans la fréquence, la couleur, ou l'odeur de vos urines, comme une urine mousseuse ?", pointsOui: 0, pointsNon: 2 },
    { question: "Êtes-vous hypertendu ou diabétique ?", pointsOui: 0, pointsNon: 2 },
    { question: "Avez-vous des œdèmes (gonflement des pieds et des chevilles) ?", pointsOui: 0, pointsNon: 2 },
    { question: "Votre haleine a-t-elle une odeur ammoniacale (semblable à celle des urines) ?", pointsOui: 0, pointsNon: 2 },
    { question: "Avez-vous l’impression d’être constamment fatigué(e) ?", pointsOui: 0, pointsNon: 2 },
    { question: "Ressentez-vous des douleurs dans le bas du dos, non liées à une position inconfortable ?", pointsOui: 0, pointsNon: 2 },
    { question: "Prenez-vous régulièrement des médicaments traditionnels ou des anti-inflammatoires (comme l'ibuprofène) lorsque vous êtes malade ?", pointsOui: 0, pointsNon: 2 }
];

let currentQuestion = 0;
let score = 0;

function afficherQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].question;
    } else {
        afficherResultat();
    }
}

function answer(response) {
    const current = questions[currentQuestion];
    score += response === 'oui' ? current.pointsOui : current.pointsNon;
    currentQuestion++;
    afficherQuestion();
}

function afficherResultat() {
    document.getElementById("question-box").style.display = "none";
    const result = document.getElementById("result");
    result.style.display = "block";

    let message;
    if (score >= 12) {
        message = `Félicitations, vous avez une santé rénale optimale ! Continuez à adopter des habitudes saines pour vos reins :
        <ul>
            <li>Boire 1,5 L d'eau par jour</li>
            <li>Faire de l'activité physique régulière</li>
            <li>Éviter l'automédication</li>
            <li>Adopter une alimentation saine (pauvre en sel)</li>
        </ul>`;
    } else if (score >= 6) {
        message = "Votre santé rénale est relativement bonne, mais il est recommandé d'adopter quelques habitudes de prévention. Consultez un professionnel de santé pour des conseils personnalisés.";
    } else {
        message = "Votre santé rénale semble défectueuse. Prenez rendez-vous avec un professionnel de santé pour un bilan rénal détaillé et des conseils pour améliorer votre hygiène rénale.";
    }

    result.innerHTML = `<p>${message}</p><button onclick="location.href='feedback.html'">Continuer</button>`;
}
