with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')

chapters = ['第1章', '第2章', '第3章', '第4章', '第5章']

for idx, chapter in enumerate(chapters):
    start_line = None
    end_line = None
    
    for i, line in enumerate(lines):
        if f'<!-- {chapter}' in line:
            start_line = i
        if start_line and idx + 1 < len(chapters):
            if f'<!-- {chapters[idx+1]}' in line:
                end_line = i
                break
    
    if start_line and end_line:
        section_opens = 0
        section_closes = 0
        
        for i in range(start_line, end_line):
            if '<section>' in lines[i]:
                section_opens += 1
            if '</section>' in lines[i]:
                section_closes += 1
        
        print(f'{chapter}: Line {start_line+1}-{end_line}, Opens: {section_opens}, Closes: {section_closes}, Balanced: {section_opens == section_closes}')
