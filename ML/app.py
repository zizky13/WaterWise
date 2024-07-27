from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

#============== LOAD MODELS ==============#
with open('laso_model.pkl', 'rb') as f:
    regression_model = pickle.load(f)

with open('lang_model.pkl', 'rb') as f:
    language_model = pickle.load(f)

#============== PREDICTION FUNCTION ==============#
def predict_water_usage(duration, task_type):
    task = language_model.predict([task_type])[0]
    task_input = pd.DataFrame({
        'TaskType_Cleaning': [0],
        'TaskType_Cooking': [0],
        'TaskType_Gardening': [0],
        'TaskType_OutdoorCleaning': [0],
        'TaskType_PersonalHygiene': [0],
        'TaskType_Showering': [0]
    })

    if f"TaskType_{task}" in task_input.columns:
        task_input[f"TaskType_{task}"] = 1
    else:
        return "Invalid task type"
    
    duration_input = pd.DataFrame({
        'Duration': [duration]
    })
    final_input = pd.concat([duration_input, task_input], axis=1)
    return regression_model.predict(final_input)[0]

#============== ROUTES ==============#
@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/predict', methods=['POST'])
def predict():
    duration = request.json.get('duration')
    task_type = request.json.get('task_type')
    if not duration or not task_type:
        return jsonify({
            'error': 'Please provide duration and task_type'
        }), 400
    return jsonify({
        'water_usage': predict_water_usage(duration, task_type)
    })

if __name__ == '__main__':
    app.run(debug=True)