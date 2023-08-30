from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/blob', methods=['POST'])
def NewImage():
    if 'file' not in request.files:
        return 'Nenhum arquivo enviado', 400

    file = request.files['file']

    if file.filename == '':
        return 'Nome de arquivo vazio', 400

    # Salvar a imagem em algum diretório
    file.save('imgs' + file.filename)

    return 'Arquivo enviado com sucesso'

app.run()