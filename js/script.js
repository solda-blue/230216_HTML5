function handleOpenExtend() {
    document.getElementById("text-color").innerHTML = "자바스크립트를 배워봅시다!";
}

function handleReserved () {
    alert("예약이 완료되었습니다.")
}

function handleClick1 () {
    alert("알림")
}

function handleLotto () {

    const lottoContent = document.getElementById("lottoContent");
    
    const set = new Set();
    // for 문으로 작성하면 6번만 돌고 그냥 중복만 제거함
    // while로 길이가 6이 되기 전까지 돌린다
    while ( set.size < 6) {
        let num = Math.floor(Math.random() * 45)+ 1;
        set.add(" " + num);
    }

    // 정렬을 위해 다시 배열로 변경
    const lotto = Array.from(set);

    // 오름차순 정렬
    lotto.sort(function compare(a, b) {
        return a - b;
    });

    console.log(lotto);

    lottoContent.innerHTML = lotto;

}
    
function handleMain () {
    const main = document.getElementById("main13")
    const board = document.getElementById("board13")
    const notice = document.getElementById("notice13")
    main.style.display = "block"
    board.style.display = "none"
    notice.style.display = "none"
}

function handleBoard () {
    const main = document.getElementById("main13")
    const board = document.getElementById("board13")
    const notice = document.getElementById("notice13")

    main.style.display = "none"
    board.style.display = "block"
    notice.style.display = "none"
}

function handleNotice () {
    const main = document.getElementById("main13")
    const board = document.getElementById("board13")
    const notice = document.getElementById("notice13")
    main.style.display = "none"
    board.style.display = "none"
    notice.style.display = "block"
}