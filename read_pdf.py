import PyPDF2
with open("cloud_kitchen_demo_prd.pdf", "rb") as file:
    reader = PyPDF2.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    print(text)
