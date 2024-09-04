const allTaskDOMs = document.querySelectorAll('.task');


for (const taskDOM of allTaskDOMs) {
    const moreDOM = taskDOM.querySelector('.more');
    const moreActionsDOM = taskDOM.querySelector('.more-actions');
if(moreDOM) {
    moreDOM.addEventListener('click', () => {
console.log(moreActionsDOM.dataset.visible = true);})

}}

// const allMoreDOMs = document.querySelectorAll('.more');
// const allMoreActionsDOMs = document.querySelectorAll('.more-actions');

// for (let i=0; i<allMoreDOMs.length; i++) {
//     allMoreDOMs[i].addEventListener('click', () => {
//         allMoreActionsDOMs[i].dataset.visible = true
//     ;})


// }