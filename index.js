const toGenerate = document.querySelector(".generate-schedule");
const toTeacher = document.querySelector(".teacher-list");
const toCourse = document.querySelector(".course-list");
const toMaster = document.querySelector(".master-timetable");

toMaster.addEventListener('click', (e) => {
    window.location.href = "master.html"
})

toGenerate.addEventListener('click', (e) => {
    window.location.href = "generate.html";
})

toCourse.addEventListener('click', (e) => {
    window.location.href = "course.html";
})

toTeacher.addEventListener('click', (e) => {
    window.location.href = "teacher.html"
})