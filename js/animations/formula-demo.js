// Formula Animation Demo
// 用于演示公式计算过程的动画效果

document.addEventListener('DOMContentLoaded', function() {
    // 公式分步演示
    function animateFormulaDemo(containerId, steps) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let currentStep = 0;
        
        function showNextStep() {
            if (currentStep < steps.length) {
                const step = document.createElement('div');
                step.className = 'demo-step';
                step.innerHTML = steps[currentStep];
                container.appendChild(step);
                
                // Trigger animation
                setTimeout(() => {
                    step.classList.add('active');
                }, 100);
                
                currentStep++;
            }
        }
        
        // Auto advance on slide change
        Reveal.addEventListener('fragmentshown', function(event) {
            if (event.fragment.closest('#' + containerId)) {
                showNextStep();
            }
        });
    }
    
    // VLOOKUP 演示
    animateFormulaDemo('vlookup-demo', [
        'Step 1: 输入查找值 A2',
        'Step 2: 选择查找区域 B2:D10',
        'Step 3: 指定返回第3列',
        'Step 4: 设置精确匹配 FALSE',
        'Result: 返回匹配结果'
    ]);
    
    // IF 函数演示
    animateFormulaDemo('if-demo', [
        'Step 1: 输入条件 B2>=60',
        'Step 2: 设置真值 "及格"',
        'Step 3: 设置假值 "不及格"',
        'Result: 根据条件返回结果'
    ]);
});
