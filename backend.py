from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json  # Assuming data is sent as JSON
    # Perform your calculation here using data['input']
    result = data['x'] + data['y']  # Example: Multiply the input by 2
    return jsonify({'sum': result})
