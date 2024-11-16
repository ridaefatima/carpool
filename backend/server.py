from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import logging
import os
import sys

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('app.log')
    ]
)
logger = logging.getLogger(__name__)

@app.route('/', defaults={'filename': ''})

@app.route('/assets/<path:filename>')
def assets(filename):
    logger.debug(f"Serving asset: {filename}")
    return send_from_directory(assets_folder, filename)

@app.route('/api/news/<string:category>')
def get_news_by_query(category):
    try:
        return("Hi")
    except Exception as e:
        logger.error(f"An error occurred: {str(e)}", exc_info=True)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Add a test log message to verify logging is working
    logger.info("Starting Flask application...")
    
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)