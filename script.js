document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');

    if (subject) {
        document.getElementById('subject-name').textContent = subject.charAt(0).toUpperCase() + subject.slice(1);

        // Mock teacher data
        const teachers = {
            science: { name: 'Mr. Sharma', details: 'Expert in physics and chemistry.' },
            maths: { name: 'Mrs. Gupta', details: 'Teaches algebra and calculus.' },
            arts: { name: 'Ms. Roy', details: 'Specialist in modern art.' },
            social: { name: 'Mr. Verma', details: 'Focuses on history and geography.' },
            hindi: { name: 'Mrs. Rani', details: 'Language and literature.' },
            english: { name: 'Mr. Rao', details: 'Focuses on literature and grammar.' },
            sports: { name: 'Coach Singh', details: 'Physical education and sports.' }
        };

        const teacher = teachers[subject];
        if (teacher) {
            document.getElementById('teacher-name').textContent = Teacher: ${teacher.name};
            document.getElementById('teacher-details').textContent = teacher.details;
        }
    }
});