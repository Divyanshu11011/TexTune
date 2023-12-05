from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
import openai


app = Flask(__name__)
CORS(app)

openai.api_key = ''


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api", methods=["POST"])
def api():
    user_message = request.json.get("message")
    prompt = (
        "When it comes to writing content, two factors are crucial, “perplexity” and “burstiness.” "
        "Perplexity measures the complexity of text. Separately, burstiness compares the variations of sentences. "
        "Humans tend to write with greater burstiness, for example, with some longer or complex sentences alongside shorter ones. "
        "AI sentences tend to be more uniform. Therefore, when writing the following content I am going to ask you to create, "
        "I need it to have a good amount of perplexity and burstiness. Using the concepts written above, rewrite this article with a high degree of perplexity and burstiness:"
    )

    prompt_with_user_input = f"{prompt} {user_message}"
    
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": user_message},
            {"role": "assistant", "content": prompt_with_user_input}
        ]
    )
    
    if completion.choices[0].message != None:
        return completion.choices[0].message
    else:
        return 'Failed to Generate response!'

    

if __name__ == '__main__':
    app.run(port=8080)  # Replace 8080 with your desired port number
