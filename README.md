### videos
POST /videos: Use this to add a new video to the platform's database.
GET /videos: Use this to get a list of all videos available on the platform.
GET /videos/:id: Use this to get the details of a specific video using its ID.

### comments
POST /comments: Use this to add a new comment to a specific video.
GET /comments/:videoId: Use this to get all comments for a specific video using its ID.

## API Structures
### videos
POST /products: Use this to add a new product to the platform's database.
GET /products/:id: Use this to get the details of a specific product using its ID.

## How To Run
1. clone the repository
2. run `npm install`
3. configure the `.env` file, especially for the database URL using `DB_URL` variable
4. run `npm run dev`
5. access the available endpoints through `localhost:8000/v1` with your preferred API client
