from flask import Flask, jsonify, request, render_template
import json

app = Flask(__name__)

with open('save_dava.json', 'r') as file:
    scores_data = json.load(file)

def parse_user_input(user_input):
    parts = user_input.split('_')
    if len(parts) == 2:
        return parts[0], parts[1]
    else:
        return None, None

def save_to_file(data):
    with open('save_data.json', 'w') as file:
        json.dump(data, file, indent=2)

@app.route('/scores', methods=['GET'])
def get_scores():
    return jsonify(scores_data)

@app.route('/add_score', methods=['GET'])
def add_score():
    user_input = request.args.get('user_input')

    if user_input:
        name, score = parse_user_input(user_input)

        if name and score:
            try:
                score = int(score)
                new_entry = {"name": name, "score": score}
                scores_data.append(new_entry)
                save_to_file(scores_data)
                return jsonify({"message": "Score added successfully"}), 201

            except ValueError:
                return jsonify({"error": "Invalid score. Score must be an integer."}), 400

    return jsonify({"error": "Invalid user input format. Use 'name_score'."}), 400

if __name__ == '__main__':
    app.run(debug=True)