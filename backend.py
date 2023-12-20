from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    result = data['x'] + data['y']
    return jsonify({'sum': result})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=9999)
