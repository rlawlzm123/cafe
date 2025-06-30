document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.main-btn');
    if(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('예약 기능은 준비 중입니다!');
        });
    }
    // 향후 메뉴, 예약 등 기능 확장 가능
}); 