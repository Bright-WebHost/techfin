from pathlib import Path
from pypdf import PdfReader
import re

path = Path('Securus Company Profile new2.pdf')
reader = PdfReader(str(path))
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
print(text)
print('---EMAILS---')
print('\n'.join(re.findall(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', text)))
