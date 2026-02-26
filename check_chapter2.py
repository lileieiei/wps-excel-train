with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 检查第2章内容是否存在
chapter2_start = content.find('<!-- 第2章：数组 -->')
chapter3_start = content.find('<!-- 第3章：快捷键 -->')

if chapter2_start > 0 and chapter3_start > 0:
    chapter2_content = content[chapter2_start:chapter3_start]
    
    # 检查第2章有多少个section
    section_count = chapter2_content.count('<section>')
    close_count = chapter2_content.count('</section>')
    
    print(f'第2章内容长度: {len(chapter2_content)} 字符')
    print(f'第2章section标签: {section_count} 开始, {close_count} 结束')
    print(f'\n第2章内容预览:')
    print(chapter2_content[:500])
else:
    print('找不到第2章或第3章标记')
