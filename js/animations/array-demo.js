// Array Formula Animation Demo
// 用于演示数组公式的动画效果

document.addEventListener('DOMContentLoaded', function() {
    // 数组公式输入演示
    function animateArrayInput() {
        const demos = document.querySelectorAll('.array-formula-demo');
        
        demos.forEach(demo => {
            Reveal.addEventListener('fragmentshown', function(event) {
                if (event.fragment.classList.contains('array-input-step')) {
                    // 显示按键动画
                    const keys = demo.querySelectorAll('.key-array');
                    keys.forEach((key, index) => {
                        setTimeout(() => {
                            key.style.transform = 'scale(0.9)';
                            setTimeout(() => {
                                key.style.transform = 'scale(1)';
                            }, 100);
                        }, index * 200);
                    });
                }
            });
        });
    }
    
    // SUMPRODUCT 计算演示
    function animateSumproduct() {
        const demos = document.querySelectorAll('.sumproduct-demo');
        
        demos.forEach(demo => {
            Reveal.addEventListener('fragmentshown', function(event) {
                if (event.fragment.classList.contains('calc-step')) {
                    const rows = demo.querySelectorAll('.calc-row');
                    rows.forEach((row, index) => {
                        setTimeout(() => {
                            row.style.backgroundColor = '#E3F2FD';
                            setTimeout(() => {
                                row.style.backgroundColor = '';
                            }, 500);
                        }, index * 300);
                    });
                }
            });
        });
    }
    
    animateArrayInput();
    animateSumproduct();
});
