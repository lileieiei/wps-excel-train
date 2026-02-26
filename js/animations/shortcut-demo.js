// Keyboard Shortcut Animation Demo
// 用于演示快捷键的动画效果

document.addEventListener('DOMContentLoaded', function() {
    // 快捷键按键动画
    function animateKeyPress() {
        const shortcuts = document.querySelectorAll('.shortcut-demo');
        
        shortcuts.forEach(shortcut => {
            Reveal.addEventListener('fragmentshown', function(event) {
                if (event.fragment.classList.contains('key-press')) {
                    const keys = shortcut.querySelectorAll('.key');
                    
                    // 依次高亮按键
                    keys.forEach((key, index) => {
                        setTimeout(() => {
                            key.style.backgroundColor = '#FF6B35';
                            key.style.color = 'white';
                            key.style.transform = 'translateY(2px)';
                            
                            setTimeout(() => {
                                key.style.backgroundColor = '';
                                key.style.color = '';
                                key.style.transform = '';
                            }, 300);
                        }, index * 150);
                    });
                }
            });
        });
    }
    
    // 操作效果演示
    function animateOperation() {
        const operations = document.querySelectorAll('.operation-demo');
        
        operations.forEach(op => {
            Reveal.addEventListener('fragmentshown', function(event) {
                if (event.fragment.classList.contains('show-effect')) {
                    const effect = op.querySelector('.effect');
                    if (effect) {
                        effect.style.opacity = '0';
                        effect.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            effect.style.transition = 'all 0.5s ease';
                            effect.style.opacity = '1';
                            effect.style.transform = 'translateY(0)';
                        }, 100);
                    }
                }
            });
        });
    }
    
    animateKeyPress();
    animateOperation();
});
