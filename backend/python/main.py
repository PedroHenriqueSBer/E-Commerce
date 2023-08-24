from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def get():
    return {'message':'cu'}

app.run()