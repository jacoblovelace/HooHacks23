from flask import Flask
from flask_cors import CORS
api = Flask(__name__)
CORS(api)
csp = {
    'default-src': ["'self'"],
    'style-src': ["'self'", 'https://maxcdn.bootstrapcdn.com']
}
@api.route('/profile')
def profile():
    response_body = {
    "name": "Test",
    "about":"This is a test of Flask and React connectivity"
    }
    return response_body

if __name__ == '__main__':
    api.run(port=3000)