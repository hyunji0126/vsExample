// 일정 데이터가 들어 있는 배열 선언
const todos = [{
    id: 1,
    text: '할 일 1',
    done: false //checkbox를 클립해서 할 일을 마쳤는지의 여부
  },
  {
    id: 2,
    text: '할 일 2',
    done: false //checkbox를 클립해서 할 일을 마쳤는지의 여부
  },
  {
    id: 3,
    text: '할 일 3',
    done: false //checkbox를 클립해서 할 일을 마쳤는지의 여부
  }
];

// 추가될 할 일 객체의 id를 생성해 주는 함수 정의.
const $addtodo = document.getElementById('todo-text');
const $addBtn = document.getElementById('add');
const $remove = document.querySelector('.remove');
const $modify = document.querySelector('.modify');
console.log($addtodo);

const $todolist = document.querySelector('.todo-list');
const $todoli = document.querySelector('.todo-list > li')
const $todolistitem = document.querySelectorAll('.todo-list-item');
console.log($todolist);

const $deepClone = $todoli.cloneNode(true); 
console.log($deepClone);
// console.log([...$deepClone]);
$addBtn.addEventListener('click',()=>{
 
    $todolist.innerHTML = '';
    $todolist.appendChild($deepClone);
   
  const $span = document.createElement('span');
  
  $span.setAttribute('span',$addtodo);
  $span.appendChild(document.createTextNode($addtodo));
  
  console.log($addtodo);
  
});

$remove.addEventListener('click',(e)=>{
  $chgspan.parentElement.remove(e.target);
});
// 화면에 표현할 .todo-list-item 노드를 생성하는 함수 정의
// li를 생성하고 label, div 2개 요소를 생성해서 추가하는 함수

// data-id값으로 배열을 탐색하여 일치하는 객체가 들어있는 인덱스 반환
// (할 일 완료 처리를 할 떄 필요한 향수)

// 수정 모드 진입 함수 따로
// 수정완료 이벤트 처리 함수 

// 메인 역할을 하는 즉시 실행 함수