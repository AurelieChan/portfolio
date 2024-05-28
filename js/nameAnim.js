// ============================================================== Name Animation

function nameAnim() {

  const name = document.querySelector('.name');
  const strName = name.textContent;
  const splitName = strName.split('');

  // avoid visual duplicate by reseting name text with ''
  name.textContent ='';

  // wrap each letters into span tags
  for (let i=0; i < splitName.length; i++) {
    name.innerHTML += '<span>' + splitName[i] + '</span>';
  }

  // create an interval to display letters
  let char = 0;
  let timer = setInterval(onTick, 55);

  function onTick() {

    // add a class to each char
    const span = name.querySelectorAll('span')[char];

    span.classList.add('fade');
    char++;

    if (char === splitName.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
    char = 0;
  }

}

nameAnim()

export { nameAnim }

// code from developedbyed
// https://www.youtube.com/watch?v=GUEB9FogoP8&list=PLo6ZtpCp99phfmB3OubfxXvy4EVq6eK3Z&index=6
