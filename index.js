
const input = document.getElementById('input');

const body = document.getElementsByTagName('body')[0];

const secondChild = body.children[4];

const div1 = secondChild.getElementsByTagName('div')[0];

const div2 = div1.getElementsByTagName('div')[0];

const div3 = div2.getElementsByTagName('div')[0];

const div4 = div3.getElementsByTagName('div')[0];

function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener() {
      input.addEventListener('click', clickAlert);
      div2.addEventListener('click', clickAlert);
  }

  addingEventListener();