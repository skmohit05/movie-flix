from flask import Flask, jsonify
from flask_cors import CORS
from data import movies_data

# Instantiate Flask class
app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/movie', methods=['GET'])
def get_movies():
    return jsonify(movies_data)


# Route to get movie by ID
@app.route('/movie/<int:movie_id>', methods=['GET'])
def get_movie_by_id(movie_id):
    try:
        # Safely find the movie with the matching ID
        movie = next(
            (
                movie for movie in movies_data["titles"]
                if isinstance(movie.get('summary'), dict) and movie['summary'].get('id') == movie_id
            ),
            None
        )
    except Exception as e:
        # Log any exception for debugging purposes
        print(f"Error finding movie: {e}")
        return jsonify({"error": "Invalid data format"}), 500

    # If movie not found, return a 404 error
    if not movie:
        return jsonify({"error": "Movie not found"}), 404

    # Return the movie data as JSON
    return jsonify(movie)



if __name__ == "__main__":
    app.run(debug=True)
